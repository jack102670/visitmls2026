<template>
  <tr>
    <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
      <div class="inline-flex items-center gap-x-3">
        <div class="flex items-center gap-x-2">
          <div>
            <h2 class="font-medium text-gray-500 dark:text-gray-300">
              {{ requester.name }}
            </h2>
          </div>
        </div>
      </div>
    </td>
    <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
      <div class="inline-flex items-center gap-x-3">
        <div class="flex items-center gap-x-2">
          <div>
            <h2 class="font-medium text-gray-500 dark:text-gray-300">
              <!-- Conditionally display 'Badge Request' if typeofrequest includes 'br' -->
              {{
                requester.refNumber.includes("BR")
                  ? "Badge Request"
                  : requester.refNumber.includes("IR")
                    ? "Incident Report"
                    : requester.refNumber.includes("CCTV")
                      ? "CCTV Footage"
                      : requester.refNumber.includes("PTW")
                        ? "Permission To Work"
                        : requester.refNumber.includes("VET")
                          ? "Visitor Escort Tour"
                          : requester.refNumber.includes("TK")
                            ? "Teskit"
                            : requester.refNumber.includes("MK")
                              ? "Mask"
                              : null
              }}
            </h2>
          </div>
        </div>
      </div>
    </td>

    <td
      class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
    >
      {{ requester.date }}
    </td>

    <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
      <div :class="getStatusContainerClass(requester.status)">
        <span :class="getStatusDotClass(requester.status)"></span>
        <h2 :class="getStatusTextClass(requester.status)">
          {{ requester.status }}
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
  <Modal v-show="isModalVisible" @close="closeModal">
    <!-- header -->
    <template v-slot:header>
      <h1
        v-if="requester.refNumber.includes('CCTV')"
        class="text-lg font-semibold rounded-lg text-slate-200 p-1 w-full capitalize dark:text-white"
      >
        CCTV FOOTAGE
      </h1>
      <h1
        v-if="requester.refNumber.includes('BR')"
        class="text-lg font-semibold rounded-lg text-slate-200 p-1 w-full capitalize dark:text-white"
      >
        BADGE REQUEST
      </h1>

      <h2
        v-if="requester.refNumber.includes('PTW')"
        class="text-lg font-semibold rounded-lg text-slate-200 p-1 w-full capitalize dark:text-white"
      >
        PERMIT TOO WORK
      </h2>
      <h2
        v-if="requester.refNumber.includes('IR')"
        class="text-lg font-semibold rounded-lg text-slate-200 p-1 w-full capitalize dark:text-white"
      >
        INCIDENT REPORT
      </h2>
      <h2
        v-if="requester.refNumber.includes('TK')"
        class="text-lg font-semibold rounded-lg text-slate-200 p-1 w-full capitalize dark:text-white"
      >
        TESTKIT
      </h2>
      <h2
        v-if="requester.refNumber.includes('VET')"
        class="text-lg font-semibold rounded-lg text-slate-200 p-1 w-full capitalize dark:text-white"
      >
        VISITOR ESCORT TOUR
      </h2>
      <h2
        v-if="requester.refNumber.includes('MK')"
        class="text-lg font-semibold rounded-lg text-slate-200 p-1 w-full capitalize dark:text-white"
      >
        MASK
      </h2>
    </template>

    <!-- body -->
    <template v-slot:body>
      <!-- <p class="py-3 text-xs font-bold text-purple-900">
        Forgot your password?
      </p> -->

      <!-- Permit to works -->
      <div v-show="showPTWForm">
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Description"
              >Description</label
            >
            <input
              id="Description"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Location"
              >Location</label
            >
            <input
              id="Location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3 md:grid-cols-3">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Description"
              >Requester</label
            >
            <input
              id="Description"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Location"
              >Department</label
            >
            <input
              id="Location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Description"
              >Phone</label
            >
            <input
              id="Description"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Location"
              >Contractor / Vendor</label
            >
            <input
              id="Location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Location"
              >Company
            </label>
            <input
              id="Location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Description"
              >Phone
            </label>
            <input
              id="Description"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div>
          <label class="text-gray-700 dark:text-gray-200" for="Description"
            >Hazard Identidication
          </label>
          <input
            id="Description"
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label class="text-gray-700 dark:text-gray-200" for="Location"
            >Determined Control</label
          >
          <input
            id="Location"
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label class="text-gray-700 dark:text-gray-200" for="Location"
            >Attachment</label
          >
          <input
            id="Location"
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
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
      <div v-show="showIncidentReport">
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

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Location"
              >Location</label
            >
            <input
              id="Location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-2">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Description"
              >Name Of Parties Involved</label
            >
            <input
              id="Description"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Location"
              >Witness / Victim / Suspect</label
            >
            <input
              id="Location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3 md:grid-cols-1">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Description"
              >Attachment</label
            >
            <input
              id="Description"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>
      </div>
      <!-- teskit -->
      <div v-show="showTeskit">
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Description"
              >Requester Name</label
            >
            <input
              id="Description"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Location"
              >Department</label
            >
            <input
              id="Location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Description"
              >Phone Number</label
            >
            <input
              id="Description"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-2">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Location"
              >No Stock In Box</label
            >
            <input
              id="Location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Location"
              >No Stock In (kit)</label
            >
            <input
              id="Location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Location"
              >No Of Kit Out</label
            >
            <input
              id="Location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Location"
              >No Of Balance Kit</label
            >
            <input
              id="Location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>
      </div>

      <!-- Badge Request -->
      <div v-show="showBadgeRequest">
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Description"
              >Requester
            </label>
            <label
              id="Description"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.name }}</label
            >
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Location"
              >Department</label
            >
            <label
              id="Description"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.Department }}</label
            >
          </div>
        </div>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-2">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Description"
              >Phone Number</label
            >
            <label
              id="Description"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.PhoneNumber }}</label
            >
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Location"
              >For</label
            >
            <Label
              id="Location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ getRequest.For }}</Label
            >
          </div>
        </div>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3 md:grid-cols-1">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Description"
              >Upload File List Of Name</label
            >
            <input
              id="Location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>
      </div>
      <!-- CCTV Footages-->
      <div v-show="showCCTVForm">
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Description"
              >Requester Name</label
            >
            <input
              id="Description"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Location"
              >Department</label
            >
            <input
              id="Location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-2">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Description"
              >Phone Number</label
            >
            <input
              id="Description"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Location"
              >Incident Location</label
            >
            <input
              id="Location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Description"
              >Appointment Date</label
            >
            <input
              id="Description"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Description"
              >Incident DateTime</label
            >
            <input
              id="Description"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3 md:grid-cols-1">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Description"
              >Description Of Incident</label
            >
            <input
              id="Description"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>
      </div>
      <!--Visitor Escort Transport-->
      <div v-show="showVETForm">
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Description"
              >Requester Name:</label
            >
            <input
              id="Description"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Location"
              >Department</label
            >
            <input
              id="Location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-2">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Description"
              >Phone Number</label
            >
            <input
              id="Description"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Location"
              >Incident Location</label
            >
            <input
              id="Location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Description"
              >Appointment Date</label
            >
            <input
              id="Description"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Description"
              >Incident DateTime</label
            >
            <input
              id="Description"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3 md:grid-cols-1">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Description"
              >Description Of Incident</label
            >
            <input
              id="Description"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>
      </div>
      <!-- mask-->
      <div v-show="showMaskRequest">
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="requester.name"
              >Requester Name</label
            >
            <label
              id="requester.name"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >{{ requester.name }}</label
            >
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Location"
              >Department</label
            >
            <input
              id="Location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-2">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Description"
              >Phone Number</label
            >
            <input
              id="Description"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Location"
              >No Of Pieces</label
            >
            <input
              id="Location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="Description"
              >Description</label
            >
            <input
              id="Description"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
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
      <!-- Centralized Container -->
      <div class="flex justify-between gap-4 mt-4">
        <!-- Ticket Status Section -->
        <div class="w-full md:w-1/3">
          <div class="mb-4">
            <label class="mb-2 block text-sm font-semibold text-gray-700">
              Ticket Status
            </label>
            <div :class="getStatusContainerClass(requester.status)">
              <span :class="getStatusDotClass(requester.status)"></span>
              <h2 :class="getStatusTextClass(requester.status)">
                {{ requester.status }}
              </h2>
            </div>
          </div>
        </div>

        <!-- Admin Status Section -->
        <div class="w-full md:w-1/3">
          <div class="mb-4">
            <label class="mb-2 block text-sm font-semibold text-gray-700">
              Admin Status
            </label>
            <div class="grid grid-cols-1 gap-4 items-center">
              <label class="flex items-center text-sm text-gray-700">
                <input
                  type="radio"
                  name="adminStatus"
                  id="resubmission"
                  value="Resubmission"
                  class="mr-2"
                />
                Resubmission
              </label>
              <label class="flex items-center text-sm text-gray-700">
                <input
                  type="radio"
                  name="adminStatus"
                  id="accepted"
                  value="Accepted"
                  class="mr-2"
                />
                Accepted
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
              Last edited
            </label>
            <input
              type="text"
              name="preparedBy"
              id="preparedBy"
              class="w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-sm text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            />
          </div>
        </div>
      </div>
      <!-- Comments Section -->
      <div class="w-full">
        <label
          for="Description"
          class="mb-2 block text-sm font-semibold text-gray-700"
        >
          Comments
        </label>
        <textarea
          id="Description"
          class="w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          rows="2"
          required
        ></textarea>
      </div>

      <!-- Last Edited Section -->

      <!-- Update Button -->
      <div class="flex justify-end mt-6">
        <button
          type="button"
          class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-sky-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        >
          Update
        </button>
      </div>
    </template>
  </Modal>
