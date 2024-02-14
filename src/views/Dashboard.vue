<template>
  <main
    class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64"
  >
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <div class="flex justify-between">
          <!-- <div class="text-center space-y-12 ml-5 ">
      <div class="flex text-3xl font-bold text-blue-900 ">
        Services Portal
        <div class="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
          <span class="animate-word col-span-full row-span-full text-blue-800">Security</span>
          <span class="animate-word-delay-1 col-span-full row-span-full text-blue-800">Safety</span>
          <span class="animate-word-delay-2 col-span-full row-span-full ml-4 text-blue-800">Maintenance</span>
        </div>
      </div>
    </div> -->
          <div class="flex justify-start flex-col ml-5">
            <h2 class="text-3xl font-bold text-blue-900 dark:text-white">
              Services Portal System 
            </h2>
            <h3 class="text-xl font-bold text-blue-800 dark:text-white">
              Security, Safety, Maintenance.
            </h3>
          </div>
          <hr
            class="h- mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700"
          />
          <div class="flex pt-0 justify-end">
            <div class="flex pt-5 gap-12">
              <div class="flex flex-col ml-5">
  <button
    class="w-64 relative p-3 rounded-2xl border-4 text-xl relative bg-gray-200 dark:bg-gray-900 dark:border-gray-700 rounded-3xl border text-white"
  >
   
    <div class="absolute flex bg-blue-100 p-5 w-16 h-16 -right-1 -top-3 rounded-full">
      <span class="mx-auto my-auto text-3xl text-blue-600">{{ requesters.length }}</span>
    </div>
    <span class="flex justify-start text-gray-700 capitalize dark:text-slate-300">On-Going Request</span>
    <div class="flex">

    </div>
  </button>
</div>

              <!-- <div
                class="w-64 h-10 border-4 bg-gray-200 dark:bg-gray-900 dark:border-gray-700 rounded-3xl relative"
              >
                <a
                  href="#"
                  class="p-6 absolute top-0 -right-1 text-blue-100 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-blue-500 hover:underline dark:hover:text-blue-500"
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
                    >{{ requesters.length }}</span
                  >
                </a>
                <h1
                  class="text-xl font-semibold text-gray-700 capitalize dark:text-slate-300"
                >
                  On-Going Request
                </h1>
              </div> -->

              <div class="flex flex-col ml-5">
                <button
                  @click="showContent"
                  class="w-64 p-3 rounded-2xl tems-center border-4 text-xl dark:bg-gray-900 dark:border-gray-700 bg-[#210e81] border text-white"
                >
                  <div class="flex justify-center">
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
                </button>
              </div>
              <!-- <button class="bg-red-500 grid">test</button> -->
            </div>
          </div>
        </div>

        <div class="container mx-auto">
          <div
            v-if="showAdditionalContent"
            class="mt-1 p-1 dark:bg-gray-800 rounded-lg grid grid-cols-1 xl:mt-10 xl:gap-5 md:grid-cols-2 xl:grid-cols-3 gap-3"
          >
            <!-- Dropdown Trigger -->
            <div
              class="flex justify-center p-3 text-6xl dark:bg-gray-700 bg-gray-100 border-2 border-gray-200 rounded-xl"
            >
              <label
                for="location"
                class="block text-sm font-medium my-auto text-gray-700 dark:text-gray-300"
                >LOCATION:</label
              >
              <select
                v-model="selectedLocation"
                @change="
                  onLocationChange();
                  SetToStore();
                "
                id="location"
                class="mt-1 block w-full py-2 px-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-sm"
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
                >DEPARTMENT:</label
              >
              <select
                v-model="selectedDepartment"
                @change="onDepartmentChange"
                id="department"
                class="mt-1 text-sm block w-full py-2 px-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                >TYPE OF REQUEST:</label
              >
              <select
                v-model="selectedTypeOfRequest"
                @change="onTypeOfRequestChange"
                id="TypeOfRequest"
                class="mt-1 block text-sm w-full py-2 px-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
