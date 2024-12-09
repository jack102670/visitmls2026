<template>
    <div class="space-y-2 border-[1px] shadow-sm rounded-md">
        <div class="space-y-6  py-4 px-6">
            <h1 class="font-bold text-md">
                Form Type : {{ DisplayForm.formType === 'onJobTraining' ? 'On Job Training Programme' : 'Familiarisation Programme' }}
            </h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                <div>
                    <label for="staffName" class="block mb-2 text-sm font-semibold text-primary dark:text-white">Name of
                        staff:
                    </label>
                    <p class="text-sm"> {{ DisplayForm.staffName || '-' }}</p>
                </div>
                <div>
                    <label for="company" class="block mb-2 text-sm font-semibold text-primary dark:text-white">Company:
                    </label>
                    <p class="text-sm"> {{ DisplayForm.company || '-' }}</p>
                </div>
                <div>
                    <label for="department"
                        class="block mb-2 text-sm font-semibold text-primary dark:text-white">Department:
                    </label>
                    <p class="text-sm"> {{ DisplayForm.department || '-' }}</p>
                </div>
                <div>
                    <label for="dateJoined" class="block mb-2 text-sm font-semibold text-primary dark:text-white">Date
                        Joined: </label>
                    <p class="text-sm">{{ DisplayForm.dateJoined || '-' }}</p>
                </div>
            </div>
            <hr class="w-full border-b border-b-[1px] my-4" />
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                <div class="space-y-2">
                    <div class="">
                        <label class="block text-sm font-semibold text-primary dark:text-white">Date / Duration: </label>
                    </div>
                    <div class="flex items-center">
                        <div class="relative">
                            <p class="text-sm"> {{ hrDateStart || '-' }}</p>
                        </div>
                        <span class="mx-4 text-sm text-gray-500">to</span>
                        <div class="relative">
                            <p class="text-sm"> {{ hrDateEnd || '-' }}</p>
                        </div>
                    </div>
                </div>
                <div class="space-y-2">
                    <h2 class="block text-sm font-semibold text-primary dark:text-white">Description</h2>
                    <div class="text-sm font-regular">
                        <p class="">Introduction to the company</p>
                        <p>ISO Induction & Policies (QMS, EMS)</p>
                        <p>ICT Policy Briefing</p>
                        <p>Health, Safety & Environmental Policy Briefing</p>
                    </div>
                </div>
                <div class="space-y-2">
                    <label for="requesterVerification"
                        class="block text-sm font-semibold text-primary dark:text-white">Trainer
                        Verification:</label>
                    <label for="requesterVerification"
                        class="block text-sm font-regular text-primary dark:text-white italic">This section are for HR
                        verification
                        <span class="text-red-500">*</span></label>
                    <!-- <input id="requesterVerification" type="radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"> -->
                    
                </div>
                <div class="space-y-2">
                        <label for="requesterVerification"
                        class="block text-sm font-semibold text-primary dark:text-white">Trainee
                        Acknowledgement:</label>
                    <label for="requesterVerification"
                        class="block text-sm font-regular text-primary dark:text-white italic">I acknowledge that my
                        trainer introduced me to the familiarization program.
                    </label>
                    <div class="flex items-center" v-if="DisplayForm.requesterVerification === 'True'">
                        <p class="text-sm"> Verified </p>
                    </div>
                    </div>
            </div>
            <hr class="w-full border-b border-b-[1px] my-4" />
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                <div class="space-y-2">
                    <label class="block text-sm font-semibold text-primary dark:text-white">Date / Duration:</label>
                    <div class="flex items-center">
                        <div class="relative">
                            <p class="text-sm">{{ staffDateStart || '-' }}</p>
                        </div>
                        <span class="mx-4 text-sm text-gray-500">to</span>
                        <div class="relative">
                            <p class="text-sm">{{ staffDateEnd || '-' }}</p>
                        </div>

                    </div>
                </div>
                <div class="space-y-2">
                    <label for="position" class="block text-sm font-semibold text-primary dark:text-white">
                        On Job Training (Kindly Describe): 
                    </label>
                <div class="flex flex-wrap text-sm font-regular">
                <ul class="list-disc list-inside">
                    <li v-for="(point, index) in bulletPointsArray" :key="index" class="text-sm">
                    <span v-if="bulletPointsArray.length">{{ point }}</span>
                    <span v-else>-</span>
                    </li>
                </ul>
                </div>
                </div>
                <div class="space-y-2">
                    <label for="requesterVerification"
                        class="block text-sm font-semibold text-primary dark:text-white">Trainer
                        Verification:</label>
                    <label for="requesterVerification" v-if="status !== 'Completed by Superior. Waiting for HR'"
                        class="block text-sm font-regular text-primary dark:text-white italic">This section is for HOD
                        verification
                        <span class="text-red-500">*</span></label>
                    <div class="flex items-center space-x-2" v-if="status !== 'Completed by Superior. Waiting for HR'">
                        <input id="requesterVerification" type="radio" :checked="isVerified" @click="toggleVerify"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <p class="text-sm  dark:text-white">Verify</p>
                    </div>
                    <span v-if="isSubmitAttempted && !isVerified" class="text-red-500 text-sm">Please fill in this fields</span>
                    <div class="" v-if="status === 'Completed by Superior. Waiting for HR'">
                        <p class=" dark:text-white text-sm">Verified</p>
                    </div>
                </div>
                <div class="space-y-2">
                    <label for="requesterVerification"
                        class="block text-sm font-semibold text-primary dark:text-white">Trainee
                        Acknoledgement:</label>
                    <label for="requesterVerification"
                        class="block text-sm font-regular text-primary dark:text-white italic">I acknowledge that my
                        trainer introduced me to the familiarization program.
                    </label>
                    <div class="flex items-center" v-if="DisplayForm.requesterVerification === 'True'">
                        <p class="text-sm"> Verified</p>
                    </div>
                </div>

            </div>
            <!-- <hr class="w-full border-b border-b-[1px] my-4" /> -->
        </div>
    </div>

