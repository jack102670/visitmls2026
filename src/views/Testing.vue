<template>
  <div class="container">
    <div class="running-number">{{ runningNumber }}</div>
    <div class="running-number">{{ runningNumber2 }}</div>
    <div class="running-number">{{ runningNumber3 }}</div>
    <div class="running-number">{{ runningNumber4 }}</div>
  </div>
</template>

<script>
export default {
  name: 'TestingInsghR',
  data() {
    return {
      // Your data properties go here
      runningNumber: null,
      runningNumber2: null,
      runningNumber3: null,
      runningNumber4: null,
    };
  },
  methods: {
    async fetchRunningNumber() {
      try {
        const response = await fetch('localhost/api/User/GetRunningNumber');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.runningNumber = data.runningNumber; // Assuming the API returns an object with a runningNumber property
      } catch (error) {
        console.error('Error fetching running number:', error);
      }
    },
    async fetchRunningNumber2() {
      try {
        const response = await fetch('localhost:5000/api/User/GetRunningNumber');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.runningNumber2 = data.runningNumber; // Assuming the API returns an object with a runningNumber property
      } catch (error) {
        console.error('Error fetching running number:', error);
      }
    },
    async fetchRunningNumber3() {
      try {
        const response = await fetch('localhost:5001/api/User/GetRunningNumber');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.runningNumber3 = data.runningNumber; // Assuming the API returns an object with a runningNumber property
      } catch (error) {
        console.error('Error fetching running number:', error);
      }
    },
    async fetchRunningNumber4() {
      try {
        const response = await fetch('https://localhost:5001/api/User/GetRunningNumber');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.runningNumber3 = data.runningNumber; // Assuming the API returns an object with a runningNumber property
      } catch (error) {
        console.error('Error fetching running number:', error);
      }
    },
  },
  mounted() {
    this.fetchRunningNumber();
    this.fetchRunningNumber2();
    this.fetchRunningNumber3();
    this.fetchRunningNumber4(); // Fetch the running number when the component is mounted
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