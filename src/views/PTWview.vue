<template>
  <main
    class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto"
  >
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-bold text-slate-900 dark:text-white"></h2>
        </div>

      
            <div
              class="flex ptw-container max-w-4xl mx-auto p-6  "
            >
              <h2 class="text-2xl font-bold mb-4">Permit To Work Details</h2>

              <!-- General Information Section -->
              <div class="mb-6">
                <h3 class="text-xl font-semibold mb-2">General Information</h3>
                <div class="grid grid-cols-2 gap-4">
                  <p>
                    <strong>Reference Number:</strong> {{ ptwData.refNumber }}
                  </p>
                  <p><strong>Vendor Name:</strong> {{ ptwData.vendorName }}</p>
                  <!-- ... more fields ... -->
                </div>
              </div>

              <!-- Staff Details Section -->
              <div class="mb-6" v-if="ptwData.staffDetails">
                <h3 class="text-xl font-semibold mb-2">Staff Details</h3>
                <p>
                  <strong>Name:</strong> {{ ptwData.staffDetails.pktStaffName }}
                </p>
                <p>
                  <strong>Email:</strong>
                  {{ ptwData.staffDetails.pktStaffEmail }}
                </p>
                <!-- ... more fields ... -->
              </div>

              <!-- Other sections: Equipment, Hazard, Safety Measures, etc. -->
              <!-- Structure them similarly to the above sections -->

              <!-- Files Section -->
              <div class="mb-6">
                <h3 class="text-xl font-semibold mb-2">Files</h3>
                <ul>
                  <li v-for="file in ptwData.files" :key="file">
                    <a
                      :href="file"
                      class="text-blue-600 hover:underline"
                      target="_blank"
                      >{{ file }}</a
                    >
                  </li>
                </ul>
              </div>
            </div>
       

        <!-- Display a list of movies from the TMDb API -->
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      ptwData: [],
    };
  },
  created() {
    this.fetchPTWData();
  },
  methods: {
    async fetchPTWData() {
      // Your API call logic goes here
      const response = await axios.get(
        "http://172.28.28.91:8085/api/Main/GetPTW/PKTM-PTW-1"
      );
      this.ptwData = response.data;
    },
  },
};
</script>

