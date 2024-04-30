<template>
  <div>
    <h1>Welcome to Vue 3!</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name:'testBie',
  data() {
    return {
      message: "Hello, Vue 3!"
    };
  }
};
</script>

<style scoped>
h1 {
  color: blue;
}
</style>