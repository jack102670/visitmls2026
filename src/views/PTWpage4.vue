<!-- FormPage1.vue -->
<template>
  <div class="container mx-auto">
    <div
      class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8"
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
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
           <PTWuploadlocal/>
           <PTWuploadforeign/>
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
import PTWuploadlocal from '../views/PTWuploadlocal.vue';
import PTWuploadforeign from '../views/PTWuploadforeign.vue';



export default {

  components: {
    PTWuploadlocal,
    PTWuploadforeign,
},
  data() {
    return {
      
      
      isPreviewModalOpen: false,
    };
  },
  
};
</script>