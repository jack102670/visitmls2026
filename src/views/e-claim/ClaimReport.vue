<template>
  <main class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto">
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 relative dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <p class="absolute right-0 mr-2 top-1 pt-2 text-sm text-gray-500 italic">
          SN: {{ claims[0].uniqueCode }}
        </p>
        <div class="relative overflow-hidden mt-2 grid cols-start-1 md:flex justify-between items-center">
          <div class="flex items-center flex-wrap">
            <div class="flex items-center flex-shrink-0">
              <h3 class="ml-4 text-3xl font-bold text-blue-900" v-for="(claim, index) in claims" :key="index"
                style="max-width: 400px">
                {{ claim.reportName }}
              </h3>
            </div>
            <div class="flex items-center ml-4 mt-2 md:mt-0 flex-shrink-0">
              <span class="text-3xl font-bold text-blue-900">|</span>
              <span class="ml-4 text-2xl font-bold text-blue-900">Grand Total : RM {{ grandTotal }}</span>
            </div>
          </div>
          <div class="md:mr-4 md:mt-0 mt-5 gap-2 flex flex-row-reverse flex-shrink-0">
            <button @click="senttheclaim"
              class="w-36 h-12 p-1 font-semibold rounded-lg items-center text-sm dark:bg-gray-900 dark:border-gray-700 bg-green-700 border text-white">
              <div class="flex justify-center">
                <span class="mr-2 ml-2 text-slate-100 hover:text-blue-200">Submit Claim</span>
              </div>
            </button>
          </div>
        </div>

        <!-- Summary Section -->
        <section class="mt-8 px-4 mx-auto">
          <div class="grid grid-cols-14 gap-4">
            <template v-for="(claim, index) in claims" :key="index">
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
              <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table ref="reportTable" class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead class="bg-slate-200 dark:bg-gray-800 text-gray-900">
                      <tr>
                        <th scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right dark:text-gray-400">
                          <div class="flex items-center gap-x-3">
                            <span>No</span>
                          </div>
                        </th>
                        <th scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right dark:text-gray-400">
                          <div class="flex items-center gap-x-3">
                            <span>Type Of Claim</span>
                          </div>
                        </th>

                        <th v-if="claims[0].reportType === 'Finance'" scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right dark:text-gray-400">
                          <div class="flex items-center gap-x-3 capitalize">
                            <span>location / purpose </span>
                          </div>
                        </th>
                        <th scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right dark:text-gray-400">
                          <div class="flex items-center gap-x-3">
                            <span>Date</span>
                          </div>
                        </th>
                        <th scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right dark:text-gray-400">
                          <div class="flex items-center gap-x-3">
                            <span>Amount</span>
                          </div>
                        </th>
                        <th scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right dark:text-gray-400">
                          <div class="flex items-center gap-x-3">
                            <span>Action</span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <!-- Table Body -->
                    <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      <tr v-for="(claim, index) in dataclaims" :key="index">
                        <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          {{ index + 1 }}
                        </td>
                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {{ claim.tabTitle }}
                        </td>
                        <td v-if="claims[0].reportType === 'Finance'"
                          class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          <span v-if="claim.LocationEnd">{{ claim.LocationEnd || '-' }}</span>
                          <span v-if="claim.PurposeOT">{{ claim.PurposeOT || '-'  }}</span>
                          <span v-if="claim.VenueE">{{ claim.VenueE || '-' }}</span>
                          <span v-if="claim.VenueSR">{{ claim.VenueSR || '-' }}</span>
                        </td>
                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          <span v-if="claim.dateLT">{{ claim.dateLT }}</span>
                          <span v-if="claim.dateOT">{{ claim.dateOT }}</span>
                          <span v-if="claim.dateML">{{ claim.dateML }}</span>
                          <span v-if="claim.dateE">{{ claim.dateE }}</span>
                          <span v-if="claim.dateSR">{{ claim.dateSR }}</span>
                          <span v-if="claim.dateOthers">{{
                            claim.dateOthers
                            }}</span>
                        </td>
                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          <span v-if="claim.totalRM">RM {{ claim.totalRM }}</span>
                          <span v-if="claim.combinedTotal">RM {{ claim.combinedTotal }}
                          </span>
                          <span v-if="claim.AmountRME">RM {{ claim.AmountRME }}</span>
                          <span v-if="claim.AmountRMSR">RM {{ claim.AmountRMSR }}</span>
                          <span v-if="claim.combinetotal">RM {{ claim.combinetotal }}</span>
                        </td>
                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap space-x-2">
                          <button @click="deleteForm(index)"
                            class="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L6.26 5.79m8.788 0H6.26m12.804 0a2.25 2.25 0 00-2.73-1.684M6.26 5.79a2.25 2.25 0 002.73 1.684m0 0a2.25 2.25 0 00-2.73 1.684m0 0a2.25 2.25 0 012.73 1.684" />
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
        <tab class="mt-10" @formSubmitted="addClaim" :type="claims[0].reportType" 
          ></tab>
      </div>
      <div v-if="isClickModal"
        class="modal fixed inset-0 bg-transparent backdrop-blur-sm backdrop-brightness-75 dark:bg-[#111827] bg-opacity-50 flex justify-center items-center"
        @click.self="closeClickModal">
        <div class="modal-content bg-white rounded-lg p-8 w-full sm:w-3/4 lg:max-w-3xl"
          style="max-height: calc(100vh - 20px); overflow-y: auto">
          <!-- Modal header -->
          <div v-if="selectedClaimType === 'LocalTravelling'">
            <div class="flex justify-end">
              <button v-show="!isEditMode" @click="isClickModal = false" type="button"
                class="mt-4 mr-4 text-gray-400 hover:text-gray-500 focus:outline-none">
                <span class="sr-only">Close</span>
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
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
                <label for="nodeId" class="text-gray-700 font-bold mr-2">Trip:</label>
                <input type="text" id="triplt" v-model="localTravellingDetails.tripwayLT"
                  :disabled="!isEditMode || nonEditableFields" class="border rounded-md px-16 py-2" />
              </div>

              <div class="flex justify-between items-center mb-4">
                <label for="nodeName" class="text-gray-700 font-bold mr-2">Departure Date:</label>
                <input type="text" id="nodeId" v-model="localTravellingDetails.dateLT" :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2" />
              </div>
              <div v-if="!isOneWay" class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Return Date:</label>
                <input type="text" id="returndate" v-model="localTravellingDetails.ReturndateLT" :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2" />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Travelling Mode By:</label>
                <input type="text" id="transport" v-model="localTravellingDetails.TransportLT"
                  :disabled="!isEditMode || nonEditableFields" class="border rounded-md px-16 py-2" />
              </div>
              <div v-if="!isCompanyTransport && !isPublicTransport" class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Transport Specification:</label>
                <input type="text" id="transportSpecify" v-model="localTravellingDetails.TransportSpec"
                  :disabled="!isEditMode || nonEditableFields" class="border rounded-md px-16 py-2" />
              </div>
              <div v-if="!isCompanyTransport && !isPersonalTransport" class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Transport Specification:</label>
                <input type="text" id="publicTransportSpecify" v-model="localTravellingDetails.PublicTransportSpec"
                  :disabled="!isEditMode" class="border rounded-md px-16 py-2" />
              </div>
              <div v-if="!isPublicTransport" class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Vehicle Registration Number:</label>
                <input type="text" id="transportNumberPlate" v-model="localTravellingDetails.TransportNumberPlate"
                  :disabled="!isEditMode" class="border rounded-md px-16 py-2" />
              </div>
              <div v-if="!isPublicTransport" class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Vehicle Model:</label>
                <input type="text" id="transportModel" v-model="localTravellingDetails.TransportModel"
                  :disabled="!isEditMode" class="border rounded-md px-16 py-2" />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Location Start:</label>
                <input type="text" id="locationstart" v-model="localTravellingDetails.LocationStart"
                  :disabled="!isEditMode" class="border rounded-md px-16 py-2" />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Location End:</label>
                <input type="text" id="locationend" v-model="localTravellingDetails.LocationEnd" :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2" />
              </div>
              <div v-if="!isOneWay" class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Accommodation:</label>
                <input type="text" id="accommodationlt" v-model="localTravellingDetails.AccommodationLT"
                  :disabled="!isEditMode" class="border rounded-md px-16 py-2" />
              </div>
              <div v-if="!isOneWay" class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Meal Allowance(RM):</label>
                <input type="text" id="mealallowancelt" v-model="localTravellingDetails.MealAllowanceLT"
                  :disabled="!isEditMode" class="border rounded-md px-16 py-2" />
              </div>
              <div v-if="!isCompanyTransport && !isPublicTransport" class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Mileage/Kilometer(KM):</label>
                <input type="text" id="mileagekm" v-model="localTravellingDetails.MileageKMLT" :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2" />
              </div>
              <div v-if="!isPersonalTransport && !isPublicTransport" class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Type of Petrol:</label>
                <input type="text" id="petrolType" v-model="localTravellingDetails.PetrolType" :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2" />
              </div>
              

              <div v-if="!isPersonalTransport && !isPublicTransport" class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Petrol(Litre):</label>
                <input type="text" id="petrolLitre" v-model="localTravellingDetails.PetrolLitre" :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2" />
              </div>

              <div v-if="!isCompanyTransport && !isPersonalTransport" class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Fare(RM):</label>
                <input type="text" id="farerm" v-model="localTravellingDetails.FareRMLT" :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2" />
              </div>

              <div v-if="!isPublicTransport" class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Toll:</label>
                <input type="text" id="phonenumber" v-model="localTravellingDetails.TollLT" :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2" />
              </div>

              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Parking:</label>
                <input type="text" id="positioname" v-model="localTravellingDetails.ParkingLT" :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2" />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Additional Supporting Document(s).
                  :</label>
                <div class="flex flex-wrap">
                  <div v-for="(file, index) in localTravellingDetails.UploadLT" :key="index" class="m-2">
                    <div class="border-2 border-gray-200 rounded-lg overflow-hidden w-24 h-24">
                      <img :src="createObjectURL(file)" :alt="file.name" class="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Fare Attachment table -->
              <div class="mb-4">
                <h2 class="text-xl font-bold">Fare Attachment</h2>
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead class="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <div class="flex items-center gap-x-3">
                          <span>Type of Fare</span>
                        </div>
                      </th>
                      <th scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <div class="flex items-center gap-x-3">
                          <span>Attachment(s)</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    <tr v-for="([type, fileGroup], index) in fileGroups" :key="index">
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-wrap w-32">
                        {{ type }}
                      </td>
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap w-24">
                        <div v-for="(file, fileIndex) in fileGroup" :key="fileIndex" class="m-2">
                          <div class="border-2 border-gray-200 rounded-lg overflow-hidden w-24 h-24">
                            <img :src="createObjectURL(file)" :alt="file.name" class="w-full h-full object-cover" />
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <hr />
              <div class="flex justify-end items-center mb-4 mt-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2 text-2xl">Total local: RM {{
                  totallocalTravellingDetails }}</label>
              </div>

              <!-- Add/Edit node button -->
            </div>
            <div class="flex justify-end">
              <button @click="toggleEditMode"
                class="font-bold py-2 px-4 rounded bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800">

                <svg v-if="isEditMode" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <rect x="3" y="3" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5"
                    stroke-linejoin="round" />
                  <rect x="7" y="3" width="10" height="12" fill="none" stroke="currentColor" stroke-width="1.5"
                    stroke-linejoin="round" />
                  <path d="M12 8v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M5 3h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
              </button>
              <button @click="deleteForm()"
                class="bg-gray-300 hover:bg-red-500 text-gray-800 hover:text-white font-bold py-2 px-4 rounded ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>

          <div v-if="selectedClaimType === 'OverseasTravelling'">
            <div class="flex justify-end">
              <button v-show="!isEditMode" @click="isClickModal = false" type="button"
                class="mt-4 mr-4 text-gray-400 hover:text-gray-500 focus:outline-none">
                <span class="sr-only">Close</span>
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
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
                <label for="nodeId" class="text-gray-700 font-bold mr-2">Departure Date:</label>
                <input type="text" id="nodeId" v-model="overseasTravellingDetails.dateOT" :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2" />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeId" class="text-gray-700 font-bold mr-2">Return Date:</label>
                <input type="text" id="nodeId" v-model="overseasTravellingDetails.ReturendateOT" :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2" />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeName" class="text-gray-700 font-bold mr-2">Purpose:</label>
                <input type="text" id="nodeName" v-model="overseasTravellingDetails.PurposeOT" :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2" />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="mealAllowance" class="text-gray-700 font-bold mr-2">Meal Allowance(RM):</label>
                <input type="text" id="mealAllowance" v-model="overseasTravellingDetails.MealAllowanceOT"
                  :disabled="!isEditMode" class="border rounded-md px-16 py-2" />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Additional Supporting Document(s).
                  :</label>
                <div class="flex flex-wrap">
                  <div v-for="(file, index) in overseasTravellingDetails.UploadOT" :key="index" class="m-2">
                    <div class="border-2 border-gray-200 rounded-lg overflow-hidden w-24 h-24">
                      <img :src="createObjectURL(file)" :alt="file.name" class="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Other Expenses Table-->
              <div class="mb-4">
                <h2 class="text-xl font-bold">Other Expenses</h2>
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead class="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <div class="flex items-center gap-x-3">
                          <span>No</span>
                        </div>
                      </th>
                      <th scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <div class="flex items-center gap-x-3">
                          <span>Expense</span>
                        </div>
                      </th>
                      <th scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <div class="flex items-center gap-x-3">
                          <span>Description</span>
                        </div>
                      </th>
                      <th scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <div class="flex items-center gap-x-3">
                          <span>Foreign Currency</span>
                        </div>
                      </th>
                      <th scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <div class="flex items-center gap-x-3">
                          <span>Exchange Rate</span>
                        </div>
                      </th>
                      <th scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <div class="flex items-center gap-x-3">
                          <span>Amount(Foreign Currency)</span>
                        </div>
                      </th>
                      <th scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <div class="flex items-center gap-x-3">
                          <span>Amount(RM)</span>
                        </div>
                      </th>
                      <th scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <div class="flex items-center gap-x-3">
                          <span>Attachment(s)</span>
                        </div>
                      </th>
                      <th scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <div class="flex items-center gap-x-3">
                          <span>Action</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    <tr v-for="(
                        expense, index
                      ) in overseasTravellingDetails.otherExpenses" :key="index">
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        {{ index + 1 }}
                      </td>
                      <!-- Name Field -->
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-wrap w-32">
                        <span v-if="!isEditMode">{{ expense.name }}</span>
                        <input v-else type="text" v-model="expense.name"
                          class="form-input rounded-md shadow-sm mt-1 block w-full border border-gray-400 p-1" />
                      </td>

                      <!-- Description Field -->
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-wrap w-64">
                        <span v-if="!isEditMode">{{
                          expense.description
                          }}</span>
                        <textarea v-else v-model="expense.description"
                          class="form-textarea mt-1 block w-full border border-gray-400 p-1" rows="2"></textarea>
                      </td>

                      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap w-24">
                        <span v-if="!isEditMode || nonEditableFields">{{
                          expense.ForeignCurrencyAccommodationOT || "-"
                          }}</span>
                        <input v-else type="text" v-model="expense.ForeignCurrencyAccommodationOT"
                          class="form-input rounded-md shadow-sm mt-1 block w-full border border-gray-400 p-1" />
                      </td>

                      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap w-24">
                        <span v-if="!isEditMode">{{
                          expense.ExchangeRateAccommodationOT || "-"
                          }}</span>
                        <input v-else type="number" v-model="expense.ExchangeRateAccommodationOT"
                          class="form-input rounded-md shadow-sm mt-1 block w-full border border-gray-400 p-1" />
                      </td>

                      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap w-24">
                        <span v-if="!isEditMode">{{
                          expense.AmountforAccommodationOT || "-"
                          }}</span>
                        <input v-else type="number" v-model="expense.AmountforAccommodationOT"
                          class="form-input rounded-md shadow-sm mt-1 block w-full border border-gray-400 p-1" />
                      </td>

                      <!-- Amount Field -->
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap w-24">
                        <span v-if="!isEditMode">{{ expense.amount }}</span>
                        <input v-else type="number" v-model="expense.amount"
                          class="form-input rounded-md shadow-sm mt-1 block w-full border border-gray-400 p-1" />
                      </td>

                      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap w-24">
                        <div v-for="file in expense.files" :key="file.id">
                          <a :href="file.url" :download="file.name" class="text-blue-500 hover:underline">{{ file.name
                            }}</a>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <button
                          class="text-red-500 transition-colors duration-200 dark:hover:text-red-300 dark:text-gray-300 hover:text-red-300 focus:outline-none"
                          @click="deleteExpense(index)">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr />
              <div class="flex justify-end items-center mb-4 mt-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2 text-2xl">Total: {{
                  totalOverseasTravellingAmount }}</label>
              </div>
            </div>
            <div class="flex justify-end">
              <button @click="toggleEditMode"
                class="font-bold py-2 px-4 rounded bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800">
                <svg v-if="isEditMode" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <rect x="3" y="3" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5"
                    stroke-linejoin="round" />
                  <rect x="7" y="3" width="10" height="12" fill="none" stroke="currentColor" stroke-width="1.5"
                    stroke-linejoin="round" />
                  <path d="M12 8v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M5 3h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
              </button>
              <button @click="deleteForm()"
                class="bg-gray-300 hover:bg-red-500 text-gray-800 hover:text-white font-bold py-2 px-4 rounded ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>

          <div v-if="selectedClaimType === 'MedicalBillReimbursement'">
            <div class="flex-1 gap-4 justify-center items-center">
              <!-- Modal content -->
              <div class="flex justify-end">
                <button v-show="!isEditMode" @click="isClickModal = false" type="button"
                  class="mt-4 mr-4 text-gray-400 hover:text-gray-500 focus:outline-none">
                  <span class="sr-only">Close</span>
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <h1 class="text-3xl font-bold text-blue-900">
                Medical Bill Reimbursement Form
              </h1>
              <hr class="mt-2 mb-4" />

              <div class="flex justify-between items-center mb-4">
                <label for="nodeId" class="text-gray-700 font-bold mr-2">Date of Medical Bill:</label>
                <input type="text" id="nodeId" v-model="medicalBillReimbursementDetails.dateML" :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2" />
              </div>

              <div class="flex justify-between items-center mb-4">
                <label for="nodeName" class="text-gray-700 font-bold mr-2">Medical Category:</label>
                <input type="text" id="nodeName" v-model="medicalBillReimbursementDetails.MedicalCategoryML"
                  :disabled="!isEditMode || nonEditableFields" class="border rounded-md px-16 py-2" />
              </div>

              <div v-if="!isOtherThanOutpatient" class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Reason for Medical:</label>
                <input type="text" id="nodeParentId" v-model="medicalBillReimbursementDetails.ReasonML"
                  :disabled="!isEditMode" class="border rounded-md px-16 py-2" />
              </div>

              <div v-if="!isOtherThanOutpatient" class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Clinic Selection:</label>
                <input type="text" id="ClinicSelectionML" v-model="medicalBillReimbursementDetails.ClinicSelectionML"
                  :disabled="!isEditMode || nonEditableFields" class="border rounded-md px-16 py-2" />
              </div>

              <div v-if="!isPanelClinic && !isOtherThanOutpatient" class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Specify Clinic Name:</label>
                <input type="text" id="OtherClinicSpecML" v-model="medicalBillReimbursementDetails.OtherClinicSpecML"
                  :disabled="!isEditMode" class="border rounded-md px-16 py-2" />
              </div>

              <div v-if="!isPanelClinic && !isOtherThanOutpatient" class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Reason not Going to Panel Clinic:</label>
                <input type="text" id="OtherClinicReasonML"
                  v-model="medicalBillReimbursementDetails.OtherClinicReasonML" :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2" />
              </div>

              <div class="flex justify-between items-center mb-4">
                <label for="bankName" class="text-gray-700 font-bold mr-2">Bank Name:</label>
                <input type="text" id="bankName" v-model="medicalBillReimbursementDetails.BankNameML"
                  :disabled="!isEditMode || nonEditableFields" class="border rounded-md px-16 py-2" />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="accBankNumber" class="text-gray-700 font-bold mr-2">Account Bank No:</label>
                <input type="text" id="accBankNumber" v-model="medicalBillReimbursementDetails.AccBankNumberML"
                  :disabled="!isEditMode || nonEditableFields" class="border rounded-md px-16 py-2" />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="accHolderName" class="text-gray-700 font-bold mr-2">Account Holder Name:</label>
                <input type="text" id="accHolderName" v-model="medicalBillReimbursementDetails.AccHolderNameML"
                  :disabled="!isEditMode || nonEditableFields" class="border rounded-md px-16 py-2 overflow-x-auto" />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="limitAmount" class="text-gray-700 font-bold mr-2">Limited Amount (RM):</label>
                <input type="text" id="limitsAmount" v-model="medicalBillReimbursementDetails.LimitedAmountML"
                  :disabled="!isEditMode || nonEditableFields" class="border rounded-md px-16 py-2" />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="claimsAmount" class="text-gray-700 font-bold mr-2">Claims Amount (RM):</label>
                <input type="text" id="claimsAmount" v-model="medicalBillReimbursementDetails.ClaimsAmountML" :disabled="!isEditMode || (isOutpatient && claimsAmountExceedsLimit)
                  " @input="handleClaimsAmountInput" class="border rounded-md px-16 py-2" />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Attachment(s). :</label>
                <div class="flex flex-wrap">
                  <div v-for="(
                      file, index
                    ) in medicalBillReimbursementDetails.UploadML" :key="index" class="m-2">
                    <div class="border-2 border-gray-200 rounded-lg overflow-hidden w-24 h-24">
                      <img :src="createObjectURL(file)" :alt="file.name" class="w-full h-full object-cover" />
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
              <label for="nodeParentId" class="text-gray-700 font-bold mr-2 text-2xl">Total: RM {{
                totalMedicalBillReimbursementDetails }}</label>
            </div>

            <div class="flex justify-end">
              <button @click="toggleEditMode" :disabled="isSaveDisabled"
                class="font-bold py-2 px-4 rounded bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800">
                <!-- Edit Icon -->

                <svg v-if="isEditMode" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <rect x="3" y="3" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5"
                    stroke-linejoin="round" />
                  <rect x="7" y="3" width="10" height="12" fill="none" stroke="currentColor" stroke-width="1.5"
                    stroke-linejoin="round" />
                  <path d="M12 8v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M5 3h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                </svg>

                <!-- Save Icon -->
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
              </button>
              <button @click="deleteForm()"
                class="bg-gray-300 hover:bg-red-500 text-gray-800 hover:text-white font-bold py-2 px-4 rounded ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>

          <div v-if="selectedClaimType === 'Entertainment'">
            <div class="flex-1 gap-4 justify-center items-center">
              <!-- Modal content -->
              <div class="flex justify-end">
                <button v-show="!isEditMode" @click="isClickModal = false" type="button"
                  class="mt-4 mr-4 text-gray-400 hover:text-gray-500 focus:outline-none">
                  <span class="sr-only">Close</span>
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <h1 class="text-3xl font-bold text-blue-900">
                Entertainment Claim Form
              </h1>
              <hr class="mt-2 mb-4" />

              <div class="flex justify-between items-center mb-4">
                <label for="nodeId" class="text-gray-700 font-bold mr-2">Date:</label>
                <input type="text" id="nodeId" v-model="entertainmentDetails.dateE" :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2" />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeName" class="text-gray-700 font-bold mr-2">Type of Entertainment:</label>
                <input type="text" id="nodeName" v-model="entertainmentDetails.TypeofEntertainmentE"
                  :disabled="!isEditMode || nonEditableFields" class="border rounded-md px-16 py-2" />
              </div>
              <div v-if="!isOtherEntertainment" class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Other Type of Entertainment:</label>
                <input type="text" id="nodeParentId" v-model="entertainmentDetails.OtherTypeofEntertainmentE"
                  :disabled="!isEditMode" class="border rounded-md px-16 py-2" />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Company:</label>
                <input type="text" id="nodeParentId" v-model="entertainmentDetails.CompanyE" :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2" />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Venue:</label>
                <input type="text" id="nodeParentId" v-model="entertainmentDetails.VenueE" :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2" />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Reference:</label>
                <input type="text" id="nodeParentId" v-model="entertainmentDetails.ReferenceE"
                  :disabled="!isEditMode || nonEditableFields" class="border rounded-md px-16 py-2" />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="amount" class="text-gray-700 font-bold mr-2">Amount (RM):</label>
                <input type="text" id="amount" v-model="entertainmentDetails.AmountRME" :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2" />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Attachment(s). :</label>
                <div class="flex flex-wrap">
                  <div v-for="(file, index) in entertainmentDetails.UploadE" :key="index" class="m-2">
                    <div class="border-2 border-gray-200 rounded-lg overflow-hidden w-24 h-24">
                      <img :src="createObjectURL(file)" :alt="file.name" class="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              <hr />
              <div class="flex justify-end items-center mb-4 mt-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2 text-2xl">Total: RM {{
                  entertainmentDetails.AmountRME }}</label>
              </div>

              <!-- Attendees table -->
              <div class="mb-4">
                <h2 class="text-xl font-bold text-gray-700">Attendees</h2>
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead class="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <div class="flex items-center gap-x-3">
                          <span>No</span>
                        </div>
                      </th>
                      <th scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <div class="flex items-center gap-x-3">
                          <span>Name</span>
                        </div>
                      </th>
                      <th scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <div class="flex items-center gap-x-3">
                          <span>Company Name</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    <tr v-for="(
                        attendee, index
                      ) in entertainmentDetails.attendees" :key="index">
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        {{ index + 1 }}
                      </td>
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        {{ attendee.name }}
                      </td>
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        {{ attendee.company_Name }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="flex justify-end">
              <button @click="toggleEditMode"
                class="font-bold py-2 px-4 rounded bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800">
                <!-- Edit Icon -->

                <svg v-if="isEditMode" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <rect x="3" y="3" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5"
                    stroke-linejoin="round" />
                  <rect x="7" y="3" width="10" height="12" fill="none" stroke="currentColor" stroke-width="1.5"
                    stroke-linejoin="round" />
                  <path d="M12 8v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M5 3h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                </svg>

                <!-- Save Icon -->
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
              </button>
              <button @click="deleteForm()"
                class="bg-gray-300 hover:bg-red-500 text-gray-800 hover:text-white font-bold py-2 px-4 rounded ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
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
                <button v-show="!isEditMode" @click="isClickModal = false" type="button"
                  class="mt-4 mr-4 text-gray-400 hover:text-gray-500 focus:outline-none">
                  <span class="sr-only">Close</span>
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <h1 class="text-3xl font-bold text-blue-900">
                Staff Refreshment Claim Form
              </h1>
              <hr class="mt-2 mb-4" />

              <div class="flex justify-between items-center mb-4">
                <label for="nodeId" class="text-gray-700 font-bold mr-2">Date:</label>
                <input type="text" id="nodeId" v-model="staffRefreshmentDetails.dateSR" :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2" />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeName" class="text-gray-700 font-bold mr-2">Type of Refreshment:</label>
                <input type="text" id="nodeName" v-model="staffRefreshmentDetails.TypeofRefreshmentSR"
                  :disabled="!isEditMode || nonEditableFields" class="border rounded-md px-16 py-2" />
              </div>
              <div v-if="!isOtherStaffRefreshment" class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Other Type of Staff Refreshment:</label>
                <input type="text" id="nodeParentId" v-model="staffRefreshmentDetails.OtherTypeofStaffRefreshmentSR
                  " :disabled="!isEditMode" class="border rounded-md px-16 py-2" />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Company:</label>
                <input type="text" id="nodeParentId" v-model="staffRefreshmentDetails.CompanySR" :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2" />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Venue:</label>
                <input type="text" id="nodeParentId" v-model="staffRefreshmentDetails.VenueSR" :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2" />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Reference:</label>
                <input type="text" id="nodeParentId" v-model="staffRefreshmentDetails.ReferenceSR"
                  :disabled="!isEditMode || nonEditableFields" class="border rounded-md px-16 py-2" />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Amount (RM):</label>
                <input type="text" id="nodeParentId" v-model="staffRefreshmentDetails.AmountRMSR"
                  :disabled="!isEditMode" class="border rounded-md px-16 py-2" />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Attachment(s). :</label>
                <div class="flex flex-wrap">
                  <div v-for="(file, index) in staffRefreshmentDetails.UploadSR" :key="index" class="m-2">
                    <div class="border-2 border-gray-200 rounded-lg overflow-hidden w-24 h-24">
                      <img :src="createObjectURL(file)" :alt="file.name" class="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              <hr />
              <div class="flex justify-end items-center mb-4 mt-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2 text-2xl">Total: RM {{
                  totalStaffRefreshmentDetails }}</label>
              </div>

              <!-- Staff Involved table -->
              <div class="mb-4">
                <h2 class="text-xl font-bold text-gray-700">Staff Involved</h2>
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead class="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <div class="flex items-center gap-x-3">
                          <span>No</span>
                        </div>
                      </th>
                      <th scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <div class="flex items-center gap-x-3">
                          <span>Name</span>
                        </div>
                      </th>
                      <th scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <div class="flex items-center gap-x-3">
                          <span>Department</span>
                        </div>
                      </th>
                      <th scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <div class="flex items-center gap-x-3">
                          <span>Company Name</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    <tr v-for="(
                        staff, index
                      ) in staffRefreshmentDetails.staffInvolved" :key="index">
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        {{ index + 1 }}
                      </td>
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        {{ staff.name }}
                      </td>
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        {{ staff.department }}
                      </td>
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        {{ staff.companyName }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="flex justify-end">
              <button @click="toggleEditMode"
                class="font-bold py-2 px-4 rounded bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800">
                <!-- Edit Icon -->

                <svg v-if="isEditMode" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <rect x="3" y="3" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5"
                    stroke-linejoin="round" />
                  <rect x="7" y="3" width="10" height="12" fill="none" stroke="currentColor" stroke-width="1.5"
                    stroke-linejoin="round" />
                  <path d="M12 8v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M5 3h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                </svg>

                <!-- Save Icon -->
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
              </button>
              <button @click="deleteForm()"
                class="bg-gray-300 hover:bg-red-500 text-gray-800 hover:text-white font-bold py-2 px-4 rounded ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>

          <div v-if="selectedClaimType === 'Others'">
            <div class="flex-1 gap-4 justify-center items-center">
              <!-- Modal content -->
              <div class="flex justify-end">
                <button v-show="!isEditMode" @click="isClickModal = false" type="button"
                  class="mt-4 mr-4 text-gray-400 hover:text-gray-500 focus:outline-none">
                  <span class="sr-only">Close</span>
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <h1 class="text-3xl font-bold text-blue-900">Others Form</h1>
              <hr class="mt-2 mb-4" />

              <div class="flex justify-between items-center mb-4">
                <label for="nodeId" class="text-gray-700 font-bold mr-2">Date:</label>
                <input type="text" id="nodeId" v-model="othersDetails.dateOthers" :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2" />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="expensename" class="text-gray-700 font-bold mr-2">Expense Name:</label>
                <input type="text" id="expensename" v-model="othersDetails.ExpenseNameOthers" :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2" />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="amount" class="text-gray-700 font-bold mr-2">Amount (RM):</label>
                <input type="text" id="amount" v-model="othersDetails.AmountRMOthers" :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2" />
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="desription" class="text-gray-700 font-bold mr-2">Description:</label>
                <textarea id="DescriptionOthers" v-model="othersDetails.DescriptionOthers" :disabled="!isEditMode"
                  class="border rounded-md px-16 py-2" rows="4"></textarea>
              </div>
              <div class="flex justify-between items-center mb-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Attachment(s). :</label>
                <div class="flex flex-wrap">
                  <div v-for="(file, index) in othersDetails.UploadOthers" :key="index" class="m-2">
                    <div class="border-2 border-gray-200 rounded-lg overflow-hidden w-24 h-24">
                      <img :src="createObjectURL(file)" :alt="file.name" class="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr />
            <div class="flex justify-end items-center mb-4 mt-4">
              <label for="nodeParentId" class="text-gray-700 font-bold mr-2 text-2xl">Total: RM {{ totalOthersDetails
                }}</label>
            </div>

            <div class="flex justify-end">
              <button @click="toggleEditMode"
                class="font-bold py-2 px-4 rounded bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800">
                <!-- Edit Icon -->

                <svg v-if="isEditMode" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <rect x="3" y="3" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5"
                    stroke-linejoin="round" />
                  <rect x="7" y="3" width="10" height="12" fill="none" stroke="currentColor" stroke-width="1.5"
                    stroke-linejoin="round" />
                  <path d="M12 8v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M5 3h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                </svg>

                <!-- Save Icon -->
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
              </button>
              <button @click="deleteForm()"
                class="bg-gray-300 hover:bg-red-500 text-gray-800 hover:text-white font-bold py-2 px-4 rounded ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
              </button>
            </div>
          </div>

          <div v-if="selectedClaimType === 'HandphoneBillReimbursement'">
            <div class="flex-1 gap-4 justify-center items-center">
              <!-- Modal content -->
              <div class="flex justify-end">
                <button v-show="!isEditMode" @click="isClickModal = false" type="button"
                  class="mt-4 mr-4 text-gray-400 hover:text-gray-500 focus:outline-none">
                  <span class="sr-only">Close</span>
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <h1 class="text-3xl font-bold text-blue-900">
                Handphone Bill Reimbursement Form
              </h1>
              <hr class="mt-2 mb-4" />

              <div class="flex flex-col">
                <div class="flex justify-between items-center mb-4">
                  <label for="nodeId" class="text-gray-700 font-bold mr-2">Month:</label>
                  <input type="text" id="nodeId" v-model="handphoneBillReimbursementDetails.MonthHR"
                    :disabled="!isEditMode" class="border rounded-md px-16 py-2" />
                </div>
                <div class="flex justify-between items-center mb-4">
                  <label for="nodeName" class="text-gray-700 font-bold mr-2">Year:</label>
                  <input type="text" id="nodeName" v-model="handphoneBillReimbursementDetails.YearHR"
                    :disabled="!isEditMode" class="border rounded-md px-16 py-2" />
                </div>
                <div class="flex justify-between items-center mb-4">
                  <label for="bankName" class="text-gray-700 font-bold mr-2">Bank Name:</label>
                  <input type="text" id="bankName" v-model="handphoneBillReimbursementDetails.BankNameHR"
                    :disabled="!isEditMode || nonEditableFields" class="border rounded-md px-16 py-2" />
                </div>
                <div class="flex justify-between items-center mb-4">
                  <label for="accBankNumber" class="text-gray-700 font-bold mr-2">Account Bank No:</label>
                  <input type="text" id="accBankNumber" v-model="handphoneBillReimbursementDetails.AccBankNumberHR"
                    :disabled="!isEditMode || nonEditableFields" class="border rounded-md px-16 py-2" />
                </div>
                <div class="flex justify-between items-center mb-4">
                  <label for="accHolderName" class="text-gray-700 font-bold mr-2">Account Holder Name:</label>
                  <input type="text" id="accHolderName" v-model="handphoneBillReimbursementDetails.AccHolderNameHR"
                    :disabled="!isEditMode || nonEditableFields" class="border rounded-md px-16 py-2" />
                </div>
                <div class="flex justify-between items-center mb-4">
                  <label for="limitedAmount" class="text-gray-700 font-bold mr-2">Limited Amount (RM):</label>
                  <input type="text" id="limitedAmount" v-model="handphoneBillReimbursementDetails.LimitedAmountHR"
                    :disabled="!isEditMode || nonEditableFields" class="border rounded-md px-16 py-2" />
                </div>
                <div class="flex justify-between items-center mb-4">
                  <label for="claimsAmount" class="text-gray-700 font-bold mr-2">Claims Amount (RM):</label>
                  <input type="text" id="claimsAmount" v-model="handphoneBillReimbursementDetails.ClaimsAmountHR"
                    :disabled="!isEditMode" class="border rounded-md px-16 py-2" />
                </div>
                <div class="flex justify-between items-center mb-4">
                  <label for="nodeParentId" class="text-gray-700 font-bold mr-2">Attachment(s). :</label>
                  <div class="flex flex-wrap">
                    <div v-for="(
                        file, index
                      ) in handphoneBillReimbursementDetails.UploadHR" :key="index" class="m-2">
                      <div class="border-2 border-gray-200 rounded-lg overflow-hidden w-24 h-24">
                        <img :src="createObjectURL(file)" :alt="file.name" class="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="claimsAmountExceedsLimitHR" class="text-red-500 text-sm mb-4">
                {{ claimsAmountErrorMessageHR }}
              </div>

              <hr />
              <div class="flex justify-end items-center mb-4 mt-4">
                <label for="nodeParentId" class="text-gray-700 font-bold mr-2 text-2xl">Total: RM {{
                  totalHandphoneBillReimbursementDetails }}</label>
              </div>

              <div class="flex justify-end">
                <button @click="toggleEditMode" :disabled="isSaveDisabledHR"
                  class="font-bold py-2 px-4 rounded bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800">
                  <!-- Edit Icon -->

                  <svg v-if="isEditMode" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <rect x="3" y="3" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5"
                      stroke-linejoin="round" />
                    <rect x="7" y="3" width="10" height="12" fill="none" stroke="currentColor" stroke-width="1.5"
                      stroke-linejoin="round" />
                    <path d="M12 8v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M5 3h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                  </svg>

                  <!-- Save Icon -->
                  <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                </button>
                <button @click="deleteForm()"
                  class="bg-gray-300 hover:bg-red-500 text-gray-800 hover:text-white font-bold py-2 px-4 rounded ml-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Loading Animation -->
    <div class="w-screen h-screen fixed z-50 flex justify-center items-center top-0 left-0 backdrop-blur-md"
      v-if="loading">
      <div class="absolute w-screen h-screen bg-gray-900 opacity-30"></div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" class="w-16 h-16 z-50">
        <circle transform="rotate(0)" transform-origin="center" fill="none" stroke="blue" stroke-width="10"
          stroke-linecap="round" stroke-dasharray="230 1000" stroke-dashoffset="0" cx="100" cy="100" r="70">
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="2" repeatCount="indefinite">
          </animateTransform>
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
import Swal from 'sweetalert2';

