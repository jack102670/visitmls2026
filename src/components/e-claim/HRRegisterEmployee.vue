<template>
  <main
    class="flex-1 text overflow-y-auto bg-[#CED1DA] dark:bg-gray-900 dark:text-white p-4 sm:ml-64"
    id="summaryPrint"
  >
    <div class="container mx-auto text-xs lg:text-base" id="summaryPrint">
      <div
        class="print-div relative overflow-auto bg-[#f7fbff] dark:bg-gray-900 border-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <div class="bg-white xl:w-2/3 md:w-4/5 w-full p-6">
          <h1 class="text-3xl font-bold text-gray-800">
            Registration for Employee User Profile
          </h1>
          <p class="mt-2 text-gray-600 text-justify">
            Note: Please fill in all the mandatory fields to register for an
            employee
          </p>

          <div class="grid grid-cols-1 lg:grid-cols-2 mt-6 w-full">
            <DropDown
              inputId="userIdInput"
              label="User ID"
              :options="[
                'User1',
                'User2',
                'User3',
                'User4',
                'User1',
                'User2',
                'User3',
                'User4',
              ]"
              :mandatory="true"
              v-model="form.userId"
            />
            <DropDown
              inputId="employeeIdInput"
              label="Employee ID"
              :options="['Emp1', 'Emp2', 'Emp3', 'Emp4']"
              :mandatory="true"
              class="mt-6 lg:mt-0 lg:ml-4"
              v-model="form.employeeId"
            />
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 mt-6 w-full">
            <DropDown
              inputId="departmentInput"
              label="Department"
              :options="['HR', 'Finance', 'IT', 'Marketing']"
              :mandatory="true"
              v-model="form.department"
            />
            <DropDown
              inputId="positionInput"
              label="Position"
              :options="['Manager', 'Analyst', 'Developer', 'Designer']"
              class="mt-6 lg:mt-0 lg:ml-4"
              :mandatory="true"
              v-model="form.position"
            />
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 mt-6 w-full">
            <DropDown
              inputId="reportingDepartmentInput"
              label="Reporting to (Department)"
              :options="['HR', 'Finance', 'IT', 'Marketing']"
              v-model="form.reportingDepartment"
            />
            <DropDown
              inputId="reportingIdInput"
              label="Reporting to (Employee ID)"
              :options="['ID1', 'ID2', 'ID3', 'ID4']"
              class="mt-6 lg:mt-0 lg:ml-4"
              :mandatory="true"
              v-model="form.reportingId"
            />
          </div>

          <div class="w-full flex justify-end">
            <button
              class="py-2 px-6 mt-10 text-white bg-[#160959] hover:bg-blue-950 rounded-md"
              @click="Register()"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import DropDown from './DropDown.vue';

export default {
  components: {
    DropDown,
  },
  data() {
    return {
      form: {
        userId: '', // Initialize with empty values
        employeeId: '',
        department: '',
        position: '',
        reportingDepartment: '',
        reportingId: '',
      },
    };
  },
  methods: {
    Register() {
      // Example: Post the 'form' object to your API endpoint
      console.log('Form Data:', this.form);
      // Replace with actual POST request to your API
      // axios.post('/api/registration', this.form)
      //   .then(response => {
      //     console.log('Response:', response.data);
      //     // Handle success
      //   })
      //   .catch(error => {
      //     console.error('Error:', error);
      //     // Handle error
      //   });
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
  },
};
</script>
