<template>
  <main
    class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto"
  >
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-bold text-slate-900 dark:text-white"></h2>
        </div>

        <section class="container px-4 mx-auto">
          <div class="flex justify-between items-center">
            <div>
              <h2 class="text-lg font-medium text-gray-800 dark:text-white">
                Pending Request
                <span
                  class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400"
                  >{{ requesters.length }}
                </span>
              </h2>
            </div>

            <div>
              <input
                type="text"
                v-model="searchQuery"
                placeholder="Search..."
                class="px-2 py-1 border rounded"
              />
            </div>
          </div>

          <div class="flex flex-col mt-6">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div
                class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"
              >
                <div
                  class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg"
                >
                  <table
                    class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                  >
                    <thead class="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          @click="handleSortClick('branch')"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Branch</span>
                            <svg
                              v-if="sortBy === 'branch'"
                              :class="{
                                'transform rotate-180': sortOrder === 'desc',
                              }"
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
                                d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
                              />
                            </svg>
                          </div>
                        </th>
                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          @click="handleSortClick('refNumber')"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Type Of Request</span>
                            <svg
                              v-if="sortBy === 'refNumber'"
                              :class="{
                                'transform rotate-180': sortOrder === 'desc',
                              }"
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
                                d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
                              />
                            </svg>
                          </div>
                        </th>

                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          @click="handleSortClick('dateRequested')"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Date</span>
                            <svg
                              v-if="sortBy === 'dateRequested'"
                              :class="{
                                'transform rotate-180': sortOrder === 'desc',
                              }"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              class="w-5 h-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
                              />
                            </svg>
                          </div>
                        </th>

                        <th
                          scope="col"
                          class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          @click="handleSortClick('adminStatus')"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Status</span>
                            <svg
                              v-if="sortBy === 'adminStatus'"
                              :class="{
                                'transform rotate-180': sortOrder === 'desc',
                              }"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              class="w-5 h-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
                              />
                            </svg>
                          </div>
                        </th>

                        <th scope="col" class="relative py-3.5 px-4">
                          <span class="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody
                      class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
                    >
                      <Tablemanagerequest
                        v-for="requester in sortedAndPaginatedRequesters"
                        :key="requester.refNumber"
                        :requester="requester"
                      />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between mt-6">
            <a
              href="#"
              @click.prevent="previousPage"
              class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 rtl:-scale-x-100"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              <span> previous </span>
            </a>

            <div class="flex items-center gap-x-3">
              <!-- Display page links based on the total number of pages -->
              <template v-for="page in totalPages" :key="page">
                <a
                  href="#"
                  @click.prevent="changePage(page)"
                  class="px-2 py-1 text-sm"
                  :class="{
                    'text-blue-500': page === currentPage,
                    'text-gray-500': page !== currentPage,
                    'dark:bg-gray-800 bg-blue-100/60': page === currentPage,
                  }"
                >
                  {{ page }}
                </a>
              </template>
            </div>

            <a
              href="#"
              @click.prevent="nextPage"
              class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              <span> Next </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 rtl:-scale-x-100"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
        </section>

        <!-- Display a list of movies from the TMDb API -->
      </div>
    </div>
  </main>
</template>

<script>
import Tablemanagerequest from "../components/Tablemanagerequest.vue";
import axios from "axios";
export default {
  name: "Myrequest2Views",
  components: {
    Tablemanagerequest,
  },
  data() {
    return {
      searchQuery: "",
      // Sample data structure for requesters
      role: "security",
      requesters: [],
      sortOrder: {
        branch: "asc",
        requesterName: "asc",
        refNumber: "asc",
        adminStatus: "asc",
        dateRequested:"asc",
      },
      sortBy: "dateRequested",
      itemsPerPage: 8,
      currentPage: 1,
    };
  },

  computed: {
    sortedAndPaginatedRequesters() {
      const sortedRequesters = this.sortRequesters(this.requesters);
      const filteredRequesters = this.filterRequesters(
        sortedRequesters,
        this.searchQuery
      );
      return this.paginate(filteredRequesters);
    },

    totalPages() {
      return Math.ceil(this.requesters.length / this.itemsPerPage);
    },

    // Calculate the index of the first item on the current page
    startIndex() {
      return (this.currentPage - 1) * this.itemsPerPage;
    },

    // Calculate the index of the last item on the current page
    endIndex() {
      return this.startIndex + this.itemsPerPage - 1;
    },

    // Get the subset of items to display on the current page
    paginatedRequesters() {
      return this.requesters.slice(this.startIndex, this.endIndex + 1);
    },
  },
  
  mounted() {
    // Fetch data when the component is mounted
    this.fetchRequesters();
  },
  methods: {
    fetchRequesters() {
      console.log("Fetching requesters...");
      axios
        .get("http://172.28.28.91:8085/api/Admin/GetAllRequestsAdminSecurity")
        .then((response) => {
          this.requesters = response.data;
          console.log("Requesters data:", this.requesters);
    
        })
        .catch((error) => {
          console.error("Error fetching requesters:", error);
        });
    },
    filterRequesters(requesters, searchQuery) {
      if (!searchQuery) {
        return requesters;
      }

      const normalizedSearchQuery = searchQuery.toLowerCase();
      return requesters.filter((requester) => {
        const fullName = requester.refNumber.toLowerCase(); // Assuming name is a string
        const isFullNameMatch = fullName.includes(normalizedSearchQuery);

        // Customize this logic based on your data structure
        return (
          isFullNameMatch ||
          requester.refNumber.toLowerCase().includes(normalizedSearchQuery) ||
          requester.branch.toLowerCase().includes(normalizedSearchQuery) ||
          requester.dateRequested.toLowerCase().includes(normalizedSearchQuery) ||
          requester.adminStatus.toLowerCase().includes(normalizedSearchQuery)
        );
      });
    },

    // Method to sort the requesters based on current sort column and order
    sortRequesters(requesters) {
      const orderMultiplier = this.sortOrder === "asc" ? 1 : -1;
      return requesters.slice().sort((a, b) => {
        const valueA = a[this.sortBy];
        const valueB = b[this.sortBy];
        return orderMultiplier * valueA.localeCompare(valueB);
      });
    },
    // Method to paginate the requesters based on current page and itemsPerPage
    paginate(requesters) {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return requesters.slice(startIndex, endIndex);
    },
    // Method to handle sorting when a table header is clicked
    handleSortClick(column) {
      if (this.sortBy === column) {
        // If clicking on the same column, reverse the sort order
        this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
      } else {
        // If clicking on a different column, set the new column and reset sort order
        this.sortBy = column;
        this.sortOrder = "asc";
      }
    },

    // Methods to handle pagination
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },

    // Change to the next page
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },

    // Change to a specific page
    changePage(page) {
      this.currentPage = page;
    },
  },
};
</script>
