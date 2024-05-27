<template>
  <main
    class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto"
  >
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <!-- Header Section -->
        <div
          class="relative overflow-hidden mt-2 grid cols-start-1 md:flex justify-between"
        >
          <h3
            class="ml-4 text-4xl font-bold text-blue-900"
            v-for="(claim, index) in claims"
            :key="index"
          >
            {{ claim.reportName }}
          </h3>
          <!-- Buttons Section -->
          <div class="md:mr-4 md:mt-0 mt-5 gap-2 flex flex-row-reverse">
            <button
              @click="showContent"
              class="w-36 h-12 p-1 font-semibold rounded-lg items-center text-sm dark:bg-gray-900 dark:border-gray-700 bg-green-700 border text-white"
            >
              <div class="flex justify-center">
                <span
                  class="mr-2 ml-2 text-slate-100 hover:text-blue-200"
                  @click="sendToAPI"
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
              <!-- Display Date of Report -->
              <div class="lg:col-start-8 lg:col-end-9 col-start-1 col-end-2">
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
                          class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                        >
                          {{ claim.Name }}
                        </td>

                        <td
                          class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap space-x-2"
                        >
                          <button
                            @click="showDetails(claim)"
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
                            @click="deleteClaim(index)"
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
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
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
          <!-- Your existing modal header content -->

          <div>
            <div class="flex-1 gap-4 justify-center items-center">
              <!-- Modal content -->
              <h1 class="text-3xl font-bold ">Local Travelling Form</h1>
              <hr class="mt-2 mb-4">

              <div class="flex  justify-between items-center mb-4">
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
                  >Destination / Purpose:</label
                >
                <input
                  type="text"
                  id="nodeName"
                  v-model="localTravellingDetails.DestinationPurposeLT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2"
                />
              </div>

              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Mileage(KM):</label
                >
                <input
                  type="text"
                  id="email"
                  v-model="localTravellingDetails.MileageKMLT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2"
                />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2"
                  >Total Mileage(RM):</label
                >
                <input
                  type="text"
                  id="email"
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
                  >Upload File(s):</label
                >
                <input
                  type="text"
                  id="positioncode"
                  v-model="localTravellingDetails.TollLT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2"
                />
              </div>
 <hr>
              <div class="flex justify-center items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2 text-2xl"
                  >Total:</label
                >
                <input
                  type="text"
                  id="positioncode"
                  v-model="localTravellingDetails.TollLT"
                  :disabled="!isEditMode"
                  class="border px-4 py-2"
                />
              </div>

              <!-- Add/Edit node button -->
            </div>
            <div class="flex justify-end">
              <button
                @click="toggleEditMode"
                class="bg-[#FA991C] hover:bg-[#FA991C] text-white font-bold py-2 px-4 rounded"
              >
                {{ isEditMode ? "Save" : "Edit" }}
                <!-- Change button text based on edit mode -->
              </button>

              <!-- Delete node button -->
              <button
                v-show="!isEditMode"
                @click="isClickModal = false"
                class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
              >
                Cancel
              </button>
            </div>
          </div>
          <div
            v-if="selectedClaimType === 'OverseasTravellingwithAccommodation'"
          >
            <div
              class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              <!-- Modal content -->

              <div class="mb-4">
                <label for="nodeId" class="block text-gray-700 font-bold mb-2"
                  >Date:</label
                >
                <input
                  type="text"
                  id="nodeId"
                  v-model="overseasTravellingDetails.dateOT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <div class="mb-4">
                <label for="nodeName" class="block text-gray-700 font-bold mb-2"
                  >Description:</label
                >
                <input
                  type="text"
                  id="nodeName"
                  v-model="overseasTravellingDetails.DescriptionOT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>

              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >Foreign Currency</label
                >
                <input
                  type="text"
                  id="email"
                  v-model="
                    overseasTravellingDetails.ForeignCurrencyAccommodationOT
                  "
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >Exchange Rate:</label
                >
                <input
                  type="text"
                  id="phonenumber"
                  v-model="
                    overseasTravellingDetails.ExchangeRateAccommodationOT
                  "
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >RM:</label
                >
                <input
                  type="text"
                  id="positioname"
                  v-model="overseasTravellingDetails.RMforAccommodationOT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full overflow-x-auto"
                />
              </div>
              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >Foreign Currency:</label
                >
                <input
                  type="text"
                  id="positioncode"
                  v-model="overseasTravellingDetails.ForeignCurrencyOthersOT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >Exchange Rate:</label
                >
                <input
                  type="text"
                  id="positioncode"
                  v-model="overseasTravellingDetails.ExchangeRateOthersOT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >RM:</label
                >
                <input
                  type="text"
                  id="positioncode"
                  v-model="overseasTravellingDetails.RMforOthersOT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >Meal Allowance(RM):</label
                >
                <input
                  type="text"
                  id="positioncode"
                  v-model="overseasTravellingDetails.MealAllowanceOT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >Airport Limo / Teksi(RM):</label
                >
                <input
                  type="text"
                  id="positioncode"
                  v-model="overseasTravellingDetails.AirportLimoTeksiOT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >RM:</label
                >
                <input
                  type="text"
                  id="positioncode"
                  v-model="overseasTravellingDetails.RMforMealTransportOT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>

              <!-- Add/Edit node button -->
            </div>
            <div class="flex justify-end">
              <button
                @click="toggleEditMode"
                class="bg-[#FA991C] hover:bg-[#FA991C] text-white font-bold py-2 px-4 rounded"
              >
                {{ isEditMode ? "Save" : "Edit" }}
                <!-- Change button text based on edit mode -->
              </button>

              <!-- Delete node button -->
              <button
                @click="isClickModal = false"
                class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
              >
                Cancel
              </button>
            </div>
          </div>
          <div v-if="selectedClaimType === 'MedicalLeaveReimbursement'">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              <!-- Modal content -->

              <div class="mb-4">
                <label for="nodeId" class="block text-gray-700 font-bold mb-2"
                  >Date:</label
                >
                <input
                  type="text"
                  id="nodeId"
                  v-model="medicalLeaveReimbursementDetails.dateML"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <div class="mb-4">
                <label for="nodeName" class="block text-gray-700 font-bold mb-2"
                  >Reason for Medical Leave:</label
                >
                <input
                  type="text"
                  id="nodeName"
                  v-model="medicalLeaveReimbursementDetails.ReasonML"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>

              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >Bank Name:</label
                >
                <input
                  type="text"
                  id="email"
                  v-model="medicalLeaveReimbursementDetails.BankNameML"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >Account Bank No:</label
                >
                <input
                  type="text"
                  id="phonenumber"
                  v-model="medicalLeaveReimbursementDetails.AccBankNumberML"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >Account Holder Name:</label
                >
                <input
                  type="text"
                  id="positioname"
                  v-model="medicalLeaveReimbursementDetails.AccHolderNameML"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full overflow-x-auto"
                />
              </div>
              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >Claims Amount(RM):</label
                >
                <input
                  type="text"
                  id="positioncode"
                  v-model="medicalLeaveReimbursementDetails.ClaimsAmountML"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>

              <!-- Add/Edit node button -->
            </div>
            <div class="flex justify-end">
              <button
                @click="toggleEditMode"
                class="bg-[#FA991C] hover:bg-[#FA991C] text-white font-bold py-2 px-4 rounded"
              >
                {{ isEditMode ? "Save" : "Edit" }}
                <!-- Change button text based on edit mode -->
              </button>

              <!-- Delete node button -->
              <button
                @click="isClickModal = false"
                class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
              >
                Cancel
              </button>
            </div>
          </div>
          <div v-if="selectedClaimType === 'Entertaiment'">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              <!-- Modal content -->

              <div class="mb-4">
                <label for="nodeId" class="block text-gray-700 font-bold mb-2"
                  >Date:</label
                >
                <input
                  type="text"
                  id="nodeId"
                  v-model="entertainmentDetails.dateE"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>
          <!--<div class="mb-4">
                <label for="nodeName" class="block text-gray-700 font-bold mb-2"
                  >Person Entertained:</label
                >
                <input
                  type="text"
                  id="nodeName"
                  v-model="entertainmentDetails.PersonEntertainedE"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div> -->

              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >Type of Entertainment:</label
                >
                <input
                  type="text"
                  id="email"
                  v-model="entertainmentDetails.TypeofEntertainmentE"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >Other Type of Entertainment:</label
                >
                <input
                  type="text"
                  id="phonenumber"
                  v-model="entertainmentDetails.OtherTypeofEntertainmentE"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >Company:</label
                >
                <input
                  type="text"
                  id="positioname"
                  v-model="entertainmentDetails.CompanyE"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full overflow-x-auto"
                />
              </div>
              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >Venue:</label
                >
                <input
                  type="text"
                  id="positioncode"
                  v-model="entertainmentDetails.VenueE"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >Reference:</label
                >
                <input
                  type="text"
                  id="positioncode"
                  v-model="entertainmentDetails.ReferenceE"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >Amount(RM):</label
                >
                <input
                  type="text"
                  id="positioncode"
                  v-model="entertainmentDetails.AmountRME"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>

              <!-- Add/Edit node button -->
            </div>
            <div class="flex justify-end">
              <button
                @click="toggleEditMode"
                class="bg-[#FA991C] hover:bg-[#FA991C] text-white font-bold py-2 px-4 rounded"
              >
                {{ isEditMode ? "Save" : "Edit" }}
                <!-- Change button text based on edit mode -->
              </button>

              <!-- Delete node button -->
              <button
                @click="isClickModal = false"
                class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
              >
                Cancel
              </button>
            </div>
          </div>
          <div v-if="selectedClaimType === 'StaffRefreshment'">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              <!-- Modal content -->

              <div class="mb-4">
                <label for="nodeId" class="block text-gray-700 font-bold mb-2"
                  >Date:</label
                >
                <input
                  type="text"
                  id="nodeId"
                  v-model="staffRefreshmentDetails.dateSR"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <div class="mb-4">
                <label for="nodeName" class="block text-gray-700 font-bold mb-2"
                  >Name of Staff:</label
                >
                <input
                  type="text"
                  id="nodeName"
                  v-model="staffRefreshmentDetails.NameofStaffSR"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>

              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >Type of Refreshment:</label
                >
                <input
                  type="text"
                  id="email"
                  v-model="staffRefreshmentDetails.TypeofRefreshmentSR"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >Other Type of Staff Refreshment:</label
                >
                <input
                  type="text"
                  id="phonenumber"
                  v-model="
                    staffRefreshmentDetails.OtherTypeofStaffRefreshmentSR
                  "
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >Company:</label
                >
                <input
                  type="text"
                  id="positioname"
                  v-model="staffRefreshmentDetails.CompanySR"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full overflow-x-auto"
                />
              </div>
              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >Venue:</label
                >
                <input
                  type="text"
                  id="positioncode"
                  v-model="staffRefreshmentDetails.VenueSR"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >Reference:</label
                >
                <input
                  type="text"
                  id="positioncode"
                  v-model="staffRefreshmentDetails.ReferenceSR"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >Amount(RM):</label
                >
                <input
                  type="text"
                  id="positioncode"
                  v-model="staffRefreshmentDetails.AmountRMSR"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>

              <!-- Add/Edit node button -->
            </div>
            <div class="flex justify-end">
              <button
                @click="toggleEditMode"
                class="bg-[#FA991C] hover:bg-[#FA991C] text-white font-bold py-2 px-4 rounded"
              >
                {{ isEditMode ? "Save" : "Edit" }}
                <!-- Change button text based on edit mode -->
              </button>

              <!-- Delete node button -->
              <button
                @click="isClickModal = false"
                class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
              >
                Cancel
              </button>
            </div>
          </div>
          <div v-if="selectedClaimType === 'HandphoneReimbursement'">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              <!-- Modal content -->

              <div class="mb-4">
                <label for="nodeId" class="block text-gray-700 font-bold mb-2"
                  >Month:</label
                >
                <input
                  type="text"
                  id="nodeId"
                  v-model="handphoneReimbursementDetails.MonthHR"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <div class="mb-4">
                <label for="nodeName" class="block text-gray-700 font-bold mb-2"
                  >Year:</label
                >
                <input
                  type="text"
                  id="nodeName"
                  v-model="handphoneReimbursementDetails.YearHR"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>

              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >Bank Name:</label
                >
                <input
                  type="text"
                  id="email"
                  v-model="handphoneReimbursementDetails.BankNameHR"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >Account Bank No:</label
                >
                <input
                  type="text"
                  id="phonenumber"
                  v-model="handphoneReimbursementDetails.AccBankNumberHR"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >Account Holder Name:</label
                >
                <input
                  type="text"
                  id="positioname"
                  v-model="handphoneReimbursementDetails.AccHolderNameHR"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full overflow-x-auto"
                />
              </div>
              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >Limited Amount(RM):</label
                >
                <input
                  type="text"
                  id="positioncode"
                  v-model="handphoneReimbursementDetails.LimitedAmountHR"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >Claims Amount(RM):</label
                >
                <input
                  type="text"
                  id="positioncode"
                  v-model="handphoneReimbursementDetails.ClaimsAmountHR"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>

              <!-- Add/Edit node button -->
            </div>
            <div class="flex justify-end">
              <button
                @click="toggleEditMode"
                class="bg-[#FA991C] hover:bg-[#FA991C] text-white font-bold py-2 px-4 rounded"
              >
                {{ isEditMode ? "Save" : "Edit" }}
                <!-- Change button text based on edit mode -->
              </button>

              <!-- Delete node button -->
              <button
                v-show="cancel"
                @click="isClickModal = false"
                class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
              >
                Cancel
              </button>
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
      claims: [],
      showtab: false,
      dataclaims: [],
      isClickModal: true,
      isEditMode: false,
      selectedClaimDetails: {},
      localTravellingDetails: {}, // Object to store details for Local Travelling
      overseasTravellingDetails: {},
      cancel: true,
    };
  },
  created() {
    this.fetchClaims();
    this.userDetails = store.getSession().userDetails;
  },
  methods: {
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
      this.isClickModal = false;
    },
    showDetails(claim) {
      // Update selectedClaimType based on the type of claim
      this.selectedClaimType = claim.tabTitle.replace(/\s+/g, ""); // Remove spaces from claim type

      // Update corresponding details object based on claim type
      switch (this.selectedClaimType) {
        case "LocalTravelling":
          this.localTravellingDetails = claim;
          console.log("Local Travelling Details:", this.localTravellingDetails);
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
        case "HandphoneReimbursement":
          this.handphoneReimbursementDetails = claim;
          console.log(
            "Handphone Reimbursement Details:",
            this.handphoneReimbursementDetails
          );
          break;
        case "MedicalLeaveReimbursement":
          this.medicalLeaveReimbursementDetails = claim;
          console.log(
            "Medical Leave Reimbursement Details:",
            this.medicalLeaveReimbursementDetails
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
          case "Handphone Reimbursement":
            prefix = "HR";
            break;
          case "Medical Leave Reimbursement":
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
          case "Handphone Reimbursement":
            prefix = "HR";
            break;
          case "Medical Leave Reimbursement":
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
    async sendToAPI() {
      // Group claims by tabTitle
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
              case "Handphone Reimbursement":
                for (const claim of claimsToSend) {
                  // Iterate over each claim
                  // Dummy data for a claim
                  const thisisforHandphoneReimbursement = {
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
                    thisisforHandphoneReimbursement
                  );
                  console.log(`Data sent for ${title} 2:`, response2.data);
                }
                break;
              case "Medical Leave Reimbursement":
                for (const claim of claimsToSend) {
                  // Iterate over each claim
                  // Dummy data for a claim
                  const thisisforMedicalLeaveReimbursement = {
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
                    thisisforMedicalLeaveReimbursement
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

    deleteClaim(index) {
      this.dataclaims.splice(index, 1);
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
  },
};
</script>
