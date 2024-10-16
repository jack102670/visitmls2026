<template>
  <!-- Overlay background when sidebar is open -->
  <transition name="fade">
    <div 
      v-if="dataOpenSideBar" 
      class="overlay" 
      @click="clickHambuger"
    ></div>
  </transition>

  <transition name="slide-in">
    <div 
      class="mobile-sidebar" 
      :style="{ transform: dataOpenSideBar ? 'translateX(0)' : 'translateX(-100%)' }"
    >
      <!-- Close icon inside the sidebar -->
      <div @click="clickHambuger" class="close-icon cursor-pointer">
        <font-awesome-icon :icon="['fas', 'xmark']" />
      </div>

      <nav class="mt-4">
        <router-link class="text-white" to="/firsttimelogin">Profile</router-link>
        <router-link class="text-white" to="/e-dashboard">Dashboard</router-link>
      </nav>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    dataOpenSideBar: Boolean,
    clickHambuger: Function,
  },
};
</script>

<style scoped>
/* Overlay for dark transparent background */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Dark background with transparency */
  z-index: 999; /* Below the sidebar but above other content */
}

/* Full-width Sidebar styles for mobile */
.mobile-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%; /* Full width on mobile */
  height: 100%;
  background-color: #160959;
  z-index: 1000; /* Above the overlay */
  transform: translateX(-100%); /* Hidden by default */
  transition: transform 0.3s ease-in-out;
}

.slide-in-enter-active, .slide-in-leave-active {
  transition: transform 0.3s ease;
}

.slide-in-enter, .slide-in-leave-to {
  transform: translateX(0);
}

/* Close button inside the sidebar */
.close-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  color: white; /* Close icon color */
  cursor: pointer;
}

/* Fade transition for the overlay */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
