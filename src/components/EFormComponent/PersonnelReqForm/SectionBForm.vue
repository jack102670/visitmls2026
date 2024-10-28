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
                    <label for="ComputerLiteracy" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                        Computer literacy: <span class="text-red-500">*</span>
                    </label>
                    <div class="flex space-x-4 items-center mt-2">
                        <div class="flex items-center space-x-2">
                            <input id="yes-computerLiteracy" type="radio" value="yes" v-model="form.computerLiteracy"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="yes-computerLiteracy"
                                class="text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                        </div>
                        <div class="flex items-center space-x-2">
                            <input id="no-computerLiteracy" type="radio" value="no" v-model="form.computerLiteracy"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="no-computerLiteracy"
                                class="text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                        </div>
                    </div>
                    <span v-if="validationErrors.computerLiteracy" class="text-red-500 text-sm mt-1 block">
                        Please fill in this field
                    </span>
                </div>
                <div class="flex-1" v-if="form.computerLiteracy === 'yes'">
                    <label for="specifyRequirement"
                        class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                        If Yes, Please specify
                    </label>
                    <input type="text" id="specifyRequirement" v-model="form.specifyRequirement"
                        class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Specify Requirement" />
                </div>
            </div>
            <div class="flex flex-col sm:flex-row sm:items-start sm:space-x-4 w-full">
                <div class="flex-1">
                    <label for="basicSalary" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                        Experience Required?: <span class="text-red-500">*</span>
                    </label>
                    <div class="flex space-x-4 items-center mt-2">
                        <div class="flex items-center space-x-2">
                            <input id="yes-experienceRequired" type="radio" value="yes"
                                v-model="form.experienceRequired"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="yes-experienceRequired"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                        </div>
                        <div class="flex items-center space-x-2">
                            <input id="no-experienceRequired" type="radio" value="no" v-model="form.experienceRequired"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="no-experienceRequired"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                        </div>
                    </div>
                    <span v-if="validationErrors.experienceRequired" class="text-red-500 text-sm">Please fill in this
                        field</span>
                </div>
                <div class="flex-1 flex-col space-x-[1px]" v-if="form.experienceRequired === 'yes'">
                    <label for="specifyYears"
                        class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                        If Yes, No Of Years</label>
                    <input type="text" id="specifyYears" v-model="form.specifyYears"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Specify Years" />
                </div>
            </div>
            <div>
                <label for="basicSalary" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    Posses Own Transport?: <span class="text-red-500">*</span></label>
                <div class="flex space-x-4 items-center mb-4">
                    <input id="yes-ownTransport" type="radio" value="yes" v-model="form.ownTransport"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="yes-ownTransport"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>

                    <input id="no-ownTransport" type="radio" value="no" v-model="form.ownTransport"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="no-ownTransport"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                </div>
                <span v-if="validationErrors.ownTransport" class="text-red-500 text-sm">Please fill in this field</span>
            </div>
            <div>
                <label for="basicSalary"
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
                <label for="personnel" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    List of functional / technical job required:
                </label>

                <div class="space-y-2">
                    <div class="flex flex-wrap gap-2 mb-2">
                        <div v-for="(field, index) in form.functionalTechnicalJobRequired" :key="index"
                            class="flex items-center">
                            <span
                                class="block bg-gray-100 text-gray-800 px-4 rounded-lg py-2 text-sm dark:bg-gray-700 dark:text-white">
                                <div class="flex justify-between items-center space-x-2">
                                    {{ field }}
                                    <span @click="removeField(index)" class="ml-2">
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
                <label for="personnel" class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                    Please specify discipline</label>
                <input type="text" id="discipline" v-model="form.discipline"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Specify discipline" />
            </div>
            <div>
                <label for="personnel" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    List of Personnal Competencies required:</label>
                <div class="space-y-2">
                    <div class="flex flex-wrap gap-2 mb-2">
                        <div v-for="(field, index) in form.ListofPersonnelCompetenciesrequired" :key="index"
                            class="flex items-center">
                            <span
                                class="block bg-gray-100 text-gray-800 px-4 rounded-lg py-2 text-sm dark:bg-gray-700 dark:text-white flex justify-between items-center w-full">
                                <span class="flex-1">{{ field }}</span>
                                <span @click="removePersonnelField(index)" class="ml-2 cursor-pointer">
                                    <font-awesome-icon :icon="['fas', 'xmark']" />
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
            <label for="personnel" class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                Others (Please specify)</label>
            <textarea id="specifyOthers" rows="4" v-model="form.specifyOthers"
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
                ageLimit: "",
                computerLiteracy: "",
                experienceRequired: "",
                specifyRequirement: "",
                specifyYears: "",
                ownTransport: "",
                qualificationRequired: "",
                functionalTechnicalJobRequired: [],
                discipline: "",
                ListofPersonnelCompetenciesrequired: [],
                specifyOthers: "",
            }),
            minAge: "",
            maxAge: "",
            validationErrors: {},
            newField: "",
            showInputField: false,
            newPersonnelField: "",
            showInputPersonnelField: false,
        };
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
            return [this.minAge, this.maxAge];
        },
    },
    methods: {
        // for List of Personnal Competencies required
        openPersonnelInputForm() {
            this.newPersonnelField = "";
            this.showInputPersonnelField = true;
        },
        addPersonnelField() {
            if (this.newPersonnelField.trim()) {
                this.form.ListofPersonnelCompetenciesrequired.push(this.newPersonnelField.trim());
                this.newPersonnelField = "";
                this.showInputPersonnelField = false;
            }
        },
        removePersonnelField(index) {
            this.form.ListofPersonnelCompetenciesrequired.splice(index, 1);
        },
        // for List of functional / technical job required:
        openInputForm() {
            this.newField = "";
            this.showInputField = true;
        },
        addField() {
            if (this.newField.trim()) {
                this.form.functionalTechnicalJobRequired.push(this.newField.trim());
                this.newField = "";
                this.showInputField = false;
            }
        },
        removeField(index) {
            this.form.functionalTechnicalJobRequired.splice(index, 1);
        },
        validateForm() {
            this.validationErrors = {};
            if (!this.minAge || !this.maxAge) this.validationErrors.ageLimit = true;
            if (!this.form.computerLiteracy)
                this.validationErrors.computerLiteracy = true;
            if (!this.form.experienceRequired)
                this.validationErrors.experienceRequired = true;
            if (!this.form.ownTransport) this.validationErrors.ownTransport = true;
            if (!this.form.qualificationRequired)
                this.validationErrors.qualificationRequired = true;
            return Object.keys(this.validationErrors).length === 0;
        },
        handlePrevious() {
            this.$emit("previous-section");
        },
        handleNext() {
            if (this.validateForm()) {
                this.form.ageLimit = this.ageLimit;
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
                        console.log("Form data saved:", this.form);
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