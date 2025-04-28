<template>
  <div id="app">
    <router-view name="Sidebar" />
    <RouterView />
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