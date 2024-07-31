<template>
  <main
    class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto"
  >
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 relative dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <!-- <h1 class="text-base italic absolute top-4 right-4 text-gray-500">
          SN: {{ claims[0].uniqueCode }}
        </h1> -->
        <!-- Header Section -->
        <p
          class="absolute right-0 mr-2 top-1 pt-2 text-sm text-gray-500 italic"
        >
          SN: {{ claims[0].uniqueCode }}
        </p>
        <div
          class="relative overflow-hidden mt-2 grid cols-start-1 md:flex justify-between items-center"
        >
          <div class="flex items-center flex-wrap">
            <div class="flex items-center flex-shrink-0">
              <h3
                class="ml-4 text-3xl font-bold text-blue-900"
                v-for="(claim, index) in claims"
                :key="index"
                style="max-width: 400px"
              >
                {{ claim.reportName }}
              </h3>
            </div>
            <div class="flex items-center ml-4 mt-2 md:mt-0 flex-shrink-0">
              <span class="text-3xl font-bold text-blue-900">|</span>
              <span class="ml-4 text-2xl font-bold text-blue-900"
                >Grand Total : RM {{ grandTotal }}</span
              >
            </div>
          </div>
          <!-- Buttons Section -->
          <div
            class="md:mr-4 md:mt-0 mt-5 gap-2 flex flex-row-reverse flex-shrink-0"
          >
            <button
              @click="senttheclaim"
              class="w-36 h-12 p-1 font-semibold rounded-lg items-center text-sm dark:bg-gray-900 dark:border-gray-700 bg-green-700 border text-white"
            >
              <div class="flex justify-center">
                <span class="mr-2 ml-2 text-slate-100 hover:text-blue-200"
                  >Submit Claim</span
                >
              </div>
            </button>
            <button
              @click="sendToAPI"
              class="w-36 h-12 p-1 font-semibold rounded-lg items-center text-sm dark:bg-gray-900 dark:border-gray-700 bg-blue-700 border text-white"
