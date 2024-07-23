<template>
  <main
    class="flex-1 text overflow-y-auto bg-[#CED1DA] dark:bg-gray-900 p-4 sm:ml-64"
  >
    <div class="container mx-auto">
      <div
        class="relative overflow-hidden bg-[#f7fbff] dark:bg-gray-900 dark:text-white border-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <h1
          class="text-blue-800 dark:text-blue-600 text-xl md:text-2xl font-bold"
        >
          VIEW EMPLOYEES
        </h1>

        <!-- Datatable -->
        <div class="flex flex-col mt-6">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
              class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"
            >
              <div
                class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg"
              >
                <table
                  ref="myTable"
                  class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 hover strip"
                >
                  <thead class="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        class="text-nowrap px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        No.
                      </th>
                      <th
                        class="text-nowrap px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Name
                      </th>
                      <th
                        class="text-nowrap px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Department
                      </th>
                      <th
                        class="text-nowrap px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Position
                      </th>
                      <th
                        class="text-nowrap px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        View
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
                  >
                    <tr v-for="(employee, index) in employeesData" :key="index">
                      <td
                        class="text-wrap px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        {{ index + 1 }}
                      </td>
                      <td
                        class="text-wrap px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        {{ employee.name }}
                      </td>
                      <td
                        class="text-wrap px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        {{ employee.department }}
                      </td>
                      <td
                        class="text-wrap px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        {{ employee.position_title }}
                      </td>
                      <td
                        class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                      >
                        <button
                          @click="ViewEmployee(employee)"
                          class="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <!-- View Employees -->
        <div
          v-show="view"
          class="fixed top-0 left-0 w-screen h-screen bg-gray-600/50 z-50 flex justify-center items-center"
        >
          <div
            class="bg-white w-full sm:w-4/5 lg:w-3/5 rounded-xl relative h-5/6 overflow-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="absolute right-3 top-3 size-6"
              @click="view = false"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 absolute bottom-3 right-3 cursor-pointer"
              @click="(edit = true), fetchData()"
              v-show="!edit"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>

            <h1 class="text-xl font-bold m-3 ml-7">
              {{ edit ? 'Edit Employee Profile' : 'Employee Details' }}
            </h1>
            <div class="m-3 ml-7 h-1/5">
              <img
                :src="employee.profile_picture"
                alt="profile picture"
                class="h-full object-cover rounded-xl"
              />
            </div>

            <!-- employee details -->
            <div
              v-if="!edit"
              class="pl-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            >
              <div
                v-for="(val, key, index) in employee"
                :key="index"
                :class="
                  key === 'profile_picture' ? 'hidden' : 'ml-3 mt-1 min-h-16'
                "
              >
                <div v-if="key !== 'profile_picture'">
                  <h1 class="text-base font-semibold text-gray-900">
                    {{ key + ':' }}
                  </h1>
                  <h1 class="font-thin text-sm text-gray-700 break-words">
                    {{ val ? val : '-' }}
                  </h1>
                </div>
              </div>
            </div>

            <!-- edit employees -->
            <div v-else class="px-4 mb-4">
              <div class="grid grid-cols-1 lg:grid-cols-2 mt-6 w-full">
                <DropDown
                  inputId="branchInput"
                  label="Branch"
                  :options="Branches"
                  :mandatory="true"
                  :defaultvalue="form.branch"
                  @input="(payload) => (form.branch = payload)"
                />
                <DropDown
                  inputId="companyInput"
                  label="Company"
                  :options="Company"
                  :mandatory="true"
                  :defaultvalue="form.company"
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
                  :defaultvalue="form.department"
                  @input="(payload) => (form.department = payload)"
                />
                <DropDown
                  inputId="positionInput"
                  label="Position"
                  :options="AllPositions"
                  :mandatory="true"
                  :defaultvalue="form.position"
                  class="mt-6 lg:mt-0 lg:ml-4"
                  @input="(payload) => (form.position = payload)"
                />
              </div>

              <div class="grid grid-cols-1 lg:grid-cols-2 mt-6 w-full">
                <DropDown
                  inputId="reportingDepartmentInput"
                  label="Reporting to (Department)"
                  :options="AllDepartments"
                  :mandatory="true"
                  :defaultvalue="form.reportingDepartment"
                  @input="(payload) => (form.reportingDepartment = payload)"
                />
                <DropDown
                  inputId="reportingStaffInput"
                  label="Reporting to (Employee ID)"
                  :options="filteredReportingEmployees"
                  :mandatory="true"
                  :defaultvalue="form.reportingId"
                  class="mt-6 lg:mt-0 lg:ml-4"
                  @input="(payload) => (form.reportingId = payload)"
                />
              </div>

              <div class="grid grid-cols-1 lg:grid-cols-2 mt-6 w-full">
                <div>
                  <label class="font-semibold text-gray-600">Limit</label>
                  <div class="mt-2">
                    <input
                      type="radio"
                      id="no"
                      value="no"
                      v-model="enableLimit"
                    />
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
                <div class="mt-6 lg:mt-0 lg:ml-4">
                  <label :for="inputId" class="font-semibold text-gray-600"
                    >Employee ID<span class="text-red-500">*</span></label
                  >
                  <input
                    :id="inputId"
                    v-model="form.employeeId"
                    @input="limitChar()"
                    :defaultvalue="form.employeeId"
                    class="border-2 border-gray-200 p-2 w-full rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    type="text"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 mt-6 w-full">
                <!-- Button -->
                <div class="w-full flex justify-end my-2">
                  <button
                    class="py-2 px-6 mt-10 text-white bg-[#160959] hover:bg-blue-950 rounded-md"
                    @click="confirm = true"
                  >
                    Save
                  </button>
                  <button
                    class="py-2 px-6 mt-10 text-white bg-gray-500 hover:bg-gray-600 rounded-md ml-2"
                    @click="edit = false"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
            <!-- Confirmation -->
            <div
              v-show="confirm"
              class="fixed w-screen h-screen overflow-hidden top-0 left-0 z-50 bg-gray-600/50 flex justify-center items-center"
            >
              <div class="bg-white rounded-2xl px-4 py-6">
                <h1 class="text-lg mb-2 font-semibold">
                  Confirm to Save the edit?
                </h1>
                <div class="flex justify-center">
                  <button
                    class="rounded-lg p-2 bg-[#160959] hover:bg-blue-950 text-white"
                    @click="
                      Register(),
                        (confirm = false),
                        (edit = false),
                        (view = false)
                    "
                  >
                    Confirm
                  </button>
                  <button
                    class="rounded-lg p-2 bg-gray-500 hover:bg-gray-600 text-white ml-2"
                    @click="confirm = false"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>

            <!-- Loading animation -->
            <div
              class="w-screen h-screen fixed z-40 flex justify-center items-center top-0 left-0"
              v-if="loading"
            >
              <div
                class="absolute w-screen h-screen bg-gray-900 opacity-10"
              ></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
                class="w-24 h-24 z-50"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import $ from 'jquery';
