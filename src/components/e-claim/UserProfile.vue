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
              <label class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                >Profile Picture</label
              >
              <div class="flex items-center mt-2">
                <img
                  :src="user.profilePicture || defaultProfilePicture"
                  alt="Profile Picture"
                  class="w-24 h-24 rounded-full border-2 border-gray-200"
                />
              </div>

              <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <p>
                  <span
                    class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                    >Full Name</span
                  >
                  <input
                    type="text"
                    disabled
                    class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    v-model="user.fullName"
                  />
                </p>
                <p>
                  <span
                    class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
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
                  <span
                    class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
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
                  <span
                    class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                    >Staff ID</span
                  >
                  <input
                    type="text"
                    disabled
                    class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    v-model="user.staffId"
                  />
                </p>
                <p>
                  <span
                    class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                    >Work Email</span
                  >
                  <input
                    type="email"
                    disabled
                    class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    v-model="user.workEmail"
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
                    v-model="user.phoneNumber"
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
                    v-model="user.bankName"
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
                    v-model="user.bankNumber"
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
                    v-model="user.homeAddress"
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
              @click="showRequestOtpModal = true"
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

          <!-- Email Verification Modal -->
          <div
            v-if="showEmailVerificationModal"
            class="fixed z-10 inset-0 overflow-y-auto"
          >
            <div
              class="flex items-center justify-center min-h-screen text-center"
            >
              <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <div
                class="inline-block bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6"
              >
                <div>
                  <h3 class="text-xl leading-6 font-medium text-gray-900">
                    Email Verification Required
                  </h3>
                  <p class="mt-4 mb-8 text-md text-gray-500">
                    Please verify your email address
                    <strong>{{ user.workEmail }}</strong> to complete the
                    activation process and gain access to all features of the
                    system.
                  </p>
                  <div class="flex justify-between">
                    <button
                      type="button"
                      @click="
                        showRequestOtpModal = true;
                        showEmailVerificationModal = false;
                      "
                      class="mt-4 text-blue-500 underline mt-2 cursor-pointer"
                    >
                      Click here to verify your email
                    </button>
                  </div>
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
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem("userProfile")) || {},
      profilePicture: null,
      defaultProfilePicture: require("@/assets/images/profile.png"),
      showRequestOtpModal: false,
      showOtpModal: false,
      showSuccessNotification: false,
      showEmailVerificationModal: false,
      otp: "",
      timer: 0,
      timerInterval: null,
    };
  },

  methods: {
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
        localStorage.setItem("emailVerificationStatus", "verified");
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

  mounted() {
    const emailVerificationStatus = localStorage.getItem(
      "emailVerificationStatus"
    );
    if (emailVerificationStatus === "pending") {
      this.showEmailVerificationModal = true;
    }
  },
};
</script>
