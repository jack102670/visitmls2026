<template>
  <div>
    <FilePond
      ref="pond"
      name="filecollection"
      label-idle="Drop files here"
      :allow-multiple="true"
      :server="serverOptions"
      :oninit="handleFilePondInit"
      :onprocessfile="handleProcessFile"
      accepted-file-types="image/jpeg, image/png"
    />
  </div>
</template>

<script>
// Import FilePond styles
import "filepond/dist/filepond.min.css";

import vueFilePond from "vue-filepond";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
// Other plugin imports...

// Create the FilePond component with plugins
const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
  // Other plugins...
);

export default {
  name: "TestingS",
  components: {
    FilePond,
  },
  data() {
    return {
      serverOptions: {
        process: (fieldName, file, metadata, load, error, progress, abort) => {
          // Here you can interact with the file or metadata before upload
          // For example, you could set up the FormData instance here and perform the upload

          const formData = new FormData();
          formData.append(fieldName, file, file.name);

          const request = new XMLHttpRequest();
          request.open("POST", "http://localhost:3000/upload");

          // Upload progress
          request.upload.onprogress = (e) => {
            progress(e.lengthComputable, e.loaded, e.total);
          };

          // Successful upload
          request.onload = function () {
  if (request.status >= 200 && request.status < 300) {
    load(request.responseText);
  } else {
    // Log the error or display a message to the user
    console.error("Upload failed with status: " + request.status);
    error("Upload failed with status: " + request.status);
  }
};

// Improved abort function
return {
  abort: () => {
    request.abort();
    console.log("Upload aborted by the user.");
    abort("Upload aborted by the user.");
  }
};
        },
      },
    };
  },
  methods: {
    handleFilePondInit() {
      console.log("FilePond has initialized");
    },
    handleProcessFile(error, file) {
      if (error) {
        console.error('Error during upload:', error);
      } else {
        console.log('File uploaded:', file);
        // Clear FilePond instance here if needed
      }
    }
  },
};
</script>
