<template>
  <div class="grid grid-cols-8 px-4 pb-4 py-4 gap-2">
    <div class="col-span-8 bg-white border-[1px] min-h-[76vh] rounded-md p-4">
      <div>
        <h1 class="font-bold text-2xl text-primary"> Familiriarisation Programme / On Job Training Form</h1>
        <p class="text-sm text-primary font-semibold">New Request</p>
      </div>
      <div class="py-2 pb-2 pt-8">
        <breadcrumbs :breadcrumbs="breadcrumbs" />
      </div>
      <div class="space-y-2">
        <div class="">
          <OnJobTrainingForm />
        </div>
        <div>
          <OnJobTrainingHOD />
        </div>

      </div>

    </div>
  </div>
</template>
<script>
  import breadcrumbs from '../../../components/EFormComponent/OtherComponent/BreadCumbs.vue'
  import OnJobTrainingForm from '@/components/EFormComponent/OnJobTrainingForm/OnJobTrainingForm.vue';
  import OnJobTrainingHOD from '@/components/EFormComponent/OnJobTrainingForm/OnJobTrainingHOD.vue';
  export default {
    components: {
      breadcrumbs,
      OnJobTrainingForm,
      OnJobTrainingHOD,
    },
    data() {
      return {
        breadcrumbs: [{
          text: 'On Job Training ',
          replace: true
        }],
      };
    },

    mounted() {
      // this.fetchHrData();
      console.log('Mounted hook triggered'); // Debugging
      document.body.style.backgroundColor = '#F8FBFB'; // Apply page-specific background color
    },
    beforeUnmount() { // Vue 3 lifecycle hook for cleanup
      console.log('Unmount hook triggered'); // Debugging
      document.body.style.backgroundColor = '#CED1DA'; // Reset to default background color
    }
  }
</script>