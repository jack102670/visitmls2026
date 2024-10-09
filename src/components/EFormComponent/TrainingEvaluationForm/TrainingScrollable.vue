<template>
    
    <div class="">
    <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li class="me-2">
            <a href="#" 
            @click.prevent="changeSection('A')"
            aria-current="page"  :class="['inline-block p-4 rounded-t-lg', currentSection === 'A' ? 'text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500' : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300']">Section A</a>
        </li>
        <li class="me-2">
            <a href="#"
            @click.prevent="changeSection('B')"
            :class="['inline-block p-4 rounded-t-lg', currentSection === 'B' ? 'text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500' : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300']">Section B</a>
        </li>
    </ul>
    
    <!-- render component kat sini -->
    <component :is="currentComponent" @change-section="changeSection"></component>
    </div>
    
    </template>
    <script>
    
import SectionAEvaluation from './SectionAEvaluation.vue';
import SectionBEvaluation from './SectionBEvaluation.vue';

    
    export default {
    
        components: {
            SectionAEvaluation,
            SectionBEvaluation,
    
        },
        data () {
            return {
                currentSection: 'A',
            }
        },
        computed: {
            currentComponent(){
            switch (this.currentSection) {
                case 'A':
                    return SectionAEvaluation;
                case 'B':
                    return SectionBEvaluation;
                default: 
                    return SectionAEvaluation;
    
            }
        }
    },
    
        methods: {
            changeSection(section) {
                this.currentSection = section;
            }
        }
    
    }
    </script>
    