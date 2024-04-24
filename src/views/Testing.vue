<template>
  <div class="bg-pink-700 h-screen">
    <p class="text-4xl p-4">lorem</p>
    <div class="grid grid-cols-1 md:grid-cols-2 ml-3"> 
      <div class="bg-white/30 backdrop-blur-sm rounded-lg p-5">
        <h1 class="text-center text-3xl text-slate-100">PKT LOGISTICS</h1>
        <div class="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-3 m-3 rounded-md gap-4 p-2">
          <div class="min-h-[100px] rounded bg-white hover:bg-slate-200">
            <p class="font-semibold text-center">Security</p>
            <hr>
          </div>
          <div class="min-h-[100px] rounded bg-white hover:bg-slate-200">
            <p class="font-semibold text-center">E-Claim</p>
            <hr>
            <img src="https://img.icons8.com/external-others-phat-plus/64/external-claim-shipping-color-line-others-phat-plus.png" alt="e-claim" class="w-10 h-10 mx-auto p-1">
          </div>
          <div class="min-h-[100px] rounded bg-white hover:bg-slate-200">
            <p class="font-semibold text-center">Safety</p>
            <hr>
            <h1></h1>
          </div>    <div class="min-h-[100px] rounded bg-white overflow-hidden hover:bg-slate-200">
            <p class="font-semibold text-center">Maintenance</p>
            <hr>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-3 m-3 rounded-md gap-4 p-2">
          <div class="min-h-[100px] rounded bg-white-500"></div>
          <div class="min-h-[100px] rounded bg-white-500"></div>
          <div class="min-h-[100px] rounded bg-white-500"></div>
          <div class="min-h-[100px] rounded bg-white-500"></div>
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
