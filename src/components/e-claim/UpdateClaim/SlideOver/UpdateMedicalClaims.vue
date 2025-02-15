<template>
    <transition name="overlay">
        <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50" @click="closeSlideOver"></div>
    </transition>
    <transition name="slide">
        <div v-if="isOpen" class="fixed inset-y-0 right-0 w-1/3 bg-white dark:bg-gray-800 z-50 p-6 overflow-y-auto">
            <div class="flex justify-end items-center mb-2">
                <button @click="closeSlideOver" class="text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="flex justify-between items-center py-2">
                <p class="text-lg font-bold text-gray-800 dark:text-gray-200">
                    Update {{ claim.tabTitle }}
                </p>
            </div>
            <form @submit.prevent="handleSubmit">
                <div class="grid grid-cols-8 gap-2 w-full">
                    <div class="col-span-4">
                        <label for="date_leave_taken" class="font-medium text-sm">Date leave Taken</label>
                        <input type="text" id="date_leave_taken" v-model="medical.date_leave_taken"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>
                    <div class="col-span-4">
                        <label for="ic_number" class="font-medium text-sm">Identification Number</label>
                        <input type="text" id="ic_number" v-model="medical.ic_number"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>
                    <div class="col-span-8">
                        <label for="reason" class="font-medium text-sm">Reason</label>
                        <textarea type="text" id="reason" v-model="medical.reason"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
                    </div>
                    <div class="col-span-4">
                        <label for="medical_category" class="font-medium text-sm">Medical category</label>
                        <select 
                            id="medical_category" 
                            v-model="medical.medical_category"
                            class="mt-1 text-xs block text-xs w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                            <option v-for="(category, index) in medicalCategories" :key="index" :value="category">{{ category }}</option>
                        </select>
                    </div>
                    <div class="col-span-4">
                        <label class="font-medium text-sm">Clinic Selection</label>
                        <div class="flex space-x-2">
                        <div class="mt-1">
                            <label class="inline-flex items-center">
                                <input type="radio" v-model="medical.clinic_selection" value="Mediviron Clinic - Panel"
                                    class="form-radio text-indigo-600 text-xs">
                                <span class="ml-2 text-xs">Mediviron Clinic - Panel</span>
                            </label>
                        </div>
                        <div class="mt-1">
                            <label class="inline-flex items-center">
                                <input type="radio" v-model="medical.clinic_selection" value="Other Clinic"
                                    class="form-radio text-indigo-600 text-xs">
                                <span class="ml-2 text-xs">Other Clinic</span>
                            </label>
                        </div>
                    </div>
                    </div>
                    <div class="col-span-4">
                        <label for="clinic_name" class="font-medium text-sm">Clinic Name</label>
                        <input type="text" id="clinic_name" v-model="medical.clinic_name"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>
                    <div class="col-span-4">
                        <label for="files" class="font-medium text-sm">Uploaded Files</label>
                        <div v-if="medical.files.length" class="mt-2">
                            <p class="text-xs text-gray-600">Click on a file to view:</p>
                            <ul class="list-disc list-inside">
                                <li v-for="(file, index) in medical.files" :key="index">
                                    <a :href="file" target="_blank" class="text-blue-500 hover:underline text-xs">
                                        Download File {{ index + 1 }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-span-8">
                        <label for="reason_different" class="font-medium text-sm">reason difference</label>
                        <input type="text" id="reason_different" v-model="medical.reason_different"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>
                    <div class="col-span-4">
                        <label for="bank_name" class="font-medium text-sm">Bank Name</label>
                        <input type="text" id="bank_name" v-model="medical.bank_name"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>
                    <div class="col-span-4">
                        <label for="bank_holder" class="font-medium text-sm">Bank Holder</label>
                        <input type="text" id="bank_holder" v-model="medical.bank_holder"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>
                    <div class="col-span-4">
                        <label for="bank_account" class="font-medium text-sm">Bank Account</label>
                        <input type="text" id="bank_account" v-model="medical.bank_account"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>
                    <div class="col-span-4">
                        <label for="claim_amount" class="font-medium text-sm">Claim Amount (RM)</label>
                        <input type="text" id="claim_amount" v-model="medical.claim_amount" readonly
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 cursor-not-allowed">
                    </div>
                    <hr class="col-span-8 mt-4 mb-2" />
                    <div class="col-span-8">
                        <label for="comment" class="font-medium text-sm">Comment</label>
                        <textarea type="text" id="bank_account" v-model="medical.comment"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
                    </div>
                    <div class="col-span-8 justify-end items-center flex space-x-2 py-4 ">
                        <button
                            class="w-full bg-transparent border-2 border-red-600 hover:bg-red-700 text-red-600 hover:text-white hover:border-2 font-bold py-2 px-4 rounded-md"
                            @click="closeSlideOver">
                            Cancel
                        </button>
                        <button type="submit"
                            class="w-full bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                            Update
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </transition>
</template>
<script>
import { getMedicalLeave, updateMedical } from "../../../../api/EclaimAPI";
import Swal from "sweetalert2";
export default {
    emits: ['close', 'closeSlideOver'],
    props: {
        isOpen: {
            type: Boolean,
            required: true
        },
        claim: {
            type: Object,
            required: false
        }
    },
    data() {
        return {
            medical: {
                date_leave_taken: '',
                reason: '',
                medical_category: '',
                clinic_selection: '',
                clinic_name: '',
                reason_different: '',
                bank_name: '',
                bank_holder: '',
                bank_account: '',
                claim_amount: '',
                comment: '',
                ic_number: '',
                files: [],
            },
            medicalCategories: ["Outpatient", "Medical Check-Up", "Dental"]
        }
    },
    mounted() {
        if (this.claim?.refNo) {
            this.fetchMedicalLeaveData();
        }

    },
    methods: {
        closeSlideOver() {
            this.$emit('close');
        },

        async fetchMedicalLeaveData() {

            try {
                const response = await getMedicalLeave(this.claim.refNo);
                console.log("Medical resonse", response);
                if (response) {
                    const matchingUniqueID = response.find(
                        record => record.unique_code === this.claim.unique_code
                    );
                    if (matchingUniqueID) {
                        this.medical = {
                            date_leave_taken: matchingUniqueID.date_leave_taken,
                            reason: matchingUniqueID.reason,
                            medical_category: matchingUniqueID.medical_category,
                            clinic_selection: matchingUniqueID.clinic_selection,
                            clinic_name: matchingUniqueID.clinic_name,
                            reason_different: matchingUniqueID.reason_different,
                            bank_name: matchingUniqueID.bank_name,
                            bank_holder: matchingUniqueID.bank_holder,
                            bank_account: matchingUniqueID.bank_account,
                            claim_amount: matchingUniqueID.claim_amount,
                            comment: matchingUniqueID.comment,
                            ic_number: matchingUniqueID.ic_number,
                            files: matchingUniqueID.files,
                        };
                        this.uniqueCode = matchingUniqueID.unique_code;
                        this.requesterId = matchingUniqueID.requester_id;
                        console.log("matching Unique ID", matchingUniqueID);
                    } else {
                        console.log("No matching unique_code found");
                    }
                }
            } catch (error) {
                console.error("Error fetching medical leave data", error);
                throw error;
            }
        },

        async handleSubmit() {
            try {
                const submitData = {
                    date_leave_taken: this.medical.date_leave_taken,
                    reason: this.medical.reason,
                    medical_category: this.medical.medical_category,
                    clinic_selection: this.medical.clinic_selection,
                    clinic_name: this.medical.clinic_name,
                    reason_different: this.medical.reason_different,
                    bank_name: this.medical.bank_name,
                    bank_holder: this.medical.bank_holder,
                    bank_account: this.medical.bank_account,
                    ic_number: this.medical.ic_number,
                    unique_code: this.uniqueCode,
                    requester_id: this.requesterId,
                };
                console.log("Data to be submitted", submitData);
                const submitResponse = await updateMedical(submitData);
                if (submitResponse) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Medical claim updated successfully',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#dc2626'
                    });
                    this.closeSlideOver();
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: 'Failed to update Medical claim',
                        icon: 'error',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#dc2626'

                    });
                }
            } catch (error) {
                console.error("Error submitting data:", error);

                let errorMessage = "An unexpected error occurred.";
                if (error.response) {
                    errorMessage = error.response.data?.message || `Error: ${error.response.status} - ${error.response.statusText}`;
                } else if (error.request) {
                    errorMessage = "No response received from the server.";
                } else {
                    errorMessage = error.message;
                }

                Swal.fire({
                    title: 'Submission Failed',
                    text: errorMessage,
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#dc2626'
                });

            }
        },
    }


}
</script>
<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
    transform: translateX(0);
}

.overlay-enter-active,
.overlay-leave-active {
    transition: opacity 0.3s ease-in-out;
}

.overlay-enter-from,
.overlay-leave-to {
    opacity: 0;
}

.overlay-enter-to,
.overlay-leave-from {
    opacity: 1;
}
</style>