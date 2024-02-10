<template>
  <div v-if="isLoading">Loading data, please wait...</div>
  <div v-else-if="error">An error occurred: {{ error.message }}</div>

  <div
    v-else
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
          <div class="flex justify-between">
            <h2 class="text-2xl font-bold mb-4">Permit To Work Details</h2>
            <span class="text-[#160959]"
              ><button @click="exportFormToPDF()">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
                  />
                </svg></button
            ></span>
          </div>

          <table
            class="w-full mt-4 bg-white border border-gray-300 divide-y divide-gray-300"
          >
            <tr>
              <td class="py-2 px-4 font-medium">Vendor Name:</td>
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
                {{ ptwData.staffDetails.pktStaffEmail }}
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

            <tr>
              <td class="py-2 px-4 font-medium">Work at Height:</td>
              <td class="py-2 px-4">
                <div>
                  <strong>Company Name:</strong> {{ ptwData.wah.companyName }}
                </div>
                <div>
                  <strong>Contractor Name:</strong>
                  {{ ptwData.wah.contractorName }}
                </div>
                <div>
                  <strong>Work Location:</strong> {{ ptwData.wah.workLocation }}
                </div>
                <div>
                  <strong>Work Description:</strong>
                  {{ ptwData.wah.workDescription }}
                </div>
                <div>
                  <strong>Start Date/Time:</strong>
                  {{ ptwData.wah.startDateTime }}
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
                    <li
                      v-for="item in ptwData.wah.waH_ControlMeasure"
                      :key="item"
                    >
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
        </div>

        <!-- Display a list of movies from the TMDb API -->
      </div>
    </div>
  </div>
</template>

