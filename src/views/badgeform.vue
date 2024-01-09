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
            BADGE REQUEST FORM
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
                  >Requester Name<span class="text-red-500">*</span></label
                >
                <input
                  v-model="formData.requesterName"
                  id="requesterName"
                  type="text"
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label class="text-gray-700 dark:text-gray-200" for="de"
                  >Department<span class="text-red-500">*</span></label
                >
                <select
                  v-model="formData.department"
                  id="department"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <option value=""></option>
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
                  >For<span class="text-red-500">*</span>: {{ formData.people }}</label
                >
                <div
                  class="block flex justify-between w-full px-4 py-2 mt-2 text-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                  >Upload file list of worker<span class="text-red-500">*</span></label
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
                      accepted-file-types="image/jpeg, image/png"
                      v-bind:files="myFiles"
                      @input="updateFiles"
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
            <td class="py-2 px-4 font-medium">Date Requested:</td>
            <td class="py-2 px-4">{{ formData.daterequest }}</td>
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
import * as template from '../javascript/department.js'
import vueFilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import Modal from "../components/vmodal.vue";

import axios from "axios";

const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
);
export default {
  name: "badgeformViews",
  components: {
    FilePond,
    Modal,
  },
  data() {
    return {
      myFiles: [],

      formData: {
        requesterName: "",
        department: "",
        phonenumber: "",
        daterequest: "",
        People: "",

        // Add more form fields here
      },

      modalContent: "",
      isModalVisible: false,
      departments:template.departments,
    };
  },

  methods: {
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
      // Handle the confirmation logic here
      console.log("Confirmed!");
      axios
        .post("http://localhost:3000/badgeRequests", this.formData)
        .then((response) => {
          // Handle the response
          "Server response:", response.data;
          this.formData = {
            requesterName: "",
            department: "",
            phonenumber: "",
            daterequest: "",
            People: "",
            // Add more form fields here
          };
          // Optionally, you can show a success message or navigate to another page
        })
        .catch((error) => {
          // Handle errors
          console.error("Error submitting form:", error);
          // You can show an error message to the user if needed
        });
      // Optionally, you can perform additional actions or close the modal
      this.closePreviewModal();
    },
  },
};
</script>
