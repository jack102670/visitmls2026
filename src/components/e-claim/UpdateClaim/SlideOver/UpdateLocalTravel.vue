<template>
    <transition name="phone-overlay">
        <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50" @click="closeSlideOver"></div>
    </transition>
    <transition name="phone-slide">
        <div v-if="isOpen" class="fixed inset-y-0 right-0 w-1/3 bg-white dark:bg-gray-800 z-50 p-6 overflow-y-auto">
            <div class="flex justify-end items-center mb-2">
                <button @click="closeSlideOver" class="text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="flex justify-between items-center py-2">
                <p class="text-lg font-bold text-gray-800 dark:text-gray-200">
                    Update {{ claim.tabTitle }}
                </p>
            </div>
            <form @submit.prevent="handleSubmit">
                <div class="grid grid-cols-8 gap-2 w-full">
                    <div class="col-span-4">
                        <label class="font-medium text-sm">Trip</label>
                        <div class="flex space-x-2">
                        <div class="mt-1" v-if="local.trip_mode === 'Round Trip'">
                            <label class="inline-flex items-center">
                                <input type="radio" v-model="local.trip_mode" value="Round Trip"
                                    class="form-radio text-indigo-600 text-xs">
                                <span class="ml-2 text-xs">Round Trip</span>
                            </label>
                        </div>
                        <div class="mt-1" v-if="local.trip_mode === 'One Way'">
                            <label class="inline-flex items-center">
                                <input type="radio" v-model="local.trip_mode" value="One Way"
                                    class="form-radio text-indigo-600 text-xs">
                                <span class="ml-2 text-xs">One Way</span>
                            </label>
                        </div>
                        </div>
                    </div>
                    <div class="col-span-4">
                        <label class="font-medium text-sm">Travel Mode</label>
                        <div class="flex space-x-2">
                        <div class="mt-1" v-if="local.transport_mode === 'Personal Transport'">
                            <label class="inline-flex items-center">
                                <input type="radio" v-model="local.transport_mode" value="Personal Transport"
                                    class="form-radio text-indigo-600 text-xs">
                                <span class="ml-2 text-xs">Personal Transport</span>
                            </label>
                        </div>
                        <div class="mt-1" v-if="local.transport_mode === 'Company Transport'">
                            <label class="inline-flex items-center">
                                <input type="radio" v-model="local.transport_mode" value="Company Transport"
                                    class="form-radio text-indigo-600 text-xs">
                                <span class="ml-2 text-xs">Company Transport</span>
                            </label>
                        </div>
                        <div class="mt-1" v-if="local.transport_mode === 'Public Transport'">
                            <label class="inline-flex items-center">
                                <input type="radio" v-model="local.transport_mode" value="Public Transport"
                                    class="form-radio text-indigo-600 text-xs">
                                <span class="ml-2 text-xs">Public Transport</span>
                            </label>
                        </div>
                    </div>
                </div>
                    <div class="col-span-4">
                        <label for="date_event" class="font-medium text-sm">Departure Date</label>
                        <input type="date" id="date_event" v-model="date_event"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>
                    <div class="col-span-4" v-if="local.trip_mode === 'Round Trip'">
                        <label for="return_date" class="font-medium text-sm" >Return Date</label>
                        <input type="date" id="return_date" v-model="return_date"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>

                    <div class="col-span-4">
                        <label for="transport_specification" class="font-medium text-sm" >Transport Specification</label>
                        <select v-if="local.transport_mode === 'Public Transport'" id="transport_specification" v-model="local.transport_specification"
                        class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                            <option v-for="(specify, index) in transportSpecPublic" :key="index" :value="specify">{{ specify }}</option>
                        </select>
                        <!-- Show dropdown when mode is 'Personal' -->
                        <select v-else-if="local.transport_mode !== 'Public Transport' " id="transport_specification" v-model="local.transport_specification"
                                class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                                <option v-for="(specify, index) in transportSpecifications" :key="index" :value="specify">{{ specify }}</option>
                        </select>
                    </div>

                    <div class="col-span-4" >
                        <label for="mileage_km" class="font-medium text-sm" >Mileage/ Kilometer(KM)</label>
                        <input type="text" id="mileage_km" v-model="local.mileage_km"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>

                    <div class="col-span-4" >
                        <label for="starting_point" class="font-medium text-sm">Starting Point</label>
                        <input type="text" id="starting_point" v-model="local.starting_point"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>

                    <div class="col-span-4">
                        <label for="end_point" class="font-medium text-sm">End Point</label>
                        <input type="text" id="end_point" v-model="local.end_point"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>

                    <div class="col-span-4" v-if="local.transport_mode !== 'Public Transport'">
                        <label for="vehicle_no" class="font-medium text-sm">Vehicle Registration Number</label>
                        <input type="text" id="vehicle_no" v-model="local.vehicle_no"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>
                    <div class="col-span-4" v-if="local.transport_mode !== 'Public Transport'">
                        <label for="vehicle_model" class="font-medium text-sm">Vehicle Model</label>
                        <input type="text" id="vehicle_model" v-model="local.vehicle_model"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>

                    <div class="col-span-4" v-if="local.transport_mode !== 'Public Transport'">
                        <label for="type_petrol" class="font-medium text-sm" >Type of Petrol</label>
                            <select id="type_petrol" v-model="local.type_petrol" class="mt-1 text-xs block text-xs w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                            <option v-for="(type, index) in petrolTypes" :key="index" :value="type">{{ type }}</option>
                        </select>
                    </div>

                    <div class="col-span-4" v-if="local.transport_mode !== 'Public Transport'">
                        <label for="type_petrol" class="font-medium text-sm" >Petrol(Litre)</label>
                            <input type="text" id="petrol_perlitre" v-model="local.petrol_perlitre"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>

                    <div class="col-span-4" v-if="local.transport_mode !== 'Public Transport'">
                        <label for="total_mileage" class="font-medium text-sm">Petrol/EV(RM)</label>
                        <input
                            type="text"
                            id="total_mileage"
                            v-model="local.total_mileage"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </div>  
                    <div class="col-span-4" v-if="local.transport_mode !== 'Public Transport'">
                        <!-- Upload field shown if mileage entered and no files yet -->
                        <div v-if="local.total_mileage && !categorizedFiles.mileage.length">
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
                        <div v-if="local.total_mileage && categorizedFiles.mileage.length" class="col-span-4">
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

                    <div class="col-span-4" v-if="local.transport_mode === 'Public Transport' && local.transport_specification === 'Flight'">
                        <label for="departure_airport" class="font-medium text-sm">Flight Departure Airport</label>
                        <input type="text" id="departure_airport" v-model="local.departure_airport"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>
                    <div class="col-span-4" v-if="local.transport_mode === 'Public Transport' && local.transport_specification === 'Flight'">
                        <label for="arrival_airport" class="font-medium text-sm" >Flight Arrival Airport</label>
                        <input type="text" id="arrival_airport" v-model="local.arrival_airport"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>
                    <div class="col-span-8" v-if="local.transport_mode === 'Public Transport' && local.transport_specification === 'Flight'">
                        <label for="class_airline" class="font-medium text-sm" >Flight Class</label>
                        <select id="class_airline" v-model="local.class_airline" class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                             <option v-for="(specify, index) in flightClass" :key="index" :value="specify">{{ specify }}</option>
                        </select>
                    </div>
                </div>
                    
                <div class="grid grid-cols-8 gap-2 w-full">
                    <div class="col-span-4" v-if="local.transport_mode === 'Public Transport'">
                        <label for="fare" class="font-medium text-sm" >Fare(RM)</label>
                        <input type="text" id="fare" v-model="local.fare"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"/>
                    </div>
                    <div class="col-span-4" v-if="local.transport_mode === 'Public Transport'">
                        <!-- Upload field shown if fare entered and no files yet -->
                        <div v-if="local.fare && !categorizedFiles.fare.length" class="mt-2">
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
                        <div v-if="local.fare && categorizedFiles.fare.length" class="mt-4">
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
                </div>
                <div class="grid grid-cols-8 gap-2 w-full">
                    <div class="col-span-4" v-if="local.trip_mode === 'Round Trip'">
                        <label for="meal_allowance" class="font-medium text-sm" >Meal Allowance</label>
                        <input type="text" id="meal_allowance" v-model="local.meal_allowance"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>

                    <div class="col-span-4" v-if="local.trip_mode === 'Round Trip'">
                        <label for="accommodation" class="font-medium text-sm" >Accommodation</label>
                        <input type="text" id="accommodation" v-model="local.accommodation"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>

                    <div class="col-span-4" v-if="local.trip_mode === 'Round Trip'">
                        <label for="checkin_date" class="font-medium text-sm">Check In Date</label>
                        <input type="date" id="checkin_date" v-model="checkin_date"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>
                    <div class="col-span-4" v-if="local.trip_mode === 'Round Trip'">
                        <label for="checkout_date" class="font-medium text-sm" >Check Out Date</label>
                        <input type="date" id="checkout_date" v-model="checkout_date"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>

                    <div class="col-span-4" v-if="local.trip_mode === 'Round Trip'">
                        <label for="number_of_nights" class="font-medium text-sm">Number of Nights</label>
                        <input type="text" id="number_of_nights" v-model="local.number_of_nights"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>

                    <div class="col-span-4" v-if="local.trip_mode === 'Round Trip'">
                        <label for="number_of_rooms" class="font-medium text-sm">Number of Rooms</label>
                        <input type="text" id="number_of_rooms" v-model="local.number_of_rooms"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>

                    <div class="col-span-4" v-if="local.trip_mode === 'Round Trip'">
                        <label for="city" class="font-medium text-sm" >City (Hotel)</label>
                        <input type="text" id="city" v-model="local.city"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    </div>

                    <div class="col-span-4">
                        <label for="total_fee" class="font-medium text-sm">Total Amount(RM)</label>
                        <input type="text" id="total_fee" v-model="totalFee" readonly
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 cursor-not-allowed">
                    </div>
                </div>

                <div class="grid grid-cols-8 gap-2 w-full">
                    <div class="col-span-4" v-if="local.trip_mode === 'Round Trip'">
                        <label for="hotel_fee" class="font-medium text-sm" >Hotel(RM)</label>
                        <input type="text" id="hotel_fee" v-model="local.hotel_fee"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"/>
                    </div>

                    <div class="col-span-4" v-if="local.trip_mode === 'Round Trip'">
                        <!-- Upload field shown if hotel entered and no files yet -->
                        <div v-if="local.hotel_fee && !categorizedFiles.hotel.length" class="mt-2">
                            <input
                            type="file"
                            id="newFile"
                            @change="uploadFiles($event, 'hotel')"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                            <span v-if="selectedFileName" class="text-xs text-gray-600 mt-1 block">
                            Selected file: {{ selectedFileName }}
                            </span>
                        </div>

                        <!-- Uploaded hotel files shown if any -->
                        <div v-if="local.hotel_fee && categorizedFiles.hotel.length" class="mt-2">
                            <label class="font-medium text-sm">Uploaded Hotel Files:</label>
                            <ul class="mt-1 text-xs text-blue-600 underline">
                            <li v-for="(file, index) in categorizedFiles.hotel" :key="index" class="flex items-center gap-2">
                                <a :href="typeof file === 'string' ? file : '#'" target="_blank">
                                {{ typeof file === 'string' ? file.split('/').pop() : file.name }}
                                </a>
                                <a @click="deleteFile(index, 'hotel')" class="text-red-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L6.26 5.79m8.788 0H6.26m12.804 0a2.25 2.25 0 00-2.73-1.684M6.26 5.79a2.25 2.25 0 002.73 1.684m0 0a2.25 2.25 0 00-2.73 1.684m0 0a2.25 2.25 0 012.73 1.684" />
                                        </svg>
                                    </a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="grid grid-cols-8 gap-2 w-full">
                    <div class="col-span-4" v-if="local.transport_mode !== 'Public Transport'">
                        <label for="toll_fee" class="font-medium text-sm" >Toll/Touch' n Go(RM)</label>
                        <input type="text" id="toll_fee" v-model="local.toll_fee"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"/>
                    </div>
                    <div class="col-span-4" v-if="local.transport_mode !== 'Public Transport'">
                        <!-- Upload field shown if toll entered and no files yet -->
                        <div v-if="local.toll_fee && !categorizedFiles.toll.length" class="mt-2">
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
                        <div v-if="local.toll_fee && categorizedFiles.toll.length" class="mt-2">
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
                </div>
                
                <div class="grid grid-cols-8 gap-2 w-full">
                    <div class="col-span-4" v-if="local.transport_mode !== 'Public Transport'">
                        <label for="park_fee" class="font-medium text-sm" >Parking</label>
                        <input type="text" id="park_fee" v-model="local.park_fee"
                            class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"/>
                    </div>
                    <div class="col-span-4" v-if="local.transport_mode !== 'Public Transport'">
                        <!-- Upload field shown if parking entered and no files yet -->
                        <div v-if="local.park_fee && !categorizedFiles.parking.length" class="mt-2">
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
                        <div v-if="local.park_fee && categorizedFiles.parking.length" class="mt-2">
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
                </div>
                    
                    
                    <!-- <div class="col-span-4">
                        
                         <div v-if="local.files && categorizedFiles.other.length" class="mt-4">
                        <label class="font-medium text-sm">Uploaded Files:</label>
                        <ul class="mt-1 text-xs text-blue-600 underline">
                        <li v-for="(file, index) in categorizedFiles.other" :key="index" class="flex items-center gap-2">
                            <a :href="typeof file === 'string' ? file : '#'" target="_blank">
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
                    <div v-if="local.other && !categorizedFiles.other.length" class="mt-2">
                        <input
                        type="file"
                        id="newFile"
                        @change="uploadFiles($event, 'other')"
                        class="mt-1 text-xs block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                        <span v-if="selectedFileName" class="text-xs text-gray-600 mt-1 block">
                        Selected file: {{ selectedFileName }}
                        </span>
                    </div>
                    </div> -->
                    
                    <div class="col-span-4">
                    <label class="font-medium text-sm">Additional Files</label>
                    <div v-if="local.files" class="mt-2">
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

                    <div v-if="local.files" class="mt-2 mb-2">
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
                <!-- </div> -->

                    <hr class="col-span-8 mt-4 mb-2" />
                    <div class="col-span-8">
                        <label for="comment" class="font-medium text-sm">Comment</label>
                        <textarea type="text" id="comment" v-model="local.comment" readonly
                            class="mt-1 block text-xs w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 cursor-not-allowed"></textarea>
                    </div>

                    <div class="col-span-8 justify-end items-center flex space-x-2 py-4 ">
                        <button
                            class="w-full bg-transparent border-2 border-red-600 hover:bg-red-700 text-red-600 hover:text-white hover:border-2 font-bold py-2 px-4 rounded-md"
                            @click="closeSlideOver">
                            Cancel
                        </button>
                        <button type="submit"
                            class="w-full bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                            Update
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </transition>
</template>

