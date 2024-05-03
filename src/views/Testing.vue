<template>
  <div>
    <img :src="imgData" alt="">
    <div>
      <input type="file" class="filepond" ref="filepond" accept="image/*">
      <button @click="saveToFilePond">Save</button>
    </div>
  </div>
</template>

<script>
import { create, registerPlugin } from 'filepond';
import axios from 'axios';

import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';

import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import 'filepond/dist/filepond.min.css';

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
  name: 'CircleFilePond',
  data() {
    return {
      files: [],
      imgData: ''
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initializeFilePond();
      this.fetchImage();
    });
  },
  methods: {
    initializeFilePond() {
      if (this.$refs.filepond) {
        const pond = create(this.$refs.filepond, {
          labelIdle: `Drag & Drop your picture or <span class="filepond--label-action">Browse</span>`,
          stylePanelLayout: 'compact circle',
          imagePreviewHeight: 150,
          imageCropAspectRatio: '1:1',
          imageResizeTargetWidth: 150,
          imageResizeTargetHeight: 150,
          styleLoadIndicatorPosition: 'center bottom',
          styleButtonRemoveItemPosition: 'center bottom',
          files: []
        });

        pond.on('addfile', (error, file) => {
          if (!error) {
            console.log("Added file name:", file.file.name); // Access file name
            this.files = [file.file]; // Replace files array with the new file
          }
        });

        pond.on('removefile', () => {
          this.files = []; // Clear files array when file is removed
        });
      } else {
        console.error("FilePond element not found.");
      }
    },
    async fetchImage() {
  try {
    const response = await axios.get('/api/images/226c61980387fea890a49ac352f76473ca458f20b4decb675b9a8c32ffb28dda.png', {
      responseType: 'arraybuffer'
    });
    const base64Data = btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
    this.imgData = `data:${response.headers['content-type'].toLowerCase()};base64,${base64Data}`;
  } catch (error) {
    console.error('Error fetching image:', error);
  }
},

    saveToFilePond() {
      if (this.files.length === 0) {
        console.error("No files selected.");
        return;
      }

      const formData = new FormData();
      formData.append('profile_picture', this.files[0]);
      formData.append('emp_id', '1');
      formData.append('name', 'John Doe');
      formData.append('reporting_to', 'PKTM2582');
      formData.append('position_code', 'NGETES');
      formData.append('position_title', 'NGETES');
      formData.append('email_address', 'example@example.com');
      formData.append('phone_number', '1234567890');
      formData.append('home_address', '123 Main St');
      formData.append('department', 'NGETES');

      axios.put('http://172.28.28.91:97/api/Admin/UpdateEmployee', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        console.log('File uploaded successfully:', response.data);
        // Handle response from server
      })
      .catch(error => {
        console.error('Error uploading file:', error);
        // Handle error
      });
    }
  }
};
</script>

<style scoped>
/* Your styles here */
</style>
