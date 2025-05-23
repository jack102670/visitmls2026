<template>
  <transition name="overlay">
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-50"
      @click="closeSlideOver"
    ></div>
  </transition>
  <transition name="slide">
    <div
      v-if="isOpen"
      class="fixed inset-y-0 right-0 w-1/3 bg-white dark:bg-gray-800 z-50 p-6 overflow-y-auto"
    >
      <div class="flex justify-end items-center mb-2">
        <button
          @click="closeSlideOver"
          class="text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
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
      <div class="flex justify-between items-center py-2">
        <p class="text-lg font-bold text-gray-800 dark:text-gray-200">
          Update {{ claim.tabTitle }} Details
        </p>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="grid grid-cols-8 gap-2 w-full">
          <div class="col-span-4">
            <label for="date_event" class="font-medium text-sm">Date </label>
            <input
              type="date"
              id="date_event"
              v-model="date_event"
              class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div class="col-span-4">
            <label for="return_date" class="font-medium text-sm"
              >Return date</label
            >
            <input
              type="date"
              id="return_date"
              v-model="return_date"
              class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div class="col-span-4">
            <label for="departure_airport" class="font-medium text-sm">Flight Departure Airport</label>
            <input type="text" id="departure_airport" v-model="overseas.departure_airport"
              class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
          </div>
          <div class="col-span-4" >
            <label for="arrival_airport" class="font-medium text-sm" >Flight Arrival Airport</label>
            <input type="text" id="arrival_airport" v-model="overseas.arrival_airport"
              class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
          </div>

          <div class="col-span-4">
            <label for="class_airline" class="font-medium text-sm" >Flight Class</label>
            <select id="class_airline" v-model="overseas.class_airline" class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
            <option v-for="(specify, index) in flightClass" :key="index" :value="specify">{{ specify }}</option>
            </select>
          </div>

          <div class="col-span-4">
            <label for="description" class="font-medium text-sm"
              >Description</label
            >
            <input
              type="text"
              id="description"
              v-model="overseas.description"
              class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div class="col-span-8">
            <label for="transport_specification" class="font-medium text-sm" >Transport Specification</label>
            <input v-if="overseas.transport_mode === 'Public Transport'" type="text" id="transport_specification" v-model="overseas.transport_specification"
            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
            <!-- Show dropdown when mode is 'Personal' -->
            <select v-else-if="overseas.transport_mode === 'Personal Transport' " id="transport_specification" v-model="overseas.transport_specification"
            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
            <option v-for="(specify, index) in transportSpecifications" :key="index" :value="specify">{{ specify }}</option>
            </select>
          </div>

        <div class="col-span-4">
          <label for="vehicle_no" class="font-medium text-sm">Vehicle Registration Number</label>
          <input type="text" id="vehicle_no" v-model="overseas.vehicle_no"
          class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
        </div>

        <div class="col-span-4">
          <label for="vehicle_model" class="font-medium text-sm">Vehicle Model</label>
          <input type="text" id="vehicle_model" v-model="overseas.vehicle_model"
          class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
        </div>

        <div class="col-span-4">
          <label for="starting_point" class="font-medium text-sm">Starting Point</label>
          <input type="text" id="starting_point" v-model="overseas.starting_point"
          class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
        </div>

        <div class="col-span-4">
          <label for="end_point" class="font-medium text-sm">End Point</label>
          <input type="text" id="end_point" v-model="overseas.end_point"
          class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
        </div>

        <div class="col-span-4" v-if="overseas.trip_mode === 'Round Trip'">
          <label for="accommodation" class="font-medium text-sm" >Accommodation</label>
          <input type="text" id="accommodation" v-model="overseas.accommodation"
          class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
        </div>

        <div class="col-span-4">
          <label for="meal_allowance" class="font-medium text-sm"
            >Meal Allowance</label
          >
          <input
            type="text"
            id="meal_allowance"
            v-model="overseas.meal_allowance"
            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div class="col-span-4">
                        <label for="checkin_date" class="font-medium text-sm">Check In Date</label>
                        <input type="date" id="checkin_date" v-model="checkin_date"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>
                    <div class="col-span-4" >
                        <label for="checkout_date" class="font-medium text-sm" >Check Out Date</label>
                        <input type="date" id="checkout_date" v-model="checkout_date"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>

                    <div class="col-span-4">
                        <label for="number_of_nights" class="font-medium text-sm">Number of Nights</label>
                        <input type="text" id="number_of_nights" v-model="overseas.number_of_nights"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>

                    <div class="col-span-4">
                        <label for="number_of_rooms" class="font-medium text-sm">Number of Rooms</label>
                        <input type="text" id="number_of_rooms" v-model="overseas.number_of_rooms"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>

                    <div class="col-span-8" >
                        <label for="city" class="font-medium text-sm" >City (Hotel)</label>
                        <input type="text" id="city" v-model="overseas.city"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>


                    <div class="col-span-8" >
                        <label for="mileage_km" class="font-medium text-sm" >Mileage/ Kilometer(KM)</label>
                        <input type="text" id="mileage_km" v-model="overseas.mileage_km"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>

                    <div class="col-span-4">
                        <label for="type_petrol" class="font-medium text-sm" >Type of Petrol</label>
                            <select id="type_petrol" v-model="overseas.type_petrol" class="mt-1 text-xs block text-xs w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                            <option v-for="(type, index) in petrolTypes" :key="index" :value="type">{{ type }}</option>
                        </select>
                    </div>

                    <div class="col-span-4">
                        <label for="type_petrol" class="font-medium text-sm" >Petrol(Litre)</label>
                            <input type="text" id="petrol_perlitre" v-model="overseas.petrol_perlitre"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>

                    <div class="col-span-4">
                    <label for="total_mileage" class="font-medium text-sm">Petrol/EV(RM)</label>
                    <input
                        type="text"
                        id="total_mileage"
                        v-model="overseas.total_mileage"
                        class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />

                    <!-- Upload field shown if mileage entered and no files yet -->
                    <div v-if="overseas.total_mileage && !categorizedFiles.mileage.length" class="mt-2">
                        <input
                        type="file"
                        id="newFile"
                        @change="uploadFiles($event, 'mileage')"
                        class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                        <span v-if="selectedFileName" class="text-xs text-gray-600 mt-1 block">
                        Selected file: {{ selectedFileName }}
                        </span>
                    </div>

                    <!-- Uploaded mileage files shown if any -->
                    <div v-if="overseas.total_mileage && categorizedFiles.mileage.length" class="mt-4">
                        <label class="font-medium text-sm">Uploaded Petrol Files:</label>
                        <ul class="mt-1 text-xs text-blue-600 underline">
                        <li v-for="(file, index) in categorizedFiles.mileage" :key="index" class="flex items-center gap-2">
                            <a :href="typeof file === 'string' ? file : '#'" target="_blank">
                            {{ typeof file === 'string' ? file.split('/').pop() : file.name }}
                            </a>
                            <a @click="deleteFile(index, 'mileage')" class="text-red-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L6.26 5.79m8.788 0H6.26m12.804 0a2.25 2.25 0 00-2.73-1.684M6.26 5.79a2.25 2.25 0 002.73 1.684m0 0a2.25 2.25 0 00-2.73 1.684m0 0a2.25 2.25 0 012.73 1.684" />
                                    </svg>
                                </a>
                        </li>
                        </ul>
                    </div>
                    </div>


                    

                    <div class="col-span-4">
                        <label for="park_fee" class="font-medium text-sm" >Parking</label>
                        <input type="text" id="park_fee" v-model="overseas.park_fee"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"/>

                    <!-- Upload field shown if parking entered and no files yet -->
                    <div v-if="overseas.park_fee && !categorizedFiles.parking.length" class="mt-2">
                        <input
                        type="file"
                        id="newFile"
                        @change="uploadFiles($event, 'parking')"
                        class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                        <span v-if="selectedFileName" class="text-xs text-gray-600 mt-1 block">
                        Selected file: {{ selectedFileName }}
                        </span>
                    </div>

                    <!-- Uploaded parking files shown if any -->
                    <div v-if="overseas.park_fee && categorizedFiles.parking.length" class="mt-4">
                        <label class="font-medium text-sm">Uploaded Parking Files:</label>
                        <ul class="mt-1 text-xs text-blue-600 underline">
                        <li v-for="(file, index) in categorizedFiles.parking" :key="index" class="flex items-center gap-2">
                            <a :href="typeof file === 'string' ? file : '#'" target="_blank">
                            {{ typeof file === 'string' ? file.split('/').pop() : file.name }}
                            </a>
                            <a @click="deleteFile(index, 'parking')" class="text-red-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L6.26 5.79m8.788 0H6.26m12.804 0a2.25 2.25 0 00-2.73-1.684M6.26 5.79a2.25 2.25 0 002.73 1.684m0 0a2.25 2.25 0 00-2.73 1.684m0 0a2.25 2.25 0 012.73 1.684" />
                                    </svg>
                                </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    

                    <div class="col-span-4" v-if="overseas.transport_mode !== 'Public Transport'">
                        <label for="toll_fee" class="font-medium text-sm" >Toll/Touch' n Go(RM)</label>
                        <input type="text" id="toll_fee" v-model="overseas.toll_fee"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"/>

                    <!-- Upload field shown if toll entered and no files yet -->
                    <div v-if="overseas.toll_fee && !categorizedFiles.toll.length" class="mt-2">
                        <input
                        type="file"
                        id="newFile"
                        @change="uploadFiles($event, 'toll')"
                        class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                        <span v-if="selectedFileName" class="text-xs text-gray-600 mt-1 block">
                        Selected file: {{ selectedFileName }}
                        </span>
                    </div>

                    <!-- Uploaded toll files shown if any -->
                    <div v-if="overseas.toll_fee && categorizedFiles.toll.length" class="mt-4">
                        <label class="font-medium text-sm">Uploaded Toll Files:</label>
                        <ul class="mt-1 text-xs text-blue-600 underline">
                        <li v-for="(file, index) in categorizedFiles.toll" :key="index" class="flex items-center gap-2">
                            <a :href="typeof file === 'string' ? file : '#'" target="_blank">
                            {{ typeof file === 'string' ? file.split('/').pop() : file.name }}
                            </a>
                            <a @click="deleteFile(index, 'toll')" class="text-red-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L6.26 5.79m8.788 0H6.26m12.804 0a2.25 2.25 0 00-2.73-1.684M6.26 5.79a2.25 2.25 0 002.73 1.684m0 0a2.25 2.25 0 00-2.73 1.684m0 0a2.25 2.25 0 012.73 1.684" />
                                    </svg>
                                </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    

                    <div class="col-span-4" v-if="overseas.transport_mode === 'Public Transport'">
                        <label for="fare" class="font-medium text-sm" >Fare(RM)</label>
                        <input type="text" id="fare" v-model="overseas.fare"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"/>

                    <!-- Upload field shown if fare entered and no files yet -->
                    <div v-if="overseas.fare && !categorizedFiles.fare.length" class="mt-2">
                        <input
                        type="file"
                        id="newFile"
                        @change="uploadFiles($event, 'fare')"
                        class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                        <span v-if="selectedFileName" class="text-xs text-gray-600 mt-1 block">
                        Selected file: {{ selectedFileName }}
                        </span>
                    </div>

                    <!-- Uploaded toll files shown if any -->
                    <div v-if="overseas.fare && categorizedFiles.fare.length" class="mt-4">
                        <label class="font-medium text-sm">Uploaded Fare Files:</label>
                        <ul class="mt-1 text-xs text-blue-600 underline">
                        <li v-for="(file, index) in categorizedFiles.fare" :key="index" class="flex items-center gap-2">
                            <a :href="typeof file === 'string' ? file : '#'" target="_blank">
                            {{ typeof file === 'string' ? file.split('/').pop() : file.name }}
                            </a>
                            <a @click="deleteFile(index, 'fare')" class="text-red-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L6.26 5.79m8.788 0H6.26m12.804 0a2.25 2.25 0 00-2.73-1.684M6.26 5.79a2.25 2.25 0 002.73 1.684m0 0a2.25 2.25 0 00-2.73 1.684m0 0a2.25 2.25 0 012.73 1.684" />
                                    </svg>
                                </a>
                        </li>
                        </ul>
                    </div>
                    </div>



                    <div class="col-span-4">
                      <label class="font-medium text-sm">Uploaded Files</label>
                    <div v-if="overseas.files" class="mt-2">
                        <!-- <p class="text-xs text-gray-600">Click on a file to view or delete:</p> -->
                        <ul class="list-disc list-inside">
                        <li v-for="(file, index) in categorizedFiles.other" :key="index" class="flex items-center space-x-2">
                            <a :href="typeof file === 'string' ? file : '#'" target="_blank" class="text-blue-500 hover:underline text-xs">
                                {{ typeof file === 'string' ? file.split('/').pop() : file.name }}
                            </a>

                            <a @click="deleteFile(index, 'other')" class="text-red-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L6.26 5.79m8.788 0H6.26m12.804 0a2.25 2.25 0 00-2.73-1.684M6.26 5.79a2.25 2.25 0 002.73 1.684m0 0a2.25 2.25 0 00-2.73 1.684m0 0a2.25 2.25 0 012.73 1.684" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                    </div>

                    <div v-if="overseas.files" class="mt-4">
                      <input
                          type="file"
                          id="newFile"
                          @change="uploadFiles($event, 'other')"  
                          class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                        <!-- <span v-if="selectedFileName" class="text-xs text-gray-600 mt-1 block">
                            Selected file: {{ selectedFileName }}
                        </span> -->
                    </div>
                    </div>

                    <div class="col-span-4">
                      <label for="total_fee" class="font-medium text-sm">Total Amount(RM)</label>
                      <input type="text" id="total_fee" v-model="totalFee" readonly
                          class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 cursor-not-allowed">
                    </div>

          <div class="col-span-8">
            <label class="font-medium text-sm">Other Expenses </label>
            <button
              type="button"
              @click="newExpenses"
              class="mt-1 text-xs bg-blue-900 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
            >
              Add
            </button>
            <div class="overflow-x-auto border border-gray-300 rounded-md mt-2">
              <table
                class="min-w-full bg-white dark:bg-gray-800 border-collapse"
              >
                <thead>
                  <tr
                    class="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    <th class="py-2 px-4 text-left border text-sm font-medium">
                      #
                    </th>
                    <th class="py-2 px-4 text-left border text-sm font-medium">
                      Expense Name
                    </th>
                    <th class="py-2 px-4 text-left border text-sm font-medium">
                      Description
                    </th>
                    <th class="py-2 px-4 text-left border text-sm font-medium">
                      Foreign Currency
                    </th>
                    <th class="py-2 px-4 text-left border text-sm font-medium">
                      Exchange Rate
                    </th>
                    <th class="py-2 px-4 text-left border text-sm font-medium">
                      Amount(Foreign Currency)
                    </th>
                    <th class="py-2 px-4 text-left border text-sm font-medium">
                      Amount(RM)
                    </th>
                    <th class="py-2 px-4 text-left border text-sm font-medium">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(expenses, index) in paginatedExpenses || []"
                    :key="expenses.id"
                    class="border-b dark:border-gray-600"
                  >
                    <td class="py-2 px-4 text-xs">
                      {{ index + 1 + (currentPage - 1) * pageSize }}
                    </td>
                    <td class="py-2 px-4 text-xs">{{ expenses.name }}</td>
                    <td class="py-2 px-4 text-xs">
                      {{ expenses.description }}
                    </td>
                    <td class="py-2 px-4 text-xs">
                      {{ expenses.foreign_currency }}
                    </td>
                    <td class="py-2 px-4 text-xs">
                      {{ expenses.exchange_rate }}
                    </td>
                    <td class="py-2 px-4 text-xs">
                      {{ expenses.currency_total }}
                    </td>
                    <td class="py-2 px-4 text-xs">{{ expenses.amount }}</td>
                    <td class="py-2 px-4 text-xs">
                      <!-- Edit Button -->
                      <a
                        @click="editExpenses(expenses)"
                        class="bg-green-600 hover:bg-green-700 text-white transition duration-300 px-2 py-1 rounded-md cursor-pointer inline-flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M11 4h2m2 0h.01M13 4l7 7-9 9H4v-9l9-9z"
                          />
                        </svg>
                      </a>
                      <a
                        @click="deleteExpenses(expenses)"
                        class="bg-red-600 hover:bg-red-700 text-white transition duration-300 px-2 py-1 rounded-md cursor-pointer inline-flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </a>
                    </td>
                  </tr>
                  <tr class="font-semibold bg-gray-100 dark:bg-gray-700">
                    <td colspan="5" class="py-2 px-4 text-right text-sm">
                      Total Amount
                    </td>
                    <td class="py-2 px-4 text-sm">RM {{ totalAmount }}</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="flex justify-between items-center mt-3">
              <button
                @click="prevPage"
                :disabled="currentPage === 1"
                class="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span class="text-sm text-gray-700 dark:text-gray-300"
                >Page {{ currentPage }} of {{ totalPages }}</span
              >
              <button
                @click="nextPage"
                :disabled="currentPage === totalPages"
                class="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>

          <div class="col-span-8">
            <label for="comment" class="font-medium text-sm">Comment</label>
            <textarea
              type="text"
              id="comment"
              v-model="overseas.comment"
              readonly
              class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-50 bg-gray-100 cursor-not-allowed"
            ></textarea>
          </div>

          <div class="col-span-8 justify-end items-center flex space-x-2 py-4">
            <button
                class="w-full bg-red-600 text-white border-2 border-red-600 hover:bg-red-700 hover:border-red-700 font-bold py-2 px-4 rounded-md"
                @click="closeSlideOver"
            >
                Cancel
            </button>

            <button
                type="submit"
                class="w-full bg-blue-900 text-white hover:bg-blue-900 font-bold py-2 px-4 rounded"
            >
                Update
            </button>
          </div>
        </div>
      </form>
      <transition name="fade">
        <div
          v-if="isExpensesFormOpen"
          class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
          <div class="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 class="text-lg font-bold mb-4">Edit Expenses</h2>
            <div>
              <label class="block text-sm font-medium">Expenses Name</label>
              <input
                type="text"
                v-model="selectedExpenses.name"
                class="w-full border rounded p-2"
              />
            </div>

            <div>
              <label class="block text-sm font-medium">Description</label>
              <input
                type="text"
                v-model="selectedExpenses.description"
                class="w-full border rounded p-2"
              />
            </div>

            <div>
              <label class="block text-sm font-medium">Foreign Currency</label>
              <select
                v-model="selectedExpenses.foreign_currency"
                class="w-full border rounded p-2"
                :disabled="isForeignFieldsReadOnly"
              >
                <option value="" disabled>Select Currency</option>
                <option
                  v-for="currency in currencyOptions"
                  :key="currency.value"
                  :value="currency.value"
                >
                  {{ currency.label }}
                </option>
                <option
                  v-for="currency in currencyOptions"
                  :key="currency.value"
                  :value="currency.value"
                >
                  {{ currency.label }}
                </option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium">Exchange Rate</label>
              <input
                type="text"
                v-model="selectedExpenses.exchange_rate"
                @input="updateAmountsInRM(selectedExpenses)"
                class="w-full border rounded p-2"
                :readonly="isForeignFieldsReadOnly"
              />
            </div>

            <div>
              <label class="block text-sm font-medium"
                >Amount(Foreign Currency)</label
              >
              <input
                type="text"
                v-model="selectedExpenses.currency_total"
                @input="updateAmountsInRM(selectedExpenses)"
                class="w-full border rounded p-2"
                :readonly="isForeignFieldsReadOnly"
              />
            </div>

            <div>
              <label class="block text-sm font-medium">Amount(RM)</label>
              <input
                type="text"
                v-model="selectedExpenses.amount"
                class="w-full border rounded p-2"
              />
            </div>

            <div class="flex justify-end mt-4 space-x-2">
              <button
                @click="isExpensesFormOpen = false"
                class="bg-red-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                @click="saveExpenses(selectedExpenses)"
                class="bg-[#160959] text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
