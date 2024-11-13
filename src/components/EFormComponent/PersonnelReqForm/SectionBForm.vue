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
                <div class="flex-1 flex-col space-y-2 space-x-[1px]" v-if="form.expRequired === 'yes'">
                    <label for="yearsRequired" class="block text-sm font-medium text-primary dark:text-white italic">
                        If Yes, No Of Years</label>
                    <input type="number" id="yearsRequired" v-model="form.yearsRequired"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="No of years required" required />
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
                <label for="jobCompetency" class="block  text-sm font-medium text-primary dark:text-white">
                    List of functional / technical job required:
                </label>

                <div class="space-y-2">
                    <div class="flex flex-wrap gap-2 ">
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

                    <div v-if="showInputField" class=" flex items-center space-x-2">
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

            <div class="relative">
                <label for="disciplineSearch"
                    class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                    Please specify discipline
                </label>
                <div class="space-y-2">
                    <div class="flex flex-wrap gap-2">
                        <div v-for="(field, index) in form.disciplineSpecification" :key="index"
                            class="flex items-center">
                            <span
                                class="block bg-gray-100 text-gray-800 px-4 rounded-lg py-2 text-sm dark:bg-gray-700 dark:text-white">
                                <div class="flex justify-between items-center space-x-2">
                                    {{ field }}
                                    <span @click="removeDiscipline(index)" class="cursor-pointer ml-2">
                                        <font-awesome-icon :icon="['fas', 'xmark']" />
                                    </span>
                                </div>
                            </span>
                        </div>
                    </div>

                    <div class="relative">
                        <input type="text" v-model="disciplineSearch" placeholder="Search for discipline..."
                            @input="handleSearchInput" @focus="showDropdown = true"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        <div v-if="showDropdown && filteredDisciplines.length > 0"
                            class="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto dark:bg-gray-700 dark:border-gray-600">
                            <div v-for="discipline in filteredDisciplines" :key="discipline.name"
                                @click="selectDiscipline(discipline)"
                                class="p-2 hover:bg-gray-100 cursor-pointer text-sm dark:hover:bg-gray-600 dark:text-white">
                                {{ discipline.name }}
                            </div>
                        </div>
                        <div v-if="form.disciplineSpecification.length > 5">
                            <span class="text-red-500 text-sm">Limit to 5 disciplines only</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <label for="personalCompetency" class="block  text-sm font-medium text-primary dark:text-white">
                    List of Personnal Competencies required:</label>
                <div class="space-y-2">
                    <div class="flex flex-wrap gap-2 ">
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

                    <div v-if="showInputPersonnelField" class=" flex items-center gap-2">
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
import DisciplineJson from '@/assets/json/discipline.json';
export default {
    props: ["formData"],
    data() {
        return {
            form: reactive({
                ageLimit: [], //minAge and MaxAge
                computerLiteracyRequired: "",
                expRequired: "",
                yearsRequired: '',
                qualificationRequired: "",
                computerSpecification: "",
                ownTransportRequired: "",
                jobCompetency: [],
                disciplineSpecification: [],
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
            disciplineSearch: '',
            disciplines: [...new Set(DisciplineJson.disciplines.map(d => d.name))].map(name => ({ name }))
                .sort((a, b) => a.name.localeCompare(b.name)),
            showDropdown: false,

        };
    },
    watch: {
        'form.expRequired': function (newValue) {
            this.form.yearsRequired = newValue === 'no' ? 0 : null;
        },
        minAge(newMinAge) {
        this.form.ageLimit[0] = newMinAge; // Update the first element of the array
    },
    maxAge(newMaxAge) {
        this.form.ageLimit[1] = newMaxAge; // Update the second element of the array
    }
    },
    created() {
    if (this.formData.sectionB) {
      Object.assign(this.form, this.formData.sectionB);
    }
    if (this.formData.sectionB?.ageLimit?.length === 2) {
      this.form.ageLimit = [...this.formData.sectionB.ageLimit];
    }
  },
    computed: {
        ageLimit() {
        const min = parseInt(this.minAge) || 0;
        const max = parseInt(this.maxAge) || 0;
        return [min, max];
    },


        filteredDisciplines() {
            if (!this.disciplineSearch) return this.disciplines;

            const searchTerm = this.disciplineSearch.toLowerCase().trim();
            return this.disciplines.filter(discipline =>
                discipline.name && discipline.name.toLowerCase().includes(searchTerm)
            );
        },
    },

    methods: {
        handleSearchInput() {
            this.showDropdown = true;
            if (!this.disciplineSearch) {
                this.form.disciplineSpecification = "";
            }
        },
        // selectDiscipline(discipline) {
        //     if (!this.form.disciplineSpecification.includes(discipline.name)) {
        //         this.form.disciplineSpecification.push(discipline.name);
        //     }
        //     this.disciplineSearch = '';
        //     this.showDropdown = false;
        // },
        selectDiscipline(discipline) {
            if (!Array.isArray(this.form.disciplineSpecification)) {
                this.form.disciplineSpecification = [];
            }

            if (this.form.disciplineSpecification.length >= 5) {
                Swal.fire({
                    title: "Limit reached",
                    text: "You can select up to 5 disciplines only.",
                    icon: "warning",
                    confirmButtonText: "OK",
                    confirmButtonColor: "#3085d6",
                });
            } else if (!this.form.disciplineSpecification.includes(discipline.name)) {
                this.form.disciplineSpecification.push(discipline.name);
            }
            this.disciplineSearch = '';
            this.showDropdown = false;
        },
        removeDiscipline(index) {
            this.form.disciplineSpecification.splice(index, 1);
        },
        handleClickOutside(event) {
            if (!event.target.closest('.relative')) {
                this.showDropdown = false;
            }
        },
        handleYearsRequiredInput() {
            if (!this.form.yearsRequired && this.form.expRequired === 'yes') {
                this.form.yearsRequired = null;
            }
        },
        validateAgeLimit() {
      if (this.form.ageLimit.length !== 2 || this.form.ageLimit[0] === null || this.form.ageLimit[1] === null) {
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
                // console.log('Form data section B:', this.form, this.form.ageLimit);
                // console.log('disciplineSpecification:', this.form.disciplineSpecification);
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
                        // console.log('Form data section B saved:', this.form);
                        
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
    mounted() {
        document.addEventListener('click', this.handleClickOutside);
    },
    beforeUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    },
};
</script>