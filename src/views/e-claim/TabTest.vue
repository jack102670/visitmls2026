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
            <label class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                >Profile Picture</label>
              <div class="flex items-center mt-2">
                <img
                  :src="profile_picture || defaultProfilePicture"
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
                    type="button"
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

              <!-- Image Crop Modal -->
            <div v-if="showCropper" class="fixed z-50 inset-0 overflow-y-auto">
              <div
                class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
              >
                <div
                  class="fixed inset-0 transition-opacity"
                  aria-hidden="true"
                >
                  <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span
                  class="hidden sm:inline-block sm:align-middle sm:h-screen"
                  aria-hidden="true"
                ></span>

                <div
                  class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                >
                  <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                      <div
                        class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10"
                      >
                        <svg
                          class="h-6 w-6 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6H20M4 10H20M4 14H20M4 18H20"
                          ></path>
                        </svg>
                      </div>
                      <div
                        class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
                      >
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                          Crop Image
                        </h3>
                        <div class="mt-2">
                          <img ref="image" :src="tempImageUrl" class="w-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
                  >
                    <button
                      @click="cropImage"
                      type="button"
                      class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Proceed
                    </button>
                    <button
                      @click="cancelCrop"
                      type="button"
                      class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:w-auto sm:text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="name"
                  >Full Name<span class="text-red-500">*</span></label
                >
                <input
                  v-model="user.name"
                  id="name"
                  type="text"
                  required
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="branch"
                  >Branch</label
                >
                <input
                  v-model="user.branch"
                  id="branch"
                  type="text"
                  disabled
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="department"
                  >Department</label
                >
                <input
                  v-model="user.department"
                  id="department"
                  type="text"
                  disabled
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="emp_id"
                  >Staff ID</label
                >
                <input
                  v-model="user.emp_id"
                  id="emp_id"
                  type="text"
                  disabled
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="email_address"
                  >Work Email<span class="text-red-500">*</span></label
                >
                <input
                  v-model="user.email_address"
                  id="email_address"
                  type="email"
                  required
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <!-- <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="phone_number"
                  >Phone Number</label
                >
                <input
                  v-model="user.phone_number"
                  id="phone_number"
                  type="text"
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div> -->
              <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="phone_number"
                  >Phone Number<span class="text-red-500">*</span></label
                >
                <input
                  v-model="user.phone_number"
                  id="phone_number"
                  required
                  type="number"
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="bank_name"
                  >Bank Name<span class="text-red-500">*</span></label
                >
                <select
                  v-model="user.bank_name"
                  id="bank_name"
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                  for="bank_number"
                  >Bank Account Number<span class="text-red-500">*</span></label
                >
                <input
                  v-model="user.bank_number"
                  id="bank_number"
                  type="number"
                  required
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <!-- <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="phone_number"
                  >Phone Number<span class="text-red-500">*</span></label
                >
                <input
                  v-model="user.phone_number"
                  id="phone_number"
                  required
                  type="number"
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div> -->
              <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="ic_number"
                  >IC Number<span class="text-red-500">*</span></label
                >
                <input
                  v-model="user.ic_number"
                  id="ic_number"
                  required
                  type="number"
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="limit_outpatient"
                >
                  Limit Amount (Handphone)
                </label>
                <input
                  v-model="user.limit_amount"
                  id="limit_outpatient"
                  type="text"
                  disabled
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="limit_outpatient"
                >
                  Limit Amount (Outpatient)
                </label>
                <input
                  v-model="user.limit_outpatient"
                  id="limit_outpatient"
                  type="text"
                  disabled
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="limit_medical_dental"
                >
                  Limit Amount (Medical-Check Up/Dental)
                </label>
                <input
                  v-model="user.limit_medical_dental"
                  id="limit_medical_dental"
                  type="text"
                  disabled
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
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
                    v-model="user.reportingManagerID"
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
                    v-model="user.reportingManagerDepartment"
                  />
                </p>
              </div>
            </div>
          </div>

          <div class="mt-5 sm:mt-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              @click="handleVerifyClick"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-700 text-base font-bold text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Verify
            </button>
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
                      Wait <span class="underline">{{ timer }} seconds</span> to
                      resend.
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
  </main>
</template>

<script>
export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem("userProfile")) || {},
      defaultProfilePicture: require("@/assets/images/profile.png"),
      showRequestOtpModal: false,
      showOtpModal: false,
      showSuccessNotification: false,
      otp: "",
      timer: 0,
      timerInterval: null,
    };
  },

   mounted() {
    this.addEventListeners();
    this.checkOtpExpiration();
  },

  beforeUnmount() {
    this.removeEventListeners();
  },

  methods: {
    addEventListeners() {
      window.addEventListener("beforeunload", this.beforeUnloadHandler);
    },

    removeEventListeners() {
      window.removeEventListener("beforeunload", this.beforeUnloadHandler);
    },

    beforeUnloadHandler(event) {
      if (this.showOtpModal) {
        const confirmationMessage = "You have not completed OTP verification. Are you sure you want to leave?";
        event.preventDefault(); // For Safari
        event.returnValue = confirmationMessage; // For other browsers
        return confirmationMessage;
      }
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

    sendOtp() {
      const otpExpiration = Date.now() + 120000; // 2 minutes from now
      localStorage.setItem("otpExpiration", otpExpiration);
      this.showRequestOtpModal = false;
      this.showOtpModal = true;
      alert("OTP has been sent to your email.");
      this.timer = 120;
      this.startTimer();
    },

    verifyOtp() {
      if (this.otp === "123456") {
        localStorage.removeItem("otpExpiration");
        clearInterval(this.timerInterval);
        this.showOtpModal = false;
        this.showSuccessNotification = true;
        setTimeout(() => {
          this.showSuccessNotification = false;
          this.$router.push("/homepage");
        }, 3000);
         this.removeEventListeners();
      } else {
        alert("Invalid OTP. Please try again.");
      }
    },

    beforeDestroy() {
      window.removeEventListener("beforeunload", this.beforeUnloadHandler);
    },

    handleVerifyClick() {
      const otpExpiration = localStorage.getItem("otpExpiration");
      const currentTime = Date.now();

      if (otpExpiration && currentTime < otpExpiration) {
        const remainingTime = Math.ceil((otpExpiration - currentTime) / 1000);
        this.timer = remainingTime;
        this.showOtpModal = true;
        this.startTimer();
      } else {
        this.showRequestOtpModal = true;
      }
    },

    requestNewOtp() {
      if (this.timer === 0) {
        this.otp = "";
        alert("A new OTP has been sent to your email.");
        this.startTimer();
      }
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

    checkOtpExpiration() {
      const otpExpiration = localStorage.getItem("otpExpiration");
      if (otpExpiration) {
        const currentTime = Date.now();
        if (currentTime < otpExpiration) {
          const remainingTime = Math.ceil((otpExpiration - currentTime) / 1000);
          this.timer = remainingTime;
          this.showOtpModal = true;
          this.startTimer();
        }
      }
    },
  },
};
</script>