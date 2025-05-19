<template>
  <main class="flex-1 text overflow-y-auto bg-[#CED1DA] dark:bg-gray-900 p-4 sm:ml-64">
    <div class=" mx-auto">
      <div
        class="relative bg-[#f7fbff] dark:bg-gray-900 dark:text-white border-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <h1 class="text-blue-800 dark:text-blue-600 text-xl md:text-2xl font-bold">
          HR DASHBOARD
        </h1>
        <div class="grid grid-cols-8 gap-4 w-full">
          <div class="col-span-8">
            <div class="flex flex-col">
              <div class="flex flex-col">
                <div class="flex flex-row-reverse">
                  <button @click="toggleSlideOver" class="bg-primary text-white p-2 w-38 rounded-full hover:bg-primary">
                    Monthly Report
                  </button>
                </div>
                <!-- <CheckerTable :refreshKey="refreshKey" /> -->
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col mt-4">
          <div class=" py-2 flex flex-col md:flex-row justify-between items-center md:items-end">
            <div class="flex items-center">
              <div class="space-x-2">
                <label for="number-dd" class="text-md font-medium">Sort</label>
                <select id="number-dd" name="number" @change="updateItemsPerPage"
                  class="rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 py-2 text-sm bg-gray-50 ">
                  <option value="10">10</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </div>
            </div>
            <div class="relative md:mt-0 w-full md:w-auto">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="text" id="table-search" v-model="searchQuery"
                class="block py-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-full md:w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for applications" />
            </div>
          </div>
          <div class="overflow-x-auto">
            <div class="inline-block min-w-full py-2 align-middle ">
                <table
                  class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 hover strip border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <thead class="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th scope="col" class="px-4 py-3">No</th>
                      <th
                        class="text-nowrappy-3.5 px-2 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Report Name
                      </th>
                      <th
                        class="text-nowrap py-3.5 px-2 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Requester Name
                      </th>
                      <!-- <th
                        class="text-nowrap py-3.5 px-2 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Verifier Name
                      </th> -->
                      <th
                        class="text-nowrap py-3.5 px-2 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Reference Number
                      </th>
                      <th
                        class="text-nowrap py-3.5 px-2 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Amount
                      </th>
                      <th
                        class="text-nowrap py-3.5 px-2 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Date requested
                        <span class="ml-1 cursor-pointer" @click="toggleSort('date_requested')">
                          <template v-if="sortField === 'date_requested'">
                            {{ sortDirection === 'desc' ? '↓' : '↑' }}
                          </template>
                          <template v-else>
                            <span class="text-gray-300">↕</span>
                          </template>
                        </span>
                      </th>
                      <th
                        class="text-nowrap py-3.5 px-2 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Status
                      </th>
                      <th
                        class="text-nowrap py-3.5 px-2 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        View
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    <tr v-for="(claim, index) in paginatedApplications" :key="index">
                      <td class="px-4 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                        {{ (currentPage - 1) * itemsPerPage + index + 1 }}
                      </td>
                      <td class="text-wrap py-4 px-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {{ claim.report_name }}
                      </td>
                      <td class="text-wrap py-4 px-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {{ claim.requester_name }}
                      </td>
                      <!-- <td class="text-wrap py-4 px-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {{ claim.verifier_name }}
                      </td> -->
                      <td class="text-wrap  py-4 px-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {{ claim.reference_number }}
                      </td>
                      <td class="text-wrap py-4 px-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        RM {{ claim.grand_total }}
                      </td>
                      <td class="text-wrap  py-4 px-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {{ claim.date_requested }}
                      </td>
                      <!-- <td class=" py-4 px-2 text-sm font-medium text-gray-700 text-wrap whitespace-nowrap">
                        <span :class="{
                          'inline-flex items-center px-3 py-1 rounded-full gap-x-2': true,
                          'bg-red-100/60 dark:bg-gray-800': claim.admin_status.split('.')[0].split(' ')[0] === 'REJECTED',
                          'bg-green-100/60 dark:bg-gray-800': claim.admin_status.split('.')[0].split(' ')[0] === 'APPROVED',
                          'bg-amber-100/60 dark:bg-gray-800': claim.admin_status.split('.')[0] === 'VERIFIED',
                          'bg-blue-100/60 dark:bg-gray-800': claim.admin_status.split('.')[0].split(' ')[0] === 'OPEN',
                          'bg-slate-100/60 dark:bg-gray-800': claim.admin_status.split('.')[0].split(' ')[0] === 'REIMBURSED',
                        }">
                          <span :class="{
                            'h-1.5 w-1.5 rounded-full': true,
                            'bg-red-500': claim.admin_status.split('.')[0].split(' ')[0] === 'REJECTED',
                            'bg-green-500': claim.admin_status.split('.')[0].split(' ')[0] === 'APPROVED',
                            'bg-amber-500': claim.admin_status.split('.')[0] === 'VERIFIED',
                            'bg-blue-500': claim.admin_status.split('.')[0].split(' ')[0] === 'OPEN',
                            'bg-black': claim.admin_status.split('.')[0].split(' ')[0] === 'REIMBURSED',
                          }"></span>
                          <span :class="{
                            'text-sm font-normal': true,
                            'text-red-500': claim.admin_status.split('.')[0].split(' ')[0] === 'REJECTED',
                            'text-green-500': claim.admin_status.split('.')[0].split(' ')[0] === 'APPROVED',
                            'text-amber-500': claim.admin_status.split('.')[0] === 'VERIFIED',
                            'text-blue-500': claim.admin_status.split('.')[0].split(' ')[0] === 'OPEN',
                            'text-black': claim.admin_status.split('.')[0].split(' ')[0] === 'REIMBURSED',
                          }">
                            {{
                              claim.admin_status.split('.')[0].split(' ')[0]
                            }}
                          </span>
                        </span>
                      </td> -->
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div :class="getStatusContainerClass(
                            claim.admin_status.split('.')[0].split(' ')[0]
                          )
                            ">
                            <span :class="getStatusDotClass(
                              claim.admin_status.split('.')[0].split(' ')[0]
                            )
                              "></span>
                            <h2 :class="getStatusTextClass(
                              claim.admin_status.split('.')[0].split(' ')[0]
                            )
                              ">
                              {{
                                claim.admin_status

                              }}
                            </h2>
                          </div>
                        </td>
                      <td class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <button @click="ViewClaim(claim.reference_number)"
                          class="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>
          <nav class=" overflow-hidden flex items-center flex-col flex-wrap md:flex-row justify-between items-center pt-4"
                  aria-label="Table navigation">
                  <div>
                    <span class="text-xs md:text-xs font-normal text-gray-500 dark:text-gray-400">
                      Showing <span class="font-semibold text-gray-900 dark:text-white">
                        {{ (currentPage - 1) * itemsPerPage + 1 }}-{{ Math.min(currentPage * itemsPerPage,
                          filteredQueryApplications.length) }}
                      </span>
                      of <span class="font-semibold text-gray-900 dark:text-white">{{ filteredQueryApplications.length
                        }}</span>
                    </span>
                  </div>
                  <div>
                    <ul class="inline-flex -space-x-px text-xs md:text-sm h-6 md:h-8">
                      <li>
                        <a href="#" @click.prevent="previousPage"
                          :class="{ 'cursor-not-allowed opacity-50': currentPage === 1 }"
                          class="flex items-center justify-center px-2 md:px-3 h-6 md:h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700">
                          Previous
                        </a>
                      </li>

                      <li v-for="page in visiblePages" :key="page">
                        <template v-if="page === '...'">
                          <span
                            class="flex items-center justify-center px-2 md:px-3 h-6 md:h-8 leading-tight border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700">
                            {{ page }}
                          </span>
                        </template>
                        <template v-else>
                          <a href="#" @click.prevent="goToPage(page)" :class="{
                            'bg-blue-500 text-dark': page === currentPage,
                            'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700': page !== currentPage
                          }"
                            class="flex items-center justify-center px-2 md:px-3 h-6 md:h-8 leading-tight bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700">
                            {{ page }}
                          </a>
                        </template>
                      </li>

                      <li>
                        <a href="#" @click.prevent="nextPage"
                          :class="{ 'cursor-not-allowed opacity-50': currentPage >= totalPages }"
                          class="flex items-center justify-center px-2 md:px-3 h-6 md:h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700">
                          Next
                        </a>
                      </li>
                    </ul>
                  </div>
          </nav>
        </div>

        <!-- Loading Animation -->
        <div class="w-screen h-screen fixed z-50 flex justify-center items-center top-0 left-0 backdrop-blur-md"
          v-if="loading">
          <div class="absolute w-screen h-screen bg-gray-900 opacity-30"></div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" class="w-16 h-16 z-50">
            <circle transform="rotate(0)" transform-origin="center" fill="none" stroke="blue" stroke-width="10"
              stroke-linecap="round" stroke-dasharray="230 1000" stroke-dashoffset="0" cx="100" cy="100" r="70">
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="2"
                repeatCount="indefinite">
              </animateTransform>
            </circle>
          </svg>
          <h1 class="text-gray-50 font-semibold z-50 ml-2 text-lg">
            Fetching Data...
          </h1>
        </div>
      </div>
    </div>
    <SlideOver
      :isOpen="isSlideOverOpen"
      @close="toggleSlideOver"
      @closeSlideOver="isSlideOverOpen = false"
      @fetch-report="handleHRReportFetch"
    />
    <!-- <HRMonthlyReport
      ref="monthlyReportRef"
      :company="exportParams.company"
      :startDate="exportParams.startDate"
      :endDate="exportParams.endDate"
      style="display: none"
    /> -->

  </main>
