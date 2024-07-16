<template>
  <main
    class="flex-1 overflow-x-hidden overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto"
  >
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 relative dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <div
          class="relative overflow-hidden mt-1 max-w-4xl p-6 bg-white border-2 border-gray-200 rounded-md dark:bg-gray-800"
        >
          <div class="profile-container">
            <h2
              class="text-3xl font-bold text-gray-700 capitalize dark:text-white mb-4"
            >
              Profile
            </h2>
            <hr class="" />

            <div class="mt-4">
              <div class="flex items-center mt-2">
                <img
                  :src="user.profile_picture || defaultProfilePicture"
                  alt="Profile Picture"
                  class="w-24 h-24 rounded-full border-2 border-gray-200"
                />
              </div>

              <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <p>
                  <span class="font-semibold text-gray-600 dark:text-gray-200"
                    >Full Name</span
                  >
                  <input
                    type="text"
                    disabled
                    class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    v-model="user.name"
                  />
                </p>
                <p>
                  <span class="font-semibold text-gray-600 dark:text-gray-200"
                    >Branch</span
                  >
                  <input
                    type="text"
                    disabled
                    class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    v-model="user.branch"
                  />
                </p>
                <p>
                  <span class="font-semibold text-gray-600 dark:text-gray-200"
                    >Department</span
                  >
                  <input
                    type="text"
                    disabled
                    class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    v-model="user.department"
                  />
                </p>
                <p>
                  <span class="font-semibold text-gray-600 dark:text-gray-200"
                    >Staff ID</span
                  >
                  <input
                    type="text"
                    disabled
                    class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    v-model="user.emp_id"
                  />
                </p>
                <p>
                  <span class="font-semibold text-gray-600 dark:text-gray-200"
                    >Work Email</span
                  >
                  <input
                    type="email"
                    disabled
                    class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    v-model="user.email_address"
                  />
                </p>
                <p>
                  <span class="font-semibold text-gray-700 dark:text-gray-200"
                    >Phone Number</span
                  >
                  <input
                    type="text"
                    disabled
                    class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    v-model="user.phone_number"
                  />
                </p>
                <p>
                  <span class="font-semibold text-gray-700 dark:text-gray-200"
                    >Bank Name</span
                  >
                  <input
                    type="text"
                    disabled
                    class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    v-model="user.bank_name"
                  />
                </p>
                <p>
                  <span class="font-semibold text-gray-700 dark:text-gray-200"
                    >Bank Account Number</span
                  >
                  <input
                    type="text"
                    disabled
                    class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    v-model="user.bank_number"
                  />
                </p>
                <p>
                  <span class="font-semibold text-gray-700 dark:text-gray-200"
                    >Spouse</span
                  >
                  <input
                    type="text"
                    disabled
                    class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    v-model="user.spouse"
                  />
                </p>
              </div>
              <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
                <p>
                  <span class="font-semibold text-gray-700 dark:text-gray-200"
                    >Home Address</span
                  >
                  <textarea
                    type="text"
                    row="4"
                    disabled
                    class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    v-model="user.home_address"
                  />
                </p>
              </div>
              <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <p>
                  <span class="font-semibold text-gray-700 dark:text-gray-200"
                    >Reporting Manager (ID)</span
                  >
                  <input
                    type="text"
                    disabled
                    class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    v-model="user.reporting_to"
                  />
                </p>
                <p>
                  <span class="font-semibold text-gray-700 dark:text-gray-200"
                    >Reporting Manager (Department)</span
                  >
                  <input
                    type="text"
                    disabled
                    class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    v-model="user.reporting_to_dept"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { store } from "@/views/store.js";

export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem("userProfile")) || {
        name: "",
        branch: "",
        department: "",
        emp_id: "",
        reporting_to: "",
        reporting_to_dept: "",
        email_address: "",
        phone_number: "",
        bank_name: "",
        bank_number: "",
        spouse: "",
        home_address: "",
        profile_picture: null,
      },
      defaultProfilePicture: require("@/assets/images/profile.png"),
    };
  },

  created() {
    this.userDetails = store.getSession().userDetails;
    console.log(this.userDetails);
    this.fetchHrData();
  },

  methods: {
    onProfilePictureChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.profile_picture = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },

    updateEmployeeData() {
      const employeeData = {
        emp_id: this.user.emp_id,
        name: this.user.name,
        bank_name: this.user.bank_name,
        bank_number: String(this.user.bank_number),
        email_address: this.user.email_address,
        home_address: this.user.home_address,
        spouse: this.user.spouse,
        phone_number: this.user.phone_number,
      };
console.log("Employee Data:", employeeData);
      axios
        .put("http://172.28.28.91:97/api/User/UpdateEmployee", employeeData)
        .then((response) => {
          console.log("Response:", response);
          if (response.data.status_code === "200") {
            console.log("Successfully Updated:", response.data.message);
            alert("Successfully Updated.");
            // Additional logic here for successful update
          } else {
            console.error("Backend error:", response.data.message);
            alert(response.data.message || "Failed to update. Please try again.");
            // Additional error handling logic here
          }
        })
        .catch((error) => {
          console.error("Error updating employee data:", error);
          alert("An error occurred while updating employee data.");
          // Additional error handling logic here
        });
    },
  
    fetchHrData() {
      const username_id = store.getSession().userDetails.userId;
      axios
        .get(`http://172.28.28.91:97/api/User/GetEmployeeById/${username_id}`)
        .then((response) => {
          const data = response.data.result;
          if (data && data.length > 0) {
            const user = data[0];
            this.user.branch = user.branch;
            this.user.department = user.department;
            this.user.emp_id = user.emp_id;
            this.user.reporting_to = user.reporting_to;
            this.user.reporting_to_dept = user.reporting_to_dept;
            this.profile_picture = user.profile_picture;
            this.user.name = user.name;
            this.user.branch = user.branch;
            this.user.email_address = user.email_address;
            this.user.phone_number = user.phone_number;
            this.user.bank_name = user.bank_name;
            this.user.bank_number = user.bank_number;
            this.user.spouse = user.spouse;
            this.user.home_address = user.home_address;
          }
        })
        .catch((error) => {
          console.error("Error fetching HR data:", error);
        });
    },
  },
};
</script>