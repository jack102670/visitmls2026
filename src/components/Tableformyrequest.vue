<template>
  <tr>
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
                        : requester.refNumber.includes("VET")
                          ? "VISITOR/ESCORT/TOUR"
                          : requester.refNumber.includes("TK")
                            ? "TESTKITS"
                            : requester.refNumber.includes("Mask")
                              ? "MASK"
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
      {{ requester.refNumber }}
    </td>
    <td
      class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
    >
      {{ requester.dateRequested }}
    </td>

    <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
      <div :class="getStatusContainerClass(requester.adminStatus)">
        <span :class="getStatusDotClass(requester.adminStatus)"></span>
        <h2 :class="getStatusTextClass(requester.adminStatus)">
          {{ requester.adminStatus === "" ? "OPEN" : requester.adminStatus }}
        </h2>
      </div>
    </td>
    <td class="px-4 py-4 ml text-sm whitespace-nowrap">
      <div class="flex items-center gap-x-6">
        <button
          v-if="requester.refNumber.includes('BR')"
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
        <button
          v-if="requester.refNumber.includes('IR')"
          @click="showModal2(requester.refNumber)"
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
        <button
          v-if="requester.refNumber.includes('VET')"
          @click="showModal4(requester.refNumber)"
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
        <button
          v-if="requester.refNumber.includes('TK')"
          @click="showModal5(requester.refNumber)"
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
        <button
          v-if="requester.refNumber.includes('Mask')"
          @click="showModal6(requester.refNumber)"
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
        <button
          v-if="requester.refNumber.includes('CCTV')"
          @click="showModal3(requester.refNumber)"
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
          <label class="font-semibold text-gray-700 dark:text-gray-200" for=""
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
            for="department"
            >Department</label
          >
          <label
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >{{ getRequest.departmentName }}</label
          >
        </div>

        <!-- Add v-model to other inputs as needed -->
      </div>
      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
        <div>
          <label
            class="font-semibold text-gray-700 dark:text-gray-200"
            for="username"
            >Phone number</label
          >
          <label
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >{{ getRequest.phoneNumber }}</label
          >
        </div>

        <div>
          <label
            class="font-semibold text-gray-700 dark:text-gray-200"
            for="emailAddress"
            >Date Requested</label
          >
          <label
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >{{ getRequest.dateRequested }}</label
          >
        </div>

        <div>
          <label
            class="font-semibold text-gray-700 dark:text-gray-200"
            for="People"
            >People/For</label
          >
          <label
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
    </template>

    <!-- footer -->
    <template v-slot:header2>
      <div class="p-1 rounded-lg">
        <h2 class="text-lg font-semibold text-white capitalize">ADMIN</h2>
      </div>
    </template>
    <template v-slot:footer>
      <div class="flex justify-between">
        <!-- Ticket Status Section -->
        <div class="">
          <label
            for="Description"
            class="mb-2 block text-sm font-semibold text-gray-700"
          >
            ADMIN COMMENTS
          </label>
        </div>
        <div>
          <label
            for="preparedBy"
            class="mb-2 block text-sm font-semibold text-gray-700"
          >
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
        <label
          id="Location"
          class="block w-sm px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          >{{ getRequest.adminComment }}</label
        >
      </div></template
    >
  </Modalbadgerequest>
  <Modalincidentreport v-show="isModalVisible2" @close="closeModal">
    <!-- header -->
    <template v-slot:header>
      <h1 class="font-bold text-xl">INCIDENT REPORT</h1>
    </template>

    <!-- body -->
    <template v-slot:body>
      <!-- <p class="py-3 text-xs font-bold text-purple-900">
        Forgot your password?
      </p> -->
      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-2">
        <div>
          <label
            class="font-semibold text-gray-700 dark:text-gray-200"
            for="Dateofincident"
            >Date Of Incident</label
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
            for="Locationofincident"
            >Location Of Incident</label
          >
          <label
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >{{ getRequest.incidentLocation }}</label
          >
        </div>

        <!-- Add v-model to other inputs as needed -->

        <!-- <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3"> -->
        <div>
          <label
            class="font-semibold text-gray-700 dark:text-gray-200"
            for="PartiesInvolved"
            >Parties Involved</label
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
            for="Typeofincident"
            >Type Of Incident</label
          >
          <label
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >{{ getRequest.incidentType }}</label
          >
        </div>
      </div>
      <!-- Add v-model to other inputs as needed -->
      <!-- </div> -->
      <div
        class="grid-cols-1 gap-6 mt-4 sm:grid-cols-1 mx-auto cursor-pointer flex w-full"
      >
        <div class="w-full">
          <label
            for="Detailsincident"
            class="font-semibold text-gray-700 dark:text-gray-200"
            >Details Incident</label
          >
          <textarea
            disabled
            id="Detailsincident"
            class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            rows="5"
            required
            v-model="getRequest.incidentDetails"
          ></textarea>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
        <label
          class="font-semibold text-gray-700 dark:text-gray-200"
          for="People"
          >Attachment(s)</label
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
    </template>

    <!-- footer -->
    <template v-slot:footer>
      <div class="flex justify-between gap-4 mt-4">
        <!-- Ticket Status Section -->
        <label
          for="preparedBy"
          class="mb-2 block text-sm font-semibold text-gray-700"
        >
          LAST EDITED: {{ getRequest.modifiedDate }} BY ADMIN
          {{ getRequest.modifiedBy }}
        </label>
        <!-- Admin Status Section -->

        <div class="w-full md:w-1/3">
          <div class="mb-4"></div>
        </div>
      </div>
      <div class="w-full">
        <label
          for="Description"
          class="mb-2 block text-sm font-semibold text-gray-700"
        >
          ADMIN COMMENTS
        </label>
        <label
          id="Location"
          class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          >{{ getRequest.adminComment }}</label
        >
      </div></template
    >
  </Modalincidentreport>
  <Modalcctv v-show="isModalVisible3" @close="closeModal">
    <!-- header -->
    <template v-slot:header>
      <h1 class="font-bold text-xl">CCTV FOOTAGE VIEW REQUEST</h1>
    </template>

    <!-- body -->
    <template v-slot:body>
      <!-- <p class="py-3 text-xs font-bold text-purple-900">
        Forgot your password?
      </p> -->
      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <label
            class="font-semibold text-gray-700 dark:text-gray-200"
            for="Requestername"
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
            for="Department"
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
            for="Locationofincident"
            >Phone Number</label
          >
          <label
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >{{ getRequest.phoneNumber }}</label
          >
        </div>

        <!-- Add v-model to other inputs as needed -->
      </div>

      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div>
          <label
            class="font-semibold text-gray-700 dark:text-gray-200"
            for="Daterequested"
            >Date Requested</label
          >
          <label
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >{{ getRequest.dateRequested }}</label
          >
        </div>

        <div>
          <label
            class="font-semibold text-gray-700 dark:text-gray-200"
            for="Witness"
            >Incident location</label
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
            for="Appointmenttime"
            >Appointment Time</label
          >
          <label
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >{{ getRequest.apptDateTime }}</label
          >
        </div>
        <div>
          <label
            class="font-semibold text-gray-700 dark:text-gray-200"
            for="Incidentdate"
            >Incident Date Time</label
          >
          <label
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >{{ getRequest.incidentDateTime }}</label
          >
        </div>

        <!-- Add v-model to other inputs as needed -->
      </div>
      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2"></div>
      <div
        class="grid-cols-1 gap-6 mt-4 sm:grid-cols-1 mx-auto cursor-pointer flex w-full"
      >
        <div class="w-full">
          <label
            for="Detailsincident"
            class="font-semibold text-gray-700 dark:text-gray-200"
            >Description Of Incident</label
          >
          <textarea
            disabled
            v-model="getRequest.description"
            id="Detailsincident"
            class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            rows="5"
            required
          ></textarea>
        </div>
      </div>
    </template>

    <!-- footer -->
    <template v-slot:footer>
      <div class="flex justify-between gap-4 mt-4">
        <!-- Ticket Status Section -->
        <label
          for="preparedBy"
          class="mb-2 block text-sm font-semibold text-gray-700"
        >
          LAST EDITED: {{ getRequest.modifiedDate }} BY ADMIN
          {{ getRequest.modifiedBy }}
        </label>
      </div>
      <!-- Admin Status Section -->

      <div class="w-full md:w-1/3">
        <div class="mb-4"></div>
      </div>
      <div class="w-full">
        <label
          for="Description"
          class="mb-2 block text-sm font-semibold text-gray-700"
        >
          ADMIN COMMENTS
        </label>
        <label
          id="Location"
          class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          >{{ getRequest.adminComment }}</label
        >
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
          <label
            class="font-semibold text-gray-700 dark:text-gray-200"
            for="requesterName"
            >Requester Name</label
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
            for="emailAddress"
            >Date Requested</label
          >
          <label
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >{{ getRequest.dateRequested }}</label
          >
        </div>

        <!-- Add v-model to other inputs as needed -->
      </div>
      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
        <div>
          <label
            class="font-semibold text-gray-700 dark:text-gray-200"
            for="department"
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
            for="username"
            >Phone number</label
          >
          <label
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >{{ getRequest.phoneNumber }}</label
          >
        </div>

        <div>
          <label
            class="font-semibold text-gray-700 dark:text-gray-200"
            for="Noofpieces"
            >Customer Name</label
          >
          <label
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >{{ getRequest.customerName }}</label
          >
        </div>
        <div>
          <label
            class="font-semibold text-gray-700 dark:text-gray-200"
            for="Noofpieces"
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
            for="Noofpieces"
            >No Of Parking Space</label
          >
          <label
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >{{ getRequest.parkSpaceAmount }}</label
          >
        </div>
        <div>
          <label
            class="font-semibold text-gray-700 dark:text-gray-200"
            for="Noofpieces"
            >Transport</label
          >
          <label
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >{{ getRequest.customerTransport }}</label
          >
        </div>
        <div>
          <label
            class="font-semibold text-gray-700 dark:text-gray-200"
            for="Noofpieces"
            >Location</label
          >
          <label
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >{{ getRequest.meetingLocation }}</label
          >
        </div>

        <!-- Add v-model to other inputs as needed -->
      </div>
      <div
        class="grid-cols-1 gap-6 mt-4 sm:grid-cols-1 mx-auto cursor-pointer flex w-full"
      >
        <div class="w-full">
          <label
            for="Description"
            class="font-semibold text-gray-700 dark:text-gray-200"
            >Description</label
          >
          <textarea
            disabled
            v-model="getRequest.visitPurpose"
            id="Description"
            class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            rows="2"
          >
          </textarea>
        </div>
      </div>
    </template>

    <!-- footer -->
    <template v-slot:footer>
      <div class="flex justify-between gap-4 mt-4">
        <!-- Ticket Status Section -->
        <label
          for="preparedBy"
          class="mb-2 block text-sm font-semibold text-gray-700"
        >
          LAST EDITED: {{ getRequest.modifiedDate }} BY ADMIN
          {{ getRequest.modifiedBy }}
        </label>
        <!-- Admin Status Section -->

        <div class="w-full md:w-1/3">
          <div class="mb-4"></div>
        </div>
      </div>
      <div class="w-full">
        <label
          for="Description"
          class="mb-2 block text-sm font-semibold text-gray-700"
        >
          ADMIN COMMENTS
        </label>
        <label
          id="Location"
          class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          >{{ getRequest.adminComment }}</label
        >
      </div></template
    >
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
          <label
            class="font-semibold text-gray-700 dark:text-gray-200"
            for="requesterName"
            >Requester Name</label
          >
          <label
            type="text"
            class="block w-full px-4 py-2 mt-2 font-semibold text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >{{ getRequest.requesterName }}</label
          >
        </div>

        <div>
          <label
            class="font-semibold text-gray-700 dark:text-gray-200"
            for="department"
            >Department</label
          >
          <label
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >{{ getRequest.departmentName }}</label
          >
        </div>

        <!-- Add v-model to other inputs as needed -->
      </div>
      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
        <div>
          <label
            class="font-semibold text-gray-700 dark:text-gray-200"
            for="username"
            >Phone Number</label
          >
          <label
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >{{ getRequest.phoneNumber }}</label
          >
        </div>

        <div>
          <label
            class="font-semibold text-gray-700 dark:text-gray-200"
            for="emailAddress"
            >Date Requested</label
          >
          <label
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >{{ getRequest.dateRequested }}</label
          >
        </div>

        <!-- Add v-model to other inputs as needed -->
      </div>
      <div class="grid grid-cols-2 gap-6 mt-4 sm:grid-cols-2">
        <div>
          <label
            class="font-semibold text-gray-700 dark:text-gray-200"
            for="username"
            >NO. Stock In Box</label
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
            for="emailAddress"
            >No. Stock In (kit)</label
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
            for="emailAddress"
            >No. Of Kit Out</label
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
            for="emailAddress"
            >No. Of Balance Kit</label
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
            for="emailAddress"
            >Remark</label
          >
          <label
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >{{ getRequest.remark }}</label
          >
        </div>

        <!-- Add v-model to other inputs as needed -->
      </div>
    </template>

    <!-- footer -->
    <template v-slot:footer>
      <div class="flex justify-between gap-4 mt-4">
        <!-- Ticket Status Section -->
        <label
          for="preparedBy"
          class="mb-2 block text-sm font-semibold text-gray-700"
        >
          LAST EDITED: {{ getRequest.modifiedDate }} BY ADMIN
          {{ getRequest.modifiedBy }}
        </label>
        <!-- Admin Status Section -->

        <div class="w-full md:w-1/3">
          <div class="mb-4"></div>
        </div>
      </div>
      <div class="w-full">
        <label
          for="Description"
          class="mb-2 block text-sm font-semibold text-gray-700"
        >
          ADMIN COMMENTS
        </label>
        <label
          id="Location"
          class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          >{{ getRequest.adminComment }}</label
        >
      </div></template
    >
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
          <label
            class="font-semibold text-gray-700 dark:text-gray-200"
            for="requesterName"
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
            for="department"
            >Department</label
          >
          <label
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >{{ getRequest.departmentName }}</label
          >
        </div>

        <!-- Add v-model to other inputs as needed -->
      </div>
      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
        <div>
          <label
            class="font-semibold text-gray-700 dark:text-gray-200"
            for="username"
            >Phone number</label
          >
          <label
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >{{ getRequest.phoneNumber }}</label
          >
        </div>

        <div>
          <label
            class="font-semibold text-gray-700 dark:text-gray-200"
            for="emailAddress"
            >Date Requested</label
          >
          <label
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >{{ getRequest.dateRequested }}</label
          >
        </div>
        <div>
          <label
            class="font-semibold text-gray-700 dark:text-gray-200"
            for="Noofpieces"
            >No of pieces</label
          >
          <label
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >{{ getRequest.piecesAmount }}</label
          >
        </div>

        <!-- Add v-model to other inputs as needed -->
      </div>
      <div
        class="grid-cols-1 gap-6 mt-4 sm:grid-cols-1 mx-auto cursor-pointer flex w-full"
      >
        <div class="w-full">
          <label
            for="Description"
            class="font-semibold text-gray-700 dark:text-gray-200"
            >Description</label
          >
          <textarea
            disabled
            v-model="getRequest.description"
            id="Description"
            class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            rows="2"
            required
          ></textarea>
        </div>
      </div>
    </template>

    <!-- footer -->
    <template v-slot:footer>
      <div class="flex justify-between gap-4 mt-4">
        <!-- Ticket Status Section -->
        <label
          for="preparedBy"
          class="mb-2 block text-sm font-semibold text-gray-700"
        >
          LAST EDITED: {{ getRequest.modifiedDate }} BY ADMIN
          {{ getRequest.modifiedBy }}
        </label>
        <!-- Admin Status Section -->

        <div class="flex w-full md:w-1/3">
          <div class="mb-4"></div>
        </div>
      </div>
      <div class="w-full">
        <label
          for="Description"
          class="mb-2 block text-sm font-semibold text-gray-700"
        >
          ADMIN COMMENTS
        </label>
        <label
          id="Location"
          class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          >{{ getRequest.adminComment }}</label
        >
      </div></template
    >
  </Modalmask>
</template>

<script>
import Modalbadgerequest from "../components/vmodal.vue";
import Modalincidentreport from "../components/vmodal.vue";
import Modalcctv from "../components/vmodal.vue";
import Modalvisitorescordt from "../components/vmodal.vue";
import Modaltestkits from "../components/vmodal.vue";
import Modalmask from "../components/vmodal.vue";
import axios from "axios";

export default {
  name: "TableformyrequestView",
  components: {
    Modalbadgerequest,
    Modalincidentreport,
    Modalcctv,
    Modalvisitorescordt,
    Modaltestkits,
    Modalmask,
  },
  props: {
    requester: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      getRequest: [],
      isModalVisible: false,
      isModalVisible2: false,
      isModalVisible3: false,
      isModalVisible4: false,
      isModalVisible5: false,
      isModalVisible6: false,
    };
  },

  methods: {
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
    viewRequestDetails() {
      // You can implement the logic to show the details view here
      console.log("see", this.requester);
    },
  },
};
</script>
