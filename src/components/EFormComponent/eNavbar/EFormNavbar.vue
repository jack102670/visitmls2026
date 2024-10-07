<template>
  <div class="w-full h-full flex">
    <EFormSidebar :dataOpenSideBar="openSidebar" />
    <div class="w-full h-full flex-grow">
      <EFormTopbar :dataOpenSideBar="openSidebar" :clickHambuger="toggleSidebar" />
      <div class="">
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>

<script>
  import EFormTopbar from './EFormTopbar.vue'
  import EFormSidebar from "./EFormSidebar.vue";
  export default {
    components: {
      EFormTopbar,
      EFormSidebar
    },
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