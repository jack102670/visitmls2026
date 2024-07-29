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
              inputId="companyInput"
              label="Company"
              :options="Company"
              :mandatory="true"
              class="mt-6 lg:mt-0 lg:ml-4"
              @input="(payload) => (form.company = payload)"
            />
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 mt-6 w-full">
            <DropDown
              inputId="departmentInput"
              label="Department"
              :options="filteredDepartments"
              :mandatory="true"
              @input="(payload) => (form.department = payload)"
            />
            <DropDown
              inputId="positionInput"
              label="Position"
              :options="AllPositions"
              :mandatory="true"
              class="mt-6 lg:mt-0 lg:ml-4"
              @input="(payload) => (form.position = payload)"
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
                @input="limitChar()"
                class="border-2 border-gray-200 p-2 w-full rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                type="text"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 mt-6 w-full">
            <DropDown
              inputId="reportingDepartmentInput"
              label="Reporting to (Department)"
              :options="AllDepartments"
              :mandatory="true"
              @input="(payload) => (form.reportingDepartment = payload)"
            />
            <DropDown
              inputId="reportingStaffInput"
              label="Reporting to (Employee ID)"
              :options="filteredReportingEmployees"
              :mandatory="true"
              class="mt-6 lg:mt-0 lg:ml-4"
              @input="(payload) => (form.reportingId = payload)"
            />
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 mt-6 w-full">
            <div>
              <label class="font-semibold text-gray-600">Limit</label>
              <div class="mt-2">
                <input type="radio" id="no" value="no" v-model="enableLimit" />
                <label for="no">No</label>

                <input
                  type="radio"
                  id="yes"
                  value="yes"
                  class="ml-4"
                  v-model="enableLimit"
                />
                <label for="yes">Yes</label>
                <div v-if="enableLimit === 'yes'" class="mt-1">
                  <input
                    id="limitInput"
                    v-model="form.limit"
                    class="border-2 border-gray-200 p-2 w-full rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    type="number"
                    min="1"
                  />
                </div>
              </div>
            </div>

            <div class="w-full flex justify-end">
              <button
                class="py-2 px-6 mt-10 text-white bg-[#160959] hover:bg-blue-950 rounded-md disabled:bg-gray-500 disabled:hover:bg-gray-500 disabled:cursor-not-allowed"
                @click="Register()"
                :disabled="!enableBtn"
              >
                Register
              </button>
            </div>
          </div>
        </div>

        <!-- Loading Animation -->
        <div
          class="w-screen h-screen fixed z-40 flex justify-center items-center top-0 left-0"
          v-if="loading"
        >
          <div class="absolute w-screen h-screen bg-gray-900 opacity-30"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            class="w-16 h-16 z-50"
          >
            <circle
              transform="rotate(0)"
              transform-origin="center"
              fill="none"
              stroke="blue"
              stroke-width="10"
              stroke-linecap="round"
              stroke-dasharray="230 1000"
              stroke-dashoffset="0"
              cx="100"
              cy="100"
              r="70"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0"
                to="360"
                dur="2"
                repeatCount="indefinite"
              ></animateTransform>
            </circle>
          </svg>
          <h1 class="text-gray-50 font-semibold z-50 ml-2 text-lg">
            {{ loadingText }} Data...
          </h1>
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
        company: '',
        department: '',
        position: '',
        userId: '',
        employeeId: '',
        reportingDepartment: '',
        reportingId: '',
        limit: 0,
      },

      // option for dropdown
      fetchOptions: [],
      Branches: [],
      Company: [],
      filteredDepartments: [],
      filteredUsers: [],
      AllDepartments: [],
      AllPositions: [],
      filteredReportingEmployees: [],

      enableLimit: 'no',

      enableBtn: false,

      loading: true,
      loadingText: '',
    };
  },
  methods: {
    Register() {
      this.loadingText = 'Uploading';
      this.loading = true;
      // Post the 'form' object to API
      const registerData = {
        company_name: this.form.company,
        limit_amount: this.form.limit,
        userNameId: this.fetchOptions.filter(
          (item) =>
            item.displayName === this.form.userId &&
            item.department == this.form.department &&
            item.branch == this.form.branch
        )[0].userId,
        branch: this.form.branch,
        displayName: this.form.userId,
        userName: this.fetchOptions.filter(
          (item) =>
            item.displayName === this.form.userId &&
            item.department == this.form.department &&
            item.branch == this.form.branch
        )[0].userName,
        employeeId: this.form.employeeId,
        department: this.form.department,
        reportingToDept: this.form.reportingDepartment,
        reportingToId: this.form.reportingId.split('(')[
          // eslint-disable-next-line no-unexpected-multiline
          this.form.reportingId.split('(').length - 1
        ].split(')')[0],
        position: this.form.position,
      };
      console.log('Form Data:', registerData);

      axios
        .post(
          'http://172.28.28.91:86/api/Admin/Register_UserProfile',
          registerData
        )
        .then((response) => {
          console.log('Response:', response.data);
          this.loading = false;

          this.form = {
            branch: '',
            company: '',
            department: '',
            position: '',
            userId: '',
            employeeId: '',
            reportingDepartment: '',
            reportingId: '',
            limit: 0,
          };
          // Handle success
        })
        .catch((error) => {
          console.error('Error:', error);
          // Handle error
        });
    },
    async fetchData() {
      this.loadingText = 'Fetching';
      this.loading = true;
      await axios
        .get('http://172.28.28.91:89/api/Security/getusersAD')
        .then((response) => {
          this.loading = false;
          this.fetchOptions = response.data; // Make sure to access response.data
          this.extractBranches();
          this.getAllDepartments();
          this.getAllPositions();
          this.getAllCompanies();
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
    getAllCompanies() {
      axios
        .get('http://172.28.28.91:97/api/User/GetCompany')
        .then((response) => {
          this.Company = response.data.result.map((item) => item.company_name);
        });
    },
    // limit the employee id to be 10 characters
    limitChar() {
      if (this.form.employeeId.length >= 10) {
        this.form.employeeId = this.form.employeeId.substring(0, 10);
      }
    },
    async getEmpId(id) {
      try {
        const response = await axios.get(
          `http://172.28.28.91:97/api/User/GetEmployeeById/${id}`
        );
        return response.data.result[0].emp_id;
      } catch (error) {
        console.error('Error fetching employee ID:', error);
        return null;
      }
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
    form: {
      handler(newVal) {
        let count = 0;
        console.log(newVal);
        for (let item in newVal) {
          if (item != 'limit') {
            if (this.form[item].length > 0) {
              count++;
            }
          }
        }
        if (count == Object.keys(this.form).length - 1) {
          this.enableBtn = true;
        }
      },
      deep: true,
    },
    'form.branch'(newBranch) {
      // This will execute whenever branch value changes
      let Departments = this.fetchOptions
        .filter((item) => item.branch === newBranch)
        .map((item) => item.department);

      const uniqueDepartments = [...new Set(Departments)];

      this.filteredDepartments = uniqueDepartments;

      console.log(this.filteredDepartments);
    },

    'form.department'(newDepartment) {
      // This will execute whenever the department value changes
      const users = this.fetchOptions
        .filter(
          (item) =>
            item.department === newDepartment &&
            item.branch === this.form.branch
        )
        .map((item) => ({
          userName: item.displayName,
          userId: item.userId,
        }));

      const uniqueUsers = [
        ...new Map(users.map((user) => [user.userId, user])).values(),
      ];

      console.log('unique users: ', uniqueUsers);

      // Update filteredUsers with unique users initially
      this.filteredUsers = uniqueUsers.map((user) => user.userName);

      // Fetch additional data from the API and filter uniqueUsers
      axios
        .get('http://172.28.28.91:97/api/User/GetAllEmployees')
        .then((response) => {
          const existUserIds = response.data.result.map(
            (user) => user.username_id
          );
          console.log('Existing User IDs from API:', existUserIds);

          this.filteredUsers = uniqueUsers
            .filter((user) => !existUserIds.includes(user.userId))
            .map((user) => user.userName);

          console.log('Filtered Users:', this.filteredUsers);
        })
        .catch((error) => {
          console.error('Error fetching data from API:', error);
        });
    },

    async 'form.reportingDepartment'(newReportingDept) {
      // This will execute whenever department value changes
      let Employees = this.fetchOptions
        .filter((item) => item.department === newReportingDept)
        .map((item) => ({
          userName: item.displayName,
          userId: item.userId,
        }));

      const uniqueEmployees = [
        ...new Map(
          Employees.map((employee) => [employee.userId, employee])
        ).values(),
      ];

      console.log(uniqueEmployees);
      try {
        // Fetch additional data from the API
        const response = await axios.get(
          'http://172.28.28.91:97/api/User/GetAllEmployees'
        );
        const existUserIds = response.data.result.map(
          (user) => user.username_id
        );
        console.log('Existing User IDs from API:', existUserIds);

        // Fetch empIds asynchronously and wait for all to complete
        const employeesWithEmpId = await Promise.all(
          uniqueEmployees
            .filter((employee) => existUserIds.includes(employee.userId))
            .map(async (employee) => {
              const empId = await this.getEmpId(employee.userId);
              return {
                userName: employee.userName,
                empId,
              };
            })
        );

        this.filteredReportingEmployees = employeesWithEmpId.map(
          (employee) => employee.userName + ' (' + employee.empId + ')'
        );

        console.log(this.filteredReportingEmployees);
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    },

    'form.limit'(newLimit) {
      if (newLimit <= 0 && this.enableLimit == 'yes') {
        this.form.limit = 1;
      }
    },

    enableLimit(newVal) {
      if (newVal === 'yes') {
        this.form.limit = 1;
      } else {
        this.form.limit = 0;
      }
    },
  },
};
</script>
