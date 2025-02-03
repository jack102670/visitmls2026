<template>
    <transition name="overlay">
      <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50" @click="closeSlideOver"></div>
    </transition>
    <transition name="slide">
      <div v-if="isOpen" class="fixed inset-y-0 right-0 w-1/3 bg-white dark:bg-gray-800 z-50 p-6 overflow-y-auto">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold">Slide Over Content</h2>
          <button @click="closeSlideOver" class="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div>
        <div class="grid grid-cols-8 gap-4 w-full">
          <div class="col-span-8">
            <div class="flex flex-col py-8">
              <div class="flex flex-col mb-8">
                <h1 class="text-md font-semibold w-screen mb-6">
                  Choose the checker and select the duration
                </h1>
                <div>
                </div>
                <div class="relative mb-4">
                  <label class="block text-sm font-medium text-gray-700 mb-1">Department</label>
                  <div class="relative">
                    <input type="text" :id="departmentInputId" v-model="departmentSearch"
                      @focus="isDepartmentOpen = true" @blur="handleDepartmentBlur"
                      class="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      placeholder="Search department..." />
                    <div v-if="isDepartmentOpen"
                      class="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
                      <div v-for="dept in filteredDepartments" :key="dept" @mousedown="selectDepartment(dept)"
                        class="p-2 hover:bg-gray-100 cursor-pointer">
                        {{ dept }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative">
                  <label class="block text-sm font-medium text-gray-700 mb-1">Employee Name</label>
                  <div class="relative">
                    <input type="text" :id="nameInputId" v-model="employeeSearch" @focus="isEmployeeOpen = true"
                      @blur="handleEmployeeBlur"
                      class="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      placeholder="Search employee..." />
                    <div v-if="isEmployeeOpen"
                      class="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
                      <div v-for="employee in filteredEmployees" :key="employee.name"
                        @mousedown="selectEmployee(employee.name)" class="p-2 hover:bg-gray-100 cursor-pointer">
                        {{ employee.name }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex space-x-4 py-4">
                    <div class="flex items-center ">
                      <input type="radio" id="permanent" value="permanent" v-model="duration" name="duration"
                        class="mr-2">
                      <label for="permanent" class="text-gray-700">Permanent</label>
                    </div>
                    <div class="flex items-center">
                      <input type="radio" id="temporary" value="temporary" v-model="duration" name="duration"
                        class="mr-2">
                      <label for="temporary" class="text-gray-700">Temporary</label>
                    </div>
                  </div>
                  <div v-show="duration === 'permanent'" class="grid grid-cols-4 gap-4">
                    <div class="col-span-2 relative mb-8">
                      <label class="block text-sm font-medium text-gray-700 mb-1">Effective Date</label>
                      <div class="relative">
                        <input type="text" readonly v-model="formattedStartDate" @focus="isStartCalendarOpen = true"
                          @blur="handleStartBlur"
                          class="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                          placeholder="Select effective date" />
                        <div v-if="isStartCalendarOpen" ref="startCalendar"
                          class="absolute z-50 w-full mt-1 bg-white border rounded-md shadow-lg">
                          <div class="p-4">
                            <div class="flex justify-between mb-4">
                              <button @click="prevMonth">⬅️</button>
                              <span>{{ monthYear }}</span>
                              <button @click="nextMonth">➡️</button>
                            </div>
                            <div class="grid grid-cols-7 gap-2">
                              <span v-for="day in ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']" :key="day"
                                class="text-center text-sm font-bold w-10 py-2">
                                {{ day }}
                              </span>
                              <span v-for="n in firstDayOfMonth" :key="`empty-${n}`" class="text-transparent w-10 h-10">
                                0
                              </span>
                              <button v-for="day in daysInMonth" :key="day"
                                class="w-10 h-10 text-sm rounded-full hover:bg-gray-200 flex items-center justify-center"
                                :class="{
                                  'bg-blue-500 text-white': isSelectedStartDate(day),
                                  'cursor-not-allowed opacity-50': isStartDateDisabled(day)
                                }" :disabled="isStartDateDisabled(day)" @click="selectStartDate(day)">
                                {{ day }}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                <div v-show="duration === 'temporary'" class="grid grid-cols-4 gap-4">
                  <div class="col-span-2 relative mb-8">
                    <label class="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                    <div class="relative">
                      <input type="text" readonly v-model="formattedStartDate" @focus="isStartCalendarOpen = true"
                        @blur="handleStartBlur"
                        class="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="Select start date" />
                      <div v-if="isStartCalendarOpen" ref="startCalendar"
                        class="absolute z-50 w-full mt-1 bg-white border rounded-md shadow-lg">
                        <div class="p-4">
                          <div class="flex justify-between mb-4">
                            <button @click="prevMonth">⬅️</button>
                            <span>{{ monthYear }}</span>
                            <button @click="nextMonth">➡️</button>
                          </div>
                          <div class="grid grid-cols-7 gap-2">
                            <span v-for="day in ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']" :key="day"
                              class="text-center text-sm font-bold w-10 py-2">
                              {{ day }}
                            </span>
                            <span v-for="n in firstDayOfMonth" :key="`empty-${n}`" class="text-transparent w-10 h-10">
                              0
                            </span>
                            <button v-for="day in daysInMonth" :key="day"
                              class="w-10 h-10 text-sm rounded-full hover:bg-gray-200 flex items-center justify-center"
                              :class="{
                                'bg-blue-500 text-white': isSelectedStartDate(day),
                                'cursor-not-allowed opacity-50': isStartDateDisabled(day)
                              }" :disabled="isStartDateDisabled(day)" @click="selectStartDate(day)">
                              {{ day }}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-span-2 relative">
                    <label class="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                    <div class="relative">
                      <input type="text" readonly v-model="formattedEndDate" @focus="isEndCalendarOpen = true"
                        @blur="handleEndBlur"
                        class="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="Select end date" />
                      <div v-if="isEndCalendarOpen" ref="endCalendar"
                        class="absolute z-50 w-full mt-1 bg-white border rounded-md shadow-lg">
                        <div class="p-4">
                          <div class="flex justify-between mb-4">
                            <button @click="prevMonth">⬅️</button>
                            <span>{{ monthYear }}</span>
                            <button @click="nextMonth">➡️</button>
                          </div>
                          <div class="grid grid-cols-7 gap-2">
                            <span v-for="day in ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']" :key="day"
                              class="text-center text-sm font-bold">
                              {{ day }}
                            </span>
                            <span v-for="n in firstDayOfMonth" :key="`empty-${n}`" class="text-transparent">0</span>
                            <button v-for="day in daysInMonth" :key="day"
                              class="w-10 h-10 text-sm rounded-full hover:bg-gray-200 flex items-center justify-center"
                              :class="{
                                'bg-blue-500 text-white': isSelectedEndDate(day),
                                'cursor-not-allowed opacity-50': isDateDisabled(day)
                              }" :disabled="isDateDisabled(day)" @click="selectEndDate(day)">
                              {{ day }}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col mb-8">
                  <button @click="AddCheckers()"
                    class="bg-blue-800 text-white py-2 mb-[200px] w-32 rounded-lg hover:bg-blue-900">
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </transition>
  </template>
  
  <script>
  import moment from 'moment';
