<template>
  <main class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto">
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <section class="max-w-4xl p-6 mx-auto bg-white border-2 border-e-gray-200 rounded-md dark:bg-gray-800">
          <h2 class="text-2xl font-bold text-gray-700 capitalize dark:text-white">
            BADGE REQUEST FORM {{ userDetails.userId }}
          </h2>
          <div class="pt-2">
            <hr class="" />
          </div>

          <form @submit.prevent="showModal">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="requesterName">Requester Name {{
                  formData.requesterName }}<span class="text-red-500">*</span></label>
                <input v-model="capitalizedRequesterName" id="requesterName" type="text" value=required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                <input v-model="branch" id="requesterName" type="hidden"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>

              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="department">Department<span
                    class="text-red-500">*</span></label>
                <select v-model="formData.department" id="department" required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                  <option value="" disabled selected></option>
                  <option v-for="department in departments" :key="department.id" :value="department.name">
                    {{ department.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="number">Phone number<span
                    class="text-red-500">*</span></label>
                <input v-model="formData.phonenumber" id="number" type="number" required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>

              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="formData.people">For<span
                    class="text-red-500">*</span>:
                  {{ formData.people }}</label>
                <div
                  class="flex justify-between w-full px-4 py-2 mt-2 text-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                  <div>
                    <input type="radio" id="staff" value="Staff" v-model="formData.people" />
                    <label class="ml-1" for="staff">Staff</label>
                  </div>
                  <div>
                    <input type="radio" id="contract" value="Contract" v-model="formData.people" />
                    <label class="ml-1" for="contract">Contract</label>
                  </div>
                </div>
              </div>

              <!-- Add v-model to other inputs as needed -->
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="username">Upload File List Of Name<span
                    class="text-red-500">*</span></label>

                <!-- component -->

                <div>
                  <Div class="pt-3">
                    <FilePond ref="pond" name="file" :server="null" :allowMultiple="true" :maxFileSize="'5MB'"
                      :acceptedFileTypes="['image/png', 'image/jpeg', 'application/pdf']" @addfile="handleAddFile"
                      @removefile="handleRemoveFile" />
                  </Div>
                  <!-- component -->
                </div>
              </div>

              <!-- Add v-model to other inputs as needed -->
            </div>

            <div class="flex justify-end mt-6">
              <button type="submit"
                class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Submit
              </button>
            </div>
          </form>

          <!-- Conditional rendering of the loading indicator -->

          <div v-if="isLoading" class="loading-indicator flex items-center justify-center min-h-screen"
            style="z-index: 9999">
            <div style="border-top-color: transparent" class="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin">
            </div>
            <p class="ml-2">Loading...</p>
          </div>
        </section>
      </div>
    </div>

    <Modal v-show="isModalVisible" @close="closeModal">
      <!-- header -->
      <template v-slot:header>
        <h1 class="font-bold text-xl">Confirmation</h1>
      </template>

      <!-- body -->
      <template v-slot:body>
        <!-- <p class="py-3 text-xs font-bold text-purple-900">
        Forgot your password?
      </p> -->
        <table class="w-full mt-4 bg-white border border-gray-300 divide-y divide-gray-300">
          <tr>
            <td class="py-2 px-4 font-medium">Requester Name:</td>
            <td class="py-2 px-4">{{ formData.requesterName }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 font-medium">Department:</td>
            <td class="py-2 px-4">{{ formData.department }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 font-medium">Phone Number:</td>
            <td class="py-2 px-4">{{ formData.phonenumber }}</td>
          </tr>

          <tr>
            <td class="py-2 px-4 font-medium">For:</td>
            <td class="py-2 px-4">{{ formData.people }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 font-medium">Files Upload:</td>
            <td class="py-2 px-4">
              <ul>
                <li v-for="fileName in uploadedFileNames" :key="fileName">
                  {{ fileName }}
                </li>
              </ul>
            </td>
          </tr>

          <!-- ... (Other modal content) ... -->

          <!-- ... (Other modal content) ... -->
        </table>
      </template>

      <!-- footer -->
      <template v-slot:footer>
        <div class="grid grid-cols-2 gap-3">
          <button type="button" class="rounded-2xl bg-gray-600 shadow-md p-3 my-1 w-full text-white">
            Cancel
          </button>
          <button type="button" @click="confirmFormSubmission"
            class="rounded-2xl bg-cyan-800 shadow-md p-3 my-1 w-full text-white">
            Confirm
          </button>
        </div>
        <div class="flex justify-end mt-6"></div>
      </template>
    </Modal>

    <!-- <div class="flex justify-end mt-6">
          <button
            type="submit"
            class="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
        </div> -->
  </main>
</template>

<script>
import { store } from "../views/store.js"
import * as template from "../javascript/department.js";
import axios from 'axios';
import vueFilePond from 'vue-filepond';
import 'filepond/dist/filepond.min.css';

import FilePondPluginFilePoster from 'filepond-plugin-file-poster';
import FilePondPluginFileRename from 'filepond-plugin-file-rename';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

const FilePond = vueFilePond(
  FilePondPluginFilePoster,
  FilePondPluginFileRename,
  FilePondPluginFileValidateSize,
  FilePondPluginFileValidateType
);
import Modal from "../components/vmodal.vue";


export default {
  name: "badgeformViews",
  components: {
    FilePond,
    Modal,
  },
  data() {
    return {

      isLoading: false,
      files: [],
     

      formData: {
        requesterName: "",
        department: "",
        phonenumber: "",

        people: "",
        userid: null,
        // Add more form fields here
      },
      userDetails: [],

      isModalVisible: false,
      departments: template.departments,
    };
  },
  computed: {
    capitalizedRequesterName: {
      get() {
        return this.formData.requesterName;
      },
      set(value) {
        this.formData.requesterName =
          value.charAt(0).toUpperCase() + value.slice(1);
      },
    },
  },
  methods: {

    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },

    handleAddFile(error, fileItem) {
      if (!error) {
        console.log('Added file name:', fileItem.file.name);
        this.files.push(fileItem.file);
      }
    },

    handleRemoveFile(error, fileItem) {
      this.files = this.files.filter(file => file !== fileItem.file);
    },
    generateUniqueCode() {
      // Check if this.userId is defined
      if (this.userDetails.userId) {
        // Use part of the userId for uniqueness, e.g., 4 characters
        const userIdFragment = this.userDetails.userId.substring(0, 4);

        // Generate a random number and pad it to 2 characters
        const randomNumber = Math.floor(Math.random() * 100).toString().padStart(2, '0');

        // Create a timestamp and take the last 2 digits for uniqueness
        const timestamp = Date.now().toString().slice(-2);

        // Construct the uniqueCode
        const uniqueCode = `BR${userIdFragment}${randomNumber}${timestamp}`;
        console.log('Unique Code:', uniqueCode);
        return uniqueCode;
      } else {
        console.error('User ID is undefined.');
        // You may want to handle this case differently based on your application logic.
        return '';
      }
    },

    confirmFormSubmission() {
      // Prepare the form data to be sent
      this.generateUniqueCode();
      (this.isLoading = true),
        // Send the POST request
        axios
          .post("http://172.28.28.91:8085/api/Main/InsertBadgeRequest", {
            requesterName: this.formData.requesterName,
            departmentName: this.formData.department,
            designationPeople: this.formData.people,
            phoneNumber: this.formData.phonenumber,
            uniqueCode: this.uniqueCode,
            userId: this.userDetails.userId,
            branch: this.branch,
          })
          .then((response) => {
            "Server response:", response.data;
            // Handle the response, such as showing a success message or resetting the form
            //myrequest.fetchRequesters();

            this.uploadMultiImage();
            this.resetForm();
            this.closeModal();
          })
          .catch((error) => {
            if (error.response) {
              console.log(
                "Server responded with status code:",
                error.response.status
              );
              console.log("Response data:", error.response.data);
            } else if (error.request) {
              console.log("No response received:", error.request);
            } else {
              console.log("Error creating request:", error.message);
            }

            console.error("Error submitting form:", error);
            // Handle errors, such as showing an error message
          })
          .finally(() => {
            // Set isLoading back to false when the submission is complete
            this.isLoading = false;
          });


    },

    uploadMultiImage() {

      let formData = new FormData();
      this.files.forEach(file => {
        formData.append('filecollection', file);
      });
      // Construct the URL with userId and uniqueCode
      const url = `http://172.28.28.91:8085/api/Files/MultiUploadImage/${this.userDetails.userId}/${this.uniqueCode}`;
       console.log('userid:', this.userDetails.userId); 
       axios.post(url, formData)
    
        .then(response => {
          console.log('Upload successful:', response.data);
        })
        .catch(error => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Error data:', error.response.data);
            console.error('Error status:', error.response.status);
          } else if (error.request) {
            // The request was made but no response was received
            console.error('Error request:', error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error message:', error.message);
          }
        });

    },

    resetForm() {
      // Reset form data after submission
      this.formData = {
        requesterName: "",
        department: "",
        phonenumber: "",
        daterequest: "",
        people: "",
      };

      this.myFiles = [];
      this.uploadedFileNames = [];
    },
  },
  created() {

    this.token = store.data.token
  },
  mounted() {
    this.branch = store.getSelectedLocation();
    this.userDetails = store.getSession().userDetails;
  },

};
</script>
