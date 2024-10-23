<template>
  <div class="border border-[1px] p-4 sm:p-6 rounded-md">
    <h1 class="font-bold text-xl mb-6">Employee Orientation Checklist</h1>
    <div class="space-y-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label for="Employeename" class="block mb-1 text-sm font-medium text-primary dark:text-white">
            Name: <span class="text-red-500">*</span>
          </label>
          <input type="text" id="Employeename" v-model="EmployeeForm.name"
            class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Employee Name" required />
          <span v-if="validationErrors.name" class="text-red-500 text-sm">Please fill in this field.</span>
        </div>
        <div>
          <label for="company" class="block mb-1 text-sm font-medium text-primary dark:text-white">
            Company: <span class="text-red-500">*</span>
          </label>
          <input type="text" id="company" v-model="EmployeeForm.company"
            class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Company" required />
          <span v-if="validationErrors.company" class="text-red-500 text-sm">Please fill in this field.</span>
        </div>
        <div>
          <label for="department" class="block mb-1 text-sm font-medium text-primary dark:text-white">
            Department: <span class="text-red-500">*</span>
          </label>
          <input type="text" id="department" v-model="EmployeeForm.department"
            class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Department" required />
          <span v-if="validationErrors.department" class="text-red-500 text-sm">Please fill in this field.</span>
        </div>
        <div>
          <label for="dateJoined" class="block mb-1 text-sm font-medium text-primary dark:text-white">
            Date Joined: <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <input ref="datepicker" id="DateRequired" type="text" v-model="EmployeeForm.dateJoined"
              class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Select date" required>
          </div>
          <span v-if="validationErrors.dateJoined" class="text-red-500 text-sm">Please fill in this field.</span>
        </div>
        <div>
          <label for="branch" class="block mb-1 text-sm font-medium text-primary dark:text-white">
            Branch: <span class="text-red-500">*</span>
          </label>
          <input type="text" id="branch" v-model="EmployeeForm.branch"
            class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Branch" required />
          <span v-if="validationErrors.branch" class="text-red-500 text-sm">Please fill in this field.</span>
        </div>
        <div>
          <label for="office" class="block mb-1 text-sm font-medium text-primary dark:text-white">
            Office: <span class="text-red-500">*</span>
          </label>
          <input type="text" id="office" v-model="EmployeeForm.office"
            class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Office" required />
          <span v-if="validationErrors.office" class="text-red-500 text-sm">Please fill in this field.</span>
        </div>
        <div>
          <label for="floor" class="block mb-1 text-sm font-medium text-primary dark:text-white">
            Floor: <span class="text-red-500">*</span>
          </label>
          <input type="text" id="floor" v-model="EmployeeForm.floor"
            class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Floor" required />
          <span v-if="validationErrors.floor" class="text-red-500 text-sm">Please fill in this field.</span>
        </div>
        <div>
          <label for="purpose" class="block mb-1 text-sm font-medium text-primary dark:text-white">
            Purpose (Optional):
          </label>
          <input type="text" id="purpose" v-model="EmployeeForm.purpose"
            class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Purpose" />
        </div>
        <div>
          <label for="others" class="block mb-1 text-sm font-medium text-primary dark:text-white">
            Others (Please specify):
          </label>
          <input type="text" id="others" v-model="EmployeeForm.hoD_Emp_Other"
            class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Others" />
        </div>
        <div>
          <label for="requisition" class="block mb-2 text-sm font-medium text-primary dark:text-white">
            Requisition from HOD:
          </label>
          <div class="flex flex-wrap gap-4 ">
            <div class="flex items-center">
              <input id="email" type="checkbox" name="email" :checked="EmployeeForm.hoD_Emp_Email === '1'"
                @change="updateCheckboxValue('hoD_Emp_Email', $event)"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="email" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
            </div>

            <div class="flex items-center">
              <input id="nameCards" type="checkbox" name="nameCards" :checked="EmployeeForm.hoD_Emp_NameCard === '1'"
                @change="updateCheckboxValue('hoD_Emp_NameCard', $event)"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="nameCards" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name Card</label>
            </div>

            <div class="flex items-center">
              <input id="desktop" type="checkbox" name="desktop" :checked="EmployeeForm.hoD_Emp_Desktop === '1'"
                @change="updateCheckboxValue('hoD_Emp_Desktop', $event)"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="desktop" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Desktop</label>
            </div>

            <div class="flex items-center">
              <input id="laptop" type="checkbox" name="laptop" :checked="EmployeeForm.hoD_Emp_Laptop === '1'"
                @change="updateCheckboxValue('hoD_Emp_Laptop', $event)"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="laptop" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Laptop</label>
            </div>

            <div class="flex items-center">
              <input id="otherRequisition" type="checkbox" v-model="showOtherInput"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="otherRequisition" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Other
                requisition</label>
            </div>
          </div>
        </div>
        <div>
          <div v-if="showOtherInput" class="">
            <div>
              <label for="tagLine" class="mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Employee
                Tag
                Line</label>
              <input type="text" v-model="EmployeeForm.hoD_Emp_Tagline" id="tagLine" name="tagLine" value="tagLine"
                class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Employee Tag Line" />
            </div>
          </div>
        </div>
        <div>
          <div v-if="showOtherInput" class="">
            <div>
              <label for="FacebookAccountName"
                class="mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Facebook
                Account
                Name</label>
              <input type="text" v-model="EmployeeForm.hoD_Emp_FB" id="FacebookAccountName" name="FacebookAccountName"
                value="FacebookAccountName"
                class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Facebook Account Name" />
            </div>
          </div>
        </div>
        <div>
          <div v-if="showOtherInput" class="">
            <div>
              <label for="otherRequisition" class="mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Chinese
                Name
                (If Any)</label>
              <input type="text" v-model="EmployeeForm.hoD_Emp_ChineseName" id="ChineseName" name="ChineseName"
                value="ChineseName"
                class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Chinese Name" />
            </div>
          </div>
        </div>
        <div>
          <div v-if="showOtherInput" class="">
            <div>
              <label for="PhoneNumber" class="mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">
                Employee Phone Number
              </label>
              <input type="tel" id="PhoneNumber" ref="phoneInput" v-model="EmployeeForm.hoD_Emp_PhoneNo"
                class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Input Phone Number" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" py-2 flex flex-col sm:flex-row justify-end gap-y-1 space-y-2 sm:space-y-0 sm:space-x-4">
      <button @click.prevent="confirmExit"
        class="bg-transparent text-rejected px-10 py-2 rounded-md border-2 border-rejected font-bold order-2 sm:order-1">
        Back
      </button>
      <button @click.prevent="submitForm"
        class="bg-verified text-white px-10 py-2 rounded-md font-bold order-1 sm:order-2">
        Submit
      </button>
    </div>
  </div>
