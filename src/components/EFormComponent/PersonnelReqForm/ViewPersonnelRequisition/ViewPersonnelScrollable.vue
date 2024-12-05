<template>
    <div class="py-2">
        <ul
            class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li class="me-2" v-for="section in ['A', 'B', 'C', 'D']" :key="section">
                <a href="#" @click.prevent="changeSection(section)" :class="[
                    'inline-block p-4 rounded-t-lg',
                    currentSection === section ? 'text-white bg-primary dark:bg-gray-800 dark:text-blue-500' : 'hover:text-white bg-[#ADD8E6] text-white hover:bg-[#2d2169] dark:hover:bg-gray-800 dark:hover:text-gray-300',
                ]">
                    Section {{ section }}
                </a>
            </li>
        </ul>
        <component :is="currentComponent" v-bind="$attrs" :formData="formData" @update-form="updateFormData" @next-section="handleNext"
            @previous-section="handlePrevious"></component>
    </div>
</template>

<script>
import SectionAForm from "../ViewPersonnelRequisition/ViewSectionAForm.vue";
import SectionBForm from "../ViewPersonnelRequisition/ViewSectionBForm.vue";
import SectionCForm from "../ViewPersonnelRequisition/ViewSectionCForm.vue";
import JobDescriptionForm from "../ViewPersonnelRequisition/ViewJobDescription.vue";
import { update } from "lodash";

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
    methods: {
        changeSection(section){
            this.currentSection = section;
        },
        updateFormData(data) {
            this.formData = { ...this.formData, ...data };
        },
        handleNext(data){
            const sections = ['A', 'B', 'C', 'D'];
            const currentIndex = sections.indexOf(this.currentSection);
            if (currentIndex < sections.length - 1) {
                this.currentSection = sections[currentIndex + 1];
            }
        },
        handlePrevious(){
            const sections = ['A', 'B', 'C', 'D'];
            const currentIndex = sections.indexOf(this.currentSection);
            if (currentIndex > 0) {
                this.currentSection = sections[currentIndex - 1];
            }
        }
    }


}
</script>