import axios from "axios";
import { store } from "../views/store.js";
// NewrequestViews.js
// NewrequestViews.js
export default {
  name: "NewrequestViews",
  data() {
    return {
      requesters: [],
      OGR: null,

      showAdditionalContent: false,
      selectedLocation: null,
      locations: [
        { id: "1", name: "HQ" },
        { id: "2", name: "OAH" },
        { id: "3", name: "KULIM HUB" },
        { id: "4", name: "12 WAVES" },
        { id: "5", name: "THE SHIP CAMPUS" },
        { id: "6", name: "BKH" },
        { id: "7", name: "JOHOR OPS" },
        { id: "8", name: "LOT 9" },
        { id: "9", name: "KUANTAN OPS" },
        { id: "10", name: "DAISO OPS" },
        { id: "11", name: "8 WAVES" },
        // Add more locations as needed
      ],
      departments: [], // Initialize as empty, it will be populated based on the selected location
      selectedDepartment: null,
      selectedTypeOfRequest: null,
      TypeOfRequests: [],
    };
  },

  mounted() {
    // this.role = store.getRole();
    this.fetchRequesters();
    // this.userDetails = store.getSession().userDetails;
    // this.token = store.data.token;
    // this.OGR = store.getOGR();
    // console.log("OGR from store:", store.getOGR());
    // if (this.role === "user") {
    //   this.$router.push("/Dashboard");
    // }
    // else{
    //   this.$router.push("/Managerequest");
    // }
  },
  // beforeCreate(){
  //   if (!localStorage.getItem('reloaded2')) {
  //     localStorage.setItem('reloaded2', 'true');
  //     window.location.reload();
  //   } else {
  //     localStorage.removeItem('reloaded2');
  //     // Additional code for your component
  //   }
  // },
  methods: {
    SetToStore() {
      store.setSelectedLocation(this.selectedLocation, this.locations);
    },
    fetchRequesters() {
      const userDetails = store.getSession().userDetails;
      const role = store.getRole();
      let url = "";

      if (role === "user") {
        url = `http://172.28.28.91:8085/api/Main/GetAllRequests/${userDetails.userId}`;
      } else if (role === "vendor") {
        url = `http://172.28.28.91:8085/api/Main/GetAllRequestsVendor/${userDetails.userId}`;
      } else {
        console.log("Role not authorized or role-specific URL not set");
        return;
      }

      console.log("Fetching requesters for role:", userDetails.role);
      axios
        .get(url)
        .then((response) => {
          this.requesters = response.data;
          console.log("Requesters on dashboard:", this.requesters);
          console.log("all", this.requesters.length);
          // this.OGR = this.requesters.length;
          // store.setOGR(this.OGR);
          // console.log("OGR set to:", this.OGR);
        })
        .catch((error) => {
          console.error("Error fetching requesters:", error);
        });
    },
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
      store.setSelectedLocation(this.selectedLocation, this.locations);
    },

    updateDepartments() {
      // Example: Populate departments based on the selected location
      switch (this.selectedLocation) {
        case "1": // HQ
          this.departments = [
            { id: "SECURITY", name: "SECURITY" },
            { id: "SAFETY", name: "SAFETY" },
            { id: "MAINTENANCE", name: "MAINTENANCE" },
            // Add more departments as needed
          ];
          break;
        case "2": // OAH
          this.departments = [
            { id: "SECURITY", name: "SECURITY" },
            { id: "SAFETY", name: "SAFETY" },
            { id: "MAINTENANCE", name: "MAINTENANCE" },
            // Add more departments as needed
          ];
          break;
        case "3": // KULIM HUB
          this.departments = [
            { id: "SECURITY", name: "SECURITY" },
            { id: "SAFETY", name: "SAFETY" },
            { id: "MAINTENANCE", name: "MAINTENANCE" },
            // Define departments for KULIM HUB
          ];
          break;
        case "4": // HQ
          this.departments = [
            { id: "SECURITY", name: "SECURITY" },
            { id: "SAFETY", name: "SAFETY" },
            { id: "MAINTENANCE", name: "MAINTENANCE" },
            // Add more departments as needed
          ];
          break;
        case "5": // HQ
          this.departments = [
            { id: "SECURITY", name: "SECURITY" },
            { id: "SAFETY", name: "SAFETY" },
            { id: "MAINTENANCE", name: "MAINTENANCE" },
            // Add more departments as needed
          ];
          break;
        case "6": // HQ
          this.departments = [
            { id: "SECURITY", name: "SECURITY" },
            { id: "SAFETY", name: "SAFETY" },
            { id: "MAINTENANCE", name: "MAINTENANCE" },
            // Add more departments as needed
          ];
          break;
        case "7": // HQ
          this.departments = [
            { id: "SECURITY", name: "SECURITY" },
            { id: "SAFETY", name: "SAFETY" },
            { id: "MAINTENANCE", name: "MAINTENANCE" },
            // Add more departments as needed
          ];
          break;
        case "8": // HQ
          this.departments = [
            { id: "SECURITY", name: "SECURITY" },
            { id: "SAFETY", name: "SAFETY" },
            { id: "MAINTENANCE", name: "MAINTENANCE" },
            // Add more departments as needed
          ];
          break;
        case "9": // HQ
          this.departments = [
            { id: "SECURITY", name: "SECURITY" },
            { id: "SAFETY", name: "SAFETY" },
            { id: "MAINTENANCE", name: "MAINTENANCE" },
            // Add more departments as needed
          ];
          break;
        case "10": // HQ
          this.departments = [
            { id: "SECURITY", name: "SECURITY" },
            { id: "SAFETY", name: "SAFETY" },
            { id: "MAINTENANCE", name: "MAINTENANCE" },
            // Add more departments as needed
          ];
          break;
        case "11": // HQ
          this.departments = [
            { id: "SECURITY", name: "SECURITY" },
            { id: "SAFETY", name: "SAFETY" },
            { id: "MAINTENANCE", name: "MAINTENANCE" },
            // Add more departments as needed
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
        case "SECURITY":
          this.TypeOfRequests = [
            { id: "1", name: "BADGE REQUEST FORM" },
            { id: "2", name: "INCIDENT REPORT FORM" },
            { id: "3", name: "CCTV FOOTAGE VIEWING FORM" },
            { id: "4", name: "VISITOR / ESCORT / TOUR FORM" },
            { id: "5", name: "TESTKITS REQUEST FORM" },
            { id: "6", name: "MASK REQUEST FORM" },
            // Add more TypeOfRequests as needed
          ];
          break;
        case "SAFETY":
          this.TypeOfRequests = [
            { id: "7", name: "INCIDENT REPORT" },
            // Add more TypeOfRequests as needed
          ];
          break;
        case "MAINTENANCE":
          this.TypeOfRequests = [
            {},

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
          this.$router.push({ name: "badgeform" });

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
        case "7":
          // Redirect to the 'movie' child route
          this.$router.push({ name: "Incidentreportsafety" });
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
