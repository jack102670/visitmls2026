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
                <label for="company" class="block mb-1 text-sm font-medium text-primary dark:text-white">
                    Company Name: <span class="text-red-500">*</span>
                </label>
                <select id="company" v-model="form.company"
                    class="bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="" class="text-gray-400" disabled>Select Company</option>
                    <option v-for="company in Companies" :key="company.company_code" :value="company.company_name"
                        class="text-gray-900 text-sm">
                        {{ company.company_name }}
                    </option>
                    <option v-if="Companies.length === 0" disabled>No companies available</option>
                </select>
                <span v-if="validationErrors.company" class="text-red-500 text-sm">Please fill in this field.</span>
            </div>
            <div class="">
                <label for="dateRequired" class="block mb-2 text-sm font-medium text-primary dark:text-white">Date
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
                    <input id="datepicker-autohide" type="date" v-model="form.dateRequired"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required />
                </div>
                <span v-if="validationErrors.dateRequired" class="text-red-500 text-sm">Please fill in this
                    field.</span>
            </div>
            <div>
          <label for="department" class="block mb-1 text-sm font-medium text-primary dark:text-white">
            Department: <span class="text-red-500">*</span>
          </label>
          <select id="department" v-model="form.department"
            class="bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="" class="text-gray-400" disabled>Select Department</option>
            <option v-for="department in Departments" :key="department.department" :value="department.department"
              class="text-gray-900 text-sm">
              {{ department.department }}
            </option>
            <option v-if="Departments.length === 0" disabled>No deparments available</option>
          </select>
          <span v-if="validationErrors.department" class="text-red-500 text-sm">Please fill in this field.</span>
        </div>
            <div>
                <label for="numberPersonnel" class="block mb-2 text-sm font-medium text-primary dark:text-white">No of
                    Personnel
                    Required: <span class="text-red-500">*</span></label>
                <input type="number" id="numberPersonnel" v-model="form.numberPersonnel"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="No of personnel required" required />
                <span class="text-red-500 text-sm" v-if="validationErrors.numberPersonnel">Please fill in this
                    field</span>
            </div>
            <div>
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
                <label for="requisitionPurpose" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    Requisition if for: <span class="text-red-500">*</span></label>
                <div class="flex flex-wrap gap-4 ">
                    <div class="flex items-center">
                        <input id="newReqruitment-requisitionPurpose" type="radio" name="requisitionPurpose"
                            value="newRecruitment" v-model="form.requisitionPurpose"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="new-recruitment"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">New
                            Recruitment</label>
                    </div>
                    <div class="flex items-center">
                        <input id="temporary-requisitionPurpose" type="radio" name="requisitionPurpose"
                            value="temporary" v-model="form.requisitionPurpose"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="temporary"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Temporary</label>
                    </div>
                    <div class="flex items-center">
                        <input id="replacement-requisitionPurpose" type="radio" name="requisitionPurpose"
                            value="replacement" v-model="form.requisitionPurpose"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="replacement"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Replacement</label>
                    </div>
                </div>
            </div>
            <div>
                <label for="manpowerBudget" class="block mb-2 text-sm font-medium text-primary dark:text-white">
                    Manpower request is: <span class="text-red-500">*</span></label>
                <div class="flex flex-wrap gap-4">
                    <div class="flex items-center">
                        <input id="budgeted-manpowerBudget" type="radio" name="manpowerBudget" value="budgeted"
                            v-model="form.manpowerBudget"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="budgeted"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Budgeted</label>
                    </div>
                    <div class="flex items-center">
                        <input id="unbudgeted-manpowerBudget" type="radio" name="manpowerBudget" value="unbudgeted"
                            v-model="form.manpowerBudget"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="unbudgeted"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">UnBudgeted</label>
                    </div>

                </div>
            </div>
            <div>
                <label for="name" class="block mb-2 text-sm font-medium text-primary dark:text-white italic">Name
                    of Person to be replaced: <span class="text-red-500">*</span></label>
                <input type="text" id="name" v-model="form.name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Input Name" required />
                <span class="text-red-500 text-sm" v-if="validationErrors.name">Please fill in this field</span>
            </div>
            <div v-if="form.manpowerBudget === 'unbudgeted'">
                <label for="reasonUnbudget"
                    class="block mb-2 text-sm font-medium text-primary dark:text-white italic">Reason
                    for UnBudgeted:
                </label>
                <input type="text" id="reasonUnbudget" v-model="form.reasonUnbudget"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Reason for unbudgeted"  />
            </div>
            <div>
                <label for="position" class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                    Kindly Attach Job Description & Organization Chart:
                </label>
                <input
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="file_input_help" id="file_input" type="file">
                <p class="mt-1 text-xs  text-right" id="file_input_help">Attachment(s):
                    WORDS, PDF, SVG, PNG, or JPG
                    (MAX. 5MB)</p>
            </div>
        </div>
        <div class="grid grid-cols-1">
            <hr class="w-full border-b border-b-[1px] my-4" />
            <div>
                <label for="requestReason"
                    class="block mb-2 text-sm font-medium text-primary dark:text-white italic">Justification / Reason
                    for request : </label>
                <textarea id="requestReason" rows="4" v-model="form.requestReason"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your comments here"></textarea>
                <span class="text-red-500 text-sm" v-if="validationErrors.requestReason">Please fill in this
                    field</span>
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
import {
    fetchHrData,
    getCompanyName,
    getDepartment
} from '@/api/EFormApi';
import {
    store
} from "@/views/store.js";
export default {
    props: ['formData'],
    data() {
        return {
            fileName: '',
            form: this.formData.sectionA || {
                position: '',
                company: '',
                department: '',
                location: '',
                numberPersonnel: '',
                basicSalary: '',
                requisitionPurpose: '',
                manpowerBudget: '',
                dateRequired: '',
                name: '',
                reasonUnbudget: '',
                requestReason: '',
            },
            validationErrors: {},
            Companies: [],
            Departments: [],
        }
    },
    async created() {
        await this.getListCompanyName();
        this.form.department = await this.getListOfDepartments();
    },
    methods: {
        async fetchHrData() {
            const username_id = store.getSession().userDetails.userId;
            this.loadingText = 'Fetching';
            this.loading = true;
            try {
                const data = await fetchHrData(username_id);
                if (data) {
                    this.user = data;
                    // this.form.position = data.position_title;
                    this.form.company = data.company_name;
                    this.form.department = data.department;
                }
                // console.log("Employee Data:", this.user);
            } catch (error) {
                throw new Error("Failed to fetch Employee data. Please try again.");
            } finally {
                this.loading = false;
            }
        },
        async getListCompanyName() {
            try {
                const data = await getCompanyName();
                if (Array.isArray(data)) {
                    this.Companies = data;
                } else {
                    console.error('Unexpected response format:', data);
                    throw new Error('Unexpected. Failed to fetch companies.');
                }
            } catch (error) {
                console.error('Error fetching companies:', error);
                throw new Error('Failed to fetch companies.');
            }
        },
        async getListOfDepartments() {
      try {
        const data = await getDepartment();
        if (Array.isArray(data)) {
          this.Departments = data;
          // console.log('This is the list of Companies:');
          // this.Departments.forEach(department => {
          //   console.log(department.department);
          // });
        } else {
          console.error('Unexpected response format:', data);
          throw new Error('Failed to fetch departments.');
        }
      } catch (error) {
        console.error('Error fetching departments:', error);
        throw new Error('Failed to fetch departments.');
      }
    },
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
            if (!this.form.reasonUnbudget || this.form.reasonUnbudget.trim() === '') {
            this.form.reasonUnbudget = '';
        }
            if (!this.form.position) this.validationErrors.position = true;
            if (!this.form.company) this.validationErrors.company = true;
            if (!this.form.dateRequired) this.validationErrors.dateRequired = true;
            if (!this.form.department) this.validationErrors.department = true;
            if (!this.form.numberPersonnel) this.validationErrors.numberPersonnel = true;
            if (!this.form.location) this.validationErrors.location = true;
            if (!this.form.basicSalary) this.validationErrors.basicSalary = true;
            if (!this.form.requisitionPurpose) this.validationErrors.requisitionPurpose = true;
            if (!this.form.manpowerBudget) this.validationErrors.manpowerBudget = true;
            if (!this.form.name) this.validationErrors.name = true;
            if (!this.form.requestReason) this.validationErrors.requestReason = true;
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
                        console.log('Form data section A saved:', this.form);
                        console.log ('reason undbudget:', this.form.reasonUnbudget);
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
    mounted() {
        this.fetchHrData();
    },
}
</script>