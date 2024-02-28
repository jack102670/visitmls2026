<template>
  <div class="mx-auto">
    <h1 class="text-center text-green-500 border-l-0 text-3xl font-bold">testing</h1>
  </div>
  <div class="mx-auto items-center">
    <h2>File Upload</h2>
    <!-- FilePond component for file upload -->
    <FilePond
      ref="pond"
      :files="files"
      name="file"
      :server="null"
      :allowMultiple="true"
      :maxFileSize="'5MB'"
      :acceptedFileTypes="['image/png', 'image/jpeg', 'application/pdf']"
      @addfile="handleAddFile"
      :fileRenameFunction="renameFile"
      @removefile="handleRemoveFile"
    />

    <!-- button to trigger file submission -->
    <button @click="submitFiles" :disabled="loading">Submit</button>

    <div v-if="isLoading" class="full-screen-loader">
      <div class="spinner"></div>
    </div>

    <!-- Display retrieved files -->
    <div v-if="!isLoading && files.length > 0" class="file-list">
      <h3>Retrieved Files:</h3>
      <ul>
        <li v-for="(file, index) in files" :key="index">
          <span>{{ file.source }}</span> <!-- Display file name -->
          <button class="bg-red-500 p-1 rounded-md" @click="deleteFile(file)">Delete</button> <!-- Button to delete file -->
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import vueFilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginFileRename from "filepond-plugin-file-rename";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

const FilePond = vueFilePond(
  FilePondPluginFileRename,
  FilePondPluginFileValidateSize,
  FilePondPluginFileValidateType
);

export default {
  name: "TestingViews",
  components: {
    FilePond,
  },
  data() {
    return {
      files: [], // Store file data here
      userId: "81a30a52-96c3-485f-bd7e-f2a0b4ffcf26", // Replace with the actual user ID
      loading: false,
      isLoading: false,
    };
  },
  mounted() {
    // Retrieve files from the API when the component mounts
    this.retrieveFilesFromApi();
  },
  methods: {
    renameFile(file) {
      return `testing_${file.name}`;
    },
    handleAddFile(error, fileItem) {
      if (!error) {
        console.log("Added file name:", fileItem.file.name);
        this.files.push(fileItem.file);
      }
    },
    handleRemoveFile(error, fileItem) {
      // Remove file from the files array
      const index = this.files.findIndex((file) => file.id === fileItem.file.id);
      if (index !== -1) {
        this.files.splice(index, 1);
      }
    },
    submitFiles() {
      this.loading = true;
      let formData = new FormData();
      this.files.forEach((file) => {
        formData.append("filecollection", file, file.name);
      });
      const url = `http://172.28.28.91:8085/api/Files/MultiUploadImage/${this.userId}/BR81a36842`;
      axios
        .post(url, formData)
        .then((response) => {
          console.log("Upload successful:", response.data);
          this.loading = false;
        })
        .catch((error) => {
          console.error("Error:", error);
          this.loading = false;
        });
    },
    retrieveFilesFromApi() {
      this.isLoading = true;
      // Retrieve files from the server
      const url = `http://172.28.28.91:8085/api/Files/GetMultiImage/${this.userId}/BR81a36842`;
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          this.files = data.map((url) => ({
            source: url,
            options: {
              type: 'remote',
            },
            metadata: {}
          }));
          this.isLoading = false;
        })
        .catch((error) => {
          console.error("Error retrieving files:", error);
          this.isLoading = false;
        });
    },
    // Function to delete a file
    deleteFile(file) {
      const fileId = file.id; // Assuming you have an ID for each file
      // Make API call to delete the file
      const deleteUrl = `http://172.28.28.91:8085/api/Files/DeleteFile/${fileId}`;
      axios.delete(deleteUrl)
        .then((response) => {
          console.log("File deleted:", response.data);
          // Remove the file from the files array
          const index = this.files.findIndex((f) => f.id === fileId);
          if (index !== -1) {
            this.files.splice(index, 1);
          }
        })
        .catch((error) => {
          console.error("Error deleting file:", error);
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
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
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
