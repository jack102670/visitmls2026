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
            class="ml-4 text-3xl font-bold text-blue-900"
            v-for="(claim, index) in claims"
            :key="index"
          >
            {{ claim.reportName }}
          </h3>
          <!-- Buttons Section -->
          <div class="mt-1 mr-4 gap-2 flex flex-row-reverse">
            <button
              @click="showContent"
              class="w-30 p-1 rounded-lg items-center border-4 text-sm dark:bg-gray-900 dark:border-gray-700 bg-green-700 border text-white"
            >
              <div class="flex justify-center">
                <span
                  class="mr-2 ml-2 text-slate-100 hover:text-blue-200"
                  @click="sendToAPI"
                  >Submit Claim</span
                >
              </div>
            </button>
            <button
              @click="showContent"
              class="w-30 p-1 rounded-lg items-center border-4 text-sm dark:bg-gray-900 dark:border-gray-700 bg-green-700 border text-white"
            >
              <div class="flex justify-center">
                <span
                  class="mr-2 ml-2 text-slate-100 hover:text-blue-200"
                  @click="showtab = !showtab"
                  >Add Expenses</span
                >
              </div>
            </button>
          </div>
        </div>

        <!-- Summary Section -->
        <section class="mt-5 px-4 mx-auto">
          <div class="grid grid-cols-14 gap-4">
            <!-- Iterate over each claim -->
            <template v-for="(claim, index) in claims" :key="index">
              <!-- Display Claimant's Name -->
              <div class="col-start-1 col-end-8">
                <h3 class="text-md font-semibold text-gray-600">
                  {{ claim.claimantName }}
                </h3>
              </div>
              <!-- Display Designation -->
              <div class="col-start-8 col-end-9">
                <h5 class="text-sm font-semibold text-gray-600">Designation</h5>
              </div>
              <div class="col-start-9">
                <h5 class="text-sm font-semibold text-gray-600">:</h5>
              </div>
              <div class="col-end-12 col-span-2">
                <h5 class="text-sm font-semibold text-gray-600">
                  {{ claim.designation }}
                </h5>
              </div>
              <!-- Display Company's Name -->
              <div class="col-start-1 col-end-4">
                <h3 class="text-sm font-semibold text-gray-600">
                  Department {{ claim.department }}
                </h3>
              </div>
              <!-- Display Cost Center -->
              <div class="col-start-8 col-end-9">
                <h5 class="text-sm font-semibold text-gray-600">Cost Center</h5>
              </div>
              <div class="col-start-9">
                <h5 class="text-sm font-semibold text-gray-600">:</h5>
              </div>
              <div class="col-end-12 col-span-2">
                <h5 class="text-sm font-semibold text-gray-600">
                  {{ claim.costCenter }}
                </h5>
              </div>
              <!-- Display Date of Report -->
              <div class="col-start-8 col-end-9">
                <h5 class="text-sm font-semibold text-gray-600">
                  Date of Report
                </h5>
              </div>
              <div class="col-start-9">
                <h5 class="text-sm font-semibold text-gray-600">:</h5>
              </div>
              <div class="col-end-12 col-span-2">
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
                            <span>Particulars</span>
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
                          class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                        >
                          <button @click="deleteClaim(index)">Delete</button>
                          <button @click="showDetails(claim)">
                            show details
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
        <tab class="mt-10" @formSubmitted="addClaim"></tab>
      </div>
      <div
        v-if="isClickModal"
        class="modal fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center"
        @click.self="closeClickModal"
      >
        <div
          class="modal-content bg-white rounded-lg p-8"
          style="max-height: calc(100vh - 20px); overflow-y: auto"
        >
          <!-- Modal header -->
          <!-- Your existing modal header content -->

          <div v-if="selectedClaimType === 'LocalTravelling'">
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
                  v-model="localTravellingDetails.dateLT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <div class="mb-4">
                <label for="nodeName" class="block text-gray-700 font-bold mb-2"
                  >Destination / Purpose:</label
                >
                <input
                  type="text"
                  id="nodeName"
                  v-model="localTravellingDetails.DestinationPurposeLT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>

              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >Mileage(KM):</label
                >
                <input
                  type="text"
                  id="email"
                  v-model="localTravellingDetails.MileageKMLT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >Toll:</label
                >
                <input
                  type="text"
                  id="phonenumber"
                  v-model="localTravellingDetails.TollLT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >Parking:</label
                >
                <input
                  type="text"
                  id="positioname"
                  v-model="localTravellingDetails.ParkingLT"
                  :disabled="!isEditMode"
                  class="border rounded-md px-4 py-2 w-full overflow-x-auto"
                />
              </div>
              <div class="mb-4">
                <label
                  for="nodeParentId"
                  class="block text-gray-700 font-bold mb-2"
                  >Total:</label
                >
                <input
                  type="text"
                  id="positioncode"
                  v-model="localTravellingDetails.TollLT"
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
          <div
            v-else-if="
              selectedClaimType === 'OverseasTravellingwithAccommodation'
            "
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
              <div class="mb-4">
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
              </div>

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
import axios from "axios";
import tab from "./e-claim/user-ui/FormTab.vue";
import { formStore } from "./store.js";

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
      isClickModal: false,
      isEditMode: false,
      selectedClaimDetails: {},
      localTravellingDetails: {}, // Object to store details for Local Travelling
      overseasTravellingDetails: {},
    };
  },
  created() {
    this.fetchClaims();
  },
  methods: {
    showDetails(claim) {
      // Update selectedClaimType based on the type of claim
      this.selectedClaimType = claim.tabTitle.replace(/\s+/g, ""); // Remove spaces from claim type
      // Update corresponding details object based on claim type
      switch (this.selectedClaimType) {
        case "LocalTravelling":
          this.localTravellingDetails = claim;
          break;
        case "OverseasTravellingwithAccommodation":
          this.overseasTravellingDetails = claim;
          break;

        case "Entertainment":
          this.entertainmentDetails = claim;
          break;

        case "StaffRefreshment":
          this.staffRefreshmentDetails = claim;
          break;

        case "HandphoneReimbursement":
          this.handphoneReimbursementDetails = claim;
          break;

        case "MedicalLeaveReimbursement":
          this.medicalLeaveReimbursementDetails = claim;
          break;
        // Add cases for other types of claims
      }
      this.isClickModal = true; // Show the modal
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

          // Now you can iterate over claimsToSend to see each individual claim
          for (const claim of claimsToSend) {
            // Log each claim to see its structure and content
            console.log("Individual claim:", claim);

            // Now you can access each property of the claim and use it to construct the correct input for your database
            const inputForDatabase = {
              Name: claim.Name,
              Email: claim.Email,
              // Map other fields as needed
            };
            console.log("Input for database:", inputForDatabase);
          }

          try {
            let axiosInstance;
            switch (title.toLowerCase()) {
              case "local travelling": {
                for (const claim of claimsToSend) {
                  // Iterate over each claim
                  const thisisforlocal1 = {
                    mileage_km: 23,
                    destination: claim.tabTitle,
                    date_event: "2024-05-07", // Example date
                    park_fee: 32,
                    toll_fee: 23,
                    total_fee: 23,
                    approver_email: claim.Email, // Access Email property from claim object
                    verifier_email: "verifier1@example.com",
                    approver_id: "7A7641D6-DEDE-4803-8B7B-93063DE2F077",
                    verifier_id: "7A7641D6-DEDE-4803-8B7B-93063DE2F077",
                    requester_id: "7A7641D6-DEDE-4803-8B7B-93063DE2F077",
                    unique_code: "ABC1233",
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
                    description: claim.tabTitle,
                    meal_allowance: "50",
                    date_event: "2024-05-07", // Example date
                    transport_fee: claim.Age,
                    total_fee: 80,
                    accom_foreign_total: 150,
                    accom_foreign_currency: 423,
                    accom_exchange_rate: 1.25,
                    other_foreign_currency: 433,
                    other_exchange_rate: 1.1,
                    other_foreign_total: 220,
                    reference_number: "pktm222",
                    unique_code: claim.City,

                    approver_email: "approver@example.com",
                    verifier_email: "verifier@example.com",
                    approver_id: "7A7641D6-DEDE-4803-8B7B-93063DE2F077",
                    verifier_id: "7A7641D6-DEDE-4803-8B7B-93063DE2F077",
                    requester_id: "9d0da821-5de0-42e5-b268-b5e0bc40e8d1",
                    serial_number: "123456789",
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
              case "entertainment":
                axiosInstance = axios.create({
                  baseURL: "http://localhost:3000/claims/entertainment",
                });
                claimsToSend.map((claim) => this.mapToEntertainment(claim));
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

  if (formData.claimantName !=="") {
    // Set the claims array to contain only the new formData
    this.claims = [formData];
    
    // Update the local storage with the new claims array
    localStorage.setItem('claims', JSON.stringify(this.claims));
  } else {
    // If no formData, retrieve the claims array from local storage
    const storedClaims = JSON.parse(localStorage.getItem('claims')) || [];
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
