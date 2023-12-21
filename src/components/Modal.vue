<template>
  <transition name="fade">
    <div v-if="modalOpen" class="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
      style="background: rgba(0,0,0,.7);">
      <div class="border border-teal-500 shadow-lg modal-container bg-white min-w-1/4 max-w-3xl min-w-700 min-h-1/4  mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div class="modal-content py-4 text-left px-6">
          <!-- Title -->
          <div class="flex justify-between items-center pb-3">
            <p class="text-2xl font-bold">Confirmation</p>
            <div class="modal-close cursor-pointer z-50" @click="closeModal">
              <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                viewBox="0 0 18 18">
                <path
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                </path>
              </svg>
            </div>
          </div>
          <!-- Body -->
          <div class="my-5">
            <slot></slot>
          </div>
          <!-- Footer -->
          <div class="flex justify-end pt-2">
            <button @click="closeModal"
              class="focus:outline-none modal-close px-4 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/1 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">Cancel</button>
            <button @click="closeModal"
              class="focus:outline-none px-4 bg-teal-500 p-3 ml-3 rounded-lg px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/1 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>



  
  <script>
  export default {
    name: 'ModalComponent',
    props: {
      modalOpen: {
        type: Boolean,
        required: true,
      },
      closeModal: {
        type: Function,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  </style>