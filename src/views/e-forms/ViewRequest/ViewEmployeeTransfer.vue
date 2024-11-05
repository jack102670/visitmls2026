<template>
    <div class="grid grid-cols-8 px-4 pb-4 py-4 gap-2">
      <div class="col-span-8 bg-white min-h-[76vh] border-[1px] rounded-md p-4 md:mx-8">
        <div>
          <h1 class="font-bold text-2xl text-primary"> Employee Transfer Form</h1>
          <p class="text-sm text-primary font-semibold">New Request</p>
        </div>
        <div class="py-2 pb-2 pt-8">
          <breadcrumbs :breadcrumbs="breadcrumbs" />
        </div>
        <div class="space-y-2">
          <UserProfileData />
            <EmployeeTransferForm />
        </div>
      </div>
    </div>
  </template>
  <script>
  import breadcrumbs from '../../../components/EFormComponent/OtherComponent/BreadCumbs.vue'
  import UserProfileData from "../../../components/EFormComponent/OtherComponent/UserData.vue"
  import EmployeeTransferForm from "../../../components/EFormComponent/EmployeeRequestForm/ViewEmployeeRequestForm/ViewEmployeeRequestForm.vue"
  
  export default {
    components: {
      breadcrumbs,
      UserProfileData,
      EmployeeTransferForm,
  
    },
    data() {
      return {
        breadcrumbs: [{
          text: 'Employee Transfer',
          replace: true
        }],
      }
    },
    mounted() {
      // console.log('Mounted hook triggered');
      document.body.style.backgroundColor = '#F8FBFB'; 
    },
    beforeUnmount() { 
      // console.log('Unmount hook triggered'); 
      document.body.style.backgroundColor = '#CED1DA'; 
    }
  
  }
  </script>