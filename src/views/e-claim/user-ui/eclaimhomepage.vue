<template>
  <main class="flex-1 text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64">
    <div class="">
      <div
        class="relative overflow-hidden bg-[#f7fbff] dark:bg-gray-800 border-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div class="flex justify-between">
          <div class="flex justify-start flex-col ml-5">
            <h2 class="text-3xl font-bold text-blue-900 dark:text-white">
              PKT GROUP OF COMPANIES
            </h2>
            <h3 class="text-xl font-bold text-blue-800 dark:text-white">
              Claim for Reimbursement of All Expenses
            </h3>
          </div>
          <div class="flex mt-5"></div>

          <hr class="h-mx-auto bg-gray-100 border-0 rounded" />
        </div>
        <div class="pt-4 ml-4">
          <button @click="ChangePopUp()"
            class="flex items-center justify-center text-center rounded-full bg-[#160959] dark:bg-[#111827] text-slate-200 py-2 px-4 text-sm hover:bg-[#190a70] hover:text=white">
            <svg class="mr-1" width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22" stroke="white"
                stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M33 29V43" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26 36H33H40" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M30 4V14H40" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            New Claim
          </button>
        </div>

        <!-- Box Info Section-->
        <section>
          <div class="p-5 mt-1 flex flex-col md:flex-row gap-1 justify-center">
            <div
              class="mb-2 md:mb-0 relative overflow-hidden dark:bg-[#111827] dark:border-green-200 dark:hover:bg-gray-800 hover:bg-green-100 bg-white max-h-[1000px] shadow-xl border-x-2 border-y-2 border-green-300 rounded-lg w-full md:w-1/5">
              <div class="card m-2" @click="filterTable('Approved')">
                <div class="ml-5">
                  <span class="text-gray-800 text-2xl font-bold dark:text-slate-200">{{
                    requests.filter(
                      (request) => request.status === 'Approved'
                    ).length
                  }}</span>
                  <span class="block text-sm text-gray-500 font-semibold dark:text-slate-200">Approved</span>
                </div>
              </div>
            </div>
            <div
              class="mb-2 md:mb-0 relative overflow-hidden dark:bg-[#111827] dark:border-blue-200 dark:hover:bg-gray-800 hover:bg-amber-100 bg-white max-h-[1000px] shadow-xl border-x-2 border-y-2 border-amber-300 rounded-lg w-full md:w-1/5">
              <div class="card m-2" @click="filterTable('Verified')">
                <div class="ml-5">
                  <span class="text-gray-800 text-2xl font-bold dark:text-slate-200">{{
                    requests.filter(
                      (request) => request.status === 'Verified'
                    ).length
                  }}</span>
                  <span class="block text-sm text-gray-500 font-semibold dark:text-slate-200">Verified</span>
                </div>
              </div>
            </div>
            <div
              class="mb-2 md:mb-0 relative overflow-hidden dark:bg-[#111827] dark:border-red-200 dark:hover:bg-gray-800 bg-white max-h-[1000px] hover:bg-red-100 shadow-xl border-x-2 border-y-2 rounded-lg border-red-300 w-full md:w-1/5">
              <div class="card m-2" @click="filterTable('rejected')">
                <div class="ml-5">
                  <span class="text-gray-800 text-2xl font-bold dark:text-slate-200">{{
                    requests.filter(
                      (request) => request.status === 'rejected'
                    ).length
                  }}</span>
                  <span class="block text-sm text-gray-500 font-semibold dark:text-slate-200">Rejected</span>
                </div>
              </div>
            </div>
            <div
              class="mb-2 md:mb-0 relative overflow-hidden dark:bg-[#111827] dark:border-yellow-200 dark:hover:bg-gray-800 bg-white max-h-[1000px] shadow-xl hover:bg-yellow-100 border-x-2 border-y-2 rounded-lg border-yellow-300 w-full md:w-1/5">
              <div class="card m-2" @click="filterTable('reimburse')">
                <div class="ml-5">
                  <span class="text-gray-800 text-2xl font-bold dark:text-slate-200">
                    {{
                      requests.filter(
                        (request) => request.status === 'Approved'
                      ).length
                    }}</span>
                  <span class="block text-sm text-gray-500 font-semibold dark:text-slate-200">Reimburse</span>
                </div>
              </div>
            </div>
            <div
              class="relative overflow-hidden dark:bg-[#111827] dark:border-teal-200 dark:hover:bg-gray-800 bg-white max-h-[1000px] hover:bg-teal-100 shadow-xl border-x-2 border-y-2 rounded-lg border-teal-300 w-full md:w-1/5">
              <div class="card m-2" @click="filterTable('')">
                <div class="ml-5">
                  <span class="text-gray-800 text-2xl font-bold dark:text-slate-200">{{ this.requests.length }}</span>
                  <span class="block text-sm text-gray-500 font-semibold dark:text-slate-200">All Claims</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Claim Table Section-->
        <section class=" px-4 mx-auto pt-4">
          <div class="flex flex-col mt-6">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <div class="py-2 flex flex-col md:flex-row justify-between items-center md:items-end">
                    <div class="flex items-center">
                      <h2 class="text-lg font-medium text-gray-800 dark:text-white">
                        Claim
                        <span
                          class="px-3 py-0.5 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">{{
                            requests.length }}
                        </span>
                      </h2>
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
                  <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 hover stripe border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <thead class="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th scope="col" class="px-6 py-3">No</th>
                        <th scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <div class="flex items-center gap-x-3">
                            <span>Report Name</span>
                          </div>
                        </th>
                        <th scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <div class="flex items-center gap-x-3">
                            <span>Reference Number</span>
                          </div>
                        </th>

                        <th scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <div class="flex items-center gap-x-3">
                            <span>Requested Date</span>
                            <span class="ml-1 cursor-pointer" @click="toggleSort('date_requested')">
                              <template v-if="sortField === 'date_requested'">
                                {{ sortDirection === 'desc' ? '↓' : '↑' }}
                              </template>
                              <template v-else>
                                <span class="text-gray-300">↕</span>
                              </template>
                            </span>
                          </div>
                        </th>
                        <th scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <div class="flex items-center gap-x-3">
                            <span>Approved Date</span>
                          </div>
                        </th>

                        <th scope="col"
                          class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <div class="flex items-center gap-x-3">
                            <span>Status</span>
                          </div>
                        </th>

                        <th scope="col" class="relative py-3.5 px-4">
                          <span class="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      <tr v-for="(data, index) in paginatedApplications" :key="index">
                        <td class="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                          {{ (currentPage - 1) * itemsPerPage + index + 1 }}
                        </td>
                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {{ data.report_name }}
                        </td>
                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {{ data.reference_number }}
                        </td>
                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {{ data.date_requested }}
                        </td>
                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {{ data.endDate }}
                        </td>
                        <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div :class="getStatusContainerClass(
                            data.admin_status.split('.')[0].split(' ')[0]
                          )
                            ">
                            <span :class="getStatusDotClass(
                              data.admin_status.split('.')[0].split(' ')[0]
                            )
                              "></span>
                            <h2 :class="getStatusTextClass(
                              data.admin_status.split('.')[0].split(' ')[0]
                            )
                              ">
                              {{
                                data.admin_status

                              }}
                            </h2>
                          </div>
                        </td>

                        <td class="px-4 py-4 ml text-sm whitespace-nowrap">
                          <div class="flex items-center gap-x-6">
                            <button @click="showclaim(data.reference_number)"
                              class="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <nav class="flex items-center flex-col flex-wrap md:flex-row justify-between items-center pt-4"
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
                            }" class="flex items-center justify-center px-2 md:px-3 h-6 md:h-8 leading-tight bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700">
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
              </div>
            </div>
          </div>
        </section>

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
            {{ loadingText }} Data...
          </h1>
        </div>

        <div class="mt-5 grid grid-cols-2 gap-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4"></div>
      </div>
    </div>
    <NewClaimPopUp v-if="popup" @close="ChangePopUp()" :class="[animate ? 'PopUpAnimation' : 'BackAnimation']" />
  </main>
