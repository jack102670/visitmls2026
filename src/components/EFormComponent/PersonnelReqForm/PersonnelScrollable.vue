<template>
    <div class="py-2">
        <ul
            class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li class="me-2" v-for="section in ['A', 'B', 'C']" :key="section">
                <a href="#" @click.prevent="changeSection(section)"
                    :class="['inline-block p-4 rounded-t-lg', currentSection === section ? 'text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500' : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300']">
                    Section {{ section }}
                </a>
            </li>
        </ul>

        <!-- render component kat sini -->
        <component :is="currentComponent" :formData="formData" @update-form="updateFormData" @next-section="handleNext"
            @previous-section="handlePrevious" @submit-form="submitForm"></component>
    </div>
</template>

<script>
    import SectionAForm from "./SectionAForm.vue";
    import SectionBForm from "./SectionBForm.vue";
    import SectionCForm from "./SectionCForm.vue";
    export default {
        components: {
            SectionAForm,
            SectionBForm,
            SectionCForm
        },
        data() {
            return {
                currentSection: 'A',
                formData: {
                    sectionA: {},
                    sectionB: {},
                    sectionC: {},
                }
            }
        },
        computed: {
            currentComponent() {
                const components = {
                    'A': SectionAForm,
                    'B': SectionBForm,
                    'C': SectionCForm
                };
                return components[this.currentSection];
            }
        },
        methods: {
            changeSection(section) {
                this.currentSection = section;
            },
            updateFormData(sectionData, section) {
                this.formData[`section${section}`] = sectionData;
            },
            handleNext(data) {
                const currentIndex = ['A', 'B', 'C'].indexOf(this.currentSection);
                if (currentIndex < 2) {
                    this.updateFormData(data, this.currentSection);
                    this.changeSection(['A', 'B', 'C'][currentIndex + 1]);
                }
            },
            handlePrevious() {
                const currentIndex = ['A', 'B', 'C'].indexOf(this.currentSection);
                if (currentIndex > 0) {
                    this.changeSection(['A', 'B', 'C'][currentIndex - 1]);
                }
            },
            submitForm(data) {
                this.updateFormData(data, this.currentSection);
                console.log('Form submitted with data:', this.formData.sectionA, this.formData.sectionB, this.formData.sectionC);
                
            }
        }
    }
</script>