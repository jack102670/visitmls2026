<template>
  <div class="grid grid-cols-8 px-4 pb-4 pt-2 gap-2">
    <div class="col-span-8 bg-white min-h-[76vh] rounded-md p-4">
      <div>
        <h1 class="font-bold text-2xl text-primary"> Familiriarisation Programme / On Job Training Form</h1>
        <p class="text-sm text-primary font-semibold">New Request</p>
      </div>
      <div class="py-2 pb-2 pt-8">
        <breadcrumbs :breadcrumbs="breadcrumbs" />
      </div>
      <div class="space-y-2">
        <div class="space-y-6 border-[1px] rounded-md py-4 px-6">
        <div class="grid grid-cols-8 gap-2">

          <div class="col-span-1">
            <label for="position" class="block text-sm font-medium text-primary dark:text-white">Name:</label>
          </div>
          <div class="col-span-3">
            <label for="position" class="block text-sm font-medium text-primary dark:text-white">{{ user.name }}</label>
          </div>
          <div class="col-span-1">
          </div>
          <div class="col-span-3 flex space-x-6">
            <input id="familiarisation" type="checkbox" v-model="user.familiarisationCheckbox"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="position" class="block text-sm font-medium text-primary dark:text-white">Familiriarisation
              Programme</label>
          </div>
        </div>
        <div class="grid grid-cols-8 gap-2">

          <div class="col-span-1">
            <label for="position" class="block text-sm font-medium text-primary dark:text-white">Department
              Name:</label>
          </div>
          <div class="col-span-3">
            <label for="position"
              class="block text-sm font-medium text-primary dark:text-white">{{ user.department }}</label>
          </div>
          <div class="col-span-1">
          </div>
          <div class="col-span-3 flex space-x-6">
            <input id="onJobTraining" type="checkbox" v-model="user.onJobTrainingCheckbox"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="position" class="block text-sm font-medium text-primary dark:text-white">On Job training
              Programme</label>
          </div>
        </div>

      </div>
      <div class="">
        <OnJobTrainingForm />
      </div>

      </div>

    </div>
  </div>
</template>
<script>
  import breadcrumbs from '../../../components/EFormComponent/OtherComponent/BreadCumbs.vue'
  import OnJobTrainingForm from '@/components/EFormComponent/OnJobTrainingForm/OnJobTrainingForm.vue';
  import {
    fetchHrData
  } from '@/api/EFormApi';
  import {
    store
  } from '@/views/store.js';
  export default {
    components: {
      breadcrumbs,
      OnJobTrainingForm
    },
    data() {
      return {
        breadcrumbs: [{
          text: 'On Job Training ',
          replace: true
        }],
        user: {
          name: '',
          department: '',
          familiarisationCheckbox: false,
          onJobTrainingCheckbox: false,
        },
      };
    },
    methods: {
      async fetchHrData() {
        const username_id = store.getSession().userDetails.userId;
        this.loadingText = 'Fetching';
        this.loading = true;
        try {
          const data = await fetchHrData(username_id);
          if (data) {
            this.user = data;
            this.name = data.name;
          }
          console.log("Employee Data:", this.user);
        } catch (error) {
          console.error('Error fetching Employee data:', error);
          throw new Error('Failed to fetch Employee data. Please try again.');
        } finally {
          this.loading = false;
        }
      }
    },
    mounted() {
      this.fetchHrData();
    }
  }
</script>