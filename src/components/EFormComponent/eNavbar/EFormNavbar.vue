<template>
  <div class="layout-container">
    <EFormSidebar :dataOpenSideBar="openSidebar" />
    <div class="content-container">
      <EFormTopbar 
        :dataOpenSideBar="openSidebar" 
        :clickHambuger="toggleSidebar" 
      />
      <div class="content py-0">
        <router-view :key="$route.fullPath"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import EFormTopbar from './EFormTopbar.vue'
import EFormSidebar from './EFormSidebar.vue'

export default {
  components: {
    EFormTopbar,
    EFormSidebar,
  },
  data() {
    return {
      openSidebar: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.openSidebar = !this.openSidebar;
    },
  },
};
</script>

<style scoped>
.layout-container {
  display: flex;
  height: 100vh; /* Full height of the viewport */
  overflow: hidden;
}

.content-container {
  width: 340px !important;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.content {
  overflow-y: auto; /* Scrollable content */
}
</style>
