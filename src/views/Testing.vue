<template>
  <div>
    <!-- UI elements and form display -->
    <button @click="senttheclaim">Submit Claim</button>
  </div>
</template>

<script>
import axios from 'axios';
import { formStore } from './store.js';

export default {
  name: "TestinEg",
  data() {
    return {
      formData: {
        ...formStore.getFormData(),
        fileUpload: formStore.getFormData().fileUpload.slice() // Ensure we work with a copy
      },
      userDetails: {
        userId: '12345' // Example user ID
      }
    };
  },
 
  methods: {
    fetchClaims() {
      // Retrieve the current formData
     

     
        // If no formData, retrieve the claims array from local storage
        const storedClaims = JSON.parse(localStorage.getItem("claims")) || [];
        this.claims = storedClaims;
      

      // Log the claims array to the console
      console.log("Claims:", this.claims);
    },
    async senttheclaim() {
      
      const files = this.formData.fileUpload; // Ensure formData is correctly accessible

      if (!files || !files.length) {
        console.error("No files to upload.");
        return;
      }

      const uniqueCode = this.formData.uniqueCode || 'dnvsk9092385'; // Adjust as per your actual unique code handling
      await this.uploadFilesclaims(files, "9d0da821-5de0-42e5-b268-b5e0bc40e8d1", "43209842kfjsd");
    },
    async uploadFilesclaims(files, userId, uniqueCode) {
      console.log("Files to upload:", files);
      console.log("User ID:", userId);
      console.log("Unique Code:", uniqueCode);

      const uploadEndpoint = `http://172.28.28.91:93/api/Files/MultiUploadImage/${userId}/${uniqueCode}`;
      const formData = new FormData();

      for (let i = 0; i < files.length; i++) {
        formData.append("filecollection", files[i]);
      }

      try {
        const response = await axios.post(uploadEndpoint, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Files uploaded successfully:", response.data);
      } catch (error) {
        console.error("Error uploading files:", error);
      }
    }
  }
};
</script>
