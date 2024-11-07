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
                        <input id="datepicker-autohide" type="date" v-model="form.dateJoined" readonly
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
                            readonly disabled
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="familiarisation" class="block text-sm font-medium text-primary dark:text-white">
                            Familiarisation Programme
                        </label>
                        <input id="onJobTraining" type="radio" v-model="form.formType" value="onJobTraining" readonly
                            disabled
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
                            <input ref="datepickerStart" type="text" v-model="hrDateStart" readonly
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
                            <input ref="datepickerEnd" type="text" v-model="hrDateEnd" readonly
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
                        <input type="radio" value="True" v-model="form.requesterVerification" :checked="form.requesterVerification === 'True'"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">acknowledge</span>
                    </div>
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
                            <input ref="Start" type="text" v-model="staffDateStart" readonly
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
                            <input ref="End" type="text" v-model="staffDateEnd" readonly
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Select end date" />
                        </div>

                    </div>
                </div>
                <div class="space-y-2">
                    <label for="position" class="block text-sm font-medium text-primary dark:text-white">
                        On Job Training (Kindly Describe): <span class="text-red-500">*</span>
                    </label>
                    <textarea id="position" v-model="bulletPoints" readonly
                        class="block p-2.5 w-full text-sm min-h-[100px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        @click="addInitialBullet" @keydown="handleBulletPoints" placeholder="Describe On Job Training"
                        required></textarea>
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
                        <input type="radio" value="True" v-model="form.requesterVerification" :checked="form.requesterVerification === 'True'"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">acknowledge</span>
                    </div>
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
            <hr class="w-full border-b border-b-[1px] my-4" />
        </div>

    </div>

</template>

<script>
import { getOnJobTraining } from '@/api/EFormApi.js';

export default {
    data() {
        return {
            form: {
            staffName: '',
            company: '',
            department: '',
            dateJoined: '',
            formType: '',
            requesterVerification: false,
            },
            hrDateStart: '',
            hrDateEnd: '',
            bulletPoints: '',
            validationErrors: {},
        }
    },
    mounted() {
        const refNo = this.$route.params.refNo;
        this.getOnJobTraining(refNo);
    },
    methods: {

        async getOnJobTraining(refNo) {
            try {
                const data = await getOnJobTraining(refNo);
                if (data) {
                    this.form = {
                        ...data.form,
                        ...data,
                    };
                    if (this.form.hrDateFinish) {
                        const [hrDateStart, hrDateEnd] = this.form.hrDateFinish.split(' - ').map(date => date.trim());
                        this.hrDateStart = hrDateStart;
                        this.hrDateEnd = hrDateEnd;

                        this.form.hrDateStart = hrDateStart;
                        this.form.hrDateEnd = hrDateEnd;
                    }

                    if (this.form.staffDateFinish) {
                        const [staffDateStart, staffDateEnd] = this.form.staffDateFinish.split(' - ').map(date => date.trim());
                        this.staffDateStart = staffDateStart;
                        this.staffDateEnd = staffDateEnd;

                        this.form.staffDateStart = staffDateStart;
                        this.form.staffDateEnd = staffDateEnd;
                    }
                    console.log("Hr date finished:", this.form.hrDateFinish);
                    console.log("Staff date finished:", this.form.staffDateFinish);
                    console.log("On Job Training:", this.form);
                }
            } catch (error) {
                console.error("Error loading training evaluation:", error);
                throw error;
            }
        }
    },

}
</script>