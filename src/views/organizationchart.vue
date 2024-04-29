<template>
  <div>
    <h1
      style="
        background-color: #032539;
        color: #fef9ef;
        text-align: center;
        padding: 1rem;
        font-size: 1.5em;
        z-index: 1;
      "
    >
      Organization Chart
    </h1>
    <div class="space-x-3 p-1 relative space-y-1">
      <button
        class="border rounded-lg p-1.5 border-gray-500 text-gray-800 hover:text-slate-900 hover:bg-slate-200"
        @click="fitChart"
      >
        Fit to the screen
      </button>

      <button
        class="border rounded-lg p-1.5 border-gray-500border border-gray-500 text-gray-800 hover:text-slate-900 hover:bg-slate-200"
        @click="cycleLayout"
      >
        Change Layout
      </button>

      <button
        class="border rounded-lg p-1.5 border-gray-500border border-gray-500 text-gray-800 hover:text-slate-900 hover:bg-slate-200"
        @click="fullscreen"
      >
        Full Screen
      </button>
      <button
        class="border rounded-lg p-1.5 border-gray-500border border-gray-500 text-gray-800 hover:text-slate-900 hover:bg-slate-200"
        @click="expandAllNodes"
      >
        Expand All
      </button>
      <button
        class="border rounded-lg p-1.5 border-gray-500border border-gray-500 text-gray-800 hover:text-slate-900 hover:bg-slate-200"
        @click="collapseAllNodes"
      >
        Collapse All
      </button>
      <!-- Export buttons -->
      <button
        class="border rounded-lg p-1.5 border-gray-500 text-gray-800 hover:text-slate-900 hover:bg-slate-200"
        @click="exportCurrentImage"
      >
        Export Current
      </button>

      <button
        class="border rounded-lg p-1.5 border-gray-500 text-gray-800 hover:text-slate-900 hover:bg-slate-200"
        @click="exportFullImage"
      >
        Export Full
      </button>

      <button
        class="border rounded-lg p-1.5 border-gray-500 text-gray-800 hover:text-slate-900 hover:bg-slate-200"
        @click="exportSvg"
      >
        Export SVG
      </button>

      <button
        class="border rounded-lg p-1.5 border-gray-500 text-gray-800 hover:text-slate-900 hover:bg-slate-200"
        @click="exportPdf"
      >
        Export PDF
      </button>
      <button
        @click="showAddNodeModal"
        class="bg-[#032539] hover:bg-[#032539c7] text-[#FBF3F2] border rounded-lg p-1.5"
      >
        Add Node to Root
      </button>
      <div class="flex pt-1 search:right-2 search:top-2 search:absolute">
        <input
          class="p-2 rounded"
          type="text"
          placeholder="Search..."
          v-model="searchQuery"
          @input="filterChart"
        />
      </div>
    </div>
    <div
      v-if="isAddNodeModalOpen"
      class="modal fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center"
      @click.self="closeAddNodeModal"
    >
    <div
  class="modal-content bg-white rounded-lg p-8"
  style="max-height: calc(100vh - 20px); overflow-y: auto;"
