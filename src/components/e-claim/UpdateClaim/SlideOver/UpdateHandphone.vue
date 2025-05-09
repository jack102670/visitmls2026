<template>
    <transition name="phone-overlay">
        <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50" @click="closeSlideOver"></div>
    </transition>
    <transition name="phone-slide">
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
                        <label for="claim_month" class="font-medium text-sm">Claim Month</label>
                        <select id="claim_month" v-model="handphone.claim_month"
                            class="mt-1 block text-xs w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                            <option v-for="(month, index) in claimMonths" :key="index" :value="month">{{ month }}
                            </option>
                        </select>
                    </div>
                    <div class="col-span-4">
                        <label for="claim_year" class="font-medium text-sm">Claim Year</label>
                        <select id="claim_year" v-model="handphone.claim_year"
                            class="mt-1 block text-xs w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                            <option v-for="year in claimYears" :key="year" :value="year">{{ year }}</option>
                        </select>
                    </div>
                    <div class="col-span-4">
                        <label for="bank_name" class="font-medium text-sm">Bank Name</label>
                        <input type="text" id="bank_name" v-model="handphone.bank_name" readonly
                            class="mt-1 block text-xs w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 cursor-not-allowed">
                    </div>
                    <div class="col-span-4">
                        <label for="bank_holder" class="font-medium text-sm">Bank Holder</label>
                        <input type="text" id="bank_holder" v-model="handphone.bank_holder" readonly
                            class="mt-1 block text-xs w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 cursor-not-allowed">
                    </div>
                    <div class="col-span-4">
                        <label for="bank_account" class="font-medium text-sm">Bank Account</label>
                        <input type="text" id="bank_account" v-model="handphone.bank_account" readonly
                            class="mt-1 block text-xs w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 cursor-not-allowed">
                    </div>
                    <div class="col-span-4">
                        <label for="claim_amount" class="font-medium text-sm">Claim Amount (RM)</label>
                        <input type="text" id="claim_amount" v-model="handphone.claim_amount" readonly
                            class="mt-1 block text-xs w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 cursor-not-allowed">
                    </div>
                    <div class="col-span-4">
                        <label for="ic_number" class="font-medium text-sm">Identification Number</label>
                        <input type="text" id="ic_number" v-model="handphone.ic_number" readonly
                            class="mt-1 block text-xs w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 cursor-not-allowed">
                    </div>
                    <div class="col-span-4">
                        <label for="files" class="font-medium text-sm">Uploaded Files</label>
                        <div v-if="handphone.files.length" class="mt-2">
                            <p class="text-xs text-gray-600">Click on a file to view:</p>
                            <ul class="list-disc list-inside">
                                <li v-for="(file, index) in handphone.files" :key="index">
                                    <a :href="file" target="_blank" class="text-blue-500 hover:underline text-xs">
                                        Download File {{ index + 1 }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr class="col-span-8 mt-4 mb-2" />
                    <div class="col-span-8">
                        <label for="comment" class="font-medium text-sm">Comment</label>
                        <textarea type="text" id="comment" v-model="handphone.comment" readonly
                            class="mt-1 block text-xs w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 cursor-not-allowed"></textarea>
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
// import { getHandphone, updateHandphone } from "../../../../api/EclaimAPI.js";
import Swal from "sweetalert2";
import axios from "axios";
export default {
    emits: ['close', 'closeSlideOver', 'refresh-claims'],
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
            handphone: {
                bank_account: "",
                bank_holder: "",
                bank_name: "",
                claim_amount: "",
                claim_month: "",
                claim_year: "",
                comment: "",
                unique_code: "",
                ic_number: "",
                files: [],
            },
            claimYears: this.generateYears(),
            claimMonths: this.generateMonths(),
            uniqueCode: "",
            requesterId: ""
        }
    },
    mounted() {
        const refNo = this.$route.params.rn;
        console.log("RefNo:", refNo);

        this.fetchHandphoneData(refNo)
        // if (this.claim?.refNo) {
        //     this.fetchHandphoneData();
        // }
    },
    methods: {
        closeSlideOver() {
            this.$emit('close');
        },

        async fetchHandphoneData(refNo) {
          
                const response = await axios.get(`http://172.28.28.116:6165/api/User/GetHandphone/${refNo}`);
                console.log("Handphone Data:", response.data);

                const dataArray = response.data.result;

                // if (response) {
                //     const matchingRecord = response.find(
                //         record => record.unique_code === this.claim.unique_code
                //     );
                if (Array.isArray(dataArray)) {
                const matchingRecord = dataArray.find(
                    record => record.unique_code === this.claim.unique_code
                );

                    if (matchingRecord) {
                        this.handphone = {
                            reference_number: matchingRecord.reference_number,
                            bank_account: matchingRecord.bank_account,
                            bank_holder: matchingRecord.bank_holder,
                            bank_name: matchingRecord.bank_name,
                            claim_amount: matchingRecord.claim_amount,
                            claim_month: matchingRecord.claim_month,
                            claim_year: matchingRecord.claim_year,
                            comment: matchingRecord.comment,
                            ic_number: matchingRecord.ic_number,
                            unique_code: matchingRecord.unique_code,
                            files: matchingRecord.files,
                        };
                        this.uniqueCode = matchingRecord.unique_code;
                        this.requesterId = matchingRecord.requester_id;
                    } else {
                        console.log("No matching unique_code found");
                    }
                
                    } else {
                    console.error("Expected an array but got:", typeof dataArray, dataArray);
                    }
                    },

        generateYears() {
            const currentYear = new Date().getFullYear();
            const startYear = 2005;
            const years = [];
            for (let i = currentYear; i >= startYear; i--) {
                years.push(i);
            }
            return years;
        },
        generateMonths() {
            return [
                "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
                "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
            ];
        },

        async handleSubmit() {
        try {
            const submitData = {
            reference_number: this.handphone.reference_number,
            claim_month: this.handphone.claim_month,
            claim_year: this.handphone.claim_year,
            files: this.handphone.files || [],
            bank_name: this.handphone.bank_name,
            bank_holder: this.handphone.bank_holder,
            bank_account: this.handphone.bank_account,
            claim_amount:isNaN(parseFloat(this.handphone.claim_amount)) ? 0 : parseFloat(this.handphone.claim_amount),
            ic_number: this.handphone.ic_number,
            unique_code: this.uniqueCode,
            requester_id: this.requesterId
            
            };
            console.log("Submitting Handphone payload:", submitData);

            const response = await axios.put('http://172.28.28.116:6165/api/User/UpdateHandphoneReimburse', submitData, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

            if (response.data && response.data.result) {
                console.log("Update Handphone data:", response.data.result);

                
                Swal.fire({
                    title: 'Success',
                    text: 'Handphone claim updated successfully',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#dc2626'
                });
                this.$emit('refresh-claims', this.claim.refNo);
                this.closeSlideOver();
            } else {
                console.log("Update Handphone data not found");
                Swal.fire({
                    title: 'Error',
                    text: 'Failed to update handphone claim',
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
        watch: {
        isOpen(newVal) {
            if (newVal) this.fetchHandphoneData();
        }
    },

    },
}
</script>

<style scoped>
.phone-slide-enter-active,
.phone-slide-leave-active {
    transition: transform 0.3s ease-in-out;
}

.phone-slide-enter-from,
.phone-slide-leave-to {
    transform: translateX(100%);
}

.phone-slide-enter-to,
.phone-slide-leave-from {
    transform: translateX(0);
}

.phone-overlay-enter-active,
.phone-overlay-leave-active {
    transition: opacity 0.3s ease-in-out;
}

.phone-overlay-enter-from,
.phone-overlay-leave-to {
    opacity: 0;
}

.phone-overlay-enter-to,
.phone-overlay-leave-from {
    opacity: 1;
}
</style>