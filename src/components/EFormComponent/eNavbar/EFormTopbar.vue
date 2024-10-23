<template>

  <div class="w-full bg-white shadow-sm  top-0 z-50 ">
    <div class="flex justify-between items-center h-[60px]">

      <div class="p-4  bg-dark space-x-2 flex justify-start items-center ">
        <div @click="clickHambuger" class=" cursor-pointer border border-[1px] py-[6px] px-6 rounded-md">
          <font-awesome-icon icon="bars" :style="{ color: '#160959', fontSize: '20px' }" />
        </div>
        <div class="">
          <h2 class="inline-flex font-bold text-lg uppercase text-primary"></h2>
        </div>

      </div>
      <div class="flex space-x-4 items-center justify-center px-4">
        <font-awesome-icon :icon="['fas', 'circle-half-stroke']" class="cursor-pointer" :style="{ color: '#160959', fontSize: '20px' }" />
        <font-awesome-icon @click="logout" icon="sign-out-alt" class="cursor-pointer" :style="{ color: '#160959', fontSize:'20px' }" />
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import store from '../../../views/store.js';
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
    }
    }
  }
</script>

<style>

</style>