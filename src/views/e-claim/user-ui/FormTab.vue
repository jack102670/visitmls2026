<template>
  <div
    class="relative overflow-hidden bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
  >
    <div class="sm:flex justify-start flex-wrap">
      <button
        v-for="(tab, index) in tabs"
        v-show="
          tab.tabType == type &&
          ((tab.title === 'Local Travelling' &&
            profilestatus.local_access === '1') ||
            (tab.title === 'Others' && profilestatus.others_access === '1') ||
            (tab.title === 'Handphone Bill Reimbursement' &&
              profilestatus.phone_access === '1') ||
            (tab.title === 'Medical Bill Reimbursement' &&
              profilestatus.md_access === '1') ||
            (tab.title === 'Staff Refreshment' &&
              profilestatus.staff_access === '1') ||
            (tab.title === 'Overseas Travelling' &&
              profilestatus.overseas_access === '1') ||
            (tab.title === 'Entertainment' && profilestatus.ent_access === '1'))
        "
        :key="index"
        @click="activeTab = index"
        :class="[
          'flex-1 px-4 py-1 text-md mr-2 rounded-3xl focus:outline-none border border-gray-300',
          {
            'bg-[#160959] text-white': activeTab === index,
            'hover:bg-gray-200': activeTab !== index,
            'px-8 py-4 mr-4':
              tab.title === 'Handphone Bill Reimbursement' ||
              tab.title === 'Medical Bill Reimbursement',
          },
          // Large screens
          'max-w-xs',
        ]"
      >
        {{ tab.title }}
      </button>
    </div>

    <div
      class="relative overflow-hidden mt-5 max-w-4xl p-6 bg-white border-2 border-e-gray-200 rounded-md dark:bg-gray-800"
    >
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        v-show="activeTab === index"
      >
        <h2 class="text-2xl font-bold text-gray-700 capitalize dark:text-white">
          {{ tab.title }} Form
        </h2>

        <!-- Note for Handphone Bill Reimbursement -->
        <section>
          <div
            v-if="
              tab.title === 'Handphone Bill Reimbursement' && isFormDisabled
            "
            class="relative flex items-center justify-center mt-4 p-4 bg-yellow-200 border border-yellow-400 text-yellow-800 rounded-md"
            style="width: 100%; max-width: 600px; margin: 0 auto"
          >
            <h1 class="text-sm font-bold text-center">
              Note : You are not eligible to claim the Handphone Bill.
            </h1>
          </div>
        </section>

        <!--Note for Others Form-->
        <section>
          <div v-if="tab.title === 'Others'" class="mt-4">
            <h1 class="text-gray-500 text-sm">
              Note: This form is intended for claiming expenses that do not fall
              under the Local Travelling, Overseas Travelling, Entertainment,
              and Staff Refreshment.
            </h1>
          </div>
        </section>

        <div
          v-if="
            tab.title !== 'Entertainment' &&
            tab.title !== 'Staff Refreshment' &&
            tab.title !== 'Overseas Travelling'
          "
        >
          <form
            @submit.prevent="submitForm(tab)"
            :class="{
              blur:
                tab.title === 'Handphone Bill Reimbursement' && isFormDisabled,
            }"
          >
            <div class="pt-4">
              <hr class="" />
              <div class="m-2">
                <div
                  v-for="(field, fieldIndex) in tab.fields"
                  :key="fieldIndex"
                  :class="[
                    'grid',
                    'grid-cols-1',
                    tab.gridLayout || 'sm:grid-cols-2',
                    field.gridClass,
                  ]"
                >
                  <template v-if="!field.hidden">
                    <template
                      v-if="
                        !isCompanyTransport ||
                        (field.id !== 'MileageKMLT' &&
                          field.id !== 'MileageRMLT' &&
                          field.id !== 'UploadMileageRMLT' &&
                          field.id !== 'TransportSpec' &&
                          field.id !== 'PublicTransportSpec' &&
                          field.id !== 'FareRMLT' &&
                          field.id !== 'UploadFareRMLT')
                      "
                    >
                      <template
                        v-if="
                          !isPanelClinic ||
                          (field.id !== 'OtherClinicSpecML' &&
                            field.id !== 'OtherClinicReasonML')
                        "
                      >
                        <template
                          v-if="
                            !isPublicTransport ||
                            (field.id !== 'MileageKMLT' &&
                              field.id !== 'MileageRMLT' &&
                              field.id !== 'UploadMileageRMLT' &&
                              field.id !== 'TransportSpec' &&
                              field.id !== 'TollLT' &&
                              field.id !== 'UploadTollLT')
                          "
                        >
                          <template
                            v-if="
                              !isPersonalTransport ||
                              (field.id !== 'FareRMLT' &&
                                field.id !== 'UploadFareRMLT' &&
                                field.id !== 'PublicTransportSpec')
                            "
                          >
                            <template
                              v-if="
                                !isOneWay ||
                                (field.id !== 'ReturndateLT' &&
                                  field.id !== 'AccommodationLT' &&
                                  field.id !== 'MealAllowanceLT')
                              "
                            >
                              <template
                                v-if="
                                  !isOtherThanOutpatient ||
                                  (field.id !== 'ReasonML' &&
                                    field.id !== 'ClinicSelectionML' &&
                                    field.id !== 'OtherClinicSpecML' &&
                                    field.id !== 'OtherClinicReasonML')
                                "
                              >
                                <label
                                  :for="field.id"
                                  class="m-3 p-1 block text-gray-700 text-sm font-bold mb-2"
                                >
                                  {{ field.label }}
                                  <span v-if="field.required" style="color: red"
                                    >*</span
                                  >
                                </label>

                                <template v-if="field.type === 'select'">
                                  <select
                                    v-model="field.value"
                                    @change="onMedicalCategoryChange"
                                    :required="field.required"
                                    :disabled="
                                      (tab.title ===
                                        'Handphone Bill Reimbursement' &&
                                        isFormDisabled) ||
                                      field.disabled
                                    "
                                    :id="field.id"
                                    class="block w-full px-4 py-2 mt-1 mb-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                  >
                                    <option
                                      v-for="(
                                        option, optionIndex
                                      ) in field.options"
                                      :key="optionIndex"
                                      :value="option.value"
                                    >
                                      {{ option.label }}
                                    </option>
                                  </select>
                                </template>

                                <template v-else-if="field.type === 'year'">
                                  <select
                                    v-model="field.value"
                                    :required="field.required"
                                    :disabled="
                                      (tab.title ===
                                        'Handphone Bill Reimbursement' &&
                                        isFormDisabled) ||
                                      field.disabled
                                    "
                                    :id="field.id"
                                    class="block w-full px-4 py-2 mt-1 mb-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                  >
                                    <option
                                      v-for="year in yearRange"
                                      :key="year"
                                      :value="year"
                                    >
                                      {{ year }}
                                    </option>
                                  </select>
                                </template>

                                <template
                                  v-else-if="field.type === 'radio-group'"
                                >
                                  <div class="grid grid-cols-2">
                                    <div
                                      class="p-4 pt-2 pb-2 flex items-center"
                                      v-for="option in field.options"
                                      :key="option.value"
                                    >
                                      <input
                                        type="radio"
                                        :id="option.value"
                                        :name="field.id"
                                        :value="option.value"
                                        v-model="field.value"
                                        :required="field.required"
                                        :disabled="
                                          (tab.title ===
                                            'Handphone Bill Reimbursement' &&
                                            isFormDisabled) ||
                                          field.disabled
                                        "
                                        class="mr-2"
                                      />
                                      <label
                                        :for="option.value"
                                        class="text-sm text-gray-700"
                                      >
                                        {{ option.label }}
                                      </label>
                                    </div>
                                  </div>
                                </template>

                                <template v-else-if="field.type === 'file'">
                                  <div>
                                    <file-pond
                                      v-if="
                                        field.id === 'UploadMileageRMLT' &&
                                        showMileageUpload
                                      "
                                      :name="field.id"
                                      :disabled="
                                        (tab.title ===
                                          'Handphone Bill Reimbursement' &&
                                          isFormDisabled) ||
                                        field.disabled
                                      "
                                      :required="field.required"
                                      ref="pond"
                                      label-idle="Drop files here..."
                                      @addfile="
                                        (error, file) =>
                                          handleAddFile(error, file, field)
                                      "
                                      @removefile="
                                        (error, file) =>
                                          handleRemoveFile(error, file, field)
                                      "
                                      :accepted-file-types="
                                        field.acceptedFileTypes
                                      "
                                      :max-file-size="field.maxFileSize"
                                      :allow-multiple="field.allowMultiple"
                                    />
                                    <file-pond
                                      v-if="
                                        field.id === 'UploadFareRMLT' &&
                                        showFareUpload
                                      "
                                      :name="field.id"
                                      :disabled="
                                        (tab.title ===
                                          'Handphone Bill Reimbursement' &&
                                          isFormDisabled) ||
                                        field.disabled
                                      "
                                      :required="field.required"
                                      ref="pond"
                                      label-idle="Drop files here..."
                                      @addfile="
                                        (error, file) =>
                                          handleAddFile(error, file, field)
                                      "
                                      @removefile="
                                        (error, file) =>
                                          handleRemoveFile(error, file, field)
                                      "
                                      :accepted-file-types="
                                        field.acceptedFileTypes
                                      "
                                      :max-file-size="field.maxFileSize"
                                      :allow-multiple="field.allowMultiple"
                                    />
                                    <file-pond
                                      v-if="
                                        field.id === 'UploadTollLT' &&
                                        showTollUpload
                                      "
                                      :name="field.id"
                                      :label="field.label"
                                      :disabled="
                                        (tab.title ===
                                          'Handphone Bill Reimbursement' &&
                                          isFormDisabled) ||
                                        field.disabled
                                      "
                                      :required="isFieldRequired(field.id)"
                                      ref="pond"
                                      label-idle="Drop files here..."
                                      @addfile="
                                        (error, file) =>
                                          handleAddFile(error, file, field)
                                      "
                                      @removefile="
                                        (error, file) =>
                                          handleRemoveFile(error, file, field)
                                      "
                                      :accepted-file-types="
                                        field.acceptedFileTypes
                                      "
                                      :max-file-size="field.maxFileSize"
                                      :allow-multiple="field.allowMultiple"
                                    />
                                    <file-pond
                                      v-if="
                                        field.id === 'UploadParkingLT' &&
                                        showParkingUpload
                                      "
                                      :name="field.id"
                                      :disabled="
                                        (tab.title ===
                                          'Handphone Bill Reimbursement' &&
                                          isFormDisabled) ||
                                        field.disabled
                                      "
                                      :required="field.required"
                                      ref="pond"
                                      label-idle="Drop files here..."
                                      @addfile="
                                        (error, file) =>
                                          handleAddFile(error, file, field)
                                      "
                                      @removefile="
                                        (error, file) =>
                                          handleRemoveFile(error, file, field)
                                      "
                                      :accepted-file-types="
                                        field.acceptedFileTypes
                                      "
                                      :max-file-size="field.maxFileSize"
                                      :allow-multiple="field.allowMultiple"
                                    />
                                    <file-pond
                                      v-if="
                                        field.id === 'UploadLT' ||
                                        field.id === 'UploadOthers' ||
                                        field.id === 'UploadHR' ||
                                        field.id === 'UploadML'
                                      "
                                      :name="field.id"
                                      :disabled="
                                        (tab.title ===
                                          'Handphone Bill Reimbursement' &&
                                          isFormDisabled) ||
                                        field.disabled
                                      "
                                      :required="field.required"
                                      ref="pond"
                                      label-idle="Drop files here..."
                                      @addfile="
                                        (error, file) =>
                                          handleAddFile(error, file, field)
                                      "
                                      @removefile="
                                        (error, file) =>
                                          handleRemoveFile(error, file, field)
                                      "
                                      :accepted-file-types="
                                        field.acceptedFileTypes
                                      "
                                      :max-file-size="field.maxFileSize"
                                      :allow-multiple="field.allowMultiple"
                                    />
                                  </div>
                                </template>

                                <template
                                  v-else-if="field.type === 'long-text'"
                                >
                                  <textarea
                                    v-model="field.value"
                                    :required="field.required"
                                    :id="field.id"
                                    :placeholder="field.placeholder"
                                    :disabled="
                                      (tab.title ===
                                        'Handphone Bill Reimbursement' &&
                                        isFormDisabled) ||
                                      field.disabled
                                    "
                                    class="block w-full px-4 py-2 mt-1 mb-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    rows="4"
                                  ></textarea>
                                </template>

                                <template
                                  v-else-if="field.id === 'MileageRMLT'"
                                >
                                  <input
                                    v-model="field.value"
                                    type="number"
                                    :required="field.required"
                                    :id="field.id"
                                    :placeholder="field.placeholder"
                                    :step="
                                      field.type === 'number'
                                        ? '0.01'
                                        : undefined
                                    "
                                    :disabled="
                                      (tab.title ===
                                        'Handphone Bill Reimbursement' &&
                                        isFormDisabled) ||
                                      field.disabled
                                    "
                                    class="block w-full px-4 py-2 mt-1 mb-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                  />
                                  <!-- <button
                                    type="button"
                                    @click="toggleUploadField('MileageRMLT')"
                                    class="text-blue-500 transition-colors duration-200 dark:hover:text-blue-300 dark:text-gray-300 hover:text-blue-300 focus:outline-none"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      class="w-5 h-5"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M7 8l5-5m0 0l5 5m-5-5v12"
                                      />
                                    </svg>
                                  </button> -->
                                </template>

                                <template v-else-if="field.id === 'FareRMLT'">
                                  <input
                                    v-model="field.value"
                                    type="number"
                                    :required="field.required"
                                    :id="field.id"
                                    :placeholder="field.placeholder"
                                    :step="
                                      field.type === 'number'
                                        ? '0.01'
                                        : undefined
                                    "
                                    :disabled="
                                      (tab.title ===
                                        'Handphone Bill Reimbursement' &&
                                        isFormDisabled) ||
                                      field.disabled
                                    "
                                    class="block w-full px-4 py-2 mt-1 mb-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                  />
                                  <!-- <button
                                    type="button"
                                    @click="toggleUploadField('FareRMLT')"
                                    class="text-blue-500 transition-colors duration-200 dark:hover:text-blue-300 dark:text-gray-300 hover:text-blue-300 focus:outline-none"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      class="w-5 h-5"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M7 8l5-5m0 0l5 5m-5-5v12"
                                      />
                                    </svg>
                                  </button> -->
                                </template>

                                <template v-else-if="field.id === 'TollLT'">
                                  <input
                                    v-model="field.value"
                                    type="number"
                                    :required="field.required"
                                    :id="field.id"
                                    :placeholder="field.placeholder"
                                    :step="
                                      field.type === 'number'
                                        ? '0.01'
                                        : undefined
                                    "
                                    :disabled="
                                      (tab.title ===
                                        'Handphone Bill Reimbursement' &&
                                        isFormDisabled) ||
                                      field.disabled
                                    "
                                    class="block w-full px-4 py-2 mt-1 mb-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                  />
                                  <!-- <button
                                    type="button"
                                    @click="toggleUploadField('TollLT')"
                                    class="text-blue-500 transition-colors duration-200 dark:hover:text-blue-300 dark:text-gray-300 hover:text-blue-300 focus:outline-none"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      class="w-5 h-5"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M7 8l5-5m0 0l5 5m-5-5v12"
                                      />
                                    </svg>
                                  </button> -->
                                </template>

                                <template v-else-if="field.id === 'ParkingLT'">
                                  <input
                                    v-model="field.value"
                                    type="number"
                                    :required="field.required"
                                    :id="field.id"
                                    :placeholder="field.placeholder"
                                    :step="
                                      field.type === 'number'
                                        ? '0.01'
                                        : undefined
                                    "
                                    :disabled="
                                      (tab.title ===
                                        'Handphone Bill Reimbursement' &&
                                        isFormDisabled) ||
                                      field.disabled
                                    "
                                    class="block w-full px-4 py-2 mt-1 mb-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                  />
                                  <!-- <button
                                    type="button"
                                    @click="toggleUploadField('ParkingLT')"
                                    class="text-blue-500 transition-colors duration-200 dark:hover:text-blue-300 dark:text-gray-300 hover:text-blue-300 focus:outline-none"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      class="w-5 h-5"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M7 8l5-5m0 0l5 5m-5-5v12"
                                      />
                                    </svg>
                                  </button> -->
                                </template>

                                <template
                                  v-else-if="
                                    field.id === 'BankNameHR' ||
                                    field.id === 'BankNameML' ||
                                    field.id === 'AccBankNumberHR' ||
                                    field.id === 'AccBankNumberML' ||
                                    field.id === 'AccHolderNameHR' ||
                                    field.id === 'AccHolderNameML' ||
                                    field.id === 'LimitedAmountHR'
                                  "
                                >
                                  <input
                                    v-model="field.value"
                                    :required="field.required"
                                    :disabled="
                                      (tab.title ===
                                        'Handphone Bill Reimbursement' &&
                                        isFormDisabled) ||
                                      field.disabled
                                    "
                                    :id="field.id"
                                    :type="field.type"
                                    :placeholder="field.placeholder"
                                    :step="
                                      field.type === 'number'
                                        ? '0.01'
                                        : undefined
                                    "
                                    class="block w-full px-4 py-2 mt-1 mb-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                  />
                                </template>

                                <template
                                  v-else-if="field.id === 'LimitedAmountML'"
                                >
                                  <input
                                    v-model="field.value"
                                    type="number"
                                    :required="field.required"
                                    :id="field.id"
                                    :placeholder="field.placeholder"
                                    :step="
                                      field.type === 'number'
                                        ? '0.01'
                                        : undefined
                                    "
                                    :disabled="
                                      (tab.title ===
                                        'Handphone Bill Reimbursement' &&
                                        isFormDisabled) ||
                                      field.disabled
                                    "
                                    class="block w-full px-4 py-2 mt-1 mb-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                  />
                                  <div class="relative group ml-1">
                                    <button
                                      type="button"
                                      class="text-blue-500 transition-colors duration-200 dark:hover:text-blue-300 dark:text-gray-300 hover:text-blue-300 focus:outline-none"
                                    >
                                      <span
                                        class="inline-flex items-center justify-center w-5 h-5 bg-gray-200 rounded-full text-gray-700 font-semibold"
                                        >i</span
                                      >
                                    </button>
                                    <div
                                      class="absolute left-1.5/2 top-1/2 transform -translate-y-1/2 hidden group-hover:block w-64 p-2 bg-white border border-gray-300 rounded shadow-lg text-gray-700 text-sm"
                                    >
                                      Please note: The reimbursement limit is
                                      not yet updated and may not reflect the
                                      latest changes.
                                    </div>
                                  </div>
                                </template>

                                <template v-else>
                                  <input
                                    v-model="field.value"
                                    :required="field.required"
                                    :disabled="
                                      (tab.title ===
                                        'Handphone Bill Reimbursement' &&
                                        isFormDisabled) ||
                                      field.disabled
                                    "
                                    :id="field.id"
                                    :type="field.type"
                                    :placeholder="field.placeholder"
                                    :step="
                                      field.type === 'number'
                                        ? '0.01'
                                        : undefined
                                    "
                                    class="block w-full px-4 py-2 mt-1 mb-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                  />
                                </template>
                              </template>
                            </template>
                          </template>
                        </template>
                      </template>
                    </template>
                  </template>
                </div>

                <!-- Medical Bill Reimbursement Note Section-->
                <section>
                  <div
                    v-if="tab.title === 'Medical Bill Reimbursement'"
                    class="mt-4"
                  >
                    <h1 class="text-gray-500 text-sm">
                      <span class="text-gray-500">*</span
                      ><span class="text-gray-500">*</span> Outpatient: The
                      limited amount for Outpatient is RM70 per visit and RM700
                      per year.
                    </h1>
                    <h1 class="text-gray-500 text-sm">
                      <span class="text-gray-500">*</span
                      ><span class="text-gray-500">*</span> Medical Check-Up &
                      Dental: The limited amount is RM200 per year.
                    </h1>
                  </div>
                </section>
                <!-- Medical Bill Reimbursement Note Section-->

                <div class="pt-4">
                  <hr class="" />
                  <div class="mt-4">
                    <div class="grid grid-cols-1 sm:grid-cols-2">
                      <label class="block text-gray-700 text-xl font-bold mb-2"
                        >Total :</label
                      >
                      <div class="block text-gray-700 text-xl font-bold mb-2">
                        RM {{ calculateTotal(tab) }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-4 mr-6 flex flex-row-reverse">
                  <div class="flex items-center justify-between">
                    <button
                      :class="{
                        'bg-blue-500 hover:bg-blue-700': !isSaveButtonDisabled,
                        '': isSaveButtonDisabled || isFormDisabled,
                        'text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline': true,
                      }"
                      type="submit"
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      :disabled="
                        (tab.title === 'Handphone Bill Reimbursement' &&
                          isFormDisabled) ||
                        (tab.title === 'Medical Bill Reimbursement' &&
                          isSaveButtonDisabled)
                      "
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <!-- Overseas Travelling tab -->
        <div v-if="tab.title == 'Overseas Travelling'">
          <div class="tabs">
            <button
              v-for="(subTab, subIndex) in overseasTabs"
              :key="subIndex"
              @click="activeSubTab = subIndex"
              :class="{
                'bg-gray-300': activeSubTab === subIndex,
                'hover:bg-gray-200': activeSubTab !== subIndex,
              }"
              class="px-4 py-2 mr-2 rounded-sm focus:outline-none border border-gray-300"
            >
              {{ subTab.title }}
              <span v-if="subTab.title === 'Other Expenses'"></span>
            </button>
          </div>

          <div
            v-for="(subTab, subIndex) in overseasTabs"
            :key="subIndex"
            v-show="activeSubTab === subIndex"
          >
            <div class="pt-4">
              <hr />
              <div class="m-2">
                <form @submit.prevent="submitForm4('overseas')">
                  <div
                    v-for="(field, fieldIndex) in subTab.fields"
                    :key="fieldIndex"
                    :class="[
                      'grid',
                      'grid-cols-1',
                      subTab.gridLayout || 'sm:grid-cols-2',
                      field.gridClass,
                    ]"
                  >
                    <label
                      :for="field.id"
                      class="m-3 p-1 block text-gray-700 text-sm font-bold mb-2"
                    >
                      {{ field.label }}
                      <span v-if="field.required" style="color: red">*</span>
                    </label>

                    <template v-if="field.type === 'select'">
                      <select
                        v-model="field.value"
                        :required="field.required"
                        :id="field.id"
                        class="block w-full px-4 py-2 mt-1 mb-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      >
                        <option
                          v-for="(option, optionIndex) in field.options"
                          :key="optionIndex"
                          :value="option.value"
                        >
                          {{ option.label }}
                        </option>
                      </select>
                    </template>

                    <template v-else-if="field.type === 'radio-group'">
                      <div class="grid grid-cols-2">
                        <div
                          class="p-4 pt-2 pb-2 flex items-center"
                          v-for="option in field.options"
                          :key="option.value"
                        >
                          <input
                            type="radio"
                            :id="option.value"
                            :name="field.id"
                            :value="option.value"
                            v-model="field.value"
                            :required="field.required"
                            :disabled="
                              (tab.title === 'Handphone Bill Reimbursement' &&
                                isFormDisabled) ||
                              field.disabled
                            "
                            class="mr-2"
                          />
                          <label
                            :for="option.value"
                            class="text-sm text-gray-700"
                          >
                            {{ option.label }}
                          </label>
                        </div>
                      </div>
                    </template>

                    <template v-else-if="field.type === 'file'">
                      <div class="pt-3">
                        <file-pond
                          :name="field.id"
                          :required="field.required"
                          ref="pond"
                          label-idle="Drop files here..."
                          @addfile="
                            (error, file) => handleAddFile(error, file, field)
                          "
                          @removefile="
                            (error, file) =>
                              handleRemoveFile(error, file, field)
                          "
                          :accepted-file-types="field.acceptedFileTypes"
                          :max-file-size="field.maxFileSize"
                          :allow-multiple="field.allowMultiple"
                        />
                      </div>
                    </template>

                    <template v-else>
                      <input
                        v-model="field.value"
                        :required="field.required"
                        :id="field.id"
                        :type="field.type"
                        :placeholder="field.placeholder"
                        :step="field.type === 'number' ? '0.01' : undefined"
                        class="block w-full px-4 py-2 mt-1 mb-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </template>
                  </div>

                  <div v-if="subTab.title === 'Other Expenses'" class="mt-4">
                    <span class="m-3 block text-gray-700 text-md font-bold mb-2"
                      >Please select the currency type for your expenses:</span
                    >

                    <!-- Radio Buttons for Currency Selection -->
                    <div class="mb-4 ml-6">
                      <label class="inline-flex items-center">
                        <input
                          type="radio"
                          v-model="currencyType"
                          value="foreign"
                          class="form-radio"
                        />
                        <span class="ml-2">Foreign Currency</span>
                      </label>
                      <label class="inline-flex items-center ml-6">
                        <input
                          type="radio"
                          v-model="currencyType"
                          value="rm"
                          class="form-radio"
                        />
                        <span class="ml-2">Malaysian Ringgit</span>
                      </label>
                    </div>

                    <button
                      type="button"
                      class="px-4 py-2 ml-3 mb-3 bg-blue-500 text-white rounded"
                      @click="showOtherExpensesModal = true"
                    >
                      Add Expenses
                    </button>

                    <!-- Modal Form for Foreign Currency Expenses -->
                    <div
                      v-if="
                        showOtherExpensesModal && currencyType === 'foreign'
                      "
                      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                    >
                      <div
                        class="relative p-8 bg-white w-full max-w-md h-3/4 overflow-y-auto m-auto flex-col flex rounded-lg"
                      >
                        <h3 class="text-lg font-medium mb-4">
                          Add Foreign Currency Expense
                        </h3>
                        <hr class="" />
                        <form @submit.prevent="addOtherExpense">
                          <div class="mb-4 mt-4">
                            <label
                              class="block text-sm font-medium text-gray-700"
                              for="expenseName"
                              >Expense Name</label
                            >
                            <input
                              v-model="newExpense.name"
                              id="expenseName"
                              type="text"
                              class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                              required
                            />
                          </div>
                          <div class="mb-4">
                            <label
                              class="block text-sm font-medium text-gray-700"
                              for="expenseDescription"
                              >Description</label
                            >
                            <textarea
                              v-model="newExpense.description"
                              id="expenseDescription"
                              class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                              rows="4"
                              required
                            ></textarea>
                          </div>
                          <div class="mb-4" v-if="currencyType === 'foreign'">
                            <label
                              class="block text-sm font-medium text-gray-700"
                              for="ForeignCurrencyAccommodationOT"
                              >Foreign Currency</label
                            >
                            <select
                              v-model="
                                newExpense.ForeignCurrencyAccommodationOT
                              "
                              id="ForeignCurrencyAccommodationOT"
                              class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                              required
                            >
                              <option disabled value="">
                                Select a currency
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
                          <div class="mb-4">
                            <label
                              class="block text-sm font-medium text-gray-700"
                              for="ExchangeRateAccommodationOT"
                              >Exchange Rate</label
                            >
                            <input
                              v-model="newExpense.ExchangeRateAccommodationOT"
                              id="ExchangeRateAccommodationOT"
                              type="number"
                              step="0.01"
                              class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                              required
                            />
                          </div>
                          <div class="mb-4">
                            <label
                              class="block text-sm font-medium text-gray-700"
                              for="AmountforAccommodationOT"
                            >
                              Amount
                              <span v-if="selectedCurrencySymbol"
                                >({{ selectedCurrencySymbol }})</span
                              >
                              <div class="relative group ml-1">
                                <button
                                  type="button"
                                  class="text-blue-500 transition-colors duration-200 dark:hover:text-blue-300 dark:text-gray-300 hover:text-blue-300 focus:outline-none"
                                >
                                  <span
                                    class="inline-flex items-center justify-center w-5 h-5 bg-gray-200 rounded-full text-gray-700 font-semibold"
                                    >i</span
                                  >
                                </button>
                                <div
                                  class="absolute left-1.5/2 top-1/2 transform -translate-y-1/2 hidden group-hover:block w-64 p-2 bg-white border border-gray-300 rounded shadow-lg text-gray-700 text-sm"
                                >
                                  Note: This field is intended for amounts spent
                                  in foreign currency.
                                </div>
                              </div>
                            </label>
                            <input
                              v-model="newExpense.AmountforAccommodationOT"
                              id="AmountforAccommodationOT"
                              type="number"
                              placeholder=""
                              step="0.01"
                              class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                              required
                              @input="calculateTotalAccommodation"
                            />
                            <div class="ml-2">
                              <h1 class="text-gray-500 text-sm">
                                In Malaysian Ringgit = RM{{
                                  totalAccommodation || 0
                                }}
                              </h1>
                            </div>
                          </div>
                          <div class="mb-4">
                            <label
                              class="block text-sm font-medium text-gray-700"
                              for="expenseAttachment"
                              >Attachment(s) (png, jpeg, pdf, or xlsx)</label
                            >
                            <file-pond
                              ref="pond"
                              name="files"
                              label-idle="Drop files here..."
                              @addfile="
                                (error, file) =>
                                  handleAddFileOT(error, file, newExpense.files)
                              "
                              @removefile="
                                (error, file) =>
                                  handleRemoveFileOT(
                                    error,
                                    file,
                                    newExpense.files
                                  )
                              "
                              :accepted-file-types="[
                                'application/pdf',
                                'image/png',
                                'image/jpeg',
                                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                              ]"
                              :max-file-size="5000000"
                              allow-multiple="true"
                            />
                          </div>
                          <div class="mt-8 flex justify-end">
                            <button
                              type="submit"
                              class="px-4 py-2 bg-blue-500 text-white rounded mr-2"
                            >
                              Submit
                            </button>
                            <button
                              @click="showOtherExpensesModal = false"
                              class="px-4 py-2 bg-gray-300 text-black rounded"
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>

                    <!-- Modal Form for Malaysian Ringgit Expenses -->
                    <div
                      v-if="showOtherExpensesModal && currencyType === 'rm'"
                      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                    >
                      <div
                        class="relative p-8 bg-white w-full max-w-md h-3/4 overflow-y-auto m-auto flex-col flex rounded-lg"
                      >
                        <h3 class="text-lg font-medium mb-4">
                          Add Malaysian Ringgit Expense
                        </h3>
                        <hr class="" />
                        <form @submit.prevent="addOtherExpense">
                          <div class="mb-4 mt-4">
                            <label
                              class="block text-sm font-medium text-gray-700"
                              for="expenseName"
                              >Expense Name</label
                            >
                            <input
                              v-model="newExpense.name"
                              id="expenseName"
                              type="text"
                              class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                              required
                            />
                          </div>
                          <div class="mb-4">
                            <label
                              class="block text-sm font-medium text-gray-700"
                              for="expenseDescription"
                              >Description</label
                            >
                            <textarea
                              v-model="newExpense.description"
                              id="expenseDescription"
                              class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                              rows="4"
                              required
                            ></textarea>
                          </div>
                          <div class="mb-4">
                            <label
                              class="block text-sm font-medium text-gray-700"
                              for="expenseAmount"
                              >Amount (RM)</label
                            >
                            <input
                              v-model="newExpense.amount"
                              id="expenseAmount"
                              type="number"
                              placeholder="Amount (RM)"
                              step="0.01"
                              class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                              required
                            />
                          </div>
                          <div class="mb-4">
                            <label
                              class="block text-sm font-medium text-gray-700"
                              for="expenseAttachment"
                              >Attachment(s) (png, jpeg, pdf, or xlsx)</label
                            >
                            <file-pond
                              ref="pond"
                              name="files"
                              label-idle="Drop files here..."
                              @addfile="
                                (error, file) =>
                                  handleAddFileOT(error, file, newExpense.files)
                              "
                              @removefile="
                                (error, file) =>
                                  handleRemoveFileOT(
                                    error,
                                    file,
                                    newExpense.files
                                  )
                              "
                              :accepted-file-types="[
                                'application/pdf',
                                'image/png',
                                'image/jpeg',
                                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                              ]"
                              :max-file-size="5000000"
                              allow-multiple="true"
                            />
                          </div>
                          <div class="mt-8 flex justify-end">
                            <button
                              type="submit"
                              class="px-4 py-2 bg-blue-500 text-white rounded mr-2"
                            >
                              Submit
                            </button>
                            <button
                              @click="showOtherExpensesModal = false"
                              class="px-4 py-2 bg-gray-300 text-black rounded"
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>

                    <!-- Other Expenses Table -->
                    <div
                      v-if="tab.title === 'Overseas Travelling'"
                      class="mt-4"
                    >
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
                                <span>Expense Name</span>
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
                                <span>Foreign Currency</span>
                              </div>
                            </th>
                            <th
                              scope="col"
                              class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                            >
                              <div class="flex items-center gap-x-3">
                                <span>Exchange Rate</span>
                              </div>
                            </th>
                            <th
                              scope="col"
                              class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                            >
                              <div class="flex items-center gap-x-3">
                                <span>Amount(Foreign Currency)</span>
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
                            v-for="(expense, index) in otherExpenses"
                            :key="index"
                          >
                            <td
                              class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-wrap"
                            >
                              {{ expense.name }}
                            </td>
                            <td
                              class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-wrap"
                            >
                              {{ expense.description }}
                            </td>
                            <td
                              class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
                            >
                              {{
                                expense.ForeignCurrencyAccommodationOT || "-"
                              }}
                            </td>
                            <td
                              class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
                            >
                              {{ expense.ExchangeRateAccommodationOT || "-" }}
                            </td>
                            <td
                              class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
                            >
                              {{ expense.AmountforAccommodationOT || "-" }}
                            </td>
                            <td
                              class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
                            >
                              <span v-if="currencyType === 'foreign'">
                                {{ expense.totalAccommodation }}
                              </span>
                              <span v-if="currencyType === 'rm'">
                                {{ expense.amount }}
                              </span>
                            </td>
                            <td
                              class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
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
                                @click="removeExpense(index)"
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
                          <tr class="bg-gray-50 dark:bg-gray-800">
                            <td
                              class="px-4 py-2 border text-sm font-normal text-right text-gray-500 dark:text-gray-400"
                              colspan="5"
                            >
                              Total Amount
                            </td>
                            <td
                              class="px-4 py-2 border text-sm font-medium text-gray-700 whitespace-nowrap"
                              colspan="3"
                            >
                              RM {{ calculateOverseasTotal() }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div v-if="subTab.title !== 'Other Expenses'" class="pt-4">
                    <hr />
                    <div class="mt-4">
                      <div class="grid grid-cols-1 sm:grid-cols-2">
                        <label
                          class="block text-gray-700 text-xl font-bold mb-2"
                          >Total :</label
                        >
                        <div class="block text-gray-700 text-xl font-bold mb-2">
                          RM {{ calculateTotal(subTab) }}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="mt-4 mr-6 flex flex-row-reverse">
                    <div class="flex items-center justify-between">
                      <button
                        v-if="subTab.title === 'Details'"
                        type="button"
                        @click="nextTab"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Next
                      </button>
                      <button
                        v-else-if="subTab.title === 'Other Expenses'"
                        type="submit"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- End of Overseas Travelling tab -->

        <!-- Entertainment tab -->
        <div v-if="tab.title == 'Entertainment'">
          <div class="tabs">
            <button
              v-for="(subTab, subIndex) in entertainmentTabs"
              :key="subIndex"
              @click="activeSubTab = subIndex"
              :class="{
                'bg-gray-300': activeSubTab === subIndex,
                'hover:bg-gray-200': activeSubTab !== subIndex,
              }"
              class="px-4 py-2 mr-2 rounded-sm focus:outline-none border border-gray-300"
            >
              {{ subTab.title }}
              <span v-if="subTab.title === 'Attendees'">
                ({{ attendees.length }})</span
              >
            </button>
          </div>

          <div
            v-for="(subTab, subIndex) in entertainmentTabs"
            :key="subIndex"
            v-show="activeSubTab === subIndex"
          >
            <div class="pt-4">
              <hr />
              <div class="m-2">
                <form @submit.prevent="submitForm2('entertainment')">
                  <div
                    v-for="(field, fieldIndex) in subTab.fields"
                    :key="fieldIndex"
                    :class="[
                      'grid',
                      'grid-cols-1',
                      subTab.gridLayout || 'sm:grid-cols-2',
                      field.gridClass,
                    ]"
                  >
                    <template
                      v-if="
                        field.id !== 'OtherTypeofEntertainmentE' ||
                        isOtherEntertainment
                      "
                    >
                      <label
                        :for="field.id"
                        class="m-3 p-1 block text-gray-700 text-sm font-bold mb-2"
                      >
                        {{ field.label }}
                        <span v-if="field.required" style="color: red">*</span>
                      </label>

                      <template v-if="field.type === 'select'">
                        <select
                          v-model="field.value"
                          :required="field.required"
                          :id="field.id"
                          class="block w-full px-4 py-2 mt-1 mb-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        >
                          <option
                            v-for="(option, optionIndex) in field.options"
                            :key="optionIndex"
                            :value="option.value"
                          >
                            {{ option.label }}
                          </option>
                        </select>
                      </template>

                      <template v-else-if="field.type === 'file'">
                        <div class="pt-3">
                          <file-pond
                            :name="field.id"
                            :required="field.required"
                            ref="pond"
                            label-idle="Drop files here..."
                            @addfile="
                              (error, file) => handleAddFile(error, file, field)
                            "
                            @removefile="
                              (error, file) =>
                                handleRemoveFile(error, file, field)
                            "
                            :accepted-file-types="field.acceptedFileTypes"
                            :max-file-size="field.maxFileSize"
                            :allow-multiple="field.allowMultiple"
                          />
                        </div>
                      </template>
                      <template v-else>
                        <input
                          v-model="field.value"
                          :required="field.required"
                          :id="field.id"
                          :type="field.type"
                          :placeholder="field.placeholder"
                          :step="field.type === 'number' ? '0.01' : undefined"
                          class="block w-full px-4 py-2 mt-1 mb-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                      </template>
                    </template>
                  </div>

                  <div v-if="subTab.title !== 'Attendees'" class="pt-4">
                    <hr />
                    <div class="mt-4">
                      <div class="grid grid-cols-1 sm:grid-cols-2">
                        <label
                          class="block text-gray-700 text-xl font-bold mb-2"
                          >Total :</label
                        >
                        <div class="block text-gray-700 text-xl font-bold mb-2">
                          RM {{ calculateTotal(subTab) }}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div v-if="subTab.title === 'Attendees'" class="mt-4">
                    <button
                      @click="showModal = true"
                      class="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                      Add Attendee
                    </button>

                    <!-- Modal Form -->
                    <div
                      v-if="showModal"
                      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                    >
                      <div class="bg-white p-6 rounded-lg w-80">
                        <h3 class="text-lg font-medium mb-4">Add Attendee</h3>
                        <div class="mb-4">
                          <label
                            for="name"
                            class="block text-sm font-medium text-gray-700"
                            >Name</label
                          >
                          <input
                            type="text"
                            v-model="modalForm.name"
                            required
                            class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                          />
                        </div>
                        <div class="mb-4">
                          <label
                            for="company_Name"
                            class="block text-sm font-medium text-gray-700"
                            >Company Name</label
                          >
                          <input
                            type="text"
                            v-model="modalForm.company_Name"
                            required
                            class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                          />
                        </div>
                        <div class="flex justify-end">
                          <button
                            @click="addAttendee"
                            class="px-4 py-2 bg-blue-500 text-white rounded mr-2"
                          >
                            Save
                          </button>
                          <button
                            @click="showModal = false"
                            class="px-4 py-2 bg-gray-300 text-black rounded"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>

                    <!-- Attendees Table -->
                    <div class="mt-4">
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
                            v-for="(attendee, index) in attendees"
                            :key="index"
                          >
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
                            <td
                              class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
                            >
                              <button
                                @click="removeAttendee(index)"
                                class="text-red-500 transition-colors duration-200 dark:hover:text-red-300 dark:text-gray-300 hover:text-red-300 focus:outline-none"
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
                  <div class="mt-4 mr-6 flex flex-row-reverse">
                    <div class="flex items-center justify-between">
                      <button
                        v-if="subTab.title === 'Details'"
                        type="button"
                        @click="nextTab"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Next
                      </button>
                      <button
                        v-else-if="subTab.title === 'Attendees'"
                        type="submit"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- End of Entertainment tab -->

        <!-- Staff Refreshment tab -->
        <div v-if="tab.title === 'Staff Refreshment'">
          <div class="tabs">
            <button
              v-for="(subTab, subIndex) in staffRefreshmentTabs"
              :key="subIndex"
              @click="activeSubTab = subIndex"
              :class="{
                'bg-gray-300': activeSubTab === subIndex,
                'hover:bg-gray-200': activeSubTab !== subIndex,
              }"
              class="px-4 py-2 mr-2 rounded-sm focus:outline-none border border-gray-300"
            >
              {{ subTab.title }}
              <span v-if="subTab.title === 'Staff Involved'"
                >({{ staffInvolved.length }})</span
              >
            </button>
          </div>

          <div
            v-for="(subTab, subIndex) in staffRefreshmentTabs"
            :key="subIndex"
            v-show="activeSubTab === subIndex"
          >
            <div class="pt-4">
              <hr />
              <div class="m-2">
                <form @submit.prevent="submitForm3('staffrefreshment')">
                  <div
                    v-for="(field, fieldIndex) in subTab.fields"
                    :key="fieldIndex"
                    :class="[
                      'grid',
                      'grid-cols-1',
                      subTab.gridLayout || 'sm:grid-cols-2',
                      field.gridClass,
                    ]"
                  >
                    <template
                      v-if="
                        field.id !== 'OtherTypeofStaffRefreshmentSR' ||
                        isOtherStaffRefreshment
                      "
                    >
                      <label
                        :for="field.id"
                        class="m-3 p-1 block text-gray-700 text-sm font-bold mb-2"
                      >
                        {{ field.label }}
                        <span v-if="field.required" style="color: red">*</span>
                      </label>

                      <template v-if="field.type === 'select'">
                        <select
                          v-model="field.value"
                          :id="field.id"
                          class="block w-full px-4 py-2 mt-1 mb-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        >
                          <option
                            v-for="(option, optionIndex) in field.options"
                            :key="optionIndex"
                            :value="option.value"
                          >
                            {{ option.label }}
                          </option>
                        </select>
                      </template>

                      <template v-else-if="field.type === 'file'">
                        <div class="pt-3">
                          <file-pond
                            :name="field.id"
                            ref="pond"
                            label-idle="Drop files here..."
                            @addfile="
                              (error, file) => handleAddFile(error, file, field)
                            "
                            @removefile="
                              (error, file) =>
                                handleRemoveFile(error, file, field)
                            "
                            :accepted-file-types="field.acceptedFileTypes"
                            :max-file-size="field.maxFileSize"
                            :allow-multiple="field.allowMultiple"
                          />
                        </div>
                      </template>
                      <template v-else>
                        <input
                          v-model="field.value"
                          :id="field.id"
                          :type="field.type"
                          :placeholder="field.placeholder"
                          :step="field.type === 'number' ? '0.01' : undefined"
                          class="block w-full px-4 py-2 mt-1 mb-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                      </template>
                    </template>
                  </div>

                  <div v-if="subTab.title !== 'Staff Involved'" class="pt-4">
                    <hr />
                    <div class="mt-4">
                      <div class="grid grid-cols-1 sm:grid-cols-2">
                        <label
                          class="block text-gray-700 text-xl font-bold mb-2"
                          >Total :</label
                        >
                        <div class="block text-gray-700 text-xl font-bold mb-2">
                          RM {{ calculateTotal(subTab) }}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div v-if="subTab.title === 'Staff Involved'" class="mt-4">
                    <div class="mb-4">
                      <label
                        for="companyName"
                        class="block text-sm font-medium text-gray-700"
                        >Company Name</label
                      >
                      <select
                        v-model="selectedCompanyName"
                        required
                        class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      >
                        <option
                          v-for="company in pktCompanies"
                          :key="company"
                          :value="company"
                        >
                          {{ company }}
                        </option>
                      </select>
                    </div>
                    <button
                      @click="showModal = true"
                      class="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                      Add Staff
                    </button>

                    <!-- Modal Form -->
                    <div
                      v-if="showModal"
                      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                    >
                      <div class="bg-white p-6 rounded-lg w-80">
                        <h3 class="text-lg font-medium mb-4">Add Staff</h3>
                        <div class="mb-4">
                          <label
                            for="name"
                            class="block text-sm font-medium text-gray-700"
                            >Name</label
                          >
                          <input
                            type="text"
                            v-model="modalForm.name"
                            required
                            class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                          />
                        </div>
                        <div class="mb-4">
                          <label
                            for="department"
                            class="block text-sm font-medium text-gray-700"
                            >Department</label
                          >
                          <select
                            v-model="selecteddepartment"
                            required
                            class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                          >
                            <option
                              v-for="department in pktDepartments"
                              :key="department"
                              :value="department"
                            >
                              {{ department }}
                            </option>
                          </select>
                        </div>
                        <div class="flex justify-end">
                          <button
                            @click="addStaff"
                            class="px-4 py-2 bg-blue-500 text-white rounded mr-2"
                          >
                            Save
                          </button>
                          <button
                            @click="showModal = false"
                            class="px-4 py-2 bg-gray-300 text-black rounded"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>

                    <!-- Staff Table -->
                    <div class="mt-4">
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
                            v-for="(staff, index) in staffInvolved"
                            :key="index"
                          >
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
                            <td
                              class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
                            >
                              <button
                                @click="removeStaff(index)"
                                class="text-red-500 transition-colors duration-200 dark:hover:text-red-300 dark:text-gray-300 hover:text-red-300 focus:outline-none"
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

                  <div class="mt-4 mr-6 flex flex-row-reverse">
                    <div class="flex items-center justify-between">
                      <button
                        v-if="subTab.title === 'Details'"
                        type="button"
                        @click="nextTab"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Next
                      </button>
                      <button
                        v-else-if="subTab.title === 'Staff Involved'"
                        type="submit"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- End of Staff Refreshment tab -->
      </div>
    </div>
  </div>