<script>
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import axios from "axios";
export default {
  data() {
    return {
      ptwData: [],
      refNumber: "",
      isLoading: true,
    };
  },

  mounted() {
    //this.refNumber = this.$route.params.refNumber;
    console.log("this refNumber" + this.refNumber);

    //this.fetchPTWData();
    console.log("try" + this.$route.params.refNumber);
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
    exportFormToPDF() {
      console.log("this is ptwdata" + this.ptwData.jhaDetails);
      const doc = new jsPDF();

      let yPos = 10;

      // Heading Style
      const addSectionHeading = (text) => {
        doc.setFontSize(14);
        doc.setFont(undefined, "bold");
        doc.text(text, 14, yPos);
        yPos += 7; // Space after heading
        doc.setFontSize(10); // Reset font size for content
        doc.setFont(undefined, "normal");
      };

      // Regular Text
      // const addText = (label, text) => {
      //   doc.text(`${label}: ${text}`, 14, yPos);
      //   yPos += 6; // Increment yPos for the next line
      // };

      addSectionHeading(
        "Permit To Work Details. (RefNo: " + this.ptwData.refNumber + ")"
      );

      // Adding basic info
      const basicInfo = [
        [
          "Requester Name:",
          this.ptwData.vendorName || "N/A",
          "PKT Staff Name:",
          this.ptwData.staffDetails.pktStaffName || "N/A",
        ],
        [
          "Date Requested",
          this.ptwData.dateRequested || "N/A",
          "PKT Staff Email:",
          this.ptwData.staffDetails.pktStaffEmail || "N/A",
        ],

        [
          "Company:",
          this.ptwData.companyName || "N/A",
          "PKT Staff Department:",
          this.ptwData.staffDetails.departmentName || "N/A",
        ],
        ["Phone Number:", this.ptwData.phoneNumber || "N/A"],
        ["Date From:", this.ptwData.dateFrom || "N/A"],
        ["Date Until:", this.ptwData.dateUntil || "N/A"],
        ["Work Location:", this.ptwData.workLocation || "N/A"],

        // Empty strings for padding if needed
        ["Work Description:", this.ptwData.workDescription || "N/A"],
      ];

      doc.autoTable({
        startY: yPos,
        theme: "plain",
        styles: { fontSize: 10, cellPadding: 1, lineColor: [0, 0, 0] },
        columnStyles: {
          0: { fontStyle: "bold", cellWidth: 40 }, // Label columns
          1: { cellWidth: 60 }, // Value columns
          2: { fontStyle: "bold", cellWidth: 40 }, // Label columns
          3: { cellWidth: 60 }, // Value columns
        },
        body: basicInfo,
        showHead: "firstPage",
        margin: { top: 10, right: 14, bottom: 10, left: 14 },

        didDrawPage: function (data) {
          yPos = data.cursor.y + 10; // Update Y position for next content
        },
      });

      // Ensure not to overflow, add new page if needed
      if (yPos > 280) {
        doc.addPage();
        yPos = 10;
      }

      // Adding tables for detailed sections like Equipment, Hazard, etc.
      const addTableSection = (title, data) => {
        if (yPos > 280) {
          doc.addPage();
          yPos = 10;
        }
        addSectionHeading(title);
        doc.autoTable({
          startY: yPos,
          theme: "grid",
          margin: { left: 14 },
          headStyles: { fillColor: [22, 160, 133] }, // Customize head style
          styles: {
            cellPadding: { top: 2, right: 4, bottom: 2, left: 4 },
            fontSize: 10,
            overflow: "linebreak", // Change this to 'visible' if you want to avoid any line breaks
            cellWidth: "wrap", // Use 'wrap' to allow cells to expand based on content
          },
          columnStyles: { 0: { cellWidth: "auto" } }, // Ensure the column automatically adjusts to content
          head: [[title]],
          body: data.map((item) => [item]),
          willDrawCell: function (data) {
            // Adjust the `minCellWidth` based on the content length if necessary
            const textLength =
              (doc.getStringUnitWidth(data.cell.raw) *
                doc.internal.getFontSize()) /
              doc.internal.scaleFactor;
            if (textLength > data.cell.width) {
              data.cell.styles.minCellWidth = textLength;
            }
          },
          didDrawPage: function (data) {
            yPos = data.cursor.y + 10; // Update Y position for next content
          },
        });
      };

      addTableSection("Equipment", this.ptwData.equipment);
      addTableSection("Hazard", this.ptwData.hazard);
      addTableSection("Isolation", this.ptwData.isolation);
      addTableSection("Plant Support", this.ptwData.plantSupport);

      if (yPos > 280) {
        doc.addPage();
        yPos = 10;
      }

      addSectionHeading("Jobs Hazard Analysis");
      doc.autoTable({
        startY: yPos,
        head: [["Sequence Task", "Potential Hazard", "Preventive Measures"]],
        body: this.ptwData.jhaDetails.map((detail) => [
          detail.sequenceTask,
          detail.potentialHazard,
          detail.preventiveMeasures,
        ]),
        theme: "grid",
        margin: { left: 14 },
        headStyles: { fillColor: [22, 160, 133] }, // Customize head style
        didDrawPage: function (data) {
          yPos = data.cursor.y + 10; // Update Y position for next content
        },
      });

      // Define the "Hot Work" information in a two-column format
      const hotWorkInfo = [
        [
          "Work Description:",
          this.ptwData.hotWork?.workDescription || "N/A",
          "Start Date/Time:",
          this.ptwData.hotWork?.dateTimeStart || "N/A",
        ],
        [
          "Complete Date/Time:",
          this.ptwData.hotWork?.dateTimeComplete || "N/A",
          "Hot Work By:",
          this.ptwData.hotWork?.hotWorkBy || "N/A",
        ],
      ];

      // Check for a new page if needed
      if (yPos > 280) {
        doc.addPage();
        yPos = 10;
      }
      if (this.ptwData.hotWork.workDescription != null) {
        addSectionHeading("Hot Work");

        // Use autoTable to create the two-column layout for "Hot Work" section
        doc.autoTable({
          startY: yPos,
          theme: "plain",
          styles: { fontSize: 10, cellPadding: 1 },
          columnStyles: {
            0: { fontStyle: "bold", cellWidth: 40 }, // Label column
            1: { cellWidth: 60 }, // Value column
            2: { fontStyle: "bold", cellWidth: 40 }, // Second label column
            3: { cellWidth: 60 }, // Second value column
          },
          body: hotWorkInfo,
          willDrawCell: (data) => {
            // Prevents lines from being drawn
            if (data.section === "body") {
              data.cell.styles.lineWidth = 0;
            }
          },
          didDrawPage: (data) => {
            yPos = data.cursor.y + 10; // Update yPos for the next section
          },
        });

        // For lists within the "Hot Work" section, use addListSection
        addTableSection(
          "General Requirements",
          this.ptwData.hotWork?.reqGeneral 
        );
        addTableSection(
          "Distance Requirements",
          this.ptwData.hotWork?.reqDistance 
        );
        addTableSection(
          "Enclosed Equipment Requirements",
          this.ptwData.hotWork?.req_Enc_Equip 
        );
        addTableSection(
          "Fire Monitor Requirements",
          this.ptwData.hotWork?.req_FireMon 
        );
        addTableSection(
          "Walls Requirements",
          this.ptwData.hotWork?.req_Walls 
        );
      }
      // Add a section heading for "Hot Work"

      const workAtHeightInfo = [
        [
          "Company Name:",
          this.ptwData.wah?.companyName || "N/A",
          "Contractor Name:",
          this.ptwData.wah?.contractorName || "N/A",
        ],
        [
          "Work Location:",
          this.ptwData.wah?.workLocation || "N/A",
          
        ],
        [
          "Start Date/Time:",
          this.ptwData.wah?.startDateTime || "N/A",
          "Complete Date/Time:",
          this.ptwData.wah?.completeDateTime || "N/A",
        ],
        ["Work Description:",
          this.ptwData.wah?.workDescription || "N/A",],
      ];
      if (yPos > 280) {
        doc.addPage();
        yPos = 10;
      }

      if (this.ptwData.wah.companyName != null) {
        addSectionHeading("Work at Height");

        // Use autoTable to create the two-column layout for "Work at Height" section
        doc.autoTable({
          startY: yPos,
          theme: "plain",
          styles: { fontSize: 10, cellPadding: 1 },
          columnStyles: {
            0: { fontStyle: "bold", cellWidth: 40 }, // Label column
            1: { cellWidth: 60 }, // Value column
            2: { fontStyle: "bold", cellWidth: 40 }, // Second label column
            3: { cellWidth: 60 }, // Second value column
          },
          body: workAtHeightInfo,
          willDrawCell: (data) => {
            // Prevents lines from being drawn
            if (data.section === "body") {
              data.cell.styles.lineWidth = 0;
            }
          },
          didDrawPage: (data) => {
            yPos = data.cursor.y + 10; // Update yPos for the next section
          },
        });
        // Adding additional lists as tables for "Work at Height"
        addTableSection("Hazards", this.ptwData.wah?.waH_Hazard || []);
        addTableSection("Ladders", this.ptwData.wah?.waH_Ladders || []);
        addTableSection("Scaffolding", this.ptwData.wah?.waH_Scaffolding || []);
        addTableSection("Lift Trucks", this.ptwData.wah?.waH_LiftTruck || []);
        addTableSection("Man Cages", this.ptwData.wah?.waH_ManCage || []);
        addTableSection(
          "Emergency Procedures",
          this.ptwData.wah?.waH_Emergency || []
        );
        addTableSection(
          "Control Measures",
          this.ptwData.wah?.waH_ControlMeasure || []
        );
      }
      // Add a section heading for "Work at Height"

      // Finish up
      doc.save(this.ptwData.refNumber + ".pdf");
    },

    getFileName(file) {
      const parts = file.split("/");
      return parts[parts.length - 1];
    },
    fetchPTWData() {
      this.isLoading = true;
      this.error = null;
      axios
        .get("http://172.28.28.91:8085/api/Main/GetPTW/" + this.refNumber)
        .then((response) => {
          this.ptwData = response.data;
          this.isLoading = false;
        })
        .catch((error) => {
          this.error = error;
          this.isLoading = false;
        });
    },
  },
};
</script>
