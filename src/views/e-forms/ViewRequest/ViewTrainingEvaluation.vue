<template>
  <div class="grid grid-cols-8 px-4 py-4 gap-2">
    <div class="col-span-8 md:mx-8 ">
        <div class="py-2">
          <breadcrumbs :breadcrumbs="breadcrumbs" />
        </div>
        <div class="space-y-2 bg-primary p-4  rounded-md">
          <h1 class="font-bold text-md text-white uppercase"> View Training Evaluation</h1>
        </div>
      </div>
    <div class="col-span-8 bg-white border-[1px] min-h-auto rounded-md p-4 md:mx-8">
      <div class="py-2 space-y-2">
        <UserProfileData />
      </div>
      <TrainingScrollable />
    </div>
  </div>
</template>
<script>
import TrainingScrollable from '@/components/EFormComponent/TrainingEvaluationForm/ViewTrainingEvaluation/ViewTrainingScrollable.vue';
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
        text: 'View Training Evaluation',
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