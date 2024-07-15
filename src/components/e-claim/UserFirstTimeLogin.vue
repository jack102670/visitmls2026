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
                  for="fullName"
                  >Full Name<span class="text-red-500">*</span></label
                >
                <input
                  v-model="user.name"
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
                  for="staffId"
                  >Staff ID</label
                >
                <input
                  v-model="user.emp_id"
                  id="staffId"
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

              <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="phoneNumber"
                  >Phone Number</label
                >
                <input
                  v-model="user.phone_number"
                  id="phoneNumber"
                  type="text"
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  for="bankName"
                  >Bank Name<span class="text-red-500">*</span></label
                >
                <select
                  v-model="user.bank_name"
                  id="bankName"
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
                  for="bankNumber"
                  >Bank Account Number<span class="text-red-500">*</span></label
                >
                <input
                  v-model="user.bank_number"
                  id="bankNumber"
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
                  v-model="user.home_address"
                  id="homeAddress"
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
                  for="reportingManager"
                >
                  Reporting Manager (Employee ID)
                </label>
                <input
                  v-model="user.reportingManagerID"
                  id="reportingManagerID"
                  type="text"
                  disabled
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                  class="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";

export default {
  data() {
    return {
      user: {},
      bankOptions: bankOptions,
      profilePicture: null,
      tempImageUrl: "",
      cropper: null,
      showCropper: false,
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
      this.user.emp_id = "123456";
      this.user.reportingManagerID = "Manager Employee ID";
      this.user.reportingManagerDepartment = "Manager Department";
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
      if (this.cropper) {
        this.profilePicture = this.cropper.getCroppedCanvas().toDataURL();
        this.cropper.destroy();
        this.cropper = null;
        this.showCropper = false;
      }
    },
    cancelCrop() {
      if (this.cropper) {
        this.cropper.destroy();
        this.cropper = null;
        this.showCropper = false;
      }
    },

    deleteProfilePicture() {
      this.profilePicture = null;
    },

    handleSubmit() {
       try {
        const userProfileString = JSON.stringify(this.userProfile);
        localStorage.setItem('userProfile', userProfileString);
      } catch (error) {
        console.error('Failed to save user profile:', error);
      }
      this.$router.push("/profile");
    },
  },
};
</script>