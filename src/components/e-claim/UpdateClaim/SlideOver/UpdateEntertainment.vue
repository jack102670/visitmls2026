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
                    Update {{ claim.tabTitle }} Details
                </p>
            </div>
            <form @submit.prevent="handleSubmit">
                <div class="grid grid-cols-8 gap-2 w-full">
                    <div class="col-span-4">
                        <label for="date_event" class="font-medium text-sm">Date Event</label>
                        <input type="date" id="date_event" v-model="formattedDate"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>

                    <div class="col-span-4">
                        <label for="entertainment_type" class="font-medium text-sm">Entertainment Type</label>
                        <select id="entertainment_type" v-model="entertainment.entertainment_type"
                            class="mt-1 text-xs block text-xs w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                            <option v-for="(entertainment, index) in EntertainmentType" :key="index"
                                :value="entertainment">{{ entertainment }}</option>
                        </select>
                    </div>
                    <div class="col-span-4" v-if="entertainment.entertainment_type === 'OTHERS'">
                        <label for="entertainment_type" class="font-medium text-sm">Specify Type</label>
                        <input type="text" id="entertainment_type" v-model="entertainment.other_type"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                    </div>

                    <!-- <div class="col-span-4">
                        <label for="company_name" class="font-medium text-sm">Company Name</label>
                        <input type="text" id="company_name" v-model="entertainment.company_name"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div> -->

                    <div class="col-span-4">
                        <label for="venue_name" class="font-medium text-sm">Restaurant Name</label>
                        <input type="text" id="venue_name" v-model="entertainment.venue_name"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>

                    <div class="col-span-4">
                        <label for="receipt_no" class="font-medium text-sm">Receipt No.</label>
                        <input type="text" id="receipt_no" v-model="entertainment.receipt_no"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>

                    <div class="col-span-4">
                        <label for="description" class="font-medium text-sm">Reference</label>
                        <select id="description" v-model="entertainment.description"
                            class="mt-1 text-xs block text-xs w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                            <option v-for="(description, index) in descriptionType" :key="index" :value="description">{{
                                description }}</option>
                        </select>
                    </div>

                    <div class="col-span-4">
                        <label for="company_name" class="font-medium text-sm">Total Amount(RM)</label>
                        <input type="text" id="company_name" v-model="entertainment.total_fee"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>
                    <div class="col-span-4">
                        <label for="files" class="font-medium text-sm">Uploaded Files</label>
                        <div v-if="entertainment.files.length" class="mt-2">
                            <!-- <p class="text-xs text-gray-600">Click on a file to view or delete:</p> -->
                            <ul class="list-disc list-inside">
                                <li v-for="(file, index) in entertainment.files" :key="index"
                                    class="flex items-center space-x-2">
                                    <a :href="typeof file === 'string' ? file : '#'" target="_blank"
                                        class="text-blue-500 hover:underline text-xs">
                                        {{ typeof file === 'string' ? file.split('/').pop() : file.name }}
                                    </a>

                                    <a @click="deleteFile(index)"
                                        class="text-red-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L6.26 5.79m8.788 0H6.26m12.804 0a2.25 2.25 0 00-2.73-1.684M6.26 5.79a2.25 2.25 0 002.73 1.684m0 0a2.25 2.25 0 00-2.73 1.684m0 0a2.25 2.25 0 012.73 1.684" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div v-if="!entertainment.files.length" class="mt-4">
                            <input type="file" id="newFile" @change="uploadFiles"
                                class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                            <span v-if="selectedFileName" class="text-xs text-gray-600 mt-1 block">
                                Selected file: {{ selectedFileName }}
                            </span>
                        </div>
                    </div>

                    <div class="col-span-8">
                        <label class="font-medium text-sm">Participants </label>
                        <button type="button" @click="newParticipants"
                            class="mt-1 text-xs bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Add
                        </button>
                        <div class="overflow-x-auto border border-gray-300 rounded-md mt-2">
                            <table class="min-w-full bg-white dark:bg-gray-800 border-collapse">
                                <thead>
                                    <tr class="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                                        <th class="py-2 px-4 text-left border text-sm font-medium">#</th>
                                        <th class="py-2 px-4 text-left border text-sm font-medium">Name</th>
                                        <th class="py-2 px-4 text-left border text-sm font-medium">Company Name</th>
                                        <th class="py-2 px-4 text-left border text-sm font-medium">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(participant, index) in paginatedParticipants || []"
                                        :key="participant.id" class="border-b dark:border-gray-600">
                                        <td class="py-2 px-4 text-xs">{{ index + 1 + (currentPage - 1) * pageSize }}
                                        </td>
                                        <td class="py-2 px-4 text-xs">{{ participant.name }}</td>
                                        <td class="py-2 px-4 text-xs">{{ participant.company_name }}</td>
                                        <td class="py-2 px-4 text-xs ">
                                            <!-- Edit Button -->
                                            <a @click="editParticipant(participant)"
                                                class="bg-green-600 hover:bg-green-700 text-white transition duration-300 px-2 py-1 rounded-md cursor-pointer inline-flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2" d="M11 4h2m2 0h.01M13 4l7 7-9 9H4v-9l9-9z" />
                                                </svg>
                                            </a>

                                            <a @click="deleteParticipant(participant)"
                                                class="bg-red-600 hover:bg-red-700 text-white transition duration-300 px-2 py-1 rounded-md cursor-pointer inline-flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </a>
                                        </td>
                                        <!-- <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap space-x-2">
                                <a @click="toggleSlideOver(index)"
                                class="bg-green-600 hover:bg-green-700 text-white transition duration-300 px-2 py-1 rounded-md cursor-pointer inline-flex items-center justify-center"> -->
                                        <!-- Pencil Icon -->
                                        <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M11 4h2m2 0h.01M13 4l7 7-9 9H4v-9l9-9z" />
                                    </svg>
                                </a>
                            </td> -->
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="flex justify-between items-center mt-3">
                            <button @click="prevPage" :disabled="currentPage === 1"
                                class="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded disabled:opacity-50">
                                Previous
                            </button>
                            <span class="text-sm text-gray-700 dark:text-gray-300">Page {{ currentPage }} of {{
                                totalPages }}</span>
                            <button @click="nextPage" :disabled="currentPage === totalPages"
                                class="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded disabled:opacity-50">
                                Next
                            </button>
                        </div>
                    </div>


                    <div class="col-span-8">
                        <label for="comment" class="font-medium text-sm">Comment</label>
                        <textarea type="text" id="comment" v-model="entertainment.comment" readonly
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-50 bg-gray-100 cursor-not-allowed"></textarea>
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
            <transition name="fade">
                <div v-if="isParticipantFormOpen"
                    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div class="bg-white p-6 rounded-lg shadow-lg w-1/5">
                        <h2 class="text-lg font-bold mb-4">Edit Participant</h2>
                        <div>
                            <label class="block text-sm font-medium">Name</label>
                            <input type="text" v-model="selectedParticipant.name" class="w-full border rounded p-2">
                        </div>
                        <div class="mt-4">
                            <label class="block text-sm font-medium">Company Name</label>
                            <input type="text" v-model="selectedParticipant.company_name"
                                class="w-full border rounded p-2">
                        </div>
                        <div class="flex justify-end mt-4 space-x-2">
                            <button @click="isParticipantFormOpen = false"
                                class="bg-gray-400 text-white px-4 py-2 rounded">
                                Cancel
                            </button>
                            <button type="button" @click="saveParticipant(selectedParticipant)"
                                class="bg-blue-600 text-white px-4 py-2 rounded">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </transition>

        </div>
    </transition>
