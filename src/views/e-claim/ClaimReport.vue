<!-- Summary Report for Admin View-->
<template>
  <main
    class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto"
  >
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <div class="mt-2 flex justify-between">
          <h3 class="ml-4 text-2xl font-bold text-blue-900">
            WEBINAR AT PENANG
          </h3>
          <div
            class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
          >
            <div
              class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-red-500"></span>
              <h2 class="text-sm font-normal text-red-500">Unsubmitted</h2>
            </div>
          </div>

          <div class="mt-1 mr-4 gap-2 flex flex-row-reverse">
            <button
              @click="showContent"
              class="w-30 p-1 rounded-lg items-center border-4 text-sm dark:bg-gray-900 dark:border-gray-700 bg-green-700 border text-white"
            >
              <div class="flex justify-center">
                <span class="mr-2 ml-2 text-slate-100 hover:text-blue-200"
                  >Submit Claim</span
                >
              </div>
            </button>
            <button
              @click="showContent"
              class="w-30 p-1 rounded-lg items-center border-4 text-sm dark:bg-gray-900 dark:border-gray-700 bg-green-700 border text-white"
            >
              <div class="flex justify-center">
                <span class="mr-2 ml-2 text-slate-100 hover:text-blue-200"
                  >Add Expenses</span
                >
              </div>
            </button>
          </div>
        </div>
        <section class="px-4 mx-auto">
          <div class="mt-5 flex justify-between sm: grid grid-cols-1">
            <h5 class="text-sm font-semibold text-gray-600">Designation :</h5>
            <h5 class="text-sm font-semibold text-gray-600">Company Name :</h5>
            <h5 class="text-sm font-semibold text-gray-600">Cost Center :</h5>
            <h5 class="text-sm font-semibold text-gray-600">
              Date of Report :
            </h5>
          </div>
        </section>

        <section class="container px-4 mx-auto">
          <div class="flex flex-col mt-6">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div
                class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"
              >
                <div
                  class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg"
                >
                  <table
                    ref="reportTable"
                    class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                  >
                    <thead class="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>No</span>
                          </div>
                        </th>

                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Type Of Claim</span>
                          </div>
                        </th>

                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Particulars</span>
                          </div>
                        </th>

                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Amount</span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
</script>

<style>
</style>