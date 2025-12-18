<template>
  <div class="h-screen flex items-center justify-center">
    <div class="w-96">
      <h2 class="text-2xl font-bold mb-6 text-center">Sign Up</h2>

      <input class="w-full border p-2 mb-4" placeholder="Name" />
      <input class="w-full border p-2 mb-4" placeholder="Email" />
      <input class="w-full border p-2 mb-6" placeholder="Password" />

      <button
        class="w-full bg-amber-700 text-white py-2"
        @click="signup"
      >
        Create Accounts
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function signup() {
  router.push('/dashboard')
}
</script>