// import { getEntertainment, updateEntertainment } from '@/api/EclaimAPI';
import Swal from "sweetalert2";
import axios from "axios";
import { id } from "intl-tel-input/i18n";
import { isElement } from "lodash";

export default {
    emits: ['close', 'closeSlideOver', 'refresh-claims'],
    props: {
        isOpen: {
            type: Boolean,
            required: true
        },
        claim: {
            type: Object,
            required: false
        }
    },
    data() {
        return {

            overseas: {
                description: '',
                meal_allowance: '',
                date_event: '',
                return_date: '',
                total_fee: '',
                mileage_km: '',
                starting_point: '',
                end_point: '',
                park_fee: '',
                toll_fee: '',
                fare: '',
                transport_specification: '',
                transport_mode: '',
                total_mileage: '',
                accommodation: '',
                vehicle_no: '',
                vehicle_model: '',
                type_petrol: '',
                petrol_perlitre: '',
                departure_airport: '',
                arrival_airport: '',
                class_airline: '',
                checkin_date: '',
                checkout_date: '',
                city: '',
                number_of_nights: '',
                number_of_rooms: '',
                comment: '',
                flightClass:["Business", "Economy"],
                transportSpecifications: ["Motorcycle", "Car", "Truck"],
                petrolTypes: ["Ron95", "Diesel"],
                currencyOptions: [], // For currency dropdown
                oem: [],
                files: [],



            },

            currentPage: 1,
            pageSize: 5,
            //overseas: {},
             newFiles: [],
            filesToDelete: [],
            selectedFileName: "",
            uniqueCode: "",
            requesterId: "",
            oemToDelete: [],
            isExpensesFormOpen: false,
            selectedExpenses: null,
            isEditingExpenses: false,

        }
    },
    mounted() {
        const refNo = this.$route.params.rn;

        // SAFEGUARD: Do not run if no claim passed in props
        if (!this.claim?.unique_code) {
            console.warn("No unique_code found in props.");
            return;
        }

        console.log("RefNo:", refNo);
        this.fetchOverseasData(refNo);
    },

    computed: {
        isForeignFieldsReadOnly() {
            // Only readonly when editing AND any of the fields are empty/null
            if (!this.isEditingExpenses) return false;
            const exp = this.selectedExpenses || {};
            return (
              !exp.foreign_currency ||
              exp.foreign_currency === "" ||
              exp.foreign_currency === null ||
              !exp.exchange_rate ||
              exp.exchange_rate === "" ||
              exp.exchange_rate === null ||
              !exp.currency_total ||
              exp.currency_total === "" ||
              exp.currency_total === null
            );
        },
        totalAmount() {
            return this.paginatedExpenses.reduce((sum, expenses) => {
            console.log('Each expense:', expenses);
            const value = parseFloat(expenses.amount);
            console.log('Parsed value:', value);
            return sum + (value || 0);
            }, 0).toFixed(2);
            // console.log('Total Amount:', sum);
        },
        totalFee() {
        const meal = parseFloat(this.overseas.meal_allowance) || 0;
        const petrol = parseFloat(this.overseas.total_mileage) || 0;
        const parking = parseFloat(this.overseas.park_fee) || 0;
        const toll = parseFloat(this.overseas.toll_fee) || 0;
        const fare = parseFloat(this.overseas.fare) || 0;

        const total = petrol + parking + toll + fare + meal;
        return total.toFixed(2);
        },
        date_event: {
            get() {
            const d = new Date(this.overseas.date_event);
            if (isNaN(d)) return "";
            return d.toISOString().split("T")[0];
            },
            set(value) {
            this.overseas.date_event = value;
            },
        },
        return_date: {
            get() {
            const d = new Date(this.overseas.return_date);
            if (isNaN(d)) return "";
            return d.toISOString().split("T")[0];
            },
            set(value) {
            this.overseas.return_date = value;
            },
        },
        totalPages() {
            return Math.ceil((this.overseas?.oem?.length || 0) / this.pageSize);
        },
        paginatedExpenses() {
            if (!this.overseas?.oem) {
                return [];
            }
            const start = (this.currentPage - 1) * this.pageSize;
            return this.overseas.oem.slice(start, start + this.pageSize);
        },
    },
    methods: {
        updateAmountsInRM(expenses) {
            const rate = parseFloat(expenses.exchange_rate) || 0;
            const foreign = parseFloat(expenses.currency_total) || 0;
            expenses.amount = (rate * foreign).toFixed(2);
            // this.selectedExpenses = { ...expenses };

        },

        // updateTotalFee() {
        //     const meal = parseFloat(this.overseas.meal_allowance) || 0;
        //     const total = parseFloat(this.totalAmount) || 0;
        //     this.overseas.total_fee = (meal + total).toFixed(2);
        // },
        async fetchCurrencies() {
            try {
                const response = await fetch(
                "https://gist.githubusercontent.com/ksafranski/2973986/raw/5fda5e87189b066e11c1bf80bbfbecb556cf2cc1/Common-Currency.json"
                );
                const data = await response.json();
                this.currencies = Object.values(data); // Store the currency objects

                // Map the currencies to the format required for the dropdown
                this.currencyOptions = this.currencies.map((currency) => ({
                value: `${currency.code} (${currency.symbol_native})`, // Assuming each currency has a 'code' field
                label: `${currency.code} (${currency.symbol_native})`, // Use native symbol for display
                }));
            } catch (error) {
                console.error("Error fetching currencies:", error);
            }
            },

        async newExpenses() {
            await this.fetchCurrencies();
            this.selectedExpenses = {
                // id: null,
                name: "",
                amount: "",
                description: "",
                foreign_currency: "",
                exchange_rate: "",
                currency_total: "",
        };
        this.isEditingExpenses = false;
        this.isExpensesFormOpen = true;
        },
        // async deleteExpenses(expenses) {
        //         if (expenses && expenses.id) {
        //             const confirmResult = await Swal.fire({
        //                 title: "Are you sure?",
        //                 text: "This action will permanently delete the expenses.",
        //                 icon: "warning",
        //                 showCancelButton: true,
        //                 confirmButtonColor: "#dc2626",
        //                 cancelButtonColor: "#6b7280",
        //                 confirmButtonText: "Yes, delete it!"
        //             });

        //             if (confirmResult.isConfirmed) {
        //                 try {
        //                     const response = await axios.delete(`http://172.28.28.116:6239/api/User/DeleteOverseasExpenses/${expenses.id}`);

        //                     if (response.status === 200) {
        //                         const index = this.overseas.oem.findIndex(e => e.id === expenses.id);
        //                         if (index !== -1) {
        //                             this.overseas.oem.splice(index, 1);
        //                             console.log(`Deleted expenses with ID: ${expenses.id}`);
        //                         }

        //                         Swal.fire({
        //                             title: "Deleted!",
        //                             text: "Staff has been successfully deleted.",
        //                             icon: "success",
        //                             confirmButtonColor: "#dc2626"
        //                         });
        //                     }
        //                 } catch (error) {
        //                     console.error("Failed to delete staff:", error);
        //                     Swal.fire({
        //                         title: "Error",
        //                         text: "Failed to delete staff. Please try again.",
        //                         icon: "error",
        //                         confirmButtonColor: "#dc2626"
        //                     });
        //                 }
        //             }
        //         } else {
        //             console.warn("Invalid staff object.");
        //         }
        //     },
        async deleteExpenses(expenses) {
                if (expenses && expenses.id) {
                    this.oemToDelete.push(expenses.id); // Add the ID to the array
                }
                this.overseas.oem = this.overseas.oem.filter(e => e !== expenses); // Remove from the list
                    await Swal.fire({
                        title: "Are you sure?",
                        text: "This action will permanently delete the expenses.",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#dc2626",
                        cancelButtonColor: "#6b7280",
                        confirmButtonText: "Yes, delete it!"
                    }).then(confirmResult => {
                        if(confirmResult.isConfirmed) {
                            this.overseas.oem = this.overseas.oem.filter(e => e !== expenses ) // Remove the ID from the array
                        }
             });
            },
        async editExpenses(expenses) {
            await this.fetchCurrencies();
            this.selectedExpenses = { ...expenses };
            this.isEditingExpenses = true;
            this.isExpensesFormOpen = true;
            console.log("Editing expenses:", this.selectedExpenses); // Debugging log
        },
        async saveExpenses(expenses) {
        if (!expenses.name || !expenses.amount || !expenses.description
            // || !expenses.foreign_currency || !expenses.exchange_rate || !expenses.currency_total
            ) {
            Swal.fire({
                title: "Missing Info",
                text: "Please fill in all fields.",
                icon: "warning",
                confirmButtonColor: "#dc2626"
            });
            return;
            }



        // Determine if it's an update or add
        if (!expenses.id) {
            // POST new participant

                this.overseas.oem.push({
                    ...expenses,
                    reference_number: this.overseas.reference_number
                });
            }else {
                const idx = this.overseas.oem.findIndex(e => e.id === expenses.id);
                if (idx !== -1) this.overseas.oem.splice(idx, 1, expenses);
            }


        this.selectedExpenses = null;
        this.isExpensesFormOpen = false;
},
//         async saveExpenses(expenses) {
//         if (!expenses.name || !expenses.amount || !expenses.description
//             // || !expenses.foreign_currency || !expenses.exchange_rate || !expenses.currency_total
//             ) {
//             Swal.fire({
//                 title: "Missing Info",
//                 text: "Please fill in all fields.",
//                 icon: "warning",
//                 confirmButtonColor: "#dc2626"
//             });
//             return;
//             }



//         // Determine if it's an update or add
//         if (!expenses.id) {
//             // POST new participant
//             try {
//                 console.log("Sending payload:", expenses);
//                 console.log("Reference Number:", this.expenses_refNumber);
//                 const response = await axios.post("http://172.28.28.116:6239/api/User/InsertOverseasExpenses", {
//                     reference_number: this.overseas.expenses_refNumber,
//                     oed: [
//                         {
//                             name: expenses.name,
//                             amount: isNaN(parseFloat(expenses.amount)) ? 0 : parseFloat(expenses.amount),
//                             description: expenses.description,
//                             foreign_currency: expenses.foreign_currency,
//                             exchange_rate: isNaN(parseFloat(expenses.exchange_rate)) ? 0 : parseFloat(expenses.exchange_rate),
//                             currency_total: isNaN(parseFloat(expenses.currency_total)) ? 0 : parseFloat(expenses.currency_total),
//                             // isNaN(parseFloat(this.totalFee)) ? 0 : parseFloat(this.totalFee),

//                         }
//                     ]

//                 });
//                 console.log("Sending payload:", expenses);
//                 if (response.status === 200) {
//                 const returnedExpenses = response.data.oed?.[0];
//                 if (returnedExpenses?.id) {
//                     this.overseas.oem.push(returnedExpenses); // push to oem
//                 } else {
//                     this.overseas.oem.push({
//                         ...expenses,
//                         reference_number: this.expenses_refNumber
//                     });
//                 }
//             }

//                 Swal.fire({
//                     title: "Success",
//                     text: "Other Expenses added successfully.",
//                     icon: "success",
//                     confirmButtonColor: "#dc2626"
//                 });


//             } catch (error) {
//                 console.error("Failed to add participant:", error);
//                 Swal.fire({
//                     title: "Error",
//                     text: "Failed to add other expenses. Please try again.",
//                     icon: "error",
//                     confirmButtonColor: "#dc2626"
//                 });
//             }
//         } else {
//             // Update existing participant locally
//             const index = this.overseas.oem.findIndex(e => e.id === expenses.id);
//             if (index !== -1) {
//                 this.overseas.oem.splice(index, 1, expenses);
//             }

//         }

//         this.selectedExpenses = null;
//         this.isExpensesFormOpen = false;
// },
        // saveExpenses(expenses) {
        //     console.log("Staff before saving:", expenses); // Debugging log
        //     const index = this.overseas.oem.findIndex(s => s.id === expenses.id);
        //     if (index !== -1) {
        //         this.overseas.oem.splice(index, 1, expenses); // Update existing expenses
        //         console.log("Updated expenses:", this.overseas.oem[index]); // Debugging log
        //     } else {
        //         this.overseas.oem.push(expenses);
        //     }
        //     this.selectedExpenses = null;
        //     this.isExpensesFormOpen = false;
        // },

        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        closeSlideOver() {
            this.$emit('close');
        },

             // Delete a file from the list
        deleteFile(index) {
        const deletedFile = this.overseas.files[index];
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you really want to delete this file?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#dc2626'
        }).then((result) => {
            if (result.isConfirmed) {
                // If the file is an existing file (not just uploaded in this session), mark for deletion
                if (typeof deletedFile === 'string' && !this.newFiles.find(f => f.name === deletedFile)) {
                    this.filesToDelete.push(deletedFile);
                } else {
                    // If it's a new file, remove from newFiles
                    this.newFiles = this.newFiles.filter(f => f.name !== deletedFile);
                }
                // Remove from UI
                this.overseas.files.splice(index, 1);
            }
        });
    },
        detectFileCategory(filename) {
            const upperName = filename.toUpperCase();
            if (upperName.includes("TOLL")) return "TOLL";
            if (upperName.includes("PARKING")) return "PARKING";
            if (upperName.includes("MILEAGE")) return "MILEAGE";
            if (upperName.includes("FARE")) return "FARE";
            return "SUPPORT_DOC";
        },
    
        uploadFiles(event, fileType = "") {
        const files = event?.target?.files;
        if (!files || !files.length) return;

        for (let file of files) {
            const originalName = file.name;
            const upperName = originalName.toUpperCase();

            if (fileType) {
            // Set prefix based on explicit fileType
            let prefix = "";
            switch (fileType) {
                case "mileage":
                prefix = "MILEAGE_";
                break;
                case "toll":
                prefix = "TOLL_";
                break;
                case "parking":
                prefix = "PARKING_";
                break;
                case "fare":
                prefix = "FARE_";
                break;
                default:
                prefix = "SUPPORT_DOC_";
            }

            // Rename the file with the prefix
            const newName = originalName.toUpperCase().startsWith(prefix)
            ? originalName
            : prefix + originalName;
            const renamedFile = new File([file], newName, { type: file.type });

            // Push to the specific category
            this.categorizedFiles[fileType].push(renamedFile);

            // Optionally store the selected file name for display
            this.selectedFileName = newName;

            } else {
            // Auto-categorize by file name prefix
            if (upperName.startsWith("TOLL_")) {
                this.categorizedFiles.toll.push(file);
            } else if (upperName.startsWith("PARKING_")) {
                this.categorizedFiles.parking.push(file);
            } else if (upperName.startsWith("MILEAGE_")) {
                this.categorizedFiles.mileage.push(file);
            } else if (upperName.startsWith("FARE_")) {
                this.categorizedFiles.fare.push(file);
            } else {
                this.categorizedFiles.other.push(file);
            }

            this.selectedFileName = originalName;
            }
        }

        // Clear the input so the same file can be reselected if needed
        event.target.value = "";
        },
        async fetchOverseasData(refNo) {

        const response = await axios.get(`http://172.28.28.116:6239/api/User/GetOverseasOutstation/${refNo}`);
        console.log("Overseas  Data:", response.data);

        const dataArray = response.data.result;

        if (Array.isArray(dataArray)) {
        const matchingUniqueID = dataArray.find(
            record => record.unique_code === this.claim.unique_code
        );

        if (matchingUniqueID) {

            this.overseas = {
            description: matchingUniqueID.description,
            meal_allowance: matchingUniqueID.meal_allowance,
            date_event: matchingUniqueID.date_event,
            return_date: matchingUniqueID.return_date,
            total_fee: matchingUniqueID.total_fee,
            mileage_km: matchingUniqueID.mileage_km,
            starting_point: matchingUniqueID.starting_point,
            end_point: matchingUniqueID.end_point,
            park_fee: matchingUniqueID.park_fee,
            toll_fee: matchingUniqueID.toll_fee,
            fare: matchingUniqueID.fare,
            transport_specification: matchingUniqueID.transport_specification,
            transport_mode: matchingUniqueID.transport_mode,
            total_mileage: matchingUniqueID.total_mileage,
            accommodation: matchingUniqueID.accommodation,
            vehicle_no: matchingUniqueID.vehicle_no,
            vehicle_model: matchingUniqueID.vehicle_model,
            type_petrol: matchingUniqueID.type_petrol,
            petrol_perlitre: matchingUniqueID.petrol_perlitre,
            departure_airport: matchingUniqueID.departure_airport,
            arrival_airport: matchingUniqueID.arrival_airport,
            class_airline: matchingUniqueID.class_airline,
            checkin_date: matchingUniqueID.checkin_date,
            checkout_date: matchingUniqueID.checkout_date,
            city: matchingUniqueID.city,
            number_of_nights: matchingUniqueID.number_of_nights,
            number_of_rooms: matchingUniqueID.number_of_rooms,
            reference_number: matchingUniqueID.reference_number,
            unique_code: matchingUniqueID.unique_code,
            comment: matchingUniqueID.comment,
            files: matchingUniqueID.files,
            oem: matchingUniqueID.oem || [],
            // expenses_refNumber: matchingUniqueID.expenses_refNumber,

            };
            this.requesterId = matchingUniqueID.requester_id;
            this.uniqueCode = matchingUniqueID.unique_code;
            this.expenses_refNumber = matchingUniqueID.expenses_refNumber;
            console.log("Fetched Expenses:", this.overseas.oem);

            // const isCustomType = !this.RefreshmentType.includes(matchingUniqueID.refreshment_type);
            // if (isCustomType) {
            //     // Display it as "OTHERS" but store the real custom value
            //     this.overseas.other_type = matchingUniqueID.refreshment_type;
            //     this.overseas.refreshment_type = "Others";
            // }

            // this.ent_refNumber = matchingUniqueID.ent_refNumber;
        } else {
            console.log("No matching unique_code found");
        }
        } else {
        console.error("Expected an array but got:", typeof dataArray, dataArray);
        }

        },
        // async handleSubmitOverseas() {
        //     try {

        //         // Delete expenses
        //         for (const id of this.oemToDelete) {
        //             await axios.delete(`http://172.28.28.116:6239/api/User/DeleteOverseasExpenses/${id}`);
        //         }
        //         this.oemToDelete = [];


        //         // Delete files marked for deletion
        //         for (const fileUrl of this.filesToDelete) {
        //             const fileName = fileUrl.split('/').pop();
        //             await axios.delete(`http://172.28.28.116:7267/api/Files/DeleteImage/${this.requesterId}/${this.uniqueCode}/${fileName}`);
        //         }
        //         this.filesToDelete = [];

        //         // Upload new files
        //         if (this.newFiles.length > 0) {
        //             const formData = new FormData();
        //             this.newFiles.forEach(file => formData.append("filecollection", file));
        //             const uploadEndpoint = `https://esvcportal.pktgroup.com/api/file/api/Files/MultiUploadImage/${this.requesterId}/${this.uniqueCode}`;
        //             await axios.post(uploadEndpoint, formData, {
        //                 headers: { "Content-Type": "multipart/form-data" },
        //             });
        //             this.newFiles = [];
        //         }
        //         // Prepare the data to be submitted
        //         const submitData = {
        //             description: this.overseas.description,
        //             meal_allowance: this.overseas.meal_allowance,
        //             date_event: this.date_event,
        //             return_date: this.return_date,
        //             total_fee: isNaN(parseFloat(this.totalFee)) ? 0 : parseFloat(this.totalFee),
        //             reference_number: this.overseas.reference_number,
        //             unique_code: this.overseas.unique_code,
        //             // ent: this.entertainment.ent,
        //             oem: [
        //                 ...this.overseas.oem.map(e => ({
        //                     id: e.id,
        //                     name: e.name || "",
        //                     amount: isNaN(parseFloat(e.amount)) ? 0 : parseFloat(e.amount),
        //                     description: e.description || "",
        //                     foreign_currency: e.foreign_currency || "",         // optional: default to empty string
        //                     exchange_rate: isNaN(parseFloat(e.exchange_rate)) ? 0 : parseFloat(e.exchange_rate), // optional: default to 0
        //                     currency_total: isNaN(parseFloat(e.currency_total)) ? 0 : parseFloat(e.currency_total) // optional: default to 0
        //                 }))
        //             ],
        //             // this.overseas.oem,

        //             // participants:[
        //             //             {
        //             //                 id: this.participant.id,
        //             //                 name: "",
        //             //                 company_name: "",
        //             //             }
        //             //         ],
        //             files: this.overseas.files || []
        //             // participants: this.participants
        //         };
        //         console.log("Overseas data:", this.overseas.oem),
        //         console.log("Submitting Overseas payload:", submitData);

        //         // Make the PUT request to update the entertainment data
        //         const response = await axios.put('http://172.28.28.116:6239/api/User/UpdateOverseasOutstation', submitData, {
        //             headers: {
        //                 "Content-Type": "application/json",
        //             },
        //         });

        //         // Add new participants (those without an id)
        //         const newExpenses = this.overseas.oem.filter(e => !e.id);
        //         for (const expenses of newExpenses) {
        //             await axios.post("http://172.28.28.116:6239/api/User/InsertOverseasExpenses", {
        //                 reference_number: this.expenses_refNumber,
        //                 oed: [{
        //                     name: expenses.name || "",
        //                     amount: isNaN(parseFloat(expenses.amount)) ? 0 : parseFloat(expenses.amount),
        //                     description: expenses.description || "",
        //                     foreign_currency: expenses.foreign_currency || "",         // optional: default to empty string
        //                     exchange_rate: isNaN(parseFloat(expenses.exchange_rate)) ? 0 : parseFloat(expenses.exchange_rate), // optional: default to 0
        //                     currency_total: isNaN(parseFloat(expenses.currency_total)) ? 0 : parseFloat(expenses.currency_total) // optional: default to 0
        //                  }]
        //             });
        //         }

        //         // Handle the response based on success or failure
        //         if (response.data && response.data.result) {
        //             console.log("Update Overseas data:", response.data.result);

        //            this.expenses_refNumber = this.overseas.reference_number;
        //             // Now insert new expenses using saveExpenses()
        //             // for (const expenses of newExpenses) {
        //             //     await this.saveExpenses(expenses);
        //             // }

        //             Swal.fire({
        //                 title: 'Success',
        //                 text: 'Overseas updated successfully',
        //                 icon: 'success',
        //                 confirmButtonText: 'OK',
        //                 confirmButtonColor: '#dc2626',
        //             });
        //             this.$emit('refresh-claims', this.claim.refNo);
        //             this.closeSlideOver();
        //         } else {
        //             console.log("Update Overseas data not found");
        //             Swal.fire({
        //                 title: 'Error',
        //                 text: 'Failed to update Overseas',
        //                 icon: 'error',
        //                 confirmButtonText: 'OK',
        //                 confirmButtonColor: '#dc2626',
        //             });
        //         }
        //     } catch (error) {
        //         console.error("Error submitting data:", error);
        //         let errorMessage = "An unexpected error occurred.";
        //         if (error.response) {
        //             errorMessage = error.response.data?.message || `Error: ${error.response.status} - ${error.response.statusText}`;
        //         } else if (error.request) {
        //             errorMessage = "No response received from the server.";
        //         } else {
        //             errorMessage = error.message;
        //         }

        //         Swal.fire({
        //             title: 'Submission Failed',
        //             text: errorMessage,
        //             icon: 'error',
        //             confirmButtonText: 'OK',
        //             confirmButtonColor: '#dc2626',
        //         });
        //     }
        // },

        async handleSubmit() {
          const updatedClaim = {
              requester_id: this.requesterId,
              description: this.overseas.description,
              meal_allowance: this.overseas.meal_allowance,
              date_event: this.date_event,
              return_date: this.return_date,
              mileage_km: this.overseas.mileage_km,
              starting_point: this.overseas.starting_point,
              end_point: this.overseas.end_point,
              park_fee: isNaN(parseFloat(this.overseas.park_fee)) ? 0 : parseFloat(this.overseas.park_fee),
              toll_fee: isNaN(parseFloat(this.overseas.toll_fee)) ? 0 : parseFloat(this.overseas.toll_fee),
              fare: isNaN(parseFloat(this.overseas.fare)) ? 0 : parseFloat(this.overseas.fare),
              transport_specification: this.overseas.transport_specification,
              transport_mode: this.overseas.transport_mode,
              total_mileage: isNaN(parseFloat(this.overseas.total_mileage)) ? 0 : parseFloat(this.overseas.total_mileage),//petrol/ev(rm)
              accommodation: this.overseas.accommodation,
              vehicle_no: this.overseas.vehicle_no,
              vehicle_model: this.overseas.vehicle_model,
              type_petrol: this.overseas.type_petrol,
              petrol_perlitre: isNaN(parseFloat(this.overseas.petrol_perlitre)) ? 0 : parseFloat(this.overseas.petrol_perlitre),
              departure_airport: this.overseas.departure_airport,
              arrival_airport: this.overseas.arrival_airport,
              class_airline: this.overseas.class_airline,
              checkin_date: this.overseas.checkin_date,
              checkout_date: this.overseas.checkout_date,
              city: this.overseas.city,
              number_of_nights: isNaN(parseFloat(this.overseas.number_of_nights)) ? 0 : parseFloat(this.overseas.number_of_nights),
              number_of_rooms: isNaN(parseFloat(this.overseas.number_of_rooms)) ? 0 : parseFloat(this.overseas.number_of_rooms),
              reference_number: this.overseas.reference_number,
              unique_code: this.uniqueCode,
              total_fee: parseFloat(this.totalFee).toFixed(2) || 0.00,
              oem: this.overseas.oem.map(e => ({
                  id: e.id,
                  name: e.name || "",
                  amount: parseFloat(e.amount).toFixed(2) || 0.00,
                  description: e.description || "",
                  foreign_currency: e.foreign_currency || "",
                  exchange_rate: parseFloat(e.exchange_rate).toFixed(2) || 0.00,
                  currency_total: parseFloat(e.currency_total).toFixed(2) || 0.00
              })),
              expenses_refNumber: this.expenses_refNumber,
              filesToDelete: this.filesToDelete,
              newFiles: this.newFiles,
              files: this.overseas.files || [],
              oemToDelete: this.oemToDelete,

              tabTitle: "Overseas Travelling",
              locationPurpose: this.overseas.description || "-",
              date: this.date_event || "-",
              total: this.totalFee || "0.00"
          };

          console.log("Emitting Overseas payload:", updatedClaim);
          this.$emit("update-claim", updatedClaim);
          this.closeSlideOver();
        },


        // async handleSubmit() {
        //     const updatedClaim = {
        //         // ...this.overseas,
        //         // requester_id: this.requesterId,
        //         description: this.overseas.description,
        //         meal_allowance: this.overseas.meal_allowance,
        //         date_event: this.date_event,
        //         return_date: this.return_date,
        //         reference_number: this.overseas.reference_number,
        //         unique_code: this.uniqueCode,
        //         total_fee: parseFloat(this.totalFee) || 0,
        //         oem: this.overseas.oem.map(e => ({
        //           id: e.id,
        //           name: e.name || "",
        //           amount: parseFloat(e.amount) || 0,
        //           description: e.description || "",
        //           foreign_currency: e.foreign_currency || "",
        //           exchange_rate: parseFloat(e.exchange_rate) || 0,
        //           currency_total: parseFloat(e.currency_total) || 0
        //         })),
        //         filesToDelete: this.filesToDelete,
        //         newFiles: this.newFiles,
        //         files: this.overseas.files || []
        //     };

        //     console.log("Emitting Overseas payload:", updatedClaim);
        //     this.$emit("update-claim", updatedClaim);
        //     this.closeSlideOver();
        // },

        watch: {
            isOpen(newVal) {
                if (newVal) this.fetchOverseasData();
            },
        },
    },

}
</script>
<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

.overlay-enter-to,
.overlay-leave-from {
  opacity: 1;
}
</style>
