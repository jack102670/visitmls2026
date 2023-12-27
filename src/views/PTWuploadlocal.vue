<template>
  <div>
    <label class="text-gray-700 dark:text-gray-200" for="username"
      >Please upload list of local</label
    >

    <!-- component -->

    <div>
      <label
        for="dropzone-file"
        class="p-2 flex ml-0 cursor-pointer flex w-full max-w-xs flex-col items-center rounded-xl border-2 border-dashed"
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

        <h2 class="mt-2 text-xl font-medium text-gray-700 tracking-wide">
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
          v-for="(file, index) in uploadedFiles1"
          :key="file.newName || file.name"
          class="flex items-center justify-between bg-blue-100 p-4 mb-2 rounded-md"
        >
          <span class="text-blue-700">{{ file.name }}</span>
          <button
            class="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            @click="removeFile(index,1)"
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
  components: {},
  data() {
    return {
      uploadedFiles1: [],
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
      const files = event.dataTransfer.files;
      this.handleFiles(files);
    },
    handleFileChange(event) {
      const files = event.target.files;
      this.handleFiles(files);
    },
    handleFiles(files) {
      for (const file of files) {
        const maxSizeInBytes = 10 * 1024 * 1024; // 10 MB
        const allowedFormats = [
          "image/svg+xml",
          "image/png",
          "image/jpeg",
          "image/gif",
          "application/pdf",
        ];

        if (file.size <= maxSizeInBytes && allowedFormats.includes(file.type)) {
          file.newName = this.generateUniqueName(file.name);
          this.uploadedFiles1.push(file);
        } else {
          alert("Invalid file. Please check file size and format.");
        }
      }
    },
    generateUniqueName(originalName) {
      const timestamp = Date.now();
      const randomString = Math.random().toString(36).substring(7);
      const extension = originalName.split(".").pop();
      return `${timestamp}_${randomString}.${extension}`;
    },
    removeFile(index) {
      this.uploadedFiles1.splice(index, 1);
    },
  },
};
</script>
