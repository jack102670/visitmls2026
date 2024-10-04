<template>
    <div class="w-full h-full flex">
      <EFormSidebar :dataOpenSideBar="openSidebar" />
      <div class="w-full h-full">
        <headerTop :dataOpenSideBar="openSidebar" :clickHambuger="toggleSidebar" />
        <div class="w-full h-[calc(100vh-50px)]">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import headerTop from './EformTopbar.vue'
  import EFormSidebar from "./EFormSidebar.vue";
  
  
  export default {
    components: { headerTop, EFormSidebar },
    data() {
      return {
        openSidebar: true
      }
    },
    methods: {
      toggleSidebar() {
        this.openSidebar = !this.openSidebar
      }
    }
  
  }
  </script>
  
  <style></style>