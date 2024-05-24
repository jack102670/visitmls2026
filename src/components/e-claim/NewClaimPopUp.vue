<template>
  <div
    class="bg-gray-500 bg-opacity-40 w-screen h-screen absolute left-0 top-0 z-50 flex justify-center items-center"
  >
    <div
      class="popup overflow-y-auto lg:w-3/5 md:w-3/4 w-5/6 bg-white h-[90%] rounded-xl relative px-10 pb-6"
    >
      <!-- Heading Title -->
      <h1 class="text-3xl font-bold py-6 border-b-2 border-black">
        CREATE NEW CLAIM
      </h1>

      <!-- Form -->
      <form @submit.prevent="showModal" class="text-sm py-2">
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 overflow-y-auto">
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="claimantName"
              >Claimant's Name <span class="text-red-500">*</span></label
            >
            <input
              placeholder="e.g ALI BIN ABU"
              v-model="formData.claimantName"
              id="claimantName"
              type="text"
              value="required"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label class="font-semibold text-gray-700 dark:text-gray-200"
              >Company's Name<span class="text-red-500">*</span></label
            >
            <input
              placeholder="e.g PKT LOGISTICS (M) SDN BHD"
              v-model="formData.companyName"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div class="grid grid-cols-3 gap-6 mt-4 sm:grid-cols-3">
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="department"
              >Department<span class="text-red-500">*</span></label
            >
            <select
              v-model="formData.department"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >
              <option value="" disabled selected></option>
              <option value="ICT">ICT</option>
              <option value="Finance">Finance</option>
            </select>
          </div>
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="designation"
              >Cost Center<span class="text-red-500">*</span></label
            >
            <input
              v-model="formData.costCenter"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="designation"
              >Designation<span class="text-red-500">*</span></label
            >
            <select
              v-model="formData.designation"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >
              <option value="" disabled selected></option>
              <option value="HR">HR</option>
              <option value="HOD">HOD</option>
              <option value="IT DEVELOPER">IT DEVELOPER</option>
            </select>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="claimantName"
              >Report Name<span class="text-red-500">*</span></label
            >
            <input
              v-model="formData.reportName"
              id="ReportName"
              type="text"
              value="required"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
            <input
              v-model="branch"
              id="ReportName"
              type="hidden"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label class="font-semibold text-gray-700 dark:text-gray-200"
              >Internal Order</label
            >
            <input
              v-model="formData.internalOrder"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label class="font-semibold text-gray-700 dark:text-gray-200"
              >Report Type</label
            >
            <select
              v-model="formData.reportType"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >
              <option value="" disabled selected></option>
              <option value="Finance">Finance</option>
              <option value="HR">HR</option>
            </select>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-6 mt-4 sm:grid-cols-3">
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="ReportDate"
              >Report Date</label
            >
            <input
              v-model="formData.reportDate"
              id="ReportDate"
              type="date"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="ReportStartDate"
              >Report Start Date</label
            >
            <input
              v-model="formData.reportStartDate"
              id="ReportStartDate"
              type="date"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="ReportEndDate"
              >Report End Date</label
            >
            <input
              v-model="formData.reportEndDate"
              id="ReportEndDate"
              type="date"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
          <div>
            <label class="font-semibold text-gray-700 dark:text-gray-200"
              >Memo</label
            >
            <input
              v-model="formData.memo"
              class="block w-full px-4 py-8 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>
      </form>

      <!-- button -->
      <div class="mr-4 gap-3 flex flex-row-reverse">
        <div class="flex justify-center mt-6">
          <button
            type="submit"
            @click.prevent="submitForm(1)"
            class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Submit
          </button>
        </div>
        <div class="flex justify-center mt-6">
          <button
            type="cancel"
            @click.prevent="submitForm(-1)"
            class="bg-[#f7fbff] px-8 py-2.5 leading-5 text-gray transition-colors duration-300 transform rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { formStore } from '../../views/store.js'; // Import your form store
import axios from 'axios';
export default {
  emits: ['close'],
  data() {
    return {
      active: 0,

      formData: {
        claimantName: formStore.formData.claimantName,
        companyName: formStore.formData.companyName,
        department: formStore.formData.department,
        costCenter: formStore.formData.costCenter,
        designation: formStore.formData.designation,
        reportName: formStore.formData.reportName,
        internalOrder: formStore.formData.internalOrder,
        reportType: formStore.formData.reportType,
        reportDate: formStore.formData.reportDate,
        reportStartDate: formStore.formData.reportStartDate,
        reportEndDate: formStore.formData.reportEndDate,
        memo: formStore.formData.memo,
        uniqueCode: formStore.formData.uniqueCode,
      },
      branch: '', // Add the missing branch property
    };
  },
  methods: {generateUniqueCode() {
      // Check if this.userId is defined
      if (this.formData.claimantName) {
        // Use part of the claimantName for uniqueness, e.g., 4 characters
        const claimantNameFragment = this.formData.claimantName.substring(0, 4);

        // Generate a random number and pad it to 2 characters
        const randomNumber = Math.floor(Math.random() * 100)
          .toString()
          .padStart(2, "0");


        const timestamp = Date.now().toString().slice(-2);


        this.formData.uniqueCode = `Claim${claimantNameFragment}${randomNumber}${timestamp}`;
        console.log("Unique Code:", this.formData.uniqueCode);
        return this.formData.uniqueCode;
      } else {
        console.error("User ID is undefined.");

        return "";
      }
    },
    submitForm(page) {
      this.active += page;

      if (this.active > 0) {
      // Update form data in the form store
      formStore.clearFormData();
      formStore.setFormData(this.formData);

      // Log the form data before navigation
      console.log('Form submitted', formStore.getFormData());

      // Send API request using axios
      const apiData = {
        name: this.formData.claimantName,
        company_name: this.formData.companyName,
        department: this.formData.department,
        designation_title: this.formData.designation,
        claim_startdate: this.formData.reportStartDate,
        claim_enddate: this.formData.reportEndDate,
        reference_number: this.generateUniqueCode(),
        report_name: this.formData.reportName,
      };

      // Send API request using axios
      axios.post('http://172.28.28.91:97/api/User/InsertClaimDetails', apiData)
        .then(response => {
          // Handle success response
          console.log('API response', response.data);
          this.$router.push({ name: 'ClaimReport' });
        })
        .catch(error => {
          // Handle error response
          console.error('API error', error);
        });

      this.active = 0;
    }

      if (this.active < 0) {
      // close the create new claim pop up
      this.$emit('close');
      this.active = 0;
      }
    },
  },
};
</script>
<style scoped>
.formStepCircle:not(:first-child)::before {
  content: "";
  background-color: rgb(209 213 219);
  width: 100%;
  height: 3px;
  position: absolute;
  right: 50%;
  top: 15%;
}

.activeStep div {
  background-color: rgb(30 58 138);
}

.activeStep:not(:first-child)::before {
  background-color: rgb(30 58 138);
}

.activeStep p {
  color: rgb(30 58 138);
}

.newForm div {
  font-weight: 300;
}
</style>
