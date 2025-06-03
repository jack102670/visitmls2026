<template>
    <div class="flex-1 text overflow-y-auto bg-[#CED1DA] dark:bg-gray-900 dark:text-white p-4 sm:ml-64">
        <div
            class="relative bg-[#f7fbff] dark:bg-gray-900 border-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
            <h1 class="text-gray-500 italic absolute top-4 right-4">
          SN: {{ refNo }}
        </h1>
        <div id="refNo" class="relative w-screen hidden">
          <h1 class="text-gray-500 italic absolute top-11 right-4">
            SN: {{ refNo }}
          </h1>
        </div>
            <div class="mx-auto">
                <div class="flex justify-between items-center">
                    <h1 class="text-blue-900 dark:text-blue-600 font-bold text-3xl" id="title">
                        {{ claimDetails.report_name || '-' }}

                        <span class="text-blue-900 dark:text-blue-600 text-3xl" id="title">| RM{{
                            claimDetails.grand_total }}</span>
                    </h1>
                </div>
                <div id="claimant-informations"
                    class="text-sm grid grid-cols-2 lg:grid-cols-3 gap-2 [&>*:nth-child(even)]:text-right lg:[&>*:nth-child(even)]:text-left">
                    <div class="mt-2 h-10">
                        <h2 class="font-semibold">Name of Claimaint :</h2>
                        <p class="text-gray-600 dark:text-gray-400">
                            {{ claimDetails.name || '-' }}
                        </p>
                    </div>
                    <div id="toLeft" class="mt-2 h-10">
                        <h2 class="font-semibold">Name of Company :</h2>
                        <p class="text-gray-600 dark:text-gray-400">
                            {{ claimDetails.company_name || '-' }}
                        </p>
                    </div>
                    <div class="mt-2 h-10">
                        <h2 class="font-semibold">Designation :</h2>
                        <p class="text-gray-600 dark:text-gray-400">
                            {{ claimDetails.designation_title || '-' }}
                        </p>
                    </div>
                    <div id="toLeft" class="mt-2 h-10">
                        <h2 class="font-semibold">Department :</h2>
                        <p class="text-gray-600 dark:text-gray-400">
                            {{ claimDetails.department || '-' }}
                        </p>
                    </div>
                    <div class="mt-2 h-10">
                        <h2 class="font-semibold">Cost Center :</h2>
                        <p class="text-gray-600 dark:text-gray-400">
                            {{ claimDetails.cost_center || '-' }}
                        </p>
                    </div>
                    <div id="toLeft" class="mt-2 h-10">
                        <h2 class="font-semibold">Date of Claim :</h2>
                        <p class="text-gray-600 dark:text-gray-400">
                            {{ claimDetails.date_requested || '-' }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="mt-6 overflow-x-auto">
                <div class="py-2 align-middle">
                    <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                        <table class=" divide-y divide-gray-200 dark:divide-gray-700 min-w-full">
                            <thead class="bg-slate-200 dark:bg-gray-800 text-gray-900">
                                <tr>
                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right dark:text-gray-400">
                                        <div class="flex items-center gap-x-3">
                                            <span>No</span>
                                        </div>
                                    </th>
                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right dark:text-gray-400">
                                        <div class="flex items-center gap-x-3">
                                            <span>Type Of Claim</span>
                                        </div>
                                    </th>
                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right dark:text-gray-400">
                                        <div class="flex items-center gap-x-3">
                                            <span>Location/Purpose</span>
                                        </div>
                                    </th>
                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right dark:text-gray-400">
                                        <div class="flex items-center gap-x-3">
                                            <span>Date</span>
                                        </div>
                                    </th>
                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right dark:text-gray-400">
                                        <div class="flex items-center gap-x-3">
                                            <span>Amount (RM)</span>
                                        </div>
                                    </th>
                                    <th scope="col"
                                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right dark:text-gray-400">
                                        <div class="flex items-center gap-x-3">
                                            <span>Action</span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody
                                class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                <tr v-for="(claim, index) in dataclaims" :key="index">
                                    <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        {{ index + 1 }}
                                    </td>
                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                        {{ claim.tabTitle || '-' }}
                                    </td>
                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                        {{ claim.locationPurpose || '-' }}
                                    </td>
                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                        {{ claim.date || '-' }}
                                    </td>
                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                        {{ claim.total || '-' }}
                                    </td>
                                    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap space-x-2">
                                <a @click="toggleSlideOver(index)"
                                class="bg-green-600 hover:bg-green-700 text-white transition duration-300 px-2 py-1 rounded-md cursor-pointer inline-flex items-center justify-center">
                                    <!-- Pencil Icon -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M11 4h2m2 0h.01M13 4l7 7-9 9H4v-9l9-9z" />
                                    </svg>
                                </a>
                            </td>

                                </tr>
                            </tbody>
                        </table>
                        
                    </div>
                    <div class="mt-6 flex justify-end" >
                        <button @click="resubmitForm()"
                            class="bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-700 dark:hover:bg-yellow-800 text-white rounded-xl px-8 text-sm font-bold py-2">
                            Resubmit
                        </button>
                        </div>
                </div>
            </div>
        </div>
        
       
        <UpdateLocalTravel 
            v-if="isLocalSlideOverOpen" 
            :isOpen="isLocalSlideOverOpen" 
            :claim="selectedClaim"
            @close="isLocalSlideOverOpen = false" 
            @update-claim="updateClaim" 
        />

        <UpdateOverseasTravel
            v-if="isOverseaSlideOverOpen"
            :isOpen="isOverseaSlideOverOpen"
            :claim="selectedClaim"
            @close="isOverseaSlideOverOpen = false"
            @update-claim="updateClaim"
        />

        <UpdateEntertainment 
            v-if="isEntertainmentSlideOverOpen"
            :isOpen="isEntertainmentSlideOverOpen" 
            :claim="selectedClaim"
            @close="isEntertainmentSlideOverOpen = false"
            @update-claim="updateClaim" 
        />

        <UpdateRefreshment 
            v-if="isRefreshmentSlideOverOpen" 
            :isOpen="isRefreshmentSlideOverOpen" 
            :claim="selectedClaim"
            @close="isRefreshmentSlideOverOpen = false" 
            @update-claim="updateClaim" 
        />

        <UpdateOthers
            v-if="isOthersSlideOverOpen"
            :isOpen="isOthersSlideOverOpen"
            :claim="selectedClaim"
            @close="isOthersSlideOverOpen = false"
            @update-claim="updateClaim"
        />

        <UpdateHandphone 
            v-if="isHandphoneSlideOverOpen" 
            :isOpen="isHandphoneSlideOverOpen" 
            :claim="selectedClaim"
            @close="isHandphoneSlideOverOpen = false" 
            @update-claim="updateClaim" 
         />

         <UpdateMedicalClaims
            v-if="isMedicalSlideOverOpen"  
            :isOpen="isMedicalSlideOverOpen" 
            :claim="selectedClaim"
            @close="isMedicalSlideOverOpen = false" 
            @update-claim = "updateClaim"  
        />


    </div>

</template>
<script>

import { getUserClaimDetails, getEntertainment, getHandphone, getMedicalLeave } from "../../../api/EclaimAPI.js";
import UpdateMedicalClaims from "./SlideOver/UpdateMedicalClaims.vue";
import UpdateHandphone from "./SlideOver/UpdateHandphone.vue";
import UpdateLocalTravel from "./SlideOver/UpdateLocalTravel.vue";
import UpdateOverseasTravel from "./SlideOver/UpdateOverseasTravel.vue";
import UpdateEntertainment from "./SlideOver/UpdateEntertainment.vue";
import UpdateRefreshment from "./SlideOver/UpdateRefreshment.vue";
import UpdateOthers from "./SlideOver/UpdateOthers.vue";
import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";


export default {
    components: {
        UpdateMedicalClaims,
        UpdateHandphone,
        UpdateLocalTravel,
        UpdateOverseasTravel,
        UpdateEntertainment,
        UpdateRefreshment,
        UpdateOthers,
    },

    data() {

        return {
            refNo: this.$route.params.rn,   
            claimDetails: {},
            claims: [],
            dataclaims: [],
            loading: true,
            error: null,
            isHandphoneSlideOverOpen: false,
            isMedicalSlideOverOpen: false,
            isLocalSlideOverOpen: false,
            isOverseaSlideOverOpen: false,
            isEntertainmentSlideOverOpen: false,
            isRefreshmentSlideOverOpen: false,
            isOthersSlideOverOpen: false,
            selectedClaim: null
        }

    },

    async mounted() {
        const refNo = this.$route.params.rn;
        try {
            await this.getClaimDetails(refNo);
            await this.fetchAllClaims(refNo);

            
        } catch (error) {
            console.error("Error initializing component", error);
            this.error = "Failed to initialize component";
        }
    },
    computed: {
        // hasFinanceClaims() {
        //     return this.dataclaims.some(claim => claim.tabTitle === 'Finance');
        // }
    },
    methods: {

        formatDisplayDate(dateStr) {
            return moment(dateStr).isValid() ? moment(dateStr).format('D MMMM YYYY') : '-';
        },
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
        async getEmployee(requester_id) {
            try {
                const response = await axios.get(`http://172.28.28.116:6239/api/User/GetEmployeeById/${this.requesterId}`);
                // const response = await axios.get(`http://172.28.28.116:6165/api/User/GetClaimDetails/${refNo}`);
    
                if (response.data && response.data.result) {
                this.employee = response.data.result;
                console.log("0. employee:", this.claimDetails);
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
        async fetchAllClaims(refNo) {
        try {
            const [
            localTravelRes,
            overseasTravelRes,
            entertainmentRes,
            refreshmentRes,
            othersRes,
            handphoneRes,
            medicalRes
            ] = await Promise.all([
            axios.get(`http://172.28.28.116:6239/api/User/GetLocalOutstation/${refNo}`),
            axios.get(`http://172.28.28.116:6239/api/User/GetOverseasOutstation/${refNo}`),
            axios.get(`http://172.28.28.116:6165/api/User/GetEntertainment/${refNo}`),
            axios.get(`http://172.28.28.116:6239/api/User/GetRefreshment/${refNo}`),
            axios.get(`http://172.28.28.116:6239/api/User/GetOthers/${refNo}`),
            axios.get(`http://172.28.28.116:6165/api/User/GetHandphone/${refNo}`),
            axios.get(`http://172.28.28.116:6165/api/User/GetMedicalLeave/${refNo}`)
            ]);

            const LocalTravelClaims = (localTravelRes.data.result || []).map(claim => ({
            tabTitle: "Local Travelling",
            locationPurpose: claim.end_point,
            date: moment(claim.date_event).format('D MMMM YYYY'),
            total: claim.total_fee,
            unique_code: claim.unique_code,
            refNo: refNo,
            }));

            const OverseasTravelClaims = (overseasTravelRes.data.result || []).map(claim => ({
            tabTitle: "Overseas Travelling",
            locationPurpose: claim.description,
            date: moment(claim.date_event).format('D MMMM YYYY'),
            total: claim.total_fee,
            unique_code: claim.unique_code,
            refNo: refNo,
            }));

            const entertainmentClaims = (entertainmentRes.data.result || []).map(claim => ({
            tabTitle: "Entertainment",
            locationPurpose: claim.venue_name,
            date: moment(claim.date_event).format('D MMMM YYYY'),
            total: claim.total_fee,
            unique_code: claim.unique_code,
            refNo: refNo,
            }));

            const refreshmentClaims = (refreshmentRes.data.result || []).map(claim => ({
            tabTitle: "Refreshment",
            locationPurpose: claim.venue_name,
            date: moment(claim.date_event).format('D MMMM YYYY'),
            total: claim.total_fee,
            unique_code: claim.unique_code,
            refNo: refNo,
            }));

            const othersClaims = (othersRes.data.result || []).map(claim => ({
            tabTitle: "Other",
            locationPurpose: "-",
            date: moment(claim.expense_date).format('D MMMM YYYY'),
            total: claim.total_fee,
            unique_code: claim.unique_code,
            refNo: refNo,
            }));

            const handphoneClaims = (handphoneRes.data.result || []).map(claim => ({
            tabTitle: "Handphone",
            date: claim.claim_year,
            total: claim.claim_amount,
            locationPurpose: `Claim for ${claim.claim_month}`,
            unique_code: claim.unique_code,
            refNo: refNo,
            }));

            const medicalClaims = (medicalRes.data.result || []).map(claim => ({
            tabTitle: "Medical Leave",
            date: claim.date_leave_taken,
            total: claim.claim_amount,
            locationPurpose: claim.medical_category,
            unique_code: claim.unique_code,
            refNo: refNo,
            }));
            console.log("1. Local Travel Claims:", medicalClaims);

            // Combine all claims
            const allClaims = [
            ...LocalTravelClaims,
            ...OverseasTravelClaims,
            ...entertainmentClaims,
            ...refreshmentClaims,
            ...othersClaims,
            ...handphoneClaims,
            ...medicalClaims,
            ];

            console.log("All formatted claims:", allClaims);
            this.dataclaims = allClaims;

            this.claimDetails.grand_total = this.dataclaims.reduce((sum, claim) => {
            return sum + (parseFloat(claim.total) || 0);
            }, 0).toFixed(2);
            console.log("Grand Total:", this.claimDetails.grand_total);

            return allClaims;

        } catch (error) {
            console.error("Error fetching all claims:", error);
            this.dataclaims = [];
            return [];
        }


                // const [entertainmentData, handphoneData, medicalLeaveData] = await Promise.all([
                //     getEntertainment(refNo),
                //     getHandphone(refNo),
                //     getMedicalLeave(refNo)
                // ]);
                // console.log("1. Raw API Responses:", { entertainmentData, handphoneData, medicalLeaveData });
                // console.log("Calling API with refNo:", refNo);


                // const entertainmentClaims = (entertainmentData || []).map(claim => ({
                //     tabTitle: "Entertainment",
                //     date: claim.date_event,
                //     total: claim.total_fee,
                //     locationPurpose: claim.venue_name,
                //     unique_code: claim.unique_code,
                //     refNo: refNo,
                // }));
                // console.log("2. Entertainment Claims:", entertainmentClaims);

            //     const handphoneClaims = (handphoneData || []).map(claim => ({
            //         tabTitle: "Handphone",
            //         date: claim.date_claim,
            //         total: claim.claim_amount,
            //         locationPurpose: `Claim for ${claim.claim_month} ${claim.claim_year}`,
            //         referenceNumber: claim.reference_number,
            //         unique_code: claim.unique_code,
            //         refNo: refNo,

            //     }));
            //     console.log("3. Hanphone Claims:", handphoneClaims);

            //     const medicalLeaveClaims = (medicalLeaveData || []).map(claim => ({
            //         tabTitle: "Medical Leave",
            //         date: claim.date_leave_taken,
            //         total: claim.claim_amount,
            //         locationPurpose: claim.clinic_name || "N/A",
            //         referenceNumber: claim.reference_number,
            //         unique_code: claim.unique_code,
            //         refNo: refNo,
            //     }));
            //     console.log("4. medicalLeave Claims:", medicalLeaveClaims);

            //     this.dataclaims = [...entertainmentClaims, ...handphoneClaims, ...medicalLeaveClaims];
            // } catch (error) {
            //     console.error("Error fetching claims", error);
            //     this.error = "Failed to fetch claims data";
            // } finally {
            //     this.loading = false;
            // }
        },

        updateClaim(updatedClaim) {
            const index = this.dataclaims.findIndex(c => c.unique_code === updatedClaim.unique_code);
            if (index !== -1) {
                this.dataclaims.splice(index, 1, updatedClaim);
                console.log("Updated claim:", updatedClaim);
                this.claimDetails.grand_total = this.dataclaims.reduce((sum, claim) => {
                    return sum + (parseFloat(claim.total) || 0);
                }, 0).toFixed(2);
                console.log("Grand Total:", this.claimDetails.grand_total);
                console.log("Updated claim saved locally:", updatedClaim);
            }
        },
        

        async resubmitForm() {
            try {   
                this.loading = true;

                // const claimsWithUpdates = this.dataclaims.map(claim => {
                //     if (claim.tabTitle === "Local Travelling" && this.$refs.localRef?.getCurrentClaimData) {
                //         return this.$refs.localRef.getCurrentClaimData();
                //     }
                //     if (claim.tabTitle === "Overseas Travelling" && this.$refs.overseaRef?.getCurrentClaimData) {
                //         return this.$refs.overseaRef.getCurrentClaimData();
                //     }
                //     if (claim.tabTitle === "Entertainment" && this.$refs.entertainmentRef?.getCurrentClaimData) {
                //         return this.$refs.entertainmentRef.getCurrentClaimData();
                //     }
                //     if (claim.tabTitle === "Refreshment" && this.$refs.refreshmentRef?.getCurrentClaimData) {
                //         return this.$refs.refreshmentRef.getCurrentClaimData();
                //     }
                //     if (claim.tabTitle === "Other" && this.$refs.othersRef?.getCurrentClaimData) {
                //         return this.$refs.othersRef.getCurrentClaimData();
                //     }
                //     if (claim.tabTitle === "Handphone" && this.$refs.handphoneRef?.getCurrentClaimData) {
                //         return this.$refs.handphoneRef.getCurrentClaimData();
                //     }
                //     if (claim.tabTitle === "Medical Leave" && this.$refs.medicalRef?.getCurrentClaimData) {
                //         return this.$refs.medicalRef.getCurrentClaimData();
                //     }
                //     return claim; // default
                // });
                // console.log("Full claim from Local Travelling form:", this.$refs.localRef?.getCurrentClaimData());
                // console.log("Claims with updates:", claimsWithUpdates);

                // for (const claim of claimsWithUpdates) {
                //     const { tabTitle, unique_code, refNo } = claim;
                //     const requester_id = this.claimDetails.requester_id;
                    
                //     const payload = {
                //         requester_id,
                //         unique_code,
                //         ...claim
                //     };
                //     console.log("Claim payload for resubmit:", payload);

                //     if (tabTitle === "Overseas Travelling") {
                //         await this.handleOverseasSubmit(payload);
                //     } else if (tabTitle === "Other") {
                //         await this.handleOthersSubmit(payload);
                //     } else if (tabTitle === "Entertainment") {
                //         await this.handleEntertainmentSubmit(payload);
                //     } else if (tabTitle === "Refreshment") {
                //         await this.handleRefreshmentSubmit(payload);
                //     } else if (tabTitle === "Local Travelling") {
                //         await this.handleLocalTravelSubmit(payload);
                //     } else if (tabTitle === "Handphone") {
                //         await this.handleHandphoneSubmit(payload);
                //     } else if (tabTitle === "Medical Leave") {
                //         await this.handleMedicalLeaveSubmit(payload);
                //     }
                // }

                for (const claim of this.dataclaims) {
                    const { tabTitle, unique_code, refNo } = claim;

                    const requester_id = this.claimDetails.requester_id;

                    const payload = {
                        requester_id,
                        unique_code,
                        newFiles: [],        // If no file updates are needed on resubmit, leave empty
                        filesToDelete: [],
                        files: [],           // Assuming existing files are managed
                        ...claim 
                    };
                    console.log("Claim payload for resubmit:", payload);

                    if (tabTitle === "Overseas Travelling") {
                        await this.handleOverseasSubmit(payload);
                    } else if (tabTitle === "Other") {
                        await this.handleOthersSubmit(payload);
                    } else if (tabTitle === "Entertainment") {
                        await this.handleEntertainmentSubmit(payload);
                    } else if (tabTitle === "Refreshment") {
                        await this.handleRefreshmentSubmit(payload);
                    } else if (tabTitle === "Local Travelling") {
                        await this.handleLocalTravelSubmit(payload);
                    } else if (tabTitle === "Handphone") {
                        await this.handleHandphoneSubmit(payload);
                    } else if (tabTitle === "Medical Leave") {
                        await this.handleMedicalLeaveSubmit(payload);
                    } 
                }
                
                const finalPayload = {
                    name: this.claimDetails.name || '',
                    company_name: this.claimDetails.company_name || '',
                    department: this.claimDetails.department || '',
                    reference_number: this.refNo || '',
                    requester_email: this.claimDetails.email || '',
                    report_name: this.claimDetails.report_name || '',
                    grand_total: parseFloat(this.claimDetails.grand_total) || 0.00,
                    checker_email: this.claimDetails.checker_email || '-',
                    verifier_email: this.claimDetails.verifier_email || '-',
                    admin_status: 'RESUBMITTED'
                    
                };

                console.log("Final payload for resubmit:", finalPayload);

                    // try {
                    //     // Replace with your actual API endpoint and user identifier
                    //     const response = await axios.get(`http://172.28.28.116:6239/api/User/GetEmployeeById/${this.requesterId}`);
                    //     const user = response.data.result[0];
                    //     // Initialize limits only if they are not already set
                    // if (!localStorage.getItem('initial_limit_medicaldental')) {
                    //     localStorage.setItem('initial_limit_medicaldental', user.limit_medicaldental);
                    // }
                    // if (!localStorage.getItem('initial_limit_outpatient')) {
                    //     localStorage.setItem('initial_limit_outpatient', user.limit_outpatient);
                    // }
                    // if (!localStorage.getItem('initial_limit_amount')) {
                    //     localStorage.setItem('initial_limit_amount', user.limit_amount);
                    // }

                    // this.remaining_medicaldental = localStorage.getItem('remaining_limit_medicaldental')
                    //     ? parseFloat(localStorage.getItem('remaining_limit_medicaldental'))
                    //     : parseFloat(localStorage.getItem('initial_limit_medicaldental'));

                    // this.remaining_outpatient = localStorage.getItem('remaining_limit_outpatient')
                    //     ? parseFloat(localStorage.getItem('remaining_limit_outpatient'))
                    //     : parseFloat(localStorage.getItem('initial_limit_outpatient'));

                    // this.remaining_amount = localStorage.getItem('remaining_limit_amount')
                    //     ? parseFloat(localStorage.getItem('remaining_limit_amount'))
                    //     : parseFloat(localStorage.getItem('initial_limit_amount'));

                    // // Save remaining limits back to localStorage if not already set
                    // if (!localStorage.getItem('remaining_limit_medicaldental')) {
                    //     localStorage.setItem('remaining_limit_medicaldental', this.remaining_medicaldental);
                    // }
                    // if (!localStorage.getItem('remaining_limit_outpatient')) {
                    //     localStorage.setItem('remaining_limit_outpatient', this.remaining_outpatient);
                    // }
                    // if (!localStorage.getItem('remaining_limit_amount')) {
                    //     localStorage.setItem('remaining_limit_amount', this.remaining_amount);
                    // }
                    // } catch (error) {
                    //     console.error("Failed to fetch medical limits:", error);
                    // }
                
                const response = await axios.put(
                    `http://172.28.28.116:6239/api/User/UpdateClaimDetails`,
                    finalPayload,
                    { headers: { "Content-Type": "application/json" } }
                );

                if (response.data?.result) {
                    Swal.fire({
                        title: "Success",
                        text: "Claim and all entries resubmitted successfully",
                        icon: "success",
                        confirmButtonText: "OK",
                        confirmButtonColor: "#3085d6"
                    });

                    // await this.fetchAllClaims(this.refNo);
                    this.$router.push({ name: "eclaimhomepages" });
                } else {
                    Swal.fire({
                        title: "Error",
                        text: "Failed to resubmit final claim details",
                        icon: "error",
                        confirmButtonText: "OK",
                        confirmButtonColor: "#dc2626"
                    });
                }

            } catch (error) {
                console.error("Error during full resubmit process:", error);
                const msg = error.response?.data?.message || "Unexpected error during resubmission.";
                Swal.fire("Error", msg, "error");
            } finally {
                this.loading = false;
            }
        },

        async handleFileUpdates({ requester_id, unique_code, newFiles = [], filesToDelete = [] }) {
            // Delete files
            for (const fileUrl of filesToDelete) {
                const fileName = fileUrl.split("/").pop();
                await axios.delete(
                    `https://esvcportal.pktgroup.com/api/file/api/Files/DeleteImage/${requester_id}/${unique_code}/${fileName}`
                );
            }

            // Upload new files
            if (newFiles.length > 0) {
                const formData = new FormData();
                newFiles.forEach(file => formData.append("filecollection", file));

                await axios.post(
                    `https://esvcportal.pktgroup.com/api/file/api/Files/MultiUploadImage/${requester_id}/${unique_code}`,
                    formData,
                    { headers: { "Content-Type": "multipart/form-data" } }
                );
            }
        },  
        
        async handleOverseasSubmit(payload) {
            try {
                const {
                newFiles,
                filesToDelete,
                requester_id,
                unique_code,
                files,
                oem,
                oemToDelete,
                ...overseasData
                } = payload;

                console.log("Overseas submit payload:", payload);
                if (oemToDelete && oemToDelete.length > 0) {
                    for (const id of oemToDelete) {
                        await axios.delete(`http://172.28.28.116:6239/api/User/DeleteOverseasExpenses/${id}`);
                        console.log(`Deleted expense ID: ${id}`);
                    }
                }

                await this.handleFileUpdates({ requester_id, unique_code, newFiles, filesToDelete });

                console.log("Overseas file updates handled");
                console.log("Overseas data before submit:", overseasData);
                console.log("Overseas files before submit:", files);
                console.log("Overseas oem before submit:", oem);
                console.log("Overseas unique_code:", unique_code);
                console.log("Overseas requester_id:", requester_id);

                const submitData = {
                ...overseasData,
                files,
                unique_code,
                // requester_id,
                oem: oem.filter(e => e.id), // only existing expenses go in PUT
                };

                console.log("Overseas submit data:", submitData);
                console.log("expenses refNumber:", overseasData.expenses_refNumber);

                const response = await axios.put(
                "http://172.28.28.116:6239/api/User/UpdateOverseasOutstation",
                submitData,
                { headers: { "Content-Type": "application/json" } }
                );


                const newExpenses = oem.filter(e => !e.id);
                    for (const expenses of newExpenses) {
                    await axios.post("http://172.28.28.116:6239/api/User/InsertOverseasExpenses", {
                        reference_number: overseasData.expenses_refNumber,
                        oed: [{
                        name: expenses.name || "",
                        amount: parseFloat(expenses.amount).toFixed(2) || 0.00,
                        description: expenses.description || "",
                        foreign_currency: expenses.foreign_currency || "",
                        exchange_rate: parseFloat(expenses.exchange_rate).toFixed(2) || 0.00,
                        currency_total: parseFloat(expenses.currency_total).toFixed(2) || 0.00
                        }]
                    });
                }
                console.log("New expenses added:", newExpenses);
                console.log("expenses refNumber:", overseasData.expenses_refNumber);

            } catch (error) {
                console.error("Overseas update error:", error);
                const msg = error.response?.data?.message || "Unexpected error occurred.";
                Swal.fire("Error", msg, "error");
            }
        },

        async handleOthersSubmit(payload) {
            try {
                const {
                newFiles,
                filesToDelete,
                requester_id,
                unique_code,
                files,
                ...othersData
                } = payload;
                console.log("Others submit payload:", payload);

                await this.handleFileUpdates({ requester_id, unique_code, newFiles, filesToDelete });

                console.log("Others file updates handled");
                console.log("Others data before submit:", othersData);
                console.log("Others files before submit:", files);
                console.log("Others unique_code:", unique_code);
                console.log("Others requester_id:", requester_id);

                const submitData = {
                ...othersData,
                files,
                unique_code,
                requester_id
                };

                const response = await axios.put(
                "http://172.28.28.116:6239/api/User/UpdateOthers",
                submitData,
                { headers: { "Content-Type": "application/json" } }
                );

            } catch (error) {
                console.error("Others update failed:", error);
                const msg = error.response?.data?.message || "Unexpected error occurred.";
                Swal.fire("Error", msg, "error");
            }
        },

        async handleEntertainmentSubmit(payload) {
            try {
                const {
                newFiles,
                filesToDelete,
                requester_id,
                unique_code,
                files,
                participants,
                participantsToDelete,
                ...entertainmentData
                } = payload;

                console.log("Entertainment submit payload:", payload);
                if (participantsToDelete && participantsToDelete.length > 0) {
                    for (const id of participantsToDelete) {
                        await axios.delete(`http://172.28.28.116:6165/api/User/DeleteParticipant/${id}`);
                        console.log(`Deleted expense ID: ${id}`);
                    }
                }

                await this.handleFileUpdates({ requester_id, unique_code, newFiles, filesToDelete });

                console.log("Entertainment file updates handled");
                console.log("Entertainment data before submit:", entertainmentData);
                console.log("Entertainment files before submit:", files);
                console.log("Entertainment oem before submit:", participants);
                console.log("Entertainment unique_code:", unique_code);
                console.log("Entertainment requester_id:", requester_id);

                const submitData = {
                ...entertainmentData,
                files,
                unique_code,
                // requester_id,
                participants: participants.filter(e => e.id), // only existing expenses go in PUT
                };

                console.log("Entertainment submit data:", submitData);
                console.log("Entertainment refNumber:", entertainmentData.expenses_refNumber);

                const response = await axios.put(
                "http://172.28.28.116:6165/api/User/UpdateEntertainment",
                submitData,
                { headers: { "Content-Type": "application/json" } }
                );


                const newParticipants = participants.filter(e => !e.id);
                    for (const entertainment of newParticipants) {
                    await axios.post("http://172.28.28.116:6165/api/User/InsertParticipant", {
                        reference_number: entertainmentData.ent_refNumber,
                        participants: [{
                        name: entertainment.name || "",
                        company_name: entertainment.company_name || ""
                        }]
                    });
                }
                console.log("New expenses added:", newParticipants);
                console.log("expenses refNumber:", entertainmentData.ent_refNumber);

            } catch (error) {
                console.error("Overseas update error:", error);
                const msg = error.response?.data?.message || "Unexpected error occurred.";
                Swal.fire("Error", msg, "error");
            }
        },
        
        async handleLocalTravelSubmit(payload) {
            try {
                const {
                newFiles,
                filesToDelete,
                requester_id,
                unique_code,
                files,
                ...localData
                } = payload;
                console.log("Local submit payload:", payload);

                await this.handleFileUpdates({ requester_id, unique_code, newFiles, filesToDelete });

                console.log("Local file updates handled");
                console.log("Local data before submit:", localData);
                console.log("Local files before submit:", files);
                console.log("Local unique_code:", unique_code);
                console.log("Local requester_id:", requester_id);

                const submitData = {
                ...localData,
                files,
                unique_code,
                requester_id
                };

                const response = await axios.put(
                "http://172.28.28.116:6239/api/User/UpdateLocalOutstation",
                submitData,
                { headers: { "Content-Type": "application/json" } }
                );

            } catch (error) {
                console.error("Others update failed:", error);
                const msg = error.response?.data?.message || "Unexpected error occurred.";
                Swal.fire("Error", msg, "error");
            }
        },

        async handleRefreshmentSubmit(payload) {
            try {
                const {
                newFiles,
                filesToDelete,
                requester_id,
                unique_code,
                files,
                sim,
                simToDelete,
                ...refreshmentData
                } = payload;

                console.log("Refreshment submit payload:", payload);
                if (simToDelete && simToDelete.length > 0) {
                    for (const id of simToDelete) {
                        await axios.delete(`http://172.28.28.116:6239/api/User/DeleteStaffInvolved/${id}`);
                        console.log(`Deleted sim ID: ${id}`);
                    }
                }

                await this.handleFileUpdates({ requester_id, unique_code, newFiles, filesToDelete });

                console.log("Refreshment file updates handled");
                console.log("Refreshment data before submit:", refreshmentData);
                console.log("Refreshment files before submit:", files);
                console.log("Refreshment oem before submit:", sim);
                console.log("Refreshment unique_code:", unique_code);
                console.log("Refreshment requester_id:", requester_id);

                const submitData = {
                ...refreshmentData,
                files,
                unique_code,
                // requester_id,
                sim: sim.filter(e => e.id), // only existing expenses go in PUT
                };

                console.log("Refreshment submit data:", submitData);
                console.log("staff involved refNumber:", refreshmentData.inv_refNumber);

                const response = await axios.put(
                "http://172.28.28.116:6239/api/User/UpdateStaffRefreshment",
                submitData,
                { headers: { "Content-Type": "application/json" } }
                );


                const newStaffInvolved = sim.filter(e => !e.id);
                    for (const staff of newStaffInvolved) {
                    await axios.post("http://172.28.28.116:6239/api/User/InsertStaffInvolved", {
                        reference_number: refreshmentData.inv_refNumber,
                        sim: [{
                        name: staff.name || "",
                        company_name: staff.company_name || "",
                        department: staff.department || ""
                        }]
                    });
                }
                console.log("New expenses added:", newStaffInvolved);

            } catch (error) {
                console.error("Overseas update error:", error);
                const msg = error.response?.data?.message || "Unexpected error occurred.";
                Swal.fire("Error", msg, "error");
            }
        },

        async handleHandphoneSubmit(payload) {
            try {
                const {
                    newFiles,
                    filesToDelete,
                    requester_id,
                    unique_code,
                    files,
                    originalClaimAmount,
                    claim_amount,
                    ...handphoneData
                } = payload;

                console.log("Handphone submit payload:", payload);


                // Handle file uploads/deletions
                await this.handleFileUpdates({ requester_id, unique_code, newFiles, filesToDelete });
                console.log("Handphone file updates handled");

                // Prepare data for handphone reimburse API
                const submitData = {
                    ...handphoneData,
                    claim_amount,
                    files,
                    unique_code,
                    requester_id,
                    
                };
                console.log("Handphone submit data:", submitData);

                const response = await axios.put(
                    "http://172.28.28.116:6165/api/User/UpdateHandphoneReimburse",
                    submitData,
                    { headers: { "Content-Type": "application/json" } }
                );

                if (response.data?.result) {
                    console.log("Update Handphone data:", response.data);

                    // Update localStorage limit
                    const limitKey = "remaining_limit_amount";
                    const initialKey = "initial_limit_amount";
                    const original = parseFloat(originalClaimAmount) || 0;
                    const claim = parseFloat(claim_amount) || 0;
                    let currentLimit = parseFloat(localStorage.getItem(limitKey)) || 0;
                    let updatedLimit = Math.max(0, currentLimit + original - claim);

                    console.log("Updated limit:", updatedLimit);
                    console.log("Original claim amount:", original);
                    console.log("Claim amount:", claim);
                    console.log("Current limit:", currentLimit);
                    console.log("initialKey:", initialKey);
                    console.log("limitkeyt:", limitKey);

                    localStorage.setItem(limitKey, updatedLimit.toString());
                    localStorage.setItem(initialKey, updatedLimit.toString());

                    const limitoutpatient = localStorage.getItem('remaining_limit_outpatient') || 0;
                    const limitmedicaldental = localStorage.getItem('remaining_limit_medicaldental') || 0;
                    

                    // Sync updated limit to backend
                    try {
                        await axios.put(
                            "http://172.28.28.116:6239/api/User/UpdateLimitClaim",
                            {
                                requester_id,
                                limit_amount: updatedLimit,     // Handphone limit
                                limit_outpatient: limitoutpatient,
                                limit_medicaldental: limitmedicaldental,
                            },
                            { headers: { "Content-Type": "application/json" } }
                            
                        );
                        console.log("Limit outpatient:", this.limit_outpatient);
                        console.log("Limit medical:", this.limit_medicaldental);
                        console.log("Limit updated successfully on server.");
                    } catch (limitError) {
                        console.error("Failed to update limit on server:", limitError);
                        Swal.fire("Warning", "Limit updated locally, but failed to sync with server.", "warning");
                    }
                }

            } catch (error) {
                console.error("Handphone update failed:", error);
                const msg = error.response?.data?.message || "Unexpected error occurred.";
                Swal.fire("Error", msg, "error");
            }
        },

        async handleMedicalLeaveSubmit(payload) {
            try {
                const {
                    newFiles,
                    filesToDelete,
                    requester_id,
                    unique_code,
                    files,
                    originalClaimAmount,
                    medical_category,
                    claim_amount,
                    ...medicalData
                } = payload;

                console.log("Medical submit payload:", payload);


                // Handle file uploads/deletions
                await this.handleFileUpdates({ requester_id, unique_code, newFiles, filesToDelete });
                console.log("Medical file updates handled");

                // Prepare data for handphone reimburse API
                const submitData = {
                    ...medicalData,
                    claim_amount,
                    files,
                    unique_code,
                    requester_id,
                    
                };
                console.log("Medical submit data:", submitData);

                const response = await axios.put(
                    "http://172.28.28.116:6165/api/User/UpdateMedical",
                    submitData,
                    { headers: { "Content-Type": "application/json" } }
                );

                if (response.data?.result) {
                    console.log("Update Medical data:", response.data);

                    // Update localStorage limit
                    const category = medical_category;
                    const original = parseFloat(originalClaimAmount) || 0;
                    const claim = parseFloat(claim_amount) || 0;
                    let updatedLimit = 0;

                    if (category === "Outpatient") {
                        const limitKey = "remaining_limit_outpatient";
                        const initialKey = "initial_limit_outpatient"; // optional
                        let currentLimit = parseFloat(localStorage.getItem(limitKey)) || 0;

                        // Restore the original amount, then deduct the new claim amount
                        updatedLimit = Math.max(0, currentLimit + original - claim);

                        // Update both remaining and initial limits if needed
                        localStorage.setItem(limitKey, updatedLimit.toString());
                        localStorage.setItem(initialKey, updatedLimit.toString());

                    } else if (category === "Medical Check-Up" || category === "Dental") {
                        const limitKey = "remaining_limit_medicaldental";
                        const initialKey = "initial_limit_medicaldental"; // optional
                        let currentLimit = parseFloat(localStorage.getItem(limitKey)) || 0;

                        // Restore the original amount, then deduct the new claim amount
                        updatedLimit = Math.max(0, currentLimit + original - claim);

                        // Update both remaining and initial limits if needed
                        localStorage.setItem(limitKey, updatedLimit.toString());
                        localStorage.setItem(initialKey, updatedLimit.toString());
                    }

                    const limitamount = localStorage.getItem('remaining_limit_amount') || 0;
                    

                    // Sync updated limit to backend
                    try {
                        await axios.put(
                            "http://172.28.28.116:6239/api/User/UpdateLimitClaim",
                            {
                                requester_id,
                                limit_amount: limitamount,     // Handphone limit
                                limit_outpatient: updatedLimit,
                                limit_medicaldental: updatedLimit,
                            },
                            { headers: { "Content-Type": "application/json" } }
                            
                        );
                        console.log("Limit amount:", this.limit_amount);
                        console.log("Limit outpatient:", updatedLimit);
                        console.log("Limit medical:", updatedLimit);
                        
                        console.log("Limit updated successfully on server.");
                    } catch (limitError) {
                        console.error("Failed to update limit on server:", limitError);
                        Swal.fire("Warning", "Limit updated locally, but failed to sync with server.", "warning");
                    }
                }

            } catch (error) {
                console.error("Medical update failed:", error);
                const msg = error.response?.data?.message || "Unexpected error occurred.";
                Swal.fire("Error", msg, "error");
            }
        },

        getClaimDate(claim) {
            return claim.dateLT || claim.dateOT || claim.dateML ||
                claim.dateE || claim.dateSR || claim.dateOthers || '-';
        },

        getClaimAmount(claim) {
            const amount = claim.totalRM || claim.combinedTotal ||
                claim.AmountRME || claim.AmountRMSR ||
                claim.combinetotal || 0;
            return `RM ${amount}`;
        },
        toggleSlideOver(index) {
            const claim = this.dataclaims[index];
            this.selectedClaim = claim;

            console.log("Selected claim:", claim);

            if (claim.tabTitle === "Handphone") {
                this.isHandphoneSlideOverOpen = true;
                this.isMedicalSlideOverOpen = false;
                this.isLocalSlideOverOpen = false;
                this.isOverseaSlideOverOpen= false;
                this.isEntertainmentSlideOverOpen = false;
                this.isRefreshmentSlideOverOpen = false;
                this.isOthersSlideOverOpen = false;
                
            } else if (claim.tabTitle === "Medical Leave") {
                this.isMedicalSlideOverOpen = true;
                this.isHandphoneSlideOverOpen = false;
                this.isLocalSlideOverOpen = false;
                this.isOverseaSlideOverOpen= false;
                this.isEntertainmentSlideOverOpen = false;
                this.isRefreshmentSlideOverOpen = false;
                this.isOthersSlideOverOpen = false;
                
            }else if (claim.tabTitle === "Local Travelling") {
                this.isMedicalSlideOverOpen = false;
                this.isHandphoneSlideOverOpen = false;
                this.isLocalSlideOverOpen = true;
                this.isOverseaSlideOverOpen= false;
                this.isEntertainmentSlideOverOpen = false;
                this.isRefreshmentSlideOverOpen = false;
                this.isOthersSlideOverOpen = false;
            
            } 
            else if (claim.tabTitle === "Overseas Travelling") {
                this.isMedicalSlideOverOpen = false;
                this.isHandphoneSlideOverOpen = false;
                this.isLocalSlideOverOpen = false;
                this.isOverseaSlideOverOpen= true;
                this.isEntertainmentSlideOverOpen = false;
                this.isRefreshmentSlideOverOpen = false;
                this.isOthersSlideOverOpen = false;

            } 
            else if (claim.tabTitle === "Entertainment") {
                this.isMedicalSlideOverOpen = false;
                this.isHandphoneSlideOverOpen = false;
                this.isLocalSlideOverOpen = false;
                this.isOverseaSlideOverOpen= false;
                this.isEntertainmentSlideOverOpen = true;
                this.isRefreshmentSlideOverOpen = false;
                this.isOthersSlideOverOpen = false;
            
            }else if (claim.tabTitle === "Refreshment") {
                this.isMedicalSlideOverOpen = false;
                this.isHandphoneSlideOverOpen = false;
                this.isLocalSlideOverOpen = false;
                this.isOverseaSlideOverOpen= false;
                this.isEntertainmentSlideOverOpen = false;
                this.isRefreshmentSlideOverOpen = true;
                this.isOthersSlideOverOpen = false;
               
            } else if (claim.tabTitle === "Other") {
                this.isMedicalSlideOverOpen = false;
                this.isHandphoneSlideOverOpen = false;
                this.isLocalSlideOverOpen = false;
                this.isOverseaSlideOverOpen= false;
                this.isEntertainmentSlideOverOpen = false;
                this.isRefreshmentSlideOverOpen = false;
                this.isOthersSlideOverOpen = true;  

            }
            
        },

        refreshTable() {
            this.refreshKey += 1;
        },
    },
}  
</script>