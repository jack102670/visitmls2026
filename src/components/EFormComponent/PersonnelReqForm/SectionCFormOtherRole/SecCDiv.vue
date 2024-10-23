<template>
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
                <button 
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
</script>