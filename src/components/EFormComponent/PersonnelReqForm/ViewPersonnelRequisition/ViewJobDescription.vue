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
          <input type="text" id="position" v-model="form.designation"
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
      <label for="responsibility" class="block  text-sm py-2 font-medium text-primary dark:text-white italic">
        Responsibilities: <span class="text-red-500">*</span>
      </label>
      <div class="space-y-2">
        <div class="flex flex-wrap gap-2 ">
          <div v-for="(field, index) in form.responsibility" :key="index" class="flex items-center w-full">
            <input
              class="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              :value="field" readonly />
          </div>
        </div>
      </div>

    </div>

    <div class="border-b my-4"></div>

    <h2 class="font-bold text-lg">Duties</h2>
    <div>
      <label for="duty" class="block text-sm py-2 font-medium text-primary dark:text-white italic">
        Duties: <span class="text-red-500">*</span>
      </label>
      <div class="space-y-2">
        <div class="flex flex-wrap gap-2">
          <div v-for="(field, index) in form.duty" :key="index" class="flex items-center w-full">
            <input
              class="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              :value="field" readonly />
          </div>
        </div>
      </div>
    </div>

    <div class="border-b my-6"></div>

    <h2 class="font-bold text-lg mb-4">Competence</h2>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div>
        <label for="education" class="block mb-1 text-sm font-medium text-primary dark:text-white">
          Education: <span class="text-red-500">*</span>
        </label>
        <div class="flex flex-wrap gap-2">
          <div v-for="(field, index) in form.education" :key="index" class="flex items-center">
            <span
              class="block bg-gray-100 text-gray-800 px-4 rounded-lg py-2 text-sm dark:bg-gray-700 dark:text-white flex justify-between items-center w-full">
              <span class="flex-1">{{ field }}</span>
            </span>
          </div>
        </div>
      </div>
      <div>
        <label for="experience" class="block mb-1 text-sm font-medium text-primary dark:text-white">
          Experience: <span class="text-red-500">*</span>
        </label>
        <div class="flex flex-wrap gap-2">
            <div v-for="(field, index) in form.experience" :key="index" class="flex items-center">
              <span
                class="block bg-gray-100 text-gray-800 px-4 rounded-lg py-2 text-sm dark:bg-gray-700 dark:text-white flex justify-between items-center w-full">
                <span class="flex-1">{{ field }}</span>
              </span>
            </div>
          </div>
      </div>
      <div>
        <label for="skills" class="block mb-1 text-sm font-medium text-primary dark:text-white">
          Skills: <span class="text-red-500">*</span>
        </label>
        <div class="flex flex-wrap gap-2">
            <div v-for="(field, index) in form.skills" :key="index" class="flex items-center">
              <span
                class="block bg-gray-100 text-gray-800 px-4 rounded-lg py-2 text-sm dark:bg-gray-700 dark:text-white flex justify-between items-center w-full">
                <span class="flex-1">{{ field }}</span>
              </span>
            </div>
          </div>
      </div>
    </div>

  </div>
</template>
<script>
import { getJobDescription, getPersonnelRequisitonForm } from "@/api/EFormApi";
export default {
  data() {
    return {
      form: {
        company: "",
        designation: "",
        department: "",
        reportTo: "",
        responsibility: [],
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
  mounted() {
    const refNo = this.$route.params.refNo;
    this.getPersonnelRequisitonForm(refNo);
  },
  methods: {
    async getPersonnelRequisitonForm(refNo) {
      try {
        const data = await getPersonnelRequisitonForm(refNo);
        if (data) {
          const uniqueKey = data.uniqueKey;
          const JobDescription = await getJobDescription(uniqueKey);

          if (JobDescription) {
            this.form = {
              ...JobDescription.form,
              ...JobDescription,
            }
          }
        }
      } catch (error) {
        console.error("Error fetching job description:", error);
        throw error;
      }

    },

  },
};
</script>