<template>
  <transition name="fade">
    <div v-if="dataOpenSideBar" class="overlay" @click="clickHambuger"></div>
  </transition>

  <transition name="slide-in">
    <div class="mobile-sidebar" :style="{ transform: dataOpenSideBar ? 'translateX(0)' : 'translateX(-100%)' }">
      <div @click="clickHambuger" class="close-icon cursor-pointer">
        <font-awesome-icon :icon="['fas', 'xmark']" />
      </div>
      <div class="bg-primary h-[60px] flex justify-between items-center px-2">
        <div class="text-md text-white flex items-center h-full space-x-2 px-5 py-4">
          <img src="../../../../public/pkt-blue-log-crop.jpg" class="p-1 w-10 h-10" alt="Avatar" />
          <p class="font-bold text-lg">Service Portal</p>
        </div>
      </div>
      <div class="flex flex-col justify-start bg-primary overflow-y-auto py-8 px-4">
        <div class="py-3 px-2 border-2 border-primary hover:bg-[#2d2169] rounded-md hover:border-2 hover:border-white">
          <router-link to="/firsttimelogin" class="px-2 flex " @click="closeSidebar">
            <div class="flex space-x-4 w-full dropdown-transition">
              <font-awesome-icon :icon="['fas', 'user']" v-tooltip.right="'Profile'"
                :style="{ color: '#ffffff', fontSize: '22px' }" />
              <span class="text-white">Profile</span>
            </div>
            <font-awesome-icon :icon="['fas', 'angle-right']" :style="{ color: '#ffffff', fontSize: '20px' }" />
          </router-link>
        </div>
        <div class="py-3 px-2 border-2 border-primary rounded-md hover:bg-[#2d2169] hover:border-2 hover:border-white">
          <router-link to="/e-dashboard" class="px-2 flex " @click="closeSidebar">
            <div class="flex space-x-4 w-full dropdown-transition">
              <font-awesome-icon :icon="['fa-solid', 'fa-square-poll-horizontal']" v-tooltip.right="'Dashboard'"
                :style="{ color: '#ffffff', fontSize: '20px' }" />
              <span class="text-white ">Dashboard</span>
            </div>
            <font-awesome-icon :icon="['fas', 'angle-right']" :style="{ color: '#ffffff', fontSize: '20px' }" />
          </router-link>
        </div>
        <div
          class="py-3 px-2 border-2 border-primary rounded-md cursor-pointer text-white  hover:border-2 hover:border-white  hover:bg-[#2d2169]">
          <div class="px-2 flex justify-between items-center" @click="toggleRequestDropdown">
            <div class="flex space-x-2 justify-between items-center dropdown-transition">
              <font-awesome-icon :icon="['fas', 'grip-horizontal']" v-tooltip.right="'Request Form'"
                :style="{ color: '#ffffff', fontSize: '20px' }" />
              <span v-show="dataOpenSideBar">Request Form</span>
            </div>
            <font-awesome-icon v-show="dataOpenSideBar"
              :icon="dropdownOpen ? ['fas', 'chevron-down'] : ['fas', 'angle-right']"
              :class="{'rotate-icon': dropdownOpen}" :style="{ color: '#ffffff', fontSize: '20px' }" />
          </div>
          <transition name="slide-fade">
            <div v-show="dropdownOpen" class="pl-6 space-y-4 text-white dropdown-content">
              <div @click="navigateAndClose('/personnel-requisition')" class="block pb-1 pt-2 hover:text-dark">
                Personnel Requisition
              </div>
              <div @click="navigateAndClose('/employee-transfer')" class="block py-1 hover:text-dark">
                Employee Transfer
              </div>
              <div @click="navigateAndClose('/on-job-training')" class="block py-1 hover:text-dark">
                On Job Training
              </div>
              <div @click="navigateAndClose('/training-evaluation')" class="block py-1 hover:text-dark">
                Training Evaluation
              </div>
              <div @click="navigateAndClose('/orientation-checklist')" class="block py-1 hover:text-dark">
                Orientation Checklist
              </div>
              <div @click="navigateAndClose('/job-description')" class="block py-1 hover:text-dark">
                Job Description
              </div>
            </div>
          </transition>
        </div>
        <div class="py-3 px-2 border-2 border-primary rounded-md hover:bg-[#2d2169] hover:border-2 hover:border-white">
          <router-link to="/verify-request" class="px-2 flex " @click="closeSidebar">
            <div class="flex space-x-4 w-full dropdown-transition">
              <font-awesome-icon :icon="['fas', 'list-check']" v-tooltip.right="'Verify Request'"
                :style="{ color: '#ffffff', fontSize: '20px' }" />
              <span class="text-white ">Verify Request</span>
            </div>
            <font-awesome-icon v-show="dataOpenSideBar" :icon="['fas', 'angle-right']"
              :style="{ color: '#ffffff', fontSize: '20px' }" />
          </router-link>
        </div>
        <div class="py-3 px-2 border-2 border-primary rounded-md hover:bg-[#2d2169] hover:border-2 hover:border-white">
          <a href="/" class="px-2 flex space-x-2 " @click="logout">
            <div class="flex space-x-4 w-full dropdown-transition">
              <font-awesome-icon icon="sign-out-alt" v-tooltip.right="'Logout'"
                :style="{ color: '#ffffff', fontSize: '20px' }" />
              <span class="text-white ">Logout</span>
            </div>
            <font-awesome-icon :icon="['fas', 'angle-right']" :style="{ color: '#ffffff', fontSize: '20px' }" />
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        dropdownOpen: false,
      }
    },
    props: {
      dataOpenSideBar: Boolean,
      clickHambuger: Function,
    },
    methods: {
      toggleRequestDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
      },
      navigateAndClose(route) {
        this.$router.push(route);
        this.closeSidebar();
      },
      closeSidebar() {
        if (this.clickHambuger) {
          this.clickHambuger();
        }
      },
    }
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
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }

  /* Full-width Sidebar styles for mobile */
  .mobile-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #160959;
    z-index: 1000;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
  }

  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.3s ease;
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }

  .slide-in-enter-active,
  .slide-in-leave-active {
    transition: transform 0.3s ease;
  }

  .slide-in-enter,
  .slide-in-leave-to {
    transform: translateX(0);
  }

  /* Close button inside the sidebar */
  .close-icon {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 24px;
    color: white;
    cursor: pointer;
  }

  /* Fade transition for the overlay */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  /* Rotate icon animation */
  .rotate-icon {
    transform: rotate(0deg);
    transition: transform 0.3s ease;
  }

  /* Optional: Add some padding and a subtle background to the dropdown content */
  .dropdown-content {
    background-color: rgba(45, 33, 105, 0.5);
    border-radius: 0 0 8px 8px;
    padding: 0.5rem 0;
    margin-top: 0.5rem;
  }

  /* Animate dropdown items */
  .dropdown-content>div {
    transition: transform 0.4s ease, opacity 0.4s ease;
  }


  .dropdown-transition:hover {
    transform: translateX(5px);
  }

  .dropdown-content>div:hover {
    transform: translateX(5px);
  }

  /* Transition styles for dropdown */
  .dropdown-enter-active,
  .dropdown-leave-active {
    transition: max-height 0.3s ease, opacity 0.3s ease;
  }

  .dropdown-enter,
  .dropdown-leave-to {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
  }

  .dropdown-enter-to {
    max-height: 300px;
    /* Adjust based on content */
    opacity: 1;
  }

  .dropdown-leave {
    max-height: 300px;
  }

  /* Optional: Add some padding to the dropdown content */
  .dropdown-content {
    overflow: hidden;
    padding-left: 1rem;
  }
</style>