</template>

<script>
import { store } from '../../store.js';
import NewClaimPopUp from '@/components/e-claim/NewClaimPopUp.vue';
import $ from 'jquery';
export default {
  components: {
    NewClaimPopUp,
  },
  name: 'homepageeclaiM',
  data() {
    return {
      isClickModal: false,
      userDetails: {},
      requests: [],
      userApplications: [],
      searchQuery: '',
      sortField: 'date_requested',
      sortDirection: 'desc',
      currentPage: 1,
      itemsPerPage: 10,
      datatable: [
        {
          name: 'HQ',
          status: 'APPROVED',
          date_requested: '20 July 2024',
        },
      ],
      popup: false,
      animate: false,
      loading: false,
      loadingText: '',
    };
  },
  watch: {
    popup(newValue) {
      const body = document.querySelector('body');
      body.style.overflow = newValue ? 'hidden' : 'auto';
    },
  },
  computed: {
    reimburseCount() {
      return this.requests.filter((request) => request.status === 'reimburse')
        .length;
    },
    filteredQueryApplications() {
      const query = this.searchQuery.toLowerCase();
      return this.sortedApplications.filter((data) =>
        (data.report_name && data.report_name.toLowerCase().includes(query)) ||
        (data.reference_number && data.reference_number.toLowerCase().includes(query)) ||
        (data.date_requested && data.date_requested.toLowerCase().includes(query)) ||
        (data.endDate && data.endDate.toLowerCase().includes(query)) ||
        (data.admin_status && data.admin_status.toLowerCase().includes(query))
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
        // First page (1, 2, 3, ..., total)
        if (current === 1) {
          pages = [1, 2, 3, '...', total];
        }
        // Last page (1, ..., last-2, last-1, last)
        else if (current === total) {
          pages = [1, '...', total - 2, total - 1, total];
        }
        // handle second to last page
        else if (current === total - 1) {
          pages = [1, '...', total - 2, total - 1, total];
        }
        // Intermediate pages (1, ..., current-1, current, current+1, ..., total)
        else {
          pages = [1, '...', current - 1, current, current + 1, '...', total];
        }
      }

      return pages;
    },
  },
  methods: {
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
    toggleSort(field) {
      if (this.sortField === field) {
        this.sortDirection = this.sortDirection === 'desc' ? 'asc' : 'desc';
      } else {
        this.sortField = field;
        this.sortDirection = 'desc';
      }
    },


    showclaim(rn) {
      this.$router.push({ name: 'SummaryClaimpage', params: { rn } });
    },
    initializeDataTable() {
      $(this.$refs.myTable).DataTable({});
    },
    filterTable(status) {
      const dataTable = $(this.$refs.myTable).DataTable();
      dataTable.search(status).draw();
    },
    async fetchAllRequests() {
      this.loadingText = 'Fetching';
      this.loading = true;
      const userId = store.getSession().userDetails.userId;

      if (!userId) {
        console.error('UserId is not set.');
        this.loading = false;
        return;
      }

      try {
        const response = await fetch(
          `http://172.28.28.117:7165/api/User/GetAllRequests/${userId}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch requests');
        }
        const data = await response.json();
        this.requests = data.result;
        if (data.result.length > 0) {
          this.userApplications = data.result;
        }
        console.log("data from user application", this.userApplications)
        this.loading = false;
      } catch (error) {
        if (error.response) {
          console.error(`API error: ${error.response.status} ${error.response.statusText}`);
        } else if (error.message.includes('Network Error')) {
          console.error('Network error: failed to fetch');
        } else {
          console.error('Unknown error:', error);
        }
      } finally {
        this.loading = false;
      }
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
          'inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-white-100/60 dark:bg-gray-800',
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

        REIMBURSE: 'h-1.5 w-1.5 rounded-full bg-black',
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
    ChangePopUp() {
      if (this.popup == true) {
        this.animate = !this.animate;

        setTimeout(() => {
          this.popup = !this.popup;
        }, 500);
      } else {
        this.popup = !this.popup;
        this.animate = !this.animate;
      }
    },
  },
  mounted() {
    this.fetchAllRequests();
    this.fetchAllRequests().then(() => {
      this.$nextTick(() => {
        this.initializeDataTable();
      });
    });
    store.setControlView('eclaim');

    let openOrNot = localStorage.getItem('openOrNot');
    const element = document.querySelector('main');
    if (element && openOrNot == 'false') {
      element.classList.add('become-big');
    } else if (element && openOrNot == 'true') {
      element.classList.remove('become-big');
    }
  },
};
</script>

<style scoped>
.PopUpAnimation .popup {
  animation: PopUpKeyframes 0.45s ease;
}

.BackAnimation .popup {
  animation: PopDownKeyframes 0.45s ease forwards;
}

@keyframes PopUpKeyframes {
  0% {
    transform: scale(0);
  }

  65%,
  80% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes PopDownKeyframes {
  0% {
    transform: scale(1);
  }

  30%,
  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(0);
  }
}
</style>
