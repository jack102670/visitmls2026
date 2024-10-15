<template>

  <div class="w-full bg-white shadow-sm  top-0 z-50 ">
    <div class="flex justify-between items-center h-[60px]">

      <div class="p-4  bg-dark space-x-2 flex justify-start items-center ">
        <div @click="clickHambuger" class=" cursor-pointer border border-[1px] py-[6px] px-6 rounded-md">
          <font-awesome-icon icon="bars" :style="{ color: '#160959', fontSize: '20px' }" />
        </div>
        <div class="">
          <p>Search here..</p>
        </div>

      </div>
      <div class="flex space-x-4 items-center justify-center px-3">
        <font-awesome-icon :icon="['fas', 'circle-half-stroke']" :style="{ color: '#160959', fontSize: '20px' }" />
        <!-- <font-awesome-icon :icon="['fas', 'moon']" :style="{ color: '#160959', fontSize: '20px' }" /> -->
        <font-awesome-icon icon="sign-out-alt" class="" :style="{ color: '#160959', fontSize:'20px' }" />
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
    methods: {}
  }
</script>

<style>

</style>