<template>
  <main class="flex-1 text overflow-y-auto bg-[#CED1DA] dark:bg-gray-900 p-4 sm:ml-64">
    <div class=" mx-auto">
      <div
        class="relative overflow-hidden bg-[#f7fbff] dark:bg-gray-900 dark:text-white border-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div class="flex justify-between">
          <div>
            <h1 class="text-blue-800 dark:text-blue-600 text-xl md:text-2xl font-bold">
              VIEW EMPLOYEES
            </h1>
          </div>
          <div>
            <router-link :to="{ name: 'HrRegisteremployee' }"><button
                class="bg-[#160959] rounded-full py-2 px-4 text-slate-200 capitalize font-semibold">
                reqister employee
              </button></router-link>
          </div>
        </div>
        <div class="flex flex-col mt-6">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div class="overflow-hidden ">
                <div class="py-2 flex flex-col md:flex-row justify-between items-center md:items-end">
                  <div class="flex items-center">
                      <div class="space-x-2">
                        <label for="number-dd" class="text-md font-medium">Sort</label>
                        <select id="number-dd" name="number" @change="updateItemsPerPage"
                          class="rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 py-2 text-sm bg-gray-50 ">
                          <option value="10">10</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>
                      </div>
                    </div>
                  <div class="relative md:mt-0 w-full md:w-auto">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                      </svg>
                    </div>
                    <input type="text" id="table-search" v-model="searchQuery"
                      class="block py-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-full md:w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search for applications" />
                  </div>
                </div>
                <table
                  class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 hover strip border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <thead class="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th class="x-6 py-3">
                        No.
                      </th>
                      <th
                        class="text-nowrap px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Name
                      </th>
                      <th
                        class="text-nowrap px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Department
                      </th>
                      <th
                        class="text-nowrap px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Position
                      </th>
                      <th
                        class="text-nowrap text-center px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        View
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    <tr v-for="(employee, index) in paginatedApplications" :key="index">
                      <td class="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                        {{ (currentPage - 1) * itemsPerPage + index + 1 }}
                      </td>
                      <td class="text-wrap px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {{ employee.name || 'N/A' }}
                      </td>
                      <td class="text-wrap px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {{ employee.department }}
                      </td>
                      <td class="text-wrap px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {{ employee.position_title }}
                      </td>
                        <td class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          <div v-if="updatingEmployeeId !== employee.emp_id">
                            <button @click="ViewEmployee(employee)"
                              class="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </button>
                          </div>
                          <div v-else class="flex justify-center items-center">
                            <div class="loader"></div>
                          </div>
                        </td>
                    </tr>
                  </tbody>
                </table>
                <nav class="flex items-center flex-col flex-wrap md:flex-row justify-between items-center pt-4"
                  aria-label="Table navigation">
                  <div>
                    <span class="text-xs md:text-xs font-normal text-gray-500 dark:text-gray-400">
                      Showing <span class="font-semibold text-gray-900 dark:text-white">
                        {{ (currentPage - 1) * itemsPerPage + 1 }}-{{ Math.min(currentPage * itemsPerPage,
                          filteredQueryApplications.length) }}
                      </span>
                      of <span class="font-semibold text-gray-900 dark:text-white">{{ filteredQueryApplications.length
                        }}</span>
                    </span>
                  </div>
                  <div>
                    <ul class="inline-flex -space-x-px text-xs md:text-sm h-6 md:h-8">
                      <li>
                        <a href="#" @click.prevent="previousPage"
                          :class="{ 'cursor-not-allowed opacity-50': currentPage === 1 }"
                          class="flex items-center justify-center px-2 md:px-3 h-6 md:h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700">
                          Previous
                        </a>
                      </li>

                      <li v-for="page in visiblePages" :key="page">
                        <template v-if="page === '...'">
                          <span
                            class="flex items-center justify-center px-2 md:px-3 h-6 md:h-8 leading-tight border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700">
                            {{ page }}
                          </span>
                        </template>
                        <template v-else>
                          <a href="#" @click.prevent="goToPage(page)" :class="{
                            'bg-blue-500 text-dark': page === currentPage,
                            'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700': page !== currentPage
                          }"
                            class="flex items-center justify-center px-2 md:px-3 h-6 md:h-8 leading-tight bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700">
                            {{ page }}
                          </a>
                        </template>
                      </li>

                      <li>
                        <a href="#" @click.prevent="nextPage"
                          :class="{ 'cursor-not-allowed opacity-50': currentPage >= totalPages }"
                          class="flex items-center justify-center px-2 md:px-3 h-6 md:h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700">
                          Next
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <!-- View Employees -->
        <div v-show="view"
          class=" fixed top-0 bg-gray-600/50 left-0 right-0 bottom-0 z-50 flex justify-center items-center">
          <div class="mx-auto max-w-screen-2xl ">
            <div class="bg-white dark:bg-gray-900 w-full sm:w-4/5 lg:w-3/5 rounded-xl relative min-h-[90vh]  overflow-auto">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="absolute right-3 top-3 size-6" @click="(view = false), (edit = false)">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>

              <div class="flex my-0 items-center">
                <h1 class="text-xl font-bold m-3 mb-2 ml-7">
                  {{ edit ? 'Edit Employee Profile' : 'Employee Details' }}
                </h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-6 ml-1 cursor-pointer" @click="(edit = true), fetchData()"
                  v-show="!edit">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
              </div>
              <div class="m-3 mt-2 ml-7 h-1/5">
                <img v-if="employee.profile_picture" :src="employee.profile_picture" alt="profile picture"
                  class="h-full object-cover w-40 h-40 rounded-xl" />
                <img v-else
                  src="https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
                  alt="profile picture" class="w-40 h-40 object-cover rounded-xl" />
              </div>

              <!-- employee details -->
              <div v-if="!edit" class="px-4 grid grid-cols-1 mx-auto  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div v-for="(val, key, index) in employee" :key="index" :class="key === 'profile_picture' ? 'hidden' : 'ml-3 mt-1 min-h-16'
                  ">
                  <div v-if="key !== 'profile_picture'">
                    <h1 class="text-base font-semibold text-gray-900 dark:text-gray-100">
                      {{ key + ':' }}
                    </h1>
                    <h1 class="font-thin text-sm text-gray-700 dark:text-gray-300 break-words">
                      {{ val ? val : '-' }}
                    </h1>
                  </div>
                </div>
              </div>

              <!-- edit employees -->
              <div v-else class="px-4 mb-4 mx-auto">
                <div class=" space-x-2 grid grid-cols-1 lg:grid-cols-2 mt-6 w-full">
                  <div>
                    <label for="branchInput" class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                      Branch: <span class="text-red-500">*</span>
                    </label>
                    <select id="branchInput" v-model="form.branch"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option value="" disabled selected>Select a Branch</option>
                      <option v-for="branch in Branches" :key="branch" :value="branch">{{ branch }}</option>
                    </select>
                  </div>
                  <div>
                    <!-- Company -->
                    <label for="companyInput"
                      class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                      Company: <span class="text-red-500">*</span>
                    </label>
                    <select id="companyInput" v-model="form.company"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option value="" disabled selected>Select a Company</option>
                      <option v-for="company in Company" :key="company" :value="company">{{ company }}</option>
                    </select>
                  </div>
                </div>
                <div class="space-x-2 grid grid-cols-1 lg:grid-cols-2 mt-6 w-full">
                  <div>
                    <label for="departmentInput"
                      class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                      Department: <span class="text-red-500">*</span>
                    </label>
                    <select id="departmentInput" v-model="form.department"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option value="" disabled selected>Select a Department</option>
                      <option v-for="department in AllDepartments" :key="department" :value="department">{{ department
                        }}
                      </option>
                    </select>
                  </div>
                  <div>
                    <label for="positionInput"
                      class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                      Position: <span class="text-red-500">*</span>
                    </label>
                    <select id="positionInput" v-model="form.position"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option value="" disabled selected>Select a Position</option>
                      <option v-for="position in AllPositions" :key="position" :value="position">{{ position }}</option>
                    </select>
                  </div>
                </div>
                <div class="space-x-2 grid grid-cols-1 lg:grid-cols-2 mt-6 w-full">
                  <div>
                    <label for="reportingDepartmentInput"
                      class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                      Reporting to (Department): <span class="text-red-500">*</span>
                    </label>
                    <select id="reportingDepartmentInput" v-model="form.reportingDepartment"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option value="" disabled selected>Select a Department</option>
                      <option v-for="department in AllDepartments" :key="department" :value="department">{{ department
                        }}
                      </option>
                    </select>
                  </div>
                  <div>
                    <label for="reportingStaffInput"
                      class="block mb-2 text-sm font-medium text-primary dark:text-white italic">
                      Reporting to (Employee ID): <span class="text-red-500">*</span>
                    </label>
                    <select id="reportingStaffInput" v-model="this.form.reportingId"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option value="" disabled selected>Select an Employee ID</option>
                      <option v-for="employee in filteredReportingEmployees" :key="employee" :value="employee">
                        {{ employee }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 mt-6 w-full">
                  <div>
                    <label :for="inputId" class="font-semibold text-gray-600 dark:text-gray-300">Employee ID<span
                        class="text-red-500">*</span></label>
                    <input :id="inputId" v-model="form.employeeId" @input="limitChar()" :defaultvalue="form.employeeId"
                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text" />
                  </div>
                  <div class="mt-6 lg:mt-0 lg:ml-4">
                    <label class="font-semibold text-gray-600 dark:text-gray-300">Limit</label>
                    <div class="mt-2 ">
                      <div class="space-x-2">
                        <input type="radio" id="no" value="no" v-model="enableLimit" />
                        <label for="no">No</label>

                        <input type="radio" id="yes" value="yes" class="ml-4" v-model="enableLimit" />
                        <label for="yes">Yes</label>
                      </div>
                      <div v-if="enableLimit === 'yes'" class="mt-1">
                        <input id="limitInput" v-model="form.limit"
                          class="border-2 border-gray-200 p-2 w-full rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                          type="number" min="1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 mt-6 w-full">
                  <div>
                    <label :for="inputId" class="font-semibold text-gray-600 dark:text-gray-300">Limit Outpatient<span
                        class="text-red-500">*</span></label>
                    <input :id="inputId" v-model="form.limitOutpatient" :defaultvalue="form.limitOutpatient"
                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="number" />
                  </div>
                  <div class="mt-6 lg:mt-0 lg:ml-4">
                    <label :for="inputId" class="font-semibold text-gray-600 dark:text-gray-300">Limit Medical
                      Dental<span class="text-red-500">*</span></label>
                    <input :id="inputId" v-model="form.limitMedicaldental" :defaultvalue="form.limitMedicaldental"
                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="number" />
                  </div>
                </div>

                <div class="grid grid-cols-1 mt-6 w-full">
                  <div>
                    <label class="font-semibold text-gray-600 dark:text-gray-300">Form Access</label>
                    <div class="mt-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 w-full text-xs md:text-sm">
                      <div>
                        <input type="checkbox" name="local" id="local" v-model="formAccess.local" />
                        <label class="ml-1" for="local">Local Travelling</label>
                      </div>
                      <div>
                        <input type="checkbox" name="oversea" id="oversea" v-model="formAccess.overseas" />
                        <label class="ml-1" for="oversea">Overseas Travelling</label>
                      </div>
                      <div>
                        <input type="checkbox" name="ent" id="ent" v-model="formAccess.entertainment" />
                        <label class="ml-1" for="ent">Entertainment</label>
                      </div>
                      <div>
                        <input type="checkbox" name="sr" id="sr" v-model="formAccess.refreshment" />
                        <label class="ml-1" for="sr">Staff Refreshment</label>
                      </div>
                      <div>
                        <input type="checkbox" name="others" id="others" v-model="formAccess.others" />
                        <label class="ml-1" for="others">Others</label>
                      </div>
                      <div>
                        <input type="checkbox" name="ml" id="ml" v-model="formAccess.medical" />
                        <label class="ml-1" for="ml">Medical Leaves</label>
                      </div>
                      <div>
                        <input type="checkbox" name="hp" id="hp" v-model="formAccess.handphone" />
                        <label class="ml-1" for="hp">Handphone</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-1 mt-6 w-full">
                  <div class="w-full flex justify-end my-2">
                    <button class="py-2 px-6 mt-10 text-white bg-[#160959] hover:bg-blue-950 rounded-md"
                      @click="confirm = true">
                      Save
                    </button>
                    <button class="py-2 px-6 mt-10 text-white bg-gray-500 hover:bg-gray-600 rounded-md ml-2"
                      @click="edit = false">
                      Close
                    </button>
                  </div>
                </div>
              </div>
              <div v-show="confirm"
                class="fixed w-screen h-screen overflow-hidden top-0 left-0 z-50 bg-gray-600/50 dark:bg-gray-800/50 flex justify-center items-center">
                <div class="bg-white dark:bg-gray-700 rounded-md px-8 py-8 min-w-6xl max-h-[250vh]">
                  <h1 class="text-lg mb-2 font-semibold">
                    Confirm to Save the edit?
                  </h1>
                  <div class="flex justify-center">
                    <button class="rounded-lg py-2 px-4 bg-[#160959] hover:bg-blue-950 text-white"
                      @click="updateProfile()">
                      Confirm
                    </button>
                    <button class="rounded-lg py-2 px-4 bg-gray-500 hover:bg-gray-600 text-white ml-2"
                      @click="confirm = false">
                      Back
                    </button>
                  </div>
                </div>
              </div>

              <div class="w-screen h-screen fixed z-50 flex justify-center items-center top-0 left-0 backdrop-blur-md"
                v-if="loading">
                <div class="absolute w-screen h-screen bg-gray-900 opacity-30"></div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" class="w-16 h-16 z-50">
                  <circle transform="rotate(0)" transform-origin="center" fill="none" stroke="blue" stroke-width="10"
                    stroke-linecap="round" stroke-dasharray="230 1000" stroke-dashoffset="0" cx="100" cy="100" r="70">
                    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="2"
                      repeatCount="indefinite">
                    </animateTransform>
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
    </div>
  </main>
</template>

<script>
import $ from 'jquery';
import 'datatables.net-dt';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import axios from 'axios';
export default {
  components: {
  },
  data() {
    return {
      updatingEmployeeId: null,
      inputId: 'branchInput',
      // need to fetch from API
      employeesData: [],
      view: false,
      employee: {},
      edit: false,
      confirm: false,
      employeeCache: null,

      userApplications: [],
      searchQuery: '',
      sortField: 'date_requested',
      sortDirection: 'desc',
      currentPage: 1,
      itemsPerPage: 10,

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
        local: '',
        overseas: '',
        entertainment: '',
        refreshment: '',
        others: '',
        medical: '',
        handphone: '',
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

  computed: {
    paginatedApplications() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      const paginatedApps = this.filteredQueryApplications.slice(start, end);
      // console.log('Paginated Applications:', paginatedApps);
      return paginatedApps;
    },
    filteredQueryApplications() {
      const query = this.searchQuery.toLowerCase();
      return this.sortedApplications.filter((employee) =>
        (employee.name && employee.name.toLowerCase().includes(query)) ||
        (employee.department && employee.department.toLowerCase().includes(query)) ||
        (employee.position_title && employee.position_title.toLowerCase().includes(query))
      );
    },
    sortedApplications() {
      return [...this.userApplications].sort((a, b) => {
        const dateA = new Date(a[this.sortField]).getTime();
        const dateB = new Date(b[this.sortField]).getTime();
        return this.sortDirection === 'desc' ? dateB - dateA : dateA - dateB;
      });
    },

    totalPages() {
      return Math.ceil(this.filteredQueryApplications.length / this.itemsPerPage);
    },
    visiblePages() {
      const total = this.totalPages;
      const current = this.currentPage;
      const maxVisiblePages = 2;

      let pages = [];

      if (total <= maxVisiblePages) {
        pages = Array.from({ length: total }, (_, i) => i + 1);
      } else {
        if (current === 1) {
          pages = [1, 2, 3, '...', total];
        }
        else if (current === total) {
          pages = [1, '...', total - 2, total - 1, total];
        }
        else if (current === total - 1) {
          pages = [1, '...', total - 2, total - 1, total];
        }
        else {
          pages = [1, '...', current - 1, current, current + 1, '...', total];
        }
      }

      return pages;
    },
  },

  methods: {

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    goToPage(page) {
      if (typeof page === 'number') {
        this.currentPage = page;
      }
    },
    updateItemsPerPage(event) {
      this.itemsPerPage = parseInt(event.target.value);
      this.currentPage = 1;
    },
    toggleSort(field) {
      if (this.sortField === field) {
        this.sortDirection = this.sortDirection === 'desc' ? 'asc' : 'desc';
      } else {
        this.sortField = field;
        this.sortDirection = 'desc';
      }
    },
    initializeDataTable() {
      $(this.$refs.myTable).DataTable({});
    },
    FetchEmployeesData() {
      axios
        .get('http://172.28.28.116:7239/api/User/GetAllEmployees')
        .then((response) => {
          this.employeesData = response.data.result;
          if (this.employeesData.length > 0) {
            this.userApplications = this.employeesData;
          }

          this.$nextTick(() => {
            this.initializeDataTable();
          });
        });
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
    async ViewEmployee(employee) {
      this.employee = {
        ...this.employee,
        ...employee,
      };
      if (!this.isValidGuid(employee.username_id)) {
        console.error("Invalid username_id: ", employee.username_id);
        return;
      }
      try {
        this.view = true;
        await this.getFormData(employee, employee.emp_id, employee.username_id, employee.reporting_to);
        await this.getFormAccess(employee.username_id);
        // await this.updateProfile(employee.username_id);
      } catch (error) {
        console.error("Error in ViewEmployee while fetching form data: ", error);
        throw error;
      }
    },
    isValidGuid(guid) {
      const guidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
      return guidRegex.test(guid);
    },

    async getFormData(employee, emp_id, username_id, reporting_to) {
      console.log("4. employee in getFormData method: ", employee);
      console.log("1. emp_id in getFormData method: ", emp_id);
      console.log("2. username in getFormData method: ", username_id);
      console.log("(2). username in getFormData method: ", reporting_to);

      let reportingName = '';
      try {
        const reportingResponse = await axios.get('http://172.28.28.116:7239/api/User/GetAllEmployees');
        const allEmployees = reportingResponse.data.result;
        console.log("All employees:", allEmployees);
        const reportingEmployee = allEmployees.find(emp => emp.emp_id === employee.reporting_to);
        console.log("Found reporting employee:", reportingEmployee);
        console.log("Reporting to (emp_id):", reporting_to);


        if (reportingEmployee) {
          reportingName = reportingEmployee.name;
          console.log("Reporting name:", reportingName);
        } else {
          reportingName = 'Unknown';
        }
      } catch (error) {
        console.error("Error in getFormData while fetching reporting name: ", error);
        throw error;
      }



      try {
        const response = await axios.get(`http://172.28.28.116:7239/api/User/GetEmployeeById/${username_id}`);
        // console.log("3. All employees fetched successfully:", response.data.result);
        const responseResult = response.data.result;
        console.log("4. responseResult: ", responseResult);

        const reportingId = `${reportingName} (${employee.reporting_to})`;
        console.log("Constructed reportingId:", reportingId);

        if (employee.reporting_to_dept) {
          // console.log("reporting to department:", employee.reporting_to_dept)
          await this.changeEmployee(employee.reporting_to_dept);

        }


        this.form = {
          ...this.form,
          branch: employee.branch,
          company: employee.company_name,
          department: employee.department,
          position: employee.position_title,
          userId: employee.name,
          employeeId: employee.emp_id,
          reportingDepartment: employee.reporting_to_dept,
          reportingId,
          limit: employee.limit_amount,
          limitOutpatient: employee.limit_outpatient,
          limitMedicaldental: employee.limit_medicaldental,
          userNameId: employee.username_id,
        };

        console.log("Form data set in getFormData:", this.form);

        console.log("Form.reportingId after assignment:", this.form.reportingId);


        // console.log("5. Form data set in getFormData:", this.form);

        if (this.form.reportingId) {
          // console.log("Reporting ID exists:", this.form.reportingId);
        } else {
          // console.log("Reporting ID does not exist.");
        }

        this.enableLimit = employee.limit_amount > 0 ? 'yes' : 'no';
        this.form.limit = employee.limit_amount > 0 ? employee.limit_amount : 0;

        this.$nextTick(() => {
          console.log("Form data after nextTick:", this.form);
        });


      } catch (error) {
        console.error("Error fetching employees in getFormData:", error);
      }
    },
    async updateProfile() {
      console.log('form list', this.form);
      if (!this.form.reportingId) {
        console.log('Reporting ID is required');
        return;
      }
      if (!this.form.employeeId) {
        console.log('Employee ID is required');
        return;
      }
      this.loadingText = 'Uploading';
      this.loading = true;
      const accessData = this.convertValues();

      this.updatingEmployeeId = this.form.employeeId; // Trigger loader
      console.log('Loader triggered for:', this.updatingEmployeeId);

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
      // console.log('Form Data:', registerData);

      try {
        axios.put('http://172.28.28.116:7165/api/Admin/Update_UserProfile',registerData)
        .then(() => {
          this.loading = false;
          this.confirm = false;
          this.edit = false;
          this.view = false;
        })
        .catch(error => {
          console.error('Error while updating user profile:', error.response.data);
        });
      const index = this.userApplications.findIndex(emp => emp.emp_id === this.form.employeeId);
      if (index !== -1) {
        this.userApplications[index] = {
          ...this.userApplications[index],
          name: this.form.userId,
          department: this.form.department,
          position_title: this.form.position,
          branch: this.form.branch,
          company_name: this.form.company,
          reporting_to: this.form.reportingId.split('(')[1].split(')')[0],
          reporting_to_dept: this.form.reportingDepartment,
        };
        this.userApplications = [...this.userApplications];
      }
      await new Promise(resolve => setTimeout(resolve, 1500));
      } catch (error){
        console.error('Error while updating user profile:', error.response?.data || error);
      } finally {
        this.updatingEmployeeId = null;
      }
    },
    async getFormAccess(username_id) {

      // console.log("6. this inside getFormAccess: ", employee);
      // console.log("6. getFormAccess called with username_id: ", username_id);

      if (!username_id) {
        console.error("Form data or username_id is missing. Cannot proceed with getFormAccess.");
        return;
      }

      try {
        const response = await axios.get(`http://172.28.28.116:7239/api/User/GetEmployeeById/${username_id}`);


        const result = response.data.result;

        if (!result || result.length === 0) {
          console.error("No access data found for the given username_id:", username_id);
          return;
        }

        this.formAccess = {
          local: result[0].local_access == 0 ? false : true,
          overseas: result[0].overseas_access == 0 ? false : true,
          entertainment: result[0].ent_access == 0 ? false : true,
          refreshment: result[0].staff_access == 0 ? false : true,
          others: result[0].others_access == 0 ? false : true,
          medical: result[0].md_access == 0 ? false : true,
          handphone: result[0].phone_access == 0 ? false : true,
        };

      } catch (error) {
        console.error("Error fetching form access in getFormAccess:", error);
      }
    },

    async fetchData() {
      this.loadingText = 'Fetching';
      this.loading = true;

      try {
        const response = await axios.get('http://172.28.28.91:89/api/Security/getusersAD');
        this.fetchOptions = response.data;
        // console.log("list of fetchOptions from usersAD:", response);

        // console.log("Current reporting department:", this.form.reportingDepartment);
        await this.extractBranches();
        await this.getAllDepartments();
        // await this.getFormAccess();

        if (this.form.branch) {
          this.changeDepartment(this.form.branch);
        }

        if (this.form.reportingDepartment) {
          await this.changeEmployee(this.form.reportingDepartment);
          await this.validateReportingId();
        }
      } catch (error) {
        this.error = error;
        console.error('There was an error!', error);
      } finally {
        this.loading = false;
      }
    },
    async extractBranches() {
      // console.log("extractBranches - fetchOptions:", this.fetchOptions);
      const branches = this.fetchOptions.map((item) => item.branch);
      const uniqueBranches = [...new Set(branches)];
      this.Branches = uniqueBranches;
      // console.log("Unique branches:", uniqueBranches);
    },

    async getAllDepartments() {
      try {
        const departments = this.fetchOptions.map((item) => item.department);
        const uniqueDepartments = [...new Set(departments)].sort((a, b) => a.localeCompare(b));
        this.AllDepartments = uniqueDepartments;
      } catch (error) {
        this.error = error;
        console.error('Error fetching departments:', error);
      }
    },
    async getAllPositions() {
      try {
        const response = await axios.get('http://172.28.28.116:7239/api/User/GetDesignation');

        this.AllPositions = response.data.result
          .map((item) => item.designation)
          .sort((a, b) => a.localeCompare(b));
      } catch (error) {
        this.error = error;
        console.error('Error fetching positions:', error);
      }
    },

    async getAllCompanies() {
      try {
        const response = await axios.get('http://172.28.28.116:7239/api/User/GetCompany');
        this.Company = response.data.result.map((item) => item.company_name);
      } catch (error) {
        this.error = error;
        console.error('Error fetching companies:', error);
      }
    },
    // limit the employee id to be 10 characters
    limitChar() {
      if (this.form.employeeId.length >= 10) {
        this.form.employeeId = this.form.employeeId.substring(0, 10);
      }
    },

    async loadEmployeeData() {
      try {
        const response = await axios.get('http://172.28.28.116:7239/api/User/GetAllEmployees');
        this.employeeCache = response.data.result;
      } catch (error) {
        console.error('Error loading employee data:', error);
      }
    },

    // function for watcher
    changeDepartment(newBranch) {
      let Departments = this.fetchOptions
        .filter((item) => item.branch === newBranch)
        .map((item) => item.department);

      const uniqueDepartments = [...new Set(Departments)];

      this.filteredDepartments = uniqueDepartments;

      // console.log(this.filteredDepartments);
    },

    onReportingIdChange(event) {
      // console.log('Reporting ID changed to:', event.target.value);
      this.form.reportingId = event.target.value;
    },

    async validateReportingId() {
      if (!this.form.reportingId || !this.filteredReportingEmployees) return;

      const isValid = this.filteredReportingEmployees.includes(this.form.reportingId);
      if (!isValid) {
        console.warn('Invalid reportingId detected');
        this.form.reportingId = '';
      }
    },


    async changeEmployee(newReportingDept) {
      if (!this.employeeCache || this.employeeCache.length === 0) {
        // console.warn('Employee Cache is empty. Loading employee data...');
        await this.loadEmployeeData();
      }

      const departmentEmployees = this.fetchOptions
        .filter(item => item.department === newReportingDept)
        .map(item => ({
          userName: item.userName,
          userId: item.userId,
          department: item.department,
        }));

      console.log('Department Employees:', departmentEmployees);

      const uniqueEmployees = [
        ...new Map(
          departmentEmployees.map(employee => [employee.userId, employee])
        ).values(),
      ];

      const employeesWithEmpId = uniqueEmployees.map(employee => {
        const match = this.employeeCache.find(emp => emp.username_id === employee.userId && emp.department === employee.department);
        if (match) {
          return {
            name: match.name,
            empId: match.emp_id,
            department: employee.department,
          };
        }
        return null;
      }).filter(Boolean);

      this.filteredReportingEmployees = employeesWithEmpId.map(
        employee => `${employee.name} (${employee.empId})`
      );

      console.log('Filtered Reporting Employees:', this.filteredReportingEmployees);
    }
  },

  async created() {
    // Load employee data when component is created
    await this.loadEmployeeData();
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
    this.getAllPositions();
    this.getAllCompanies();

  },
  watch: {
    'form.branch'(newBranch) {
      // console.group('[Branch Watcher]');
      // console.log('Branch changed to:', newBranch);
      this.changeDepartment(newBranch);
      console.groupEnd();
    },

    'form.reportingDepartment': {
      immediate: true,
      async handler(newDept) {
        // console.group('[Department Watcher]');
        // console.log('Department changed to:', newDept);
        await this.changeEmployee(newDept);
        // console.log('Filtered employees:', this.filteredReportingEmployees);

        if (this.form.reportingId) {
          const isValidOption = this.filteredReportingEmployees.includes(this.form.reportingId);
          // console.log('Current reportingId validity:', isValidOption);
          if (!isValidOption) {
            // console.warn('Invalid reportingId detected, resetting...');
            this.form.reportingId = '';
          }
        }
        console.groupEnd();
      },
    },

    'form.reportingId': {
      immediate: true,
      handler(newValue) {
        console.group('[Employee Watcher]');
        console.log('ReportingId changed to:', newValue);
        console.groupEnd();
      },
    },
  },
}
</script>

<style scoped>
.loader {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  margin: auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
