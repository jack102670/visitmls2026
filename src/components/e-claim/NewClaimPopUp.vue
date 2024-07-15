<template>
  <div
    class="bg-gray-500 bg-opacity-40 w-screen h-screen absolute left-0 top-0 z-50 flex justify-center items-center"
  >
    <div
      class="popup overflow-y-auto lg:w-3/5 md:w-3/4 w-5/6 bg-white h-[90%] rounded-xl relative px-10 pb-6"
    >
      <!-- Heading Title -->
      <h1 class="text-3xl font-bold py-6 border-b-2 border-black">
        CREATE NEW CLAIM
      </h1>

      <!-- Form -->
      <form @submit.prevent="submitForm(1)" class="text-sm py-2">
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="claimantName"
              >Report Name<span class="text-red-500">*</span></label
            >
            <input
              v-model="formData.reportName"
              required
              id="ReportName"
              type="text"
              value="required"
              class="block w-full px-4 py-2 mt-2 capitalize text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="claimantName"
              >Claimant's Name <span class="text-red-500">*</span></label
            >
            <input
              placeholder="e.g ALI BIN ABU"
              v-model="formData.claimantName"
              disabled
              required
              id="claimantName"
              type="text"
              value="required"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div class="relative">
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="companyName"
              >Company's Name<span class="text-red-500">*</span></label
            >

            <div class="flex justify-between">
              <input
                type="text"
                required
                placeholder="Company name.."
                v-model="formData.companyName"
                @click="toggleDropdown2"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              <div
                class="bg-slate-200 py-4 px-2 mt-2 rounded"
                @click="toggleDropdown2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 21 21"
                  stroke="currentColor"
                  class="h-2 w-4 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
            <div
              v-show="dropdownVisible2"
              class="dropdown-content absolute left-0 bg-gray-100 w-full max-h-56 overflow-y-auto border border-gray-300 z-10 mt-2 rounded shadow-lg"
            >
              <a
                v-for="Company in filteredCompanyName"
                :key="Company.company_name"
                @click="selectCompanyName(Company.company_name)"
                class="block text-black py-2 px-4 hover:bg-gray-200"
              >
                {{ Company.company_name }}
              </a>
            </div>
          </div>
          <div class="relative">
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="designation"
            >
              Designation<span class="text-red-500">*</span>
            </label>
            <div class="flex justify-between">
              <input
                type="text"
                placeholder="Designation.."
                v-model="formData.designation"
                required
                @click="toggleDropdown3"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              <div
                class="bg-slate-200 py-4 px-2 mt-2 rounded"
                @click="toggleDropdown3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 21 21"
                  stroke="currentColor"
                  class="h-2 w-4 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
            <div
              v-show="dropdownVisible3"
              class="dropdown-content absolute left-0 bg-gray-100 w-full max-h-56 overflow-y-auto border border-gray-300 z-10 mt-2 rounded shadow-lg"
            >
              <a
                v-for="designation in filteredDesignation"
                :key="designation.designation"
                @click="selectDesignation(designation.designation)"
                class="block text-black py-2 px-4 hover:bg-gray-200"
              >
                {{ designation.designation }}
              </a>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-6 mt-4 sm:grid-cols-3">
          <div class="relative">
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="department"
            >
              Department<span class="text-red-500">*</span>
            </label>
            <div class="flex justify-between">
              <input
                type="text"
                placeholder="Department.."
                v-model="formData.department"
                required
                @click="toggleDropdown"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              <div
                class="bg-slate-200 py-4 px-2 mt-2 rounded"
                @click="toggleDropdown"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 21 21"
                  stroke="currentColor"
                  class="h-2 w-4 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
            <div
              v-show="dropdownVisible"
              class="dropdown-content absolute left-0 bg-gray-100 w-full max-h-56 overflow-y-auto border border-gray-300 z-10 mt-2 rounded shadow-lg"
            >
              <a
                v-for="department in filteredDepartments"
                :key="department.department"
                @click="selectDepartment(department.department)"
                class="block text-black py-2 px-4 hover:bg-gray-200"
              >
                {{ department.department }}
              </a>
            </div>
          </div>

          <!-- <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="designation"
              >Cost Center<span class="text-red-500">*</span></label
            >
            <input
              v-model="formData.costCenter"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div> -->
          <div class="relative">
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="companyName"
              >Cost Center <span class="text-red-500">*</span></label
            >

            <div class="flex justify-between">
              <input
                type="text"
                placeholder="Company name.."
                required
                v-model="formData.costCenter"
                @click="toggleDropdown4"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              <div
                class="bg-slate-200 py-4 px-2 mt-2 rounded"
                @click="toggleDropdown4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 21 21"
                  stroke="currentColor"
                  class="h-2 w-4 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
            <div
              v-show="dropdownVisible4"
              class="dropdown-content absolute left-0 bg-gray-100 w-full max-h-56 overflow-y-auto border border-gray-300 z-10 mt-2 rounded shadow-lg"
            >
              <a
                v-for="Company in filteredCostcenter"
                :key="Company.company_name"
                @click="selectCostcenter(Company.company_name)"
                class="block text-black py-2 px-4 hover:bg-gray-200"
              >
                {{ Company.company_name }}
              </a>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
          <!-- <div>
            <label class="font-semibold text-gray-700 dark:text-gray-200"
              >Internal Order</label
            >
            <input
              v-model="formData.internalOrder"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div> -->
          <div>
            <label class="font-semibold text-gray-700 dark:text-gray-200">
              Claim Type <span class="text-red-500">*</span>
            </label>

            <div
              class="space-x-3 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >
              <!-- HR Group -->
              <div
                class="relative inline-block"
                @mouseover="showHRMessage = true"
                @mouseleave="showHRMessage = false"
              >
                <input
                  type="radio"
                  id="HR"
                  name="claimType"
                  value="HR"
                  required
                  v-model="formData.reportType"
                  class="mr-2"
                />
                <label for="HR">HR</label>
                <div
                  class="absolute bg-white border border-gray-100 p-2 whitespace-nowrap"
                  v-show="showHRMessage"
                >
                  Medical Bill and Handphone Bill Reimbursement
                </div>
              </div>

              <!-- Finance Group -->
              <div
                class="relative inline-block"
                @mouseover="showFinanceMessage = true"
                @mouseleave="showFinanceMessage = false"
              >
                <input
                  type="radio"
                  id="Finance"
                  name="claimType"
                  value="Finance"
                  v-model="formData.reportType"
                  class="mr-2"
                />
                <label for="Finance">Finance</label>
                <div
                  class="absolute bg-white border border-gray-100 p-2 whitespace-nowrap"
                  v-show="showFinanceMessage"
                >
                  Local Travelling, Overseas Travelling With Accommodation,
                  Entertainment, Staff Refreshment, and Others Form
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="grid grid-cols-3 gap-6 mt-4 sm:grid-cols-3"> -->
          <!-- <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="ReportDate"
              >Report Date</label
            >
            <input
              v-model="formData.reportDate"
              id="ReportDate"
              type="date"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div> -->
          <!-- <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="ReportStartDate"
              >Report Start Date</label
            >
            <input
              v-model="formData.reportStartDate"
              id="ReportStartDate"
              type="date"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="ReportEndDate"
              >Report End Date</label
            >
            <input
              v-model="formData.reportEndDate"
              id="ReportEndDate"
              type="date"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div> -->
        </div>
        <!-- <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
          <div>
            <label class="font-semibold text-gray-700 dark:text-gray-200"
              >Note:
            </label>
            <label class="text-gray-700 dark:text-gray-200"
              >First 7 days of a month will be paid in this month, else if after
              7 days will be paid in next month</label
            >
          </div>
        </div> -->

        <h1 class="text-red-500 text-sm">
          Note : Claims made in the first week of the month will be processed
          within that same month. Claims made after the first week will be
          processed in the following month.
        </h1>
        <h1 class="text-gray-500 text-sm">
          <span class="text-red-500">*</span
          ><span class="text-red-500">*</span> HR: Medical Bill and Handphone
          Bill Reimbursement
        </h1>
        <h1 class="text-gray-500 text-sm">
          <span class="text-red-500">*</span
          ><span class="text-red-500">*</span> Finance: Local Travelling,
          Overseas Travelling With Accommodation, Entertainment, Staff
          Refreshment, and Others Form
        </h1>

        <!-- button -->
        <div class="gap-3 flex flex-row-reverse">
          <div class="flex justify-center mt-10">
            <button
              type="submit"
            
              class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Next
            </button>
          </div>
          <div class="flex justify-center mt-10">
            <button
              type="cancel"
              @click.prevent="submitForm(-1)"
              class="bg-[#f7fbff] px-8 py-2.5 leading-5 text-gray transition-colors duration-300 transform rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import { formStore } from "../../views/store.js"; // Import your form store
