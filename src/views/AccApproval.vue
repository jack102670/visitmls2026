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
                Vendor Accounts Approval
                <span
                  class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400"
                >
                  {{ requesters.length }}
                </span>
              </h2>
            </div>
          </div>

          <div class="flex flex-col mt-6">
            <div class="-mx-2 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div
                class="inline-block min-w-full py-1 align-middle md:px-3 lg:px-4"
              >
                <div
                  class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg"
                >
                  <table
                    v-if="requesters.length > 0"
                    ref="myTable"
                    class="hover stripe min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                  >
                    <thead class="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Vendor Name:</span>
                          </div>
                        </th>

                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Vendor Email</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Company Name</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>PKT Staff Name (PIC)</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Suporting Document:</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Action</span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody
                      class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
                    >
                      <tr
                        v-for="(requester, index) in requesters"
                        :key="index"
                        :requester="requester"
                      >
                        <td
                          class="px-3 py-2 text-sm font-medium text-gray-700 whitespace-wrap"
                        >
                          <div class="inline-flex items-center gap-x-3">
                            <div class="flex items-center gap-x-2">
                              <div>
                                <h2
                                  class="font-medium text-gray-500 dark:text-gray-300"
                                >
                                  {{ requester.userName }}
                                </h2>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          class="px-3 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                        >
                          <div class="inline-flex items-center gap-x-3">
                            <div class="flex items-center gap-x-2">
                              <div>
                                <!-- Conditionally display 'Badge Request' if typeofrequest includes 'br' -->
                                {{ requester.userEmail }}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td
                          class="px-3 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                        >
                          {{ requester.companyName }}
                        </td>

                        <td
                          class="px-3 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                        >
                          {{ requester.pktStaffName }}
                        </td>

                        <td
                          class="px-3 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                        >
                          <div v-for="file in requester.files" :key="file">
                            <a class="text-blue-500 block mb-1" :href="file" target="_blank">&#8226; {{ getFileName(file) }}</a>

                            <br />
                            <!-- Add a line break after each file link -->
                          </div>
                        </td>

                        <td class="px-3 py-2 ml text-sm whitespace-nowrap">
                          <div class="flex items-center gap-x-1">
                            <button
                              v-show="!requester.loading"
                              @click="approveRequest(requester)"
                              class="bg-cyan-800 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded mr-4"
                              style="width: 100px"
                            >
                              Approve
                            </button>
                            <button
                              v-show="requester.loading"
                              class="bg-cyan-800 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded mr-4"
                              disabled
                              style="width: 100px"
                            >
                              <svg
                                aria-hidden="true"
                                role="status"
                                class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                  fill="#1C64F2"
                                ></path>
                              </svg>
                            </button>

                            <button
                              v-show="!requester.rejectLoading"
                              @click="rejectRequest(requester)"
                              class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                              style="width: 100px"
                            >
                              Reject
                            </button>
                            <button
                              v-show="requester.rejectLoading"
                              style="width: 100px"
                              class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                            >
                              <svg
                                aria-hidden="true"
                                role="status"
                                class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                  fill="#1C64F2"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div
                    v-else
                    class="text-gray-500 dark:text-gray-400 text-center py-4"
                  >
                    No data available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Display a list of movies from the TMDb API -->
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "testingViews",
  data() {
    return {
      requesters: [],
    };
  },
  created() {
    this.fetchRequesters();
  },
  methods: {
    async fetchRequesters() {
      try {
        const response = await axios.get(
          "http://172.28.28.91:8085/api/Admin/GetVendor"
        );
        this.requesters = response.data;
      } catch (error) {
        console.error("Error fetching requesters:", error);
      }
    },
    async approveRequest(requester) {
      requester.loading = true;

      try {
        const response = await axios.put(
          `http://172.28.28.91:8085/api/Admin/AdminApproveVendor`,
          {
            approvalInt: 1,
            userId: requester.userId,
            userEmail: requester.userEmail,
          }
        );
        console.log("Server response:", response.data);
        this.fetchRequesters();
      } catch (error) {
        console.error("Error approving request:", error);
      } finally {
        requester.loading = false;
      }
    },
    async rejectRequest(requester) {
      requester.rejectLoading = true;
      try {
        const response = await axios.put(
          `http://172.28.28.91:8085/api/Admin/AdminApproveVendor`,
          {
            approvalInt: 0,
            userId: requester.userId,
            userEmail: requester.userEmail,
          }
        );
        console.log("Server response:", response.data);
        this.fetchRequesters();
      } catch (error) {
        console.error("Error rejecting request:", error);
      } finally {
        requester.rejectLoading = false;
      }
    },
    getFileName(file) {
      const parts = file.split("/");
      return parts[parts.length - 1];
    },
  },
};
</script>
