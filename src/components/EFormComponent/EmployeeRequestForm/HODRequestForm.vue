<template>
    <div class="space-y-4 border border-[1px] rounded-md px-4 py-2">
        <h1 class="font-bold text-md py-2">B. To be completed by the current HOD</h1>

        <div class="grid grid-cols-8 gap-4 mt-4">
            <div class="col-span-1">
                <label for="NameofHOD" class="w-1/4 text-sm font-medium text-primary dark:text-white">
                    Name of Head of Department (HOD) <span class="text-red-500">*</span>
                </label>
            </div>
            <div class="col-span-3">
                <input type="text" id="NameofHOD" class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
             focus:ring-blue-500 focus:border-blue-500 p-2.5 
             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name of HOD" />
            </div>

            <div class="col-span-1">
                <label for="employeeRequest" class="w-1/4 text-sm font-medium text-primary dark:text-white">
                    Employee Request for transfer (Approved / Rejected) <span class="text-red-500">*</span>
                </label>
            </div>
            <div class="col-span-3">
                <div class="flex space-x-4 items-center">
                    <input id="yes-experienceRequired" type="radio" value="yes" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 
               dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="yes-experienceRequired"
                        class="text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>

                    <input id="no-experienceRequired" type="radio" value="no" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 
               dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="no-experienceRequired"
                        class="text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                </div>
            </div>

        </div>
        <div class="grid grid-cols-8 gap-2">
            <div class="col-span-1">
                <label for="rejectionReason" class="w-1/3 text-sm font-medium text-primary dark:text-white">
                    If Rejected, Reason for rejection:
                </label>
            </div>
            <div class="col-span-7 ">
                <textarea id="reasonForRejection" rows="4" 
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write reason for rejection" ></textarea>

            </div>
        </div>
        <div class="grid grid-cols-8 space-x-2 mt-4">
            <div class="col-span-1">
                <label for="employeeRequest" class="w-1/4 text-sm font-medium text-primary dark:text-white">
                    If Employee’s transfer successful, any replacement required : <span class="text-red-500">*</span>
                </label>
            </div>
            <div class="col-span-3">
                <div class="flex space-x-4 items-center">
                    <input id="yes-experienceRequired" type="radio" value="yes" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 
               dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="yes-experienceRequired"
                        class="text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>

                    <input id="no-experienceRequired" type="radio" value="no" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 
               dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="no-experienceRequired"
                        class="text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                </div>
            </div>
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
    export default {};
</script>

<style scoped>
    /* Add any additional styles if needed */
</style>