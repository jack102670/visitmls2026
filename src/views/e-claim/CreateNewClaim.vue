<!-- Create New Claim for Claimant View-->
<template>
  <main class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto">
    <div class="container mx-auto">
      <div class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <section class="max-w-4xl p-6 mx-auto bg-white border-2 border-e-gray-200 rounded-md dark:bg-gray-800">
          <h2 class="text-2xl font-bold text-gray-700 capitalize dark:text-white">
            CREATE NEW CLAIM
          </h2>
          <div class="pt-2">
            <hr class="" />
          </div>

          <form @submit.prevent="showModal">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="claimantName">Claimant's Name <span class="text-red-500">*</span></label>
                <input placeholder="e.g ALI BIN ABU" v-model="formData.claimantName" id="claimantName" type="text" value="required" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>
              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200">Company's Name<span class="text-red-500">*</span></label>
                <input placeholder="e.g PKT LOGISTICS (M) SDN BHD" v-model="formData.companyName" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>
            </div>
            <div class="grid grid-cols-3 gap-6 mt-4 sm:grid-cols-3">
              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="department">Department<span class="text-red-500">*</span></label>
                <select v-model="formData.department" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                  <option value="" disabled selected></option>
                  <option value="IT DEPARTMENT">IT DEPARTMENT</option>
                </select>
              </div>
              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="designation">Cost Center<span class="text-red-500">*</span></label>
                <input v-model="formData.costCenter" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>
              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="designation">Designation<span class="text-red-500">*</span></label>
                <select v-model="formData.designation" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                  <option value="" disabled selected></option>
                  <option value="HR">HR</option>
                  <option value="HOD">HOD</option>
                  <option value="IT DEVELOPER">IT DEVELOPER</option>
                </select>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="claimantName">Report Name<span class="text-red-500">*</span></label>
                <input v-model="formData.reportName" id="ReportName" type="text" value="required" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                <input v-model="branch" id="ReportName" type="hidden" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>
              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200">Internal Order</label>
                <input v-model="formData.internalOrder" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>
            </div>
            <div class="grid grid-cols-3 gap-6 mt-4 sm:grid-cols-3">
              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="ReportDate">Report Date</label>
                <input v-model="formData.reportDate" id="ReportDate" type="date" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>
              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="ReportStartDate">Report Start Date</label>
                <input v-model="formData.reportStartDate" id="ReportStartDate" type="date" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>
              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="ReportEndDate">Report End Date</label>
                <input v-model="formData.reportEndDate" id="ReportEndDate" type="date" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200">Memo</label>
                <input v-model="formData.memo" class="block w-full px-4 py-8 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>
            </div>
          </form>
        </section>
        <div class="mt-9 mr-4 gap-3 flex flex-row-reverse">
          <div class="flex justify-center mt-6">
            <button type="submit" @click.prevent="submitForm" class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Submit
            </button>
          </div>
          <div class="flex justify-center mt-6">
            <button type="cancel" class="bg-[#f7fbff] px-8 py-2.5 leading-5 text-gray transition-colors duration-300 transform rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { formStore } from '../store.js'; // Import your form store

export default {
  data() {
    return {
      formData: {
        claimantName: formStore.formData.claimantName,
        companyName: formStore.formData.companyName,
        department: formStore.formData.department,
        costCenter: formStore.formData.costCenter,
        designation: formStore.formData.designation,
        reportName: formStore.formData.reportName,
        internalOrder: formStore.formData.internalOrder,
        reportDate: formStore.formData.reportDate,
        reportStartDate: formStore.formData.reportStartDate,
        reportEndDate: formStore.formData.reportEndDate,
        memo: formStore.formData.memo
      },
      branch: '' // Add the missing branch property
    };
  },
  methods: {
    submitForm() {
      // Update form data in the form store
      formStore.clearFormData();
      formStore.setFormData(this.formData);

      // Log the form data before navigation
      console.log('Form submitted', formStore.getFormData());

      this.$router.push({ name: 'ClaimReport' });
      // Get the router instance
      // ...
    }
  }
};
</script>