</template>

<script>
import vueFilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import { monthOptions } from "@/javascript/eClaimOptions.js";
import { refOptions } from "@/javascript/eClaimOptions.js";
import { TypeOptions } from "@/javascript/eClaimOptions.js";
import axios from "axios";
import { store } from "@/views/store.js";

// Create component
const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
);

export default {
  components: {
    FilePond,
  },

  props: {
    type: String,
  },

  data() {
    return {
      profilestatus: "",
      IcNumber: "",
      chooseform: true,
      activeTab: this.type == "Finance" ? 6 : 5,
      activeSubTab: 0,
      date: "",
      yearRange: [],
      showMileageUpload: true,
      showFareUpload: true,
      showTollUpload: true,
      showParkingUpload: true,
      LimitedAmountHR: 0,
      limit_medicaldental: 0,
      limit_outpatient: 0,
      uploadedFiles: [],
      currencies: [],
      currencyOptions: [],
      currencyType: "foreign",
      selectedCurrencySymbol: "",
      totalAccommodation: 0,
      otherExpenses: [],
      showOtherExpensesModal: false,
      newExpense: {
        name: "",
        amount: 0,
        description: "",
        ForeignCurrencyAccommodationOT: "",
        ExchangeRateAccommodationOT: "",
        AmountforAccommodationOT: "",
        files: [],
      },
      showModal: false,
      selecteddepartment: "",
      pktDepartments: [],
      selectedCompanyName: "",
      pktCompanies: [],
      modalForm: {
        name: "",
        department: "",
        companyName: "",
        company_Name: "",
      },
      attendees: [],
      staffInvolved: [],
      tabs: [
        {
          form: "HR",
          title: "Local Travelling",
          tabType: "Finance",

          gridLayout: "grid-cols-3",
          fields: [
            {
              id: "tripwayLT",
              label: "Trip",
              type: "radio-group",
              value: [],
              required: true,
              options: [
                { label: "Round Trip", value: "Round Trip" },
                { label: "One Way", value: "One Way" },
              ],
              gridClass: "sm:col-span-1",
            },
            {
              id: "dateLT",
              label: "Departure Date",
              type: "date",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "ReturndateLT",
              label: "Return Date",
              type: "date",
              value: "",
              required: true,
              hidden: false,
              gridClass: "sm:col-span-2",
            },
            {
              id: "TransportLT",
              label: "Travelling Mode By",
              type: "radio-group",
              value: [],
              required: true,
              options: [
                { label: "Personal Transport", value: "Personal Transport" },
                { label: "Company Transport", value: "Company Transport" },
                { label: "Public Transport", value: "Public Transport" },
              ],
              gridClass: "sm:col-span-1",
            },
            {
              id: "TransportSpec",
              label: "Transport Specification",
              type: "select",
              value: "",
              required: true,
              options: [
                { label: "Motorcycle", value: "Motorcycle" },
                { label: "Car", value: "Car" },
              ],
              hidden: false,
              gridClass: "sm:col-span-1",
            },
            {
              id: "PublicTransportSpec",
              label: "Transport Specification",
              type: "text",
              value: "",
              required: true,
              hidden: false,
              gridClass: "sm:col-span-1",
            },
            {
              id: "LocationStart",
              label: "Starting Point Location",
              type: "text",
              placeholder: "From Where",
              value: "",
              required: true,
              gridClass: "sm:col-span-1",
            },
            {
              id: "LocationEnd",
              label: "End Point Location",
              type: "text",
              placeholder: "To Where",
              value: "",
              required: true,
              gridClass: "sm:col-span-1",
            },
            {
              id: "AccommodationLT",
              label: "Accommodation",
              type: "text",
              placeholder: "Hotel Name",
              value: "",
              hidden: false,
              gridClass: "sm:col-span-1",
            },
            {
              id: "MealAllowanceLT",
              label: "Meal Allowance(RM)",
              type: "number",
              value: "",
              hidden: false,
              gridClass: "sm:col-span-2",
            },
            {
              id: "MileageKMLT",
              label: "Mileage/Kilometer(KM)",
              type: "number",
              value: "",
              gridClass: "sm:col-span-1",
              hidden: false,
            },
            {
              id: "MileageRMLT",
              label: "Total Mileage(RM)",
              type: "number",
              value: "",
              gridClass: "sm:col-span-1",
              hidden: false,
            },
            {
              id: "UploadMileageRMLT",
              label: "",
              type: "file",
              value: [],
              allowMultiple: true,
              server: null,
              required: false,
              maxFileSize: "5MB",
              acceptedFileTypes: [
                "image/png",
                "image/jpeg",
                "application/pdf",
                "application/vnd.ms-excel",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
              ],
              gridClass: "sm:col-span-1",
              hidden: false,
            },
            {
              id: "FareRMLT",
              label: "Fare(RM)",
              type: "number",
              value: "",
              gridClass: "sm:col-span-1",
              required: true,
              hidden: false,
            },
            {
              id: "UploadFareRMLT",
              label: "",
              type: "file",
              value: [],
              allowMultiple: true,
              server: null,
              required: false,
              maxFileSize: "5MB",
              acceptedFileTypes: [
                "image/png",
                "image/jpeg",
                "application/pdf",
                "application/vnd.ms-excel",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
              ],
              gridClass: "sm:col-span-1",
              hidden: false,
            },
            {
              id: "TollLT",
              label: "Toll/Touch' n Go(RM)",
              type: "number",
              value: "",
              gridClass: "sm:col-span-1",
              hidden: false,
            },
            {
              id: "UploadTollLT",
              label: "",
              type: "file",
              value: [],
              allowMultiple: true,
              server: null,
              required: false,
              maxFileSize: "5MB",
              acceptedFileTypes: [
                "image/png",
                "image/jpeg",
                "application/pdf",
                "application/vnd.ms-excel",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
              ],
              gridClass: "sm:col-span-1",
              hidden: false,
            },
            {
              id: "ParkingLT",
              label: "Parking(RM)",
              type: "number",
              value: "",
              gridClass: "sm:col-span-1",
              hidden: false,
            },
            {
              id: "UploadParkingLT",
              label: "",
              type: "file",
              value: [],
              allowMultiple: true,
              server: null,
              required: false,
              maxFileSize: "5MB",
              acceptedFileTypes: [
                "image/png",
                "image/jpeg",
                "application/pdf",
                "application/vnd.ms-excel",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
              ],
              gridClass: "sm:col-span-1",
              hidden: false,
            },
            {
              id: "UploadLT",
              label:
                "Additional Supporting Document(s). (png, jpeg, pdf or xlsx) (Optional)",
              type: "file",
              value: [],
              allowMultiple: true,
              server: null,
              required: false,
              maxFileSize: "5MB",
              acceptedFileTypes: [
                "image/png",
                "image/jpeg",
                "application/pdf",
                "application/vnd.ms-excel",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
              ],
              gridClass: "sm:col-span-1",
            },
          ],
        },
        {
          form: "HR",
          title: "Overseas Travelling",
          tabType: "Finance",
          gridLayout: "grid-cols-3", //
          fields: [],
        },
        {
          title: "Entertainment",
          tabType: "Finance",

          gridLayout: "grid-cols-3",
          fields: [],
        },
        {
          title: "Staff Refreshment",
          tabType: "Finance",

          gridLayout: "grid-cols-3",
          fields: [],
        },
        {
          title: "Handphone Bill Reimbursement",
          tabType: "HR",

          gridLayout: "grid-cols-3",
          fields: [
            {
              id: "MonthHR",
              label: "Month",
              type: "select",
              value: "",
              required: true,
              options: monthOptions,
              gridClass: "sm:col-span-1",
            },
            {
              id: "YearHR",
              label: "Year",
              type: "year",
              value: "",
              required: true,
              options: this.years,
              gridClass: "sm:col-span-2",
            },
            {
              id: "BankNameHR",
              label: "Bank Name",
              type: "text",
              value: "",
              disabled: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "AccBankNumberHR",
              label: "Account Bank No.",
              type: "text",
              value: "",
              disabled: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "AccHolderNameHR",
              label: "Account Holder Name",
              type: "text",
              value: "",
              disabled: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "LimitedAmountHR",
              label: "Limited Amount(RM)",
              type: "number",
              value: "",
              disabled: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "ClaimsAmountHR",
              label: "Claims Amount(RM)",
              type: "number",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "icNumber",
              // label: "ic number",
              type: "text",
              value: "",
              gridClass: "sm:col-span-2",
              hidden: true,
            },
            {
              id: "UploadHR",
              label: "Attachment(s). (png, jpeg, pdf or xlsx)",
              type: "file",
              value: "",
              required: true,
              allowMultiple: true,
              server: null,
              maxFileSize: "5MB",
              acceptedFileTypes: [
                "image/png",
                "image/jpeg",
                "application/pdf",
                "application/vnd.ms-excel",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
              ],
              gridClass: "sm:col-span-1",
            },
          ],
        },
        {
          title: "Medical Bill Reimbursement",
          tabType: "HR",

          gridLayout: "grid-cols-3",
          fields: [
            {
              id: "dateML",
              label: "Date of Medical Bill",
              type: "date",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "MedicalCategoryML",
              label: "Medical Category",
              type: "select",
              value: [],
              required: true,
              options: [
                { label: "Outpatient", value: "Outpatient" },
                { label: "Medical Check-Up", value: "Medical Check-Up" },
                { label: "Dental", value: "Dental" },
              ],
              gridClass: "sm:col-span-1",
            },
            {
              id: "ReasonML",
              label: "Reason for Medical",
              type: "text",
              value: "",
              hidden: false,
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "ClinicSelectionML",
              label: "Clinic Selection",
              type: "radio-group",
              value: [],
              hidden: false,
              required: true,
              options: [
                {
                  label: "Mediviron Clinic - Panel",
                  value: "Mediviron Clinic - Panel",
                },
                { label: "Other Clinic", value: "Other Clinic" },
              ],
              gridClass: "sm:col-span-1",
            },
            {
              id: "OtherClinicSpecML",
              label: "Specify Clinic Name",
              type: "text",
              value: "",
              required: true,
              placeholder: "Please Enter Clinic Name",
              hidden: false,
              gridClass: "sm:col-span-1",
            },
            {
              id: "OtherClinicReasonML",
              label: "Reason not Going to Panel Clinic",
              type: "text",
              value: "",
              required: true,
              placeholder: "Please Enter the Reason",
              hidden: false,
              gridClass: "sm:col-span-1",
            },
            {
              id: "BankNameML",
              label: "Bank Name",
              type: "text",
              value: "",
              disabled: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "AccBankNumberML",
              label: "Account Bank No.",
              type: "number",
              value: "",
              disabled: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "AccHolderNameML",
              label: "Account Holder Name",
              type: "text",
              value: "",
              disabled: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "LimitedAmountML",
              label: "Limited Amount(RM)",
              type: "number",
              value: "",
              disabled: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "ClaimsAmountML",
              label: "Claims Amount(RM)",
              type: "number",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "icNumber",
              // label: "ic number",
              type: "text",
              value: "",
              gridClass: "sm:col-span-2",
              hidden: true,
            },
            {
              id: "limit_medic_dental",
              // label: "ic number",
              type: "number",
              value: "",
              gridClass: "sm:col-span-2",
              hidden: true,
            },
            {
              id: "limit_outpatient",
              // label: "ic number",
              type: "number",
              value: "",
              gridClass: "sm:col-span-2",
              hidden: true,
            },
            {
              id: "UploadML",
              label: "Attachment(s). (png, jpeg, pdf or xlsx)",
              type: "file",
              value: [],
              required: true,
              allowMultiple: true,
              server: null,
              maxFileSize: "5MB",
              acceptedFileTypes: [
                "image/png",
                "image/jpeg",
                "application/pdf",
                "application/vnd.ms-excel",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
              ],
              gridClass: "sm:col-span-1",
            },
          ],
        },
        {
          title: "Others",
          tabType: "Finance",

          gridLayout: "grid-cols-3",
          fields: [
            {
              id: "dateOthers",
              label: "Expense Date",
              type: "date",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "ExpenseNameOthers",
              label: "Expense Name",
              type: "text",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "AmountRMOthers",
              label: "Amount(RM)",
              type: "number",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "DescriptionOthers",
              label: "Description of Claim",
              type: "long-text",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "UploadOthers",
              label: "Attachment(s). (png, jpeg, pdf or xlsx)",
              type: "file",
              value: [],
              allowMultiple: true,
              server: null,
              maxFileSize: "5MB",
              acceptedFileTypes: [
                "image/png",
                "image/jpeg",
                "application/pdf",
                "application/vnd.ms-excel",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
              ],
              required: true,
              gridClass: "sm:col-span-1",
            },
          ],
        },
      ],
      overseasTabs: [
        {
          title: "Details",
          gridLayout: "grid-cols-3",
          fields: [
            {
              id: "dateOT",
              label: "Departure Date",
              type: "date",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "ReturendateOT",
              label: "Return Date",
              type: "date",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "PurposeOT",
              label: "Purpose",
              type: "text",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "MealAllowanceOT",
              label: "Meal Allowance(RM)",
              type: "number",
              value: "",
              gridClass: "sm:col-span-2",
            },
            {
              id: "UploadOT",
              label:
                "Additional Supporting Document(s). (png, jpeg, pdf or xlsx)",
              type: "file",
              value: [],
              allowMultiple: true,
              required: false,
              server: null,
              maxFileSize: "5MB",
              acceptedFileTypes: [
                "image/png",
                "image/jpeg",
                "application/pdf",
                "application/vnd.ms-excel",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
              ],
              gridClass: "sm:col-span-1",
            },
          ],
        },
        {
          title: "Other Expenses",
          fields: [],
        },
      ],
      entertainmentTabs: [
        {
          title: "Details",
          gridLayout: "grid-cols-3",
          fields: [
            {
              id: "dateE",
              label: "Date",
              type: "date",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "TypeofEntertainmentE",
              label: "Type of Entertainment",
              type: "select",
              value: "",
              required: true,
              options: TypeOptions,
              gridClass: "sm:col-span-2",
            },
            {
              id: "OtherTypeofEntertainmentE",
              label: "Other Type of Entertainment",
              type: "text",
              value: "",
              placeholder: "Specify other type",
              gridClass: "sm:col-span-2",
              hidden: true,
            },
            {
              id: "CompanyE",
              label: "Company",
              type: "text",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "VenueE",
              label: "Venue",
              type: "text",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "ReferenceE",
              label: "Reference",
              type: "select",
              value: "",
              required: true,
              options: refOptions,
              gridClass: "sm:col-span-2",
            },
            {
              id: "AmountRME",
              label: "Amount(RM)",
              type: "number",
              value: "",
              gridClass: "sm:col-span-2",
            },
            {
              id: "UploadE",
              label: "Attachment(s). (png, jpeg, pdf or xlsx)",
              type: "file",
              value: [],
              required: true,
              allowMultiple: true,
              server: null,
              maxFileSize: "5MB",
              acceptedFileTypes: [
                "image/png",
                "image/jpeg",
                "application/pdf",
                "application/vnd.ms-excel",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
              ],
              gridClass: "sm:col-span-1",
            },
          ],
        },
        {
          title: "Attendees",
          fields: [],
        },
      ],
      staffRefreshmentTabs: [
        {
          title: "Details",
          gridLayout: "grid-cols-3",
          fields: [
            {
              id: "dateSR",
              label: "Date",
              type: "date",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "TypeofRefreshmentSR",
              label: "Type of Refreshment",
              type: "select",
              value: "",
              required: true,
              options: TypeOptions,
              gridClass: "sm:col-span-2",
            },
            {
              id: "OtherTypeofStaffRefreshmentSR",
              label: "Other Type of Staff Refreshment",
              type: "text",
              value: "",
              placeholder: "Specify other type",
              gridClass: "sm:col-span-2",
              hidden: true,
            },
            {
              id: "CompanySR",
              label: "Company",
              type: "text",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "VenueSR",
              label: "Venue",
              type: "text",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "ReferenceSR",
              label: "Reference",
              type: "select",
              value: "",
              required: true,
              options: refOptions,
              gridClass: "sm:col-span-2",
            },
            {
              id: "AmountRMSR",
              label: "Amount(RM)",
              type: "number",
              value: "",
              gridClass: "sm:col-span-2",
            },
            {
              id: "UploadSR",
              label: "Attachment(s). (png, jpeg, pdf or xlsx)",
              type: "file",
              value: [],
              required: true,
              allowMultiple: true,
              server: null,
              maxFileSize: "5MB",
              acceptedFileTypes: [
                "image/png",
                "image/jpeg",
                "application/pdf",
                "application/vnd.ms-excel",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
              ],
              gridClass: "sm:col-span-1",
            },
          ],
        },
        {
          title: "Staff Involved",
          fields: [],
        },
      ],
    };
  },

  computed: {
    totalMealAllowanceOTplusotherExpenses() {
      let otherExpensesTotal = this.otherExpenses.reduce(
        (total, expense) => total + (parseFloat(expense.amount) || 0),
        0
      );

      let mealAllowanceOT = this.overseasTabs
        .find((tab) => tab.title === "Details")
        .fields.find((field) => field.id === "MealAllowanceOT").value;

      let total = (parseFloat(mealAllowanceOT) || 0) + otherExpensesTotal;

      return total.toFixed(2); // Return the total formatted to 2 decimal places
    },
    // Add new computed properties for each form
    hasLocalAccess() {
      return this.profilestatus.local_access;
    },
    hasMdAccess() {
      return this.profilestatus.md_access;
    },
    hasEntAccess() {
      return this.profilestatus.ent_access;
    },
    hasStaffAccess() {
      return this.profilestatus.staff_access;
    },
    hasOverseasAccess() {
      return this.profilestatus.overseas_access;
    },
    hasOthersAccess() {
      return this.profilestatus.others_access;
    },
    hasPhoneAccess() {
      return this.profilestatus.phone_access;
    },

    selectedCurrency() {
      return this.currencyOptions.find(
        (currency) =>
          currency.value === this.newExpense.ForeignCurrencyAccommodationOT
      );
    },
    isFormDisabled() {
      const handphoneTab = this.tabs.find(
        (tab) => tab.title === "Handphone Bill Reimbursement"
      );
      if (handphoneTab) {
        const limitAmountField = handphoneTab.fields.find(
          (field) => field.id === "LimitedAmountHR"
        );
        return limitAmountField && parseFloat(limitAmountField.value) <= 0;
      }
      return false;
    },
    isSaveButtonDisabled() {
      const tab = this.tabs.find(
        (tab) => tab.title === "Medical Bill Reimbursement"
      );

      if (tab === "Medical Bill Reimbursement") if (!tab) return true;

      const medCategoryField = tab.fields.find(
        (field) => field.id === "MedicalCategoryML"
      );
      const limitedAmountField = tab.fields.find(
        (field) => field.id === "LimitedAmountML"
      );

      if (!medCategoryField || !limitedAmountField) return true;

      const medCategory = medCategoryField.value;
      const limitedAmount = parseFloat(limitedAmountField.value) || 0;

      if (medCategory === "Outpatient" && limitedAmount === 0) {
        return true;
      }

      if (
        (medCategory === "Medical Check-Up" || medCategory === "Dental") &&
        limitedAmount === 0
      ) {
        return true;
      }

      return false;
    },
    isCompanyTransport() {
      const tab = this.tabs.find((tab) => tab.title === "Local Travelling");
      if (!tab) return false;
      const transportField = tab.fields.find(
        (field) =>
          field.id === "TransportLT" && "TransportSpec" && "PublicTransportSpec"
      );
      this.updateFieldVisibility10(transportField.value);
      return transportField && transportField.value === "Company Transport";
    },
    isPublicTransport() {
      const tab = this.tabs.find((tab) => tab.title === "Local Travelling");
      if (!tab) return false;
      const publicTransportField = tab.fields.find(
        (field) =>
          field.id === "TransportLT" && "TransportSpec" && "PublicTransportSpec"
      );
      this.updateFieldVisibility10(publicTransportField.value);
      return (
        publicTransportField &&
        publicTransportField.value === "Public Transport"
      );
    },
    isPersonalTransport() {
      const tab = this.tabs.find((tab) => tab.title === "Local Travelling");
      if (!tab) return false;
      const personalTransportField = tab.fields.find(
        (field) =>
          field.id === "TransportLT" && "TransportSpec" && "PublicTransportSpec"
      );
      this.updateFieldVisibility10(personalTransportField.value);
      return (
        personalTransportField &&
        personalTransportField.value === "Personal Transport"
      );
    },
    isOneWay() {
      const tab = this.tabs.find((tab) => tab.title === "Local Travelling");
      if (!tab) return false;
      const tripField = tab.fields.find(
        (field) =>
          field.id === "tripwayLT" &&
          "ReturndateLT" &&
          "AccommodationLT" &&
          "MealAllowanceLT"
      );
      this.updateFieldVisibility10(tripField.value);

      return tripField && tripField.value === "One Way";
    },
    isOtherThanOutpatient() {
      const tab = this.tabs.find(
        (tab) => tab.title === "Medical Bill Reimbursement"
      );
      if (!tab) return false;
      const medCategoryField = tab.fields.find(
        (field) => field.id === "MedicalCategoryML"
      );

      this.updateFieldVisibility8(medCategoryField.value);
      return (
        medCategoryField.value === "Medical Check-Up" ||
        medCategoryField.value === "Dental"
      );
    },
    isPanelClinic() {
      const tab = this.tabs.find(
        (tab) => tab.title === "Medical Bill Reimbursement"
      );
      if (!tab) return false;
      const clinicField = tab.fields.find(
        (field) => field.id === "ClinicSelectionML"
      );
      const clinicselect = tab.fields.find(
        (field) => field.id === "OtherClinicSpecML" && "OtherClinicReasonML"
      );
      const clinicspecify = tab.fields.find(
        (field) => field.id === "OtherClinicReasonML"
      );
      // const clinicspecify = tab.fields.find(
      //   (field) =>
      //     field.id ===
      //     "OtherCliniReasonML"
      // );

      this.updateFieldVisibility2(
        clinicField.value,
        clinicselect.value,
        clinicspecify.value
      );

      console.log("test clinic select" + clinicselect.value);
      console.log("test clinic specify" + clinicspecify.value);

      return clinicField.value === "Mediviron Clinic - Panel";
    },
    isOtherEntertainment() {
      const entertainmentTab = this.entertainmentTabs.find(
        (tab) => tab.title === "Details"
      );
      if (!entertainmentTab) return false;
      const typeOfEntertainmentField = entertainmentTab.fields.find(
        (field) => field.id === "TypeofEntertainmentE"
      );
      return (
        typeOfEntertainmentField && typeOfEntertainmentField.value === "OTHERS"
      );
    },
    isOtherStaffRefreshment() {
      const staffRefreshmentTab = this.staffRefreshmentTabs.find(
        (tab) => tab.title === "Details"
      );
      if (!staffRefreshmentTab) return false;
      const TypeofRefreshmentField = staffRefreshmentTab.fields.find(
        (field) => field.id === "TypeofRefreshmentSR"
      );
      return (
        TypeofRefreshmentField && TypeofRefreshmentField.value === "OTHERS"
      );
    },
  },

  watch: {
    selectedCurrency(newCurrency) {
      // Update the currency symbol based on the selected currency
      this.selectedCurrencySymbol = newCurrency
        ? newCurrency.label.match(/\((.*)\)/)[1]
        : "";
    },
    tabs: {
      handler(newTabs) {
        newTabs.forEach((tab) => {
          if (tab.title === "Local Travelling") {
            const transportField = tab.fields.find(
              (field) =>
                field.id === "TransportLT" &&
                Object.prototype.hasOwnProperty.call(field, "TransportSpec") &&
                Object.prototype.hasOwnProperty.call(
                  field,
                  "PublicTransportSpec"
                )
            );
            if (transportField) {
              this.updateFieldVisibility(transportField.value);
              this.updateFieldVisibility5(transportField.value);
              this.updateFieldVisibility6(transportField.value);
            }

            const tripField = tab.fields.find(
              (field) =>
                field.id === "tripwayLT" &&
                Object.prototype.hasOwnProperty.call(field, "ReturndateLT") &&
                Object.prototype.hasOwnProperty.call(
                  field,
                  "AccommodationLT"
                ) &&
                Object.prototype.hasOwnProperty.call(field, "MealAllowanceLT")
            );
            if (tripField) {
              this.updateFieldVisibility7(tripField.value);
            }
          }

          if (tab.title === "Medical Bill Reimbursement") {
            const clinicField = tab.fields.find(
              (field) =>
                field.id === "ClinicSelectionML" &&
                Object.prototype.hasOwnProperty.call(
                  field,
                  "OtherClinicSpecML"
                ) &&
                Object.prototype.hasOwnProperty.call(
                  field,
                  "OtherCliniReasonML"
                )
            );
            if (clinicField) {
              console.log("test 123" + clinicField.value);
              //this.updateFieldVisibility2(clinicField.value);
            }

            const medCategoryField = tab.fields.find(
              (field) =>
                field.id === "MedicalCategoryML" &&
                Object.prototype.hasOwnProperty.call(field, "ReasonML") &&
                Object.prototype.hasOwnProperty.call(
                  field,
                  "ClinicSelectionML"
                ) &&
                Object.prototype.hasOwnProperty.call(
                  field,
                  "OtherClinicReasonML"
                ) &&
                Object.prototype.hasOwnProperty.call(field, "OtherClinicSpecML")
            );
            if (medCategoryField) {
              console.log("test hazman" + medCategoryField.value);
              // this.updateFieldVisibility8(medCategoryField.value);
            }

            const medicalCategoryMLField = tab.fields.find(
              (field) => field.id === "MedicalCategoryML"
            );
            const limitedAmountMLField = tab.fields.find(
              (field) => field.id === "LimitedAmountML"
            );
            const claimsAmountMLField = tab.fields.find(
              (field) => field.id === "ClaimsAmountML"
            );

            if (
              medicalCategoryMLField &&
              limitedAmountMLField &&
              claimsAmountMLField
            ) {
              this.$watch(
                () => medicalCategoryMLField.value,
                (newValue) => {
                  if (
                    newValue === "Medical Check-Up" ||
                    newValue === "Dental"
                  ) {
                    if (
                      parseFloat(claimsAmountMLField.value) >
                      parseFloat(limitedAmountMLField.value)
                    ) {
                      claimsAmountMLField.value = limitedAmountMLField.value;
                    }

                    this.$watch(
                      () => claimsAmountMLField.value,
                      (newClaimValue) => {
                        if (
                          parseFloat(newClaimValue) >
                          parseFloat(limitedAmountMLField.value)
                        ) {
                          claimsAmountMLField.value =
                            limitedAmountMLField.value;
                        }
                      }
                    );
                  } else if (newValue === "Outpatient") {
                    const limitOutpatient = 70;

                    if (
                      parseFloat(limitedAmountMLField.value) >= limitOutpatient
                    ) {
                      claimsAmountMLField.value = limitOutpatient;
                    } else {
                      claimsAmountMLField.value = limitedAmountMLField.value;
                    }

                    this.$watch(
                      () => claimsAmountMLField.value,
                      (newClaimValue) => {
                        if (parseFloat(newClaimValue) > limitOutpatient) {
                          claimsAmountMLField.value = limitOutpatient;
                        } else if (
                          parseFloat(newClaimValue) >
                          parseFloat(limitedAmountMLField.value)
                        ) {
                          claimsAmountMLField.value =
                            limitedAmountMLField.value;
                        }
                      }
                    );
                  }
                }
              );

              this.$watch(
                () => limitedAmountMLField.value,
                (newLimitedValue) => {
                  if (
                    medicalCategoryMLField.value === "Medical Check-Up" ||
                    medicalCategoryMLField.value === "Dental"
                  ) {
                    if (
                      parseFloat(claimsAmountMLField.value) >
                      parseFloat(newLimitedValue)
                    ) {
                      claimsAmountMLField.value = newLimitedValue;
                    }
                  } else if (medicalCategoryMLField.value === "Outpatient") {
                    const limitOutpatient = 70;

                    if (parseFloat(newLimitedValue) >= limitOutpatient) {
                      claimsAmountMLField.value = limitOutpatient;
                    } else {
                      claimsAmountMLField.value = newLimitedValue;
                    }
                  }
                }
              );
            }
          }

          if (tab.title === "Details") {
            const typeOfEntertainmentField = tab.fields.find(
              (field) => field.id === "TypeofEntertainmentE"
            );
            if (typeOfEntertainmentField) {
              this.updateFieldVisibility4(typeOfEntertainmentField.value);
            }

            const typeOfRefreshmentField = tab.fields.find(
              (field) => field.id === "TypeofRefreshmentSR"
            );
            if (typeOfRefreshmentField) {
              this.updateFieldVisibility3(typeOfRefreshmentField.value);
            }
          }

          if (tab.title === "Handphone Bill Reimbursement") {
            const limitedAmountField = tab.fields.find(
              (field) => field.id === "LimitedAmountHR"
            );
            const claimsAmountField = tab.fields.find(
              (field) => field.id === "ClaimsAmountHR"
            );

            if (limitedAmountField && claimsAmountField) {
              this.$watch(
                () => limitedAmountField.value,
                (newValue) => {
                  if (
                    parseFloat(claimsAmountField.value) > parseFloat(newValue)
                  ) {
                    claimsAmountField.value = newValue;
                  }
                }
              );

              this.$watch(
                () => claimsAmountField.value,
                (newValue) => {
                  if (
                    parseFloat(newValue) > parseFloat(limitedAmountField.value)
                  ) {
                    claimsAmountField.value = limitedAmountField.value;
                  }
                }
              );
            }
          }
        });
      },
      deep: true,
    },
  },

  mounted() {
    // Populate the year range with the last 20 years
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= currentYear - 20; i--) {
      this.yearRange.push(i);
    }
    this.fetchCompany();
    this.fetchDepartment();
    this.fetchHrData();
    this.fetchCurrencies();
    this.checkstatus();
  },

  methods: {
    isFieldRequired(fieldId) {
      if (fieldId === "UploadMileageRMLT") {
        const mileageField = this.tabs
          .find((tab) => tab.title === "Local Travelling")
          .fields.find((field) => field.id === "MileageRMLT");
        return mileageField && mileageField.value !== "";
      }
      if (fieldId === "UploadFareRMLT") {
        const fareField = this.tabs
          .find((tab) => tab.title === "Local Travelling")
          .fields.find((field) => field.id === "FareRMLT");
        return fareField && fareField.value !== "";
      }
      if (fieldId === "UploadTollLT") {
        const tollField = this.tabs
          .find((tab) => tab.title === "Local Travelling")
          .fields.find((field) => field.id === "TollLT");
        return tollField && tollField.value !== "";
      }
      if (fieldId === "UploadParkingLT") {
        const parkingField = this.tabs
          .find((tab) => tab.title === "Local Travelling")
          .fields.find((field) => field.id === "ParkingLT");
        return parkingField && parkingField.value !== "";
      }
      return false;
    },
    async checkstatus() {
      try {
        const username_id = store.getSession().userDetails.userId;
        const response = await fetch(
          `http://172.28.28.116:7239/api/User/GetEmployeeById/${username_id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        this.profilestatus = data.result[0];
        console.log("Profile Status:", this.profilestatus);
      } catch (error) {
        console.error(`Error fetching checkstatus: ${error}`);
      }
    },
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

    async fetchDepartment() {
      try {
        const response = await fetch(
          "http://172.28.28.116:7239/api/User/GetDepartment"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        this.pktDepartments = data.result.map(
          (department) => department.department
        );
      } catch (error) {
        console.error(`Error fetching department: ${error}`);
      }
    },

    async fetchCompany() {
      try {
        const response = await fetch(
          "http://172.28.28.116:7239/api/User/GetCompany"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        this.pktCompanies = data.result.map((company) => company.company_name);
      } catch (error) {
        console.error(`Error fetching company names: ${error}`);
      }
    },

    async fetchHrData() {
      try {
        const username_id = store.getSession().userDetails.userId;
        const response = await axios.get(
          `http://172.28.28.116:7239/api/User/GetEmployeeById/${username_id}`
        );
        const data = response.data.result[0];
        if (data) {
          this.updateFields(data);
        }
        if (data && data.length > 0) {
          this.limit_medicaldental = data[0].limit_medicaldental || 0;
          this.limit_outpatient = data[0].limit_outpatient || 0;
        }
        console.log("Bank Data:", data);
      } catch (error) {
        console.error("Error fetching Bank Data:", error);
      }
    },

    updateFields(data) {
      this.limit_medicaldental = data.limit_medicaldental;
      this.limit_outpatient = data.limit_outpatient;

      const fieldMap = {
        BankNameHR: data.bank_name,
        AccBankNumberHR: data.bank_number,
        AccHolderNameHR: data.name,
        LimitedAmountHR: data.limit_amount,
        BankNameML: data.bank_name,
        AccBankNumberML: data.bank_number,
        AccHolderNameML: data.name,
        icNumber: data.ic_number,
        limit_medic_dental: data.limit_medicaldental,
        limit_outpatient: data.limit_outpatient,
      };

      this.tabs.forEach((tab) => {
        tab.fields.forEach((field) => {
          if (fieldMap[field.id] !== undefined) {
            field.value = fieldMap[field.id];
          }
        });
      });
    },

    onMedicalCategoryChange(event) {
      const selectedCategory = event.target.value;
      const limitedAmountField = this.tabs
        .find((tab) => tab.title === "Medical Bill Reimbursement")
        .fields.find((field) => field.id === "LimitedAmountML");

      if (
        selectedCategory === "Dental" ||
        selectedCategory === "Medical Check-Up"
      ) {
        limitedAmountField.value = this.limit_medicaldental;
      } else if (selectedCategory === "Outpatient") {
        limitedAmountField.value = this.limit_outpatient;
      } else {
        limitedAmountField.value = "";
      }
    },

    formatDate(dateString) {
      const date = new Date(dateString);
      return `${date.getDate()} ${date.toLocaleString("default", {
        month: "long",
      })} ${date.getFullYear()}`;
    },

    toggleUploadField(field) {
      switch (field) {
        case "MileageRMLT":
          this.showMileageUpload = !this.showMileageUpload;
          break;
        case "FareRMLT":
          this.showFareUpload = !this.showFareUpload;
          break;
        case "TollLT":
          this.showTollUpload = !this.showTollUpload;
          break;
        case "ParkingLT":
          this.showParkingUpload = !this.showParkingUpload;
          break;
      }
    },

    generateNewFileName(originalName, fieldId) {
      let prefix = "";
      switch (fieldId) {
        case "UploadMileageRMLT":
          prefix = "MILEAGE_";
          break;
        case "UploadFareRMLT":
          prefix = "FARE_";
          break;
        case "UploadTollLT":
          prefix = "TOLL_";
          break;
        case "UploadParkingLT":
          prefix = "PARKING_";
          break;
        default:
          prefix = "SUPPORTING_DOC_";
      }
      return `${prefix}${originalName}`;
    },

    handleAddFile(error, file, field) {
      if (error) {
        console.error("Error adding file:", error.message);
        return;
      }

      if (!Array.isArray(field.value)) {
        console.error(
          "field.value is not an array. Initializing as an empty array."
        );
        field.value = [];
      }

      const newFileName = this.generateNewFileName(file.file.name, field.id);
      const renamedFile = new File([file.file], newFileName, {
        type: file.file.type,
        lastModified: file.file.lastModified,
      });

      // Check if file is already in the list
      if (
        !field.value.some(
          (f) =>
            f.name === renamedFile.name &&
            f.lastModified === renamedFile.lastModified
        )
      ) {
        // Use a new array instance to trigger Vue's reactivity
        field.value = [...field.value, renamedFile];
      }

      console.log("File added:", renamedFile);
      console.log("Updated files:", field.value);
    },

    handleRemoveFile(error, file, field) {
      if (error) {
        console.error(
          "An error occurred while removing the file:",
          error.message
        );
        return;
      }

      if (!Array.isArray(field.value)) {
        console.error(
          "field.value is not an array. Cannot proceed with removal."
        );
        return;
      }

      const fileObject = file.file;
      console.log("Removing file:", fileObject);

      // Generate the expected file name with prefix
      const expectedFileName = this.generateNewFileName(
        fileObject.name,
        field.id
      );

      // Create a new array excluding the file to be removed
      const newFileList = field.value.filter(
        (f) =>
          !(
            f.name === expectedFileName &&
            f.lastModified === fileObject.lastModified
          )
      );

      // Use a new array instance to trigger Vue's reactivity
      if (newFileList.length !== field.value.length) {
        field.value = [...newFileList];
      }

      console.log("Files after removal:", field.value);
    },

    handleAddFileOT(error, file, filesArray) {
      if (error) {
        console.error("Error adding file:", error.message);
        return;
      }

      // Generate new filename based on the expense name and original filename
      const expenseName = this.newExpense.name || "UNKNOWN";
      const newFileName = `${expenseName}_${file.file.name}`;
      const renamedFile = new File([file.file], newFileName, {
        type: file.file.type,
        lastModified: file.file.lastModified, // Optional: retain lastModified if needed
      });

      // Add renamed file to the files array
      filesArray = [...filesArray, renamedFile]; // Create a new array instance to ensure reactivity

      console.log("File added:", renamedFile);
      console.log("Updated files:", filesArray);
    },

    handleRemoveFileOT(error, file, filesArray) {
      if (error) {
        console.error(
          "An error occurred while removing the file:",
          error.message
        );
        return;
      }

      const fileObject = file.file;
      // Find the index of the file to be removed
      const index = filesArray.findIndex(
        (f) =>
          f.name === fileObject.name &&
          f.lastModified === fileObject.lastModified
      );

      if (index !== -1) {
        // Remove the file by creating a new array excluding the file to be removed
        filesArray = filesArray.filter((_, i) => i !== index);

        console.log("File removed:", fileObject.name, fileObject);
        console.log("Updated files:", filesArray);
      } else {
        console.warn("File to remove not found:", fileObject.name);
      }
    },

    updateFieldVisibility(transportValue) {
      const localTravellingTab = this.tabs.find(
        (tab) => tab.title === "Local Travelling"
      );
      if (!localTravellingTab) return;
      const mileageKMLTField = localTravellingTab.fields.find(
        (field) => field.id === "MileageKMLT"
      );
      const mileageRMLTField = localTravellingTab.fields.find(
        (field) => field.id === "MileageRMLT"
      );
      const uploadmileageRMLTField = localTravellingTab.fields.find(
        (field) => field.id === "UploadMileageRMLT"
      );
      const TransportSpecField = localTravellingTab.fields.find(
        (field) => field.id === "TransportSpec"
      );
      const PublicTransportSpecField = localTravellingTab.fields.find(
        (field) => field.id === "PublicTransportSpec"
      );
      if (
        !mileageKMLTField ||
        !mileageRMLTField ||
        !uploadmileageRMLTField ||
        !TransportSpecField ||
        !PublicTransportSpecField
      )
        return;

      if (transportValue === "Company Transport") {
        mileageKMLTField.hidden = true;
        mileageRMLTField.hidden = true;
        uploadmileageRMLTField.hidden = true;
        TransportSpecField.hidden = true;
        PublicTransportSpecField.hidden = true;
      } else {
        mileageKMLTField.hidden = false;
        mileageRMLTField.hidden = false;
        uploadmileageRMLTField.hidden = false;
        TransportSpecField.hidden = false;
        PublicTransportSpecField.hidden = false;
      }
    },

    updateFieldVisibility10(param) {
      console.log("test console log : " + param);
      const localTravellingTab = this.tabs.find(
        (tab) => tab.title === "Local Travelling"
      );
      if (!localTravellingTab) return;

      const ReturndateLTField = localTravellingTab.fields.find(
        (field) => field.id === "ReturndateLT"
      );
      const PublicTransportSpec = localTravellingTab.fields.find(
        (field) => field.id === "PublicTransportSpec"
      );
      const FareRMLT = localTravellingTab.fields.find(
        (field) => field.id === "FareRMLT"
      );
      const TransportSpec = localTravellingTab.fields.find(
        (field) => field.id === "TransportSpec"
      );
      const MileageRMLT = localTravellingTab.fields.find(
        (field) => field.id === "MileageRMLT"
      );
      const MileageKMLT = localTravellingTab.fields.find(
        (field) => field.id === "MileageKMLT"
      );
      const ParkingLT = localTravellingTab.fields.find(
        (field) => field.id === "ParkingLT"
      );
      const TollLT = localTravellingTab.fields.find(
        (field) => field.id === "TollLT"
      );
      if (!ReturndateLTField || !ReturndateLTField) return;

      if (param === "Round Trip") {
        ReturndateLTField.value = ""; // Reset value
      } else if (param === "Personal Transport") {
        PublicTransportSpec.value = ""; // Reset value
        FareRMLT.value = ""; // Reset value

        // Reset value
      } else if (param === "Company Transport") {
        PublicTransportSpec.value = ""; // Reset value
        FareRMLT.value = ""; // Reset value
        TransportSpec.value = ""; // Reset value
        MileageRMLT.value = ""; // Reset value
        MileageKMLT.value = "";

        // Reset value
      } else {
        TransportSpec.value = ""; // Reset value
        MileageRMLT.value = ""; // Reset value
        MileageKMLT.value = "";
        ParkingLT.value = "";
        TollLT.value = "";
      }
    },

    updateFieldVisibility2(Clinicfield) {
      const medicalBillReimbursementTab = this.tabs.find(
        (tab) => tab.title === "Medical Bill Reimbursement"
      );
      if (!medicalBillReimbursementTab) return;
      const OtherClinicSpecMLField = medicalBillReimbursementTab.fields.find(
        (field) => field.id === "OtherClinicSpecML"
      );
      const OtherClinicReasonMLField = medicalBillReimbursementTab.fields.find(
        (field) => field.id === "OtherClinicReasonML"
      );
      if (!OtherClinicSpecMLField || !OtherClinicReasonMLField) return;

      if (Clinicfield === "Mediviron Clinic - Panel") {
        OtherClinicSpecMLField.hidden = true;
        OtherClinicReasonMLField.hidden = true;
        console.log("test clinic hidden value: " + Clinicfield);
        OtherClinicSpecMLField.value = ""; // Reset value
        OtherClinicReasonMLField.value = "";
      } else {
        console.log("test clinic hidden value: " + Clinicfield);
        OtherClinicSpecMLField.hidden = false;
        OtherClinicReasonMLField.hidden = false;
        // Reset value
      }
    },

    updateFieldVisibility3(staffRefreshmentValue) {
      const staffRefreshmentTab = this.staffRefreshmentTabs.find(
        (tab) => tab.title === "Details"
      );
      if (!staffRefreshmentTab) return;
      const otherTypeField2 = staffRefreshmentTab.fields.find(
        (field) => field.id === "OtherTypeofStaffRefreshmentSR"
      );
      if (!otherTypeField2) return;

      otherTypeField2.hidden = staffRefreshmentValue !== "OTHERS";
    },

    updateFieldVisibility4(entertainmentValue) {
      const entertainmentTab = this.entertainmentTabs.find(
        (tab) => tab.title === "Details"
      );
      if (!entertainmentTab) return;
      const otherTypeField2 = entertainmentTab.fields.find(
        (field) => field.id === "OtherTypeofEntertainmentE"
      );
      if (!otherTypeField2) return;

      otherTypeField2.hidden = entertainmentValue !== "OTHERS";
    },

    updateFieldVisibility5(publicTransportValue) {
      const localTravellingTab = this.tabs.find(
        (tab) => tab.title === "Local Travelling"
      );
      if (!localTravellingTab) return;
      const mileageKMLTField = localTravellingTab.fields.find(
        (field) => field.id === "MileageKMLT"
      );
      const mileageRMLTField = localTravellingTab.fields.find(
        (field) => field.id === "MileageRMLT"
      );

      const uploadmileageRMLTField = localTravellingTab.fields.find(
        (field) => field.id === "UploadMileageRMLT"
      );
      const TransportSpecField = localTravellingTab.fields.find(
        (field) => field.id === "TransportSpec"
      );
      const TollLTField = localTravellingTab.fields.find(
        (field) => field.id === "TollLT"
      );
      const uploadTollLTField = localTravellingTab.fields.find(
        (field) => field.id === "UploadTollLT"
      );
      if (
        !mileageKMLTField ||
        !mileageRMLTField ||
        !uploadmileageRMLTField ||
        !TransportSpecField ||
        !TollLTField ||
        !uploadTollLTField
      )
        return;

      if (publicTransportValue === "Public Transport") {
        mileageKMLTField.hidden = true;
        mileageRMLTField.hidden = true;
        uploadmileageRMLTField.hidden = true;
        TransportSpecField.hidden = true;
        TollLTField.hidden = true;
        uploadTollLTField.hidden = true;
      } else {
        mileageKMLTField.hidden = false;
        mileageRMLTField.hidden = false;
        uploadmileageRMLTField.hidden = false;
        TransportSpecField.hidden = false;
        TollLTField.hidden = false;
        uploadTollLTField.hidden = false;
      }
    },

    updateFieldVisibility6(personalTransportValue) {
      const localTravellingTab = this.tabs.find(
        (tab) => tab.title === "Local Travelling"
      );
      if (!localTravellingTab) return;
      const publicTransportField = localTravellingTab.fields.find(
        (field) => field.id === "PublicTransportSpec"
      );
      const fareRMLTField = localTravellingTab.fields.find(
        (field) => field.id === "FareRMLT"
      );
      const uploadfareRMLTField = localTravellingTab.fields.find(
        (field) => field.id === "UploadFareRMLT"
      );
      if (!publicTransportField || !fareRMLTField || !uploadfareRMLTField)
        return;

      if (personalTransportValue === "Personal Transport") {
        publicTransportField.hidden = true;
        fareRMLTField.hidden = true;
        uploadfareRMLTField.hidden = true;
      } else {
        publicTransportField.hidden = false;
        fareRMLTField.hidden = false;
        uploadfareRMLTField.hidden = false;
      }
    },

    updateFieldVisibility7(tripValue) {
      const localTravellingTab = this.tabs.find(
        (tab) => tab.title === "Local Travelling"
      );
      if (!localTravellingTab) return;
      const ReturndateLTField = localTravellingTab.fields.find(
        (field) => field.id === "ReturndateLT"
      );
      const AccommodationLTField = localTravellingTab.fields.find(
        (field) => field.id === "AccommodationLT"
      );
      const MealAllowanceLTField = localTravellingTab.fields.find(
        (field) => field.id === "MealAllowanceLT"
      );
      if (!ReturndateLTField || !AccommodationLTField || !MealAllowanceLTField)
        return;

      if (tripValue === "One Way") {
        ReturndateLTField.hidden = true;
        AccommodationLTField.hidden = true;
        MealAllowanceLTField.hidden = true;
      } else {
        ReturndateLTField.hidden = false;
        AccommodationLTField.hidden = false;
        MealAllowanceLTField.hidden = false;
      }
    },

    updateFieldVisibility8(medCategoryValue) {
      const medicalBillReimbursementTab = this.tabs.find(
        (tab) => tab.title === "Medical Bill Reimbursement"
      );
      if (!medicalBillReimbursementTab) return;
      const ReasonMLField = medicalBillReimbursementTab.fields.find(
        (field) => field.id === "ReasonML"
      );
      const ClinicSelectionMLField = medicalBillReimbursementTab.fields.find(
        (field) => field.id === "ClinicSelectionML"
      );
      const OtherClinicReasonMLField = medicalBillReimbursementTab.fields.find(
        (field) => field.id === "OtherClinicReasonML"
      );
      const OtherClinicSpecMLField = medicalBillReimbursementTab.fields.find(
        (field) => field.id === "OtherClinicSpecML"
      );
      if (
        !ReasonMLField ||
        !ClinicSelectionMLField ||
        !OtherClinicReasonMLField ||
        !OtherClinicSpecMLField
      )
        return;

      if (medCategoryValue === "Outpatient") {
        ReasonMLField.hidden = false;
        ClinicSelectionMLField.hidden = false;
        OtherClinicReasonMLField.hidden = false;
        OtherClinicSpecMLField.hidden = false;
      } else {
        ReasonMLField.hidden = true;
        ClinicSelectionMLField.hidden = true;
        OtherClinicReasonMLField.hidden = true;
        OtherClinicSpecMLField.hidden = true;
        console.log("test hidden value: " + OtherClinicSpecMLField.value);
        OtherClinicSpecMLField.value = "";
        OtherClinicReasonMLField.value = "";
        ReasonMLField.value = "";
        ClinicSelectionMLField.value = "";
      }
    },

    handleTransportChange(value) {
      this.showTransportSpec = value === "Personal Transport";
    },

    handleTransportChange2(value) {
      this.showPublicTransportSpec = value === "Public Transport";
    },

    addOtherExpense() {
      if (this.currencyType === "foreign") {
        this.newExpense.amount = this.newExpense.totalAccommodation;
      } else {
        this.newExpense.amount;
      }
      this.otherExpenses.push({ ...this.newExpense });

      this.newExpense = {
        name: "",
        description: "",
        ForeignCurrencyAccommodationOT: "",
        ExchangeRateAccommodationOT: "",
        AmountforAccommodationOT: 0,
        amount: 0,
        files: [],
      };
      this.showOtherExpensesModal = false;
    },

    removeExpense(index) {
      this.otherExpenses.splice(index, 1);
    },

    calculateTotalAccommodation() {
      if (
        this.currencyType === "foreign" &&
        this.newExpense.ExchangeRateAccommodationOT &&
        this.newExpense.AmountforAccommodationOT
      ) {
        // Calculate totalAccommodation in RM
        this.newExpense.totalAccommodation =
          this.newExpense.AmountforAccommodationOT *
          this.newExpense.ExchangeRateAccommodationOT;
      }

      const amount = parseFloat(this.newExpense.AmountforAccommodationOT) || 0;
      const exchangeRate =
        parseFloat(this.newExpense.ExchangeRateAccommodationOT) || 1;
      this.totalAccommodation = (amount * exchangeRate).toFixed(2);
    },

    calculateOverseasTotal() {
      let total = 0;
      for (const expense of this.otherExpenses) {
        total += parseFloat(expense.amount) || 0;
      }
      return total;
    },

    addAttendee() {
      const { name, company_Name } = this.modalForm;
      if (name && company_Name) {
        this.attendees.push({
          name,
          company_Name,
        });
        this.showModal = false;
        this.modalForm.name = "";
        this.modalForm.company_Name = "";
      }
    },

    removeAttendee(index) {
      this.attendees.splice(index, 1);
    },

    addStaff() {
      const { name } = this.modalForm;
      if (this.modalForm.name && this.selecteddepartment) {
        this.staffInvolved.push({
          name,
          department: this.selecteddepartment,
          companyName: this.selectedCompanyName,
        });
      }
      this.showModal = false;
      this.modalForm.name = "";
      this.modalForm.department = "";
    },

    removeStaff(index) {
      this.staffInvolved.splice(index, 1);
    },

    calculateTotal(tab) {
      let total = 0;

      // Check if the transport mode is Company Transport
      const isCompanyTransport = tab.fields.some(
        (field) =>
          field.id === "TransportLT" &&
          field.value?.includes("Company Transport")
      );

      // Check if the transport mode is Public Transport
      const isPublicTransport = tab.fields.some(
        (field) =>
          field.id === "TransportLT" &&
          field.value?.includes("Public Transport")
      );

      // Check if the transport mode is Personal Transport
      const isPersonalTransport = tab.fields.some(
        (field) =>
          field.id === "TransportLT" &&
          field.value?.includes("Personal Transport")
      );

      tab.fields.forEach((field) => {
        // Calculate the total based on the field value
        if (
          field.type === "number" &&
          !isNaN(parseFloat(field.value)) &&
          field.id !== "MileageKMLT" &&
          field.id !== "limit_outpatient" &&
          field.id !== "limit_medic_dental" &&
          field.id !== "LimitedAmountHR" &&
          field.id !== "LimitedAmountML" &&
          field.id !== "AccBankNumberHR" &&
          field.id !== "AccBankNumberML" &&
          field.id !== "ExchangeRateAccommodationOT" &&
          field.id !== "AmountforAccommodationOT" &&
          (!isCompanyTransport ||
            (field.id !== "MileageRMLT" && field.id !== "FareRMLT")) &&
          (!isPublicTransport ||
            (field.id !== "MileageRMLT" && field.id !== "TollLT")) &&
          (!isPersonalTransport ||
            (field.id !== "FareRMLT" && field.id !== "ParkingLT"))
        ) {
          total += parseFloat(field.value);
        }
      });

      total += this.calculateOverseasTotal();

      // Return the total
      return total.toFixed(2);
    },

    nextTab() {
      // Switch to the next tab only if current tab's validation passes
      this.activeSubTab += 1;
    },
    // validateCurrentTab() {
    //   // Example validation logic for the current tab
    //   // This needs to be customized based on your actual form structure and requirements
    //   const currentTabFields = this.formFields[this.activeSubTab];
    //   for (const key in currentTabFields) {
    //     if (currentTabFields[key] === '') {
    //       // Found an unfilled field, validation fails
    //       return false;
    //     }
    //   }
    //   // All fields in the current tab are filled, validation passes
    //   return true;
    // },

    submitForm(tab) {
      const formattedData = {};
      tab.fields.forEach((field) => {
        if (field.type === "date" && field.value) {
          formattedData[field.id] = this.formatDate(field.value);
        } else {
          formattedData[field.id] = field.value;
        }
      });
      formattedData["tabTitle"] = tab.title;
      formattedData["totalRM"] = this.calculateTotal(tab);

      if (
        tab.title === "Overseas Travelling" &&
        this.otherExpenses.length > 0
      ) {
        // Add otherExpenses to formattedData
        formattedData["otherExpenses"] = [...this.otherExpenses];
      }

      this.$emit("formSubmitted", formattedData);
      console.log("Formatted Form Data:", formattedData);

      tab.fields.forEach((field) => {
        if (
          field.id !== "LimitedAmountHR" &&
          field.id !== "LimitedAmountML" &&
          field.id !== "BankNameHR" &&
          field.id !== "BankNameML" &&
          field.id !== "AccBankNumberHR" &&
          field.id !== "AccBankNumberML" &&
          field.id !== "AccHolderNameHR" &&
          field.id !== "AccHolderNameML" &&
          field.id !== "icNumber"
        ) {
          field.value = null;
        }

        if (field.type === "file" && this.$refs.pond) {
          this.$refs.pond.forEach((pond) => {
            if (pond && typeof pond.removeFiles === "function") {
              pond.removeFiles();
            }
          });
        }
      });
    },

    submitForm2(tabTitle) {
      if (this.validateCurrentTab(tabTitle)) {
      
      const formattedData = {};
      this.entertainmentTabs.forEach((tab) => {
        tab.fields.forEach((field) => {
          if (field.id === "dateE") {
            formattedData[field.id] = this.formatDate(field.value);
          } else {
            formattedData[field.id] = field.value;
          }
        });

        tab.attendees = [...this.attendees];
        formattedData["attendees"] = [...tab.attendees];
      });
      formattedData["tabTitle"] = "Entertainment";
      this.$emit("formSubmitted", formattedData);
      console.log("Formatted Form Data:", formattedData);

      this.entertainmentTabs.forEach((tab) => {
        tab.fields.forEach((field) => {
          field.value = null;
          if (field.type === "file") {
            const pond = this.$refs[field.id];
            if (pond) {
              pond.removeFiles();
            }
          }
        });
      });
      this.attendees = [];
        // Your logic to handle form submission
        console.log('Form submitted successfully');
      } else {
        alert('Please fill all required fields before submitting.');
      }
    },

    submitForm3(tabTitle) {
      if (this.validateCurrentTab(tabTitle)) {
        // Your logic to handle form submission
      
      const formattedData = {};
      this.staffRefreshmentTabs.forEach((tab) => {
        tab.fields.forEach((field) => {
          if (field.id === "dateSR") {
            formattedData[field.id] = this.formatDate(field.value);
          } else {
            formattedData[field.id] = field.value;
          }
        });

        tab.staffInvolved = [...this.staffInvolved];
        formattedData["staffInvolved"] = [...tab.staffInvolved];
      });
      formattedData["tabTitle"] = "Staff Refreshment";
      this.$emit("formSubmitted", formattedData);
      console.log("Formatted Form Data:", formattedData);

      this.staffRefreshmentTabs.forEach((tab) => {
        tab.fields.forEach((field) => {
          field.value = null;
          if (field.type === "file") {
            const pond = this.$refs[field.id];
            if (pond) {
              pond.removeFiles();
            }
          }
        });
      });
      this.staffInvolved = [];
      console.log('Form submitted successfully');
      } else {
        alert('Please fill all required fields before submitting.');
      }
    },
    validateCurrentTab(tabTitle) {
      if(tabTitle ==='overseas'){
      const currentTab = this.overseasTabs.find(tab => tab.title === 'Details');
      return currentTab.fields.every(field => {
        if (field.required) {
          return field.value !== '';
        }
        return true;
      });}
      else if (tabTitle ==='staffrefreshment'){
        const currentTab = this.staffRefreshmentTabs.find(tab => tab.title === 'Details');
      return currentTab.fields.every(field => {
        if (field.required) {
          return field.value !== '';
        }
        return true;
      });}
      else if (tabTitle ==='entertainment'){
        const currentTab = this.entertainmentTabs.find(tab => tab.title === 'Details');
      return currentTab.fields.every(field => {
        if (field.required) {
          return field.value !== '';
        }
        return true;
      });}
      
       
    },
    submitForm4(tabTitle) {
      if (this.validateCurrentTab(tabTitle)) {
        // Your logic to handle form submission

        const formattedData = {};
        this.overseasTabs.forEach((tab) => {
          tab.fields.forEach((field) => {
            if (field.id === "dateOT") {
              formattedData[field.id] = this.formatDate(field.value);
            } else {
              formattedData[field.id] = field.value;
            }
          });
        });
        formattedData["otherExpenses"] = [...this.otherExpenses];
        formattedData["combinetotal"] =
          this.totalMealAllowanceOTplusotherExpenses;
        formattedData["tabTitle"] = "Overseas Travelling";
        this.$emit("formSubmitted", formattedData);
        console.log("Formatted Form Data:", formattedData);

        this.overseasTabs.forEach((tab) => {
          tab.fields.forEach((field) => {
            field.value = null;
            if (field.type === "file") {
              const pond = this.$refs[field.id];
              if (pond) {
                pond.removeFiles();
              }
            }
          });
        });
        this.otherExpenses = [];
        this.newExpense = {
          name: "",
          amount: "",
          description: "",
          ForeignCurrencyAccommodationOT: "",
          ExchangeRateAccommodationOT: "",
          AmountforAccommodationOT: "",
          files: [],
        };
        console.log("Form submitted successfully");
      } else {
        alert("Please fill all required fields before submitting.");
      }
    },
  },
};
</script>

<style scoped>
/* Tooltip styling */
.group-hover\\:block {
  display: block;
}
</style>
