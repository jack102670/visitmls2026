<template>
    <div class="border border-[1px] rounded-md mt-2 p-4 space-y-2">
        <div class="space-y-4">
            <div>
                <p class="block text-md font-bold text-primary dark:text-white">Introduction</p>
            </div>
            <div class="flex flex-col space-y-2">
                <div class="flex flex-col md:flex-row md:items-center md:justify-start md:space-x-4">
                    <h2 class="text-md font-semibold">Nature of the training:</h2>
                    <div class="flex flex-col md:flex-row gap-2">
                        <div
                            class="w-full md:w-auto px-4 py-2 rounded-md text-sm "
                            :class="{ ' text-dark ': form.trainingNature.includes('skills'), 'bg-transparent border border-gray-300 hover:bg-gray-100': !form.trainingNature.includes('skills') }">
                            Skills
                        </div>
                        <div
                            class="w-full md:w-auto px-4 py-2 rounded-md text-sm transition-colors duration-200 ease-in-out"
                            :class="{ ' text-dark ': form.trainingNature.includes('knowledge'), 'bg-transparent border border-gray-300 hover:bg-gray-100': !form.trainingNature.includes('knowledge') }">
                            Knowledge
                        </div>
                        <div
                            class="w-full md:w-auto px-4 py-2 rounded-md text-sm transition-colors duration-200 ease-in-out"
                            :class="{ ' text-dark ': form.trainingNature.includes('refresher'), 'bg-transparent border border-gray-300 hover:bg-gray-100': !form.trainingNature.includes('refresher') }">
                            Refresher
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            <div class="space-y-4">
                <div class="space-y-2">
                    <label for="traineeName" class="block text-sm font-medium text-primary dark:text-white">
                        Trainee Name: <span class="text-red-500">*</span>
                    </label>
                    <!-- <input type="text" id="traineeName" v-model="form.name"
                        class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Trainee Name" required readonly /> -->
                        <div>{{ form.name }}</div>
                </div>
                <div class="space-y-2">
                    <label for="traineeDesignation" class="block text-sm font-medium text-primary dark:text-white">
                        Trainee Designation: <span class="text-red-500">*</span>
                    </label>
                    <!-- <input type="text" id="traineeDesignation" v-model="form.designation"
                        class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Trainee Designation" required readonly /> -->
                        {{ form.designation }}
                </div>
                <div class="space-y-2">
                    <label for="date" class="block text-sm font-medium text-primary dark:text-white">
                        Date Required: <span class="text-red-500">*</span>
                    </label>
                    <!-- <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </div>
                        <input ref="datepicker" id="DateRequired" type="text" v-model="form.trainingDate"
                            class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Select date" required readonly>
                    </div> -->
                    <div>{{ form.trainingDate }}</div>
                </div>
            </div>
            <div class="space-y-4">
                <div class="space-y-2">
                    <label for="courseTitle" class="block text-sm font-medium text-primary dark:text-white">
                        Course Title: <span class="text-red-500">*</span>
                    </label>
                    <!-- <input type="text" id="courseTitle" v-model="form.courseTitle"
                        class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Course title" required readonly /> -->
                      <div> {{ form.courseTitle }}</div> 
                </div>
                <div class="space-y-2">
                    <label for="TrainingInstitution" class="block text-sm font-medium text-primary dark:text-white">
                        Training Institution: <span class="text-red-500">*</span>
                    </label>
                    <!-- <input type="text" id="TrainingInstitution" v-model="form.trainingInstitution"
                        class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Training Institution" required readonly /> -->
                        <div>{{ form.trainingInstitution }}</div>
                </div>
            </div>
            <div class="space-y-4">
                <div class="space-y-2">
                    <label for="trainerName" class="block text-sm font-medium text-primary dark:text-white">
                        Trainer Name: <span class="text-red-500">*</span>
                    </label>
                    <!-- <input type="text" id="trainerName" v-model="form.trainerName"
                        class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Trainer Name" required readonly /> -->
                        <div>{{ form.trainerName }}</div>
                </div>
                <div class="space-y-2">
                    <label for="venue" class="block text-sm font-medium text-primary dark:text-white">
                        Venue: <span class="text-red-500">*</span>
                    </label>
                    <!-- <input type="text" id="venue" v-model="form.trainingVenue"
                        class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Venue" required readonly /> -->
                        <div>{{ form.trainingVenue }}</div>
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
                    <!-- <div class="flex flex-wrap gap-4">
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
                    </div> -->
                    <div>
                        {{ form.programObjective  }}
                    </div>
                </div>
                <div class="space-y-2">
                    <p class="text-sm font-medium">Training will greatly assist you in your profession / area of work
                    </p>
                    <!-- <div class="flex flex-wrap gap-4">
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
                    </div> -->
                    <div>
                        {{ form.programSupport  }}
                    </div>
                </div>
                <div class="space-y-2">
                    <p class="text-sm font-medium">Trainer has good presentation skill/style, knowledge and grip over
                        the subject</p>
                    <!-- <div class="flex flex-wrap gap-4">
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
                    </div> -->
                    <div>
                        {{ form.trainerPresentation }}
                    </div>
                </div>
                <div class="space-y-2">
                    <p class="text-sm font-medium">Test result (If any)</p>
                    <!-- <div class="flex flex-wrap gap-4">
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
                    </div> -->
                    <div>{{ form.testResult }}</div>
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
                    <!-- <textarea id="CourseGained" rows="4" v-model="form.trainingBenefit"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write your comments here"></textarea> -->
                        <div>{{ form.trainingBenefit }}</div>
                </div>
            </div>
            <div class="items-center space-x-`2 space-y-2">
                <div class="space-y-2 sm:space-y-4">
                    <label for="position" class="block  md:mb-7  text-sm font-medium text-primary dark:text-white ">
                        General Comments (If any)
                    </label>
                    <!-- <textarea id="generalComments" rows="4" v-model="form.generalComment"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write your comments here"></textarea> -->
                        <div>{{ form.generalComment }}</div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import { GetViewTrainingEvaluation } from '@/api/EFormApi.js';

export default {
    data() {
        return {
            form: {
                name: '',
                designation: '',
                trainingDate: '',
                courseTitle: '',
                trainingInstitution: '',
                trainerName: '',
                trainingVenue: '',
                programObjective: '',
                programSupport: '',
                trainingNature: [],
                trainingBenefit: '',
            },
        };
    },
    mounted() {
        const refNo = this.$route.params.refNo;
        this.GetViewTrainingEvaluation(refNo);

    },
    methods: {
        async GetViewTrainingEvaluation(refNo) {
            try {
                const data = await GetViewTrainingEvaluation(refNo);
                if (data) {
                    this.form = {
                        ...data.form,
                        ...data,
                    };
                }
            } catch (error) {
                console.error("Error loading training evaluation:", error);
                throw error;
            }
        }
    },

};
</script>