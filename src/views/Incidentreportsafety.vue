<template>
  <main
    class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto"
  >
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <section
          class="max-w-4xl p-6 mx-auto bg-[#f7fbff] rounded-md dark:bg-gray-800"
        >
          <p class="font-semibold text-3xl p-3 text-gray-700">
            SAFETY INCIDENT REPORT
          </p>
          <h2
            class="text-lg font-semibold text-slate-200 p-1 rounded capitalize bg-[#160959e2] dark:text-white"
          >
            Part 1 Incident / Accident Info<span class="text-red-500">*</span>
          </h2>

          <form @submit.prevent="openPreviewModal">
            <div
              class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-2"
            >
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="location"
                  >Incident Location</label
                >
                <input
                  v-model="location"
                  id="location"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Dateofincident"
                  >Date of incident</label
                >
                <div class="grid grid-cols-2">
                  <input
                    v-model="formData.Dateofincident"
                    id="Dateofincident"
                    type="date"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                  <input
                    v-model="time"
                    id="time"
                    type="time"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
              </div>

              <!-- Add v-model to other inputs as needed -->
            </div>
            <div class="flex flex-col sm:flex-row gap-4 mt-4">
              <label class="font-semibold text-gray-700 dark:text-gray-200"
                >Incident Accident Category:</label
              >
              <div class="mt-2 flex flex-wrap">
                <div
                  v-for="category in categories"
                  :key="category.id"
                  class="flex items-center mr-4 mb-2"
                >
                  <input
                    type="checkbox"
                    :id="category.id"
                    :value="category.value"
                    v-model="selectedCategories"
                    class="mr-2"
                  />
                  <label
                    :for="category.id"
                    class="text-gray-700 dark:text-gray-200"
                    >{{ category.label }}</label
                  >
                </div>
                <div class="flex items-center">
                  <input
                    type="checkbox"
                    id="categoryOther"
                    v-model="selectedCategories"
                    :value="'Other'"
                    class="mr-2"
                  />
                  <label
                    for="categoryOther"
                    class="text-gray-700 dark:text-gray-200"
                    >Other</label
                  >
                  <input
                    type="text"
                    v-show="selectedCategories.includes('Other')"
                    v-model="otherCategoryInput"
                    placeholder="Specify other category"
                    class="ml-2 px-2 py-1 border rounded-md"
                  />
                </div>
              </div>
            </div>

            <div class="pt-6">
              <h2
                class="text-lg font-semibold text-slate-200 p-1 rounded capitalize bg-[#160959e2] dark:text-white"
              >
                Part 2 Personal Data - Victim 1 <span class="text-red-500">*</span>
              </h2>
            </div>

            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Namevictim1"
                  >Name</label
                >
                <input
                  v-model="Namevictim1"
                  id="Namevictim1"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="NRICpassportvictim1"
                  >NRIC / Passport</label
                >
                <input
                  v-model="NRICpassportvictim1"
                  id="NRICpassportvictim1"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Nationalityvictim1"
                  >Nationality: {{ Nationalityvictim1 }}</label
                >
                <div
                  class="block flex justify-between w-full px-4 py-2 mt-2 text-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <div>
                    <input
                      type="radio"
                      id="Malaysian"
                      value="Malaysian"
                      v-model="Nationalityvictim1"
                    />
                    <label class="ml-1" for="Malaysian">Malaysian</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="Non Malaysian"
                      value="Non Malaysian"
                      v-model="Nationalityvictim1"
                    />
                    <label class="ml-1" for="Non Malaysian"
                      >Non Malaysian</label
                    >
                  </div>
                  <Div></Div>
                </div>
              </div>
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Addressvictim1"
                  >Address</label
                >
                <textarea
                  v-model="Addressvictim1"
                  id="Addressvictim1"
                  rows="2"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                ></textarea>
              </div>

              <!-- Add v-model to other inputs as needed -->
            </div>
            <div
              class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 mx-auto cursor-pointer flex w-full"
            >
              <div class="w-full">
                <label
                  for="Companynamevictim1"
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  >Company Name</label
                >
                <input
                  v-model="Companynamevictim1"
                  id="Companynamevictim1"
                  class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                />
              </div>
              <div class="w-full">
                <label
                  for="Companyaddressvictim1"
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  >Company Address</label
                >
                <textarea
                  v-model="Companyaddressvictim1"
                  id="Companyaddressvictim1"
                  class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  rows="2"
                  required
                ></textarea>
              </div>
            </div>
            <div
              class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-2"
            >
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Departmentvictim1"
                  >Department</label
                >
                <input
                  v-model="Departmentvictim1"
                  id="Departmentvictim1"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Datejoinedvictim1"
                  >Date Joined</label
                >
                <input
                  v-model="Datejoinedvictim1"
                  id="Datejoinedvictim1"
                  type="date"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="categoryvictim1"
                  >Category</label
                >
                <select
                  v-model="categoryvictim1"
                  id="categoryvictim1"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <option value="Employee">Employee</option>
                  <option value="Foreign Worker">Foreign Worker</option>
                  <option value="Contractor">Contractor</option>
                  <option value="Customer">Customer</option>
                  <option value="Visitor and Public">Visitor and Public</option>
                </select>
              </div>
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Designationvictim1"
                  >Designation
                </label>
                <input
                  v-model="Designnationvictim1"
                  id="Designationvictim1"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div
              class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-3"
            >
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Gendervictim1"
                  >Gender</label
                >
                <select
                  v-model="Gendervictim1"
                  id="Gendervictim1"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <option value="male">male</option>
                  <option value="female">female</option>
                </select>
              </div>
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Agevictim1"
                  >Age</label
                >
                <input
                  v-model="Agevictim1"
                  id="Agevictim1"
                  type="number"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="DOBvictim1"
                  >Date of Birth</label
                >
                <input
                  v-model="DOBvictim1"
                  id="DOBvictim1"
                  type="date"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div class="pt-4">
              <h2
                class="text-lg font-semibold text-slate-200 p-1 rounded capitalize bg-[#160959e2] dark:text-white"
              >
                Personal Data - Victim 2 (optional)
              </h2>
            </div>

            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Namevictim2"
                  >Name</label
                >
                <input
                  v-model="Namevictim2"
                  id="Namevictim2"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="NRICpassportvictim2"
                  >NRIC / Passport</label
                >
                <input
                  v-model="NRICpassportvictim2"
                  id="NRICpassportvictim2"
                  type="number"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Nationalityvictim2"
                  >Nationality: {{ Nationalityvictim2 }}</label
                >
                <div
                  class="block flex justify-between w-full px-4 py-2 mt-2 text-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <div>
                    <input
                      type="radio"
                      id="Malaysian2"
                      value="Malaysian"
                      v-model="Nationalityvictim2"
                    />
                    <label class="ml-1" for="Malaysian2">Malaysian</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="Non Malaysian2"
                      value="Non Malaysian"
                      v-model="Nationalityvictim2"
                    />
                    <label class="ml-1" for="Non Malaysian2"
                      >Non Malaysian</label
                    >
                  </div>
                  <Div></Div>
                </div>
              </div>
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Addressvictim2"
                  >Address</label
                >
                <textarea
                  v-model="Addressvictim2"
                  id="Addressvictim2"
                  rows="2"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                ></textarea>
              </div>

              <!-- Add v-model to other inputs as needed -->
            </div>
            <div
              class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 mx-auto cursor-pointer flex w-full"
            >
              <div class="w-full">
                <label
                  for="Companynamevictim2"
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  >Company Name</label
                >
                <input
                  v-model="Companynamevictim2"
                  id="Companynamevictim2"
                  class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                />
              </div>
              <div class="w-full">
                <label
                  for="Companyaddressvictim2"
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  >Company Address</label
                >
                <textarea
                  v-model="Companyaddressvictim2"
                  id="Companyaddressvictim2"
                  class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  rows="2"
                  required
                ></textarea>
              </div>
            </div>
            <div
              class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-2"
            >
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Departmentvictim2"
                  >Department</label
                >
                <input
                  v-model="Departmentvictim2"
                  id="Departmentvictim2"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Datejoinedvictim2"
                  >Date Joined</label
                >
                <input
                  v-model="Datejoinedvictim2"
                  id="Datejoinedvictim2"
                  type="date"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="categoryvictim2"
                  >Category</label
                >
                <select
                  v-model="categoryvictim2"
                  id="categoryvictim2"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <option value="Employee">Employee</option>
                  <option value="Foreign Worker">Foreign Worker</option>
                  <option value="Contractor">Contractor</option>
                  <option value="Customer">Customer</option>
                  <option value="Visitor and Public">Visitor and Public</option>
                </select>
              </div>
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Designnationvictim2"
                  >Designnation
                </label>
                <input
                  v-model="Designnationvictim2"
                  id="Designnationvictim2"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div
              class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-3"
            >
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Gendervictim2"
                  >Gender</label
                >
                <select
                  v-model="Gendervictim1"
                  id="Gendervictim2"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <option value="male">male</option>
                  <option value="female">female</option>
                </select>
              </div>
              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="Agevictim2"
                  >Age</label
                >
                <input
                  v-model="Agevictim2"
                  id="Agevictim2"
                  type="number"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="DOBvictim2"
                  >Date of Birth</label
                >
                <input
                  v-model="DOBvictim2"
                  id="DOBvictim2"
                  type="date"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div class="pt-4">
              <h2
                class="text-lg font-semibold text-slate-200 p-1 rounded capitalize bg-[#160959e2] dark:text-white"
              >
                Personal Data - Witness 1
              </h2>
            </div>

            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Namewitness1"
                  >Name</label
                >
                <input
                  v-model="Namewitness1"
                  id="Namewitness1"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="NRICpassportwitness1"
                  >NRIC / Passport</label
                >
                <input
                  v-model="NRICpassportwitness1"
                  id="NRICpassportwitness1"
                  type="number"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Nationalitywitness1"
                  >Nationality: {{ Nationalitywitness1 }}</label
                >
                <div
                  class="block flex justify-between w-full px-4 py-2 mt-2 text-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                <div>
                    <input
                      type="radio"
                      id="Malaysianwitness1"
                      value="Malaysian"
                      v-model="Nationalitywitness1"
                    />
                    <label class="ml-1" for="Malaysianwitness1">Malaysian</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="Non Malaysianwitness1"
                      value="Non Malaysian"
                      v-model="Nationalitywitness1"
                    />
                    <label class="ml-1" for="Non Malaysianwitness1"
                      >Non Malaysian</label
                    >
                  </div>
                  <Div></Div>
                </div>
              </div>
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Addresswitness1"
                  >Address</label
                >
                <textarea
                  v-model="Addresswitness1"
                  id="Addresswitness1"
                  rows="2"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                ></textarea>
              </div>

              <!-- Add v-model to other inputs as needed -->
            </div>
            <div
              class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 mx-auto cursor-pointer flex w-full"
            >
              <div class="w-full">
                <label for="" class="font-semibold text-gray-700 dark:text-gray-200"
                  >Company Name</label
                >
                <input
                  v-model="Companynamewitness1"
                  id="Companynamewitness1"
                  class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                />
              </div>
              <div class="w-full">
                <label
                  for="Companyaddresswitness1"
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  >Company Address</label
                >
                <textarea
                  v-model="Companyaddresswitness1"
                  id="Companyaddresswitness1"
                  class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  rows="2"
                  required
                ></textarea>
              </div>
            </div>
            <div
              class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-2"
            >
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Departmentwitness1"
                  >Department</label
                >
                <input
                  v-model="Departmentwitness1"
                  id="Departmentwitness1"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Designnationwitness1"
                  >Designation
                </label>
                <input
                  v-model="Designnationwitness1"
                  id="Designnationwitness1"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div
              class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-3"
            ></div>
            <div class="pt-4">
              <h2
                class="text-lg font-semibold text-slate-200 p-1 rounded capitalize bg-[#160959e2] dark:text-white"
              >
                Personal Data - Witness 2 (optional)
              </h2>
            </div>

            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Namewitness2"
                  >Name</label
                >
                <input
                  v-model="Namewitness2"
                  id="Namewitness2"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="NRICpassportwitness2"
                  >NRIC / Passport</label
                >
                <input
                  v-model="NRICpassportwitness2"
                  id="NRICpassportwitness2"
                  type="number"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Nationalitywitness2"
                  >Nationality: {{ Nationalitywitness2 }}</label
                >
                <div
                  class="block flex justify-between w-full px-4 py-2 mt-2 text-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                <div>
                    <input
                      type="radio"
                      id="Malaysianwitness2"
                      value="Malaysian"
                      v-model="Nationalitywitness2"
                    />
                    <label class="ml-1" for="Malaysianwitness2">Malaysian</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="Non Malaysianwitness2"
                      value="Non Malaysian"
                      v-model="Nationalitywitness2"
                    />
                    <label class="ml-1" for="Non Malaysianwitness2"
                      >Non Malaysian</label
                    >
                  </div>
                  <Div></Div>
                </div>
              </div>
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Addresswitness2"
                  >Address</label
                >
                <textarea
                  v-model="Addresswitness2"
                  id="Addresswitness2"
                  rows="2"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                ></textarea>
              </div>

              <!-- Add v-model to other inputs as needed -->
            </div>
            <div
              class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 mx-auto cursor-pointer flex w-full"
            >
              <div class="w-full">
                <label
                  for="Companynamewitness2"
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  >Company Name</label
                >
                <input
                  v-model="Companynamewitness2"
                  id="Companynamewitness2"
                  class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                />
              </div>
              <div class="w-full">
                <label
                  for="Companyaddresswitness2"
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  >Company Address</label
                >
                <textarea
                  v-model="Companyaddresswitness2"
                  id="Companyaddresswitness2"
                  class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  rows="2"
                  required
                ></textarea>
              </div>
            </div>
            <div
              class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-2"
            >
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Departmentwitness2"
                  >Department</label
                >
                <input
                  v-model="Departmentwitness2"
                  id="Departmentwitness2"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Designnationwitness2"
                  >Designation
                </label>
                <input
                  v-model="Designnationwitness2"
                  id="Designnationwitness2"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div class="pt-4">
              <h2
                class="text-lg font-semibold text-slate-200 p-1 rounded capitalize bg-[#160959e2] dark:text-white"
              >
                Accident Details
              </h2>
            </div>

            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Operatorname"
                  >Operator Name</label
                >
                <input
                  v-model="Operatorname"
                  id="Operatorname"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="NRICpassportad"
                  >NRIC / Passport</label
                >
                <input
                  v-model="NRICpassportad"
                  id="NRICpassportad"
                  type="number"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div class="w-full">
                <label
                  for="Companynamead"
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  >Company Name</label
                >
                <input
                  v-model="Companynamead"
                  id="Companynamead"
                  class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                />
              </div>

              <!-- Add v-model to other inputs as needed -->
            </div>
            <div
              class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1 mx-auto cursor-pointer flex w-full"
            >
              <div class="w-full">
                <label
                  for="Firstaidtreatment"
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  >First Aid Treatment</label
                >
                <textarea
                  v-model="Firstaidtreatment"
                  id="Firstaidtreatment"
                  class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  rows="2"
                  required
                ></textarea>
              </div>
              <div class="w-full">
                <label
                  for="Machineryinvolved"
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  >Machinery Involved</label
                >
                <textarea
                  v-model="Machineryinvolved"
                  id="Machineryinvolved"
                  class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  rows="2"
                  required
                ></textarea>
              </div>
              <div class="w-full">
                <label
                  for="Description"
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  >Description</label
                >
                <textarea
                  v-model="Description"
                  id="Descriptiond"
                  class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  rows="2"
                  required
                ></textarea>
              </div>
              <div class="w-full">
                <label
                  for="typeofpropertydamage"
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  >Type of Property Damage</label
                >
                <textarea
                  v-model="typeofpropertydamage"
                  id="typeofpropertydamage"
                  class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  rows="2"
                  required
                ></textarea>
              </div>
              <div class="w-full">
                <label
                  for="machineryfitnesscertificate"
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  >Machinery Fitness Certificate</label
                >
                <textarea
                  v-model="machineryfitnesscertificate"
                  id="machineryfitnesscertificate"
                  class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  rows="2"
                  required
                ></textarea>
              </div>
              <div class="w-full">
                <label
                  for="operatorcompetencycertificate"
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  >Operator Competency Certificate</label
                >
                <textarea
                  v-model="operatorcompetencycertificate"
                  id="operatorcompetencycertificate"
                  class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  rows="2"
                  required
                ></textarea>
              </div>
              <div class="w-full">
                <label
                  for="Partofinjuredbody"
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  >Part of Injured Body</label
                >
                <textarea
                  v-model="Partofinjuredbody"
                  id="Partofinjuredbody"
                  class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  rows="2"
                  required
                ></textarea>
              </div>
            </div>
            <div
              class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-2"
            >
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Costofdamages"
                  >Cost of Damages</label
                >
                <input
                  v-model="Costofdamages"
                  id="Costofdamages"
                  type="number"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Hospitalization"
                  >Hospitalication (Day)</label
                >
                <input
                  v-model="Hospitalization"
                  id="Hospitalization"
                  type="date"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Medicalleave"
                  >Medical Leave (Day)
                </label>
                <input
                  v-model="Medicalleave"
                  id="Medicalleave"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Medicationfees"
                  >Medication Fees
                </label>
                <input
                  v-model="Medicationfees"
                  id="Medicationfees"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div>
              <label class="font-semibold text-gray-700 dark:text-gray-200" for="Correctiveby"
                >Accident Details Attachment</label
              >
              <file-pond
                name="test1"
                ref="pond1"
                label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>"
                allow-multiple="true"
                accepted-file-types="image/jpeg, image/png"
                v-bind:files="myFiles1"
              />
            </div>

            <div class="pt-4">
              <h2
                class="font-semibold text-lg font-semibold text-slate-200 p-1 rounded capitalize bg-[#160959e2] dark:text-white"
              >
                Immediate Action Taken (optional)
              </h2>
            </div>
            <div class="pt-4 w-full">
              <label
                for="Actiontakendescription"
                class="font-semibold text-gray-700 dark:text-gray-200"
                >Action Taken Description</label
              >
              <textarea
                v-model="Actiontakendescription"
                id="Actiontakendescription"
                class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                rows="2"
                required
              ></textarea>
            </div>

            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="font-semibold text-gray-700 dark:text-gray-200" for="Actionby"
                  >Action By</label
                >
                <input
                  v-model="Actionby"
                  id="Actionby"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Completiondate"
                  >Completion Date</label
                >
                <input
                  v-model="Completiondate"
                  id="Completiondate"
                  type="date"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div class="pt-4">
              <h2
                class="font-semibold text-lg font-semibold text-slate-200 p-1 rounded capitalize bg-[#160959e2] dark:text-white"
              >
                Rootcause Of Incident (optional)
              </h2>
            </div>

            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <div class="pt-4 w-full">
                <label
                  for="Causeofincident"
                  class="text-gray-700 dark:text-gray-200"
                  >Cause of Incident</label
                >
                <textarea
                  v-model="Causeofincident"
                  id="Causeofincident"
                  class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  rows="2"
                  required
                ></textarea>
              </div>
            </div>
            <div class="pt-4">
              <h2
                class="font-semibold text-lg font-semibold text-slate-200 p-1 rounded capitalize bg-[#160959e2] dark:text-white"
              >
                Corrective Action
              </h2>
            </div>
            <div class="pt-4 w-full">
              <label
                for="Correctiveactiondescription"
                class="font-semibold text-gray-700 dark:text-gray-200"
                >Corrective Action Description</label
              >
              <textarea
                v-model="Correctiveactiondescription"
                id="Correctiveactiondescription"
                class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                rows="2"
                required
              ></textarea>
            </div>

            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Correctiveby"
                  >Corrective By</label
                >
                <input
                  v-model="Correctiveby"
                  id="Correctiveby"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Correctivedate"
                  >Completion Date</label
                >
                <input
                  v-model="Correctivedate"
                  id="Correctivedate"
                  type="date"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Correctiveby"
                  >Corrective Attachment</label
                >
                <file-pond
                  name="test2"
                  ref="pond2"
                  label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>"
                  allow-multiple="true"
                  accepted-file-types="image/jpeg, image/png"
                  v-bind:files="myFiles2"
                />
              </div>
            </div>

            <div class="flex justify-end mt-6">
              <button
                type="submit"
                class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>

    <!-- <div class="flex justify-end mt-6">
          <button
            type="submit"
            class="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
        </div> -->
  </main>
