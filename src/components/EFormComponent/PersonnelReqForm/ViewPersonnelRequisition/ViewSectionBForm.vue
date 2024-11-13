<template>
    <div class="space-y-4 mt-2 border-[1px] rounded-md px-4 py-2">
        <h1 class="font-bold text-md py-2">B. Person Specification</h1>
        <label for="ageLimit" class="block mb-2 text-sm font-medium text-primary dark:text-white">Age Limit: <span
                class="text-red-500">*</span></label>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="">
                <div class="grid md:grid-cols-2 md:gap-4">
                    <div>
                        <label for="minAge" class="block mb-2 text-sm font-medium text-primary dark:text-white">Min
                            Age:</label>
                        <div>{{ minAge }}</div>
                    </div>
                    <div>
                        <label for="maxAge" class="block mb-2 text-sm font-medium text-primary dark:text-white">Max
                            Age:</label>
                        <div>{{ maxAge }}</div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col sm:flex-row sm:items-start sm:space-x-4 w-full">
                <div class="flex-1">
                    <label for="computerLiteracyRequired"
                        class="block mb-2 text-sm font-medium text-primary dark:text-white">
                        Computer literacy: <span class="text-red-500">*</span>
                    </label>
                    <div class="flex space-x-4 items-center mt-2">
                        <div>
                            {{ form.computerLiteracyRequired === 'yes' ? 'Yes' : 'No' }}
                        </div>
                    </div>
                </div>
                <div class="flex-1" v-if="form.computerLiteracyRequired === 'yes'">
                    <label for="computerSpecification"
                        class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                        If Yes, Please specify
                    </label>
                    <div>{{ form.computerSpecification }}</div>
                </div>
            </div>
            <div class="flex flex-col sm:flex-row sm:items-start sm:space-x-4 w-full">
                <div class="flex-1">
                    <label for="expRequired" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                        Experience Required?: <span class="text-red-500">*</span>
                    </label>
                    <div class="flex space-x-4 items-center mt-2">
                        {{
                            form.expRequired === 'yes' ? 'Yes' : 'No'
                        }}
                    </div>
                </div>
                <div class="flex-1 flex-col space-x-[1px]" v-if="form.expRequired === 'yes'">
                    <label for="yearsRequired"
                        class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                        If Yes, No Of Years</label>
                    <div>{{ form.yearsRequired }}</div>
                </div>
            </div>
            <div>
                <label for="ownTransportRequired" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    Posses Own Transport?: <span class="text-red-500">*</span></label>
                <div>{{
                    form.ownTransportRequired === 'yes' ? 'Yes' : 'No'
                    }}</div>
            </div>
            <div>
                <label for="qualificationRequired"
                    class="block mb-2 text-sm font-medium text-primary dark:text-white">Qualification Required?: <span
                        class="text-red-500">*</span></label>
                <div>
                    {{ form.qualificationRequired === 'spm' ? 'SPM / SPVM / STPM' : 'DIPLOMA / DEGREE' }}
                </div>
            </div>
            <div>
                <label for="jobCompetency" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    List of functional / technical job required:
                </label>

                <div class="space-y-2">
                    <div
                        v-if="!form.jobCompetency || form.jobCompetency.length === 0 || form.jobCompetency.every(item => item.trim() === '')">
                        <span class="block text-gray-500">-</span>
                    </div>
                    <div v-else class="flex flex-wrap gap-2 mb-2">
                        <div v-for="(field, index) in form.jobCompetency" :key="index" class="flex items-center">
                            <span
                                class="block bg-gray-100 text-gray-800 px-4 rounded-lg py-2 text-sm dark:bg-gray-700 dark:text-white">
                                <div class="flex justify-between items-center space-x-2">
                                    {{ field }}
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
        <label for="disciplineSpecification" class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
            Please specify discipline:
        </label>
        <div class="space-y-2">
            <div v-if="!form.disciplineSpecification || form.disciplineSpecification.trim() === ''">
                <span class="block text-gray-500">-</span>
            </div>
            <div v-else class="flex flex-wrap gap-2 mb-2">
                <div v-for="(discipline, index) in splitDiscipline(form.disciplineSpecification)" :key="index" class="flex items-center">
                    <span class="block bg-gray-100 text-gray-800 px-4 rounded-lg py-2 text-sm dark:bg-gray-700 dark:text-white">
                        {{ discipline }}
                    </span>
                </div>
            </div>
        </div>
    </div>
            <div>
                <label for="personalCompetency" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    List of Personal Competencies required:
                </label>
                <div class="space-y-2">
                    <div
                        v-if="!form.personalCompetency || form.personalCompetency.length === 0 || form.personalCompetency.every(item => item.trim() === '')">
                        <span class="block text-gray-500">-</span>
                    </div>
                    <div v-else class="flex flex-wrap gap-2 mb-2">
                        <div v-for="(field, index) in form.personalCompetency" :key="index" class="flex items-center">
                            <span
                                class="block bg-gray-100 text-gray-800 px-4 rounded-lg py-2 text-sm dark:bg-gray-700 dark:text-white flex justify-between items-center w-full">
                                <span class="flex-1">{{ field }}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1">
            <label for="others" class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                Others (Please specify)</label>
            <div>{{ form.others }}</div>
        </div>
    </div>
</template>
<script>
import { getPersonnelRequisitonForm } from '@/api/EFormApi';
import {
    reactive
} from 'vue';
export default {
    props: ["formData"],
    data() {
        return {
            form: this.formData.sectionB || {
                ageLimit: [null, null], //minAge and MaxAge
                computerLiteracyRequired: "",
                expRequired: "",
                yearsRequired: 0,
                qualificationRequired: "",
                computerSpecification: "",
                ownTransportRequired: "",
                jobCompetency: [],
                disciplineSpecification: "",
                personalCompetency: [],
                others: "",
            },
            minAge: "",
            maxAge: "",
            validationErrors: {
                yearsRequired: false,
            },
            newField: "",
            showInputField: false,
            newPersonnelField: "",
            showInputPersonnelField: false,
        };
    },
    mounted() {
        const refNo = this.$route.params.refNo;
        this.getPersonnelRequisitonForm(refNo);
    },
    methods: {
        splitDiscipline(disciplineString) {
            return disciplineString.split(',').map(discipline => discipline.trim());
        },
        async getPersonnelRequisitonForm(refNo) {
            try {
                const data = await getPersonnelRequisitonForm(refNo);
                if (data) {
                    this.form = {
                        ...data.form,
                        ...data,
                    };
                    if (this.form.ageLimit) {
                        const [min, max] = this.form.ageLimit.split('-');
                        this.minAge = min;
                        this.maxAge = max;
                    }
                    console.log("Min Age:", this.minAge);
                    console.log("Max Age:", this.maxAge);
                }
            } catch (error) {
                console.error("Error loading Personnel requisition section B:", error);
                throw error;
            }
        }
    }
};
</script>