>
  <span
    @click="closeAddNodeModal"
    class="close absolute top-0 right-0 mt-4 mr-4 text-gray-600 cursor-pointer"
    >&times;</span
  >
  <h2 class="text-xl font-bold mb-4">Add Node</h2>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
  >
    <div class="mb-4">
      <label for="nodeId" class="block text-gray-700 font-bold mb-2"
        >Node ID:</label
      >
      <input
        type="text"
        id="nodeId"
        v-model="newNode.id"
        class="border rounded-md px-4 py-2 w-full"
      />
    </div>
    <div class="mb-4">
      <label for="nodeName" class="block text-gray-700 font-bold mb-2"
        >Node Name:</label
      >
      <input
        type="text"
        id="nodeName"
        v-model="newNode.name"
        class="border rounded-md px-4 py-2 w-full"
      />
    </div>
    <div class="mb-4">
      <label for="nodeName" class="block text-gray-700 font-bold mb-2"
        >Parent Id:</label
      >
      <!-- Search input -->

      <input
        id="autocompleteInput"
        placeholder="Select country name"
        class="px-5 py-3 w-full border border-gray-300 rounded-md"
        v-model="newNode.parentId"
        @keyup="onKeyUp"
      />
      <div
        id="dropdown"
        class="w-80 h-60 border border-gray-300 rounded-md bg-white absolute overflow-y-auto"
        v-show="showDropdown"
      >
        <div
          v-for="item in filteredData"
          :key="item.name"
          @click="selectOption(item.id)"
          class="px-5 py-3 border-b border-gray-200 text-stone-600 cursor-pointer hover:bg-slate-100 transition-colors overflow-y-auto"
        >
          {{ item.id }} - {{ item.name }}
        </div>
      </div>
    </div>
    <div class="mb-4">
      <label for="positionCode" class="block text-gray-700 font-bold mb-2"
        >Position Code:</label
      >
      <input
        type="text"
        id="positionCode"
        v-model="newNode.positionCode"
        class="border rounded-md px-4 py-2 w-full"
      />
    </div>
    <div class="mb-4">
      <label for="positionTitle" class="block text-gray-700 font-bold mb-2"
        >Position Title:</label
      >
      <input
        type="text"
        id="positionTitle"
        v-model="newNode.positionTitle"
        class="border rounded-md px-4 py-2 w-full"
      />
    </div>
    <div class="mb-4">
      <label for="emailAddress" class="block text-gray-700 font-bold mb-2"
        >Email Address:</label
      >
      <input
        type="email"
        id="emailAddress"
        v-model="newNode.emailAddress"
        class="border rounded-md px-4 py-2 w-full"
      />
    </div>
    <div class="mb-4">
      <label for="phoneNumber" class="block text-gray-700 font-bold mb-2"
        >Phone Number:</label
      >
      <input
        type="text"
        id="phoneNumber"
        v-model="newNode.phoneNumber"
        class="border rounded-md px-4 py-2 w-full"
      />
    </div>
    <div class="mb-4">
      <label for="homeAddress" class="block text-gray-700 font-bold mb-2"
        >Home Address:</label
      >
      <input
        type="text"
        id="homeAddress"
        v-model="newNode.homeAddress"
        class="border rounded-md px-4 py-2 w-full"
      />
    </div>
    <div class="mb-4">
      <label for="spouse" class="block text-gray-700 font-bold mb-2"
        >Spouse:</label
      >
      <input
        type="text"
        id="spouse"
        v-model="newNode.spouse"
        class="border rounded-md px-4 py-2 w-full"
      />
    </div>
    <div class="mb-4">
      <label for="department" class="block text-gray-700 font-bold mb-2"
        >Department:</label
      >
      <input
        type="text"
        id="department"
        v-model="newNode.department"
        class="border rounded-md px-4 py-2 w-full"
      />
    </div>
  </div>

  <button
    @click="addNodeAndSave"
    class="bg-[#FA991C] hover:bg-[#FA991C] text-white font-bold py-2 px-4 rounded"
  >
    Add Node
  </button>
</div>

    

    </div>
    <!-- Your template -->
    <!-- Your template -->
    <div
      v-if="isClickModal"
      class="modal fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center"
      @click.self="closeClickModal"
    >
      <div class="modal-content bg-white rounded-lg p-8">
        <!-- Modal header -->
        <!-- Your existing modal header content -->

        <!-- Modal content -->
        <div class="mb-4">
          <label for="nodeId" class="block text-gray-700 font-bold mb-2"
            >Node ID:</label
          >
          <input
            type="text"
            id="nodeId"
            v-model="clickedNodeData.id"
            :disabled="!isEditMode"
            class="border rounded-md px-4 py-2 w-full"
          />
        </div>
        <div class="mb-4">
          <label for="nodeName" class="block text-gray-700 font-bold mb-2"
            >Node Name:</label
          >
          <input
            type="text"
            id="nodeName"
            v-model="clickedNodeData.name"
            :disabled="!isEditMode"
            class="border rounded-md px-4 py-2 w-full"
          />
        </div>
        <div class="mb-4">
          <label for="nodeParentId" class="block text-gray-700 font-bold mb-2"
            >Parent ID:</label
          >
          <input
            type="text"
            id="nodeParentId"
            v-model="clickedNodeData.parentId"
            :disabled="!isEditMode"
            class="border rounded-md px-4 py-2 w-full"
          />
        </div>
        <!-- Add/Edit node button -->
        <button
          @click="toggleEditMode"
          class="bg-[#FA991C] hover:bg-[#FA991C] text-white font-bold py-2 px-4 rounded"
        >
          {{ isEditMode ? "Save" : "Edit" }}
          <!-- Change button text based on edit mode -->
        </button>

        <!-- Delete node button -->
        <button
          @click="deleteNode(clickedNodeData.id)"
          class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Delete
        </button>
      </div>
    </div>

    <div ref="chartContainer"></div>
  </div>
