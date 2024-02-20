<template>
  <div
    id="modal-backdrop"
    class="fixed inset-0 bg-opacity-60 bg-black flex justify-center items-center flex-1 overflow-x-hidden text overflow-y-auto p-4 sm:ml-64 h-auto"
  >
    <div
      id="modal"
      :class="[modalWidthClass]"
      class="bg-blue-50 rounded-3xl overflow-x-auto flex flex-col justify-between"
    >
      <!-- Modal Header -->
      <header
        id="modal-header"
        class="px-2 py-3 flex justify-between bg-[#160959e2] items-center border-b-2 border-white"
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
      <section id="modal-body" class="px-4 py-6 max-h-[300px] overflow-y-auto">
        <slot name="body"></slot>
      </section>

      <!-- Modal Footer -->
      <footer id="modal-footer" :class="footerClasses">
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
    }
  },
  computed: {
    modalWidthClass() {
      // Determine the appropriate width class based on screen size
      if (window.innerWidth <= 640) {
        return "w-full";
      } else if (window.innerWidth <= 768) {
        return "w-4/5";
      } else {
        return "w-6/12";
      }
    },
    footerClasses() {
      const displayScale = window.devicePixelRatio;
      let classes = ["px-4", "py-6", "border-t-2", "border-white"];

      // Add classes based on display scale
      if (displayScale === 1.2) {
        classes.push("max-h-[300px]", "overflow-y-auto");
      }

      return classes.join(" ");
    }
  },
  beforeUnmount() {
    // Clean up code here before the component is unmounted
  }
};
</script>

<style scoped>
/* Additional styles for responsiveness */
@media screen and (max-width: 640px) {
  #modal-backdrop {
    align-items: flex-start;
  }
  #modal {
    max-width: 100%;
  }
}

@media screen and (min-width: 641px) and (max-width: 768px) {
  #modal {
    max-width: 80%;
  }
}

@media screen and (min-width: 769px) {
  #modal {
    max-width: 50%;
  }
}
</style>
