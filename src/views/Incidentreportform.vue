<template>
  <main
    class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto"
  >
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <section
          class="max-w-4xl p-6 mx-auto bg-white border-2 border-gray-200 rounded-md dark:bg-gray-800"
        >
          <h2
            class="text-2xl font-bold text-gray-700 capitalize dark:text-white"
          >
            INCIDENT REPORT FORM
          </h2>
          <div class="pt-2">
            <hr class="" />
          </div>

          <form @submit.prevent="showModal">
            <div
              class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-3"
            >
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Dateofincident"
                  >Date And Time Of Incident<span class="text-red-500">*</span></label
                >
                <input
                  v-model="formData.Dateofincident"
                  id="Dateofincident"
                  type="Datetime-local"
                  :min="minDateTime"
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Locationofincident"
                  >Location Of Incident<span class="text-red-500"
                    >*</span
                  ></label
                >
                <input
                  v-model="formData.Locationofincident"
                  id="Locationofincident"
                  required
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <!-- Add v-model to other inputs as needed -->
            </div>

            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
              <div class="col-span-2">
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="PartiesInvolved"
                  >Name Of Parties Involved<span class="text-red-500"
                    >*</span
                  ></label
                >
                <input
                  v-model="formData.PartiesInvolved"
                  id="PartiesInvolved"
                  type="text"
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Witness"
                  >Witness/Victim/Suspect<span class="text-red-500"
                    >*</span
                  ></label
                >
                <input
                  v-model="formData.Witness"
                  id="Witness"
                  type="text"
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <!-- Add v-model to other inputs as needed -->
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Typeofincident"
                  >Type Of Incident<span class="text-red-500">*</span></label
                >
                <select
                  :id="dynamicId"
                  required
                  v-model="formData.Typeofincident"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <option value="Fatality">Fatality</option>
                  <option value="Near Miss">Near Miss</option>
                  <option value="No Injury">No Injury</option>
                  <option value="Lost Time Injury">Lost Time Injury</option>
                  <option value="Medical Treatment">Medical Treatment</option>
                  <option value="Property Damage">Property Damage</option>
                  <option value="Serious Bodily Injury">
                    Serious Bodily Injury
                  </option>
                  <option value="First Aid">First Aid</option>
                  <option value="Dangerous Occurance">
                    Dangerous Occurance
                  </option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div v-if="formData.Typeofincident === 'Others'">
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  :for="dynamicCustomId"
                  >Specify<span class="text-red-500">*</span>
                </label>
                <input
                  placeholder="Specify category"
                  :id="dynamicCustomId"
                  type="text"
                  required
                  v-model="formData.customIncidentType"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div
              class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1 mx-auto cursor-pointer flex w-full"
            >
              <div class="w-full">
                <label
                  for="Detailsincident"
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  >Details Incident<span class="text-red-500">*</span></label
                >
                <textarea
                  v-model="formData.Detailsincident"
                  id="Detailsincident"
                  class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  rows="5"
                  required
                ></textarea>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="username"
                  >Upload file list of worker</label
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
                    />
                  </Div>
                  <!-- component -->
                </div>
              </div>

              <!-- Add v-model to other inputs as needed -->
            </div>

            <!-- Add v-model to other inputs as needed -->

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
            <td class="py-2 px-4 font-medium left-column">
              Date And Time 0f Incident:
            </td>
            <td class="py-2 px-4 right-column">
              {{ formData.Dateofincident }}
            </td>
          </tr>

          <tr>
            <td class="py-2 px-4 font-medium">Location Of Incident:</td>
            <td class="py-2 px-4">{{ formData.Locationofincident }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 font-medium">Name Of Parties Involved:</td>
            <td class="py-2 px-4">{{ formData.PartiesInvolved }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 font-medium">Witness/Victim/Suspect:</td>
            <td class="py-2 px-4">{{ formData.Witness }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 font-medium">Type Of Incident:</td>

            <td class="py-2 px-4" v-if="formData.Typeofincident === 'Others'">
              {{ formData.customIncidentType }}
            </td>
            <td class="py-2 px-4" v-else>{{ formData.Typeofincident }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 font-medium">Details Incident:</td>

            <textarea
              v-model="formData.Detailsincident"
              name="Detailsincident"
              id="Detailsincident"
              rows="4"
              style="overflow-y: auto; width: 100%"
            ></textarea>
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
  name: "cctvfromViews",
  components: {
    Modal,
    FilePond,
  },
  data() {
    return {
      myFiles: [],
      modalContent: "",
      isModalVisible: false,
      uploadedFileNames: [],
      minDateTime: this.formatDateTime(new Date()),

      isDragging: false,
      formData: {
        // Add more form fields here
      },
    };
  },
  computed: {
    dynamicId() {
      return `Typeofincident-${this.formData.Typeofincident}`;
    },
    dynamicCustomId() {
      return `customIncidentType-${this.formData.Typeofincident}`;
    },
  },
  methods: {
    formatDateTime(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  },

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
      // Handle the confirmation logic here
      console.log("Confirmed!");
      console.log("Form Data:", this.formData);
      axios
        .post("http://localhost:3000/badgeRequests", this.formData)
        .then((response) => {
          // Handle the response
          console.log("Server response:", response.data);

          this.formData = {
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
<style>
.left-column {
  width: 30%; /* Adjust this value as needed */
}
.right-column {
  width: 70%; /* Adjust this value as needed */
}
</style>
