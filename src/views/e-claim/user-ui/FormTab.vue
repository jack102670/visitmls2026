<template>
  <div
    class="relative overflow-hidden bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
  >
    <div class="sm:flex justify-center flex-col-1">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        :class="{
          'bg-gray-300': activeTab === index,
          'hover:bg-gray-200': activeTab !== index,
        }"
        class="px-4 py-2 mr-2 rounded-sm focus:outline-none border border-gray-300"
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

        <div class="pt-4">
          <hr class="" />

          <div class="m-2">
            <form @submit.prevent="submitForm(tab)">
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
                      @addfile="handleAddFile"
                      @removefile="handleRemoveFile"
                    />
                  </div>
                  <ul>
                    <li v-for="file in field.value" :key="file.name">
                      {{ file.name }}
                    </li>
                  </ul>
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
                    <label class="block text-gray-700 text-xl font-bold mb-2">
                      Total  :
                    </label>
                    <div class="block text-gray-700 text-xl font-bold mb-2">
                     RM {{ calculateTotal(tab) }}
                    </div>
                  </div>
                </div>
              </div> <div class="mt-4 mr-6 flex flex-row-reverse">
      <div class="flex items-center justify-between">
        <button
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

   
  </div>
</template>

<script>
import { FilePond } from 'vue-filepond';
import 'filepond/dist/filepond.min.css';

export default {
  components: {
    FilePond,
  },

  data() {
    return {
      activeTab: 0,
      date: "",
      uploadedFiles: [],
      tabs: [
        {
          title: "Local Travelling",
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
              value: "",
              gridClass: "sm:col-span-1",
            },
          ],
        },
        {
          title: "Overseas Travelling with Accommodation",
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
              type: "number",
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
          ],
        },
        {
          title: "Entertainment",
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
              id: "PersonEntertainedE",
              label: "Person Entertained",
              type: "text",
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
              value: "",
              gridClass: "sm:col-span-1",
            },
          ],
        },
        {
          title: "Staff Refreshment",
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
              value: "",
              gridClass: "sm:col-span-1",
            },
          ],
        },
        {
          title: "Handphone Reimbursement",
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
              type: "number",
              value: "",
              required: true,
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
              gridClass: "sm:col-span-1",
            },
          ],
        },
        {
          title: "Medical Leave Reimbursement",
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
              value: "",
              gridClass: "sm:col-span-1",
            },
          ],
        },
      ],
    };
  },

  methods: {
    handleAddFile(file) {
      // Push the selected file to the uploadedFiles array
      this.uploadedFiles.push(file.file);

      // Log the selected files
      console.log("Selected Files:", this.uploadedFiles);

      // Update the field value to the uploadedFiles array
      this.$set(this.field, 'value', this.uploadedFiles);
    },

    handleRemoveFile(file) {
      // Remove the file from the uploadedFiles array
      const index = this.uploadedFiles.findIndex(f => f === file.file);
      if (index !== -1) {
        this.uploadedFiles.splice(index, 1);
      }

      // Log the selected files
      console.log("Selected Files:", this.uploadedFiles);

      // Update the field value to the uploadedFiles array
      this.$set(this.field, 'value', this.uploadedFiles);
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
    },
  },
};
</script>

<style scoped>
</style>
