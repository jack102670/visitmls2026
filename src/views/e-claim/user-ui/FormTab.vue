<template>
  <div
    class="relative overflow-hidden bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
  >
    <div class="sm:flex justify-start flex-wrap">
      <button
        v-for="(tab, index) in tabs"
        v-show="tab.tabType == type"
        :key="index"
        @click="activeTab = index"
        :class="{
          'bg-gray-300': activeTab === index,
          'hover:bg-gray-200': activeTab !== index,
        }"
        class="flex-1 px-4 py-4 text-lg mr-2 rounded-sm focus:outline-none border border-gray-300"
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

        <div v-if="tab.title !== 'Entertainment'">
          <form @submit.prevent="submitForm(tab)">
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
                  <label
                    :for="field.id"
                    class="block text-gray-700 text-sm font-bold mb-2"
                  >
                    {{ field.label }}
                    <span v-if="field.required" style="color: red">*</span>
                  </label>

                  <template v-if="field.type === 'select'">
                    <select
                      v-model="field.value"
                      :id="field.id"
                      class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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

                  <template v-else-if="field.type === 'year'">
                    <select
                      v-model="field.value"
                      :id="field.id"
                      class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                    v-else-if="field.type === 'text' && field.isOtherOption"
                  >
                    <input
                      v-model="field.value"
                      :id="field.id"
                      :type="field.type"
                      :placeholder="field.placeholder"
                      class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </template>

                  <template v-else-if="field.type === 'file'">
                    <div class="pt-3">
                      <file-pond
                        :name="field.id"
                        ref="pond"
                        label-idle="Drop files here..."
                      
                        @init="handleFilePondInit"
                        @addfile="
                          (error, file) => handleAddFile(error, file, field)
                        "
                        @removefile="
                          (error, file) => handleRemoveFile(error, file, field)
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
                      class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </template>
                </div>

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
                      type="submit"
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <!-- Entertainment tab -->
        <div v-else>
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
                <form @submit.prevent="submitForm2(subTab)">
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
                      class="block text-gray-700 text-sm font-bold mb-2"
                    >
                      {{ field.label }}
                      <span v-if="field.required" style="color: red">*</span>
                    </label>

                    <template v-if="field.type === 'select'">
                      <select
                        v-model="field.value"
                        :id="field.id"
                        class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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

                    <template
                      v-else-if="field.type === 'text' && field.isOtherOption"
                    >
                      <input
                        v-model="field.value"
                        :id="field.id"
                        :type="field.type"
                        :placeholder="field.placeholder"
                        class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </template>

                    <template v-else-if="field.type === 'file'">
                      <div class="pt-3">
                        <FilePond
                          ref="pond"
                          name="file"
                          :allow-multiple="field.allowMultiple"
                          :accepted-file-types="field.acceptedFileTypes"
                          :max-file-size="field.maxFileSize"
                          @addfile="handleAddFile(field)"
                          @removefile="handleRemoveFile(field)"
                        />
                      </div>
                    </template>
                    <template v-else>
                      <input
                        v-model="field.value"
                        :id="field.id"
                        :type="field.type"
                        :placeholder="field.placeholder"
                        class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
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
                    <div class="mb-4">
                      <label class="inline-flex items-center mr-4">
                        <input
                          type="radio"
                          value="pkt"
                          v-model="selectedAttendeeType"
                          class="form-radio"
                        />
                        <span
                          class="ml-2 block text-sm font-medium text-gray-700"
                          >PKT Staff</span
                        >
                      </label>
                      <label class="inline-flex items-center">
                        <input
                          type="radio"
                          value="notStaff"
                          v-model="selectedAttendeeType"
                          class="form-radio"
                        />
                        <span
                          class="ml-2 block text-sm font-medium text-gray-700"
                          >Not a Staff</span
                        >
                      </label>
                    </div>

                    <div v-if="selectedAttendeeType === 'pkt'" class="mb-4">
                      <label
                        for="companyName"
                        class="block text-sm font-medium text-gray-700"
                        >Company’s Name</label
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
                        <div v-if="selectedAttendeeType === 'pkt'" class="mb-4">
                          <label
                            for="staffId"
                            class="block text-sm font-medium text-gray-700"
                            >Staff ID</label
                          >
                          <input
                            type="text"
                            v-model="modalForm.staffId"
                            required
                            class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                          />
                        </div>
                        <div
                          v-if="selectedAttendeeType === 'notStaff'"
                          class="mb-4"
                        >
                          <label
                            for="companyName"
                            class="block text-sm font-medium text-gray-700"
                            >Company’s Name</label
                          >
                          <input
                            type="text"
                            v-model="modalForm.companyName"
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
                              {{ attendee.staffId || "-" }}
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
        <!-- End of Entertainment tab-->
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
      chooseform: true,

      activeTab: this.type == "Finance" ? 0 : 4,
      activeSubTab: 0,
      date: "",
      yearRange: [],
      uploadedFiles: [],
      showModal: false,
      selectedAttendeeType: "pkt",
      selectedCompanyName: "",
      pktCompanies: ["PKT Branch 1", "PKT Branch 2", "PKT Branch 3"],
      modalForm: {
        name: "",
        staffId: "",
        companyName: "",
      },
      attendees: [],
      tabs: [
        {
          form: "HR",
          title: "Local Travelling",
          tabType: "Finance",

          gridLayout: "grid-cols-3",
          fields: [
            {
              id: "dateLT",
              label: "Date",
              type: "date",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "DestinationPurposeLT",
              label: "Destination / Purpose",
              type: "select",
              value: "",
              required: true,
              options: [
                { label: "LABEL 1", value: "LABEL 1" },
                { label: "LABEL 2", value: "LABEL 2" },
                { label: "LABEL 3", value: "LABEL 3" },
              ],
              gridClass: "sm:col-span-1",
            },
            {
              id: "MileageKMLT",
              label: "Mileage(KM)",
              type: "number",
              value: "",
              gridClass: "sm:col-span-1",
            },
            {
              id: "MileageRMLT",
              label: "Total Mileage(RM)",
              type: "number",
              value: "",
              gridClass: "sm:col-span-1",
            },
            {
              id: "TollLT",
              label: "Toll(RM)",
              type: "number",
              value: "",
              gridClass: "sm:col-span-1",
            },
            {
              id: "ParkingLT",
              label: "Parking(RM)",
              type: "number",
              value: "",
              gridClass: "sm:col-span-1",
            },
            {
              id: "UploadLT",
              label: "Upload File(s). (png, jpeg, pdf or xlsx)",
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
          form: "HR",
          title: "Overseas Travelling with Accommodation",
          tabType: "Finance",

          gridLayout: "grid-cols-3", //
          fields: [
            {
              id: "dateOT",
              label: "Date",
              type: "date",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "DescriptionOT",
              label: "Description",
              type: "text",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "ForeignCurrencyAccommodationOT",
              label: "Foreign Currency",
              type: "text",
              placeholder: "Accommodation",
              value: "",
              gridClass: "sm:col-span-2",
            },
            {
              id: "ExchangeRateAccommodationOT",
              label: "Exchange Rate",
              type: "text",
              value: "",
              gridClass: "sm:col-span-2",
            },
            {
              id: "RMforAccommodationOT",
              label: "RM",
              type: "number",
              value: "",
              gridClass: "sm:col-span-2",
            },
            {
              id: "ForeignCurrencyOthersOT",
              label: "Foreign Currency",
              type: "text",
              placeholder: "Others",
              value: "",
              gridClass: "sm:col-span-2",
            },
            {
              id: "ExchangeRateOthersOT",
              label: "Exchange Rate",
              type: "text",
              value: "",
              gridClass: "sm:col-span-2",
            },
            {
              id: "RMforOthersOT",
              label: "RM",
              type: "number",
              value: "",
              gridClass: "sm:col-span-2",
            },
            {
              id: "MealAllowanceOT",
              label: "Meal Allowance(RM)",
              type: "text",
              value: "",
              gridClass: "sm:col-span-2",
            },
            {
              id: "AirportLimoTeksiOT",
              label: "Airport Limo / Teksi(RM)",
              type: "number",
              value: "",
              gridClass: "sm:col-span-2",
            },
            {
              id: "UploadOT",
              label: "Upload File(s). (png, jpeg, pdf or xlsx)",
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
          title: "Entertainment",
          tabType: "Finance",

          gridLayout: "grid-cols-3",
          fields: [],
        },
        {
          title: "Staff Refreshment",
          tabType: "Finance",

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
              id: "NameofStaffSR",
              label: "Name of Staff",
              type: "text",
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
              options: [
                { label: "BREAKFAST", value: "BREAKFAST" },
                { label: "LUNCH", value: "LUNCH" },
                { label: "DINNER", value: "DINNER" },
                { label: "TEA BREAK", value: "TEA BREAK" },
                { label: "OTHERS", value: "OTHERS" },
              ],
              gridClass: "sm:col-span-2",
            },
            {
              id: "OtherTypeofStaffRefreshmentSR",
              label: "Other Type of Staff Refreshment",
              type: "text",
              value: "",
              placeholder: "Specify other type",
              isOtherOption: true,
              gridClass: "sm:col-span-2",
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
              options: [
                { label: "GIFT TO CLIENT", value: "GIFT TO CLIENT" },
                { label: "GIFT TO OTHERS", value: "GIFT TO OTHERS" },
                { label: "MEAL FOR STAFF", value: "MEAL FOR STAFF" },
              ],
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
              label: "Upload File(s). (png, jpeg, pdf or xlsx)",
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
          title: "Handphone Reimbursement",
          tabType: "HR",

          gridLayout: "grid-cols-3",
          fields: [
            {
              id: "MonthHR",
              label: "Month",
              type: "select",
              value: "",
              required: true,
              options: [
                { label: "JANUARY", value: "JANUARY" },
                { label: "FEBRUARY", value: "FEBRUARY" },
                { label: "MARCH", value: "MARCH" },
                { label: "APRIL", value: "APRIL" },
                { label: "MAY", value: "MAY" },
                { label: "JUNE", value: "JUNE" },
                { label: "JULY", value: "JULY" },
                { label: "AUGUST", value: "AUGUST" },
                { label: "SEPTEMBER", value: "SEPTEMBER" },
                { label: "OCTOBER", value: "OCTOBER" },
                { label: "NOVEMBER", value: "NOVEMBER" },
                { label: "DECEMBER", value: "DECEMBER" },
              ],
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
              type: "select",
              value: "",
              required: true,
              options: [
                { label: "HONG LEONG BANK", value: "HONG LEONG BANK" },
                { label: "AGROBANK", value: "AGROBANK" },
                { label: "AFFIN BANK BERHAD", value: "AFFIN BANK BERHAD" },
                {
                  label: "ALLIANCE BANK MALAYSIA BERHAD",
                  value: "ALLIANCE BANK MALAYSIA BERHAD",
                },
                { label: "AMBANK BERHAD", value: "AMBANK BERHAD" },
                { label: "BANK ISLAM MALAYSIA", value: "BANK ISLAM MALAYSIA" },
                {
                  label: "BANK KERJASAMA RAKYAT MALAYSIA BERHAD",
                  value: "BANK KERJASAMA RAKYAT MALAYSIA BERHAD",
                },
                { label: "BANK MUAMALAT", value: "BANK MUAMALAT" },
                {
                  label: "BANK SIMPANAN NASIONAL BERHAD",
                  value: "BANK SIMPANAN NASIONAL BERHAD",
                },
                { label: "CIMB BANK BERHAD", value: "CIMB BANK BERHAD" },
                { label: "CITIBANK BERHAD", value: "CITIBANK BERHAD" },
                {
                  label: "HSBC BANK MALAYSIA BERHAD",
                  value: "HSBC BANK MALAYSIA BERHAD",
                },
                { label: "MAYBANK", value: "MAYBANK" },
                { label: "PUBLIC BANK", value: "PUBLIC BANK" },
                { label: "RHB BANK", value: "RHB BANK" },
                {
                  label: "OCBC BANK MALAYSIA BERHAD",
                  value: "OCBC BANK MALAYSIA BERHAD",
                },
              ],
              gridClass: "sm:col-span-2",
            },
            {
              id: "AccBankNumberHR",
              label: "Account Bank No.",
              type: "number",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "AccHolderNameHR",
              label: "Account Holder Name",
              type: "text",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "LimitedAmountHR",
              label: "Limited Amount(RM)",
              type: "number",
              value: "",
              gridClass: "sm:col-span-2",
            },
            {
              id: "ClaimsAmountHR",
              label: "Claims Amount(RM)",
              type: "number",
              value: "",
              gridClass: "sm:col-span-2",
            },
            {
              id: "UploadHR",
              label: "Upload File(s). (png, jpeg, pdf or xlsx)",
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
          title: "Medical Leave Reimbursement",
          tabType: "HR",

          gridLayout: "grid-cols-3",
          fields: [
            {
              id: "dateML",
              label: "Date of Medical Leave",
              type: "date",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "ReasonML",
              label: "Reason for Medical Leave",
              type: "text",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "BankNameML",
              label: "Bank Name",
              type: "select",
              value: "",
              required: true,
              options: [
                { label: "HONG LEONG BANK", value: "HONG LEONG BANK" },
                { label: "AGROBANK", value: "AGROBANK" },
                { label: "AFFIN BANK BERHAD", value: "AFFIN BANK BERHAD" },
                {
                  label: "ALLIANCE BANK MALAYSIA BERHAD",
                  value: "ALLIANCE BANK MALAYSIA BERHAD",
                },
                { label: "AMBANK BERHAD", value: "AMBANK BERHAD" },
                { label: "BANK ISLAM MALAYSIA", value: "BANK ISLAM MALAYSIA" },
                {
                  label: "BANK KERJASAMA RAKYAT MALAYSIA BERHAD",
                  value: "BANK KERJASAMA RAKYAT MALAYSIA BERHAD",
                },
                { label: "BANK MUAMALAT", value: "BANK MUAMALAT" },
                {
                  label: "BANK SIMPANAN NASIONAL BERHAD",
                  value: "BANK SIMPANAN NASIONAL BERHAD",
                },
                { label: "CIMB BANK BERHAD", value: "CIMB BANK BERHAD" },
                { label: "CITIBANK BERHAD", value: "CITIBANK BERHAD" },
                {
                  label: "HSBC BANK MALAYSIA BERHAD",
                  value: "HSBC BANK MALAYSIA BERHAD",
                },
                { label: "MAYBANK", value: "MAYBANK" },
                { label: "PUBLIC BANK", value: "PUBLIC BANK" },
                { label: "RHB BANK", value: "RHB BANK" },
                {
                  label: "OCBC BANK MALAYSIA BERHAD",
                  value: "OCBC BANK MALAYSIA BERHAD",
                },
              ],
              gridClass: "sm:col-span-2",
            },
            {
              id: "AccBankNumberML",
              label: "Account Bank No.",
              type: "number",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "AccHolderNameML",
              label: "Account Holder Name",
              type: "text",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "ClaimsAmountML",
              label: "Claims Amount(RM)",
              type: "number",
              value: "",
              gridClass: "sm:col-span-2",
            },
            {
              id: "UploadML",
              label: "Upload File(s). (png, jpeg, pdf or xlsx)",
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
              options: [
                { label: "BREAKFAST", value: "BREAKFAST" },
                { label: "LUNCH", value: "LUNCH" },
                { label: "DINNER", value: "DINNER" },
                { label: "TEA BREAK", value: "TEA BREAK" },
                { label: "OTHERS", value: "OTHERS" },
              ],
              gridClass: "sm:col-span-2",
            },
            {
              id: "OtherTypeofEntertainmentE",
              label: "Other Type of Entertainment",
              type: "text",
              value: "",
              placeholder: "Specify other type",
              isOtherOption: true,
              gridClass: "sm:col-span-2",
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
              options: [
                { label: "CLIENT(EXISTING)", value: "CLIENT(EXISTING)" },
                {
                  label: "CLIENT(NEW/POTENTIAL)",
                  value: "CLIENT(NEW/POTENTIAL)",
                },
                { label: "NON TRADE", value: "NON TRADE" },
              ],
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
              label: "Upload File(s). (png, jpeg, pdf or xlsx)",
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
          attendees: [],
          fields: [],
        },
      ],
    };
  },

  mounted() {
    // Populate the year range with the last 20 years
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= currentYear - 20; i--) {
      this.yearRange.push(i);
    }
  },

  methods: {
    handleFilePondInit() {
      console.log("FilePond has initialized");
    },
    handleAddFile(error, file, field) {
      if (error) {
        console.error("Error adding file:", error.message);
        return;
      }
      field.value.push(file.file);
      console.log("File added:", file.file);
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

      const fileObject = file.file;

      // Find and remove the file object from the field's value array
      const index = field.value.findIndex((f) => f.name === fileObject.name);
      if (index !== -1) {
        field.value.splice(index, 1);
        console.log("File removed:", fileObject.name, fileObject);
        console.log("Updated field value:", field.value);
      }
    },

    addAttendee() {
      const { name, staffId, companyName } = this.modalForm;
      if (this.selectedAttendeeType === "pkt" && name && staffId) {
        this.attendees.push({
          name,
          staffId,
          companyName: this.selectedCompanyName,
          status: "PKT Staff",
        });
      } else if (
        this.selectedAttendeeType === "notStaff" &&
        name &&
        companyName
      ) {
        this.attendees.push({
          name,
          staffId: "",
          companyName,
          status: "Not a Staff",
        });
      }
      this.showModal = false;
      this.modalForm.name = "";
      this.modalForm.staffId = "";
      this.modalForm.companyName = "";
    },
    
    removeAttendee(index) {
      this.attendees.splice(index, 1);
    },

    calculateTotal(tab) {
      let total = 0;
      tab.fields.forEach((field) => {
        if (
          field.type === "number" &&
          !isNaN(parseFloat(field.value)) &&
          field.id !== "MileageKMLT" &&
          field.id !== "LimitedAmountHR"
        ) {
          total += parseFloat(field.value);
        }
      });
      return total.toFixed(2);
    },

    nextTab() {
      // Switch to the next tab
      this.activeSubTab += 1;
    },

    submitForm(tab) {
      // Create an empty object to hold the formatted form data
      const formattedData = {};
     

      
      // Iterate through the fields of the current tab
      tab.fields.forEach((field) => {
        // Use the field label as the key and the field value as the value
        formattedData[field.id] = field.value;
      });

      // Add the tab title to the formatted data
      formattedData["tabTitle"] = tab.title;

      // Emit the formatted form data
      this.$emit("formSubmitted", formattedData);

      // Log the formatted form data to the console
      console.log("Formatted Form Data:", formattedData);

      if (tab.title === "Attendees") {
        const newAttendee = {};
        tab.fields.forEach((field) => {
          newAttendee[field.id] = field.value;
          field.value = "";
        });
        tab.attendees.push(newAttendee);
      }
      //  else {
      //   console.log(`Form submitted for tab: ${tab.title}`, tab.fields);
      // }
    },
   submitForm2() {
  // Create an empty object to hold the formatted form data
  const formattedData = {};

  // Iterate over all tabs
  this.entertainmentTabs.forEach((tab) => {
    // Iterate through the fields of the current tab
    tab.fields.forEach((field) => {
      // Use the field label as the key and the field value as the value
      formattedData[field.id] = field.value;
    });

    // If the tab is the "Attendees" tab, add the attendees to the formatted data
    if (tab.title === "Attendees") {
      const newAttendee = {};
      tab.fields.forEach((field) => {
        newAttendee[field.id] = field.value;
        field.value = "";
      });
      tab.attendees.push(newAttendee);
      formattedData["attendees"] = tab.attendees;
    }
  });

  // Add the tab title to the formatted data
  formattedData["tabTitle"] = "Entertainment";

  // Emit the formatted form data
  this.$emit("formSubmitted", formattedData);

  // Log the formatted form data to the console
  console.log("Formatted Form Data:", formattedData);
},
  },
};
</script>

<style scoped></style>
