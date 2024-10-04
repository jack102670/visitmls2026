<template>
  <aside>
        <div class="w-full h-full flex">
      <EFormSidebar :dataOpenSideBar="openSidebar" />
      <div class="w-full h-full flex-grow">
        <headerTop :dataOpenSideBar="openSidebar" :clickHambuger="toggleSidebar" />
        <div class="">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </aside>

  </template>
  
  <script>
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