<template>
  <div
    class="bg-gray-500 bg-opacity-40 w-screen h-screen absolute left-0 top-0 z-50 flex justify-center items-center"
  >
    <div
      class="popup lg:w-1/2 md:w-3/4 w-5/6 bg-white h-3/4 rounded-xl relative"
    >
      <!-- Form Stepper -->
      <div class="flex w-full justify-center mt-6">
        <div
          v-for="(step, i) in formSteps"
          :key="i"
          class="formStepCircle relative text-center w-2 flex flex-col items-center xl:px-20 lg:px-16 sm:px-12 px-8"
          :class="[i <= active ? 'activeStep' : '']"
        >
          <div
            class="z-10 p-auto w-6 h-6 flex items-center justify-center bg-gray-300 text-white rounded-[100%]"
          >
            {{ (i += 1) }}
          </div>
          <p class="text-gray-300 leading-4 text-sm mt-3">{{ step }}</p>
        </div>
      </div>

      <!-- Form -->
      <div class="w-full absolute h-full top-0 flex items-center">
        <form
          @submit.prevent="showModal"
          class="w-4/5 mx-auto pt-10 newForm h-[65%] flex flex-col relative justify-between"
        >
          <!-- Personal Details -->
          <div
            v-show="active == 0"
            class="flex flex-col justify-between h-[90%]"
          >
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
                <option value="IT DEPARTMENT">IT DEPARTNEMT</option>
              </select>
            </div>
          </div>

          <!-- Claiming Details -->
          <div v-show="active == 1" class="flex flex-col justify-between h-5/6">
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
            <div>
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
            </div>
        <!--<div>
              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200"
                  >Internal Order</label
                >
                <input
                  v-model="formData.internalOrder"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>-->
          </div>

          <!-- Date Details -->
          <div
            v-show="active == 2"
            class="flex flex-col justify-between h-[90%]"
          >
            <!-- <div>
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
            </div> -->
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

          <!-- Memo -->
          <div v-show="active == 3" class="flex flex-col justify-between h-5/6">
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

          <!-- Button -->
          <div class="absolute -bottom-12 right-0 gap-3 flex flex-row-reverse">
            <div class="flex justify-center mt-6">
              <button
                type="submit"
                @click.prevent="submitForm(1)"
                class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Next
              </button>
            </div>
            <div class="flex justify-center mt-6">
              <button
                @click.prevent="submitForm(-1)"
                class="bg-[#f7fbff] px-8 py-2.5 leading-5 text-gray transition-colors duration-300 transform rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
              >
                Back
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { formStore } from '../../views/store.js'; // Import your form store

export default {
  emits: ['close'],
  data() {
    return {
      formSteps: [
        'Personal Details',
        'Claiming Details',
        'Date Details',
        'Memo',
      ],
      active: 0,

      formData: {
        claimantName: formStore.formData.claimantName,
        companyName: formStore.formData.companyName,
        department: formStore.formData.department,
        costCenter: formStore.formData.costCenter,
        designation: formStore.formData.designation,
        reportName: formStore.formData.reportName,
      //internalOrder: formStore.formData.internalOrder,
        reportDate: formStore.formData.reportDate,
        reportStartDate: formStore.formData.reportStartDate,
        reportEndDate: formStore.formData.reportEndDate,
        memo: formStore.formData.memo,
      },
      branch: '', // Add the missing branch property
    };
  },
  methods: {
    submitForm(page) {
      this.active += page;
      console.log(this.active);

      if (this.active > 3) {
        // Update form data in the form store
        formStore.clearFormData();
        formStore.setFormData(this.formData);

        // Log the form data before navigation
        console.log('Form submitted', formStore.getFormData());

        this.$router.push({ name: 'ClaimReport' });
        // Get the router instance
        // ...
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
  content: '';
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
