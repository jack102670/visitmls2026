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
            <form @submit.prevent="handleSubmitOthers">
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
                        <p class="text-xs text-gray-600">Click on a file to view or delete:</p>
                        <ul class="list-disc list-inside">
                            <li v-for="(file, index) in others.files" :key="index" class="flex items-center space-x-2">
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

                    <div v-if="!others.files.length" class="mt-4">
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
import { fi } from "intl-tel-input/i18n";
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
            newFiles: [],
            filesToDelete: [],
            selectedFileName: "",
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

                        // fetch files
                        // console.log("Uploading file to:", this.requesterId, this.uniqueCode);
                        // console.log("Fetching files for:", this.requesterId, this.uniqueCode);

                        // await this.getFiles();
                        // console.log("Fetched files:", this.others.files);
                    } else {
                        console.log("No matching unique_code found");
                    }
                    }else {
                    console.error("Expected an array but got:", typeof dataArray, dataArray);
                    }
        },



        // Delete a file from the list
        deleteFile(index) {
        const deletedFile = this.others.files[index];
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you really want to delete this file?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
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
                this.others.files.splice(index, 1);
            }
        });
    },

        // Upload a new file
         async uploadFiles(event) {
        // const requesterId = this.requesterId;  // get it from your component/data/props
        // const uniqueCode = this.uniqueCode;    // same here

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
        this.others.files.push(renamedFile);
        }
        this.selectedFileName = files[0].name;
        // const uploadEndpoint = `https://esvcportal.pktgroup.com/api/file/api/Files/MultiUploadImage/${requesterId}/${uniqueCode}`;

        // try {
        //     const response = await axios.post(uploadEndpoint, formData, {
        //         headers: { "Content-Type": "multipart/form-data" },
        //     });
        //     console.log("Upload success:", response.data);
        // } catch (error) {
        //     console.error("Upload error:", error);
        //     Swal.fire("Upload Failed", "Something went wrong. Please try again.", "error");
        // }

        event.target.value = "";
    },




        // async getFiles() {
        //     try {
        //         console.log("Fetching files for:", this.requesterId, this.uniqueCode);
        //         const response = await axios.get(
        //             `http://172.28.28.116:6239/api/Files/GetMultiImage/${this.requesterId}/${this.uniqueCode}`
        //         );

        //         if (response.data && Array.isArray(response.data.result)) {
        //             this.others.files = response.data.result;
        //             console.log("Fetched files:", this.others.files);
        //         } else {
        //             console.warn("No files found for this claim.");
        //             Swal.fire({
        //                 title: "No Files Found",
        //                 text: "No files were found for the given reference number.",
        //                 icon: "info",
        //                 confirmButtonText: "OK",
        //             });
        //         }
        //     } catch (error) {
        //         console.error("Error fetching files:", error);
        //     }
        // },


        // async getClaimDetails(refNo) {
        //     try {
                
        //         const response = await axios.get(`http://172.28.28.116:6165/api/User/GetClaimDetails/${refNo}`);
    
        //         if (response.data && response.data.result) {
        //         this.claimDetails = response.data.result;
        //         console.log("0. General Claim Details:", this.claimDetails);
        //         } else {
        //         console.warn("No general claim details found");
        //         }
                
        //         // const data = await getUserClaimDetails(refNo);
        //         // if (data) {
        //         //     this.claimDetails = {
        //         //         ...data.claimDetails,
        //         //         ...data,
        //         //     }
        //         // }
        //         console.log("Claim Details", this.claimDetails);
        //     } catch (error) {
        //         console.error("Error fetching claim details", error);
        //         // throw error;
        //     }
        // },

        closeSlideOver() {
            this.$emit('close');
        },

  
        
        async handleSubmitOthers() {
        try {
            // 1. Delete files marked for deletion
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
            requester_id: this.requesterId,
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