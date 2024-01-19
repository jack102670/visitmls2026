<template>
  <div class="mx-auto items-center">
    <h2>File Upload</h2>
    <!-- FilePond component for file upload -->
    <FilePond ref="pond" name="file" :server="null" :allowMultiple="true" :maxFileSize="'5MB'"
      :acceptedFileTypes="['image/png', 'image/jpeg', 'application/pdf']" @addfile="handleAddFile"
      @removefile="handleRemoveFile" />

    <!-- Button to trigger file submission -->
    <button @click="submitFiles">Submit</button>
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

    };
  },
  methods: {
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
    renameFile(file) {
      return `testing${file.name}`;
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
      const uniqueCode = this.generateUniqueCode();
      let formData = new FormData();
      this.files.forEach(file => {
        formData.append('filecollection', file);
      });
      // Construct the URL with userId and uniqueCode
      const url = `http://172.28.28.91:8085/api/Files/MultiUploadImage/${this.userId}/${uniqueCode}`;
      axios.post(url, formData)
        .then(response => {
          console.log('Upload successful:', response.data);
        })
        .catch(error => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Error data:', error.response.data);
            console.error('Error status:', error.response.status);
          } else if (error.request) {
            // The request was made but no response was received
            console.error('Error request:', error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error message:', error.message);
          }
        });


    }
  }
};
</script>
