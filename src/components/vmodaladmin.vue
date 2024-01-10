<template>
  <div
    id="modal-backdrop"
    class="fixed inset-0 bg-opacity-60 bg-black flex justify-center items-center flex-1 overflow-x-hidden text overflow-y-auto p-4 sm:ml-64 h-auto "
  >
    <div
      id="modal"
      class="bg-blue-50 rounded-3xl overflow-x-auto flex flex-col w-6/12 justify-between [calculateModalSize()]"
    >
      <!-- Modal Header -->
      <header
        id="modal-header"
        class="px-4 py-6 flex justify-between items-center border-b-2 border-white"
      >
        <slot name="header">Dummy header</slot>
        <button
          type="button"
          class="w-7 p-2 bg-gray-300 rounded-full"
          @click="close"
        >
        <img src="../assets/letter-x.svg" alt="close button" />
        </button>
      </header>

      <!-- Modal Body -->
      <section id="modal-body" class="px-4 py-6 max-h-80 overflow-y-auto ">
        <slot name="body"></slot>
      </section>

      <!-- Modal Footer -->
      <footer id="modal-footer" class="px-4 py-6 border-t-2 border-white">
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "vmodalComponents",
  methods: {
    close() {
      this.$emit("close");
    },
  
    calculateModalSize() {
      // Calculate your dynamic size based on content or other criteria
      // For example, you can check if the content has a specific class
      const contentElement = this.$el.querySelector('#modal-content');
      const hasLargeContent = contentElement && contentElement.classList.contains('large-content');

      // Set the dynamic size classes
      return {
        'rounded-3xl': true,
        'w-2/6': !hasLargeContent,  // Set width based on content size
        'w-4/6': hasLargeContent,
        'h-4/6': true,  // You can adjust the height dynamically as well
        // Add other classes as needed
      };
    },
  },
};
</script>

