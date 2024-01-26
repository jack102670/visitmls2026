<template>
    
    <div v-if="isLoading">
      Loading data, please wait...
    </div>
    <div v-else-if="error">
      An error occurred: {{ error.message }}
    </div>

  <div  v-else
    class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto"
  >
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-bold text-slate-900 dark:text-white"></h2>
        </div>

        <div class="ptw-container max-w-4xl mx-auto p-6">
          <h2 class="text-2xl font-bold mb-4">Permit To Work Details</h2>
          <table
            class="w-full mt-4 bg-white border border-gray-300 divide-y divide-gray-300"
          >
            <tr>
              <td class="py-2 px-4 font-medium">Requester Name:</td>
              <td class="py-2 px-4">{{ ptwData.vendorName }}</td>
            </tr>
            <tr>
              <td class="py-2 px-4 font-medium">Company:</td>
              <td class="py-2 px-4">{{ ptwData.companyName }}</td>
            </tr>
            <tr>
              <td class="py-2 px-4 font-medium">Phone Number:</td>
              <td class="py-2 px-4">{{ ptwData.phoneNumber }}</td>
            </tr>

            <tr>
              <td class="py-2 px-4 font-medium">Date From:</td>
              <td class="py-2 px-4">{{ ptwData.dateFrom }}</td>
            </tr>
            <tr>
              <td class="py-2 px-4 font-medium">Date Until:</td>
              <td class="py-2 px-4">{{ ptwData.dateUntil }}</td>
            </tr>
            <tr>
              <td class="py-2 px-4 font-medium">Work Location:</td>
              <td class="py-2 px-4">{{ ptwData.workLocation }}</td>
            </tr>
            <tr>
              <td class="py-2 px-4 font-medium">Work Description:</td>
              <td class="py-2 px-4">{{ ptwData.workDescription }}</td>
            </tr>
            <tr>
              <td class="py-2 px-4 font-medium">Date Requested:</td>
              <td class="py-2 px-4">{{ ptwData.dateRequested }}</td>
            </tr>
            <tr>
              <td class="py-2 px-4 font-medium">PKT Staff Name:</td>
              <td class="py-2 px-4">{{ ptwData.staffDetails.pktStaffName }}</td>
            </tr>
            <tr>
              <td class="py-2 px-4 font-medium">PKT Staff Email:</td>
              <td class="py-2 px-4">
                {{ ptwData.staffDetails.pktStaffEmail}}
              </td>
            </tr>
            <tr>
              <td class="py-2 px-4 font-medium">PKT Staff Department:</td>
              <td class="py-2 px-4">
                {{ ptwData.staffDetails.departmentName }}
              </td>
            </tr>
            <tr>
              <td class="py-2 px-4 font-medium">Equipment:</td>
              <td class="py-2 px-4">
                <div v-for="item in ptwData.equipment" :key="item">
                  {{ item }}
                </div>
              </td>
            </tr>
            <tr>
              <td class="py-2 px-4 font-medium">Hazard:</td>
              <td class="py-2 px-4">
                <div v-for="item in ptwData.hazard" :key="item">
                  {{ item }}
                </div>
              </td>
            </tr>
            <tr>
              <td class="py-2 px-4 font-medium">Isolation:</td>
              <td class="py-2 px-4">
                <div v-for="item in ptwData.isolation" :key="item">
                  {{ item }}
                </div>
              </td>
            </tr>
            <tr>
              <td class="py-2 px-4 font-medium">Plant Support:</td>
              <td class="py-2 px-4">
                <div v-for="item in ptwData.plantSupport" :key="item">
                  {{ item }}
                </div>
              </td>
            </tr>
            <tr>
              <td class="py-2 px-4 font-medium">Jobs Hazard Analysis:</td>
             
              <td class="py-2 px-4">
                <div
                  v-for="detail in ptwData.jhaDetails"
                  :key="detail.sequenceTask"
                >
                  <div>
                    <strong>Sequence Task:</strong> {{ detail.sequenceTask }}
                  </div>
                  <div>
                    <strong>Potential Hazard:</strong>
                    {{ detail.potentialHazard }}
                  </div>
                  <div>
                    <strong>Preventive Measures:</strong>
                    {{ detail.preventiveMeasures }}
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td class="py-2 px-4 font-medium">Hot Work:</td>
              <td class="py-2 px-4">
                <div>
                  <strong>Work Description:</strong>
                  {{ ptwData.hotWork.workDescription }}
                </div>
                <div>
                  <strong>Start Date/Time:</strong>
                  {{ ptwData.hotWork.dateTimeStart }}
                </div>
                <div>
                  <strong>Complete Date/Time:</strong>
                  {{ ptwData.hotWork.dateTimeComplete }}
                </div>
                <div>
                  <strong>Hot Work By:</strong> {{ ptwData.hotWork.hotWorkBy }}
                </div>
                <!-- Add other properties if needed -->

                <div v-if="ptwData.hotWork.reqGeneral.length">
                  <strong>General Requirements:</strong>
                  <ul>
                    <li v-for="item in ptwData.hotWork.reqGeneral" :key="item">
                      {{ item }}
                    </li>
                  </ul>
                </div>

                <div v-if="ptwData.hotWork.reqDistance.length">
                  <strong>Distance Requirements:</strong>
                  <ul>
                    <li v-for="item in ptwData.hotWork.reqDistance" :key="item">
                      {{ item }}
                    </li>
                  </ul>
                </div>

                <div v-if="ptwData.hotWork.req_Enc_Equip.length">
                  <strong>Enclosed Equipment Requirements:</strong>
                  <ul>
                    <li
                      v-for="item in ptwData.hotWork.req_Enc_Equip"
                      :key="item"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </div>

                <div v-if="ptwData.hotWork.req_FireMon.length">
                  <strong>Fire Monitor Requirements:</strong>
                  <ul>
                    <li v-for="item in ptwData.hotWork.req_FireMon" :key="item">
                      {{ item }}
                    </li>
                  </ul>
                </div>

                <div v-if="ptwData.hotWork.req_Walls.length">
                  <strong>Walls Requirements:</strong>
                  <ul>
                    <li v-for="item in ptwData.hotWork.req_Walls" :key="item">
                      {{ item }}
                    </li>
                  </ul>
                </div>

                <!-- Optionally, add other arrays and properties similarly -->
              </td>
            </tr>

            <tr >
              <td class="py-2 px-4 font-medium">Work at Height:</td>
              <td class="py-2 px-4">
                <div><strong>Company Name:</strong> {{ ptwData.wah.companyName }}</div>
                <div>
                  <strong>Contractor Name:</strong> {{ ptwData.wah.contractorName }}
                </div>
                <div>
                  <strong>Work Location:</strong> {{ ptwData.wah.workLocation }}
                </div>
                <div>
                  <strong>Work Description:</strong> {{ ptwData.wah.workDescription }}
                </div>
                <div>
                  <strong>Start Date/Time:</strong> {{ ptwData.wah.startDateTime }}
                </div>
                <div>
                  <strong>Complete Date/Time:</strong>
                  {{ ptwData.wah.completeDateTime }}
                </div>
                <!-- Other properties can be added similarly -->

                <div>
                  <strong>Hazards:</strong>
                  <ul>
                    <li v-for="item in ptwData.wah.waH_Hazard" :key="item">
                      {{ item }}
                    </li>
                  </ul>
                </div>

                <div>
                  <strong>Ladders:</strong>
                  <ul>
                    <li v-for="item in ptwData.wah.waH_Ladders" :key="item">
                      {{ item }}
                    </li>
                  </ul>
                </div>

                <div>
                  <strong>Scaffolding:</strong>
                  <ul>
                    <li v-for="item in ptwData.wah.waH_Scaffolding" :key="item">
                      {{ item }}
                    </li>
                  </ul>
                </div>

                <div>
                  <strong>Lift Trucks:</strong>
                  <ul>
                    <li v-for="item in ptwData.wah.waH_LiftTruck" :key="item">
                      {{ item }}
                    </li>
                  </ul>
                </div>

                <div>
                  <strong>Man Cages:</strong>
                  <ul>
                    <li v-for="item in ptwData.wah.waH_ManCage" :key="item">
                      {{ item }}
                    </li>
                  </ul>
                </div>

                <div>
                  <strong>Emergency Procedures:</strong>
                  <ul>
                    <li v-for="item in ptwData.wah.waH_Emergency" :key="item">
                      {{ item }}
                    </li>
                  </ul>
                </div>

                <div>
                  <strong>Control Measures:</strong>
                  <ul>
                    <li v-for="item in ptwData.wah.waH_ControlMeasure" :key="item">
                      {{ item }}
                    </li>
                  </ul>
                </div>

                <!-- Optionally, add other arrays and properties similarly -->
              </td>
            </tr>

            <tr>
              <td class="py-2 px-4 font-medium">Files Upload:</td>
              <td class="py-2 px-4">
                <ul>
                  <li
                    class="bg-blue-100 p-4 gap-2"
                    v-for="file in ptwData.files"
                    :key="file"
                  >
                  <a class="text-blue-500" target="_blank" :href="file">{{
                getFileName(file)
              }}</a>
                  </li>
                </ul>
              </td>
            </tr>

            <!-- ... (Other modal content) ... -->

            <!-- ... (Other modal content) ... -->
          </table>
          <!-- General Information Section -->
        </div>

        <!-- Display a list of movies from the TMDb API -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      ptwData: [],
      refNumber:"",
      isLoading: true, 
    };
  },
 
  mounted() {
    //this.refNumber = this.$route.params.refNumber;
    console.log("this refNumber" +this.refNumber)
    //this.fetchPTWData();
    console.log("try"+ this.$route.params.refNumber);
},
created() {
  this.refNumber = this.$route.params.refNumber;
    this.fetchPTWData();
    
  },
// beforeMount() {
//     this.refNumber = this.$route.params.refNumber;
//     this.fetchPTWData();
//   },


  methods: {
    getFileName(file) {
      const parts = file.split("/");
      return parts[parts.length - 1];
    },
    fetchPTWData() {
      this.isLoading = true;
      this.error = null;
      axios.get("http://172.28.28.91:8085/api/Main/GetPTW/" + this.refNumber)
        .then(response => {
          this.ptwData = response.data;
          this.isLoading = false;
        })
        .catch(error => {
          this.error = error;
          this.isLoading = false;
        });

      
    },
  },
};
</script>
