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
            <h1 class="text-xl font-bold m-3 ml-7">Employee Details</h1>
            <div class="m-3 ml-7 h-1/5">
              <img
                :src="employee.profile_picture"
                alt="profile picture"
                class="h-full object-cover rounded-xl"
              />
            </div>
            <div class="pl-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
export default {
  data() {
    return {
      // need to fetch from API
      employeesData: [],
      view: false,
      employee: {},
    };
  },
  methods: {
    ViewEmployee(data) {
      this.employee = data;
      this.view = true;
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
};
</script>