<script>
// import { getHandphone, updateHandphone } from "../../../../api/EclaimAPI.js";

import Swal from "sweetalert2";
import axios from "axios";

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
            // claimDetails: {},
            local: {
                mileage_km: "",
                starting_point: "",
                end_point: "",
                date_event: "",
                return_date: "",
                park_fee: "",
                toll_fee: "",
                fare: "",
                transport_specification: "",
                transport_mode: "",
                trip_mode: "",
                total_mileage: "",
                meal_allowance: "",
                accommodation: "",
                vehicle_no: "",
                vehicle_model: "",
                type_petrol: "",
                petrol_perlitre: "",
                departure_airport: "",
                arrival_airport: "",
                number_of_nights: "",
                number_of_rooms: "",
                hotel_fee: "",
                city: "",
                checkin_date: "",
                checkout_date: "",
                class_airline: "",
                total_fee: "",
                comment: "",
                files: [],
            },
            categorizedFiles: {
                toll: [],
                parking: [],
                mileage: [],
                fare: [],
                hotel: [],
                other: []
            },
            
            uniqueCode: "",
            requesterId: "",
            filesToDelete: [],
            flightClass:["Business", "Economy"],
            transportSpecifications: ["Motorcycle", "Car", "Truck"],
            transportSpecPublic: [ "Flight", "E-Hailing"],
            petrolTypes: ["Ron 95", "Diesel"]
            
        }
    },
    mounted() {
        const refNo = this.$route.params.rn;
        console.log("RefNo:", refNo);

        this.fetchLocalData(refNo)
        // if (this.claim?.refNo) {
        //     this.fetchHandphoneData();
        // }
    },
    computed: {
    totalFee() {
        const petrol = parseFloat(this.local.total_mileage) || 0;
        const parking = parseFloat(this.local.park_fee) || 0;
        const toll = parseFloat(this.local.toll_fee) || 0;
        const fare = parseFloat(this.local.fare) || 0;
        const hotel = parseFloat(this.local.hotel_fee) || 0;
        
        let meal = 0;
        if (this.local.trip_mode === 'Round Trip') {
            meal = parseFloat(this.local.meal_allowance) || 0;
        }

        const total = petrol + parking + toll + fare + meal + hotel;
        return total.toFixed(2);
    },
    date_event: {
        get() {
        const d = new Date(this.local.date_event);
        if (isNaN(d)) return "";
        return d.toISOString().split("T")[0];
        },
        set(value) {
        this.local.date_event = value;
        },
    },
    return_date: {
        get() {
        const d = new Date(this.local.return_date);
        if (isNaN(d)) return "";
        return d.toISOString().split("T")[0];
        },
        set(value) {
        this.local.return_date = value;
        },
    },
    checkin_date: {
        get() {
            const d = new Date(this.local.checkin_date);
            if (isNaN(d)) return "";
            return d.toISOString().split("T")[0];
        },
        set(value) {
        this.local.checkin_date = value;
        },
    },
    checkout_date: {
        get() {
            const d = new Date(this.local.checkout_date);
            if (isNaN(d)) return "";
            return d.toISOString().split("T")[0];
        },
        set(value) {
        this.local.checkout_date = value;
        },
    }
    },
    methods: {

        closeSlideOver() {
            this.$emit('close');
        },


        detectFileCategory(filename) {
            const upperName = filename.toUpperCase();
            if (upperName.includes("TOLL")) return "TOLL";
            if (upperName.includes("PARKING")) return "PARKING";
            if (upperName.includes("MILEAGE")) return "MILEAGE";
            if (upperName.includes("FARE")) return "FARE";
            if (upperName.includes("HOTEL")) return "HOTEL";
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
                case "hotel":
                prefix = "HOTEL_";
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
            } else if (upperName.startsWith("HOTEL_")) {
                this.categorizedFiles.hotel.push(file);
            } else {
                this.categorizedFiles.other.push(file);
            }

            this.selectedFileName = originalName;
            }
        }

        // Clear the input so the same file can be reselected if needed
        event.target.value = "";
        },

        async deleteFile(index, fileType) {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'Do you really want to delete this file?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
            cancelButtonColor: '#6b7280',
            confirmButtonColor: '#dc2626'
        });

        if (result.isConfirmed && this.categorizedFiles[fileType]) {
        const removedFile = this.categorizedFiles[fileType].splice(index, 1)[0]; // remove from UI

        // Check if the file is a File object (new file) or a URL string (existing uploaded file)
        if (removedFile instanceof File) {
            // Remove it from newFiles list too
            this.newFiles = this.newFiles.filter(file => file !== removedFile);
        } else if (typeof removedFile === 'string') {
            // If it's a previously uploaded file (a URL), mark it for deletion
            this.filesToDelete.push(removedFile);
        }

        Swal.fire('Deleted!', 'Your file has been removed.', 'success');
        }
        },



        async fetchLocalData(refNo) {
           
                const response = await axios.get(`http://172.28.28.116:6239/api/User/GetLocalOutstation/${refNo}`);

                const dataArray = response.data.result;
                // if (response) {
                //     const matchingUniqueID = response.find(
                //         record => record.unique_code === this.claim.unique_code
                //     );
                    if (Array.isArray(dataArray)) {
                        const matchingUniqueID = dataArray.find(
                            record => record.unique_code === this.claim.unique_code
                        );

                    if (matchingUniqueID) {
                        this.local = {
                            mileage_km: matchingUniqueID.mileage_km,
                            starting_point: matchingUniqueID.starting_point,
                            end_point: matchingUniqueID.end_point,
                            date_event: matchingUniqueID.date_event,
                            park_fee: matchingUniqueID.park_fee,
                            toll_fee: matchingUniqueID.toll_fee,
                            total_fee: matchingUniqueID.total_fee,
                            fare: matchingUniqueID.fare,
                            transport_specification: matchingUniqueID.transport_specification,
                            transport_mode: matchingUniqueID.transport_mode,
                            trip_mode: matchingUniqueID.trip_mode,
                            total_mileage: matchingUniqueID.total_mileage,
                            return_date: matchingUniqueID.return_date,
                            meal_allowance: matchingUniqueID.meal_allowance,
                            accommodation: matchingUniqueID.accommodation,
                            reference_number: matchingUniqueID.reference_number,
                            vehicle_no: matchingUniqueID.vehicle_no,
                            vehicle_model: matchingUniqueID.vehicle_model,
                            type_petrol: matchingUniqueID.type_petrol,
                            petrol_perlitre: matchingUniqueID.petrol_perlitre,
                            departure_airport: matchingUniqueID.departure_airport,
                            arrival_airport: matchingUniqueID.arrival_airport,
                            number_of_nights: matchingUniqueID.number_of_nights,
                            number_of_rooms: matchingUniqueID.number_of_rooms,
                            city: matchingUniqueID.city,
                            hotel_fee:matchingUniqueID.hotel_fee,
                            checkin_date: matchingUniqueID.checkin_date,
                            checkout_date: matchingUniqueID.checkout_date,
                            class_airline: matchingUniqueID.class_airline,
                            comment: matchingUniqueID.comment,
                            files: matchingUniqueID.files,

                        };
                        console.log("Fetched files:", this.local.files);
                        console.log("Categorizing files...");

                        this.uniqueCode = matchingUniqueID.unique_code;
                        this.requesterId = matchingUniqueID.requester_id;

                        this.categorizedFiles = {
                            toll: [],
                            parking: [],
                            mileage: [],
                            fare: [],
                            hotel: [],
                            other: []
                        };

                        (this.local.files || []).forEach(file => {
                        const fileName = typeof file === "string" ? file.split('/').pop() : file.name;
                        const upperName = fileName.toUpperCase();

                        if (upperName.startsWith("TOLL_")) {
                            this.categorizedFiles.toll.push(file);
                        } else if (upperName.startsWith("PARKING_")) {
                            this.categorizedFiles.parking.push(file);
                        } else if (upperName.startsWith("MILEAGE_")) {
                            this.categorizedFiles.mileage.push(file);
                        } else if (upperName.startsWith("FARE_")) {
                            this.categorizedFiles.fare.push(file);
                        } else if (upperName.startsWith("HOTEL_")) {
                            this.categorizedFiles.hotel.push(file);
                        } else {
                            this.categorizedFiles.other.push(file);
                        }
                        });
                    }
                }           
                    
        },

        getNewFiles() {
            return [
                ...this.categorizedFiles.toll,
                ...this.categorizedFiles.parking,
                ...this.categorizedFiles.mileage,
                ...this.categorizedFiles.fare,
                ...this.categorizedFiles.hotel,
                ...this.categorizedFiles.other
            ].filter(file => typeof file !== 'string'); // only include new files
        },

        // async handleSubmitLocal() {
        // try {

        //      // 1. Delete files marked for deletion
        // for (const fileUrl of this.filesToDelete) {
        //     const fileName = fileUrl.split('/').pop();
        //     await axios.delete(`http://172.28.28.116:7267/api/Files/DeleteImage/${this.requesterId}/${this.uniqueCode}/${fileName}`);
        // }
        // this.filesToDelete = [];

        // // 2. Upload new files (from all categories)
        // const allNewFiles = [
        //     ...this.categorizedFiles.toll,
        //     ...this.categorizedFiles.parking,
        //     ...this.categorizedFiles.mileage,
        //     ...this.categorizedFiles.fare,
        //     ...this.categorizedFiles.other
        // ].filter(file => typeof file !== 'string'); // Filter out already uploaded (string URLs)

        // if (allNewFiles.length > 0) {
        //     const formData = new FormData();
        //     allNewFiles.forEach(file => {
        //         // Rename file with prefix if needed
        //         const fileType = this.detectFileCategory(file.name);  // e.g., "MILEAGE"
        //         const upperName = file.name.toUpperCase();

        //         //  Avoid double prefixing
        //         let finalName = upperName.startsWith(fileType + "_")
        //             ? file.name
        //             : `${fileType}_${file.name}`;

        //         const renamedFile = new File([file], finalName, { type: file.type });
        //         formData.append("filecollection", renamedFile);
        //     });

        //     const uploadEndpoint = `https://esvcportal.pktgroup.com/api/file/api/Files/MultiUploadImage/${this.requesterId}/${this.uniqueCode}`;
        //     await axios.post(uploadEndpoint, formData, {
        //         headers: { "Content-Type": "multipart/form-data" },
        //     });
        // }

        // // 3. Prepare and submit claim data
        // const allFiles = [
        //     ...this.categorizedFiles.toll,
        //     ...this.categorizedFiles.parking,
        //     ...this.categorizedFiles.mileage,
        //     ...this.categorizedFiles.fare,
        //     ...this.categorizedFiles.other
        // ].filter(file => typeof file === 'string'); 

        //     const submitData = {
        //     mileage_km: this.local.mileage_km,
        //     starting_point: this.local.starting_point,
        //     end_point: this.local.end_point,
        //     date_event: this.date_event,
        //     return_date: this.return_date,
        //     park_fee: isNaN(parseFloat(this.local.park_fee)) ? 0 : parseFloat(this.local.park_fee),
        //     toll_fee: isNaN(parseFloat(this.local.toll_fee)) ? 0 : parseFloat(this.local.toll_fee),
        //     fare: isNaN(parseFloat(this.local.fare)) ? 0 : parseFloat(this.local.fare),
        //     transport_specification: this.local.transport_specification?.trim(),
        //     transport_mode: this.local.transport_mode?.trim(),
        //     trip_mode: this.local.trip_mode?.trim(),
        //     total_mileage: isNaN(parseFloat(this.local.total_mileage)) ? 0 : parseFloat(this.local.total_mileage),//petrol/ev(rm)
        //     meal_allowance:this.local.meal_allowance,
        //     accommodation: this.local.accommodation,
        //     vehicle_no: this.local.vehicle_no?.trim(),
        //     vehicle_model: this.local.vehicle_model?.trim(),
        //     type_petrol: this.local.type_petrol?.trim(),
        //     petrol_perlitre: isNaN(parseFloat(this.local.petrol_perlitre)) ? 0 : parseFloat(this.local.petrol_perlitre),
        //     reference_number: this.local.reference_number,
        //     total_fee: isNaN(parseFloat(this.totalFee)) ? 0 : parseFloat(this.totalFee),
        //     // bank_account: this.handphone.bank_account,
        //     files: allFiles || [],
        //     unique_code: this.uniqueCode,
        //     // requester_id: this.requesterId,
        //     };
        //     console.log("Submitting Local payload:", submitData);

        //     const response = await axios.put('http://172.28.28.116:6239/api/User/UpdateLocalOutstation', submitData, {
        //             headers: {
        //                 "Content-Type": "application/json",
        //             },
        //         });

        //     if (response.data && response.data.result) {
        //         console.log("Update Other data:", response.data.result);
        //         Swal.fire({
        //             title: 'Success',
        //             text: 'Local claim updated successfully',
        //             icon: 'success',
        //             confirmButtonText: 'OK',
        //             confirmButtonColor: '#dc2626'
        //         });
        //         this.$emit('refresh-claims', this.claim.refNo);
        //         this.closeSlideOver();
        //     } else {
        //         console.log("Update Other data not found");
        //         Swal.fire({
        //             title: 'Error',
        //             text: 'Failed to update local claim',
        //             icon: 'error',
        //             confirmButtonText: 'OK',
        //             confirmButtonColor: '#dc2626'

        //         });
        //     }
        // } catch (error) {
        //     console.error("Error submitting data:", error);
            
        //     let errorMessage = "An unexpected error occurred.";
        //     if (error.response) {
        //         errorMessage = error.response.data?.message || `Error: ${error.response.status} - ${error.response.statusText}`;
        //     } else if (error.request) {
        //         errorMessage = "No response received from the server.";
        //     } else {
        //         errorMessage = error.message;
        //     }

        //     Swal.fire({
        //     title: 'Submission Failed',
        //     text: errorMessage,
        //     icon: 'error',
        //     confirmButtonText: 'OK',
        //     confirmButtonColor: '#dc2626'
        //     });
        // }
        // },

        async handleSubmit() {
            const updatedClaim = {

                mileage_km: this.local.mileage_km,
                starting_point: this.local.starting_point,
                end_point: this.local.end_point,
                date_event: this.date_event,
                return_date: this.return_date,
                park_fee: isNaN(parseFloat(this.local.park_fee)) ? 0 : parseFloat(this.local.park_fee),
                toll_fee: isNaN(parseFloat(this.local.toll_fee)) ? 0 : parseFloat(this.local.toll_fee),
                fare: isNaN(parseFloat(this.local.fare)) ? 0 : parseFloat(this.local.fare),
                transport_specification: this.local.transport_specification?.trim(),
                transport_mode: this.local.transport_mode?.trim(),
                trip_mode: this.local.trip_mode?.trim(),
                total_mileage: isNaN(parseFloat(this.local.total_mileage)) ? 0 : parseFloat(this.local.total_mileage),//petrol/ev(rm)
                meal_allowance:this.local.meal_allowance,
                accommodation: this.local.accommodation,
                vehicle_no: this.local.vehicle_no?.trim(),
                vehicle_model: this.local.vehicle_model?.trim(),
                type_petrol: this.local.type_petrol?.trim(),
                petrol_perlitre: isNaN(parseFloat(this.local.petrol_perlitre)) ? 0 : parseFloat(this.local.petrol_perlitre),
                reference_number: this.local.reference_number,
                total_fee: isNaN(parseFloat(this.totalFee)) ? 0 : parseFloat(this.totalFee),
                departure_airport:this.local.departure_airport,
                arrival_airport: this.local.arrival_airport,
                number_of_nights:isNaN(parseFloat(this.local.number_of_nights)) ? 0 : parseFloat(this.local.number_of_nights),
                number_of_rooms: isNaN(parseFloat(this.local.number_of_rooms)) ? 0 : parseFloat(this.local.number_of_rooms),
                city: this.local.city,
                hotel_fee: isNaN(parseFloat(this.local.hotel_fee)) ? 0 : parseFloat(this.local.hotel_fee),
                checkin_date: this.local.checkin_date,
                checkout_date: this.local.checkout_date,
                class_airline: this.local.class_airline,
                unique_code: this.uniqueCode,
                files: this.local.files || [],
                filesToDelete: this.filesToDelete,
                newFiles: this.getNewFiles(),
                requester_id: this.requesterId,

                tabTitle: "Local Travelling",
                locationPurpose: this.local.end_point || "-",
                date: this.date_event || "-",
                total: this.totalFee || "0.00"
            };

            console.log("Submitting Local payload:", updatedClaim);
            this.$emit("update-claim", updatedClaim);
            this.closeSlideOver();
        },

        watch: {
        isOpen(newVal) {
            if (newVal) this.fetchLocalData();
        }
        
        },

    },
}
</script>

<style scoped>
.phone-slide-enter-active,
.phone-slide-leave-active {
    transition: transform 0.3s ease-in-out;
}

.phone-slide-enter-from,
.phone-slide-leave-to {
    transform: translateX(100%);
}

.phone-slide-enter-to,
.phone-slide-leave-from {
    transform: translateX(0);
}

.phone-overlay-enter-active,
.phone-overlay-leave-active {
    transition: opacity 0.3s ease-in-out;
}

.phone-overlay-enter-from,
.phone-overlay-leave-to {
    opacity: 0;
}

.phone-overlay-enter-to,
.phone-overlay-leave-from {
    opacity: 1;
}
</style>