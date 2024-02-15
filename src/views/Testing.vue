<template>
  <main
    class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto"
  >
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <section
          class="p-6 mx-auto border-gray-200 rounded-md dark:bg-gray-800"
        >
          <h2
            class="text-2xl font-bold text-gray-700 capitalize dark:text-white"
          >
            Vendor Accounts Approval
          </h2>
          <div class="pt-2">
            <hr />
          </div>
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2"
          >
            <div
              v-for="(requester, index) in requesters"
              :key="index"
              class="bg-blue-100 rounded-md px-8 pt-6 pb-8 mb-4"
            >
              <h2 class="text-xl font-bold mb-4"></h2>
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2">Name:</label>
                <p>{{ requester.userName }}</p>
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2">Email:</label>
                <p>{{ requester.userEmail }}</p>
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2"
                  >Company Name:</label
                >
                <p>{{ requester.companyName }}</p>
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2"
                  >PKT Staff Name (PIC):</label
                >
                <p>{{ requester.pktStaffName }}</p>
              </div>
              <div class="mb-4">
                <label
                  for="fileInput"
                  class="block text-gray-700 font-bold mb-2"
                  >Suporting Document:</label
                >
                <p>{{ requester.files }}</p>
              </div>
              <div class="flex pb-2">
                <button v-show="showConfirmButton"
                
                  @click="approveRequest(requester)"
                  class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4"
                >
                  Approve
                </button>
                <button
                  v-show="showLoadingButton"
                  class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4"
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
                  Loading....
                </button>
                <button
                  @click="rejectRequest(requester)"
                  class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                >
                  Reject
                </button>
                <button
                  v-show="showLoadingRejectButton"
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
                  Loading....
                </button>
              </div>
            </div>
          </div>
        </section>
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
      showConfirmButton: true,
      showRejectButton: true,
      showLoadingButton: false,
      showLoadingRejectButton: false,
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
    approveRequest(requester) {
      this.showConfirmButton = false;
      this.showLoadingButton = true;
      try {
        axios
          .put(`http://172.28.28.91:8085/api/Admin/AdminApproveVendor`, {
            approvalInt: 1,
            userId: requester.userId,
            userEmail: requester.userEmail,
          })
          .then((response) => {
            "Server response:", response.data;
            // Handle the response, such as showing a success message or resetting the form

            this.fetchRequesters();
          });
      } catch (error) {
        console.error("Error approving request:", error);
      }
    },
    rejectRequest(requester) {
      this.showRejectButton = false;
      this.showLoadingRejectButton = true;
      try {
        axios
          .put(`http://172.28.28.91:8085/api/Admin/AdminApproveVendor`, {
            approvalInt: 0,
            userId: requester.userId,
            userEmail: requester.userEmail,
          })
          .then((response) => {
            "Server response:", response.data;
            // Handle the response, such as showing a success message or resetting the form

            this.fetchRequesters();
          });
      } catch (error) {
        console.error("Error approving request:", error);
      }
    },
  },
};
</script>
