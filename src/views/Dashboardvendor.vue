<template>
  <main
    class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64"
  >
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <!-- <div class="text-center space-y-12 ml-5 ">
          <div class="flex text-3xl font-bold text-blue-900 ">
            Services Portal
            <div
              class="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden"
            >
              <span class="animate-word col-span-full row-span-full text-blue-800"
                >Security</span
              >
              <span class="animate-word-delay-1 col-span-full row-span-full text-blue-800"
                >Safety</span
              >
              <span class="animate-word-delay-2 col-span-full row-span-full ml-4 text-blue-800"
                >Maintenance</span
              >
            </div>
          </div>
          
        </div> -->
        <div class="flex justify-start flex-col ml-5">
          <h2 class="text-3xl font-bold text-blue-900 dark:text-white">
            Service Portal
          </h2>
          <h3 class="text-xl font-bold text-blue-800 dark:text-white">
            Security Safety Maintenance
          </h3>
        </div>
        <hr class="h- mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700" />
        <div class="pt-0 container px-6 py-1 mx-auto">
          <div
            class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3"
          >
            <div
              class="p-6 space-y-3 h-20 border-4 bg-gray-200 dark:bg-gray-900 dark:border-gray-700 rounded-xl relative"
            >
              <h1
                class="text-xl font-semibold text-gray-700 capitalize dark:text-slate-300"
              >
                On-Going Request
              </h1>

              <a
                href="#"
                class="inline-flex p-6 absolute -top-3 -right-6 text-blue-100 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-blue-500 hover:underline dark:hover:text-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span
                  class="text-blue-700 dark:text-white mx-1 top-5 font-semibold text-2xl absolute"
                  >3</span
                >
              </a>
            </div>

            <!-- <buttom
              @click="showContent"
              class="p-6 space-y-3 h-20 border-4 bg-white dark:border-gray-700 dark:bg-gray-900 rounded-xl relative"
            >
              <h1
                class="text-xl font-semibold text-gray-700 capitalize dark:text-slate-300"
              >
                New Request
              </h1>

              <a
                href=""
                class="inline-flex p-6 absolute -top-3 -right-6 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </buttom> -->
            <Button @click="showContent" class="relative max-w-full rounded">
              <div
                class="flex items-center justify-center p-6 space-y-3 h-20 border-4 text-xl dark:bg-gray-900 dark:border-gray-700 rounded-full px-8 py-4 bg-[#210e81] border text-white"
              >
                <span class="mr-2 text-slate-100 hover:text-blue-200"
                  >New Request</span
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  data-slot="icon"
                  class="w-8 h-8 hover:text-blue-200"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </Button>
          </div>
        </div>
        <div class="container mx-auto">
          <div
            v-if="showAdditionalContent"
            class="mt-1 p-6 dark:bg-gray-800 rounded-lg grid grid-cols-1 xl:mt-10 xl:gap-5 md:grid-cols-2 xl:grid-cols-3 gap-3"
          >
            <!-- Dropdown Trigger -->
            <div
              class="flex justify-center p-3 text-6xl dark:bg-gray-700 bg-gray-100 border-2 border-gray-200 rounded-xl"
            >
              <label
                for="location"
                class="block text-sm font-medium my-auto text-gray-700 dark:text-gray-300"
                >Location:</label
              >
              <select
                v-model="selectedLocation"
                @change="onLocationChange"
                id="location"
                class="mt-1 block w-full py-2 px-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option
                  v-for="location in locations"
                  :key="location.id"
                  :value="location.id"
                >
                  {{ location.name }}
                </option>
              </select>
            </div>

            <!-- Dropdown Form -->
            <div
              
              class="flex justify-center p-3 text-6xl dark:bg-gray-700 bg-gray-100 border-2 border-gray-200 rounded-xl"
            >
              <label
                for="department"
                class="block text-sm font-medium text-gray-700 my-auto dark:text-gray-300"
                >Department:</label
              >
              <select
                v-model="selectedDepartment"
                @change="onDepartmentChange"
                id="department"
                class="mt-1 block w-full py-2 px-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option
                  v-for="department in departments"
                  :key="department.id"
                  :value="department.id"
                >
                  {{ department.name }}
                </option>
              </select>
            </div>

            <div
              class="flex justify-center p-3 text-6xl dark:bg-gray-700 bg-gray-100 border-2 border-gray-200 rounded-xl"
            >
              <label
                for="TypeOfRequest"
                class="block text-sm font-medium text-gray-700 my-auto dark:text-gray-300"
                >Type Of Request:</label
              >
              <select
                v-model="selectedTypeOfRequest"
                @change="onTypeOfRequestChange"
                id="TypeOfRequest"
                class="mt-1 block w-full py-2 px-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option
                  v-for="TypeOfRequest in TypeOfRequests"
                  :key="TypeOfRequest.id"
                  :value="TypeOfRequest.id"
                >
                  {{ TypeOfRequest.name }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <!-- Display a list of movies from the TMDb API -->
      </div>
    </div>
  </main>
  <router-view></router-view>
</template>

<script>
// NewrequestViews.js
// NewrequestViews.js
export default {
  name: "NewrequestvendorViews",
  data() {
    return {
      showAdditionalContent: false,
      selectedLocation: null,
      locations: [
        { id: "1", name: "HQ" },
        { id: "2", name: "OAH" },
        { id: "3", name: "KULIM HUB" },
        // Add more locations as needed
      ],
      departments: [], // Initialize as empty, it will be populated based on the selected location
      selectedDepartment: null,
      selectedTypeOfRequest: null,
      TypeOfRequests: [],
    };
  },
  methods: {
    showContent() {
      this.showAdditionalContent = !this.showAdditionalContent;
    },
    onLocationChange() {
      // Reset selected department and departments when location changes
      this.selectedDepartment = null;
      this.departments = [];

      // Log to console to check if the method is being called
      console.log("Location changed. Updating departments.");

      // Your logic to update departments based on the selected location
      this.updateDepartments();
    },

    updateDepartments() {
      // Example: Populate departments based on the selected location
      switch (this.selectedLocation) {
        case "1": // HQ
          this.departments = [
         
            { id: "Safety", name: "Safety" },
  
            // Add more departments as needed
          ];
          break;
        case "2": // OAH
          this.departments = [
            // Define departments for OAH
          ];
          break;
        case "3": // KULIM HUB
          this.departments = [
            // Define departments for KULIM HUB
          ];
          break;
        // Add more cases for additional locations

        default:
          break;
      }

      // Log to console to check if departments are being updated
      console.log("Departments updated:", this.departments);
    },

    onDepartmentChange() {
      this.TypeOfRequests = []; // Reset TypeOfRequests when the department changes

      // Your logic to update TypeOfRequests based on the selected department
      this.updateTypeOfRequests();
    },

    updateTypeOfRequests() {
      // Example: Populate TypeOfRequests based on the selected department
      switch (this.selectedDepartment) {
        case "Security":
          this.TypeOfRequests = [
            { id: "1", name: "Badge Request" },
            { id: "2", name: "Incident Report" },
            { id: "3", name: "CCTV Footage View" },
            { id: "4", name: "Visitor/Escort" },
            { id: "5", name: "Testkids" },
            { id: "6", name: "Mask" },
            // Add more TypeOfRequests as needed
          ];
          break;
        case "Safety":
          this.TypeOfRequests = [
            { id: "1", name: "PTW" },
       
            // Add more TypeOfRequests as needed
          ];
          break;
        case "Maintenance":
          this.TypeOfRequests = [
            { id: "1", name: "Badge Request" },
            { id: "2", name: "Incident Report" },
            { id: "3", name: "CCTV Footage View" },
            { id: "4", name: "Visitor/Escort" },
            { id: "5", name: "Mask/Testkids" },
            { id: "6", name: "Mask" },
            // Add more TypeOfRequests as needed
          ];
          break;
        // Add more cases for additional departments

        default:
          break;
      }
    },

    onTypeOfRequestChange() {
      // Redirect to different child routes based on the selected type of request
      switch (this.selectedTypeOfRequest) {
        case "1":
          // Redirect to the default child route
          this.$router.push({ name: "DashboardvendorPTW" });
          break;
        case "5":
          // Redirect to the 'movie' child route
          this.$router.push({ name: "Teskitform" });
          break;
        case "3":
          // Redirect to the 'movie' child route
          this.$router.push({ name: "cctvform" });
          break;
        case "2":
          // Redirect to the 'movie' child route
          this.$router.push({ name: "Incidentreportform" });
          break;
        case "4":
          // Redirect to the 'movie' child route
          this.$router.push({ name: "visitorescorttour" });
          break;
        case "6":
          // Redirect to the 'movie' child route
          this.$router.push({ name: "Maskform" });
          break;
        // Add more cases for additional types of requests

        default:
          break;
      }
    },
    // Your other methods
  },
};
</script>
<style scoped>
@keyframes word {
  0% {
    transform: translateY(100%);
  }
  15% {
    transform: translateY(-10%);
    animation-timing-function: ease-out;
  }

  20% {
    transform: translateY(0);
  }

  40%,
  100% {
    transform: translateY(-110%);
  }
}

.animate-word {
  animation: word 7s infinite;
}
.animate-word-delay-1 {
  animation: word 7s infinite;
  animation-delay: -1.4s;
}
.animate-word-delay-2 {
  animation: word 7s infinite;
  animation-delay: -2.8s;
}
.animate-word-delay-3 {
  animation: word 7s infinite;
  animation-delay: -4.2s;
}
.animate-word-delay-4 {
  animation: word 7s infinite;
  animation-delay: -5.6s;
}
</style>
