<template>
    <div id="crud-modal" tabindex="-1" aria-hidden="true"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
        <!-- Modal Container -->
        <div class="relative p-4 w-full max-w-xl max-h-full">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal Header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                        Select Request Product
                    </h3>
                    <button @click="$emit('close')" type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>

                <!-- Modal Body/Form -->
                <form @submit.prevent="handleSubmit" class="p-4 md:p-5">
                    <div class="grid gap-4 mb-4 grid-cols-2">
                        <div class="col-span-2">
                            <label for="category"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select request type
                                <span class="text-red-500">*</span></label>
                            <select id="category"
                            v-model="selectedRequestType"
                                class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 hover:text-dark block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                required>
                                <option value="personnel-requisition">Personnel Requisition</option>
                                <option value="employee-transfer">Employee Transfer</option>
                                <option value="on-job-training">On Job Training</option>
                                <option value="training-evaluation">Training Evaluation</option>
                                <option value="orientation-checklist">Orientation Checklist</option>
                                <option value="job-description">Job Description</option>
                            </select>
                        </div>
                    </div>
                    <div class="flex justify-end items-center space-x-2">
                        <button
                            class="bg-transparent  text-rejected border-rejected font-bold p-2 border-[2px] rounded-md hover:bg-rejected hover:border-rejected hover:text-white hover:border-[2px]">
                            Cancel
                        </button>
                            <button type="submit"
                                class="!bg-verified text-white font-bold p-2 border-[2px] border-verified rounded-md">
                                <span> Saved</span>
                            </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewReqModal",
        data() {
            return {
                selectedRequestType: 'personnel-requisition',
            };
        },
        methods: {

            handleSubmit() {
                if (this.selectedRequestType === 'personnel-requisition'){
                    this.$router.push('/personnel-requisition');
                } else if (this.selectedRequestType === 'employee-transfer'){
                    this.$router.push('/employee-transfer');
                }else if (this.selectedRequestType === 'on-job-training'){
                    this.$router.push('/on-job-training');
                } else if (this.selectedRequestType === 'training-evaluation'){
                    this.$router.push('/training-evaluation');
                } else if (this.selectedRequestType === 'orientation-checklist'){
                    this.$router.push('/orientation-checklist');
                }else if (this.selectedRequestType === 'job-description'){
                    this.$router.push('/job-description');
                }
                
            }
        }
    };
</script>