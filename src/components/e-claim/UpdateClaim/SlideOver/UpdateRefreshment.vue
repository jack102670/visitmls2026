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
                        <label for="company_name" class="font-medium text-sm">Customer</label>
                        <input type="text" id="company_name" v-model="refreshment.company_name"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>

                    <div class="col-span-8">
                        <label for="refreshment_type" class="font-medium text-sm">Refreshment Type</label>
                        <select id="refreshment_type" v-model="refreshment.refreshment_type"
                            class="mt-1 text-xs block text-xs w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                            <option v-for="(refreshment, index) in RefreshmentType" :key="index"
                                :value="refreshment">{{ refreshment }}</option>
                        </select>
                    </div>
                    <div class="col-span-8" v-if="refreshment.refreshment_type === 'Others'">
                        <label for="refreshment_type" class="font-medium text-sm">Specify Type</label>
                        <input type="text" id= "refreshment_type" v-model="refreshment.other_type" 
                        class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                    </div>
                    
                    <div class="col-span-4">
                        <label for="venue_name" class="font-medium text-sm">Venue Name</label>
                        <input type="text" id="venue_name" v-model="refreshment.venue_name"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>
                    
                    <div class="col-span-4">
                        <label for="reference_type" class="font-medium text-sm">Reference</label>
                        <select id="reference_type" v-model="refreshment.reference_type"
                            class="mt-1 text-xs block text-xs w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                            <option v-for="(reference_type, index) in ReferenceType" :key="index" :value="reference_type">{{
                                reference_type }}</option>
                        </select>
                    </div>

                    <div class="col-span-4">
                        <label for="company_name" class="font-medium text-sm">Total Amount(RM)</label>
                        <input type="text" id="company_name" v-model="refreshment.total_fee" 
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>
                    <div class="col-span-4">
                    <label for="files" class="font-medium text-sm">Uploaded Files</label>
                    <div v-if="refreshment.files.length" class="mt-2">
                        <!-- <p class="text-xs text-gray-600">Click on a file to view or delete:</p> -->
                        <ul class="list-disc list-inside">
                            <li v-for="(file, index) in refreshment.files" :key="index" class="flex items-center space-x-2">
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

                    <div v-if="!refreshment.files.length" class="mt-4">
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
                    
                    <div class="col-span-8">
                        <label class="font-medium text-sm">Staff Involved </label>
                        <button type="button"  @click="newStaff "
                            class="mt-1 text-xs bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Add  
                        </button>
                        <div class="overflow-x-auto border border-gray-300 rounded-md mt-2">
                            <table class="min-w-full bg-white dark:bg-gray-800 border-collapse">
                                <thead>
                                    <tr class="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                                        <th class="py-2 px-4 text-left border text-sm font-medium">#</th>
                                        <th class="py-2 px-4 text-left border text-sm font-medium">Name</th>
                                        <th class="py-2 px-4 text-left border text-sm font-medium">Department</th>
                                        <th class="py-2 px-4 text-left border text-sm font-medium">Company Name</th>
                                        <th class="py-2 px-4 text-left border text-sm font-medium">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(staff, index) in paginatedStaffs || []"
                                        :key="staff.id" class="border-b dark:border-gray-600">
                                        <td class="py-2 px-4 text-xs">{{ index + 1 + (currentPage - 1) * pageSize }}
                                        </td>
                                        <td class="py-2 px-4 text-xs">{{ staff.name }}</td>
                                        <td class="py-2 px-4 text-xs">{{ staff.department }}</td>
                                        <td class="py-2 px-4 text-xs">{{ staff.company_name }}</td>
                                        <td class="py-2 px-4 text-xs ">
                                        <!-- Edit Button -->
                                        <a @click="editStaff(staff)"
                                        class="bg-green-600 hover:bg-green-700 text-white transition duration-300 px-2 py-1 rounded-md cursor-pointer inline-flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M11 4h2m2 0h.01M13 4l7 7-9 9H4v-9l9-9z" />
                                        </svg>    
                                        </a>

                                        <a @click="deleteStaff(staff)"
                                            class="bg-red-600 hover:bg-red-700 text-white transition duration-300 px-2 py-1 rounded-md cursor-pointer inline-flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </a>
                                        </td>
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
                        <textarea type="text" id="comment" v-model="refreshment.comment" readonly
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
                <div v-if="isStaffFormOpen"
                    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div class="bg-white p-6 rounded-lg shadow-lg w-1/5">
                        <!-- <h2 class="text-lg font-bold mb-4">Edit Staff Involved</h2> -->
                        <div>
                            <label class="block text-sm font-medium">Name</label>
                            <input type="text" v-model="selectedStaff.name" class="w-full border rounded p-2">
                        </div>

                        <div>
                        <label class="block text-sm font-medium">Department</label>
                        <select v-model="selectedStaff.department" class="w-full border rounded p-2">
                        <option v-for="dept in pktDepartments" :key="dept" :value="dept">{{ dept }}</option>
                        </select>
                        </div>

                        <div class="mt-4">
                        <label class="block text-sm font-medium">Company Name</label>
                        <select v-model="selectedStaff.company_name" class="w-full border rounded p-2">
                        <option v-for="company in pktCompanies" :key="company" :value="company">{{ company }}</option>
                        </select>
                        </div>

                        <div class="flex justify-end mt-4 space-x-2">
                            <button @click="isStaffFormOpen = false"
                                class="bg-gray-400 text-white px-4 py-2 rounded">
                                Cancel
                            </button>
                            <button type="button" @click="saveStaff(selectedStaff)" class="bg-blue-600 text-white px-4 py-2 rounded">
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
            
            refreshment: {
                refreshment_type: '',
                other_type: '',
                date_event: '',
                reference_type: '',
                venue_name: '',
                company_name: '',
                total_fee: '',
                comment: '',
                pktDepartments: [], // For department dropdown
                pktCompanies: [],   // For company name dropdown
                sim: [],
                files: [],
            
            

            },
            // RefreshmentType: ["BREAKFAST", "LUNCH", "DINNER", "TEA BREAK", "OTHERS"],
            // ReferenceType: ["ENTERTAINMENT-CLIENT(EXISTING)", "ENTERTAINMENT-CLIENT(NEW/POTENTIAL)", "ENTERTAINMENT-NON TRADE", "GIFT TO CLIENT", "GIFT TO OTHERS"],
            RefreshmentType: ["Breakfast", "Lunch", "Dinner", "Tea Break", "Others"],
            ReferenceType: ["Entertainment-Client(Existing)", "Entertainment-Client(New/Potential)", "Entertainment-Non Trade", "Gift To Client", "Gift To Others-Non Trade","Meal For Staff" ],
            currentPage: 1,
            pageSize: 5,
            newFiles: [],
            filesToDelete: [],
            selectedFileName: "",
            simToDelete: [],
            isStaffFormOpen: false,
            selectedStaff: null

        }
    },
    mounted() {
        const refNo = this.$route.params.rn;
        console.log("RefNo:", refNo);

        // this.updateEntertainment(refNo),
        this.fetchRefreshmentData(refNo)

        // if (this.claim?.refNo) {
        //     this.fetchEntertainment();
        // }
    },
    computed: {
        formattedDate: {
            get() {
            const d = new Date(this.refreshment.date_event);
            if (isNaN(d)) return "";
            const year = d.getFullYear();
            const month = String(d.getMonth() + 1).padStart(2, "0");
            const day = String(d.getDate()).padStart(2, "0");
            return `${year}-${month}-${day}`;
            },
            set(value) {
            this.refreshment.date_event = value; // Keep in ISO format or convert if needed
            }
        },
        totalPages() {
            return Math.ceil((this.refreshment?.sim?.length || 0) / this.pageSize);
        },
        paginatedStaffs() {
            if (!this.refreshment?.sim) {
                return [];
            }
            const start = (this.currentPage - 1) * this.pageSize;
            return this.refreshment.sim.slice(start, start + this.pageSize);
        },
    },
    methods: {
        async fetchDepartment() {
        try {
            const response = await fetch(
            " http://172.28.28.116:6239/api/User/GetDepartment"
            );
            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            this.pktDepartments = data.result.map(
            (department) => department.department
            );
        } catch (error) {
            console.error(`Error fetching department: ${error}`);
        }
        },

        async fetchCompany() {
        try {
            const response = await fetch(
            " http://172.28.28.116:6239/api/User/GetCompany"
            );
            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            this.pktCompanies = data.result.map((company) => company.company_name);
        } catch (error) {
            console.error(`Error fetching company names: ${error}`);
        }
        },

        async newStaff() {
            await this.fetchDepartment();
            await this.fetchCompany();
            this.selectedStaff = {
                // id: null,
                company_name: "",
                name: "",
                department: "",
        };
        this.isStaffFormOpen = true;
        },

        // async deleteStaff(staff) {

        //         if (staff && staff.id) {
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
        //                     const response = await axios.delete(`http://172.28.28.116:6239/api/User/DeleteStaffInvolved/${staff.id}`);

        //                     if (response.status === 200) {
        //                         const index = this.refreshment.sim.findIndex(s => s.id === staff.id);
        //                         if (index !== -1) {
        //                             this.refreshment.sim.splice(index, 1);
        //                             console.log(`Deleted staff with ID: ${staff.id}`);
        //                         }

        //                         Swal.fire({
        //                             title: "Deleted!",
        //                             text: "Staff has been successfully deleted.",
        //                             icon: "success",
        //                             confirmButtonColor: "#dc2626"
        //                         });
        //                     }
        //                 } catch (error) {
        //                     console.error("Failed to delete staff:", error);
        //                     Swal.fire({
        //                         title: "Error",
        //                         text: "Failed to delete staff. Please try again.",
        //                         icon: "error",
        //                         confirmButtonColor: "#dc2626"
        //                     });
        //                 }
        //             }
        //         } else {
        //             console.warn("Invalid staff object.");
        //         }
        //     },

        async deleteStaff(staff) {
                if (staff && staff.id) {
                    this.simToDelete.push(staff.id);
                }
                this.refreshment.sim = this.refreshment.sim.filter(s => s.id !== staff.id);
                    await Swal.fire({
                        title: "Are you sure?",
                        text: "This action will permanently delete the participant.",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#dc2626",
                        cancelButtonColor: "#6b7280",
                        confirmButtonText: "Yes, delete it!"
                    }).then(async (confirmResult) => {

                    if (confirmResult.isConfirmed) {
                        this.refreshment.sim = this.refreshment.sim.filter(s => s.id !== staff.id);
                    }
                });
                        
            },
        async editStaff(staff) {
            await this.fetchDepartment();
            await this.fetchCompany();
            this.selectedStaff = { ...staff };
            this.isStaffFormOpen = true;
            console.log("Editing staff:", this.selectedStaff); // Debugging log
        },
        async saveStaff(staff) {
    if (!staff.name || !staff.company_name || !staff.department) {
        Swal.fire({
            title: "Missing Info",
            text: "Please fill in all fields.",
            icon: "warning",
            confirmButtonColor: "#dc2626"
        });
        return;
    }

    // Determine if it's an update or add
    if (!staff.id) {
        // new staff push to array
            this.refreshment.sim.push({
                ...staff,
                reference_number:this.refreshment.reference_number
            }); 
        } else {
                // Edit: update in array
                const idx = this.refreshment.sim.findIndex(s => s.id === staff.id);
                if (idx !== -1) this.refreshment.sim.splice(idx, 1, staff);
            }

            this.selectedStaff = null;
            this.isStaffFormOpen = false;
},
//         async saveStaff(staff) {
//     if (!staff.name || !staff.company_name || !staff.department) {
//         Swal.fire({
//             title: "Missing Info",
//             text: "Please fill in all fields.",
//             icon: "warning",
//             confirmButtonColor: "#dc2626"
//         });
//         return;
//     }

//     // Determine if it's an update or add
//     if (!staff.id) {
//         // POST new participant
//         try {
//             const response = await axios.post("http://172.28.28.116:6239/api/User/InsertStaffInvolved", {
//                 reference_number: this.inv_refNumber,
//                 sim: [
//                     {
//                         company_name: staff.company_name,
//                         name: staff.name,
//                         department: staff.department
                        
//                     }
//                 ]
//             });

//             if (response.status === 200) {
//             const returnedStaff = response.data.sim?.[0];
//             if (returnedStaff?.id) {
//                 this.refreshment.sim.push(returnedStaff);
//             } else {
//                 this.refreshment.sim.push({
//                     ...staff,
//                     // id: new Date().getTime(), // Temp ID if none returned
//                     reference_number: this.refreshment.reference_number
//                 });
//             }
//         }

//         } catch (error) {
//             console.error("Failed to add participant:", error);
//             Swal.fire({
//                 title: "Error",
//                 text: "Failed to add participant. Please try again.",
//                 icon: "error",
//                 confirmButtonColor: "#dc2626"
//             });
//         }
//     } else {
//         // Update existing participant locally
//         const index = this.refreshment.sim.findIndex(s => s.id === staff.id);
//         if (index !== -1) {
//             this.refreshment.sim.splice(index, 1, staff);
//         }

//     }

//     this.selectedStaff = null;
//     this.isStaffFormOpen = false;
// },
        // saveStaff(staff) {
        //     console.log("Staff before saving:", staff); // Debugging log
        //     const index = this.refreshment.sim.findIndex(s => s.id === staff.id);
        //     if (index !== -1) {
        //         this.refreshment.sim.splice(index, 1, staff); // Update existing staff
        //         console.log("Updated staff:", this.refreshment.sim[index]); // Debugging log
        //     } else {
        //         this.refreshment.sim.push(staff);
        //     }
        //     this.selectedStaff = null;
        //     this.isStaffFormOpen = false;
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
          
    //     deleteFile(index) {
    //         this.others.files.splice(index, 1); // Remove the file from the array
    //         Swal.fire({
    //         title: 'File Deleted',
    //         text: 'The file has been successfully deleted.',
    //         icon: 'success',
    //         confirmButtonText: 'OK',
    //         confirmButtonColor: '#dc2626',
    //         });
    //     },

    //     // Upload a new file
    //    async uploadFile(event) {
    //         const file = event.target.files[0];

    //         if (file) {
    //             const formData = new FormData();
    //             formData.append("file", file);

    //             try {
    //                 const response = await axios.post(
    //                     `http://172.28.28.116:6239/api/Files/MultiUploadImage/${this.requesterId}/${this.uniqueCode}`,
    //                     formData,
    //                     { headers: { "Content-Type": "multipart/form-data" } }
    //                 );

    //                 if (response.status === 200 && response.data && Array.isArray(response.data.result)) {
    //                     this.others.files = response.data.result;
    //                     Swal.fire({
    //                         title: "File Uploaded",
    //                         text: "The file has been successfully uploaded.",
    //                         icon: "success",
    //                         confirmButtonText: "OK",
    //                         confirmButtonColor: "#dc2626",
    //                     });
    //                     console.log("Updated files after upload:", this.others.files);
    //                 }
    //             } catch (error) {
    //                 console.error("Error uploading file:", error);
    //                 Swal.fire({
    //                     title: "Upload Failed",
    //                     text: "Failed to upload the file. Please try again.",
    //                     icon: "error",
    //                     confirmButtonText: "OK",
    //                     confirmButtonColor: "#dc2626",
    //                 });
    //             }
    //         }

    //         event.target.value = "";  // Clear the file input after uploading
    //     },

    //     async getFiles() {
    //         try {
    //             console.log("Fetching files for:", this.requesterId, this.uniqueCode);
    //             const response = await axios.get(
    //                 `http://172.28.28.116:6239/api/Files/GetMultiImage/${this.requesterId}/${this.uniqueCode}`
    //             );

    //             if (response.data && Array.isArray(response.data.result)) {
    //                 this.others.files = response.data.result;
    //                 console.log("Fetched files:", this.others.files);
    //             } else {
    //                 console.warn("No files found for this claim.");
    //                 Swal.fire({
    //                     title: "No Files Found",
    //                     text: "No files were found for the given reference number.",
    //                     icon: "info",
    //                     confirmButtonText: "OK",
    //                 });
    //             }
    //         } catch (error) {
    //             console.error("Error fetching files:", error);
    //         }
    //     },
        deleteFile(index) {
        const deletedFile = this.refreshment.files[index];
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
                this.refreshment.files.splice(index, 1);
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
        this.refreshment.files.push(renamedFile);
        }
        this.selectedFileName = files[0].name;
        event.target.value = "";
        },

        async fetchRefreshmentData(refNo) {
   
        const response = await axios.get(`http://172.28.28.116:6239/api/User/GetRefreshment/${refNo}`);
        console.log("Refreshment  Data:", response.data);

        const dataArray = response.data.result;

        if (Array.isArray(dataArray)) {
        const matchingUniqueID = dataArray.find(
            record => record.unique_code === this.claim.unique_code
        );

        if (matchingUniqueID) {
            
            this.refreshment = {
            refreshment_type: matchingUniqueID.refreshment_type,
            date_event: matchingUniqueID.date_event,
            reference_type: matchingUniqueID.reference_type,
            venue_name: matchingUniqueID.venue_name,
            company_name: matchingUniqueID.company_name,
            total_fee: matchingUniqueID.total_fee,
            reference_number: matchingUniqueID.reference_number,
            unique_code: matchingUniqueID.unique_code,
            comment: matchingUniqueID.comment,
            files: matchingUniqueID.files,
            sim: matchingUniqueID.sim || [],
            other_type:'',
            };
            this.uniqueCode = matchingUniqueID.unique_code;
            this.requesterId = matchingUniqueID.requester_id;

            const isCustomType = !this.RefreshmentType.includes(matchingUniqueID.refreshment_type);
            if (isCustomType) {
                // Display it as "OTHERS" but store the real custom value
                this.refreshment.other_type = matchingUniqueID.refreshment_type;
                this.refreshment.refreshment_type = "Others";
                // await this.getFiles();
                // console.log("Fetched files:", this.others.files);
            }

            this.inv_refNumber = matchingUniqueID.inv_refNumber;
        } else {
            console.log("No matching unique_code found");
        }
        } else {
        console.error("Expected an array but got:", typeof dataArray, dataArray);
        }

        },
        // async handleSubmitRefreshment() {
        //     try {

        //         // Delete participants
        //         for (const id of this.simToDelete) {
        //             await axios.delete(`http://172.28.28.116:6239/api/User/DeleteStaffInvolved/${id}`);
        //         }
        //         this.simToDelete = [];

        //          // Delete files marked for deletion
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
        //         // Prepare the data to be submitted
        //         const submitData = {
        //             refreshment_type: this.refreshment.refreshment_type === "Others"
        //             ? this.refreshment.other_type  // replace with the actual text entered
        //             : this.refreshment.refreshment_type,
        //             date_event: this.formattedDate,
        //             reference_type: this.refreshment.reference_type?.trim(),
        //             venue_name: this.refreshment.venue_name,
        //             company_name: this.refreshment.company_name,
        //             total_fee: isNaN(parseFloat(this.refreshment.total_fee)) ? 0 : parseFloat(this.refreshment.total_fee),
        //             reference_number: this.refreshment.reference_number,
        //             unique_code: this.refreshment.unique_code,
        //             // ent: this.entertainment.ent,
        //             sim: this.refreshment.sim,
        //             // participants:[
        //             //             {
        //             //                 id: this.participant.id,
        //             //                 name: "",
        //             //                 company_name: "",
        //             //             }
        //             //         ],
        //             files: this.refreshment.files || []
        //             // participants: this.participants
        //         };

        //         console.log("Submitting Entertainment payload:", submitData);

                
        //         // Make the PUT request to update the entertainment data
        //         const response = await axios.put('http://172.28.28.116:6239/api/User/UpdateStaffRefreshment', submitData, {
        //             headers: {
        //                 "Content-Type": "application/json",
        //             },
        //         });

        //         //Add new staff involved(have no id)
        //         const newStaff = this.refreshment.sim.filter(s => !s.id);
        //         for (const staff of newStaff) {
        //             await axios.post("http://172.28.28.116:6239/api/User/InsertStaffInvolved", {
        //                 reference_number: this.inv_refNumber,
        //                 sim: [{ company_name: staff.company_name, name: staff.name, department: staff.department }]
        //             });
        //         }

        //         // Handle the response based on success or failure
        //         if (response.data && response.data.result) {
        //             console.log("Update Refreshment data:", response.data.result);

        //             this.inv_refNumber = this.refreshment.reference_number;
        //             // Now insert new participants using saveParticipant()
        //             for (const staff of newStaff) {
        //                 await this.saveStaff(staff);
        //             }
        //             Swal.fire({
        //                 title: 'Success',
        //                 text: 'Refreshment updated successfully',
        //                 icon: 'success',
        //                 confirmButtonText: 'OK',
        //                 confirmButtonColor: '#dc2626',
        //             });
        //             this.$emit('refresh-claims', this.claim.refNo);
        //             this.closeSlideOver();
        //         } else {
        //             console.log("Update Refreshment data not found");
        //             Swal.fire({
        //                 title: 'Error',
        //                 text: 'Failed to update Refreshment',
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
                refreshment_type: this.refreshment.refreshment_type === "Others"
                    ? this.refreshment.other_type  // replace with the actual text entered
                    : this.refreshment.refreshment_type,
                date_event: this.formattedDate,
                reference_type: this.refreshment.reference_type?.trim(),
                venue_name: this.refreshment.venue_name,
                company_name: this.refreshment.company_name,
                total_fee: isNaN(parseFloat(this.refreshment.total_fee)) ? 0 : parseFloat(this.refreshment.total_fee),
                reference_number: this.refreshment.reference_number,
                unique_code: this.refreshment.unique_code,
                sim: this.refreshment.sim.map(s => ({
                    id: s.id,
                    name: s.name,
                    company_name: s.company_name,
                    department: s.department
                })),
                inv_refNumber: this.inv_refNumber,
                filesToDelete: this.filesToDelete,
                newFiles: this.newFiles,
                files: this.refreshment.files || [],
                simToDelete: this.simToDelete,

                tabTitle: "Refreshment",
                locationPurpose: this.refreshment.venue_name || "-",
                date: this.date_event || "-",
                total: this.refreshment.total_fee || "0.00"
            };

            console.log("Emitting Refreshment payload:", updatedClaim);
            this.$emit("update-claim", updatedClaim);
            this.closeSlideOver();
        },
        

    watch: {
        isOpen(newVal) {
            if (newVal) this.fetchRefreshmentData();
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