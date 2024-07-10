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
          class="relative overflow-hidden mt-5 max-w-4xl p-6 bg-white border-2 border-e-gray-200 rounded-md dark:bg-gray-800"
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
            <div class="pt-4">
              <div class="m-2">
                <div class="mt-4">
                  <label
                    class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
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
                      class="block w-full px-4 py-2 mt-1 mb-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                      Reporting Manager
                    </label>
                    <input
                      v-model="user.reportingManager"
                      id="reportingManager"
                      type="text"
                      disabled
                      class="block w-full px-4 py-2 mt-1 mb-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                </div>
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

        <!-- OTP Request Modal -->
        <div
          v-if="showRequestOtpModal"
          class="fixed z-10 inset-0 overflow-y-auto"
        >
          <div
            class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
          >
            <div class="fixed inset-0 transition-opacity" aria-hidden="true">
              <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              class="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
              >&#8203;</span
            >

            <div
              class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
            >
              <div>
                <h3 class="text-xl leading-6 font-medium text-gray-900">
                  Request OTP Code for Account Activation
                </h3>
                <p class="mt-4 mb-8 text-md text-gray-500">
                  To complete your profile activation, please request One-Time
                  Password (OTP) and it will be sent to
                  <strong>{{ user.workEmail }}</strong
                  >.
                </p>
              </div>
              <div class="mt-5 sm:mt-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  @click="sendOtp"
                  class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-700 text-base font-bold text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Request OTP
                </button>
                <button
                  type="button"
                  @click="cancelRequestOtp"
                  class="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- OTP Modal -->
        <div v-if="showOtpModal" class="fixed z-10 inset-0 overflow-y-auto">
          <div
            class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
          >
            <div class="fixed inset-0 transition-opacity" aria-hidden="true">
              <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              class="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
              >&#8203;</span
            >

            <div
              class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
            >
              <div>
                <h3 class="text-xl leading-6 font-medium text-gray-900">
                  Enter OTP Code
                </h3>
                <p class="mt-4 mb-4 text-md text-gray-500">
                  We’ve sent a code to <strong>{{ user.workEmail }}</strong
                  >.
                </p>
                <div class="mt-2">
                  <input
                    type="text"
                    v-model="otp"
                    class="block w-full px-4 py-2 mt-1 mb-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    placeholder="Enter OTP"
                  />
                </div>
                <p class="mt-2 text-sm text-gray-500">
                  Didn't get a code?
                  <span v-if="timer > 0">
                    Wait {{ timer }} seconds to resend.
                  </span>
                  <a
                    v-else
                    href="#"
                    @click.prevent="requestNewOtp"
                    class="mb-8 text-blue-500 underline"
                  >
                    Click here to resend.
                  </a>
                </p>
              </div>
              <div class="mt-5 sm:mt-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  @click="verifyOtp"
                  class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-700 text-base font-bold text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Verify
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="showSuccessNotification"
          class="fixed top-4 right-4 p-4 bg-green-500 text-white rounded-lg shadow-lg"
        >
          Activation successful! Redirecting...
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
      showRequestOtpModal: false,
      showOtpModal: false,
      timer: 0,
      timerInterval: null,
      showSuccessNotification: false,
      profilePicture: null,
      defaultProfilePicture: require("@/assets/images/profile.png"),
    };
  },

  created() {
    this.fetchHrData();
  },

  methods: {
    fetchHrData() {
      this.user.department = "HR Department";
      this.user.staffId = "123456";
      this.user.reportingManager = "Manager ID";
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
      this.showRequestOtpModal = true;
    },

    sendOtp() {
      this.showRequestOtpModal = false;
      this.showOtpModal = true;
      alert("OTP has been sent to your email.");
      this.startTimer();
    },

    verifyOtp() {
      if (this.otp === "123456") {
        clearInterval(this.timerInterval);
        this.showOtpModal = false;
        this.showSuccessNotification = true;
        setTimeout(() => {
          this.showSuccessNotification = false;
          this.$router.push("/homepage");
        }, 3000);
      } else {
        alert("Invalid OTP. Please try again.");
      }
    },

    requestNewOtp() {
      if (this.timer === 0) {
        this.otp = "";
        alert("A new OTP has been sent to your email.");
        this.startTimer();
      }
    },

    cancelRequestOtp() {
      this.showRequestOtpModal = false;
    },

    startTimer() {
      this.timer = 120;
      clearInterval(this.timerInterval);
      this.timerInterval = setInterval(() => {
        if (this.timer > 0) {
          this.timer--;
        } else {
          clearInterval(this.timerInterval);
        }
      }, 1000);
    },
  },

  beforeUnmount() {
    clearInterval(this.timerInterval);
  },
};
</script>