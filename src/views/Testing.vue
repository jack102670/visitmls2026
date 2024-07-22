<template>
  <div id="app" class="container mx-auto p-5">
    <transition name="fade">
    <div v-if="visible"
      class="fixed top-40 right-5 flex max-w-sm bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <div class="w-2 bg-gray-800"></div>
      <div class="flex items-center px-2 py-3">
        <!-- <img class="w-12 h-12 object-cover rounded-full" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"> -->
        <div class="mx-3">
          <!-- <h2 class="text-xl font-semibold text-gray-800">Notification</h2> -->
          <p class="text-gray-600">Activation successful! Redirecting... .</p>
        </div>
      </div>
    </div>
    </transition>
    <!-- Popup Notification -->
    <transition name="fade">
      <div
        v-if="visible"
        class="fixed top-5 right-5 bg-white shadow-lg rounded-lg overflow-hidden max-w-md p-4 z-50"
      >
        <div class="w-full">
          <h2 class="text-xl font-semibold text-gray-800">Notification</h2>
          <p class="text-gray-600 mt-2">
            This is a notification message.
            <a href="#" class="text-blue-500">Check details</a>.
          </p>
        </div>
      </div>
    </transition>

    <!-- Show Popup Button -->
    <button
      @click="showPopup"
      class="mt-5 bg-green-500 text-white py-2 px-4 rounded"
    >
      Show Popup
    </button>
  </div>
</template>

<script>
export default {
  name: "PopupNotification",
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    showPopup() {
      this.visible = true;
      setTimeout(() => {
        this.visible = false;
      }, 3000);
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