export default {
  name: "TEtstS",
  components: {
    tab,
  },
  data() {
    return {

      limitsInitialized: false,
      claimsValidation: {
        // Initialize limits
        limits: {
          outpatient: 0,
          medicalDental: 0
        },
        // Track current totals
        currentTotals: {
          outpatient: 0,
          medicalDental: 0
        }
      },

      requesterEmail: "",
      
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
        fileUpload: formStore.getFormData().fileUpload.slice(),
      },
      loading: false,
      loadingText: "",
    };
  },

  computed: {
    fileGroups() {
      const groups = {
        Fare: this.localTravellingDetails?.UploadFareRMLT || [],
        Mileage: this.localTravellingDetails?.UploadMileageRMLT || [],
        Parking: this.localTravellingDetails?.UploadParkingLT || [],
        "Toll/Touch n'Go": this.localTravellingDetails?.UploadTollLT || [],
      };

      return Object.entries(groups).filter(([files]) => files.length > 0);
    },

    totallocalTravellingDetails() {
      let total = 0;

      if (this.localTravellingDetails.TransportLT === "Company Transport") {
        total += parseFloat(this.localTravellingDetails.MileageRMLT) || 0;
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
        total += parseFloat(this.localTravellingDetails.ParkingLT) || 0;
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
      // const validTypes = ["BREAKFAST", "LUNCH", "DINNER", "TEA BREAK"];
      // return validTypes.includes(
      //   this.entertainmentDetails.TypeofEntertainmentE
      // ) && 
      return this.entertainmentDetails.TypeofEntertainmentE !== "Others";
    },

    isOtherStaffRefreshment() {
      return this.staffRefreshmentDetails.TypeofRefreshmentSR !== "Others";
    },

    totalOverseasTravellingAmount() {
      let otherExpensesTotal = 0;
      if (
        this.overseasTravellingDetails &&
        this.overseasTravellingDetails.otherExpenses
      ) {
        otherExpensesTotal =
          this.overseasTravellingDetails.otherExpenses.reduce(
            (total, expense) => {
              console.log('Current expense amount:', expense.amount);
              console.log('Running total:', total + (parseFloat(expense.amount) || 0));
              return total + (parseFloat(expense.amount) || 0);
            },
            0
          );
      }
      // console.log('Other expenses total:', otherExpensesTotal);
      // console.log('Meal Allowance:', this.overseasTravellingDetails.MealAllowanceOT);

      let total =
        (parseFloat(this.overseasTravellingDetails.MealAllowanceOT) || 0) +
        otherExpensesTotal;

      // console.log('Final total:', total);
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
          if (claim.combinetotal) amount += parseFloat(claim.combinetotal);
          return total + amount;
        }, 0)
        .toFixed(2);
    },
    referenceNumber() {
      // console.log("Current uniqueCode:", this.claims.uniqueCode);
      return this.claims.uniqueCode;
    },
  },

  created() {
    this.fetchProfileData();
    this.fetchClaims();
    // console.log("Claims2:", this.claims);
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
    handleClaimsAmountInput() {
      if (this.isOutpatient) {
        const limit = parseFloat(
          this.medicalBillReimbursementDetails.LimitedAmountML
        );
        const amount = parseFloat(
          this.medicalBillReimbursementDetails.ClaimsAmountML
        );
        this.medicalBillReimbursementDetails.ClaimsAmountML = Math.min(
          amount,
          70,
          limit
        );
      }
    },

    async fetchSerialNumber() {
      let result = null;
      try {
        const response = await axios.get(
          "http://172.28.28.116:6165/api/User/GetRunningNumber"
        );
        if (response.status === 200) {
          // console.log("Serial Number:", response.data);
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
      // console.log("Result:", result);
      return result;
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
          " http://172.28.28.116:6239/api/User/GetAllEmployees"
        );

        if (response.data.result && response.data.result.length > 0) {
          const selectedEmployee = response.data.result.find(
            (emp) => emp.username_id === store.getSession().userDetails.userId
          );
          // console.log("Selected Employee:", selectedEmployee);
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
        throw error;
      }
    },
    deleteExpense(index) {
      // Assuming `expenses` is the array holding your items
      this.overseasTravellingDetails.otherExpenses.splice(index, 1);
    },
    totalplusmethod(total) {
      this.totalplus = total;
      // console.log("totalplus", this.totalplus);
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

    generateUniqueCode(tabTitle) {
      if (this.userDetails.userId) {
        const userIdFragment = this.userDetails.userId.substring(0, 4);
        const randomNumber = Math.floor(Math.random() * 100)
          .toString()
          .padStart(2, "0");

        const timestamp = Date.now().toString().slice(-2);
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

        const uniqueCode = `${prefix}${userIdFragment}${randomNumber}${timestamp}`;
        // console.log("Unique Code:", uniqueCode);
        return uniqueCode;
      } else {
        console.error("User ID is undefined.");
        return "";
      }
    },
    generateUniqueCodeSN(tabTitle) {
      if (this.userDetails.userId) {
        const userIdFragment = this.userDetails.userId.substring(0, 4);
        const randomNumber = Math.floor(Math.random() * 100)
          .toString()
          .padStart(2, "0");

        const timestamp = Date.now().toString().slice(-2);

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

        const uniqueCode = `SN${prefix}${userIdFragment}${randomNumber}${timestamp}`;
        // console.log("Unique Code:", uniqueCode);
        return uniqueCode;
      } else {
        console.error("User ID is undefined.");
        return "";
      }
    },
    fetchClaims() {
      try {
        const formData = formStore.getFormData();

        // Log for debugging purposes
        console.log("Fetched form data from store:", formData);

        const isValidFormData = formData &&
          formData.claimantName &&
          formData.companyName &&
          formData.reportName &&
          formData.designation &&
          formData.department;

        if (isValidFormData) {
          this.claims = [formData];

          // Store the new valid form data
          localStorage.setItem("claims", JSON.stringify(this.claims));
          console.log("Valid form data saved to localStorage.");
        } else {
          // Fallback to local storage if form data is incomplete
          const storedClaims = JSON.parse(localStorage.getItem("claims")) || [];
          this.claims = storedClaims;

          if (!this.claims.length || !this.claims[0].reportName) {
            console.warn("Missing or invalid claim data from both store and localStorage.");
            Swal.fire({
              icon: 'error',
              title: 'Missing Claim Information',
              text: 'Unable to load claim data. Please fill out the report form again.',
              confirmButtonColor: '#d33',
            });
          }
        }

        console.log("Final claims data used:", this.claims);
      } catch (error) {
        console.error("Error fetching claims data:", error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Something went wrong while loading claim data.',
          confirmButtonColor: '#d33',
        });
      }
    },


    async fetchProfileData() {
      try {
        const userId = store.getSession().userDetails.userId; // Get the user ID from the session
        const response = await axios.get(` http://172.28.28.116:6239/api/User/GetEmployeeById/${userId}`);
        if (response.status === 200 && response.data.result.length > 0) {
          const profileData = response.data.result[0];
          this.requesterEmail = profileData.email_address; // Assign the email_address to a data property
        } else {
          console.error("Failed to fetch profile data:", response.status);
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    },
    isValidClaimData() {
      return this.dataclaims.length > 0;
    },

    hasAtLeastOneFilledClaim() {
      return this.dataclaims && this.dataclaims.length > 0;
    },


    async senttheclaim() {
      // Step 1: Check if claim data exists at all
      if (!this.isValidClaimData()) {
        Swal.fire({
          icon: 'warning',
          title: 'Invalid Claim',
          text: 'Please add at least 1 claim before submitting.',
          confirmButtonColor: '#3085d6',
        });
        return;
      }

      // Step 2: Check if at least one claim form is filled in from sendToAPI (dataclaims)
      const hasFilledClaimForm = this.dataclaims && this.dataclaims.length > 0 && this.dataclaims.some(claim => {
        // Check if there's any non-empty value in the form
        return Object.values(claim).some(v => v !== null && v !== undefined && String(v).trim() !== "");
      });

      if (!hasFilledClaimForm) {
        Swal.fire({
          icon: 'warning',
          title: 'No Claim Form Filled',
          text: 'Please fill in at least one claim form (Local, Overseas, etc.) before submitting.',
          confirmButtonColor: '#d33',
        });
        return;
      }

      this.loading = true;
      this.loadingText = "Uploading...";

      try {
        // Step 1: FETCH serial number first
        const referenceNumber = await this.fetchSerialNumber();
        if (!referenceNumber) {
          throw new Error("Failed to fetch reference number.");
        }

        //  Save to Vue data, NOT localStorage yet
        this.serialnumber = referenceNumber;

        // Step 2: Prepare apiData properly
        const apiData = {
          name: this.claims[0]?.claimantName || "-",
          company_name: this.claims[0]?.companyName || "-",
          department: this.claims[0]?.department || "-",
          designation_title: this.claims[0]?.designation || "-",
          cost_center: this.claims[0]?.costCenter || "-",
          reference_number: this.serialnumber,
          report_name: this.claims[0]?.reportName || "-",
          grand_total: Number(parseFloat(this.grandTotal).toFixed(2)) || 0,
          requester_id: this.userDetails?.userId || "-",
          employee_id: this.employeeID || "-",
          requester_email: this.requesterEmail || "-",
          unique_code: this.claims[0]?.uniqueCode || "-",
        };

        console.log("Prepared API Data:", apiData);

        // Step 3: VALIDATE the apiData before sending
        this.validateClaimPayload(apiData);

        // Step 4: Send InsertClaimDetails
        const response = await axios.post("http://172.28.28.116:6239/api/User/InsertClaimDetails", apiData);

        if (response.status === 200 || response.status === 201) {
          if (response.data.status_code === "400") {
            throw new Error(response.data.message);
          }
          
          console.log("InsertClaimDetails success!", response.data);

          // Step 5: Continue to send detailed forms
          await this.sendToAPI();

          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Claim submitted successfully.',
          });

          // Maybe reset form if needed
          // this.resetForm();

        } else {
          throw new Error(`Unexpected response: ${response.status}`); 
        }
      } catch (error) {
        console.error("Error submitting claim:", error.message);
        Swal.fire({
          icon: 'error',
          title: 'Submission Failed',
          text: error.message,
        });
      } finally {
        this.loading = false;
      }
    },

    validateClaimPayload(apiData) {
      const requiredFields = [
        "name", "company_name", "department", "designation_title",
        "reference_number", "report_name", "grand_total",
        "requester_id", "employee_id", "requester_email", "unique_code"
      ];
      requiredFields.forEach(field => {
        if (!apiData[field] || apiData[field] === "-") {
          throw new Error(`Missing required field: ${field}`);
        }
      });
      if (typeof apiData.grand_total !== "number" || isNaN(apiData.grand_total)) {
        throw new Error("Invalid grand_total format");
      }
    },
    async sendToAPI() {
      const groupedClaims = this.dataclaims.reduce((acc, claim) => {
        if (!acc[claim.tabTitle]) {
          acc[claim.tabTitle] = [];
        }
        acc[claim.tabTitle].push(claim);
        return acc;
      }, {});

      for (const title in groupedClaims) {
        if (Object.hasOwnProperty.call(groupedClaims, title)) {
          const claimsToSend = groupedClaims[title];

          try {
            switch (title.toLowerCase()) {
              case "local travelling":
                for (const claim of claimsToSend) {
                  const uniqueCodeLT = this.generateUniqueCode(claim.tabTitle);
                  const payload = {
                    mileage_km: claim.MileageKMLT || 0,
                    starting_point: claim.LocationStart || "-",
                    end_point: claim.LocationEnd || "-",
                    date_event: claim.dateLT || "-",
                    park_fee: claim.ParkingLT || 0,
                    // petrol: claim.petrolCharged || 0,
                    // evCharged: claim.evCharged || 0,
                    toll_fee: claim.TollLT || 0,
                    total_fee: claim.totalRM || 0,
                    fare: claim.FareRMLT || 0,
                    transport_specification: claim.TransportLT.toLowerCase() === "personal transport"
                      ? claim.TransportSpec
                      : claim.PublicTransportSpec || "-",
                    requester_id: this.userDetails.userId || "-",
                    unique_code: uniqueCodeLT || "-",
                    reference_number: this.serialnumber || "-",
                    transport_mode: claim.TransportLT || "-",
                    trip_mode: claim.tripwayLT || "-",
                    total_mileage: claim.MileageRMLT || 0,
                    return_date: claim.ReturndateLT || "-",
                    meal_allowance: String(claim.MealAllowanceLT || "-"),
                    accommodation: claim.AccommodationLT || "-",
                    vehicle_no:claim.transportNumberPlate || "-",
                    vehicle_model:claim.transportModel || "-",
                    type_petrol:claim.petrolType || "-",
                    petrol_perlitre:claim.petrolLitre || "0",
                  };
                  console.log("Local Travelling Payload :", payload);

                  const axiosInstance = axios.create({
                    baseURL: " http://172.28.28.116:6239/api/User/InsertLocalOutstation",
                  });

                  await axiosInstance.post("/", payload);

                  const fileUploads = [
                    { type: "UploadLT", files: claim.UploadLT },
                    { type: "UploadParkingLT", files: claim.UploadParkingLT },
                    { type: "UploadTollLT", files: claim.UploadTollLT },
                    { type: "UploadFareRMLT", files: claim.UploadFareRMLT },
                    { type: "UploadMileageRMLT", files: claim.UploadMileageRMLT },
                  ];

                  for (const { type, files } of fileUploads) {
                    if (files && files.length > 0) {
                      await this.uploadFiles(files, this.userDetails.userId, uniqueCodeLT);
                    }
                  }
                }
                break;

              case "overseas travelling":
                for (const claim of claimsToSend) {
                  const uniqueCodeOT = this.generateUniqueCode(claim.tabTitle);
                  const payload = {
                    requester_id: this.userDetails.userId || "-",
                    description: claim.PurposeOT || "-",
                    meal_allowance: String(claim.MealAllowanceOT || 0),
                    date_event: claim.dateOT || "-",
                    total_fee: claim.combinedTotal ||
                      (parseFloat(claim.MealAllowanceOT) || 0) +
                      ((claim.otherExpenses || []).reduce((sum, e) => sum + (parseFloat(e.amount) || 0), 0)),
                    reference_number: this.serialnumber || "-",
                    unique_code: uniqueCodeOT || "-",
                    return_date: claim.ReturendateOT || "-",
                    accommodation: claim.AccommodationOT || "-",
                    oem: claim.otherExpenses
                      ? claim.otherExpenses.map((expense) => ({
                          name: expense.name || "-",
                          amount: expense.amount || 0,
                          description: expense.description || "-",
                          foreign_currency: expense.ForeignCurrencyAccommodationOT || "-",
                          exchange_rate: parseFloat(expense.ExchangeRateAccommodationOT) || 0,
                          currency_total: parseFloat(expense.AmountforAccommodationOT) || 0,
                        }))
                      : [],
                  };
                  console.log("Overseas Travelling Payload :", payload);

                  const axiosInstance = axios.create({
                    baseURL: " http://172.28.28.116:6239/api/User/InsertOverseasOutstation",
                  });

                  await axiosInstance.post("/", payload);

                  if (claim.UploadOT && claim.UploadOT.length > 0) {
                    await this.uploadFiles(claim.UploadOT, this.userDetails.userId, uniqueCodeOT);
                  }

                  if (claim.otherExpenses && claim.otherExpenses.length > 0) {
                    const filesToUpload = claim.otherExpenses.flatMap((expense) => expense.files || []);
                    if (filesToUpload.length > 0) {
                      await this.uploadFiles(filesToUpload, this.userDetails.userId, uniqueCodeOT);
                    }
                  }
                }
                break;

              case "entertainment":
                for (const claim of claimsToSend) {
                  const uniqueCodeE = this.generateUniqueCode(claim.tabTitle);
                  const payload = {
                    description: claim.ReferenceE,
                    reference_number: this.serialnumber,
                    date_event: claim.dateE,
                    entertainment_type: claim.OtherTypeofEntertainmentE || claim.TypeofEntertainmentE,
                    venue_name: claim.VenueE,
                    company_name: claim.CompanyE,
                    total_fee: parseFloat(claim.AmountRME),
                    requester_id: this.userDetails.userId,
                    unique_code: uniqueCodeE,
                    participants: claim.attendees
                      ? claim.attendees.map((participant) => ({
                          name: participant.name,
                          company_Name: participant.company_Name || "",
                          emp_id: "-",
                          status: "-",
                        }))
                      : [],
                  };
                  console.log("Entertainment Payload :", payload);

                  const axiosInstance = axios.create({
                    baseURL: "http://172.28.28.116:6165/api/User/InsertEntertainment",
                  });

                  await axiosInstance.post("/", payload);

                  if (claim.UploadE && claim.UploadE.length > 0) {
                    await this.uploadFiles(claim.UploadE, this.userDetails.userId, uniqueCodeE);
                  }
                }
                break;

              case "staff refreshment":
                for (const claim of claimsToSend) {
                  const uniqueCodeSR = this.generateUniqueCode(claim.tabTitle);
                  const payload = {
                    refreshment_type: claim.OtherTypeofStaffRefreshmentSR || claim.TypeofRefreshmentSR,
                    date_event: claim.dateSR,
                    company_name: claim.CompanySR,
                    venue_name: claim.VenueSR,
                    reference_type: claim.ReferenceSR,
                    total_fee: claim.AmountRMSR,
                    reference_number: this.serialnumber,
                    unique_code: uniqueCodeSR,
                    requester_id: this.userDetails.userId,
                    sim: claim.staffInvolved
                      ? claim.staffInvolved.map((participant) => ({
                          company_name: participant.companyName,
                          name: participant.name,
                          department: participant.department,
                        }))
                      : [],
                  };
                  console.log("Staff Refreshment Payload :", payload);

                  const axiosInstance = axios.create({
                    baseURL: " http://172.28.28.116:6239/api/User/InsertStaffRefreshment",
                  });

                  await axiosInstance.post("/", payload);

                  if (claim.UploadSR && claim.UploadSR.length > 0) {
                    await this.uploadFiles(claim.UploadSR, this.userDetails.userId, uniqueCodeSR);
                  }
                }
                break;

              case "others":
                for (const claim of claimsToSend) {
                  const uniqueCodeOthers = this.generateUniqueCode(claim.tabTitle);
                  const payload = {
                    expense_date: claim.dateOthers,
                    amount: parseFloat(claim.AmountRMOthers).toFixed(2),
                    description: claim.DescriptionOthers,
                    unique_code: uniqueCodeOthers,
                    total_fee: parseFloat(claim.totalRM).toFixed(2),
                    reference_number: this.serialnumber,
                    requester_id: this.userDetails.userId,
                    expense_name: claim.ExpenseNameOthers,
                  };
                  console.log("Others Payload :", payload);

                  const axiosInstance = axios.create({
                    baseURL: " http://172.28.28.116:6239/api/User/InsertOthers",
                  });

                  await axiosInstance.post("/", payload);

                  if (claim.UploadOthers && claim.UploadOthers.length > 0) {
                    await this.uploadFiles(claim.UploadOthers, this.userDetails.userId, uniqueCodeOthers);
                  }
                }
                break;

              case "handphone bill reimbursement":
                for (const claim of claimsToSend) {
                  const uniqueCodeHR = this.generateUniqueCode(claim.tabTitle);
                  const payload = {
                    reference_number: this.serialnumber,
                    date_claim: this.todayFormatted(),
                    claim_month: claim.MonthHR,
                    claim_year: `${claim.YearHR}`,
                    bank_name: claim.BankNameHR,
                    bank_holder: claim.AccHolderNameHR,
                    bank_account: String(claim.AccBankNumberHR),
                    claim_amount: claim.totalRM,
                    ic_number: claim.icNumber,
                    requester_id: this.userDetails.userId,
                    unique_code: uniqueCodeHR,
                  };

                  console.log("Handphone Bill Reimbursement Payload :", payload);

                  const axiosInstance = axios.create({
                    baseURL: "http://172.28.28.116:6165/api/User/InsertHandphoneReimburse",
                  });

                  await axiosInstance.post("/", payload);

                  if (claim.UploadHR && claim.UploadHR.length > 0) {
                    await this.uploadFiles(claim.UploadHR, this.userDetails.userId, uniqueCodeHR);
                  }
                }
                break;

              case "medical bill reimbursement":
                for (const claim of claimsToSend) {
                  const uniqueCodeML = this.generateUniqueCode(claim.tabTitle);
                  const payload = {
                    reference_number: this.serialnumber || "-",
                    date_leave_taken: claim.dateML,
                    reason: claim.ReasonML || "-",
                    medical_category: claim.MedicalCategoryML,
                    clinic_selection: String(claim.ClinicSelectionML || "-"),
                    bank_name: claim.BankNameML,
                    bank_holder: claim.AccHolderNameML,
                    bank_account: String(claim.AccBankNumberML),
                    claim_amount: String(claim.ClaimsAmountML),
                    clinic_name: String(
                      claim.OtherClinicSpecML
                        ? claim.OtherClinicSpecML
                        : claim.ClinicSelectionML || "-"
                    ),
                    reason_different: claim.OtherClinicReasonML || "-",
                    requester_id: this.userDetails.userId,
                    ic_number: claim.icNumber,
                    unique_code: uniqueCodeML,
                  };

                  const axiosInstance = axios.create({
                    baseURL: "http://172.28.28.116:6165/api/User/InsertMedicalLeave",
                  });

                  await axiosInstance.post("/", payload);

                  if (claim.UploadML && claim.UploadML.length > 0) {
                    await this.uploadFiles(claim.UploadML, this.userDetails.userId, uniqueCodeML);
                  }
                }
                break;

              default:
                console.error(`No endpoint found for ${title}`);
                break;
            }
          } catch (error) {
            console.error(`Error processing claims for ${title}:`, error.message);
            Swal.fire({
              icon: "error",
              title: "Submission Failed",
              text: `Failed to submit claims for ${title}. Please try again.`,
              confirmButtonColor: "#3085d6",
              confirmButtonText: "OK",
            });
          }
        }
      }

      Swal.fire({
        icon: "success",
        title: "Submitted Successfully!",
        text: "Your claims have been submitted.",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: true,
        confirmButtonText: "OK",
        confirmButtonColor: "#3085d6",
      });

      this.$router.push({ name: "eclaimhomepages" });
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
      if (!files || !Array.isArray(files) || files.length === 0) {
        console.error("No files to upload or invalid file list.");
        return;
      }

      const uploadEndpoint = `https://esvcportal.pktgroup.com/api/file/api/Files/MultiUploadImage/${userId}/${uniqueCode}`;
      const formData = new FormData();

      // Append all files under the same key
      files.forEach((file) => {
        formData.append("filecollection", file);
      });

      try {
        const response = await axios.post(uploadEndpoint, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          // Optional: You can add onUploadProgress to track progress
          // onUploadProgress: progressEvent => {
          //   const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          //   console.log(`Upload progress: ${percentCompleted}%`);
          // }
        });

        console.log("Files uploaded successfully:", response.data);
        console.log("Backend message:", response.data.message);

        // Optional: show a success message (if you use a toast/snackbar)
        // this.$toast.success("Files uploaded successfully!");

        // Optional: Clear form state
        if (typeof formStore !== "undefined" && formStore.clearFormData) {
          formStore.clearFormData();
        }

        // Refresh the file list (if needed)
        if (typeof this.ShowFile === "function") {
          this.ShowFile({ userId, uniqueCode });
        }

      } catch (error) {
        console.error("Error uploading files:", error);
        // Optional: Show error to user
        // this.$toast.error("Upload failed. Please try again.");
      }
    },


    async sendFiles(userId, uniqueCode) {
      const files = this.formData.fileUpload;

      if (!files || !files.length) {
        console.error("No files to upload.");
        return;
      }

      await this.uploadFiles(files, userId, uniqueCode);
    },

    async uploadFilesclaims(files, userId, uniqueCode) {
      // console.log("Files parameter received:", files);
      // console.log("User ID:", userId);
      // console.log("Unique Code:", uniqueCode);
      // console.log("Files type:", typeof files);
      // console.log("Is Array:", Array.isArray(files));

      if (!files || !Array.isArray(files)) {
        console.error("The files parameter is not an array or is undefined.");
        return;
      }
      const base_URL = process.env.VUE_APP_API_BASE_URL_EC_FILE_PROD_LX;
      const uploadEndpoint = `${base_URL}/Files/MultiUploadImage/${userId}/${uniqueCode}`;
      // console.log("Upload Endpoint:", uploadEndpoint);
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
        //console.log("Files uploaded successfully:", response.data);

        formStore.clearFormData();
      } catch (error) {
        console.error("Error uploading files:", error);
      }
    },

    deleteForm(index) {
      // console.log("Deleting index:", index);
      // console.log("Current dataclaims array:", this.dataclaims);

      // Check if dataclaims is empty
      if (!this.dataclaims || this.dataclaims.length === 0) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No claims available to delete. Please add a claim first.",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
        return;
      }

      // Check if index is valid
      if (index === null || index < 0 || index >= this.dataclaims.length) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Invalid index or claim not found. Please try again.",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
        return;
      }

      // Get the deleted claim
      const deletedClaim = this.dataclaims[index];
      this.dataclaims.splice(index, 1);

      // Add the deleted claim amount back to the correct category's limit
      const claimAmount = deletedClaim.ClaimsAmountML || deletedClaim.ClaimsAmountHR || 0;
      const category = deletedClaim.MedicalCategoryML || "Outpatient";

      if (deletedClaim.tabTitle === "Medical Bill Reimbursement") {
        if (category === "Outpatient") {
          let remainingOutpatient = parseFloat(localStorage.getItem("remaining_limit_outpatient")) || 0;
          remainingOutpatient += claimAmount; // Add the claimAmount back
          localStorage.setItem("remaining_limit_outpatient", remainingOutpatient);
        } else if (category === "Medical Check-Up" || category === "Dental") {
          let remainingMedicalDental = parseFloat(localStorage.getItem("remaining_limit_medicaldental")) || 0;
          remainingMedicalDental += claimAmount; // Add the claimAmount back
          localStorage.setItem("remaining_limit_medicaldental", remainingMedicalDental);
        }
      } else if (deletedClaim.tabTitle === "Handphone Bill Reimbursement") {
        let remainingLimitAmount = parseFloat(localStorage.getItem("remaining_limit_amount")) || 0;
        remainingLimitAmount += claimAmount; // Add the claimAmount back
        localStorage.setItem("remaining_limit_amount", remainingLimitAmount);
      }

      // Emit the claimDeleted event
      this.$emit("claimDeleted", {
        claimAmount,
        category,
      });

      // console.log("Deleted claim amount:", claimAmount);
      // console.log("Deleted claim category:", category);
      // console.log("Tab title:", deletedClaim.tabTitle);
      // console.log("Claim deleted successfully:", deletedClaim);

      this.isClickModal = false; // Close the modal
    },

    async addClaim(formData) {
      try {
        // Simply add the validated form data to dataclaims array
        this.dataclaims.push(formData);
        // console.log("Data Claims added:", this.dataclaims);
      } catch(error) {
        console.error("error", error);
        throw error;
      }
    }
  },
};
</script>
