<template>
  <div>
    <div class="flex flex-col mt-6">
      <div class="py-2 flex flex-col md:flex-row justify-between items-center md:items-end">
        <div class="flex items-center">
          <div class="space-x-2">
            <label for="number-dd" class="text-md font-medium">Sort</label>
            <select id="number-dd" v-model="itemsPerPage" @change="paginateData"
              class="rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 py-2 text-sm bg-gray-50">
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
        </div>
        <div class="relative md:mt-0 w-full md:w-auto">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="text" v-model="searchQuery" @input="filterData" placeholder="Search for checker"
            class="block py-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-full md:w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
        </div>
      </div>

      <div class="overflow-x-auto">
        <div class="inline-block min-w-full py-2 align-middle">
          <div class="border border-gray-200 dark:border-gray-700 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 hover stripe">
              <thead class="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th scope="col" class="px-6 py-3">No</th>
                  <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                    Checker Name
                  </th>
                  <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                    Start Date
                  </th>
                  <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                    End Date
                  </th>
                  <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                <tr v-for="(item, index) in paginatedApplications" :key="index">
                  <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap text-center">
                    {{ (currentPage - 1) * itemsPerPage + index + 1 }}
                  </td>
                  <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                    {{ item.checkerName }}
                  </td>
                  <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                    {{ item.startDate }}
                  </td>
                  <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                      {{ item.endDate === 'Invalid date' ? '-' : item.endDate }}
                    </td>
                  <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                    <button @click="deleteChecker(index)" class="text-red-500 hover:text-red-700"> <font-awesome-icon :icon="['fas', 'trash']" /> Delete</button>
                  </td>
                </tr>
                <tr v-if="paginatedApplications.length === 0">
                  <td colspan="5" class="px-4 py-4 text-center text-gray-500">No records found</td>
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
                filteredCheckers.length) }}
            </span>
            of <span class="font-semibold text-gray-900 dark:text-white">{{ filteredCheckers.length }}</span>
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
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import { store } from '@/views/store.js';
import axios from 'axios';
export default {

  props: {
    refreshKey: Number,
  },
  data() {
    return {
      userDetails: [],
      // assignedCheckers: [],
      checkers: [],
      searchQuery: "",
      itemsPerPage: 10,
      currentPage: 1
    };
  },
  watch: {
    refreshKey() {
      this.loadCheckers();
    },
  },
  computed: {
    filteredCheckers() {
      if (!this.searchQuery) return this.checkers;
      return this.checkers.filter(checker =>
        checker.checkerName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    paginatedApplications() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredCheckers.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredCheckers.length / this.itemsPerPage);
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
    async loadCheckers() {
      const userId = this.userDetails.userId;
      try {
        const response = await fetch(`http://172.28.28.116:6165/api/ApproverVerifier/GetAssignChecker/${userId}`);
        const data = await response.json();

        if (response.ok && data.result) {
          this.checkers = data.result.map(c => ({
            checkerId: c.checker_id,
            checkerName: c.checker_name,
            startDate: c.start_date,
            endDate: c.end_date
          }));
        } else {
          this.checkers = [];
        }
      } catch (err) {
        console.error("Error fetching checkers:", err);
        this.checkers = [];
      }
    },
    filterData() {
      this.currentPage = 1;
    },
    paginateData() {
      this.currentPage = 1;
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
    updateItemsPerPage(event) {
      this.itemsPerPage = parseInt(event.target.value);
      this.currentPage = 1;
    },
    goToPage(page) {
      this.currentPage = page;
    },
    async deleteChecker(index) {
      const checkerToDelete = this.checkers[index];
      const userId = this.userDetails.userId;

      Swal.fire({
        title: 'Are you sure?',
        text: `You are about to remove ${checkerToDelete.checkerName} as checker.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await axios.put(`http://172.28.28.116:6165/api/Admin/DeleteAssignChecker/${userId}`, {
              checker_userId: checkerToDelete.checkerId
            });

            await this.loadCheckers(); // Refresh from API

            await Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: `${checkerToDelete.checkerName} has been removed.`,
              confirmButtonColor: '#3085d6',
              timer: 1500,
              timerProgressBar: true
            });

            this.$router.push('/assignchecker');

          } catch (error) {
            console.error("Error deleting checker:", error);
            await Swal.fire({
              icon: 'error',
              title: 'Delete Failed',
              text: 'Failed to remove checker. Please try again.',
              confirmButtonColor: '#3085d6'
            });
          }
        }
      });
    }
  },
  mounted() {
    this.userDetails = store.getSession().userDetails;
    this.loadCheckers();
    // window.addEventListener("storage", this.loadCheckers);
  },
  beforeUnmount() {
    // window.removeEventListener("storage", this.loadCheckers);
  }
};
</script>