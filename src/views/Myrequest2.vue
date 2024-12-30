<template>
  <main class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto">
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-bold text-slate-900 dark:text-white"></h2>
        </div>

        <section class="container px-4 mx-auto">
          <div class="flex items-center pb-4 justify-between">
            <div>
              <h2 class="text-lg font-medium text-gray-800 dark:text-white">
                My Request
                <!-- <span
                  class="ml-1 px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400"
                  >{{ requesters.length }}
                </span> -->
              </h2>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div class="overflow-hidden  dark:border-gray-700 md:rounded-lg">
                  <div class="py-2 flex flex-col md:flex-row justify-between items-center md:items-end">
                    <div class="flex items-center">
                      <div class="space-x-2">
                        <label for="number-dd" class="text-md font-medium dark:text-white">Sort</label>
                        <select id="number-dd" name="number" @change="updateItemsPerPage"
                          class="rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 py-2 text-sm bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                          <option value="10">10</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>
                      </div>
                    </div>
                    <div class="relative md:mt-0 w-full md:w-auto">
                      <div class="absolute inset-y-0 left-0 flex items-center pl-3 ">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                      </div>
                      <input type="text" id="table-search" v-model="searchQuery"
                        class="block py-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-full md:w-80 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                        placeholder="Search for request" />
                    </div>
                  </div>
                  <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200">
                    <thead class="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th scope="col" class="px-6 py-3">No</th>
                        <th scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <div class="flex items-center gap-x-3">
                            <span>Type Of Request</span>
                          </div>
                        </th>

                        <th scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <div class="flex items-center gap-x-3">
                            <span>Reference Number</span>
                          </div>
                        </th>

                        <th scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <div class="flex items-center gap-x-3">
                            <span>Date</span>
                            <span class="ml-1 cursor-pointer" @click="toggleSort('date_requested')">
                              <template v-if="sortField === 'dateRequested'">
                                {{ sortDirection === 'desc' ? '↓' : '↑' }}
                              </template>
                              <template v-else>
                                <span class="text-gray-300">↕</span>
                              </template>
                            </span>
                          </div>
                        </th>

                        <th v-if="role === 'vendor'" scope="col"
                          class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <div class="flex items-center gap-x-3">
                            <span> Safety Status</span>
                          </div>
                        </th>
                        <th scope="col"
                          class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <div class="flex items-center gap-x-3">
                            <span v-if="role === 'vendor'">Security Status</span>
                            <span v-else>Status</span>
                          </div>
                        </th>

                        <th scope="col"
                          class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <span class="">Edit</span>
                        </th>

                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      <tr v-for="(requester, index) in paginatedRequesters" :key="requester.refNumber" :requester="requester">
                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {{ (currentPage - 1) * itemsPerPage + index + 1 }}
                        </td>
                        <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div class="inline-flex items-center gap-x-3">
                            <div class="flex items-center gap-x-2">
                              <div>
                                <h2 class="font-medium text-gray-500 dark:text-gray-300">
                                  {{
                                    requester.refNumber.includes("BR")
                                      ? "BADGE REQUEST"
                                      : requester.refNumber.includes("IR")
                                        ? "INCIDENT REPORT"
                                        : requester.refNumber.includes("CCTV")
                                          ? "CCTV FOOTAGE VIEW "
                                          : requester.refNumber.includes("PTW")
                                            ? "PTW"
                                            : requester.refNumber.includes(
                                              "VET"
                                            )
                                              ? "VISITOR/ESCORT/TOUR"
                                              : requester.refNumber.includes(
                                                "TK"
                                              )
                                                ? "TESTKITS"
                                                : requester.refNumber.includes(
                                                  "Mask"
                                                )
                                                  ? "MASK"
                                                  : null
                                  }}
                                </h2>
                              </div>
                            </div>
                          </div>
                        </td>

                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {{ requester.refNumber }}
                        </td>
                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {{ requester.dateRequested }}
                        </td>
                        <td v-if="role === 'vendor'"
                          class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div :class="getStatusContainerClass(
                            requester.safetyAdminStatus
                          )
                            ">
                            <span :class="getStatusDotClass(requester.safetyAdminStatus)
                              "></span>
                            <h2 :class="getStatusTextClass(requester.safetyAdminStatus)
                              ">
                              {{
                                requester.safetyAdminStatus === ""
                                  ? "OPEN"
                                  : requester.safetyAdminStatus
                              }}
                            </h2>
                          </div>
                        </td>
                        <td v-if="role === 'vendor'"
                          class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div :class="getStatusContainerClass(requester.securityAdminStatus)
                            ">
                            <span :class="getStatusDotClass(requester.securityAdminStatus)"></span>
                            <h2 :class="getStatusTextClass(requester.securityAdminStatus)">
                              {{
                                requester.securityAdminStatus === ""
                                  ? "OPEN"
                                  : requester.securityAdminStatus
                              }}
                            </h2>
                          </div>
                        </td>
                        <td v-else class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div :class="getStatusContainerClass(requester.adminStatus)
                            ">
                            <span :class="getStatusDotClass(requester.adminStatus)"></span>
                            <h2 :class="getStatusTextClass(requester.adminStatus)">
                              {{
                                requester.adminStatus === ""
                                  ? "OPEN"
                                  : requester.adminStatus
                              }}
                            </h2>
                          </div>
                        </td>
                        <td class="px-4 py-4 ml text-sm whitespace-nowrap">
                          <div class="flex items-center gap-x-6">
                            <button v-if="
                              requester.refNumber.includes('PTW') &&
                              requester.safetyAdminStatus !== 'COMPLETED'
                            " @click="editPage(requester.refNumber)"
                              class="  text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                              </svg>
                            </button>

                            <button v-if="requester.refNumber.includes('BR')" @click="showModal(requester.refNumber)"
                              class="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </button>
                            <button v-if="requester.refNumber.includes('IR')" @click="showModal2(requester.refNumber)"
                              class="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </button>
                            <button v-if="requester.refNumber.includes('VET')" @click="showModal4(requester.refNumber)"
                              class="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </button>
                            <button v-if="requester.refNumber.includes('TK')" @click="showModal5(requester.refNumber)"
                              class="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </button>
                            <button v-if="requester.refNumber.includes('Mask')" @click="showModal6(requester.refNumber)"
                              class="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </button>
                            <button v-if="requester.refNumber.includes('CCTV')" @click="showModal3(requester.refNumber)"
                              class="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </button>
                            <button v-if="requester.refNumber.includes('PTW')"
                              @click="redirectToPTWView(requester.refNumber)"
                              class="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </button>
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
                            }" class="flex items-center justify-center px-2 md:px-3 h-6 md:h-8 leading-tight bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700">
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
                  <Modalbadgerequest v-show="isModalVisible" @close="closeModal">
                    <!-- header -->
                    <template v-slot:header>
                      <h1 class="font-bold text-xl">BADGE REQUEST</h1>
                    </template>

                    <!-- body -->
                    <template v-slot:body>
                      <!-- <p class="py-3 text-xs font-bold text-purple-900">
        Forgot your password?
      </p> -->
                      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200" for="">Requester Name</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.requesterName }}</label>
                        </div>

                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200"
                            for="department">Department</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.departmentName }}</label>
                        </div>

                        <!-- Add v-model to other inputs as needed -->
                      </div>
                      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200" for="username">Phone
                            number</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.phoneNumber }}</label>
                        </div>

                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200" for="emailAddress">Date
                            Requested</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.dateRequested }}</label>
                        </div>

                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200" for="People">People/For</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.designationPeople }}</label>
                        </div>
                      </div>

                      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
                        <label class="font-semibold text-gray-700 dark:text-gray-200" for="People">Attachment(s)</label>
                        <label class="">
                          <ul>
                            <li v-for="file in getRequest.files" :key="file"
                              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                              <div class="flex justify-between">
                                {{ getFileName(file) }}

                                <a class="text-blue-500" target="_blank" :href="file">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                  </svg>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </label>
                      </div>
                    </template>

                    <!-- footer -->
                    <template v-slot:header2>
                      <div class="p-1 rounded-lg">
                        <h2 class="text-lg font-semibold text-white capitalize">
                          ADMIN
                        </h2>
                      </div>
                    </template>
                    <template v-slot:footer>
                      <div class="flex justify-between">
                        <!-- Ticket Status Section -->
                        <div class="">
                          <label for="Description" class="mb-2 block text-sm font-semibold text-gray-700">
                            ADMIN COMMENTS
                          </label>
                        </div>
                        <div>
                          <label for="preparedBy" class="mb-2 block text-sm font-semibold text-gray-700">
                            LAST EDITED: {{ getRequest.modifiedDate }} BY ADMIN
                            {{ getRequest.modifiedBy }}
                          </label>
                        </div>
                        <!-- Admin Status Section -->

                        <div class="w-md:w-1/3">
                          <div class="flex mb-4"></div>
                        </div>
                      </div>
                      <div class="w-sm">
                        <label id="Location"
                          class="block w-sm px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                          getRequest.adminComment }}</label>
                      </div>
                    </template>
                  </Modalbadgerequest>
                  <Modalincidentreport v-show="isModalVisible2" @close="closeModal">
                    <!-- header -->
                    <template v-slot:header>
                      <h1 class="font-bold text-xl">INCIDENT REPORT</h1>
                    </template>

                    <!-- body -->
                    <template v-slot:body>
                      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-2">
                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200" for="Dateofincident">Date Of
                            Incident</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.dateIncident }}</label>
                        </div>

                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200"
                            for="Locationofincident">Location Of Incident</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.incidentLocation }}</label>
                        </div>

                        <!-- Add v-model to other inputs as needed -->

                        <!-- <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3"> -->
                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200" for="PartiesInvolved">Parties
                            Involved</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.partiesInvolved }}</label>
                        </div>
                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200" for="PartiesInvolved">
                            Witness</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.witness }}</label>
                        </div>

                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200" for="Typeofincident">Type Of
                            Incident</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.incidentType }}</label>
                        </div>
                      </div>
                      <!-- Add v-model to other inputs as needed -->
                      <!-- </div> -->
                      <div class="grid-cols-1 gap-6 mt-4 sm:grid-cols-1 mx-auto cursor-pointer flex w-full">
                        <div class="w-full">
                          <label for="Detailsincident" class="font-semibold text-gray-700 dark:text-gray-200">Details
                            Incident</label>
                          <textarea disabled id="Detailsincident"
                            class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            rows="5" required v-model="getRequest.incidentDetails"></textarea>
                        </div>
                      </div>
                      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
                        <label class="font-semibold text-gray-700 dark:text-gray-200" for="People">Attachment(s)</label>
                        <label class="">
                          <ul>
                            <li v-for="file in getRequest.files" :key="file"
                              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                              <div class="flex justify-between">
                                {{ getFileName(file) }}

                                <a class="text-blue-500" target="_blank" :href="file">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                  </svg>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </label>
                      </div>
                    </template>

                    <!-- footer -->
                    <template v-slot:footer>
                      <div class="flex justify-between gap-4 mt-4">
                        <!-- Ticket Status Section -->
                        <label for="preparedBy" class="mb-2 block text-sm font-semibold text-gray-700">
                          LAST EDITED: {{ getRequest.modifiedDate }} BY ADMIN
                          {{ getRequest.modifiedBy }}
                        </label>
                        <!-- Admin Status Section -->

                        <div class="w-full md:w-1/3">
                          <div class="mb-4"></div>
                        </div>
                      </div>
                      <div class="w-full">
                        <label for="Description" class="mb-2 block text-sm font-semibold text-gray-700">
                          ADMIN COMMENTS
                        </label>
                        <label id="Location"
                          class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                          getRequest.adminComment }}</label>
                      </div>
                    </template>
                  </Modalincidentreport>
                  <Modalcctv v-show="isModalVisible3" @close="closeModal">
                    <!-- header -->
                    <template v-slot:header>
                      <h1 class="font-bold text-xl">
                        CCTV FOOTAGE VIEW REQUEST
                      </h1>
                    </template>

                    <!-- body -->
                    <template v-slot:body>
                      <!-- <p class="py-3 text-xs font-bold text-purple-900">
        Forgot your password?
      </p> -->
                      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-3">
                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200" for="Requestername">Requester
                            Name</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.requesterName }}</label>
                        </div>

                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200"
                            for="Department">Department</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.departmentName }}</label>
                        </div>
                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200" for="Locationofincident">Phone
                            Number</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.phoneNumber }}</label>
                        </div>

                        <!-- Add v-model to other inputs as needed -->
                      </div>

                      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200" for="Daterequested">Date
                            Requested</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.dateRequested }}</label>
                        </div>

                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200" for="Witness">Incident
                            location</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.incidentLocation }}</label>
                        </div>
                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200"
                            for="Appointmenttime">Appointment Time</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.apptDateTime }}</label>
                        </div>
                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200" for="Incidentdate">Incident Date
                            Time</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.incidentDateTime }}</label>
                        </div>

                        <!-- Add v-model to other inputs as needed -->
                      </div>
                      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2"></div>
                      <div class="grid-cols-1 gap-6 mt-4 sm:grid-cols-1 mx-auto cursor-pointer flex w-full">
                        <div class="w-full">
                          <label for="Detailsincident"
                            class="font-semibold text-gray-700 dark:text-gray-200">Description Of Incident</label>
                          <textarea disabled v-model="getRequest.description" id="Detailsincident"
                            class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            rows="5" required></textarea>
                        </div>
                      </div>
                    </template>

                    <!-- footer -->
                    <template v-slot:footer>
                      <div class="flex justify-between gap-4 mt-4">
                        <!-- Ticket Status Section -->
                        <label for="preparedBy" class="mb-2 block text-sm font-semibold text-gray-700">
                          LAST EDITED: {{ getRequest.modifiedDate }} BY ADMIN
                          {{ getRequest.modifiedBy }}
                        </label>
                      </div>
                      <!-- Admin Status Section -->

                      <div class="w-full md:w-1/3">
                        <div class="mb-4"></div>
                      </div>
                      <div class="w-full">
                        <label for="Description" class="mb-2 block text-sm font-semibold text-gray-700">
                          ADMIN COMMENTS
                        </label>
                        <label id="Location"
                          class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                          getRequest.adminComment }}</label>
                      </div>
                    </template>
                  </Modalcctv>
                  <Modalvisitorescordt v-show="isModalVisible4" @close="closeModal">
                    <!-- header -->
                    <template v-slot:header>
                      <h1 class="font-bold text-xl">VISITOR/ESCORT/TOUR</h1>
                    </template>

                    <!-- body -->
                    <template v-slot:body>
                      <!-- <p class="py-3 text-xs font-bold text-purple-900">
        Forgot your password?
      </p> -->
                      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200" for="requesterName">Requester
                            Name</label>
                          <label id="requesterName" type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.requesterName }}</label>
                        </div>
                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200" for="emailAddress">Date
                            Requested</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.dateRequested }}</label>
                        </div>

                        <!-- Add v-model to other inputs as needed -->
                      </div>
                      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200"
                            for="department">Department</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.departmentName }}</label>
                        </div>
                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200" for="username">Phone
                            number</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.phoneNumber }}</label>
                        </div>

                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200" for="Noofpieces">Customer
                            Name</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.customerName }}</label>
                        </div>
                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200" for="Noofpieces">No Of
                            Pax</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.paxAmount }}</label>
                        </div>
                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200" for="Noofpieces">No Of Parking
                            Space</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.parkSpaceAmount }}</label>
                        </div>
                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200"
                            for="Noofpieces">Transport</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.customerTransport }}</label>
                        </div>
                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200"
                            for="Noofpieces">Location</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.meetingLocation }}</label>
                        </div>

                        <!-- Add v-model to other inputs as needed -->
                      </div>
                      <div class="grid-cols-1 gap-6 mt-4 sm:grid-cols-1 mx-auto cursor-pointer flex w-full">
                        <div class="w-full">
                          <label for="Description"
                            class="font-semibold text-gray-700 dark:text-gray-200">Description</label>
                          <textarea disabled v-model="getRequest.visitPurpose" id="Description"
                            class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            rows="2">
                          </textarea>
                        </div>
                      </div>
                    </template>

                    <!-- footer -->
                    <template v-slot:footer>
                      <div class="flex justify-between gap-4 mt-4">
                        <!-- Ticket Status Section -->
                        <label for="preparedBy" class="mb-2 block text-sm font-semibold text-gray-700">
                          LAST EDITED: {{ getRequest.modifiedDate }} BY ADMIN
                          {{ getRequest.modifiedBy }}
                        </label>
                        <!-- Admin Status Section -->

                        <div class="w-full md:w-1/3">
                          <div class="mb-4"></div>
                        </div>
                      </div>
                      <div class="w-full">
                        <label for="Description" class="mb-2 block text-sm font-semibold text-gray-700">
                          ADMIN COMMENTS
                        </label>
                        <label id="Location"
                          class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                          getRequest.adminComment }}</label>
                      </div>
                    </template>
                  </Modalvisitorescordt>
                  <Modaltestkits v-show="isModalVisible5" @close="closeModal">
                    <!-- header -->
                    <template v-slot:header>
                      <h1 class="font-bold text-xl">TESTKITS REQUEST</h1>
                    </template>

                    <!-- body -->
                    <template v-slot:body>
                      <!-- <p class="py-3 text-xs font-bold text-purple-900">
        Forgot your password?
      </p> -->
                      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200" for="requesterName">Requester
                            Name</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 font-semibold text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.requesterName }}</label>
                        </div>

                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200"
                            for="department">Department</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.departmentName }}</label>
                        </div>

                        <!-- Add v-model to other inputs as needed -->
                      </div>
                      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200" for="username">Phone
                            Number</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.phoneNumber }}</label>
                        </div>

                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200" for="emailAddress">Date
                            Requested</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.dateRequested }}</label>
                        </div>

                        <!-- Add v-model to other inputs as needed -->
                      </div>
                      <div class="grid grid-cols-2 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200" for="username">NO. Stock In
                            Box</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.boxStock }}</label>
                        </div>

                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200" for="emailAddress">No. Stock In
                            (kit)</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.kitStock }}</label>
                        </div>
                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200" for="emailAddress">No. Of Kit
                            Out</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.kitOut }}</label>
                        </div>
                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200" for="emailAddress">No. Of
                            Balance Kit</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.balanceKit }}</label>
                        </div>
                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200"
                            for="emailAddress">Remark</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.remark }}</label>
                        </div>

                        <!-- Add v-model to other inputs as needed -->
                      </div>
                    </template>

                    <!-- footer -->
                    <template v-slot:footer>
                      <div class="flex justify-between gap-4 mt-4">
                        <!-- Ticket Status Section -->
                        <label for="preparedBy" class="mb-2 block text-sm font-semibold text-gray-700">
                          LAST EDITED: {{ getRequest.modifiedDate }} BY ADMIN
                          {{ getRequest.modifiedBy }}
                        </label>
                        <!-- Admin Status Section -->

                        <div class="w-full md:w-1/3">
                          <div class="mb-4"></div>
                        </div>
                      </div>
                      <div class="w-full">
                        <label for="Description" class="mb-2 block text-sm font-semibold text-gray-700">
                          ADMIN COMMENTS
                        </label>
                        <label id="Location"
                          class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                          getRequest.adminComment }}</label>
                      </div>
                    </template>
                  </Modaltestkits>
                  <Modalmask v-show="isModalVisible6" @close="closeModal">
                    <!-- header -->
                    <template v-slot:header>
                      <h1 class="font-bold text-xl">MASK REQUEST</h1>
                    </template>

                    <!-- body -->
                    <template v-slot:body>
                      <!-- <p class="py-3 text-xs font-bold text-purple-900">
        Forgot your password?
      </p> -->
                      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200" for="requesterName">Requester
                            Name</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.requesterName }}</label>
                        </div>

                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200"
                            for="department">Department</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.departmentName }}</label>
                        </div>

                        <!-- Add v-model to other inputs as needed -->
                      </div>
                      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200" for="username">Phone
                            number</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.phoneNumber }}</label>
                        </div>

                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200" for="emailAddress">Date
                            Requested</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.dateRequested }}</label>
                        </div>
                        <div>
                          <label class="font-semibold text-gray-700 dark:text-gray-200" for="Noofpieces">No of
                            pieces</label>
                          <label type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                            getRequest.piecesAmount }}</label>
                        </div>

                        <!-- Add v-model to other inputs as needed -->
                      </div>
                      <div class="grid-cols-1 gap-6 mt-4 sm:grid-cols-1 mx-auto cursor-pointer flex w-full">
                        <div class="w-full">
                          <label for="Description"
                            class="font-semibold text-gray-700 dark:text-gray-200">Description</label>
                          <textarea disabled v-model="getRequest.description" id="Description"
                            class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            rows="2" required></textarea>
                        </div>
                      </div>
                    </template>

                    <!-- footer -->
                    <template v-slot:footer>
                      <div class="flex justify-between gap-4 mt-4">
                        <!-- Ticket Status Section -->
                        <label for="preparedBy" class="mb-2 block text-sm font-semibold text-gray-700">
                          LAST EDITED: {{ getRequest.modifiedDate }} BY
                          {{ getRequest.modifiedBy }}
                        </label>
                        <!-- Admin Status Section -->

                        <div class="flex w-full md:w-1/3">
                          <div class="mb-4"></div>
                        </div>
                      </div>
                      <div class="w-full">
                        <label for="Description" class="mb-2 block text-sm font-semibold text-gray-700">
                          ADMIN COMMENTS
                        </label>
                        <label id="Location"
                          class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">{{
                          getRequest.adminComment }}</label>
                      </div>
                    </template>
                  </Modalmask>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Display a list of movies from the TMDb API -->
      </div>
    </div>
  </main>
