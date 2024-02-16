<template>
  <main
    class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto"
  >
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-bold text-slate-900 dark:text-white"></h2>
        </div>
        

        <section class="container px-4 mx-auto">
          <div class="flex justify-between items-center">
            <div>
              <h2 class="text-lg font-medium text-gray-800 dark:text-white">
                Pending Request
                <span
                  class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400"
                  >{{ requesters.length }}
                </span>
              </h2>
            </div>
          </div>

          <div class="flex flex-col mt-6">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div
                class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"
              >
                <div
                  class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg"
                >
                  <table ref="myTable"
                    class="hover stripe min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                  >
                    <thead class="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Branch</span>
                          </div>
                        </th>
                        
                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Type Of Request</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Requester</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Reference Number</span>
                          </div>
                        </th>

                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Date</span>
                          </div>
                        </th>

                        <th
                          scope="col"
                          class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Status</span>
                          </div>
                        </th>

                        <th scope="col" class="relative py-3.5 px-4">
                          <span class="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody
                      class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
                    >
                      <tr
                        v-for="requester in requesters"
                        :key="requester.refNumber"
                        :requester="requester"
                      >
                        <td
                          class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
                        >
                          <div class="inline-flex items-center gap-x-3">
                            <div class="flex items-center gap-x-2">
                              <div>
                                <h2
                                  class="font-medium text-gray-500 dark:text-gray-300"
                                >
                                  {{ requester.branch }}
                                </h2>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                        >
                          <div class="inline-flex items-center gap-x-3">
                            <div class="flex items-center gap-x-2">
                              <div>
                                <!-- Conditionally display 'Badge Request' if typeofrequest includes 'br' -->
                                {{
                                  requester.refNumber.includes("BR")
                                    ? "BADGE REQUEST"
                                    : requester.refNumber.includes("IR")
                                      ? "INCIDENT REPORT"
                                      : requester.refNumber.includes("CCTV")
                                        ? "CCTV FOOTAGE VIEW"
                                        : requester.refNumber.includes("PTW")
                                          ? "PTW"
                                          : requester.refNumber.includes("VET")
                                            ? "VISITOR/ESCORT/TOUR"
                                            : requester.refNumber.includes("TK")
                                              ? "TESTKITS"
                                              : requester.refNumber.includes(
                                                    "Mask"
                                                  )
                                                ? "MASK"
                                                : null
                                }}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                        >
                          {{ requester.userName }}
                        </td>
                        <td
                          class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                        >
                          {{ requester.refNumber }}
                        </td>

                        <td
                          class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                        >
                          {{ requester.dateRequested }}
                        </td>

                        <td
                          class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
                        >
                          <div
                            :class="
                              getStatusContainerClass(requester.adminStatus)
                            "
                          >
                            <span
                              :class="getStatusDotClass(requester.adminStatus)"
                            ></span>
                            <h2
                              :class="getStatusTextClass(requester.adminStatus)"
                            >
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
                            <button
                              @click="showModal(requester.refNumber)"
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
                            <!-- this button for edit and deleted  -->
                            <!-- <button
          v-if="requester.status === 'Pending'"
          class="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
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
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </button>

        <button
          v-if="requester.status === 'Pending'"
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
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button> -->
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <Modal v-show="isModalVisible" @close="closeModal">
    <!-- header -->
    <template v-slot:header>
      <h1
            v-if="requesterRefNumber.includes('CCTV')"
            class="text-lg font-semibold rounded-lg text-slate-200 p-1 w-full capitalize dark:text-white"
          >
            CCTV FOOTAGE VIEWING REQUEST
          </h1>     
          <h1
            v-if="requesterRefNumber.includes('BR')"
            class="text-lg font-semibold rounded-lg text-slate-200 p-1 w-full capitalize dark:text-white"
          >
            BADGE REQUEST
          </h1>

          <h2
            v-if="requesterRefNumber.includes('PTW')"
            class="text-lg font-semibold rounded-lg text-slate-200 p-1 w-full capitalize dark:text-white"
          >
            PTW
          </h2>
          <h2
            v-if="requesterRefNumber.includes('IR')"
            class="text-lg font-semibold rounded-lg text-slate-200 p-1 w-full capitalize dark:text-white"
          >
            INCIDENT REPORT
          </h2>
          <h2
            v-if="requesterRefNumber.includes('TK')"
            class="text-lg font-semibold rounded-lg text-slate-200 p-1 w-full capitalize dark:text-white"
          >
            TESTKITS REQUEST
          </h2>
          <h2
            v-if="requesterRefNumber.includes('VET')"
            class="text-lg font-semibold rounded-lg text-slate-200 p-1 w-full capitalize dark:text-white"
          >
            VISITOR/ESCORT/TOUR REQUEST
          </h2>
          <h2
            v-if="requesterRefNumber.includes('Mask')"
            class="text-lg font-semibold rounded-lg text-slate-200 p-1 w-full capitalize dark:text-white"
          >
            MASK REQUEST
          </h2> 
    </template>

    <!-- body -->
    <template v-slot:body>
      <!-- <p class="py-3 text-xs font-bold text-purple-900">
        Forgot your password?
      </p> -->

      <!-- Permit to works -->
      <div class="relative" v-show="showPTWForm">
        <span class="absolute -top-10 -right-1 text-slate-500 text-sm"
          >REFNUMBER: {{ getRequest.refNumber }}</span
        >
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Description"
              >Vendor Name</label
            >
            <label
              id="Location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.vendorName }}</label
            >
          </div>

          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Location"
              >Company Name</label
            >
            <label
              id="Location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.companyName }}</label
            >
          </div>
        </div>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3 md:grid-cols-3">
          <!-- <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Description"
              >Work Description</label
            >
            <label
              id="Location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >{{  getRequest.workDescription }}</label>
          </div> -->

          <!-- <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Location"
              >Department</label
            >
            <label
              id="Location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >{{  getRequest. }}</label>
          </div>
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Description"
              >Phone</label
            >
            <label
              id="Location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >{{  getRequest. }}</label>
          </div> -->

          <!-- <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Location"
              >Staff Name</label
            >
            <label
              id="Location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.pktStaffName }}</label
            >
          </div>
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Location"
              >Staff Email
            </label>
            <label
              id="Location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.departmentName }}</label
            >
          </div>
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Description"
              >Department Staff
            </label>
            <label
              id="Location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.departmentName }}</label
            >
          </div> -->
        </div>

        <div>
          <div class="flex justify-between">
            <!-- <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Location"
              >Attachment(s): </label> -->
            <button
              type="button"
              class="text-blue-500"
              @click="redirectToPTWView(requesterRefNumber)"
            >
              see more....
            </button>
          </div>

          <!-- <li
            v-for="file in getRequest.files"
            :key="file"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          >
            <a class="text-blue-500" target="_blank" :href="file">{{
              getFileName(file)
            }}</a>
          </li> -->
        </div>
      </div>
      <!-- Permit to works for security -->
      <!-- <div
        v-show="requester.PTWSecurity"
      >
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Description"
              >DateTime Of Incident</label
            >
            <input
              id="Description"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>
      </div> -->
      <!-- Incident Report -->
      <div class="relative" v-show="showIncidentReport">
        <span class="absolute -top-10 -right-1 text-slate-500 text-sm"
          >REFNUMBER: {{ getRequest.referenceNumber }}</span
        >
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Description"
              >DateTime Of Incident</label
            >
            <label
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.dateIncident }}</label
            >
          </div>
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Description"
              >Type Of Incident</label
            >
            <label
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.incidentType }}</label
            >
          </div>
        </div>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-2">
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Location"
              >Location</label
            >
            <label
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.incidentLocation }}</label
            >
          </div>
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Description"
              >Name Of Parties Involved</label
            >
            <label
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.partiesInvolved }}</label
            >
          </div>

          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Description"
              >Witness</label
            >
            <label
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.Witness }}</label
            >
          </div>

          <div class="col-span-2">
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Location"
              >Incident Details</label
            >
            <textarea
              disabled
              v-model="getRequest.incidentDetails"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              rows="2"
            ></textarea>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
          <label
            class="font-semibold text-gray-700 dark:text-gray-200"
            for="People"
            >Attachment(s):
          </label>
          <label class="py-2 px-4">
            <ul>
              <li
                v-for="file in getRequest.files"
                :key="file"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >
                <a class="text-blue-500" target="_blank" :href="file">{{
                  getFileName(file)
                }}</a>
              </li>
            </ul>
          </label>
        </div>
      </div>
      <!-- teskit -->
      <div class="relative" v-show="showTeskit">
        <span class="absolute -top-10 -right-1 text-slate-500 text-sm"
          >REFNUMBER: {{ getRequest.referenceNumber }}</span
        >
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Description"
              >Requester Name</label
            >
            <label
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.requesterName }}</label
            >
          </div>

          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Location"
              >Department</label
            >
            <label
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.departmentName }}</label
            >
          </div>
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Description"
              >Phone Number</label
            >
            <label
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.phoneNumber }}</label
            >
          </div>
        </div>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Location"
              >No Stock In Box</label
            >
            <label
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.boxStock }}</label
            >
          </div>
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Location"
              >No Stock In (kit)</label
            >
            <label
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.kitStock }}</label
            >
          </div>

          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Location"
              >No Of Kit Out</label
            >
            <label
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.kitOut }}</label
            >
          </div>
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Location"
              >No Of Balance Kit</label
            >
            <label
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.balanceKit }}</label
            >
          </div>
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Location"
              >Remark</label
            >
            <label
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.remark }}</label
            >
          </div>
        </div>
      </div>

      <!-- Badge Request -->
      <div v-show="showBadgeRequest" class="relative">
        <span class="absolute -top-10 -right-1 text-slate-500 text-sm"
          >REFNUMBER: {{ getRequest.referenceNumber }}</span
        >
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Description"
              >Requester Name
            </label>
            <label
              id="Description"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.requesterName }}</label
            >
          </div>

          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Location"
              >Department</label
            >
            <label
              id="Description"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.departmentName }}</label
            >
          </div>
        </div>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-2">
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Description"
              >Phone Number</label
            >
            <label
              id="Description"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.phoneNumber }}</label
            >
          </div>

          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Location"
              >For</label
            >
            <label
              id="Location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.designationPeople }}</label
            >
          </div>
        </div>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
          <label
            class="font-semibold text-gray-700 dark:text-gray-200"
            for="People"
            >Attachment(s):</label
          >
          <label class="py-2 px-4">
            <ul>
              <li
                v-for="file in getRequest.files"
                :key="file"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >
                <a class="text-blue-500" target="_blank" :href="file">{{
                  getFileName(file)
                }}</a>
              </li>
            </ul>
          </label>
        </div>
      </div>
      <!-- CCTV Footages-->
      <div class="relative" v-show="showCCTVForm">
        <span class="absolute -top-10 -right-1 text-slate-500 text-sm"
          >REFNUMBER: {{ getRequest.referenceNumber }}</span
        >
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="requestername"
              >Requester Name</label
            >
            <label
              id="requestername"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.requesterName }}</label
            >
          </div>

          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Location"
              >Department</label
            >
            <label
              id="Location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.departmentName }}</label
            >
          </div>
        </div>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-2">
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Description"
              >Phone Number</label
            >
            <label
              id="Description"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.phoneNumber }}</label
            >
          </div>

          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Location"
              >Incident Location</label
            >
            <label
              id="Location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.incidentLocation }}</label
            >
          </div>
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Description"
              >Appointment Date</label
            >
            <label
              id="Description"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.apptDateTime }}</label
            >
          </div>
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Description"
              >Incident DateTime</label
            >
            <label
              id="Description"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.incidentDateTime }}</label
            >
          </div>
        </div>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3 md:grid-cols-1">
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Description"
              >Description Of Incident</label
            >
            <label
              id="Description"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.description }}</label
            >
          </div>
        </div>
      </div>
      <!--Visitor Escort Transport-->
      <div class="relative" v-show="showVETForm">
        <span class="absolute -top-10 -right-1 text-slate-500 text-sm"
          >REFNUMBER: {{ getRequest.referenceNumber }}</span
        >
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Description"
              >Requester Name:</label
            >
            <label
              id="requesterName"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.requesterName }}</label
            >
          </div>

          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Location"
              >Department</label
            >
            <label
              id="departmentName"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.departmentName }}</label
            >
          </div>
        </div>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-2">
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Description"
              >Phone Number</label
            >
            <label
              id="phoneNumber"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.phoneNumber }}</label
            >
          </div>

          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Location"
              >Meeting Location</label
            >
            <label
              id="meetingLocation"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.meetingLocation }}</label
            >
          </div>
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Description"
              >Visitor Date</label
            >
            <label
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.visitDateTime }}</label
            >
          </div>
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Description"
              >Customer Name</label
            >
            <label
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.customerName }}</label
            >
          </div>
        </div>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3 md:grid-cols-2">
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Description"
              >No Of Pax</label
            >
            <label
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.paxAmount }}</label
            >
          </div>

          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Description"
              >No Of Parking Space</label
            >
            <label
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.parkSpaceAmount }}</label
            >
          </div>
          <div class="col-span-2">
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Description"
              >Purpose</label
            >
            <label
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.visitPurpose }}</label
            >
          </div>
        </div>
      </div>
      <!-- mask-->
      <div class="relative" v-show="showMaskRequest">
        <span class="absolute -top-10 -right-1 text-slate-500 text-sm"
          >REFNUMBER: {{ getRequest.referenceNumber }}</span
        >
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="requester.name"
              >Requester Name</label
            >
            <label
              id="requester.name"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.requesterName }}</label
            >
          </div>

          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Location"
              >Department</label
            >
            <label
              id="Location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.departmentName }}</label
            >
          </div>
        </div>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-2">
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Description"
              >Phone Number</label
            >
            <label
              id="Description"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.phoneNumber }}</label
            >
          </div>

          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Location"
              >No Of Pieces</label
            >
            <label
              id="Location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.piecesAmount }}</label
            >
          </div>
        </div>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
          <div>
            <label
              class="font-semibold text-gray-700 dark:text-gray-200"
              for="Description"
              >Description</label
            >
            <label
              id="Description"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.description }}</label
            >
          </div>
        </div>
      </div>

      <!-- Add v-model to other inputs as needed -->
    </template>
    <template v-slot:header2>
      <div class="p-1 rounded-lg">
        <h2 class="text-lg font-semibold text-white capitalize">
          Admin Safety
        </h2>
      </div>
    </template>
    <!-- footer -->
    <template v-slot:footer>
      <div
        v-show="
          showVETForm ||
          showCCTVForm ||
          showIncidentReport ||
          showTeskit ||
          showMaskRequest ||
          showBadgeRequest
        "
      >
        <div class="flex justify-between gap-4 mt-4">
          <div class="w-full md:w-1/3">
            <div class="mb-4">
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Ticket Status
              </label>
              <div :class="getStatusContainerClass(getRequest.ticketStatus)">
                <span
                  :class="getStatusDotClass(getRequest.ticketStatus)"
                ></span>
                <h2 :class="getStatusTextClass(getRequest.ticketStatus)">
                  {{ getRequest.ticketStatus }}
                </h2>
              </div>
            </div>
          </div>

          <div class="w-full md:w-1/3">
            <div class="mb-4">
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Admin Status
              </label>
              <div class="grid grid-cols-1 gap-4 items-center">
                <label class="flex items-center text-sm text-gray-700">
                  <div></div>

                  <input
                    type="radio"
                    name="adminStatus"
                    value="RESUBMISSION"
                    v-model="getRequest.adminStatus"
                    :checked="getRequest.adminStatus === 'RESUBMISSION'"
                  />
                  RESUBMISSION
                </label>
                <label class="flex items-center text-sm text-gray-700">
                  <input
                    type="radio"
                    name="adminStatus"
                    value="APPROVED"
                    v-model="getRequest.adminStatus"
                    :checked="getRequest.adminStatus === 'APRROVED'"
                  />
                  APPROVED
                </label>
                <label class="flex items-center text-sm text-gray-700">
                  <input
                    type="radio"
                    name="adminStatus"
                    value="COMPLETED"
                    v-model="getRequest.adminStatus"
                    :checked="getRequest.adminStatus === 'COMPLETED'"
                  />
                  COMPLETED
                </label>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3">
            <div class="mb-4">
              <label
                for="preparedBy"
                class="mb-2 block text-sm font-semibold text-gray-700"
              >
                Last edited: {{ getRequest.modifiedDate }}
              </label>
              <input
                v-model="getRequest.modifiedBy"
                type="text"
                name="preparedBy"
                id="preparedBy"
                class="w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-sm text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
              />
            </div>
          </div>
        </div>

        <div class="w-full">
          <label
            for="Description"
            class="mb-2 block text-sm font-semibold text-gray-700"
          >
            Comments
          </label>
          <textarea
            v-model="getRequest.adminComment"
            id="Description"
            class="w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            rows="2"
            required
          ></textarea>
        </div>
        <div class="flex justify-end mt-6">
          <div v-show="showConfirmButton">
            <button
              @click="adminUpdate()"
              type="button"
              class="text-center rounded-2xl bg-sky-800 shadow-md p-3 my-1 w-full text-white py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 items-center"
            >
              Update
            </button>
          </div>
          <div v-show="showLoadingButton">
            <button
              disabled=""
              type="button"
              class="text-center rounded-2xl bg-sky-800 shadow-md p-3 my-1 w-full text-white py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 items-center"
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
      </div>
      <div v-show="showPTWForm">
        <hr />
        <div class="p-1 rounded-lg">
          <h2 class="text-md font-semibold text-black capitalize">
            Feedback From Security
          </h2>
          <hr />
        </div>
        <div class="bg-[#F9FAFB] rounded-md">
          <table class="min-w-full table-auto border-collapse border-gray-800">
            <thead class="">
              <tr>
                <th class="border-gray-600 px-4 py-2 text-sm font-semibold">
                  Status
                </th>
                <th class="border-gray-600 px-4 py-2 text-sm font-semibold">
                  Comments
                </th>
                <th class="border-gray-600 px-4 py-2 text-sm font-semibold">
                  By
                </th>
              </tr>
            </thead>

            <tbody>
              <tr class="justify-centre text-center">
                <td
                  class="border-gray-600 px-4 py-2"
                  :class="
                    getStatusContainerClass(getRequest.securityAdminStatus)
                  "
                >
                  <span
                    :class="getStatusDotClass(getRequest.securityAdminStatus)"
                  ></span>
                  <h2
                    :class="getStatusTextClass(getRequest.securityAdminStatus)"
                  >
                    {{ getRequest.securityAdminStatus }}
                  </h2>
                </td>
                <td class="border-gray-600 px-4 py-2">
                  {{ getRequest.securityAdminComment }}
                </td>
                <td class="border-gray-600 px-4 py-2">
                  {{ getRequest.securityModifiedBy }}
                </td>
              </tr>
            </tbody>
          </table>
          <hr />
        </div>
        <div class="flex justify-between gap-4 mt-4">
          <div class="w-full md:w-1/3">
            <div class="mb-4">
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Ticket Status
              </label>
              <div :class="getStatusContainerClass(getRequest.ticketStatus)">
                <span
                  :class="getStatusDotClass(getRequest.ticketStatus)"
                ></span>
                <h2 :class="getStatusTextClass(getRequest.ticketStatus)">
                  {{ getRequest.ticketStatus }}
                </h2>
              </div>
            </div>
          </div>

          <div class="w-full md:w-1/3">
            <div class="mb-4">
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Admin Status
              </label>
              <div class="grid grid-cols-1 gap-4 items-center">
                <label class="flex items-center text-sm text-gray-700">
                  <div></div>
                  <input
                    type="radio"
                    name="ptwAdminStatus"
                    value="RESUBMISSION"
                    v-model="getRequest.safetyAdminStatus"
                    :disabled="getRequest.ticketStatus === 'CLOSE'"
                    :checked="getRequest.safetyAdminStatus === 'RESUBMISSION'"
                  />
                  RESUBMISSION
                </label>
                <label class="flex items-center text-sm text-gray-700">
                  <input
                    type="radio"
                    name="ptwAdminStatus"
                    value="APPROVED"
                    v-model="getRequest.safetyAdminStatus"
                    :disabled="getRequest.ticketStatus === 'CLOSE'"
                    :checked="getRequest.safetyAdminStatus === 'APPROVED'"
                  />
                  APPROVED
                </label>
                <label class="flex items-center text-sm text-gray-700">
                  <input
                    type="radio"
                    name="ptwAdminStatus"
                    value="COMPLETED"
                    v-model="getRequest.safetyAdminStatus"
                    :disabled="getRequest.ticketStatus === 'CLOSE'"
                    :checked="getRequest.safetyAdminStatus === 'COMPLETED'"
                  />
                  COMPLETED
                </label>
              </div>
            </div>
          </div>

          <div class="w-full md:w-1/3">
            <div class="mb-4">
              <label
                for="ptwPreparedBy"
                class="mb-2 block text-sm font-semibold text-gray-700"
              >
                Last edited: {{ getRequest.safetyModifiedDate }}
              </label>
              <input
                v-model="getRequest.safetyModifiedBy"
                :disabled="getRequest.ticketStatus === 'CLOSE'"
                type="text"
                name="ptwPreparedBy"
                id="ptwPreparedBy"
                class="w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-sm text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
              />
            </div>
          </div>
        </div>

        <div class="w-full">
          <label
            for="ptwDescription"
            class="mb-2 block text-sm font-semibold text-gray-700"
          >
            Comments
          </label>
          <textarea
            v-model="getRequest.safetyAdminComment"
            :disabled="getRequest.ticketStatus === 'CLOSE'"
            id="ptwDescription"
            class="w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            rows="2"
            required
          ></textarea>
        </div>
        <div class="flex justify-end mt-6">
          <div v-show="showConfirmButton">
            <button
              @click="adminsafetyUpdate()"
              :disabled="getRequest.ticketStatus === 'CLOSE'"
              type="button"
              class="text-center rounded-2xl bg-sky-800 shadow-md p-3 my-1 w-full text-white py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 items-center"
            >
              Update
            </button>
          </div>
          <div v-show="showLoadingButton">
            <button
              disabled=""
              type="button"
              class="text-center rounded-2xl bg-sky-800 shadow-md p-3 my-1 w-full text-white py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 items-center"
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
      </div>
    </template>
  </Modal>
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
// import { store } from "../views/store.js";
import Modal from "../components/vmodaladmin.vue";
import $ from "jquery";
import "datatables.net-dt";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import axios from "axios";


