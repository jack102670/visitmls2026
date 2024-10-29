<template>
  <div class="pb-4 bg-white dark:bg-gray-900 flex flex-col md:flex-row justify-between items-start md:items-end">
    <div class="mb-2 md:mb-0">
      <h4 class="font-bold text-primary text-md">
        All Requested
      </h4>
    </div>
    <div class="relative mt-1 md:mt-0 w-full md:w-auto">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
      </div>
      <input type="text" id="table-search" v-model="searchQuery"
        class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-full md:w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search for applications" />
    </div>
  </div>
    <!-- Loader -->
    <div v-if="loading" class="flex justify-center items-center h-32">
    <div class="loader"></div>
  </div>

  <div class="relative overflow-x-auto sm:rounded-md">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-md">
      <thead class="text-md text-gray-700  bg-[#443a7a] dark:bg-gray-700 dark:text-gray-400 !rounded-t-md">
        <tr class="text-white font-bold ">
          <th scope="col" class="p-4"></th>
          <th scope="col" class="px-6 py-3">No</th>
          <th scope="col" class="px-6 py-3">Reference Number</th>
          <th scope="col" class="px-6 py-3 cursor-pointer" @click="toggleSort('dateRequested')">
            <div class="flex items-center">
              Requested Date
              <span class="ml-1">
                <template v-if="sortField === 'dateRequested'">
                  {{ sortDirection === 'desc' ? '↓' : '↑' }}
                </template>
                <template v-else>
                  <span class="text-gray-300">↕</span>
                </template>
              </span>
            </div>
          </th>
          <th scope="col" class="px-6 py-3">Request type</th>
          <th scope="col" class="px-6 py-3">Requester Name</th>
          <th scope="col" class="px-6 py-3">Requester Dept</th>
          <th scope="col" class="px-6 py-3">Status</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(application, index) in paginatedApplications" :key="application.refNo"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="w-4 p-4"></td>
          <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ (currentPage - 1) * itemsPerPage + index + 1 }}
          </td>
          <td class="px-6 py-4">{{ application.refNo }}</td>
          <td class="px-6 py-4">{{ application.dateRequested }}</td>
          <td class="px-6 py-4">{{ application.requestType || 'N/A' }}</td>
          <td class="px-6 py-4">{{ application.requesterName || 'N/A' }}</td>
          <td class="px-6 py-4">{{ application.requesterDept || 'N/A' }}</td>
          <td class="px-6 py-4">{{ application.status }}</td>
          <td class="px-6 py-2">
            <div class="flex flex-col sm:flex-row gap-2">
              <button
                class="flex-1 bg-transparent text-verified border-verified font-regular  px-2 py-1 border-[1px] rounded-md hover:bg-verified hover:border-verified hover:text-white hover:border-[1px] text-xs sm:text-xs">
                View
              </button>

              <button
                class="flex-1 bg-verified text-white font-regular  px-2 py-1 border-[1px] border-verified rounded-md hover:bg-transparent hover:border-verified hover:text-verified hover:border-[1px] text-xs sm:text-xs"
                :disabled="isDisabled">
                <span>Download</span>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <nav class="flex items-center flex-col flex-wrap md:flex-row justify-between items-center pt-4" aria-label="Table navigation">
  <div>
    <span class="text-xs md:text-xs font-normal text-gray-500 dark:text-gray-400">
      Showing <span class="font-semibold text-gray-900 dark:text-white">
        {{ (currentPage - 1) * itemsPerPage + 1 }}-{{ Math.min(currentPage * itemsPerPage, filteredQueryApplications.length) }}
      </span>
      of <span class="font-semibold text-gray-900 dark:text-white">{{ filteredQueryApplications.length }}</span>
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
          <a href="#" @click.prevent="goToPage(page)" 
             :class="{
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


</template>

<script>
import {
  getAllApplication
} from '@/api/EFormApi';
import {
  store
} from '@/views/store.js';
export default {
  data() {
    return {
      loading: false,
      errorMessage: "",
      userApplications: [],
      sortField: 'dateRequested',
      sortDirection: 'desc',
      searchQuery: '',
      currentPage: 1,
      itemsPerPage: 10,
      isDisabled: true,
    };
  },
  computed: {
    filteredQueryApplications() {
      const query = this.searchQuery.toLowerCase();
      return this.sortedApplications.filter((application) =>
        application.refNo.toLowerCase().includes(query) ||
        application.status.toLowerCase().includes(query) ||
        application.requestType.toLowerCase().includes(query) ||
        application.requesterName.toLowerCase().includes(query) ||
        application.requesterDept.toLowerCase().includes(query)
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
    async getAllApplication() {
      const id = store.getSession()?.userDetails?.userId;
      if (!id) {
        console.error("User ID is missing");
        return;
      }
      this.loading = true;
      try {
        const data = await getAllApplication(id);
        if (data) {
          this.userApplications = data;
          console.log("User application in table", data);
        }
      } catch (error) {
        console.error("Error fetching user application:", error.response || error);
        this.errorMessage = "Failed to fetch user application";
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.getAllApplication();
  }
}
</script>

<style scoped>
.loader {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>