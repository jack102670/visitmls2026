<template>
  <main
    class="flex-1 overflow-x-hidden overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto"
  >
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 relative dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <div
          class="relative overflow-hidden mt-1 max-w-4xl p-6 bg-white border-2 border-e-gray-200 rounded-md dark:bg-gray-800"
        >
          <h2
            v-if="status === '0'"
            class="text-3xl font-bold text-gray-700 capitalize dark:text-white"
          >
            Activate Your Profile
          </h2>
          <h2
            v-else
            class="text-3xl font-bold text-gray-700 capitalize dark:text-white"
          >
            Profile Page
          </h2>

          <section>
            <h1 v-if="status === '0'" class="mb-4 text-gray-500 text-md">
              Note: Please fill in all the mandatory fields to activate your
              profile.
            </h1>
            <hr class="" />
          </section>

          <form @submit.prevent="verifyAndSaveData()">
            <div class="mt-4">
              <label class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                >Profile Picture</label
              >
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
              <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="spouse"
                  >Spouse</label
                >
                <input
                  v-model="user.spouse"
                  id="spouse"
                  type="text"
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="phonenumber"
                  >Phone Number</label
                >
                <input
                  v-model="user.phone_number"
                  id="phone_number"
                  type="number"
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="home_address"
                >
                  Home Address
                </label>
                <textarea
                  v-model="user.home_address"
                  id="home_address"
                  type="text"
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  row="4"
                ></textarea>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="reporting_to"
                >
                  Reporting Manager (Employee ID)
                </label>
                <input
                  v-model="user.reporting_to"
                  id="reporting_to"
                  type="text"
                  disabled
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="reporting_to_dept"
                >
                  Reporting Manager(Department)
                </label>
                <input
                  v-model="user.reporting_to_dept"
                  id="reporting_to_dept"
                  type="text"
                  disabled
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div class="mt-6 flex justify-end">
              <div class="flex flex-row-reverse">
                <button
                  type="submit"
                  class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                >
                <h1 v-if="status===0">Verify</h1> <h1 v-else>Update</h1>
                </button>
                <!-- <button
                @click="uploadimg()"
                type="button"
                class="mr-4 px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Save Picture
              </button> -->
              </div>
            </div>

            <!-- OTP Modal -->
            <div v-if="showOtpModal" class="fixed z-10 inset-0 overflow-y-auto">
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
                      We’ve sent a code to
                      <strong>{{ user.email_address }}</strong
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
                        Wait
                        <span class="underline">{{ timer }} seconds</span> to
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

            <!-- OTP Request Modal -->
            <div
              v-if="showRequestOtpModal"
              class="fixed z-10 inset-0 overflow-y-auto"
            >
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
                  >&#8203;</span
                >

                <div
                  class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
                >
                  <button
                    @click="closeRequestOtpModal"
                    type="button"
                    class="absolute top-0 right-0 mt-4 mr-4 text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    <span class="sr-only">Close</span>
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  <div>
                    <h3 v-if="status === 0" class="text-xl leading-6 font-medium text-gray-900">
                      Request OTP Code for Account Activation
                    </h3>
                    <h3  v-else class="text-xl leading-6 font-medium text-gray-900">
                      Request OTP Code for Email Verification
                    </h3>
                    <p class="mt-4 mb-8 text-md text-gray-500">
                      To complete your profile activation, please request
                      One-Time Password (OTP) and it will be sent to
                      <strong>{{ user.email_address }}</strong
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

            <div
              v-if="showSuccessNotification"
              class="fixed top-4 right-4 p-4 bg-green-500 text-white rounded-lg shadow-lg"
            >
              Activation successful! Redirecting...
            </div>
          </form>
           <!-- Loading Animation -->
        <div
          class="w-screen h-screen fixed z-40 flex justify-center items-center top-0 left-0"
          v-if="loading && !approveSuccess"
        >
          <div class="absolute w-screen h-screen bg-gray-900 opacity-10"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            class="w-24 h-24 z-50"
          >
            <circle
              transform="rotate(0)"
              transform-origin="center"
              fill="none"
              stroke="blue"
              stroke-width="10"
              stroke-linecap="round"
              stroke-dasharray="230 1000"
              stroke-dashoffset="0"
              cx="100"
              cy="100"
              r="70"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0"
                to="360"
                dur="2"
                repeatCount="indefinite"
              ></animateTransform>
            </circle>
          </svg>
        </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { bankOptions } from "@/javascript/eClaimOptions.js";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";
import axios from "axios";
import { store } from "@/views/store.js";

