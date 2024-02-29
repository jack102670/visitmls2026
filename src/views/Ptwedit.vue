<template>
  <div
    class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto"
  >
    <!-- Existing form pages -->
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 shadow-xl"
      >
        <section
          class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800"
        >
          <div class=" ">
            <div class="flex justify-between">
              <h1 class="font-semibold text-3xl p-3 text-gray-700">
                PERMIT TO WORK
              </h1>
              <p class="text-slate-200">Branch: {{ branch }}</p>
            </div>
            <h2
              class="text-lg font-semibold text-slate-200 p-1 rounded capitalize bg-[#160959e2] dark:text-white"
            >
              Works Information
            </h2>
          </div>

          <form>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="password"
                  >Contractor / Vendor Name
                  <span class="text-red-500">*</span></label
                >
                <input
                  id="Contractorvendorname"
                  required
                  type="text"
                  v-model="Contractorvendorname"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="password"
                  >Phone Number<span class="text-red-500">*</span></label
                >
                <input
                  id="Phonenumber"
                  required
                  v-model="Phonenumber"
                  type="number"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="password"
                  >Email<span class="text-red-500">*</span></label
                >
                <input
                  id="email"
                  required
                  v-model="Vemail"
                  type="email"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="password"
                  >Company Name<span class="text-red-500">*</span></label
                >
                <input
                  id="Companyname"
                  type="text"
                  required
                  v-model="Companyname"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Location"
                  >Location<span class="text-red-500">*</span></label
                >
                <input
                  id="Location"
                  type="text"
                  required
                  v-model="Location"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="datefrom"
                  >Date From<span class="text-red-500">*</span></label
                >
                <input
                  id="datefrom"
                  v-model="datefrom"
                  required
                  type="date"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="dateto"
                  >Date To<span class="text-red-500">*</span></label
                >
                <input
                  id="dateto"
                  type="date"
                  v-model="dateto"
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div
              class="grid-cols-1 gap-6 mt-4 sm:grid-cols-1 mx-auto cursor-pointer flex w-full"
            >
              <div class="w-full">
                <label
                  for="Detailsincident"
                  class="text-gray-700 font-semibold dark:text-gray-200"
                  >Description</label
                >
                <textarea
                  v-model="Description"
                  id="description"
                  class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  rows="5"
                ></textarea>
              </div>
            </div>
            <div class="pt-4">
              <hr />
              <h2 class="text-slate-400 font font-semibold text-center">
                Staff Details
              </h2>
              <hr />
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="username"
                  >Staff Name<span class="text-red-500">*</span></label
                >
                <input
                  id="requestername"
                  v-model="requestername"
                  required
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="department"
                  >Department<span class="text-red-500">*</span></label
                >
                <select
                  v-model="department"
                  id="department"
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <option value="" disabled selected></option>
                  <option
                    v-for="department in departments"
                    :key="department.id"
                    :value="department.name"
                  >
                    {{ department.name }}
                  </option>
                </select>
              </div>
              <div v-if="department === 'Others'">
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  :for="dynamicCustomId"
                  >Specify<span class="text-red-500">*</span>
                </label>
                <input
                  placeholder="Specify Department"
                  :id="dynamicCustomId"
                  type="text"
                  required
                  v-model="capitalizedDepartment"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="username"
                  >Staff Email<span class="text-red-500">*</span></label
                >
                <input
                  id="Staffemail"
                  v-model="Staffemail"
                  required
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <!-- <div class="flex justify-end mt-6">
                <button @click=" submitForm"
                  class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                >
                  Next
                </button>
              </div> -->
          </form>
        </section>
      </div>

      <!-- add more fields as needed -->

      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 shadow-xl"
      >
        <section
          class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800"
        >
          <h2
            class="text-lg font-semibold text-slate-200 p-1 rounded capitalize bg-[#160959e2] dark:text-white"
          >
            Hazard Identification
          </h2>
          <span class="text-sm">
            (Item with '<span class="text-red-500">*</span>' needs a special
            work permit, mark '☑️' if applicable)
          </span>

          <form>
            <div class="grid grid-cols-1 pt-6 gap-6 mt-4 sm:grid-cols-3">
              <div>
                <label for="hotWorks" class="text-gray-700 dark:text-gray-200">
                  <input
                    id="hotWorks"
                    type="checkbox"
                    value="Hot Works"
                    v-model="hazards"
                    @change="handleCheckboxChange('hotWorks')"
                  />
                  Hot Works<span class="text-red-500">*</span> (i.e Welding &
                  Flame Cutting)
                </label>
              </div>
              <div>
                <label
                  for="workingAtHeight"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="workingAtHeight"
                    type="checkbox"
                    value="Working At Height"
                    v-model="hazards"
                    @change="handleCheckboxChange('workingAtHeight')"
                  />
                  Working at Height<span class="text-red-500">*</span> (falling
                  height > 1.8m)
                </label>
              </div>
              <div>
                <label
                  for="electricalHighTension"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="electricalHighTension"
                    type="checkbox"
                    value="Electrical High Tension"
                    v-model="hazards"
                  />
                  Electrical High Tension
                </label>
              </div>
              <div>
                <label
                  for="fireProtectionSystemImpairment"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="fireProtectionSystemImpairment"
                    type="checkbox"
                    value="Fire Protection System Impairment"
                    v-model="hazards"
                  />
                  Fire Protection System Impairment
                </label>
              </div>
              <div>
                <label
                  for="hazardousSubstances"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="hazardousSubstances"
                    type="checkbox"
                    value="Hazardous Substances"
                    v-model="hazards"
                  />
                  Hazardous Substances
                </label>
              </div>
              <div>
                <label
                  for="dustPollutantsExposure"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="dustPollutantsExposure"
                    type="checkbox"
                    value="Dust Pollutants Exposure"
                    v-model="hazards"
                  />
                  Dust/Pollutants exposure
                </label>
              </div>
              <div>
                <label
                  for="hydraulicSpillPneumaticJet"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="hydraulicSpillPneumaticJet"
                    type="checkbox"
                    value="Hydraulic Spill Pneumatic Jet"
                    v-model="hazards"
                  />
                  Hydraulic Spill/Pneumatic Jet
                </label>
              </div>
              <div>
                <label
                  for="trappingPointsNipPoints"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="trappingPointsNipPoints"
                    type="checkbox"
                    v-model="hazards"
                    value="Trapping Points Nip Points"
                  />
                  Trapping Points/Nip Points
                </label>
              </div>
              <div>
                <label
                  for="inadequateIllumination"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="inadequateIllumination"
                    type="checkbox"
                    v-model="hazards"
                    value="Inadequate Illumination"
                  />
                  Inadequate Illumination
                </label>
              </div>
            </div>
          </form>

          <!-- <div class="flex justify-between mt-6">
              <button
                @click="goBack"
                class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                back
              </button>
              <button
                @click="nextPage"
                class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Next
              </button>
            </div> -->
        </section>
      </div>
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 shadow-xl"
      >
        <section
          class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800"
        >
          <h2
            class="text-lg font-semibold text-slate-200 p-1 rounded capitalize bg-[#160959e2] dark:text-white"
          >
            Determined Control
          </h2>

          <form>
            <div class="flex justify-between">

          
            <h2
              class="text-md font-bold text-gray-700 pt-4 capitalize dark:text-white"
            >
              C[1] Personal Protective Equipment 
            

            </h2>  
            <div class="grid grid-cols-1 items-center space-x-2 text-xs" style="white-space: pre-line;">
  <span v-for="(item, index) in preequipment" :key="index" class="px-2 py-1 bg-gray-200 rounded flex items-center space-x-1">
    <span>{{ item }}</span>
    <button class="text-red-500 p-1" @click="removeEquipment(index)"> x</button>
  </span>
</div>


