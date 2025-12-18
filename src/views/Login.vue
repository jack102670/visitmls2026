<template>
  <div class="h-screen flex items-center justify-center">
    <div class="w-96">
      <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>

      <input
        type="email"
        placeholder="Email"
        class="w-full border p-2 mb-4"
      />

      <input
        type="password"
        placeholder="Password"
        class="w-full border p-2 mb-6"
      />

      <button
        class="w-full bg-amber-700 text-white py-2"
        @click="login"
      >
        Login
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function login() {
  // 模拟登录成功
  router.push('/dashboard')
}
</script>
