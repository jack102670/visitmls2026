<template>
    <div class="border border-[1px] rounded-md px-4 py-6 sm:px-6">
      <h1 class="font-bold text-xl">Job Description</h1>
  
      <div class="space-y-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label for="company" class="block mb-1 text-sm font-medium text-primary dark:text-white">
              Company: <span class="text-red-500">*</span>
            </label>
            <input type="text" id="company" v-model="form.company" 
              class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Input company" required readonly />
          </div>
          <div>
            <label for="department" class="block mb-1 text-sm font-medium text-primary dark:text-white">
              Department: <span class="text-red-500">*</span>
            </label>
            <input type="text" id="department" v-model="form.department"
              class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Department Name" required readonly />
          </div>
        </div>
  
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label for="position" class="block mb-1 text-sm font-medium text-primary dark:text-white">
              Position: <span class="text-red-500">*</span>
            </label>
            <input type="text" id="position" v-model="form.position"
              class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Input position" required readonly />
          </div>
          <div>
            <label for="report-to" class="block mb-1 text-sm font-medium text-primary dark:text-white">
              Report to: <span class="text-red-500">*</span>
            </label>
            <input type="text" id="report-to" v-model="form.reportTo"
              class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Report to" required readonly />
          </div>
        </div>
      </div>
  
      <hr class="border-[1px] my-4" />
  
      <h2 class="font-bold text-lg">Responsibilities</h2>
      <div class="">
        <label for="responsibilities" class="block mb-1 text-sm font-medium text-primary dark:text-white italic">
          Responsibilities: <span class="text-red-500">*</span>
        </label>
        <textarea id="responsibilities" rows="4" v-model="form.responsibilities"
          class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write the responsibilities here" required readonly></textarea>
      </div>
  
      <div class="border-b my-4"></div>
  
      <h2 class="font-bold text-lg">Duties</h2>
      <div class="">
        <label for="duties" class="block mb-1 text-sm font-medium text-primary dark:text-white italic">
          Duties: <span class="text-red-500">*</span>
        </label>
        <textarea id="duties" rows="4" v-model="form.duties"
          class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write the duties here" required readonly></textarea>
      </div>
  
      <div class="border-b my-6"></div>
  
      <h2 class="font-bold text-lg mb-4">Competence</h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div>
          <label for="education" class="block mb-1 text-sm font-medium text-primary dark:text-white">
            Education: <span class="text-red-500">*</span>
          </label>
          <input type="text" id="education" v-model="form.education"
            class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Input Education" required readonly />
        </div>
        <div>
          <label for="experience" class="block mb-1 text-sm font-medium text-primary dark:text-white">
            Experience: <span class="text-red-500">*</span>
          </label>
          <input type="text" id="experience" v-model="form.experience"
            class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Input experience" required readonly />
        </div>
        <div>
          <label for="skills" class="block mb-1 text-sm font-medium text-primary dark:text-white">
            Skills: <span class="text-red-500">*</span>
          </label>
          <input type="text" id="skills" v-model="form.skills"
            class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Input skills" required readonly />
        </div>
      </div>
  
    </div>
  </template>
  <script>
  import Swal from "sweetalert2";
  import { fetchHrData } from "@/api/EFormApi";
  import { store } from "@/views/store.js";
  export default {
    data() {
      return {
        form: {
          company: "",
          position: "",
          department: "",
          reportTo: "",
          responsibilities: "",
          duties: "",
          education: "",
          experience: "",
          skills: "",
        },
        validationErrors: {},
        uniqueKey: localStorage.getItem("uniqueKey"),
  
        props: {
          formData: Object,
        },
      };
    },
  };
  </script>
  