<template>
  <div class="main-content overflow-auto h-screen">
    <!-- Filling the main page with repeated content to enable scrolling -->
    <div class="space-y-4">
      <p v-for="n in 100" :key="n" class="text-gray-700">
        This is some scrollable content on the main page. {{ n }}
      </p>
    </div>
    <button @click="isModalOpen = true" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded fixed bottom-4 right-4">Open Modal</button>
    <Modal v-if="isModalOpen" @close="isModalOpen = false" />
  </div>
</template>

<script>
import Modal from './ModalTest.vue';

export default {
  name: 'TestingDemo',
  components: {
    Modal
  },
  data() {
    return {
      isModalOpen: false
    };
  },
  watch: {
    isModalOpen(newValue) {
      const body = document.querySelector('body');
      body.style.overflow = newValue ? 'hidden' : 'auto';
    }
  }
};
</script>

<style>
/* Additional styles if needed */
</style>