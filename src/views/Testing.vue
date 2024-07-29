<template>
  <div>
    <select v-if="currencies.length" v-model="selectedCurrency">
      <option v-for="currency in currencies" :key="currency.code" :value="currency.code">
        {{ currency.code }} ({{ currency.symbol_native }})
      </option>
    </select>
    <p v-else>Loading currencies...</p>
  </div>
</template>

<script>
export default {
  name: 'TestingI',
  data() {
    return {
      currencies: [],
      selectedCurrency: ''
    };
  },
  methods: {
    async fetchCurrencies() {
      try {
        const response = await fetch('https://gist.githubusercontent.com/ksafranski/2973986/raw/5fda5e87189b066e11c1bf80bbfbecb556cf2cc1/Common-Currency.json');
        const data = await response.json();
        this.currencies = Object.values(data); // Store the currency objects
        console.log('Currencies:', this.currencies);
      } catch (error) {
        console.error('Error fetching currencies:', error);
      }
    }
  },
  mounted() {
    this.fetchCurrencies();
  }
};
</script>

<style scoped>
/* Your component-specific styles go here */
</style>