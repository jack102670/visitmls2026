<template>
  <main
    class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64"
  >
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <div class="flex">
          <div class="ml-5">
            <h2 class="text-3xl font-bold text-blue-900 dark:text-white">
              PKT GROUP OF COMPANIES
            </h2>
            <h3 class="text-md font-bold text-blue-800 dark:text-white">
              CLAIM FOR REIMBURSEMENT OF ALL EXPENSES
            </h3>
          </div>
          <div>add claim</div>
        </div>

        <div class="container mx-auto"></div>
      </div>

      <!-- Display a list of movies from the TMDb API -->
    </div>
  </main>
  <router-view></router-view>
</template>
<script>
export default {
  name: 'EClaimDashboard',
  // Your component's JavaScript code goes here

  mounted() {
    // Sidebar close or open
    let openOrNot = localStorage.getItem('openOrNot');
    const element = document.querySelector('main');
    if (element && openOrNot == 'false') {
      element.classList.add('become-big');
    } else if (element && openOrNot == 'true') {
      element.classList.remove('become-big');
    }
  },
};
</script>

<style scoped>
/* Your component's CSS code goes here */
</style>
