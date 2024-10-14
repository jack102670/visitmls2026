<template>
  

    <div class="w-full bg-white shadow-sm ">
      <div class="flex justify-between items-center h-[70px]">
    
        <div class="p-4 cursor-pointer bg-dark space-x-2 flex " >
          <div @click="clickHambuger" class="border border-[1px] py-2 px-4 rounded-md">
            <font-awesome-icon icon="bars"
            :style="{ color: '#160959', fontSize: '20px' }" 
             />
          </div>
          <div class="">
            <!-- <font-awesome-icon :icon="['fas', 'sun']" :style="{ color: '#ffffff', fontSize: '20px' }" /> -->
          </div>

        </div>
    
        <div class="flex space-x-3 items-center justify-center px-3">
          <div class="text-md text-dark">Logout</div>
          <font-awesome-icon icon="sign-out-alt" class="mr-2" :style="{ color: '#160959', fontSize:'20px' }"  />
        </div>
      </div>
    </div>
    </template>
      
      <script>
    
      export default {
        props: {
          dataOpenSideBar: Boolean,
          clickHambuger: Function,
        //   FontAwesomeIcon,
        },

        data() {
          return {
            isMenuOpen: false, 
            isLoggedIn: false,
            isAdminLoggedIn: false,
          }
        },
        methods: {
        }
      
      }
      </script>
      
      <style>
      
      </style>