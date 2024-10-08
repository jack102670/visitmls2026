<template>
    <div class="space-y-4  px-4 py-2">
        <h1 class="font-bold text-md py-2">A. Position Requirements</h1>
        <div class="grid grid-cols-8 gap-2 mt-4">

            <div class="col-span-1">
                <label for="position" class="block mb-2 text-sm font-medium text-primary dark:text-white">Position to
                    be
                    filled: <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <input type="text" id="position"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Input position" required />
            </div>
            <div class="col-span-1">
                <label for="company" class="block mb-2 text-sm font-medium text-primary dark:text-white">Company Name:
                    <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <input type="text" id="company"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Company Name" required />
            </div>
        </div>

        <div class="grid grid-cols-8 gap-2">
            <div class="col-span-1">
                <label for="date" class="block mb-2 text-sm font-medium text-primary dark:text-white">Date Required:
                    <span class="text-red-500">*</span></label>
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
                    <input id="datepicker-autohide" datepicker datepicker-autohide type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Select date" required>
                </div>

            </div>
            <div class="col-span-1">
                <label for="department" class="block mb-2 text-sm font-medium text-primary dark:text-white">Department:
                    <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <input type="text" id="department"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Department name" required />
            </div>
        </div>
        <div class="grid grid-cols-8 gap-2">
            <div class="col-span-1">
                <label for="personnel" class="block mb-2 text-sm font-medium text-primary dark:text-white">No of
                    Personnel
                    Required: <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <input type="number" id="noofpersonnel"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="No of personnel required" required />
            </div>
            <div class="col-span-1">
                <label for="location" class="block mb-2 text-sm font-medium text-primary dark:text-white">Location:
                    <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <input type="text" id="location"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Location" required />
            </div>
        </div>
        <div class="grid grid-cols-8 gap-2">
            <div class="col-span-1">
                <label for="basicSalary" class="block mb-2 text-sm font-medium text-primary dark:text-white">Basic
                    Salary
                    Propose: <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <input type="text" id="basicSalary"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Basic salary" required />
            </div>
        </div>
        <hr class="w-full border-b border-b-[1px]" />
        <div class="grid grid-cols-8 gap-2">
            <div class="col-span-1">
                <label for="basicSalary" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    Requisition if for: <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <div class="flex space-x-4 items-center mb-4">
                    <input id="new-recruitment" type="radio" name="requisition" value="new-recruitment"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="new-recruitment" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">New
                        Recruitment</label>

                    <input id="temporary" type="radio" name="requisition" value="temporary"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="temporary"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Temporary</label>

                    <input id="replacement" type="radio" name="requisition" value="replacement"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="replacement"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Replacement</label>
                </div>
            </div>
            <div class="col-span-1">
                <label for="basicSalary" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    Manpower request is: <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-3">
                <div class="flex space-x-4 items-center mb-4">
                    <input id="budgeted" type="radio" name="budget" value="budgeted"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="budgeted"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Budgeted</label>

                    <input id="unbudgeted" type="radio" name="budget" value="unbudgeted"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="unbudgeted"
                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">UnBudgeted</label>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-8 gap-2 mt-4">
            <div class="col-span-1">
                <label for="position" class="block mb-2 text-sm font-medium text-primary dark:text-white italic">Name
                    of Person to be replaced: </label>
            </div>
            <div class="col-span-3">
                <input type="text" id="position"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Input Name" required />
            </div>
            <div class="col-span-1">
                <label for="company" class="block mb-2 text-sm font-medium text-primary dark:text-white italic">Reason
                    for UnBudgeted:
                </label>
            </div>
            <div class="col-span-3">
                <input type="text" id="company"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Reason for unbudgeted" required />
            </div>
        </div>
        <div class="grid grid-cols-8 gap-2 mt-4">
            <div class="col-span-1">
                <label for="position" class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                    Kindly Attach Job Description & Organization Chart:
                </label>
            </div>
            <div class="col-span-7">
                <div class="flex items-center justify-center w-full">
                    <label for="dropzone-file"
                        class="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-[#EEF8FD] dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click
                                    to upload</span> or drag and drop</p>
                        </div>
                        <input id="dropzone-file" type="file" @change="handleFileUpload" class="hidden"
                            accept=".doc,.docx,.pdf,.png,.jpg,.jpeg,.gif" />
                    </label>
                </div>
                <div class="text-right py-1">
                    <p class="text-xs text-gray-500 dark:text-gray-400">Attachment(s): WORDS, PDF, SVG, PNG, or JPG
                        (MAX. 800x400px)</p>
                    <p v-if="fileName" class="text-sm font-medium text-gray-800 dark:text-gray-300">
                        Uploaded File: {{ fileName }}
                    </p>
                </div>
            </div>
        </div>
        <hr class="w-full border-b border-b-[1px]" />
        <div class="grid grid-cols-8 gap-2 mt-4">
            <div class="col-span-1">
                <label for="position"
                    class="block mb-2 text-sm font-medium text-primary dark:text-white italic">Justification / Reason
                    for request : </label>
            </div>
            <div class="col-span-7">
                <textarea id="message" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your comments here"></textarea>
            </div>
        </div>
        <div class="grid grid-cols-8 space-x-2 mt-4">
            <div class="col-span-8 flex justify-end">
                <button @click.prevent="confirmExit"
                    class="bg-transparent text-rejected px-10 py-2 rounded-md border-[2px] border-rejected mr-4">
                    Exit
                </button>
                <button class="bg-primary text-white px-10 py-2 rounded-md">
                    Next
                </button>
            </div>
        </div>
    </div>
</template>
<script>
    import Swal from 'sweetalert2';
    export default {
        data() {
            return {
                fileName: '',
            }
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
            handleFileUpload(event) {
                    const file = event.target.files[0].name;
                    if (file) {
                        this.fileName = file.name;
                    }
                },
        }
    }
</script>