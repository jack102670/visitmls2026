<template>
    <div class="space-y-4 border border-[1px] rounded-md px-4 py-2">
        <h1 class="font-bold text-md py-2">A. Employee Particulars</h1>
        <div class="grid grid-cols-8 gap-2 mt-4">

            <div class="col-span-1">
                <label for="position" class="block mb-2 text-sm font-medium text-primary dark:text-white">Name of
                    Employee: <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <input type="text" id="employee_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Input Name" required />
            </div>
            <div class="col-span-1">
                <label for="position" class="block mb-2 text-sm font-medium text-primary dark:text-white">Current
                    Designation: <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <input type="text" id="current_designation"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Input Current Designation" required />
            </div>
        </div>
        <div class="grid grid-cols-8 gap-2 mt-4">

            <div class="col-span-1">
                <label for="position" class="block mb-2 text-sm font-medium text-primary dark:text-white">Name of
                    Company: <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <input type="text" id="company_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Input Name of Company" required />
            </div>
            <div class="col-span-1">
                <label for="position" class="block mb-2 text-sm font-medium text-primary dark:text-white">Department: <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <input type="text" id="department"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Input Department" required />
            </div>
        </div>
        <div class="grid grid-cols-8 gap-2">
            <div class="col-span-1">
                <label for="personnel" class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                    Highest Qualification: <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <input id="highest_qualification" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write the highest qualification here" />
            </div>
        </div>
        <hr class="border border-b-[1px]" />
        <h1 class="font-bold text-md py-2">B. Requisition for Transfer</h1>
        <div class="grid grid-cols-8 gap-2">
            <div class="col-span-1">
                <label for="personnel" class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                    Position Interested <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <input id="position_interested" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Position Interested" required />
            </div>
            <div class="col-span-1">
                <label for="personnel" class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                    Department <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <input id="department_interested" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Department interested" required />
            </div>
        </div>
        <div class="grid grid-cols-8 gap-2">
            <div class="col-span-1">
                <label for="personnel" class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                    Do you have any work experience related to the position applied for?  If yes, kindly elaborate:</label>
            </div>
            <div class="col-span-7">
                <textarea id="position_interested" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write related work experience to the position applied" ></textarea>
            </div>
        </div>
        <div class="grid grid-cols-8 gap-2">
            <div class="col-span-1">
                <label for="personnel" class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                    Reason for transfer Request</label>
            </div>
            <div class="col-span-7">
                <textarea id="position_interested" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write reason for transfer request" ></textarea>
            </div>
        </div>
        <div class="grid grid-cols-8 space-x-2 mt-4">
            <div class="col-span-8 flex justify-end space-x-2">
                <button @click="confirmExit"
                    class="bg-transparent text-dark px-10 py-2 rounded-md border-[2px] border-rejected font-bold">
                    Exit
                </button>
                <button class="bg-verified text-white px-10 py-2 rounded-md font-bold">
                    Submit
                </button>
            </div>
        </div>
    </div>
</template>
<script>
    import Swal from 'sweetalert2';
    export default {
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