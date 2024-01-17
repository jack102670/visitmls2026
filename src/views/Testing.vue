<template>
  <div>
    <h2>File Upload</h2>
    <file-pond
      ref="filePond"
      name="file"
      :server="serverConfig"
      label-idle="Drag & Drop your files or <span class='filepond--label-action'>Browse</span>"
      allow-multiple="true"
      max-files="5"
      max-file-size="2MB"
      accepted-file-types="image/jpeg, image/png, application/pdf"
      @init="handleFilePondInit"
      @processfile="handleFilePondProcess"
      @removefile="handleFilePondRemove"
    ></file-pond>
  </div>
</template>

<script>





export default {
  name: "testingViews",
  components: {

  },
  data() {
    return {
    
    };
  },
 
};
</script>
