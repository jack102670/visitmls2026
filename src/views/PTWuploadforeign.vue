<template>
  <div>
    <p class="text-center font-semibold">Please upload list of foreign workers</p>
    <Div class="pt-3">
    <file-pond class=""
          name="test"
          ref="pond1"
          label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>"
          allow-multiple="true"
          accepted-file-types="image/jpeg, image/png"
          v-bind:files="myFiles"
        /></Div>
    <!-- component -->

    
  </div>
</template>
<script>
import vueFilePond from 'vue-filepond';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
);
export default {
  data() {
    return {
      myFiles: [],
     
    };
  },
  methods: {
    handleFilePondInit() {
      console.log('FilePond has initialized');

      // Example of instance method call on pond reference for the first component
      this.$refs.pond1.getFiles();

      // Example of instance method call on pond reference for the second component
    
    },
  },
  components: {
    FilePond,
  },
};
</script>
