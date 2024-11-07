<template>
    <div class="space-y-2">
        <div class="space-y-6 border-[1px] rounded-md py-4 px-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label for="staffName" class="block mb-2 text-sm font-medium text-primary dark:text-white">Name of
                        staff:
                        <span class="text-red-500">*</span></label>
                    <input type="text" for="staffName" v-model="form.staffName" readonly
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    <span v-if="validationErrors.staffName" class="text-red-500 text-sm">Please fill in this
                        field.</span>
                </div>
                <div>
                    <label for="company" class="block mb-2 text-sm font-medium text-primary dark:text-white">Company:
                        <span class="text-red-500">*</span></label>
                    <input type="text" for="company" v-model="form.company" readonly
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    <span v-if="validationErrors.company_name" class="text-red-500 text-sm">Please fill in this
                        field.</span>
                </div>
                <div>
                    <label for="department"
                        class="block mb-2 text-sm font-medium text-primary dark:text-white">Department:
                        <span class="text-red-500">*</span></label>
                    <input type="text" for="department" v-model="form.department" readonly
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    <span v-if="validationErrors.department" class="text-red-500 text-sm">Please fill in this
                        field.</span>
                </div>
                <div>
                    <label for="dateJoined" class="block mb-2 text-sm font-medium text-primary dark:text-white">Date
                        Joined: <span class="text-red-500">*</span></label>
                    <div class="relative max-w-full">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </div>
                        <input id="datepicker-autohide" type="date" v-model="form.dateJoined"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required />
                    </div>
                    <span v-if="validationErrors.dateJoined" class="text-red-500 text-sm">Please fill in this
                        field.</span>
                </div>
                <div>
                    <label for="formType" class="block mb-2 text-sm font-medium text-primary dark:text-white">Programme
                        Type: <span class="text-red-500">*</span></label>
                    <div class="flex space-x-2">
                        <input id="familiarisation" type="radio" v-model="form.formType" value="familiarisation"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="familiarisation" class="block text-sm font-medium text-primary dark:text-white">
                            Familiarisation Programme
                        </label>
                        <input id="onJobTraining" type="radio" v-model="form.formType" value="onJobTraining"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="onJobTraining" class="block text-sm font-medium text-primary dark:text-white">
                            On Job Training Programme
                        </label>
                    </div>
                    <span v-if="validationErrors.formType" class="text-red-500 text-sm">Please fill in this
                        field.</span>
                </div>
            </div>
            <hr class="w-full border-b border-b-[1px] my-4" />
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                <div class="space-y-2">
                    <div class="">
                        <label class="block text-sm font-medium text-primary dark:text-white">Date / Duration: <span
                                class="text-red-500">*</span></label>
                    </div>
                    <div class="flex items-center">
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <input ref="datepickerStart" type="text" v-model="hrDateStart"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Select start date" required />
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
                            <input ref="datepickerEnd" type="text" v-model="hrDateEnd"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Select end date" required />
                        </div>
                    </div>
                    <span v-if="validationErrors.hrDateFinish" class="text-red-500 text-sm">Please fill in this
                        field.</span>
                </div>
                <div class="space-y-2">
                    <h2 class="block text-sm font-medium text-primary dark:text-white">Description</h2>
                    <div class="text-sm font-regular">
                        <p class="">Introduction to the company</p>
                        <p>ISO Induction & Policies (QMS, EMS)</p>
                        <p>ICT Policy Briefing</p>
                        <p>Health, Safety & Environmental Policy Briefing</p>
                    </div>
                </div>
                <div class="space-y-2">
                    <label for="requesterVerification"
                        class="block text-sm font-medium text-primary dark:text-white">Trainee
                        Acknowledgement:</label>
                    <label for="requesterVerification"
                        class="block text-sm font-regular text-primary dark:text-white italic">I acknowledge that my
                        trainer introduced me to the familiarization program.
                        <span class="text-red-500">*</span></label>
                    <div class="flex items-center">
                        <input id="requesterVerification" type="checkbox" v-model="form.requesterVerification"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">acknowledge</span>
                    </div>
                    <span v-if="validationErrors.requesterVerification" class="text-red-500 text-sm">Please fill in this
                        field.</span>
                </div>
                <div>
                    <label for="requesterVerification"
                        class="block text-sm font-medium text-primary dark:text-white">Trainer
                        Acknowledgement:</label>
                    <label for="requesterVerification"
                        class="block text-sm font-regular text-primary dark:text-white italic">This section are for HR
                        verification
                        <span class="text-red-500">*</span></label>
                    <!-- <input id="requesterVerification" type="radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"> -->
                </div>
            </div>
            <hr class="w-full border-b border-b-[1px] my-4" />
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                <div class="space-y-2">
                    <label class="block text-sm font-medium text-primary dark:text-white">Date / Duration:</label>
                    <div class="flex items-center">
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <input ref="Start" type="text" v-model="staffDateStart"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Select start date" />
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
                            <input ref="End" type="text" v-model="staffDateEnd"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Select end date" />
                        </div>
                        <span v-if="validationErrors.staffDateFinish" class="text-red-500 text-sm">Please fill in this
                            field.</span>
                    </div>
                </div>
                <div class="space-y-2">
                    <label for="position" class="block text-sm font-medium text-primary dark:text-white">
                        On Job Training (Kindly Describe): <span class="text-red-500">*</span>
                    </label>
                    <textarea id="position" v-model="bulletPoints"
                        class="block p-2.5 w-full text-sm min-h-[100px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        @click="addInitialBullet" @keydown="handleBulletPoints" placeholder="Describe On Job Training"
                        required></textarea>
                    <span v-if="validationErrors.descriptions" class="text-red-500 text-sm">Please fill in this
                        field.</span>
                </div>
                <div class="space-y-2">
                    <label for="requesterVerification"
                        class="block text-sm font-medium text-primary dark:text-white">Trainee
                        Acknowledgement:</label>
                    <label for="requesterVerification"
                        class="block text-sm font-regular text-primary dark:text-white italic">I acknowledge that my
                        trainer introduced me to the familiarization program.
                        <span class="text-red-500">*</span></label>
                    <div class="flex items-center">
                        <input id="requesterVerification" type="checkbox" v-model="form.requesterVerification"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">acknowledge</span>
                    </div>
                    <span v-if="validationErrors.requesterVerification" class="text-red-500 text-sm">Please fill in this
                        field.</span>
                </div>
                <div>
                    <label for="requesterVerification"
                        class="block text-sm font-medium text-primary dark:text-white">Trainer
                        Acknowledgement:</label>
                    <label for="requesterVerification"
                        class="block text-sm font-regular text-primary dark:text-white italic">This section are for HOD
                        verification
                        <span class="text-red-500">*</span></label>
                    <!-- <input id="requesterVerification" type="radio" v-model="form.requesterVerification"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"> -->
                </div>
            </div>
            <div class="space-y-4 px-4 py-2">
                <div class="grid grid-cols-8 space-x-2 mt-4">
                    <div class="col-span-8 flex justify-end">
                        <button @click.prevent="confirmExit"
                            class="bg-transparent font-bold text-dark px-10 py-2 rounded-md border-[2px] border-rejected mr-4">
                            Exit
                        </button>
                        <button @click.prevent="submitForm"
                            class="bg-verified font-bold text-white px-10 py-2 rounded-md">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import {
    fetchHrData, postOnJobTraining
} from '@/api/EFormApi';
import {
    store
} from '@/views/store.js';
import Swal from "sweetalert2";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";
export default {
    data() {
        return {
            form: {
                staffName: '',
                department: '',
                company: '',
                formType: '',
                requesterId: '',
                requesterDesignation: '',
                verifierEmpId: '',
                descriptions: [],
                dateJoined: '',
                requesterVerification: '',
                hrDateFinish: '',
                staffDateFinish: '',
            },
            hrDateStart: '',
            hrDateEnd: '',
            bulletPoints: '',
            validationErrors: {},
        }
    },
    mounted() {
        flatpickr(this.$refs.datepickerStart, {
            dateFormat: "Y-m-d",
        });
        flatpickr(this.$refs.datepickerEnd, {
            dateFormat: "Y-m-d",
        });
        flatpickr(this.$refs.Start, {
            dateFormat: "Y-m-d",
        });
        flatpickr(this.$refs.End, {
            dateFormat: "Y-m-d",
        });
        this.fetchHrData();
    },
    methods: {
        processBulletPoints() {
            const points = this.bulletPoints.split('\n').map(point => point.trim()).filter(point => point !== '•').map(point => point.startsWith('•') ? point.substring(1).trim() : point);
            return points;
        },
        addInitialBullet() {
            if (!this.bulletPoints) {
                this.bulletPoints = '• ';
            }
        },
        handleBulletPoints(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                const cursorPosition = event.target.selectionStart;
                const beforeCursor = this.bulletPoints.slice(0, cursorPosition);
                const afterCursor = this.bulletPoints.slice(cursorPosition);
                this.bulletPoints = `${beforeCursor}\n• ${afterCursor}`;
                this.$nextTick(() => {
                    event.target.selectionStart = event.target.selectionEnd = cursorPosition +
                        3;
                });
            }
        },
        checkDescriptions() {
            console.log(this.bulletPoints);
            if (Array.isArray(this.bulletPoints)) {
                console.log("Descriptions are saved in an array:", this.bulletPoints);
            } else {
                console.log("Descriptions are not saved in an array.");
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
            if (!this.form.staffName) this.validationErrors.staffName = true;
            if (!this.form.department) this.validationErrors.department = true;
            if (!this.form.company) this.validationErrors.company = true;
            if (!this.form.dateJoined) this.validationErrors.dateJoined = true;
            if (!this.form.formType) this.validationErrors.formType = true;
            if (!this.form.hrDateFinish) this.validationErrors.hrDateFinish = true;
            if (!this.form.staffDateFinish) this.validationErrors.staffDateFinish = true;


            return Object.keys(this.validationErrors).length === 0;
        },
        async fetchHrData() {
            const username_id = store.getSession().userDetails.userId;
            this.form.requesterId = username_id;

            this.loadingText = 'Fetching';
            this.loading = true;

            try {
                const data = await fetchHrData(username_id);
                if (data) {
                    this.user = data;
                    this.form.staffName = data.name;
                    this.form.verifierEmpId = data.reporting_to;
                    this.form.department = data.department;
                    this.form.requesterDesignation = data.position_title;
                    this.form.company = data.company_name;
                }
                console.log("Employee Data from fetchHrData:", this.user);
            } catch (error) {
                console.error('Error fetching Employee data:', error);
                throw error;
            } finally {
                this.loading = false;
            }
        },
        submitForm() {
            this.form.hrDateFinish = `${this.hrDateStart} - ${this.hrDateEnd}`;
            this.form.staffDateFinish = `${this.staffDateStart} - ${this.staffDateEnd}`;

            this.form.descriptions = this.processBulletPoints().slice();
            this.form.requesterVerification = this.form.requesterVerification ? "True" : "False";

            console.log('hrDateFinish and staffDateFinish:', this.form.hrDateFinish, this.form.staffDateFinish);
            console.log('descriptions:', this.form.descriptions);

            const username_id = store.getSession().userDetails.userId;
            this.form.requesterId = username_id;
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
                        console.log('Form data saved:', this.form);
                        try {
                            Swal.fire({
                                title: 'Submitting...',
                                text: 'Please wait while we submit your data.',
                                allowOutsideClick: false,
                                didOpen: () => {
                                    Swal.showLoading();
                                }
                            })
                            const OnJobTrainingData = {
                                ...this.form,
                            };
                            console.log("OnJobTrainingData:", OnJobTrainingData);
                            const response = await postOnJobTraining(OnJobTrainingData);
                            console.log("Form Submitted Successfully", response);
                            Swal.close();
                            Swal.fire({
                                title: 'Saved!',
                                text: 'Your data has been saved.',
                                confirmButtonColor: '#3085d6',
                                icon: 'success',
                                confirmButtonText: 'OK'
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    this.$router.push('/e-dashboard');
                                }
                            });
                            this.isSubmittedForm = true;
                            this.resetForm();

                        } catch (error) {
                            Swal.close();
                            console.error("Error while submitting form:", error);
                            throw error;
                        }
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
        resetForm() {
            this.form = {
                name: '',
                department: '',
                company: '',
                requesterId: "",
                requesterDesignation: "",
                verifierEmpId: "",
            }
            this.hrDateStart = '';
            this.hrDateEnd = '';
            this.bulletPoints = '';
        }
    },
}
</script>