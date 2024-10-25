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
          <span v-if="validationErrors.company" class="text-red-500 text-sm">Please fill in this field.</span>
        </div>
        <div>
          <label for="department" class="block mb-1 text-sm font-medium text-primary dark:text-white">
            Department: <span class="text-red-500">*</span>
          </label>
          <input type="text" id="department" v-model="form.department"
            class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Department Name" required readonly />
          <span v-if="validationErrors.department" class="text-red-500 text-sm">Please fill in this field.</span>
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
          <span v-if="validationErrors.position" class="text-red-500 text-sm">Please fill in this field.</span>
        </div>
        <div>
          <label for="report-to" class="block mb-1 text-sm font-medium text-primary dark:text-white">
            Report to: <span class="text-red-500">*</span>
          </label>
          <input type="text" id="report-to" v-model="form.reportTo"
            class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Report to" required readonly />
          <span v-if="validationErrors.reportTo" class="text-red-500 text-sm">Please fill in this field.</span>
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
        placeholder="Write the responsibilities here" required></textarea>
      <span v-if="validationErrors.responsibilities" class="text-red-500 text-sm">Please fill in this field.</span>
    </div>

    <div class="border-b my-4"></div>

    <h2 class="font-bold text-lg">Duties</h2>
    <div class="">
      <label for="duties" class="block mb-1 text-sm font-medium text-primary dark:text-white italic">
        Duties: <span class="text-red-500">*</span>
      </label>
      <textarea id="duties" rows="4" v-model="form.duties"
        class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write the duties here" required></textarea>
      <span v-if="validationErrors.duties" class="text-red-500 text-sm">Please fill in this field.</span>
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
          placeholder="Input Education" required />
        <span v-if="validationErrors.education" class="text-red-500 text-sm">Please fill in this field.</span>
      </div>
      <div>
        <label for="experience" class="block mb-1 text-sm font-medium text-primary dark:text-white">
          Experience: <span class="text-red-500">*</span>
        </label>
        <input type="text" id="experience" v-model="form.experience"
          class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Input experience" required />
        <span v-if="validationErrors.experience" class="text-red-500 text-sm">Please fill in this field.</span>
      </div>
      <div>
        <label for="skills" class="block mb-1 text-sm font-medium text-primary dark:text-white">
          Skills: <span class="text-red-500">*</span>
        </label>
        <input type="text" id="skills" v-model="form.skills"
          class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Input skills" required />
        <span v-if="validationErrors.skills" class="text-red-500 text-sm">Please fill in this field.</span>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4">
      <button @click.prevent="confirmExit"
        class="bg-transparent text-rejected px-6 py-2 rounded-md border-2 border-rejected font-bold order-2 sm:order-1">
        Exit
      </button>
      <button @click.prevent="submitForm"
        class="bg-verified text-white px-6 py-2 rounded-md font-bold order-1 sm:order-2">
        Submit
      </button>
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
  created() {
    console.log("Unique Key passed to JobDescription:", this.uniqueKey);
  },
  methods: {
    async fetchHrData() {
      const username_id = store.getSession().userDetails.userId;
      this.loadingText = "Fetching";
      this.loading = true;
      try {
        const data = await fetchHrData(username_id);
        if (data) {
          this.user = data;
          this.form.company = data.company_name;
          this.form.position = data.position_title;
          this.form.department = data.department;
          this.form.reportTo = data.reporting_to;
        }
        console.log("Employee Data:", this.user);
      } catch (error) {
        console.error("Error fetching Employee data:", error);
        throw new Error("Failed to fetch Employee data. Please try again.");
      } finally {
        this.loading = false;
      }
    },
    validateForm() {
      this.validationErrors = {};
      if (!this.form.company) this.validationErrors.company = true;
      if (!this.form.position) this.validationErrors.position = true;
      if (!this.form.department) this.validationErrors.department = true;
      if (!this.form.position) this.validationErrors.position = true;
      if (!this.form.reportTo) this.validationErrors.reportTo = true;
      if (!this.form.responsibilities)
        this.validationErrors.responsibilities = true;
      if (!this.form.duties) this.validationErrors.duties = true;
      if (!this.form.education) this.validationErrors.education = true;
      if (!this.form.experience) this.validationErrors.experience = true;
      if (!this.form.skills) this.validationErrors.skills = true;
      return Object.keys(this.validationErrors).length === 0;
    },
    confirmExit() {
      Swal.fire({
        title: "Are you sure you want to exit?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Exit!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$router.push("/e-dashboard");
        }
      });
    },
    submitForm() {
      if (this.validateForm()) {
        Swal.fire({
          title: "Are you sure you want to submit?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Submit!",
        }).then((result) => {
          if (result.isConfirmed) {
            console.log("Form data saved:", this.form);
            const JDData = {
              ...this.form,
              uniqueKey: this.uniqueKey,
            };
            localStorage.removeItem("uniqueKey");
            Swal.fire({
              title: "Saved!",
              text: "Your data has been saved.",
              confirmButtonColor: "#3085d6",
              icon: "success",
              confirmButtonText: "OK",
            }).then((result) => {
              if (result.isConfirmed) {
                this.$router.push("/e-dashboard");
              }
            });
          }
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Please fill in all required fields.",
          icon: "error",
          cancelButtonColor: "#d33",
          confirmButtonText: "OK",
        });
      }
    },
  },
  mounted() {
    this.fetchHrData();
  },
};
</script>
