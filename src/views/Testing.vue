<template>
  <div>
    <form @submit.prevent="senttheclaim">
      <!-- Form fields here -->
      <div>
        <label>Claimant Name:</label>
        <input type="text" v-model="formData.claimantName" @input="saveToLocalStorage" />
      </div>
      <div>
        <label>Company Name:</label>
        <input type="text" v-model="formData.companyName" @input="saveToLocalStorage" />
      </div>
      <div>
        <label>Department:</label>
        <input type="text" v-model="formData.department" @input="saveToLocalStorage" />
      </div>
      <div>
        <label>File Upload:</label>
        <input type="file" multiple @change="handleFileUpload" />
      </div>
      <button type="submit">Submit Claim</button>
    </form>

    <div v-if="showPopup" class="popup">
      <p>You have unsaved changes. Do you want to save them?</p>
      <button @click="saveChanges">Save</button>
      <button @click="discardChanges">Discard</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { formStore } from '../views/storetesting.js';

export default {
  name: "TestingJS",
  data() {
    return {
      formData: formStore.getFormData(),
      showPopup: false,
      userDetails: {
        userId: '12345', // Example user ID
      },
    };
  },
  methods: {
    handleFileUpload(event) {
      const files = Array.from(event.target.files);
      this.formData.fileUpload.push(...files);
      formStore.setFormData({ fileUpload: this.formData.fileUpload });
      this.saveToLocalStorage();
    },
    saveToLocalStorage() {
      formStore.setFormData(this.formData);
    },
    checkUnsavedChanges() {
      const unsaved = localStorage.getItem('formData');
      if (unsaved) {
        this.showPopup = true;
      }
    },
    saveChanges() {
      formStore.setFormData(this.formData);
      this.showPopup = false;
    },
    discardChanges() {
      formStore.clearFormData();
      this.formData = formStore.getFormData();
      this.showPopup = false;
    },
    async senttheclaim() {
      const files = this.formData.fileUpload;
      if (!files.length) {
        console.error("No files to upload.");
        return;
      }

      await this.uploadFilesclaims(files, this.userDetails.userId, this.formData.uniqueCode);
      formStore.clearFormData();
    },
    async uploadFilesclaims(files, userId, uniqueCode) {
      console.log("Files to upload:", files);
      console.log("User ID:", userId);
      console.log("Unique Code:", uniqueCode);

      const uploadEndpoint = `http://172.28.28.91:93/api/Files/MultiUploadImage/${userId}/${uniqueCode}`;
      const formData = new FormData();
      files.forEach(file => formData.append("filecollection", file));

      try {
        const response = await axios.post(uploadEndpoint, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        console.log("Files uploaded successfully:", response.data);
      } catch (error) {
        console.error("Error uploading files:", error);
      }
    },
  },
  mounted() {
    this.checkUnsavedChanges();
  },
};
</script>

<style>
.popup {
  /* Style for the popup */
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>