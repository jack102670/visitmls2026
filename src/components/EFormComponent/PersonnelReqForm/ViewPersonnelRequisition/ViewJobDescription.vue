<template>
  <div class="space-y-2 mt-2">


    <div class="border border-[1px] rounded-md px-4 py-6 sm:px-6">
      <h1 class="font-bold text-xl py-2">Job Description</h1>

      <div class="space-y-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label for="company" class="block mb-1 text-sm font-medium text-primary dark:text-white">
              Company:
            </label>

            <div>{{ form.company }}</div>
          </div>
          <div>
            <label for="department" class="block mb-1 text-sm font-medium text-primary dark:text-white">
              Department:
            </label>
            <div>{{ form.department }}</div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label for="position" class="block mb-1 text-sm font-medium text-primary dark:text-white">
              Position:
            </label>
            {{ form.designation }}
          </div>
          <div>
            <label for="report-to" class="block mb-1 text-sm font-medium text-primary dark:text-white">
              Report to:
            </label>
            {{ form.reportTo }}
          </div>
        </div>
      </div>

      <hr class="border-[1px] my-4" />

      <h2 class="font-bold text-md">Responsibilities</h2>
<div class="">
  <label for="responsibility" class="block  text-sm py-2 font-medium text-primary dark:text-white italic">
    Responsibilities:
  </label>
  <div class="space-y-2">
    <div class="flex flex-wrap gap-2 ">
      <span v-for="(field, index) in form.responsibility" :key="index" class="flex items-center w-full">
        <span class="mr-2">{{ index + 1 }}.</span>
        <span>{{ field }}</span>
      </span>
    </div>
  </div>
</div>
<div>
  <label for="duty" class="block text-sm py-2 font-medium text-primary dark:text-white italic">
    Duties:
  </label>
  <div class="space-y-2">
    <div class="flex flex-wrap gap-2">
      <span v-for="(field, index) in form.duty" :key="index" class="flex items-center w-full">
        <span class="mr-2">{{ index + 1 }}.</span>
        <span>{{ field }}</span>
      </span>
    </div>
  </div>
</div>

      <div class="border-b my-4"></div>

      <h2 class="font-bold text-md mb-4">Competence</h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div>
          <label for="education" class="block mb-1 text-sm font-medium text-primary dark:text-white">
            Education:
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
            Experience:
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
            Skills:
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
  </div>
  <div class="border border-[1px] rounded-md px-4 py-6 sm:px-6">
    <h1 class="font-bold text-md py-2">Approval</h1>
    <div class="space-y-4" v-if="status !== 'Completed by Superior. Waiting for HR'">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" >
        <div class="space-y-2">
          <label for="basicSalary" class="block mb-2 text-sm font-medium text-primary dark:text-white">
            1. Approved this application?: <span class="text-red-500">*</span>
          </label>
          <div class="flex space-x-4 items-center mb-4">
            <input id="yes-experienceRequired" type="radio" value="1" v-model="UpdateForm.data"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="yes-experienceRequired"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>

            <input id="no-experienceRequired" type="radio" value="0" v-model="UpdateForm.data"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="no-experienceRequired"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
          </div>
          <span class="text-red-500 text-sm" v-if="validationErrors.data">Please fill in this field</span>
        </div>
      </div>
      <div class="w-full flex justify-end py-2">
            <button @click.prevent="confirmExit"
              class="bg-transparent text-dark px-10 py-2 rounded-md border-[2px] border-rejected mr-4 font-bold">
              Exit
            </button>
            <button @click.prevent="UpdateJD" class="bg-verified text-white px-10 py-2 rounded-md font-bold">
              Submit
            </button>
          </div>
      </div>
    </div>

</template>
<script>
import Swal from "sweetalert2";
import { getJobDescription, getPersonnelRequisitonForm, UpdateJD } from "@/api/EFormApi";
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
      UpdateForm: {
        data: '',
      },
      validationErrors: {},

      props: {
        formData: Object,
      },
    };
  },
  mounted() {
    this.refNo = this.$route.params.refNo;
    this.getPersonnelRequisitonForm(this.refNo);
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
    validateForm() {
      this.validationErrors = {};
      if (!this.UpdateForm.data) this.validationErrors.data = true;
      return Object.keys(this.validationErrors).length === 0;
    },
    confirmExit() {
      Swal.fire({
        title: 'Are you sure you want to exit?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Exit!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$router.push('/e-dashboard');
        }
      })
    },

    async UpdateJD() {
      console.log("refNo:", this.refNo); 
      if (this.validateForm()) {
        Swal.fire({
          title: 'Are you sure you want to submit?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Submit!'
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              Swal.fire({
                title: 'Submitting...',
                text: 'Please wait while we submit your data.',
                allowOutsideClick: false,
                didOpen: () => {
                  Swal.showLoading();
                }
              });

              const UpdateJd = {
                refNo: this.refNo,
                data: String(this.UpdateForm.data),
              };

              console.log("Payload to be sent:", UpdateJd);

              const update = await UpdateJD(UpdateJd);
              console.log(update);

              Swal.close();

              Swal.fire({
                title: 'Saved!',
                text: 'Your data has been saved.',
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK'
              }).then((result) => {
                if (result.isConfirmed) {
                  this.$router.push('/e-dashboard');
                }
              });
              this.isSubmittedForm = true;

            } catch (error) {
              Swal.close();
              console.error('Submission failed:', error.response ? error.response.data : error.message);

              Swal.fire({
                title: 'Error!',
                text: error.response?.data?.message || 'Submission failed. Please try again later.',
                icon: 'error',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK'
              });
            }
          }
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Please fill in all required fields.',
          icon: 'error',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        });
      }
    }


  },
};
</script>