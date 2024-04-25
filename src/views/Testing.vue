<template>
  <div>
    <form @submit.prevent="submitForm">
      <label for="itemDropdown">Select an item:</label>
      <select v-model="selectedItem" id="itemDropdown">
  <option value="" disabled>Select an option</option>
  <option v-for="quote in quotes" :key="quote.id" :value="quote.id">
    {{ quote.emp_id }} -
    {{ quote.name }}
  </option>
</select>

      <button type="submit">Submit</button>
    </form>
    <p v-if="selectedItem">Selected Item: {{ selectedItem }}</p>
  </div>
</template>

<script>
export default {
  name: 'TestingView',
  data() {
    return {
      quotes: [], // Array to hold fetched quotes
      displayedQuotes: [], // Array to hold subset of fetched quotes to display
      selectedItem: null // Variable to hold selected item
    };
  },
  methods: {
    fetchData() {
      fetch('http://172.28.28.91:86/api/User/Get_all_employees')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          // Store all fetched quotes in quotes array
          console.log(data.result);
          this.quotes = data.result;
console.log(this.quotes);
          // Slice the array to show only a certain number of quotes (e.g., first 10 quotes)
        
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    submitForm() {
      // Handle form submission here, e.g., send selectedItem to server
      console.log('Form submitted. Selected item:', this.selectedItem);
    }
  },
  mounted() {
    // Fetch data from API when component is mounted
    this.fetchData();
  }
};
</script>

<style scoped>
/* Your component-specific styles go here */
</style>
