<template>
  <main
    class="flex-1 text overflow-y-auto bg-[#CED1DA] dark:bg-gray-900 dark:text-white p-4 sm:ml-64"
    id="summaryPrint"
  >
    <div class="container mx-auto text-xs lg:text-base" id="summaryPrint">
      <div
        class="print-div relative overflow-auto bg-[#f7fbff] dark:bg-gray-900 border-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <div class="flex flex-col items-center">
          <h1 class="text-3xl font-semibold mx-auto text-blue-800">
            Register for Employee
          </h1>
          <p class="mt-2 text-lg text-gray-500 text-justify">
            Enter the Information to register for an employee
          </p>

          <div class="grid grid-cols-1 lg:grid-cols-2 mt-6 xl:w-2/3 lg:w-4/5">
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
            />
            <DropDown
              inputId="employeeIdInput"
              label="Employee ID"
              :options="['Emp1', 'Emp2', 'Emp3', 'Emp4']"
              class="mt-6 lg:mt-0"
            />
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 mt-6 xl:w-2/3 lg:w-4/5">
            <DropDown
              inputId="departmentInput"
              label="Department"
              :options="['HR', 'Finance', 'IT', 'Marketing']"
            />
            <DropDown
              inputId="positionInput"
              label="Position"
              :options="['Manager', 'Analyst', 'Developer', 'Designer']"
              class="mt-6 lg:mt-0"
            />
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 mt-6 xl:w-2/3 lg:w-4/5">
            <DropDown
              inputId="reportingDepartmentInput"
              label="Reporting to (Department)"
              :options="['HR', 'Finance', 'IT', 'Marketing']"
            />
            <DropDown
              inputId="reportingIdInput"
              label="Reporting to (ID)"
              :options="['ID1', 'ID2', 'ID3', 'ID4']"
              class="mt-6 lg:mt-0"
            />
          </div>

          <button
            class="py-2 px-6 mt-10 text-white bg-blue-800 hover:bg-blue-900 rounded-md"
          >
            Register
          </button>
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
};
</script>