</div>
            <div class="grid grid-cols-1 pt-4 gap-6 mt-4 sm:grid-cols-2">
              <!-- Loop through safety equipment options -->
              <div v-for="(item, index) in equipmentOptions" :key="index">
                <label class="text-gray-700 dark:text-gray-200">
                  <input type="checkbox" :value="item" v-model="equipment" />
                  {{ item }}
                </label>
              </div>
              <div>
                <label class="text-gray-700 dark:text-gray-200">
                  <input
                    type="checkbox"
                    value="OthersPPE"
                    v-model="showOthersInput"
                  />
                  Others
                </label>
              </div>

              <!-- Conditional rendering for the input field -->
              <div v-if="showOthersInput">
                <input
                  class="p-2 bg-slate-200"
                  type="text"
                  v-model="othersPPE"
                  placeholder="Specify others..."
                  @keyup.enter="addOthersToEquipment"
                />
                <button
                  @click="addOthersToEquipment"
                  class="px-4 py-2 mt-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            </div>
            <h2
              class="text-md font-bold text-gray-700 pt-4 capitalize dark:text-white"
            >
              C[2] Safety Measure {{ safetyMeasure }}
            </h2>
            <div class="grid grid-cols-1 pt-4 gap-6 mt-4 sm:grid-cols-2">
              <div v-for="item in safetyMeasureOptions" :key="item">
                <label class="text-gray-700 dark:text-gray-200">
                  <input
                    type="checkbox"
                    :value="item"
                    v-model="safetyMeasure"
                  />
                  {{ item }}
                </label>
              </div>
            </div>

            <h2
              class="text-md font-bold text-gray-700 pt-4 capitalize dark:text-white"
            >
              C[3] Isolation {{ isolation }}
            </h2>
            <div class="grid grid-cols-1 pt-4 gap-6 mt-4 sm:grid-cols-2">
              <div v-for="item in isolationOptions" :key="item">
                <label class="text-gray-700 dark:text-gray-200">
                  <input type="checkbox" :value="item" v-model="isolation" />
                  {{ item }}
                </label>
              </div>
            </div>
            <h2
              class="text-md font-bold text-gray-700 pt-4 capitalize dark:text-white"
            >
              C[4] Plant Support
            </h2>
            <div class="grid grid-cols-1 pt-4 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700 dark:text-gray-200">
                  <input type="checkbox" v-model="plantSupport" value="Water" />
                  Water
                </label>
              </div>
              <div>
                <label class="text-gray-700 dark:text-gray-200">
                  <input
                    type="checkbox"
                    value="PS-Electrical"
                    v-model="plantSupport"
                  />
                  Electrical
                </label>
              </div>
              <div>
                <label class="text-gray-700 dark:text-gray-200">
                  <input
                    type="checkbox"
                    value="Compressed Air"
                    v-model="plantSupport"
                  />
                  Compressed Air
                </label>
              </div>

              <div>
                <label class="text-gray-700 dark:text-gray-200">
                  <input
                    type="checkbox"
                    value="Illumination"
                    v-model="plantSupport"
                  />
                  Illumination
                </label>
              </div>
            </div>
          </form>
          <!-- <div class="flex justify-between mt-6">
              <button
                @click="goBack"
                class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                back
              </button>
              <button
                @click="nextPage"
                class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Next
              </button>
            </div> -->
        </section>
      </div>
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8"
      >
        <section
          class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800"
        >
          <h2
            class="text-lg font-semibold text-gray-700 capitalize dark:text-white"
          >
            Upload Files (List of Local, Foreign and Consent Letter)
          </h2>

          <form>
            <div class="grid grid-cols-2 gap-6 pt-5">
              <div>
                <div class="pt-3">
                  <FilePond
                    ref="pond1"
                    name="file"
                    :server="null"
                    :allowMultiple="true"
                    :maxFileSize="'5MB'"
                    :acceptedFileTypes="[
                      'image/png',
                      'image/jpeg',
                      'application/pdf',
                      'application/vnd.ms-excel',
                      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                    ]"
                    :fileRenameFunction="renameFile"
                    @addfile="handleAddFile1"
                    @removefile="handleRemoveFile1"
                  />
                </div>
                <!-- component -->
              </div>
            </div>
          </form>
          <!-- <div class="flex justify-between mt-6">
            <button
              @click="goBack"
              class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              back
            </button>
            <button
              v-if="addExtraPage"
              @click="nextPage"
              class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Next
            </button>
          </div> -->
        </section>
      </div>
      <div
        v-if="hotWorks"
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8"
      >
        <section
          class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800"
        >
          <div class=" ">
            <h2
              class="text-lg font-bold text-slate-200 p-1 rounded capitalize bg-[#160959e2] dark:text-white"
            >
              Hot Work Permit
            </h2>
          </div>

          <form>
            <div
              class="grid-cols-1 gap-6 mt-4 sm:grid-cols-2 mx-auto cursor-pointer flex w-full"
            >
              <div>
                <label
                  for="Location"
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  >Location</label
                >
                <input
                  v-model="hotWorkLocation"
                  id="Location"
                  class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  rows="2"
                  required
                />
              </div>
              <div class="w-full">
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Worksdescription"
                  >Works Description</label
                >
                <textarea
                  id="Worksdescription"
                  v-model="Worksdescription"
                  type="text"
                  rows="1"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                ></textarea>
              </div>
              <!-- <div>
                <label class="font-bold text-gray-700 dark:text-gray-200" for="location"
                  >Location</label
                >
                <select
                  v-model="location"
                  id="location"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <option value="a">a</option>
                  <option value="b">b</option>
                </select>
              </div> -->
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="todate"
                  >Datetime Start</label
                >
                <input
                  id="datetimestart"
                  v-model="datetimestart"
                  type="datetime-local"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Datetimecomplete"
                  >Datetime Complete</label
                >
                <input
                  id="Datetimecomplete"
                  v-model="Datetimecomplete"
                  type="datetime-local"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div class="pt-6">
              <hr />
              <div class="pt-2"></div>
              <label
                class="font-bold text-gray-700 dark:text-gray-200"
                for="workInvolvement"
              >
                General Requirement
              </label>
            </div>

            <div class="pt-2">
              <hr />
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <div>
                <label
                  for="sprinklersOperable"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="sprinklersOperable"
                    type="checkbox"
                    v-model="reqGeneral"
                    value="Available sprinklers, hose streams and extinguishers are in service and operable."
                  />
                  Available sprinklers, hose streams and extinguishers are in
                  service and operable.
                </label>
              </div>
              <div>
                <label
                  for="hotWorkEquipment"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="hotWorkEquipment"
                    type="checkbox"
                    v-model="reqGeneral"
                    value="Hot work equipment is in good working condition in accordance with manufacturer’s specifications."
                  />
                  Hot work equipment is in good working condition in accordance
                  with manufacturer’s specifications.
                </label>
              </div>
              <div>
                <label
                  for="specialPermission"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="specialPermission"
                    type="checkbox"
                    v-model="reqGeneral"
                    value="Special permission obtained to conduct hot work on metal vessels or piping lined with rubber or plastic."
                  />
                  Special permission obtained to conduct hot work on metal
                  vessels or piping lined with rubber or plastic.
                </label>
              </div>
            </div>

            <div class="pt-6">
              <hr />
              <div class="pt-2"></div>
              <label
                class="font-bold text-gray-700 dark:text-gray-200"
                for="workInvolvement"
              >
                Requirements within 35 ft. (11m) of hot work
              </label>
            </div>
            <div class="pt-2">
              <hr />
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <!-- Checklist Section 2 -->

              <div>
                <label
                  for="flammableRemoved"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="flammableRemoved"
                    type="checkbox"
                    v-model="requirement"
                    value="Flammable liquid, dust, lint, and oily deposits removed and floors swept clean."
                  />
                  Flammable liquid, dust, lint, and oily deposits removed and
                  floors swept clean.
                </label>
              </div>
              <div>
                <label
                  for="explosiveAtmosphere"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="explosiveAtmosphere"
                    type="checkbox"
                    v-model="requirement"
                    value="Explosive atmosphere in area eliminated."
                  />
                  Explosive atmosphere in area eliminated.
                </label>
              </div>
              <div>
                <label
                  for="combustibleFloors"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="combustibleFloors"
                    type="checkbox"
                    v-model="requirement"
                    value="Combustible floors wet down or covered with damp sand or fire-resistive/noncombustible materials or equivalent."
                  />
                  Combustible floors wet down or covered with damp sand or
                  fire-resistive/noncombustible materials or equivalent.
                </label>
              </div>
              <div>
                <label
                  for="electricalShockProtection"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="electricalShockProtection"
                    type="checkbox"
                    v-model="requirement"
                    value="Personnel protected from electrical shock when floors are wet."
                  />
                  Personnel protected from electrical shock when floors are wet.
                </label>
              </div>
              <div>
                <label
                  for="removeMaterial"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="removeMaterial"
                    type="checkbox"
                    v-model="requirement"
                    value=" Remove flammable and combustible material where possible. Otherwise protect with fire blankets, guards or metal shields."
                  />
                  Remove flammable and combustible material where possible.
                  Otherwise protect with fire blankets, guards or metal shields.
                </label>
              </div>
              <div>
                <label
                  for="openingsCovered"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="openingsCovered"
                    type="checkbox"
                    v-model="requirement"
                    value="All wall and floor openings covered."
                  />
                  All wall and floor openings covered.
                </label>
              </div>
            </div>

            <div class="pt-6">
              <hr />
              <div class="pt-2"></div>
              <label
                class="font-bold text-gray-700 dark:text-gray-200"
                for="workInvolvement"
              >
                Requirements for hot work on walls, ceilings or roofs.
              </label>
            </div>
            <div class="pt-2">
              <hr />
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <!-- Checklist Section 3 -->

              <div>
                <label
                  for="noncombustibleConstruction"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="noncombustibleConstruction"
                    type="checkbox"
                    v-model="req_Walls"
                    value="Construction is noncombustible and without combustible coverings or insulation."
                  />
                  Construction is noncombustible and without combustible
                  coverings or insulation.
                </label>
              </div>
              <div>
                <label
                  for="combustibleMaterialMoved"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="combustibleMaterialMoved"
                    type="checkbox"
                    v-model="req_Walls"
                    value="Combustible material on other side of walls, ceilings, or roofs is moved away."
                  />
                  Combustible material on other side of walls, ceilings, or
                  roofs is moved away.
                </label>
              </div>
            </div>
            <div class="pt-6">
              <hr />
              <div class="pt-2"></div>
              <label
                class="font-bold text-gray-700 dark:text-gray-200"
                for="workInvolvement"
              >
                Requirements for hot work on enclosed equipment:
                <!-- {{ req_Enc_Equip }} -->
              </label>
            </div>
            <div class="pt-2">
              <hr />
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <!-- Checklist Section 4 -->

              <div>
                <label
                  for="enclosedEquipmentCleaned"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="enclosedEquipmentCleaned"
                    type="checkbox"
                    v-model="req_Enc_Equip"
                    value="Enclosed equipment is cleaned of all combustibles."
                  />
                  Enclosed equipment is cleaned of all combustibles.
                </label>
              </div>
              <div>
                <label
                  for="containerarepurged"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="containerarepurged"
                    type="checkbox"
                    v-model="req_Enc_Equip"
                    value="Container are purged of flammable liquid/vapor."
                  />
                  Container are purged of flammable liquid/vapor.
                </label>
              </div>
            </div>

            <div class="pt-6">
              <hr />
              <div class="pt-2"></div>
              <label
                class="font-bold text-gray-700 dark:text-gray-200"
                for="workInvolvement"
              >
                Requirements for hot work fire watchman and fire monitoring:
                <!-- {{ reqDistance }} -->
              </label>
            </div>
            <div class="pt-2">
              <hr />
            </div>
            <div>
              <label
                for="fireWatchProvided"
                class="text-gray-700 dark:text-gray-200"
              >
                <input
                  id="fireWatchProvided"
                  type="checkbox"
                  v-model="reqDistance"
                  value=" Fire watch is provided during and for a minimum of 30 min. after hot work, including any break activity."
                />
                Fire watch is provided during and for a minimum of 30 min. after
                hot work, including any break activity.
              </label>
            </div>
            <div>
              <label
                for="fireWatchExtinguishers"
                class="text-gray-700 dark:text-gray-200"
              >
                <input
                  id="fireWatchExtinguishers"
                  type="checkbox"
                  v-model="reqDistance"
                  value="Fire watch is provided with suitable extinguishers and, where practical, a charged small hose."
                />
                Fire watch is provided with suitable extinguishers and, where
                practical, a charged small hose.
              </label>
            </div>
            <div>
              <label
                for="fireWatchTrained"
                class="text-gray-700 dark:text-gray-200"
              >
                <input
                  id="fireWatchTrained"
                  type="checkbox"
                  v-model="reqDistance"
                  value="Fire watch is trained in use of equipment and in sounding alarm."
                />
                Fire watch is trained in use of equipment and in sounding alarm.
              </label>
            </div>
            <div>
              <label
                for="fireWatchRequired"
                class="text-gray-700 dark:text-gray-200"
              >
                <input
                  id="fireWatchRequired"
                  type="checkbox"
                  v-model="reqDistance"
                  value="Fire watch can be required in adjoining areas, above and below."
                />
                Fire watch can be required in adjoining areas, above and below.
              </label>
            </div>
            <div class="">
              <label
                for="fireWatchMonitoringExtended"
                class="text-gray-700 dark:text-gray-200"
              >
                <input
                  id="fireWatchMonitoringExtended"
                  type="checkbox"
                  v-model="reqDistance"
                  value="Per the PAI/fire watch, monitoring of hot work area has been extended beyond the 30 min."
                />
                Per the PAI/fire watch, monitoring of hot work area has been
                extended beyond the 30 min.
              </label>
            </div>
          </form>
          <div class="flex justify-end mt-6">
            <!-- <button @click="nextPage"
                class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Next
              </button> -->
          </div>
        </section>
      </div>
      <div
        v-if="workingAtHeight"
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8"
      >
        <section
          class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800"
        >
          <div class=" ">
            <h2
              class="text-lg font-semibold text-slate-200 p-1 rounded capitalize bg-[#160959e2] dark:text-white"
            >
              Work At Height Permit
            </h2>
          </div>

          <form>
            <div
              class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 mx-auto cursor-pointer w-full"
            >
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Contractorname"
                  >Contractor Name<span class="text-red-500">*</span></label
                >
                <input
                  v-model="companyName"
                  id="Contractorname"
                  type="text"
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Contractorcompany"
                  >Contractor Company :<span class="text-red-500"
                    >*</span
                  ></label
                >
                <input
                  v-model="contractorName"
                  id="Contractorcompany"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Startdate"
                  >Start Date<span class="text-red-500">*</span></label
                >
                <input
                  v-model="startDateTime"
                  id="Startdate"
                  type="datetime-local"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Completedate"
                  >Complete Date<span class="text-red-500">*</span></label
                >
                <input
                  v-model="completeDateTime"
                  id="Completedate"
                  type="datetime-local"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Location"
                  >Location<span class="text-red-500">*</span></label
                >
                <select
                  v-model="workLocation"
                  id="Location"
                  type="text"
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <option value="Security">Security</option>
                  <option value="Safety">Safety</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="ICT">ICT</option>
                </select>
              </div>
            </div>
            <div
              class="grid-cols-1 gap-6 mt-4 sm:grid-cols-1 mx-auto cursor-pointer flex w-full"
            >
              <div class="w-full">
                <label
                  for="Descofwork"
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  >Description Of Work</label
                >
                <textarea
                  v-model="workDescription"
                  id="Descofwork"
                  class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  rows="3"
                ></textarea>
              </div>
            </div>

            <div class="pt-4">
              <hr />
              <div class="pt-2"></div>
              <label
                class="font-bold text-gray-700 dark:text-gray-200"
                for="authority"
                >Which of the following hazards are associated with this work?
                <!-- {{ waH_Hazard }} -->
              </label>
              <div class="pt-2">
                <hr />
              </div>
            </div>
            <div class="grid grid-cols-1 pt-2 gap-6 mt-4 sm:grid-cols-3">
              <!-- Row for Falling objects -->

              <!-- Falling objects -->
              <div>
                <label
                  for="fallingObjects"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="fallingObjects"
                    type="checkbox"
                    v-model="waH_Hazard"
                    value="Falling objects"
                  />
                  Falling objects
                </label>
              </div>
              <!-- Unguarded edges -->
              <div>
                <label
                  for="unguardedEdges"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="unguardedEdges"
                    type="checkbox"
                    v-model="waH_Hazard"
                    value="Unguarded edges"
                  />
                  Unguarded edges
                </label>
              </div>
              <!-- High winds/weather -->
              <div>
                <label
                  for="highWindsWeather"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="highWindsWeather"
                    type="checkbox"
                    v-model="waH_Hazard"
                    value="High winds/weather"
                  />
                  High winds/weather
                </label>
              </div>
              <!-- Slope of surface -->
              <div>
                <label
                  for="slopeOfSurface"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="slopeOfSurface"
                    type="checkbox"
                    v-model="waH_Hazard"
                    value="Slope of surface"
                  />
                  Slope of surface
                </label>
              </div>
              <!-- Overhead electrical cables -->
              <div>
                <label
                  for="overheadElectricalCables"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="overheadElectricalCables"
                    type="checkbox"
                    v-model="waH_Hazard"
                    value="Overhead electrical cables"
                  />
                  Overhead electrical cables
                </label>
              </div>
              <!-- Other (provide details) -->
              <div>
                <label
                  for="otherHazards"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="otherHazards"
                    type="checkbox"
                    v-model="waH_Hazard"
                    value="Other (provide details):"
                  />
                  Other (provide details):
                </label>
              </div>

              <!-- Column 2 -->

              <!-- Limited roof weight loading (placarded) -->
              <div>
                <label
                  for="limitedRoofWeight"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="limitedRoofWeight"
                    type="checkbox"
                    v-model="waH_Hazard"
                    value="Limited roof weight loading (placarded)"
                  />
                  Limited roof weight loading (placarded)
                </label>
              </div>
              <!-- Unsecured ladders -->
              <div>
                <label
                  for="unsecuredLadders"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="unsecuredLadders"
                    type="checkbox"
                    v-model="waH_Hazard"
                    value="Unsecured ladders"
                  />
                  Unsecured ladders
                </label>
              </div>
              <!-- Uneven floor surfaces -->
              <div>
                <label
                  for="unevenFloorSurfaces"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="unevenFloorSurfaces"
                    type="checkbox"
                    v-model="waH_Hazard"
                    value="Uneven floor surfaces"
                  />
                  Uneven floor surfaces
                </label>
              </div>
              <!-- Fragile roofs -->
              <div>
                <label
                  for="fragileRoofs"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="fragileRoofs"
                    type="checkbox"
                    v-model="waH_Hazard"
                    value="Fragile roofs"
                  />
                  Fragile roofs
                </label>
              </div>
              <!-- Slippery surface -->
              <div>
                <label
                  for="slipperySurface"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="slipperySurface"
                    type="checkbox"
                    v-model="waH_Hazard"
                    value="Slippery surface"
                  />
                  Slippery surface
                </label>
              </div>
              <!-- Additional other checkbox -->
              <div>
                <label
                  for="additionalOther"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="additionalOther"
                    type="checkbox"
                    v-model="waH_Hazard"
                    value="Additional other (provide details)"
                  />
                  Additional other (provide details):
                </label>
              </div>
            </div>
            <div class="pt-6">
              <hr />
              <div class="pt-2"></div>
              <label
                class="font-bold text-gray-700 dark:text-gray-200"
                for="workInvolvement"
              >
                Does the work involve use of any of the following? (Please
                indicate only where relevant)
              </label>
            </div>
            <div class="pt-2">
              <hr />
            </div>
            <div class="grid grid-cols-1 pt-2 gap-6 mt-4 sm:grid-cols-3">
              <!-- Ladders -->
              <div>
                <label for="ladders" class="text-gray-700 dark:text-gray-200">
                  <input id="ladders" type="checkbox" v-model="checkladder" />
                  Ladders
                </label>
              </div>

              <div>
                <label
                  for="scaffolding"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="scaffolding"
                    type="checkbox"
                    v-model="checkscaffolding"
                  />
                  Scaffolding
                </label>
              </div>
              <!-- Lift Truck -->
              <div>
                <label for="liftTruck" class="text-gray-700 dark:text-gray-200">
                  <input
                    id="liftTruck"
                    type="checkbox"
                    v-model="liftruckScissorlift"
                  />
                  Lift truck / Scissor lift
                </label>
              </div>

              <!-- Scissor Lift -->

              <!-- Working Alone or in Isolation -->
              <div>
                <label
                  for="workingAlone"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input id="workingAlone" type="checkbox" />
                  Working alone or in isolation
                </label>
              </div>

              <!-- Travel Restraint -->
              <div>
                <label
                  for="travelRestraint"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input id="travelRestraint" type="checkbox" />
                  Travel restraint
                </label>
              </div>

              <!-- Scaffolding -->

              <!-- Man Cage (secured) -->
              <div>
                <label for="manCage" class="text-gray-700 dark:text-gray-200">
                  <input id="manCage" type="checkbox" v-model="mancage" />
                  Man cage (secured)
                </label>
              </div>

              <!-- Elevated Work Platform (EWP) -->
              <div>
                <label for="ewp" class="text-gray-700 dark:text-gray-200">
                  <input id="ewp" type="checkbox" />
                  Elevated work platform (EWP)
                </label>
              </div>

              <!-- Climbing Technique (using lanyard) -->
              <div>
                <label
                  for="climbingTechnique"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input id="climbingTechnique" type="checkbox" />
                  Climbing technique (using lanyard)
                </label>
              </div>

              <!-- Other (provide details) -->
              <!-- <div>
                <label for="otherEquipment" class="text-gray-700 dark:text-gray-200">
                  <input id="otherEquipment" type="checkbox" />
                  Other (provide details):
                </label>
              </div> -->
            </div>
            <div v-if="checkladder">
              <div class="pt-6">
                <hr />
                <div class="pt-2"></div>
                <label
                  class="font-bold text-gray-700 dark:text-gray-200"
                  for="workInvolvement"
                >
                  Ladder
                  <!-- {{ waH_Ladders }} -->
                </label>
              </div>
              <div class="pt-2">
                <hr />
              </div>

              <div class="grid grid-cols-1 pt-2 gap-6 mt-4 sm:grid-cols-2">
                <!-- Is the ladder in good condition and suitable for the task? -->
                <div>
                  <label
                    for="ladderCondition"
                    class="text-gray-700 dark:text-gray-200"
                  >
                    <input
                      id="ladderCondition"
                      type="checkbox"
                      v-model="waH_Ladders"
                      value="Is the ladder in good condition and suitable for the task?"
                    />
                    Is the ladder in good condition and suitable for the task?
                  </label>
                </div>

                <!-- Is the ladder tall enough for the task? -->
                <div>
                  <label
                    for="ladderHeight"
                    class="text-gray-700 dark:text-gray-200"
                  >
                    <input
                      id="ladderHeight"
                      type="checkbox"
                      v-model="waH_Ladders"
                      value="Is the ladder tall enough for the task?"
                    />
                    Is the ladder tall enough for the task?
                  </label>
                </div>

                <!-- Is the ladder on a level footing? -->
                <div>
                  <label
                    for="ladderLevel"
                    class="text-gray-700 dark:text-gray-200"
                  >
                    <input
                      id="ladderLevel"
                      type="checkbox"
                      v-model="waH_Ladders"
                      value="Is the ladder on a level footing?"
                    />
                    Is the ladder on a level footing?
                  </label>
                </div>

                <!-- Is the area below barricaded? -->
                <div>
                  <label
                    for="areaBarricaded"
                    class="text-gray-700 dark:text-gray-200"
                  >
                    <input
                      id="areaBarricaded"
                      type="checkbox"
                      v-model="waH_Ladders"
                      value="Is the area below barricaded?"
                    />
                    Is the area below barricaded?
                  </label>
                </div>

                <!-- Is the ladder secured top and bottom? -->
                <div>
                  <label
                    for="ladderSecured"
                    class="text-gray-700 dark:text-gray-200"
                  >
                    <input
                      id="ladderSecured"
                      type="checkbox"
                      v-model="waH_Ladders"
                      value="Is the ladder secured top and bottom? (not applicable for step ladders)"
                    />
                    Is the ladder secured top and bottom? (not applicable for
                    step ladders)
                  </label>
                </div>

                <!-- Is the ladder extended with at least three (3) rungs or 900mm overlap? -->
                <div>
                  <label
                    for="ladderExtended"
                    class="text-gray-700 dark:text-gray-200"
                  >
                    <input
                      id="ladderExtended"
                      type="checkbox"
                      v-model="waH_Ladders"
                      value="Is the ladder extended with at least three (3) rungs or 900mm overlap?"
                    />
                    Is the ladder extended with at least three (3) rungs or
                    900mm overlap?
                  </label>
                </div>

                <!-- Is the ladder position 1 in 4 ratio? -->
                <div>
                  <label
                    for="ladderRatio"
                    class="text-gray-700 dark:text-gray-200"
                  >
                    <input
                      id="ladderRatio"
                      type="checkbox"
                      v-model="waH_Ladders"
                      value="Is the ladder position 1 in 4 ratio?"
                    />
                    Is the ladder position 1 in 4 ratio?
                  </label>
                </div>
              </div>
            </div>

            <div v-if="checkscaffolding">
              <div class="pt-6">
                <hr />
                <div class="pt-2"></div>
                <label
                  class="font-bold text-gray-700 dark:text-gray-200"
                  for="workInvolvement"
                >
                  Scaffolding
                </label>
              </div>
              <div class="pt-2">
                <hr />
              </div>
              <div class="grid grid-cols-1 pt-2 gap-6 mt-4 sm:grid-cols-2">
                <!-- Are kick boards in place? -->
                <div>
                  <label
                    for="kickBoards"
                    class="text-gray-700 dark:text-gray-200"
                  >
                    <input
                      id="kickBoards"
                      type="checkbox"
                      v-model="waH_Scaffolding"
                      value=" Are kick boards in place?"
                    />
                    Are kick boards in place?
                  </label>
                </div>

                <!-- Are hand rails in place? -->
                <div>
                  <label
                    for="handRails"
                    class="text-gray-700 dark:text-gray-200"
                  >
                    <input
                      id="handRails"
                      type="checkbox"
                      v-model="waH_Scaffolding"
                      value="Are hand rails in place?"
                    />
                    Are hand rails in place?
                  </label>
                </div>

                <!-- Are mid rails in place? -->
                <div>
                  <label
                    for="midRails"
                    class="text-gray-700 dark:text-gray-200"
                  >
                    <input
                      id="midRails"
                      type="checkbox"
                      v-model="waH_Scaffolding"
                      value="Are mid rails in place?"
                    />
                    Are mid rails in place?
                  </label>
                </div>

                <!-- Is the ladder installed internally (if applicable)? -->
                <div>
                  <label
                    for="internalLadder"
                    class="text-gray-700 dark:text-gray-200"
                  >
                    <input
                      id="internalLadder"
                      type="checkbox"
                      v-model="waH_Scaffolding"
                      value="Is the ladder installed internally (if applicable)?"
                    />
                    Is the ladder installed internally (if applicable)?
                  </label>
                </div>

                <!-- Is the scaffold on a solid footing? -->
                <div>
                  <label
                    for="solidFooting"
                    class="text-gray-700 dark:text-gray-200"
                  >
                    <input
                      id="solidFooting"
                      type="checkbox"
                      v-model="waH_Scaffolding"
                      value="Is the scaffold on a solid footing?"
                    />
                    Is the scaffold on a solid footing?
                  </label>
                </div>

                <!-- Are the wheels in locked position when in use? -->
                <div>
                  <label
                    for="wheelsLocked"
                    class="text-gray-700 dark:text-gray-200"
                  >
                    <input
                      id="wheelsLocked"
                      type="checkbox"
                      v-model="waH_Scaffolding"
                      value="Are the wheels in locked position when in use? (e.g. mobile scaffold)"
                    />
                    Are the wheels in locked position when in use? (e.g. mobile
                    scaffold)
                  </label>
                </div>

                <!-- Is the area below barricaded? -->
                <div>
                  <label
                    for="areaBarricadedScaffold"
                    class="text-gray-700 dark:text-gray-200"
                  >
                    <input
                      id="areaBarricadedScaffold"
                      type="checkbox"
                      v-model="waH_Scaffolding"
                      value="Is the area below barricaded?"
                    />
                    Is the area below barricaded?
                  </label>
                </div>

                <!-- Is the scaffold operating within safe working limits? -->
                <div>
                  <label
                    for="safeWorkingLimits"
                    class="text-gray-700 dark:text-gray-200"
                  >
                    <input
                      id="safeWorkingLimits"
                      type="checkbox"
                      v-model="waH_Scaffolding"
                      value="Is the scaffold operating within safe working limits?"
                    />
                    Is the scaffold operating within safe working limits?
                  </label>
                </div>

                <!-- Is the area free from overhead obstructions? -->
                <div>
                  <label
                    for="freeFromObstructions"
                    class="text-gray-700 dark:text-gray-200"
                  >
                    <input
                      id="freeFromObstructions"
                      type="checkbox"
                      v-model="waH_Scaffolding"
                      value="Is the area free from overhead obstructions?"
                    />
                    Is the area free from overhead obstructions?
                  </label>
                </div>

                <!-- Is the scaffold erected by a competent person? -->
                <div>
                  <label
                    for="competentPerson"
                    class="text-gray-700 dark:text-gray-200"
                  >
                    <input
                      id="competentPerson"
                      type="checkbox"
                      v-model="waH_Scaffolding"
                      value="Is the scaffold erected by a competent person?"
                    />
                    Is the scaffold erected by a competent person?
                  </label>
                </div>
              </div>
            </div>
            <div v-if="liftruckScissorlift">
              <div class="pt-6">
                <hr />
                <div class="pt-2"></div>
                <label
                  class="font-bold text-gray-700 dark:text-gray-200"
                  for="workInvolvement"
                >
                  Lift truck / Scissor lift
                </label>
              </div>
              <div class="pt-2">
                <hr />
              </div>
              <div class="grid grid-cols-1 pt-2 gap-6 mt-4 sm:grid-cols-2">
                <!-- Permission to use attained? -->
                <div>
                  <label
                    for="permissionToUse"
                    class="text-gray-700 dark:text-gray-200"
                  >
                    <input
                      id="permissionToUse"
                      type="checkbox"
                      v-model="waH_LiftTruck"
                      value="Permission to use attained?"
                    />
                    Permission to use attained?
                  </label>
                </div>

                <!-- Equipment in good working order? -->
                <div>
                  <label
                    for="equipmentGoodOrder"
                    class="text-gray-700 dark:text-gray-200"
                  >
                    <input
                      id="equipmentGoodOrder"
                      type="checkbox"
                      v-model="waH_LiftTruck"
                      value="Equipment in good working order?"
                    />
                    Equipment in good working order?
                  </label>
                </div>

                <!-- Battery fully charged? -->
                <div>
                  <label
                    for="batteryCharged"
                    class="text-gray-700 dark:text-gray-200"
                  >
                    <input
                      id="batteryCharged"
                      type="checkbox"
                      v-model="waH_LiftTruck"
                      value="Battery fully charged?"
                    />
                    Battery fully charged?
                  </label>
                </div>

                <!-- Equipment physically checked? -->
                <div>
                  <label
                    for="equipmentChecked"
                    class="text-gray-700 dark:text-gray-200"
                  >
                    <input
                      id="equipmentChecked"
                      type="checkbox"
                      v-model="waH_LiftTruck"
                      value="Equipment physically checked?"
                    />
                    Equipment physically checked?
                  </label>
                </div>
              </div>
            </div>

            <div v-if="mancage">
              <div class="pt-6">
                <hr />
                <div class="pt-2"></div>
                <label
                  class="font-bold text-gray-700 dark:text-gray-200"
                  for="workInvolvement"
                >
                  Man cage
                </label>
              </div>
              <div class="pt-2">
                <hr />
              </div>
              <div class="grid grid-cols-1 pt-2 gap-6 mt-4 sm:grid-cols-2">
                <!-- Securing chain and shackle available? -->
                <div>
                  <label
                    for="securingChain"
                    class="text-gray-700 dark:text-gray-200"
                  >
                    <input
                      id="securingChain"
                      type="checkbox"
                      v-model="waH_ManCage"
                      value="Securing chain and shackle available?"
                    />
                    Securing chain and shackle available?
                  </label>
                </div>

                <!-- Free of physical damage? -->
                <div>
                  <label
                    for="freeOfDamage"
                    class="text-gray-700 dark:text-gray-200"
                  >
                    <input
                      id="freeOfDamage"
                      type="checkbox"
                      v-model="waH_ManCage"
                      value="Free of physical damage?"
                    />
                    Free of physical damage?
                  </label>
                </div>

                <!-- Appropriate slot size for forks available? -->
                <div>
                  <label
                    for="slotSize"
                    class="text-gray-700 dark:text-gray-200"
                  >
                    <input
                      id="slotSize"
                      type="checkbox"
                      v-model="waH_ManCage"
                      value="Appropriate slot size for forks available?"
                    />
                    Appropriate slot size for forks available?
                  </label>
                </div>
              </div>
            </div>

            <div class="pt-6">
              <hr />
              <div class="pt-2"></div>
            </div>
            <label
              class="font-bold text-gray-700 dark:text-gray-200"
              for="workInvolvement"
            >
              Emergency Arrangements for use of Fall Arrest Equipment
              <span class="text-sm">(not applicable for fall restraint)</span>
            </label>
            <div class="pt-2">
              <hr />
            </div>

            <div class="grid grid-cols-1 pt-2 gap-6 mt-4 sm:grid-cols-2">
              <!-- Have emergency and rescue procedures been established, tested and recorded? -->
              <div>
                <label
                  for="emergencyProcedures"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="emergencyProcedures"
                    type="checkbox"
                    v-model="waH_Emergency"
                    value="Have emergency and rescue procedures been established, tested and recorded? (These items can be recorded in JHA)"
                  />
                  Have emergency and rescue procedures been established, tested
                  and recorded? (These items can be recorded in JHA)
                </label>
              </div>

              <!-- Have appropriate communication arrangements been established for potential emergencies? -->
              <div>
                <label
                  for="communicationArrangements"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="communicationArrangements"
                    type="checkbox"
                    v-model="waH_Emergency"
                    value="Have appropriate communication arrangements been established for potential emergencies?"
                  />
                  Have appropriate communication arrangements been established
                  for potential emergencies?
                </label>
              </div>

              <div class="pt-4">
                <p class="text-gray-700 dark:text-gray-200">
                  Note: The following sections must be completed.
                </p>
              </div>
            </div>

            <div class="pt-6">
              <hr />
              <div class="pt-2"></div>
              <label
                class="font-bold text-gray-700 dark:text-gray-200"
                for="workInvolvement"
              >
                Mandatory Control Measures
              </label>
            </div>
            <div class="pt-2">
              <hr />
            </div>

            <div class="grid grid-cols-1 pt-2 gap-6 mt-4 sm:grid-cols-2">
              <!-- A task/site specific JHA, or equivalent, has been developed and appropriately addresses identified work at height hazards? -->
              <div>
                <label
                  for="specificJHA"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="specificJHA"
                    type="checkbox"
                    v-model="waH_ControlMeasure"
                    value=" A task/site specific JHA, or equivalent, has been developed and appropriately addresses identified work at height hazards?"
                  />
                  A task/site specific JHA, or equivalent, has been developed
                  and appropriately addresses identified work at height hazards?
                </label>
              </div>

              <!-- The JHA, or equivalent, has been reviewed and is understood by those involved in the task? -->
              <div>
                <label
                  for="jhaReviewed"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="jhaReviewed"
                    type="checkbox"
                    v-model="waH_ControlMeasure"
                    value="The JHA, or equivalent, has been reviewed and is understood by those involved in the task?"
                  />
                  The JHA, or equivalent, has been reviewed and is understood by
                  those involved in the task?
                </label>
              </div>

              <!-- Those involved in the work at height activities are appropriately competent and can produce evidence of training where requested? -->
              <div>
                <label
                  for="competentTraining"
                  class="text-gray-700 dark:text-gray-200"
                >
                  <input
                    id="competentTraining"
                    type="checkbox"
                    v-model="waH_ControlMeasure"
                    value="Those involved in the work at height activities are appropriately competent and can produce evidence of training where requested?"
                  />
                  Those involved in the work at height activities are
                  appropriately competent and can produce evidence of training
                  where requested?
                </label>
              </div>
            </div>

            <div class="pt-4 grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <div>
                <label
                  class="font-bold text-gray-700 dark:text-gray-200"
                  for="username"
                  >Upload Files (List of People Involved)</label
                >

                <!-- component -->

                <div>
                  <div class="pt-3">
                    <FilePond
                      ref="pond2"
                      name="file"
                      :server="null"
                      :allowMultiple="true"
                      :maxFileSize="'5MB'"
                      :acceptedFileTypes="[
                        'image/png',
                        'image/jpeg',
                        'application/pdf',
                      ]"
                      :fileRenameFunction="renameFile2"
                      @addfile="handleAddFile2"
                      @removefile="handleRemoveFile2"
                    />
                  </div>
                  <!-- component -->
                </div>
              </div>

              <!-- Add v-model to other inputs as needed -->
            </div>

            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <!-- Your existing Tailwind form elements -->
              <!-- ... -->

              <!-- Authority Check section with digital form fields -->
              <!-- <div>
                  <label
                    class="font-bold text-gray-700 dark:text-gray-200"
                    for="authority"
                    >Authority</label
                  > -->
              <!-- <label
                    id="authority"
                    class="form-textarea mt-1 block w-full"
                    rows="3"
                          >The risk control measures and precautions are appropriate for the safe execution of the tasks. The risk controls have been implemented.
            </label> -->
              <!-- </div> -->

              <!-- <div class="grid grid-cols-3 gap-4 pt-4">
                  <div>
                    <label
                      for="contractorSignature"
                      class="font-bold text-gray-700 dark:text-gray-200"
                      >Signed (Contractor Representative)</label
                    >
                    <input
                      type="text"
                      id="contractorSignature"
                      class="form-input mt-1 block w-full"
                      placeholder="Signature"
                    />
                  </div>
                  <div>
                    <label
                      for="contractorDate"
                      class="font-bold text-gray-700 dark:text-gray-200"
                      >Date</label
                    >
                    <input
                      type="date"
                      id="contractorDate"
                      class="form-input mt-1 block w-full"
                    />
                  </div>
                  <div>
                    <label
                      for="contractorTime"
                      class="font-bold text-gray-700 dark:text-gray-200"
                      >Time</label
                    >
                    <input
                      type="time"
                      id="contractorTime"
                      class="form-input mt-1 block w-full"
                    />
                  </div>
                </div> -->
            </div>
          </form>
          <div class="flex justify-end mt-6">
            <!-- <button @click="nextPage"
                class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Next
              </button> -->
          </div>
        </section>
      </div>
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8"
      >
        <section
          class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800"
        >
          <div class=" ">
            <h2
              class="text-lg font-semibold text-slate-200 p-1 rounded capitalize bg-[#160959e2] dark:text-white"
            >
              Job Hazard Analysis
            </h2>
          </div>

          <form>
            <div
              class="grid-cols-1 gap-6 mt-4 sm:grid-cols-1 mx-auto cursor-pointer flex w-full"
            >
              <div class="w-full">
                <label
                  for="Jobdescription"
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  >Job Description<span class="text-red-500">*</span></label
                >
                <textarea
                  v-model="Jobdescription"
                  id="Jobdescription"
                  class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                ></textarea>
              </div>
            </div>
            <div>
              <div
                v-for="(task, index) in tasks"
                :key="index"
                class="relative grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3"
              >
                <div>
                  <label
                    class="font-semibold text-gray-700 dark:text-gray-200"
                    :for="'task-' + index"
                    >Sequence of Tasks {{ index + 1 }}</label
                  >
                  <textarea
                    v-model="task.sequenceTask"
                    :id="'task-' + index"
                    type="text"
                    rows="5"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  ></textarea>
                </div>
                <div>
                  <label
                    class="font-semibold text-gray-700 dark:text-gray-200"
                    :for="'hazard-' + index"
                    >Potential Hazards {{ index + 1 }}</label
                  >
                  <textarea
                    v-model="task.potentialHazard"
                    :id="'hazard-' + index"
                    type="text"
                    rows="5"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  ></textarea>
                </div>
                <div>
                  <label
                    class="font-semibold text-gray-700 dark:text-gray-200"
                    :for="'measure-' + index"
                    >Preventive Measures {{ index + 1 }}</label
                  >
                  <div class="flex">
                    <textarea
                      v-model="task.preventiveMeasures"
                      :id="'measure-' + index"
                      type="text"
                      rows="5"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    ></textarea>
                    <button
                      @click.prevent="removeTask(index)"
                      v-if="tasks.length > 1"
                      class="bg-red-500 text-white font-bold text-3xl w-8 h-8 my-auto rounded justify-end ml-0"
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
              <button
                @click.prevent="addTask"
                class="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add
              </button>
            </div>
          </form>
          <div class="flex justify-end mt-6">
            <!-- <button @click="nextPage"
                class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Next
              </button> -->
          </div>
        </section>
      </div>

      <div class="flex justify-end mt-6">
        <button
          @click="showModal"
          class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-900 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
  <Modal v-show="isModalVisible" @close="closeModal">
    <!-- header -->
    <template v-slot:header>
      <h1 class="font-bold text-xl">Confirmation</h1>
    </template>

    <!-- body -->
    <template v-slot:body>
      <!-- <p class="py-3 text-xs font-bold text-purple-900">
          Forgot your password?
        </p> -->
      <p class="text-lg">Are you confirm to submit this?</p>
    </template>

    <!-- footer -->
    <template v-slot:footer>
      <div class="grid grid-cols-2 gap-3">
        <button
          @click="closeModal"
          type="button"
          class="rounded-2xl bg-gray-600 shadow-md p-3 my-1 w-full text-white"
        >
          Cancel
        </button>
        <div v-show="showConfirmButton">
          <button
            @click="submitForm"
            type="button"
            class="rounded-2xl bg-blue-800 shadow-md p-3 my-1 w-full text-white items-center"
          >
            Confirm
          </button>
        </div>
        <div v-show="showLoadingButton">
          <button
            disabled=""
            type="button"
            class="rounded-2xl bg-blue-800 shadow-md p-3 my-1 w-full text-white items-center"
          >
            <svg
              aria-hidden="true"
              role="status"
              class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              ></path>
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="#1C64F2"
              ></path>
            </svg>
            Loading....
          </button>
        </div>
      </div>
    </template>
  </Modal>