></button>
       
          </div>
        </div>

        <!-- Summary Section -->
        <section class="mt-8 px-4 mx-auto">
          <div class="grid grid-cols-14 gap-4">
            <!-- Iterate over each claim -->
            <template v-for="(claim, index) in claims" :key="index">
              <!-- Display Claimant's Name -->
              <div class="col-start-1 col-end-2">
                <h5 class="text-sm font-semibold text-gray-600">
                  Claimaint's Name
                </h5>
              </div>
              <div class="col-start-2">
                <h5 class="text-sm font-semibold text-gray-600">:</h5>
              </div>
              <div class="col-start-3 lg:col-end-8 col-end-14">
                <h3 class="text-md font-semibold text-gray-600">
                  {{ claim.claimantName }}
                </h3>
              </div>
              <!-- Display Designation -->
              <div class="lg:col-start-8 lg:col-end-9 col-start-1 col-end-2">
                <h5 class="text-sm font-semibold text-gray-600">Designation</h5>
              </div>
              <div class="lg:col-start-9 col-start-2">
                <h5 class="text-sm font-semibold text-gray-600">:</h5>
              </div>
              <div class="lg:col-start-10 col-start-3">
                <h5 class="text-sm font-semibold text-gray-600">
                  {{ claim.designation }}
                </h5>
              </div>
              <!-- Display Company's Name -->
              <div class="col-start-1 col-end-2">
                <h5 class="text-sm font-semibold text-gray-600">Department</h5>
              </div>
              <div class="col-start-2">
                <h5 class="text-sm font-semibold text-gray-600">:</h5>
              </div>
              <div class="col-start-3 col-end-8 lg:col-end-14">
                <h3 class="text-sm font-semibold text-gray-600">
                  {{ claim.department }}
                </h3>
              </div>
              <!-- Display Company Name -->
              <div class="lg:col-start-8 lg:col-end-9 col-start-1 col-end-2">
                <h5 class="text-sm font-semibold text-gray-600">
                  Company Name
                </h5>
              </div>
              <div class="lg:col-start-9 col-start-2">
                <h5 class="text-sm font-semibold text-gray-600">:</h5>
              </div>
              <div class="lg:col-start-10 col-start-3">
                <h5 class="text-sm font-semibold text-gray-600">
                  {{ claim.companyName }}
                </h5>
              </div>
              <!-- Display Cost Center -->
              <div class="lg:col-start-8 lg:col-end-9 col-start-1 col-end-2">
                <h5 class="text-sm font-semibold text-gray-600">Cost Center</h5>
              </div>
              <div class="lg:col-start-9 col-start-2">
                <h5 class="text-sm font-semibold text-gray-600">:</h5>
              </div>
              <div class="lg:col-start-10 col-start-3">
                <h5 class="text-sm font-semibold text-gray-600">
                  {{ claim.costCenter }}
                </h5>
              </div>
            </template>
          </div>
        </section>

        <!-- Table Section -->
        <section class="container px-4 mx-auto">
          <div class="flex flex-col mt-6">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div
                class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"
              >
                <div
                  class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg"
                >
                  <table
                    ref="reportTable"
                    class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                  >
                    <!-- Table Header -->
                    <thead class="bg-slate-200 dark:bg-gray-800 text-gray-900">
                      <tr>
                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>No</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Type Of Claim</span>
                          </div>
                        </th>

                        <th
                          v-if="claims[0].reportType === 'Finance'"
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3 capitalize">
                            <span>location / purpose </span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Date</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Amount</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Action</span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <!-- Table Body -->
                    <tbody
                      class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
                    >
                      <tr v-for="(claim, index) in dataclaims" :key="index">
                        <!-- Display claim details in each cell -->
                        <td
                          class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
                        >
                          {{ index + 1 }}
                        </td>
                        <td
                          class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                        >
                          {{ claim.tabTitle }}
                        </td>
                        <td
                          v-if="claims[0].reportType === 'Finance'"
                          class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                        >
                          <span v-if="claim.LocationEnd">{{
                            claim.LocationEnd
                          }}</span>
                          <span v-if="claim.PurposeOT">{{
                            claim.PurposeOT
                          }}</span>
                          <span v-if="claim.VenueE">{{ claim.VenueE }}</span>
                          <span v-if="claim.VenueSR">{{ claim.VenueSR }}</span>
                        </td>
                        <td
                          class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                        >
                          <span v-if="claim.dateLT">{{ claim.dateLT }}</span>
                          <span v-if="claim.dateOT">{{ claim.dateOT }}</span>
                          <span v-if="claim.dateML">{{ claim.dateML }}</span>
                          <span v-if="claim.dateE">{{ claim.dateE }}</span>
                          <span v-if="claim.dateSR">{{ claim.dateSR }}</span>
                          <span v-if="claim.dateOthers">{{
                            claim.dateOthers
                          }}</span>
                        </td>
                        <td
                          class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                        >
                          <span v-if="claim.totalRM"
                            >RM {{ claim.totalRM }}</span
                          >
                          <span v-if="claim.AmountRME"
                            >RM {{ claim.AmountRME }}</span
                          >
                          <span v-if="claim.AmountRMSR"
                            >RM {{ claim.AmountRMSR }}</span
                          >
                        </td>
                        <td
                          class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap space-x-2"
                        >
                          <button
                            @click="showDetails(claim, index)"
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
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        <tab
          class="mt-10"
          @formSubmitted="addClaim"
          :type="claims[0].reportType"
          @file-added="handleFileAdded"
          @file-removed="handleFileRemoved"
        ></tab>
      </div>
      <div
        v-if="isClickModal"
        class="modal fixed top-0 left-0 w-full flex-1 bg-[#CED1DA] dark:bg-[#111827] p-4 h-auto bg-opacity-75 flex justify-center items-center"
        @click.self="closeClickModal"
      >
        <div
          class="modal-content bg-white rounded-lg p-8 w-full sm:w-3/4 lg:max-w-3xl"
          style="max-height: calc(100vh - 20px); overflow-y: auto"
        >
          <!-- Modal header -->
          <div v-if="selectedClaimType === 'LocalTravelling'">
            <div class="flex justify-end">
              <!-- <button
                v-show="!isEditMode"
                @click="isClickModal = false"
                class="bg-[#2B87DB] hover:bg-[#2774bc] text-white font-bold py-2 px-4 rounded-full ml-2"
              >
                X
              </button> -->
              <button
                v-show="!isEditMode"
                @click="isClickModal = false"
                type="button"
                class="mt-4 mr-4 text-gray-400 hover:text-gray-500 focus:outline-none"
              >
                <span class="sr-only">Close</span>
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="flex-1 gap-4 justify-center items-center">
              <!-- Modal content -->
              <h1 class="text-3xl font-bold text-blue-900">
                Local Travelling Form
              </h1>
              <hr class="mt-2 mb-4" />

              <div class="flex justify-between items-center mb-4">
                <label for="nodeId" class="text-gray-700 font-bold mr-2"
                  >Date:</label
                >
                <input
                  type="text"
                  id="nodeId"
                  v-model="localTravellingDetails.dateLT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeName" class="text-gray-700 font-bold mr-2"
                  >Travelling Mode By:</label
                >
                <input
                  type="text"
                  id="transport"
                  v-model="localTravellingDetails.TransportLT"
                  :disabled="!isEditMode || nonEditableFields"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div
                v-if="!isCompanyTransport && !isPublicTransport"
                class="flex justify-between items-center mb-4"
              >
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Transport Specification:</label
                >
                <input
                  type="text"
                  id="transportSpecify"
                  v-model="localTravellingDetails.TransportSpec"
                  :disabled="!isEditMode || nonEditableFields"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div
                v-if="!isCompanyTransport && !isPersonalTransport"
                class="flex justify-between items-center mb-4"
              >
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Transport Specification:</label
                >
                <input
                  type="text"
                  id="publicTransportSpecify"
                  v-model="localTravellingDetails.PublicTransportSpec"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Location Start:</label
                >
                <input
                  type="text"
                  id="locationstart"
                  v-model="localTravellingDetails.LocationStart"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Location End:</label
                >
                <input
                  type="text"
                  id="locationend"
                  v-model="localTravellingDetails.LocationEnd"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Trip:</label
                >
                <input
                  type="text"
                  id="triplt"
                  v-model="localTravellingDetails.tripwayLT"
                  :disabled="!isEditMode || nonEditableFields"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div
                v-if="!isOneWay"
                class="flex justify-between items-center mb-4"
              >
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Return Date:</label
                >
                <input
                  type="text"
                  id="returndate"
                  v-model="localTravellingDetails.ReturndateLT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div
                v-if="!isOneWay"
                class="flex justify-between items-center mb-4"
              >
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Accommodation:</label
                >
                <input
                  type="text"
                  id="accommodationlt"
                  v-model="localTravellingDetails.AccommodationLT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div
                v-if="!isOneWay"
                class="flex justify-between items-center mb-4"
              >
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Meal Allowance(RM):</label
                >
                <input
                  type="text"
                  id="mealallowancelt"
                  v-model="localTravellingDetails.MealAllowanceLT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div
                v-if="!isCompanyTransport && !isPublicTransport"
                class="flex justify-between items-center mb-4"
              >
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Mileage/Kilometer(KM):</label
                >
                <input
                  type="text"
                  id="mileagekm"
                  v-model="localTravellingDetails.MileageKMLT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>

              <div
                v-if="!isCompanyTransport && !isPublicTransport"
                class="flex justify-between items-center mb-4"
              >
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Total Mileage(RM):</label
                >
                <input
                  type="text"
                  id="mileagerm"
                  v-model="localTravellingDetails.MileageRMLT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>

              <div
                v-if="!isPublicTransport"
                class="flex justify-between items-center mb-4"
              >
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Toll:</label
                >
                <input
                  type="text"
                  id="phonenumber"
                  v-model="localTravellingDetails.TollLT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>

              <div
                v-if="!isPublicTransport"
                class="flex justify-between items-center mb-4"
              >
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Parking:</label
                >
                <input
                  type="text"
                  id="positioname"
                  v-model="localTravellingDetails.ParkingLT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div
                v-if="!isCompanyTransport && !isPersonalTransport"
                class="flex justify-between items-center mb-4"
              >
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Fare(RM):</label
                >
                <input
                  type="text"
                  id="farerm"
                  v-model="localTravellingDetails.FareRMLT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Additional Supporting Document(s). :</label
                >
                <div class="flex flex-wrap">
                  <div
                    v-for="(file, index) in localTravellingDetails.UploadLT"
                    :key="index"
                    class="m-2"
                  >
                    <div
                      class="border-2 border-gray-200 rounded-lg overflow-hidden w-24 h-24"
                    >
                      <img
                        :src="createObjectURL(file)"
                        :alt="file.name"
                        class="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Fare Attachment table -->
              <div class="mb-4">
                <h2 class="text-xl font-bold">Fare Attachment</h2>
                <table
                  class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                >
                  <thead class="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div class="flex items-center gap-x-3">
                          <span>Type of Fare</span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div class="flex items-center gap-x-3">
                          <span>Attachment(s)</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
                  >
                    <tr
                      v-for="([type, fileGroup], index) in fileGroups"
                      :key="index"
                    >
                      <td
                        class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-wrap w-32"
                      >
                        {{ type }}
                      </td>
                      <td
                        class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap w-24"
                      >
                        <div
                          v-for="(file, fileIndex) in fileGroup"
                          :key="fileIndex"
                          class="m-2"
                        >
                          <div
                            class="border-2 border-gray-200 rounded-lg overflow-hidden w-24 h-24"
                          >
                            <img
                              :src="createObjectURL(file)"
                              :alt="file.name"
                              class="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <hr />
              <div class="flex justify-end items-center mb-4 mt-4">
                <label
                  for="nodeParentId"
                  class="text-gray-700 font-bold mr-2 text-2xl"
                  >Total: RM {{ totallocalTravellingDetails }}</label
                >
              </div>

              <!-- Add/Edit node button -->
            </div>
            <div class="flex justify-end">
              <button
                @click="toggleEditMode"
                class="font-bold py-2 px-4 rounded bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800"
              >
                <!-- Edit Icon -->

                <svg
                  v-if="isEditMode"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <rect
                    x="7"
                    y="3"
                    width="10"
                    height="12"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 8v4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M5 3h14"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>

                <!-- Save Icon -->
                <svg
                  v-else
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
                @click="deleteForm()"
                class="bg-gray-300 hover:bg-red-500 text-gray-800 hover:text-white font-bold py-2 px-4 rounded ml-2"
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
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div v-if="selectedClaimType === 'OverseasTravelling'">
            <div class="flex justify-end">
              <button
                v-show="!isEditMode"
                @click="isClickModal = false"
                type="button"
                class="mt-4 mr-4 text-gray-400 hover:text-gray-500 focus:outline-none"
              >
                <span class="sr-only">Close</span>
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="flex-1 gap-4 justify-center items-center">
              <!-- Modal content -->
              <h1 class="text-3xl font-bold text-blue-900">
                Overseas Travelling Form
              </h1>
              <hr class="mt-2 mb-4" />

              <div class="flex justify-between items-center mb-4">
                <label for="nodeId" class="text-gray-700 font-bold mr-2"
                  >Date:</label
                >
                <input
                  type="text"
                  id="nodeId"
                  v-model="overseasTravellingDetails.dateOT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeName" class="text-gray-700 font-bold mr-2"
                  >Purpose:</label
                >
                <input
                  type="text"
                  id="nodeName"
                  v-model="overseasTravellingDetails.PurposeOT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>

              <div class="flex justify-between items-center mb-4">
                <label
                  for="foreignCurrency"
                  class="text-gray-700 font-bold mr-2"
                  >Foreign Currency:</label
                >
                <input
                  type="text"
                  id="foreignCurrency"
                  v-model="
                    overseasTravellingDetails.ForeignCurrencyAccommodationOT
                  "
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="exchangeRate" class="text-gray-700 font-bold mr-2"
                  >Exchange Rate:</label
                >
                <input
                  type="text"
                  id="exchangeRate"
                  v-model="
                    overseasTravellingDetails.ExchangeRateAccommodationOT
                  "
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label
                  for="rmAccommodation"
                  class="text-gray-700 font-bold mr-2"
                  >Amount:</label
                >
                <input
                  type="text"
                  id="rmAccommodation"
                  v-model="overseasTravellingDetails.AmountforAccommodationOT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2 overflow-x-auto"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label
                  for="foreignCurrencyOthers"
                  class="text-gray-700 font-bold mr-2"
                  >Foreign Currency:</label
                >
                <input
                  type="text"
                  id="foreignCurrencyOthers"
                  v-model="overseasTravellingDetails.ForeignCurrencyOthersOT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label
                  for="exchangeRateOthers"
                  class="text-gray-700 font-bold mr-2"
                  >Exchange Rate:</label
                >
                <input
                  type="text"
                  id="exchangeRateOthers"
                  v-model="overseasTravellingDetails.ExchangeRateOthersOT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="rmOthers" class="text-gray-700 font-bold mr-2"
                  >Amount:</label
                >
                <input
                  type="text"
                  id="rmOthers"
                  v-model="overseasTravellingDetails.AmountforOthersOT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="mealAllowance" class="text-gray-700 font-bold mr-2"
                  >Meal Allowance(RM):</label
                >
                <input
                  type="text"
                  id="mealAllowance"
                  v-model="overseasTravellingDetails.MealAllowanceOT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="airportLimo" class="text-gray-700 font-bold mr-2"
                  >Airport Limo / Teksi(RM):</label
                >
                <input
                  type="text"
                  id="airportLimo"
                  v-model="overseasTravellingDetails.AirportLimoTeksiOT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Additional Supporting Document(s). :</label
                >
                <div class="flex flex-wrap">
                  <div
                    v-for="(file, index) in overseasTravellingDetails.UploadOT"
                    :key="index"
                    class="m-2"
                  >
                    <div
                      class="border-2 border-gray-200 rounded-lg overflow-hidden w-24 h-24"
                    >
                      <img
                        :src="createObjectURL(file)"
                        :alt="file.name"
                        class="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Fare Attachment table -->
              <div class="mb-4">
                <h2 class="text-xl font-bold">Fare Attachment</h2>
                <table
                  class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                >
                  <thead class="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div class="flex items-center gap-x-3">
                          <span>Type of Fare</span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div class="flex items-center gap-x-3">
                          <span>Attachment(s)</span>
                        </div>
                      </th>
                      <!--   <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div class="flex items-center gap-x-3">
                          <span>Actions</span>
                        </div>
                      </th> -->
                    </tr>
                  </thead>
                  <tbody
                    class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
                  >
                    <tr
                      v-for="([type, fileGroup], index) in fileGroupsOT"
                      :key="index"
                    >
                      <td
                        class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-wrap w-32"
                      >
                        {{ type }}
                      </td>
                      <td
                        class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap w-24"
                      >
                        <div
                          v-for="(file, fileIndex) in fileGroup"
                          :key="fileIndex"
                          class="m-2"
                        >
                          <div
                            class="border-2 border-gray-200 rounded-lg overflow-hidden w-24 h-24"
                          >
                            <img
                              :src="createObjectURL(file)"
                              :alt="file.name"
                              class="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </td>
                      <!--    <td
                        class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap w-24"
                      >
                        <button
                          class="text-red-500 transition-colors duration-200 dark:hover:text-red-300 dark:text-gray-300 hover:text-red-300 focus:outline-none"
                          @click="deleteFileGroup(index, 'overseas')"
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
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </td> -->
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Other Expenses Table-->
              <div class="mb-4">
                <h2 class="text-xl font-bold">Other Expenses</h2>
                <table
                  class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                >
                  <thead class="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div class="flex items-center gap-x-3">
                          <span>No</span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div class="flex items-center gap-x-3">
                          <span>Expense</span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div class="flex items-center gap-x-3">
                          <span>Description</span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div class="flex items-center gap-x-3">
                          <span>Amount(RM)</span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div class="flex items-center gap-x-3">
                          <span>Attachment(s)</span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div class="flex items-center gap-x-3">
                          <span>Action</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
                  >
                    <tr
                      v-for="(
                        expense, index
                      ) in overseasTravellingDetails.otherExpenses"
                      :key="index"
                    >
                      <td
                        class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
                      >
                        {{ index + 1 }}
                      </td>
                      <!-- Name Field -->
                      <td
                        class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-wrap w-32"
                      >
                        <span v-if="!isEditMode">{{ expense.name }}</span>
                        <input
                          v-else
                          type="text"
                          v-model="expense.name"
                          class="form-input rounded-md shadow-sm mt-1 block w-full border border-gray-400 p-1"
                        />
                      </td>

                      <!-- Description Field -->
                      <td
                        class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-wrap w-64"
                      >
                        <span v-if="!isEditMode">{{
                          expense.description
                        }}</span>
                        <textarea
                          v-else
                          v-model="expense.description"
                          class="form-textarea mt-1 block w-full border border-gray-400 p-1"
                          rows="2"
                        ></textarea>
                      </td>

                      <!-- Amount Field -->
                      <td
                        class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap w-24"
                      >
                        <span v-if="!isEditMode">{{ expense.amount }}</span>
                        <input
                          v-else
                          type="number"
                          v-model="expense.amount"
                          class="form-input rounded-md shadow-sm mt-1 block w-full border border-gray-400 p-1"
                        />
                      </td>

                      <td
                        class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap w-24"
                      >
                        <div v-for="file in expense.files" :key="file.id">
                          <a
                            :href="file.url"
                            :download="file.name"
                            class="text-blue-500 hover:underline"
                            >{{ file.name }}</a
                          >
                        </div>
                      </td>
                      <td
                        class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
                      >
                        <button
                          class="text-red-500 transition-colors duration-200 dark:hover:text-red-300 dark:text-gray-300 hover:text-red-300 focus:outline-none"
                          @click="deleteExpense(index)"
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
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <hr />
              <div class="flex justify-end items-center mb-4 mt-4">
                <label
                  for="nodeParentId"
                  class="text-gray-700 font-bold mr-2 text-2xl"
                  >Total: RM {{ totalOverseasTravellingAmount }}</label
                >
              </div>

              <!-- Add/Edit node button -->
            </div>
            <div class="flex justify-end">
              <button
                @click="toggleEditMode"
                class="font-bold py-2 px-4 rounded bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800"
              >
                <!-- Edit Icon -->

                <svg
                  v-if="isEditMode"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <rect
                    x="7"
                    y="3"
                    width="10"
                    height="12"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 8v4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M5 3h14"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>

                <!-- Save Icon -->
                <svg
                  v-else
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
                @click="deleteForm()"
                class="bg-gray-300 hover:bg-red-500 text-gray-800 hover:text-white font-bold py-2 px-4 rounded ml-2"
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
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div v-if="selectedClaimType === 'MedicalBillReimbursement'">
            <div class="flex-1 gap-4 justify-center items-center">
              <!-- Modal content -->
              <div class="flex justify-end">
                <button
                  v-show="!isEditMode"
                  @click="isClickModal = false"
                  type="button"
                  class="mt-4 mr-4 text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <span class="sr-only">Close</span>
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <h1 class="text-3xl font-bold text-blue-900">
                Medical Bill Reimbursement Form
              </h1>
              <hr class="mt-2 mb-4" />

              <div class="flex justify-between items-center mb-4">
                <label for="nodeId" class="text-gray-700 font-bold mr-2"
                  >Date of Medical Bill:</label
                >
                <input
                  type="text"
                  id="nodeId"
                  v-model="medicalBillReimbursementDetails.dateML"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>

              <div class="flex justify-between items-center mb-4">
                <label for="nodeName" class="text-gray-700 font-bold mr-2"
                  >Medical Category:</label
                >
                <input
                  type="text"
                  id="nodeName"
                  v-model="medicalBillReimbursementDetails.MedicalCategoryML"
                  :disabled="!isEditMode || nonEditableFields"
                  class="border rounded-md px-16 py-2"
                />
              </div>

              <div
                v-if="!isOtherThanOutpatient"
                class="flex justify-between items-center mb-4"
              >
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Reason for Medical:</label
                >
                <input
                  type="text"
                  id="nodeParentId"
                  v-model="medicalBillReimbursementDetails.ReasonML"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>

              <div
                v-if="!isOtherThanOutpatient"
                class="flex justify-between items-center mb-4"
              >
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Clinic Selection:</label
                >
                <input
                  type="text"
                  id="ClinicSelectionML"
                  v-model="medicalBillReimbursementDetails.ClinicSelectionML"
                  :disabled="!isEditMode || nonEditableFields"
                  class="border rounded-md px-16 py-2"
                />
              </div>

              <div
                v-if="!isPanelClinic && !isOtherThanOutpatient"
                class="flex justify-between items-center mb-4"
              >
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Specify Clinic Name:</label
                >
                <input
                  type="text"
                  id="OtherClinicSpecML"
                  v-model="medicalBillReimbursementDetails.OtherClinicSpecML"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>

              <div
                v-if="!isPanelClinic && !isOtherThanOutpatient"
                class="flex justify-between items-center mb-4"
              >
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Reason not Going to Panel Clinic:</label
                >
                <input
                  type="text"
                  id="OtherClinicReasonML"
                  v-model="medicalBillReimbursementDetails.OtherClinicReasonML"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>

              <div class="flex justify-between items-center mb-4">
                <label for="bankName" class="text-gray-700 font-bold mr-2"
                  >Bank Name:</label
                >
                <input
                  type="text"
                  id="bankName"
                  v-model="medicalBillReimbursementDetails.BankNameML"
                  :disabled="!isEditMode || nonEditableFields"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="accBankNumber" class="text-gray-700 font-bold mr-2"
                  >Account Bank No:</label
                >
                <input
                  type="text"
                  id="accBankNumber"
                  v-model="medicalBillReimbursementDetails.AccBankNumberML"
                  :disabled="!isEditMode || nonEditableFields"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="accHolderName" class="text-gray-700 font-bold mr-2"
                  >Account Holder Name:</label
                >
                <input
                  type="text"
                  id="accHolderName"
                  v-model="medicalBillReimbursementDetails.AccHolderNameML"
                  :disabled="!isEditMode || nonEditableFields"
                  class="border rounded-md px-16 py-2 overflow-x-auto"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="limitAmount" class="text-gray-700 font-bold mr-2"
                  >Limited Amount (RM):</label
                >
                <input
                  type="text"
                  id="limitsAmount"
                  v-model="medicalBillReimbursementDetails.LimitedAmountML"
                  :disabled="!isEditMode || nonEditableFields"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="claimsAmount" class="text-gray-700 font-bold mr-2"
                  >Claims Amount (RM):</label
                >
                <input
                  type="text"
                  id="claimsAmount"
                  v-model="medicalBillReimbursementDetails.ClaimsAmountML"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Attachment(s). :</label
                >
                <div class="flex flex-wrap">
                  <div
                    v-for="(
                      file, index
                    ) in medicalBillReimbursementDetails.UploadML"
                    :key="index"
                    class="m-2"
                  >
                    <div
                      class="border-2 border-gray-200 rounded-lg overflow-hidden w-24 h-24"
                    >
                      <img
                        :src="createObjectURL(file)"
                        :alt="file.name"
                        class="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="claimsAmountExceedsLimit" class="text-red-500">
                {{ claimsAmountErrorMessage }}
              </div>
            </div>

            <hr />
            <div class="flex justify-end items-center mb-4 mt-4">
              <label
                for="nodeParentId"
                class="text-gray-700 font-bold mr-2 text-2xl"
                >Total: RM {{ totalMedicalBillReimbursementDetails }}</label
              >
            </div>

            <div class="flex justify-end">
              <button
                @click="toggleEditMode"
                :disabled="isSaveDisabled"
                class="font-bold py-2 px-4 rounded bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800"
              >
                <!-- Edit Icon -->

                <svg
                  v-if="isEditMode"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <rect
                    x="7"
                    y="3"
                    width="10"
                    height="12"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 8v4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M5 3h14"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>

                <!-- Save Icon -->
                <svg
                  v-else
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
                @click="deleteForm()"
                class="bg-gray-300 hover:bg-red-500 text-gray-800 hover:text-white font-bold py-2 px-4 rounded ml-2"
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
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>

              <!-- <button
                @click="isClickModal = false"
                class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
              >
                Cancel
              </button> -->
            </div>
          </div>

          <div v-if="selectedClaimType === 'Entertainment'">
            <div class="flex-1 gap-4 justify-center items-center">
              <!-- Modal content -->
              <div class="flex justify-end">
                <button
                  v-show="!isEditMode"
                  @click="isClickModal = false"
                  type="button"
                  class="mt-4 mr-4 text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <span class="sr-only">Close</span>
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <h1 class="text-3xl font-bold text-blue-900">
                Entertainment Claim Form
              </h1>
              <hr class="mt-2 mb-4" />

              <div class="flex justify-between items-center mb-4">
                <label for="nodeId" class="text-gray-700 font-bold mr-2"
                  >Date:</label
                >
                <input
                  type="text"
                  id="nodeId"
                  v-model="entertainmentDetails.dateE"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeName" class="text-gray-700 font-bold mr-2"
                  >Type of Entertainment:</label
                >
                <input
                  type="text"
                  id="nodeName"
                  v-model="entertainmentDetails.TypeofEntertainmentE"
                  :disabled="!isEditMode || nonEditableFields"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div
                v-if="!isOtherEntertainment"
                class="flex justify-between items-center mb-4"
              >
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Other Type of Entertainment:</label
                >
                <input
                  type="text"
                  id="nodeParentId"
                  v-model="entertainmentDetails.OtherTypeofEntertainmentE"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Company:</label
                >
                <input
                  type="text"
                  id="nodeParentId"
                  v-model="entertainmentDetails.CompanyE"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Venue:</label
                >
                <input
                  type="text"
                  id="nodeParentId"
                  v-model="entertainmentDetails.VenueE"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Reference:</label
                >
                <input
                  type="text"
                  id="nodeParentId"
                  v-model="entertainmentDetails.ReferenceE"
                  :disabled="!isEditMode || nonEditableFields"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="amount" class="text-gray-700 font-bold mr-2"
                  >Amount (RM):</label
                >
                <input
                  type="text"
                  id="amount"
                  v-model="entertainmentDetails.AmountRME"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Attachment(s). :</label
                >
                <div class="flex flex-wrap">
                  <div
                    v-for="(file, index) in entertainmentDetails.UploadE"
                    :key="index"
                    class="m-2"
                  >
                    <div
                      class="border-2 border-gray-200 rounded-lg overflow-hidden w-24 h-24"
                    >
                      <img
                        :src="createObjectURL(file)"
                        :alt="file.name"
                        class="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <hr />
              <div class="flex justify-end items-center mb-4 mt-4">
                <label
                  for="nodeParentId"
                  class="text-gray-700 font-bold mr-2 text-2xl"
                  >Total: RM {{ entertainmentDetails.AmountRME }}</label
                >
              </div>

              <!-- Attendees table -->
              <div class="mb-4">
                <h2 class="text-xl font-bold text-gray-700">Attendees</h2>
                <table
                  class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                >
                  <thead class="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div class="flex items-center gap-x-3">
                          <span>No</span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div class="flex items-center gap-x-3">
                          <span>Name</span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div class="flex items-center gap-x-3">
                          <span>Company Name</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
                  >
                    <tr
                      v-for="(
                        attendee, index
                      ) in entertainmentDetails.attendees"
                      :key="index"
                    >
                      <td
                        class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
                      >
                        {{ index + 1 }}
                      </td>
                      <td
                        class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
                      >
                        {{ attendee.name }}
                      </td>
                      <td
                        class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
                      >
                        {{ attendee.company_Name }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="flex justify-end">
              <button
                @click="toggleEditMode"
                class="font-bold py-2 px-4 rounded bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800"
              >
                <!-- Edit Icon -->

                <svg
                  v-if="isEditMode"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <rect
                    x="7"
                    y="3"
                    width="10"
                    height="12"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 8v4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M5 3h14"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>

                <!-- Save Icon -->
                <svg
                  v-else
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
                @click="deleteForm()"
                class="bg-gray-300 hover:bg-red-500 text-gray-800 hover:text-white font-bold py-2 px-4 rounded ml-2"
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
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>

              <!-- <button
                @click="isClickModal = false"
                class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
              >
                Cancel
              </button> -->
            </div>
          </div>

          <div v-if="selectedClaimType === 'StaffRefreshment'">
            <div class="flex-1 gap-4 justify-center items-center">
              <!-- Modal content -->
              <div class="flex justify-end">
                <button
                  v-show="!isEditMode"
                  @click="isClickModal = false"
                  type="button"
                  class="mt-4 mr-4 text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <span class="sr-only">Close</span>
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <h1 class="text-3xl font-bold text-blue-900">
                Staff Refreshment Claim Form
              </h1>
              <hr class="mt-2 mb-4" />

              <div class="flex justify-between items-center mb-4">
                <label for="nodeId" class="text-gray-700 font-bold mr-2"
                  >Date:</label
                >
                <input
                  type="text"
                  id="nodeId"
                  v-model="staffRefreshmentDetails.dateSR"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeName" class="text-gray-700 font-bold mr-2"
                  >Type of Refreshment:</label
                >
                <input
                  type="text"
                  id="nodeName"
                  v-model="staffRefreshmentDetails.TypeofRefreshmentSR"
                  :disabled="!isEditMode || nonEditableFields"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div
                v-if="!isOtherStaffRefreshment"
                class="flex justify-between items-center mb-4"
              >
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Other Type of Staff Refreshment:</label
                >
                <input
                  type="text"
                  id="nodeParentId"
                  v-model="
                    staffRefreshmentDetails.OtherTypeofStaffRefreshmentSR
                  "
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Company:</label
                >
                <input
                  type="text"
                  id="nodeParentId"
                  v-model="staffRefreshmentDetails.CompanySR"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Venue:</label
                >
                <input
                  type="text"
                  id="nodeParentId"
                  v-model="staffRefreshmentDetails.VenueSR"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Reference:</label
                >
                <input
                  type="text"
                  id="nodeParentId"
                  v-model="staffRefreshmentDetails.ReferenceSR"
                  :disabled="!isEditMode || nonEditableFields"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Amount (RM):</label
                >
                <input
                  type="text"
                  id="nodeParentId"
                  v-model="staffRefreshmentDetails.AmountRMSR"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Attachment(s). :</label
                >
                <div class="flex flex-wrap">
                  <div
                    v-for="(file, index) in staffRefreshmentDetails.UploadSR"
                    :key="index"
                    class="m-2"
                  >
                    <div
                      class="border-2 border-gray-200 rounded-lg overflow-hidden w-24 h-24"
                    >
                      <img
                        :src="createObjectURL(file)"
                        :alt="file.name"
                        class="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <hr />
              <div class="flex justify-end items-center mb-4 mt-4">
                <label
                  for="nodeParentId"
                  class="text-gray-700 font-bold mr-2 text-2xl"
                  >Total: RM {{ totalStaffRefreshmentDetails }}</label
                >
              </div>

              <!-- Staff Involved table -->
              <div class="mb-4">
                <h2 class="text-xl font-bold text-gray-700">Staff Involved</h2>
                <table
                  class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                >
                  <thead class="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div class="flex items-center gap-x-3">
                          <span>No</span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div class="flex items-center gap-x-3">
                          <span>Name</span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div class="flex items-center gap-x-3">
                          <span>Department</span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div class="flex items-center gap-x-3">
                          <span>Company Name</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
                  >
                    <tr
                      v-for="(
                        staff, index
                      ) in staffRefreshmentDetails.staffInvolved"
                      :key="index"
                    >
                      <td
                        class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
                      >
                        {{ index + 1 }}
                      </td>
                      <td
                        class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
                      >
                        {{ staff.name }}
                      </td>
                      <td
                        class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
                      >
                        {{ staff.department }}
                      </td>
                      <td
                        class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
                      >
                        {{ staff.companyName }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="flex justify-end">
              <button
                @click="toggleEditMode"
                class="font-bold py-2 px-4 rounded bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800"
              >
                <!-- Edit Icon -->

                <svg
                  v-if="isEditMode"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <rect
                    x="7"
                    y="3"
                    width="10"
                    height="12"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 8v4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M5 3h14"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>

                <!-- Save Icon -->
                <svg
                  v-else
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
                @click="deleteForm()"
                class="bg-gray-300 hover:bg-red-500 text-gray-800 hover:text-white font-bold py-2 px-4 rounded ml-2"
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
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
              <!-- <button
                @click="isClickModal = false"
                class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
              >
                Cancel
              </button> -->
            </div>
          </div>

          <div v-if="selectedClaimType === 'Others'">
            <div class="flex-1 gap-4 justify-center items-center">
              <!-- Modal content -->
              <div class="flex justify-end">
                <button
                  v-show="!isEditMode"
                  @click="isClickModal = false"
                  type="button"
                  class="mt-4 mr-4 text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <span class="sr-only">Close</span>
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <h1 class="text-3xl font-bold text-blue-900">Others Form</h1>
              <hr class="mt-2 mb-4" />

              <div class="flex justify-between items-center mb-4">
                <label for="nodeId" class="text-gray-700 font-bold mr-2"
                  >Date:</label
                >
                <input
                  type="text"
                  id="nodeId"
                  v-model="othersDetails.dateOthers"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="expensename" class="text-gray-700 font-bold mr-2"
                  >Expense Name:</label
                >
                <input
                  type="text"
                  id="expensename"
                  v-model="othersDetails.ExpenseNameOthers"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="amount" class="text-gray-700 font-bold mr-2"
                  >Amount (RM):</label
                >
                <input
                  type="text"
                  id="amount"
                  v-model="othersDetails.AmountRMOthers"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="desription" class="text-gray-700 font-bold mr-2"
                  >Description:</label
                >
                <textarea
                  id="DescriptionOthers"
                  v-model="othersDetails.DescriptionOthers"
                  :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2"
                  rows="4"
                ></textarea>
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Attachment(s). :</label
                >
                <div class="flex flex-wrap">
                  <div
                    v-for="(file, index) in othersDetails.UploadOthers"
                    :key="index"
                    class="m-2"
                  >
                    <div
                      class="border-2 border-gray-200 rounded-lg overflow-hidden w-24 h-24"
                    >
                      <img
                        :src="createObjectURL(file)"
                        :alt="file.name"
                        class="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr />
            <div class="flex justify-end items-center mb-4 mt-4">
              <label
                for="nodeParentId"
                class="text-gray-700 font-bold mr-2 text-2xl"
                >Total: RM {{ totalOthersDetails }}</label
              >
            </div>

            <div class="flex justify-end">
              <button
                @click="toggleEditMode"
                class="font-bold py-2 px-4 rounded bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800"
              >
                <!-- Edit Icon -->

                <svg
                  v-if="isEditMode"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <rect
                    x="7"
                    y="3"
                    width="10"
                    height="12"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 8v4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M5 3h14"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>

                <!-- Save Icon -->
                <svg
                  v-else
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
                @click="deleteForm()"
                class="bg-gray-300 hover:bg-red-500 text-gray-800 hover:text-white font-bold py-2 px-4 rounded ml-2"
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
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
              <!-- <button
                @click="isClickModal = false"
                class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
              >
                Cancel
              </button> -->
            </div>
          </div>

          <div v-if="selectedClaimType === 'HandphoneBillReimbursement'">
            <div class="flex-1 gap-4 justify-center items-center">
              <!-- Modal content -->
              <div class="flex justify-end">
                <button
                  v-show="!isEditMode"
                  @click="isClickModal = false"
                  type="button"
                  class="mt-4 mr-4 text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <span class="sr-only">Close</span>
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <h1 class="text-3xl font-bold text-blue-900">
                Handphone Bill Reimbursement Form
              </h1>
              <hr class="mt-2 mb-4" />

              <div class="flex flex-col">
                <div class="flex justify-between items-center mb-4">
                  <label for="nodeId" class="text-gray-700 font-bold mr-2"
                    >Month:</label
                  >
                  <input
                    type="text"
                    id="nodeId"
                    v-model="handphoneBillReimbursementDetails.MonthHR"
                    :disabled="!isEditMode"
                    class="border rounded-md px-16 py-2"
                  />
                </div>
                <div class="flex justify-between items-center mb-4">
                  <label for="nodeName" class="text-gray-700 font-bold mr-2"
                    >Year:</label
                  >
                  <input
                    type="text"
                    id="nodeName"
                    v-model="handphoneBillReimbursementDetails.YearHR"
                    :disabled="!isEditMode"
                    class="border rounded-md px-16 py-2"
                  />
                </div>
                <div class="flex justify-between items-center mb-4">
                  <label for="bankName" class="text-gray-700 font-bold mr-2"
                    >Bank Name:</label
                  >
                  <input
                    type="text"
                    id="bankName"
                    v-model="handphoneBillReimbursementDetails.BankNameHR"
                    :disabled="!isEditMode || nonEditableFields"
                    class="border rounded-md px-16 py-2"
                  />
                </div>
                <div class="flex justify-between items-center mb-4">
                  <label
                    for="accBankNumber"
                    class="text-gray-700 font-bold mr-2"
                    >Account Bank No:</label
                  >
                  <input
                    type="text"
                    id="accBankNumber"
                    v-model="handphoneBillReimbursementDetails.AccBankNumberHR"
                    :disabled="!isEditMode || nonEditableFields"
                    class="border rounded-md px-16 py-2"
                  />
                </div>
                <div class="flex justify-between items-center mb-4">
                  <label
                    for="accHolderName"
                    class="text-gray-700 font-bold mr-2"
                    >Account Holder Name:</label
                  >
                  <input
                    type="text"
                    id="accHolderName"
                    v-model="handphoneBillReimbursementDetails.AccHolderNameHR"
                    :disabled="!isEditMode || nonEditableFields"
                    class="border rounded-md px-16 py-2"
                  />
                </div>
                <div class="flex justify-between items-center mb-4">
                  <label
                    for="limitedAmount"
                    class="text-gray-700 font-bold mr-2"
                    >Limited Amount (RM):</label
                  >
                  <input
                    type="text"
                    id="limitedAmount"
                    v-model="handphoneBillReimbursementDetails.LimitedAmountHR"
                    :disabled="!isEditMode || nonEditableFields"
                    class="border rounded-md px-16 py-2"
                  />
                </div>
                <div class="flex justify-between items-center mb-4">
                  <label for="claimsAmount" class="text-gray-700 font-bold mr-2"
                    >Claims Amount (RM):</label
                  >
                  <input
                    type="text"
                    id="claimsAmount"
                    v-model="handphoneBillReimbursementDetails.ClaimsAmountHR"
                    :disabled="!isEditMode"
                    class="border rounded-md px-16 py-2"
                  />
                </div>
                <div class="flex justify-between items-center mb-4">
                  <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                    >Attachment(s). :</label
                  >
                  <div class="flex flex-wrap">
                    <div
                      v-for="(
                        file, index
                      ) in handphoneBillReimbursementDetails.UploadHR"
                      :key="index"
                      class="m-2"
                    >
                      <div
                        class="border-2 border-gray-200 rounded-lg overflow-hidden w-24 h-24"
                      >
                        <img
                          :src="createObjectURL(file)"
                          :alt="file.name"
                          class="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                v-if="claimsAmountExceedsLimitHR"
                class="text-red-500 text-sm mb-4"
              >
                {{ claimsAmountErrorMessageHR }}
              </div>

              <hr />
              <div class="flex justify-end items-center mb-4 mt-4">
                <label
                  for="nodeParentId"
                  class="text-gray-700 font-bold mr-2 text-2xl"
                  >Total: RM {{ totalHandphoneBillReimbursementDetails }}</label
                >
              </div>

              <div class="flex justify-end">
                <button
                  @click="toggleEditMode"
                  :disabled="isSaveDisabledHR"
                  class="font-bold py-2 px-4 rounded bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800"
                >
                  <!-- Edit Icon -->

                  <svg
                    v-if="isEditMode"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <rect
                      x="7"
                      y="3"
                      width="10"
                      height="12"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 8v4"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M5 3h14"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>

                  <!-- Save Icon -->
                  <svg
                    v-else
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
                  @click="deleteForm()"
                  class="bg-gray-300 hover:bg-red-500 text-gray-800 hover:text-white font-bold py-2 px-4 rounded ml-2"
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
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
                <!-- You can uncomment the cancel button if needed -->
                <!--
      <button
        @click="isClickModal = false"
        class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
      >
        Cancel
      </button>
      -->
              </div>
            </div>
          </div>
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
  </main>
