<template>
    <div>
        <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li class="me-2">
                <a
                    href="#"
                    @click.prevent="changeSection('A')"
                    :class="[
                        'inline-block p-4 rounded-t-lg text-white',
                        currentSection === 'A' ? 'bg-primary text-white dark:bg-gray-800' : 'bg-[#7293B3] hover:bg-[#2d2169] hover:text-white dark:hover:bg-gray-800'
                    ]">
                    Section A
                </a>
            </li>
            <li class="me-2">
                <a
                    href="#"
                    @click.prevent="changeSection('B')"
                    :class="[
                        'inline-block p-4 rounded-t-lg text-white',
                        currentSection === 'B' ? 'bg-primary text-white dark:bg-gray-800' : 'bg-[#7293B3] hover:bg-[#2d2169] hover:text-white dark:hover:bg-gray-800'
                    ]">
                    Section B
                </a>
            </li>
        </ul>
        <component :is="currentComponent" @change-section="changeSection"></component>
    </div>
</template>

<script>
import SectionAEvaluation from './ViewSectionAEvaluation.vue';
import SectionBEvaluation from './ViewSectionBEvaluation.vue';

export default {
    components: {
        SectionAEvaluation,
        SectionBEvaluation,
    },
    data() {
        return {
            currentSection: 'A', 
        };
    },
    computed: {
        currentComponent() {
            switch (this.currentSection) {
                case 'A':
                    return SectionAEvaluation;
                case 'B':
                    return SectionBEvaluation;
                default:
                    return SectionAEvaluation; 
            }
        },
    },
    methods: {
        changeSection(section) {
            this.currentSection = section;
        },
    },
};
</script>
