<template>
  <div class="min-h-screen bg-gray-50 py-6 flex flex-col items-center justify-center relative overflow-hidden sm:py-12">
    <input v-model="search" @click="toggleDropdown" type="search" placeholder="Search Here..." class="py-3 px-4 w-1/2 rounded shadow font-thin focus:outline-none focus:shadow-lg focus:shadow-slate-200 duration-100 shadow-gray-100">

    <ul v-show="open" class="w-1/2">
      <template v-for="item in filteredItems" :key="item">
        <li class="w-full text-gray-700 p-4 mt-2 bg-white">{{ item.name }}</li>
      </template>
    </ul>
  </div>
  
</template>

<script>
export default {
  name:'TesviVIew',
  data() {
    return {
      search: '',
      open: false,
      items: ['Bitcoin', 'Ethereum', 'Siacoin'],
      quotes: [], // Array to hold fetched quotes
      displayedQuotes: [], // Array to hold subset of fetched quotes to display
      selectedItem: null // Variable to hold selected item
    };
  },
  computed: {
    filteredItems() {
      return this.quotes.filter((item) =>item.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
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
  }

};
</script>
