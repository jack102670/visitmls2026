<template>
  <transition name="overlay">
    <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50" @click="closeSlideOver"></div>
  </transition>
  <transition name="slide">
    <div v-if="isOpen" class="fixed inset-y-0 right-0 w-1/3 bg-white dark:bg-gray-800 z-50 p-6">
      <div class="flex justify-end items-center mb-2">
        <button @click="closeSlideOver" class="text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="grid grid-cols-8 gap-4 w-full">
        <div class="col-span-8">
          <div class="flex flex-col py-8">
            <h1 class="text-md font-semibold w-screen mb-6">MONTHLY REPORT FINANCE</h1>
            <!-- Company -->
            <div class="relative mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-1">Company</label>
              <div class="relative overflow-visible">
                <input type="text" :id="companyInputId" v-model="companySearch" @focus="isCompanyOpen = true"
                  @blur="handleCompanyBlur"
                  class="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  placeholder="Search company..." />
                <div v-if="isCompanyOpen"
                  class="absolute z-[1000] w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
                  <div v-for="company in filteredCompany" :key="company" @mousedown="selectCompany(company)"
                    class="p-2 hover:bg-gray-100 cursor-pointer">
                    {{ company }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Date Pickers -->
            <div class="grid grid-cols-4 gap-4">
              <!-- Start Date -->
              <div class="col-span-2 relative mb-8">
                <label class="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                <input type="text" readonly :value="formattedStartDate" @focus="isStartCalendarOpen = true"
                  @blur="handleStartBlur"
                  class="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  placeholder="Select start date" />
                <div v-if="isStartCalendarOpen" ref="startCalendar"
                  class="absolute z-50 w-full mt-1 bg-white border rounded-md shadow-lg">
                  <div class="p-4">
                    <div class="flex justify-between mb-4">
                      <button @click="prevStartMonth">⬅️</button>
                      <span>{{ startMonthYear }}</span>
                      <button @click="nextStartMonth">➡️</button>
                    </div>
                    <div class="grid grid-cols-7 gap-2">
                      <span v-for="day in ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']" :key="day"
                        class="text-center text-sm font-bold w-10 py-2">
                        {{ day }}
                      </span>
                      <span v-for="n in startFirstDayOfMonth" :key="`empty-${n}`" class="text-transparent w-10 h-10">0</span>
                      <button v-for="day in startDaysInMonth" :key="day"
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

              <!-- End Date -->
              <div class="col-span-2 relative">
                <label class="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                <input type="text" readonly :value="formattedEndDate" @focus="isEndCalendarOpen = true"
                  @blur="handleEndBlur"
                  class="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  placeholder="Select end date" />
                <div v-if="isEndCalendarOpen" ref="endCalendar"
                  class="absolute z-50 w-full mt-1 bg-white border rounded-md shadow-lg">
                  <div class="p-4">
                    <div class="flex justify-between mb-4">
                      <button @click="prevEndMonth">⬅️</button>
                      <span>{{ endMonthYear }}</span>
                      <button @click="nextEndMonth">➡️</button>
                    </div>
                    <div class="grid grid-cols-7 gap-2">
                      <span v-for="day in ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']" :key="day"
                        class="text-center text-sm font-bold">
                        {{ day }}
                      </span>
                      <span v-for="n in endFirstDayOfMonth" :key="`empty-${n}`" class="text-transparent">0</span>
                      <button v-for="day in endDaysInMonth" :key="day"
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

            <!-- Confirm -->
            <div class="flex flex-col mb-8">
              <button
                @click="triggerDownload"
                class="bg-primary text-white py-2 mb-[200px] w-32 rounded-lg hover:bg-blue-900">
                Report
              </button>
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
import Swal from 'sweetalert2';

export default {
  emits: ['fetch-report', 'close', 'closeSlideOver'],
  props: {
    isOpen: { type: Boolean, required: true },
    companyInputId: { type: String, default: "companyInput" },
  },
  data() {
    return {
      companySearch: "",
      AllCompany: [],
      chosenCompany: "",
      isCompanyOpen: false,

      startDate: null,
      endDate: null,
      isStartCalendarOpen: false,
      isEndCalendarOpen: false,
      startMonth: moment().startOf("month"),
      endMonth: moment().startOf("month"),
    };
  },
  computed: {
    formattedStartDate() {
      return this.startDate ? moment(this.startDate).format("YYYY-MM-DD") : "";
    },
    formattedEndDate() {
      return this.endDate ? moment(this.endDate).format("YYYY-MM-DD") : "";
    },

    // Start calendar
    startDaysInMonth() {
      return this.startMonth.daysInMonth();
    },
    startFirstDayOfMonth() {
      return this.startMonth.startOf("month").weekday();
    },
    startMonthYear() {
      return this.startMonth.format("MMMM YYYY");
    },

    // End calendar
    endDaysInMonth() {
      return this.endMonth.daysInMonth();
    },
    endFirstDayOfMonth() {
      return this.endMonth.startOf("month").weekday();
    },
    endMonthYear() {
      return this.endMonth.format("MMMM YYYY");
    },

    filteredCompany() {
      return this.AllCompany.filter((company) =>
        typeof company === 'string' &&
        company.toLowerCase().includes(this.companySearch.toLowerCase())
      );
    }

  },
  methods: {
    triggerDownload() {
      if (!this.companySearch || !this.startDate || !this.endDate) {
        Swal.fire({ icon: 'warning', title: 'Missing Info', text: 'Please fill in all fields.' });
        return;
      }

      this.$emit("fetch-report", {
        company: this.companySearch,
        startDate: this.formattedStartDate,
        endDate: this.formattedEndDate
      });
    },

    closeSlideOver() {
      this.resetForm();
      this.$emit('close');
    },
    async GetAllCompany() {
      try {
        const response = await axios.get("http://172.28.28.116:6239/api/User/GetCompany");
        const company = response.data.result.map((item) => item.company_code);
        this.AllCompany = [...new Set(company)];
      } catch (error) {
        console.error("Error fetching company:", error);
      }
    },
    selectCompany(company) {
      this.companySearch = company;
      this.chosenCompany = company;
      this.$emit("update:chosenCompany", company);
      this.isCompanyOpen = false;
    },
    resetForm() {
      this.companySearch = "";
      this.startDate = null;
      this.endDate = null;
    },

    selectStartDate(day) {
      const selected = moment(this.startMonth).date(day);
      console.log('Selected Start Date:', selected.toDate());
      this.startDate = selected.toDate();
      this.isStartCalendarOpen = false;
    },

    selectEndDate(day) {
      const selected = moment(this.endMonth).date(day);
      if (this.startDate && selected.isBefore(this.startDate)) {
        Swal.fire({ icon: 'error', title: 'Invalid Date Selection', text: 'End date cannot be before start date' });
        return;
      }

      this.endDate = selected.toDate();
      this.isEndCalendarOpen = false;
    },

    isStartDateDisabled(day) {
      const date = moment(this.startMonth).date(day);
      return false;
    },

    isDateDisabled(day) {
      const date = moment(this.endMonth).date(day);
      return this.startDate && date.isBefore(moment(this.startDate), "day");
    },


    isSelectedStartDate(day) {
      return this.startDate && moment(this.startMonth).date(day).isSame(moment(this.startDate), 'day');
    },

    isSelectedEndDate(day) {
      return this.endDate && moment(this.endMonth).date(day).isSame(moment(this.endDate), 'day');
    },

    nextStartMonth() {
      this.startMonth = moment(this.startMonth).add(1, "month");
    },
    prevStartMonth() {
      this.startMonth = moment(this.startMonth).subtract(1, "month");
    },

    nextEndMonth() {
      this.endMonth = moment(this.endMonth).add(1, "month");
    },
    prevEndMonth() {
      this.endMonth = moment(this.endMonth).subtract(1, "month");
    },

    handleStartBlur(event) {
      setTimeout(() => {
        if (!this.$refs.startCalendar?.contains(document.activeElement)) {
          this.isStartCalendarOpen = false;
        }
      }, 200);
    },

    handleEndBlur(event) {
      setTimeout(() => {
        if (!this.$refs.endCalendar?.contains(document.activeElement)) {
          this.isEndCalendarOpen = false;
        }
      }, 200);
    },

    handleCompanyBlur() {
      setTimeout(() => {
        this.isCompanyOpen = false;
      }, 200);
    }
  },
  mounted() {
    this.GetAllCompany();
  },
};
</script>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease-in-out;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(100%);
}
.slide-enter-to, .slide-leave-from {
  transform: translateX(0);
}
.overlay-enter-active, .overlay-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.overlay-enter-from, .overlay-leave-to {
  opacity: 0;
}
.overlay-enter-to, .overlay-leave-from {
  opacity: 1;
}
</style>