export default {
  name: "Myrequest2Views",
  components: { Modal,},
  data() {
    return {
      showConfirmButton: true,
      showLoadingButton: false,
      requesters: [],
      getRequest: [],
      isModalVisible: false,
      showBadgeRequest: false,
      showMaskRequest: false,
      showTeskit: false,
      showIncidentReport: false,
      showPTWForm: false,
      showCCTVForm: false,
      showVETForm: false,
      adminComment: "",
      modifiedBy: "",
      adminStatus: "",
      refNumber: "",
      ticketStatus: "",
      userEmail: "",
      userDetails: [],
      token: "",
      requesterRefNumber:"",
  
      // Sample data structure for requesters
      role: "security",
     
    };
  },

  computed: {},

  mounted() {
    // this.role = store.getRole();
    // if (this.role === "safety") {
    //   this.$router.push("/ManagerequestSafety");
    // }
    // else{
    //   this.$router.push("/Dashboard");
    // }
    this.fetchRequesters().then(() => {
      this.$nextTick(() => {
        this.initializeDataTable();
      });
    });
    
  },

  methods: {
    async fetchRequesters() {
      try {
        const response =  await axios.get(
          "http://172.28.28.91:8085/api/Admin/GetAllRequestsAdminSafety"
        );
        this.requesters = response.data;
        
        // Additional logging or processing
      } catch (error) {
        console.error("Error fetching requesters:", error);
      }
    },
    convertJsonToArray(json, keysToExclude) {
      return Object.entries(json).reduce((tableData, [key, value]) => {
        if (!keysToExclude.includes(key)) {
          tableData.push([key, value]);
        }
        return tableData;
      }, []);
    },
    convertJsonToKeyValArray(jsonObject) {
      return Object.keys(jsonObject).map((key) => {
        return { key: key, value: jsonObject[key] };
      });
    },redirectToPTWView(refNumber) {
      console.log(refNumber);

      // Construct the full URL you want to navigate to
      const url = `${window.location.origin}/PTWView/${refNumber}`;

      // Open in a new tab
      window.open(url, "_blank");
    },

    getFileName(file) {
      const parts = file.split("/");
      return parts[parts.length - 1];
    },
    adminsafetyUpdate() {
      this.showConfirmButton = false;
      this.showLoadingButton = true;
      axios
        .put("http://172.28.28.91:8085/api/Admin/AdminSafetyUpdatePTW", {
          // Use the correct property name
          refNumber: this.getRequest.refNumber,
          ticketStatus: "open",
          adminStatus: this.getRequest.safetyAdminStatus,
          adminComment: this.getRequest.safetyAdminComment,
          modifiedBy: this.getRequest.safetyModifiedBy,
          userEmail: this.getRequest.vendorEmail,
        })
        .then(() => {
          // Handle success
          this.isModalVisible = false;
          window.location.reload();
        })
        .catch((error) => {
          // Handle error
          console.error("Error:", error);
        });
    },
    adminUpdate() {
      this.showConfirmButton = false;
      this.showLoadingButton = true;
      if (this.getRequest.referenceNumber.includes("BR")) {
        axios
          .put("http://172.28.28.91:8085/api/Admin/AdminUpdateBadgeRequest", {
            refNumber: this.getRequest.referenceNumber,
            ticketStatus: "open",
            adminStatus: this.getRequest.adminStatus,
            adminComment: this.getRequest.adminComment,
            modifiedBy: this.getRequest.modifiedBy,
            userEmail: this.getRequest.userEmail,
          })
          .then((response) => {
            "Server response:", response.data;
            // Handle the response, such as showing a success message or resetting the form
            //myrequest.fetchRequesters();

            this.isModalVisible = false;
            window.location.reload();
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        //this.showBadgeRequest = true;
      }
      if (this.getRequest.referenceNumber.includes("IR")) {
        axios
          .put("http://172.28.28.91:8085/api/Admin/AdminUpdateIncidentReport", {
            refNumber: this.getRequest.referenceNumber,
            ticketStatus: "open",
            adminStatus: this.getRequest.adminStatus,
            adminComment: this.getRequest.adminComment,
            modifiedBy: this.getRequest.modifiedBy,
            userEmail: this.getRequest.userEmail,
          })
          .then((response) => {
            "Server response:", response.data;
            // Handle the response, such as showing a success message or resetting the form
            //myrequest.fetchRequesters();

            this.isModalVisible = false;
            window.location.reload();
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        //this.showBadgeRequest = true;
      }
      if (this.getRequest.referenceNumber.includes("CCTV")) {
        axios
          .put("http://172.28.28.91:8085/api/Admin/AdminUpdateCCTV", {
            refNumber: this.getRequest.referenceNumber,
            ticketStatus: "open",
            adminStatus: this.getRequest.adminStatus,
            adminComment: this.getRequest.adminComment,
            modifiedBy: this.getRequest.modifiedBy,
            userEmail: this.getRequest.userEmail,
          })
          .then((response) => {
            "Server response:", response.data;
            // Handle the response, such as showing a success message or resetting the form
            //myrequest.fetchRequesters();

            this.isModalVisible = false;
            window.location.reload();
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        //this.showBadgeRequest = true;
      }
      if (this.getRequest.referenceNumber.includes("Mask")) {
        axios
          .put("http://172.28.28.91:8085/api/Admin/AdminUpdateMask", {
            refNumber: this.getRequest.referenceNumber,
            ticketStatus: "open",
            adminStatus: this.getRequest.adminStatus,
            adminComment: this.getRequest.adminComment,
            modifiedBy: this.getRequest.modifiedBy,
            userEmail: this.getRequest.userEmail,
          })
          .then((response) => {
            "Server response:", response.data;
            // Handle the response, such as showing a success message or resetting the form
            //myrequest.fetchRequesters();

            this.isModalVisible = false;
            window.location.reload();
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        //this.showBadgeRequest = true;
      }
      if (this.getRequest.referenceNumber.includes("TK")) {
        axios
          .put("http://172.28.28.91:8085/api/Admin/AdminUpdateTestkit", {
            refNumber: this.getRequest.referenceNumber,
            ticketStatus: "open",
            adminStatus: this.getRequest.adminStatus,
            adminComment: this.getRequest.adminComment,
            modifiedBy: this.getRequest.modifiedBy,
            userEmail: this.getRequest.userEmail,
          })
          .then((response) => {
            "Server response:", response.data;
            // Handle the response, such as showing a success message or resetting the form
            //myrequest.fetchRequesters();

            this.isModalVisible = false;
            window.location.reload();
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        //this.showBadgeRequest = true;
      }
      if (this.getRequest.referenceNumber.includes("VET")) {
        axios
          .put("http://172.28.28.91:8085/api/Admin/AdminUpdateVisitor", {
            refNumber: this.getRequest.referenceNumber,
            ticketStatus: "open",
            adminStatus: this.getRequest.adminStatus,
            adminComment: this.getRequest.adminComment,
            modifiedBy: this.getRequest.modifiedBy,
            userEmail: this.getRequest.userEmail,
          })
          .then((response) => {
            "Server response:", response.data;
            // Handle the response, such as showing a success message or resetting the form
            //myrequest.fetchRequesters();

            this.isModalVisible = false;
            window.location.reload();
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        //this.showBadgeRequest = true;
      }

      // if (this.getRequest.referenceNumber.includes("PTW")) {
      //   axios
      //     .put("http://172.28.28.91:8085/api/Admin/AdminSafetyUpdatePTW", {

      //       refNumber: this.getRequest.referenceNumber,
      //       ticketStatus: "open",
      //       adminStatus: this.getRequest.adminStatus,
      //       adminComment: this.getRequest.adminComment,
      //       modifiedBy: this.getRequest.modifiedBy,
      //       userEmail: "hazman5001@gmail.com"

      //     })
      //     .catch((error) => {
      //       console.error("Error:", error);
      //     });

      //   this.isModalVisible = false;
      //   window.location.reload();
      //   //this.showBadgeRequest = true;
      // }
    },

    showModal(refNumber) {
      this.requesterRefNumber=refNumber
      if (refNumber.includes("BR")) {
        axios
          .get("http://172.28.28.91:8085/api/Main/GetBadgeRequest/" + refNumber)
          .then((response) => {
            this.getRequest = response.data;
            console.log("this is get request" + response.data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });

          this.isModalVisible = true;
        this.showMaskRequest = false;
        this.showIncidentReport = false;
        this.showPTWForm = false;
        this.showCCTVForm = false;
        this.showVETForm = false;
        this.showBadgeRequest = true;
        this.showTeskit= false;
      }
      if (refNumber.includes("VET")) {
        axios
          .get("http://172.28.28.91:8085/api/Main/GetVisitor/" + refNumber)
          .then((response) => {
            this.getRequest = response.data;
            console.log("try" + this.getRequest);
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        this.isModalVisible = true;
        this.showVETForm = true;
      }
      if (refNumber.includes("CCTV")) {
        axios
          .get("http://172.28.28.91:8085/api/Main/GetCCTVRequest/" + refNumber)
          .then((response) => {
            this.getRequest = response.data;
            console.log(this.getRequest);
          })
          .catch((error) => {
            console.error("Error:", error);
          });

          this.isModalVisible = true;
        this.showMaskRequest = false;
        this.showIncidentReport = false;
        this.showPTWForm = false;
        this.showCCTVForm = true;
        this.showVETForm = false;
        this.showBadgeRequest = false;
        this.showTeskit= false;
      }
      if (refNumber.includes("PTW")) {
        axios
          .get("http://172.28.28.91:8085/api/Main/GetPTW/" + refNumber)
          .then((response) => {
            this.getRequest = response.data;
            console.log(this.getRequest);
          })
          .catch((error) => {
            console.error("Error:", error);
          });

          this.isModalVisible = true;
        this.showMaskRequest = false;
        this.showIncidentReport = false;
        this.showPTWForm = true;
        this.showCCTVForm = false;
        this.showVETForm = false;
        this.showBadgeRequest = false;
        this.showTeskit= false;
      }
      if (refNumber.includes("IR")) {
        axios
          .get(
            "http://172.28.28.91:8085/api/Main/GetIncidentReport/" + refNumber
          )
          .then((response) => {
            this.getRequest = response.data;
            console.log(this.getRequest);
          })
          .catch((error) => {
            console.error("Error:", error);
          });

          this.isModalVisible = true;
        this.showMaskRequest = false;
        this.showIncidentReport = true;
        this.showPTWForm = false;
        this.showCCTVForm = false;
        this.showVETForm = false;
        this.showBadgeRequest = false;
        this.showTeskit= false;
      }
      if (refNumber.includes("TK")) {
        axios
          .get("http://172.28.28.91:8085/api/Main/GetTestKits/" + refNumber)
          .then((response) => {
            this.getRequest = response.data;
            console.log(this.getRequest);
          })
          .catch((error) => {
            console.error("Error:", error);
          });

          this.isModalVisible = true;
        this.showMaskRequest = false;
        this.showIncidentReport = false;
        this.showPTWForm = false;
        this.showCCTVForm = false;
        this.showVETForm = false;
        this.showBadgeRequest = false;
        this.showTeskit= true;
      }
      if (refNumber.includes("Mask")) {
        axios
          .get("http://172.28.28.91:8085/api/Main/GetMask/" + refNumber)
          .then((response) => {
            this.getRequest = response.data;
            console.log(this.getRequest);
          })
          .catch((error) => {
            console.error("Error:", error);
          });

          this.isModalVisible = true;
        this.showMaskRequest = true;
        this.showIncidentReport = false;
        this.showPTWForm = false;
        this.showCCTVForm = false;
        this.showVETForm = false;
        this.showBadgeRequest = false;
        this.showTeskit= false;
      }
      // this.isModalVisible = true;
    },
    initializeDataTable() {
      $(this.$refs.myTable).DataTable({
        // DataTables options here
      });
    },
    closeModal() {
      this.isModalVisible = false;
    },

    getStatusContainerClass(Status) {
      const colorMap = {
        RESUBMISSION:
          "inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-orange-100/60 dark:bg-gray-800",
        CLOSE:
          "inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-neutral-300/60 dark:bg-gray-800",
        "": "inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800",
        OPEN: "inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800",
        APPROVED:
          "inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800",
        COMPLETED:
          "inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-blue-200/60 dark:bg-gray-800",
        REJECTED:
          "inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800",
      };
      // Get the class for the combination of ticketStatus and adminStatus
      // You can adjust this format based on your needs
      return colorMap[Status] || ""; // Default to a dark color if the combination is not recognized
    },
    getStatusDotClass(Status) {
      const colorMap = {
        RESUBMISSION: "h-1.5 w-1.5 rounded-full bg-orange-500",
        CLOSE: "h-1.5 w-1.5 rounded-full bg-neutral-500",
        "": "h-1.5 w-1.5 rounded-full bg-red-500",
        OPEN: "h-1.5 w-1.5 rounded-full bg-red-500",
        APPROVED: "h-1.5 w-1.5 rounded-full bg-emerald-500",
        COMPLETED: "h-1.5 w-1.5 rounded-full bg-blue-500",
        REJECTED: "h-1.5 w-1.5 rounded-full bg-red-500",
      };
      return colorMap[Status] || "h-1.5 w-1.5 rounded-full bg-gray-700"; // Default to a dark color if the status is not recognized
    },
    getStatusTextClass(Status) {
      const colorMap = {
        RESUBMISSION: "text-sm font-normal text-orange-500",
        CLOSE: "text-sm font-normal text-neutral-500",
        "": "text-sm font-normal text-red-500",
        OPEN: "text-sm font-normal text-red-500",
        APPROVED: "text-sm font-normal text-emerald-500",
        COMPLETED: "text-sm font-normal text-blue-500",
        REJECTED: "text-sm font-normal text-red-500",
      };
      return colorMap[Status] || "text-gray-500"; // Default to a dark color if the status is not recognized
    },
    viewRequestDetails() {
      // You can implement the logic to show the details view here
      console.log("see", this.requester);
    },
  },
};
</script>
<style>
.radio input[type="radio"] ~ label {
  background-color: rgb(233, 225, 225);
  color: rgb(158, 146, 146);
}

.radio input[type="radio"]:checked ~ label {
  background-color: rgb(70, 230, 22);
  color: white;
}
</style>
