<template>
  <div
    class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto"
  >
    <!-- Existing form pages -->
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8"
      >
        <section
          class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800"
        >
          <div class=" ">
            <h1 class="font-semibold text-3xl p-3 text-gray-700">
              PERMIT TO WORK
            </h1>
            <h2
              class="text-lg font-semibold text-slate-200 p-1 rounded capitalize bg-[#160959e2] dark:text-white"
            >
              Works Information
            </h2>
          </div>

          <form @submit.prevent="submitForm">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="username"
                  >Requester Name<span class="text-red-500">*</span></label
                >
                <input
                  id="requestername"
                  v-model="requestername"
                  required1
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="department"
                  >Department<span class="text-red-500">*</span></label
                >
                <select
                  v-model="department"
                  id="department"
                  required1
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <option value="" disabled selected></option>
                  <option
                    v-for="department in departments"
                    :key="department.id"
                    :value="department.name"
                  >
                    {{ department.name }}
                  </option>
                </select>
              </div>
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="password"
                  >Phone Number<span class="text-red-500">*</span></label
                >
                <input
                  id="Phonenumber"
                  required1
                  v-model="Phonenumber"
                  type="number"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="password"
                  >Email<span class="text-red-500">*</span></label
                >
                <input
                  id="email"
                  required1
                  v-model="Vemail"
                  type="email"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="password"
                  >Contractor / Vendor Name<span class="text-red-500"
                    >*</span
                  ></label
                >
                <input
                  id="Contractorvendorname"
                  required1
                  type="text"
                  v-model="Contractorvendorname"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="password"
                  >Company Name<span class="text-red-500">*</span></label
                >
                <input
                  id="Companyname"
                  type="text"
                  required1
                  v-model="Companyname"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Location"
                  >Location<span class="text-red-500">*</span></label
                >
                <input
                  id="Location"
                  type="text"
                  required1
                  v-model="Location"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="datefrom"
                  >Date From<span class="text-red-500">*</span></label
                >
                <input
                  id="datefrom"
                  v-model="datefrom"
                  required1
                  type="date"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="dateto"
                  >Date To<span class="text-red-500">*</span></label
                >
                <input
                  id="dateto"
                  type="date"
                  v-model="dateto"
                  required1
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div
              class="grid-cols-1 gap-6 mt-4 sm:grid-cols-1 mx-auto cursor-pointer flex w-full"
            >
              <div class="w-full">
                <label
                  for="Detailsincident"
                  class="text-gray-700 font-semibold dark:text-gray-200"
                  >Description</label
                >
                <textarea
                  v-model="Description"
                  id="description"
                  class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  rows="5"
                ></textarea>
              </div>
            </div>

            <!-- <div class="flex justify-end mt-6">
              <button @click=" submitForm"
                class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Next
              </button>
            </div> -->
          </form>
        </section>
      </div>

      <!-- add more fields as needed -->
    </div>
    <div
      class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 shadow-xl"
    >
      <section
        class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800"
      >
        <h2
          class="text-lg font-semibold text-slate-200 p-1 rounded capitalize bg-[#160959e2] dark:text-white"
        >
          Hazard Identification
        </h2>
        <span class="text-sm">
          (Item with '<span class="text-red-500">*</span>' needs a special work
          permit, mark '☑️' if applicable)
        </span>

        <form>
          <div class="grid grid-cols-1 pt-6 gap-6 mt-4 sm:grid-cols-3">
            <div v-for="(hazard, index) in hazards" :key="index">
              <label :for="hazard" class="text-gray-700 dark:text-gray-200">
                <input
                  :id="hazard"
                  type="checkbox"
                  v-model="formData[hazard]"
                  @change="
                    hazard === 'hotWorks'
                      ? handleCheckboxChange('hotWorks')
                      : hazard === 'workingAtHeight'
                        ? handleCheckboxChange2('workingAtHeight')
                        : handleGeneralCheckboxChange()
                  "
                />
                {{ hazard
                }}<span
                  v-if="specialPermits.includes(hazard)"
                  class="text-red-500"
                  >*</span
                >
              </label>
            </div>
          </div>
        </form>
        <!-- <div class="flex justify-between mt-6">
            <button
              @click="goBack"
              class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              back
            </button>
            <button
              @click="nextPage"
              class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Next
            </button>
          </div> -->
      </section>
    </div>

    <!-- Checkbox for adding extra form pages -->

    <!-- Additional form pages based on checkbox -->

    <!-- Add more extra form pages as needed -->

    <!-- Submit button -->
    <div class="flex justify-end mt-6">
      <button
        @click="showModal"
        class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-900 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
      >
        Submit
      </button>
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
        <p class="text-lg">Are you confirm to submit this?</p>
      </template>

      <!-- footer -->
      <template v-slot:footer>
        <div class="grid grid-cols-2 gap-3">
          <button
            @click="closeModal"
            type="button"
            class="rounded-2xl bg-gray-600 shadow-md p-3 my-1 w-full text-white"
          >
            Cancel
          </button>
          <button
            @click="submitForm"
            type="button"
            class="rounded-2xl bg-blue-800 shadow-md p-3 my-1 w-full text-white"
          >
            Confirm
          </button>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import { store } from "../views/store.js";
