<template>
    <div class="space-y-4 mt-2 rounded-md  px-4 py-2 border-[1px] rounded-md">
        <h1 class="font-bold text-md py-2">A. Position Requirements</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <label for="position" class="block mb-2 text-sm font-medium text-primary dark:text-white">Position to
                    be
                    filled: <span class="text-red-500">*</span></label>
                <input type="text" id="position" v-model="form.position"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Input position" required />
                <span v-if="validationErrors.position" class="text-red-500 text-sm">Please fill in this field</span>
            </div>
            <div>
                <label for="company" class="block mb-2 text-sm font-medium text-primary dark:text-white">Company Name:
                    <span class="text-red-500">*</span></label>
                <input type="text" id="company" v-model="form.company"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Company Name" required />
                <span v-if="validationErrors.company" class="text-red-500 text-sm">Please fill in this field</span>
            </div>
            <div class="">
                <label for="date" class="block mb-2 text-sm font-medium text-primary dark:text-white">Date Required:
                    <span class="text-red-500">*</span></label>
                <div class="relative max-w-full">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                    <input id="datepicker-autohide" type="date" v-model="form.dateRequired"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required />
                </div>
                <span v-if="validationErrors.dateRequired" class="text-red-500 text-sm">Please fill in this
                    field.</span>
            </div>
            <div>
                <label for="department" class="block mb-2 text-sm font-medium text-primary dark:text-white">Department:
                    <span class="text-red-500">*</span></label>
                <input type="text" id="department" v-model="form.department"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Department name" required />
                <span class="text-red-500 text-sm" v-if="validationErrors.department"></span>
            </div>
            <div>
                <label for="personnel" class="block mb-2 text-sm font-medium text-primary dark:text-white">No of
                    Personnel
                    Required: <span class="text-red-500">*</span></label>
                <input type="number" id="noofpersonnel" v-model="form.noofpersonnel"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="No of personnel required" required />
                <span class="text-red-500 text-sm" v-if="validationErrors.noofpersonnel">Please fill in this
                    field</span>
            </div>
            <div >
                <label for="location" class="block mb-2 text-sm font-medium text-primary dark:text-white">Location:
                    <span class="text-red-500">*</span></label>
                <input type="text" id="location" v-model="form.location"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Location" required />
                <span class="text-red-500 text-sm" v-if="validationErrors.location">Please fill in this field</span>
            </div>
            <div>
                <label for="basicSalary" class="block mb-2 text-sm font-medium text-primary dark:text-white">Basic
                    Salary
                    Propose: <span class="text-red-500">*</span></label>
                <input type="number" id="basicSalary" v-model="form.basicSalary"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Basic salary" required />
                <span class="text-red-500 text-sm" v-if="validationErrors.basicSalary">Please fill in this field</span>
            </div>
        </div>
        <hr class="w-full border-b border-b-[1px]" />
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <label for="basicSalary" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    Requisition if for: <span class="text-red-500">*</span></label>
                <div class="flex flex-wrap gap-4 ">
                    <div class="flex items-center">
                        <input id="newReqruitment-requisitionIfFor" type="radio" name="requisitionIfFor"
                            value="newRecruitment" v-model="form.requisitionIfFor"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="new-recruitment"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">New
                            Recruitment</label>
                    </div>
                    <div class="flex items-center">
                        <input id="temporary-requisitionIfFor" type="radio" name="requisitionIfFor" value="temporary"
                            v-model="form.requisitionIfFor"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="temporary"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Temporary</label>
                    </div>
                    <div class="flex items-center">
                        <input id="replacement-requisitionIfFor" type="radio" name="requisitionIfFor"
                            value="replacement" v-model="form.requisitionIfFor"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="replacement"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Replacement</label>
                    </div>
                </div>
            </div>
            <div>
                <label for="basicSalary" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    Manpower request is: <span class="text-red-500">*</span></label>
                <div class="flex flex-wrap gap-4">
                    <div class="flex items-center">
                        <input id="budgeted-manPowerRequestIs" type="radio" name="manPowerRequestIs" value="budgeted"
                            v-model="form.manPowerRequestIs"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="budgeted"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Budgeted</label>
                    </div>
                    <div class="flex items-center">
                        <input id="unbudgeted-manPowerRequestIs" type="radio" name="manPowerRequestIs"
                            value="unbudgeted" v-model="form.manPowerRequestIs"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="unbudgeted"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">UnBudgeted</label>
                    </div>

                </div>
            </div>
            <div>
                <label for="personReplacement"
                    class="block mb-2 text-sm font-medium text-primary dark:text-white italic">Name
                    of Person to be replaced: </label>
                <input type="text" id="personReplacement" v-model="form.personReplacement"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Input Name" />
            </div>
            <div>
                <label for="reasonForUnbudgeted"
                    class="block mb-2 text-sm font-medium text-primary dark:text-white italic">Reason
                    for UnBudgeted:
                </label>
                <input type="text" id="reasonForUnbudgeted" v-model="form.reasonForUnbudgeted"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Reason for unbudgeted" />
            </div>

        </div>
        <div class="grid grid-cols-1">
            <div>
                <label for="position" class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                    Kindly Attach Job Description & Organization Chart:
                </label>
                <input
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="file_input_help" id="file_input" type="file">
                <p class="mt-1 text-xs  text-right" id="file_input_help">Attachment(s):
                    WORDS, PDF, SVG, PNG, or JPG
                    (MAX. 800x400px)</p>

            </div>

        <hr class="w-full border-b border-b-[1px] my-4" />
            <div >
                <label for="justificationOrReason"
                    class="block mb-2 text-sm font-medium text-primary dark:text-white italic">Justification / Reason
                    for request : </label>
                <textarea id="justificationOrReason" rows="4" v-model="form.justificationOrReason"
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
                <button @click.prevent="handleNext" class="bg-primary text-white px-10 py-2 rounded-md">
                    Next
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
                fileName: '',
                // form: {
                //     justificationOrReason: this.formData.sectionA.justificationOrReason || '',
                //     position: this.formData.sectionA.position || '',
                //     company: this.formData.sectionA.company || '',
                //     dateRequired: this.formData.sectionA.dateRequired || '',
                //     department: this.formData.sectionA.department || '',
                //     noofpersonnel: this.formData.sectionA.noofpersonnel || '',
                //     location: this.formData.sectionA.location || '',
                //     basicSalary: this.formData.sectionA.basicSalary || '',
                //     requisitionIfFor: this.formData.sectionA.requisitionIfFor || '',
                //     manPowerRequestIs: this.formData.sectionA.manPowerRequestIs || '',
                //     personReplacement: this.formData.sectionA.personReplacement || '',
                //     reasonForUnbudgeted: this.formData.sectionA.reasonForUnbudgeted || '',
                // },
                form: this.formData.sectionA || {
                    justificationOrReason: '',
                    position: '',
                    company: '',
                    dateRequired: '',
                    department: '',
                    noofpersonnel: '',
                    location: '',
                    basicSalary: '',
                    requisitionIfFor: '',
                    manPowerRequestIs: '',
                    personReplacement: '',
                    reasonForUnbudgeted: '',
                },
                validationErrors: {},
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
            validateForm() {
                this.validationErrors = {};
                if (!this.form.position) this.validationErrors.position = true;
                if (!this.form.company) this.validationErrors.company = true;
                if (!this.form.dateRequired) this.validationErrors.dateRequired = true;
                if (!this.form.department) this.validationErrors.department = true;
                if (!this.form.noofpersonnel) this.validationErrors.noofpersonnel = true;
                if (!this.form.location) this.validationErrors.location = true;
                if (!this.form.basicSalary) this.validationErrors.basicSalary = true;
                if (!this.form.requisitionIfFor) this.validationErrors.requisitionIfFor = true;
                if (!this.form.manPowerRequestIs) this.validationErrors.manPowerRequestIs = true;
                return Object.keys(this.validationErrors).length === 0;
            },
            handleFileUpload(event) {
                const file = event.target.files[0].name;
                if (file) {
                    this.form.file = file;
                    this.fileError = '';
                } else {
                    this.fileError = 'Please select a file';
                }
            },
            handleNext() {
                if (this.validateForm()) {
                    Swal.fire({
                        title: 'Are you sure you want to proceed to the next section?',
                        icon: 'question',
                        showCancelButton: true,
                        confirmButtonText: 'Yes, proceed',
                        cancelButtonText: 'No, stay here',
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            console.log('Form data saved:', this.form);
                            this.$emit('update-form', this.form, 'A');
                            this.$emit('next-section', this.form);
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
            },
        },
    }
</script>