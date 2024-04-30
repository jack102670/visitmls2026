<template>
  <div>
    <button
      class="text-white rounded bg-pink-500 px-6 py-4 font-sans font-semibold shadow-lg hover:bg-pink-400 outline-none active:outline-none focus:outline-none flex justify-center item-center"
      @click="toggleModal = !toggleModal"
    >
      Open Modal
    </button>
    <div
      class="fixed overflow-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
      v-if="toggleModal"
    ></div>
    <div class="relative mx-auto w-auto max-w-2xl flex flex-col">
      <div class="bg-white w-full">
        <div class="text-2xl font-bold">Hello</div>
        <span>Local Travelling Form</span>
        <button
          class="rounded bg-green-500 text-white px-6 mt-1 py-2 w-3/12 m-auto mb-3"
          @click="toggleModal = false"
        >
          Close
        </button>
      </div>
    </div>
    <div
      v-if="toggleModal"
      class="absolute z-40 inset-0 opacity-25 bg-black"
    ></div>
  </div>
</template>

<script>
export default {
  name: "modalDialog",
  data() {
    return {
      toggleModal: false,
    };
  },
  methods: {},
};
</script>

<style>
</style>