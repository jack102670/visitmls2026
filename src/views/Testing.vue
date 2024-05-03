<template>
  <div class="w-full h-[100vh] bg-slate-200 flex justify-center items-center flex-col">
    <div class="w-96 relative" @click.stop><select v-model="selectedContinent">
  <option disabled value="">Please select a continent</option>
  <option>Asia</option>
  <option>Europe</option>
  <!-- Add other continents as needed -->
</select>

<select v-model="selectedCountry">
  <option disabled value="">Please select a country</option>
  <option v-for="country in filteredCountries" :key="country.code" :value="country.code">
    {{ country.name }}
  </option>
</select>
      <input
        id="autocompleteInput"
        placeholder="Select country name"
        class="px-5 py-3 w-full border border-gray-300 rounded-md"
        v-model="keyword"
        @keyup="onKeyUp"
      />
      <div
        id="dropdown"
        class="w-full h-60 border border-gray-300 rounded-md bg-white absolute overflow-y-auto"
        v-show="showDropdown"
      >
        <div
          v-for="country in filteredCountries"
          :key="country.code"
          @click="selectOption(country.name)"
          class="px-5 py-3 border-b border-gray-200 text-stone-600 cursor-pointer hover:bg-slate-100 transition-colors"
        >
          {{ country.name }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TesviVIew',
  data() {
    return {
      countries: [
        { name: "Afghanistan", code: "AF", continent: "Asia" },
        // ... other countries
        { name: "Belgium", code: "BE", continent: "Europe" },
        // ...
      ],
      keyword: '',
      showDropdown: false,
      quotes: [],
      selectedContinent: '', // Add this line
    };
  },
methods: {
  onKeyUp() {
    this.showDropdown = true;
  },
  selectOption(name) {
    this.keyword = name;
    this.showDropdown = false;
  }
},
computed: {
  filteredCountries() {
    if (!this.keyword && !this.selectedContinent) {
      return this.countries;
    }
    return this.countries.filter(country => {
      const keywordMatch = !this.keyword || country.name.toLowerCase().includes(this.keyword.toLowerCase());
      const continentMatch = !this.selectedContinent || country.continent === this.selectedContinent;
      return keywordMatch && continentMatch;
    });
  }
},
  // ...
};
</script>
<style scoped>
#dropdown {
  max-height: 200px; /* Adjust this value to fit your needs */
}
</style>