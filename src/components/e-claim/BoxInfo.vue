<template>
  <main class="flex-1 text overflow-y-auto bg-[#CED1DA] p-4 sm:ml-64">
    <div class="container mx-auto">
      <div
        class="relative overflow-hidden bg-[#f7fbff] border-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <div class="flex justify-between">
          <div class="flex justify-start flex-col ml-5">
            <h2 class="text-3xl font-bold text-blue-900">
              PKT Group of Companies
            </h2>
            <h3 class="text-xl font-bold text-blue-800">
              Claim for Reimbursement of All Expenses
            </h3>
          </div>
          <hr class="h-mx-auto bg-gray-100 border-0 rounded" />
          <div class="flex flex-col ml-5">
            <button
              @click="showContent"
              class="w-64 p-3 rounded-2xl tems-center-border-4 text-xl bg-blue-900 border text-white"
            >
              <div class="flex justify-center">
                <span class="mr-2 text-slate-100 hover:text-blue-200"
                  >New Claim</span
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  data-slot="icon"
                  class="w-8 h-8 hover:text-blue-200"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
  <main class="flex-1 text overflow-y-auto bg-[#CED1DA] p-4 sm:ml-64">
    <div class="container mx-auto">
      <div
        class="relative overflow-hidden bg-[#f7fbff] border-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <div>
          <h2 class="text-lg font-semibold text-gray-800 dark:text-white">
            Status
          </h2>
        </div>
        <div
          class="mt-5 grid grid-cols-2 gap-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4"
        >
          <div
            class="relative overflow-hidden bg-white shadow-md border-x-2 border-y-2 border-blue-700 rounded-lg"
          >
            <div class="card">
              <div class="m-4">
                <span class="text-2xl font-bold">00</span>
                <span class="block text-sm text-gray-500 font-semibold"
                  >Draft</span
                >
              </div>
              <div
                class="flex items-center justify-center w-full top-0 mt-2 bg-blue-700 p-2 text-white text-xs font-bold"
              >
                <span>See More</span>
              </div>
            </div>
          </div>
          <div
            class="relative overflow-hidden bg-white shadow-md border-x-2 border-y-2 border-blue-700 rounded-lg"
          >
            <div class="card">
              <div class="m-4">
                <span class="text-2xl font-bold">00</span>
                <span class="block text-sm text-gray-500 font-semibold"
                  >Unsubmitted</span
                >
              </div>
              <div
                class="flex items-center justify-center w-full top-0 mt-2 bg-blue-700 p-2 text-white text-xs font-bold"
              >
                <span>See More</span>
              </div>
            </div>
          </div>
          <div
            class="relative overflow-hidden bg-white shadow-md border-x-2 border-y-2 border-blue-700 rounded-lg"
          >
            <div class="card">
              <div class="m-4">
                <span class="text-2xl font-bold">00</span>
                <span class="block text-sm text-gray-500 font-semibold"
                  >Submitted</span
                >
              </div>
              <div
                class="flex items-center justify-center w-full top-0 mt-2 bg-blue-700 p-2 text-white text-xs font-bold"
              >
                <span>See More</span>
              </div>
            </div>
          </div>
          <div
            class="relative overflow-hidden bg-white shadow-md border-x-2 border-y-2 border-blue-700 rounded-lg"
          >
            <div class="card">
              <div class="m-4">
                <span class="text-2xl font-bold">00</span>
                <span class="block text-sm text-gray-500 font-semibold"
                  >All Booking</span
                >
              </div>
              <div
                class="flex items-center justify-center w-full top-0 mt-2 bg-blue-700 p-2 text-white text-xs font-bold"
              >
                <span>See More</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style>
</style>