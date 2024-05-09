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
              type: "text",
              value: "",
              required: true,
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
              id: "TotalRMLT",
              label: "Total(RM)",
              type: "number",
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
              type: "number",
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
              type: "number",
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
            {
              id: "RMforMealTransportOT",
              label: "RM",
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
              type: "text",
              value: "",
              required: true,
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
              type: "text",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "AmountRME",
              label: "Amount(RM)",
              type: "number",
              value: "",
              gridClass: "sm:col-span-2",
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
              type: "text",
              value: "",
              required: true,
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
              type: "text",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "AmountRMSR",
              label: "Amount(RM)",
              type: "number",
              value: "",
              gridClass: "sm:col-span-2",
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
              type: "text",
              value: "",
              required: true,
              gridClass: "sm:col-span-1",
            },
            {
              id: "YearHR",
              label: "Year",
              type: "text",
              value: "",
              required: true,
              gridClass: "sm:col-span-2",
            },
            {
              id: "BankNameHR",
              label: "Bank Name",
              type: "text",
              value: "",
              required: true,
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
              type: "text",
              value: "",
              required: true,
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
