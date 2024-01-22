<template>
  <main class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto">
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <section class="max-w-4xl p-6 mx-auto bg-white border-2 border-gray-200 rounded-md dark:bg-gray-800">
          <h2 class="text-2xl font-bold text-gray-700 capitalize dark:text-white">
            INCIDENT REPORT FORM
          </h2>
          <div class="pt-2">
            <hr class="" />
          </div>

          <form @submit.prevent="showModal">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-3">
              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="Dateofincident">Date And Time Of
                  Incident<span class="text-red-500">*</span></label>
                <input v-model="formData.Dateofincident" id="Dateofincident" type="Datetime-local" :max="maxDateTime"
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>

              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="Locationofincident">Location Of
                  Incident<span class="text-red-500">*</span></label>
                <input v-model="formData.Locationofincident" id="Locationofincident" required type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>

              <!-- Add v-model to other inputs as needed -->
            </div>

            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
              <div class="col-span-2">
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="PartiesInvolved">Name Of Parties
                  Involved<span class="text-red-500">*</span></label>
                <input v-model="formData.PartiesInvolved" id="PartiesInvolved" type="text" required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>

              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="Witness">Witness/Victim/Suspect<span
                    class="text-red-500">*</span></label>
                <input v-model="formData.Witness" id="Witness" type="text" required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>

              <!-- Add v-model to other inputs as needed -->
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="Typeofincident">Type Of Incident<span
                    class="text-red-500">*</span></label>
                <select :id="dynamicId" required v-model="formData.Typeofincident"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                  <option value="Fatality">Fatality</option>
                  <option value="Property Damage">Property Damage</option>
                  <option value="First Aid">First Aid</option>
                  <option value="Theft">
                    Theft
                  </option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div v-if="formData.Typeofincident === 'Others'">
                <label class="font-semibold text-gray-700 dark:text-gray-200" :for="dynamicCustomId">Specify<span
                    class="text-red-500">*</span>
                </label>
                <textarea placeholder="Specify category" :id="dynamicCustomId" type="text" required
                  v-model="formData.customIncidentType"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"></textarea>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1 mx-auto cursor-pointer flex w-full">
              <div class="w-full">
                <label for="Detailsincident" class="font-semibold text-gray-700 dark:text-gray-200">Details Incident<span
                    class="text-red-500">*</span></label>
                <textarea v-model="formData.Detailsincident" id="Detailsincident"
                  class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  rows="5" required></textarea>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="username">Upload file list of
                  worker</label>

                <!-- component -->

                <div>
                  <Div class="pt-3">
                    <FilePond ref="pond" name="file" :server="null" :allowMultiple="true" :maxFileSize="'5MB'"
                      :acceptedFileTypes="[
                        'image/png',
                        'image/jpeg',
                        'application/pdf',
                        'application/vnd.ms-excel',
                        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                      ]" @addfile="handleAddFile" @removefile="handleRemoveFile" />
                  </Div>
                  <!-- component -->
                </div>
              </div>

              <!-- Add v-model to other inputs as needed -->
            </div>

            <!-- Add v-model to other inputs as needed -->

            <div class="flex justify-end mt-6">
              <button type="submit"
                class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
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
        <table class="w-full mt-4 bg-white border border-gray-300 divide-y divide-gray-300">
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

            <textarea v-model="formData.Detailsincident" name="Detailsincident" id="Detailsincident" rows="4"
              style="overflow-y: auto; width: 100%"></textarea>
          </tr>
          <tr>
            <td class="py-2 px-4 font-medium">Files Upload:</td>
            <td class="py-2 px-4">
              <ul>
                <li class="bg-blue-100 p-4 gap-2" v-for="file in files" :key="file.name">
                  {{ file.name }}
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
          <div v-show= "showConfirmButton">
          <button @click= confirmFormSubmission() type="button" class="text-center rounded-2xl bg-cyan-800 shadow-md p-3 my-1 w-full text-white py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700  items-center">
   
    Confirm
</button>
</div>
<div v-show = "showLoadingButton">
  <button disabled="" type="button" class="text-center rounded-2xl bg-cyan-800 shadow-md p-3 my-1 w-full text-white py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700  items-center">
    <svg aria-hidden="true" role="status" class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"></path>
    </svg>
    Loading....
</button>
</div>

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
import { store } from "../views/store.js";
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
import Modal from "../components/vmodal.vue";
import axios from "axios";



