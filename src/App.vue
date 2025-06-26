<template>
  <div id="app" class="overflow-x-hidden">
    <router-view name="Sidebar" />
    <RouterView class=""/>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
export default {
  name: 'App',
  components: { RouterView },

  // mounted() {
  //   window.addEventListener('beforeunload', () => {
  //     // Clear session storage
  //     sessionStorage.clear();

  //     // Optionally clear only specific localStorage keys
  //     localStorage.removeItem('remaining_limit_outpatient');
  //     localStorage.removeItem('remaining_limit_medicaldental');
  //     localStorage.removeItem('remaining_limit_amount');
  //     localStorage.removeItem('openOrNot');

  //     // OR, to wipe everything (if you prefer)
  //     // localStorage.clear();
  //   });
  // }
};

</script>

<style>
@media print {
  /* Hide the sidebar rendered from named router-view
   [name="Sidebar"],
  aside,
  .toggle-btn {
    display: none !important;
    visibility: hidden !important;
    width: 0 !important;
    position: absolute !important;
    left: -9999px !important;
  }

   Ensure main content fills full width
  main {
    margin-left: 0 !important;
    width: 100% !important;
  }

   Optional: Remove background for clean print
  body,
  html {
    background: white !important;
    color: black !important;
  } */
}
</style>
