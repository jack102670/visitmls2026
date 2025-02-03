<template>
  <main class="flex overflow-y-auto bg-[#CED1DA] dark:bg-gray-900 p-4 sm:ml-64">
    <div class="w-full">
      <div
        class="relative overflow-hidden bg-[#f7fbff] dark:bg-gray-900 dark:text-white border-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-full">
        <h1 class="text-blue-800 dark:text-blue-600 text-xl md:text-2xl font-bold uppercase">
          Assign Checker
        </h1>
        <div class="grid grid-cols-8 gap-4 w-full">
          <div class="col-span-8">
            <div class="flex flex-col">
              <div class="flex flex-col mb-8">
                <div class="flex flex-row-reverse">
                  <button @click="toggleSlideOver" class="bg-primary text-white py-2 w-32 rounded-lg hover:bg-primary">
                    New Checker
                  </button>
                </div>
                <CheckerTable :refreshKey="refreshKey" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SlideOver :isOpen="isSlideOverOpen" @close="toggleSlideOver" @checkerAdded="refreshTable" @closeSlideOver="isSlideOverOpen = false"  />
  </main>
</template>

<script>
import SlideOver from '@/components/e-claim/AssignedChecker/SlideOver/AssignCheckerForm.vue';
import CheckerTable from '@/components/e-claim/AssignedChecker/AssignedCheckerTable.vue';

export default {
  components: {
    SlideOver,
    CheckerTable,
  },

  data() {
    return {
      isSlideOverOpen: false,
      refreshKey: 0,
    };
  },

  methods: {
    toggleSlideOver() {
      this.isSlideOverOpen = !this.isSlideOverOpen;
    },

    refreshTable() {
      this.refreshKey += 1; 
    }
  }
};
</script>
