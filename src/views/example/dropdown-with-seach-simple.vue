<template>
    <div class="relative inline-block w-1/2">
      <div class="flex justify-between border border-gray-300 rounded overflow-hidden">
        <input type="text" placeholder="Search.." v-model="search" @click="toggleDropdown" class="w-full py-2 pl-3 pr-2 focus:outline-none">
        <div class="bg-gray-300 py-2 px-4 cursor-pointer" @click="toggleDropdown">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 text-gray-600">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
      <div v-show="dropdownVisible" class="dropdown-content absolute bg-gray-100 min-w-full max-h-56 overflow-y-auto border border-gray-300 z-10 mt-2 rounded shadow-lg">
        <a v-for="department in filteredDepartments" :key="department.department" @click="selectDepartment(department.department)" class="block text-black py-2 px-4 hover:bg-gray-200">
          {{ department.department }}
        </a>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'DropdownS',
    data() {
      return {
        dropdownVisible: false,
        search: '',
        departments: []
      };
    },
    computed: {
      filteredDepartments() {
        return this.departments.filter(department => {
          return department.department.toLowerCase().includes(this.search.toLowerCase())
        });
      }
    },
    methods: {
      toggleDropdown() {
        this.dropdownVisible = !this.dropdownVisible;
      },
      selectDepartment(department) {
        this.search = department;
        this.dropdownVisible = false;
      },
      async fetchDepartments() {
        try {
          const response = await axios.get('https://esvcportal.pktgroup.com/api/huda/api/User/GetDepartment');
          this.departments = response.data.result;
          console.log(this.departments);
        } catch (error) {
          console.error(`Error fetching departments: ${error}`);
        }
      }
    },
    created() {
      this.fetchDepartments();
    }
  };
  </script>
  
  <style scoped>
  .dropdown-content {
    max-height: 14rem; /* max-h-56 in Tailwind CSS */
  }
  </style>
  