export default {
  data() {
    return {
      user: {
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
      loading: false,
      approveSuccess: false,
      profile_picture: null,
      bankOptions: bankOptions,
      tempImageUrl: "",
      cropper: null,
      showCropper: false,
      userDetails: "",
      defaultProfilePicture: require("@/assets/images/profile.png"),
      showRequestOtpModal: false,
      showOtpModal: false,
      showSuccessNotification: false,
      otp: "",
      timer: 0,
      timerInterval: null,
      status: "",
      tempEmail: "",
    };
  },

  created() {
    this.userDetails = store.getSession().userDetails;
    console.log(this.userDetails);
    this.fetchHrData();
    this.addEventListeners();
  },

  methods: {
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
          } else if (response.data.status_code === "400") {
            // console.log("Successfully Updated:", response.data.message);
        
            alert(
              response.data.result || "Failed to update. Please try again."
            );
            // Additional logic here for successful update
          } else {
            console.error("Backend error:", response.data.message);
           
            alert(
              response.data.message || "Failed to update. Please try again."
            );
            // Additional error handling logic here
          }
          this.loading = false;
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
            this.status = user.account_status;
            this.tempEmail = user.email_address;
          }
          console.log("HR data:", this.tempEmail);
        })
        .catch((error) => {
          console.error("Error fetching HR data:", error);
        });
    },

    uploadimg() {
      console.log("Profile picture value:", this.profile_picture); // Debugging line
      if (!this.profile_picture) {
        // alert("Please select a profile picture.");
        return;
      }

      const formData = new FormData();
      formData.append(
        "profile_picture",
        this.dataURLtoBlob(this.profile_picture)
      );
      formData.append("emp_id", this.user.emp_id);

      axios
        .put("http://172.28.28.91:97/api/User/UpdateImage", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          this.loading = false;
          console.log("File uploaded successfully:", response.data);
        })
        .catch((error) => {
          this.loading = false;
          if (error.response) {
            console.error("Error status:", error.response.status);
            console.error("Error data:", error.response.data);
          } else if (error.request) {
            console.error("No response received:", error.request);
          } else {
            console.error("Error", error.message);
          }
          console.error("Error config:", error.config);
        });
    },
    dataURLtoBlob(dataurl) {
      const arr = dataurl.split(",");
      const mime = arr[0].match(/:(.*?);/)[1];
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    },

    onProfilePictureChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.tempImageUrl = e.target.result;
          this.showCropper = true;
          this.$nextTick(() => {
            const image = this.$refs.image;
            this.cropper = new Cropper(image, {
              aspectRatio: 1,
              viewMode: 1,
              autoCropArea: 1,
            });
          });
        };
        reader.readAsDataURL(file);
      }
    },
    cropImage() {
      this.profile_picture = this.cropper.getCroppedCanvas().toDataURL();

      this.showCropper = false;
      this.cropper.destroy();
    },
    cancelCrop() {
      this.showCropper = false;
      this.cropper.destroy();
    },

    deleteProfilePicture() {
      this.profile_picture = null;
    },

    checkUserStatusAndShowModal() {
      const username_id = store.getSession().userDetails.userId;
      axios
        .get(`http://172.28.28.91:97/api/User/GetEmployeeById/${username_id}`)
        .then((response) => {
          // Assuming the API response structure has a status field
          const userStatus = response.data.result[0].account_status;
          console.log("User status:", userStatus);

          if (userStatus === "0") {
            // User has not completed their OTP, show the modal
            this.loading = false;
            this.showRequestOtpModal = true;
          } else {
            // User has completed their OTP, do not show the modal
            this.loading = false;
            this.showRequestOtpModal = false;
          }
        })
        .catch((error) => {
          console.error("There was an error fetching the user status:", error);
          // Handle error or set a default behavior if the API call fails
        });
    },

    verifyAndSaveData() {
      // this.saveUserData();
      this.loading = true;
      if (this.tempImageUrl) {
        this.uploadimg();
      } else if (this.status === "0") {
        this.updateEmployeeData();
      } else {
        this.updateEmployeeDataNewEmail();
      }

      // this.saveProfilePicture();
      this.checkUserStatusAndShowModal();
    },
    // update utk email baru dan lama / bila dia update emel then akan kena verify balik
    updateEmployeeDataNewEmail() {
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
        .put("http://172.28.28.91:97/api/User/UpdateProfile", employeeData)
        .then((response) => {
          console.log("Response:", response);
          if (response.data.message === "200") {
            console.log(":", response.data.message);
          
            alert(response.data.message);
            // Additional logic here for successful update
         
          } else if (response.data.message.includes("OTP is sent to")) {
            console.log(":otp is sent", response.data.message);
            alert(response.data.message);
        
            this.showOtpModal = true;
            this.startTimer();

            // Additional logic here for successful update
          } else if (response.data.status_code === "400") {
            // console.log("Successfully Updated:", response.data.message);
           
            alert(
              response.data.result || "Failed to update. Please try again."
            );
            // Additional logic here for successful update
          } else {
         
            console.error("Backend error:", response.data.message);
            alert(
              response.data.message || "Failed to update. Please try again."
            );
            // Additional error handling logic here
          }
          this.loading = false;
        })
        .catch((error) => {
          console.error("Error updating employee data:", error);
          this.loading = false;
          alert("An error occurred while updating employee data.");
          // Additional error handling logic here
        });
    },

    async sendOtp() {
      this.loading = true;
      try {
        const response = await axios.post(
          "http://172.28.28.91:97/api/User/GenerateOTP",
          { email: this.user.email_address }
        );

        if (response.data.status_code === "200") {
          console.log("OTP sent successfully:", response.data);
          this.showRequestOtpModal = false;
          alert("OTP has been sent to your email.");
          this.showOtpModal = true;
          this.startTimer();
        } else {
          console.error("Backend error:", response.data);
          alert(
            response.data.message || "Failed to send OTP. Please try again."
          );
        }
        this.loading = false;
      } catch (error) {
        console.error("Error sending OTP:", error);
        if (error.response) {
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
          alert(
            `An error occurred: ${
              error.response.data.message ||
              "Unable to send OTP. Please try again."
            }`
          );
        } else if (error.request) {
          console.error("Request data:", error.request);
          alert(
            "No response from the server. Please check your network connection and try again."
          );
        } else {
          console.error("Error message:", error.message);
          alert(`Error: ${error.message}`);
        }
      }
    },

    addEventListeners() {
      window.addEventListener("beforeunload", this.beforeUnloadHandler);
    },

    beforeUnloadHandler(event) {
      if (this.showOtpModal) {
        const confirmationMessage =
          "You have not completed OTP verification. Are you sure you want to leave?";
        event.returnValue = confirmationMessage;
        return confirmationMessage;
      }
    },

    async verifyOtp() {
      try {
        const baseUrl = "http://172.28.28.91:97";
        const email = encodeURIComponent(this.user.email_address);
        const otp = encodeURIComponent(this.otp);
        const url = `${baseUrl}/api/User/ValidateOTP?email=${email}&otp=${otp}`;

        const response = await axios.post(url, {});

        if (response.data.status_code === "200") {
          clearInterval(this.timerInterval);
          alert(response.data.result || "OTP verified successfully.");
          this.showOtpModal = false;
          this.showSuccessNotification = true;
          setTimeout(() => {
            this.showSuccessNotification = false;
            this.$router.push("/homepage");
          }, 3000);
          window.removeEventListener("beforeunload", this.beforeUnloadHandler);
        } else {
          alert("Invalid OTP. Please try again.");
        }
      } catch (error) {
        console.error("Error verifying OTP:", error);
        if (error.response) {
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
          alert(
            `An error occurred: ${
              error.response.data.message ||
              "Unable to verify OTP. Please try again."
            }`
          );
        } else if (error.request) {
          console.error("Request data:", error.request);
        } else {
          console.error("Error message:", error.message);
          alert(`Error: ${error.message}`);
        }
      }
    },

    requestNewOtp() {
      if (this.timer === 0) {
        axios
          .post("http://172.28.28.91:97/api/User/GenerateOTP", {
            email: this.user.email_address,
          })
          .then((response) => {
            if (response.data.status_code === "200") {
              this.otp = "";
              alert("A new OTP has been sent to your email.");
              this.startTimer();
            } else {
              alert(
                response.data.message || "Failed to send OTP. Please try again."
              );
            }
          })
          .catch((error) => {
            console.error("Error sending OTP:", error);
            if (error.response) {
              console.error("Response data:", error.response.data);
              console.error("Response status:", error.response.status);
              console.error("Response headers:", error.response.headers);
              alert(
                `An error occurred: ${
                  error.response.data.message ||
                  "Unable to send OTP. Please try again."
                }`
              );
            } else if (error.request) {
              console.error("Request data:", error.request);
              alert(
                "No response from the server. Please check your network connection and try again."
              );
            } else {
              console.error("Error message:", error.message);
              alert(`Error: ${error.message}`);
            }
          });
      }
    },

    // handleSubmit() {
    //   this.user.profile_picture = this.profile_picture;
    //   console.log("User data saved:", this.user);
    //   localStorage.setItem("userProfile", JSON.stringify(this.user));
    //   this.$router.push("/profile");
    // },

    closeRequestOtpModal() {
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

    beforeDestroy() {
      window.removeEventListener("beforeunload", this.beforeUnloadHandler);
    },
  },
};
</script>
