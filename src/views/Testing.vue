<template>
  <div class="bg-pink-700 h-screen">
    <P class="text-4xl p-4">lorem</P>
    <div class="grid grid-cols-1 md:grid-cols-2"> 
     
      <div class="bg-white rounded-lg p-10">
        <div
          class="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-3 m-3 rounded-md gap-4 p-2"
        >
          <div class="min-h-[100px] rounded bg-red-500"></div>
          <div class="min-h-[100px] rounded bg-yellow-500"></div>
          <div class="min-h-[100px] rounded bg-green-500"></div>
          <div class="min-h-[100px] rounded bg-blue-500"></div>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-3 m-3 rounded-md gap-4 p-2"
        >
          <div class="min-h-[100px] rounded bg-red-500"></div>
          <div class="min-h-[100px] rounded bg-yellow-500"></div>
          <div class="min-h-[100px] rounded bg-green-500"></div>
          <div class="min-h-[100px] rounded bg-blue-500"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DynamicForms",
  data() {
    return {};
  },
  methods: {},
};
</script>
