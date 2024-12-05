<template>
  <div class="border border-[1px] p-4 sm:p-6 rounded-md shadow-sm">
    <h1 class="font-bold text-xl mb-6">Employee Orientation Checklist</h1>
    <div class="space-y-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label for="Employeename" class="block mb-1 text-sm font-semibold text-primary dark:text-white">
            Name:
          </label>
          <p class="text-sm">{{ EmployeeForm.hod.name || 'N/A' }}</p>
        </div>
        <div>
          <label for="company" class="block mb-1 text-sm font-semibold text-primary dark:text-white">
            Company:
          </label>
          <p class="text-sm">{{ EmployeeForm.hod.company || 'N/A' }}</p>
        </div>

        <div>
          <label for="department" class="block mb-1 text-sm font-semibold text-primary dark:text-white">
            Department:
          </label>
          <p class="text-sm">{{ EmployeeForm.hod.department || 'N/A' }}</p>
        </div>
        <div>
          <label for="dateJoined" class="block mb-1 text-sm font-semibold text-primary dark:text-white">
            Date Joined:
          </label>
          <p class="text-sm">{{ EmployeeForm.hod.dateJoined || 'N/A' }}</p>
        </div>
        <div>
          <label for="branch" class="block mb-1 text-sm font-semibold text-primary dark:text-white">
            Branch:
          </label>
          <p class="text-sm">{{ EmployeeForm.hod.branch || 'N/A' }}</p>
        </div>
        <div>
          <label for="office" class="block mb-1 text-sm font-semibold text-primary dark:text-white">
            Office:
          </label>
          <p class="text-sm">{{ EmployeeForm.hod.office || 'N/A' }}</p>
        </div>
        <div>
          <label for="floor" class="block mb-1 text-sm font-semibold text-primary dark:text-white">
            Floor:
          </label>
          <p class="text-sm"> {{ EmployeeForm.hod.floor || 'N/A' }}</p>
        </div>
        <div>
          <label for="purpose" class="block mb-1 text-sm font-semibold text-primary dark:text-white">
            Purpose (Optional):
          </label>
          <p class="text-sm">{{ EmployeeForm.hod.purpose || 'N/A' }}</p>
        </div>
        <div>
          <label for="others" class="block mb-1 text-sm font-semibold text-primary dark:text-white">
            Others (Please specify):
          </label>
          <p class="text-sm">{{ EmployeeForm.hod.hoD_Emp_Other || 'N/A' }}</p>
        </div>
        <div>
          <label for="requisition" class="block mb-2 text-sm font-semibold text-primary dark:text-white">
            Requisition from HOD:
          </label>
          <div class="flex flex-wrap gap-4">
            <div class="flex items-center space-x-2">
              <input type="checkbox" id="email" :checked="EmployeeForm.hod.hoD_Emp_Email === '1'" disabled
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
              <label for="email" class="text-sm font-medium text-gray-900 dark:text-gray-300">
                Email
              </label>
            </div>

            <div class="flex items-center space-x-2">
              <input type="checkbox" id="nameCards" :checked="EmployeeForm.hod.hoD_Emp_NameCard === '1'" disabled
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
              <label for="nameCards" class="text-sm font-medium text-gray-900 dark:text-gray-300">
                Name Card
              </label>
            </div>

            <div class="flex items-center space-x-2">
              <input type="checkbox" id="desktop" :checked="EmployeeForm.hod.hoD_Emp_Desktop === '1'" disabled
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
              <label for="desktop" class="text-sm font-medium text-gray-900 dark:text-gray-300">
                Desktop
              </label>
            </div>

            <div class="flex items-center space-x-2">
              <input type="checkbox" id="laptop" :checked="EmployeeForm.hod.hoD_Emp_Laptop === '1'" disabled
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
              <label for="laptop" class="text-sm font-medium text-gray-900 dark:text-gray-300">
                Laptop
              </label>
            </div>
          </div>
        </div>
        <div>
          <div class="">
            <div>
              <label for="tagLine" class="mb-1 text-sm font-semibold text-gray-900 dark:text-gray-300">Employee
                Tag
                Line</label>
              <p class="text-sm">{{ EmployeeForm.hoD_Emp_Tagline || 'N/A' }}</p>
            </div>
          </div>
        </div>
        <div>
          <div class="">
            <div>
              <label for="FacebookAccountName"
                class="mb-1 text-sm font-semibold text-gray-900 dark:text-gray-300">Facebook
                Account
                Name</label>
              <p class="text-sm">{{ EmployeeForm.hoD_Emp_FB || 'N/A' }}</p>
            </div>
          </div>
        </div>
        <div>
          <div class="">
            <div>
              <label for="otherRequisition" class="mb-1 text-sm font-semibold text-gray-900 dark:text-gray-300">Chinese
                Name
                (If Any)</label>
              <p class="text-sm">{{ EmployeeForm.hoD_Emp_ChineseName || 'N/A' }}</p>
            </div>
          </div>
        </div>
        <div>
          <div class="">
            <div>
              <label for="PhoneNumber" class="mb-1 text-sm font-semibold text-gray-900 dark:text-gray-300">
                Employee Phone Number
              </label>
              <p class="text-sm">{{ EmployeeForm.hoD_Emp_PhoneNo || 'N/A' }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'intl-tel-input/build/css/intlTelInput.css';
import {
  GetHODOrientationChecklist
} from '@/api/EFormApi.js';

export default {
  data() {
    return {
      EmployeeForm: {
        hod: {
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
          requesterId: '',
          requesterName: 'Hod Name',
          requesterDesignation: 'Hod',
          requesterDept: 'ICT',
        }
      },
      showOtherInput: false,
      Companies: [],
      Departments: [],
      refNo: null
    }
  },
  mounted() {
    this.refNo = this.$route.params.refNo;
    if (this.refNo) {
      this.fetchOrientationChecklist();
    }
  },

  methods: {
    updateCheckboxValue(field, event) {
      this.EmployeeForm[field] = event.target.checked ? '1' : '0';
    },

    async fetchOrientationChecklist() {
      try {
        const response = await GetHODOrientationChecklist(this.refNo);
        if (response?.result) {
          this.EmployeeForm = {
            ...this.EmployeeForm,
            hod: {
              ...this.EmployeeForm.hod,
              ...response.result.hod
            },
          };
          console.log(this.EmployeeForm);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  }
}
</script>