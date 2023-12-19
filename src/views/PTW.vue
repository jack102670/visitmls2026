<template>
    <div class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto">
        
      <PTWpage1
        v-if="currentPage === '/PTWpage1'"
        @updateFormData="updateFormData"
        @nextPage="changePage"
      ></PTWpage1>
      <PTWpage2
        v-if="currentPage === '/PTWpage2'"
        @updateFormData="updateFormData"
        @nextPage="changePage"
      ></PTWpage2>
      <PTWpage3
        v-if="currentPage === '/PTWpage3'"
        @updateFormData="updateFormData"
        @nextPage="changePage"
      ></PTWpage3>
      <PTWpage4
        v-if="currentPage === '/PTWpage4'"
        @updateFormData="updateFormData"
        @nextPage="changePage"
      ></PTWpage4>
   
      <!-- add more form pages as needed -->
    </div>
  </template>
  
  <script>
  import PTWpage1 from "../views/PTWpage1.vue";
  import PTWpage2 from "../views/PTWpage2.vue";
  import PTWpage3 from "../views/PTWpage3.vue";
  import PTWpage4 from "../views/PTWpage4.vue";

  
  export default {
    name: 'PTWViews',
    components: {
      PTWpage1,
      PTWpage2,
      PTWpage3,
      PTWpage4,
      
      // add more form pages as needed
    },
    data() {
      return {
        currentPage: "/PTWpage1",
        formData: {},
      };
    },
    methods: {
      updateFormData(data) {
        this.formData = { ...this.formData, ...data };
      },
      changePage(nextPage) {
        this.currentPage = nextPage;
      },
    },
  };
  </script>
  