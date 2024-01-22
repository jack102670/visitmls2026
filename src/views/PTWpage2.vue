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
        </h2>
        <span class="text-sm">
          (Item with '<span class="text-red-500">*</span>' needs a special work
          permit, mark '☑️' if applicable)
        </span>

        <form>
          <div class="grid grid-cols-1 pt-6 gap-6 mt-4 sm:grid-cols-3">
            <div v-for="(hazard, index) in hazards" :key="index">
              <label :for="hazard" class="text-gray-700 dark:text-gray-200">
                <input
                  :id="hazard"
                  type="checkbox"
                  v-model="formData[hazard]"
                  @change="
                    hazard === 'hotWorks'
                      ? handleCheckboxChange('hotWorks')
                      : hazard === 'workingAtHeight'
                        ? handleCheckboxChange2('workingAtHeight')
                        : handleGeneralCheckboxChange()
                  "
                />
                {{ hazard
                }}<span
                  v-if="specialPermits.includes(hazard)"
                  class="text-red-500"
                  >*</span
                >
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
    addExtraPage2: Boolean,

  },

  data() {
    return {
      hazards: [
        "hotWorks",
        "workingAtHeight",
        "electricalHighTension",
        "fireProtectionSystemImpairment",
        "hazardousSubstances",
        "dustPollutantsExposure",
        "hydraulicSpillPneumaticJet",
        "trappingPointsNipPoints",
        "inadequateIllumination",
      ],

      specialPermits: ["hotWorks", "workingAtHeight"],
    };
  },

  watch: {
    formData: {
      handler(newFormData) {
        // Emit an event to the parent with the updated form data
        this.$emit("submit-form", newFormData);
      },
      deep: true,
    },
  },
  created() {
    this.hazards.forEach((hazard) => {
      this.formData[hazard] = false;
    });
  },
  methods: {
    handleGeneralCheckboxChange() {
      // Add your logic here for general checkbox changes
      // If no specific logic is needed, you can leave this method empty
    },
    handleCheckboxChange(hazard) {
      if (hazard === "hotWorks") {
        this.$emit("update:addExtraPage", this.formData.hotWorks);
      }
    },
    handleCheckboxChange2(hazard) {
      if (hazard === "workingAtHeight") {
        this.$emit("update:addExtraPage2", this.formData.workingAtHeight);
      }
    },
    
    nextPage() {
      this.$emit("next-page"); // Pass formData when emitting "Next" event
    },
    goBack() {
      this.$emit("go-back"); // Emit an event when the "Next" button is clicked
    },
  },
  computed: {
    formData() {
      // Map all form fields for PTWpage2
      return {
        hotWorks: this.hotWorks,
        workingAtHeight: this.workingAtHeight,
        electricalHighTension: this.electricalHighTension,
        fireProtectionSystemImpairment: this.fireProtectionSystemImpairment,
        hazardousSubstances: this.hazardousSubstances,
        dustPollutantsExposure: this.dustPollutantsExposure,
        hydraulicSpillPneumaticJet: this.hydraulicSpillPneumaticJet,
        trappingPointsNipPoints: this.trappingPointsNipPoints,
        inadequateIllumination: this.inadequateIllumination,
        // add more fields as needed
      };
    },
  },
};
</script>
