<template>
  <main
    class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto"
  >
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <!-- Header Section -->
        <div
          class="relative overflow-hidden mt-2 grid cols-start-1 md:flex justify-between"
        >
          <h3 class="ml-4 text-3xl font-bold text-blue-900" v-for="(claim, index) in claims" :key="index">
            {{ claim.reportName }}
          </h3>
          <!-- Buttons Section -->
          <div class="mt-1 mr-4 gap-2 flex flex-row-reverse">
            <button
              @click="showContent"
              class="w-30 p-1 rounded-lg items-center border-4 text-sm dark:bg-gray-900 dark:border-gray-700 bg-green-700 border text-white"
            >
              <div class="flex justify-center">
                <span class="mr-2 ml-2 text-slate-100 hover:text-blue-200"
                  >Submit Claim</span
                >
              </div>
            </button>
            <button
              @click="showContent"
              class="w-30 p-1 rounded-lg items-center border-4 text-sm dark:bg-gray-900 dark:border-gray-700 bg-green-700 border text-white"
            >
              <div class="flex justify-center">
                <span class="mr-2 ml-2 text-slate-100 hover:text-blue-200"
                  >Add Expenses</span
                >
              </div>
            </button>
          </div>
        </div>

        <!-- Summary Section -->
        <section class="mt-5 px-4 mx-auto">
  <div class="grid grid-cols-14 gap-4">
    <!-- Iterate over each claim -->
    <template v-for="(claim, index) in claims" :key="index">
      <!-- Display Claimant's Name -->
      <div class="col-start-1 col-end-8">
        <h3 class="text-md font-semibold text-gray-600">{{ claim.claimantName }}</h3>
      </div>
      <!-- Display Designation -->
      <div class="col-start-8 col-end-9">
        <h5 class="text-sm font-semibold text-gray-600">Designation</h5>
      </div>
      <div class="col-start-9">
        <h5 class="text-sm font-semibold text-gray-600">:</h5>
      </div>
      <div class="col-end-12 col-span-2">
        <h5 class="text-sm font-semibold text-gray-600">{{ claim.designation }}</h5>
      </div>
      <!-- Display Company's Name -->
      <div class="col-start-1 col-end-4">
        <h3 class="text-sm font-semibold text-gray-600">Department {{claim.department}}</h3>
      </div>
      <!-- Display Cost Center -->
      <div class="col-start-8 col-end-9">
        <h5 class="text-sm font-semibold text-gray-600">Cost Center</h5>
      </div>
      <div class="col-start-9">
        <h5 class="text-sm font-semibold text-gray-600">:</h5>
      </div>
      <div class="col-end-12 col-span-2">
        <h5 class="text-sm font-semibold text-gray-600">{{ claim.costCenter }}</h5>
      </div>
      <!-- Display Date of Report -->
      <div class="col-start-8 col-end-9">
        <h5 class="text-sm font-semibold text-gray-600">Date of Report</h5>
      </div>
      <div class="col-start-9">
        <h5 class="text-sm font-semibold text-gray-600">:</h5>
      </div>
      <div class="col-end-12 col-span-2">
        <h5 class="text-sm font-semibold text-gray-600">{{ claim.reportDate }}</h5>
      </div>
    </template>
  </div>
</section>


        <!-- Table Section -->
        <section class="container px-4 mx-auto">
          <div class="flex flex-col mt-6">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div
                class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"
              >
                <div
                  class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg"
                >
                  <table
                    ref="reportTable"
                    class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                  >
                    <!-- Table Header -->
                    <thead class="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>No</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Type Of Claim</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Particulars</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Amount</span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <!-- Table Body -->
                    <tbody
                      class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
                    >
                      <tr v-for="(claim, index) in claims" :key="index">
                        <!-- Display claim details in each cell -->
                        <td
                          class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
                        >
                          {{ index + 1 }}
                        </td>
                        <td
                          class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                        >
                          {{ claim.claimType }}
                        </td>
                        <td
                          class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                        >
                          {{ claim.particulars }}
                        </td>
                        <td
                          class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                        >
                          {{ claim.amount }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import { formStore } from "../store.js";
export default {
  data() {
    return {
      claims: [],
    };
  },

  created() {
    this.fetchClaims();
  },

  methods: {
    fetchClaims() {
      // Retrieve the formData from the store and push it into the claims array
      const formData = formStore.getFormData();
      if (formData) {
        this.claims.push(formData);
      }

      // Log the claims array to the console
      console.log("Claims:", this.claims);
    },
  },
};
</script>

<style></style>
