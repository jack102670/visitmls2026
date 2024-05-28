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
              <td class="py-2 px-4 font-medium">Date Start:</td>
              <td class="py-2 px-4">{{ ptwData.dateFrom }}</td>
            </tr>
            <tr>
              <td class="py-2 px-4 font-medium">Date Finish:</td>
              <td class="py-2 px-4">{{ ptwData.dateUntil }}</td>
            </tr>
            <tr v-if="ptwData.dateLog !==null">
              <td class="py-2 px-4 font-medium">Date Finish Before Extension:</td>
              <td class="py-2 px-4">{{ ptwData.dateLog }}</td>
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
       <tr v-if="ptwData.equipment !== null && ptwData.equipment.length > 0">
  <td class="py-2 px-4 font-medium">Equipment:</td>
  <td class="py-2 px-4">
    <div v-for="item in ptwData.equipment" :key="item">
      {{ item }}
    </div>
  </td>
</tr>
<tr v-if="ptwData.hazard !== null && ptwData.hazard.length > 0">
  <td class="py-2 px-4 font-medium">Hazard:</td>
  <td class="py-2 px-4">
    <div v-for="item in ptwData.hazard" :key="item">
      {{ item }}
    </div>
  </td>
</tr>
<tr v-if="ptwData.isolation !== null && ptwData.isolation.length > 0">
  <td class="py-2 px-4 font-medium">Isolation:</td>
  <td class="py-2 px-4">
    <div v-for="item in ptwData.isolation" :key="item">
      {{ item }}
    </div>
  </td>
</tr>
<tr v-if="ptwData.plantSupport !== null && ptwData.plantSupport.length > 0">
  <td class="py-2 px-4 font-medium">Plant Support:</td>
  <td class="py-2 px-4">
    <div v-for="item in ptwData.plantSupport" :key="item">
      {{ item }}
    </div>
  </td>
</tr>
          <tr v-if="ptwData.jhaDetails !== null && ptwData.jhaDetails.length > 0">
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

            <tr v-if="ptwData.hotWork.workDescription !== null && ptwData.hotWork.workDescription !== ''">
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

            <tr v-if="ptwData.wah.companyName  !== null && ptwData.wah.companyName  !== ''">
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

<div v-if="ptwData.wah.waH_Hazard !== null && ptwData.wah.waH_Hazard.length > 0">
  <strong>Hazards:</strong>
  <ul>
    <li v-for="item in ptwData.wah.waH_Hazard" :key="item">
      {{ item }}
    </li>
  </ul>
</div>

<div v-if="ptwData.wah.waH_Ladders !== null && ptwData.wah.waH_Ladders.length > 0">
  <strong>Ladders:</strong>
  <ul>
    <li v-for="item in ptwData.wah.waH_Ladders" :key="item">
      {{ item }}
    </li>
  </ul>
</div>

                <div v-if="ptwData.wah.waH_Scaffolding !== null && ptwData.wah.waH_Scaffolding.length > 0">
                  <strong>Scaffolding:</strong>
                  <ul>
                    <li v-for="item in ptwData.wah.waH_Scaffolding" :key="item">
                      {{ item }}
                    </li>
                  </ul>
                </div>

                <div  v-if="ptwData.wah.waH_LiftTruck !== null && ptwData.wah.waH_LiftTruck.length > 0">
                  <strong>Lift Trucks:</strong>
                  <ul>
                    <li v-for="item in ptwData.wah.waH_LiftTruck" :key="item">
                      {{ item }}
                    </li>
                  </ul>
                </div>

                <div  v-if="ptwData.wah.waH_ManCage !== null && ptwData.wah.waH_ManCage.length > 0">
                  <strong>Man Cages:</strong>
                  <ul>
                    <li v-for="item in ptwData.wah.waH_ManCage" :key="item">
                      {{ item }}
                    </li>
                  </ul>
                </div>
<div v-if="ptwData.wah.waH_Emergency !== null && ptwData.wah.waH_Emergency.length > 0">
  <strong>Emergency Procedures:</strong>
  <ul>
    <li v-for="item in ptwData.wah.waH_Emergency" :key="item">
      {{ item }}
    </li>
  </ul>