import { store } from "../../views/store.js";
// import axios from 'axios';
export default {
  emits: ["close"],
  data() {
    return {
      showHRMessage: false,
      showFinanceMessage: false,
      dropdownVisible: false,
      dropdownVisible2: false,
      dropdownVisible3: false,
      search: "",
      dropdownVisible4: false,

      departments: [],
      Companies: [],
      designations: [],
      active: 0,

      formData: {
        claimantName: "Teowcheewen",
        companyName: formStore.formData.companyName,
        department: formStore.formData.department,
        costCenter: formStore.formData.costCenter,
        designation: formStore.formData.designation,
        reportName: formStore.formData.reportName,
        internalOrder: formStore.formData.internalOrder,
        reportType: "Finance",
        reportDate: formStore.formData.reportDate,
        reportStartDate: formStore.formData.reportStartDate,
        reportEndDate: formStore.formData.reportEndDate,
        memo: formStore.formData.memo,
        uniqueCode: formStore.formData.uniqueCode,
      },
      branch: "", // Add the missing branch property
      userDetails: {},
    };
  },
  watch: {
    "formData.reportName": function (newVal) {
      this.formData.reportName = this.capitalizeWords(newVal);
    },

    // this is for full capital
    "formData.designation": function (newVal) {
      this.formData.designation = newVal.toUpperCase();
    },
  },
  computed: {
    filteredDesignation() {
      return this.designations.filter((designation) => {
        return designation.designation
          .toLowerCase()
          .includes(this.formData.designation.toLowerCase());
      });
    },
    filteredDepartments() {
      return this.departments.filter((department) => {
        return department.department
          .toLowerCase()
          .includes(this.formData.department.toLowerCase());
      });
    },
    filteredCompanyName() {
      return this.Companies.filter((park) => {
        const searchTerm = this.formData.companyName.toLowerCase();
        return (
          (park.company_code &&
            park.company_code.toLowerCase().includes(searchTerm)) ||
          (park.company_name &&
            park.company_name.toLowerCase().includes(searchTerm))
        );
      });
    },
    filteredCostcenter() {
      return this.Companies.filter((park) => {
        const searchTerm = this.formData.costCenter.toLowerCase();
        return (
          (park.company_code &&
            park.company_code.toLowerCase().includes(searchTerm)) ||
          (park.company_name &&
            park.company_name.toLowerCase().includes(searchTerm))
        );
      });
    },
  },

  mounted() {
    this.fetchDesignations();
    this.fetchCompany();
    this.fetchDepartments();
    // Get the branch from the store
    this.userDetails = store.getSession().userDetails;
    this.fetchusername();
  },

  methods: {
    async fetchusername() {
      try {
        const response = await fetch(
          "http://172.28.28.91:97/api/User/GetAllEmployees"
        );
        if (response.status !== 200) {
          // Corrected status code check
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); // Correctly parsing the JSON response
        if (data && data.result && data.result.length > 0) {
          const selectedEmployee = data.result.find(
            (emp) => emp.username_id === store.getSession().userDetails.userId
          );
          // console.log("Selected Employee:", selectedEmployee);
          if (selectedEmployee) {
            if ("username" in selectedEmployee) {
              this.formData.claimantName = selectedEmployee.name;
              // console.log("Employee username:", this.username);
            } else {
              console.error(
                "Employee found but username is missing:",
                selectedEmployee
              );
            }
          } else {
            console.error(
              "Employee not found for id:",
              store.getSession().userDetails.userId
            );
          }
        } else {
          console.error("No employees found in response");
        }
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    },
    capitalizeWords(str) {
      return str.replace(/\b\w/g, (char) => char.toUpperCase());
    },
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    selectDepartment(department) {
      this.formData.department = department;
      this.dropdownVisible = false;
    },
    toggleDropdown2() {
      this.dropdownVisible2 = !this.dropdownVisible2;
    },
    toggleDropdown4() {
      this.dropdownVisible4 = !this.dropdownVisible4;
    },
    selectCostcenter(Company) {
      this.formData.costCenter = Company;
      this.dropdownVisible4 = false;
    },
    selectCompanyName(Company) {
      this.formData.companyName = Company;
      this.dropdownVisible2 = false;
    },
    toggleDropdown3() {
      this.dropdownVisible3 = !this.dropdownVisible3;
    },
    selectDesignation(designation) {
      this.formData.designation = designation;
      this.dropdownVisible3 = false;
    },
    async fetchDesignations() {
      try {
        const response = await fetch(
          "http://172.28.28.91:97/api/User/GetDesignation"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        this.designations = data.result;
        // console.log(this.designations, "designation");
      } catch (error) {
        console.error(`Error fetching departments: ${error}`);
      }
    },
    async fetchCompany() {
      try {
        const response = await fetch(
          "http://172.28.28.91:97/api/User/GetCompany"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        this.Companies = data.result;
        // console.log(this.Companies, "company");
      } catch (error) {
        console.error(`Error fetching departments: ${error}`);
      }
    },
    async fetchDepartments() {
      try {
        const response = await fetch(
          "http://172.28.28.91:97/api/User/GetDepartment"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        this.departments = data.result;
        // console.log(this.departments);
      } catch (error) {
        console.error(`Error fetching departments: ${error}`);
      }
    },
    generateSerialNumber() {
      let names = this.formData.reportName.split(" ");
      let shortform = [];

      for (let i = 0; i < names.length; i++) {
        shortform[i] = names[i][0];
      }

      let datetime = moment(new Date()).format("YYYY-MM-mmss");
      let sn =
        shortform.join("").toString() +
        "-" +
        this.formData.reportType +
        "-" +
        datetime;
      // console.log(sn);
      this.formData.uniqueCode = sn;
      return sn;
    },
    submitForm(page) {
      this.active += page;

      if (this.active > 0) {
        // Update form data in the form store
        formStore.clearFormData();
        this.generateSerialNumber();
        formStore.setFormData(this.formData);

        // Log the form data before navigation
        // console.log("Form submitted", formStore.getFormData());
        // Log the form data before navigation
        // console.log("Form submitted", formStore.getFormData());
        this.$router.push({ name: "ClaimReport" });

        // Send API request using axios
        // const apiData = {
        //   name: this.formData.claimantName,
        //   company_name: this.formData.companyName,
        //   department: this.formData.department,
        //   designation_title: this.formData.designation,
        //   claim_startdate: this.formData.reportStartDate,
        //   claim_enddate: this.formData.reportEndDate,
        //   reference_number: this.generateUniqueCode(),
        //   report_name: this.formData.reportName,
        // };

        // // Send API request using axios
        // axios.post('http://172.28.28.91:97/api/User/InsertClaimDetails', apiData)
        //   .then(response => {
        //     // Handle success response
        //     // console.log('API response', response.data);
        //     this.$router.push({ name: 'ClaimReport' });
        //   })
        //   .catch(error => {
        //     // Handle error response
        //     console.error('API error', error);
        //   });

        this.active = 0;
      }
      // this.active = 0;

      if (this.active < 0) {
        // close the create new claim pop up
        this.$emit("close");
        this.active = 0;
        // close the create new claim pop up
      }
    },
  },
};
</script>
<style scoped>
.dropdown-content {
  max-height: 10rem; /* max-h-56 in Tailwind CSS */
}
.formStepCircle:not(:first-child)::before {
  content: "";
  background-color: rgb(209 213 219);
  width: 100%;
  height: 3px;
  position: absolute;
  right: 50%;
  top: 15%;
}

.activeStep div {
  background-color: rgb(30 58 138);
}

.activeStep:not(:first-child)::before {
  background-color: rgb(30 58 138);
}

.activeStep p {
  color: rgb(30 58 138);
}

.newForm div {
  font-weight: 300;
}
</style>
