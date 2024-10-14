<template>
    <div class="space-y-4 mt-2 border-[1px] rounded-md  px-4 py-2">
        <h1 class="font-bold text-md py-2">B. Person Specification</h1>
        <div class="grid grid-cols-8 gap-2 mt-4">

            <div class="col-span-1">
                <label for="ageLimit" class="block mb-2 text-sm font-medium text-primary dark:text-white">Age Limit:
                    <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <input type="number" id="ageLimit" v-model="form.ageLimit"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Input Age" required />
                <span v-if="validationErrors.ageLimit" class="text-red-500 text-sm">Please fill in this field</span>
            </div>
            <div class="col-span-1">
                <label for="ComputerLiteracy" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    Computer literacy: <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <div class="flex space-x-4 items-center mb-4">
                    <input id="yes-computerLiteracy" type="radio" value="yes" v-model="form.computerLiteracy"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="yes-computerLiteracy"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>

                    <input id="no-computerLiteracy" type="radio" value="no" v-model="form.computerLiteracy"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="no-computerLiteracy"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                </div>
                <span v-if="validationErrors.computerLiteracy" class="text-red-500 text-sm">Please fill in this
                    field</span>
            </div>
        </div>

        <div class="grid grid-cols-8 gap-2">
            <div class="col-span-1">
                <label for="basicSalary" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    Experience Required?: <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <div class="flex space-x-4 items-center mb-4">
                    <input id="yes-experienceRequired" type="radio" value="yes" v-model="form.experienceRequired"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="yes-experienceRequired"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>

                    <input id="no-experienceRequired" type="radio" value="no" v-model="form.experienceRequired"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="no-experienceRequired"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                </div>
                <span v-if="validationErrors.experienceRequired" class="text-red-500 text-sm">Please fill in this
                    field</span>
            </div>
            <div class="col-span-1">
                <label for="specifyRequirement"
                    class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                    If Yes, Please specify</label>
            </div>
            <div class="col-span-3">
                <input type="text" id="specifyRequirement" v-model="form.specifyRequirement"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Specify Requirement" />
            </div>
        </div>
        <div class="grid grid-cols-8 gap-2">
            <div class="col-span-1">
                <label for="specifyYears" class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                    If Yes, No Of Years</label>
            </div>
            <div class="col-span-3">
                <input type="text" id="specifyYears" v-model="form.specifyYears"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Specify Years" />
            </div>
            <div class="col-span-1">
                <label for="basicSalary" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    Posses Own Transport?: <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <div class="flex space-x-4 items-center mb-4">
                    <input id="yes-ownTransport" type="radio" value="yes" v-model="form.ownTransport"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="yes-ownTransport"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>

                    <input id="no-ownTransport" type="radio" value="no" v-model="form.ownTransport"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="no-ownTransport"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                </div>
                <span v-if="validationErrors.ownTransport" class="text-red-500 text-sm">Please fill in this field</span>
            </div>
        </div>
        <div class="grid grid-cols-8 gap-2">
            <div class="col-span-1">
                <label for="basicSalary"
                    class="block mb-2 text-sm font-medium text-primary dark:text-white">Qualification Required?: <span
                        class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <div class="flex space-x-4 items-center mb-4">
                    <input id="spm-qualificationRequired" type="radio" value="spm" v-model="form.qualificationRequired"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="spm-qualificationRequired"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">SPM/SPVM/STPM</label>

                    <input id="diploma-qualificationRequired" type="radio" value="diploma"
                        v-model="form.qualificationRequired"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="diploma-qualificationRequired"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">DIPLOMA/DEGREE</label>
                </div>
                <span v-if="validationErrors.qualificationRequired" class="text-red-500 text-sm">Please fill in this
                    field</span>
            </div>
            <div class="col-span-1">
                <label for="personnel" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    List of functional / technical job required:</label>
            </div>
            <div class="col-span-3">
                <input type="text" id="functionalTechnicalJobRequired" v-model="form.functionalTechnicalJobRequired"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Eg: Selling/Accounting/Debtors Control/IT/Management etc..." />
            </div>
        </div>
        <div class="grid grid-cols-8 gap-2">
            <div class="col-span-1">
                <label for="personnel" class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                    Please specify discipline</label>
            </div>
            <div class="col-span-3">
                <input type="text" id="discipline" v-model="form.discipline"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Specify discipline" />
            </div>
            <div class="col-span-1">
                <label for="personnel" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    List of Personnal Competencies required:</label>
            </div>
            <div class="col-span-3">
                <input type="text" id="ListofPersonnelCompetenciesrequired"
                    v-model="form.ListofPersonnelCompetenciesrequired"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Eg: Leadership, Perserverance/Customer/ Driven/Interpersonal Skills etc..." />
            </div>

        </div>
        <div class="grid grid-cols-8 gap-2">
            <div class="col-span-1">
                <label for="personnel" class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                    Others (Please specify)</label>
            </div>
            <div class="col-span-7">
                <textarea id="specifyOthers" rows="4" v-model="form.specifyOthers"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your comments here"></textarea>
            </div>
        </div>
        <div class="grid grid-cols-8 space-x-2 mt-4">
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
import Swal from 'sweetalert2';
    export default {
        props: ['formData'],
        data() {
            return {
                form: this.formData.sectionB || {
                    ageLimit: '',
                    computerLiteracy: '',
                    experienceRequired: '',
                    specifyRequirement: '',
                    specifyYears: '',
                    ownTransport: '',
                    qualificationRequired: '',
                    functionalTechnicalJobRequired: '',
                    discipline: '',
                    ListofPersonnelCompetenciesrequired: '',
                    specifyOthers: '',
                },
                validationErrors: {},
            }
        },
        methods: {
            validateForm() {
                this.validationErrors = {};
                if (!this.form.ageLimit) this.validationErrors.ageLimit = true;
                if (!this.form.computerLiteracy) this.validationErrors.computerLiteracy = true;
                if (!this.form.experienceRequired) this.validationErrors.experienceRequired = true;
                if (!this.form.ownTransport) this.validationErrors.ownTransport = true;
                if (!this.form.qualificationRequired) this.validationErrors.qualificationRequired = true;
                return Object.keys(this.validationErrors).length === 0;
            },
            handlePrevious() {
                this.$emit('previous-section');
            },
            handleNext() {
                if (this.validateForm()) {
                    Swal.fire({
                        title: 'Are you sure you want to proceed to the next section?',
                        icon: 'question',
                        showCancelButton: true,
                        confirmButtonText: 'Yes, proceed',
                        cancelButtonText: 'No, stay here',
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            console.log('Form data saved:', this.form);
                            this.$emit('update-form', this.form, 'B');
                            this.$emit('next-section', this.form);
                        }
                    });
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Please fill in all required fields.',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                }
            }
        }
    }
</script>