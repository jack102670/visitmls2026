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
                        <button @click="resubmitForm"
                            class="bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-700 dark:hover:bg-yellow-800 text-white rounded-xl px-8 text-sm font-bold py-2">
                            Resubmit
                        </button>
                        </div>
                </div>
            </div>
        </div>
        <UpdateMedicalClaims v-if="isMedicalSlideOverOpen"  :isOpen="isMedicalSlideOverOpen" :claim="selectedClaim"
            @close="isMedicalSlideOverOpen = false" @refresh-claims = "fetchAllClaims($route.params.rn)"  />
        <UpdateHandphone v-if="isHandphoneSlideOverOpen" :isOpen="isHandphoneSlideOverOpen" :claim="selectedClaim"
            @close="isHandphoneSlideOverOpen = false" @refresh-claims = "fetchAllClaims($route.params.rn)" />

        <UpdateLocalTravel v-if="isLocalSlideOverOpen" :isOpen="isLocalSlideOverOpen" :claim="selectedClaim"
        @close="isLocalSlideOverOpen = false" @refresh-claims = "fetchAllClaims($route.params.rn)" />

        <UpdateOverseasTravel v-if="isOverseaSlideOverOpen" :isOpen="isOverseaSlideOverOpen" :claim="selectedClaim"
        @close="isOverseaSlideOverOpen = false" @refresh-claims = "fetchAllClaims($route.params.rn)" />

        <UpdateEntertainment v-if="isEntertainmentSlideOverOpen" :isOpen="isEntertainmentSlideOverOpen" :claim="selectedClaim"
            @close="isEntertainmentSlideOverOpen = false" @refresh-claims = "fetchAllClaims($route.params.rn)" />

        <UpdateRefreshment v-if="isRefreshmentSlideOverOpen" :isOpen="isRefreshmentSlideOverOpen" :claim="selectedClaim"
        @close="isRefreshmentSlideOverOpen = false" @refresh-claims = "fetchAllClaims($route.params.rn)" />

        <UpdateOthers v-if="isOthersSlideOverOpen" :isOpen="isOthersSlideOverOpen" :claim="selectedClaim"
        @close="isOthersSlideOverOpen = false" @refresh-claims = "fetchAllClaims($route.params.rn)" />

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
            date: claim.date_claim,
            total: claim.claim_amount,
            locationPurpose: `Claim for ${claim.claim_month} ${claim.claim_year}`,
            unique_code: claim.unique_code,
            refNo: refNo,
            }));

            const medicalClaims = (medicalRes.data.result || []).map(claim => ({
            tabTitle: "Medical Leave",
            date: moment(claim.date_leave_taken).format('D MMMM YYYY'),
            total: claim.claim_amount,
            locationPurpose: claim.medical_category,
            unique_code: claim.unique_code,
            refNo: refNo,
            }));

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