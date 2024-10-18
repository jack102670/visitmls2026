<template>
    <div class="border border-[1px] rounded-md mt-2 p-4 space-y-2">
        <div>
            <p class="block text-md font-bold text-primary dark:text-white">Introduction</p>
        </div>
        <div class="col-span-1 md:col-span-3 flex flex-wrap justify-between space-x-2">
            <h2>Nature of the training:</h2>
            <div class="flex flex-wrap gap-2 mt-2">
                <button class="w-full md:w-auto px-4 py-1 rounded-md text-sm"
                    :class="{ 'bg-primary border-[1px] text-white': form.trainingNature.includes('skills1'), 'bg-transparent border-[1px] border-gray-300': !form.trainingNature.includes('skills1') }"
                    @click="selectTrainingNature('skills1')">
                    Skills
                </button>
                <button class="w-full md:w-auto px-4 py-1 rounded-md text-sm"
                    :class="{ 'bg-primary border-[1px] text-white': form.trainingNature.includes('knowledge'), 'bg-transparent border-[1px] border-gray-300': !form.trainingNature.includes('knowledge') }"
                    @click="selectTrainingNature('knowledge')">
                    Knowledge
                </button>
                <button class="w-full md:w-auto px-4 py-1 rounded-md text-sm"
                    :class="{ 'bg-primary border-[1px] text-white': form.trainingNature.includes('refresher'), 'bg-transparent border-[1px] border-gray-300': !form.trainingNature.includes('refresher') }"
                    @click="selectTrainingNature('refresher')">
                    Refresher
                </button>
            </div>
            <div v-if="validationErrors.trainingNature" class="text-red-500 text-sm">
                Please select at least one nature of training.
            </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-4">
            <div>
                <div class=" items-center space-x-2 space-y-2">
                    <label for="traineeName" class="block mb-2 text-sm font-medium text-primary dark:text-white">Trainee
                        Name:
                        <span class="text-red-500">*</span></label>
                    <input type="text" id="traineeName" v-model="form.name"
                        class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Trainee Name" required />
                    <span v-if="validationErrors.name" class="text-red-500 text-sm">Please fill in this
                        field</span>
                    <label for="traineeDesignation"
                        class="block mb-2 text-sm font-medium text-primary dark:text-white">Trainee
                        Designation: <span class="text-red-500">*</span></label>
                    <input type="text" id="traineeDesignation" v-model="form.designation"
                        class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Trainee Designation" required />
                    <span v-if="validationErrors.designation" class="text-red-500 text-sm">Please fill in
                        this
                        field</span>
                    <label for="date" class="block mb-2 text-sm font-medium text-primary dark:text-white">Date Required:
                        <span class="text-red-500">*</span></label>
                    <div class="relative max-w-sm">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </div>
                        <input ref="datepicker" id="DateRequired" type="text" v-model="form.trainingDate"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Select date" required>
                        <span class="text-red-500 text-sm" v-if="validationErrors.trainingDate">Please fill in this
                            field.</span>
                    </div>
                </div>
            </div>
            <div>
                <div class=" items-center space-x-2 space-y-2">
                    <label for="courseTitle" class="block mb-2 text-sm font-medium text-primary dark:text-white">Course
                        Title:
                        <span class="text-red-500">*</span></label>
                    <input type="text" id="courseTitle" v-model="form.courseTitle"
                        class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Course title" required />
                    <span v-if="validationErrors.courseTitle" class="text-red-500 text-sm">Please fill in this
                        field</span>
                    <label for="TrainingInstitution"
                        class="block mb-2 text-sm font-medium text-primary dark:text-white">Training
                        Institution: <span class="text-red-500">*</span></label>
                    <input type="text" id="TrainingInstitution" v-model="form.trainingInstitution"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Training Institution" required />
                    <span class="text-red-500 text-sm" v-if="validationErrors.trainingInstitution">
                        Please fill in this field.
                    </span>
                </div>
            </div>
            <div>
                <div class=" items-center space-x-2 space-y-2">
                    <label for="trainerName" class="block mb-2 text-sm font-medium text-primary dark:text-white">Trainer
                        Name:<span class="text-red-500">*</span></label>
                    <input type="text" id="trainerName" v-model="form.trainerName"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Trainer Name" required />
                    <span class="text-red-500 text-sm" v-if="validationErrors.trainerName">
                        Please fill in this field. </span>
                    <label for="position"
                        class="block mb-2 text-sm font-medium text-primary dark:text-white">Venue:<span
                            class="text-red-500">*</span></label>
                    <input type="text" id="venue" v-model="form.trainingVenue"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Venue" required />
                    <span v-if="validationErrors.trainingVenue" class="text-red-500 text-sm">Please fill in this
                        field</span>
                </div>
            </div>
        </div>
        <div class="border-b-[1px] py-2"></div>
        <div class="py-4">
            <p for="position" class="block mb-2 text-md font-bold text-primary dark:text-white">
                Training Objectives and course content
            </p>

            <p for="position" class="block mb-2 text-sm font-medium text-primary dark:text-white">A. Please give your
                feedback on the following statements, which relate to this training program
            </p>
        </div>
        <div class="space-y-2">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-4">
                <div class="space-y-2">
                    <div>
                        <p class="text-sm font-medium">Objectives of this program adequately met</p>
                    </div>
                    <div class=" items-center space-x-2 space-y-2">
                        <input id="poor-objectives" type="radio" name="objectives" value="Poor"
                            v-model="form.programObjective"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                        <label for="poor-objectives" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Poor
                        </label>
                        <input id="fair-objectives" type="radio" name="objectives" value="Fair"
                            v-model="form.programObjective"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                        <label for="fair-objectives" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Fair
                        </label>
                        <input id="good-objectives" type="radio" name="objectives" value="Good"
                            v-model="form.programObjective"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                        <label for="good-objectives" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Good
                        </label>
                        <input id="excellent-objectives" type="radio" name="objectives" value="Excellent"
                            v-model="form.programObjective"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                        <label for="excellent-objectives"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Excellent
                        </label>
                    </div>
                </div>

                <div class="space-y-2">
                    <div>
                        <p class="text-sm font-medium">Training will greatly asisst you in your profession /
                            area of
                            work</p>
                    </div>
                    <div class=" items-center space-x-2 space-y-2">
                        <input id="poor-training" type="radio" name="training" value="Poor"
                            v-model="form.programSupport"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                        <label for="poor-training" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Poor
                        </label>
                        <input id="fair-training" type="radio" name="training" value="Fair"
                            v-model="form.programSupport"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                        <label for="fair-training" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Fair
                        </label>
                        <input id="good-training" type="radio" name="training" value="Good"
                            v-model="form.programSupport"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                        <label for="good-training" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Good
                        </label>
                        <input id="excellent-training" type="radio" name="training" value="Excellent"
                            v-model="form.programSupport"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                        <label for="excellent-training"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Excellent
                        </label>
                    </div>
                </div>
                <div class="space-y-2">
                    <div>
                        <p class="text-sm font-medium">Trainer has good presentation skill/style, knowledge and
                            grip
                            over the subject</p>
                    </div>
                    <div class="items-center space-x-2 space-y-2">
                        <input id="poor-GoodPresentationSkills" type="radio" name="GoodPresentationSkills" value="Poor"
                            v-model="form.trainerPresentation"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="new-recruitment" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Poor</label>
                        <input id="fair-GoodPresentationSkills" type="radio" name="GoodPresentationSkills" value="Fair"
                            v-model="form.trainerPresentation"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="new-recruitment" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Fair</label>
                        <input id="good-GoodPresentationSkills" type="radio" name="GoodPresentationSkills" value="Good"
                            v-model="form.trainerPresentation"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="new-recruitment" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Good</label>
                        <input id="excellent-GoodPresentationSkills" type="radio" name="GoodPresentationSkills"
                            value="Excellent" v-model="form.trainerPresentation"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="new-recruitment" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Excellent</label>
                    </div>
                </div>

                <div class="space-y-2">
                    <div>
                        <p class="text-sm font-medium">Test result (If any)</p>
                    </div>
                    <div class=" items-center space-x-2 space-y-2">
                        <input id="poor-testResult" type="radio" name="testResult" value="Poor"
                            v-model="form.testResult"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="new-recruitment" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Poor</label>
                        <input id="fair-testResult" type="radio" name="testResult" value="Fair"
                            v-model="form.testResult"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="new-recruitment" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Fair</label>
                        <input id="good-testResult" type="radio" name="testResult" value="Good"
                            v-model="form.testResult"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="new-recruitment" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Good</label>
                        <input id="excellent-testResult" type="radio" name="testResult" value="Excellent"
                            v-model="form.testResult"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="new-recruitment" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Excellent</label>
                    </div>
                </div>

            </div>

        </div>

        <div class="border-b-[1px] py-4"></div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 mt-4">
            <div class=" items-center space-x-2 space-y-2">
                <div>
                    <label for="position" class="block mb-2 text-sm font-medium text-primary dark:text-white">B.
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
                <div>
                    <label for="position" class="block lg:mb-7 text-sm font-medium text-primary dark:text-white ">
                        General Comments (If any)
                    </label>
                    <textarea id="generalComments" rows="4" v-model="form.generalComment"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write your comments here"></textarea>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-8 space-x-2 mt-4">
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
        PostSectionATrainingEvaluation, fetchHrData
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
                    verifierId: '',
                },
                validationErrors: {},
                isSubmittedForm: false,
            }
        },
        methods: {
            // selectTrainingNature(trainingNature) {
            //     this.form.trainingNature = trainingNature;
            // },
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
                if (!this.form.trainingNature) {
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

                                const evaluationData = {
                                    ...this.form,
                                    trainingNature: this.form.trainingNature.join(', '),
                                };
                                console.log("Data to be submitted:", evaluationData);
                                
                                const response = await PostSectionATrainingEvaluation(evaluationData);
                                console.log("Form submitted successfully:", response);
                                this.isSubmittedForm = true;
                                Swal.fire({
                                    title: 'Saved!',
                                    text: 'Your data has been saved.',
                                    icon: 'success',
                                    confirmButtonColor: '#3085d6',
                                    confirmButtonText: 'OK'
                                });
                            } catch (error) {
                                console.error('Submission failed:', error);
                                Swal.fire({
                                    title: 'Error!',
                                    text: 'Submission failed. Please try again later.',
                                    icon: 'error',
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
                        confirmButtonText: 'OK'
                    });
                }
            },
        },
        mounted() {
            flatpickr(this.$refs.datepicker, {
                dateFormat: "Y-m-d",
            });
        },
    }
</script>