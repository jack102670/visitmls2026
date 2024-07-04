<template>
  <div>
    <FilePond
      ref="pond"
      label-idle="Drop files here or Browse"
      allow-multiple="false"
      accepted-file-types="image/jpeg, image/png"
      v-on:init="handleFilePondInit"
    />
    <button @click="uploadFile">Upload File</button>
  </div>
</template>



<script>
// Import FilePond styles
import 'filepond/dist/filepond.min.css';



import vueFilePond from "vue-filepond";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
// Other plugin imports...

// Create the FilePond component with plugins
const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  // Other plugins...
);

export default {
  name: 'TestingS',
  components: {
    FilePond
  },
  methods: {
    handleFilePondInit() {
      console.log('FilePond has initialized');
    },
    uploadFile() {
   const fileInput = this.$refs.pond.getFiles();
console.log(fileInput);

      if (fileInput.length > 0) {
        const formData = new FormData();
        formData.append("file", fileInput[0].file);

        // Using fetch to send the file to your API
        fetch('http://localhost:3000/upload', {
          method: 'POST',
          body: formData,
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      }
    }
  }
};
</script>