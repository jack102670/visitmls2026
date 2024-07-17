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
                    <div>
                      <label
                        class="block text-sm font-semibold text-gray-600 dark:text-gray-200"
                        >Profile Picture</label
                      >
                      <input type="file" @change="onProfilePictureChange" />
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
                  <label class="block text-sm font-semibold text-gray-600 dark:text-gray-200">Bank Name</label>
                  <select v-model="user.bank_name" class="block w-full px-4 py-2 mt-1 border rounded-md dark:bg-gray-800 dark:text-gray-300">
                    <option v-for="option in bankOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
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
            alert(response.data.message || "Failed to update. Please try again.");
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
      formData.append("profile_picture", this.dataURLtoBlob(this.profile_picture));
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
      if (this.cropper) {
        const canvas = this.cropper.getCroppedCanvas();
        this.profile_picture = canvas.toDataURL("image/png");
        this.showCropper = false;
        this.cropper.destroy();
      }
    },
  },
};
</script>
