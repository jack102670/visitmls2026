<template>
  <div class="container mx-auto py-8">
    <div
      v-for="(requester, index) in requesters"
      :key="index"
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
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
        <label class="block text-gray-700 font-bold mb-2">Company Name:</label>
        <p>{{ requester.companyName }}</p>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2"
          >PKT Staff Name (PIC):</label
        >
        <p>{{ requester.pktStaffName }}</p>
      </div>
      <div class="mb-4">
        <label for="fileInput" class="block text-gray-700 font-bold mb-2"
          >File:</label
        >
        <p>{{ requester.files }}</p>
      </div>
      <div class="flex pb-2">
        <button
          @click="approveRequest(requester)"
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4"
        >
          Approve
        </button>
        <button
          @click="rejectRequest(requester)"
          class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          Reject
        </button>
      </div>
    </div>
  </div>
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
   approveRequest(requester) {
      try {
         axios.put(`http://172.28.28.91:8085/api/Admin/AdminApproveVendor`, {
          approvalInt: 1,
          userId: requester.userId,
          userEmail: requester.userEmail,
        }) .then((response) => {
            "Server response:", response.data;
            // Handle the response, such as showing a success message or resetting the form
      
            this.fetchRequesters();

         
          }); 
        
      } catch (error) {
        console.error("Error approving request:", error);
      }
    },
    rejectRequest(requester) {
       try {
         axios.put(`http://172.28.28.91:8085/api/Admin/AdminApproveVendor`, {
          approvalInt: 0,
          userId: requester.userId,
          userEmail: requester.userEmail,
        }) .then((response) => {
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
