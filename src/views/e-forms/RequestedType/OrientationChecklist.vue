<template>
  <div class="grid grid-cols-8 px-4 pb-4 py-4 gap-2">
    <div class="col-span-8 bg-white border-[1px] min-h-[76vh] rounded-md p-4">
      <div>
      <h1 class="font-bold text-2xl text-primary"> Orientation Checklist</h1>
      <p class="text-sm text-primary font-semibold">New Request</p>

      <div class="py-2 pb-2 pt-8">
      <breadcrumbs :breadcrumbs="breadcrumbs" />
    </div>
    <div class="space-y-2">
      <OrientationChecklistForm />
      <OrientationCheckListFormForCompletion />
       
    </div>
    </div>
    </div>
  </div>
</template>
<script>

import breadcrumbs from '../../../components/EFormComponent/OtherComponent/BreadCumbs.vue'
import OrientationChecklistForm from "../../../components/EFormComponent/OrientationChecklistForm/SectionAOrientationChecklist.vue"
import OrientationCheckListFormForCompletion from "../../../components/EFormComponent/OrientationChecklistForm/SectionBOrientationChecklist.vue"


export default {
  data () {
    return {
      breadcrumbs: [{
        text: 'Orientation Checklist ',
        replace: true
      }],
    }
  },
  components: {
    breadcrumbs,
    OrientationChecklistForm,
    OrientationCheckListFormForCompletion

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