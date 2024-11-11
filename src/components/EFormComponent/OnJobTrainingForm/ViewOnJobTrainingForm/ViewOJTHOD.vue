<template>
    <div class="space-y-2">
        <!-- if status is Completed by Superior. hide below div -->
        <div v-if="status !== 'Completed by Superior. Waiting for HR'" class="space-y-4 border border-[1px] rounded-md px-4 py-4">
            <h1 class="font-bold text-md">
                Remarks <span class="text-red-500">*</span>
            </h1>
            <h2 class="font-regular italic text-sm">
                Employee to be evaluated within 3 months from the commencement of
                familiarisation / training programme.
            </h2>
            <h1 class="font-bold text-md py-2">
                Head of Department Verification <span class="text-red-500">*</span>
            </h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="">
                    <label for="basicSalary" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                        1. Has the employee achieved the level of knowledge & skills required for the job?: <span class="text-red-500">*</span></label>
                    <div class="flex space-x-4 items-center mb-4">
                        <input id="yes-experienceRequired" type="radio" value="yes" v-model="form.achieveTarget"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="yes-experienceRequired"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>

                        <input id="no-experienceRequired" type="radio" value="no" v-model="form.achieveTarget"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="no-experienceRequired"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                    </div>
                    <span class="text-red-500 text-sm" v-if="validationErrors.achieveTarget">Please fill in this field"></span>
                </div>
                <div v-if="form.achieveTarget === 'no'">
                    <label for="specifyRequirement"
                        class="block mb-2 text-sm font-medium text-primary dark:text-white italic col-span-1">
                        2. If the answer is No, What are the actions to be taken?:
                    </label>
                    <div class="col-span-3 w-full">
                        <input type="text" id="specifyRequirement" v-model="form.reason"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Specify Requirement" />
                    </div>
                </div>
                <div class="">
                    <label for="basicSalary" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                        Name of Head of Department: </label>
                    <input type="text" id="text" v-model="form.name" readonly
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Input Name" required />
                </div>
                <div class="">
                    <label for="date" class="block mb-2 text-sm font-medium text-primary dark:text-white">Date
                        Required:
                        <span class="text-red-500">*</span></label>
                    <div class="relative max-w-full">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </div>
                        <input id="datepicker-autohide" type="date" v-model="form.verify"
                            class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required />
                            <span class="text-red-500 text-sm" v-if="validationErrors.verify">Please fill in this field"></span>
                    </div>
                </div>
            </div>

        </div>
        <div class="grid grid-cols-8 space-x-2 mt-4">
            <div class="col-span-8 flex justify-end">
                <button @click.prevent="confirmExit"
                    class="bg-transparent font-bold text-dark px-10 py-2 rounded-md border-[2px] border-rejected mr-4">
                    Exit
                </button>
                <button @click.prevent="UpdateOJT(refNo)" class="bg-verified font-bold text-white px-10 py-2 rounded-md">
                    Submit
                </button>
            </div>
        </div>
        <div>
        </div>
    </div>
</template>

<script>
import { UpdateOJT, fetchHrData } from '@/api/EFormApi';
import {store} from '@/views/store.js'
import Swal from "sweetalert2";

export default {
    data() {
        return {
            form: {
                achieveTarget: '',
                reason: '',
                verify: '',
                name: ''
            },
            refNo: null,
            validationErrors: {},
            status: '',
        }
    },
    mounted() {
        this.refNo = this.$route.params.refNo;
        this.fetchHrData();
    },
    methods: {
        confirmExit() {
            Swal.fire({
                title: 'Are you sure you want to exit?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Exit!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$router.push('/e-dashboard');
                }
            })
        },
        validateForm(){
            this.validationErrors = {};
            if (!this.form.achieveTarget) this.validationErrors.achieveTarget = true;
            if (!this.form.verify) this.validationErrors.verify = true;

            return Object.keys(this.validationErrors).length === 0;
        },
        async fetchHrData(){
            const username_id = store.getSession().userDetails.userId;
            this.loadingText = 'Fetching';
            this.loading = true;
            try {
                const data = await fetchHrData(username_id);
                if (data){
                    this.form.name = data.name; 
                }
            }catch(error){
                console.error("Error fetching Employee data:", error);
                throw error;
            }
        },
        async UpdateOJT(refNo) {
            if (this.validateForm()) {
                Swal.fire({
                    title: 'Are you sure you want to submit?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, Submit!'
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        try {
                            Swal.fire({
                                title: 'Submitting...',
                                text: 'Please wait while we submit your data.',
                                allowOutsideClick: false,
                                didOpen: () => {
                                    Swal.showLoading();
                                }
                            })
                            const OJTHod = {
                                refNo: refNo,
                                ...this.form,
                            };
                            const update = await UpdateOJT(OJTHod);
                            console.log(update);
                            Swal.close();

                            Swal.fire({
                                title: 'Saved!',
                                text: 'Your data has been saved.',
                                icon: 'success',
                                confirmButtonColor: '#3085d6',
                                confirmButtonText: 'OK'
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    this.$router.push('/e-dashboard');
                                }
                            });
                            this.isSubmitted = true;
                            this.resetForm();
                        }
                        catch (error) {
                            Swal.close();
                            console.error('Submission failed:', error.response ? error.response.data :
                                error.message);

                            Swal.fire({
                                title: 'Error!',
                                text: error.response ? error.response.data.message ||
                                    'Submission failed. Please try again later.' :
                                    'Submission failed. Please try again later.',
                                icon: 'error',
                                confirmButtonColor: '#3085d6',
                                confirmButtonText: 'OK'
                            });
                        }
                    }
                });
            } else {
                Swal.fire({
                        title: 'Error!',
                        text: 'Please fill in all required fields.',
                        icon: 'error',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'OK'
                    });
            }

        },
        resetForm() {
            this.form = {
                ...this.form,
            };
            this.validationErrors = {};
        },

    }
    };
</script>