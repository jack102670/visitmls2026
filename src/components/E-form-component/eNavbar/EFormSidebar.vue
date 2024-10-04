<template>
    <div class="h-screen " id="side-bar" :class="dataOpenSideBar == true ? 'side-bar-visible' : 'side-bar-close'">
      <div class="bg-primary   0 h-[50px] flex justify-between items-center px-2 ">
        <div class="text-md text-white font-bold text-center flex items-center justify-center text-da h-full pl-2"
          v-show="dataOpenSideBar">Dashboard</div>
        <!-- <img src="https://pagedone.io/asset/uploads/1701235464.png" v-show="!dataOpenSideBar" class="p-1 w-8 h-8 rounded-full ring-2 ring-gray-100 dark:ring-gray-500 " alt="Avatar" /> -->
      </div>
      <div class="flex flex-col justify-between h-[calc(100vh-3rem)] bg-primary ">
        <div  :class="dataOpenSideBar ? 'py-4 px-4' : ' '"  class="">
          <div class="w-full " v-if="dataOpenSideBar">
            <div class="w-full items-center flex">
              <div class="w-full justify-between items-center inline-flex">
                <div class="items-center flex">
                  <div class="flex-col inline-flex">
                    <img :src="PKTLogoWhite" class="w-auto h-auto rounded-md ring-2 ring-gray-100" alt="Avatar" />
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div :class="dataOpenSideBar ? 'py-3 px-2' : 'py-3 justify-between items-center '" class="rounded-sm cursor-pointer text-white hover:text-dark">
            <router-link to="/dashboard" class="px-2 flex justify-between items-center">
              <div class="flex space-x-2 items-center">
                <font-awesome-icon :icon="['fas', 'grip-horizontal']" v-tooltip.right="'Dashboard'"
                  :style="{ color: '#ffffff', fontSize: '20px' }" />
                <span v-show="dataOpenSideBar" class="text-white">Profile</span>
              </div>
              <font-awesome-icon v-show="dataOpenSideBar" :icon="['fas', 'angle-right']"
                :style="{ color: '#ffffff', fontSize: '20px' }" />
            </router-link>
          </div>
  
          <div :class="dataOpenSideBar ? 'py-3 px-2' : 'py-3 '"  class=" rounded-md cursor-pointer text-white hover:text-dark">
            <router-link to="/custorder" class="px-2 flex justify-between items-center">
              <div class="flex space-x-2 items-center">
                <font-awesome-icon icon="shopping-cart" v-tooltip.right="'Product'"
                  :style="{ color: '#ffffff', fontSize: '20px' }" />
                <span v-show="dataOpenSideBar">Dashboard</span>
              </div>
              <font-awesome-icon v-show="dataOpenSideBar" :icon="['fas', 'angle-right']"
                :style="{ color: '#ffffff', fontSize: '20px' }" />
            </router-link>
          </div>
          <div :class="dataOpenSideBar ? 'py-3 px-2' : 'py-3 '" class="  rounded-md cursor-pointer text-white hover:text-dark">
            <a href="/" class="px-2 flex space-x-2 justify-between items-center" @click="logout">
              <div class="flex space-x-2 items-center">
                <font-awesome-icon icon="sign-out-alt" v-tooltip.right="'Logout'"
                  :style="{ color: '#ffffff', fontSize: '20px' }" />
                <span v-show="dataOpenSideBar">Logout</span>
              </div>
              <font-awesome-icon v-show="dataOpenSideBar" :icon="['fas', 'angle-right']"
                :style="{ color: '#ffffff', fontSize: '20px' }" />
            </a>
          </div>
        </div>
  
  
        <!-- <div class="menu-man text-left px-2 whitespace-nowrap ">
    
          </div> -->
        <div class="menu-man text-left px-2 justify-self-end whitespace-nowrap">
  
        </div>
      </div>
    </div>
  
  </template>
  
  <script>
  //   import { library } from '@fortawesome/fontawesome-svg-core';
  import Swal from 'sweetalert2';
  //   import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  //   import { faShoppingCart, faSignOutAlt, faChartLine } from '@fortawesome/free-solid-svg-icons';
  
  //   library.add( faShoppingCart, faSignOutAlt, faChartLine);
  import PKTLogoWhite from "../../../assets/images/pkt-logo-white.jpg";
  
  export default {
  
    components: {
      //   FontAwesomeIcon, 
    },
    data() {
      return {
        PKTLogoWhite: PKTLogoWhite,
        // email: '',
        // isLoggedIn: false,
        // isAdminLoggedIn: false,
      }
  
    },
    props: {
      dataOpenSideBar: Boolean,
    },
  
    methods: {
  
    }
  
  }
  </script>
  
  <style>
  .p-tooltip-text {
    font-size: 10px !important;
  }
  
  #side-bar {
    overflow: hidden;
    transition: 300ms;
  }
  
  .side-bar-visible {
    width: 310px !important;
  }
  
  .side-bar-close {
    width: 50px !important;
  }
  </style>