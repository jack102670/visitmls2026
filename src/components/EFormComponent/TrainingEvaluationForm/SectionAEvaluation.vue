<template>
    <div class="border border-[1px] rounded-md mt-2 p-4 space-y-2">
        <div class="space-y-4">
            <div>
                <p class="block text-md font-bold text-primary dark:text-white">Introduction</p>
            </div>
            <div class="flex flex-col space-y-2">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between md:space-x-4">
                    <h2 class="text-md font-semibold">Nature of the training:</h2>
                    <div class="flex flex-col md:flex-row gap-2">
                        <button
                            class="w-full md:w-auto px-4 py-2 rounded-md text-sm transition-colors duration-200 ease-in-out"
                            :class="{ 'bg-primary text-white border': form.trainingNature.includes('skills1'), 'bg-transparent border border-gray-300 hover:bg-gray-100': !form.trainingNature.includes('skills1') }"
                            @click="selectTrainingNature('skills1')">
                            Skills
                        </button>
                        <button
                            class="w-full md:w-auto px-4 py-2 rounded-md text-sm transition-colors duration-200 ease-in-out"
                            :class="{ 'bg-primary text-white border': form.trainingNature.includes('knowledge'), 'bg-transparent border border-gray-300 hover:bg-gray-100': !form.trainingNature.includes('knowledge') }"
                            @click="selectTrainingNature('knowledge')">
                            Knowledge
                        </button>
                        <button
                            class="w-full md:w-auto px-4 py-2 rounded-md text-sm transition-colors duration-200 ease-in-out"
                            :class="{ 'bg-primary text-white border': form.trainingNature.includes('refresher'), 'bg-transparent border border-gray-300 hover:bg-gray-100': !form.trainingNature.includes('refresher') }"
                            @click="selectTrainingNature('refresher')">
                            Refresher
                        </button>
                    </div>
                </div>
                <div v-if="validationErrors.trainingNature" class="text-red-500 text-xs md:text-right">
                    Please select at least one nature of training.
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            <div class="space-y-4">
                <div class="space-y-2">
                    <label for="traineeName" class="block text-sm font-medium text-primary dark:text-white">
                        Trainee Name: <span class="text-red-500">*</span>
                    </label>
                    <input type="text" id="traineeName" v-model="form.name"
                        class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Trainee Name" required readonly />
                    <span v-if="validationErrors.name" class="text-red-500 text-xs">Please fill in this field</span>
                </div>
                <div class="space-y-2">
                    <label for="traineeDesignation" class="block text-sm font-medium text-primary dark:text-white">
                        Trainee Designation: <span class="text-red-500">*</span>
                    </label>
                    <input type="text" id="traineeDesignation" v-model="form.designation"
                        class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Trainee Designation" required />
                    <span v-if="validationErrors.designation" class="text-red-500 text-xs">Please fill in this
                        field</span>
                </div>
                <div class="space-y-2">
                    <label for="date" class="block text-sm font-medium text-primary dark:text-white">
                        Date Required: <span class="text-red-500">*</span>
                    </label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </div>
                        <input ref="datepicker" id="DateRequired" type="text" v-model="form.trainingDate"
                            class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Select date" required>
                    </div>
                    <span v-if="validationErrors.trainingDate" class="text-red-500 text-xs">Please fill in this
                        field.</span>
                </div>
            </div>
            <div class="space-y-4">
                <div class="space-y-2">
                    <label for="courseTitle" class="block text-sm font-medium text-primary dark:text-white">
                        Course Title: <span class="text-red-500">*</span>
                    </label>
                    <input type="text" id="courseTitle" v-model="form.courseTitle"
                        class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Course title" required />
                    <span v-if="validationErrors.courseTitle" class="text-red-500 text-xs">Please fill in this
                        field</span>
                </div>
                <div class="space-y-2">
                    <label for="TrainingInstitution" class="block text-sm font-medium text-primary dark:text-white">
                        Training Institution: <span class="text-red-500">*</span>
                    </label>
                    <input type="text" id="TrainingInstitution" v-model="form.trainingInstitution"
                        class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Training Institution" required />
                    <span v-if="validationErrors.trainingInstitution" class="text-red-500 text-xs">
                        Please fill in this field.
                    </span>
                </div>
            </div>
            <div class="space-y-4">
                <div class="space-y-2">
                    <label for="trainerName" class="block text-sm font-medium text-primary dark:text-white">
                        Trainer Name: <span class="text-red-500">*</span>
                    </label>
                    <input type="text" id="trainerName" v-model="form.trainerName"
                        class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Trainer Name" required />
                    <span v-if="validationErrors.trainerName" class="text-red-500 text-xs">
                        Please fill in this field.
                    </span>
                </div>
                <div class="space-y-2">
                    <label for="venue" class="block text-sm font-medium text-primary dark:text-white">
                        Venue: <span class="text-red-500">*</span>
                    </label>
                    <input type="text" id="venue" v-model="form.trainingVenue"
                        class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Venue" required />
                    <span v-if="validationErrors.trainingVenue" class="text-red-500 text-xs">Please fill in this
                        field</span>
                </div>
            </div>
        </div>
        <div class="border-b-[1px] py-2"></div>
        <div class="py-4">
            <label class="block mb-2 text-md font-semibold text-primary dark:text-white">
                Training Objectives and course content
            </label>

            <p class="block mb-2 text-sm font-medium text-primary dark:text-white">A. Please give your
                feedback on the following statements, which relate to this training program
            </p>
        </div>
        <div class="space-y-2">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                <div class="space-y-2">
                    <p class="text-sm font-medium">Objectives of this program adequately met</p>
                    <div class="flex flex-wrap gap-4">
                        <label class="inline-flex items-center">
                            <input id="poor-objectives" type="radio" name="objectives" value="Poor"
                                v-model="form.programObjective"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                            <span class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Poor</span>
                        </label>
                        <label class="inline-flex items-center">
                            <input id="fair-objectives" type="radio" name="objectives" value="Fair"
                                v-model="form.programObjective"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                            <span class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fair</span>
                        </label>
                        <label class="inline-flex items-center">
                            <input id="good-objectives" type="radio" name="objectives" value="Good"
                                v-model="form.programObjective"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                            <span class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Good</span>
                        </label>
                        <label class="inline-flex items-center">
                            <input id="excellent-objectives" type="radio" name="objectives" value="Excellent"
                                v-model="form.programObjective"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                            <span class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Excellent</span>
                        </label>
                    </div>
                </div>
                <div class="space-y-2">
                    <p class="text-sm font-medium">Training will greatly assist you in your profession / area of work
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <label class="inline-flex items-center">
                            <input id="poor-training" type="radio" name="training" value="Poor"
                                v-model="form.programSupport"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                            <span class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Poor</span>
                        </label>
                        <label class="inline-flex items-center">
                            <input id="fair-training" type="radio" name="training" value="Fair"
                                v-model="form.programSupport"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                            <span class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fair</span>
                        </label>
                        <label class="inline-flex items-center">
                            <input id="good-training" type="radio" name="training" value="Good"
                                v-model="form.programSupport"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                            <span class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Good</span>
                        </label>
                        <label class="inline-flex items-center">
                            <input id="excellent-training" type="radio" name="training" value="Excellent"
                                v-model="form.programSupport"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                            <span class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Excellent</span>
                        </label>
                    </div>
                </div>
                <div class="space-y-2">
                    <p class="text-sm font-medium">Trainer has good presentation skill/style, knowledge and grip over
                        the subject</p>
                    <div class="flex flex-wrap gap-4">
                        <label class="inline-flex items-center">
                            <input id="poor-GoodPresentationSkills" type="radio" name="GoodPresentationSkills"
                                value="Poor" v-model="form.trainerPresentation"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                            <span class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Poor</span>
                        </label>
                        <label class="inline-flex items-center">
                            <input id="fair-GoodPresentationSkills" type="radio" name="GoodPresentationSkills"
                                value="Fair" v-model="form.trainerPresentation"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                            <span class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fair</span>
                        </label>
                        <label class="inline-flex items-center">
                            <input id="good-GoodPresentationSkills" type="radio" name="GoodPresentationSkills"
                                value="Good" v-model="form.trainerPresentation"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                            <span class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Good</span>
                        </label>
                        <label class="inline-flex items-center">
                            <input id="excellent-GoodPresentationSkills" type="radio" name="GoodPresentationSkills"
                                value="Excellent" v-model="form.trainerPresentation"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                            <span class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Excellent</span>
                        </label>
                    </div>
                </div>
                <div class="space-y-2">
                    <p class="text-sm font-medium">Test result (If any)</p>
                    <div class="flex flex-wrap gap-4">
                        <label class="inline-flex items-center">
                            <input id="poor-testResult" type="radio" name="testResult" value="Poor"
                                v-model="form.testResult"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                            <span class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Poor</span>
                        </label>
                        <label class="inline-flex items-center">
                            <input id="fair-testResult" type="radio" name="testResult" value="Fair"
                                v-model="form.testResult"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                            <span class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fair</span>
                        </label>
                        <label class="inline-flex items-center">
                            <input id="good-testResult" type="radio" name="testResult" value="Good"
                                v-model="form.testResult"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                            <span class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Good</span>
                        </label>
                        <label class="inline-flex items-center">
                            <input id="excellent-testResult" type="radio" name="testResult" value="Excellent"
                                v-model="form.testResult"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                            <span class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Excellent</span>
                        </label>
                    </div>
                </div>

            </div>
        </div>
        <div class="border-b-[1px] py-4"></div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 mt-4">
            <div class="items-center space-x-2 space-y-2">
                <div class="space-y-2 sm:space-y-4">
                    <label for="position" class="block  text-sm font-medium text-primary dark:text-white">B.
                        Please describe briefly on what you have gained from the course. (You may also share
                        your idea
                        on how would you plan or in what way will you apply the benefits from the course – if
                        any.):
                    </label>
                    <textarea id="CourseGained" rows="4" v-model="form.trainingBenefit"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write your comments here"></textarea>
                </div>
            </div>
            <div class="items-center space-x-`2 space-y-2">
                <div class="space-y-2 sm:space-y-4">
                    <label for="position" class="block  md:mb-7  text-sm font-medium text-primary dark:text-white ">
                        General Comments (If any)
                    </label>
                    <textarea id="generalComments" rows="4" v-model="form.generalComment"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write your comments here"></textarea>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-8 space-x-2 py-4">
            <div class="col-span-8 flex justify-end">
                <button @click.prevent="confirmExit"
                    class="bg-transparent text-rejected px-10 py-2 rounded-md border-[2px] border-rejected mr-4">
                    Exit
                </button>
                <button @click.prevent="submitForm" class="bg-verified text-white font-bold px-10 py-2 rounded-md">
                    Submit
                </button>
            </div>
        </div>
    </div>

