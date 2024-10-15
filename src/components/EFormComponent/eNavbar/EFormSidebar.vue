<template>
  <!-- logo and title -->
  <div class="h-screen " id="side-bar" :class="dataOpenSideBar ? 'side-bar-visible' : 'side-bar-close'">
    <div class="bg-primary h-[60px] flex justify-between items-center px-2 "
      >
      <div class="text-md text-white flex justify-between items-center h-full space-x-2 px-5 py-2"
        v-show="dataOpenSideBar">
        <img src="../../../../public/pkt-blue-log-crop.jpg" class="p-1 w-10 h-10" alt="Avatar" />
        <p class="font-bold text-lg">Service Portal</p>
      </div>
      <img src="../../../../public/pkt-blue-log-crop.jpg" v-show="!dataOpenSideBar"
        :class="dataOpenSideBar ? 'transition-transform duration-300 ease-in-out transform scale-75' : 'transition-transform duration-300 ease-in-out'"
        class="p-2 w-10 h-10 rounded-full ring-2 ring-gray-100 dark:ring-gray-500" alt="PKT logo" />
    </div>
    <!-- description -->
    <div class="flex flex-col justify-between h-screen bg-primary overflow-y-auto  ">
      <div :class="dataOpenSideBar ? 'py-4 px-4 pt-8' : ' '" class="space-y-2">
        <div
          :class="['py-3 px-2 border-2 border-primary hover:bg-[#2d2169] hover:border-2 hover:border-white', dataOpenSideBar ? '' : 'justify-center items-center text-center']"
          class="rounded-md cursor-pointer text-white hover:text-dark">
          <router-link to="/firsttimelogin" class="px-2 flex justify-between items-center">
            <div :class="dataOpenSideBar ? 'flex space-x-2 items-center' : 'flex justify-center items-center w-full'">
              <font-awesome-icon :icon="['fas', 'user']" v-tooltip.right="'Profile'"
                :style="{ color: '#ffffff', fontSize: '22px' }" />
              <span v-show="dataOpenSideBar" class="text-white">Profile</span>
            </div>
            <font-awesome-icon v-show="dataOpenSideBar" :icon="['fas', 'angle-right']"
              :style="{ color: '#ffffff', fontSize: '20px' }" />
          </router-link>
        </div>

        <div
          :class="['py-3 px-2 border-2 border-primary hover:bg-[#2d2169] hover:border-2 hover:border-white', dataOpenSideBar ? '' : 'justify-center items-center text-center']"
          class="rounded-md cursor-pointer text-white hover:text-dark">
          <router-link to="/e-dashboard" class="px-2 flex justify-between items-center">
            <div
              :class="dataOpenSideBar ? 'flex space-x-2 justify-between items-center' : 'flex justify-center items-center w-full'">
              <font-awesome-icon :icon="['fa-solid', 'fa-square-poll-horizontal']" v-tooltip.right="'Dashboard'"
                :style="{ color: '#ffffff', fontSize: '20px' }" />
              <span v-show="dataOpenSideBar">Dashboard</span>
            </div>
            <font-awesome-icon v-show="dataOpenSideBar" :icon="['fas', 'angle-right']"
              :style="{ color: '#ffffff', fontSize: '20px' }" />
          </router-link>
        </div>

        <div
          :class="['py-3 px-2 border-2 border-primary hover:bg-[#2d2169] hover:border-2 hover:border-white', dataOpenSideBar ? '' : 'justify-center items-center text-center', dropdownOpen ? 'bg-[#2d2169] border-2 border-white' : '']"
          class="rounded-md cursor-pointer text-white hover:text-dark">
          <div class="px-2 flex justify-between items-center" @click="toggleRequestDropdown">
            <div
              :class="dataOpenSideBar ? 'flex space-x-2 justify-between items-center' : 'flex justify-center items-center w-full'">
              <font-awesome-icon :icon="['fas', 'grip-horizontal']" v-tooltip.right="'Request Form'"
                :style="{ color: '#ffffff', fontSize: '20px' }" />
              <span v-show="dataOpenSideBar">Request Form</span>
            </div>
            <font-awesome-icon v-show="dataOpenSideBar"
              :icon="dropdownOpen ? ['fas', 'chevron-down'] : ['fas', 'angle-right']"
              :style="{ color: '#ffffff', fontSize: '20px' }" />
          </div>
          <transition name="dropdown">
            <div v-show="dropdownOpen" class="pl-6 mt-2 space-y-4 text-white dropdown-content">
              <div @click="navigateTo('/personnel-requisition')" class="block py-1 hover:text-dark">
                Personnel Requisition
              </div>
              <div @click="navigateTo('/employee-transfer')" class="block py-1 hover:text-dark">
                Employee Transfer
              </div>
              <div @click="navigateTo('/on-job-training')" class="block py-1 hover:text-dark">
                On Job Training
              </div>
              <div @click="navigateTo('/training-evaluation')" class="block py-1 hover:text-dark">
                Training Evaluation
              </div>
              <div @click="navigateTo('/orientation-checklist')" class="block py-1 hover:text-dark">
                Orientation Checklist
              </div>
              <div @click="navigateTo('/job-description')" class="block py-1 hover:text-dark">
                Job Description
              </div>
            </div>
          </transition>
        </div>

        <div
          :class="['py-3 px-2 border-2 border-primary hover:bg-[#2d2169] hover:border-2 hover:border-white', dataOpenSideBar ? '' : 'justify-center items-center text-center']"
          class="rounded-md cursor-pointer text-white hover:text-dark">
          <router-link to="/verify-request" class="px-2 flex justify-between items-center">
            <div
              :class="dataOpenSideBar ? 'flex space-x-2 justify-between items-center' : 'flex justify-center items-center w-full'">
              <font-awesome-icon :icon="['fas', 'list-check']" v-tooltip.right="'Verify Request'"
                :style="{ color: '#ffffff', fontSize: '20px' }" />
              <span v-show="dataOpenSideBar">Verify Request</span>
            </div>
            <font-awesome-icon v-show="dataOpenSideBar" :icon="['fas', 'angle-right']"
              :style="{ color: '#ffffff', fontSize: '20px' }" />
          </router-link>
        </div>

        <div
          :class="['py-3 px-2 border-2 border-primary hover:bg-[#2d2169] hover:border-2 hover:border-white', dataOpenSideBar ? '' : 'justify-center items-center text-center']"
          class="rounded-md cursor-pointer text-white hover:text-dark">
          <a href="/" class="px-2 flex space-x-2 justify-between items-center" @click="logout">
            <div :class="dataOpenSideBar ? 'flex space-x-2 items-center' : 'flex justify-center items-center w-full'">
              <font-awesome-icon icon="sign-out-alt" v-tooltip.right="'Logout'"
                :style="{ color: '#ffffff', fontSize: '20px' }" />
              <span v-show="dataOpenSideBar">Logout</span>
            </div>
            <font-awesome-icon v-show="dataOpenSideBar" :icon="['fas', 'angle-right']"
              :style="{ color: '#ffffff', fontSize: '20px' }" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PKTLogoWhite from "../../../assets/images/pkt-logo-white.jpg";
  export default {
    components: {},
    data() {
      return {
        PKTLogoWhite: PKTLogoWhite,
        dropdownOpen: false,
      }
    },
    props: {
      dataOpenSideBar: Boolean,
    },
    watch: {
      dataOpenSideBar(newValue) {
        if (!newValue) {
          this.dropdownOpen = false;
        }
      }
    },
    methods: {
      toggleRequestDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
      },
      navigateTo(route) {
        this.dropdownOpen = false;
        this.$router.push(route);
      },
    },
  }
</script>

<style scoped>
  #side-bar {
    overflow: hidden;
    transition: 300ms;
  }

  .side-bar-visible {
    width: 320px !important;
  }

  .side-bar-close {
    width: 50px !important;
  }

  img {
    transition: transform 300ms ease, opacity 300ms ease;
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