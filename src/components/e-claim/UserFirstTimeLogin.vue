<template>
  <main
    class="flex-1 overflow-x-hidden overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto"
  >
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 relative dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <!-- Form -->
        <div
          class="relative overflow-hidden mt-1 max-w-4xl p-6 bg-white border-2 border-e-gray-200 rounded-md dark:bg-gray-800"
        >
          <h2
            class="text-3xl font-bold text-gray-700 capitalize dark:text-white"
          >
            Activate Your Profile
          </h2>

          <!--Note for Activation-->
          <section>
            <h1 class="mb-4 text-gray-500 text-md">
              Note: Please fill in all the mandatory fields to activate your
              profile.
            </h1>
            <hr class="" />
          </section>

          <form @submit.prevent="handleSubmit">
            <div class="mt-4">
              <label class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                >Profile Picture</label
              >
              <div class="flex items-center mt-2">
                <img
                  :src="profilePicture || defaultProfilePicture"
                  alt="Profile Picture"
                  class="w-24 h-24 rounded-full border-2 border-gray-200"
                />
                <div class="ml-4">
                  <input
                    type="file"
                    @change="onProfilePictureChange"
                    class="block w-full text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                  <button
                    @click="deleteProfilePicture"
                    class="mt-2 text-red-500 transition-colors duration-200 dark:hover:text-red-300 dark:text-gray-300 hover:text-red-300 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="fullName"
                >
                  Full Name<span class="text-red-500">*</span>
                </label>
                <input
                  v-model="user.fullName"
                  id="fullName"
                  type="text"
                  required
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                   />
              </div>

              <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="branch"
                >
                  Branch
                </label>
                <input
                  v-model="user.branch"
                  id="branch"
                  type="text"
                  disabled
                  class="block w-full px-4 py-2 mt-1 mb-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="department"
                >
                  Department
                </label>
                <input
                  v-model="user.department"
                  id="department"
                  type="text"
                  disabled
                  class="block w-full px-4 py-2 mt-1 mb-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="staffId"
                >
                  Staff ID
                </label>
                <input
                  v-model="user.staffId"
                  id="staffId"
                  type="text"
                  disabled
                  class="block w-full px-4 py-2 mt-1 mb-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="workEmail"
                >
                  Work Email<span class="text-red-500">*</span>
                </label>
                <input
                  v-model="user.workEmail"
                  id="workEmail"
                  type="email"
                  required
                  class="block w-full px-4 py-2 mt-1 mb-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="phoneNumber"
                >
                  Phone Number
                </label>
                <input
                  v-model="user.phoneNumber"
                  id="phoneNumber"
                  type="text"
                  class="block w-full px-4 py-2 mt-1 mb-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="bankName"
                >
                  Bank Name<span class="text-red-500">*</span>
                </label>
                <select
                  v-model="user.bankName"
                  id="bankName"
                  class="block w-full px-4 py-2 mt-1 mb-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                >
                  <option
                    v-for="option in bankOptions"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </option>
                </select>
              </div>

              <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="bankNumber"
                >
                  Bank Account Number<span class="text-red-500">*</span>
                </label>
                <input
                  v-model="user.bankNumber"
                  id="bankNumber"
                  type="number"
                  required
                  class="block w-full px-4 py-2 mt-1 mb-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="spouse"
                >
                  Spouse
                </label>
                <input
                  v-model="user.spouse"
                  id="spouse"
                  type="text"
                  class="block w-full px-4 py-2 mt-1 mb-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="homeAddress"
                >
                  Home Address
                </label>
                <textarea
                  v-model="user.homeAddress"
                  id="homeAddress"
                  type="text"
                  class="block w-full px-4 py-2 mt-1 mb-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  row="4"
                ></textarea>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="reportingManager"
                >
                  Reporting Manager (ID)
                </label>
                <input
                  v-model="user.reportingManagerID"
                  id="reportingManagerID"
                  type="text"
                  disabled
                  class="block w-full px-4 py-2 mt-1 mb-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="reportingManagerDepartment"
                >
                  Reporting Manager(Department)
                </label>
                <input
                  v-model="user.reportingManagerDepartment"
                  id="reportingManagerDepartment"
                  type="text"
                  disabled
                  class="block w-full px-4 py-2 mt-1 mb-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div class="mt-6 flex justify-end">
              <button
                type="submit"
                class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { bankOptions } from "@/javascript/eClaimOptions.js";

export default {
  data() {
    return {
      user: {},
      bankOptions: bankOptions,
      profilePicture: null,
      defaultProfilePicture: require("@/assets/images/profile.png"),
    };
  },

  created() {
    this.fetchHrData();
  },

  methods: {
    fetchHrData() {
      this.user.branch = "Branch Name";
      this.user.department = "Department Name";
      this.user.staffId = "123456";
      this.user.reportingManagerID = "Manager ID";
      this.user.reportingManagerDepartment = "Manager Department";
    },

    onProfilePictureChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.profilePicture = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },

    deleteProfilePicture() {
      this.profilePicture = null;
    },

    handleSubmit() {
      console.log("User data saved:", this.user);
      localStorage.setItem("userProfile", JSON.stringify(this.user));
      this.$router.push("/profile");
    },
  },
};
</script>