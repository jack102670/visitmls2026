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
                  <table
                    ref="myTable"
                    class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 hover stripe"
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
              </div>
            </div>
          </div>
        </section>

        <!-- Display a list of movies from the TMDb API -->
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
            <div
              class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3 md:grid-cols-3"
            >
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

              <div>
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
              </div>
            </div>

            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <label
                class="font-semibold text-gray-700 dark:text-gray-200"
                for="People"
                >Attachment(s)</label
              >
              <label class="">
                <ul>
                  <li
                    v-for="file in securityFiles"
                    :key="file"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  >
                    <div class="flex justify-between">
                      {{ getFileName(file) }}

                      <a class="text-blue-500" target="_blank" :href="file">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      </a>
                    </div>
                  </li>
                </ul>
              </label>
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
            <div class="absolute -top-10 -right-1 flex">
              <span
                v-if="getRequest.adminStatus === 'COMPLETED'"
                class="text-[#160959]"
                ><button @click="exportFormToPDF()">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
                    />
                  </svg></button></span
              ><span class="text-slate-500 text-sm"
                >REFNUMBER: {{ getRequest.referenceNumber }}</span
              >
            </div>

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
            <div
              class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-2"
            >
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
                  >{{ getRequest.witness }}</label
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
              <label class="">
                <ul>
                  <li
                    v-for="file in getRequest.files"
                    :key="file"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  >
                    <div class="flex justify-between">
                      {{ getFileName(file) }}

                      <a class="text-blue-500" target="_blank" :href="file">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      </a>
                    </div>
                  </li>
                </ul>
              </label>
            </div>
          </div>
          <!-- teskit -->
          <div class="relative" v-show="showTeskit">
            <div class="flex absolute -top-10 -right-1">
              <div v-if="getRequest.adminStatus === 'COMPLETED'">
                <span class="text-[#160959]"
                  ><button @click="exportFormToPDF()">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
                      />
                    </svg></button
                ></span>
              </div>
              <span class="text-slate-500 text-sm"
                >REFNUMBER: {{ getRequest.referenceNumber }}</span
              >
            </div>
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
            <div
              class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-3"
            >
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
            <div class="flex absolute -top-10 -right-1">
              <div v-if="getRequest.ticketStatus === 'CLOSE'">
                <span class="text-[#160959]"
                  ><button @click="exportFormToPDF()">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
                      />
                    </svg></button
                ></span>
              </div>
              <span class="text-slate-500 text-sm"
                >REFNUMBER: {{ getRequest.referenceNumber }}</span
              >
            </div>
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
            <div
              class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-2"
            >
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
                >Attachment(s)</label
              >
              <label class="">
                <ul>
                  <li
                    v-for="file in getRequest.files"
                    :key="file"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  >
                    <div class="flex justify-between">
                      {{ getFileName(file) }}

                      <a class="text-blue-500" target="_blank" :href="file">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      </a>
                    </div>
                  </li>
                </ul>
              </label>
            </div>
          </div>
          <!-- CCTV Footages-->
          <div class="relative" v-show="showCCTVForm">
            <div class="absolute -top-10 -right-1 flex item-center">
              <span
                v-if="getRequest.adminStatus === 'COMPLETED'"
                class="text-[#160959]"
                ><button @click="exportFormToPDF()">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
                    />
                  </svg></button
              ></span>
              <span class="text-slate-500 text-sm"
                >REFNUMBER: {{ getRequest.referenceNumber }}</span
              >
            </div>
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
            <div
              class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-2"
            >
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
            <div
              class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3 md:grid-cols-1"
            >
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
            <div class="flex absolute -top-10 -right-1">
              <div v-if="getRequest.adminStatus === 'COMPLETED'">
                <span class="text-[#160959]"
                  ><button @click="exportFormToPDF()">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
                      />
                    </svg></button
                ></span>
              </div>
              <span class="text-slate-500 text-sm"
                >REFNUMBER: {{ getRequest.referenceNumber }}</span
              >
            </div>
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
            <div
              class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-2"
            >
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
            <div
              class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3 md:grid-cols-2"
            >
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
            <div class="absolute -top-10 -right-1 flex items-center">
              <span
                class="text-[#160959]"
                v-if="getRequest.adminStatus === 'COMPLETED'"
                ><button @click="exportFormToPDF()">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
                    />
                  </svg></button
              ></span>
              <span class="text-slate-500 text-sm"
                >REFNUMBER: {{ getRequest.referenceNumber }}</span
              >
            </div>

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
            <div
              class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-2"
            >
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
            <h2 class="text-lg font-semibold text-white capitalize">ADMIN</h2>
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
                  <div
                    :class="getStatusContainerClass(getRequest.ticketStatus)"
                  >
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
                        :disabled="getRequest.ticketStatus === 'CLOSE'"
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
                        :disabled="getRequest.ticketStatus === 'CLOSE'"
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
                        :disabled="getRequest.ticketStatus === 'CLOSE'"
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
                    :disabled="getRequest.ticketStatus === 'CLOSE'"
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
                :disabled="getRequest.ticketStatus === 'CLOSE'"
                class="w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                rows="2"
                required
              ></textarea>
            </div>
            <div class="flex justify-end mt-6">
              <div v-show="showConfirmButton">
                <button
                  @click="adminUpdate()"
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
          <div v-show="showPTWForm">
            <div class="flex justify-between gap-4 mt-4">
              <div class="w-full md:w-1/3">
                <div class="mb-4">
                  <label class="mb-2 block text-sm font-semibold text-gray-700">
                    Ticket Status
                  </label>
                  <div
                    :class="getStatusContainerClass(getRequest.ticketStatus)"
                  >
                    <span
                      :class="getStatusDotClass(getRequest.ticketStatus)"
                    ></span>
                    <h2 :class="getStatusTextClass(getRequest.ticketStatus)">
                      {{ getRequest.AdminStatus }}
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
                        v-model="getRequest.securityAdminStatus"
                        :checked="
                          getRequest.securityAdminStatus === 'RESUBMISSION'
                        "
                         :disabled="getRequest.ticketStatus === 'CLOSE'"
                      />
                      RESUBMISSION
                    </label>
                    <label class="flex items-center text-sm text-gray-700">
                      <input
                        type="radio"
                        name="ptwAdminStatus"
                        value="APPROVED"
                        v-model="getRequest.securityAdminStatus"
                        :checked="getRequest.securityAdminStatus === 'APPROVED'"
                        :disabled="getRequest.ticketStatus === 'CLOSE'"
                      />
                      APPROVED
                    </label>
                    <!-- <label class="flex items-center text-sm text-gray-700">
                  <input type="radio" name="ptwAdminStatus" value="COMPLETED" v-model="getRequest.securityAdminStatus"
                    :checked="getRequest.securityAdminStatus === 'COMPLETED'" />
                  COMPLETED
                </label> -->
                  </div>
                </div>
              </div>

              <div class="w-full md:w-1/3">
                <div class="mb-4">
                  <label
                    for="ptwPreparedBy"
                    class="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Last edited: {{ getRequest.securityModifiedDate }}
                  </label>
                  <input
                    v-model="getRequest.securityModifiedBy"
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
                v-model="getRequest.securityAdminComment"
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
                  @click="adminsecurityUpdate()"    :disabled="getRequest.ticketStatus === 'CLOSE'"
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
  </main>
