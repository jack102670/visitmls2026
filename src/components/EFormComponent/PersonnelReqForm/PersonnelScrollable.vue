<template>
    <div class="py-2">
        <ul
            class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li class="me-2" v-for="section in ['A', 'B', 'C', 'D']" :key="section">
                <a href="#"
                   @click.prevent="changeSection(section)"
                   :class="[
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
            :uniqueKey="currentSection === 'D' ? formData.uniqueKey : null"
            ></component>
    </div>
</template>

<script>
    import SectionAForm from "./SectionAForm.vue";
    import SectionBForm from "./SectionBForm.vue";
    import SectionCForm from "./SectionCForm.vue";
    import JobDescriptionForm from "../JobDescriptionForm/JobDescriptionForm.vue";
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


            }
        },
        computed: {
            currentComponent() {
                const components = {
                    'A': SectionAForm,
                    'B': SectionBForm,
                    'C': SectionCForm,
                    'D' : JobDescriptionForm    
                };
                return components[this.currentSection];
            }
        },
        methods: {
            generateUniqueKey(){
                return `key-${Date.now()}-${Math.floor(Math.random() * 10000)}`;

            },
            changeSection(section) {
                if (section === 'D' && !this.sectionDEnabled) return;
                this.currentSection = section;
            },
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
            submitForm(data) {
                if (!this.formData.uniqueKey){
                    this.formData.uniqueKey = this.generateUniqueKey();
                    localStorage.setItem('uniqueKey', this.formData.uniqueKey);
                }

                this.updateFormData(data, this.currentSection);

                if (this.currentSection === 'C') {
                this.sectionDEnabled = true;
            }

            console.log('Form submitted with data:', this.formData.sectionA, this.formData.sectionB, this.formData.sectionC, 'Unique Key:', this.formData.uniqueKey);
                
            }
        }
    }
</script>