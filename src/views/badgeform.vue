<template>
  <main
    class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto"
  >
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <section
          class="max-w-4xl p-6 mx-auto bg-white border-2 border-e-gray-200 rounded-md dark:bg-gray-800"
        >
          <h2
            class="text-2xl font-bold text-gray-700 capitalize dark:text-white"
          >
            BADGE REQUEST FORM {{ branch }}
          </h2>
          <div class="pt-2">
            <hr class="" />
          </div>

          <form @submit.prevent="showModal">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="requesterName"
                  >Requester Name {{ formData.requesterName }}<span class="text-red-500">*</span></label
                >
                <input
                  v-model="capitalizedRequesterName"
                  id="requesterName"
                  type="text"
                  value=
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
                <input
                  v-model="branch"
                  id="requesterName"
                  type="hidden"
                  
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="department"
                  >Department<span class="text-red-500">*</span></label
                >
                <select
                  v-model="formData.department"
                  id="department"
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <option value="" disabled selected></option>
                  <option
                    v-for="department in departments"
                    :key="department.id"
                    :value="department.name"
                  >
                    {{ department.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="number"
                  >Phone number<span class="text-red-500">*</span></label
                >
                <input
                  v-model="formData.phonenumber"
                  id="number"
                  type="number"
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="formData.people"
                  >For<span class="text-red-500">*</span>:
                  {{ formData.people }}</label
                >
                <div
                  class="flex justify-between w-full px-4 py-2 mt-2 text-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <div>
                    <input
                      type="radio"
                      id="staff"
                      value="Staff"
                      v-model="formData.people"
                    />
                    <label class="ml-1" for="staff">Staff</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="contract"
                      value="Contract"
                      v-model="formData.people"
                    />
                    <label class="ml-1" for="contract">Contract</label>
                  </div>
                </div>
              </div>

              <!-- Add v-model to other inputs as needed -->
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="username"
                  >Upload File List Of Name<span class="text-red-500"
                    >*</span
                  ></label
                >

                <!-- component -->

                <div>
                  <Div class="pt-3">
                    <file-pond
                      class=""
                      name="test"
                      ref="pond1"
                      label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>"
                      allow-multiple="true"
                      accepted-file-types="image/jpeg, image/png, application/pdf, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                      v-bind:files="myFiles"
                      @input="updateFiles"
                      :options="filePondOptions"
                    />
                  </Div>
                  <!-- component -->
                </div>
              </div>

              <!-- Add v-model to other inputs as needed -->
            </div>

            <div class="flex justify-end mt-6">
              <button
                type="submit"
                class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Submit
              </button>
            </div>
          </form>

          <!-- Conditional rendering of the loading indicator -->

          <div
            v-if="isLoading"
            class="loading-indicator flex items-center justify-center min-h-screen"
            style="z-index: 9999"
          >
            <div
              style="border-top-color: transparent"
              class="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"
            ></div>
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
        <table
          class="w-full mt-4 bg-white border border-gray-300 divide-y divide-gray-300"
        >
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
          <button
            type="button"
            class="rounded-2xl bg-gray-600 shadow-md p-3 my-1 w-full text-white"
          >
            Cancel
          </button>
          <button
            type="button"
            @click="confirmFormSubmission"
            class="rounded-2xl bg-cyan-800 shadow-md p-3 my-1 w-full text-white"
          >
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
import {store} from "../views/store.js"
import * as template from "../javascript/department.js";
import vueFilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import Modal from "../components/vmodal.vue";
import FilePondPluginFileRename from "filepond-plugin-file-rename";
//import * as myrequest from "../views/Myrequest2.vue";

import axios from "axios";

const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginFileRename
);
export default {
  name: "badgeformViews",
  components: {
    FilePond,
    Modal,
  },
  data() {
    return {

      isLoading: false,
      myFiles: [],
      uploadedFileNames: [],
      filePondOptions: {
        // Configure FilePond options here
        allowFileRename: true,
        fileRenameFunction: (file) => {
          const fileExtension = file.name.split(".").pop();
          const timestamp = Date.now();
          let newName;

          if (file.type === "application/pdf") {
            newName = `PDF-${timestamp}.${fileExtension}`;
          } else if (
            file.type.includes("excel") ||
            file.type.includes("spreadsheet")
          ) {
            newName = `Excel-${timestamp}.${fileExtension}`;
          } else {
            newName = `${timestamp}-${file.name}`;
          }

          console.log(`Renaming: Original - ${file.name}, New - ${newName}`);
          return newName;
        },
      },
      formData: {
        requesterName: "",
        department: "",
        phonenumber: "",
      
        people: "",
        userid: null,
        // Add more form fields here
      },
      userDetails:[],

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
    updateFiles(newFiles) {
      if (Array.isArray(newFiles)) {
        this.myFiles = newFiles;
        this.uploadedFileNames = newFiles.map((fileItem) => {
          console.log(`File in pond: ${fileItem.file.name}`);
          return fileItem.file.name;
        });
      } else {
        console.error("Expected newFiles to be an array, received:", newFiles);
      }
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },

    handleFilePondInit() {
      console.log("FilePond has initialized");

      // Example of instance method call on pond reference for the first component
      this.$refs.pond1.getFiles();

      // Example of instance method call on pond reference for the second component
    },

    confirmFormSubmission() {
      // Prepare the form data to be sent
      (this.isLoading = true),
        // Send the POST request
        axios
          .post("http://172.28.28.91:8085/api/Main/InsertBadgeRequest", {
            requesterName: this.formData.requesterName,
            departmentName: this.formData.department,
            designationPeople: this.formData.people,
            phoneNumber: this.formData.phonenumber,
            uniqueCode: "BR01383",
            userId:  this.userDetails.userId ,
            branch: this.branch,
          })
          .then((response) => {
            "Server response:", response.data;
            // Handle the response, such as showing a success message or resetting the form
            //myrequest.fetchRequesters();

            // this.uploadMultiImage(this.userId, this.uniqueCode);
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

    // uploadMultiImage(userId,uniqueCode){
    //   const fileUpload = new FormData();
    //   this.myFiles.forEach((file) => {
    //     fileUpload.append('file', file[0]);
    //   });
    //   axios
    //       .post("http://172.28.28.91:8085/api/Files/MultiUploadImage/"+ userId + uniqueCode, 
    //   fileUpload)
    //       .then((response) => {
    //         "Server response:", response.data;
    //         // Handle the response, such as showing a success message or resetting the form
    //         //myrequest.fetchRequesters();

    //       })
    //       .catch((error) => {
    //         if (error.response) {
    //           console.log(
    //             "Server responded with status code:",
    //             error.response.status
    //           );
    //           console.log("Response data:", error.response.data);
    //         } else if (error.request) {
    //           console.log("No response received:", error.request);
    //         } else {
    //           console.log("Error creating request:", error.message);
    //         }

    //         console.error("Error submitting form:", error);
    //         // Handle errors, such as showing an error message
    //       })
    // },

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
 
    this.token =store.data.token
},
mounted() {
   this.branch = store.getSelectedLocation();
  this.userDetails = store.getSession().userDetails;
},

};
</script>
