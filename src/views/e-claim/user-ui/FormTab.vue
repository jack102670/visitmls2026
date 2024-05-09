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
          {{ tab.title }}
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

                <input
                  v-model="field.value"
                  :id="field.id"
                  :type="field.type"
                  :placeholder="field.placeholder"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div class="flex items-center justify-between">
                <button
                  type="save"
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      date: "",
      tabs: [
        {
          title: "Local Travelling Form",
          gridLayout: "grid-cols-3",
          fields: [
            {
              id: "date",
              label: "Date",
              type: "date",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "DestinationPurpose",
              label: "Destination / Purpose",
              type: "text",
              value: "",
              required: true,
              gridClass: "sm:col-span-1",
            },
            {
              id: "MileageKM",
              label: "Mileage(KM)",
              type: "number",
              value: "",
              gridClass: "sm:col-span-1",
            },
            {
              id: "MileageRM",
              label: "Total Mileage(RM)",
              type: "number",
              value: "",
              gridClass: "sm:col-span-1",
            },
            {
              id: "Toll",
              label: "Toll(RM)",
              type: "number",
              value: "",
              gridClass: "sm:col-span-1",
            },
            {
              id: "Parking",
              label: "Parking(RM)",
              type: "number",
              value: "",
              gridClass: "sm:col-span-1",
            },
            {
              id: "TotalRM",
              label: "Total(RM)",
              type: "number",
              value: "",
              gridClass: "sm:col-span-1",
            },
          ],
        },
        {
          title: "Overseas Travelling with Accommodation Form",
          gridLayout: "grid-cols-3", //
          fields: [
            {
              id: "date",
              label: "Date",
              type: "date",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "Description",
              label: "Description",
              type: "text",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "ForeignCurrencyAccommodation",
              label: "Foreign Currency",
              type: "number",
              placeholder: "Accommodation",
              value: "",
              gridClass: "sm:col-span-2",
            },
            {
              id: "ExchangeRateAccommodation",
              label: "Exchange Rate",
              type: "text",
              value: "",
              gridClass: "sm:col-span-2",
            },
            {
              id: "RMforAccommodation",
              label: "RM",
              type: "number",
              value: "",
              gridClass: "sm:col-span-2",
            },
            {
              id: "ForeignCurrencyOthers",
              label: "Foreign Currency",
              type: "number",
              placeholder: "Others",
              value: "",
              gridClass: "sm:col-span-2",
            },
            {
              id: "ExchangeRateOthers",
              label: "Exchange Rate",
              type: "text",
              value: "",
              gridClass: "sm:col-span-2",
            },
            {
              id: "RMforOthers",
              label: "RM",
              type: "number",
              value: "",
              gridClass: "sm:col-span-2",
            },
            {
              id: "MealAllowance",
              label: "Meal Allowance(RM)",
              type: "number",
              value: "",
              gridClass: "sm:col-span-2",
            },
            {
              id: "AirportLimoTeksi",
              label: "Airport Limo / Teksi(RM)",
              type: "number",
              value: "",
              gridClass: "sm:col-span-2",
            },
            {
              id: "RMforMealTransport",
              label: "RM",
              type: "number",
              value: "",
              gridClass: "sm:col-span-2",
            },
          ],
        },
        {
          title: "Entertainment Form",
          gridLayout: "grid-cols-3",
          fields: [
            {
              id: "date",
              label: "Date",
              type: "date",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "PersonEntertained",
              label: "Person Entertained",
              type: "text",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "TypeofEntertainment",
              label: "Type of Entertainment",
              type: "text",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "Company",
              label: "Company",
              type: "text",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "Venue",
              label: "Venue",
              type: "text",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "Reference",
              label: "Reference",
              type: "text",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "AmountRM",
              label: "Amount(RM)",
              type: "number",
              value: "",
              gridClass: "sm:col-span-2",
            },
          ],
        },
        {
          title: "Staff Refreshment Form",
          gridLayout: "grid-cols-3",
          fields: [
            {
              id: "date",
              label: "Date",
              type: "date",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "NameofStaff",
              label: "Name of Staff",
              type: "text",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "TypeofRefreshment",
              label: "Type of Refreshment",
              type: "text",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "Company",
              label: "Company",
              type: "text",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "Venue",
              label: "Venue",
              type: "text",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "Reference",
              label: "Reference",
              type: "text",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "AmountRM",
              label: "Amount(RM)",
              type: "number",
              value: "",
              gridClass: "sm:col-span-2",
            },
          ],
        },
        {
          title: "Handphone Reimbursement Form",
          gridLayout: "grid-cols-3",
          fields: [
            {
              id: "Month",
              label: "Month",
              type: "text",
              value: "",
              required: true,
              gridClass: "sm:col-span-1",
            },
            {
              id: "Year",
              label: "Year",
              type: "text",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "BankName",
              label: "Bank Name",
              type: "text",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "AccBankNumber",
              label: "Account Bank No.",
              type: "number",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "AccHolderName",
              label: "Account Holder Name",
              type: "text",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "LimitedAmount",
              label: "Limited Amount(RM)",
              type: "number",
              value: "",
              gridClass: "sm:col-span-2",
            },
            {
              id: "ClaimsAmount",
              label: "Claims Amount(RM)",
              type: "number",
              value: "",
              gridClass: "sm:col-span-2",
            },
          ],
        },
        {
          title: "Medical Leave Reimbursement Form",
          gridLayout: "grid-cols-3",
          fields: [
            {
              id: "date",
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
              id: "BankName",
              label: "Bank Name",
              type: "text",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "AccBankNumber",
              label: "Account Bank No.",
              type: "number",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "AccHolderName",
              label: "Account Holder Name",
              type: "text",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "ClaimsAmount",
              label: "Claims Amount(RM)",
              type: "number",
              value: "",
              gridClass: "sm:col-span-2",
            },
          ],
        },
      ],
    };
  },

  methods: {
    submitForm(tab) {
      // Create an empty object to hold the formatted form data
      const formattedData = {};

      // Iterate through the fields of the current tab
      tab.fields.forEach((field) => {
        // Use the field label as the key and the field value as the value
        formattedData[field.label] = field.value;
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
