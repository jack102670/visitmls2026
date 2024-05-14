<template>
  <main class="flex-1 text overflow-y-auto bg-[#CED1DA] p-4 sm:ml-64">
    <div class="container mx-auto">
      <div
        class="relative overflow-hidden bg-[#f7fbff] border-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <!-- Head Title -->
        <div class="flex justify-center">
          <h1 class="text-blue-900 font-bold text-xl text">
            SUMMARY CLAIM FOR REIMBURSEMENT OF ALL EXPENSES
          </h1>
        </div>

        <!-- Information -->
        <div class="flex justify-between my-4">
          <div>
            <div class="mt-5 h-12">
              <h2 class="font-semibold">Name of Company :</h2>
              <p class="text-gray-600">PKT LOGISTIC (M) SDN BHD</p>
            </div>
            <div class="mt-5 h-12">
              <h2 class="font-semibold">Name of Claimaint :</h2>
              <p class="text-gray-600">PKT LOGISTIC (M) SDN BHD</p>
            </div>
            <div class="mt-5 h-12">
              <h2 class="font-semibold">Designation :</h2>
              <p class="text-gray-600">PKT LOGISTIC (M) SDN BHD</p>
            </div>
          </div>
          <div class="text-right">
            <div class="mt-5 h-12">
              <button
                class="bg-green-600 hover:bg-green-700 text-white rounded-xl px-8 text-sm font-bold py-2"
              >
                See More
              </button>
            </div>
            <div class="mt-5 h-12">
              <h2 class="font-semibold">Date of Claim :</h2>
              <p class="text-gray-600">PKT LOGISTIC (M) SDN BHD</p>
            </div>
            <div class="mt-5 h-12">
              <h2 class="font-semibold">Claim for the Month Ended :</h2>
              <p class="text-gray-600">PKT LOGISTIC (M) SDN BHD</p>
            </div>
          </div>
        </div>

        <!-- Claim Table -->
        <div class="border-2 mt-10 border-gray-400 rounded-2xl">
          <table class="w-full text-lg">
            <!-- title -->
            <tr class="h-16 bg-gray-300 text-left rounded-2xl">
              <th class="rounded-tl-2xl w-[10%] text-center">NO</th>
              <th class="w-[30%]">TYPE OF CLAIM</th>
              <th class="w-[45%]">PARTICULARS</th>
              <th class="w-[15%]">AMOUNT (RM)</th>
            </tr>
            <tr class="h-4"></tr>

            <!-- table information -->
            <tr
              class="h-16 text-left align-top text-base"
              v-for="claim in claimData"
              :key="claim.no"
            >
              <td class="text-center font-normal">{{ claim.no }}</td>
              <td class="font-normal">{{ claim.type }}</td>
              <td class="font-normal">{{ claim.particulars }}</td>
              <td class="font-normal">{{ claim.amount }}</td>
            </tr>

            <!-- total -->
            <tr class="border-t-2 border-gray-400 h-16 text-2xl font-semibold">
              <td colspan="3" class="px-6 text-right">TOTAL:</td>
              <td>{{ totalAmount }}</td>
            </tr>
          </table>
        </div>

        <!-- Status Table -->
        <div class="border-2 mt-10 border-gray-400 rounded-2xl">
          <table class="w-full text-lg">
            <!-- title -->
            <tr class="h-16 bg-gray-300 text-left rounded-2xl">
              <th
                class="rounded-tl-2xl w-[20%] text-center border-r-2 border-gray-400"
              >
                STATUS
              </th>
              <th class="w-[30%] pl-6">NAME</th>
              <th class="w-[30%]">DESIGNATION</th>
              <th class="w-[20%]">DATE</th>
            </tr>

            <!-- table information -->
            <tr class="h-16 text-left text-base border-t-2 border-gray-400">
              <th class="text-center font-semibold border-r-2 border-gray-400">
                VERIFIED
              </th>
              <td class="font-normal pl-6">MANIRAJA</td>
              <td class="font-normal">HEAD OF DEPARTMENT</td>
              <td class="font-normal">20 JULY 2024</td>
            </tr>
            <tr class="h-16 text-left text-base border-t-2 border-gray-400">
              <th class="text-center font-semibold border-r-2 border-gray-400">
                APPROVED
              </th>
              <td class="font-normal pl-6">SHU LAN</td>
              <td class="font-normal">HR</td>
              <td class="font-normal">20 JULY 2024</td>
            </tr>
          </table>
        </div>

        <!-- Button -->
        <div class="w-full flex justify-end h-24 items-center pt-6">
          <button
            class="mr-2 text-lg font-semibold py-3 w-36 bg-blue-900 rounded-lg text-white"
          >
            Approve
          </button>
          <button
            class="text-lg font-semibold py-3 w-36 bg-red-600 rounded-lg text-white"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      claimData: [
        {
          no: 1,
          type: 'Local/Outstation Travelling Expenses ',
          particulars: 'as attached travelling voucher',
          amount: 150.0,
        },
        {
          no: 2,
          type: 'Outstation/Overseas Travelling Expenses',
          particulars: 'as attached travelling voucher',
          amount: 279.3,
        },
        {
          no: 3,
          type: 'Outstation/Overseas Travelling Expenses',
          particulars: 'as attached travelling voucher',
          amount: 300,
        },
      ],
    };
  },
  computed: {
    totalAmount() {
      let num = 0;
      for (var i = 0; i < this.claimData.length; i++) {
        num += this.claimData[i].amount;
      }
      return num;
    },
  },
};
</script>

<style scoped>
tr:first-child th:first-child {
  border-top-left-radius: 16px;
}
tr:first-child th:last-child {
  border-top-right-radius: 16px;
}
tr:last-child th:first-child {
  border-bottom-left-radius: 16px;
}
tr:last-child th:last-child {
  border-bottom-left-radius: 16px;
}
</style>
