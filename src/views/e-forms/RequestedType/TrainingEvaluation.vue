<template>
  <div class="grid grid-cols-8 px-4 pb-4 py-4 gap-2">
    <div class="col-span-8 bg-white border-[1px] min-h-[76vh] rounded-md p-4">
      <div>
        <h1 class="font-bold text-2xl text-primary">Training Evaluation Form</h1>
        <p class="text-sm text-primary font-semibold">New Request</p>
      </div>
      <div class="py-2 pb-2 pt-8 space-y-2">
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <UserProfileData />
      </div>
      <TrainingScrollable />

    </div>
  </div>
</template>
<script>
  import TrainingScrollable from '@/components/EFormComponent/TrainingEvaluationForm/TrainingScrollable.vue';
  import breadcrumbs from '../../../components/EFormComponent/OtherComponent/BreadCumbs.vue'
  import UserProfileData from "../../../components/EFormComponent/OtherComponent/UserData.vue"
  export default {
    components: {
      TrainingScrollable,
      breadcrumbs,
      UserProfileData
    },
    data() {
      return {
        breadcrumbs: [{
          text: 'Training Evaluation',
          replace: true
        }],
       
      }
    },

    mounted() {
      console.log('Mounted hook triggered'); // Debugging
      document.body.style.backgroundColor = '#F8FBFB'; // Apply page-specific background color
    },
    beforeUnmount() { // Vue 3 lifecycle hook for cleanup
      console.log('Unmount hook triggered'); // Debugging
      document.body.style.backgroundColor = '#CED1DA'; // Reset to default background color
    }


  }
</script>