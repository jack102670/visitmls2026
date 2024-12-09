<template>
  <div class="grid grid-cols-8 px-4 pb-4 py-4 gap-2">
    <div class="col-span-8 md:mx-8 ">
        <div class="py-2">
          <breadcrumbs :breadcrumbs="breadcrumbs" />
        </div>
        <div class="space-y-2 bg-primary p-4  rounded-md">
          <h1 class="font-bold text-md text-white uppercase"> Training Evaluation</h1>
        </div>
      </div>
    <div class="col-span-8 bg-white border-[1px] min-h-auto rounded-md px-4 py-2 md:mx-8">
      <div class="py-2 space-y-2">
        <UserProfileData />
      </div>
      <SectionAEvaluation />

    </div>
  </div>
</template>
<script>
  // import TrainingScrollable from '@/components/EFormComponent/TrainingEvaluationForm/TrainingScrollable.vue';
  import breadcrumbs from '../../../components/EFormComponent/OtherComponent/BreadCumbs.vue'
  import UserProfileData from "../../../components/EFormComponent/OtherComponent/UserData.vue"
  import SectionAEvaluation from "../../../components/EFormComponent/TrainingEvaluationForm/SectionAEvaluation.vue"
  export default {
    components: {
      // TrainingScrollable,
      breadcrumbs,
      UserProfileData,
      SectionAEvaluation
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
      // console.log('Mounted hook triggered'); 
      document.body.style.backgroundColor = '#F8FBFB'; 
    },
    beforeUnmount() { 
      // console.log('Unmount hook triggered'); 
      document.body.style.backgroundColor = '#CED1DA';
    }


  }
</script>