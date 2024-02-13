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
            TESTKITS REQUEST FORM
          </h2>
          <div class="pt-2">
            <hr />
          </div>

          <form @submit.prevent="showModal">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="requesterName"
                  >Requester Name<span class="text-red-500">*</span></label
                >
                <input
                  v-model="capitalizedRequesterName"
                  id="requesterName"
                  type="text"
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="de"
                  >Department<span class="text-red-500">*</span></label
                >
                <select
                  v-model="formData.department"
                  :id="dynamicId"
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
              <div v-if="formData.department === 'Others'">
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  :for="dynamicCustomId"
                  >Specify<span class="text-red-500">*</span>
                </label>
                <input
                  placeholder="Specify Department"
                  :id="dynamicCustomId"
                  type="text"
                  required
                  v-model="capitalizedDepartment"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="username"
                  >Phone Number<span class="text-red-500">*</span></label
                >
                <input
                  v-model="formData.phonenumber"
                  id="number"
                  type="number"
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <!-- Add v-model to other inputs as needed -->
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
              <!-- Add v-model to other inputs as needed -->
            </div>
            <div class="grid grid-cols-2 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="username"
                  >No. Stock In Box <span class="text-red-500">*</span></label
                >
                <input
                  v-model="formData.stockinbox"
                  id="stockinbox"
                  type="number"
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="emailAddress"
                  >No. Stock In (kit)<span class="text-red-500">*</span></label
                >
                <input
                  v-model="formData.stockinkit"
                  id="stockinkit"
                  type="number"
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="emailAddress"
                  >No. Of Kit Out<span class="text-red-500">*</span></label
                >
                <input
                  v-model="formData.kitout"
                  id="kitout"
                  type="number"
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="emailAddress"
                  >No. Of Balance Kit<span class="text-red-500">*</span></label
                >
                <input
                  v-model="formData.balancekit"
                  id="balacekit"
                  type="number"
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="emailAddress"
                  >Remark<span class="text-red-500">*</span></label
                >
                <input
                  v-model="formData.remark"
                  id="balacekit"
                  type="text"
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
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

            <td class="py-2 px-4" v-if="formData.department === 'Others'">
              {{ formData.customdepartment }}
            </td>
            <td class="py-2 px-4" v-else>{{ formData.department }}</td>
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
          <button
            type="button"
            class="rounded-2xl bg-gray-600 shadow-md p-3 my-1 w-full text-white"
          >
            Cancel
          </button>
          <div v-show="showConfirmButton">
            <button
              @click="confirmFormSubmission()"
              type="button"
              class="text-center rounded-2xl bg-cyan-800 shadow-md p-3 my-1 w-full text-white py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 items-center"
            >
              Confirm
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
      showConfirmButton: true,
      showLoadingButton: false,

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

      departments: departments.staffdepartments,
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
    capitalizedDepartment: {
      get() {
        return this.formData.customdepartment;
      },

      set(value) {
        this.formData.customdepartment = value.toUpperCase();
      },
    },
    dynamicId() {
      return `formData.department-${this.formData.department}`;
    },
    dynamicCustomId() {
      return `formData.customdepartment-${this.formData.department}`;
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

    confirmFormSubmission() {
      this.showConfirmButton = false;
      this.showLoadingButton = true;
      if (this.formData.department === "Others") {
        this.finalDepartment = this.formData.customdepartment;
      } else {
        this.finalDepartment = this.formData.department;
      }
      const uploadForm = {
        branch: this.branch,
        uniqueCode: this.generateUniqueCode(),
        userId: this.userDetails.userId,
        userEmail: this.userDetails.email,
        requesterName: this.formData.requesterName,
        departmentName: this.finalDepartment,
        phoneNumber: this.formData.phonenumber,
        balanceKit: this.formData.balancekit,
        kitOut: this.formData.kitout,
        boxStock: this.formData.stockinbox,
        kitStock: this.formData.stockinkit,
        remark: this.formData.remark,
        userName: this.userDetails.userName,
      };

      console.log("Submitting form data:", uploadForm);

      axios
        .post(
          "http://172.28.28.91:8085/api/Main/InsertTestKitsRequest",
          uploadForm
        )
        .then((response) => {
          this.resetForm();
          this.closeModal();
          this.$router.push("/Dashboard");
          console.log("Server response:", response.data);
        })
        .catch((error) => {
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
            console.log("Error", error.message);
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