</template>
<script>
    import Swal from 'sweetalert2';
    import flatpickr from 'flatpickr';
    import {
        PostSectionATrainingEvaluation,
        fetchHrData
    } from '@/api/EFormApi';
    import {
        store
    } from '@/views/store.js';
    export default {
        data() {
            return {
                // selectedButtons: [],
                form: {
                    name: '',
                    designation: '',
                    courseTitle: '',
                    trainingInstitution: '',
                    trainerName: '',
                    trainingVenue: '',
                    trainingNature: [],
                    trainingDate: '',
                    programObjective: '',
                    programSupport: '',
                    trainerPresentation: '',
                    testResult: '',
                    trainingBenefit: '',
                    generalComment: '',
                    requesterId: '',
                    verifierEmpId: '9D0DA821-5DE0-42E5-B268-B5E0BC40E8D1',
                },
                validationErrors: {},
                isSubmittedForm: false,
                user: {
                    name: '',
                    email_address: '',
                    department: '',
                    branch: '',
                    emp_id: '',
                },
            }
        },
        methods: {
            async fetchHrData() {
            const username_id = store.getSession().userDetails.userId;
            this.loadingText = 'Fetching';
            this.loading = true;
            try {
                // fetch user and input user data here
                const data = await fetchHrData(username_id);
                if (data) {
                    
                    this.user = data;
                    this.form.name = data.name; 
                    this.form.verifierEmpId = data.reporting_to;
                }
                console.log("Employee Data:", this.user);
            } catch (error) {
                console.error('Error fetching Employee data:', error);
                throw new Error('Failed to fetch Employee data. Please try again.');
            } finally {
                this.loading = false;
            }
        },

            selectTrainingNature(trainingNature) {
                const index = this.form.trainingNature.indexOf(trainingNature);
                if (index > -1) {
                    this.form.trainingNature.splice(index, 1);
                } else {
                    this.form.trainingNature.push(trainingNature);
                }
            },
            validateForm() {
                this.validationErrors = {};
                if (!this.form.name) this.validationErrors.name = true;
                if (!this.form.designation) this.validationErrors.designation = true;
                if (!this.form.courseTitle) this.validationErrors.courseTitle = true;
                if (!this.form.trainingInstitution) this.validationErrors.trainingInstitution = true;
                if (!this.form.trainerName) this.validationErrors.trainerName = true;
                if (!this.form.trainingVenue) this.validationErrors.trainingVenue = true;
                if (!this.form.trainingDate) this.validationErrors.trainingDate = true;
                if (this.form.trainingNature.length === 0) {
                    this.validationErrors.trainingNature = true;
                }
                return Object.keys(this.validationErrors).length === 0;
            },
            confirmExit() {
                Swal.fire({
                    title: 'Are you sure you want to exit?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, Exit!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.$router.push('/e-dashboard');
                    }
                })
            },
            submitForm() {
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
                            try {
                                // const HrData = await fetchHrData(username_id);
                                // console.log(HrData);
                                // this.form.verifierId = HrData.reporting_to;
                                Swal.fire({
                                    title: 'Submitting...',
                                    text: 'Please wait while we submit your data.',
                                    allowOutsideClick: false,
                                    didOpen: () => {
                                        Swal.showLoading(); 
                                    }
                                })
                                const evaluationData = {
                                    ...this.form,
                                    trainingNature: this.form.trainingNature.join(', '),
                                };
                                console.log("Data to be submitted:", evaluationData);
                                const response = await PostSectionATrainingEvaluation(evaluationData);
                                console.log("Form submitted successfully:", response);


                                Swal.close();

                                Swal.fire({
                                    title: 'Saved!',
                                    text: 'Your data has been saved.',
                                    icon: 'success',
                                    confirmButtonColor: '#3085d6',
                                    confirmButtonText: 'OK'
                                });
                                
                                this.isSubmittedForm = true;
                                this.resetForm();
                            } catch (error) {

                                Swal.close();

                                console.error('Submission failed:', error.response ? error.response.data :
                                    error.message);
                                Swal.fire({
                                    title: 'Error!',
                                    text: error.response ? error.response.data.message ||
                                        'Submission failed. Please try again later.' :
                                        'Submission failed. Please try again later.',
                                    icon: 'error',
                                    confirmButtonColor: '#3085d6',
                                    confirmButtonText: 'OK'
                                });
                            }
                        }
                    });
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Please fill in all required fields.',
                        icon: 'error',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'OK'
                    });
                }
            },
            resetForm() {
                this.form = {
                    name: '',
                    designation: '',
                    courseTitle: '',
                    trainingInstitution: '',
                    trainerName: '',
                    trainingVenue: '',
                    trainingNature: [],
                    trainingDate: '',
                    programObjective: '',
                    programSupport: '',
                    trainerPresentation: '',
                    testResult: '',
                    trainingBenefit: '',
                    generalComment: '',
                    requesterId: '',
                    verifierId: '',
                };
            },
        },
        mounted() {
            this.fetchHrData(); 
            flatpickr(this.$refs.datepicker, {
                dateFormat: "Y-m-d",
            });
        },
    }
</script>