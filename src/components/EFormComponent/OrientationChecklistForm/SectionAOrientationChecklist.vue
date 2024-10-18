<template>
    <div class="border border-[1px] p-4 sm:p-6 rounded-md">
      <h1 class="font-bold text-xl mb-6">Employee Orientation Checklist</h1>
      
      <div class="space-y-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label for="Employeename" class="block mb-1 text-sm font-medium text-primary dark:text-white">
              Name: <span class="text-red-500">*</span>
            </label>
            <input type="text" id="Employeename" v-model="EmployeeForm.Employeename"
              class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Employee Name" required />
            <span v-if="validationErrors.Employeename" class="text-red-500 text-sm">Please fill in this field.</span>
          </div>
          <div>
            <label for="department" class="block mb-1 text-sm font-medium text-primary dark:text-white">
              Company / Department: <span class="text-red-500">*</span>
            </label>
            <input type="text" id="department" v-model="EmployeeForm.department"
              class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Company / Department" required />
            <span v-if="validationErrors.department" class="text-red-500 text-sm">Please fill in this field.</span>
          </div>
        </div>
  
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label for="requisition" class="block mb-2 text-sm font-medium text-primary dark:text-white">
              Requisition from HOD:
            </label>
            <div class="flex flex-wrap gap-4">
              <div class="flex items-center">
                <input id="email" type="checkbox" name="email" value="email" v-model="EmployeeForm.email"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="email" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
              </div>
              <div class="flex items-center">
                <input id="nameCards" type="checkbox" name="nameCards" value="nameCards" v-model="EmployeeForm.nameCards"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="nameCards" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name Card</label>
              </div>
              <div class="flex items-center">
                <input id="desktop" type="checkbox" name="desktop" value="desktop" v-model="EmployeeForm.desktop"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="desktop" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Desktop</label>
              </div>
              <div class="flex items-center">
                <input id="laptop" type="checkbox" name="laptop" value="laptop" v-model="EmployeeForm.laptop"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="laptop" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Laptop</label>
              </div>
              <div class="flex items-center">
                <input id="otherRequisition" type="checkbox" v-model="showOtherInput"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="otherRequisition" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Others</label>
              </div>
            </div>
            <div v-if="showOtherInput" class="mt-2">
              <input type="text" v-model="EmployeeForm.otherRequisition"
                class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Please specify" />
            </div>
          </div>
  
          <div>
            <label for="dateJoined" class="block mb-1 text-sm font-medium text-primary dark:text-white">
              Date Joined: <span class="text-red-500">*</span>
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input id="datepicker-autohide" type="date" v-model="EmployeeForm.dateJoined"
                class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required />
            </div>
            <span v-if="validationErrors.dateJoined" class="text-red-500 text-sm">Please fill in this field.</span>
          </div>
        </div>
  
        <div>
          <label for="others" class="block mb-1 text-sm font-medium text-primary dark:text-white">
            Others (Please specify):
          </label>
          <input type="text" id="others" v-model="EmployeeForm.others"
            class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Others" />
        </div>
      </div>
  
      <div class="mt-6 flex flex-col sm:flex-row justify-end gap-y-1 space-y-2 sm:space-y-0 sm:space-x-4">
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
    
    export default {
        data() {
            return {
                EmployeeForm: {
                    Employeename: '',
                    nameCards: '',
                    email: '',
                    department: '',
                    desktop: '',
                    others: '',
                    otherRequisition: '',
                    laptop: '',
                    dateJoined: '',
                },
                validationErrors: {},
                showOtherInput: false,
            }
        },
        methods: {
            validateForm() {
                this.validationErrors = {};
                if (!this.EmployeeForm.Employeename) this.validationErrors.Employeename = true;
                if (!this.EmployeeForm.department) this.validationErrors.department = true;
                if (!this.EmployeeForm.dateJoined) this.validationErrors.dateJoined = true;
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
                    }).then((result) => {
                        if (result.isConfirmed) {
                            console.log('Form data saved:', this.EmployeeForm);
                            this.EmployeeForm = {
                                company: '',
                                position: '',
                                department: '',
                                reportTo: '',
                                responsibilities: '',
                                duties: '',
                                education: '',
                                experience: '',
                                skills: '',
                            };
                            Swal.fire({
                                title: 'Saved!',
                                text: 'Your data has been saved.',
                                confirmButtonColor: '#3085d6',
                                icon: 'success',
                                confirmButtonText: 'OK'
                            });
                        }
                    });
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Please fill in all required fields.',
                        icon: 'error',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'OK'
                    });
                }
            },
            resetForm() {
                this.EmployeeForm = {
                    Employeename: '',
                    nameCards: '',
                    email: '',
                    department: '',
                    desktop: '',
                    laptop: '',
                    others: '',
                    dateJoined: '',
                };
                this.showOtherInput = false;
            }
        }
    }
</script>