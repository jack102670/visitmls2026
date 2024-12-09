<template>
    <div class="grid grid-cols-8 px-4 pb-4 py-4 gap-2">
      <div class="col-span-8 md:mx-8 ">
        <div class="py-2 ">
          <breadcrumbs :breadcrumbs="breadcrumbs" />
        </div>
        <div class="space-y-2 bg-primary p-4  rounded-md">
          <h1 class="font-bold text-md text-white uppercase"> View Familiriarisation Programme / On Job Training Form</h1>
        </div>
      </div>
      <div class="col-span-8 bg-white border-[1px] rounded-md p-4 md:mx-8 ">

        <div class="space-y-2">
          <div class="space-y-2">
            <ViewOnJobTraining  @update-verify="handleVerifyUpdate" />
            <ViewOJTHOD :verify-status="verifyStatus" />
          </div>
        </div>
  
      </div>
    </div>
  </template>
  <script>
    import breadcrumbs from '../../../components/EFormComponent/OtherComponent/BreadCumbs.vue'
    import ViewOnJobTraining from '@/components/EFormComponent/OnJobTrainingForm/ViewOnJobTrainingForm/ViewOnJobTrainingForm.vue';
    import ViewOJTHOD from "../../../components/EFormComponent/OnJobTrainingForm/ViewOnJobTrainingForm/ViewOJTHOD.vue"


    export default {
      components: {
        breadcrumbs,
        ViewOnJobTraining,
        ViewOJTHOD
      },
      data() {
        return {
          verifyStatus: false,
          breadcrumbs: [{
            text: 'View On Job Training ',
            replace: true
          }],
        };
      },
      methods: {
        updateVerify(value) {
      this.verify = value;
    },

    handleVerifyUpdate(status) {
        this.verifyStatus = status;
    }
      },
  
      mounted() {
        document.body.style.backgroundColor = '#F8FBFB'; 
      },
      beforeUnmount() { 
        document.body.style.backgroundColor = '#CED1DA'; 
      }
    }
  </script>