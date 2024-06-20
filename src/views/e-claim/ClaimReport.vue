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
              @click="showContent"
              class="w-36 h-12 p-1 font-semibold rounded-lg items-center text-sm dark:bg-gray-900 dark:border-gray-700 bg-green-700 border text-white"
            >
              <div class="flex justify-center">
                <span
                  class="mr-2 ml-2 text-slate-100 hover:text-blue-200"
                  @click="senttheclaim"
                  >Submit Claim</span
                >
              </div>
            </button>
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
                  Company's Name
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
              <!-- Display Date of Report -->
              <!-- <div class="lg:col-start-8 lg:col-end-9 col-start-1 col-end-2">
                <h5 class="text-sm font-semibold text-gray-600">
                  Date of Report
                </h5>
              </div>
              <div class="lg:col-start-9 col-start-2">
                <h5 class="text-sm font-semibold text-gray-600">:</h5>
              </div>
              <div class="lg:col-start-10 col-start-3">
                <h5 class="text-sm font-semibold text-gray-600">
                  {{ claim.reportDate }}
                </h5>
              </div> -->
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
                            <span>Type Of Claim</span>
                          </div>
                        </th>

                        <th
                          v-if="claims[0].reportType === 'Finance'"
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Destination</span>
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
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Amount</span>
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
        class="modal fixed top-0 left-0 w-full flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-[8rem] h-auto h-full bg-gray-800 bg-opacity-75 flex justify-center items-center"
        @click.self="closeClickModal"
      >
        <div
          class="modal-content bg-white rounded-lg p-8"
          style="max-height: calc(100vh - 20px); overflow-y: auto"
        >
          <!-- Modal header -->
          <div v-if="selectedClaimType === 'LocalTravelling'">
            <div class="flex justify-end">
              <button
                v-show="!isEditMode"
                @click="isClickModal = false"
                class="bg-[#2B87DB] hover:bg-[#2774bc] text-white font-bold py-2 px-4 rounded-full ml-2"
              >
                X
              </button>
            </div>
            <div class="flex-1 gap-4 justify-center items-center">
              <!-- Modal content -->
              <h1 class="text-3xl font-bold">Local Travelling Form</h1>
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
                  class="border rounded-md px-4 py-2"
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
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2"
                />
              </div>
              <div
                v-if="!isCompanyTransport"
                class="flex justify-between items-center mb-4"
              >
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Transport Specification:</label
                >
                <input
                  type="text"
                  id="transportSpecify"
                  v-model="localTravellingDetails.TransportSpec"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2"
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
                  class="border rounded-md px-4 py-2"
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
                  class="border rounded-md px-4 py-2"
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
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2"
                />
              </div>

              <div
                v-if="!isCompanyTransport"
                class="flex justify-between items-center mb-4"
              >
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Mileage(KM):</label
                >
                <input
                  type="text"
                  id="mileagekm"
                  v-model="localTravellingDetails.MileageKMLT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2"
                />
              </div>

              <div
                v-if="!isCompanyTransport"
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
                  class="border rounded-md px-4 py-2"
                />
              </div>

              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Toll:</label
                >
                <input
                  type="text"
                  id="phonenumber"
                  v-model="localTravellingDetails.TollLT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2"
                />
              </div>

              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Parking:</label
                >
                <input
                  type="text"
                  id="positioname"
                  v-model="localTravellingDetails.ParkingLT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Attachment(s). :</label
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

              <hr />
              <div class="flex justify-center items-center mb-4">
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
                class="bg-[#FA991C] hover:bg-[#fa9a1ce0] text-white font-bold py-2 px-4 rounded"
              >
                {{ isEditMode ? "Save" : "Edit" }}
                <!-- Change button text based on edit mode -->
              </button>

              <button
                @click="deleteForm()"
                class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
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

          <div
            v-if="selectedClaimType === 'OverseasTravellingwithAccommodation'"
          >
            <div class="flex justify-end">
              <button
                v-show="!isEditMode"
                @click="isClickModal = false"
                class="bg-[#2B87DB] hover:bg-[#2774bc] text-white font-bold py-2 px-4 rounded-full ml-2"
              >
                X
              </button>
            </div>
            <div class="flex-1 gap-4 justify-center items-center">
              <!-- Modal content -->
              <h1 class="text-3xl font-bold">Overseas Travelling Form</h1>
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
                  class="border rounded-md px-4 py-2"
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
                  class="border rounded-md px-4 py-2"
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
                  class="border rounded-md px-4 py-2"
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
                  class="border rounded-md px-4 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label
                  for="rmAccommodation"
                  class="text-gray-700 font-bold mr-2"
                  >RM:</label
                >
                <input
                  type="text"
                  id="rmAccommodation"
                  v-model="overseasTravellingDetails.RMforAccommodationOT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 overflow-x-auto"
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
                  class="border rounded-md px-4 py-2"
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
                  class="border rounded-md px-4 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="rmOthers" class="text-gray-700 font-bold mr-2"
                  >RM:</label
                >
                <input
                  type="text"
                  id="rmOthers"
                  v-model="overseasTravellingDetails.RMforOthersOT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2"
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
                  class="border rounded-md px-4 py-2"
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
                  class="border rounded-md px-4 py-2"
                />
              </div>

              <!-- Other Expenses table -->
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
                      <td
                        class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-wrap w-32"
                      >
                        {{ expense.name }}
                      </td>
                      <td
                        class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-wrap w-64"
                      >
                        {{ expense.description }}
                      </td>
                      <td
                        class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap w-24"
                      >
                        {{ expense.amount }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <hr />
              <div class="flex justify-center items-center mb-4">
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
                class="bg-[#FA991C] hover:bg-[#fa9a1ce0] text-white font-bold py-2 px-4 rounded"
              >
                {{ isEditMode ? "Save" : "Edit" }}
                <!-- Change button text based on edit mode -->
              </button>

              <!-- <button
                @click="isClickModal = false"
                class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
              >
                Cancel
              </button> -->
              <button
                @click="deleteForm"
                class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
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
                  class="bg-[#2B87DB] hover:bg-[#2774bc] text-white font-bold py-2 px-4 rounded-full ml-2"
                >
                  X
                </button>
              </div>
              <h1 class="text-3xl font-bold">
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
                  class="border rounded-md px-4 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeName" class="text-gray-700 font-bold mr-2"
                  >Reason for Medical:</label
                >
                <input
                  type="text"
                  id="nodeName"
                  v-model="medicalBillReimbursementDetails.ReasonML"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2"
                />
              </div>

              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Clinic Name:</label
                >
                <input
                  type="text"
                  id="ClinicNameML"
                  v-model="medicalBillReimbursementDetails.ClinicNameML"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2"
                />
              </div>

              <div v-if="!isPanelClinic" class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Specify Clinic Name:</label
                >
                <input
                  type="text"
                  id="OtherClinicSpecML"
                  v-model="medicalBillReimbursementDetails.OtherClinicSpecML"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2"
                />
              </div>

              <div v-if="!isPanelClinic" class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Reason not Going to Panel Clinic:</label
                >
                <input
                  type="text"
                  id="OtherClinicReasonML"
                  v-model="medicalBillReimbursementDetails.OtherClinicReasonML"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2"
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
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2"
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
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2"
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
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 overflow-x-auto"
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
                  class="border rounded-md px-4 py-2"
                />
              </div>
            </div>

            <hr />
            <div class="flex justify-center items-center mb-4">
              <label
                for="nodeParentId"
                class="text-gray-700 font-bold mr-2 text-2xl"
                >Total: RM {{ totalMedicalBillReimbursementDetails }}</label
              >
            </div>

            <div class="flex justify-end">
              <button
                @click="toggleEditMode"
                class="bg-[#FA991C] hover:bg-[#fa9a1ce0] text-white font-bold py-2 px-4 rounded"
              >
                {{ isEditMode ? "Save" : "Edit" }}
                <!-- Change button text based on edit mode -->
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
                  class="bg-[#2B87DB] hover:bg-[#2774bc] text-white font-bold py-2 px-4 rounded-full ml-2"
                >
                  X
                </button>
              </div>
              <h1 class="text-3xl font-bold">Entertainment Claim Form</h1>
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
                  class="border rounded-md px-4 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label
                  for="typeOfEntertainment"
                  class="text-gray-700 font-bold mr-2"
                  >Type of Entertainment:</label
                >
                <input
                  type="text"
                  id="typeOfEntertainment"
                  v-model="entertainmentDetails.TypeofEntertainmentE"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label
                  for="otherTypeOfEntertainment"
                  class="text-gray-700 font-bold mr-2"
                  >Other Type of Entertainment:</label
                >
                <input
                  type="text"
                  id="otherTypeOfEntertainment"
                  v-model="entertainmentDetails.OtherTypeofEntertainmentE"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="company" class="text-gray-700 font-bold mr-2"
                  >Company:</label
                >
                <input
                  type="text"
                  id="company"
                  v-model="entertainmentDetails.CompanyE"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="venue" class="text-gray-700 font-bold mr-2"
                  >Venue:</label
                >
                <input
                  type="text"
                  id="venue"
                  v-model="entertainmentDetails.VenueE"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="reference" class="text-gray-700 font-bold mr-2"
                  >Reference:</label
                >
                <input
                  type="text"
                  id="reference"
                  v-model="entertainmentDetails.ReferenceE"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2"
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
                  class="border rounded-md px-4 py-2"
                />
              </div>

              <hr />
              <div class="flex justify-center items-center mb-4">
                <label
                  for="nodeParentId"
                  class="text-gray-700 font-bold mr-2 text-2xl"
                  >Total: RM {{ entertainmentDetails.AmountRME }}</label
                >
              </div>

              <!-- Attendees table -->
              <div class="mb-4">
                <h2 class="text-xl font-bold">Attendees</h2>
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
                          <span>Staff ID</span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div class="flex items-center gap-x-3">
                          <span>Company's Name</span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div class="flex items-center gap-x-3">
                          <span>Status</span>
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
                        {{ attendee.staffId }}
                      </td>
                      <td
                        class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
                      >
                        {{ attendee.companyName }}
                      </td>
                      <td
                        class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
                      >
                        {{ attendee.status }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="flex justify-end">
              <button
                @click="toggleEditMode"
                class="bg-[#FA991C] hover:bg-[#fa9a1ce0] text-white font-bold py-2 px-4 rounded"
              >
                {{ isEditMode ? "Save" : "Edit" }}
                <!-- Change button text based on edit mode -->
              </button>
              <button
                @click="deleteForm()"
                class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
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
                  class="bg-[#2B87DB] hover:bg-[#2774bc] text-white font-bold py-2 px-4 rounded-full ml-2"
                >
                  X
                </button>
              </div>
              <h1 class="text-3xl font-bold">Staff Refreshment Claim Form</h1>
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
                  class="border rounded-md px-4 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeName" class="text-gray-700 font-bold mr-2"
                  >Name of Staff:</label
                >
                <input
                  type="text"
                  id="nodeName"
                  v-model="staffRefreshmentDetails.NameofStaffSR"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label
                  for="typeOfRefreshment"
                  class="text-gray-700 font-bold mr-2"
                  >Type of Refreshment:</label
                >
                <input
                  type="text"
                  id="typeOfRefreshment"
                  v-model="staffRefreshmentDetails.TypeofRefreshmentSR"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label
                  for="otherTypeOfRefreshment"
                  class="text-gray-700 font-bold mr-2"
                  >Other Type of Staff Refreshment:</label
                >
                <input
                  type="text"
                  id="otherTypeOfRefreshment"
                  v-model="
                    staffRefreshmentDetails.OtherTypeofStaffRefreshmentSR
                  "
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="company" class="text-gray-700 font-bold mr-2"
                  >Company:</label
                >
                <input
                  type="text"
                  id="company"
                  v-model="staffRefreshmentDetails.CompanySR"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="venue" class="text-gray-700 font-bold mr-2"
                  >Venue:</label
                >
                <input
                  type="text"
                  id="venue"
                  v-model="staffRefreshmentDetails.VenueSR"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="reference" class="text-gray-700 font-bold mr-2"
                  >Reference:</label
                >
                <input
                  type="text"
                  id="reference"
                  v-model="staffRefreshmentDetails.ReferenceSR"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="amount" class="text-gray-700 font-bold mr-2"
                  >Amount (RM):</label
                >
                <input
                  type="text"
                  id="amount"
                  v-model="staffRefreshmentDetails.AmountRMSR"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2"
                />
              </div>
            </div>

            <hr />
            <div class="flex justify-center items-center mb-4">
              <label
                for="nodeParentId"
                class="text-gray-700 font-bold mr-2 text-2xl"
                >Total: RM {{ totalStaffRefreshmentDetails }}</label
              >
            </div>

            <div class="flex justify-end">
              <button
                @click="toggleEditMode"
                class="bg-[#FA991C] hover:bg-[#fa9a1ce0] text-white font-bold py-2 px-4 rounded"
              >
                {{ isEditMode ? "Save" : "Edit" }}
                <!-- Change button text based on edit mode -->
              </button>
              <button
                @click="deleteForm()"
                class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
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
                  class="bg-[#2B87DB] hover:bg-[#2774bc] text-white font-bold py-2 px-4 rounded-full ml-2"
                >
                  X
                </button>
              </div>
              <h1 class="text-3xl font-bold">Handphone Bill Reimbursement Form</h1>
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
                    class="border rounded-md px-4 py-2"
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
                    class="border rounded-md px-4 py-2"
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
                    :disabled="!isEditMode"
                    class="border rounded-md px-4 py-2"
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
                    :disabled="!isEditMode"
                    class="border rounded-md px-4 py-2"
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
                    :disabled="!isEditMode"
                    class="border rounded-md px-4 py-2"
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
                    class="border rounded-md px-4 py-2"
                  />
                </div>
              </div>

              <hr />
              <div class="flex justify-center items-center mb-4">
                <label
                  for="nodeParentId"
                  class="text-gray-700 font-bold mr-2 text-2xl"
                  >Total: RM {{ totalHandphoneBillReimbursementDetails }}</label
                >
              </div>

              <div class="flex justify-end">
                <button
                  @click="toggleEditMode"
                  class="bg-[#FA991C] hover:bg-[#FA991C] text-white font-bold py-2 px-4 rounded"
                >
                  {{ isEditMode ? "Save" : "Edit" }}
                </button>
                <button
                  @click="deleteForm()"
                  class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
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
      totalplus: 0,
      index: null,
      formToDelete: null,
      claims: [],
      showtab: false,
      dataclaims: [],
      isClickModal: false,
      isEditMode: false,
      selectedClaimDetails: {},
      localTravellingDetails: {},
      overseasTravellingDetails: { otherExpenses: [] },
      medicalBillReimbursementDetails: {},
      entertainmentDetails: {},
      staffRefreshmentDetails: {},
      handphoneBillReimbursementDetails: {},
      cancel: true,
    };
  },

  computed: {
    totallocalTravellingDetails() {
      let total =
        (this.localTravellingDetails.TransportLT === "Company Transport"
          ? 0
          : parseFloat(this.localTravellingDetails.MileageRMLT) || 0) +
        (parseFloat(this.localTravellingDetails.ParkingLT) || 0) +
        (parseFloat(this.localTravellingDetails.TollLT) || 0);

      if (this.localTravellingDetails.tripwayLT === "Round Trip") {
        total *= 2;
      }
      this.totalplusmethod(total);
      return total;
    },

    isCompanyTransport() {
      return this.localTravellingDetails.TransportLT === "Company Transport";
    },

    isPanelClinic() {
      return this.medicalBillReimbursementDetails.ClinicNameML === "Mediviron Clinic - Panel";
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
        (parseFloat(this.overseasTravellingDetails.RMforAccommodationOT) || 0) +
        (parseFloat(this.overseasTravellingDetails.RMforOthersOT) || 0) +
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

    totalStaffRefreshmentDetails() {
      let total = parseFloat(this.staffRefreshmentDetails.AmountRMSR) || 0;
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
          return total + amount;
        }, 0)
        .toFixed(2);
    },
  },

  created() {
    this.fetchClaims();
    this.userDetails = store.getSession().userDetails;
  },

  mounted() {
    // Sidebar close or open
    let openOrNot = localStorage.getItem("openOrNot");
    const element = document.querySelector("main");
    if (element && openOrNot == "false") {
      element.classList.add("become-big");
    } else if (element && openOrNot == "true") {
      element.classList.remove("become-big");
    }
  },

  methods: {
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
        this.isEditMode = !this.isEditMode;
      } else {
        this.isEditMode = !this.isEditMode;
      }
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
        case "OverseasTravellingwithAccommodation":
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
          case "Overseas Travelling with Accommodation":
            prefix = "OV";
            break;
          case "Entertainment":
            prefix = "ENT";
            break;
          case "Staff Refreshment":
            prefix = "SR";
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
          case "Overseas Travelling with Accommodation":
            prefix = "OV";
            break;
          case "Entertainment":
            prefix = "ENT";
            break;
          case "Staff Refreshment":
            prefix = "SR";
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
    async senttheclaim() {
      const apiData = {
        name: this.claims[0].claimantName,
        company_name: this.claims[0].companyName,
        department: this.claims[0].department,
        designation_title: this.claims[0].designation,
        grand_total: this.grandTotal,
        reference_number: this.claims[0].uniqueCode,
        report_name: this.claims[0].reportName,
        requester_id: this.userDetails.userId,
      };

      try {
        // Send API request using axios
        const response = await axios.post(
          "http://172.28.28.91:97/api/User/InsertClaimDetails",
          apiData
        );
        // Handle success response
        console.log("API response", response.data);
        this.sendToAPI();
      } catch (error) {
        // Handle error response
        console.error("API error", error);
      }
    },
    async sendToAPI() {
      // Group claims by tabTitle
      this.$router.push({ name: "eclaimhomepages" });
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
                  const thisisforlocal1 = {
                    mileage_km: claim.MileageKMLT,
                    destination: claim.DestinationPurposeLT,
                    date_event: claim.dateLT, // Example date
                    park_fee: claim.ParkingLT,
                    toll_fee: claim.TollLT,
                    total_fee: 10,
                    approver_email: "verifier1@example.com", // Access Email property from claim object
                    verifier_email: "verifier1@example.com",
                    approver_id: "7A7641D6-DEDE-4803-8B7B-93063DE2F077",
                    verifier_id: "7A7641D6-DEDE-4803-8B7B-93063DE2F077",
                    requester_id: "7A7641D6-DEDE-4803-8B7B-93063DE2F077",

                    unique_code: this.generateUniqueCode(claim.tabTitle),
                    reference_number: "pktm222",
                  };
                  axiosInstance = axios.create({
                    baseURL:
                      "http://172.28.28.91:97/api/User/InsertLocalOutstation",
                  });
                  const response1 = await axiosInstance.post(
                    "/",
                    thisisforlocal1
                  );
                  console.log(`Data sent for ${title} 1:`, response1.data);
                }
                break;
              }
              case "overseas travelling with accommodation":
                for (const claim of claimsToSend) {
                  // Iterate over each claim
                  // Dummy data for a claim
                  const thisisforoversea = {
                    description: claim.DescriptionOT,
                    meal_allowance: claim.MealAllowanceOT,
                    date_event: claim.dateOT, // Example date
                    transport_fee: claim.AirportLimoTeksiOT,
                    other_expenses: claim.otherExpenses,
                    total_fee: 99,
                    accom_foreign_total: 100,
                    accom_foreign_currency:
                      claim.ForeignCurrencyAccommodationOT,
                    accom_exchange_rate: claim.ExchangeRateAccommodationOT,
                    other_foreign_currency: claim.ForeignCurrencyOthersOT,
                    other_exchange_rate: claim.ExchangeRateOthersOT,
                    other_foreign_total: 200,
                    reference_number: "pktm222",
                    unique_code: this.generateUniqueCode(claim.tabTitle),

                    approver_email: "approver@example.com",
                    verifier_email: "verifier@example.com",
                    approver_id: "7A7641D6-DEDE-4803-8B7B-93063DE2F077",
                    verifier_id: "7A7641D6-DEDE-4803-8B7B-93063DE2F077",
                    requester_id: "9d0da821-5de0-42e5-b268-b5e0bc40e8d1",
                    serial_number: this.generateUniqueCodeSN(claim.tabTitle),
                  };

                  axiosInstance = axios.create({
                    baseURL:
                      "http://172.28.28.91:97/api/User/InsertOverseasOutstation",
                  });
                  const response2 = await axiosInstance.post(
                    "/",
                    thisisforoversea
                  );
                  console.log(`Data sent for ${title} 2:`, response2.data);
                }
                break;
              case "Entertainment":
                for (const claim of claimsToSend) {
                  // Iterate over each claim
                  // Dummy data for a claim
                  const thisisforentertainment = {
                    date_event: claim.dateE, // Example date
                    // person_entertained: claim.PersonEntertainedE,
                    type_of_entertainment: claim.TypeofEntertainmentE,
                    other_type_of_entertainment:
                      claim.OtherTypeofEntertainmentE,
                    company: claim.CompanyE,
                    venue: claim.VenueE,
                    reference: claim.ReferenceE,
                    amount: claim.AmountRME,
                    reference_number: "pktm222",
                    unique_code: this.generateUniqueCode(claim.tabTitle),

                    approver_email: "approver@example.com",
                    verifier_email: "verifier@example.com",
                    approver_id: "7A7641D6-DEDE-4803-8B7B-93063DE2F077",
                    verifier_id: "7A7641D6-DEDE-4803-8B7B-93063DE2F077",
                    requester_id: "9d0da821-5de0-42e5-b268-b5e0bc40e8d1",
                    serial_number: this.generateUniqueCodeSN(claim.tabTitle),
                  };
                  axiosInstance = axios.create({
                    baseURL: "http://localhost:3000/claims/entertainment",
                  });
                  const response2 = await axiosInstance.post(
                    "/",
                    thisisforentertainment
                  );
                  console.log(`Data sent for ${title} 2:`, response2.data);
                }
                break;

              case "Staff Refreshment":
                for (const claim of claimsToSend) {
                  // Iterate over each claim
                  // Dummy data for a claim
                  const thisisforstaffrefreshment = {
                    date_event: claim.dateE, // Example date
                    person_entertained: claim.PersonEntertainedE,
                    type_of_entertainment: claim.TypeofEntertainmentE,
                    other_type_of_entertainment:
                      claim.OtherTypeofEntertainmentE,
                    company: claim.CompanyE,
                    venue: claim.VenueE,
                    reference: claim.ReferenceE,
                    amount: claim.AmountRME,
                    reference_number: "pktm222",
                    unique_code: this.generateUniqueCode(claim.tabTitle),

                    approver_email: "approver@example.com",
                    verifier_email: "verifier@example.com",
                    approver_id: "7A7641D6-DEDE-4803-8B7B-93063DE2F077",
                    verifier_id: "7A7641D6-DEDE-4803-8B7B-93063DE2F077",
                    requester_id: "9d0da821-5de0-42e5-b268-b5e0bc40e8d1",
                    serial_number: this.generateUniqueCodeSN(claim.tabTitle),
                  };
                  axiosInstance = axios.create({
                    baseURL: "http://localhost:3000/claims/entertainment",
                  });
                  const response2 = await axiosInstance.post(
                    "/",
                    thisisforstaffrefreshment
                  );
                  console.log(`Data sent for ${title} 2:`, response2.data);
                }
                break;
              case "Handphone Bill Reimbursement":
                for (const claim of claimsToSend) {
                  // Iterate over each claim
                  // Dummy data for a claim
                  const thisisforHandphoneBillReimbursement = {
                    date_event: claim.dateE, // Example date
                    person_entertained: claim.PersonEntertainedE,
                    type_of_entertainment: claim.TypeofEntertainmentE,
                    other_type_of_entertainment:
                      claim.OtherTypeofEntertainmentE,
                    company: claim.CompanyE,
                    venue: claim.VenueE,
                    reference: claim.ReferenceE,
                    amount: claim.AmountRME,
                    reference_number: "pktm222",
                    unique_code: this.generateUniqueCode(claim.tabTitle),

                    approver_email: "approver@example.com",
                    verifier_email: "verifier@example.com",
                    approver_id: "7A7641D6-DEDE-4803-8B7B-93063DE2F077",
                    verifier_id: "7A7641D6-DEDE-4803-8B7B-93063DE2F077",
                    requester_id: "9d0da821-5de0-42e5-b268-b5e0bc40e8d1",
                    serial_number: this.generateUniqueCodeSN(claim.tabTitle),
                  };
                  axiosInstance = axios.create({
                    baseURL: "http://localhost:3000/claims/entertainment",
                  });
                  const response2 = await axiosInstance.post(
                    "/",
                    thisisforHandphoneBillReimbursement
                  );
                  console.log(`Data sent for ${title} 2:`, response2.data);
                }
                break;
              case "Medical Bill Reimbursement":
                for (const claim of claimsToSend) {
                  // Iterate over each claim
                  // Dummy data for a claim
                  const thisisforMedicalBillReimbursement = {
                    date_event: claim.dateE, // Example date
                    person_entertained: claim.PersonEntertainedE,
                    type_of_entertainment: claim.TypeofEntertainmentE,
                    other_type_of_entertainment:
                      claim.OtherTypeofEntertainmentE,
                    company: claim.CompanyE,
                    venue: claim.VenueE,
                    reference: claim.ReferenceE,
                    amount: claim.AmountRME,
                    reference_number: "pktm222",
                    unique_code: this.generateUniqueCode(claim.tabTitle),

                    approver_email: "approver@example.com",
                    verifier_email: "verifier@example.com",
                    approver_id: "7A7641D6-DEDE-4803-8B7B-93063DE2F077",
                    verifier_id: "7A7641D6-DEDE-4803-8B7B-93063DE2F077",
                    requester_id: "9d0da821-5de0-42e5-b268-b5e0bc40e8d1",
                    serial_number: this.generateUniqueCodeSN(claim.tabTitle),
                  };
                  axiosInstance = axios.create({
                    baseURL: "http://localhost:3000/claims/entertainment",
                  });
                  const response2 = await axiosInstance.post(
                    "/",
                    thisisforMedicalBillReimbursement
                  );
                  console.log(`Data sent for ${title} 2:`, response2.data);
                }
                break;
              // Add cases for other tab titles here
              default:
                console.error(`No endpoint found for ${title}`);
                continue; // Skip to the next iteration
            }
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

    // Add mapping functions for other endpoints as needed

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
      console.log("Data Claims:", this.dataclaims);
    },
    handleFileAdded(file, field) {
      console.log("File added:", file);
      console.log("Updated field value:", field.value);
    },

    handleFileRemoved(file, field) {
      console.log("File removed:", file);
      console.log("Updated field value:", field.value);
    },
  },
};
</script>

<style></style>
