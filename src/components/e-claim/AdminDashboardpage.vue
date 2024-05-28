<template>
  <main class="flex-1 text overflow-y-auto bg-[#CED1DA] p-4 sm:ml-64">
    <div class="container mx-auto">
      <div
        class="relative overflow-hidden bg-[#f7fbff] border-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <h1 class="text-blue-800 text-xl md:text-2xl font-bold">DASHBOARD</h1>

        <!-- Datatable -->
        <div class="flex flex-col mt-6">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
              class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"
            >
              <div
                class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg"
              >
                <table
                  ref="myTable"
                  class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 hover strip"
                >
                  <thead class="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Report Name
                      </th>
                      <th
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Claimant
                      </th>
                      <th
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Amount
                      </th>
                      <th
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Date requested
                      </th>
                      <th
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Status
                      </th>
                      <th
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        View
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
                  >
                    <tr v-for="(claim, index) in claimsData" :key="index">
                      <td
                        class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        {{ claim.reportName }}
                      </td>
                      <td
                        class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        {{ claim.claimant }}
                      </td>
                      <td
                        class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        {{ claim.amount }}
                      </td>
                      <td
                        class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        {{ claim.date }}
                      </td>
                      <td
                        class="text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        <h1
                          class="rounded-xl text-center py-1 w-full"
                          :class="{
                            'bg-orange-200': claim.status == 'PENDING',
                            'bg-green-200':
                              claim.status == 'APPROVED' ||
                              claim.status == 'VERIFIED',
                            'bg-red-200': claim.status == 'REJECTED',
                            'text-orange-500': claim.status == 'PENDING',
                            'text-green-500':
                              claim.status == 'APPROVED' ||
                              claim.status == 'VERIFIED',
                            'text-red-500': claim.status == 'REJECTED',
                          }"
                        >
                          {{ claim.status }}
                        </h1>
                      </td>
                      <td
                        class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        <button
                          @click="ViewClaim()"
                          class="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import $ from 'jquery';
import 'datatables.net-dt';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
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
          status:
            localStorage.getItem('ApproveOrNot') == 'approve'
              ? 'APPROVED'
              : localStorage.getItem('ApproveOrNot') == 'reject'
                ? 'REJECTED'
                : 'PENDING',
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
    initializeDataTable() {
      $(this.$refs.myTable).DataTable({});
    },
  },
  mounted() {
    // Sidebar close or open
    let openOrNot = localStorage.getItem('openOrNot');
    const element = document.querySelector('main');
    if (element && openOrNot == 'false') {
      element.classList.add('become-big');
    } else if (element && openOrNot == 'true') {
      element.classList.remove('become-big');
    }

    this.initializeDataTable();

    // for testing purposes only
    localStorage.setItem('ApproveOrNot', 'pending');
  },
};
</script>
