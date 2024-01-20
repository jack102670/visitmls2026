<!-- FormPage1.vue -->
<template>
  <div class="container mx-auto">
    <div
      class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8">
      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Upload Files
        </h2>

        <form>
          <div class="grid grid-cols-2 gap-6 pt-5">
            <div>
              <Div class="pt-3">
                <FilePond ref="pond" name="file" :server="null" :allowMultiple="true" :maxFileSize="'5MB'"
                  :acceptedFileTypes="[
                    'image/png',
                    'image/jpeg',
                    'application/pdf',
                    'application/vnd.ms-excel',
                    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                  ]" @addfile="handleAddFile" @removefile="handleRemoveFile" />
              </Div>
              <!-- component -->
            </div>
            <div>
              <Div class="pt-3">
                <FilePond ref="pond" name="file" :server="null" :allowMultiple="true" :maxFileSize="'5MB'"
                  :acceptedFileTypes="[
                    'image/png',
                    'image/jpeg',
                    'application/pdf',
                    'application/vnd.ms-excel',
                    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                  ]" @addfile="handleAddFile" @removefile="handleRemoveFile" />
              </Div>
              <!-- component -->
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
import { store } from "../views/store.js";

import vueFilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";

import FilePondPluginFilePoster from "filepond-plugin-file-poster";
import FilePondPluginFileRename from "filepond-plugin-file-rename";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

const FilePond = vueFilePond(
  FilePondPluginFilePoster,
  FilePondPluginFileRename,
  FilePondPluginFileValidateSize,
  FilePondPluginFileValidateType
);

export default {
  components: {
    FilePond,
  },
  data() {
    return {
      files: [],

    };
  },
  computed: {
    formData() {
      return {
        localFile: this.localFile,
        foreignFile: this.foreignFile,
        // Add other properties as needed
      };
    },
  },
  watch: {
    formData: {
      handler(newFormData) {
        // Emit an event to the parent with the updated form data
        this.$emit("submit-form", newFormData);
      },
      deep: true,
    },
  },
  methods: {
    handleAddFile(error, fileItem) {
      if (!error) {
        this.files.push(fileItem.file);
        this.$emit('update-files', this.files); // Emitting the updated files array
      }
    },

    


    handleRemoveFile(error, fileItem) {
      this.files = this.files.filter((file) => file !== fileItem.file);
    },
    submitForm() {
      // Emit an event with the uploaded files to the parent component
      this.$emit("submit-form", this.files);
    },

  },
  mounted() {
    this.branch = store.getSelectedLocation();
    this.userDetails = store.getSession().userDetails;

  },
};
</script>
