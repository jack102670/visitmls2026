<template>
  <main
    class="flex-1 text overflow-y-auto bg-[#CED1DA] dark:bg-gray-900 p-4 sm:ml-64"
  >
    <div class="container mx-auto">
      <div
        class="relative overflow-hidden bg-[#f7fbff] dark:bg-gray-900 dark:text-white border-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <h1
          class="text-blue-800 dark:text-blue-600 text-xl md:text-2xl font-bold"
        >
          Assign Checker
        </h1>

        <!-- body -->
        <div class="flex flex-col lg:flex-row">
          <!-- left -->
          <div class="flex flex-1 flex-col py-8">
            <div class="flex flex-col w-52 mb-8">
              <h1 class="text-lg font-semibold w-screen mb-6">
                Choose the checker and select the duration
              </h1>
              <DropDown
                inputId="departmentInput"
                label="Department"
                :options="AllDepartments"
                :mandatory="true"
                @input="(payload) => (chosenDepartment = payload)"
              />
              <DropDown
                inputId="nameInput"
                label="Employee Name"
                :options="FilteredEmployees.map((item) => item.name)"
                :mandatory="true"
                @input="(payload) => (checkerName = payload)"
                class="mt-4"
              />
            </div>

            <!-- calendar -->
            <div class="w-80 mb-8 bg-white dark:bg-gray-700 p-4 rounded-lg">
              <!-- calendar header -->
              <div class="flex w-full justify-between pb-4">
                <button @click="prevMonth">⬅️</button>
                <h2>{{ monthYear }}</h2>
                <button @click="nextMonth">➡️</button>
              </div>

              <!-- calendar body -->
              <div class="grid grid-cols-7 mt-4">
                <div
                  v-for="day in [
                    'Mon',
                    'Tue',
                    'Wed',
                    'Thu',
                    'Fri',
                    'Sun',
                    'Sat',
                  ]"
                  :key="day"
                  class="text-center p-2"
                >
                  {{ day }}
                </div>
                <div
                  v-for="n in firstDayOfMonth"
                  :key="n"
                  class="text-center p-2"
                ></div>
                <div
                  v-for="day in daysInMonth"
                  :key="day"
                  class="text-center p-2 cursor-pointer"
                  :class="[
                    isPastDate(day)
                      ? 'bg-gray-300 text-gray-400 dark:text-gray-400'
                      : '',
                    isSelectedDate(day)
                      ? 'bg-blue-800 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 dark:text-black',
                  ]"
                  @click="selectDate(day)"
                >
                  {{ day }}
                </div>
              </div>
            </div>

            <div class="flex flex-col w-52 mb-8">
              <button
                @click="AddCheckers()"
                class="bg-blue-800 text-white py-2 w-32 rounded-lg hover:bg-blue-900"
              >
                Confirm
              </button>
            </div>
          </div>

          <!-- right -->
          <div class="flex-1">
            <div
              v-for="(checker, i) in Checkers"
              :key="i"
              class="bg-blue-800 text-white p-4 rounded-xl text-xl mb-6 shadow-lg"
            >
              <div
                class="text-3xl mb-4 font-bold flex justify-between items-center"
              >
                <h1>
                  {{
                    checker.checkerName + ' (' + checker.chosenDepartment + ')'
                  }}
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="white"
                  class="size-8 cursor-pointer"
                  @click="DeleteChecker(i)"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </div>
              <div class="flex text-gray-200 w-full justify-between">
                <div>
                  <h1>From</h1>
                  <h1>{{ checker.startDate }}</h1>
                </div>

                <div>
                  <h1>To</h1>
                  <h1>{{ checker.endDate }}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import DropDown from './DropDown.vue';
import moment from 'moment';
import axios from 'axios';
import { store } from '@/views/store.js';

