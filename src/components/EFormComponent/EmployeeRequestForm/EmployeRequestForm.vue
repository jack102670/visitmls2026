<template>
    <div class="space-y-4 border border-[1px] rounded-md px-4 py-2">
        <h1 class="font-bold text-md py-2">A. Employee Particulars</h1>
        <div class="grid grid-cols-8 gap-2 mt-4">

            <div class="col-span-1">
                <label for="employee_name" class="block mb-2 text-sm font-medium text-primary dark:text-white">Name of
                    Employee: <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <input type="text" id="employee_name" v-model="EmployeeTransfer.employee_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Input Name" required />
                    <span v-if="validationErrors.employee_name" class="text-red-500 text-sm">Please fill in this
                        field.</span>
            </div>
            <div class="col-span-1">
                <label for="current_designation" class="block mb-2 text-sm font-medium text-primary dark:text-white">Current
                    Designation: <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <input type="text" id="current_designation" v-model="EmployeeTransfer.current_designation"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Input Current Designation" required />
                    <span v-if="validationErrors.current_designation" class="text-red-500 text-sm">Please fill in this
                        field.</span>

            </div>
        </div>
        <div class="grid grid-cols-8 gap-2 mt-4">

            <div class="col-span-1">
                <label for="company_name" class="block mb-2 text-sm font-medium text-primary dark:text-white">Name of
                    Company: <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <input type="text" id="company_name" v-model="EmployeeTransfer.company_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Input Name of Company" required />
                    <span v-if="validationErrors.company_name" class="text-red-500 text-sm">Please fill in this
                        field.</span>
            </div>
            <div class="col-span-1">
                <label for="department" class="block mb-2 text-sm font-medium text-primary dark:text-white">Department: <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <input type="text" id="department" v-model="EmployeeTransfer.department"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Input Department" required />
                    <span v-if="validationErrors.department" class="text-red-500 text-sm">Please fill in this
                        field.</span>
            </div>
        </div>
        <div class="grid grid-cols-8 gap-2">
            <div class="col-span-1">
                <label for="highest_qualification" class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                    Highest Qualification: <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <input id="highest_qualification" rows="4" v-model="EmployeeTransfer.highest_qualification"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write the highest qualification here" />
                    <span v-if="validationErrors.highest_qualification" class="text-red-500 text-sm">Please fill in this field.</span>
            </div>
        </div>
        <hr class="border border-b-[1px]" />
        <h1 class="font-bold text-md py-2">B. Requisition for Transfer</h1>
        <div class="grid grid-cols-8 gap-2">
            <div class="col-span-1">
                <label for="position_interested" class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                    Position Interested <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <input id="position_interested" rows="4" v-model="EmployeeTransfer.position_interested"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Position Interested" required />
                    <span v-if="validationErrors.position_interested" class="text-red-500 text-sm">Please fill in this field.</span>
            </div>
            <div class="col-span-1">
                <label for="department_interested" class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                    Department <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <input id="department_interested" rows="4" v-model="EmployeeTransfer.department_interested"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Department interested" required />
                    <span v-if="validationErrors.department_interested" class="text-red-500 text-sm">Please fill in this field.</span>
            </div>
        </div>
        <div class="grid grid-cols-8 gap-2">
            <div class="col-span-1">
                <label for="RelatedWorkExperience" class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                    Do you have any work experience related to the position applied for?  If yes, kindly elaborate:</label>
            </div>
            <div class="col-span-7">
                <textarea id="RelatedWorkExperience" rows="4" v-model="EmployeeTransfer.RelatedWorkExperience"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write related work experience to the position applied" ></textarea>
            </div>
        </div>
        <div class="grid grid-cols-8 gap-2">
            <div class="col-span-1">
                <label for="reasonFortransfer" class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                    Reason for transfer Request</label>
            </div>
            <div class="col-span-7">
                <textarea id="reasonFortransfer" rows="4" v-model="EmployeeTransfer.reasonFortransfer"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write reason for transfer request" ></textarea>
            </div>
        </div>
        <div class="grid grid-cols-8 space-x-2 mt-4">
            <div class="col-span-8 flex justify-end space-x-2">
                <button @click.prevent="confirmExit"
                    class="bg-transparent text-dark px-10 py-2 rounded-md border-[2px] border-rejected font-bold">
                    Exit
                </button>
                <button @click.prevent="submitForm" class="bg-verified text-white px-10 py-2 rounded-md font-bold">
                    Submit
                </button>
            </div>
        </div>
    </div>
</template>
<script>

import Swal from 'sweetalert2';
    export default {
        data(){
            return {
                EmployeeTransfer: {
                    position_interested: '',
                    department_interested: '',
                    highest_qualification: '',
                    employee_name: '',
                    current_designation: '',
                    company_name: '',
                    department: '',
                    reasonFortransfer: '',
                    RelatedWorkExperience: '',
                },
                validationErrors: {},
            }
        },
        methods: {
            validateForm(){
                this.validationErrors = {};
                if(!this.EmployeeTransfer.position_interested) this.validationErrors.position_interested = true;
                if(!this.EmployeeTransfer.department_interested) this.validationErrors.department_interested = true;
                if(!this.EmployeeTransfer.highest_qualification) this.validationErrors.highest_qualification = true;
                if(!this.EmployeeTransfer.employee_name) this.validationErrors.employee_name = true;
                if(!this.EmployeeTransfer.current_designation) this.validationErrors.current_designation = true;
                if(!this.EmployeeTransfer.company_name) this.validationErrors.company_name = true;
                if(!this.EmployeeTransfer.department) this.validationErrors.department = true;
                return Object.keys(this.validationErrors).length === 0;


            },
            confirmExit() {
                Swal.fire({
                    title: 'Are you sure you want to exit?',
                    text: 'Any unsaved changes will be lost!',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, exit',
                    cancelButtonText: 'No, stay'
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.$router.push('/e-dashboard');
                    }
                });

            },
            submitForm() {
                if (this.validateForm()) {
                    Swal.fire({
                        title: 'Are you sure you want to submit?',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, Submit!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            console.log('Form data saved:', this.EmployeeTransfer);
                            this.EmployeeTransfer = {
                                position_interested: '',
                    department_interested: '',
                    highest_qualification: '',
                    employee_name: '',
                    current_designation: '',
                    company_name: '',
                    department: '',
                    reasonFortransfer: '',
                    RelatedWorkExperience: '',
                            };
                            Swal.fire({
                                title: 'Saved!',
                                text: 'Your data has been saved.',
                                confirmButtonColor: '#3085d6',
                                icon: 'success',
                                confirmButtonText: 'OK'
                            });
                        }
                    });
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Please fill in all required fields.',
                        icon: 'error',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'OK'
                    });
                }
            },
            resetForm() {
                this.EmployeeTransfer = {
                    position_interested: '',
                    department_interested: '',
                    highest_qualification: '',
                    employee_name: '',
                    current_designation: '',
                    company_name: '',
                    department: '',
                    reasonFortransfer: '',
                    RelatedWorkExperience: '',
                };
                this.showOtherInput = false;
            }
        }
    }
</script>