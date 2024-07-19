<template>
  <div
    class="register min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"
  >
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
      ></div>
      <div
        class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20"
      >
        <form @submit.prevent="signUp()">
          <div class="max-w-md mx-auto">
            <div>
              <h1 class="text-2xl font-semibold">Vendor Sign Up</h1>
            </div>
            <div class="divide-y divide-gray-200">
              <div
                class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
              >
                <div class="relative">
                  <input
                    required
                    v-model="userEmail"
                    autocomplete="off"
                    id="email"
                    name="email"
                    type="text"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                    placeholder="Email address"
                  />
                  <label
                    for="email"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >Email</label
                  >
                </div>
                <div class="relative">
                  <input
                    required
                    v-model="userName"
                    autocomplete="off"
                    id="name"
                    name="name"
                    type="text"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                    placeholder="Name"
                  />
                  <label
                    for="name"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >Name</label
                  >
                </div>
                <div class="relative">
                  <input
                    required
                    v-model="userCompany"
                    autocomplete="off"
                    id="Cname"
                    name="Cname"
                    type="Ctext"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                    placeholder="Company Name"
                  />
                  <label
                    for="Cname"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >Company Name</label
                  >
                </div>
                <div class="relative">
                  <input
                    required
                    v-model="pktStaffName"
                    autocomplete="off"
                    id="pktStaffName"
                    name="pktStaffName"
                    type="text"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                    placeholder=" PKT Staff Name"
                  />
                  <label
                    for="pktStaffName"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    > PKT Staff Name (PIC)</label
                  >
                </div>
                <div class="relative">
                  <input
                    required
                    v-model="userPassword"
                    autocomplete="off"
                    id="password"
                    name="password"
                    type="password"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                    placeholder="Password"
                  />
                  <label
                    for="password"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >Password</label
                  >
                </div>
                <div class="relative">
                  <input
                    required
                    v-model="userConfirmPassword"
                    autocomplete="off"
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                    placeholder="Confirm Password"
                  />
                  <label
                    for="confirmPassword"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >Confirm Password</label
                  >
                </div>
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="username"
                  >Supporting Document<span class="text-red-500"
                    >*</span
                  ></label
                >

                <!-- component -->

                <div>
                  <div class="pt-3">
                    <FilePond
                    required
                      ref="pond"
                      name="file"
                      :server="null"
                      :allowMultiple="true"
                      :maxFileSize="'5MB'"
                      :acceptedFileTypes="[
                        'image/png',
                        'image/jpeg',
                        'application/pdf',
                        'application/vnd.ms-excel',
                        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                      ]"
                      @addfile="handleAddFile"
                      @removefile="handleRemoveFile"
                    />
                  </div>
                  <!-- component -->
                </div>
              </div>

              <!-- Add v-model to other inputs as needed -->
            </div>

                <div class="relative">
                  <div v-show="showSignUpButton">
                    <button
                      type="submit"
                      class="bg-blue-500 text-white rounded-md px-2 py-1 items-center"
                    >
                      Register
                    </button>
                  </div>
                  <div v-show="showLoadingButton">
                    <button
                      disabled=""
                      type="button"
                      class="text-center rounded-2xl bg-cyan-800 shadow-md p-3 my-1 w-full text-white py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 items-center"
                    >
                      <svg
                        aria-hidden="true"
                        role="status"
                        class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="#1C64F2"
                        ></path>
                      </svg>
                      Loading....
                    </button>
                  </div>
                </div>
                <p class="text-sm text-gray-500 mt-10">
                  Already has an account?
                  <router-link
                    :to="{ name: 'Login' }"
                    class="text-[#4F46E5] font-bold"
                    >Sign In</router-link
                  >
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import vueFilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";

import FilePondPluginFilePoster from "filepond-plugin-file-poster";
import FilePondPluginFileRename from "filepond-plugin-file-rename";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
const FilePond = vueFilePond(
  FilePondPluginFilePoster,
  FilePondPluginFileRename,
  FilePondPluginFileValidateSize,
  FilePondPluginFileValidateType
);
import axios from "axios";
export default {
  name: "VendorRegister",
  components: {
    FilePond
    
  },
  data() {
    return {
      showSignUpButton: true,
      showLoadingButton: false,
      userEmail: "",
      userName: "",
      userPassword: "",
      userConfirmPassword: "",
      userCompany: "",
      pktStaffName:"",
      files: [],
    };
  },

  methods: {
    uploadMultiImage() {
      let formData = new FormData();
      this.files.forEach((file) => {
        formData.append("filecollection", file);
      });
      console.log("userid uniqcode:", this.userEmail, this.uniqueCode);
      const url = `http://172.28.28.91:8085/api/Files/MultiUploadImage/${this.userEmail}/${this.uniqueCode}`;

      axios
        .post(url, formData)
        .then((response) => {
          this.$router.push("/Vendorlogin");
          console.log("Upload successful:", response.data);
        })
        .catch((error) => {
          if (error.response) {
            console.error("Error data:", error.response.data);
            console.error("Error status:", error.response.status);
          } else if (error.request) {
            console.error("Error request:", error.request);
          } else {
            console.error("Error message:", error.message);
          }
        });
    },
    handleAddFile(error, fileItem) {
      if (!error) {
        console.log("Added file name:", fileItem.file.name);
        this.files.push(fileItem.file);
      }
    },

    handleRemoveFile(error, fileItem) {
      this.files = this.files.filter((file) => file !== fileItem.file);
    },
    generateUniqueCode() {
      // Check if this.userId is defined
      if (this.userEmail) {
        // Use part of the userId for uniqueness, e.g., 4 characters
        const userEmailFragment = this.userEmail.substring(0, 4);

        // Generate a random number and pad it to 2 characters
        const randomNumber = Math.floor(Math.random() * 100)
          .toString()
          .padStart(2, "0");

        // Create a timestamp and take the last 2 digits for uniqueness
        const timestamp = Date.now().toString().slice(-2);

        // Construct the uniqueCode
        this.uniqueCode = `SIGNUP${userEmailFragment}${randomNumber}${timestamp}`;
        console.log("Unique Code:", this.uniqueCode);
        return this.uniqueCode;
      } else {
        console.error("User ID is undefined.");
        // You may want to handle this case differently based on your application logic.
        return "";
      }
    },
    signUp() {
      alert("Please make sure your email address is correct and valid. This is to ensure you can receive email notifications");
      this.showSignUpButton = false;
      this.showLoadingButton = true;
      axios
        .post("http://172.28.28.91:8085/api/VendorCredentials/VENDOR SIGN UP", {
          userEmail: this.userEmail,
          userName: this.userName,
          userPassword: this.userPassword,
          userConfirmPassword: this.userConfirmPassword,
          userCompany: this.userCompany,
          pktStaffName: this.pktStaffName,
          uniqueCode: this.generateUniqueCode(),
        })
        .then((response) => {
          alert(response.data.message);
          this.uploadMultiImage();
          console.log("Server response:", response.data);
        })
        .catch((error) => {
          if (error.response) {
            //alert(response.data.message);
            this.showSignUpButton = true;
            this.showLoadingButton = false;
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
        });
    },
  },
};
</script>

<style>
.register {
  background: url("../assets/images/The-Ship-Campus-70.jpg");
  background-size: cover;
}
</style>
