<template>
  <div class="mx-auto items-center">
    <h2>File Upload</h2>
    <FilePond
  ref="pond"
  name="file"
  :server="null"
  :allowMultiple="true"
  :maxFileSize="'5MB'"
  :acceptedFileTypes="['image/png', 'image/jpeg', 'application/pdf']"
  :fileRenameFunction="renameFile"
  :files="files"
  @addfile="handleAddFile"
  @removefile="handleRemoveFile"
/>

    <button @click="submitFiles()">Submit</button>
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
      uniqueCode: 'BR01383', // Replace with the actual unique code
    };
  },
  methods: {
    renameFile(file) {
    return `testing${file.name}`;
  },
    handleAddFile(error, fileItem) {
      if (!error) {
        this.files.push(fileItem.file);
      }
    },
    handleRemoveFile(error, fileItem) {
      this.files = this.files.filter(file => file !== fileItem.file);
    },
    submitFiles() {
      console.log("hello");
      const formData = new FormData();
      this.files.forEach(file => {
        formData.append('file', file);
      });

      // Construct the URL with userId and uniqueCode
      const url = `http://localhost:3000/upload`;

      axios.post(url, formData, {
    
      })
      .then(response => {
        console.log('Upload successful:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  }
};
</script>
