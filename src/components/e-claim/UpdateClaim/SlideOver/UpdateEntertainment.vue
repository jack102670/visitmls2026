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
                    <div class="col-span-8">
                        <label for="date_event" class="font-medium text-sm">Date Event</label>
                        <input type="date" id="date_event" v-model="formattedDate"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>

                    <div class="col-span-8">
                        <label for="entertainment_type" class="font-medium text-sm">Entertainment Type</label>
                        <select id="entertainment_type" v-model="entertainment.entertainment_type"
                            class="mt-1 text-xs block text-xs w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                            <option v-for="(entertainment, index) in EntertainmentType" :key="index"
                                :value="entertainment">{{ entertainment }}</option>
                        </select>
                    </div>
                    <div class="col-span-8" v-if="entertainment.entertainment_type === 'OTHERS'">
                        <label for="entertainment_type" class="font-medium text-sm">Specify Type</label>
                        <input type="text" id= "entertainment_type" v-model="entertainment.other_type" 
                        class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                    </div>
                    
                    <div class="col-span-4">
                        <label for="company_name" class="font-medium text-sm">Company Name</label>
                        <input type="text" id="company_name" v-model="entertainment.company_name"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>

                    <div class="col-span-4">
                        <label for="venue_name" class="font-medium text-sm">Venue Name</label>
                        <input type="text" id="venue_name" v-model="entertainment.venue_name"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>
                    
                    <div class="col-span-8">
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
                        <div v-if="entertainment.files && entertainment.files.length" class="mt-2">
                            <p class="text-xs text-gray-600">Click on a file to view:</p>
                            <ul class="list-disc list-inside">
                                <li v-for="(file, index) in entertainment.files" :key="index">
                                    <a :href="file" target="_blank" class="text-blue-500 hover:underline text-xs">
                                        Download File {{ index + 1 }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="col-span-8">
                        <label class="font-medium text-sm">Participants</label>
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
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M11 4h2m2 0h.01M13 4l7 7-9 9H4v-9l9-9z" />
                                        </svg>    
                                        </a>
                                        <!-- Delete Button
                                        <a @click="deleteParticipant(participant)"
                                            class="bg-red-600 hover:bg-red-700 text-white transition duration-300 px-2 py-1 rounded-md cursor-pointer inline-flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </a> -->
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
                    <div class="bg-white p-6 rounded-lg shadow-lg w-1/3">
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
                            <button @click="saveParticipant(selectedParticipant)" class="bg-blue-600 text-white px-4 py-2 rounded">
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
                company_name: '',
                total_fee: '',
                comment: '',
                participants: [],
                files: [],
            
            

            },
            EntertainmentType: ["BREAKFAST", "LUNCH", "DINNER", "TEA BREAK", "OTHERS"],
            descriptionType: ["ENTERTAINMENT-CLIENT(EXISTING)", "ENTERTAINMENT-CLIENT(NEW/POTENTIAL)", "ENTERTAINMENT-NON TRADE", "GIFT TO CLIENT", "GIFT TO OTHERS"],
            // EntertainmentType: ["Breakfast", "Lunch", "Dinner", "Tea Break", "Others"],
            // descriptionType: ["Entertainment-Client(Existing)", "Entertainment-Client(New/Potential)", "Entertainment-Non Trade", "Gift To Client", "Gift To Others-Non Trade","Meal For Staff" ],
            currentPage: 1,
            pageSize: 5,
            //entertainment: {},
            
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
        // deleteParticipant(participant) {
        //     if (participant && participant.id) {
        //         const index = this.entertainment.participants.findIndex(p => p.id === participant.id);
        //         if (index !== -1) {
        //             this.entertainment.participants.splice(index, 1, participant); // Remove from array
        //             console.log(`Deleted participant with ID: ${participant.id}`);
        //         } else {
        //         this.entertainment.participants.push(participant);
        //     }
                
        //     }
        // },

        editParticipant(participant) {
            this.selectedParticipant = { ...participant };
            this.isParticipantFormOpen = true;
            console.log("Editing participant:", this.selectedParticipant); // Debugging log
        },
        saveParticipant(participant) {
            console.log("Participant before saving:", participant); // Debugging log
            const index = this.entertainment.participants.findIndex(p => p.id === participant.id);
            if (index !== -1) {
                this.entertainment.participants.splice(index, 1, participant); // Update existing participant
                console.log("Updated participant:", this.entertainment.participants[index]); // Debugging log
            } else {
                this.entertainment.participants.push(participant);
            }


            // // Ensure the participant is valid
            // if (!participant || !participant.id) {
            //     console.error("Invalid participant:", participant);
            //     return;
            // }

            // console.log("Participants before:", this.participants);
            // console.log("Checking participant ID:", participant.id);
            // console.log("Checking participant name:", participant.name);
            // console.log("Checking participant company name:", participant.company_name);
            // console.log("Existing participant:", this.participants?.[participant.id]);
            // // Check if participant ID exists and update, otherwise add new
            // if (this.participants && this.participants[participant.id]) {
            //     // If participant already exists, update it
            //     this.participants[participant.id] = { ...participant };
            //     console.log("Updated participant:", this.participants[participant.id]); // Debugging log
            // } else {
            // // If participant doesn't exist, add it
            // this.participants = {
            //     ...this.participants,  // Spread existing participants
            //     [participant.id]: { ...participant },  // Add new participant
            // };
            // }
            // console.log("Saving participant:", participant); // Debugging log


            // Optional: reset form state
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
            company_name: matchingUniqueID.company_name,
            total_fee: matchingUniqueID.total_fee,
            unique_code: matchingUniqueID.unique_code,
            comment: matchingUniqueID.comment,
            files: matchingUniqueID.files,
            participants: matchingUniqueID.participants || [],
            other_type:'',
            };

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

        // const response = await axios.get(`http://172.28.28.116:6165/api/User/GetEntertainment/${refNo}`);

        //             const entertainmentData = response.data.result;

        //             if (entertainmentData) {
        //             console.log("Entertainment details:", entertainmentData);

        //             const entertainmentClaims = entertainmentData.map(claim => ({
        //                 tabTitle: "Entertainment",
        //                 locationPurpose: claim.venue_name,
        //                 date: claim.date_event,
        //                 total: claim.total_fee,
        //                 unique_code: claim.unique_code,
        //                 refNo: refNo,
        //             }));

        //             console.log("Formatted Entertainment Claims:", entertainmentClaims);
        //             this.dataclaims = entertainmentClaims; // Assign to dataclaims
        //             return entertainmentClaims;
        //             } else {
        //             console.log("Entertainment details not found");
        //             return []; // return empty array if no data
        //             }

        // Function to update entertainment data (as a helper)
        async handleSubmit() {
            try {
                // Prepare the data to be submitted
                const submitData = {
                    description: this.entertainment.description?.trim(),
                    reference_number: this.entertainment.reference_number,
                    date_event: this.formattedDate,
                    entertainment_type: this.entertainment.entertainment_type === "OTHERS"
                    ? this.entertainment.other_type  // replace with the actual text entered
                    : this.entertainment.entertainment_type,
                    venue_name: this.entertainment.venue_name,
                    company_name: this.entertainment.company_name,
                    total_fee: isNaN(parseFloat(this.entertainment.total_fee)) ? 0 : parseFloat(this.entertainment.total_fee),
                    unique_code: this.entertainment.unique_code,
                    // ent: this.entertainment.ent,
                    participants: this.entertainment.participants,
                    // participants:[
                    //             {
                    //                 id: this.participant.id,
                    //                 name: "",
                    //                 company_name: "",
                    //             }
                    //         ],
                    files: this.entertainment.files || []
                    // participants: this.participants
                };

                console.log("Submitting Entertainment payload:", submitData);

                // Make the PUT request to update the entertainment data
                const response = await axios.put('http://172.28.28.116:6165/api/User/UpdateEntertainment', submitData, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                // Handle the response based on success or failure
                if (response.data && response.data.result) {
                    console.log("Update Entertainment data:", response.data.result);
                    Swal.fire({
                        title: 'Success',
                        text: 'Entertainment updated successfully',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#dc2626',
                    });
                    this.$emit('refresh-claims', this.claim.refNo);
                    this.closeSlideOver();
                } else {
                    console.log("Update Entertainment data not found");
                    Swal.fire({
                        title: 'Error',
                        text: 'Failed to update Entertainment',
                        icon: 'error',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#dc2626',
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
                    confirmButtonColor: '#dc2626',
                });
            }
        },




    

    watch: {
        isOpen(newVal) {
            if (newVal) this.fetchEntertainmentData();
        },
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