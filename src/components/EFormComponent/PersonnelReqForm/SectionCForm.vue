<template>
    <div class="space-y-4 mt-2 border-[1px] rounded-md px-4 py-2">
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
                selectedOption: '',
                isDownloaded: false // Track whether the Download button was clicked
            }
        },
        methods: {
            handleDownloadAndSave() {
                this.isDownloaded = true;
            },
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

<style scoped>
</style>