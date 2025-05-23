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
                        <input type="number" id="claim_amount" v-model="handphone.claim_amount" @input="validateHandphoneClaim"
                            class="mt-1 block text-xs w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>
                    <!-- <input type="number"
       id="claim_amount"
       v-model.number="handphone.claim_amount"
       @input="validateHandphoneClaim"
       class="mt-1 block text-xs w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"> -->

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
                                <a :href="typeof file === 'string' ? file : '#'" target="_blank" class="text-blue-500 hover:underline text-xs">
                                    {{ typeof file === 'string' ? file.split('/').pop() : file.name }}
                                </a>

                                <a @click="deleteFile(index)" class="text-red-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L6.26 5.79m8.788 0H6.26m12.804 0a2.25 2.25 0 00-2.73-1.684M6.26 5.79a2.25 2.25 0 002.73 1.684m0 0a2.25 2.25 0 00-2.73 1.684m0 0a2.25 2.25 0 012.73 1.684" />
                                    </svg>
                                </a>
                                </li>
                            </ul>
                        </div>
                        <div v-if="!handphone.files.length" class="mt-4">
                        <input
                            type="file"
                            id="newFile"
                            @change="uploadFiles"  
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                        <span v-if="selectedFileName" class="text-xs text-gray-600 mt-1 block">
                            Selected file: {{ selectedFileName }}
                        </span>
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
            newFiles: [],
            filesToDelete: [],
            selectedFileName: "",
            originalClaimAmount: 0,
            uniqueCode: "",
            requesterId: ""
        }
    },
    computed: {
    handphoneLimit() {
        return parseFloat(localStorage.getItem('remaining_limit_amount')) || 0;
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
        validateHandphoneClaim() {
        const limit = parseFloat(localStorage.getItem('remaining_limit_amount')) || 0;
        const original = parseFloat(this.originalClaimAmount) || 0;
        const claim = parseFloat(this.handphone.claim_amount) || 0;
        const restoredLimit = limit + original;
        if (claim > restoredLimit) {
            Swal.fire({
                icon: 'warning',
                title: 'Exceeds Limit',
                text: `Your claim amount exceeds the remaining limit of RM${restoredLimit}.`,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK'
            });
            // this.handphone.claim_amount = limit; // Optionally reset to limit
            return true;
            
        }
    },
       
        deleteFile(index) {
        const deletedFile = this.handphone.files[index];
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you really want to delete this file?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
            cancelButtonColor: '#6b7280',
            confirmButtonColor: '#dc2626'
        }).then((result) => {
            if (result.isConfirmed) {
                // If the file is an existing file (not just uploaded in this session), mark for deletion
                if (typeof deletedFile === 'string' && !this.newFiles.find(f => f.name === deletedFile)) {
                    this.filesToDelete.push(deletedFile);
                } else {
                    // If it's a new file, remove from newFiles
                    this.newFiles = this.newFiles.filter(f => f.name !== deletedFile);
                }
                // Remove from UI
                this.handphone.files.splice(index, 1);
            }
        });
    },
        async uploadFiles(event) {
        const files = event?.target?.files;

        if (!files || !files.length) {
            this.selectedFileName = "";
            Swal.fire("No File", "Please select at least one file to upload.", "warning");
            return;
        }
       
        // const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
        const originalFile = files[i];
        // Prepend SUPPORT_DOC_ if not already present
        let newFileName = originalFile.name.startsWith("SUPPORT_DOC_")
            ? originalFile.name
            : `SUPPORT_DOC_${originalFile.name}`;
        // Create a new File object with the new name
        const renamedFile = new File([originalFile], newFileName, { type: originalFile.type });
        this.newFiles.push(renamedFile);
        this.handphone.files.push(renamedFile);
        }
        this.selectedFileName = files[0].name;
        event.target.value = "";
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
                        // this.originalClaimAmount = matchingRecord.claim_amount;
                        this.uniqueCode = matchingRecord.unique_code;
                        this.requesterId = matchingRecord.requester_id;
                        this.originalClaimAmount = parseFloat(matchingRecord.claim_amount) || 0;
                        await this.fetchAndSetLimits();
                       
                    } else {
                        console.log("No matching unique_code found");
                    }
                
                    } else {
                    console.error("Expected an array but got:", typeof dataArray, dataArray);
                    }
                    },
         async fetchAndSetLimits() {
                    try {
                        // Replace with your actual API endpoint and user identifier
                        const response = await axios.get(`http://172.28.28.116:6239/api/User/GetEmployeeById/${this.requesterId}`);
                        const user = response.data.result[0];
                        // Initialize limits only if they are not already set
                    if (!localStorage.getItem('initial_limit_medicaldental')) {
                        localStorage.setItem('initial_limit_medicaldental', user.limit_medicaldental);
                    }
                    if (!localStorage.getItem('initial_limit_outpatient')) {
                        localStorage.setItem('initial_limit_outpatient', user.limit_outpatient);
                    }
                    if (!localStorage.getItem('initial_limit_amount')) {
                        localStorage.setItem('initial_limit_amount', user.limit_amount);
                    }

                    this.remaining_medicaldental = localStorage.getItem('remaining_limit_medicaldental')
                        ? parseFloat(localStorage.getItem('remaining_limit_medicaldental'))
                        : parseFloat(localStorage.getItem('initial_limit_medicaldental'));

                    this.remaining_outpatient = localStorage.getItem('remaining_limit_outpatient')
                        ? parseFloat(localStorage.getItem('remaining_limit_outpatient'))
                        : parseFloat(localStorage.getItem('initial_limit_outpatient'));

                    this.remaining_amount = localStorage.getItem('remaining_limit_amount')
                        ? parseFloat(localStorage.getItem('remaining_limit_amount'))
                        : parseFloat(localStorage.getItem('initial_limit_amount'));

                    // Save remaining limits back to localStorage if not already set
                    if (!localStorage.getItem('remaining_limit_medicaldental')) {
                        localStorage.setItem('remaining_limit_medicaldental', this.remaining_medicaldental);
                    }
                    if (!localStorage.getItem('remaining_limit_outpatient')) {
                        localStorage.setItem('remaining_limit_outpatient', this.remaining_outpatient);
                    }
                    if (!localStorage.getItem('remaining_limit_amount')) {
                        localStorage.setItem('remaining_limit_amount', this.remaining_amount);
                    }
                    } catch (error) {
                        console.error("Failed to fetch medical limits:", error);
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

       
            
            
            // const originalAmount = parseFloat(this.originalClaimAmount) || 0;
            // const newAmount = isNaN(parseFloat(this.handphone.claim_amount)) ? 0 : parseFloat(this.handphone.claim_amount);

            // const storageKey = "remaining_limit_amount";
            // const initialKey = "initial_limit_amount";

            // // Get current remaining limit properly
            // let currentLimitStr = localStorage.getItem(storageKey);
            // let currentLimit = currentLimitStr !== null ? parseFloat(currentLimitStr) : NaN;

            // // Fallback to initial limit only if current is not found (not if it's zero!)
            // if (isNaN(currentLimit)) {
            // currentLimit = parseFloat(localStorage.getItem(initialKey)) || 100;
            // }

            // // Add back the old claimed amount to restore full usable limit
            // const restoredLimit = currentLimit + originalAmount;

            // // Now check against the restored limit
            // if (newAmount > restoredLimit) {
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Exceeds Limit',
            //     text: `Your new claim amount exceeds the available limit of RM${restoredLimit}.`,
            //     confirmButtonColor: '#3085d6',
            //     confirmButtonText: 'OK'
            // });
            // return;
            // }

            // // Deduct and store
            // const updatedLimit = Math.max(0, restoredLimit - newAmount);
            // localStorage.setItem(storageKey, updatedLimit.toString());

            // // Update originalClaimAmount so future edits work correctly
            // this.originalClaimAmount = newAmount;

      async handleSubmit() {
        const updatedClaim = {
            reference_number: this.handphone.reference_number,
            claim_month: this.handphone.claim_month,
            claim_year: this.handphone.claim_year,
            files: this.handphone.files || [],
            bank_name: this.handphone.bank_name,
            bank_holder: this.handphone.bank_holder,
            bank_account: this.handphone.bank_account,
            claim_amount: isNaN(parseFloat(this.handphone.claim_amount)) ? 0 : parseFloat(this.handphone.claim_amount),
            ic_number: this.handphone.ic_number,
            unique_code: this.uniqueCode,
            requester_id: this.requesterId,
            originalClaimAmount: this.originalClaimAmount,
            // limit_amount: this.handphoneLimit,
            // limit_outpatient: this.remaining_outpatient,
            // limit_medicaldental: this.remaining_medicaldental,

            tabTitle: "Handphone",
            locationPurpose: "-",
            date: this.handphone.date_claim || "-",
            total: this.handphone.claim_amount || 0
     };

      console.log("Submitting Handphone payload:", updatedClaim);
      this.$emit("update-claim",updatedClaim);
      this.closeSlideOver();
    },
        //     async handleSubmit() {
        //         try {
        //     // Delete files marked for deletion
        //         for (const fileUrl of this.filesToDelete) {
        //             const fileName = fileUrl.split('/').pop();
        //             await axios.delete(`http://172.28.28.116:7267/api/Files/DeleteImage/${this.requesterId}/${this.uniqueCode}/${fileName}`);
        //         }
        //         this.filesToDelete = [];

        //         // 2. Upload new files
        //         if (this.newFiles.length > 0) {
        //             const formData = new FormData();
        //             this.newFiles.forEach(file => formData.append("filecollection", file));
        //             const uploadEndpoint = `https://esvcportal.pktgroup.com/api/file/api/Files/MultiUploadImage/${this.requesterId}/${this.uniqueCode}`;
        //             await axios.post(uploadEndpoint, formData, {
        //                 headers: { "Content-Type": "multipart/form-data" },
        //             });
        //             this.newFiles = [];
        //         }

        //        this.validateHandphoneClaim();
        //        const submitData = {
        //         reference_number: this.handphone.reference_number,
        //         claim_month: this.handphone.claim_month,
        //         claim_year: this.handphone.claim_year,
        //         files: this.handphone.files || [],
        //         bank_name: this.handphone.bank_name,
        //         bank_holder: this.handphone.bank_holder,
        //         bank_account: this.handphone.bank_account,
        //         claim_amount:this.handphone.claim_amount,
        //         ic_number: this.handphone.ic_number,
        //         unique_code: this.uniqueCode,
        //         requester_id: this.requesterId
            
        //     };
        //     console.log("Submitting Handphone payload:", submitData);

        //     const response = await axios.put('http://172.28.28.116:6165/api/User/UpdateHandphoneReimburse', submitData, {
        //             headers: {
        //                 "Content-Type": "application/json",
        //             },
        //         });

        //     if (response.data && response.data.result) {
        //         console.log("Update Handphone data:", response.data.result);
        //         // Calculate and update the new limit
        //         const limitKey = "remaining_limit_amount";
        //         const initialKey = "initial_limit_amount";
        //         const original = parseFloat(this.originalClaimAmount) || 0;
        //         const claim = parseFloat(this.handphone.claim_amount) || 0;
        //         let currentLimit = parseFloat(localStorage.getItem(limitKey)) || 0;

        //         // Restore the original amount, then deduct the new claim amount
        //         let updatedLimit = Math.max(0, currentLimit + original - claim);

        //         // Update both remaining and initial limit if you want both to reflect the new value
        //         localStorage.setItem(limitKey, updatedLimit.toString());
        //         localStorage.setItem(initialKey, updatedLimit.toString());

                
        //         Swal.fire({
        //             title: 'Success',
        //             text: 'Handphone claim updated successfully',
        //             icon: 'success',
        //             confirmButtonText: 'OK',
        //             confirmButtonColor: '#dc2626'
        //         });
        //         this.$emit('refresh-claims', this.claim.refNo);
        //         this.closeSlideOver();
        //     } else {
        //         console.log("Update Handphone data not found");
        //         Swal.fire({
        //             title: 'Error',
        //             text: 'Failed to update handphone claim',
        //             icon: 'error',
        //             confirmButtonText: 'OK',
        //             confirmButtonColor: '#dc2626'

        //         });
        //     }
        // } catch (error) {
        //     console.error("Error submitting data:", error);
            
        //     let errorMessage = "An unexpected error occurred.";
        //     if (error.response) {
        //         errorMessage = error.response.data?.message || `Error: ${error.response.status} - ${error.response.statusText}`;
        //     } else if (error.request) {
        //         errorMessage = "No response received from the server.";
        //     } else {
        //         errorMessage = error.message;
        //     }

        //     Swal.fire({
        //     title: 'Submission Failed',
        //     text: errorMessage,
        //     icon: 'error',
        //     confirmButtonText: 'OK',
        //     confirmButtonColor: '#dc2626'
        //     });
        // }
        // },
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