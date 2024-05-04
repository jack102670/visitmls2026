<template>
  <div class="w-full h-[100vh] bg-slate-200 flex justify-center items-center flex-col">
    <div class="w-96 relative" @click.stop>
      <select v-model="selectedDepartment">
        <option disabled value="">Please select a department</option>
        <option v-for="department in departments" :key="department.code" :value="department.name">
          {{ department.name }}
        </option>
      </select>

      <select v-model="selectedPerson">
        <option disabled value="">Please select a person</option>
        <option v-for="person in filteredPeople" :key="person.id" :value="person.name">
          {{ person.name }}
        </option>
      </select>

      <input
        id="autocompleteInput"
        placeholder="Search for a person"
        class="px-5 py-3 w-full border border-gray-300 rounded-md"
        v-model="keyword"
        @click="onKeyUp"
      />

      <div
        id="dropdown"
        class="w-full h-60 border border-gray-300 rounded-md bg-white absolute overflow-y-auto"
        v-show="showDropdown"
      >
        <div
          v-for="person in filteredPeople"
          :key="person.id"
          @click="selectOption(person.name)"
          class="px-5 py-3 border-b border-gray-200 text-stone-600 cursor-pointer hover:bg-slate-100 transition-colors"
        >
          {{ person.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestingView",
  data() {
    return {
      departments: [
        { name: "HR", code: "HR" },
        { name: "IT", code: "IT" },
        { name: "Finance", code: "Finance" },
        { name: "Marketing", code: "Marketing" },
        { name: "Sales", code: "Sales" },
      ],
      people: [
        { name: "John Doe", department: "HR", id: 1 },
        { name: "man hdaoihsdas", department: "HR", id: 1 },
        { name: "Jane Smith", department: "IT", id: 2 },
        { name: "Mike Johnson", department: "Finance", id: 3 },
        { name: "Emily Brown", department: "Marketing", id: 4 },
        { name: "David Lee", department: "Sales", id: 5 },
      ],
      keyword: "",
      showDropdown: false,
      selectedDepartment: "", // Add this line
    };
  },
  methods: {
    onKeyUp() {
      this.showDropdown = true;
    },
    selectOption(name) {
      this.keyword = name;
      this.showDropdown = false;
    },
  },
  computed: {
    filteredPeople() {
      if (!this.keyword && !this.selectedDepartment) {
        return this.people;
      }
      return this.people.filter((person) => {
        const keywordMatch = this.keyword ? person.name.includes(this.keyword) : true;
        const departmentMatch = this.selectedDepartment ? person.department === this.selectedDepartment : true;
        return keywordMatch && departmentMatch;
      });
    },
  },
};
</script>

<style scoped>
#dropdown {
  max-height: 200px; /* Adjust this value to fit your needs */
}
</style>
