<template>
    <div class="flex-1 text overflow-y-auto bg-[#CED1DA] dark:bg-gray-900 dark:text-white p-4 sm:ml-64">
        <div
            class="relative bg-[#f7fbff] dark:bg-gray-900 border-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
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
                            <tbody v-if="dataclaims && dataclaims.length"
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
                                    <td
                                        class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap space-x-2">
                                        <a @click="toggleSlideOver(index)"
                                            class="bg-green-600 hover:bg-green-700 hover:text-green-600 text-white transition-300 px-2 py-1 rounded-md cursor-pointer">Edit</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <UpdateMedicalClaims v-if="isMedicalSlideOverOpen"  :isOpen="isMedicalSlideOverOpen" :claim="selectedClaim"
            @close="isMedicalSlideOverOpen = false" />
        <UpdateHandphone v-if="isHandphoneSlideOverOpen" :isOpen="isHandphoneSlideOverOpen" :claim="selectedClaim"
            @close="isHandphoneSlideOverOpen = false" />

        <UpdateEntertainment v-if="isEntertainmentSlideOverOpen" :isOpen="isEntertainmentSlideOverOpen" :claim="selectedClaim"
            @close="isEntertainmentSlideOverOpen = false" />

    </div>

</template>
<script>

import { getUserClaimDetails, getEntertainment, getHandphone, getMedicalLeave } from "../../../api/EclaimAPI.js";
import UpdateMedicalClaims from "./SlideOver/UpdateMedicalClaims.vue";
import UpdateHandphone from "./SlideOver/UpdateHandphone.vue";
import UpdateEntertainment from "./SlideOver/UpdateEntertainment.vue";

export default {
    components: {
        UpdateMedicalClaims,
        UpdateHandphone,
        UpdateEntertainment,
    },

    data() {

        return {
            claimDetails: {},
            claims: [],
            dataclaims: [],
            loading: true,
            error: null,
            isHandphoneSlideOverOpen: false,
            isMedicalSlideOverOpen: false,
            isEntertainmentSlideOverOpen: false,
            selectedClaim: null
        }

    },

    async mounted() {
        const refNo = this.$route.params.rn;
        try {
            await Promise.all([
                this.getClaimDetails(refNo),
                this.fetchAllClaims(refNo)
            ]);
        } catch (error) {
            console.error("Error initializing component", error);
            this.error = "Failed to initialize component";
        }
    },
    computed: {
        hasFinanceClaims() {
            return this.dataclaims.some(claim => claim.tabTitle === 'Finance');
        }
    },
    methods: {
        async getClaimDetails(refNo) {
            try {

                const data = await getUserClaimDetails(refNo);
                if (data) {
                    this.claimDetails = {
                        ...data.claimDetails,
                        ...data,
                    }
                }
                console.log("Claim Details", this.claimDetails);
            } catch (error) {
                console.error("Error fetching claim details", error);
                // throw error;
            }
        },
        async fetchAllClaims(refNo) {
            try {
                const [entertainmentData, handphoneData, medicalLeaveData] = await Promise.all([
                    getEntertainment(refNo),
                    getHandphone(refNo),
                    getMedicalLeave(refNo)
                ]);
                console.log("1. Raw API Responses:", { entertainmentData, handphoneData, medicalLeaveData });

                const entertainmentClaims = (entertainmentData || []).map(claim => ({
                    tabTitle: "Entertainment",
                    date: claim.date_event,
                    total: claim.total_fee,
                    locationPurpose: claim.venue_name,
                    unique_code: claim.unique_code,
                    refNo: refNo,
                }));
                console.log("2. Entertainment Claims:", entertainmentClaims);

                const handphoneClaims = (handphoneData || []).map(claim => ({
                    tabTitle: "Handphone",
                    date: claim.date_claim,
                    total: claim.claim_amount,
                    locationPurpose: `Claim for ${claim.claim_month} ${claim.claim_year}`,
                    referenceNumber: claim.reference_number,
                    unique_code: claim.unique_code,
                    refNo: refNo,

                }));
                console.log("3. Hanphone Claims:", handphoneClaims);

                const medicalLeaveClaims = (medicalLeaveData || []).map(claim => ({
                    tabTitle: "Medical Leave",
                    date: claim.date_leave_taken,
                    total: claim.claim_amount,
                    locationPurpose: claim.clinic_name || "N/A",
                    referenceNumber: claim.reference_number,
                    unique_code: claim.unique_code,
                    refNo: refNo,
                }));
                console.log("4. medicalLeave Claims:", medicalLeaveClaims);

                this.dataclaims = [...entertainmentClaims, ...handphoneClaims, ...medicalLeaveClaims];
            } catch (error) {
                console.error("Error fetching claims", error);
                this.error = "Failed to fetch claims data";
            } finally {
                this.loading = false;
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
                this.isEntertainmentSlideOverOpen = false;
            } else if (claim.tabTitle === "Medical Leave") {
                this.isMedicalSlideOverOpen = true;
                this.isHandphoneSlideOverOpen = false;
                this.isEntertainmentSlideOverOpen = false;
            } else if (claim.tabTitle === "Entertainment") {
                this.isMedicalSlideOverOpen = false;
                this.isHandphoneSlideOverOpen = false;
                this.isEntertainmentSlideOverOpen = true;
            }
        },

        refreshTable() {
            this.refreshKey += 1;
        },
    },
}  
</script>