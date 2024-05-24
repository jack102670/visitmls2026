<template>
    <div>
      <h1>Select a Month</h1>
      <select v-model="selectedMonth">
        <option v-for="month in months" :key="month" :value="month">{{ month }}</option>
      </select>
      <p v-if="selectedMonth">You selected: {{ selectedMonth }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name:"manPage",
    data() {
      return {
        months: [],
        selectedMonth: ''
      };
    },
    created() {
      this.fetchMonths();
    },
    methods: {
      async fetchMonths() {
        try {
          const response = await fetch('https://hazman97.github.io/months-api/months.json');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          this.months = data.months;
        } catch (error) {
          console.error('Error fetching months:', error);
        }
      }
    }
  };
  </script>
  