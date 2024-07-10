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
          console.log("Starting file upload to temp storage");

          const formData = new FormData();
          formData.append(fieldName, file, file.name);

          const request = new XMLHttpRequest();
          request.open("POST", "http://localhost:3000/upload/temp");

          request.upload.onprogress = (e) => {
            progress(e.lengthComputable, e.loaded, e.total);
          };

          request.onload = () => {
            if (request.status >= 200 && request.status < 300) {
              const response = JSON.parse(request.responseText);
              console.log("File uploaded to temp storage:", response.tempPath);
              load(response.tempPath);
            } else {
              error(`Upload failed with status: ${request.status}`);
            }
          };

          request.onerror = () => {
            error("Upload failed due to an error");
          };

          request.send(formData);

          return {
            abort: () => {
              request.abort();
              console.log("Upload aborted by the user.");
              abort("Upload aborted by the user.");
            }
          };
        },
        revert: (uniqueFileId, load, error) => {
          console.log("Reverting upload, file id:", uniqueFileId);

          const request = new XMLHttpRequest();
          request.open("DELETE", "http://localhost:3000/upload/temp");

          request.onload = () => {
            if (request.status >= 200 && request.status < 300) {
              console.log("File reverted successfully:", uniqueFileId);
              load();
            } else {
              error(`Revert failed with status: ${request.status}`);
            }
          };

          request.onerror = () => {
            error("Revert failed due to an error");
          };

          request.setRequestHeader("Content-Type", "application/json");
          request.send(JSON.stringify({ tempPath: uniqueFileId }));

          return {
            abort: () => {
              request.abort();
              console.log("Revert aborted by the user.");
            }
          };
        }
      },
    };
  },
  methods: {
    handleFilePondInit() {
      console.log("FilePond has initialized");
    },
    handleProcessFile(error, file) {
      if (error) {
        console.error("Error during upload:", error);
      } else {
        console.log("File uploaded:", file);

        // Send request to process file
        fetch("http://localhost:3000/upload/process", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ path: file.serverId })
        })
          .then(response => response.json())
          .then(data => {
            console.log("File processed successfully:", data);
          })
          .catch(err => {
            console.error("File processing failed:", err);
          });
      }
    }
  }
};
</script>
