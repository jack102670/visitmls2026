<template>
  <div class="grid grid-cols-8 px-4 pb-4 py-4 gap-2">
    <div class="col-span-8 bg-white min-h-[76vh] border-[1px] rounded-md p-4 md:mx-8">
      <div class="space-y-2">
        <h1 class="font-bold text-2xl text-primary"> Employee Transfer Form</h1>
        <p class="text-sm text-primary font-semibold">New Request</p>
      </div>
      <div class="py-2 pb-2 pt-8">
        <breadcrumbs :breadcrumbs="breadcrumbs" />
      </div>
      <div class="space-y-2">
        <UserProfileData />
          <EmployeeTransferForm />
          <!-- <HODRequestForm />
          <HRDRequestForm />
          <HODAccusitionDecision />
          <HRDFinalRequest /> -->
      </div>
    </div>
  </div>
</template>
<script>
import breadcrumbs from '../../../components/EFormComponent/OtherComponent/BreadCumbs.vue'
import UserProfileData from "../../../components/EFormComponent/OtherComponent/UserData.vue"
import EmployeeTransferForm from "../../../components/EFormComponent/EmployeeRequestForm/EmployeRequestForm.vue"
// import HODRequestForm from '@/components/EFormComponent/EmployeeRequestForm/HODRequestForm.vue';
// import HRDRequestForm from '@/components/EFormComponent/EmployeeRequestForm/HRDRequestForm.vue';
// import HODAccusitionDecision from '@/components/EFormComponent/EmployeeRequestForm/HODAccusitionDecision.vue';
// import HRDFinalRequest from '@/components/EFormComponent/EmployeeRequestForm/HRDFinalRequest.vue';

export default {
  components: {
    breadcrumbs,
    UserProfileData,
    EmployeeTransferForm,
    // HODRequestForm,
    // HRDRequestForm,
    // HODAccusitionDecision,
    // HRDFinalRequest

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