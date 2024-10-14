<template>

    <div class="py-2">

        <ul
            class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 ">
            <li class="me-2">
                <a href="#" @click.prevent="changeSection('A')" aria-current="page"
                    :class="['inline-block p-4 rounded-t-lg', currentSection === 'A' ? 'text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500' : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300']">Section
                    A</a>
            </li>
            <li class="me-2">
                <a href="#" @click.prevent="changeSection('B')"
                    :class="['inline-block p-4 rounded-t-lg', currentSection === 'B' ? 'text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500' : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300']">Section
                    B</a>
            </li>
            <li class="me-2">
                <a href="#" @click.prevent="changeSection('C')"
                    :class="['inline-block p-4 rounded-t-lg', currentSection === 'C' ? 'text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500' : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300']">Section
                    C</a>
            </li>
        </ul>

        <!-- render component kat sini -->
        <!-- <component :is="currentComponent" @change-section="changeSection" @form-submitted="saveDataToLocalStorage"></component> -->
        <component :is="currentComponent" :formData="formData" @next-section="handleNext" @submit-form="submitForm">
        </component>
    </div>

</template>
<script>
    import SectionAForm from "../../EFormComponent/PersonnelReqForm/SectionAForm.vue";
    import SectionBFrom from "../../EFormComponent/PersonnelReqForm/SectionBForm.vue";
    import SectionCForm from "../../EFormComponent/PersonnelReqForm/SectionCForm.vue"
    export default {
        components: {
            SectionAForm,
            SectionBFrom,
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
                switch (this.currentSection) {
                    case 'A':
                        return SectionAForm;
                    case 'B':
                        return SectionBFrom;
                    case 'C':
                        return SectionCForm;
                    default:
                        return SectionAForm;
                }
            }
        },
        methods: {
            changeSection(section) {
                this.currentSection = section;
            },
            handleNext(data, nextSection) {
                this.formData[`section${this.currentSection}`] = data; // Save current section data
                console.log(`Data from Section ${this.currentSection}:`, data);
                this.changeSection(nextSection); // Go to the next section
            },
            submitForm() {
                console.log('Submitted Data:', this.formData); // Log the full form data
                alert('Form submitted! Check the console for details.');
            }
        }
    }
</script>