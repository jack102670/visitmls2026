<template>
  <div class="container">
    <div class="running-number">{{ runningNumber }}</div>

  </div>
</template>

<script>
export default {
  name: 'TestingInsghR',
  data() {
    return {
      // Your data properties go here
      runningNumber: null,
  
    };
  },
  methods: {
    async fetchRunningNumber() {
      try {
        const response = await fetch('http://localhost/api/service2/api/User/GetRunningNumber');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.runningNumber = data.message; // Assuming the API returns an object with a runningNumber property
      } catch (error) {
        console.error('Error fetching running number:', error);
      }
    },

  },
  mounted() {
    this.fetchRunningNumber();

  },
};
</script><style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}

.running-number {
  font-size: 5rem; /* 5xl font size */
  font-weight: bold;
}
</style>