</div>

              <div v-if="ptwData.wah.waH_ControlMeasure !== null && ptwData.wah.waH_ControlMeasure.length > 0">
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

          <tr v-if="ptwData.files !== null && ptwData.files.length > 0">
  <td class="py-2 px-4 font-medium">Files Upload:</td>
  <td class="py-2 px-4">
    <ul>
      <li
        class="bg-blue-100 p-4 gap-2"
        v-for="file in ptwData.files"
        :key="file"
      >
        <a class="text-blue-500" target="_blank" :href="file">{{ getFileName(file) }}</a>
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

      let yPos = 20;
      const addSectionHeading2 = (text) => {
        //doc.setFontSize(14);
        doc.setFont(undefined, "bold");

        // Get the page width
        const pageWidth = doc.internal.pageSize.getWidth();

        // Center the text
        doc.text(text, pageWidth / 2, yPos, { align: "center" });

        yPos += 15; // Space after heading
        //doc.setFontSize(10); // Reset font size for content
        doc.setFont(undefined, "normal");
      };
      // Heading Style
      const addSectionHeading = (text) => {
        doc.setFontSize(14);
        doc.setFont(undefined, "bold");
        doc.text(text, 14, yPos);
        yPos += 10; // Space after heading
        doc.setFontSize(10); // Reset font size for content
        doc.setFont(undefined, "normal");
      };

      // Regular Text
      // const addText = (label, text) => {
      //   doc.text(`${label}: ${text}`, 14, yPos);
      //   yPos += 6; // Increment yPos for the next line
      // };
      const base64Img =
        "data:image/jpeg;base64,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"; // Your base64 data URL
      doc.addImage(base64Img, "JPEG", 15, 7, 20, 20);

      addSectionHeading2("Permit To Work Details");

      doc.setFontSize(9);
      doc.setFont(undefined, "bold");
      doc.text("Serial No : " + this.ptwData.refNumber, 160, 17);

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
        // ["Work Description:", this.ptwData.workDescription || "N/A"],
      ];

      doc.autoTable({
        startY: yPos,
        theme: "plain",
        styles: { fontSize: 10, cellPadding: 1, lineColor: [0, 0, 0] },
        columnStyles: {
          0: { fontStyle: "bold", cellWidth: 40 }, // Label columns
          1: { cellWidth: 60 }, // Value columns
          2: { fontStyle: "bold", cellWidth: 40 }, // Label columns
          3: { cellWidth: 50 }, // Value columns
        },
        body: basicInfo,
        showHead: "firstPage",
        margin: { top: 10, right: 14, bottom: 10, left: 14 },

        didDrawPage: function (data) {
          yPos = data.cursor.y + 5; // Update Y position for next content
        },
      });

      const labelX = 15; // X-coordinate for the label
      const descriptionX = 55; // X-coordinate for the description

      // Set font to bold
      doc.setFontSize(10); // Set the font size here
      doc.setFont(undefined, "bold");
      doc.text("Work Description:", labelX, yPos);

      // Reset font to normal
      doc.setFontSize(10); // Reset the font size to normal here
      doc.setFont(undefined, "normal");
      doc.text(this.ptwData.workDescription || "N/A", descriptionX, yPos, {
        align: "left",
        maxWidth: 140,
      });

      yPos += 20; // Increment yPos for spacing

      // Ensure not to overflow, add new page if needed
      if (yPos > 280) {
        doc.addPage();
        yPos = 5;
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
          headStyles: { fillColor: [22, 9, 137] }, // Customize head style
          styles: {
            cellPadding: { top: 2, right: 4, bottom: 2, left: 4 },
            fontSize: 10,
            overflow: "linebreak", // Ensure no line breaks
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
          beforePageContent: function (data) {
            // Check if there's enough space for the whole table
            const spaceLeft = doc.internal.pageSize.height - data.cursor.y;
            const tableHeight =
              doc.autoTable.previous.finalY - doc.autoTable.previous.finalY;
            if (tableHeight > spaceLeft) {
              doc.addPage(); // Add a new page if there's not enough space for the whole table
              yPos = 10; // Reset Y position
            }
          },
          didDrawPage: function (data) {
            yPos = data.cursor.y + 10; // Update Y position for next content
          },
        });
      };

      const sectionData = [];

      // Equipment
      if (this.ptwData.equipment.length > 0) {
        sectionData.push({ title: "Equipment", data: this.ptwData.equipment });
      }
      // Hazard
      if (this.ptwData.hazard.length > 0) {
        sectionData.push({ title: "Hazard", data: this.ptwData.hazard });
      }
      // Isolation
      if (this.ptwData.isolation.length > 0) {
        sectionData.push({ title: "Isolation", data: this.ptwData.isolation });
      }
      // Plant Support
      if (this.ptwData.plantSupport.length > 0) {
        sectionData.push({
          title: "Plant Support",
          data: this.ptwData.plantSupport,
        });
      }

      // Jobs Hazard Analysis
      const jobDescriptionInfo = [
        ["Job Description:", this.ptwData.jha.jobDesc || "N/A"],
      ];

      // Check if there's enough space for each section's title and content
      sectionData.forEach((section) => {
        const requiredSpace = 30 + section.data.length * 10; // Space for title and content
        if (yPos + requiredSpace > 280) {
          doc.addPage();
          yPos = 10;
        }

        addTableSection(section.title, section.data);
      });

      // Check if there's enough space for the "Jobs Hazard Analysis" section
      const jobDescriptionSpace = 30 + jobDescriptionInfo.length * 10; // Space for title and content
      if (yPos + jobDescriptionSpace > 280) {
        doc.addPage();
        yPos = 10;
      }

      // Jobs Hazard Analysis
      addSectionHeading("Jobs Hazard Analysis");

      // Use autoTable to create the two-column layout for "Job Description" section
      doc.autoTable({
        startY: yPos,
        theme: "plain",
        styles: { fontSize: 10, cellPadding: 1 },
        columnStyles: {
          0: { fontStyle: "bold", cellWidth: 40 }, // Label column
          1: {}, // Value column
        },
        body: jobDescriptionInfo,
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
        headStyles: { fillColor: [22, 9, 137] }, // Customize head style
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
   // Hot Work Requirements
const hotWorkRequirements = [
  {
    title: "General Requirements",
    data: this.ptwData.hotWork?.reqGeneral,
  },
  {
    title: "Distance Requirements",
    data: this.ptwData.hotWork?.reqDistance,
  },
  {
    title: "Enclosed Equipment Requirements",
    data: this.ptwData.hotWork?.req_Enc_Equip,
  },
  {
    title: "Fire Monitor Requirements",
    data: this.ptwData.hotWork?.req_FireMon,
  },
  {
    title: "Walls Requirements",
    data: this.ptwData.hotWork?.req_Walls,
  },
];

// Add hot work requirements sections to sectionData
hotWorkRequirements.forEach((requirement) => {
  if (requirement.data && requirement.data.length > 0) {
    sectionData.push(requirement);
  }
});

// Check if there's enough space for the "Hot Work Requirements" section
const hotWorkSpace = 30 + hotWorkRequirements.length * 10; // Space for title and content
if (yPos + hotWorkSpace > 280) {
  doc.addPage();
  yPos = 10;
}

// Iterate over hotWorkRequirements and add table sections
hotWorkRequirements.forEach((section) => {
  if (section.data && section.data.length > 0) {
    // Check if there's enough space for the current section's title and content
    const sectionSpace = 30 + (section.data.length * 10); // Space for title and content
    if (yPos + sectionSpace > 280) {
      doc.addPage();
      yPos = 10;
    }

    // Add the table section
    addTableSection(section.title, section.data);
  }
});

      }
      // Add a section heading for "Hot Work"
      const workAtHeightInfo = [
  [
    "Company Name:",
    this.ptwData.wah?.companyName || "N/A",
    "Contractor Name:",
    this.ptwData.wah?.contractorName || "N/A",
  ],
  ["Work Location:", this.ptwData.wah?.workLocation || "N/A"],
  [
    "Start Date/Time:",
    this.ptwData.wah?.startDateTime || "N/A",
    "Complete Date/Time:",
    this.ptwData.wah?.completeDateTime || "N/A",
  ],
  ["Work Description:", this.ptwData.wah?.workDescription || "N/A"],
];

// Check if there's enough space for the "Work at Height" section
const workAtHeightSpace = 30 + workAtHeightInfo.length * 10; // Space for title and content
if (yPos + workAtHeightSpace > 280) {
  doc.addPage();
  yPos = 10;
}

// Add the "Work at Height" section if applicable
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
const workAtHeightSections = [
  { title: "Hazards", data: this.ptwData.wah?.waH_Hazard },
  { title: "Ladders", data: this.ptwData.wah?.waH_Ladders },
  { title: "Scaffolding", data: this.ptwData.wah?.waH_Scaffolding },
  { title: "Lift Trucks", data: this.ptwData.wah?.waH_LiftTruck },
  { title: "Man Cages", data: this.ptwData.wah?.waH_ManCage },
  { title: "Emergency Procedures", data: this.ptwData.wah?.waH_Emergency },
  { title: "Control Measures", data: this.ptwData.wah?.waH_ControlMeasure },
];

workAtHeightSections.forEach((section) => {
  if (section.data && section.data.length > 0) {
    // Check if there's enough space for the current section's title and content
    const sectionSpace = 30 + (section.data.length * 10); // Space for title and content
    if (yPos + sectionSpace > 280) {
      doc.addPage();
      yPos = 10;
    }

    // Add the table section
    addTableSection(section.title, section.data);
  }
});

}

yPos += 10; // Update yPos for the next section

// Add the "ADMIN FEEDBACK" section
// Calculate the space required for the "ADMIN FEEDBACK" section
const adminFeedbackSpace = 10 ; // 4 rows with a height of 10 each

// Check if there's enough space for the "ADMIN FEEDBACK" section
if (yPos + adminFeedbackSpace > 280) {
  doc.addPage();
  yPos = 10;
}

// Draw the "ADMIN FEEDBACK" section
doc.autoTable({
  startY: yPos,
  head: [["ADMIN FEEDBACK", ""]],
  body: [
    ["COMMENT", this.ptwData.safetyAdminComment],
    ["STATUS", this.ptwData.safetyAdminStatus],
    ["BY", this.ptwData.safetyModifiedBy],
    ["LAST MODIFIED", this.ptwData.safetyModifiedDate],
  ],
  theme: "grid",
  margin: { left: 14 },
  headStyles: { fillColor: [22, 9, 89] }, // Customize head style
  didDrawPage: function (data) {
    yPos = data.cursor.y + 10; // Update Y position for next content
  },
});

// Increment yPos to leave space before saving the document
yPos += adminFeedbackSpace;



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
