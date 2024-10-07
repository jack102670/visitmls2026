<template>
  <!-- <ESidebar /> -->
  <div id="app">
    <div>
      <!-- <router-view name=" Sidebar" /> -->
    </div>
    <div>
      <RouterView />
    </div>
  </div>

</template>

<script>
  // import EformNavbarnew from "./components/E-form-component/eNavbar/EFormNavbar.vue";
  // import ESidebar from "./components/EFormComponent/eNavbar/EFormNavbar.vue"
  import {
    store
  } from "./views/store.js";
  import {
    RouterView
  } from 'vue-router';
  export default {
    name: 'App',
    components: {
      RouterView,
      // ESidebar
    },
    data() {
      return {
        controlView: store.getControlView(),
      };
    },
    mounted() {
      this.$watch(
        () => store.getControlView(),
        (newVal) => {
          this.controlView = newVal;
        }
      );
    },
  };
</script>