<template>
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

        <div class="sm:grid sm:grid-cols-8 gap-2">
            <div class="col-span-1">
                <label class="block text-sm font-medium text-primary dark:text-white">Name:</label>
            </div>
            <div class="col-span-3">
                <input type="text" id="specifyRequirement"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Name" />
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
            <div class="col-span-1">
                <label class="block text-sm font-medium text-primary dark:text-white">Action By:</label>
            </div>
            <div class="col-span-3">
                <input type="text" id="specifyRequirement"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Action by name" />
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
            <div class="col-span-1">
                <label class="block text-sm font-medium text-primary dark:text-white">Position Filled By:</label>
            </div>
            <div class="col-span-3">
                <input type="text" id="specifyRequirement"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Position Filled by" />
            </div>
            <div class="col-span-1">
                <label class="block text-sm font-medium text-primary dark:text-white">Date Joined / Remarks: </label>
            </div>
            <div class="col-span-3">
                <input type="text" id="specifyRequirement"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Ex: dd/mm/yyyy / Remarks" />
            </div>
        </div>

        <hr class="border-[1px]" />
        <h1 class="font-bold text-md py-2">Approved By: </h1>

        <div class="sm:grid sm:grid-cols-8 gap-2">
            <div class="col-span-1">
                <label class="block text-sm font-medium text-primary dark:text-white">HR/Assigned HR?</label>
            </div>
            <div class="col-span-3">
                <div class="flex space-x-4 items-center mb-4">
                    <!-- Radio for Upload PDF -->
                    <input id="uploadPDF" name="hrOption" type="radio" value="uploadPDF" v-model="selectedOption"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="uploadPDF" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Upload
                        PDF</label>

                    <!-- Radio for Assigned HR -->
                    <input id="assignedHR" name="hrOption" type="radio" value="assignedHR" v-model="selectedOption"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="assignedHR" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Assigned
                        HR</label>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-8 space-x-2 mt-4 space-y-2">
            <div v-if="selectedOption === 'uploadPDF'" class="col-span-8 flex space-x-2">
                <div class="col-span-1 space-x-2">
                    <label class="block text-sm font-medium text-primary dark:text-white italic">Kindly attach the
                        approval PDF:
                        <span class="ms-2 cursor-pointer">
                            <font-awesome-icon :icon="['fa', 'file-export']" />
                        </span></label>
                </div>
                <div class="col-span-7 w-full">
                    <input
                        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        aria-describedby="file_input_help" id="file_input" type="file">
                    <p class="mt-1 text-xs text-gray-500 dark:text-gray-300 text-right" id="file_input_help">
                        Attachment(s): WORDS, PDF, SVG, PNG, or JPG (MAX. 800x400px)
                    </p>
                </div>
            </div>
            <div class="col-span-8 flex justify-end">
                <!-- Conditional buttons based on selection and download state -->
                <button v-if="selectedOption === 'uploadPDF' && !isDownloaded"
                    class="bg-verified text-white font-bold px-10 py-2 rounded-md" @click="handleDownloadAndSave"
                    :disabled="!selectedOption">
                    Download and Save
                </button>

                <button v-if="selectedOption === 'uploadPDF' && isDownloaded"
                    class="bg-verified text-white font-bold px-10 py-2 rounded-md">
                    Submit
                </button>

                <button v-if="selectedOption === 'assignedHR'"
                    class="bg-verified text-white font-bold px-10 py-2 rounded-md" :disabled="!selectedOption">
                    Save and Assigned
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>