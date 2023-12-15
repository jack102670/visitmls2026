<template>
  <div id="app">
    <router-view name="Sidebar" />
    <!-- <Content/> -->
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from 'vue-router';


// import Content from './components/content.vue';




export default {
  name: 'App',
  components: { RouterView }
};

</script>