</template>

<script>
import { getOnJobTraining } from '@/api/EFormApi.js';

export default {
    props: {
        verify: String
    },
    data() {
        return {
            isVerified: false,
            isSubmitAttempted: false, 
            DisplayForm: {
                staffName: '',
                company: '',
                department: '',
                dateJoined: '',
                formType: '',
                requesterVerification: false,
            },
            form: {
                verify: this.verify
            },
            hrDateStart: '',
            status: '',
            hrDateEnd: '',
            bulletPointsArray: [],
            validationErrors: {},
            staffDateStart: null,
            staffDateEnd: null,
        }
    },
    mounted() {
        const refNo = this.$route.params.refNo;
        this.getOnJobTraining(refNo);
    },
    watch: {
        isVerified(newVal) {
            this.DisplayForm.trainerVerification = newVal ? 'True' : 'False';
        }
    },
    methods: {
        toggleVerify() {
        this.isVerified = !this.isVerified;
        this.DisplayForm.trainerVerification = this.isVerified ? 'True' : 'False';
        this.$emit('update-verify', this.DisplayForm.trainerVerification);
    },
        updateVerify() {
            this.DisplayForm.trainerVerification = this.isVerified ? 'True' : 'False';
            this.$emit('update-verify', this.DisplayForm.trainerVerification);
        },

        async getOnJobTraining(refNo) {
            try {
                const data = await getOnJobTraining(refNo);
                if (data) {
                    this.DisplayForm = {
                        ...data.DisplayForm,
                        ...data,
                    };
                    this.status = data.status;

                    if (this.DisplayForm.hrDateFinish) {
                        const [hrDateStart, hrDateEnd] = this.DisplayForm.hrDateFinish.split(' - ').map(date => date.trim());
                        this.hrDateStart = hrDateStart;
                        this.hrDateEnd = hrDateEnd;

                        this.DisplayForm.hrDateStart = hrDateStart;
                        this.DisplayForm.hrDateEnd = hrDateEnd;
                    }

                    if (this.DisplayForm.staffDateFinish) {
                        const [staffDateStart, staffDateEnd] = this.DisplayForm.staffDateFinish.split(' - ').map(date => date.trim());
                        this.staffDateStart = staffDateStart;
                        this.staffDateEnd = staffDateEnd;

                        this.DisplayForm.staffDateStart = staffDateStart;
                        this.DisplayForm.staffDateEnd = staffDateEnd;
                    }

                    if (Array.isArray(data.descriptions)) {
                        this.bulletPointsArray = data.descriptions;
                    } else {
                        this.bulletPointsArray = ['No descriptions available.'];
                    }
                }
            } catch (error) {
                console.error("Error loading training evaluation:", error);
                throw error;
            }
        }
    },

}
</script>