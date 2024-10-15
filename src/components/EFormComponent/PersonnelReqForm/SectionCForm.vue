<template>
    <div class="space-y-4 mt-2 border-[1px] px-4 py-2">
        <h1 class="font-bold text-md py-2">C. Verification / Approval</h1>

        <div class="grid grid-cols-8 gap-2">
            <div class="col-span-1">
                <label for="basicSalary" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    Name: </label>
            </div>
            <div class="col-span-3">
                <p>MOHAMAD AMIR</p>
            </div>
            <div class="col-span-1">
                <label for="basicSalary" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    Designation: </label>
            </div>
            <div class="col-span-3">
                <p>Front end developer</p>
            </div>
            <div class="col-span-1">
                <label for="basicSalary" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    Department: </label>
            </div>
            <div class="col-span-3">
                <p>ICT </p>
            </div>
            <div class="col-span-1">
                <label for="basicSalary" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    I have read and agree that this informations are correct and cannot be changed: <span
                        class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <div class="flex space-x-4 items-center mb-4">
                    <input id="yes-employeeConfirmation" type="radio" value="yes" v-model="form.employeeConfirmation"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="yes-employeeConfirmation"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                    <input id="no-employeeConfirmation" type="radio" value="no" v-model="form.employeeConfirmation"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="no-employeeConfirmation"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                </div>
                <span v-if="validationErrors.employeeConfirmation" class="text-red-500 text-sm">Please fill in this
                    field</span>
            </div>
        </div>
        <div class="col-span-8 flex justify-end">
            <button @click="handlePrevious"
                class="bg-transparent text-pending px-10 py-2 rounded-md border-[2px] border-pending mr-4">
                Back
            </button>
            <button @click.prevent="handleSubmit" class="bg-primary text-white px-10 py-2 rounded-md">
                Submit
            </button>

        </div>
    </div>

    <!-- HOD SIDE UI -->

    <div class="space-y-4 mt-2 border-[1px] px-4 py-2">
        <h1 class="font-bold text-md py-2">C. Verification / Approval</h1>

        <div class="grid grid-cols-8 gap-2">
            <div class="col-span-1">
                <label for="basicSalary" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    Name: </label>
            </div>
            <div class="col-span-3">
                <p>MOHAMAD AMIR</p>
            </div>
            <div class="col-span-1">
                <label for="basicSalary" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    Designation: </label>
            </div>
            <div class="col-span-3">
                <p>Front end developer</p>
            </div>
            <div class="col-span-1">
                <label for="basicSalary" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    Department: </label>
            </div>
            <div class="col-span-3">
                <p>ICT </p>
            </div>
            <div class="col-span-1">
                <label for="basicSalary" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    I have read and agree that this informations are correct and cannot be changed: <span
                        class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <div class="flex space-x-4 items-center mb-4">
                    <input id="yes-employeeConfirmation" type="radio" value="yes" v-model="form.employeeConfirmation"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="yes-employeeConfirmation"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                    <input id="no-employeeConfirmation" type="radio" value="no" v-model="form.employeeConfirmation"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="no-employeeConfirmation"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                </div>
                <span v-if="validationErrors.employeeConfirmation" class="text-red-500 text-sm">Please fill in this
                    field</span>
            </div>
        </div>
        <hr class="border-[1px]" />
        <h1 class="font-bold text-md py-2">Verified By: </h1>

        <div class="hidden sm:grid sm:grid-cols-8 gap-2">
            <div class="col-span-1">
                <label class="block text-sm font-medium text-primary dark:text-white">Name:</label>
            </div>
            <div class="col-span-3">
                <label class="block text-sm font-medium text-primary dark:text-white">Devision Name </label>
            </div>
            <div class="col-span-1">
                <label class="block text-sm font-medium text-primary dark:text-white">Date: </label>
            </div>
            <div class="col-span-3">
                <label class="block text-sm font-medium text-primary dark:text-white"> 25/9/2024</label>
            </div>
        </div>
        <div class="hidden sm:grid sm:grid-cols-8 gap-2">
            <div class="col-span-1">
                <label class="block text-sm font-medium text-primary dark:text-white">Designation:</label>
            </div>
            <div class="col-span-3">
                <label class="block text-sm font-medium text-primary dark:text-white">Devision Head</label>
            </div>
        </div>
        <div class="grid grid-cols-8 space-x-2 mt-4">
            <div class="col-span-8 flex justify-end">
                <button @click="handlePrevious"
                    class="bg-transparent text-pending px-10 py-2 rounded-md border-[2px] border-pending mr-4">
                    Exit
                </button>
                <button class="bg-verified text-white px-10 py-2 rounded-md">
                    Verify
                </button>
            </div>
        </div>
    </div>

    <!-- DIV SIDE UI -->

    <div class="space-y-4 mt-2 border-[1px] px-4 py-2">
        <h1 class="font-bold text-md py-2">C. Verification / Approval</h1>

        <div class="grid grid-cols-8 gap-2">
            <div class="col-span-1">
                <label for="basicSalary" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    Name: </label>
            </div>
            <div class="col-span-3">
                <p>MOHAMAD AMIR</p>
            </div>
            <div class="col-span-1">
                <label for="basicSalary" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    Designation: </label>
            </div>
            <div class="col-span-3">
                <p>Front end developer</p>
            </div>
            <div class="col-span-1">
                <label for="basicSalary" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    Department: </label>
            </div>
            <div class="col-span-3">
                <p>ICT </p>
            </div>
            <div class="col-span-1">
                <label for="basicSalary" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    I have read and agree that this informations are correct and cannot be changed: <span
                        class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <div class="flex space-x-4 items-center mb-4">
                    <input id="yes-employeeConfirmation" type="radio" value="yes" v-model="form.employeeConfirmation"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="yes-employeeConfirmation"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                    <input id="no-employeeConfirmation" type="radio" value="no" v-model="form.employeeConfirmation"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="no-employeeConfirmation"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                </div>
                <span v-if="validationErrors.employeeConfirmation" class="text-red-500 text-sm">Please fill in this
                    field</span>
            </div>
        </div>
        <hr class="border-[1px]" />
        <h1 class="font-bold text-md py-2">Verified By: </h1>

        <div class="hidden sm:grid sm:grid-cols-8 gap-2">
            <div class="col-span-1">
                <label class="block text-sm font-medium text-primary dark:text-white">Name:</label>
            </div>
            <div class="col-span-3">
                <label class="block text-sm font-medium text-primary dark:text-white">Devision Name </label>
            </div>
            <div class="col-span-1">
                <label class="block text-sm font-medium text-primary dark:text-white">Date: </label>
            </div>
            <div class="col-span-3">
                <label class="block text-sm font-medium text-primary dark:text-white"> 25/9/2024</label>
            </div>
        </div>
        <div class="hidden sm:grid sm:grid-cols-8 gap-2">
            <div class="col-span-1">
                <label class="block text-sm font-medium text-primary dark:text-white">Designation:</label>
            </div>
            <div class="col-span-3">
                <label class="block text-sm font-medium text-primary dark:text-white">Devision Head</label>
            </div>
        </div>

        <hr class="border-[1px]" />
        <h1 class="font-bold text-md py-2">Verified By: </h1>

        <div class="hidden sm:grid sm:grid-cols-8 gap-2">
            <div class="col-span-1">
                <label class="block text-sm font-medium text-primary dark:text-white">Name:</label>
            </div>
            <div class="col-span-3">
                <label class="block text-sm font-medium text-primary dark:text-white">Devision Name </label>
            </div>
            <div class="col-span-1">
                <label class="block text-sm font-medium text-primary dark:text-white">Date: </label>
            </div>
            <div class="col-span-3">
                <label class="block text-sm font-medium text-primary dark:text-white"> 25/9/2024</label>
            </div>
        </div>
        <div class="hidden sm:grid sm:grid-cols-8 gap-2">
            <div class="col-span-1">
                <label class="block text-sm font-medium text-primary dark:text-white">Designation:</label>
            </div>
            <div class="col-span-3">
                <label class="block text-sm font-medium text-primary dark:text-white">COO</label>
            </div>
        </div>

        <div class="grid grid-cols-8 space-x-2 mt-4">
            <div class="col-span-8 flex justify-end">
                <button @click="handlePrevious"
                    class="bg-transparent text-pending px-10 py-2 rounded-md border-[2px] border-pending mr-4">
                    Exit
                </button>
                <button class="bg-verified text-white px-10 py-2 rounded-md">
                    Verify
                </button>
            </div>
        </div>
    </div>

    <!-- HR SIDE UI -->

    <div class="space-y-4 mt-2 border-[1px] px-4 py-2">
        <h1 class="font-bold text-md py-2">C. Verification / Approval</h1>

        <div class="grid grid-cols-8 gap-2">
            <div class="col-span-1">
                <label for="basicSalary" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    Name: </label>
            </div>
            <div class="col-span-3">
                <p>MOHAMAD AMIR</p>
            </div>
            <div class="col-span-1">
                <label for="basicSalary" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    Designation: </label>
            </div>
            <div class="col-span-3">
                <p>Front end developer</p>
            </div>
            <div class="col-span-1">
                <label for="basicSalary" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    Department: </label>
            </div>
            <div class="col-span-3">
                <p>ICT </p>
            </div>
            <div class="col-span-1">
                <label for="basicSalary" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    I have read and agree that this informations are correct and cannot be changed: <span
                        class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <div class="flex space-x-4 items-center mb-4">
                    <input id="yes-employeeConfirmation" type="radio" value="yes" v-model="form.employeeConfirmation"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="yes-employeeConfirmation"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                    <input id="no-employeeConfirmation" type="radio" value="no" v-model="form.employeeConfirmation"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="no-employeeConfirmation"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                </div>
                <span v-if="validationErrors.employeeConfirmation" class="text-red-500 text-sm">Please fill in this
                    field</span>
            </div>
        </div>
        <hr class="border-[1px]" />
        <h1 class="font-bold text-md py-2">Verified By: </h1>

        <div class="hidden sm:grid sm:grid-cols-8 gap-2">
            <div class="col-span-1">
                <label class="block text-sm font-medium text-primary dark:text-white">Name:</label>
            </div>
            <div class="col-span-3">
                <label class="block text-sm font-medium text-primary dark:text-white">Devision Name </label>
            </div>
            <div class="col-span-1">
                <label class="block text-sm font-medium text-primary dark:text-white">Date: </label>
            </div>
            <div class="col-span-3">
                <label class="block text-sm font-medium text-primary dark:text-white"> 25/9/2024</label>
            </div>
        </div>
        <div class="hidden sm:grid sm:grid-cols-8 gap-2">
            <div class="col-span-1">
                <label class="block text-sm font-medium text-primary dark:text-white">Designation:</label>
            </div>
            <div class="col-span-3">
                <label class="block text-sm font-medium text-primary dark:text-white">Devision Head</label>
            </div>
        </div>

        <hr class="border-[1px]" />
        <h1 class="font-bold text-md py-2">Verified By: </h1>

        <div class="hidden sm:grid sm:grid-cols-8 gap-2">
            <div class="col-span-1">
                <label class="block text-sm font-medium text-primary dark:text-white">Name:</label>
            </div>
            <div class="col-span-3">
                <label class="block text-sm font-medium text-primary dark:text-white">Devision Name </label>
            </div>
            <div class="col-span-1">
                <label class="block text-sm font-medium text-primary dark:text-white">Date: </label>
            </div>
            <div class="col-span-3">
                <label class="block text-sm font-medium text-primary dark:text-white"> 25/9/2024</label>
            </div>
        </div>
        <div class="hidden sm:grid sm:grid-cols-8 gap-2">
            <div class="col-span-1">
                <label class="block text-sm font-medium text-primary dark:text-white">Designation:</label>
            </div>
            <div class="col-span-3">
                <label class="block text-sm font-medium text-primary dark:text-white">COO</label>
            </div>
        </div>

        <hr class="border-[1px]" />
        <h1 class="font-bold text-md py-2">Checked By: </h1>

        <div class="hidden sm:grid sm:grid-cols-8 gap-2">
            <div class="col-span-1">
                <label class="block text-sm font-medium text-primary dark:text-white">Name:</label>
            </div>
            <div class="col-span-3">
                <input type="text" id="specifyRequirement"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Specify Requirement" />
            </div>
            <div class="col-span-1">
                <label class="block text-sm font-medium text-primary dark:text-white">Date: </label>
            </div>
            <div class="col-span-3">
                <div class="relative max-w-sm">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </div>
                        <input id="datepicker-autohide" type="date"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required />
                    </div>
            </div>
        </div>
        <hr class="border-[1px]" />
        <h1 class="font-bold text-md py-2">Checked By: </h1>


        <div class="grid grid-cols-8 space-x-2 mt-4">
            <div class="col-span-8 flex justify-end">
                <button @click="handlePrevious"
                    class="bg-transparent text-pending px-10 py-2 rounded-md border-[2px] border-pending mr-4">
                    Exit
                </button>
                <button class="bg-verified text-white px-10 py-2 rounded-md">
                    Verify
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
                form: this.formData.sectionC || {
                    employeeConfirmation: '',
                },
                validationErrors: {},
            }
        },
        methods: {
            validateForm() {
                this.validationErrors = {};
                if (!this.form.employeeConfirmation) this.validationErrors.employeeConfirmation = true;
                return Object.keys(this.validationErrors).length === 0;
            },
            handlePrevious() {
                this.$emit('previous-section');
            },
            handleSubmit() {
                if (this.validateForm()) {
                    Swal.fire({
                        title: 'Are you sure you want to submit the application?',
                        icon: 'question',
                        showCancelButton: true,
                        confirmButtonText: 'Yes, proceed',
                        cancelButtonText: 'No, stay here',
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            console.log('Form data saved:', this.form);
                            this.$emit('update-form', this.form, 'C');
                            this.$emit('submit-form', this.form);
                            Swal.fire({
                                title: 'Submitted!',
                                text: 'Your application has been submitted.',
                                confirmButtonColor: '#3085d6',
                                icon: 'success',
                                confirmButtonText: 'OK'
                            }).then(() => {
                                this.$router.push('/e-dashboard');
                            })
                        }
                    });
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Please fill in all required fields.',
                        icon: 'error',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#3085d6',
                    });
                }
            }
        }
    }
</script>