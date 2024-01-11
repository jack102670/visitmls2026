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

        <file-pond
            name="test"
            ref="pond"
            label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>"
            allow-multiple="true"
            accepted-file-types="image/jpeg, image/png"
            v-bind:files="myFiles"
    />
        <div class="flex justify-end mt-6">
          <!-- ... (existing code) ... -->
        </div>
      </section>
    </div>
  </div>
  <ptw6/>
</template>

<script>
 import vueFilePond from 'vue-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import FilePond plugins
// Please note that you need to install these plugins separately

// Import image preview plugin styles
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'

// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import ptw6 from "../views/PTWpage6.vue"

// Create component
const FilePond = vueFilePond(
        FilePondPluginFileValidateType,
        FilePondPluginImagePreview
)
export default {
  name: "tempView",
  data: function () {
            return { myFiles: [] };
        },
        methods: {
            handleFilePondInit: function () {
                console.log('FilePond has initialized');

                // example of instance method call on pond reference
                this.$refs.pond.getFiles();
            },
        },
        components: {
            FilePond,
            ptw6,
        },
    };
</script>
