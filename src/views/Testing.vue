<template>
  <div>
    <h1>Welcome to Testing.vue!</h1>
    <p>This is a sample Vue component.</p>
    <div>
      <!-- View Icon -->
      <svg @click="view" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M22 12h-4m-2 0a10 10 0 0 0-5.6-8.77 10 10 0 0 0-11.2 0A10 10 0 0 0 2 12a10 10 0 0 0 5.6 8.77 10 10 0 0 0 11.2 0A10 10 0 0 0 20 12h2z"></path>
      </svg>

      <!-- Edit Icon -->
      <svg @click="edit" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3">
        <path d="M12 20h9"></path>
        <path d="M16 4a2 2 0 0 0-2-2 2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2z"></path>
        <line x1="16" y1="9" x2="12" y2="13"></line>
        <line x1="12" y1="11" x2="16" y2="7"></line>
      </svg>

      <!-- Delete Icon -->
      <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        <line x1="10" y1="11" x2="10" y2="17"></line>
        <line x1="14" y1="11" x2="14" y2="17"></line>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestingW',
  data() {
    return {
      message: 'Hello, world!'
    }
  },
  methods: {
    greet() {
      console.log(this.message);
    },
    view() {
      console.log('View action triggered');
    },
    edit() {
      console.log('Edit action triggered');
    },
    delete() {
      console.log('Delete action triggered');
    }
  },
  mounted() {
    this.greet();
  }
}
</script>

<style scoped>
h1 {
  color: blue;
}
svg {
  cursor: pointer;
  margin: 0 10px;
}
</style>