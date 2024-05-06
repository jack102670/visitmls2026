<!-- Box Info for Admin View-->
<template>
  <main class="flex-1 text overflow-y-auto bg-[#CED1DA] p-4 sm:ml-64">
    <div class="container mx-auto">
      <div
        class="relative overflow-hidden bg-[#f7fbff] border-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <div class="flex justify-between">
          <div class="flex justify-start flex-col ml-5">
            <h2 class="text-3xl font-bold text-blue-900">
              PKT GROUP OF COMPANIES
            </h2>
            <h3 class="text-xl font-bold text-blue-800">
              Claim for Reimbursement of All Expenses
            </h3>
          </div>
          <div class="flex ml-14 mt-5">
            <router-link :to="{name:'CreateNewClaim'}">
            <button class="p-2 flex items-center">
              Add claim
              <span class="ml-2 border border-2 px-4 border-blue-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </span>
            </button></router-link>
          </div>

          <hr class="h-mx-auto bg-gray-100 border-0 rounded" />
        </div>
        <section class="container px-4 mx-auto pt-12">
  <div class="flex justify-between items-center">
    <div>
      <h2 class="text-lg font-medium text-gray-800 dark:text-white ml-1">
        Claim
        <span
          class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400"
          >
        </span>
      </h2>
    </div>
  </div>

  <div class="flex flex-col mt-6">
    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div
        class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"
      >
        <div
          class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg"
        >
          <table
            ref="myTable"
            class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 hover stripe"
          >
            <thead class="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th
                  scope="col"
                  class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                >
                  <div class="flex items-center gap-x-3">
                    <span>Claimant Name</span>
                  </div>
                </th>
                <th
                  scope="col"
                  class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                >
                  <div class="flex items-center gap-x-3">
                    <span>Claim Type</span>
                  </div>
                </th>
                <th
                  scope="col"
                  class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                >
                  <div class="flex items-center gap-x-3">
                    <span>Claim Date</span>
                  </div>
                </th>
                <th
                  scope="col"
                  class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                >
                  <div class="flex items-center gap-x-3">
                    <span>Claim Amount</span>
                  </div>
                </th>
                <th
                  scope="col"
                  class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                >
                  <div class="flex items-center gap-x-3">
                    <span>Status</span>
                  </div>
                </th>
                <th scope="col" class="relative py-3.5 px-4">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
          <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
  <tr v-for="(claim, index) in claims" :key="index">
    <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
      {{ claim.claimantName }}
    </td>
    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
      {{ claim.claimType }}
    </td>
    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
      {{ claim.claimDate }}
    </td>
    <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
      {{ claim.claimAmount }}
    </td>
    <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
      {{ claim.status }}
    </td>
    <td class="px-4 py-4 ml text-sm whitespace-nowrap">
      <!-- Edit button goes here -->
    </td>
  </tr>
</tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>
        <div
          class="mt-5 grid grid-cols-2 gap-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4"
        ></div>
      </div>
    </div>
  </main>
  <CreateNewClaim @form-submitted="handleFormData" />
</template>

<script>
import CreateNewClaim from '../views/e-claim/CreateNewClaim.vue';

export default {
  name: 'TestinSg',
  components: {
    CreateNewClaim,
      
    
  },
  data() {
    return {
      claims: []
    };
  },
methods: {
  handleFormData(formData) {
    this.claims.push(formData);
    console.log('Received form data', formData);  // Add this line
  }

}
  // ...
};
</script>