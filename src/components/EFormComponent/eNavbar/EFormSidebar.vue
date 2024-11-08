<template>
  <!-- logo and title -->
  <div class="h-screen" id="side-bar" :class="dataOpenSideBar ? 'side-bar-visible ' : 'side-bar-close'">
    <div class="bg-primary h-[60px] flex justify-between items-center px-2">
      <div class="text-md text-white flex justify-between items-center h-full space-x-2 px-5 py-4"
        v-show="dataOpenSideBar" >
        <img src="../../../../public/pkt-blue-log-crop.jpg" class="p-1 w-10 h-10" alt="Avatar" />
        <p class="font-bold text-lg">Service Portal</p>
      </div>
      <a @click="redirectToHome" class="cursor-pointer">
      <img src="../../../../public/pkt-blue-log-crop.jpg" :class="[
        'transition-all duration-300 ease-in-out p-2 w-10 h-10 rounded-full ring-2 ring-gray-100 dark:ring-gray-500',
        dataOpenSideBar ? 'opacity-0 scale-0' : 'opacity-100 scale-100 rotate-360'
      ]" alt="PKT logo" />
      </a>
    </div>
    <!-- description -->
    <div class="flex flex-col justify-between h-screen bg-primary overflow-y-auto  ">
      <div :class="dataOpenSideBar ? 'py-4 px-4 pt-8' : ' '" class="space-y-2">
        <div>


        <div
          :class="['py-3 px-2 border-2 border-primary hover:bg-[#2d2169] hover:border-2 ', dataOpenSideBar ? '' : 'justify-center items-center text-center']"
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
      </div>
        <div>
        <router-link to="/e-dashboard">
          <div
            :class="['py-3 px-2 border-2 border-primary hover:bg-[#2d2169] hover:border-2 cursor-pointer', dataOpenSideBar ? '' : 'justify-center items-center text-center']"
            class="rounded-md cursor-pointer text-white hover:text-dark">
            <div class="px-2 flex justify-between items-center">
              <div
                :class="dataOpenSideBar ? 'flex space-x-2 justify-between items-center' : 'flex justify-center items-center w-full'">
                <font-awesome-icon :icon="['fa-solid', 'fa-square-poll-horizontal']" v-tooltip.right="'Dashboard'"
                  :style="{ color: '#ffffff', fontSize: '20px' }" />
                <span v-show="dataOpenSideBar">Dashboard</span>
              </div>
              <font-awesome-icon v-show="dataOpenSideBar" :icon="['fas', 'angle-right']"
                :style="{ color: '#ffffff', fontSize: '20px' }" />
            </div>
          </div>
        </router-link>
      </div>
        <div
          :class="['py-3 px-2 border-2 border-primary hover:bg-[#2d2169] hover:border-2 ', dataOpenSideBar ? '' : 'justify-center items-center text-center', dropdownOpen ? 'bg-[#2d2169] border-2 ' : '']"
          class="rounded-md cursor-pointer text-white hover:text-dark">
          <div class="px-2 flex justify-between items-center" @click="handleClick">
            <div
              :class="dataOpenSideBar ? 'flex space-x-2 justify-between items-center' : 'flex justify-center items-center w-full'">
              <font-awesome-icon :icon="['fas', 'grip-horizontal']" v-tooltip.right="'Request Form'"
                :style="{ color: '#ffffff', fontSize: '20px' }" />
              <span v-show="dataOpenSideBar">Request Form</span>
            </div>
            <font-awesome-icon v-show="dataOpenSideBar"
              :icon="dropdownOpen ? ['fas', 'chevron-down'] : ['fas', 'angle-right']"
              :class="{ 'rotate-icon': dropdownOpen }" :style="{ color: '#ffffff', fontSize: '20px' }" />
          </div>
          <transition name="slide-fade">
            <div v-show="dropdownOpen" class="pl-8 space-y-4 py-2 text-white ">
              <div @click="navigateTo('/personnel-requisition')" class="block pb-1 pt-2 hover:text-dark">
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
        <div>
        <router-link to="/verify-request">
          <div
            :class="['py-3 px-2 border-2 border-primary hover:bg-[#2d2169] hover:border-2 ', dataOpenSideBar ? '' : 'justify-center items-center text-center']"
            class="rounded-md cursor-pointer text-white hover:text-dark">
            <div class="px-2 flex justify-between items-center">
              <div
                :class="dataOpenSideBar ? 'flex space-x-2 justify-between items-center' : 'flex justify-center items-center w-full'">
                <font-awesome-icon :icon="['fas', 'list-check']" v-tooltip.right="'Verify Request'"
                  :style="{ color: '#ffffff', fontSize: '20px' }" />
                <span v-show="dataOpenSideBar">Verify Request</span>
              </div>
              <font-awesome-icon v-show="dataOpenSideBar" :icon="['fas', 'angle-right']"
                :style="{ color: '#ffffff', fontSize: '20px' }" />
            </div>
          </div>
        </router-link>
      </div>
        <div @click="logout">
        <div 
          :class="['py-3 px-2 border-2 border-primary hover:bg-[#2d2169] hover:border-2 ', dataOpenSideBar ? '' : 'justify-center items-center text-center']"
          class="rounded-md cursor-pointer text-white hover:text-dark ">
          <div class="px-2 flex space-x-2 justify-between items-center " >
            <div
              :class="dataOpenSideBar ? 'flex space-x-2 items-center ' : 'flex justify-center items-center w-full  '">
              <font-awesome-icon icon="sign-out-alt" v-tooltip.right="'Logout'"
                :style="{ color: '#ffffff', fontSize: '20px' }" />
              <span v-show="dataOpenSideBar">Logout</span>
            </div>
            <font-awesome-icon v-show="dataOpenSideBar" :icon="['fas', 'angle-right']"
              :style="{ color: '#ffffff', fontSize: '20px' }" />
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PKTLogoWhite from "../../../assets/images/pkt-logo-white.jpg";
  import {
    store
  } from '../../../views/store.js';
  import Swal from 'sweetalert2';
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
      handleClick() {
        if (!this.dataOpenSideBar) {
          this.$router.push('/personnel-requisition');
        } else {
          this.toggleRequestDropdown();
        }
      },
      toggleRequestDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
      },
      navigateTo(route) {
        this.dropdownOpen = false;
        this.$router.push(route);
      },
      async logout() {
        const result = await Swal.fire({
          title: 'Are you sure you want to logout?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Logout!',
        });
        if (result.isConfirmed) {
          try {
            store.clearSession();
            this.$router.push('/');
            Swal.fire({
              icon: 'success',
              title: 'You have been logged out.',
              showConfirmButton: false,
              timer: 1500,
            });
          } catch (error) {
            console.error('Error during logout:', error);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            });
          }
        }
      },
      redirectToHome(){
        this.$router.push({ path: '/' });
      }
    },
  }
</script>

<style scoped>
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.3s ease;
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }

  /* Rotate icon animation */
  .rotate-icon {
    transform: rotate(0deg);
    transition: transform 0.3s ease;
  }

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

  .dropdown-content>div:hover {
    transform: translateX(5px);
  }
  #side-bar {
    transition: 300ms;
  }

  .side-bar-visible {
    width: 340px !important;
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
  }

  .dropdown-enter-to {
    min-height: 300px;
    /* Adjust based on content */
    opacity: 1;
  }

  .dropdown-leave {
    max-height: 300px;
  }

  /* Optional: Add some padding to the dropdown content */
  .dropdown-content {
    padding-left: 1rem;
  }
</style>