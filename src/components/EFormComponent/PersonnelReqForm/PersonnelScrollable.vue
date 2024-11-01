<template>
    <div class="py-2">
        <!-- <ul
            class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li class="me-2" v-for="section in ['A', 'B', 'C', 'D']" :key="section">
                <a
                    href="#"
                    @click.prevent="changeSection(section)"
                    :class="[
                        'inline-block p-4 rounded-t-lg',
                        currentSection === section
                            ? 'text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500'
                            : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300',
                        !isSectionEnabled(section) ? 'text-gray-300 pointer-events-none' : ''
                    ]"
                >
                    Section {{ section }}
                </a>
            </li>
        </ul> -->
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
            @form-submission-result="handleFormSubmissionResult"
            :uniqueKey="currentSection === 'D' ? formData.uniqueKey : null"></component>
    </div>
</template>

<script>
import SectionAForm from "./SectionAForm.vue";
import SectionBForm from "./SectionBForm.vue";
import SectionCForm from "./SectionCForm.vue";
import JobDescriptionForm from "../JobDescriptionForm/JobDescriptionForm.vue";
import { PostPersonnelRequsitionForm } from "@/api/EFormApi";
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
        updateFormData(sectionData, section) {
            this.formData[`section${section}`] = sectionData;
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

            const finalPersonnelData = {
                ...this.formData.sectionA,
                ...this.formData.sectionB,
                ...this.formData.sectionC,
                uniqueKey: this.formData.uniqueKey
            };

            if (this.currentSection === 'C') {
                this.sectionDEnabled = true;
            }

            console.log('Final Personnel Data:', finalPersonnelData);

            try {
                if (!finalPersonnelData) {
                    throw new Error('No personnel data found in the form.');
                }

                // Await API call for submission
                const response = await PostPersonnelRequsitionForm(finalPersonnelData);

                // Log full response for debugging purposes
                console.log("Form submission result:", response);

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


                // Display a more informative error message if available
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