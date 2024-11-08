<template>
  <div class="layout-container">
    <EFormSidebar v-if="!isMobile" :dataOpenSideBar="openSidebar" />
    <EFormMobileSidebar v-if="isMobile" :dataOpenSideBar="openMobileSidebar" :clickHambuger="toggleMobileSidebar" />

    <div class="content-container">
      <EFormTopbar v-if="!isMobile" :dataOpenSideBar="openSidebar" :clickHambuger="toggleSidebar" />
      <div v-if="isMobile" :dataOpenSideBar="openMobileSidebar" class=" border-b-[1px]">
        <div class="flex justify-between items-center">
          <div class="flex justify-between items-center px-2">
            <div class="text-md text-primary flex items-center h-full space-x-2 px-1 py-4" >
              <img src="../../../../public/pkt-blue-log-crop.jpg" class="p-1 w-10 h-10" alt="Avatar" />
              <p class="font-bold text-lg">Service Portal</p>
            </div>
          </div>
          <div class="mobile-topbar mx-4 border-[1px] px-4 rounded-md">
            <button @click="toggleMobileSidebar" class="hamburger  ">
          <font-awesome-icon icon="bars" />
        </button>
          </div>

        </div>

      </div>

      <div class="content py-0">
        <router-view :key="$route.fullPath"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import EFormTopbar from './EFormTopbar.vue' 
  import EFormSidebar from './EFormSidebar.vue'
  import EFormMobileSidebar from './EFormMobileSidebar.vue'
  export default {
    components: {
      EFormTopbar,
      EFormSidebar,
      EFormMobileSidebar,
    },
    data() {
      return {
        openSidebar: false,
        openMobileSidebar: false,
        isMobile: false, 
      };
    },
    mounted() {
      this.checkScreenSize();
      window.addEventListener("resize", this.checkScreenSize);
    },
    beforeUnmount() {
      window.removeEventListener("resize", this.checkScreenSize);
    },
    methods: {
      toggleSidebar() {
        this.openSidebar = !this.openSidebar; 
      },
      toggleMobileSidebar() {
        this.openMobileSidebar = !this.openMobileSidebar;
      },
      checkScreenSize() {
        this.isMobile = window.innerWidth <= 768;
      },

    },
  };
</script>

<style scoped>
  /* Add your styles here */
  .layout-container {
    display: flex;
    height: 100vh;
    /* Full height of the viewport */
    overflow: hidden;
  }

  .content-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    width: 340px !important;
  }

  .content {
    overflow-y: auto;
    /* Scrollable content */
  }

  .mobile-topbar {
    /* Styles for mobile topbar */
    /* padding-top: 20px;
    padding-bottom: 10px;
    padding-right: 24px; */
    display: flex;
    justify-content: space-between;
  }

  .hamburger {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }
</style>