</template>

<script>
import axios from "axios";
import { OrgChart } from "d3-org-chart";
import FormData from 'form-data';



// import employeesData from '../views/data'
import html2canvas from "html2canvas";
// import { POSITION } from "html2canvas/dist/types/css/property-descriptors/position";
import jsPDF from "jspdf";

export default {
  name: "TestComponent",
  data() {
    return {
      keyword: "",
      isAddNodeModalOpen: false,
      newNode: {
  id: "",
  name: "",
  parentId: "",
  reporting_to: "",
  position_code: "",
  position_title: "",
  email_address: "",
  phone_number: "",
  home_address: "",
  spouse: "",
  department: ""
  // Add more properties as needed
},
      clickedNodeData: {
        id: "",
        name: "",
        parentId: "",
      },
      data: [],
      chartReference: null,
      layoutIndex: 0,
      layoutPositions: ["top", "right", "left", "bottom"],
      isFullscreen: false,
      highlightedNodeId: null,
      searchQuery: "",
      isChartMinimized: false,
      chart: null,
      isClickModal: false,
      isEditMode: false,
      showDropdown: false,
    };
  },
  computed: {
    filteredData() {
      return this.data.filter((item) =>
        item.name.toUpperCase().includes(this.newNode.parentId.toUpperCase())
      );
    },

    filteredCountries() {
      return this.data.filter((item) =>
        item.name.toLowerCase().includes(this.keyword.toLowerCase())
      );
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    onKeyUp() {
      this.showDropdown = true;
    },
    selectOption(selectedOption) {
      this.newNode.parentId = selectedOption;
      this.showDropdown = false;
    },

    toggleEditMode() {
      if (this.isEditMode) {
        this.saveNode(); // Call saveNode method if in edit mode
      } else {
        this.isEditMode = !this.isEditMode; // Toggle edit mode
      }
    },
    async addNodeAndSave() {
  try {
    // First, add the node to the organization chart
    if (this.chartReference) {
      // Add the node to the chart
      this.chartReference.addNode(this.newNode).render();
    }

    // Then, save the node data to the database
    const formData = new FormData();
    formData.append('emp_id', this.newNode.id);
    formData.append('name', this.newNode.name);
    formData.append('reporting_to', this.newNode.reporting_to);
    formData.append('position_code', this.newNode.position_code);
    formData.append('position_title', this.newNode.position_title);
    formData.append('email_address', this.newNode.email_address);
    formData.append('phone_number', this.newNode.phone_number);
    formData.append('home_address', this.newNode.home_address);
    formData.append('spouse', this.newNode.spouse);
    formData.append('department', this.newNode.department);

    // Make the POST request using axios
    const uploadResponse = await axios.post(
      'http://172.28.28.91:97/api/Admin/InsertNewEmployee',
      formData,
    );

    console.log('Node added and saved successfully:', uploadResponse.data);
    // Reset the form values
    this.newNode = {
      id: "",
      name: "",
      parentId: "",
      reporting_to: "",
      position_code: "",
      position_title: "",
      email_address: "",
      phone_number: "",
      home_address: "",
      spouse: "",
      department: ""
      // Add other properties as needed
    };
  } catch (error) {
    console.error('Error adding and saving node:', error);
    // Handle errors
  }
},

  
    async deleteNode(nodeId) {
  try {
    // Send a request to your API to delete the node using the nodeId
    await axios.delete(`http://172.28.28.91:97/api/Admin/DeleteEmployee/${nodeId}`);
    
    // If the deletion is successful, remove the node from the data array
    const nodeIndex = this.data.findIndex((node) => node.id === nodeId);
    if (nodeIndex !== -1) {
      this.data.splice(nodeIndex, 1);
      
      // Re-render the chart to reflect the changes
      this.renderChart();
      
      // Close any modal or reset any state related to the deleted node if needed
      this.isClickModal = false;
    } else {
      console.error("Node not found:", nodeId);
    }
  } catch (error) {
    console.error("Error deleting node:", error);
    // Handle errors, such as displaying an error message to the user
  }
},


    closeClickModal() {
      this.isClickModal = false;
      this.isEditMode = false;
    },
    addNode() {
      // Here you can implement the logic to add the node based on this.clickedNodeData
      // For example, you can call an API to add the node to your data source
      console.log("Adding node:", this.clickedNodeData);

      // After adding the node, you might want to close the modal
      this.isClickModal = false;
    },
    fetchData() {
      axios
        .get("http://172.28.28.91:97/api/User/GetAllEmployees")
        .then((response) => {
          console.log("Fetched data:", response.data);

          // Extract the result array from the response data
          const resultArray = response.data.result;

          // Transform keys of the items in the result array
          const modifiedData = resultArray.map((item) => ({
            id: item.emp_id,
            parentId: item.reporting_to,
            name: item.name,
            positionName: item.position_title,
            phone: item.phone_number,
            email: item.email_address,
            team: "", // You may need to provide a value for the team key
            location: item.home_address,
            department: item.department,
            description: "", // You may need to provide a description value
            imageUrl: item.profile_picture, // You may need to provide an image URL
          }));

          console.log("Fetched and modified data:", modifiedData);

          // Assign the modified data to your component's data property
          this.data = modifiedData;

          // Perform any other actions with the data
          // For example, render a chart
          console.log("Value of this selepas fetcg:", this.data);
          this.renderChart();
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });

      // Promise.resolve(employeesData)
      //   .then((data) => {
      //     console.log('Fetched data:', data)
      //     this.data = data
      //     this.renderChart()
      //   })
      //   .catch((error) => {
      //     console.error('Error fetching data:', error)
      //   })
    },
    renderChart() {
      console.log("renderChart method called");
      console.log("Value of this:", this);
      // Existing logic of the renderChart method...

      if (!this.chartReference) {
        this.chartReference = new OrgChart();
      }

      this.chartReference
        .container(this.$refs.chartContainer)
        .data(this.data)
        .nodeWidth(() => 250)
        .initialZoom(0.7)
        .nodeHeight(() => 175)
        .childrenMargin(() => 40)
        .compactMarginBetween(() => 15)
        .compactMarginPair(() => 80)
        .nodeContent((d) => {
          return `
              <div style="padding-top:30px;background-color:none;margin-left:1px;height:${
                d.height
              }px;border-radius:2px;overflow:visible">
                <div style="height:${
                  d.height - 32
                }px;padding-top:0px;background-color:white;border:1px solid lightgray;">
  
                  <img src=" ${
                    d.data.imageUrl
                  }" style="margin-top:-30px;margin-left:${
                    d.width / 2 - 30
                  }px;border-radius:100px;width:60px;height:60px;" />
  
                 <div style="margin-right:10px;margin-top:1px;float:right;font-size:10px">${
                   d.data.id
                 }</div>
                 
                 <div style="margin-top:-30px;background-color:#293171;height:10px;width:${
                   d.width - 2
                 }px;border-radius:1px"></div>
  
                 <div style="padding:20px; padding-top:35px;text-align:center">
                     <div style="color:#111672;font-size:10px;font-weight:bold"> ${
                       d.data.name
                     } </div>
                     <div style="color:#404040;font-size:10px;margin-top:4px"> ${
                       d.data.positionName
                     } </div>
                 </div> 
                 <div style="display:flex;justify-content:space-between;padding-left:15px;padding-right:15px;">
                   <div > Manages:  ${d.data._directSubordinates} 👤</div>  
                   <div > Oversees: ${d.data._totalSubordinates} 👤</div>    
                 </div>
                </div>     
        </div>
    `;
        })
        .layout(this.layoutPositions[this.layoutIndex])
        .render();
      this.chartReference.onNodeClick((node) => {
        // Assuming `node` contains the data directly
        this.clickedNodeData = {
          id: node.data.id,
          parentId: node.data.parentId,
          name: node.data.name,
          positionName: node.data.positionName,
          phone: node.data.phone,
        };

        // Log the clicked node data for debugging
        console.log("Clicked Node Data:", this.clickedNodeData);

        // Open the add node modal
        this.isClickModal = true;
      });

      console.log("Chart rendered:", this.chartReference);
    },
    fitChart() {
      if (this.chartReference) {
        this.chartReference.fit();
      }
    },
    cycleLayout() {
      this.layoutIndex = (this.layoutIndex + 1) % this.layoutPositions.length;

      this.renderChart();
    },
    fullscreen() {
      const chartContainer = this.$refs.chartContainer;
      if (!this.isFullscreen) {
        if (chartContainer.requestFullscreen) {
          chartContainer.requestFullscreen();
        } else if (chartContainer.mozRequestFullScreen) {
          /* Firefox */
          chartContainer.mozRequestFullScreen();
        } else if (chartContainer.webkitRequestFullscreen) {
          /* Chrome, Safari & Opera */
          chartContainer.webkitRequestFullscreen();
        } else if (chartContainer.msRequestFullscreen) {
          /* IE/Edge */
          chartContainer.msRequestFullscreen();
        }
        // Listen for the keydown event on the document
        document.addEventListener("keydown", this.handleKeyDown);
      }
      // Toggle isFullscreen value
      this.isFullscreen = !this.isFullscreen;
      this.isFullscreen = false;
    },

    toggleHighlight(nodeId) {
      if (this.highlightedNodeId === nodeId) {
        this.clearHighlighting();
      } else {
        this.setHighlighted(nodeId);
      }
    },
    setHighlighted(nodeId) {
      // Your code to highlight the specified node
      // Example:
      // Update node class, change color, etc.
      this.highlightedNodeId = nodeId;
      // Trigger re-rendering of the chart
      this.renderChart();
    },
    clearHighlighting() {
      // Your code to clear highlighting
      // Example:
      // Reset all nodes to default state
      this.highlightedNodeId = null;
      // Trigger re-rendering of the chart
      this.renderChart();
    },
    filterChart(event) {
      const value = event.target.value.toLowerCase();
      const chart = this.chartReference;

      // Clear previous highlighting
      chart.clearHighlighting();

      // Get chart nodes
      const data = chart.data();
      let foundNode = null;

      // Un-minimize the chart if it's currently minimized

      // Loop over data and check if input value matches any name
      data.forEach((d) => {
        if (value !== "" && d.name && d.name.toLowerCase().includes(value)) {
          // If matches, mark node as highlighted
          d._highlighted = true;
          d._expanded = true;
          // Keep track of the first matching node found
          if (!foundNode) {
            foundNode = d;
          }
        }
      });

      // Update data and re-render the chart
      chart.data(data).render().fit();

      // If a matching node is found, navigate to it
      if (foundNode) {
        // Delay focusing on the node to ensure it's rendered
        setTimeout(() => {
          const nodeElement = document.querySelector(
            `[data-node-id="${foundNode.id}"]`
          );
          if (nodeElement) {
            nodeElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center",
            });
          }
        }, 200); // Adjust delay as needed
      }
    },
    expandAllNodes() {
      if (this.chartReference) {
        this.chartReference.expandAll().fit();
      }
    },
    collapseAllNodes() {
      if (this.chartReference) {
        this.chartReference.collapseAll().fit();
      }
    },
    exportCurrentImage() {
      console.log("Exporting current image...");
      if (this.chartReference) {
        this.chartReference.exportImg({
          save: true,
          format: "png",
          quality: 1,
          full: false,
          background: "#ffffff",
          width: null,
          height: null,
          filename: "chart",
          style: {
            "font-family": "Arial",
            "font-size": "12px",
            "text-align": "left",
            "background-color": "#ffffff",
          },
        });
      }
    },

    exportFullImage() {
      console.log("Exporting full image...");
      if (this.chartReference) {
        this.chartReference.exportImg({
          save: true,
          format: "png",
          quality: 1,
          full: true,
          background: "#ffffff",
          width: null,
          height: null,
          filename: "chart",
          style: {
            "font-family": "Arial",
            "font-size": "12px",
            "text-align": "left",
            "background-color": "#ffffff",
          },
        });
      }
    },
    exportSvg() {
      if (this.chartReference) {
        this.chartReference.exportSvg();
      }
    },
    exportPdf() {
      const chartContainer = this.$refs.chartContainer;

      if (chartContainer) {
        html2canvas(chartContainer).then((canvas) => {
          const imgData = canvas.toDataURL("image/jpeg", 1.0);
          const pdf = new jsPDF();
          const width = pdf.internal.pageSize.getWidth();
          const height = (canvas.height * width) / canvas.width;
          pdf.addImage(imgData, "JPEG", 0, 0, width, height);
          pdf.save("chart.pdf");
        });
      }
    },
    showAddNodeModal() {
      this.isAddNodeModalOpen = true;
    },
    closeAddNodeModal() {
      this.isAddNodeModalOpen = false;
    },
    addNodeToRoot() {
  console.log("addNodeToRoot method called");
  if (this.chartReference) {
    // Call the method to add a node to the root with the values from the form
    this.chartReference.addNode(this.newNode).render();
    // Reset the form values
    this.newNode = {
      id: "",
      name: "",
      parentId: "",
      // Reset other properties as needed
    };
    // Close the modal
    this.closeAddNodeModal();
  }
},

  },
};
</script>
<style scoped>
#dropdown {
  max-height: 200px; /* Adjust this value to fit your needs */
}
</style>
