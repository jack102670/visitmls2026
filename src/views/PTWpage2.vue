<!-- FormPage1.vue -->
<template>
  <div class="container mx-auto">
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
          <span class="text-sm">
            (Item with '<span class="text-red-900">*</span>' needs a special
            work permit, mark '☑️' if applicable)
          </span>
        </h2>

        <form>
          <div class="grid grid-cols-1 pt-6 gap-6 mt-4 sm:grid-cols-3">
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input
                  type="checkbox"
                  :checked="addExtraPage"
                  @change="handleCheckboxChange"
                />
                Hot Works (i.e Welding & Flame Cutting)
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input
                  type="checkbox"
                  :checked="addExtraPage2"
                  @change="handleCheckboxChange2"
                />
                Working at Height (falling height > 1.8m)
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" />
                Electrical High Tension
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" />
                Fire Protection System Impairment
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" />
                Hazardous Substances
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" />
                Dust/Pollutants exposure
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" />
                Hydraulic Spill/Pneumatic Jet
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" />
                Trapping Points/Nip Points
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" />
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

    <!-- add more fields as needed -->
  </div>
</template>

<script>
export default {
  name: "PTWpage2Views",
  props: {
    addExtraPage1: Boolean,
  },
  data() {
    return {
      formData: {
        field1: "",
        // add more fields as needed
      },
    };
  },
  methods: {
    handleCheckboxChange(event) {
      this.$emit("update:addExtraPage", event.target.checked);
    },
    handleCheckboxChange2(event) {
      this.$emit("update:addExtraPage2", event.target.checked);
    },
    nextPage() {
      this.$emit("next-page"); // Pass formData when emitting "Next" event
    },
    goBack() {
      this.$emit("go-back"); // Emit an event when the "Next" button is clicked
    },
  },
};
</script>
