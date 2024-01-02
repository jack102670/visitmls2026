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
          Determined Control
        </h2>

        <form>
          <h2
            class="text-md font-bold text-gray-700 pt-4 capitalize dark:text-white"
          >
            C[1] Personal Protective Equipment
          </h2>
          <div class="grid grid-cols-1 pt-4 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" v-model="safetyHelmet" />
                Safety Helmet
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" v-model="faceShield" />
                Face Shield
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" v-model="breathingApparatus" />
                Breathing Apparatus
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" v-model="chemicalSuit" />
                Chemical Suit
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" v-model="safetyShoes" />
                Safety Shoes
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" v-model="safetyGlassesGoggles" />
                Safety Glases/Goggles
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" v-model="other" />
                Other
              </label>
            </div>
          </div>
          <h2
            class="text-md font-bold text-gray-700 pt-4 capitalize dark:text-white"
          >
            C[2] Safety Measure
          </h2>
          <div class="grid grid-cols-1 pt-4 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" v-model="riskAssessment" />
                Risk Assessment
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" v-model="barricades" />
                Barricades
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" v-model="firstAidKit" />
                First Aid Kit
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" v-model="noiseMeter" />
                Noise Meter
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" v-model="other" />
                Other
              </label>
            </div>
          </div>
          <h2
            class="text-md font-bold text-gray-700 pt-4 capitalize dark:text-white"
          >
            C[3] Isolation
          </h2>
          <div class="grid grid-cols-1 pt-4 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" v-model="electrical" />
                Electrical
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" v-model="fireAlarm" />
                Fire Alarm
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" v-model="firstAidKit2" />
                First Aid Kit
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" v-model="chemicalGas" />
                Chemical/Gas
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" v-model="others" />
                Others
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
                <input type="checkbox" v-model="workingAtHeight" />
                Working at Height (falling height > 1.8m)
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" v-model="electricalHighTension" />
                Electrical High Tension
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input
                  type="checkbox"
                  v-model="fireProtectionSystemImpairment"
                />
                Fire Protection System Impairment
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" v-model="hazardousSubstances" />
                Hazardous Substances
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" v-model="dustPollutantsExposure" />
                Dust/Pollutants exposure
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" v-model="hydraulicSpillPneumaticJet" />
                Hydraulic Spill/Pneumatic Jet
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" v-model="trappingPointsNipPoints" />
                Trapping Points/Nip Points
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" v-model="inadequateIllumination" />
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
  data() {
    return {
      // Define your data properties here with initial values
      safetyHelmet: false,
      faceShield: false,
      breathingApparatus: false,
      chemicalSuit: false,
      safetyShoes: false,
      safetyGlassesGoggles: false,
      other: false,
      riskAssessment: false,
      barricades: false,
      firstAidKit: false,
      noiseMeter: false,
      workingAtHeight: false,
      electricalHighTension: false,
      fireProtectionSystemImpairment: false,
      hazardousSubstances: false,
      dustPollutantsExposure: false,
      hydraulicSpillPneumaticJet: false,
      trappingPointsNipPoints: false,
      inadequateIllumination: false,

      electrical: false,
      fireAlarm: false,
      firstAidKit2: false,
      chemicalGas: false,
      others: false,
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
  computed: {
    formData() {
      return {
        safetyHelmet: this.safetyHelmet,
        faceShield: this.faceShield,
        breathingApparatus: this.breathingApparatus,
        chemicalSuit: this.chemicalSuit,
        safetyShoes: this.safetyShoes,
        safetyGlassesGoggles: this.safetyGlassesGoggles,
        other: this.other,
        riskAssessment: this.riskAssessment,
        barricades: this.barricades,
        firstAidKit: this.firstAidKit,
        noiseMeter: this.noiseMeter,
        workingAtHeight: this.workingAtHeight,
        electricalHighTension: this.electricalHighTension,
        fireProtectionSystemImpairment: this.fireProtectionSystemImpairment,
        hazardousSubstances: this.hazardousSubstances,
        dustPollutantsExposure: this.dustPollutantsExposure,
        hydraulicSpillPneumaticJet: this.hydraulicSpillPneumaticJet,
        trappingPointsNipPoints: this.trappingPointsNipPoints,
        inadequateIllumination: this.inadequateIllumination,
        electrical: this.electrical,
        fireAlarm: this.fireAlarm,
        firstAidKit2: this.firstAidKit2,
        chemicalGas: this.chemicalGas,
        others: this.others,
      };
    },
  },
  methods: {
    nextPage() {
      this.$emit("next-page"); // Pass formData when emitting "Next" event
    },
    goBack() {
      this.$emit("go-back"); // Emit an event when the "Next" button is clicked
    },
  },
};
</script>