</template>

<script>
import { store } from "../views/store.js";
import { setRefNumber } from '../views/store.js';

import Modalbadgerequest from "../components/vmodal.vue";
import Modalincidentreport from "../components/vmodal.vue";
import Modalcctv from "../components/vmodal.vue";
import Modalvisitorescordt from "../components/vmodal.vue";
import Modaltestkits from "../components/vmodal.vue";
import Modalmask from "../components/vmodal.vue";
import $ from "jquery";
import "datatables.net-dt";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import axios from "axios";
export default {
  name: "Myrequest2Views",
  components: {
    Modalbadgerequest,
    Modalincidentreport,
    Modalcctv,
    Modalvisitorescordt,
    Modaltestkits,
    Modalmask,
  },
  data() {
    return {
      role: "",
      getRequest: [],
      isModalVisible: false,
      isModalVisible2: false,
      isModalVisible3: false,
      isModalVisible4: false,
      isModalVisible5: false,
      isModalVisible6: false,
      OGR: null,
      requesters: [],
      sortOrder: {
        refNumber: "asc",
        dateRequested: "asc",
        adminStatus: "asc",
        branch: "asc",
      },
      sortField: 'dateRequested',
      sortDirection: 'desc',
      searchQuery: '',
      itemsPerPage: 10,
      sortBy: "dateRequested",
      currentPage: 1,
      userApplications: [],
    };
  },
  computed: {
    filteredQueryApplications() {
      const query = this.searchQuery.toLowerCase();
      return this.sortedApplications.filter((requesters) => {
        const label = this.getLabelFromRefNumber(requesters.refNumber);
        const statusClass = this.getStatusContainerClass(requesters.adminStatus);
        const statusDotClass = this.getStatusDotClass(requesters.adminStatus);
        const statusTextClass = this.getStatusTextClass(requesters.adminStatus);
        return (
          (requesters.safetyAdminStatus && requesters.safetyAdminStatus.toLowerCase().includes(query)) ||
          (requesters.securityAdminStatus && requesters.securityAdminStatus.toLowerCase().includes(query)) ||
          (requesters.adminStatus && requesters.adminStatus.toLowerCase().includes(query)) ||
          (requesters.dateRequested && requesters.dateRequested.toLowerCase().includes(query)) ||
          (label && label.toLowerCase().includes(query)) || 
          (statusClass && statusClass.toLowerCase().includes(query)) || 
          (statusDotClass && statusDotClass.toLowerCase().includes(query)) ||
          (statusTextClass && statusTextClass.toLowerCase().includes(query))
        );
      });
    },
    sortedApplications() {
      return [...this.requesters].sort((a, b) => {
        const dateA = new Date(a[this.sortField]).getTime();
        const dateB = new Date(b[this.sortField]).getTime();
        return this.sortDirection === 'desc' ? dateB - dateA : dateA - dateB;
      });
    },
    paginatedRequesters() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredQueryApplications.slice(start, end);
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
        // First page (1, 2, 3, ..., total)
        if (current === 1) {
          pages = [1, 2, 3, '...', total];
        }
        // Last page (1, ..., last-2, last-1, last)
        else if (current === total) {
          pages = [1, '...', total - 2, total - 1, total];
        }
        // handle second to last page
        else if (current === total - 1) {
          pages = [1, '...', total - 2, total - 1, total];
        }
        // Intermediate pages (1, ..., current-1, current, current+1, ..., total)
        else {
          pages = [1, '...', current - 1, current, current + 1, '...', total];
        }
      }

      return pages;
    },
  },
  mounted() {
    // Fetch data when the component is mounted
    this.role = store.getRole();
    this.fetchRequesters();
    this.fetchRequesters().then(() => {
      this.$nextTick(() => {
        this.initializeDataTable();
      });
    });

    // if (this.role === "user") {
    //   this.$router.push("/Dashboard");
    // }
    // else{
    //   this.$router.push("/Managerequest");
    // }
  },

  methods: {

    getLabelFromRefNumber(refNumber) {
      if (refNumber.includes("BR")) return "BADGE REQUEST";
      if (refNumber.includes("IR")) return "INCIDENT REPORT";
      if (refNumber.includes("CCTV")) return "CCTV FOOTAGE VIEW";
      if (refNumber.includes("PTW")) return "PTW";
      if (refNumber.includes("VET")) return "VISITOR/ESCORT/TOUR";
      if (refNumber.includes("TK")) return "TESTKITS";
      if (refNumber.includes("Mask")) return "MASK";
      return null;
    },
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
    editPage(refNumber) {
      console.log("Editing page for refNumber:", refNumber);
      setRefNumber(refNumber);
      this.$router.push({ name: 'ptwedit' });
    },
    initializeDataTable() {
      $(this.$refs.myTable).DataTable({

      });
    },

    redirectToPTWView(refNumber) {
      console.log(refNumber);

      this.$router.push({ path: `/PTWView2/${refNumber}` });
    },
    getFileName(file) {
      const parts = file.split("/");
      return parts[parts.length - 1];
    },

    showModal(refNumber) {
      //badge Request
      axios
        .get("http://172.28.28.91:8085/api/Main/GetBadgeRequest/" + refNumber)
        .then((response) => {
          this.getRequest = response.data;
          console.log("this is get request" + this.getRequest);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      this.isModalVisible = true;
    },
    showModal2(refNumber) {
      //IR
      axios
        .get("http://172.28.28.91:8085/api/Main/GetIncidentReport/" + refNumber)
        .then((response) => {
          this.getRequest = response.data;
          console.log("this is get request" + this.getRequest);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      this.isModalVisible2 = true;
    },
    showModal3(refNumber) {
      //cctv
      axios
        .get("http://172.28.28.91:8085/api/Main/GetCCTVRequest/" + refNumber)
        .then((response) => {
          this.getRequest = response.data;
          console.log("this is get request" + this.getRequest);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      this.isModalVisible3 = true;
    },
    showModal4(refNumber) {
      //vet
      axios
        .get("http://172.28.28.91:8085/api/Main/GetVisitor/" + refNumber)
        .then((response) => {
          this.getRequest = response.data;
          console.log("this is get request" + this.getRequest);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      this.isModalVisible4 = true;
    },
    showModal5(refNumber) {
      //tk
      axios
        .get("http://172.28.28.91:8085/api/Main/GetTestKits/" + refNumber)
        .then((response) => {
          this.getRequest = response.data;
          console.log("this is get request" + this.getRequest);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      this.isModalVisible5 = true;
    },
    showModal6(refNumber) {
      //mask
      axios
        .get("http://172.28.28.91:8085/api/Main/GetMask/" + refNumber)
        .then((response) => {
          this.getRequest = response.data;
          console.log("this is get request" + this.getRequest);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      this.isModalVisible6 = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.isModalVisible2 = false;
      this.isModalVisible3 = false;
      this.isModalVisible4 = false;
      this.isModalVisible5 = false;
      this.isModalVisible6 = false;
    },
    getStatusContainerClass(status) {
      const colorMap = {
        RESUBMISSION:
          "inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-orange-100/60 dark:bg-gray-800",
        CLOSE:
          "inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-green-100/60 dark:bg-gray-800",
        "": "inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800",
        APPROVED:
          "inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800",
        COMPLETED:
          "inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-blue-100/60 dark:bg-gray-800",
        REJECTED:
          "inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800",
      };
      return colorMap[status] || "bg-gray-800"; // Default to a dark color if the status is not recognized
    },
    getStatusDotClass(status) {
      const colorMap = {
        RESUBMISSION: "h-1.5 w-1.5 rounded-full bg-orange-500",
        "": "h-1.5 w-1.5 rounded-full bg-red-500",
        APPROVED: "h-1.5 w-1.5 rounded-full bg-emerald-500",
        COMPLETED: "h-1.5 w-1.5 rounded-full bg-blue-500",
        REJECTED: "h-1.5 w-1.5 rounded-full bg-red-500",
      };
      return colorMap[status] || "h-1.5 w-1.5 rounded-full bg-gray-700"; // Default to a dark color if the status is not recognized
    },
    getStatusTextClass(status) {
      const colorMap = {
        RESUBMISSION: "text-sm font-normal text-orange-500",
        "": "text-sm font-normal text-red-500",
        APPROVED: "text-sm font-normal text-emerald-500",
        COMPLETED: "text-sm font-normal text-blue-500",
        REJECTED: "text-sm font-normal text-red-500",
      };
      return colorMap[status] || "text-gray-500"; // Default to a dark color if the status is not recognized
    },
    async fetchRequesters() {
      const userDetails = store.getSession().userDetails;
      const role = store.getRole();
      let url = "";

      if (role === "user") {
        url = `http://172.28.28.91:8085/api/Main/GetAllRequests/${userDetails.userId}`;
      } else if (role === "vendor") {
        url = `http://172.28.28.91:8085/api/Main/GetAllRequestsVendor/${userDetails.userId}`;
      } else {
        console.log("Role not authorized or role-specific URL not set");
        return;
      }

      console.log("Fetching requesters for role:", userDetails.role);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        this.requesters = data;
        console.log("Requesters data:", this.requesters);
        this.OGR = this.requesters.length;
        store.setOGR(this.OGR);
        console.log("OGR set to:", this.OGR);
      } catch (error) {
        console.error("Error fetching requesters:", error);
      }
    },
  },
};
</script>
<style>
.radio input[type="radio"]~label {
  background-color: rgb(233, 225, 225);
  color: rgb(158, 146, 146);
}

.radio input[type="radio"]:checked~label {
  background-color: rgb(70, 230, 22);
  color: white;
}
</style>