import axios from "axios";


import Modal from "../components/vmodal.vue";

export default {
  name: "PTWViews",
  components: {
   
    Modal,
  },
  data() {
    return {
      hazards: [
        "hotWorks",
        "workingAtHeight",
        "electricalHighTension",
        "fireProtectionSystemImpairment",
        "hazardousSubstances",
        "dustPollutantsExposure",
        "hydraulicSpillPneumaticJet",
        "trappingPointsNipPoints",
        "inadequateIllumination",
      ],

      specialPermits: ["hotWorks", "workingAtHeight"],
    
      files: [],
      formData: {},
    
    };
  },
  mounted() {
    this.branch = store.getSelectedLocation();
    this.userDetails = store.getSession().userDetails;
  },
  methods: {
    updateFiles(files) {
      this.files = files;
    },
    updateFormData(formData) {
      this.formData = formData;
    },
    async submitForm() {
      // Check if PTWpage2 reference is defined
  

      // Check for undefined references or formData for pages 1 to 6 conditionally
      let combinedFormData = {
        branch: this.branch, // Example, replace with actual data
        vendorName: this.requestername,
        vendorEmail: this.Vemail,
        companyName: "",
        phoneNumber: 0,
        dateFrom: "",
        dateUntil: "",
        workLocation: "",
        workDescription: "",
        uniqueCode: "",
        staffDetails: {
          pktStaffName: this.requestername,
          pktStaffEmail: "",
          departmentName: "",
        },
        equipment: [],
        hazard: [],
        safetyMeasure: [],
        isolation: [],
        plantSupport: [],
        jha: {
          jhaRefNo: "",
          jobDesc: "",
          analyzedBy: "",
          analyzedDate: "",
          approvedBy: "",
          approvedDate: "",
        },
        jhaDetails: [],
        hotWork: {
          // ... fields for hotWork ...
        },
        wah: {
          // ... fields for wah ...
        },
        userId: "", // Assuming this comes from the user session
      };

      // Loop through each page and merge its formData into combinedFormData
    

      // No need to separately handle optional pages as they are already included in the loop

      try {
        // Send a POST request to your server using Axios with the combined formData
        const response = await axios.post(
          "http://localhost:3000/ptw",
          combinedFormData
        );
        console.log("Server response:", response.data);
        // Handle post-submission logic here
      } catch (error) {
        console.error("Error submitting form:", error);
        // Handle the error as needed
      }
    },
    uploadMultiImage() {
      let formData = new FormData();
      this.files.forEach((file) => {
        formData.append("filecollection", file);
      });

      const url = `http://localhost:3000/upload`;

      axios
        .post(url, formData)
        .then((response) => {
          console.log("Upload successful:", response.data);
        })
        .catch((error) => {
          if (error.response) {
            console.error("Error data:", error.response.data);
            console.error("Error status:", error.response.status);
          } else if (error.request) {
            console.error("Error request:", error.request);
          } else {
            console.error("Error message:", error.message);
          }
        });
    },
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
        this.uniqueCode = `BR${userIdFragment}${randomNumber}${timestamp}`;
        console.log("Unique Code:", this.uniqueCode);
        return this.uniqueCode;
      } else {
        console.error("User ID is undefined.");
        // You may want to handle this case differently based on your application logic.
        return "";
      }
    },
    // ... Other methods ...

    // ... Other methods ...

  
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>
