<template>
  <main class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto">
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <section class="max-w-4xl p-6 mx-auto bg-white border-2 border-gray-200 rounded-md dark:bg-gray-800">
          <h2 class="text-2xl font-bold text-gray-700 capitalize dark:text-white">
            TESTKITS REQUEST FORM
          </h2>
          <div class="pt-2">
            <hr />
          </div>

          <form @submit.prevent="showModal">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="requesterName">Requester Name<span
                    class="text-red-500">*</span></label>
                <input v-model="capitalizedRequesterName" id="requesterName" type="text" required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>

              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="de">Department<span
                    class="text-red-500">*</span></label>
                <select v-model="formData.department" id="department"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                  <option value=""></option>
                  <option v-for="department in departments" :key="department.id" :value="department.name">
                    {{ department.name }}
                  </option>
                </select>
              </div>
              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="username">Phone Number<span
                    class="text-red-500">*</span></label>
                <input v-model="formData.phonenumber" id="number" type="number" required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>

              <!-- Add v-model to other inputs as needed -->
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">




              <!-- Add v-model to other inputs as needed -->
            </div>
            <div class="grid grid-cols-2 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="username">No. Stock In Box <span
                    class="text-red-500">*</span></label>
                <input v-model="formData.stockinbox" id="stockinbox" type="number" required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>

              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="emailAddress">No. Stock In (kit)<span
                    class="text-red-500">*</span></label>
                <input v-model="formData.stockinkit" id="stockinkit" type="number" required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>
              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="emailAddress">No. Of Kit Out<span
                    class="text-red-500">*</span></label>
                <input v-model="formData.kitout" id="kitout" type="number" required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>
              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="emailAddress">No. Of Balance Kit<span
                    class="text-red-500">*</span></label>
                <input v-model="formData.balancekit" id="balacekit" type="number" required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>
              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="emailAddress">Remark<span
                    class="text-red-500">*</span></label>
                <input v-model="formData.remark" id="balacekit" type="text" required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
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
          <!-- Add more rows as needed -->
          <tr>
            <td class="py-2 px-4 font-medium">Phone Number:</td>
            <td class="py-2 px-4">{{ formData.phonenumber }}</td>
          </tr>


          <!-- Add more rows as needed -->
          <tr>
            <td class="py-2 px-4 font-medium">No. Stock In Box:</td>
            <td class="py-2 px-4">{{ formData.stockinbox }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 font-medium">No. Stock In (Kit):</td>
            <td class="py-2 px-4">{{ formData.stockinkit }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 font-medium">No. Of Kit Out:</td>
            <td class="py-2 px-4">{{ formData.kitout }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 font-medium">No. Of Balance Kit:</td>
            <td class="py-2 px-4">{{ formData.balancekit }}</td>
          </tr>
          <!-- Add more rows as needed -->
        </table>
      </template>

      <!-- footer -->
      <template v-slot:footer>
        <div class="grid grid-cols-2 gap-3">
          <button type="button" class="rounded-2xl bg-gray-600 shadow-md p-3 my-1 w-full text-white">
            Cancel
          </button>
          <button type="button" @click="submitForm" class="rounded-2xl bg-cyan-800 shadow-md p-3 my-1 w-full text-white">
            Confirm
          </button>
        </div>
        <div class="flex justify-end mt-6"></div>
      </template>
    </Modal>
  </main>
</template>

<script>
import axios from "axios";
import { store } from "../views/store.js";
import Modal from "@/components/vmodal.vue";
import * as departments from "../javascript/department.js";

export default {
  name: "cctvfromViews",
  components: {
    Modal,
  },
  data() {
    return {
      formData: {
        requesterName: "",
        department: "",
        phonenumber: "",
        daterequest: "",
        remark: "",
        stockinbox: "",
        stockinkit: "",
        kitout: "",
        balancekit: "",


        // Add more form fields here
      },
      isModalVisible: false,

      departments: departments.departments,

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
    generateUniqueCode() {
      // Check if this.userId is defined
      if (this.userDetails.userId) {
        // Use part of the userId for uniqueness, e.g., 4 characters
        const userIdFragment = this.userDetails.userId.substring(0, 4);

        // Generate a random number and pad it to 2 characters
        const randomNumber = Math.floor(Math.random() * 100)
          .toString()
          .padStart(2, "0");


        const timestamp = Date.now().toString().slice(-2);


        this.uniqueCode = `TK${userIdFragment}${randomNumber}${timestamp}`;
        console.log("Unique Code:", this.uniqueCode);
        return this.uniqueCode;
      } else {
        console.error("User ID is undefined.");

        return "";
      }
    },
    resetForm() {
      // Reset the form fields to their default values
      this.formData.requesterName = "";
      this.formData.department = "";
      this.formData.phonenumber = "";
      this.formData.daterequest = ""; // Add default values for other fields as needed
      this.formData.stockinbox = "";
      this.formData.stockinkit = "";
      this.formData.kitout = "";
      this.formData.balancekit = "";
      this.formData.remark = "";
    },

    submitForm() {
      const uploadForm = {
        branch: this.branch,
        uniqueCode: this.generateUniqueCode(),
        userId: this.userDetails.userId,
        userEmail: this.userDetails.email,
        requesterName: this.formData.requesterName,
        departmentName: this.formData.department,
        phoneNumber: this.formData.phonenumber,
        balanceKit: this.formData.balancekit,
        kitOut: this.formData.kitout,
        boxStock: this.formData.stockinbox,
        kitStock: this.formData.stockinkit,
        remark:this.formData.remark,


      };



      console.log("Submitting form data:", uploadForm);


      axios.post("http://172.28.28.91:8085/api/Main/InsertTestKitsRequest", uploadForm)
        .then(response => {
          this.resetForm();
          this.closeModal();
          this.$router.push("/Dashboard");
          console.log("Server response:", response.data);
        })
        .catch(error => {
          if (error.response) {
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
            console.log('Error', error.message);
          }
          console.log(error.config);
        });

    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
  mounted() {
    this.branch = store.getSelectedLocation();
    this.userDetails = store.getSession().userDetails;
  },
};
</script>
