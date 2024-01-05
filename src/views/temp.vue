<template>
  <div class="container mx-auto">
    <div
      class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8"
    >
      <section
        class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800"
      >
        <div>
          <h2
            class="text-lg font-semibold text-slate-200 p-1 rounded capitalize bg-[#160959e2] dark:text-white"
          >
            Job Hazard Analysis
          </h2>
        </div>

        <form>
          <div
            class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3 mx-auto cursor-pointer flex w-full"
          >
            <!-- ... (existing form fields) ... -->

            <!-- File Upload Section -->
            <div class="mt-4">
              <label class="text-gray-700 dark:text-gray-200" for="fileUpload">
                Upload File
              </label>
              <input
                type="file"
                id="fileUpload"
                @change="handleFileUpload"
                class="mt-2"
              />
            </div>

            <!-- ... (existing code for tasks) ... -->

          </div>


          <!-- File Upload Button -->
          <div class="mt-4">
            <button @click.prevent="uploadFile" class="bg-green-500 text-white px-4 py-2 rounded">
              Upload File
            </button>
          </div>
        </form>

        <div class="flex justify-end mt-6">
          <!-- ... (existing code) ... -->
        </div>
      </section>
    </div>
  </div>
</template>

  
  <script>
  import axios from 'axios';
  
  export default {
    name: "tempView",
    data() {
      return {
        // ... (existing data properties)
        selectedFile: null,
        fileUploadProgress: 0,
      };
    },
    computed: {
      formData() {
        return {
          // ... (existing form data properties)
          selectedFile: this.selectedFile,
        };
      },
    },
    watch: {
      formData: {
        handler(newFormData) {
          // Emit an event to the parent with the updated form data
          this.$emit("form-updated", newFormData);
        },
        deep: true,
      },
    },
    methods: {
      // ... (existing methods)
  
      handleFileUpload(event) {
        const file = event.target.files[0];
        this.selectedFile = file;
        console.log("Selected File:", this.selectedFile);
      },
  
      async uploadFile() {
        try {
          const formData = new FormData();
          formData.append('file', this.selectedFile);
  
          const response = await axios.post(
            'http://localhost:3000/ptw',
            formData,
            {
              onUploadProgress: (progressEvent) => {
                this.fileUploadProgress = Math.round(
                  (progressEvent.loaded / progressEvent.total) * 100
                );
              },
            }
          );
  
          console.log('File Upload Response:', response.data);
        } catch (error) {
          console.error('Error uploading file:', error);
        } finally {
          // Clear selected file after upload
          this.selectedFile = null;
          this.fileUploadProgress = 0;
        }
      },
    },
  };
  </script>
  