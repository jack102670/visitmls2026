<template>

  <div id="app">


    <div >
      <router-view name=" Sidebar" />
    <!-- <Content/> -->
  </div>
  <div>
    <RouterView />
  </div>

  </div>
</template>

<script>
  // import EformNavbarnew from "./components/E-form-component/eNavbar/EFormNavbar.vue";
  import {store} from "./views/store.js";
  import {
    RouterView
  } from 'vue-router';
  export default {
    name: 'App',
    components: {
      RouterView,
      // EformNavbarnew
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