<template>
  <main class="flex-1 text overflow-y-auto bg-[#CED1DA] p-4 sm:ml-64">
    <div class="container mx-auto">
      <div
        class="relative overflow-hidden bg-[#f7fbff] border-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <h1 class="text-blue-800 text-xl md:text-2xl font-bold">DASHBOARD</h1>
        <!-- <div class="mt-4 text-[8px] md:text-xs lg:text-base">
          <div class="font-semibold flex w-full p-2">
            <h1 class="flex-[3_3_0%]">Report Name</h1>
            <h1 class="flex-[3_3_0%]">Claimant</h1>
            <h1 class="flex-[2_2_0%]">Amount</h1>
            <h1 class="flex-[2_2_0%]">Date</h1>
            <h1 class="flex-[2_2_0%]">Status</h1>
          </div>

           fetch from API and rendering out all the claims 
          <div
            class="text-gray-600 flex w-full px-2 py-3 my-2 bg-white rounded-md cursor-pointer"
            v-for="(claim, index) in claimsData"
            :key="index"
            @click="ViewClaim()"
          >
            <h1 class="flex-[3_3_0%]">{{ claim.reportName }}</h1>
            <h1 class="flex-[3_3_0%]">{{ claim.claimant }}</h1>
            <h1 class="flex-[2_2_0%]">RM{{ claim.amount }}</h1>
            <h1 class="flex-[2_2_0%]">{{ claim.date }}</h1>
            <div class="flex-[2_2_0%]">
              <h1
                class="rounded-md text-center w-16 md:w-24 lg:w-28"
                :class="{
                  'bg-orange-200': claim.status == 'PENDING',
                  'bg-green-200':
                    claim.status == 'APPROVED' || claim.status == 'VERIFIED',
                  'bg-red-200': claim.status == 'REJECTED',
                  'text-orange-500': claim.status == 'PENDING',
                  'text-green-500':
                    claim.status == 'APPROVED' || claim.status == 'VERIFIED',
                  'text-red-500': claim.status == 'REJECTED',
                }"
              >
                {{ claim.status }}
              </h1>
            </div>
          </div>
        </div> -->

        <!-- Datatable -->
        <!-- <DataTable :data="claimsData" class="display">
          <thead>
            <tr>
              <th>Report Name</th>
              <th>Claimant</th>
              <th>Amount</th>
              <th>Date requested</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
        </DataTable> -->

        <!-- Approve Success Notification -->
        <div
          v-if="approveSuccess"
          class="bg-gray-100 px-10 py-3 rounded-full fixed left-[50%] top-10 z-50 flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="green"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
            />
          </svg>

          <h1>APPROVE SUCCESSFULLY</h1>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      approveSuccess: false,

      // need to fetch from API
      claimsData: [
        {
          reportName: 'Webinars',
          claimant: 'Teow Chee Wen',
          amount: 729.3,
          date: '20 May 2024',
          status: 'PENDING',
        },
        {
          reportName: 'Program',
          claimant: 'Wong Jin Wai',
          amount: 224.0,
          date: '20 May 2024',
          status: 'PENDING',
        },
        {
          reportName: 'Company Trip ',
          claimant: 'Tan Seng Xing',
          amount: 2000.0,
          date: '19 May 2024',
          status: 'APPROVED',
        },
        {
          reportName: 'Staff Party ',
          claimant: 'Lee Pei Xuan',
          amount: 500.0,
          date: '19 May 2024',
          status: 'VERIFIED',
        },
        {
          reportName: 'Celebration ',
          claimant: 'Teow Chee Wen',
          amount: 700.0,
          date: '19 May 2024',
          status: 'REJECTED',
        },
      ],
    };
  },
  methods: {
    ViewClaim() {
      this.$router.push({ name: 'AdminSummaryClaimpage' });
    },
    ShowNotification() {
      console.log(123);
      this.approveSuccess = true;
      console.log(this.approveSuccess);
      setTimeout(() => {
        this.approveSuccess = false;
        console.log(this.approveSuccess);
      }, 2000);
    },
  },
  mounted() {
    this.$eventBus.on('approveSuccess', this.ShowNotification);
  },
};
</script>
