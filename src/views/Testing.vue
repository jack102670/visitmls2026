<template>
  <div>
    <!-- Display your data here -->
    <button @click="refreshPage">Refresh Page</button>
  </div>
</template>

<script>
export default {
  name: "testingVie",
  methods: {
    refreshPage() {
      // Reload the current URL, effectively refreshing the page
      window.location.reload();
    }
  }
};
</script>