</template>
<script>
import Swal from 'sweetalert2';
import flatpickr from 'flatpickr';
import 'intl-tel-input/build/css/intlTelInput.css';
import {
  PostHODSectionAOrientationCheckList
} from '@/api/EFormApi.js'
export default {
  data() {
    return {
      EmployeeForm: {
        name: '',
        company: '',
        department: '',
        dateJoined: '',
        branch: '',
        office: '',
        floor: '',
        purpose: '',
        hoD_Emp_Email: '0',
        hoD_Emp_NameCard: '0',
        hoD_Emp_Tagline: '',
        hoD_Emp_FB: '',
        hoD_Emp_ChineseName: '',
        hoD_Emp_PhoneNo: '',
        hoD_Emp_Desktop: '0',
        hoD_Emp_Laptop: '0',
        hoD_Emp_Other: '',
        requesterId: '7A7641D6-DEDE-4803-8B7B-93063DE2F077',
        requesterName: 'Hod Name',
        requesterDesignation: 'Hod',
        requesterDept: 'ICT',
      },
      validationErrors: {},
      showOtherInput: false,
    }
  },
  methods: {
    //   initPhoneInput() {
    //   const phoneInput = this.$refs.phoneInput;
    //   this.phoneInstance = intlTelInput(phoneInput, {
    //     initialCountry: 'auto',
    //     geoIpLookup: this.getCountryCode,
    //     utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@17/build/js/utils.js',
    //   });
    //   phoneInput.addEventListener('countrychange', this.handleCountryChange);
    // },
    // getCountryCode(callback) {
    //   fetch('https://ipinfo.io/json?token=<YOUR_IPINFO_TOKEN>')
    //     .then((response) => response.json())
    //     .then((data) => callback(data.country))
    //     .catch(() => callback('us'));
    // },
    // handleCountryChange() {
    //   this.EmployeeForm.phone = this.phoneInstance.getNumber();
    // },
    updateCheckboxValue(field, event) {
      this.EmployeeForm[field] = event.target.checked ? '1' : '0';
    },
    validateForm() {
      this.validationErrors = {};
      if (!this.EmployeeForm.name) this.validationErrors.name = true;
      if (!this.EmployeeForm.company) this.validationErrors.company = true;
      if (!this.EmployeeForm.department) this.validationErrors.department = true;
      if (!this.EmployeeForm.dateJoined) this.validationErrors.dateJoined = true;
      if (!this.EmployeeForm.branch) this.validationErrors.branch = true;
      if (!this.EmployeeForm.office) this.validationErrors.office = true;
      if (!this.EmployeeForm.floor) this.validationErrors.floor = true;
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
    submitForm() {
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
              if (!this.showOtherInput) {
                this.EmployeeForm.hoD_Emp_Tagline = '';
                this.EmployeeForm.hoD_Emp_FB = '';
                this.EmployeeForm.hoD_Emp_ChineseName = '';
                this.EmployeeForm.hoD_Emp_PhoneNo = '';
              }
              Swal.fire({
                title: 'Submitting...',
                text: 'Please wait while we submit your data.',
                allowOutsideClick: false,
                didOpen: () => {
                  Swal.showLoading();
                }
              })
              const checkListData = {
                ...this.EmployeeForm,
              };
              // console.log("Data to be submitted:", checkListData);
              const response = await PostHODSectionAOrientationCheckList(checkListData);
              // console.log("Form submitted successfully:", response);
              Swal.close();
              Swal.fire({
                title: 'Saved!',
                text: 'Your data has been saved.',
                confirmButtonColor: '#3085d6',
                icon: 'success',
                confirmButtonText: 'OK'
              });
              this.isSubmitted = true;
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
          title: 'Error!',
          text: 'Please fill in all required fields.',
          icon: 'error',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        });
      }
    },
    resetForm() {
      this.EmployeeForm = {
        name: '',
        company: '',
        department: '',
        dateJoined: '',
        branch: '',
        office: '',
        floor: '',
        purpose: '',
        hoD_Emp_Email: '',
        hoD_Emp_NameCard: '',
        hoD_Emp_Tagline: '',
        hoD_Emp_FB: '',
        hoD_Emp_ChineseName: '',
        hoD_Emp_PhoneNo: '',
        hoD_Emp_Desktop: '',
        hoD_Emp_Laptop: '',
        hoD_Emp_Other: '',
        requesterId: '',
        requesterName: '',
        requesterDesignation: '',
        requesterDept: '',
      };
      this.showOtherInput = false;
    },
    // initializePhoneInput() {
    //   const phoneInput = this.$refs.phoneInput;
    //   if (phoneInput) {
    //     this.phoneInputInstance = intlTelInput(phoneInput, {
    //       initialCountry: 'myr',
    //       utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js', 
    //     });
    //   } else {
    //     console.warn('Phone input not found!');
    //   }
    // }
  },
  mounted() {
    flatpickr(this.$refs.datepicker, {
      dateFormat: "Y-m-d",
    });
  },
}
</script>