export default {
  components: {
    DropDown,
  },
  data() {
    return {
      checkerName: '',
      startDate: null,
      endDate: null,
      Checkers: [],
      AllDepartments: [],
      AllEmployees: [],
      chosenDepartment: '',
      FilteredEmployees: [],

      // Calendar
      currentDate: new Date(),
    };
  },
  computed: {
    month() {
      return this.currentDate.getMonth();
    },
    year() {
      return this.currentDate.getFullYear();
    },
    daysInMonth() {
      return new Date(this.year, this.month + 1, 0).getDate();
    },
    firstDayOfMonth() {
      return new Date(this.year, this.month, 1).getDay();
    },
    monthYear() {
      return this.currentDate.toLocaleString('default', {
        month: 'long',
        year: 'numeric',
      });
    },
    today() {
      return new Date().setHours(0, 0, 0, 0);
    },
  },
  methods: {
    async GetAllDepartments() {
      await axios
        .get('http://172.28.28.91:99/api/User/GetDepartment')
        .then((response) => {
          this.AllDepartments = response.data.result.map(
            (item) => item.department
          );
          this.GetAllEmployees();
        });
    },
    async GetAllEmployees() {
      await axios
        .get('http://172.28.28.91:99/api/User/GetAllEmployees')
        .then((response) => {
          this.AllEmployees = response.data.result;
          console.log(response);
        });
    },
    async AddCheckers() {
      if (this.startDate && !this.endDate) {
        this.endDate = this.startDate;
      }
      if (
        this.checkerName &&
        this.startDate &&
        this.endDate &&
        this.chosenDepartment
      ) {
        const newChecker = {
          checkerName: this.checkerName,
          startDate: moment(this.startDate).format('DD MMMM YYYY'),
          endDate: moment(this.endDate).format('DD MMMM YYYY'),
          chosenDepartment: this.chosenDepartment,
        };

        const username_id = store.getSession().userDetails.userId;
        const result = this.FilteredEmployees.find(
          (person) => person.name === this.checkerName
        );
        const data = {
          checker_userId: result.id,
          start_date: moment(this.startDate).format('DD MMMM YYYY'),
          end_date: moment(this.endDate).format('DD MMMM YYYY'),
        };

        await axios
          .put(
            'http://172.28.28.91:91/api/Admin/AssignChecker/' + username_id,
            data
          )
          .then((response) => {
            console.log(response);
            this.Checkers.push(newChecker);
            this.checkerName = '';
            this.startDate = null;
            this.endDate = null;
            this.chosenDepartment = '';
          });
      } else {
        alert('Please fill in all details');
      }
    },
    prevMonth() {
      this.currentDate.setMonth(this.currentDate.getMonth() - 1);
      this.currentDate = new Date(this.currentDate); // Refresh the date object
    },
    nextMonth() {
      this.currentDate.setMonth(this.currentDate.getMonth() + 1);
      this.currentDate = new Date(this.currentDate); // Refresh the date object
    },
    isPastDate(day) {
      const date = new Date(this.year, this.month, day).setHours(0, 0, 0, 0);
      return date < this.today;
    },
    isSelectedDate(day) {
      const date = new Date(this.year, this.month, day).setHours(0, 0, 0, 0);
      if (this.startDate && !this.endDate) {
        return date == this.startDate;
      } else if (this.startDate && this.endDate) {
        return (
          this.startDate &&
          date >= this.startDate &&
          (!this.endDate || date <= this.endDate)
        );
      }

      return null;
    },
    selectDate(day) {
      const selectedDate = new Date(this.year, this.month, day).setHours(
        0,
        0,
        0,
        0
      );
      if (!this.startDate && !this.isPastDate(day)) {
        this.startDate = selectedDate;
        this.endDate = null;
      } else if (this.startDate && !this.endDate && !this.isPastDate(day)) {
        if (selectedDate < this.startDate) {
          this.endDate = this.startDate;
          this.startDate = selectedDate;
        } else {
          this.endDate = selectedDate;
        }
      } else {
        this.resetSelection();
      }
    },
    resetSelection() {
      this.startDate = null;
      this.endDate = null;
    },
    DeleteChecker(index) {
      this.Checkers.splice(index, 1);
    },
  },
  mounted() {
    // Sidebar close or open
    let openOrNot = localStorage.getItem('openOrNot');
    const element = document.querySelector('main');
    if (element && openOrNot == 'false') {
      element.classList.add('become-big');
    } else if (element && openOrNot == 'true') {
      element.classList.remove('become-big');
    }

    this.GetAllDepartments();
  },
  watch: {
    chosenDepartment(newDepartment) {
      console.log(this.AllEmployees);
      this.FilteredEmployees = this.AllEmployees.filter(
        (item) => item.department == newDepartment
      ).map((item) => ({ name: item.name, id: item.username_id }));
    },
  },
};
</script>
