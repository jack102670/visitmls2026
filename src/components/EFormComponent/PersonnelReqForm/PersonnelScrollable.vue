<template>
    <div class="py-2">
        <ul
            class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li class="me-2" v-for="section in ['A', 'B', 'C', 'D']" :key="section">
                <a href="#" @click.prevent="changeSection(section)" :class="[
                    'inline-block p-4 rounded-t-lg',
                    currentSection === section ? 'text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500' : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300',
                    section === 'D' && !sectionDEnabled ? 'text-gray-300 pointer-events-none' : ''
                ]">
                    Section {{ section }}
                </a>
            </li>
        </ul>

        <!-- render component kat sini -->
        <component :is="currentComponent" :formData="formData" @update-form="updateFormData" @next-section="handleNext"
            @previous-section="handlePrevious" @submit-form="submitForm"
            :uniqueKey="currentSection === 'D' ? formData.uniqueKey : null"></component>
    </div>
</template>

<script>
import SectionAForm from "./SectionAForm.vue";
import SectionBForm from "./SectionBForm.vue";
import SectionCForm from "./SectionCForm.vue";
import JobDescriptionForm from "../JobDescriptionForm/JobDescriptionForm.vue";
import { PostPersonnelRequsitionForm, PostUploadFile } from "@/api/EFormApi";
import { store } from '@/views/store.js';
import Swal from "sweetalert2";

export default {
    components: {
        SectionAForm,
        SectionBForm,
        SectionCForm,
        JobDescriptionForm
    },
    data() {
        return {
            currentSection: 'A',
            formData: {
                sectionA: {},
                sectionB: {},
                sectionC: {},
                fileUpload: [],
                uniqueKey: null,
            },
            sectionDEnabled: false,
            // enabledSections: ['A'],


        }
    },
    computed: {
        currentComponent() {
            const components = {
                'A': SectionAForm,
                'B': SectionBForm,
                'C': SectionCForm,
                'D': JobDescriptionForm
            };
            return components[this.currentSection];
        }
    },
    methods: {
        generateUniqueKey() {
            return `key-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
            // return crypto.randomUUID();

        },
        changeSection(section) {
            if (section === 'D' && !this.sectionDEnabled) return;
            this.currentSection = section;
        },
        // isSectionEnabled(section) {
        //     return this.enabledSections.includes(section);
        // },
        // changeSection(section) {
        //     if (!this.isSectionEnabled(section)) return;
        //     this.currentSection = section;
        // },
        updateFormData(formData, section) {
            if (section === 'A') {
                this.formData = {
                    ...this.formData,
                    sectionA: {
                        ...formData,
                        fileUpload: undefined
                    },
                    fileUpload: formData.fileUpload || []
                };
            } else {
                this.formData[`section${section}`] = formData;
            }

            console.log('Updated form data in PersonnelScrollable:', this.formData);
            console.log('Uploaded files:', this.formData.fileUpload);
        },
        handleNext(data) {
            const currentIndex = ['A', 'B', 'C', 'D'].indexOf(this.currentSection);
            if (currentIndex < 3) {
                this.updateFormData(data, this.currentSection);
                this.changeSection(['A', 'B', 'C', 'D'][currentIndex + 1]);
            }
        },
        handlePrevious() {
            const currentIndex = ['A', 'B', 'C', 'D'].indexOf(this.currentSection);
            if (currentIndex > 0) {
                this.changeSection(['A', 'B', 'C', 'D'][currentIndex - 1]);
            }
        },
        async submitForm(data) {
            if (!this.formData.uniqueKey) {
                this.formData.uniqueKey = this.generateUniqueKey();
                localStorage.setItem('uniqueKey', this.formData.uniqueKey);
            }

            this.updateFormData(data, this.currentSection);

            console.log('Checking ageLimit and disciplineSpecification in sectionB:');
            console.log('ageLimit:', this.formData.sectionB.ageLimit);
            console.log('disciplineSpecification:', this.formData.sectionB.disciplineSpecification);

            const finalPersonnelData = {
                ...this.formData.sectionA,
                ...this.formData.sectionB,
                ...this.formData.sectionC,
                uniqueKey: this.formData.uniqueKey,

                basicSalary: Number(this.formData.sectionA.basicSalary) || 0,
                numberPersonnel: Number(this.formData.sectionA.numberPersonnel) || 0,
                yearsRequired: Number(this.formData.sectionC.yearsRequired) || 0,

                ageLimit: Array.isArray(this.formData.sectionB.ageLimit) ? this.formData.sectionB.ageLimit.join('-') : '',
                disciplineSpecification: Array.isArray(this.formData.sectionB.disciplineSpecification) ? this.formData.sectionB.disciplineSpecification.join(',') : '',
            };

            if (this.currentSection === 'C') {
                this.sectionDEnabled = true;
            }

            console.log('Final Personnel Data:', finalPersonnelData, finalPersonnelData.ageLimit, finalPersonnelData.disciplineSpecification);

            try {
                if (!finalPersonnelData) {
                    throw new Error('No personnel data found in the form.');
                }
                const response = await PostPersonnelRequsitionForm(finalPersonnelData);
                console.log("Form submission with files result:", response);

                if (!this.formData.fileUpload || this.formData.fileUpload.length === 0) {
                    throw new Error('No files to upload.');
                }
                const files = this.formData.fileUpload;
                const userId = store.getSession().userDetails.userId;
                const uniqueKey = this.formData.uniqueKey;

                const UploadFileResponse = await PostUploadFile(files, userId, uniqueKey);
                console.log('Files uploaded successfully:', UploadFileResponse);



                if (response?.status_code === 200) {
                    Swal.fire({
                        title: "Submitted!",
                        text: "Your application has been submitted.",
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "OK",
                    }).then((result) => {
                        if (result.isConfirmed) {
                            // this.$emit("next-section", this.form);
                            this.currentSection = 'D';
                        }
                    });
                } else {
                    throw new Error(`Submission failed: ${response?.statusText || 'Unknown error.'}`);
                }
            } catch (error) {
                console.error('Error submitting the personnel data:', error.message);
                Swal.fire({
                    title: "Submission Failed",
                    text: `Error: ${error.response?.data?.message || error.message || 'Unknown error'}`,
                    icon: "error",
                    confirmButtonColor: "#d33",
                    confirmButtonText: "Retry",
                });

                if (error.response && error.response.data && error.response.data.errors) {
                    console.error('Validation errors:', error.response.data.errors);
                }
                Swal.fire({
                    title: "Submission Failed",
                    text: `Error: ${error.response?.data?.message || error.message}`,
                    icon: "error",
                    confirmButtonColor: "#d33",
                    confirmButtonText: "Retry",
                });
            }
        }


    }

}
</script>