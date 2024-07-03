<template>
  <div id="app">
    <h1>Testing API with File Upload and Vue.js</h1>

    <form @submit.prevent="sendData">
      <!-- FilePond File Input -->
      <file-pond
        name="file"
        ref="pond"
        label-idle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        @init="handleFilePondInit"
        @processfile="handleFileProcess"
      ></file-pond>
      <br /><br />

      <button type="submit">Submit</button>
    </form>
  </div>
</template>
<script>
import axios from "axios"; // Ensure Axios is imported
import vueFilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";

// Import FilePond plugins if you need any
// For example, to allow image preview, editing, etc., you can import and register FilePond plugins here.

// Create component
const FilePond = vueFilePond();

export default {
  name: "manteTesting",
  components: {
    FilePond,
  },
  methods: {
    handleFilePondInit() {
      console.log("FilePond has initialized");
      // FilePond instance is now available via this.$refs.pond
    },
    handleFileProcess(error, file) {
      if (error) {
        console.error("Oh no, something went wrong", error);
      } else {
        console.log("File processed: ", file);
        // You can also send the file directly from here if needed
      }
    },
    sendData() {
  const dataToSend = {
    date_event: "2023-04-01",
    entertainment_type: "Dinner",
    other_type_of_entertainment: "N/A",
    company_name: "Example Corp",
    venue_name: "Example Venue",
    description: "Team building dinner",
    total_fee: 15.3,
    reference_number: "MM-Finance-2024-07-1032",

    participants: [
      {
        name: "John Doe",
        emp_id: "12345",
        status: "Employee",
        company_name: "Example Corp",
      },
    ],
  };

  // Construct FormData manually
  const formData = new FormData();
  formData.append("date_event", dataToSend.date_event);
  formData.append("entertainment_type", dataToSend.entertainment_type);
  formData.append("other_type_of_entertainment", dataToSend.other_type_of_entertainment);
  formData.append("company_name", dataToSend.company_name);
  formData.append("venue_name", dataToSend.venue_name);
  formData.append("description", dataToSend.description);
  formData.append("total_fee", dataToSend.total_fee.toString()); // Ensure it's a string
  formData.append("reference_number", dataToSend.reference_number);

  // Append participants data
  formData.append("unique_code", "12345");
  dataToSend.participants.forEach((participant, index) => {
    formData.append(`participants[${index}][name]`, participant.name);
    formData.append(`participants[${index}][emp_id]`, participant.emp_id);
    formData.append(`participants[${index}][status]`, participant.status);
    formData.append(`participants[${index}][company_name]`, participant.company_name);
  });

  // Append file upload
  // const fileInput = this.$refs.pond.getFile(); // Assuming FilePond reference is set correctly
  // if (fileInput) {
  //   formData.append("unique_code", fileInput.file); // Assuming fileInput.file contains the file object
  // }

  // Sending data with axios
  // Sending data with axios
axios.post("http://172.28.28.91:86/api/User/InsertEntertainment", formData)
  .then((response) => {
    console.log("Response:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error.response ? error.response.data : "Unknown error");
  });
},

  },
};
</script>