</template>

<script>
import Modal from "../components/vmodaladmin.vue";
import axios from "axios";
export default {
  name: "TableformanagerequestView",
  components: {
    Modal,
  },
  data() {
    return {
      getRequest: [],
      isModalVisible: false,
      showBadgeRequest: false,
      showMaskRequest: false,
      showTeskit: false,
      showIncidentReport: false,
      showPTWForm: false,
      showCCTVForm: false,
      showVETForm: false,
    };
  },
  props: {
    requester: {
      type: Object,
      required: true,
    },
  },
  methods: {
    showModal(refNumber) {
      if (refNumber.includes("BR")) {
        axios
          .get(`http://localhost:3000/badgeRequests/10`)
          .then((response) => {
            this.getRequest = response.data;
            console.log("this is get request" + this.getRequest);
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        this.isModalVisible = true;
        this.showBadgeRequest = true;
      }
      if (refNumber.includes("VET")) {
        axios
          .get(`http://localhost:3000/badgeRequests`)
          .then((response) => {
            this.getRequest = response.data;
            console.log(this.getRequest);
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        this.isModalVisible = true;
        this.showVETForm = true;
      }
      if (refNumber.includes("CCTV")) {
        axios
          .get(
            `https://localhost:61659/api/Main/GetBadgeRequestByUser/${refNumber}`
          )
          .then((response) => {
            this.getRequest = response.data;
            console.log(this.getRequest);
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        this.isModalVisible = true;
        this.showCCTVForm = true;
      }
      if (refNumber.includes("PTW")) {
        axios
          .get(
            `https://localhost:61659/api/Main/GetBadgeRequestByUser/${refNumber}`
          )
          .then((response) => {
            this.getRequest = response.data;
            console.log(this.getRequest);
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        this.isModalVisible = true;
        this.showPTWForm = true;
      }
      if (refNumber.includes("IR")) {
        axios
          .get(
            `https://localhost:61659/api/Main/GetBadgeRequestByUser/${refNumber}`
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
      }
      if (refNumber.includes("TK")) {
        axios
          .get(
            `https://localhost:61659/api/Main/GetBadgeRequestByUser/${refNumber}`
          )
          .then((response) => {
            this.getRequest = response.data;
            console.log(this.getRequest);
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        this.isModalVisible = true;
        this.showTeskit = true;
      }
      if (refNumber.includes("MK")) {
        axios
          .get(
            `https://localhost:61659/api/Main/GetBadgeRequestByUser/${refNumber}`
          )
          .then((response) => {
            this.getRequest = response.data;
            console.log(this.getRequest);
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        this.isModalVisible = true;
        this.showMaskRequest = true;
      }
      // this.isModalVisible = true;
    },

    closeModal() {
      this.isModalVisible = false;
    },
    getStatusContainerClass(status) {
      const colorMap = {
        Approved:
          "inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800",
        Pending:
          "inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-yellow-100/60 dark:bg-gray-800",
        Rejected:
          "inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800",
      };
      return colorMap[status] || "bg-gray-800"; // Default to a dark color if the status is not recognized
    },
    getStatusDotClass(status) {
      const colorMap = {
        Approved: "h-1.5 w-1.5 rounded-full bg-emerald-500",
        Pending: "h-1.5 w-1.5 rounded-full bg-yellow-500",
        Rejected: "h-1.5 w-1.5 rounded-full bg-red-500",
      };
      return colorMap[status] || "h-1.5 w-1.5 rounded-full bg-gray-700"; // Default to a dark color if the status is not recognized
    },
    getStatusTextClass(status) {
      const colorMap = {
        Approved: "text-sm font-normal text-emerald-500",
        Pending: "text-sm font-normal text-yellow-500",
        Rejected: "text-sm font-normal text-red-500",
      };
      return colorMap[status] || "text-gray-500"; // Default to a dark color if the status is not recognized
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