</template>

<script>
//import { store } from "../views/store.js";
import Modal from "../components/vmodaladmin.vue";
import $ from "jquery";
import "datatables.net-dt";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import axios from "axios";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
export default {
  name: "Myrequest2Views",
  components: { Modal },
  data() {
    return {
      userDetails: [],
      length: 0,
      securityFiles: [],
      token: "",
      requesterRefNumber: "",
      searchQuery: "",
      // Sample data structure for requesters
      role: "security",
      requesters: [],
      showConfirmButton: true,
      showLoadingButton: false,
      showPrintBtn: false,

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
      fileName: "",

      keysToExclude: ["uniqueCode", "files", "userId", "id"],
      name: ["Branch", "Department", "Phone Number"],
    };
  },

  computed: {},

  mounted() {
    this.fetchRequesters().then(() => {
      this.$nextTick(() => {
        this.initializeDataTable();
      });
    });
  },
  beforeUnmount() {},

  methods: {
    
    getFileName(file) {
      const parts = file.split("/");
      return parts[parts.length - 1];
    },
    getFileName2(file) {
      const parts = file.split("/");
      const fileName = parts[parts.length - 1];
      return fileName.includes("SECURITY") ? fileName : null;
    },

    adminsecurityUpdate() {
      this.showConfirmButton = false;
      this.showLoadingButton = true;
      axios
        .put("http://172.28.28.91:8085/api/Admin/AdminSecUpdatePTW", {
          // Use the correct property name
          refNumber: this.getRequest.refNumber,
          ticketStatus: "open",
          adminStatus: this.getRequest.securityAdminStatus,
          adminComment: this.getRequest.securityAdminComment,
          modifiedBy: this.getRequest.securityModifiedBy,
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
      this.requesterRefNumber = refNumber;
      if (refNumber.includes("BR")) {
        axios
          .get("http://172.28.28.91:8085/api/Main/GetBadgeRequest/" + refNumber)
          .then((response) => {
            this.getRequest = response.data;
            console.log("this is get request masuk tak" + this.getRequest);
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        this.isModalVisible = true;

        console.log(this.isModalVisible);
        this.showBadgeRequest = true;
        this.showMaskRequest = false;
        this.showTeskit = false;
        this.showIncidentReport = false;
        this.showPTWForm = false;
        this.showCCTVForm = false;
        this.showVETForm = false;
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
        this.showBadgeRequest = false;
        this.showMaskRequest = false;
        this.showTeskit = false;
        this.showIncidentReport = false;
        this.showPTWForm = false;
        this.showCCTVForm = false;
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
        this.showCCTVForm = true;
        this.showVETForm = false;
        this.showBadgeRequest = false;
        this.showMaskRequest = false;
        this.showTeskit = false;
        this.showIncidentReport = false;
        this.showPTWForm = false;
      }
      if (refNumber.includes("PTW")) {
        axios
          .get("http://172.28.28.91:8085/api/Main/GetPTW/" + refNumber)
          .then((response) => {
            this.getRequest = response.data;
            console.log(this.getRequest);
            this.length = this.getRequest.files.length;
            console.log(this.length);

            //To append files name with SECURITY into new array
            for (let i = 0; i < this.length; i++) {
              const parts = this.getRequest.files[i].split("/");
              const fileName = parts[parts.length - 1];
              if (fileName.includes("SECURITY")) {
                this.securityFiles.push(this.getRequest.files[i]);
              }

              console.log("this is new files with security" + this.files);
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        this.isModalVisible = true;
        this.showPTWForm = true;
        this.showCCTVForm = false;
        this.showVETForm = false;
        this.showBadgeRequest = false;
        this.showMaskRequest = false;
        this.showTeskit = false;
        this.showIncidentReport = false;
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
        this.showIncidentReport = true;
        this.showPTWForm = false;
        this.showCCTVForm = false;
        this.showVETForm = false;
        this.showBadgeRequest = false;
        this.showMaskRequest = false;
        this.showTeskit = false;
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
        this.showTeskit = true;
        this.showIncidentReport = false;
        this.showPTWForm = false;
        this.showCCTVForm = false;
        this.showVETForm = false;
        this.showBadgeRequest = false;
        this.showMaskRequest = false;
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
        this.showTeskit = false;
      }

      // this.isModalVisible = true;
    },

    closeModal() {
      this.isModalVisible = false;
    },

    initializeDataTable() {
      $(this.$refs.myTable).DataTable({
        // DataTables options here
      });
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
      return colorMap[Status] || "bg-gray-800"; // Default to a dark color if the combination is not recognized
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
    async fetchRequesters() {
      try {
        const response = await axios.get(
          "http://172.28.28.91:8085/api/Admin/GetAllRequestsAdminSecurity"
        );
        this.requesters = response.data;

        // Additional logging or processing
      } catch (error) {
        console.error("Error fetching requesters:", error);
      }
    },
    viewRequestDetails() {
      // You can implement the logic to show the details view here
      console.log("see", this.requester);
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
    },

    exportFormToPDF() {
      const doc = new jsPDF();
      let yPos = 15;

      // Heading Style
      const addSectionHeading = (text) => {
        //doc.setFontSize(14);
        doc.setFont(undefined, "bold");

        // Get the page width
        const pageWidth = doc.internal.pageSize.getWidth();

        // Center the text
        doc.text(text, pageWidth / 2, yPos, { align: "center" });

        yPos += 15; // Space after heading
        //doc.setFontSize(10); // Reset font size for content
        doc.setFont(undefined, "normal");
      };
      const base64Img =
        "data:image/jpeg;base64,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"; // Your base64 data URL
      doc.addImage(base64Img, "JPEG", 15, yPos, 20, 20);

      yPos += 20;
      // Regular Text
      // const addText = (label, text) => {
      //   doc.text(`${label}: ${text}`, 14, yPos);
      //   yPos += 6; // Increment yPos for the next line
      // };

      if (this.getRequest.referenceNumber.includes("BR")) {
        addSectionHeading("BADGE REQUEST FORM");
        this.fileName = "BADGE REQUEST";
      }
      if (this.getRequest.referenceNumber.includes("IR")) {
        addSectionHeading("INCIDENT REPORT FORM");
        this.fileName = "INCIDENT REPORT";
      }
      if (this.getRequest.referenceNumber.includes("CCTV")) {
        addSectionHeading("CCTV FOOTAGE VIEW");
        this.fileName = "CCTV";
      }
      if (this.getRequest.referenceNumber.includes("PTW")) {
        addSectionHeading("PTW FORM ");
        this.fileName = "PTW";
      }
      if (this.getRequest.referenceNumber.includes("VET")) {
        addSectionHeading("VISITOR/ESCORT/TOUR FORM ");
        this.fileName = "VET";
      }
      if (this.getRequest.referenceNumber.includes("TK")) {
        addSectionHeading("TESTKITS REQUEST FORM ");
        this.fileName = "TESKITS";
      }
      if (this.getRequest.referenceNumber.includes("Mask")) {
        addSectionHeading("MASK REQUEST FORM");
        this.fileName = "MASK";
      }
      doc.setFontSize(9);
      doc.setFont(undefined, "bold");
      doc.text("Serial No : " + this.getRequest.referenceNumber, 160, 17);

      // Adding basic info

      // Ensure not to overflow, add new page if needed

      // Adding tables for detailed sections like Equipment, Hazard, etc.

      const test = this.convertJsonToKeyValArray(this.getRequest);

      console.log(test);

      const tableRows = this.convertJsonToArray(
        this.getRequest,
        this.keysToExclude
      );

      console.log(tableRows);

      // doc.autoTable({
      //   startY: yPos,
      //   head: [["", ""]],
      //   body: [
      //     ["BRANCH", tableRows[0][1]],
      //     ["REFERENCE NUMBER", tableRows[1][1]],
      //     ["REQUESTER NAME", tableRows[2][1]],
      //   ],

      //   theme: "grid",
      //   margin: { left: 14 },
      //   headStyles: { fillColor: [22, 9, 89] }, // Customize head style
      //   didDrawPage: function (data) {
      //     yPos = data.cursor.y + 10; // Update Y position for next content
      //   },
      // });
      if (this.getRequest.referenceNumber.includes("BR")) {
        doc.setFontSize(11);
        // Adjust the starting Y position for "Supplier Company INC" section based on yPos
        doc.text(
          "BRANCH                            : " +
            tableRows[0][1] +
            "\n\nREQUESTER NAME         : " +
            tableRows[2][1] +
            "\n\nDEPARTMENT NAME      : " +
            tableRows[3][1] +
            "\n\nFOR \t\t                  : " +
            tableRows[4][1] +
            "\n\nPHONE NUMBER \t    : " +
            tableRows[5][1] +
            "\n\nDATE REQUESTED \t: " +
            tableRows[6][1],

          15,
          yPos
        );

        // Increment yPos for each block of text to ensure they do not overlap
        yPos += 60;

        doc.autoTable({
          startY: yPos,
          head: [["ADMIN FEEDBACK", ""]],
          body: [
            ["TICKETSTATUS", tableRows[9][1]],
            ["COMMENT", tableRows[8][1]],
            ["STATUS", tableRows[7][1]],
            ["BY", tableRows[11][1]],
            ["LAST MODIFIED", tableRows[10][1]],
          ],

          theme: "grid",
          margin: { left: 14 },
          headStyles: { fillColor: [22, 9, 89] }, // Customize head style
          didDrawPage: function (data) {
            yPos = data.cursor.y + 10; // Update Y position for next content
          },
        });
      }

      if (this.getRequest.referenceNumber.includes("CCTV")) {
        doc.setFontSize(11);
        // Adjust the starting Y position for "Supplier Company INC" section based on yPos
        doc.text(
          "BRANCH                            : " +
            tableRows[0][1] +
            "\n\nREQUESTER NAME         : " +
            tableRows[2][1] +
            "\n\nDEPARTMENT NAME      : " +
            tableRows[6][1] +
            "\n\nPHONE NUMBER \t    : " +
            tableRows[4][1] +
            "\n\nDATE REQUESTED \t: " +
            tableRows[3][1] +
            "\n\nAPPOINTMENT DATE \t: " +
            tableRows[3][1] +
            "\n\nINCIDENT LOCATION \t: " +
            tableRows[7][1] +
            "\n\nINCIDENT DATETIME \t: ",

          15,
          yPos
        );
        yPos += 70;
        const labelX = 15;
        const descriptionX = 60;

        doc.setFont(undefined, "bold");
        doc.text("DESCRIPTION", labelX, yPos);
        // doc.setFont(undefined,"normal");

        doc.text(": " + tableRows[5][1] || "N/A", descriptionX, yPos, {
          align: "left",
          maxWidth: 120,
        });
        yPos += 20;

        // Increment yPos for each block of text to ensure they do not overlap
        yPos += 10;

        doc.autoTable({
          startY: yPos,
          head: [["ADMIN FEEDBACK", ""]],
          body: [
            ["TICKETSTATUS", tableRows[12][1]],
            ["COMMENT", tableRows[11][1]],
            ["STATUS", tableRows[10][1]],
            ["BY", tableRows[14][1]],
            ["LAST MODIFIED", tableRows[13][1]],
          ],

          theme: "grid",
          margin: { left: 14 },
          headStyles: { fillColor: [22, 9, 89] }, // Customize head style
          didDrawPage: function (data) {
            yPos = data.cursor.y + 10; // Update Y position for next content
          },
        });
      }
      if (this.getRequest.referenceNumber.includes("Mask")) {
        doc.setFontSize(11);
        // Adjust the starting Y position for "Supplier Company INC" section based on yPos
        doc.text(
          "BRANCH                            : " +
            tableRows[0][1] +
            "\n\nREQUESTER NAME         : " +
            tableRows[2][1] +
            "\n\nDEPARTMENT NAME      : " +
            tableRows[3][1] +
            "\n\nPHONE NUMBER \t    : " +
            tableRows[4][1] +
            "\n\nDATE REQUESTED \t: " +
            tableRows[7][1] +
            "\n\nPIECES AMOUNT \t: " +
            tableRows[6][1] +
            "\n\nDESCRIPTION \t: " +
            tableRows[5][1],

          15,
          yPos
        );

        yPos += 90;

        doc.autoTable({
          startY: yPos,
          head: [["ADMIN FEEDBACK", ""]],
          body: [
            ["TICKETSTATUS", tableRows[10][1]],
            ["COMMENT", tableRows[9][1]],
            ["STATUS", tableRows[8][1]],
            ["BY", tableRows[12][1]],
            ["LAST MODIFIED", tableRows[11][1]],
          ],

          theme: "grid",
          margin: { left: 14 },
          headStyles: { fillColor: [22, 9, 89] }, // Customize head style
          didDrawPage: function (data) {
            yPos = data.cursor.y + 10; // Update Y position for next content
          },
        });
      }
      if (this.getRequest.referenceNumber.includes("TK")) {
        doc.setFontSize(11);
        // Adjust the starting Y position for "Supplier Company INC" section based on yPos
        doc.text(
          "BRANCH                            : " +
            tableRows[0][1] +
            "\n\nREQUESTER NAME         : " +
            tableRows[2][1] +
            "\n\nDEPARTMENT NAME      : " +
            tableRows[3][1] +
            "\n\nPHONE NUMBER \t    : " +
            tableRows[4][1] +
            "\n\nDATE REQUESTED \t: " +
            tableRows[10][1] +
            "\n\nBOX STOCK \t: " +
            tableRows[7][1] +
            "\n\nKIT STOCK \t: " +
            tableRows[8][1] +
            "\n\nKIT OUT \t: " +
            tableRows[6][1] +
            "\n\nBALANCE KIT \t: " +
            tableRows[5][1] +
            "\n\nREMARK \t: " +
            tableRows[9][1],

          15,
          yPos
        );

        yPos += 90;

        doc.autoTable({
          startY: yPos,
          head: [["ADMIN FEEDBACK", ""]],
          body: [
            ["TICKETSTATUS", tableRows[13][1]],
            ["COMMENT", tableRows[12][1]],
            ["STATUS", tableRows[11][1]],
            ["BY", tableRows[15][1]],
            ["LAST MODIFIED", tableRows[14][1]],
          ],

          theme: "grid",
          margin: { left: 14 },
          headStyles: { fillColor: [22, 9, 89] }, // Customize head style
          didDrawPage: function (data) {
            yPos = data.cursor.y + 10; // Update Y position for next content
          },
        });
      }
      if (this.getRequest.referenceNumber.includes("IR")) {
        doc.setFontSize(11);
        // Adjust the starting Y position for "Supplier Company INC" section based on yPos
        doc.text(
          "DATE INCIDENT    : " +
            tableRows[2][1] +
            "\n\nINCIDENT TYPE    : " +
            tableRows[3][1] +
            "\n\nINCIDENT LOCATION \t    : " +
            tableRows[4][1] +
            "\n\nDATE REQUESTED \t: " +
            tableRows[8][1] +
            "\n\nPARTIES INVOLVED \t: " +
            tableRows[5][1] +
            "\n\nWITNESS \t: " +
            tableRows[6][1] +
            "\n\nINCIDENT DETAILS \t: " +
            tableRows[7][1],

          15,
          yPos
        );

        yPos += 90;

        doc.autoTable({
          startY: yPos,
          head: [["ADMIN FEEDBACK", ""]],
          body: [
            ["TICKETSTATUS", tableRows[11][1]],
            ["COMMENT", tableRows[10][1]],
            ["STATUS", tableRows[9][1]],
            ["BY", tableRows[13][1]],
            ["LAST MODIFIED", tableRows[12][1]],
          ],

          theme: "grid",
          margin: { left: 14 },
          headStyles: { fillColor: [22, 9, 89] }, // Customize head style
          didDrawPage: function (data) {
            yPos = data.cursor.y + 10; // Update Y position for next content
          },
        });
      }
      if (this.getRequest.referenceNumber.includes("VET")) {
        doc.setFontSize(11);
        // Adjust the starting Y position for "Supplier Company INC" section based on yPos
        doc.text(
          "REQUESTER NAME         : " +
            tableRows[2][1] +
            "\n\nDEPARTMENT NAME      : " +
            tableRows[3][1] +
            "\n\nPHONE NUMBER \t    : " +
            tableRows[5][1] +
            "\n\nDATE REQUESTED \t: " +
            tableRows[12][1] +
            "\n\nMEETING LOCATION \t: " +
            tableRows[4][1] +
            "\n\nNO OF PAX \t: " +
            tableRows[8][1] +
            "\n\nNO OF PARKING SPACE \t: " +
            tableRows[9][1] +
            "\n\nCUSTOMER TRANSPORT \t: " +
            tableRows[10][1] +
            "\n\nVISIT DATETIME \t: " +
            tableRows[11][1] +
            "\n\nVISIT PURPOSE \t: " +
            tableRows[7][1],

          15,
          yPos
        );

        yPos += 100;

        doc.autoTable({
          startY: yPos,
          head: [["ADMIN FEEDBACK", ""]],
          body: [
            ["TICKETSTATUS", tableRows[15][1]],
            ["COMMENT", tableRows[14][1]],
            ["STATUS", tableRows[13][1]],
            ["BY", tableRows[17][1]],
            ["LAST MODIFIED", tableRows[16][1]],
          ],

          theme: "grid",
          margin: { left: 14 },
          headStyles: { fillColor: [22, 9, 89] }, // Customize head style
          didDrawPage: function (data) {
            yPos = data.cursor.y + 10; // Update Y position for next content
          },
        });
      }

      // // Continue placing other elements using updated yPos for their starting positions
      // doc.text("Date\nApril 26, 2023", 150, yPos);
      // doc.text("Invoice #\nBRA-00335", 150, yPos + 10);

      // // For right-aligned text, continue using updated yPos and adjust as needed
      // doc.text(
      //   "Customer Company\nNumber: 123456789\nVAT: 23456789\n9552 Vandervort Spurs\nParadise, 43325\nUnited States",
      //   150,
      //   yPos + 20,
      //   null,
      //   null,
      //   "right"
      // );
      // Define the "Hot Work" information in a two-column format

      // Check for a new page if needed

      // Finish up
      doc.save(this.getRequest.referenceNumber + "_" + this.fileName + ".pdf");
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
