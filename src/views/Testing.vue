<template>
  <div>
    <FilePond :files="files" @update:files="updateFiles" />
    <div v-if="imageUrl">
      <img :src="imageUrl" alt="Uploaded Image" style="max-width: 200px; max-height: 200px;">
    </div>
  </div>
</template>

<script>
// Import Vue and FilePond
import { FilePond, registerPlugin } from 'vue-filepond';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';

// Register FilePond plugins
registerPlugin(
  FilePondPluginFileEncode,
  FilePondPluginFileValidateType,
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginImageCrop,
  FilePondPluginImageResize,
  FilePondPluginImageTransform
);

export default {
  name: 'TestingD',
  components: {
    FilePond
  },
  data() {
    return {
      files: [],
      imageUrl: ''
    };
  },
  methods: {
    updateFiles(files) {
      this.files = files;
      if (files.length > 0) {
        const file = files[0].file;
        this.imageUrl = URL.createObjectURL(file);
      } else {
        this.imageUrl = '';
      }
    }
  }
};
</script>

<style>
/* Add your custom styles here */
</style>