</template>
<script>
// import { getEntertainment, updateEntertainment } from '@/api/EclaimAPI';
import Swal from "sweetalert2";
import axios from "axios";
import { id } from "intl-tel-input/i18n";

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

            entertainment: {
                description: '',
                date_event: '',
                entertainment_type: '',
                other_type: '',
                venue_name: '',
                receipt_no: '',
                // company_name: '',
                total_fee: '',
                comment: '',
                participants: [],
                files: [],



            },
            // EntertainmentType: ["BREAKFAST", "LUNCH", "DINNER", "TEA BREAK", "OTHERS"],
            // descriptionType: ["ENTERTAINMENT-CLIENT(EXISTING)", "ENTERTAINMENT-CLIENT(NEW/POTENTIAL)", 
            // "ENTERTAINMENT-NON TRADE", "GIFT TO CLIENT", "GIFT TO OTHERS"],
            EntertainmentType: ["Breakfast", "Lunch", "Dinner", "Tea Break", "Others"],
            descriptionType: ["Entertainment-Client(Existing)", "Entertainment-Client(New/Potential)", 
            "Entertainment-Non Trade", "Gift To Client", "Gift To Others-Non Trade","Meal For Staff" ],
            currentPage: 1,
            pageSize: 5,
            //entertainment: {},
            newFiles: [],
            filesToDelete: [],
            selectedFileName: "",
            uniqueCode: "",
            requesterId: "",
            participantsToDelete: [],
            isParticipantFormOpen: false,
            selectedParticipant: null

        }
    },
    mounted() {
        const refNo = this.$route.params.rn;
        console.log("RefNo:", refNo);

        // this.updateEntertainment(refNo),
        this.fetchEntertainmentData(refNo)

        // if (this.claim?.refNo) {
        //     this.fetchEntertainment();
        // }
    },
    computed: {
        formattedDate: {
            get() {
                const d = new Date(this.entertainment.date_event);
                if (isNaN(d)) return "";
                const year = d.getFullYear();
                const month = String(d.getMonth() + 1).padStart(2, "0");
                const day = String(d.getDate()).padStart(2, "0");
                return `${year}-${month}-${day}`;
            },
            set(value) {
                this.entertainment.date_event = value; // Keep in ISO format or convert if needed
            }
        },
        totalPages() {
            return Math.ceil((this.entertainment?.participants?.length || 0) / this.pageSize);
        },
        paginatedParticipants() {
            if (!this.entertainment?.participants) {
                return [];
            }
            const start = (this.currentPage - 1) * this.pageSize;
            return this.entertainment.participants.slice(start, start + this.pageSize);
        },
    },
    methods: {
        newParticipants() {
            this.selectedParticipant = {
                // id: null,
                name: "",
                company_name: ""
            };
            this.isParticipantFormOpen = true;
        },
        // async deleteParticipant(participant) {

        //         if (participant && participant.id) {
        //             const confirmResult = await Swal.fire({
        //                 title: "Are you sure?",
        //                 text: "This action will permanently delete the participant.",
        //                 icon: "warning",
        //                 showCancelButton: true,
        //                 confirmButtonColor: "#dc2626",
        //                 cancelButtonColor: "#6b7280",
        //                 confirmButtonText: "Yes, delete it!"
        //             });

        //             if (confirmResult.isConfirmed) {
        //                 try {
        //                     const response = await axios.delete(`http://172.28.28.116:6165/api/User/DeleteParticipant/${participant.id}`);

        //                     if (response.status === 200) {
        //                         const index = this.entertainment.participants.findIndex(p => p.id === participant.id);
        //                         if (index !== -1) {
        //                             this.entertainment.participants.splice(index, 1);
        //                             console.log(`Deleted participant with ID: ${participant.id}`);
        //                         }

        //                         Swal.fire({
        //                             title: "Deleted!",
        //                             text: "Participant has been successfully deleted.",
        //                             icon: "success",
        //                             confirmButtonColor: "#dc2626"
        //                         });
        //                     }
        //                 } catch (error) {
        //                     console.error("Failed to delete participant:", error);
        //                     Swal.fire({
        //                         title: "Error",
        //                         text: "Failed to delete participant. Please try again.",
        //                         icon: "error",
        //                         confirmButtonColor: "#dc2626"
        //                     });
        //                 }
        //             }
        //         } else {
        //             console.warn("Invalid participant object.");
        //         }
        //     },
        deleteParticipant(participant) {
            if (participant.id) {
                this.participantsToDelete.push(participant.id);
            }
            this.entertainment.participants = this.entertainment.participants.filter(p => p !== participant);
            Swal.fire({
                title: "Are you sure?",
                text: "This will remove the participant from the list.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#dc2626",
                cancelButtonColor: "#6b7280",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // Remove from array only
                    this.entertainment.participants = this.entertainment.participants.filter(p => p !== participant);
                }
            });
        },
        editParticipant(participant) {
            this.selectedParticipant = { ...participant };
            this.isParticipantFormOpen = true;
            console.log("Editing participant:", this.selectedParticipant); // Debugging log
        },
        async saveParticipant(participant) {
            if (!participant.name || !participant.company_name) {
                Swal.fire({
                    title: "Missing Info",
                    text: "Please fill in all fields.",
                    icon: "warning",
                    confirmButtonColor: "#dc2626"
                });
                return;
            }

            // Determine if it's an update or add
            if (!participant.id) {
                // New participant: just push to array
                this.entertainment.participants.push({
                    ...participant,
                    reference_number: this.entertainment.reference_number // or undefined, to indicate it's new
                });
            } else {
                // Edit: update in array
                const idx = this.entertainment.participants.findIndex(p => p.id === participant.id);
                if (idx !== -1) this.entertainment.participants.splice(idx, 1, participant);
            }

            this.selectedParticipant = null;
            this.isParticipantFormOpen = false;
        },


        // saveParticipant(participant) {
        //     if (!this.participants || !Array.isArray(this.participants)) {
        //         console.error("Participants list is undefined or not an array:", this.participants);
        //         return;
        //     }

        //     const index = this.participants.findIndex(p => p.id === participant.id);
        //     if (index !== -1) {
        //         this.participants[index] = participant;
        //     } else {
        //         this.participants.push(participant);
        //     }
        // },
        // async updateEntertainment(refNo) {
        //     try {

        //         const submitData = {
        //         ...this.entertainment,
        //         participants: this.participants
        //         };

        //         const response = await axios.put(`http://172.28.28.116:6165/api/User/UpdateEntertainment`, submitData, {
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         });

        //         if (response.data && response.data.result) {
        //         console.log("Update Entertainment data:", response.data.result);
        //         Swal.fire("Success", "Entertainment data updated successfully!", "success");
        //         this.$emit("close");
        //         } else {
        //         console.log("Update Entertainment data not found");
        //         Swal.fire("Error", "Entertainment data not found.", "error");
        //         }
        //     } catch (error) {
        //         if (error.response) {
        //         console.error("Server responded with an error:", error.response.data);
        //         console.error("Status Code:", error.response.status);
        //         console.error("Headers:", error.response.headers);
        //         } else if (error.request) {
        //         console.error("No response received from server:", error.request);
        //         } else {
        //         console.error("Error setting up the request:", error.message);
        //         }
        //         Swal.fire("Error", "Failed to update entertainment data.", "error");
        //     }
        //     },

        // async updateEntertainment(refNo) {
        //     try {
        //         const updatedData = {
        //             ...this.entertainment,
        //             participants: this.participants
        //         };
        //         await updateEntertainment(this.claim.id, updatedData);
        //         // await axios.get(`http://172.28.28.116:6165/api/User/UpdateEntertainment/${refNo}`);
        //         Swal.fire("Success", "Entertainment data updated successfully!", "success");
        //         this.$emit("close");
        //     } catch (error) {
        //         Swal.fire("Error", "Failed to update entertainment data.", "error");
        //         console.error("Update error:", error);
        //     }
        // },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        closeSlideOver() {
            this.$emit('close');
        },

        // Delete a file from the list
        deleteFile(index) {
            const deletedFile = this.entertainment.files[index];
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
                    this.entertainment.files.splice(index, 1);
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
                this.entertainment.files.push(renamedFile);
            }
            this.selectedFileName = files[0].name;
            event.target.value = "";
        },
        async fetchEntertainmentData(refNo) {

            const response = await axios.get(`http://172.28.28.116:6165/api/User/GetEntertainment/${refNo}`);
            console.log("Entertainment Data:", response.data);

            const dataArray = response.data.result;

            if (Array.isArray(dataArray)) {
                const matchingUniqueID = dataArray.find(
                    record => record.unique_code === this.claim.unique_code
                );

                if (matchingUniqueID) {


                    this.entertainment = {
                        description: matchingUniqueID.description,
                        reference_number: matchingUniqueID.reference_number,
                        date_event: matchingUniqueID.date_event,
                        entertainment_type: matchingUniqueID.entertainment_type,
                        venue_name: matchingUniqueID.venue_name,
                        receipt_no: matchingUniqueID.receipt_no,
                        // company_name: matchingUniqueID.company_name,
                        total_fee: matchingUniqueID.total_fee,
                        unique_code: matchingUniqueID.unique_code,
                        comment: matchingUniqueID.comment,
                        files: matchingUniqueID.files,
                        participants: matchingUniqueID.participants || [],
                        other_type: '',
                    };
                    this.uniqueCode = matchingUniqueID.unique_code;
                    this.requesterId = matchingUniqueID.requester_id;
                    // Directly assign participants
                    // this.entertainment.participants = [...matchingUniqueID.participants] || [];
                    console.log("Fetched participants:", this.entertainment.participants);


                    const isCustomType = !this.EntertainmentType.includes(matchingUniqueID.entertainment_type);
                    if (isCustomType) {
                        // Display it as "OTHERS" but store the real custom value
                        this.entertainment.other_type = matchingUniqueID.entertainment_type;
                        this.entertainment.entertainment_type = "OTHERS";
                    }

                    this.ent_refNumber = matchingUniqueID.ent_refNumber;
                } else {
                    console.log("No matching unique_code found");
                }
            } else {
                console.error("Expected an array but got:", typeof dataArray, dataArray);
            }

        },

        // Function to update entertainment data (as a helper)
        // async handleSubmitEntertainment() {
        //     try {

        //         // Delete participants
        //         for (const id of this.participantsToDelete) {
        //             await axios.delete(`http://172.28.28.116:6165/api/User/DeleteParticipant/${id}`);
        //         }
        //         this.participantsToDelete = [];


        //         // Delete files marked for deletion
        //         for (const fileUrl of this.filesToDelete) {
        //             const fileName = fileUrl.split('/').pop();
        //             await axios.delete(`http://172.28.28.116:7267/api/Files/DeleteImage/${this.requesterId}/${this.uniqueCode}/${fileName}`);
        //         }
        //         this.filesToDelete = [];

        //         // Upload new files
        //         if (this.newFiles.length > 0) {
        //             const formData = new FormData();
        //             this.newFiles.forEach(file => formData.append("filecollection", file));
        //             const uploadEndpoint = `https://esvcportal.pktgroup.com/api/file/api/Files/MultiUploadImage/${this.requesterId}/${this.uniqueCode}`;
        //             await axios.post(uploadEndpoint, formData, {
        //                 headers: { "Content-Type": "multipart/form-data" },
        //             });
        //             this.newFiles = [];
        //         }
        //         // Prepare the data to be submitted
        //         const submitData = {
        //             description: this.entertainment.description?.trim(),
        //             reference_number: this.entertainment.reference_number,
        //             date_event: this.formattedDate,
        //             entertainment_type: this.entertainment.entertainment_type === "OTHERS"
        //                 ? this.entertainment.other_type  // replace with the actual text entered
        //                 : this.entertainment.entertainment_type,
        //             venue_name: this.entertainment.venue_name,
        //             company_name: this.entertainment.company_name,
        //             total_fee: isNaN(parseFloat(this.entertainment.total_fee)) ? 0 : parseFloat(this.entertainment.total_fee),
        //             unique_code: this.entertainment.unique_code,
        //             // ent: this.entertainment.ent,
        //             participants: this.entertainment.participants,
        //             // participants:[
        //             //             {
        //             //                 id: this.participant.id,
        //             //                 name: "",
        //             //                 company_name: "",
        //             //             }
        //             //         ],
        //             files: this.entertainment.files || []
        //             // participants: this.participants
        //         };

        //         console.log("Submitting Entertainment payload:", submitData);



        //         // const newParticipants = this.entertainment.participants.filter(p => !p.id);
        //         // Make the PUT request to update the entertainment data
        //         const response = await axios.put('http://172.28.28.116:6165/api/User/UpdateEntertainment', submitData, {
        //             headers: {
        //                 "Content-Type": "application/json",
        //             },
        //         });

        //         // Add new participants (those without an id)
        //         const newParticipants = this.entertainment.participants.filter(p => !p.id);
        //         for (const participant of newParticipants) {
        //             await axios.post("http://172.28.28.116:6165/api/User/InsertParticipant", {
        //                 reference_number: this.ent_refNumber,
        //                 participants: [{ name: participant.name, company_name: participant.company_name }]
        //             });
        //         }

        //         // Handle the response based on success or failure
        //         if (response.data && response.data.result) {
        //             console.log("Update Entertainment data:", response.data.result);

        //             this.ent_refNumber = this.entertainment.reference_number;
        //             // Now insert new participants using saveParticipant()
        //             for (const participant of newParticipants) {
        //                 await this.saveParticipant(participant);
        //             }

        //             Swal.fire({
        //                 title: 'Success',
        //                 text: 'Entertainment updated successfully',
        //                 icon: 'success',
        //                 confirmButtonText: 'OK',
        //                 confirmButtonColor: '#dc2626',
        //             });
        //             this.$emit('refresh-claims', this.claim.refNo);
        //             this.closeSlideOver();
        //         } else {
        //             console.log("Update Entertainment data not found");
        //             Swal.fire({
        //                 title: 'Error',
        //                 text: 'Failed to update Entertainment',
        //                 icon: 'error',
        //                 confirmButtonText: 'OK',
        //                 confirmButtonColor: '#dc2626',
        //             });
        //         }
        //     } catch (error) {
        //         console.error("Error submitting data:", error);
        //         let errorMessage = "An unexpected error occurred.";
        //         if (error.response) {
        //             errorMessage = error.response.data?.message || `Error: ${error.response.status} - ${error.response.statusText}`;
        //         } else if (error.request) {
        //             errorMessage = "No response received from the server.";
        //         } else {
        //             errorMessage = error.message;
        //         }

        //         Swal.fire({
        //             title: 'Submission Failed',
        //             text: errorMessage,
        //             icon: 'error',
        //             confirmButtonText: 'OK',
        //             confirmButtonColor: '#dc2626',
        //         });
        //     }
        // },

        async handleSubmit() {
            const updatedClaim = {
                requester_id: this.requesterId,
                description: this.entertainment.description?.trim(),
                reference_number: this.entertainment.reference_number,
                date_event: this.formattedDate,
                entertainment_type: this.entertainment.entertainment_type === "OTHERS"
                    ? this.entertainment.other_type  // replace with the actual text entered
                    : this.entertainment.entertainment_type,
                venue_name: this.entertainment.venue_name,
                receipt_no: this.entertainment.receipt_no,
                // company_name: this.entertainment.company_name,
                total_fee: isNaN(parseFloat(this.entertainment.total_fee)) ? 0 : parseFloat(this.entertainment.total_fee),
                unique_code: this.entertainment.unique_code,
                participants: this.entertainment.participants.map(p => ({
                    id: p.id,
                    name: p.name,
                    company_name: p.company_name
                })),
                ent_refNumber: this.ent_refNumber,
                filesToDelete: this.filesToDelete,
                newFiles: this.newFiles,
                files: this.entertainment.files || [],
                participantsToDelete: this.participantsToDelete,

                tabTitle: "Entertainment",
                locationPurpose: this.entertainment.description || "-",
                date: this.date_event || "-",
                total: this.entertainment.total_fee || "0.00"
            };

            console.log("Emitting Entertainment payload:", updatedClaim);
            this.$emit("update-claim", updatedClaim);
            this.closeSlideOver();
        },

        watch: {
            isOpen(newVal) {
                if (newVal) this.fetchEntertainmentData();
            },
            'entertainment.participants'(newVal) {
                console.log("Participants updated:", newVal);
                // You can also perform other actions here
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