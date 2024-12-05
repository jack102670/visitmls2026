<template>
    <div class="border border-[1px] rounded-md shadow-sm mt-2 p-4 space-y-2">
        <div class="space-y-4">
            <div>
                <p class="block text-md font-bold text-primary dark:text-white">Introduction</p>
            </div>
            <div class="flex flex-col space-y-2">
                <div class="flex flex-col md:flex-row md:items-center md:justify-start md:space-x-4">
                    <h2 class="text-sm font-semibold">Nature of the training:</h2>
                    <div class="flex flex-col md:flex-row gap-2">
                        <div class="w-full md:w-auto px-4 py-2 rounded-md text-sm "
                            :class="{ ' text-dark ': form.trainingNature.includes('skills'), 'bg-transparent ': !form.trainingNature.includes('skills') }">
                            Skills
                        </div>
                        <div class="w-full md:w-auto px-4 py-2 rounded-md text-sm transition-colors duration-200 ease-in-out"
                            :class="{ ' text-dark ': form.trainingNature.includes('knowledge'), 'bg-transparent ': !form.trainingNature.includes('knowledge') }">
                            Knowledge
                        </div>
                        <div class="w-full md:w-auto px-4 py-2 rounded-md text-sm transition-colors duration-200 ease-in-out"
                            :class="{ ' text-dark ': form.trainingNature.includes('refresher'), 'bg-transparent ': !form.trainingNature.includes('refresher') }">
                            Refresher
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            <div class="space-y-4">
                <div class="space-y-2">
                    <label for="traineeName" class="block text-sm  text-primary dark:text-white font-semibold">
                        Trainee Name:
                    </label>
                    <div>
                        <p class="text-sm">{{ form.name || '-' }}</p>
                    </div>
                </div>
                <div class="space-y-2">
                    <label for="traineeDesignation" class="block text-sm  text-primary dark:text-white font-semibold">
                        Trainee Designation:
                    </label>
                    <div>
                        <p class="text-sm"> {{ form.designation || '-' }}</p>
                    </div>
                </div>
                <div class="space-y-2">
                    <label for="date" class="block text-sm  text-primary dark:text-white font-semibold">
                        Date Required: 
                    </label>
                    <div>
                        <p class="text-sm">{{ formattedTrainingDate || '-' }}</p>
                    </div>
                </div>
            </div>
            <div class="space-y-4">
                <div class="space-y-2">
                    <label for="courseTitle" class="block text-sm text-primary dark:text-white font-semibold">
                        Course Title: 
                    </label>
                    <div>
                        <p class="text-sm"> {{ form.courseTitle || '-' }}</p>
                    </div>
                </div>
                <div class="space-y-2">
                    <label for="TrainingInstitution" class="block text-sm  text-primary dark:text-white font-semibold">
                        Training Institution: 
                    </label>
                    <div>
                        <p class="text-sm">{{ form.trainingInstitution || '-' }}</p>
                    </div>
                </div>
            </div>
            <div class="space-y-4">
                <div class="space-y-2">
                    <label for="trainerName" class="block text-sm  text-primary dark:text-white font-semibold">
                        Trainer Name: 
                    </label>
                    <div>
                        <p class="text-sm">{{ form.trainerName || '-' }}</p>
                    </div>
                </div>
                <div class="space-y-2">
                    <label for="venue" class="block text-sm font-semibold text-primary dark:text-white">
                        Venue:
                    </label>
                    <div>
                        <p class="text-sm">{{ form.trainingVenue || '-' }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-b-[1px] py-2"></div>
        <div class="py-4">
            <label class="block mb-2 text-sm font-semibold text-primary dark:text-white">
                Training Objectives and course content
            </label>
            <p class="block mb-2 text-sm font-medium text-primary dark:text-white">A. Please give your
                feedback on the following statements, which relate to this training program
            </p>
        </div>
        <div class="space-y-2">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                <div class="space-y-2">
                    <p class="text-sm font-semibold">Objectives of this program adequately met</p>
                    <div>
                        <p class="text-sm">{{ form.programObjective || '-' }}</p>
                    </div>
                </div>
                <div class="space-y-2">
                    <p class="text-sm font-semibold">Training will greatly assist you in your profession / area of work
                    </p>
                    <div>
                        <p class="text-sm">
                            {{ form.programSupport || '-' }}
                        </p>
                    </div>
                </div>
                <div class="space-y-2">
                    <p class="text-sm font-semibold">Trainer has good presentation skill/style, knowledge and grip over
                        the subject</p>
                    <div>
                        <p class="text-sm">
                            {{ form.trainerPresentation || '-' }}
                        </p>
                    </div>
                </div>
                <div class="space-y-2">
                    <p class="text-sm font-semibold">Test result (If any)</p>
                    <div>
                        <p class="text-sm">{{ form.testResult || '-' }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-b-[1px] py-4"></div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 mt-4">
            <div class="items-center space-x-2 space-y-2">
                <div class="space-y-2 sm:space-y-4">
                    <label for="position" class="block  text-sm font-semibold text-primary dark:text-white">B: Please briefly describe what you have gained from the course. (You may also share how you plan or in what way you will apply the benefits – if any.):
                    </label>
                    <div>
                        <p class="text-sm">{{ form.trainingBenefit || '-' }}</p>
                    </div>
                </div>
            </div>
            <div class="items-center space-x-`2 space-y-2">
                <div class="space-y-2 sm:space-y-4">
                    <label for="position" class="block  md:mb-7  text-sm font-semibold text-primary dark:text-white ">
                        C. General Comments (If any)
                    </label>
                    <div>
                        <p class="text-sm">{{ form.generalComment || '-' }}</p>
                    </div>
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
                generalComment: '',
            },
        };
    },
    mounted() {
        const refNo = this.$route.params.refNo;
        this.GetViewTrainingEvaluation(refNo);

    },
    computed: {
        formattedTrainingDate(){
            const dateArray = this.form.trainingDate.split('-');
            return `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`
        }
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