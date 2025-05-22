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
                        <input type="date" id="date_leave_taken" v-model="formattedDate"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>
                    <div class="col-span-4">
                        <label for="ic_number" class="font-medium text-sm">Identification Number</label>
                        <input type="text" id="ic_number" v-model="medical.ic_number" readonly
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 cursor-not-allowed">
                    </div>
                    <div v-if="medical.medical_category === 'Outpatient'" class="col-span-8">
                        <label for="reason" class="font-medium text-sm">Reason</label>
                        <textarea type="text" id="reason" v-model="medical.reason"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
                    </div>
                    <div class="col-span-8">
                        <label for="medical_category" class="font-medium text-sm">Medical category</label>
                        <select 
                            id="medical_category" 
                            v-model="medical.medical_category" 
                            class="mt-1 text-xs block text-xs w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 cursor-not-allowed"
                            disabled>
                            <option v-for="(category, index) in medicalCategories" :key="index" :value="category">{{ category }}</option>
                        </select>
                    </div>
                    <div v-if="medical.medical_category === 'Outpatient'" class="col-span-8">
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
                    <div class="col-span-8" v-if="medical.medical_category === 'Outpatient' && medical.clinic_selection === 'Other Clinic'">
                        <label for="clinic_name" class="font-medium text-sm">Clinic Name</label>
                        <input type="text" id="clinic_name" v-model="medical.clinic_name"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>
                    <div class="col-span-8">
                        <label for="files" class="font-medium text-sm">Uploaded Files</label>
                        <div v-if="medical.files.length" class="mt-2">
                            <p class="text-xs text-gray-600">Click on a file to view:</p>
                            <ul class="list-disc list-inside">
                                <li v-for="(file, index) in medical.files" :key="index">
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
                        <div v-if="!medical.files.length" class="mt-4">
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
                    <div v-if="medical.medical_category === 'Outpatient'" class="col-span-8">
                        <label for="reason_different" class="font-medium text-sm">reason difference</label>
                        <input type="text" id="reason_different" v-model="medical.reason_different"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>
                    <div class="col-span-4">
                        <label for="bank_name" class="font-medium text-sm">Bank Name</label>
                        <input type="text" id="bank_name" v-model="medical.bank_name" readonly
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 cursor-not-allowed">
                    </div>
                    <div class="col-span-4">
                        <label for="bank_holder" class="font-medium text-sm">Bank Holder</label>
                        <input type="text" id="bank_holder" v-model="medical.bank_holder" readonly
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 cursor-not-allowed">
                    </div>
                    <div class="col-span-4">
                        <label for="bank_account" class="font-medium text-sm">Bank Account</label>
                        <input type="text" id="bank_account" v-model="medical.bank_account" readonly
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 cursor-not-allowed">
                    </div>
                    <div class="col-span-4">
                        <label for="claim_amount" class="font-medium text-sm">Claim Amount (RM)</label>
                        <input type="text" id="claim_amount" v-model="medical.claim_amount" @input="validateMedicalClaim"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>
                    <hr class="col-span-8 mt-4 mb-2" />
                    <div class="col-span-8">
                        <label for="comment" class="font-medium text-sm">Comment</label>
                        <textarea type="text" id="bank_account" v-model="medical.comment" readonly
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 cursor-not-allowed"></textarea>
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
// import { getMedicalLeave, updateMedical } from "../../../../api/EclaimAPI";
import Swal from "sweetalert2";
import axios from "axios";
export default {
    emits: ['close', 'closeSlideOver','refresh-claims'],
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
            medicalCategories: ["Outpatient", "Medical Check-Up", "Dental"],
            newFiles: [],
            filesToDelete: [],
            selectedFileName: "",
            originalClaimAmount:0,
            uniqueCode: "",
            requesterId: ""
        }
    },
    mounted() {
        const refNo = this.$route.params.rn;
        console.log("RefNo:", refNo);
        this.fetchMedicalLeaveData(refNo);
        // this.fetchAndSetMedicalLimits();
        

        // if (this.claim?.refNo) {
        //     this.fetchMedicalLeaveData();
        // }

    },
    computed: {
        formattedDate: {
            get() {
            const d = new Date(this.medical.date_leave_taken);
            if (isNaN(d)) return "";
            const year = d.getFullYear();
            const month = String(d.getMonth() + 1).padStart(2, "0");
            const day = String(d.getDate()).padStart(2, "0");
            return `${year}-${month}-${day}`;
            },
            set(value) {
            this.medical.date_leave_taken = value; // Keep in ISO format or convert if needed
            }
        },
    //     medicalLimit() {
    //     return parseFloat(localStorage.getItem('remaining_limit_medicaldental')) || 0;
    //     },
    //     outpatientLimit() {
    //     return parseFloat(localStorage.getItem('remaining_limit_outpatient')) || 0;
    // }
    
},
        
    methods: {
        closeSlideOver() {
            this.$emit('close');
        },

       

        validateMedicalClaim() {
            const category = this.medical.medical_category;
            const claim = parseFloat(this.medical.claim_amount) || 0;

            if (category === "Outpatient") {
                const limit = parseFloat(localStorage.getItem('remaining_limit_outpatient')) || 0;
                const original = parseFloat(this.originalClaimAmount) || 0;
                const restoredLimit = limit + original;

                // Check per-claim max of RM70
                if (claim > 70) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Exceeds Per-Claim Limit',
                        text: 'Outpatient claim cannot exceed RM70 per claim.',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'OK'
                    });
                    this.medical.claim_amount = 70;
                    return;
                }

                // Check against restored yearly limit
                if (claim > restoredLimit) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Exceeds Yearly Limit',
                        text: `Your claim amount exceeds the remaining limit of RM${limit}.`,
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'OK'
                    });
                    this.medical.claim_amount = limit;
                    return;
                }

            } else if (category === "Medical Check-Up" || category === "Dental") {
                const limit = parseFloat(localStorage.getItem('remaining_limit_medicaldental')) || 0;
                const original = parseFloat(this.originalClaimAmount) || 0;
                const restoredLimit = limit + original;

                if (claim > restoredLimit) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Exceeds Yearly Limit',
                        text: `Your claim amount exceeds the remaining limit of RM${limit}.`,
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'OK'
                    });
                    this.medical.claim_amount = limit;
                    return;
                }
            }
        },
        deleteFile(index) {
        const deletedFile = this.medical.files[index];
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
                this.medical.files.splice(index, 1);
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
        this.medical.files.push(renamedFile);
        }
        this.selectedFileName = files[0].name;
        event.target.value = "";
        },


        async fetchMedicalLeaveData(refNo) {

           
                // const response = await getMedicalLeave(this.claim.refNo);
                const response = await axios.get(`http://172.28.28.116:6165/api/User/GetMedicalLeave/${refNo}`);
                console.log("Medical response", response);
                const dataArray = response.data.result;

                if (Array.isArray(dataArray)) {
                const matchingUniqueID = dataArray.find(
                    record => record.unique_code === this.claim.unique_code
                );                                                                                                                                                                                                                                                                            
                    if (matchingUniqueID) {                                                                                                                                                                                                                                                                            
                        this.medical = {                                                                                                                                                                                                                                                                            
                            date_leave_taken: matchingUniqueID.date_leave_taken,                                                                                                                                                                                                                                                                            
                            medical_category: matchingUniqueID.medical_category,
                            reason: matchingUniqueID.medical_category === 'Outpatient' ? matchingUniqueID.reason : '',
                            clinic_selection: matchingUniqueID.medical_category === 'Outpatient' ? matchingUniqueID.clinic_selection : '',
                            clinic_name: matchingUniqueID.medical_category === 'Outpatient' && matchingUniqueID.clinic_selection === 'Other Clinic'? matchingUniqueID.clinic_name: '',
                            reason_different: matchingUniqueID.medical_category === 'Outpatient' ? matchingUniqueID.reason_different : '',
                            bank_name: matchingUniqueID.bank_name,
                            bank_holder: matchingUniqueID.bank_holder,
                            bank_account: matchingUniqueID.bank_account,
                            claim_amount: matchingUniqueID.claim_amount,
                            comment: matchingUniqueID.comment,
                            ic_number: matchingUniqueID.ic_number,
                            reference_number: matchingUniqueID.reference_number,
                            files: matchingUniqueID.files,
                        };
                        // this.originalClaimAmount = matchingUniqueID.claim_amount;   
                        this.uniqueCode = matchingUniqueID.unique_code;
                        this.requesterId = matchingUniqueID.requester_id;
                        this.originalClaimAmount = parseFloat(matchingUniqueID.claim_amount) || 0;
                        await this.fetchAndSetMedicalLimits();
                        console.log("matching Unique ID", matchingUniqueID);
                    } else {
                        console.log("No matching unique_code found");
                    }
                }
                else {
                    console.error("Expected an array but got:", typeof dataArray, dataArray);
                    }
                },
                 async fetchAndSetMedicalLimits() {
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

        async handleSubmit() {
            try {

                // const originalAmount = parseFloat(this.originalClaimAmount) || 0;
                // const newAmount = isNaN(parseFloat(this.medical.claim_amount)) ? 0 : parseFloat(this.medical.claim_amount);
                // const category = this.medical.medical_category;

                // let storageKey = '';
                // let initialKey = '';
                // let yearlyLimit = 0;
                // let perClaimLimit = null;

                // // Step 1: Set keys and limits
                // if (category === "Outpatient") {
                // storageKey = "remaining_limit_outpatient";
                // initialKey = "initial_limit_outpatient";
                // yearlyLimit = 700;
                // perClaimLimit = 70;
                // } else if (category === "Medical Check-Up" || category === "Dental") {
                // storageKey = "remaining_limit_medicaldental";
                // initialKey = "initial_limit_medicaldental";
                // yearlyLimit = 200;
                // }

                // // Step 2: Get current remaining limit correctly
                // let currentLimitStr = localStorage.getItem(storageKey);
                // let currentLimit = currentLimitStr !== null ? parseFloat(currentLimitStr) : NaN;

                // // Fallback to yearlyLimit if no value exists
                // if (isNaN(currentLimit)) {
                // currentLimit = parseFloat(localStorage.getItem(initialKey)) || yearlyLimit;
                // }

                // // Step 3: Restore old claim to the limit
                // const restoredLimit = currentLimit + originalAmount;

                // // Step 4: Outpatient per-claim limit check
                // if (perClaimLimit && newAmount > perClaimLimit) {
                // Swal.fire({
                //     icon: 'error',
                //     title: 'Exceeds Per-Claim Limit',
                //     text: `The maximum allowed per outpatient claim is RM${perClaimLimit}.`,
                //     confirmButtonColor: '#3085d6',
                //     confirmButtonText: 'OK'
                // });
                // return;
                // }

                // // Step 5: Check if newAmount exceeds restored limit
                // if (newAmount > restoredLimit) {
                // Swal.fire({
                //     icon: 'error',
                //     title: 'Exceeds Remaining Limit',
                //     text: `You only have RM${restoredLimit} remaining.`,
                //     confirmButtonColor: '#3085d6',
                //     confirmButtonText: 'OK'
                // });
                // return;
                // }

                // // Step 6: Store the updated remaining limit
                // const updatedLimit = Math.max(0, restoredLimit - newAmount);
                // localStorage.setItem(storageKey, updatedLimit.toString());

                // // Step 7: Update original claim amount for future edits
                // this.originalClaimAmount = newAmount;
                
                // Delete files marked for deletion
                for (const fileUrl of this.filesToDelete) {
                    const fileName = fileUrl.split('/').pop();
                    await axios.delete(`http://172.28.28.116:7267/api/Files/DeleteImage/${this.requesterId}/${this.uniqueCode}/${fileName}`);
                }
                this.filesToDelete = [];

                // 2. Upload new files
                if (this.newFiles.length > 0) {
                    const formData = new FormData();
                    this.newFiles.forEach(file => formData.append("filecollection", file));
                    const uploadEndpoint = `https://esvcportal.pktgroup.com/api/file/api/Files/MultiUploadImage/${this.requesterId}/${this.uniqueCode}`;
                    await axios.post(uploadEndpoint, formData, {
                        headers: { "Content-Type": "multipart/form-data" },
                    });
                    this.newFiles = [];
                }

                this.validateMedicalClaim();
                const submitData = {
                    date_leave_taken: this.formattedDate,
                    reason: this.medical.medical_category === 'Outpatient' ? this.medical.reason : '',
                    medical_category: this.medical.medical_category,
                    clinic_selection: this.medical.medical_category === 'Outpatient' ? this.medical.clinic_selection : '',
                    clinic_name: this.medical.medical_category === 'Outpatient' && this.medical.clinic_selection === 'Other Clinic'? this.medical.clinic_name: '',
                    reason_different: this.medical.medical_category === 'Outpatient' ? this.medical.reason_different : '',
                    bank_name: this.medical.bank_name,
                    bank_holder: this.medical.bank_holder,
                    bank_account: this.medical.bank_account,
                    claim_amount: this.medical.claim_amount,
                    ic_number: this.medical.ic_number,
                    unique_code: this.uniqueCode,
                    reference_number: this.medical.reference_number,
                    requester_id: this.requesterId,
                };

                console.log("Data to be submitted", submitData);
                
                // Make the PUT request to update the entertainment data
                const response = await axios.put('http://172.28.28.116:6165/api/User/UpdateMedical', submitData, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                // const submitResponse = await updateMedical(submitData);
                if (response.data && response.data.result) {
                    console.log("Update Medical data:", response.data.result);
                    const category = this.medical.medical_category;
                    const original = parseFloat(this.originalClaimAmount) || 0;
                    const claim = parseFloat(this.medical.claim_amount) || 0;

                    if (category === "Outpatient") {
                        const limitKey = "remaining_limit_outpatient";
                        const initialKey = "initial_limit_outpatient"; // optional
                        let currentLimit = parseFloat(localStorage.getItem(limitKey)) || 0;

                        // Restore the original amount, then deduct the new claim amount
                        let updatedLimit = Math.max(0, currentLimit + original - claim);

                        // Update both remaining and initial limits if needed
                        localStorage.setItem(limitKey, updatedLimit.toString());
                        localStorage.setItem(initialKey, updatedLimit.toString());

                    } else if (category === "Medical Check-Up" || category === "Dental") {
                        const limitKey = "remaining_limit_medicaldental";
                        const initialKey = "initial_limit_medicaldental"; // optional
                        let currentLimit = parseFloat(localStorage.getItem(limitKey)) || 0;

                        // Restore the original amount, then deduct the new claim amount
                        let updatedLimit = Math.max(0, currentLimit + original - claim);

                        // Update both remaining and initial limits if needed
                        localStorage.setItem(limitKey, updatedLimit.toString());
                        localStorage.setItem(initialKey, updatedLimit.toString());
                    }



                    Swal.fire({
                        title: 'Success',
                        text: 'Medical claim updated successfully',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#dc2626'
                    });
                    this.$emit('refresh-claims', this.claim.refNo);
                    this.closeSlideOver();
                } else {
                    console.log("Update Medical data not found");
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
        watch: {
        isOpen(newVal) {
            if (newVal) this.fetchMedicalLeaveData();
        }
    },
    },


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