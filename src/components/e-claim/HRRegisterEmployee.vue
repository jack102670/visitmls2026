<template>
  <main
    class="flex-1 text overflow-y-auto bg-[#CED1DA] dark:bg-gray-900 dark:text-white p-4 sm:ml-64"
    id="summaryPrint"
  >
    <div class="container mx-auto text-xs lg:text-base" id="summaryPrint">
      <div
        class="print-div relative overflow-auto bg-[#f7fbff] dark:bg-gray-900 border-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <div class="bg-white xl:w-2/3 md:w-4/5 w-full p-6">
          <h1 class="text-3xl font-bold text-gray-800">
            Registration for Employee User Profile
          </h1>
          <p class="mt-2 text-gray-600 text-justify">
            Note: Please fill in all the mandatory fields to register for an
            employee
          </p>

          <div class="grid grid-cols-1 lg:grid-cols-2 mt-6 w-full">
            <DropDown
              inputId="branchInput"
              label="Branch"
              :options="Branches"
              :mandatory="true"
              @input="(payload) => (form.branch = payload)"
            />

            <DropDown
              inputId="departmentInput"
              label="Department"
              :options="filteredDepartments"
              :mandatory="true"
              class="mt-6 lg:mt-0 lg:ml-4"
              @input="(payload) => (form.department = payload)"
            />
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 mt-6 w-full">
            <DropDown
              inputId="userIdInput"
              label="User ID"
              :options="filteredUsers"
              :mandatory="true"
              @input="(payload) => (form.userId = payload)"
            />
            <div class="mt-6 lg:mt-0 lg:ml-4">
              <label :for="inputId" class="font-semibold text-gray-600"
                >Employee ID<span class="text-red-500">*</span></label
              >
              <input
                :id="inputId"
                v-model="form.employeeId"
                class="border-2 border-gray-200 p-2 w-full rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                type="text"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 mt-6 w-full">
            <DropDown
              inputId="positionInput"
              label="Position"
              :options="AllPositions"
              :mandatory="true"
              @input="(payload) => (form.position = payload)"
            />

            <DropDown
              inputId="reportingDepartmentInput"
              label="Reporting to (Department)"
              :options="AllDepartments"
              class="mt-6 lg:mt-0 lg:ml-4"
              @input="(payload) => (form.reportingDepartment = payload)"
            />
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 mt-6 w-full">
            <div>
              <label :for="inputId" class="font-semibold text-gray-600"
                >Reporting To (Employee ID)<span class="text-red-500"
                  >*</span
                ></label
              >
              <input
                :id="inputId"
                v-model="form.reportingId"
                class="border-2 border-gray-200 p-2 w-full rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                type="text"
              />
            </div>
          </div>

          <div class="w-full flex justify-end">
            <button
              class="py-2 px-6 mt-10 text-white bg-[#160959] hover:bg-blue-950 rounded-md"
              @click="Register()"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import DropDown from './DropDown.vue';
import axios from 'axios';

export default {
  components: {
    DropDown,
  },
  data() {
    return {
      form: {
        branch: '',
        userId: '', // Initialize with empty values
        employeeId: '',
        department: '',
        position: '',
        reportingDepartment: '',
        reportingId: '',
      },

      // option for dropdown
      fetchOptions: [],
      Branches: [],
      filteredDepartments: [],
      filteredUsers: [],
      AllDepartments: [],
      AllPositions: [],
    };
  },
  methods: {
    Register() {
      // Post the 'form' object to API
      // console.log('Form Data:', this.form);
      const registerData = {
        userNameId: this.fetchOptions.filter(
          (item) =>
            item.userName === this.form.userId &&
            item.department == this.form.department &&
            item.branch == this.form.branch
        )[0].userId,
        branch: this.form.branch,
        userName: this.form.userId,
        employeeId: this.form.employeeId,
        department: this.form.department,
        reportingToId: this.form.reportingId,
        position: this.form.position,
      };
      axios
        .post(
          'http://172.28.28.91:86/api/Admin/Register_UserProfile',
          registerData
        )
        .then((response) => {
          // console.log('Response:', response.data);
          // Handle success
        })
        .catch((error) => {
          console.error('Error:', error);
          // Handle error
        });
    },
    async fetchData() {
      await axios
        .get('http://172.28.28.91:89/api/Security/getusersAD')
        .then((response) => {
          this.fetchOptions = response.data; // Make sure to access response.data
          this.extractBranches();
          this.getAllDepartments();
          this.getAllPositions();
        })
        .catch((error) => {
          this.error = error;
          console.error('There was an error!', error);
        });
    },
    extractBranches() {
      const branches = this.fetchOptions.map((item) => item.branch);
      const uniqueBranches = [...new Set(branches)];
      this.Branches = uniqueBranches;
    },
    getAllDepartments() {
      const departments = this.fetchOptions.map((item) => item.department);
      const uniqueDepartments = [...new Set(departments)];
      this.AllDepartments = uniqueDepartments;
    },
    getAllPositions() {
      axios
        .get('http://172.28.28.91:97/api/User/GetDesignation')
        .then((response) => {
          this.AllPositions = response.data.result.map(
            (item) => item.designation
          );
        })
        .catch((error) => {
          this.error = error;
          console.error('There was an error!', error);
        });
    },
  },

  async mounted() {
    // Sidebar close or open
    let openOrNot = localStorage.getItem('openOrNot');
    const element = document.querySelector('main');
    if (element && openOrNot == 'false') {
      element.classList.add('become-big');
    } else if (element && openOrNot == 'true') {
      element.classList.remove('become-big');
    }

    this.fetchData();
  },
  watch: {
    'form.branch'(newBranch) {
      // This will execute whenever branch value changes
      let Departments = this.fetchOptions
        .filter((item) => item.branch === newBranch)
        .map((item) => item.department);

      const uniqueDepartments = [...new Set(Departments)];

      this.filteredDepartments = uniqueDepartments;

      // console.log(this.filteredDepartments);
    },

    'form.department'(newDepartment) {
      // This will execute whenever branch value changes
      let Users = this.fetchOptions
        .filter(
          (item) =>
            item.department === newDepartment &&
            item.branch === this.form.branch
        )
        .map((item) => item.userName);

      const uniqueUsers = [...new Set(Users)];

      this.filteredUsers = uniqueUsers;

      // console.log(this.filteredUsers);
    },
  },
};
</script>
