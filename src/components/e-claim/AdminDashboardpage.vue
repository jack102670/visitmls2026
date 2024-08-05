<template>
  <main
    class="flex-1 text overflow-y-auto bg-[#CED1DA] dark:bg-gray-900 p-4 sm:ml-64"
  >
    <div class="container mx-auto">
      <div
        class="relative overflow-hidden bg-[#f7fbff] dark:bg-gray-900 dark:text-white border-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <h1
          class="text-blue-800 dark:text-blue-600 text-xl md:text-2xl font-bold"
        >
          FINANCE DASHBOARD
        </h1>

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
                        class="text-nowrap px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Report Name
                      </th>
                      <th
                        class="text-nowrap px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Requester Name
                      </th>
                      <th
                        class="text-nowrap px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Verifier Name
                      </th>
                      <th
                        class="text-nowrap px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Reference Number
                      </th>
                      <th
                        class="text-nowrap px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Amount
                      </th>
                      <th
                        class="text-nowrap px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Date requested
                      </th>
                      <th
                        class="text-nowrap px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Status
                      </th>
                      <th
                        class="text-nowrap px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
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
                        class="text-wrap px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        {{ claim.report_name }}
                      </td>
                      <td
                        class="text-wrap px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        {{ claim.requester_name }}
                      </td>
                      <td
                        class="text-wrap px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        {{ claim.verifier_name }}
                      </td>
                      <td
                        class="text-wrap px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        {{ claim.reference_number }}
                      </td>
                      <td
                        class="text-wrap px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        RM {{ claim.grand_total }}
                      </td>
                      <td
                        class="text-wrap px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        {{ claim.date_requested }}
                      </td>
                      <td
                        class="px-12 py-4 text-sm font-medium text-gray-700 text-wrap whitespace-nowrap"
                      >
                        <span
                          :class="{
                            'inline-flex items-center px-3 py-1 rounded-full gap-x-2': true,
                            'bg-red-100/60 dark:bg-gray-800':
                              claim.admin_status.split('.')[0] === 'REJECT',
                            'bg-green-100/60 dark:bg-gray-800':
                              claim.admin_status.split('.')[0] === 'APPROVED',
                            'bg-amber-100/60 dark:bg-gray-800':
                              claim.admin_status.split('.')[0] === 'VERIFIED', // Added for VERIFIED status
                          }"
                        >
                          <span
                            :class="{
                              'h-1.5 w-1.5 rounded-full': true,
                              'bg-red-500':
                                claim.admin_status.split('.')[0] === 'REJECT',
                              'bg-green-500':
                                claim.admin_status.split('.')[0] === 'APPROVED',
                              'bg-amber-500':
                                claim.admin_status.split('.')[0] === 'VERIFIED', // Added for VERIFIED status
                            }"
                          ></span>
                          <span
                            :class="{
                              'text-sm font-normal': true,
                              'text-red-500':
                                claim.admin_status.split('.')[0] === 'REJECT',
                              'text-green-500':
                                claim.admin_status.split('.')[0] === 'APPROVED',
                              'text-amber-500':
                                claim.admin_status.split('.')[0] === 'VERIFIED', // Added for VERIFIED status
                            }"
                            >{{ claim.admin_status.split('.')[0] }}</span
                          >
                        </span>
                      </td>
                      <td
                        class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        <button
                          @click="ViewClaim(claim.reference_number)"
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

        <!-- Loading Animation -->
        <div
          class="w-screen h-screen fixed z-50 flex justify-center items-center top-0 left-0 backdrop-blur-md"
          v-if="loading"
        >
          <div class="absolute w-screen h-screen bg-gray-900 opacity-30"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            class="w-16 h-16 z-50"
          >
            <circle
              transform="rotate(0)"
              transform-origin="center"
              fill="none"
              stroke="blue"
              stroke-width="10"
              stroke-linecap="round"
              stroke-dasharray="230 1000"
              stroke-dashoffset="0"
              cx="100"
              cy="100"
              r="70"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0"
                to="360"
                dur="2"
                repeatCount="indefinite"
              ></animateTransform>
            </circle>
          </svg>
          <h1 class="text-gray-50 font-semibold z-50 ml-2 text-lg">
            Fetching Data...
          </h1>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import $ from 'jquery';
import 'datatables.net-dt';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import axios from 'axios';
export default {
  data() {
    return {
      userId: '7A7641D6-DEDE-4803-8B7B-93063DE2F077',

      // need to fetch from API
      claimsData: [],

      loading: false,
    };
  },
  methods: {
    ViewClaim(rn) {
      console.log(rn);
      this.$router.push({
        name: 'AdminSummaryClaimpage',
        params: { rn: String(rn) },
      });
    },
    initializeDataTable() {
      $(this.$refs.myTable).DataTable({});
    },
    FetchClaimsData() {
      this.loading = true;
      axios
        .get(
          'http://172.28.28.91:86/api/ApproverVerifier/GetAllRequestApproverFinance'
        )
        .then((response) => {
          this.claimsData = response.data.result.filter(
            (item) => item.admin_status != ''
          );
          console.log(this.claimsData);

          this.loading = false;

          this.$nextTick(() => {
            this.initializeDataTable();
          });
        });
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

    // for testing purposes only
    localStorage.setItem('ApproveOrNot', 'pending');

    // fetch claims data from api
    this.FetchClaimsData();
  },
};
</script>
