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
                          @click="handleSortClick('name')"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Name</span>
                            <svg
                              v-if="sortBy === 'name'"
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
                          @click="handleSortClick('typeofrequest')"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Type Of Request</span>
                            <svg
                              v-if="sortBy === 'typeofrequest'"
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
                          @click="handleSortClick('date')"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Date</span>
                            <svg
                              v-if="sortBy === 'date'"
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
                          @click="handleSortClick('status')"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Status</span>
                            <svg
                              v-if="sortBy === 'status'"
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
                        :key="requester.id"
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
      requesters: [
        {
          id: 1,
          name: "bohn Doe",
          typeofrequest: "PTW",
          date: "2023-01-01",
          status: "Pending",
        },
        {
          id: 2,
          name: "aane Doe",
          typeofrequest: "BR1003",
          date: "2023-01-02",
          status: "Approved",
        },
        {
          id: 3,
          name: "Jan Man",
          typeofrequest: "BR333",
          date: "2023-01-02",
          status: "Rejected",
        },
        // ... (Add more entries as needed)
        {
          id: 4,
          name: "Jim Smith",
          typeofrequest: "IR300",
          date: "2023-01-03",
          status: "Pending",
        },
        {
          id: 5,
          name: "Jack Brown",
          typeofrequest: "CCTV409",
          date: "2023-01-04",
          status: "Approved",
        },
        {
          id: 6,
          name: "Jill White",
          typeofrequest: "VET200",
          date: "2023-01-05",
          status: "Rejected",
        },
        {
          id: 7,
          name: "James Black",
          typeofrequest: "TK300",
          date: "2023-01-06",
          status: "Pending",
        },
        {
          id: 8,
          name: "Jessica Green",
          typeofrequest: "MK1003",
          date: "2023-01-07",
          status: "Approved",
        },
        {
          id: 9,
          name: "Jordan Gray",
          typeofrequest: "BR1000",
          date: "2023-01-08",
          status: "Rejected",
        },

        {
          id: 11,
          name: "Jennifer Red",
          typeofrequest: "CCfootageaaaa",
          date: "2023-01-10",
          status: "Approved",
        },
        {
          id: 12,
          name: "Jeffrey Orange",
          typeofrequest: "Badge request",
          date: "2023-01-11",
          status: "Rejected",
        },
        {
          id: 10,
          name: "Justin Blue",
          typeofrequest: "TK4842",
          date: "2023-01-09",
          status: "Pending",
        },
        {
          id: 13,
          name: "Jasmine Yellow",
          typeofrequest: "Access card request",
          date: "2023-01-12",
          status: "Pending",
        },
        {
          id: 14,
          name: "hazman",
          typeofrequest: "CCTV footage",
          date: "2023-01-13",
          status: "Approved",
        },
        {
          id: 15,
          name: "Jocelyn Purple",
          typeofrequest: "Badge request",
          date: "2023-01-14",
          status: "Rejected",
        },
      ],
      sortOrder: {
        typeofrequest: "asc",
        date: "asc",
        status: "asc",
        name: "asc",
      },
      sortBy: "status",
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
  methods: {
    filterRequesters(requesters, searchQuery) {
      if (!searchQuery) {
        return requesters;
      }

      const normalizedSearchQuery = searchQuery.toLowerCase();
      return requesters.filter((requester) => {
        const fullName = requester.name.toLowerCase(); // Assuming name is a string
        const isFullNameMatch = fullName.includes(normalizedSearchQuery);

        // Customize this logic based on your data structure
        return (
          isFullNameMatch ||
          requester.typeofrequest
            .toLowerCase()
            .includes(normalizedSearchQuery) ||
          requester.status.toLowerCase().includes(normalizedSearchQuery)
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
