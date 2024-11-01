<template>
    <div class="py-2">
        <ul
            class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li class="me-2" v-for="section in ['A', 'B', 'C', 'D']" :key="section">
                <a href="#" @click.prevent="changeSection(section)" :class="[
                    'inline-block p-4 rounded-t-lg',
                    currentSection === section ? 'text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500' : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300',
                ]">
                    Section {{ section }}
                </a>
            </li>
        </ul>
        <component :is="currentComponent" :formData="formData" @update-form="updateFormData" @next-section="handleNext"
            @previous-section="handlePrevious" @submit-form="submitForm"
            @form-submission-result="handleFormSubmissionResult"
            :uniqueKey="currentSection === 'D' ? formData.uniqueKey : null"></component>
    </div>
</template>

<script>
import SectionAForm from "../ViewPersonnelRequisition/ViewSectionAForm.vue";
import SectionBForm from "../ViewPersonnelRequisition/ViewSectionBForm.vue";
import SectionCForm from "../ViewPersonnelRequisition/ViewSectionCForm.vue";
import JobDescriptionForm from "../ViewPersonnelRequisition/ViewJobDescription.vue";

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
                sectionD: {},
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


}
</script>