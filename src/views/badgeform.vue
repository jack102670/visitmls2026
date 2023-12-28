<template>
  <main
    class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto"
  >
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <section
          class="max-w-4xl p-6 mx-auto bg-[#f7fbff] rounded-md dark:bg-gray-800"
        >
          <h2
            class="text-lg font-semibold text-gray-700 capitalize dark:text-white"
          >
            Badge Request Form
          </h2>

          <form @submit.prevent="openPreviewModal">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  class="text-gray-700 dark:text-gray-200"
                  for="requesterName"
                  >Requester Name</label
                >
                <input
                  v-model="formData.requesterName"
                  id="requesterName"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label class="text-gray-700 dark:text-gray-200" for="department"
                  >Department</label
                >
                <input
                  v-model="formData.department"
                  id="department"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <!-- Add v-model to other inputs as needed -->
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
              <div>
                <label class="text-gray-700 dark:text-gray-200" for="username"
                  >Phone number</label
                >
                <input
                  v-model="formData.phonenumber"
                  id="number"
                  type="number"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="text-gray-700 dark:text-gray-200"
                  for="emailAddress"
                  >Date Requested</label
                >
                <input
                  v-model="formData.daterequest"
                  id="daterequest"
                  type="date"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label class="text-gray-700 dark:text-gray-200" for="People"
                  >People/For</label
                >
                <input
                  v-model="formData.People"
                  id="People"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <!-- Add v-model to other inputs as needed -->
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <div>
                <label class="text-gray-700 dark:text-gray-200" for="username"
                  >Upload file list of worker</label
                >

                <!-- component -->

                <div>
                  <label
                    for="dropzone-file"
                    class="p-4 flex ml-0 cursor-pointer flex w-full max-w-xs flex-col items-center rounded-xl border-2 border-dashed"
                    :class="{
                      'border-blue-400': !isDragging,
                      'border-blue-700': isDragging,
                      'bg-white': !isDragging,
                      'bg-blue-100': isDragging,
                    }"
                    @dragover.prevent="handleDragOver"
                    @dragenter.prevent="handleDragEnter"
                    @dragleave.prevent="handleDragLeave"
                    @drop.prevent="handleDrop"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-10 w-10 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>

                    <h2
                      class="mt-2 text-xl font-medium text-gray-700 tracking-wide"
                    >
                      Click Here
                    </h2>

                    <p class="mt-2 text-gray-500 tracking-wide">
                      Upload or drag & drop your file SVG, PNG, JPG, or GIF.
                    </p>

                    <input
                      id="dropzone-file"
                      type="file"
                      class="hidden"
                      @change="handleFileChange"
                    />
                  </label>

                  <!-- Display uploaded files -->
                  <ul class="mt-4">
                    <li
                      v-for="(file, index) in uploadedFiles"
                      :key="index"
                      class="flex items-center justify-between bg-blue-100 p-4 mb-2 rounded-md"
                    >
                      <span class="text-blue-700">{{ file.name }}</span>
                      <button
                        class="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                        @click="removeFile(index)"
                      >
                        Remove
                      </button>
                    </li>
                  </ul>

                  <!-- Display uploaded files -->
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

    <Modal :modalOpen="isPreviewModalOpen" :closeModal="closePreviewModal">
      <!-- Content for your custom modal -->
      <div class="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
        <h3 class="text-2xl font-bold text-gray-700 dark:text-white mb-4">
          Preview
        </h3>

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
            <td class="py-2 px-4 font-medium">People/For:</td>
            <td class="py-2 px-4">{{ formData.People }}</td>
          </tr>
          <!-- ... (Other modal content) ... -->

          <tr>
            <td class="py-2 px-4 font-medium">Uploaded Files:</td>
            <td class="py-2 px-4">
              <ul>
                <li
                  v-for="(file, index) in uploadedFiles"
                  :key="index"
                  class="flex items-center bg-blue-100 p-4 mb-2 rounded-md"
                >
                  <span class="text-blue-700">{{ file.name }}</span>
                </li>
              </ul>
            </td>
          </tr>

          <!-- ... (Other modal content) ... -->
        </table>

        <div class="flex justify-end mt-6">
          <button
            @click="confirmFormSubmission"
            type="submit"
            class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Submit
          </button>
        </div>
      </div>
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
import Modal from "@/components/Modal.vue";
import axios from "axios";

export default {
  name: "badgeformViews",
  components: {
    Modal,
  },
  data() {
    return {
      uploadedFiles: [],
      isDragging: false,
      formData: {
        requesterName: "",
        department: "",
        phonenumber: "",
        daterequest: "",
        People: "",

        // Add more form fields here
      },
      isPreviewModalOpen: false,
      modalContent: "",
    };
  },
  computed: {
    labelClasses() {
      return {
        "border-blue-400": !this.isDragging,
        "border-blue-700": this.isDragging,
        "bg-white": !this.isDragging,
        "bg-blue-100": this.isDragging,
      };
    },
  },
  methods: {
    openPreviewModal() {
      this.isPreviewModalOpen = true;
    },
    confirmFormSubmission() {
      // Handle the confirmation logic here
      console.log("Confirmed!");
      axios
        .post("http://localhost:3000/badgeRequests", this.formData)
        .then((response) => {
          // Handle the response
          console.log("Server response:", response.data);
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
    closePreviewModal() {
      this.isPreviewModalOpen = false;
    },
    handleDragOver() {
      this.isDragging = true;
    },
    handleDragEnter() {
      this.isDragging = true;
    },
    handleDragLeave() {
      this.isDragging = false;
    },
    handleDrop(event) {
      this.isDragging = false;
      // Handle the dropped files
      const files = event.dataTransfer.files;
      this.handleFiles(files);
    },
    handleFileChange(event) {
      // Handle the selected files
      const files = event.target.files;
      this.handleFiles(files);
    },
    handleFiles(files) {
      // Process and store the files
      for (const file of files) {
        this.uploadedFiles.push(file);
      }
    },
    removeFile(index) {
      this.uploadedFiles.splice(index, 1);
    },
  },
};
</script>
