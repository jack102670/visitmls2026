<template>
    <div class="border border-[1px] rounded-md mt-2 p-4 space-y-2">
        <div class="grid grid-cols-9 space-x-2 space-y-2 py-4">
            <div class="col-span-6">
                <p for="position" class="block text-md font-bold text-primary dark:text-white">
                    Introduction
                </p>
            </div>
            <div class="col-span-3 justify-between  flex space-x-2">
                <div class="col-span-1">
                    <h2>Nature of the training:</h2>
                </div>
                <div class="col-span-2  space-x-2 gap-2">
                    <div class="flex space-x-2">
                        <button class="w-full px-4 py-1 rounded-md text-sm"
                            :class="{ 'bg-primary border-[1px] text-white': selectedButtons.includes('skills1'), 'bg-transparent border-[1px] border-gray-300': !selectedButtons.includes('skills1') }"
                            @click="toggleSelection('skills1')">
                            Skills
                        </button>
                        <button class="w-full px-4 py-1 rounded-md text-sm"
                            :class="{ 'bg-primary border-[1px] text-white': selectedButtons.includes('knowledge'), 'bg-transparent border-[1px] border-gray-300': !selectedButtons.includes('knowledge') }"
                            @click="toggleSelection('knowledge')">
                            Knowledge
                        </button>
                        <button class="w-full px-4 py-1 rounded-md text-sm"
                            :class="{ 'bg-primary border-[1px] text-white': selectedButtons.includes('refresher'), 'bg-transparent border-[1px] border-gray-300': !selectedButtons.includes('refresher') }"
                            @click="toggleSelection('refresher')">
                            Refresher
                        </button>
                    </div>
                    <div v-if="validationErrors.selectedNaturetrainings" class="text-red-500 text-sm">
                        Please select at least one nature of training.
                    </div>

                </div>

            </div>

        </div>

        <!-- for future use, dont delete this -->
        <!-- <div v-else class="flex justify-end items-center space-x-2">
          <p class="text-red-500 text-xs italic font-regular">Please select either one</p>

        </div> -->
        <div class="grid grid-cols-9 space-x-2">
            <div class="col-span-1">
                <label for="traineeName" class="block mb-2 text-sm font-medium text-primary dark:text-white">Trainee
                    Name:
                    <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-2">
                <input type="text" id="traineeName" v-model="form.traineeName"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Trainee Name" required />
                <span v-if="validationErrors.traineeName" class="text-red-500 text-sm">Please fill in this
                    field"</span>
            </div>
            <div class="col-span-1">
                <label for="position" class="block mb-2 text-sm font-medium text-primary dark:text-white">Trainee
                    Designation: <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-2">
                <input type="text" id="traineeDesignation" v-model="form.traineeDesignation"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Trainee Designation" required />
                <span v-if="validationErrors.traineeDesignation" class="text-red-500 text-sm">Please fill in this
                    field"</span>
            </div>
            <div class="col-span-1">
                <label for="courseTitle" class="block mb-2 text-sm font-medium text-primary dark:text-white">Course
                    Title:
                    <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-2">
                <input type="text" id="courseTitle" v-model="form.courseTitle"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Course title" required />
                <span v-if="validationErrors.courseTitle" class="text-red-500 text-sm">Please fill in this
                    field"</span>
            </div>
        </div>
        <div class="grid grid-cols-9 space-x-2">
            <div class="col-span-1">
                <label for="TrainingInstitution"
                    class="block mb-2 text-sm font-medium text-primary dark:text-white">Training
                    Institution: <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-2">
                <input type="text" id="TrainingInstitution" v-model="form.TrainingInstitution"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Training Institution" required />
                <span class="text-red-500 text-sm" v-if="validationErrors.TrainingInstitution">
                    Please fill in this field.
                </span>
            </div>
            <div class="col-span-1">
                <label for="trainerName" class="block mb-2 text-sm font-medium text-primary dark:text-white">Trainer
                    Name:
                    <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-2">
                <input type="text" id="trainerName" v-model="form.trainerName"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Trainer Name" required />
                <span class="text-red-500 text-sm" v-if="validationErrors.trainerName">
                    Please fill in this field. </span>
            </div>
            <div class="col-span-1">
                <label for="position" class="block mb-2 text-sm font-medium text-primary dark:text-white">Venue: <span
                        class="text-red-500">*</span></label>
            </div>
            <div class="col-span-2">
                <input type="text" id="venue" v-model="form.Venue"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Venue" required />
                <span v-if="validationErrors.venue" class="text-red-500 text-sm">Please fill in this field"</span>
            </div>
        </div>
        <div class="grid grid-cols-9 space-x-2">
            <div class="col-span-1">
                <label for="date" class="block mb-2 text-sm font-medium text-primary dark:text-white">Date Required:
                    <span class="text-red-500">*</span></label>
            </div>
            <div class="col-span-2">

                <div class="relative max-w-sm">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                    <input ref="datepicker" id="DateRequired" type="text" v-model="form.DateRequired"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Select date" required>
                    <span class="text-red-500 text-sm" v-if="validationErrors.DateRequired">Please fill in this
                        field.</span>
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
            <div class="grid grid-cols-8 space-x-2">
                <div class="col-span-4 space-y-2">
                    <div>
                        <p class="text-sm font-medium">Objectives of this program adequately met</p>
                    </div>

                    <div class="flex space-x-4">
                        <div class="col-1 flex space-x-2">
                            <input id="poor-objectives" type="radio" name="objectives" value="Poor"
                                v-model="form.objectives"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                            <label for="poor-objectives"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Poor
                            </label>
                        </div>
                        <div class="col-1 flex space-x-2">
                            <input id="fair-objectives" type="radio" name="objectives" value="Fair"
                                v-model="form.objectives"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                            <label for="fair-objectives"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Fair
                            </label>
                        </div>
                        <div class="col-1 flex space-x-2">
                            <input id="good-objectives" type="radio" name="objectives" value="Good"
                                v-model="form.objectives"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                            <label for="good-objectives"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Good
                            </label>
                        </div>
                        <div class="col-1 flex space-x-2">
                            <input id="excellent-objectives" type="radio" name="objectives" value="Excellent"
                                v-model="form.objectives"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                            <label for="excellent-objectives"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Excellent
                            </label>
                        </div>
                    </div>

                </div>
                <div class="col-span-4 space-y-2">
                    <div>
                        <p class="text-sm font-medium">Training will greatly asisst you in your profession / area of
                            work</p>
                    </div>

                    <div class="flex space-x-4">
                        <div class="col-1 flex space-x-2">
                            <input id="poor-training" type="radio" name="training" value="Poor" v-model="form.training"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                            <label for="poor-training"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Poor
                            </label>
                        </div>
                        <div class="col-1 flex space-x-2">
                            <input id="fair-training" type="radio" name="training" value="Fair" v-model="form.training"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                            <label for="fair-training"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Fair
                            </label>
                        </div>
                        <div class="col-1 flex space-x-2">
                            <input id="good-training" type="radio" name="training" value="Good" v-model="form.training"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                            <label for="good-training"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Good
                            </label>
                        </div>
                        <div class="col-1 flex space-x-2">
                            <input id="excellent-training" type="radio" name="training" value="Excellent"
                                v-model="form.training"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600">
                            <label for="excellent-training"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Excellent
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-8 space-x-2">
                <div class="col-span-4 space-y-2">
                    <div>
                        <p class="text-sm font-medium">Trainer has good presentation skill/style, knowledge and grip
                            over the subject</p>
                    </div>

                    <div class="flex space-x-4">
                        <div class="col-1 flex space-x-2">
                            <input id="poor-GoodPresentationSkills" type="radio" name="GoodPresentationSkills"
                                value="Poor" v-model="form.GoodPresentationSkills"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="new-recruitment"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Poor</label>
                        </div>
                        <div class="col-1 flex space-x-2">
                            <input id="fair-GoodPresentationSkills" type="radio" name="GoodPresentationSkills"
                                value="Fair" v-model="form.GoodPresentationSkills"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="new-recruitment"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Fair</label>
                        </div>
                        <div class="col-1 flex space-x-2">
                            <input id="good-GoodPresentationSkills" type="radio" name="GoodPresentationSkills"
                                value="Good" v-model="form.GoodPresentationSkills"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="new-recruitment"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Good</label>
                        </div>
                        <div class="col-1 flex space-x-2">
                            <input id="excellent-GoodPresentationSkills" type="radio" name="GoodPresentationSkills"
                                value="Excellent" v-model="form.GoodPresentationSkills"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="new-recruitment"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Excellent</label>
                        </div>
                    </div>

                </div>
                <div class="col-span-4 space-y-2">
                    <div>
                        <p class="text-sm font-medium">Test result (If any)</p>
                    </div>

                    <div class="flex space-x-4">
                        <div class="col-1 flex space-x-2">
                            <input id="poor-testResult" type="radio" name="testResult" value="Poor"
                                v-model="form.testResult"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="new-recruitment"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Poor</label>
                        </div>
                        <div class="col-1 flex space-x-2">
                            <input id="fair-testResult" type="radio" name="testResult" value="Fair"
                                v-model="form.testResult"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="new-recruitment"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Fair</label>
                        </div>
                        <div class="col-1 flex space-x-2">
                            <input id="good-testResult" type="radio" name="testResult" value="Good"
                                v-model="form.testResult"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="new-recruitment"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Good</label>
                        </div>
                        <div class="col-1 flex space-x-2">
                            <input id="excellent-testResult" type="radio" name="testResult" value="Excellent"
                                v-model="form.testResult"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="new-recruitment"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Excellent</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-b-[1px] py-4"></div>
            <div class="grid grid-cols-8 pt-4">
                <div class="col-span-4">
                    <label for="position" class="block mb-2 text-sm font-medium text-primary dark:text-white">B.
                        Please describe briefly on what you have gained from the course. (You may also share your idea
                        on how would you plan or in what way will you apply the benefits from the course – if any.):
                    </label>
                </div>
                <div class="col-span-4">
                    <textarea id="CourseGained" rows="4" v-model="form.CourseGained"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write your comments here"></textarea>
                </div>
            </div>
            <div class="border-b-[1px] pt-4"></div>
            <div class="grid grid-cols-8 py-4">
                <div class="col-span-4">
                    <label for="position" class="block mb-2 text-sm font-medium text-primary dark:text-white ">
                        General Comments (If any)
                    </label>
                </div>
                <div class="col-span-4">
                    <textarea id="generalComments" rows="4" v-model="form.generalComments"
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
                    <button @click.prevent="submitForm" class="bg-verified text-white font-bold px-10 py-2 rounded-md">
                        Submit
                    </button>
                </div>
            </div>
        </div>

    </div>