import 'datatables.net-dt';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import axios from 'axios';
import DropDown from './DropDown.vue';
export default {
  components: {
    DropDown,
  },
  data() {
    return {
      // need to fetch from API
      employeesData: [],
      view: false,
      employee: {},
      edit: false,
      confirm: false,

      //edit employee data
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

      loading: false,
    };
  },
  methods: {
    ViewEmployee(data) {
      this.employee = data;
      this.view = true;
      this.form = {
        branch: data.branch,
        company: data.company_name,
        department: data.department,
        position: data.position_title,
        userId: data.name,
        employeeId: data.emp_id,
        reportingDepartment: data.reporting_to_dept,
        reportingId: data.reporting_to,
        limit: data.limit_amount,
        userNameId: data.username_id,
      };
    },
    initializeDataTable() {
      $(this.$refs.myTable).DataTable({});
    },
    FetchEmployeesData() {
      axios
        .get('http://172.28.28.91:97/api/User/GetAllEmployees')
        .then((response) => {
          this.employeesData = response.data.result;
          console.log(this.employeesData);

          this.$nextTick(() => {
            this.initializeDataTable();
          });
        });
    },
    Register() {
      console.log('form ', this.form);
      // Post the 'form' object to API
      const registerData = {
        company_name: this.form.company,
        limit_amount: this.form.limit,
        userNameId: this.form.userNameId,
        branch: this.form.branch,
        userName: this.form.userId,
        employeeId: this.form.employeeId,
        department: this.form.department,
        reportingToDept: this.form.reportingDepartment,
        reportingToId: this.form.reportingId,
        position: this.form.position,
      };
      console.log('Form Data:', registerData);

      axios
        .put(
          'http://172.28.28.91:86/api/Admin/Register_UserProfile',
          registerData
        )
        .then((response) => {
          console.log('Response:', response.data);
          this.FetchEmployeesData();
          this.$nextTick(() => {
            this.initializeDataTable();
          });
          // Handle success
        })
        .catch((error) => {
          console.error('Error:', error);
          // Handle error
        });
    },
    async fetchData() {
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
  mounted() {
    // Sidebar close or open
    let openOrNot = localStorage.getItem('openOrNot');
    const element = document.querySelector('main');
    if (element && openOrNot == 'false') {
      element.classList.add('become-big');
    } else if (element && openOrNot == 'true') {
      element.classList.remove('become-big');
    }

    // fetch claims data from api
    this.FetchEmployeesData();
  },
  watch: {
    'form.branch'(newBranch) {
      // This will execute whenever branch value changes
      let Departments = this.fetchOptions
        .filter((item) => item.branch === newBranch)
        .map((item) => item.department);

      const uniqueDepartments = [...new Set(Departments)];

      this.filteredDepartments = uniqueDepartments;

      console.log(this.filteredDepartments);
    },

    async 'form.reportingDepartment'(newReportingDept) {
      // This will execute whenever department value changes
      console.log('123');
      let Employees = this.fetchOptions
        .filter((item) => item.department === newReportingDept)
        .map((item) => ({
          userName: item.userName,
          userId: item.userId,
        }));

      const uniqueEmployees = [
        ...new Map(
          Employees.map((employee) => [employee.userId, employee])
        ).values(),
      ];

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
