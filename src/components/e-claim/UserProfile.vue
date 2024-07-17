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
              <div class="mt-4">
                <label
                  class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                  >Profile Picture</label
                >
                <div class="flex items-center mt-2">
                  <img
                    :src="profile_picture || defaultProfilePicture"
                    alt="Profile Picture"
                    class="w-24 h-24 rounded-full border-2 border-gray-200"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label
                    class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                    for="name"
                    >Full Name</label
                  >
                  <input
                    v-model="user.name"
                    id="name"
                    type="text"
                    disabled
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
                    class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                    class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                    class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label
                    class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                    for="email_address"
                    >Work Email</label
                  >
                  <input
                    v-model="user.email_address"
                    id="email_address"
                    type="email"
                    disabled
                    class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label
                    class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                    for="phone_number"
                    >Phone Number</label
                  >
                  <input
                    v-model="user.phone_number"
                    id="phone_number"
                    type="text"
                    disabled
                    class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label
                    class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                    for="bank_name"
                    >Bank Name</label
                  >
                  <input
                    v-model="user.bank_name"
                    id="bank_name"
                    type="text"
                    disabled
                    class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label
                    class="ml-2 font-semibold text-gray-600 dark:text-gray-200"
                    for="bank_number"
                    >Bank Account Number</label
                  >
                  <input
                    v-model="user.bank_number"
                    id="bank_number"
                    type="type"
                    disabled
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
                    disabled
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
                    disabled
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
                    class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                    class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
              </div>

              <div class="mt-6 flex justify-end">
                <button
                  @click="showUpdateModal = true"
                  type="button"
                  class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                >
                  Update
                </button>
              </div>

              <!-- Update Modal -->
              <div
                v-if="showUpdateModal"
                class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75"
              >
                <div
                  class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full"
                >
                  <h2
                    class="text-2xl font-bold mb-4 text-gray-700 dark:text-white"
                  >
                    Update Profile
                  </h2>
                  <div class="space-y-4">
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
                    <div>
                      <label
                        class="block text-sm font-semibold text-gray-600 dark:text-gray-200"
                        >Phone Number</label
                      >
                      <input
                        v-model="user.phone_number"
                        type="text"
                        class="block w-full px-4 py-2 mt-1 border rounded-md dark:bg-gray-800 dark:text-gray-300"
                      />
                    </div>
                    <div>
                      <label
                        class="block text-sm font-semibold text-gray-600 dark:text-gray-200"
                        >Bank Name</label
                      >
                      <select
                        v-model="user.bank_name"
                        class="block w-full px-4 py-2 mt-1 border rounded-md dark:bg-gray-800 dark:text-gray-300"
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
                        class="block text-sm font-semibold text-gray-600 dark:text-gray-200"
                        >Bank Account Number</label
                      >
                      <input
                        v-model="user.bank_number"
                        type="text"
                        class="block w-full px-4 py-2 mt-1 border rounded-md dark:bg-gray-800 dark:text-gray-300"
                      />
                    </div>
                    <div>
                      <label
                        class="block text-sm font-semibold text-gray-600 dark:text-gray-200"
                        >Home Address</label
                      >
                      <textarea
                        v-model="user.home_address"
                        class="block w-full px-4 py-2 mt-1 border rounded-md dark:bg-gray-800 dark:text-gray-300"
                      ></textarea>
                    </div>
                    <div>
                      <label
                        class="block text-sm font-semibold text-gray-600 dark:text-gray-200"
                        >Spouse</label
                      >
                      <input
                        v-model="user.spouse"
                        type="text"
                        class="block w-full px-4 py-2 mt-1 border rounded-md dark:bg-gray-800 dark:text-gray-300"
                      />
                    </div>
                  </div>
                  <div class="mt-4 flex justify-end space-x-4">
                    <button
                      @click="showUpdateModal = false"
                      class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                    <button
                      @click="updateEmployeeData"
                      class="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>

              <!-- <div class="mt-6 flex justify-end">
                <div class="flex flex-row-reverse">
                  <button
                    @click="updateData"
                    type="button"
                    class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                  >
                    Update
                  </button>
                </div>
              </div>-->
            </div>
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
      defaultProfilePicture: require("@/assets/images/profile.png"),
      showUpdateModal: false,
      bankOptions: bankOptions,
    };
  },
  created() {
    this.userDetails = store.getSession().userDetails;
    console.log(this.userDetails);
    this.fetchHrData();
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
            this.showUpdateModal = false;
          } else {
            console.error("Backend error:", response.data.message);
            alert(
              response.data.message || "Failed to update. Please try again."
            );
          }
        })
        .catch((error) => {
          console.error("Error updating employee data:", error);
          alert("An error occurred while updating employee data.");
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

    uploadimg() {
      console.log("Profile picture value:", this.profile_picture);
      if (!this.profile_picture) {
        return;
      }
      const formData = new FormData();
      formData.append(
        "profile_picture",
        this.dataURLtoBlob(this.profile_picture)
      );
      formData.append("emp_id", store.getSession().userDetails.userId);
      axios
        .put("http://172.28.28.91:97/api/User/UpdateImage", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          console.log("File uploaded successfully:", response.data);
        })
        .catch((error) => {
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
  },
};
</script>
