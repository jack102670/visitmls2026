<template>
  <div class="h-screen grid grid-cols-2">
    <!-- 左边图片 -->
    <div
      class="bg-cover bg-center"
      style="background-image:url('/kltower.jpg')"
    ></div>

    <!-- 右边 -->
    <div class="flex flex-col items-center justify-center gap-6">
      <img src="/logo.png" class="w-48" />
      <h1 class="text-3xl font-bold">WELCOME TO MALAYSIA</h1>

      <div class="flex gap-4">
        <router-link to="/login">
          <button class="px-6 py-2 bg-amber-700 text-white">
            LOG IN
          </button>
        </router-link>

        <router-link to="/signup">
          <button class="px-6 py-2 bg-amber-700 text-white">
            SIGN UP
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
