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
                        <input type="number" id="minAge" v-model="minAge" readonly
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Input Min Age" required />
                    </div>
                    <div>
                        <label for="maxAge" class="block mb-2 text-sm font-medium text-primary dark:text-white">Max
                            Age:</label>
                        <input type="number" id="maxAge" v-model="maxAge" readonly
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Input Max Age" required />
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
                        <div class="flex items-center space-x-2">
                            <input id="yes-computerLiteracyRequired" type="radio" value="yes"
                                v-model="form.computerLiteracyRequired" readonly @click.prevent
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="yes-computerLiteracyRequired"
                                class="text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                        </div>
                        <div class="flex items-center space-x-2">
                            <input id="no-computerLiteracyRequired" type="radio" value="no"
                                v-model="form.computerLiteracyRequired" readonly @click.prevent
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="no-computerLiteracyRequired"
                                class="text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                        </div>
                    </div>
                </div>
                <div class="flex-1" v-if="form.computerLiteracyRequired === 'yes'">
                    <label for="computerSpecification"
                        class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                        If Yes, Please specify
                    </label>
                    <input type="text" id="computerSpecification" v-model="form.computerSpecification" readonly
                        class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Specify Requirement" />
                </div>
            </div>
            <div class="flex flex-col sm:flex-row sm:items-start sm:space-x-4 w-full">
                <div class="flex-1">
                    <label for="expRequired" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                        Experience Required?: <span class="text-red-500">*</span>
                    </label>
                    <div class="flex space-x-4 items-center mt-2">
                        <div class="flex items-center space-x-2">
                            <input id="yes-expRequired" type="radio" value="yes" v-model="form.expRequired" readonly
                                @click.prevent
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="yes-expRequired"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                        </div>
                        <div class="flex items-center space-x-2">
                            <input id="no-expRequired" type="radio" value="no" v-model="form.expRequired" readonly
                                @click.prevent
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="no-expRequired"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                        </div>
                    </div>
                </div>
                <div class="flex-1 flex-col space-x-[1px]" v-if="form.expRequired === 'yes'">
                    <label for="yearsRequired"
                        class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                        If Yes, No Of Years</label>
                    <input type="text" id="yearsRequired" v-model="form.yearsRequired"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Specify Years" />
                </div>
            </div>
            <div>
                <label for="ownTransportRequired" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    Posses Own Transport?: <span class="text-red-500">*</span></label>
                <div class="flex space-x-4 items-center mb-4">
                    <input id="yes-ownTransportRequired" type="radio" value="yes" v-model="form.ownTransportRequired"
                        readonly @click.prevent
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="yes-ownTransportRequired"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>

                    <input id="no-ownTransportRequired" type="radio" value="no" v-model="form.ownTransportRequired"
                        readonly @click.prevent
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="no-ownTransportRequired"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                </div>
            </div>
            <div>
                <label for="qualificationRequired"
                    class="block mb-2 text-sm font-medium text-primary dark:text-white">Qualification Required?: <span
                        class="text-red-500">*</span></label>
                <div class="flex space-x-4 items-center mb-4">
                    <input id="spm-qualificationRequired" type="radio" value="spm" v-model="form.qualificationRequired"
                        readonly @click.prevent
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="spm-qualificationRequired"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">SPM/SPVM/STPM</label>

                    <input id="diploma-qualificationRequired" type="radio" value="diploma" readonly @click.prevent
                        v-model="form.qualificationRequired"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="diploma-qualificationRequired"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">DIPLOMA/DEGREE</label>
                </div>
            </div>
            <div>
                <label for="jobCompetency" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    List of functional / technical job required:
                </label>

                <div class="space-y-2">
                    <div class="flex flex-wrap gap-2 mb-2">
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
                <label for="disciplineSpecification"
                    class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                    Please specify discipline</label>
                <input type="text" id="disciplineSpecification" v-model="form.disciplineSpecification"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Specify discipline" readonly />
            </div>
            <div>
                <label for="personalCompetency" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    List of Personnal Competencies required:</label>
                <div class="space-y-2">
                    <div class="flex flex-wrap gap-2 mb-2">
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
            <textarea id="others" rows="4" v-model="form.others"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your comments here" readonly></textarea>
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
        async getPersonnelRequisitonForm(refNo) {
            try {
                const data = await getPersonnelRequisitonForm(refNo);
                if (data) {
                    // console.log("Raw data from API:", data);
                    // console.log("Section B form data:", data.form);
                //     console.log("Complete data structure:", {
                //         ...data.form,
                //         ...data,
                //     }
                // );

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