import axios from 'axios';
import { store } from '@/views/store.js';
import Swal from 'sweetalert2';

  export default {
    emits: ['update:chosenDepartment', 'update:checkerName', 'close'],
    props: {
      isOpen: {
        type: Boolean,
        required: true,
      },
      departmentInputId: {
      type: String,
      default: "departmentInput",
    },
    nameInputId: {
      type: String,
      default: "nameInput",
    },
    },
    data() {
    return {
      isSlideOverOpen: false,
      checkerName: "",
      duration: 'permanent',
      Checkers: [],
      AllDepartments: [],
      AllEmployees: [],
      chosenDepartment: "",
      FilteredEmployees: [],
      departmentSearch: "",
      employeeSearch: "",
      isDepartmentOpen: false,
      isEmployeeOpen: false,
      isStartCalendarOpen: false,
      isEndCalendarOpen: false,
      startDate: null,
      endDate: null,
      currentMonth: moment().startOf("month"),
    };
  },
  computed: {
    formattedStartDate() {
      return this.startDate ? moment(this.startDate).format("MM/DD/YYYY") : "";
    },
    formattedEndDate() {
      return this.endDate ? moment(this.endDate).format("MM/DD/YYYY") : "";
    },
    daysInMonth() {
      return this.currentMonth.daysInMonth();
    },
    firstDayOfMonth() {
      return moment(this.currentMonth).startOf("month").weekday();
    },
    monthYear() {
      return this.currentMonth.format("MMMM YYYY");
    },
    filteredDepartments() {
      return this.AllDepartments.filter((dept) =>
        dept.toLowerCase().includes(this.departmentSearch.toLowerCase())
      );
    },
    filteredEmployees() {
      return this.AllEmployees.filter(
        (emp) =>
          emp.name.toLowerCase().includes(this.employeeSearch.toLowerCase()) &&
          (!this.chosenDepartment || emp.department === this.chosenDepartment)
      );
    },
  },

    methods: {
      closeSlideOver() {
        this.$emit('close');
      },
      async GetAllDepartments() {
      try {
        const response = await axios.get(
          "http://172.28.28.116:7239/api/User/GetDepartment"
        );
        this.AllDepartments = response.data.result.map((item) => item.department);
        this.GetAllEmployees();
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    },

    async GetAllEmployees() {
      try {
        const response = await axios.get(
          "http://172.28.28.116:7239/api/User/GetAllEmployees"
        );
        this.AllEmployees = response.data.result;
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    },

    selectDepartment(dept) {
      this.departmentSearch = dept;
      this.chosenDepartment = dept;
      this.$emit("update:chosenDepartment", dept);
      this.isDepartmentOpen = false;
    },

    selectEmployee(name) {
      this.employeeSearch = name;
      this.checkerName = name;
      this.$emit("update:checkerName", name);
      this.isEmployeeOpen = false;
    },

    async AddCheckers() {
      if (!this.startDate || !this.endDate || !this.chosenDepartment || !this.checkerName) {
        Swal.fire({
          icon: 'warning',
          title: 'Missing Information',
          text: 'Please fill in all details',
          confirmButtonColor: '#3085d6'
        });
        return;
      }

      const newChecker = {
        checkerName: this.checkerName,
        startDate: moment(this.startDate).format("DD MMMM YYYY"),
        endDate: moment(this.endDate).format("DD MMMM YYYY"),
        chosenDepartment: this.chosenDepartment,
      };

      const username_id = store.getSession().userDetails.userId;
      const result = this.FilteredEmployees.find(
        (person) => person.name === this.checkerName
      );

      const data = {
        checker_userId: result.id,
        start_date: moment(this.startDate).format("DD MMMM YYYY"),
        end_date: moment(this.endDate).format("DD MMMM YYYY"),
      };

      try {
        const response = await axios.put(
          `http://172.28.28.116:7165/api/Admin/AssignChecker/${username_id}`,
          data
        );
           console.log("Data successfully updated:", response);
        this.Checkers.push(newChecker);
        this.saveCheckersToLocalStorage();
        this.resetForm();

        await Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: `Checker ${this.checkerName} has been successfully assigned`,
          confirmButtonColor: '#3085d6',
          timer: 2000,
          timerProgressBar: true
        });

      } catch (error) {
        console.error("Error updating data:", error);

        await Swal.fire({
          icon: 'error',
          title: 'Update Failed',
          text: 'Failed to assign checker. Please try again.',
          confirmButtonColor: '#3085d6'
        });
      }
    },

    resetForm() {
      this.checkerName = "";
      this.startDate = null;
      this.endDate = null;
      this.chosenDepartment = "";
    },

    selectStartDate(day) {
      const selectedDate = moment(this.currentMonth).date(day);

      if (selectedDate.isBefore(moment(), "day")) {
        return;
      }

      if (this.endDate && selectedDate.isAfter(this.endDate)) {
        Swal.fire({
          icon: 'error',
          title: 'Invalid Date Selection',
          text: 'Start date cannot be after end date',
          confirmButtonColor: '#3085d6'
        });
        return;
      }
      this.startDate = selectedDate.toDate();
      this.isStartCalendarOpen = false;
    },

    selectEndDate(day) {
      const selectedDate = moment(this.currentMonth).date(day);
      if (this.startDate && selectedDate.isBefore(this.startDate)) {
        Swal.fire({
          icon: 'error',
          title: 'Invalid Date Selection',
          text: 'End date cannot be before start date',
          confirmButtonColor: '#3085d6'
        });
        return;
      }
      this.endDate = selectedDate.toDate();
      this.isEndCalendarOpen = false;
    },

    isDateDisabled(day) {
      const date = moment(this.currentMonth).date(day);
      return (
        date.isBefore(moment(), "day") ||
        (this.startDate && date.isBefore(moment(this.startDate), "day"))
      );
    },
    isStartDateDisabled(day) {
      const date = moment(this.currentMonth).date(day);
      return date.isBefore(moment(), "day");
    },

    nextMonth() {
      this.currentMonth = moment(this.currentMonth).add(1, "month");
    },

    prevMonth() {
      const newDate = moment(this.currentMonth).subtract(1, "month");

      if (!newDate.endOf('month').isBefore(moment(), 'day')) {
        this.currentMonth = newDate;
      }
    },

    DeleteChecker(index) {
      const checkerToDelete = this.Checkers[index];

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            this.Checkers.splice(index, 1);

            if (this.Checkers.length === 0) {
              localStorage.removeItem('assignedCheckers');
            } else {
              localStorage.setItem('assignedCheckers', JSON.stringify(this.Checkers));
            }
            await Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              text: `${checkerToDelete.checkerName} has been removed as checker`,
              timer: 1500,
              timerProgressBar: true
            });
          } catch (error) {
            console.error('Error deleting checker:', error);

            await Swal.fire({
              icon: 'error',
              title: 'Delete Failed',
              text: 'Failed to remove checker. Please try again.',
              confirmButtonColor: '#3085d6'
            });

            this.loadCheckersFromLocalStorage();
          }
        }
      });
    },

    isSelectedStartDate(day) {
      if (!this.startDate) return false;
      const selectedDate = moment(this.currentMonth).date(day);
      return selectedDate.isSame(moment(this.startDate), 'day');
    },

    isSelectedEndDate(day) {
      if (!this.endDate) return false;
      const selectedDate = moment(this.currentMonth).date(day);
      return selectedDate.isSame(moment(this.endDate), 'day');
    },

    handleStartBlur(event) {
      setTimeout(() => {
        if (this.$refs.startCalendar && !this.$refs.startCalendar.contains(event.relatedTarget)) {
          this.isStartCalendarOpen = false;
        }
      }, 200);
    },

    handleEndBlur(event) {
      setTimeout(() => {
        if (this.$refs.endCalendar && !this.$refs.endCalendar.contains(event.relatedTarget)) {
          this.isEndCalendarOpen = false;
        }
      }, 200);
    },

    saveCheckersToLocalStorage() {
      localStorage.setItem('assignedCheckers', JSON.stringify(this.Checkers));
    },

    loadCheckersFromLocalStorage() {
      const savedCheckers = localStorage.getItem('assignedCheckers');
      if (savedCheckers) {
        this.Checkers = JSON.parse(savedCheckers);
      }
    }
    },
    watch: {
    chosenDepartment(newDepartment) {
      this.FilteredEmployees = this.AllEmployees.filter(
        (item) => item.department === newDepartment
      ).map((item) => ({ name: item.name, id: item.username_id }));
    },
  },
  mounted() {
    this.GetAllDepartments();
    this.loadCheckersFromLocalStorage();
  },
  };
  </script>
  
  <style scoped>
  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.3s ease-in-out;
  }
  
  .slide-enter-from,
  .slide-leave-to {
    transform: translateX(100%);
  }
  
  .slide-enter-to,
  .slide-leave-from {
    transform: translateX(0);
  }
  
  .overlay-enter-active,
  .overlay-leave-active {
    transition: opacity 0.3s ease-in-out;
  }
  
  .overlay-enter-from,
  .overlay-leave-to {
    opacity: 0;
  }
  
  .overlay-enter-to,
  .overlay-leave-from {
    opacity: 1;
  }
  </style>