</template>

<script>
import tab from "./user-ui/FormTab.vue";
import axios from "axios";
import { formStore } from "../store.js";
import { store } from "../store.js";

export default {
  name: "TEtstS",
  components: {
    tab,
  },
  data() {
    return {
      storefiles: [],
      serialnumber: "",
      employeeID: null,
      totalplus: 0,
      index: null,
      formToDelete: null,
      claims: [],
      showtab: false,
      dataclaims: [],
      isClickModal: false,
      isEditMode: false,
      nonEditableFields: false,
      selectedClaimDetails: {},
      localTravellingDetails: {
        UploadFareRMLT: [],
        UploadMileageRMLT: [],
        UploadParkingLT: [],
        UploadTollLT: [],
      },
      overseasTravellingDetails: {
        UploadAirportLimoTeksiOT: [],
        otherExpenses: [],
      },
      medicalBillReimbursementDetails: {},
      entertainmentDetails: {},
      staffRefreshmentDetails: {},
      othersDetails: {},
      handphoneBillReimbursementDetails: {},
      cancel: true,
      formData: {
        ...formStore.getFormData(),
        fileUpload: formStore.getFormData().fileUpload.slice(), // Ensure we work with a copy
      },
      loading: false,
      loadingText: "",
    };
  },

  computed: {
    fileGroups() {
      const groups = {
        Fare: this.localTravellingDetails.UploadFareRMLT,
        Mileage: this.localTravellingDetails.UploadMileageRMLT,
        Parking: this.localTravellingDetails.UploadParkingLT,
        "Toll/Touch n'Go": this.localTravellingDetails.UploadTollLT,
      };

      return Object.entries(groups).filter(([type, files]) => files.length > 0);
    },

    fileGroupsOT() {
      const groups = {
        "Airport Limo/Teksi":
          this.overseasTravellingDetails.UploadAirportLimoTeksiOT,
      };

      return Object.entries(groups).filter(([type, files]) => files.length > 0);
    },

    totallocalTravellingDetails() {
      let total = 0;

      if (this.localTravellingDetails.TransportLT === "Company Transport") {
        total += parseFloat(this.localTravellingDetails.ParkingLT) || 0;
        total += parseFloat(this.localTravellingDetails.TollLT) || 0;
      } else if (
        this.localTravellingDetails.TransportLT === "Personal Transport"
      ) {
        total += parseFloat(this.localTravellingDetails.MileageRMLT) || 0;
        total += parseFloat(this.localTravellingDetails.ParkingLT) || 0;
        total += parseFloat(this.localTravellingDetails.TollLT) || 0;
      } else if (
        this.localTravellingDetails.TransportLT === "Public Transport"
      ) {
        total += parseFloat(this.localTravellingDetails.FareRMLT) || 0;
      }
      this.totalplusmethod(total);
      return total;
    },

    isCompanyTransport() {
      return this.localTravellingDetails.TransportLT === "Company Transport";
    },

    isPublicTransport() {
      return this.localTravellingDetails.TransportLT === "Public Transport";
    },

    isPersonalTransport() {
      return this.localTravellingDetails.TransportLT === "Personal Transport";
    },

    isOneWay() {
      return this.localTravellingDetails.tripwayLT === "One Way";
    },

    isPanelClinic() {
      return (
        this.medicalBillReimbursementDetails.ClinicSelectionML ===
        "Mediviron Clinic - Panel"
      );
    },

    isOtherThanOutpatient() {
      return (
        this.medicalBillReimbursementDetails.MedicalCategoryML !== "Outpatient"
      );
    },

    isOtherEntertainment() {
      const validTypes = ["BREAKFAST", "LUNCH", "DINNER", "TEA BREAK"];
      return validTypes.includes(
        this.entertainmentDetails.TypeofEntertainmentE
      );
    },

    isOtherStaffRefreshment() {
      return this.staffRefreshmentDetails.TypeofRefreshmentSR !== "OTHERS";
    },

    totalOverseasTravellingAmount() {
      let otherExpensesTotal = 0;
      if (
        this.overseasTravellingDetails &&
        this.overseasTravellingDetails.otherExpenses
      ) {
        otherExpensesTotal =
          this.overseasTravellingDetails.otherExpenses.reduce(
            (total, expense) => total + (parseFloat(expense.amount) || 0),
            0
          );
      }

      let total =
        (parseFloat(this.overseasTravellingDetails.AmountforAccommodationOT) ||
          0) +
        (parseFloat(this.overseasTravellingDetails.AmountforOthersOT) || 0) +
        (parseFloat(this.overseasTravellingDetails.MealAllowanceOT) || 0) +
        (parseFloat(this.overseasTravellingDetails.AirportLimoTeksiOT) || 0) +
        otherExpensesTotal;

      this.totalplusmethod(total);
      return total;
    },

    totalMedicalBillReimbursementDetails() {
      let total =
        parseFloat(this.medicalBillReimbursementDetails.ClaimsAmountML) || 0;
      this.totalplusmethod(total);
      return total;
    },

    claimsAmountExceedsLimit() {
      const category = this.medicalBillReimbursementDetails.MedicalCategoryML;
      const amount =
        parseFloat(this.medicalBillReimbursementDetails.ClaimsAmountML) || 0;
      if (
        category === "Outpatient" &&
        amount > this.medicalBillReimbursementDetails.LimitedAmountML
      )
        return true;
      if (
        category === "Medical Check-Up" &&
        amount > this.medicalBillReimbursementDetails.LimitedAmountML
      )
        return true;
      if (
        category === "Dental" &&
        amount > this.medicalBillReimbursementDetails.LimitedAmountML
      )
        return true;
      return false;
    },

    claimsAmountErrorMessage() {
      const category = this.medicalBillReimbursementDetails.MedicalCategoryML;
      const limit = this.medicalBillReimbursementDetails.LimitedAmountML;

      if (category === "Outpatient")
        return `The maximum claim amount for Outpatient is RM ${limit}.`;
      if (category === "Medical Check-Up" || category === "Dental")
        return `The maximum claim amount for Medical Check-Up & Dental is RM ${limit}.`;

      return "";
    },

    isSaveDisabled() {
      return (
        parseFloat(this.medicalBillReimbursementDetails.ClaimsAmountML) >
        parseFloat(this.medicalBillReimbursementDetails.LimitedAmountML)
      );
    },

    claimsAmountExceedsLimitHR() {
      return (
        parseFloat(this.handphoneBillReimbursementDetails.ClaimsAmountHR) >
        parseFloat(this.handphoneBillReimbursementDetails.LimitedAmountHR)
      );
    },

    claimsAmountErrorMessageHR() {
      return `The claim amount exceeds the limit of RM ${this.handphoneBillReimbursementDetails.LimitedAmountHR}`;
    },

    isSaveDisabledHR() {
      return this.claimsAmountExceedsLimitHR;
    },

    totalStaffRefreshmentDetails() {
      let total = parseFloat(this.staffRefreshmentDetails.AmountRMSR) || 0;
      this.totalplusmethod(total);
      return total;
    },

    totalOthersDetails() {
      let total = parseFloat(this.othersDetails.AmountRMOthers) || 0;
      this.totalplusmethod(total);
      return total;
    },

    totalHandphoneBillReimbursementDetails() {
      let total =
        parseFloat(this.handphoneBillReimbursementDetails.ClaimsAmountHR) || 0;
      this.totalplusmethod(total);
      return total;
    },

    grandTotal() {
      return this.dataclaims
        .reduce((total, claim) => {
          let amount = 0;
          if (claim.AmountRME) amount += parseFloat(claim.AmountRME);
          if (claim.totalRM) amount += parseFloat(claim.totalRM);
          if (claim.AmountRMSR) amount += parseFloat(claim.AmountRMSR);
          return total + amount;
        }, 0)
        .toFixed(2);
    },
    referenceNumber() {
      console.log("Current uniqueCode:", this.claims.uniqueCode);
      return this.claims.uniqueCode;
    },
  },

  created() {
    this.fetchClaims();
    this.userDetails = store.getSession().userDetails;
  },

  mounted() {
    // Sidebar close or open
    const body = document.querySelector("body");
    body.style.overflow = "auto";

    this.fetchEmployeeID();

    let openOrNot = localStorage.getItem("openOrNot");
    const element = document.querySelector("main");
    if (element && openOrNot == "false") {
      element.classList.add("become-big");
    } else if (element && openOrNot == "true") {
      element.classList.remove("become-big");
    }
  },

  methods: {
    async fetchSerialNumber() {
      let result = null;
      try {
        const response = await axios.get(
          "http://172.28.28.91:86/api/User/GetRunningNumber"
        );
        if (response.status === 200) {
          console.log("Serial Number:", response.data);
          let serialNumber = this.claims[0].uniqueCode + response.data.result;
          result = serialNumber;
        } else {
          console.error("Failed to fetch serial number:", response.status);
          result = "Error: Failed to fetch serial number";
        }
      } catch (error) {
        console.error("Error fetching serial number:", error);
        result = "Error: " + error.message;
      }
      console.log("Result:", result);
      return result; // Return result outside the finally block
    },

    formatDate(dateString) {
      const date = new Date(dateString);
      return `${date.getDate()} ${date.toLocaleString("default", {
        month: "long",
      })} ${date.getFullYear()}`;
    },
    async fetchEmployeeID() {
      try {
        const response = await axios.get(
          "http://172.28.28.91:97/api/User/GetAllEmployees"
        );

        if (response.data.result && response.data.result.length > 0) {
          const selectedEmployee = response.data.result.find(
            (emp) => emp.username_id === store.getSession().userDetails.userId
          );
          console.log("Selected Employee:", selectedEmployee);
          if (selectedEmployee) {
            if ("emp_id" in selectedEmployee) {
              this.employeeID = selectedEmployee.emp_id;
              console.log("Employee ID:", this.employeeID);
            } else {
              console.error(
                "Employee found but employee_id is missing:",
                selectedEmployee
              );
            }
          } else {
            console.error(
              "Employee not found for email:",
              store.getSession().userDetails.email
            );
          }
        } else {
          console.error("No employees found in response");
        }
      } catch (error) {
        console.error("Failed to fetch employee ID:", error);
        // Handle error appropriately
      }
    },
    deleteExpense(index) {
      // Assuming `expenses` is the array holding your items
      this.overseasTravellingDetails.otherExpenses.splice(index, 1);
    },
    totalplusmethod(total) {
      this.totalplus = total;
      console.log("totalplus", this.totalplus);
    },
    createObjectURL(file) {
      return URL.createObjectURL(file);
    },
    toggleEditMode() {
      if (this.isEditMode) {
        this.savenode();
        this.nonEditableFields = false;
      } else {
        this.nonEditableFields = true;
      }
      this.isEditMode = !this.isEditMode;
    },
    closeClickModal() {
      this.isClickModal = false;
    },
    savenode() {
      // Log the entire dataclaims array
      this.dataclaims[this.index].totalRM = this.totalplus;
      this.isClickModal = false;
    },

    showDetails(claim, index) {
      this.index = index;
      console.log("Current index", this.index);
      // Update selectedClaimType based on the type of claim
      this.selectedClaimType = claim.tabTitle.replace(/\s+/g, ""); // Remove spaces from claim type
      this.formToDelete = index;
      // Update corresponding details object based on claim type
      switch (this.selectedClaimType) {
        case "LocalTravelling":
          this.localTravellingDetails = claim;
          console.log("Local Travelling Details:", this.localTravellingDetails);
          console.log("upload", this.localTravellingDetails.UploadLT);
          break;
        case "OverseasTravelling":
          this.overseasTravellingDetails = claim;
          console.log(
            "Overseas Travelling Details:",
            this.overseasTravellingDetails
          );
          break;
        case "Entertainment":
          this.entertainmentDetails = claim;
          console.log("Entertainment Details:", this.entertainmentDetails);
          break;
        case "StaffRefreshment":
          this.staffRefreshmentDetails = claim;
          console.log(
            "Staff Refreshment Details:",
            this.staffRefreshmentDetails
          );
          break;
        case "Others":
          this.othersDetails = claim;
          console.log("Others Details:", this.othersDetails);
          break;
        case "HandphoneBillReimbursement":
          this.handphoneBillReimbursementDetails = claim;
          console.log(
            "Handphone Bill Reimbursement Details:",
            this.handphoneBillReimbursementDetails
          );
          break;
        case "MedicalBillReimbursement":
          this.medicalBillReimbursementDetails = claim;
          console.log(
            "Medical Bill Reimbursement Details:",
            this.medicalBillReimbursementDetails
          );
          break;
        // Add cases for other types of claims
      }
      this.isClickModal = true; // Show the modal
    },
    generateUniqueCode(tabTitle) {
      // Check if this.userId is defined
      if (this.userDetails.userId) {
        // Use part of the userId for uniqueness, e.g., 4 characters
        const userIdFragment = this.userDetails.userId.substring(0, 4);

        // Generate a random number and pad it to 2 characters
        const randomNumber = Math.floor(Math.random() * 100)
          .toString()
          .padStart(2, "0");

        // Create a timestamp and take the last 2 digits for uniqueness
        const timestamp = Date.now().toString().slice(-2);

        // Determine the prefix based on the location
        let prefix = "";
        switch (tabTitle) {
          case "Local Travelling":
            prefix = "LT";
            break;
          case "Overseas Travelling":
            prefix = "OV";
            break;
          case "Entertainment":
            prefix = "ENT";
            break;
          case "Staff Refreshment":
            prefix = "SR";
            break;
          case "Others":
            prefix = "OTHERS";
            break;
          case "Handphone Bill Reimbursement":
            prefix = "HR";
            break;
          case "Medical Bill Reimbursement":
            prefix = "MLR";
            break;
          default:
            console.error("Invalid location provided:", tabTitle);
            prefix = "CODE";
            break;
        }

        // Construct the uniqueCode
        const uniqueCode = `${prefix}${userIdFragment}${randomNumber}${timestamp}`;
        console.log("Unique Code:", uniqueCode);
        return uniqueCode;
      } else {
        console.error("User ID is undefined.");
        // You may want to handle this case differently based on your application logic.
        return "";
      }
    },
    generateUniqueCodeSN(tabTitle) {
      // Check if this.userId is defined
      if (this.userDetails.userId) {
        // Use part of the userId for uniqueness, e.g., 4 characters
        const userIdFragment = this.userDetails.userId.substring(0, 4);

        // Generate a random number and pad it to 2 characters
        const randomNumber = Math.floor(Math.random() * 100)
          .toString()
          .padStart(2, "0");

        // Create a timestamp and take the last 2 digits for uniqueness
        const timestamp = Date.now().toString().slice(-2);

        // Determine the prefix based on the location
        let prefix = "";
        switch (tabTitle) {
          case "Local Travelling":
            prefix = "LT";
            break;
          case "Overseas Travelling":
            prefix = "OV";
            break;
          case "Entertainment":
            prefix = "ENT";
            break;
          case "Staff Refreshment":
            prefix = "SR";
            break;
          case "Others":
            prefix = "OTHERS";
            break;
          case "Handphone Bill Reimbursement":
            prefix = "HR";
            break;
          case "Medical Bill Reimbursement":
            prefix = "MLR";
            break;
          default:
            console.error("Invalid location provided:", tabTitle);
            return "";
        }

        // Construct the uniqueCode
        const uniqueCode = `SN${prefix}${userIdFragment}${randomNumber}${timestamp}`;
        console.log("Unique Code:", uniqueCode);
        return uniqueCode;
      } else {
        console.error("User ID is undefined.");
        // You may want to handle this case differently based on your application logic.
        return "";
      }
    },
    someMethod() {
      console.log(this.claims.uniqueCode);
      // Other logic
    },
    isValidClaimData() {
      // Example validation: check if the first claim has a claimantName
      return this.dataclaims.length > 0;
    },
    async senttheclaim() {
      if (!this.isValidClaimData()) {
        alert("Please add at least 1 claim before submitting");
        return;
      }
      this.loadingText = "Uploading";
      this.loading = true;

      const referenceNumber = await this.fetchSerialNumber();
      this.serialnumber = referenceNumber;
      this.sendFiles(this.userDetails.userId, referenceNumber);

      const apiData = {
        name: this.claims[0].claimantName,
        company_name: this.claims[0].companyName,
        department: this.claims[0].department,
        designation_title: this.claims[0].designation,
        employee_id: this.employeeID,
        requester_email: store.getSession().userDetails.email,
        reference_number: referenceNumber,
        report_name: this.claims[0].reportName,
        grand_total: String(parseFloat(this.grandTotal).toFixed(2)), // Ensure grand_total is a string
        requester_id: this.userDetails.userId,
        cost_center: this.claims[0].costCenter,
        unique_code: this.claims[0].uniqueCode,
      };

      // console.log("API data being sent:", apiData); // Log the API data
      // Object.keys(apiData).forEach((key) => {
      //   console.log(`${key}: ${apiData[key]} (type: ${typeof apiData[key]})`);
      // });

      try {
        const response = await axios.post(
          "http://172.28.28.91:97/api/User/InsertClaimDetails",
          apiData
        );
        // console.log("API response:", response.data);

        // Check if the response indicates success
        if (response.status === 200 || response.status === 201) {
          console.log("Data successfully inserted:", response.data);
          this.sendToAPI();
        } else {
          console.warn("Unexpected response status:", response.status);
        }

        // this.sendToAPI();
        // this.resetClaimsAfterSubmit();
      } catch (error) {
        console.error("API error", error);
        this.loading = false;
        // Extract the detailed server error message from the response
        let serverErrorMessage =
          error.response && error.response.data && error.response.data.message
            ? error.response.data.message
            : "";

        // Check if the server error message contains the specific UNIQUE KEY constraint violation message
        if (serverErrorMessage.includes("Violation of UNIQUE KEY constraint")) {
          console.error(
            "Duplicate entry detected for reference number. Not calling sendToAPI."
          );
        } else {
          console.error(
            "An error occurred that is not a duplicate entry issue. Review error details for appropriate action."
          );
        }
      }
      this.loading = false;
    },
    async sendToAPI() {
      // Group claims by tabTitle
      // this.$router.push({ name: "eclaimhomepages" });
      const groupedClaims = this.dataclaims.reduce((acc, claim) => {
        if (!acc[claim.tabTitle]) {
          acc[claim.tabTitle] = [];
        }
        acc[claim.tabTitle].push(claim);
        return acc;
      }, {});

      // Iterate over each group and send to respective API
      for (const title in groupedClaims) {
        if (Object.hasOwnProperty.call(groupedClaims, title)) {
          const claimsToSend = groupedClaims[title];
          console.log(`Claims to send for ${title}:`, claimsToSend); // Log the claimsToSend object

          try {
            let axiosInstance;
            switch (title.toLowerCase()) {
              case "local travelling": {
                for (const claim of claimsToSend) {
                  // Iterate over each claim
                  const uniqueCodeLT = this.generateUniqueCode(claim.tabTitle);
                  const userId = this.userDetails.userId;
                  console.log("unik kod:", uniqueCodeLT);

                  const transportSpec =
                    claim.TransportLT.toLowerCase() === "personal transport"
                      ? claim.TransportSpec
                      : claim.PublicTransportSpec;

                  const thisisforlocal1 = {
                    requester_id: this.userDetails.userId,
                    mileage_km: claim.MileageKMLT || 0,
                    starting_point: claim.LocationStart,
                    end_point: claim.LocationEnd,
                    date_event: claim.dateLT, // Example date
                    park_fee: claim.ParkingLT || 0,
                    toll_fee: claim.TollLT || 0,
                    total_fee: claim.totalRM,
                    unique_code: uniqueCodeLT,
                    reference_number: this.serialnumber,
                    transport_mode: claim.TransportLT,
                    trip_mode: claim.tripwayLT,
                    total_mileage: claim.MileageRMLT || 0,
                    transport_specification: transportSpec,
                    fare: claim.FareRMLT || 0,
                  };
                  axiosInstance = axios.create({
                    baseURL:
                      "http://172.28.28.91:97/api/User/InsertLocalOutstation",
                  });
                  if (claim.UploadLT && claim.UploadLT.length > 0) {
                    // Log the file data to verify it's correct before attempting to upload
                    console.log("Preparing to upload files:", claim.UploadLT);

                    // Assuming uploadFile has been adjusted to accept an array of files

                    this.uploadFiles(claim.UploadLT, userId, uniqueCodeLT);
                  }
                  if (
                    claim.UploadParkingLT &&
                    claim.UploadParkingLT.length > 0
                  ) {
                    console.log(
                      "Preparing to upload files:",
                      claim.UploadParkingLT
                    );
                    this.uploadFiles(
                      claim.UploadParkingLT,
                      userId,
                      uniqueCodeLT
                    );
                  }
                  if (claim.UploadTollLT && claim.UploadTollLT.length > 0) {
                    console.log(
                      "Preparing to upload files:",
                      claim.UploadTollLT
                    );
                    this.uploadFiles(claim.UploadTollLT, userId, uniqueCodeLT);
                  }
                  if (claim.UploadFareRMLT && claim.UploadFareRMLT.length > 0) {
                    console.log(
                      "Preparing to upload files:",
                      claim.UploadFareRMLT
                    );
                    this.uploadFiles(
                      claim.UploadFareRMLT,
                      userId,
                      uniqueCodeLT
                    );
                  }
                  if (
                    claim.UploadMileageRMLT &&
                    claim.UploadMileageRMLT.length > 0
                  ) {
                    console.log(
                      "Preparing to upload files:",
                      claim.UploadMileageRMLT
                    );
                    this.uploadFiles(
                      claim.UploadMileageRMLT,
                      userId,
                      uniqueCodeLT
                    );
                  }
                  const response = await axiosInstance.post(
                    "/",
                    thisisforlocal1
                  );
                  console.log(`Data sent for ${title} 1:`, response.data);
                }
                break;
              }
              case "overseas travelling with accommodation":
                for (const claim of claimsToSend) {
                  const uniqcodeOT = this.generateUniqueCode(claim.tabTitle);
                  const thisisforoversea = {
                    requester_id: this.userDetails.userId,
                    description: claim.PurposeOT,
                    meal_allowance: String(claim.MealAllowanceOT),
                    date_event: claim.dateOT,
                    transport_fee: claim.AirportLimoTeksiOT,
                    // other_expenses: claim.otherExpenses,
                    total_fee: claim.totalRM,
                    accom_foreign_total: claim.AmountforAccommodationOT,
                    accom_foreign_currency:
                      claim.ForeignCurrencyAccommodationOT,
                    accom_exchange_rate: claim.ExchangeRateAccommodationOT,
                    other_foreign_currency: claim.ForeignCurrencyOthersOT,
                    other_exchange_rate: claim.ExchangeRateOthersOT,
                    other_foreign_total: claim.AmountforOthersOT,
                    reference_number: this.serialnumber,
                    unique_code: uniqcodeOT,
                    transportation_mode: String(claim.AirportLimoTeksiOT),
                    oem: claim.otherExpenses
                      ? claim.otherExpenses.map((expense) => ({
                          name: expense.name,
                          amount: expense.amount,
                          description: expense.description,
                          files: expense.files || [],
                        }))
                      : [],
                  };

                  const userId = this.userDetails.userId;
                  console.log("unik kod:", this.uniqueCode);
                  if (claim.UploadOT && claim.UploadOT.length > 0) {
                    // Log the file data to verify it's correct before attempting to upload
                    console.log("Preparing to upload files:", claim.UploadOT);

                    // Assuming uploadFile has been adjusted to accept an array of files

                    this.uploadFiles(claim.UploadOT, userId, uniqcodeOT);
                  }
                  if (
                    claim.UploadAirportLimoTeksiOT &&
                    claim.UploadAirportLimoTeksiOT.length > 0
                  ) {
                    console.log(
                      "Preparing to upload files:",
                      claim.UploadAirportLimoTeksiOT
                    );
                    this.uploadFiles(
                      claim.UploadAirportLimoTeksiOT,
                      userId,
                      uniqcodeOT
                    );
                  }

                  if (claim.otherExpenses && claim.otherExpenses.length > 0) {
                    const filesToUpload = claim.otherExpenses.flatMap(
                      (expense) => expense.files || []
                    );
                    if (filesToUpload.length > 0) {
                      console.log("Preparing to upload files:", filesToUpload);
                      await this.uploadFiles(filesToUpload, userId, uniqcodeOT);
                    }
                  }

                  axiosInstance = axios.create({
                    baseURL:
                      "http://172.28.28.91:97/api/User/InsertOverseasOutstation",
                  });
                  const response = await axiosInstance.post(
                    "/",
                    thisisforoversea
                  );
                  console.log(`Data sent for ${title} 2:`, response.data);
                }
                break;
              case "entertainment":
                for (const claim of claimsToSend) {
                  const uniqcodeE = this.generateUniqueCode(claim.tabTitle);
                  const thisisforentertainment = {
                    requester_id: this.userDetails.userId,
                    date_event: claim.dateE,
                    entertainment_type: claim.TypeofEntertainmentE,
                    other_type_of_entertainment:
                      claim.OtherTypeofEntertainmentE,
                    company_name: claim.CompanyE,
                    venue_name: claim.VenueE,
                    description: claim.ReferenceE,
                    total_fee: parseFloat(claim.AmountRME),
                    reference_number: this.serialnumber,
                    unique_code: uniqcodeE, // Ensure this is in the correct format and not null/undefined
                    // Add the required 'ent' field with the appropriate value

                    participants: claim.attendees
                      ? claim.attendees.map((participant) => ({
                          name: participant.name,
                          company_name: participant.company_Name
                            ? participant.company_Name
                            : "",
                        }))
                      : [],
                  };

                  const userId = this.userDetails.userId;

                  if (claim.UploadE && claim.UploadE.length > 0) {
                    // Log the file data to verify it's correct before attempting to upload
                    console.log("Preparing to upload files:", claim.UploadE);

                    // Assuming uploadFile has been adjusted to accept an array of files

                    this.uploadFiles(claim.UploadE, userId, uniqcodeE);
                  }

                  // Create axios instance
                  axiosInstance = axios.create({
                    baseURL:
                      "http://172.28.28.91:86/api/User/InsertEntertainment",
                  });

                  // Send the request
                  try {
                    const response = await axiosInstance.post(
                      "/",
                      thisisforentertainment
                    );
                    console.log(`Data sent for ${title} 3:`, response.data);
                    this.fileupload(); // Assuming this function handles subsequent actions after successful submission
                  } catch (error) {
                    console.error(
                      "Error sending data for Entertainment:",
                      error.response.data
                    );
                    // Handle error appropriately, e.g., display error message to user
                  }
                }

                break;

              case "staff refreshment":
                for (const claim of claimsToSend) {
                  // Iterate over each claim
                  // Dummy data for a claim
                  const uniqcodeSR = this.generateUniqueCode(claim.tabTitle);
                  const thisisforstaffrefreshment = {
                    refreshment_type: claim.OtherTypeofStaffRefreshmentSR
                      ? claim.OtherTypeofStaffRefreshmentSR
                      : claim.TypeofRefreshmentSR,

                    date_event: claim.dateSR, // Example date
                    company_name: claim.CompanySR,
                    venue_name: claim.VenueSR,
                    reference_type: claim.ReferenceSR,
                    total_fee: claim.AmountRMSR,
                    reference_number: this.serialnumber,
                    unique_code: uniqcodeSR,
                    requester_id: this.userDetails.userId,
                    sim: claim.staffInvolved
                      ? claim.staffInvolved.map((participant) => ({
                          company_name: participant.companyName,
                          name: participant.name,
                          department: participant.department,
                        }))
                      : [],
                  };

                  const userId = this.userDetails.userId;
                  // console.log("unik kod:", uniqueCode);
                  if (claim.UploadSR && claim.UploadSR.length > 0) {
                    // Log the file data to verify it's correct before attempting to upload
                    console.log("Preparing to upload files:", claim.UploadSR);

                    // Assuming uploadFile has been adjusted to accept an array of files

                    this.uploadFiles(claim.UploadSR, userId, uniqcodeSR);
                  }
                  axiosInstance = axios.create({
                    baseURL:
                      "http://172.28.28.91:97/api/User/InsertStaffRefreshment",
                  });
                  const response2 = await axiosInstance.post(
                    "/",
                    thisisforstaffrefreshment
                  );
                  console.log(`Data sent for ${title} 2:`, response2.data);
                }
                break;
              case "others":
                for (const claim of claimsToSend) {
                  // Iterate over each claim
                  // Dummy data for a claim
                  const uniqcodeothers = this.generateUniqueCode(
                    claim.tabTitle
                  );
                  const thisisforHandphoneBillReimbursement = {
                    expense_date: claim.dateOthers, // Example date
                    amount: parseFloat(claim.AmountRMOthers).toFixed(2),
                    description: claim.DescriptionOthers,
                    unique_code: uniqcodeothers,
                    total_fee: parseFloat(claim.totalRM).toFixed(2),
                    reference_number: this.serialnumber,
                    requester_id: this.userDetails.userId,
                    expense_name: claim.ExpenseNameOthers,
                  };

                  const userId = this.userDetails.userId;
                  // console.log("unik kod:", uniqueCode);
                  if (claim.UploadOthers && claim.UploadOthers.length > 0) {
                    // Log the file data to verify it's correct before attempting to upload
                    console.log(
                      "Preparing to upload files:",
                      claim.UploadOthers
                    );

                    // Assuming uploadFile has been adjusted to accept an array of files

                    this.uploadFiles(
                      claim.UploadOthers,
                      userId,
                      uniqcodeothers
                    );
                  }
                  axiosInstance = axios.create({
                    baseURL: "http://172.28.28.91:97/api/User/InsertOthers",
                  });
                  const response2 = await axiosInstance.post(
                    "/",
                    thisisforHandphoneBillReimbursement
                  );
                  console.log(`Data sent for ${title} 2:`, response2.data);
                }
                break;
              case "handphone bill reimbursement":
                for (const claim of claimsToSend) {
                  // Iterate over each claim
                  // Dummy data for a claim
                  const uniqcodeHR = this.generateUniqueCode(claim.tabTitle);
                  const thisisforHandphoneBillReimbursement = {
                    date_claim: this.todayFormatted(), // Example date
                    claim_month: claim.MonthHR,
                    claim_year: `${claim.YearHR}`,
                    bank_name: claim.BankNameHR,
                    bank_account: String(claim.AccBankNumberHR),
                    bank_holder: claim.AccHolderNameHR,
                    limited_amount: claim.LimitedAmountHR,
                    claim_amount: claim.totalRM,
                    unique_code: uniqcodeHR,
                    reference_number: this.serialnumber,
                    handphone: "",
                    
                    requester_id: this.userDetails.userId,
                  };

                  const userId = this.userDetails.userId;
                  // console.log("unik kod:", uniqueCode);
                  if (claim.UploadHR && claim.UploadHR.length > 0) {
                    // Log the file data to verify it's correct before attempting to upload
                    console.log("Preparing to upload files:", claim.UploadLT);

                    // Assuming uploadFile has been adjusted to accept an array of files
                    this.uploadFiles(claim.UploadHR, userId, uniqcodeHR);
                  }
                  const axiosInstance = axios.create({
                    baseURL:
                      "http://172.28.28.91:86/api/User/InsertHandphoneReimburse",
                  });

                  try {
                    const response = await axiosInstance.post(
                      "/",
                      thisisforHandphoneBillReimbursement
                    );
                    console.log(
                      `Data successfully submitted for handphone bill reimbursement:`,
                      response.data
                    );

                    // Handle success here, e.g., update UI or notify user
                  } catch (error) {
                    if (error.response) {
                      // The request was made and the server responded with a status code
                      // that falls out of the range of 2xx
                      console.error(
                        "Error submitting handphone bill reimbursement:",
                        error.response.data
                      );
                    } else if (error.request) {
                      // The request was made but no response was received
                      console.error(
                        "Error submitting handphone bill reimbursement: No response received"
                      );
                    } else {
                      // Something happened in setting up the request that triggered an error
                      console.error(
                        "Error submitting handphone bill reimbursement:",
                        error.message
                      );
                    }
                    // Handle error here, e.g., show an error message to the user
                  }
                }
                break;
              case "medical bill reimbursement":
                for (const claim of claimsToSend) {
                  // Iterate over each claim
                  // Dummy data for a claim

                  const uniqcodeML = this.generateUniqueCode(claim.tabTitle);
                  const thisisforMedicalBillReimbursement = {
                    reference_number: this.serialnumber,
                    date_leave_taken: claim.dateML, // Example date
                    reason: claim.ReasonML,
                    bank_name: claim.BankNameML,
                    bank_holder: claim.AccHolderNameML,
                    bank_account: String(claim.AccBankNumberML),
                    claim_amount: String(claim.ClaimsAmountML),
                    clinic_name: claim.OtherClinicSpecML
                      ? claim.OtherClinicSpecML
                      : claim.ClinicSelectionML,
                    clinic_selection: claim.ClinicSelectionML,
                    reason_different: claim.OtherClinicReasonML,
                    medical_category: claim.MedicalCategoryML,
                    requester_id: this.userDetails.userId,
                   
  "limit_outpatient": "<double>",
  "limit_medic_dental": "<double>",
  "ic_number": "<string>",

                    unique_code: uniqcodeML,
                  };

                  const userId = this.userDetails.userId;
                  // console.log("unik kod:", uniqueCode);
                  if (claim.UploadML && claim.UploadML.length > 0) {
                    // Log the file data to verify it's correct before attempting to upload
                    console.log("Preparing to upload files:", claim.UploadML);

                    // Assuming uploadFile has been adjusted to accept an array of files

                    this.uploadFiles(claim.UploadML, userId, uniqcodeML);
                  }
                  axiosInstance = axios.create({
                    baseURL:
                      "http://172.28.28.91:86/api/User/InsertMedicalLeave",
                  });
                  await axiosInstance.post(
                    "/",
                    thisisforMedicalBillReimbursement
                  );
                  // console.log(`Data sent for ${title} 2:`, response2.data);
                  console.log("Data sent for Medical Bill Reimbursement");
                }
                break;
              // Add cases for other tab titles here
              default:
                console.error(`No endpoint found for ${title}`);
                continue; // Skip to the next iteration
            }
            this.$router.push({ name: "eclaimhomepages" });
          } catch (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.error(
                `Error sending data for ${title}:`,
                error.response.data
              );
            } else if (error.request) {
              // The request was made but no response was received
              console.error(
                `Error sending data for ${title}: No response received`
              );
            } else {
              // Something happened in setting up the request that triggered an error
              console.error(`Error sending data for ${title}:`, error.message);
            }
          }
        }
      }
    },
    todayFormatted() {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return new Date().toLocaleDateString("en-US", options);
    },

    async uploadFiles(files, userId, uniqueCode) {
      const uploadEndpoint = `http://172.28.28.91:93/api/Files/MultiUploadImage/${userId}/${uniqueCode}`;
      const formData = new FormData();

      // Iterate over the files array and append each file to formData
      files.forEach((file) => {
        formData.append("filecollection", file);
      });

      try {
        const response = await axios.post(uploadEndpoint, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Files uploaded successfully:", response.data);
      } catch (error) {
        console.error("Error uploading files:", error);
      }
    },

    async sendFiles(X, Y) {
      const files = this.formData.fileUpload; // Ensure formData is correctly accessible

      if (!files || !files.length) {
        console.error("No files to upload.");
        return;
      }

      await this.uploadFilesclaims(files, X, Y);
    },
    async uploadFilesclaims(files, userId, uniqueCode) {
      console.log("Files parameter received:", files);
      console.log("User ID:", userId);
      console.log("Unique Code:", uniqueCode);
      console.log("Files type:", typeof files);
      console.log("Is Array:", Array.isArray(files));

      if (!files || !Array.isArray(files)) {
        console.error("The files parameter is not an array or is undefined.");
        return;
      }

      const uploadEndpoint = `http://172.28.28.91:93/api/Files/MultiUploadImage/${userId}/${uniqueCode}`;
      const formData = new FormData();

      for (let i = 0; i < files.length; i++) {
        formData.append("filecollection", files[i]);
      }

      try {
        const response = await axios.post(uploadEndpoint, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Files uploaded successfully:", response.data);

        formStore.clearFormData();
      } catch (error) {
        console.error("Error uploading files:", error);
      }
    },

    deleteForm() {
      if (this.index !== -1) {
        this.dataclaims.splice(this.index, 1);
      }
      this.isClickModal = false; // Close the modal
    },
    // other methods...
    fetchClaims() {
      // Retrieve the current formData
      const formData = formStore.getFormData();

      if (formData.claimantName !== "") {
        // Set the claims array to contain only the new formData
        this.claims = [formData];

        // Update the local storage with the new claims array
        localStorage.setItem("claims", JSON.stringify(this.claims));
      } else {
        // If no formData, retrieve the claims array from local storage
        const storedClaims = JSON.parse(localStorage.getItem("claims")) || [];
        this.claims = storedClaims;
      }

      // Log the claims array to the console
      console.log("Claims:", this.claims);
    },

    addClaim(formData) {
      // Push new form data into the claims array
      this.dataclaims.push(formData);
      // console.log("Data Claims:", this.dataclaims);
    },
    handleFileAdded() {
      // console.log("File added:", file);
      // console.log("Updated field value:", field.value);
    },

    handleFileRemoved() {
      // console.log("File removed:", file);
      // console.log("Updated field value:", field.value);
    },
  },
};
</script>
