<template>
    <div>
      <main class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#F8F9FA] dark:bg-[#141517] p-10 sm:ml-64  h-screen">
        <!-- Your page content goes here -->
        <div class="container mx-auto  ">
  
          <div class="bg-[#f7fbff] dark:bg-[#25262b] rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
            <div class="flex items-center justify-center h-full">
              <p class="text-2xl font-bold text-slate-900 dark:text-white">New Request</p>
            </div>
            <!-- <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
            <p class="text-slate-500 dark:text-slate-300 mt-2 text-sm">
              The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer
              space.
            </p> -->
            <!-- component -->
            <div>
              <button @click="openModal" class="bg-blue-500 text-white p-2 rounded text-2xl font-bold">Open Modal</button>
              <!-- Use ModalComponent -->
              <modal :modalOpen="modalOpen" :closeModal="closeModal">
                <!-- Modal content goes here -->
                <div>
                    <p class="text-lg">Do you want to approve this?</p>
                </div>
              </modal>
            </div>
          </div>
        </div>
      </main>
    </div>
  
  
    3. Open
  </template>
  
  
  <script>
  import Modal from '@/components/Modal';
  
  export default {
    name: 'NewrequestViews',
    components: {
      Modal,
    },
    data() {
      return {
        modalOpen: false,
      };
    },
    methods: {
      openModal() {
        this.modalOpen = true;
      },
      closeModal() {
        this.modalOpen = false;
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