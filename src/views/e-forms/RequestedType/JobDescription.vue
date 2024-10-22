<template>
  <div class="grid grid-cols-8 px-4 pb-4 py-4 gap-2">
    <div class="col-span-8 bg-white border-[1px] min-h-[76vh] rounded-md p-4">
      <div>
        <h1 class="font-bold text-2xl text-primary"> Job Description Form</h1>
        <p class="text-sm text-primary font-semibold">New Request</p>

        <div class="py-2 pb-2 pt-8">
          <breadcrumbs :breadcrumbs="breadcrumbs" />
        </div>
        <div class="space-y-2">
          <UserProfileData />
          <JobDescriptionForm />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import breadcrumbs from '../../../components/EFormComponent/OtherComponent/BreadCumbs.vue'
  import UserProfileData from "../../../components/EFormComponent/OtherComponent/UserData.vue"
  import JobDescriptionForm from '@/components/EFormComponent/JobDescriptionForm/JobDescriptionForm.vue'
  export default {
    data() {
      return {
        breadcrumbs: [{
          text: 'Job Description ',
          replace: true
        }],
      }
    },
    components: {
      breadcrumbs,
      UserProfileData,
      JobDescriptionForm
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