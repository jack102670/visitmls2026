<template>
  <main class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto">
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <section class="max-w-4xl p-6 mx-auto bg-white border-2 border-gray-200 rounded-md dark:bg-gray-800">
          <h2 class="text-2xl font-bold text-gray-700 capitalize dark:text-white">
            CCTV FOOTAGE VIEWING FORM
          </h2>
          <div class="pt-2">
            <hr />
          </div>

          <form @submit.prevent="showModal">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-3">
              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="Requestername">Requester Name<span
                    class="text-red-500">*</span></label>
                <input v-model="capitalizedRequesterName" id="Requestername" type="text" required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>

              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="de">Department<span
                    class="text-red-500">*</span></label>
                <select v-model="department" id="department" required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                  <option value="" disabled selected></option>
                  <option v-for="department in departments" :key="department.id" :value="department.name">
                    {{ department.name }}
                  </option>
                </select>
              </div>
              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="Phonenumber">Phone Number<span
                    class="text-red-500">*</span></label>
                <input v-model="Phonenumber" id="Phonenumber" type="number" required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>

              <!-- Add v-model to other inputs as needed -->
            </div>

            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="Witness">Incident Location<span
                    class="text-red-500">*</span></label>
                <input v-model="Incidentlocation" id="Incidentlocation" type="text" required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>
              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="Appointmenttime">Appointment
                  Date</label>
                <input v-model="Appointmenttime" id="Appointmenttime" :min="minDateTime" type="datetime-local"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>

              <!-- Add v-model to other inputs as needed -->
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="Incidentdate">Incident Date And
                  Time<span class="text-red-500">*</span></label>
                <input v-model="Incidentdate" id="Incidentdate" type="datetime-local" :max="maxDateTime" required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>
            </div>
            <!-- <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Incidentdate"
                  >Incident Date<span class="text-red-500">*</span></label
                >
                <input
                  v-model="formData.Incidentdate"
                  id="Incidentdate"
                  type="date"
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Incidenttime"
                  >Incident Time<span class="text-red-500">*</span></label
                >
                <input
                  v-model="Incidenttime"
                  id="Incidenttime"
                  type="time"
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div> -->
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1 mx-auto cursor-pointer flex w-full">
              <div class="w-full">
                <label for="Detailsincident" class="font-semibold text-gray-700 dark:text-gray-200">Description Of
                  Incident <span class="text-red-500">*</span></label>
                <textarea v-model="Detailsincident" id="Detailsincident"
                  class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  rows="5" required></textarea>
              </div>
            </div>

            <div class="flex justify-end mt-6">
              <button type="submit" required
                class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
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
        <table class="w-full mt-4 bg-white border border-gray-300 divide-y divide-gray-300">
          <tr>
            <td class="py-2 px-4 font-medium">Requester Name:</td>
            <td class="py-2 px-4">{{ requesterName }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 font-medium">Department:</td>
            <td class="py-2 px-4">{{ department }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 font-medium">Phone Number:</td>
            <td class="py-2 px-4">{{ Phonenumber }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 font-medium">Appointment Date:</td>
            <td class="py-2 px-4">{{ Appointmenttime }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 font-medium">Incident Location:</td>
            <td class="py-2 px-4">{{ Incidentlocation }}</td>
          </tr>

          <tr>
            <td class="py-2 px-4 font-medium">Incident Date:</td>
            <td class="py-2 px-4">{{ Incidentdate }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 font-medium">Details:</td>
            <td class="py-2 px-4">
              <div class="text-sm max-h-32 overflow-auto">
                {{ Detailsincident }}
              </div>
            </td>
          </tr>

          <!-- ... (Other modal content) ... -->

          <!-- ... (Other modal content) ... -->
        </table>
      </template>

      <!-- footer -->
      <template v-slot:footer>
        <div class="grid grid-cols-2 gap-3">
          <button type="button" class="rounded-2xl bg-gray-600 shadow-md p-3 my-1 w-full text-white">
            Cancel
          </button>
          <button type="button" @click="submitForm" class="rounded-2xl bg-cyan-800 shadow-md p-3 my-1 w-full text-white">
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
import axios from "axios";
import { store } from "../views/store.js";
import Modal from "@/components/vmodal.vue";
import * as template from "../javascript/department.js";

export default {
  name: "cctvformViews",
  components: {
    Modal,
  },
  data() {
    return {
      userDetails: [],
      isModalVisible: false,
      modalContent: "",
      departments: template.departments,



      requesterName: "",
      department: "",
      Phonenumber: "",
      daterequest: "",
      People: "",
      Appointmenttime:"",
      Incidentlocation:"",
      Incidentdate:"",
      Detailsincident: "",
      // Add more form fields here

      minDateTime: this.formatDateTime(new Date()),
      maxDateTime: this.formatDateTime(new Date()),
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


        const timestamp = Date.now().toString().slice(-2);


        this.uniqueCode = `CCTV${userIdFragment}${randomNumber}${timestamp}`;
        console.log("Unique Code:", this.uniqueCode);
        return this.uniqueCode;
      } else {
        console.error("User ID is undefined.");

        return "";
      }
    },
    resetForm() {
    // Reset the form fields to their default values
    // this.branch = '';
    this.requesterName = '';
    this.departmentName = '';
    this.phoneNumber = '';
    this.description = '';
    this.incidentDateTime = '';
    this.incidentLocation = '';
    this.apptDateTime = '';
    // The uniqueCode is generated so we can regenerate it or set it to an empty string
    // The userId and userEmail are part of user details and might not need resetting if they are used for other purposes
    // this.uniqueCode = this.generateUniqueCode(); // if you want to regenerate

    // this.userId = ''; // Normally, you wouldn't reset a userId as it's a unique identifier for the user
    // this.userEmail = ''; // Same for userEmail, it's part of the user's persistent state
  },
    submitForm() {

      const formData = {
        branch: this.branch,
        requesterName: this.requesterName,
        departmentName: this.requesterName,
        phoneNumber: this.Phonenumber,
        description: this.Detailsincident,
        incidentDateTime: this.Incidentdate,
        incidentLocation: this.Incidentlocation,
        apptDateTime: this.Appointmenttime,
        uniqueCode: this.generateUniqueCode(),
        userId: this.userDetails.userId,
        userEmail: this.userDetails.email,
      };


      console.log("Submitting form data:", formData);


      axios.post("http://172.28.28.91:8085/api/Main/InsertCCTVRequest", formData)
        .then(response => {
          this.resetForm();
            this.closeModal();
            this.$router.push("/Dashboard");
          console.log("Server response:", response.data);
        })
        .catch(error => {

          console.error("Error submitting form:", error);
        });
    },
    formatDateTime(date) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    },

    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
  mounted() {
    this.branch = store.getSelectedLocation();
    this.userDetails = store.getSession().userDetails;
  },
};
</script>
