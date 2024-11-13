<template>
  <div class="border border-[1px]  rounded-md px-4 py-6 sm:px-6">
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
          <label for="designation" class="block mb-1 text-sm font-medium text-primary dark:text-white">
            Position: <span class="text-red-500">*</span>
          </label>
          <input type="text" id="position" v-model="form.designation"
            class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Input position" required readonly />
          <span v-if="validationErrors.designation" class="text-red-500 text-sm">Please fill in this field.</span>
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
      <label for="responsibility" class="block  text-sm py-2 font-medium text-primary dark:text-white italic">
        Responsibilities: <span class="text-red-500">*</span>
      </label>
      <div class="space-y-2">
        <div class="flex flex-wrap gap-2 ">
          <div v-for="(field, index) in form.responsibility" :key="index" class="flex items-center w-full">
            <input
              class="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              :value="field" readonly />
            <span @click="removeResponsibilityField(index)" class="ml-2 cursor-pointer">
              <font-awesome-icon :icon="['fas', 'xmark']" />
            </span>
          </div>
        </div>
        <div v-if="showInputResponsibilityField" class=" flex items-center space-x-2">
          <input id="responsibility" rows="4" v-model="newResponsibilityField"
            class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Describe responsibilities" required />
          <button @click="addResponsibilityField" class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Add
          </button>
        </div>
        <button v-if="!showInputResponsibilityField" @click="showInputResponsibilityField = true"
          class="bg-transparent text-sm hover:border-primary hover:border-[1px] border-[1px] border-transparent p-2.5 rounded-2xl">
          Add More <span>
            <font-awesome-icon icon="fa-solid fa-plus" /></span>
        </button>
        <span v-if="validationErrors.responsibility" class="text-red-500 text-sm">Please fill in this field.</span>

      </div>

    </div>
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
            <span @click="removeField(index)" class="ml-2 cursor-pointer">
              <font-awesome-icon :icon="['fas', 'xmark']" />
            </span>
          </div>
        </div>

        <div v-if="showInputField" class=" flex items-center space-x-2">
          <input id="duty" rows="4" v-model="newField"
            class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Describe duties" required />
          <button @click="addField" class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Add
          </button>
        </div>
        <button v-if="!showInputField" @click="showInputField = true"
          class="bg-transparent text-sm hover:border-primary hover:border-[1px] border-[1px] border-transparent p-2.5 rounded-2xl">
          Add More <span>
            <font-awesome-icon icon="fa-solid fa-plus" /></span>
        </button>
        <span v-if="validationErrors.duty" class="text-red-500 text-sm">Please fill in this field.</span>
      </div>
    </div>


    <div class="border-b my-4"></div>

    <h2 class="font-bold text-lg mb-4">Competence</h2>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">

      <div class="space-y-2">
        <label for="experience" class="block mb-1 text-sm font-medium text-primary dark:text-white">
          Education: <span class="text-red-500">*</span>
        </label>
        <div class="flex flex-wrap gap-2">
          <div v-for="(field, index) in form.education" :key="index" class="flex items-center">
            <span
              class="block bg-gray-100 text-gray-800 px-4 rounded-lg py-2 text-sm dark:bg-gray-700 dark:text-white flex justify-between items-center w-full">
              <span class="flex-1">{{ field }}</span>
              <span @click="removeCompetenceField(index)" class="ml-2 cursor-pointer">
                <font-awesome-icon :icon="['fas', 'xmark']" class="cursor-pointer" />
              </span>
            </span>
          </div>
        </div>
        <div v-if="showInputCompetenceField" class="flex items-center gap-2">
          <input type="text" v-model="newCompetenceField"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Education" />
          <button @click.prevent="addCompetenceField"
            class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Add
          </button>
        </div>
        <button v-if="!showInputCompetenceField" @click="showInputCompetenceField = true"
          class="bg-transparent text-sm hover:border-primary hover:border-[1px] border-[1px] border-transparent p-2.5 rounded-2xl">
          Add More <span><font-awesome-icon icon="fa-solid fa-plus" /></span>
        </button>
        <span v-if="validationErrors.education" class="text-red-500 text-sm">Please fill in this field.</span>
      </div>

      <div>
        <label for="experience" class="block mb-1 text-sm font-medium text-primary dark:text-white">
          Experience: <span class="text-red-500">*</span>
        </label>
        <div class="space-y-2">
          <div class="flex flex-wrap gap-2">
            <div v-for="(field, index) in form.experience" :key="index" class="flex items-center">
              <span
                class="block bg-gray-100 text-gray-800 px-4 rounded-lg py-2 text-sm dark:bg-gray-700 dark:text-white flex justify-between items-center w-full">
                <span class="flex-1">{{ field }}</span>
                <span @click="removeExperienceField(index)" class="ml-2 cursor-pointer">
                  <font-awesome-icon :icon="['fas', 'xmark']" class="cursor-pointer" />
                </span>
              </span>
            </div>
          </div>
          <div v-if="showInputExperienceField" class="flex items-center gap-2">
            <input type="text" v-model="newExperienceField"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Experience" />
            <button @click.prevent="addExperienceField"
              class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Add
            </button>
          </div>
          <button v-if="!showInputExperienceField" @click="showInputExperienceField = true"
            class="bg-transparent text-sm hover:border-primary hover:border-[1px] border-[1px] border-transparent p-2.5 rounded-2xl">
            Add More <span><font-awesome-icon icon="fa-solid fa-plus" /></span>
          </button>
        </div>
      </div>

      <div>
        <label for="skills" class="block mb-1 text-sm font-medium text-primary dark:text-white">
          Skills: <span class="text-red-500">*</span>
        </label>
        <div class="space-y-2">
          <div class="flex flex-wrap gap-2">
            <div v-for="(field, index) in form.skills" :key="index" class="flex items-center">
              <span
                class="block bg-gray-100 text-gray-800 px-4 rounded-lg py-2 text-sm dark:bg-gray-700 dark:text-white flex justify-between items-center w-full">
                <span class="flex-1">{{ field }}</span>
                <span @click="removeSkillsField(index)" class="ml-2 cursor-pointer">
                  <font-awesome-icon :icon="['fas', 'xmark']" class="cursor-pointer" />
                </span>
              </span>
            </div>
          </div>
          <div v-if="showInputSkillsField" class="flex items-center gap-2">
            <input type="text" v-model="newSkillsField"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Skills" />
            <button @click.prevent="addSkillsField"
              class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Add
            </button>
          </div>
          <button v-if="!showInputSkillsField" @click="showInputSkillsField = true"
            class="bg-transparent text-sm hover:border-primary hover:border-[1px] border-[1px] border-transparent p-2.5 rounded-2xl">
            Add More <span><font-awesome-icon icon="fa-solid fa-plus" /></span>
          </button>
          <span v-if="validationErrors.skills" class="text-red-500 text-sm">Please fill in this field.</span>
        </div>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4 py-2">
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
import { fetchHrData, PostJobDescription } from "@/api/EFormApi";
import { store } from "@/views/store.js";
export default {
  data() {
    return {
      form: {
        status: "Pending",
        company: "",
        department: "",
        designation: "",
        reportTo: "",
        responsibility: [],
        duty: [],
        experience: [],
        education: [],
        skills: [],
        requesterId: "",
        requesterName: "",
        requesterDesignation: "",
        verfierEmpId: "",
        pr_uniqueKey: null,

      },
      validationErrors: {},


      // multiple fields
      showInputField: false,
      newField: "",
      showInputResponsibilityField: false,
      newResponsibilityField: "",

      showInputCompetenceField: false,
      newCompetenceField: "",

      showInputExperienceField: false,
      newExperienceField: "",
      showInputSkillsField: false,
      newSkillsField: "",



      props: {
        formData: Object,
      },
    };
  },
  created() {
    const storedUniqueKey = localStorage.getItem("uniqueKey");
    if (storedUniqueKey) {
      this.form.pr_uniqueKey = storedUniqueKey;
    } else {
      this.form.pr_uniqueKey = `job_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
      localStorage.setItem("uniqueKey", this.form.pr_uniqueKey);
    }

    console.log("Unique Key assigned to JobDescription:", this.form.pr_uniqueKey);
  },
  methods: {
    // multifield fields for duty
    openInputForm() {
      this.newField = "";
      this.showInputField = true;
    },
    addField() {
      if (this.newField.trim()) {
        this.form.duty.push(this.newField.trim());
        this.newField = "";
        this.showInputField = false;
      }
    },
    removeField(index) {
      this.form.duty.splice(index, 1);
    },
    //multifield for responsibility
    openInputResponsibilityForm() {
      this.newResponsibilityField = "";
      this.showInputResponsibilityField = true;
    },
    addResponsibilityField() {
      if (this.newResponsibilityField.trim()) {
        this.form.responsibility.push(this.newResponsibilityField.trim());
        this.newResponsibilityField = "";
        this.showInputResponsibilityField = false;
      }
    },
    removeResponsibilityField(index) {
      this.form.responsibility.splice(index, 1);
    },
    //multifield for education/competence
    addCompetenceField() {
      if (this.newCompetenceField.trim()) {
        this.form.education.push(this.newCompetenceField.trim());
        this.newCompetenceField = "";
        this.showInputCompetenceField = false;
      }
    },
    removeCompetenceField(index) {
      this.form.education.splice(index, 1);
    },
    // multifiels for experience
    addExperienceField() {
      if (this.newExperienceField) {
        this.form.experience.push(this.newExperienceField);
        this.newExperienceField = '';
        this.showInputExperienceField = false;
      }
    },
    removeExperienceField(index) {
      this.form.experience.splice(index, 1);
    },
    // multifield for skills
    addSkillsField() {
      if (this.newSkillsField) {
        this.form.skills.push(this.newSkillsField);
        this.newSkillsField = '';
        this.showInputSkillsField = false;
      }
    },
    removeSkillsField(index) {
      this.form.skills.splice(index, 1);
    },

    async fetchHrData() {
      const username_id = store.getSession().userDetails.userId;
      this.loadingText = "Fetching";
      this.loading = true;
      try {
        const data = await fetchHrData(username_id);
        if (data) {
          this.user = data;
          this.form.company = data.company_name;
          this.form.designation = data.position_title;
          this.form.department = data.department;
          this.form.reportTo = data.reporting_to;
          this.form.requesterName = data.name;
          this.form.requesterDesignation = data.position_title;
          this.form.verfierEmpId = data.reporting_to;
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
      if (!this.form.designation) this.validationErrors.designation = true;
      if (!this.form.department) this.validationErrors.department = true;
      if (!this.form.reportTo) this.validationErrors.reportTo = true;
      if (!this.form.responsibility)
        this.validationErrors.responsibility = true;
      if (!this.form.duty) this.validationErrors.duty = true;
      if (!this.form.education) this.validationErrors.education = true;
      if (!this.form.experience) this.validationErrors.experience = true;
      if (!this.form.skills) this.validationErrors.skills = true;
      return Object.keys(this.validationErrors).length === 0;
    },

    generateUniqueKey() {
      return `key-${Date.now()}-${Math.floor(Math.random() * 10000)}`;

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
        const username_id = store.getSession().userDetails.userId;
        this.form.requesterId = username_id;

        Swal.fire({
          title: "Are you sure you want to submit?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Submit!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            console.log("Form data for JD saved:", this.form);
            try {
              Swal.fire({
                title: 'Submitting...',
                text: 'Please wait while we submit your data.',
                allowOutsideClick: false,
                didOpen: () => {
                  Swal.showLoading();
                }
              })

              const JobDescriptionData = {
                ...this.form,
                uniqueKey: this.uniqueKey || this.generateUniqueKey(),
              };
              console.log("Data to be submitted:", JobDescriptionData);
              const response = await PostJobDescription(JobDescriptionData);
              console.log("Job Description Response:", response);
              localStorage.removeItem("uniqueKey");
              Swal.close();

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
              this.isSubmittedForm = true;

              this.resetForm();

            } catch (error) {
              Swal.close();
              console.error('Submission failed:', error.response ? error.response.data :
                error.message);
              Swal.fire({
                title: 'Error!',
                text: error.response ? error.response.data.message ||
                  'Submission failed. Please try again later.' :
                  'Submission failed. Please try again later.',
                icon: 'error',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK'
              });

            }
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
    resetForm() {
      this.form = {
        company: '',
        department: '',
        designation: '',
        reportTo: '',
        responsibility: [],
        duty: [],
        education: [],
        experience: [],
      };
      this.newResponsibilityField = '';
      this.newField = '';
      this.newCompetenceField = '';
      this.newExperienceField = '';
      this.validationErrors = {};
      this.showInputResponsibilityField = false;
      this.showInputField = false;
      this.showInputCompetenceField = false;
      this.showInputExperienceField = false;
    },
  },
  mounted() {
    this.fetchHrData();
  },
};
</script>
