<template>
    <div class="space-y-4 border border-[1px] rounded-md px-4 py-2">
        <h1 class="font-bold text-md py-2">A. Date / Duration</h1>
        <div class="">
            <div class="grid grid-cols-8 gap-2 mt-4">
                <div class="col-span-4">
                    <div class="flex items-center">
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <input ref="datepickerStart" type="text"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Select date start" />
                        </div>
                        <span class="mx-4 text-gray-500">to</span>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <input ref="datepickerEnd" type="text"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Select date end" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-8 gap-2 mt-4 py-4">
                <div class="col-span-4">
                    <h2 class="font-bold text-md py-2">
                        Description
                    </h2>
                    <div class="text-sm font-regular">
                        <p class="">Introduction to the company</p>
                        <p>ISO Induction & Policies (QMS, EMS)</p>
                        <p>ICT Policy Briefing</p>
                        <p>Health, Safety & Environmental Policy Briefing</p>
                    </div>
                </div>
            </div>
            <hr class="w-full border-b border-b-[1px] mt-4" />
            <h1 class="font-bold text-md py-4">B. Date / Duration</h1>
            <div class="grid grid-cols-8 gap-2 py-4">
                <div class="col-span-4">
                    <div class="flex items-center">
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <input ref="datepickerStart" type="text"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Select date start" />
                        </div>
                        <span class="mx-4 text-gray-500">to</span>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <input ref="datepickerEnd" type="text"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Select date end" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-8 gap-2 mt-4 py-4 ">
                <div class="col-span-1">
                    <label for="position" class="block text-sm font-medium text-primary dark:text-white">On Job Training
                        (Kindly Describe):</label>
                </div>
                <div class="col-span-3">
                    <textarea type="text" id="position"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Input Name" required ></textarea>
                </div>
                <div class="col-span-4 flex space-x-6">
                    <div class="col-span-1">
                    </div>
                    <div class="col-span-3">
                        <div>
                        <label for="position" class="block text-sm font-medium text-primary dark:text-white">Trainee Acknowledgement:</label>
                    </div>
                    <div>
                        <label for="position" class="block text-sm font-regular text-primary dark:text-white italic">I hereby acknowledge that  i was introduced to the familiarisation programme by my trainer <span class="text-red-500">*</span></label>
                    </div>
                    <div class="py-2">
                        <input id="TraineeVerification" type="checkbox" 
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    </div>
                    </div>


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
                <button class="bg-verified font-bold text-white px-10 py-2 rounded-md">
                    Submit
                </button>
            </div>
        </div>
</template>

<script>

import Swal from "sweetalert2";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";

    export default {
        mounted() {
            flatpickr(this.$refs.datepickerStart, {
                dateFormat: "Y-m-d",
            });
            flatpickr(this.$refs.datepickerEnd, {
                dateFormat: "Y-m-d",
            });
        },
        methods: {
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
        }
    }
</script>