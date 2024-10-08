<template>
  <section>
    <div class="grid grid-cols-8 px-4 pb-4 py-4 gap-2">
      <div class="col-span-8 bg-white min-h-[76vh] rounded-md p-4">

        <div>
          <h1 class="font-bold text-2xl text-primary"> Personnel Requisition Form</h1>
          <p class="text-sm text-primary font-semibold">New Request</p>
        </div>
        <div class="py-2 pb-2 pt-8">
          <breadcrumbs :breadcrumbs="breadcrumbs" />
        </div>
        <div class="space-y-2">
          <UserProfileData />
          <div class="">
            <form class="">
              <PersonnelScrollable />
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import breadcrumbs from '../../../components/EFormComponent/OtherComponent/BreadCumbs.vue'
  import PersonnelScrollable from '@/components/EFormComponent/PersonnelReqForm/PersonnelScrollable.vue';
  import UserProfileData from "../../../components/EFormComponent/PersonnelReqForm/UserData.vue"
  export default {
    components: {
      breadcrumbs,
      PersonnelScrollable,
      UserProfileData
    },
    data() {
      return {
        breadcrumbs: [{
          text: 'Personnel Requisition',
          replace: true
        }],
      }
    }
  }
</script>