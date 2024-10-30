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
                        <input type="number" id="minAge" v-model="minAge"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Input Min Age" required />
                    </div>
                    <div>
                        <label for="maxAge" class="block mb-2 text-sm font-medium text-primary dark:text-white">Max
                            Age:</label>
                        <input type="number" id="maxAge" v-model="maxAge"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Input Max Age" required />
                    </div>
                </div>
                <span v-if="validationErrors.ageLimit" class="text-red-500 text-sm">Please fill in this field</span>
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
                                v-model="form.computerLiteracyRequired"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="yes-computerLiteracyRequired"
                                class="text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                        </div>
                        <div class="flex items-center space-x-2">
                            <input id="no-computerLiteracyRequired" type="radio" value="no"
                                v-model="form.computerLiteracyRequired"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="no-computerLiteracyRequired"
                                class="text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                        </div>
                    </div>
                    <span v-if="validationErrors.computerLiteracyRequired" class="text-red-500 text-sm mt-1 block">
                        Please fill in this field
                    </span>
                </div>
                <div class="flex-1" v-if="form.computerLiteracyRequired === 'yes'">
                    <label for="computerSpecification"
                        class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                        If Yes, Please specify
                    </label>
                    <input type="text" id="computerSpecification" v-model="form.computerSpecification"
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
                            <input id="yes-expRequired" type="radio" value="yes" v-model="form.expRequired"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="yes-expRequired"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                        </div>
                        <div class="flex items-center space-x-2">
                            <input id="no-expRequired" type="radio" value="no" v-model="form.expRequired"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="no-expRequired"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                        </div>
                    </div>
                    <span v-if="validationErrors.expRequired" class="text-red-500 text-sm">Please fill in this
                        field</span>
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
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="yes-ownTransportRequired"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>

                    <input id="no-ownTransportRequired" type="radio" value="no" v-model="form.ownTransportRequired"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="no-ownTransportRequired"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                </div>
                <span v-if="validationErrors.ownTransportRequired" class="text-red-500 text-sm">Please fill in this
                    field</span>
            </div>
            <div>
                <label for="qualificationRequired"
                    class="block mb-2 text-sm font-medium text-primary dark:text-white">Qualification Required?: <span
                        class="text-red-500">*</span></label>
                <div class="flex space-x-4 items-center mb-4">
                    <input id="spm-qualificationRequired" type="radio" value="spm" v-model="form.qualificationRequired"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="spm-qualificationRequired"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">SPM/SPVM/STPM</label>

                    <input id="diploma-qualificationRequired" type="radio" value="diploma"
                        v-model="form.qualificationRequired"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="diploma-qualificationRequired"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">DIPLOMA/DEGREE</label>
                </div>
                <span v-if="validationErrors.qualificationRequired" class="text-red-500 text-sm">Please fill in this
                    field</span>
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
                                    <span @click="removeField(index)" class="cursor-pointer ml-2">
                                        <font-awesome-icon :icon="['fas', 'xmark']" />
                                    </span>
                                </div>
                            </span>
                        </div>
                    </div>

                    <div v-if="showInputField" class="mb-2 flex items-center space-x-2">
                        <input type="text" v-model="newField"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Eg: Selling/Accounting/Debtors Control/IT/Management etc..." />
                        <button @click="addField" class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                            Add
                        </button>
                    </div>
                    <button v-if="!showInputField" @click="showInputField = true"
                        class="bg-transparent text-sm hover:border-primary hover:border-[1px] border-[1px] border-transparent p-2.5 rounded-2xl">
                        Add More <span>
                            <font-awesome-icon icon="fa-solid fa-plus" /></span>
                    </button>
                </div>
            </div>

            <div>
                <label for="disciplineSpecification"
                    class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                    Please specify discipline</label>
                <input type="text" id="disciplineSpecification" v-model="form.disciplineSpecification"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Specify discipline" />
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
                                <span @click="removePersonnelField(index)" class="ml-2 cursor-pointer">
                                    <font-awesome-icon :icon="['fas', 'xmark']" class="cursor-pointer" />
                                </span>
                            </span>
                        </div>
                    </div>

                    <div v-if="showInputPersonnelField" class="mb-2 flex items-center gap-2">
                        <input type="text" v-model="newPersonnelField"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Eg: Leadership, Perserverance/Customer/ Driven/Interpersonal Skills etc..." />
                        <button @click="addPersonnelField"
                            class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                            Add
                        </button>
                    </div>
                    <button v-if="!showInputPersonnelField" @click="showInputPersonnelField = true"
                        class="bg-transparent text-sm hover:border-primary hover:border-[1px] border-[1px] border-transparent p-2.5 rounded-2xl">
                        Add More <span>
                            <font-awesome-icon icon="fa-solid fa-plus" /></span>
                    </button>

                </div>
            </div>
        </div>
        <div class="grid grid-cols-1">
            <label for="others" class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                Others (Please specify)</label>
            <textarea id="others" rows="4" v-model="form.others"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your comments here"></textarea>
        </div>

        <div class="grid grid-cols-1 space-x-2 mt-4">
            <div class="col-span-8 flex justify-end">
                <button @click="handlePrevious"
                    class="bg-transparent text-pending px-10 py-2 rounded-md border-[2px] border-pending mr-4">
                    Back
                </button>
                <button @click.prevent="handleNext" class="bg-primary text-white px-10 py-2 rounded-md">
                    Next
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import Swal from "sweetalert2";
import {
    reactive
} from 'vue';
export default {
    props: ["formData"],
    data() {
        return {
            form: reactive({
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
            }),
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
    watch: {
        'form.expRequired': function (newValue) {
            if (newValue === 'no') {
                this.form.yearsRequired = 0;
            } else {
                this.form.yearsRequired = null;
            }
        }
    },
    created() {
        if (this.formData.sectionB) {
            Object.assign(this.form, this.formData.sectionB);
        }
        this.minAge = this.formData.sectionB?.ageLimit?.[0] || "";
        this.maxAge = this.formData.sectionB?.ageLimit?.[1] || "";
    },
    computed: {
        ageLimit() {
            return [parseInt(this.minAge), parseInt(this.maxAge)];
        },
    },
    watch: {
        'ageLimit[0]': 'validateAgeLimit',
        'ageLimit[1]': 'validateAgeLimit'
    },
    methods: {
        handleYearsRequiredInput() {
            if (!this.form.yearsRequired && this.form.expRequired === 'yes') {
                this.form.yearsRequired = null;
            }
        },
        validateAgeLimit() {
            if (this.minAge === null || this.maxAge === null) {
                this.validationErrors.ageLimit = "Both age fields are required";
                return false;
            }
            this.validationErrors.ageLimit = "";
            return true;
        },

        // for List of Personnal Competencies required
        openPersonnelInputForm() {
            this.newPersonnelField = "";
            this.showInputPersonnelField = true;
        },
        // addPersonnelField() {
        //     if (this.newPersonnelField.trim()) {
        //         this.form.personalCompetency.push(this.newPersonnelField.trim());
        //         this.newPersonnelField = "";
        //         this.showInputPersonnelField = false;
        //     }
        // },
        addPersonnelField() {
            if (this.newPersonnelField.trim()) {
                this.form.personalCompetency.push(this.newPersonnelField.trim());
                this.newPersonnelField = "";
                this.showInputPersonnelField = false;
            }
        },

        removePersonnelField(index) {
            this.form.personalCompetency.splice(index, 1);
        },
        // for List of functional / technical job required:
        openInputForm() {
            this.newField = "";
            this.showInputField = true;
        },
        // addField() {
        //     if (this.newField.trim()) {
        //         this.form.jobCompetency.push(this.newField.trim());
        //         this.newField = "";
        //         this.showInputField = false;
        //     }
        // },
        addField() {
            if (this.newField.trim()) {
                this.form.jobCompetency.push(this.newField.trim());
                this.newField = "";
                this.showInputField = false;
            }
        },
        removeField(index) {
            this.form.jobCompetency.splice(index, 1);
        },
        validateForm() {
            this.validationErrors = {};
            if (!this.minAge || !this.maxAge) this.validationErrors.ageLimit = true;
            if (!this.form.computerLiteracyRequired)
                this.validationErrors.computerLiteracyRequired = true;
            // if (this.form.expRequired === 'yes' && !this.form.yearsRequired) this.validationErrors.yearsRequired = 'Please specify years of experience';
            // if (!this.form.expRequired) this.validationErrors.expRequired = true;
            if (!this.form.ownTransportRequired) this.validationErrors.ownTransportRequired = true;

            if (!this.form.qualificationRequired)
                this.validationErrors.qualificationRequired = true;
            return Object.keys(this.validationErrors).length === 0;
        },
        handlePrevious() {
            this.$emit("previous-section");
        },
        handleNext() {
            if (this.validateForm() && this.validateAgeLimit()) {
                // Ensure `ageLimit`, `jobCompetency`, and `personalCompetency` are formatted as expected
                this.form.ageLimit = this.ageLimit.join('-');

                console.log('Form data section B:', this.form, this.form.ageLimit);
                // Prepare data and confirm with the user
                Swal.fire({
                    title: "Are you sure you want to proceed to the next section?",
                    icon: "question",
                    showCancelButton: true,
                    confirmButtonText: "Yes, proceed",
                    cancelButtonText: "No, stay here",
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                }).then((result) => {
                    if (result.isConfirmed) {
                        console.log('Form data section B saved:', this.form);
                        this.$emit("update-form", this.form, "B");
                        this.$emit("next-section", this.form);
                    }
                });
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Please fill in all required fields.",
                    icon: "error",
                    confirmButtonText: "OK",
                    confirmButtonColor: "#3085d6",
                });
            }
        },
    },
};
</script>