</template>

<script>
import $ from 'jquery';
import 'datatables.net-dt';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import axios from 'axios';
import SlideOver from '@/components/e-claim/MonthlySummaryClaim/SlideOver/MonthlyReportHRForm.vue';
import HRMonthlyReport from '@/components/e-claim/MonthlySummaryClaim/HRMonthlyReport.vue';

export default {
  components: {
    SlideOver,
    // HRMonthlyReport,
  },
  data() {
    return {
      userId: '7A7641D6-DEDE-4803-8B7B-93063DE2F077',
      claimsData: [],
      userApplications: [],
      searchQuery: '',
      sortField: 'date_requested',
      sortDirection: 'desc',
      currentPage: 1,
      itemsPerPage: 10,
      loading: false,

      isSlideOverOpen: false,

      exportParams: {
        company: null,
        startDate: null,
        endDate: null
      },
    };
  },
  computed: {
    filteredQueryApplications() {
      const query = this.searchQuery.toLowerCase();
      return this.sortedApplications.filter((claim) =>
        (claim.report_name && claim.report_name.toLowerCase().includes(query)) ||
        (claim.requester_name && claim.requester_name.toLowerCase().includes(query)) ||
        (claim.verifier_name && claim.verifier_name.toLowerCase().includes(query)) ||
        (claim.reference_number && claim.reference_number.toLowerCase().includes(query)) ||
        (claim.date_requested && claim.date_requested.toLowerCase().includes(query)) ||
        (claim.grand_total && claim.grand_total.toLowerCase().includes(query)) ||
        (claim.admin_status && claim.admin_status.toLowerCase().includes(query))
      );
    },
    sortedApplications() {
      return [...this.userApplications].sort((a, b) => {
        const dateA = new Date(a[this.sortField]).getTime();
        const dateB = new Date(b[this.sortField]).getTime();
        return this.sortDirection === 'desc' ? dateB - dateA : dateA - dateB;
      });
    },
    paginatedApplications() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredQueryApplications.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredQueryApplications.length / this.itemsPerPage);
    },
    visiblePages() {
      const total = this.totalPages;
      const current = this.currentPage;
      const maxVisiblePages = 2;

      let pages = [];

      if (total <= maxVisiblePages) {
        pages = Array.from({ length: total }, (_, i) => i + 1);
      } else {
        if (current === 1) {
          pages = [1, 2, 3, '...', total];
        }
        else if (current === total) {
          pages = [1, '...', total - 2, total - 1, total];
        }
        else if (current === total - 1) {
          pages = [1, '...', total - 2, total - 1, total];
        }
        else {
          pages = [1, '...', current - 1, current, current + 1, '...', total];
        }
      }

      return pages;
    },
  },
  methods: {
    handleHRReportFetch({ company, startDate, endDate }) {
      // Redirect with query parameters
      this.$router.push({
        name: 'HRMonthlyReport', // this should match your route name for HRMonthlyReport.vue
        query: {
          company,
          start_date: startDate,
          end_date: endDate,
        }
      });
    },
    // handleHRReportFetch(payload) {
    //   this.exportParams = payload;

    //   this.$nextTick(async () => {
    //     const reportRef = this.$refs.monthlyReportRef;
    //     if (reportRef?.FetchClaimDetails && reportRef?.generatePDF) {
    //       await reportRef.FetchClaimDetails(payload.company, payload.startDate, payload.endDate);
    //       setTimeout(() => {
    //         reportRef.generatePDF();
    //       }, 1000);
    //     }
    //   });
    // },

    toggleSlideOver() {
      this.isSlideOverOpen = !this.isSlideOverOpen;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    goToPage(page) {
      if (typeof page === 'number') {
        this.currentPage = page;
      }
    },
    updateItemsPerPage(event) {
      this.itemsPerPage = parseInt(event.target.value);
      this.currentPage = 1;
    },
    toggleSort(field) {
      if (this.sortField === field) {
        this.sortDirection = this.sortDirection === 'desc' ? 'asc' : 'desc';
      } else {
        this.sortField = field;
        this.sortDirection = 'desc';
      }
    },

    ViewClaim(rn) {
    //  console.log(rn);
      this.$router.push({
        name: 'AdminHRSummaryClaimpage',
        params: { rn: String(rn) },
      });
    },
    initializeDataTable() {
      $(this.$refs.myTable).DataTable({});
    },

    getStatusContainerClass(status) {
      const colorMap = {
        RESUBMIT:
          'inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-orange-100/60 dark:bg-gray-800',
        CLOSE:
          'inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-green-100/60 dark:bg-gray-800',
        OPEN: 'inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-indigo-100/60 dark:bg-gray-800',
        APPROVED:
          'inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800',
        'APPROVED. AWAITING PAYMENT.':
          'inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800',
        COMPLETED:
          'inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-blue-100/60 dark:bg-gray-800',
        REJECTED:
          'inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800',
        VERIFIED:
          'inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-orange-100/60 dark:bg-gray-800',
        PENDING:
          'inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-orange-100/60 dark:bg-gray-800',
        REIMBURSED:
          'inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-gray-100 dark:bg-gray-800',
      };
      return colorMap[status] || '  bg-orange-100/ 60 dark:bg-gray-800';
    },
    getStatusDotClass(status) {
      const colorMap = {
        RESUBMIT: 'h-1.5 w-1.5 rounded-full bg-orange-500',
        OPEN: 'h-1.5 w-1.5 rounded-full bg-indigo-500',
        APPROVED: 'h-1.5 w-1.5 rounded-full bg-emerald-500',
        COMPLETED: 'h-1.5 w-1.5 rounded-full bg-blue-500',
        REJECTED: 'h-1.5 w-1.5 rounded-full bg-red-500',
        PENDING: 'h-1.5 w-1.5 rounded-full bg-orange-500',
        VERIFIED: 'h-1.5 w-1.5 rounded-full bg-orange-500',
        REIMBURSED: 'h-1.5 w-1.5 rounded-full bg-black',
      };
      return colorMap[status] || 'bg-orange-500';
    },
    getStatusTextClass(status) {
      const colorMap = {
        RESUBMIT: 'text-sm font-normal text-orange-500',
        OPEN: 'text-sm font-normal text-indigo-500',
        APPROVED: 'text-sm font-normal text-emerald-500',
        COMPLETED: 'text-sm font-normal text-blue-500',
        REJECTED: 'text-sm font-normal text-red-500',
        PENDING: 'text-sm font-normal text-orange-500',
        REIMBURSED: 'text-sm font-normal text-black',
        VERIFIED: 'text-sm font-normal text-orange-500',
      };
      return colorMap[status] || 'text-orange-500';
    },
    async FetchClaimsData() {
      this.loading = true;
      try {
        const response = await axios.get('http://172.28.28.116:6165/api/ApproverVerifier/GetAllRequestApproverHR/');
        this.claimsData = response.data.result;
        if (this.claimsData.length > 0) {
          this.userApplications = this.claimsData;
        }
       // console.log("User application: ", this.userApplications);
        this.loading = false;
        this.$nextTick(() => {
          this.initializeDataTable();
        });
      } catch (error) {
        console.error('Error during reimbursement:', {
          message: error.message,
          response: error.response?.data,
          status: error.response?.status
        });
      }
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