</template>

<script>
import * as template from "../javascript/department.js";
import { store } from "../views/store.js";
import { getRefNumber } from "../views/store.js";

import vueFilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";

import FilePondPluginFilePoster from "filepond-plugin-file-poster";
import FilePondPluginFileRename from "filepond-plugin-file-rename";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

const FilePond = vueFilePond(
  FilePondPluginFilePoster,
  FilePondPluginFileRename,
  FilePondPluginFileValidateSize,
  FilePondPluginFileValidateType
);
import axios from "axios";

import Modal from "../components/vmodal.vue";

export default {
  name: "PTWViews",
  components: {
    FilePond,
    Modal,
  },
  data() {
    return {
      equipmentOptions: [
        "Safety Helmet or Hard Hats",
        "Breathing Apparatus",
        "Safety Shoes",
        "Safety Glasses/Goggles",
        "Respirator/Mask",
        "Safety Harness",
        "High-visibility Clothing or Vest",
        "Face Shield",
        "Earplug or Ear Muff",
        "Gloves (cotton/leather/rubber)",
      ],
      safetyMeasureOptions: [
        "Risk Assessment",
        "Barricades",
        "First Aid Kit",
        "Fire Extinguisher",
        "Continuous Supervision",
        "Warning Signs",
        "Noise Meter",
        "Air Ventilation/Exhaust",
        "Communication",
        "Other Safety Measure",
      ],
      isolationOptions: [
        "I-Electrical",
        "Fire Alarm",
        "Traffic",
        "Chemical/Gas",
        "Other Isolation",
        "CHANGED",
      ], // Original options
      preequipment:[],
      ptwData: [],
      department: "",
      hotWorkLocation: "",
      othersDetails: "",
      othersPPE: "",
      showOthersInput: false,
      branch: "",
      showConfirmButton: true,
      showLoadingButton: false,
      mancage: false,
      liftruckScissorlift: false,
      checkladder: false,
      checkscaffolding: false,
      requirement: [],
      reqDistance: [],
      req_Enc_Equip: [],
      req_FireMon: [],
      req_Walls: [],
      reqGeneral: [],
      uniqueCode: "",
      equipment: [],
      // safetyMeasure: [],
      isolation: [],
      plantSupport: [],
      hotWorks: false,
      workingAtHeight: false,
      file: [],

      hazards: [],

      files1: [],
      files2: [],
      formData: {},
      isModalVisible: false,
      departments: template.departments,
      userDetails: [],
      tasks: [
        {
          sequenceTask: "",
          potentialHazard: "",
          preventiveMeasures: "",
        },
      ],

      Jobdescription: "",
      dateto: "",
      datefrom: "",
      Staffemail: "",
      requestername: "",
      Description: "",
      Location: "",
      Companyname: "",
      Vemail: "",
      Phonenumber: 0,
      Contractorvendorname: "",
      Worksdescription: "",
      datetimestart: "",
      Datetimecomplete: "",

      companyName: "",
      contractorName: "",
      workLocation: "",
      workDescription: "",
      startDateTime: "",
      completeDateTime: "",
      contractorAuthority: 0,
      filesName: "",
      waH_Hazard: [],
      waH_Ladders: [],
      waH_Scaffolding: [],
      waH_LiftTruck: [],
      waH_ManCage: [],
      waH_Emergency: [],
      waH_ControlMeasure: [],
    };
  },
  computed: {
    capitalizedDepartment: {
      get() {
        return this.customdepartment;
      },

      set(value) {
        this.customdepartment = value.toUpperCase();
      },
    },
    refNumber() {
      // Access the refNumber using getRefNumber function
      const refNumber = getRefNumber();
      console.log("Retrieved refNumber:", refNumber); // Add console log statement
      return refNumber;
    },
  },

  mounted() {
    // this.branch = store.getSelectedLocation();
    this.userDetails = store.getSession().userDetails;
    this.fetchPTWData();
  },
  methods: {
    fetchPTWData() {
      this.isLoading = true;
      this.error = null;

      const refNumber = getRefNumber();

      axios
        .get("http://172.28.28.91:8085/api/Main/GetPTW/" + refNumber)
        .then((response) => {
          this.ptwData = response.data;
          this.isLoading = false;

          this.branch = this.ptwData.branch;
          this.Companyname = this.ptwData.companyName;
          this.Contractorvendorname = this.ptwData.vendorName;
          this.department = this.ptwData.staffDetails.departmentName;
          this.datefrom = this.ptwData.dateFrom;
          this.dateto = this.ptwData.dateUntil;
          this.Location = this.ptwData.workLocation;
          this.Description = this.ptwData.workDescription;

          this.requestername = this.ptwData.staffDetails.pktStaffName;
          this.Staffemail = this.ptwData.staffDetails.pktStaffEmail;
          this.finalDepartment = this.ptwData.staffDetails.departmentName;
          this.equipment = this.ptwData.equipment;
          this.hazards = this.ptwData.hazard;
          this.safetyMeasure = this.ptwData.safetyMeasure;
          this.isolation = this.ptwData.isolation;
          this.plantSupport = this.ptwData.plantSupport;
          this.Jobdescription = this.ptwData.jha.jobDesc;
          this.tasks = this.ptwData.jhaDetails;
          this.Worksdescription = this.ptwData.hotWork.workDescription;
          this.datetimestart = this.ptwData.hotWork.dateTimeStart;
          this.Datetimecomplete = this.ptwData.hotWork.dateTimeComplete;
          this.requirement = this.ptwData.hotWork.requirement;
          this.reqDistance = this.ptwData.hotWork.reqDistance;
          this.req_Enc_Equip = this.ptwData.hotWork.req_Enc_Equip;
          this.req_FireMon = this.ptwData.hotWork.req_FireMon;
          this.req_Walls = this.ptwData.hotWork.req_Walls;
          this.reqGeneral = this.ptwData.hotWork.reqGeneral;
          this.companyName = this.ptwData.wah.companyName;
          this.contractorName = this.ptwData.wah.contractorName;
          this.Location = this.ptwData.wah.workLocation;
          this.Description = this.ptwData.wah.workDescription;
          this.startDateTime = this.ptwData.wah.startDateTime;
          this.completeDateTime = this.ptwData.wah.completeDateTime;
          this.contractorAuthority = this.ptwData.wah.contractorAuthority;
          this.filesName = this.ptwData.wah.filesName;
          this.waH_Hazard = this.ptwData.wah.waH_Hazard;
          this.waH_Ladders = this.ptwData.wah.waH_Ladders;
          this.waH_Scaffolding = this.ptwData.wah.waH_Scaffolding;
          this.waH_LiftTruck = this.ptwData.wah.waH_LiftTruck;
          this.waH_ManCage = this.ptwData.wah.waH_ManCage;
          this.waH_Emergency = this.ptwData.wah.waH_Emergency;
          this.waH_ControlMeasure = this.ptwData.wah.waH_ControlMeasure;
          this.userDetails.userId = this.ptwData.userId;

          // hotWorkLocation: "",
          // othersDetails: "",
          // othersPPE: "",
          // showOthersInput: false,
          // branch: "",
          // showConfirmButton: true,
          // showLoadingButton: false,
          // mancage: false,
          // liftruckScissorlift: false,
          // checkladder: false,
          // checkscaffolding: false,
          // requirement: [],
          // reqDistance: [],
          // req_Enc_Equip: [],
          // req_FireMon: [],
          // req_Walls: [],
          // reqGeneral: [],
          // uniqueCode: "",
          // equipment: [],
          // safetyMeasure: [],
          this.isolation = this.ptwData.isolation;
          // plantSupport: [],
          // hotWorks: false,
          // workingAtHeight: false,
          // file: [],

          // hazards: [],

          // files1: [],
          // files2: [],
          // formData: {},
          // isModalVisible: false,
          // departments: template.departments,
          // userDetails: [],
          // tasks: [
          //   {
          //     sequenceTask: "",
          //     potentialHazard: "",
          //     preventiveMeasures: "",
          //   },
          // ],

          // Jobdescription: "",
          // dateto: "",
          // datefrom: "",
          this.Staffemail = this.ptwData.staffDetails.pktStaffEmail;
          // requestername: "",
          // Description: "",
          this.Location = this.ptwData.workLocation;
          // Companyname: "",
          this.Vemail = this.ptwData.vendorEmail;
          this.Phonenumber = this.ptwData.phoneNumber;
          // Contractorvendorname: "",
          // Worksdescription: "",
          // datetimestart: "",
          // Datetimecomplete: "",

          // this.CompanyName = this.ptwData.companyName;
          // contractorName: "",
          // workLocation: "",
          // workDescription: "",
          // startDateTime: "",
          // completeDateTime: "",
          // contractorAuthority: 0,
          // filesName: "",
          // waH_Hazard: [],
          // waH_Ladders: [],
          // waH_Scaffolding: [],
          // waH_LiftTruck: [],
          // waH_ManCage: [],
          // waH_Emergency: [],
          // waH_ControlMeasure: [],
          // Log the received ptwData
          console.log("PTW Data:", this.ptwData);
        })
        .catch((error) => {
          this.error = error;
          this.isLoading = false;
        });
    },

    addOthersToEquipment() {
    if (this.othersPPE.trim() !== '') {
      this.equipmentOptions.push(this.othersPPE);
      // Reset the input field and hide it
      this.othersPPE = '';
      this.showOthersInput = false;
    }
  },
  removeEquipment(index) {
      this.equipmentOptions.splice(index, 1);
    },

    renameFile(file) {
      // Example: Prepend 'uploaded_' to the original file name
      return `SECURITY_${file.name}`;
    },
    renameFile2(file) {
      // Example: Prepend 'uploaded_' to the original file name
      return `WAH_${file.name}`;
    },
    handleAddFile1(error, fileItem) {
      if (!error) {
        this.files1.push(fileItem.file);
      }
    },
    handleAddFile2(error, fileItem) {
      if (!error) {
        this.files2.push(fileItem.file);
      }
    },
    handleRemoveFile1(error, fileItem) {
      this.files1 = this.files1.filter((file) => file !== fileItem.file);
    },
    handleRemoveFile2(error, fileItem) {
      this.files2 = this.files2.filter((file) => file !== fileItem.file);
    },
    updateFormData(formData) {
      this.formData = formData;
    },
    submitForm() {
      this.showConfirmButton = false;
      this.showLoadingButton = true;
      if (this.department === "Others") {
        this.finalDepartment = this.customdepartment;
      } else {
        this.finalDepartment = this.department;
      }
      let combinedFormData = {
        branch: store.getSelectedLocation(),
        vendorName: this.Contractorvendorname,
        vendorEmail: this.Vemail,
        companyName: this.Companyname,
        phoneNumber: this.Phonenumber,
        dateFrom: this.datefrom,
        dateUntil: this.dateto,
        workLocation: this.Location,
        workDescription: this.Description,
        uniqueCode: this.generateUniqueCode(),
        staffDetails: {
          pktStaffName: this.requestername,
          pktStaffEmail: this.Staffemail,
          departmentName: this.finalDepartment,
        },
        equipment: this.equipment,
        hazard: this.hazards,
        safetyMeasure: this.safetyMeasure,
        isolation: this.isolation,
        plantSupport: this.plantSupport,
        jha: {
          jhaRefNo: "",
          jobDesc: this.Jobdescription,
          analyzedBy: "",
          analyzedDate: "",
          approvedBy: "",
          approvedDate: "",
        },

        jhaDetails: this.tasks,

        hotWork: {
          workDescription: this.Worksdescription,
          dateTimeStart: this.datetimestart,
          dateTimeComplete: this.Datetimecomplete,
          hotWorkBy: "",
          checkedHotWork: "",
          checkedFireWatch: "",
          checkedSafetyManager: "",
          fireMonitorFinishTime: "",
          fireMonitorCheckName: "",
          requirement: this.requirement,
          reqDistance: this.reqDistance,
          req_Enc_Equip: this.req_Enc_Equip,
          req_FireMon: this.req_FireMon,
          req_Walls: this.req_Walls,
          reqGeneral: this.reqGeneral,
        },

        wah: {
          companyName: this.companyName,
          contractorName: this.contractorName,
          workLocation: this.workLocation,
          workDescription: this.workDescription,
          startDateTime: this.startDateTime,
          completeDateTime: this.completeDateTime,
          contractorAuthority: this.contractorAuthority,
          filesName: this.filesName,
          waH_Hazard: this.waH_Hazard,
          waH_Ladders: this.waH_Ladders,
          waH_Scaffolding: this.waH_Scaffolding,
          waH_LiftTruck: this.waH_LiftTruck,
          waH_ManCage: this.waH_ManCage,
          waH_Emergency: this.waH_Emergency,
          waH_ControlMeasure: this.waH_ControlMeasure,
        },
        // this.userDetails.userId
        userId: this.userDetails.userId,
      };

      axios
        .post("http://172.28.28.91:8085/api/Main/InsertPTW", combinedFormData)
        .then((response) => {
          console.log("Server response:", response.data);
          this.uploadMultiImage();
          // Handle the response, such as showing a success message
        })
        .catch((error) => {
          console.log("Error submitting form:", error);
          // Handle errors, such as showing an error message
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(
              "Server responded with status code:",
              error.response.status
            );
            console.log("Response data:", error.response.data);
          } else if (error.request) {
            // The request was made but no response was received
            console.log("No response received:", error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error message:", error.message);
          }
        });
    },
    addTask() {
      this.tasks.push({
        sequenceTask: "",
        potentialHazard: "",
        preventiveMeasures: "",
      });
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    uploadMultiImage() {
      let formData = new FormData();
      this.files1.forEach((file) => {
        formData.append("filecollection", file, file.name);
      });
      this.files2.forEach((file) => {
        formData.append("filecollection", file, file.name);
      });

      const url = `http://172.28.28.91:8085/api/Files/MultiUploadImage/${this.userDetails.userId}/${this.uniqueCode}`;

      axios
        .post(url, formData)
        .then((response) => {
          console.log("Upload successful:", response.data);

          this.closeModal();
          this.$router.push("/");
        })
        .catch((error) => {
          if (error.response) {
            console.error("Error data:", error.response.data);
            console.error("Error status:", error.response.status);
          } else if (error.request) {
            console.error("Error request:", error.request);
          } else {
            console.error("Error message:", error.message);
          }
        });
    },
    generateUniqueCode() {
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

        // Construct the uniqueCode
        this.uniqueCode = `PTW${userIdFragment}${randomNumber}${timestamp}`;
        console.log("Unique Code:", this.uniqueCode);
        return this.uniqueCode;
      } else {
        console.error("User ID is undefined.");
        // You may want to handle this case differently based on your application logic.
        return "";
      }
    },
    // ... Other methods ...

    handleCheckboxChange(hazard) {
      if (hazard === "hotWorks") {
        this.hotWorks = !this.hotWorks;
      } else if (hazard === "workingAtHeight") {
        this.workingAtHeight = !this.workingAtHeight;
      }
    },

    handleGeneralCheckboxChange() {
      // General logic for handling other checkboxes
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>
