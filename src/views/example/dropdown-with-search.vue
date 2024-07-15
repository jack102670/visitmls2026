<template>
    <div class="w-full h-[100vh] bg-slate-200 flex justify-center items-center flex-col">
      <div class="w-96 relative" @click.stop>
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
          { name: "Afghanistan", code: "AF" },
          // ... other countries
          { name: "Bahamas", code: "BS" },
          { name: "Bahrain", code: "BH" },
          { name: "Bangladesh", code: "BD" },
          { name: "Barbados", code: "BB" },
          { name: "Belarus", code: "BY" },
          { name: "Belgium", code: "BE" },
          { name: "Belize", code: "BZ" },
          { name: "Benin", code: "BJ" },
          { name: "Bermuda", code: "BM" },
          { name: "Bhutan", code: "BT" },
          { name: "Bolivia", code: "BO" },
          { name: "Bosnia and Herzegovina", code: "BA" },
          { name: "Botswana", code: "BW" },
          { name: "Bouvet Island", code: "BV" },
          { name: "Brazil", code: "BR" },
          { name: "British Indian Ocean Territory", code: "IO" },
          { name: "Brunei Darussalam", code: "BN" },
          { name: "Bulgaria", code: "BG" },
          { name: "Burkina Faso", code: "BF" },
          { name: "Burundi", code: "BI" },
          { name: "Cambodia", code: "KH" },
          { name: "Cameroon", code: "CM" },
          { name: "Chad", code: "TD" },
        ],
        keyword: '',
        showDropdown: false,
        quotes: [ ],
      };
    },
    computed: {
      filteredCountries() {
        return this.countries.filter(c =>
          c.name.toLowerCase().includes(this.keyword.toLowerCase())
        );
      },
    },
    methods: {
      onKeyUp() {
        this.showDropdown = true;
      },
      selectOption(selectedOption) {
        this.keyword = selectedOption;
        this.showDropdown = false;
      },
    
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
      },toggleDropdown() {
        this.open = !this.open;
        if (this.open) {
          document.addEventListener('click', this.handleClickOutside);
        } else {
          document.removeEventListener('click', this.handleClickOutside);
        }
      },
      handleClickOutside(event) {
        if (!this.$el.contains(event.target)) {
          this.open = false;
          document.removeEventListener('click', this.handleClickOutside);
        }
      }
    },
    mounted() {
      // Fetch data from API when component is mounted
      this.fetchData();
    }};</script>
  <style scoped>
  #dropdown {
    max-height: 200px; /* Adjust this value to fit your needs */
  }
  </style>