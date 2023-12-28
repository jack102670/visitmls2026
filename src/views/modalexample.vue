<template>
  <button
    class="bg-white py-4 px-12 rounded-xl shadow-md"
    type="button"
    @click="showModal"
  >
    Open Modal
  </button>
  <Modal v-show="isModalVisible" @close="closeModal">
    <!-- header -->
    <template v-slot:header>
      <h1 class="font-bold text-xl">Confirmation</h1>
    </template>

    <!-- body -->
    <template v-slot:body>
    
      <!-- <p class="py-3 text-xs font-bold text-purple-900">
        Forgot your password?
      </p> -->
      <p class="text-lg">Do you want to approve this?</p>
    </template>

    <!-- footer -->
    <template v-slot:footer>
      <div class="grid grid-cols-2 gap-3">
        <button
          type="button"
          class="rounded-2xl bg-gray-600 shadow-md p-3 my-1 w-full text-white"
        >
          Cancel
        </button>
        <button
          type="button"
          class="rounded-2xl bg-cyan-800 shadow-md p-3 my-1 w-full text-white"
        >
          Confirm
        </button>
      </div>
    </template>
  </Modal>
</template>

<script>
import Modal from "../components/vmodal.vue";

export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style>
body {
  background-color: #f0f0f0;
}
#app {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
