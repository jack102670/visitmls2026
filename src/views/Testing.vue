<template>
  <div class="bg-white dark:bg-gray-900 transition duration-500">
   
    <div class="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-animation">
      <div class="relative z-10 text-center text-gray-900 dark:text-white mb-12">
        <!-- Main content here -->
        <h1 class="text-4xl font-bold">Welcome to My Website</h1>
        <p class="mt-4">This is a beautiful background animation with moving circles.</p>
      </div>
      <div class="relative z-10 text-center w-full px-6">
        <!-- Photo collection -->
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">Photo Collection</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div v-for="(photo, index) in photos" :key="index" class="relative">
            <img :src="photo.url" :alt="photo.alt" class="w-full h-auto rounded-lg shadow-lg"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'HomepagEe',
  components: {
   
  },
  data() {
    return {
      nightMode: false,
      photos: [
        { url: 'https://via.placeholder.com/300', alt: 'Placeholder Image 1' },
        { url: 'https://via.placeholder.com/300', alt: 'Placeholder Image 2' },
        { url: 'https://via.placeholder.com/300', alt: 'Placeholder Image 3' },
        { url: 'https://via.placeholder.com/300', alt: 'Placeholder Image 4' },
        // Add more photos as needed
      ]
    };
  },
  methods: {
    toggleTheme() {
      this.nightMode = !this.nightMode;
      document.documentElement.classList.toggle('dark', this.nightMode);
    }
  }
}
</script>

<style scoped>
@keyframes move-circle1 {
  0%, 100% {
    transform: translate(-50%, -50%);
  }
  50% {
    transform: translate(50%, 50%);
  }
}

@keyframes move-circle2 {
  0%, 100% {
    transform: translate(50%, -50%);
  }
  50% {
    transform: translate(-50%, 50%);
  }
}

.bg-animation::before,
.bg-animation::after {
  content: '';
  position: absolute;
  top: 10%;
  left: 10%;
  width: 300px;
  height: 300px;
  filter: blur(100px);
  border-radius: 50%;
  z-index: 0;
}

.bg-animation::before {
  background: radial-gradient(circle, rgba(0, 0, 255, 0.5), transparent);
  animation: move-circle1 10s infinite;
}

.bg-animation::after {
  background: radial-gradient(circle, rgba(0, 255, 255, 0.3), transparent);
  animation: move-circle2 15s infinite;
}

.dark .bg-animation::before {
  background: radial-gradient(circle, rgba(0, 0, 255, 0.5), transparent);
}

.dark .bg-animation::after {
  background: radial-gradient(circle, rgba(0, 255, 255, 0.3), transparent);
}
</style>
