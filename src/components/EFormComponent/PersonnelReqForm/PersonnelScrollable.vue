<template>
    <div class="py-2">
        <ul
            class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li class="me-2" v-for="section in ['A', 'B', 'C', 'D']" :key="section">
                <a href="#" @click.prevent="changeSection(section)" :class="[
                    'inline-block p-4 rounded-t-lg',
                    // Active section
                    currentSection === section ?
                        'text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500' :
                        'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300',
                    // Disabled section
                    !enabledSections.includes(section) ?
                        'text-gray-300 cursor-not-allowed opacity-50' :
                        'cursor-pointer'
                ]" :title="!enabledSections.includes(section) ? 'Complete previous sections first' : ''">
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
            enabledSections: ['A'],


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
            if (!this.enabledSections.includes(section)) return;
            this.currentSection = section;
        },
        isSectionEnabled(section) {
            return this.enabledSections.includes(section);
        },

        canMoveToSection(section) {
            const sections = ['A', 'B', 'C', 'D'];
            const targetIndex = sections.indexOf(section);
            const currentIndex = sections.indexOf(this.currentSection);
            return this.enabledSections.includes(section) && targetIndex <= currentIndex + 1;
        },
        updateFormData(formData, section) {
            if (section === 'A') {
                this.formData = {
                    ...this.formData,
                    sectionA: formData,
                };
                this.formData.fileUpload = formData.fileUpload || [];
            } else {
                this.formData[`section${section}`] = formData;
            }
        },
        handleNext(data) {
            const sections = ['A', 'B', 'C', 'D'];
            const currentIndex = sections.indexOf(this.currentSection);

            if (currentIndex < sections.length - 1) {
                this.updateFormData(data, this.currentSection);
                const nextSection = sections[currentIndex + 1];
                if (!this.enabledSections.includes(nextSection)) {
                    this.enabledSections.push(nextSection);
                }
                this.currentSection = nextSection;
            }
        },
        handlePrevious() {
            const sections = ['A', 'B', 'C', 'D'];
            const currentIndex = sections.indexOf(this.currentSection);
            if (currentIndex > 0) {
                this.currentSection = sections[currentIndex - 1];
            }
        },
        async submitForm(data) {
    try {
        if (!this.formData.uniqueKey) {
            this.formData.uniqueKey = this.generateUniqueKey();
            localStorage.setItem('uniqueKey', this.formData.uniqueKey);
        }

        this.updateFormData(data, this.currentSection);

        const finalPersonnelData = {
            ...this.formData.sectionA,
            ...this.formData.sectionB,
            ...this.formData.sectionC,
            uniqueKey: this.formData.uniqueKey,
            basicSalary: Number(this.formData.sectionA.basicSalary) || 0,
            numberPersonnel: Number(this.formData.sectionA.numberPersonnel) || 0,
            ageLimit: Array.isArray(this.formData.sectionB.ageLimit) ? this.formData.sectionB.ageLimit.join('-') : '',
            disciplineSpecification: Array.isArray(this.formData.sectionB.disciplineSpecification) ? this.formData.sectionB.disciplineSpecification.join(',') : '',
        };

        // console.log('Submitting Personnel Data:', finalPersonnelData);
        
        const response = await PostPersonnelRequsitionForm(finalPersonnelData);
        // console.log('API Response:', response);

        if (!response) {
            throw new Error('No response received from the API');
        }
        if (response?.status_code === 200) {
            if (this.formData.fileUpload && this.formData.fileUpload.length > 0) {
                const files = this.formData.fileUpload;
                const userId = store.getSession().userDetails.userId;
                const uniqueKey = this.formData.uniqueKey;

                // console.log('Uploading files:', {
                //     fileCount: files.length,
                //     userId,
                //     uniqueKey
                // });

                const UploadFileResponse = await PostUploadFile(files, userId, uniqueKey);
                console.log('File upload response:', UploadFileResponse);
            }

            Swal.fire({
                title: "Submitted!",
                text: "Your application has been submitted.",
                icon: "success",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.currentSection = 'D';
                }
            });
        } else {
            throw new Error(`API returned status code ${response?.status_code}: ${response?.message || 'Unknown error'}`);
        }
    } catch (error) {
        console.error('Form submission error details:', {
            message: error.message,
            response: error.response?.data,
            status: error.response?.status,
            stack: error.stack
        });

        let errorMessage = 'An error occurred while submitting the form.';
        
        if (error.response?.data?.message) {
            errorMessage = error.response.data.message;
        } else if (error.response?.data?.errors) {
            errorMessage = Object.values(error.response.data.errors).join('\n');
        } else if (error.message) {
            errorMessage = error.message;
        }

        Swal.fire({
            title: "Submission Failed",
            text: errorMessage,
            icon: "error",
            confirmButtonColor: "#d33",
            confirmButtonText: "Retry",
        });
    }
}


    }

}
</script>