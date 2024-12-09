<template>
  <div class="grid grid-cols-8 px-4 pb-4 py-4 gap-2">
    <div class="col-span-8 md:mx-8 ">
        <div class="py-2 ">
          <breadcrumbs :breadcrumbs="breadcrumbs" />
        </div>
        <div class="space-y-2 bg-primary p-4  rounded-md">
          <h1 class="font-bold text-md text-white uppercase"> Familiriarisation Programme / On Job Training Form</h1>
        </div>
      </div>
    <div class="col-span-8 bg-white border-[1px] p-4 rounded-md md:mx-8 ">
      <div class="space-y-2">
        <div class="">
          <OnJobTrainingForm />
        </div>
        <div>
          <!-- <OnJobTrainingHOD /> -->
        </div>

      </div>

    </div>
  </div>
</template>
<script>
  import breadcrumbs from '../../../components/EFormComponent/OtherComponent/BreadCumbs.vue'
  import OnJobTrainingForm from '@/components/EFormComponent/OnJobTrainingForm/OnJobTrainingForm.vue';
  // import OnJobTrainingHOD from '@/components/EFormComponent/OnJobTrainingForm/OnJobTrainingHOD.vue';
  
  export default {
    components: {
      breadcrumbs,
      OnJobTrainingForm,
      // OnJobTrainingHOD,
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
      // console.log('Mounted hook triggered'); 
      document.body.style.backgroundColor = '#F8FBFB'; 
    },
    beforeUnmount() { 
      // console.log('Unmount hook triggered'); 
      document.body.style.backgroundColor = '#CED1DA'; 
    }
  }
</script>