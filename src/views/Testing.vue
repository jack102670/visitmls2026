<template>
  <div class="mx-auto items-center">
    <h2>File Upload</h2>
    <!-- FilePond component for file upload -->
    <FilePond ref="pond" name="file" :server="null" :allowMultiple="true" :maxFileSize="'5MB'"
      :acceptedFileTypes="['image/png', 'image/jpeg', 'application/pdf']" @addfile="handleAddFile"
      :fileRenameFunction="renameFile"
      @removefile="handleRemoveFile" />

    <!-- button to trigger file submission -->
    <button @click="submitFiles" :disabled="loading">Submit</button>
    <div v-if="isLoading" class="full-screen-loader">
      <div class="spinner"></div></div>
  </div>
</template>

<script>
import axios from 'axios';
import vueFilePond from 'vue-filepond';
import 'filepond/dist/filepond.min.css';

import FilePondPluginFilePoster from 'filepond-plugin-file-poster';
import FilePondPluginFileRename from 'filepond-plugin-file-rename';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

const FilePond = vueFilePond(
  FilePondPluginFilePoster,
  FilePondPluginFileRename,
  FilePondPluginFileValidateSize,
  FilePondPluginFileValidateType
);
export default {
  name: "testingViews",
  components: {
    FilePond,
  },
  data() {
    return {
      files: [], // Store file data here
      userId: '7a7641d6-dede-4803-8b7b-93063de2f077', // Replace with the actual user ID
      loading: false,
    };
  },
  methods: {
    renameFile(file) {
    return `testing_${file.name}`;
  },
    generateUniqueCode() {
      // Use part of the userId for uniqueness, e.g., 4 characters
      const userIdFragment = this.userId.substring(0, 4);

      // Generate a random number and pad it to 2 characters
      const randomNumber = Math.floor(Math.random() * 100).toString().padStart(2, '0');

      // Create a timestamp and take the last 2 digits for uniqueness
      const timestamp = Date.now().toString().slice(-2);

      // Construct the uniqueCode
      const uniqueCode = `BR${userIdFragment}${randomNumber}${timestamp}`;
      console.log('Unique Code:', uniqueCode);
      return uniqueCode;
    },

    handleAddFile(error, fileItem) {
      if (!error) {
        console.log('Added file name:', fileItem.file.name);
        this.files.push(fileItem.file);
      }
    },

    handleRemoveFile(error, fileItem) {
      this.files = this.files.filter(file => file !== fileItem.file);
    },
    submitFiles() {
  this.loading = true; // Start loading

  // const uniqueCode = this.generateUniqueCode();
  let formData = new FormData();
  this.files.forEach(file => {
    formData.append('filecollection', file, file.name);
  });

  const url = `http://172.28.28.91:8085/api/Files/MultiUploadImage/7a7641d6-dede-4803-8b7b-93063de2f077/BR7a765869`;
  axios.post(url, formData)
    .then(response => {
      console.log('Upload successful:', response.data);
      this.loading = false; // Stop loading on success
    })
    .catch(error => {
      console.error('Error:', error);
      this.loading = false; // Stop loading on error
    });
}
  }
};
</script>

<style>
.full-screen-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.spinner {
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}
</style>
