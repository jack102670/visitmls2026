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
                        <label for="expense_date" class="font-medium text-sm">Expense Date</label>
                        <input type="date" id="expense_date" v-model="formattedDate"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>
                    <div class="col-span-4">
                        <label for="expense_name" class="font-medium text-sm">Expense Name</label>
                        <input type="text" id="expense_name" v-model="others.expense_name"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>
                    <div class="col-span-8">
                        <label for="description" class="font-medium text-sm">Description of Claim</label>
                        <input type="text" id="description" v-model="others.description"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>
                    <div class="col-span-4">
                        <label for="total_fee" class="font-medium text-sm">Total Amount(RM)</label>
                        <input type="text" id="total_fee" v-model="others.total_fee" 
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>
                    <div class="col-span-4">
                        <label for="files" class="font-medium text-sm">Uploaded Files</label>
                        <div v-if="others.files.length" class="mt-2">
                            <p class="text-xs text-gray-600">Click on a file to view:</p>
                            <ul class="list-disc list-inside">
                                <li v-for="(file, index) in others.files" :key="index">
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
                        <textarea type="text" id="comment" v-model="others.comment" readonly
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
            claimDetails: {},
            others: {
                expense_name: "",
                expense_date: "",
                amount: "",
                description: "",
                unique_code: "",
                total_fee: "",
                comment: "",
                files: [],
            },
            
            uniqueCode: "",
            requesterId: ""
        }
    },
    mounted() {
        const refNo = this.$route.params.rn;
        console.log("RefNo:", refNo);

        this.fetchOthersData(refNo)
        // if (this.claim?.refNo) {
        //     this.fetchHandphoneData();
        // }
    },
    computed: {
        formattedDate: {
            get() {
            const d = new Date(this.others.expense_date);
            if (isNaN(d)) return "";
            const year = d.getFullYear();
            const month = String(d.getMonth() + 1).padStart(2, "0");
            const day = String(d.getDate()).padStart(2, "0");
            return `${year}-${month}-${day}`;
            },
            set(value) {
            this.others.expense_date = value; // Keep in ISO format or convert if needed
            }
        },
        },
    methods: {
        async getClaimDetails(refNo) {
            try {
                const response = await axios.get(`http://172.28.28.116:6165/api/User/GetClaimDetails/${refNo}`);
    
                if (response.data && response.data.result) {
                this.claimDetails = response.data.result;
                console.log("0. General Claim Details:", this.claimDetails);
                } else {
                console.warn("No general claim details found");
                }
                
                // const data = await getUserClaimDetails(refNo);
                // if (data) {
                //     this.claimDetails = {
                //         ...data.claimDetails,
                //         ...data,
                //     }
                // }
                console.log("Claim Details", this.claimDetails);
            } catch (error) {
                console.error("Error fetching claim details", error);
                // throw error;
            }
        },

        closeSlideOver() {
            this.$emit('close');
        },

        async fetchOthersData(refNo) {
           
                const response = await axios.get(`http://172.28.28.116:6239/api/User/GetOthers/${refNo}`);

                const dataArray = response.data.result;
                // if (response) {
                //     const matchingUniqueID = response.find(
                //         record => record.unique_code === this.claim.unique_code
                //     );
                    if (Array.isArray(dataArray)) {
                        const matchingUniqueID = dataArray.find(
                            record => record.unique_code === this.claim.unique_code
                        );

                    if (matchingUniqueID) {
                        this.others = {
                            reference_number: matchingUniqueID.reference_number,
                            expense_name: matchingUniqueID.expense_name,
                            expense_date: matchingUniqueID.expense_date,
                            amount: matchingUniqueID.amount,
                            description: matchingUniqueID.description,
                            unique_code: matchingUniqueID.unique_code,
                            total_fee: matchingUniqueID.total_fee,
                            comment: matchingUniqueID.comment,
                            files: matchingUniqueID.files,
                        };
                        this.uniqueCode = matchingUniqueID.unique_code;
                        this.requesterId = matchingUniqueID.requester_id;
                    } else {
                        console.log("No matching unique_code found");
                    }
                    }else {
                    console.error("Expected an array but got:", typeof dataArray, dataArray);
                    }
        },

        
        async handleSubmit() {
        try {
            const submitData = {
            reference_number: this.others.reference_number,
            expense_name: this.others.expense_name,
            expense_date: this.formattedDate,
            amount: isNaN(parseFloat(this.others.amount)) ? 0 : parseFloat(this.others.amount),
            description: this.others.description?.trim(),
            total_fee: isNaN(parseFloat(this.others.total_fee)) ? 0 : parseFloat(this.others.total_fee),
            // bank_account: this.handphone.bank_account,
            files: this.others.files || [],
            unique_code: this.uniqueCode,
            // requester_id: this.requesterId,
            };
            console.log("Submitting Others payload:", submitData);

            const response = await axios.put('http://172.28.28.116:6239/api/User/UpdateOthers', submitData, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

            if (response.data && response.data.result) {
                console.log("Update Other data:", response.data.result);
                Swal.fire({
                    title: 'Success',
                    text: 'Others claim updated successfully',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#dc2626'
                });
                this.$emit('refresh-claims', this.claim.refNo);
                this.closeSlideOver();
            } else {
                console.log("Update Other data not found");
                Swal.fire({
                    title: 'Error',
                    text: 'Failed to update others claim',
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
            if (newVal) this.fetchOthersData();
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