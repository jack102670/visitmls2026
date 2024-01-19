<template>
  <main
    class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto"
  >
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <section
          class="max-w-4xl p-6 mx-auto bg-white border-2 border-gray-200 rounded-md dark:bg-gray-800"
        >
          <h2
            class="text-2xl font-bold text-gray-700 capitalize dark:text-white"
          >
            MASK REQUEST FORM {{ userDetails.email }}
          </h2>
          <div class="pt-2">
            <hr />
          </div>

          <form @submit.prevent="showModal">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="requesterName"
                  >Requester Name<span class="text-red-500">*</span></label
                >
                <input
                  v-model="capitalizedRequesterName"
                  id="requesterName"
                  type="text"
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="de"
                  >Department<span class="text-red-500">*</span></label
                >
                <select
                  v-model="department"
                  id="department"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <option value=""></option>
                  <option
                    v-for="department in departments"
                    :key="department.id"
                    :value="department.name"
                  >
                    {{ department.name }}
                  </option>
                </select>
              </div>
              <!-- Add v-model to other inputs as needed -->
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="username"
                  >Phone Number<span class="text-red-500">*</span></label
                >
                <input
                  v-model="phonenumber"
                  id="number"
                  type="number"
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Noofpieces"
                  >No Of Pieces<span class="text-red-500">*</span></label
                >
                <input
                  v-model="Noofpieces"
                  id="Noofpieces"
                  type="number"
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <!-- Add v-model to other inputs as needed -->
            </div>
            <div
              class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1 mx-auto cursor-pointer flex w-full"
            >
              <div class="w-full">
                <label
                  for="Description"
                  class="text-gray-700 font-semibold dark:text-gray-200"
                  >Description</label
                >
                <textarea
                  v-model="Description"
                  id="Description"
                  class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  rows="2"
                ></textarea>
              </div>
            </div>

            <div class="flex justify-end mt-6">
              <button
                type="submit"
                class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>

    <Modal v-show="isModalVisible" @close="closeModal">
      <!-- header -->
      <template v-slot:header>
        <h1 class="font-bold text-xl">Confirmation</h1>
      </template>

      <!-- body -->
      <template v-slot:body>
        <!-- <p class="py-3 text-xs font-bold text-purple-900">
        Forgot your password?
      </p> -->
        <table
          class="w-full mt-4 bg-white border border-gray-300 divide-y divide-gray-300"
        >
          <tr>
            <td class="py-2 px-4 font-medium left-column">Requester Name:</td>
            <td class="py-2 px-4 right-column">{{ requesterName }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 font-medium">Department:</td>
            <td class="py-2 px-4">{{ department }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 font-medium">Phone Number:</td>
            <td class="py-2 px-4">{{ phonenumber }}</td>
          </tr>

          <tr>
            <td class="py-2 px-4 font-medium">No Of Pieces:</td>
            <td class="py-2 px-4">{{ Noofpieces }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 font-medium">Description:</td>

            <textarea
              v-model="Description"
              name=" formData.Description"
              id=" formData.Description"
              rows="4"
              style="overflow-y: auto; width: 100%"
            ></textarea>
          </tr>
          <!-- ... (Other modal content) ... -->

          <!-- ... (Other modal content) ... -->
        </table>
      </template>

      <!-- footer -->
      <template v-slot:footer>
        <div class="grid grid-cols-2 gap-3">
          <button
            type="button"
            @click="closeModal"
            class="rounded-2xl bg-gray-600 shadow-md p-3 my-1 w-full text-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            @click="submitForm"
            class="rounded-2xl bg-cyan-800 shadow-md p-3 my-1 w-full text-white"
          >
            Confirm
          </button>
        </div>
        <div class="flex justify-end mt-6"></div>
      </template>
    </Modal>

    <!-- <div class="flex justify-end mt-6">
          <button
            type="submit"
            class="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
        </div> -->
  </main>
</template>

<script>
import { store } from "../views/store.js";
import Modal from "@/components/vmodal.vue";
import * as template from "../javascript/department.js";
import axios from "axios";

export default {
  name: "badgeformViews",
  components: {
    Modal,
  },
  data() {
    return {
      userDetails: [],
      uniqueCode: "",
      
        requesterName: "", // Corresponds to "Requester Name"

        phonenumber: "", // Corresponds to "Phone Number"

        Noofpieces: "", // Corresponds to "No Of Pieces"
        Description: "", // Corresponds to "Description"

        // Add more form fields here if needed
      
      departments: template.departments,
      isModalVisible: false,
    };
  },
  computed: {
    capitalizedRequesterName: {
      get() {
        return this.requesterName;
      },
      set(value) {
        this.requesterName =
          value.charAt(0).toUpperCase() + value.slice(1);
      },
    },
  },

  methods: {
    generateUniqueCode() {
      // Check if this.userId is defined
      if (this.userDetails.userId) {
        // Use part of the userId for uniqueness, e.g., 4 characters
        const userIdFragment = this.userDetails.userId.substring(0, 4);

        // Generate a random number and pad it to 2 characters
        const randomNumber = Math.floor(Math.random() * 100)
          .toString()
          .padStart(2, "0");

        // Create a timestamp and take the last 2 digits for uniqueness
        const timestamp = Date.now().toString().slice(-2);

        // Construct the uniqueCode
        this.uniqueCode = `Mask${userIdFragment}${randomNumber}${timestamp}`;
        console.log("Unique Code:", this.uniqueCode);
        return this.uniqueCode;
      } else {
        console.error("User ID is undefined.");
        // You may want to handle this case differently based on your application logic.
        return "";
      }
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    submitForm() {
      console.log("Submitting form data:", ); // Log formData to console for debugging
      axios
        .post("http://172.28.28.91:8085/api/Main/InsertMaskRequest", {
          requesterName: this.requesterName,
          departmentName: this.department, // Make sure this is the correct field name and value
          Description: this.Description, // Should this be this.formData.Description instead?
          Noofpieces: this.Noofpieces,
          phoneNumber: this.phonenumber,
          uniqueCode: this.generateUniqueCode(),
          userId: this.userDetails.userId,
          branch: this.branch, // Ensure this is defined and has a valid value
          userEmail: this.userDetails.email,
        })
        

        .then((response) => {
          "Server response:", response.data;
          // Handle the response, such as showing a success message or resetting the form
          //myrequest.fetchRequesters();

          // this.uploadMultiImage();
          // this.resetForm();
          // this.closeModal();
          // this.$router.push("/Dashboard");
        })
        .catch((error) => {
          if (error.response) {
            console.log(
              "Server responded with status code:",
              error.response.status
            );
            console.log("Response data:", error.response.data);
          } else if (error.request) {
            console.log("No response received:", error.request);
          } else {
            console.log("Error creating request:", error.message);
          }

          console.error("Error submitting form:", error);
          // Handle errors, such as showing an error message
        })
        .finally(() => {
          // Set isLoading back to false when the submission is complete
          this.isLoading = false;
        });
    },
  },
  mounted() {
    this.branch = store.getSelectedLocation();
    this.userDetails = store.getSession().userDetails;
  },
};
</script>