</template>
<script>
    import Swal from 'sweetalert2';
    import flatpickr from 'flatpickr';
    export default {
        data() {
            return {
                selectedButtons: [],
                form: {
                    traineeName: '',
                    traineeDesignation: '',
                    courseTitle: '',
                    TrainingInstitution: '',
                    trainerName: '',
                    Venue: '',
                    DateRequired: '',
                    objectives: '',
                    training: '',
                    GoodPresentationSkills: '',
                    testResult: '',
                    CourseGained: '',
                    generalComments: '',
                    selectedNaturetrainings: [],
                },
                validationErrors: {},
                isSubmittedForm: false,
            }
        },
        methods: {
            toggleSelection(button) {
                if (this.selectedButtons.includes(button)) {
                    this.selectedButtons = this.selectedButtons.filter(item => item !== button);
                } else {
                    this.selectedButtons.push(button);
                }
                this.form.selectedNaturetrainings = this.selectedButtons;
            },
            validateForm() {
                this.validationErrors = {};
                if (!this.form.traineeName) this.validationErrors.traineeName = true;
                if (!this.form.traineeDesignation) this.validationErrors.traineeDesignation = true;
                if (!this.form.courseTitle) this.validationErrors.courseTitle = true;
                if (!this.form.TrainingInstitution) this.validationErrors.TrainingInstitution = true;
                if (!this.form.trainerName) this.validationErrors.trainerName = true;
                if (!this.form.Venue) this.validationErrors.venue = true;
                if (!this.form.DateRequired) this.validationErrors.DateRequired = true;
                if (this.selectedButtons.length === 0) {
                    this.validationErrors.selectedNaturetrainings = true;
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
                if (this.validateForm()) {
                    Swal.fire({
                        title: 'Are you sure you want to submit?',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, Submit!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            console.log('Form data saved:', this.form.objectives, this.form.training, this
                                .form.GoodPresentationSkills, this.form.testResult, this.form
                                .selectedNaturetrainings);
                            this.form = {
                                traineeName: '',
                                traineeDesignation: '',
                                courseTitle: '',
                                TrainingInstitution: '',
                                trainerName: '',
                                Venue: '',
                                DateRequired: '',
                                objectives: '',
                                training: '',
                                GoodPresentationSkills: '',
                                testResult: '',
                                CourseGained: '',
                                generalComments: '',
                                selectedNaturetrainings: [],
                            };
                            this.isSubmittedForm = true;
                            Swal.fire({
                                title: 'Saved!',
                                text: 'Your data has been saved.',
                                confirmButtonColor: '#3085d6',
                                icon: 'success',
                                confirmButtonText: 'OK'
                            });
                        }
                    });
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Please fill in all required fields.',
                        icon: 'error',
                        cancelButtonColor: '#d33',
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