<template>
    <div class="grid grid-cols-8 px-4 pb-4 py-4 gap-2 ">

      <div class="col-span-8 md:mx-8 ">
        <div class="py-2 ">
          <breadcrumbs :breadcrumbs="breadcrumbs" />
        </div>
        <div class="space-y-2 bg-primary p-4  rounded-md">
          <h1 class="font-bold text-md text-white uppercase"> View Orientation Checklist</h1>
        </div>
      </div>
      <div class="col-span-8 bg-white border-[1px] rounded-md p-4 md:mx-8">

        <div class="space-y-2">
          <ViewSectionAOrientationChecklist />
          <ViewSectionBOrientationChecklist />
        </div>
      </div>
    </div>
  </template>
  <script>
  
  import breadcrumbs from '../../../components/EFormComponent/OtherComponent/BreadCumbs.vue'
  import ViewSectionAOrientationChecklist from "../../../components/EFormComponent/OrientationChecklistForm/ViewOrientationChecklist.vue/ViewSectionAOrientationChecklist.vue";
  import ViewSectionBOrientationChecklist from '@/components/EFormComponent/OrientationChecklistForm/ViewOrientationChecklist.vue/ViewSectionBOrientationChecklist.vue';
  
  
  export default {
    data() {
      return {
        breadcrumbs: [{
          text: 'Orientation Checklist ',
          replace: true
        }],
      }
    },
    components: {
      breadcrumbs,
      ViewSectionAOrientationChecklist,
      ViewSectionBOrientationChecklist
  
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