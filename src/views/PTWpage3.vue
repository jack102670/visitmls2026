<!-- FormPage1.vue -->
<template>
  <div class="container mx-auto">
    <div
      class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8  shadow-xl"
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
                <input type="checkbox" />
                Safety Helmet
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" />
                Face Shield
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" />
                Breathing Apparatus
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" />
                Chemical Suit
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" />
                Safety Shoes
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" />
                Safety Glases/Goggles
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" />
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
                <input type="checkbox" />
                Risk Assessment
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" />
                Barricades
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" />
                First Aid Kit
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" />
                Noise Meter
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" />
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
                <input type="checkbox" />
                Electrical
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" />
                Fire Alarm
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" />
               First Aid Kit
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" />
                Chemical/Gas
              </label>
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200">
                <input type="checkbox" />
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
                <input type="checkbox" />
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
    data() {
      return {
        formData: {
          field1: '',
          // add more fields as needed
        },
      };
    },
    methods: {

    nextPage() {
      this.$emit("next-page"); // Pass formData when emitting "Next" event
    },
    goBack() {
      this.$emit('go-back'); // Emit an event when the "Next" button is clicked
    },
    },
  };
  </script>
  