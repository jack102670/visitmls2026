<template>
  <section class="flex">
    <div class="w-full">
      <div class="grid grid-cols-8 pt-4 px-4 gap-2">
        <div class="col-span-2 bg-white border-[1px] justify-center items-center rounded-md">
          <div class="flex flex-col justify-center items-start p-4 gap-2 space-y-2">
            <div>
              <h1 class="font-bold text-2xl text-primary">
                PKT GROUP COMPANIES
              </h1>
              <p class="text-sm text-primary font-semibold">Other employee E-Forms</p>
            </div>

              <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-8 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">Request Type
                <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4" />
                </svg>
              </button>

              <!-- Dropdown menu -->
              <div id="dropdown"
                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                  <li>
                    <a href="#" @click="redirectTo('personnel-requisition')"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Personnel
                      Requisition</a>
                  </li>
                  <li>
                    <a href="#" @click="redirectTo('employee-transfer')"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Employee
                      Transfer</a>
                  </li>
                  <li>
                    <a href="#" @click="redirectTo('on-job-training')"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">On Job
                      Training </a>
                  </li>
                  <li>
                    <a href="#" @click="redirectTo('training-evaluation')"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Training
                      Evaluation</a>
                  </li>
                  <li>
                    <a href="#" @click="redirectTo('orientation-checklist')"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Orientation
                      Checklist</a>
                  </li>
                  <li>
                    <a href="#" @click="redirectTo('job-description')"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Job
                      Description</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-span-6 bg-white border-[1px] rounded-md justify-center items-center p-2 space-y-2">
            <h4 class="text-md font-bold text-primary">Request Status</h4>
            <div class="flex grid grid-cols-5 gap-2 text-center">
              <div class="bg-transparent rounded-md border-[2px] border-pending p-2 ">
                <p class="text-4xl text-primary font-semibold">0</p>
                <p class="text-sm text-primary font-semibold">Pending</p>
              </div>
              <div class="bg-transparent rounded-md border-[2px] border-rejected p-2">
                <p class="text-4xl text-primary font-semibold">0</p>
                <p class="text-sm text-primary font-semibold">Rejected</p>
              </div>
              <div class="bg-transparent rounded-md border-[2px] border-inProgress p-2">
                <p class="text-4xl text-primary font-semibold">0</p>
                <p class="text-sm text-primary font-semibold">In Progress</p>
              </div>
              <div class="bg-transparent rounded-md border-[2px] border-verified p-2">
                <p class="text-4xl text-primary font-semibold">0</p>
                <p class="text-sm text-primary font-semibold">Verified</p>
              </div>
              <div class="bg-transparent rounded-md border-[2px] border-primary p-2">
                <p class="text-4xl text-primary font-semibold">0</p>
                <p class="text-sm text-primary font-semibold">Completed</p>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-8 px-4 pb-4 pt-2 gap-2">
          <div class="col-span-8 text-center bg-white min-h-full border-[1px] rounded-md p-4">
            <TableRequest />
          </div>
        </div>
      </div>
    </section>
    <NewReqModal v-if="showModal" @close="showModal = false"  />
</template>

<script>
  import TableRequest from "../../../components/EFormComponent/DashboardComponent/EFormTable.vue";
  import NewReqModal from "../../../components/EFormComponent/DashboardComponent/NewReqModal.vue";
  export default {
    components: {
      TableRequest,
      NewReqModal,
    },
    data() {
      return {
        loading: false,
        showModal: false,
      };
    },
    methods: {
      redirectTo(routeName) {
        this.$router.push({ name: routeName });
      },
    },
    mounted() {
      console.log('Mounted hook triggered'); // Debugging
      document.body.style.backgroundColor = '#F8FBFB'; // Apply page-specific background color
    },
    beforeUnmount() { // Vue 3 lifecycle hook for cleanup
      console.log('Unmount hook triggered'); // Debugging
      document.body.style.backgroundColor = '#CED1DA'; // Reset to default background color
    }
  };
</script>
