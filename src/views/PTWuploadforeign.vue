<template>
    
        <div>
              <label class="text-gray-700 dark:text-gray-200" for="username"
                >Upload file list of worker</label
              >

              <!-- component -->

              <div>
                <label
                  for="dropzone-file"
                  class="p-4 flex ml-0 cursor-pointer flex w-full max-w-xs flex-col items-center rounded-xl border-2 border-dashed"
                  :class="{
                    'border-blue-400': !isDragging,
                    'border-blue-700': isDragging,
                    'bg-white': !isDragging,
                    'bg-blue-100': isDragging,
                  }"
                  @dragover.prevent="handleDragOver"
                  @dragenter.prevent="handleDragEnter"
                  @dragleave.prevent="handleDragLeave"
                  @drop.prevent="handleDrop"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-10 w-10 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>

                  <h2
                    class="mt-2 text-xl font-medium text-gray-700 tracking-wide"
                  >
                    Click Here
                  </h2>

                  <p class="mt-2 text-gray-500 tracking-wide">
                    Upload or drag & drop your file SVG, PNG, JPG, or GIF.  
                  </p>

                  <input
                    id="dropzone-file"
                    type="file"
                    class="hidden"
                    @change="handleFileChange"
                  />
                </label>

                <!-- Display uploaded files -->
                <ul class="mt-4 mx-auto">
                  <li
                    v-for="(file, index) in uploadedFiles"
                    :key="index"
                    class="flex items-center justify-between bg-blue-100 p-4 mb-2 rounded-md"
                  >
                    <span class="text-blue-700">{{ file.name }}</span>
                    <button
                      class="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      @click="removeFile(index)"
                    >
                      Remove
                    </button>
                  </li>
                </ul>

                <!-- Display uploaded files -->
              </div>
    </div>
</template>
<script>


export default {

  components: {
  
  },
  data() {
    return {
      uploadedFiles: [],
      isDragging: false,
      
      isPreviewModalOpen: false,
    };
  },
  computed: {
    labelClasses() {
      return {
        "border-blue-400": !this.isDragging,
        "border-blue-700": this.isDragging,
        "bg-white": !this.isDragging,
        "bg-blue-100": this.isDragging,
      };
    },
  },
  methods: {
    openPreviewModal() {
      this.isPreviewModalOpen = true;
    },
    closePreviewModal() {
      this.isPreviewModalOpen = false;
    },
    handleDragOver() {
      this.isDragging = true;
    },
    handleDragEnter() {
      this.isDragging = true;
    },
    handleDragLeave() {
      this.isDragging = false;
    },
    handleDrop(event) {
      this.isDragging = false;
      // Handle the dropped files
      const files = event.dataTransfer.files;
      this.handleFiles(files);
    },
    handleFileChange(event) {
      // Handle the selected files
      const files = event.target.files;
      this.handleFiles(files);
    },
    handleFiles(files) {
      // Process and store the files
      for (const file of files) {
        this.uploadedFiles.push(file);
      }
    },
    removeFile(index) {
      this.uploadedFiles.splice(index, 1);
    },
  },
};
</script>