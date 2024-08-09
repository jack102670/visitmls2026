<template>
  <main
    class="flex-1 text overflow-y-auto bg-[#CED1DA] dark:bg-gray-900 p-4 sm:ml-64"
  >
    <div class="container mx-auto">
      <div
        class="relative overflow-hidden bg-[#f7fbff] dark:bg-gray-900 dark:text-white border-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <div class="flex justify-between">
          <div>
            <h1
              class="text-blue-800 dark:text-blue-600 text-xl md:text-2xl font-bold"
            >
              VIEW EMPLOYEES
            </h1>
          </div>
          <div>
            <router-link :to="{ name: 'HrRegisteremployee' }"
              ><button
                class="bg-[#160959] rounded-full py-2 px-4 text-slate-200 capitalize font-semibold"
              >
                reqister employee
              </button></router-link
            >
          </div>
        </div>

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
            class="bg-white dark:bg-gray-900 w-full sm:w-4/5 lg:w-3/5 rounded-xl relative h-5/6 overflow-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="absolute right-3 top-3 size-6"
              @click="(view = false), (edit = false)"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>

            <div class="flex my-0 items-center">
              <h1 class="text-xl font-bold m-3 mb-2 ml-7">
                {{ edit ? 'Edit Employee Profile' : 'Employee Details' }}
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 ml-1 cursor-pointer"
                @click="(edit = true), fetchData()"
                v-show="!edit"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </div>
            <div class="m-3 mt-2 ml-7 h-1/5">
              <img
                v-if="employee.profile_picture"
                :src="employee.profile_picture"
                alt="profile picture"
                class="h-full object-cover rounded-xl"
              />
              <img
                v-else
                src="https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
                alt="profile picture"
                class="h-full object-cover rounded-xl"
              />
            </div>

            <!-- employee details -->
            <div
              v-if="!edit"
              class="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            >
              <div
                v-for="(val, key, index) in employee"
                :key="index"
                :class="
                  key === 'profile_picture' ? 'hidden' : 'ml-3 mt-1 min-h-16'
                "
              >
                <div v-if="key !== 'profile_picture'">
                  <h1
                    class="text-base font-semibold text-gray-900 dark:text-gray-100"
                  >
                    {{ key + ':' }}
                  </h1>
                  <h1
                    class="font-thin text-sm text-gray-700 dark:text-gray-300 break-words"
                  >
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
                  <label
                    :for="inputId"
                    class="font-semibold text-gray-600 dark:text-gray-300"
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
                <div class="mt-6 lg:mt-0 lg:ml-4">
                  <label class="font-semibold text-gray-600 dark:text-gray-300"
                    >Limit</label
                  >
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
              </div>

              <div class="grid grid-cols-1 lg:grid-cols-2 mt-6 w-full">
                <div>
                  <label
                    :for="inputId"
                    class="font-semibold text-gray-600 dark:text-gray-300"
                    >Limit Outpatient<span class="text-red-500">*</span></label
                  >
                  <input
                    :id="inputId"
                    v-model="form.limitOutpatient"
                    :defaultvalue="form.limitOutpatient"
                    class="border-2 border-gray-200 p-2 w-full rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    type="number"
                  />
                </div>
                <div class="mt-6 lg:mt-0 lg:ml-4">
                  <label
                    :for="inputId"
                    class="font-semibold text-gray-600 dark:text-gray-300"
                    >Limit Medical Dental<span class="text-red-500"
                      >*</span
                    ></label
                  >
                  <input
                    :id="inputId"
                    v-model="form.limitMedicaldental"
                    :defaultvalue="form.limitMedicaldental"
                    class="border-2 border-gray-200 p-2 w-full rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    type="number"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 mt-6 w-full">
                <div>
                  <label class="font-semibold text-gray-600 dark:text-gray-300"
                    >Form Access</label
                  >
                  <div
                    class="mt-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 w-full text-xs md:text-sm"
                  >
                    <div>
                      <input
                        type="checkbox"
                        name="local"
                        id="local"
                        v-model="formAccess.local"
                      />
                      <label class="ml-1" for="local">Local Travelling</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="oversea"
                        id="oversea"
                        v-model="formAccess.overseas"
                      />
                      <label class="ml-1" for="oversea"
                        >Overseas Travelling</label
                      >
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="ent"
                        id="ent"
                        v-model="formAccess.entertainment"
                      />
                      <label class="ml-1" for="ent">Entertainment</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="sr"
                        id="sr"
                        v-model="formAccess.refreshment"
                      />
                      <label class="ml-1" for="sr">Staff Refreshment</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="others"
                        id="others"
                        v-model="formAccess.others"
                      />
                      <label class="ml-1" for="others">Others</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="ml"
                        id="ml"
                        v-model="formAccess.medical"
                      />
                      <label class="ml-1" for="ml">Medical Leaves</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="hp"
                        id="hp"
                        v-model="formAccess.handphone"
                      />
                      <label class="ml-1" for="hp">Handphone</label>
                    </div>
                  </div>
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
              class="fixed w-screen h-screen overflow-hidden top-0 left-0 z-50 bg-gray-600/50 dark:bg-gray-800/50 flex justify-center items-center"
            >
              <div class="bg-white dark:bg-gray-700 rounded-2xl px-4 py-6">
                <h1 class="text-lg mb-2 font-semibold">
                  Confirm to Save the edit?
                </h1>
                <div class="flex justify-center">
                  <button
                    class="rounded-lg p-2 bg-[#160959] hover:bg-blue-950 text-white"
                    @click="Register()"
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

            <!-- Loading Animation -->
            <div
              class="w-screen h-screen fixed z-50 flex justify-center items-center top-0 left-0 backdrop-blur-md"
              v-if="loading"
            >
              <div
                class="absolute w-screen h-screen bg-gray-900 opacity-30"
              ></div>
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
        limit: null,
        limitOutpatient: '',
        limitMedicaldental: '',
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

      formAccess: {
        local: false,
        overseas: false,
        entertainment: false,
        refreshment: false,
        others: false,
        medical: false,
        handphone: false,
      },

      enableLimit: 'no',

      loading: false,
      loadingText: '',
    };
  },
  methods: {
    async ViewEmployee(data) {
      this.employee = {
        profile_picture: data.profile_picture,
        Username: data.username,
        Name: data.name,
        'Employee ID': data.emp_id,
        Branch: data.branch,
        Company: data.company_name,
        Department: data.department,
        Position: data.position_title,
        'Reporting ID': data.reporting_to,
        'Reporting Department': data.reporting_to_dept,
        Email: data.email_address,
        Phone: data.phone_number,
        Address: data.home_address,
        Bank: data.bank_name,
        'Bank Number': data.bank_number,
        'Limit Handphone': data.limit_amount,
        'Limit Outpatient': data.limit_outpatient,
        'Limit Medical Dental': data.limit_medicaldental,
      };

      console.log('employee', this.employee);

      this.view = true;
      await this.getFormData(data, data.reporting_to);
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
    async getFormData(data, id) {
      await axios
        .get('http://172.28.28.91:97/api/User/GetAllEmployees')
        .then((response) => {
          console.log(response.data.result.filter((item) => item.emp_id == id));
          const reportingName = response.data.result.filter(
            (item) => item.emp_id == id
          )[0].name;

          this.form = {
            branch: data.branch,
            company: data.company_name,
            department: data.department,
            position: data.position_title,
            userId: data.name,
            employeeId: data.emp_id,
            reportingDepartment: data.reporting_to_dept,
            reportingId: reportingName + ' (' + data.reporting_to + ')',
            limit: data.limit_amount,
            limitOutpatient: data.limit_outpatient,
            limitMedicaldental: data.limit_medicaldental,
            userNameId: data.username_id,
          };

          if (data.limit_amount > 0) {
            this.enableLimit = 'yes';
            this.form.limit = data.limit_amount;
          } else {
            this.enableLimit = 'no';
            this.form.limit = 0;
          }
        });
    },
    Register() {
      console.log('form ', this.form);
      this.loadingText = 'Uploading';
      this.loading = true;
      const accessData = this.convertValues();

      // Post the 'form' object to API
      const registerData = {
        company_name: this.form.company,
        limit_amount: this.form.limit,
        //userNameId: this.form.userNameId,
        branch: this.form.branch,
        //userName: this.form.userId,
        employeeId: this.form.employeeId,
        department: this.form.department,
        reportingToDept: this.form.reportingDepartment,
        reportingToId: this.form.reportingId.split('(')[
          // eslint-disable-next-line no-unexpected-multiline
          this.form.reportingId.split('(').length - 1
        ].split(')')[0],
        position: this.form.position,
        local_access: accessData.local,
        overseas_access: accessData.overseas,
        md_access: accessData.medical,
        phone_access: accessData.handphone,
        staff_access: accessData.refreshment,
        ent_access: accessData.entertainment,
        others_access: accessData.others,
        limit_md_dental: this.form.limitMedicaldental,
        limit_outpatient: this.form.limitOutpatient,
      };
      console.log('Form Data:', registerData);

      axios
        .put(
          'http://172.28.28.91:86/api/Admin/Update_UserProfile',
          registerData
        )
        .then((response) => {
          console.log('Response:', response.data);
          this.loading = false;
          this.confirm = false;
          this.edit = false;
          this.view = false;

          window.location.reload();

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
          this.getFormAccess();

          if (this.form.branch) {
            this.changeDepartment(this.form.branch);
          }

          if (this.form.reportingDepartment) {
            this.changeEmployee(this.form.reportingDepartment);
          }
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
    getFormAccess() {
      axios
        .get(
          'http://172.28.28.91:97/api/User/GetEmployeeById/' +
            this.form.userNameId
        )
        .then((response) => {
          console.log('result', response.data.result);
          const result = response.data.result;
          this.formAccess = {
            local: result[0].local_access == 0 ? false : true,
            overseas: result[0].overseas_access == 0 ? false : true,
            entertainment: result[0].ent_access == 0 ? false : true,
            refreshment: result[0].staff_access == 0 ? false : true,
            others: result[0].others_access == 0 ? false : true,
            medical: result[0].md_access == 0 ? false : true,
            handphone: result[0].phone_access == 0 ? false : true,
          };
        });
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
    convertValues() {
      let convertedValues = Object.keys(this.formAccess).reduce(
        (result, key) => {
          result[key] = this.formAccess[key] ? 1 : 0;
          return result;
        },
        {}
      );
      return convertedValues;
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

    // function for watcher
    changeDepartment(newBranch) {
      let Departments = this.fetchOptions
        .filter((item) => item.branch === newBranch)
        .map((item) => item.department);

      const uniqueDepartments = [...new Set(Departments)];

      this.filteredDepartments = uniqueDepartments;

      console.log(this.filteredDepartments);
    },
    async changeEmployee(newReportingDept) {
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
      this.changeDepartment(newBranch);
    },

    async 'form.reportingDepartment'(newReportingDept) {
      // This will execute whenever department value changes
      console.log('123');
      this.changeEmployee(newReportingDept);
    },

    'form.limit'(newLimit) {
      if (newLimit <= 0 && this.enableLimit == 'yes') {
        this.form.limit = 1;
      }
    },

    enableLimit(newVal) {
      if (newVal === 'yes') {
        if (this.form.limit == 0) {
          this.form.limit = 1;
        }
      } else if (newVal == 'no') {
        this.form.limit = 0;
      }
      console.log(this.form.limit);
    },
  },
};
</script>
