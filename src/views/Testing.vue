<template>
  <div class="relative inline-block w-full">
    <div class="flex justify-between border border-gray-300 rounded overflow-hidden">
      <input type="text" placeholder="Search.." v-model="search" @click="toggleDropdown" class="w-full py-2 pl-3 pr-2 focus:outline-none">
      <div class="bg-gray-300 py-2 px-4 cursor-pointer" @click="toggleDropdown">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 text-gray-600">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </div>
    <div v-show="dropdownVisible" class="dropdown-content absolute bg-gray-100 min-w-full max-h-[200px] overflow-auto border border-gray-300 z-10 mt-2 rounded shadow-lg">
      <a v-for="link in filteredLinks" :key="link" @click="selectLink(link)" class="block text-black py-2 px-4 hover:bg-gray-200">{{ link }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropdownS',
  data() {
    return {
      dropdownVisible: false,
      search: '',
      links: ['About', 'Base', 'Blog', 'Contact', 'Custom', 'Support', 'Tools']
    };
  },
  computed: {
    filteredLinks() {
      return this.links.filter(link => link.toLowerCase().includes(this.search.toLowerCase()));
    }
  },
  methods: {
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    selectLink(link) {
      this.search = link;
      this.dropdownVisible = false;
    }
  },
  watch: {
    search() {
      this.dropdownVisible = true;
    }
  }
};
</script>