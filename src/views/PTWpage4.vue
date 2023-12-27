<!-- FormPage1.vue -->
<template>
  <div class="container mx-auto">
    <div
      class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
    >
      <section
        class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800"
      >
        <h2
          class="text-lg font-semibold text-gray-700 capitalize dark:text-white"
        >
          Upload Files
        </h2>

        <form>
          <div class="grid grid-cols-2 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-gray-700 dark:text-gray-200 " for="username"
                >1. Please upload list of local workers</label
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
                <ul class="mt-4">
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

            <div>
              <label class="text-gray-700 dark:text-gray-200" for="username"
                >2. Please upload list of foreign workers</label
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
                <ul class="mt-4">
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
          </div>
        </form>
        <!-- <div class="flex justify-between mt-6">
          <button
            @click="goBack"
            class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            back
          </button>
          <button
            v-if="addExtraPage"
            @click="nextPage"
            class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Next
          </button>
        </div> -->
      </section>
    </div>

    <!-- add more fields as needed -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        field1: "",

        // add more fields as needed
      },
      addExtraPage: false,
    };
  },
  methods: {
    updateAddExtraPage(value) {
      this.addExtraPage = value;
    },

    nextPage() {
      this.$emit("next-page"); // Pass formData when emitting "Next" event
    },
    goBack() {
      this.$emit("go-back"); // Emit an event when the "Next" button is clicked
    },
  },
};
</script>
