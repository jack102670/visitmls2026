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
    const formData = new FormData(); // Move FormData creation outside the loop

    if (fileInput.length > 0) {
      fileInput.forEach((fileItem) => {
        formData.append("filecollection", fileItem.file); // Append each file to the FormData
      });

      // Move fetch call outside the loop
      fetch('http://172.28.28.91:97/api/Files/MultiUploadImage/9d0da821-5de0-42e5-b268-b5e0bc40e8d1/LT9d0d8835man', {
        method: 'POST',
        body: formData,
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Upload failed');
        }
        return response.json();
      })
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