</template>

<script>
import vueFilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
);
export default {
  name: "cctvfromViews",
  components: { FilePond },
  data() {
    return {
      uploadedFiles: [],
      myFiles: [],
      myFiles2: [],
      isDragging: false,
      formData: {
        requesterName: "",
        department: "",
        phonenumber: "",
        daterequest: "",
        location: "",
        stockinbox: "",
        stockinkit: "",
        kitout: "",
        balancekit: "",
        // Add more form fields here
      },
      categories: [
        { id: "categoryA", value: "a", label: "Category A" },
        { id: "categoryB", value: "b", label: "Category B" },

        // Add more categories as needed
      ],
      selectedCategories: [],
      otherCategoryInput: "",
      isPreviewModalOpen: false,

      Nationalityvictim1: "",
      Nationalityvictim2: "",
      Nationalitywitness1: "",
      Nationalitywitness2: "",
    };
  },
  computed: {
    labelClasses() {
      return {
        "border-blue-400": !this.isDragging,
        "border-blue-700": this.isDragging,
        "bg-white": !this.isDragging,
        "bg-blue-100": this.isDragging,
      };
    },
  },
  methods: {
    
    handleFilePondInit() {
      // console.log("FilePond has initialized");

      // Example of instance method call on pond reference for the first component
      this.$refs.pond1.getFiles();

      // Example of instance method call on pond reference for the second component
      this.$refs.pond2.getFiles();
    },
    openPreviewModal() {
      this.isPreviewModalOpen = true;
    },
    closePreviewModal() {
      this.isPreviewModalOpen = false;
    },
    handleDragOver() {
      this.isDragging = true;
    },
    handleDragEnter() {
      this.isDragging = true;
    },
    handleDragLeave() {
      this.isDragging = false;
    },
    handleDrop(event) {
      this.isDragging = false;
      // Handle the dropped files
      const files = event.dataTransfer.files;
      this.handleFiles(files);
    },
    handleFileChange(event) {
      // Handle the selected files
      const files = event.target.files;
      this.handleFiles(files);
    },
    handleFiles(files) {
      // Process and store the files
      for (const file of files) {
        this.uploadedFiles.push(file);
      }
    },
    removeFile(index) {
      this.uploadedFiles.splice(index, 1);
    },
  },
};
</script>
<style>
/* Default light theme styles */
.filepond--panel-root {
  background-color: #eef8fd;
  /* ... other styles ... */
}

/* ... other default light theme styles ... */

/* Dark theme styles */
.dark .filepond--panel-root {
  background-color: #333; /* Dark background for the panel */
  /* ... other dark styles ... */
}

.dark .filepond--drop-label {
  color: #ddd; /* Lighter text color for dark mode */
}

.dark .filepond--label-action {
  text-decoration-color: #ccc; /* Lighter underline color for "Browse" button */
}

.dark .filepond--item-panel {
  background-color: #444; /* Dark background for file items */
}

.dark .filepond--drip-blob {
  background-color: #555; /* Dark background for the drop circle */
}

.dark .filepond--file-action-button {
  background-color: rgba(
    255,
    255,
    255,
    0.5
  ); /* Lighter background for action buttons */
  color: black; /* Dark text/icon color for action buttons */
}

/* ... other dark theme styles ... */

/* You can also customize the colors for error and success states in dark mode */
.dark [data-filepond-item-state*="error"] .filepond--item-panel {
  background-color: #ff5555; /* Darker red for errors */
}

.dark [data-filepond-item-state="processing-complete"] .filepond--item-panel {
  background-color: #55ff55; /* Darker green for success */
}
</style>
