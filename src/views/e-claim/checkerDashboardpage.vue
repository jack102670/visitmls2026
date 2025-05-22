<!-- Box Info for User View-->
<template>
  <main class="flex-1 text overflow-y-auto bg-[#CED1DA] dark:bg-gray-900 p-4 sm:ml-64">
    <div class="mx-auto">
      <div
        class="relative overflow-hidden bg-[#f7fbff] dark:bg-gray-900 dark:text-white border-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div class="flex justify-between">
            <h1 class="text-blue-800 dark:text-blue-600 text-xl md:text-2xl font-bold">
              CHECKER CLAIM DASHBOARD
            </h1>
          <hr class="h-mx-auto bg-gray-100 border-0 rounded" />
        </div>
        <section class="mx-auto pt-12">
          <div class="flex justify-between items-center">
            <div>
              <h2 class="text-lg font-medium text-gray-800 dark:text-white capitalize">
                checker claim
                <span
                  class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">1
                </span>
              </h2>
            </div>
          </div>

          <div class="flex flex-col mt-6">
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
                <div class=" border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg text-xs md:text-sm">
                    <thead class="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th scope="col" class="px-6 py-3">No</th>
                        <th scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <div class="flex items-center gap-x-3 whitespace-nowrap">
                            <span>Reference Number</span>
                          </div>
                        </th>

                        <th scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <div class="flex items-center gap-x-3 whitespace-nowrap">
                            <span>Report Name</span>
                          </div>
                        </th>
                        <th scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <div class="flex items-center gap-x-3 whitespace-nowrap">
                            <span>Date Requested</span>
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
                          <div class="flex items-center gap-x-3 whitespace-nowrap">
                            <span>Requester Name</span>
                          </div>
                        </th>
                        <th scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <div class="flex items-center gap-x-3 whitespace-nowrap">
                            <span>Amount</span>
                          </div>
                        </th>

                        <th scope="col"
                          class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <div class="flex items-center gap-x-3">
                            <span>Status</span>
                          </div>
                        </th>

                        <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <span class="">View</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      <tr v-for="(item, index) in paginatedApplications" :key="index">
                        <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div class="inline-flex items-center gap-x-3">
                            <div class="flex items-center gap-x-2">
                              <div>
                                <h2 class="font-medium text-center text-gray-500 dark:text-gray-300">
                                  {{ (currentPage - 1) * itemsPerPage + index + 1 }}
                                </h2>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-300 text-balance">
                          {{ item.reference_number }}
                        </td>
                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 text-balance">
                          {{ item.report_name }}
                        </td>

                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 text-balance">
                          {{ item.date_requested }}
                        </td>
                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 text-wrap">
                          {{ item.requester_name }}
                        </td>
                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          RM {{ item.grand_total }}
                        </td>
                        <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div :class="getStatusContainerClass(
                            item.admin_status.split('.')[0].split(' ')[0]
                          )
                            ">
                            <span :class="getStatusDotClass(
                              item.admin_status.split('.')[0].split(' ')[0]
                            )
                              "></span>
                            <h2 :class="getStatusTextClass(
                              item.admin_status.split('.')[0].split(' ')[0]
                            )
                              ">
                              {{
                                item.admin_status

                              }}
                            </h2>
                          </div>
                        </td>

                        <td class="px-4 py-4 ml text-sm whitespace-nowrap">
                          <div class="flex items-center gap-x-6">
                            <button @click="ViewClaim(item.reference_number)"
                              class="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
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
                </div>
              </div>
            </div>
            <nav class="overflow-hidden flex items-center flex-col flex-wrap md:flex-row justify-between items-center pt-4"
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
        </section>
        <div class="mt-5 grid grid-cols-2 gap-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4"></div>
      </div>
    </div>
  </main>
</template>

<script>
import $ from 'jquery';
import 'datatables.net-dt';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import { store } from '../store.js';
import axios from 'axios';

export default {
  components: {
    // CreateNewClaimPopUp,
  },
  name: 'homepageeclaiMq',
  data() {
    return {
      items: [
        // add more items as needed
      ],
      popup: false,
      animate: false,
      userDetails: [],
      userApplications: [],
      searchQuery: '',
      sortField: 'date_requested',
      sortDirection: 'desc',
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
  computed: {
    filteredQueryApplications() {
      const query = this.searchQuery.toLowerCase();
      return this.sortedApplications.filter((item) =>
        (item.reference_number && item.reference_number.toLowerCase().includes(query)) ||
        (item.report_name && item.report_name.toLowerCase().includes(query)) ||
        (item.date_requested && item.date_requested.toLowerCase().includes(query)) ||
        (item.requester_name && item.requester_name.toLowerCase().includes(query)) ||
        (item.grand_total && String(item.grand_total).toLowerCase().includes(query)) ||
        (item.admin_status && item.admin_status.toLowerCase().includes(query))
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
    getStatusContainerClass(status) {
      const colorMap = {
        RESUBMITTED:
          'inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-amber-100/60 dark:bg-gray-800',
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
        RESUBMITTED: 'h-1.5 w-1.5 rounded-full bg-amber-500',
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
        RESUBMITTED: 'text-sm font-normal text-amber-500',
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
    ViewClaim(rn) {
      this.$router.push({ name: 'checkerClaimpage', params: { rn } });
    },
    initializeDataTable() {
      $(this.$refs.myTable).DataTable({});
    },
    async fetchData() {
      const userid = this.userDetails.userId;
      try {
        const response = await axios.get(
          `http://172.28.28.116:6165/api/ApproverVerifier/GetAllRequestChecker/${userid}`
        );
        this.items = response.data.result;
        // console.log('api data', this.items);

        if (response.data.result.length > 0) {
          this.userApplications = response.data.result;
        }

        this.$nextTick(() => {
          this.initializeDataTable();
        });
      } catch (error) {
        console.error(error);
      }
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
    // Sidebar close or open
    this.userDetails = store.getSession().userDetails;
    this.fetchData();
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

<style>
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