export default {
  name: "cctvfromViews",
  components: {
    Modal,
    FilePond,
  },
  data() {
    return {
      showConfirmButton: true,
      showLoadingButton: false,

      uniqueCode: "",
      files: [],
      modalContent: "",
      isModalVisible: false,
      uploadedFileNames: [],
      maxDateTime: this.formatDateTime(new Date()),

      isDragging: false,
      formData: {
        Dateofincident: '',
        Locationofincident: '',
        PartiesInvolved: '',
        Witness: '', // Uncomment if you have this field elsewhere in your form
        Typeofincident: '',
        customIncidentType: '',
        finalIncidentType:'', // This would be used if 'Others' is selected for Typeofincident
        Detailsincident: '',  // Add more form fields here

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


    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
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
      if (this.userDetails.userId) {
        // Use part of the userId for uniqueness, e.g., 4 characters
        const userIdFragment = this.userDetails.userId.substring(0, 4);

        // Generate a random number and pad it to 2 characters
        const randomNumber = Math.floor(Math.random() * 100)
          .toString()
          .padStart(2, "0");

        // Create a timestamp and take the last 2 digits for uniqueness
        const timestamp = Date.now().toString().slice(-2);

        // Construct the uniqueCode
        this.uniqueCode = `IR${userIdFragment}${randomNumber}${timestamp}`;
        console.log("Unique Code:", this.uniqueCode);
        return this.uniqueCode;
      } else {
        console.error("User ID is undefined.");
        // You may want to handle this case differently based on your application logic.
        return "";
      }
    },

    resetForm() {
      // Reset the form fields within formData to their default values
      this.formData.requesterName = '';
      this.formData.Dateofincident = '';
      this.formData.Typeofincident = '';
      this.formData.Locationofincident = '';
      this.formData.PartiesInvolved = '';
      this.formData.Detailsincident = '';
      this.formData.Witness = '';
      // The uniqueCode is generated, so we can regenerate it or set it to an empty string
      // Depending on your use case, you might want to regenerate it for the next form submission
      // this.formData.uniqueCode = this.generateUniqueCode(); // if you want to regenerate
      // this.formData.uniqueCode = ''; // if you want to reset it to empty
      // The userId and userEmail are part of user details and might not need resetting if they are used for other purposes
      // this.formData.userId = ''; // Normally, you wouldn't reset a userId as it's a unique identifier for the user
      // this.formData.userEmail = ''; // Same for userEmail, it's part of the user's persistent state
      // this.branch can be reset if it is not a persistent user detail
      // this.branch = ''; // Uncomment if you need to reset branch as well
    },

    confirmFormSubmission() {
      // Prepare the form data to be sent
      this.showConfirmButton = false;
      this.showLoadingButton= true;

      this.isLoading = true;
      if(this.formData.Typeofincident === "Others"){
        this.formData.finalIncidentType = this.formData.customIncidentType;
      }
      else{
        this.formData.finalIncidentType = this.formData.Typeofincident;
      }
      
      // Send the POST request
      try {
        axios
          .post("http://172.28.28.91:8085/api/Main/InsertIncidentReport", {
            requesterName: this.formData.requesterName,
            dateIncident: this.formData.Dateofincident,
            incidentType: this.formData.finalIncidentType,
            incidentLocation: this.formData.Locationofincident,
            partiesInvolved: this.formData.PartiesInvolved,
            incidentDetails: this.formData.Detailsincident,
            uniqueCode: this.generateUniqueCode(),
            userId: this.userDetails.userId,
            branch: this.branch,
            userEmail: this.userDetails.email,
            witness: this.formData.Witness,
          })

          .then((response) => {
            "Server response:", response.data;
            // Handle the response, such as showing a success message or resetting the form
            //myrequest.fetchRequesters();

            this.uploadMultiImage();
            this.resetForm();
            this.closeModal();
            this.$router.push("/Dashboard");
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
      } catch (error) {
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
      }
    },

    uploadMultiImage() {
      let formData = new FormData();
      this.files.forEach((file) => {
        formData.append("filecollection", file);
      });
      console.log("userid uniqcode:", this.userDetails.userId, this.uniqueCode);
      const url = `http://172.28.28.91:8085/api/Files/MultiUploadImage/${this.userDetails.userId}/${this.uniqueCode}`;

      axios.post(url, formData)
        .then(response => {
          console.log('Upload successful:', response.data);

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
  },
  mounted() {
    this.branch = store.getSelectedLocation();
    this.userDetails = store.getSession().userDetails;
  },
};
</script>
<style>
.left-column {
  width: 30%;
  /* Adjust this value as needed */
}

.right-column {
  width: 70%;
  /* Adjust this value as needed */
}
</style>
