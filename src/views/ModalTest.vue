<template>
    <div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" @click.self="closeModal">
      <div class="relative top-20 mx-auto p-5 border w-3/4 shadow-lg rounded-md bg-white">
        <!-- Scrollable content inside the modal -->
        <div class="overflow-auto h-96">
          <p v-for="n in 50" :key="`modal-${n}`" class="text-gray-700">
            This is some scrollable content inside the modal. {{ n }}
          </p>
        </div>
        <button @click="closeModal" class="mt-4 px-4 py-2 bg-red-500 text-white rounded">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      closeModal() {
        this.$emit('close');
      }
    }
  };
  </script>
  
  <style>
  /* Additional styles if needed */
  </style>