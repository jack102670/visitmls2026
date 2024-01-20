<template>
  <div class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto">
    <!-- Existing form pages -->
    <PTWpage1 ref="page1" @updateFormData="updateFormData" @next-page="scrollToPage2" @submit-form="updateFormData">
    </PTWpage1>
    <PTWpage2 ref="page2" @updateFormData="updateFormData" @submit-form="updateFormData" :addExtraPage="addExtraPage"
      :addExtraPage2="addExtraPage2" @update:addExtraPage="updateAddExtraPage" @update:addExtraPage2="updateAddExtraPage2"
      @next-page="scrollToPage3" @go-back="scrollToPage1"></PTWpage2>

    <PTWpage3 ref="page3" @updateFormData="updateFormData" @submit-form="updateFormData" @next-page="scrollToPage4"
      @go-back="scrollToPage2"></PTWpage3>
    <PTWpage4 ref="page4" @update-files="updateFiles" @updateFormData="updateFormData" @submit-form="updateFormData"
      @next-page="scrollToPage5" @go-back="scrollToPage3"></PTWpage4>

    <PTWpage7 ref="page7" @updateFormData="updateFormData" @submit-form="updateFormData" @go-back="scrollToPage5">
    </PTWpage7>
    <PTWpage5 v-if="addExtraPage" ref="page5" @updateFormData="updateFormData" @submit-form="updateFormData"
      @next-page="scrollToPage6" @go-back="scrollToPage4"></PTWpage5>
    <PTWpage6 v-if="addExtraPage2" ref="page6" @updateFormData="updateFormData" @submit-form="updateFormData"
      @go-back="scrollToPage5"></PTWpage6>

    <!-- Checkbox for adding extra form pages -->

    <!-- Additional form pages based on checkbox -->

    <!-- Add more extra form pages as needed -->

    <!-- Submit button -->
    <div class="flex justify-end mt-6">
      <button @click="showModal"
        class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-900 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
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
          <button @click="closeModal" type="button" class="rounded-2xl bg-gray-600 shadow-md p-3 my-1 w-full text-white">
            Cancel
          </button>
          <button @click="submitForm" type="button" class="rounded-2xl bg-blue-800 shadow-md p-3 my-1 w-full text-white">
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
import PTWpage1 from "../views/PTWpage1.vue";
import PTWpage2 from "../views/PTWpage2.vue";
import PTWpage3 from "../views/PTWpage3.vue";
import PTWpage4 from "../views/PTWpage4.vue";
import PTWpage5 from "../views/PTWpage5.vue";
import PTWpage6 from "../views/PTWpage6.vue";
import PTWpage7 from "../views/PTWpage7.vue";

import Modal from "../components/vmodal.vue";

export default {
  name: "PTWViews",
  components: {
    PTWpage1,
    PTWpage2,
    PTWpage3,
    PTWpage4,
    PTWpage5,
    PTWpage6,
    PTWpage7,
    Modal,
  },
  data() {
    return {
      files: [],
      formData: {},
      addExtraPage: false, // State to track whether to add extra form pages
      addExtraPage2: false,
      isModalVisible: false,
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
      if (!this.$refs.page2) {
        console.error("PTWpage2 reference is undefined.");
        return;
      }

      // Access the checkboxes in PTWpage2
      const checkbox1Ref = this.$refs.page2.$refs.checkbox1;
      const checkbox2Ref = this.$refs.page2.$refs.checkbox2;

      // Check if the checkboxes in PTWpage2 are defined
      if (!checkbox1Ref || !checkbox2Ref) {
        console.error("Checkbox references in PTWpage2 are undefined.");
        return;
      }

      // Check if the checkboxes are checked
      this.isCheckbox1Checked = checkbox1Ref.checked;
      this.isCheckbox2Checked = checkbox2Ref.checked;

      // Check for undefined references or formData for pages 1 to 6 conditionally
      for (let i = 1; i <= 6; i++) {
        const pageRef = this.$refs["page" + i];
        if (i === 5 || i === 6) {
          // Check if page 5 or 6 is optional and checkboxes are not checked
          if (i === 5 && !this.isCheckbox1Checked) {
            continue; // Skip this iteration if page 5 or 6 is optional and checkboxes are not checked
          }
          if (i === 6 && !this.isCheckbox2Checked) {
            continue; // Skip this iteration if page 5 or 6 is optional and checkboxes are not checked
          }
        }
        if (!pageRef) {
          console.error(`page${i} reference is undefined.`);
          return; // Stop execution if a reference is undefined
        } else if (!pageRef.formData) {
          console.error(`page${i}.formData is undefined.`);
          return; // Stop execution if formData is undefined
        }

        // Check if the current iteration is for page 5 or 6
      }

      // Define an empty object to store the formData for optional pages
      const optionalPagesData = {};

      // Check if checkbox1 for page5 is checked and page5 reference is defined
      if (this.isCheckbox1Checked && this.$refs.page5) {
        optionalPagesData.page5 = this.$refs.page5.formData;
      }

      // Check if checkbox2 for page6 is checked and page6 reference is defined
      if (this.isCheckbox2Checked && this.$refs.page6) {
        optionalPagesData.page6 = this.$refs.page6.formData;
      }

      // Combine the formData for all pages
      const formData = {
        page1: this.$refs.page1.formData,
        page2: this.$refs.page2.formData,
        page3: this.$refs.page3.formData,
        page4: this.$refs.page4.formData,
        page7: this.$refs.page7.formData,
        // Merge the formData for optional pages
        ...optionalPagesData,
        // Add more pages as needed
      };

      // ... (previous code)

      try {
        // Send a POST request to your server using Axios
        const response = await axios.post(
          "http://localhost:3000/d",
          formData
        );

        // Handle the response as needed
        console.log("Server response:", response.data);
        // location.reload();

        // Additional logic for submitting the form
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

      axios.post(url, formData)
        .then(response => {
          console.log('Upload successful:', response.data);

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

    updateAddExtraPage(value) {
      this.addExtraPage = value;
    },
    updateAddExtraPage2(value) {
      this.addExtraPage2 = value;
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>
