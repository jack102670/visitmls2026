<!-- Summary Report for Admin View-->
<template> 
  <main
    class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto"
  >
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <div class="flex item-center justify-center">
          <h3 class="text-2xl font-bold text-blue-900">
            SUMMARY CLAIM FOR REIMBURSEMENT OF ALL EXPENSES
          </h3>
        </div>

        <div class="mt-5 mr-4 flex flex-row-reverse">
          <button
            @click="showContent"
            class="w-30 p-1 rounded-lg items-center border-4 text-sm dark:bg-gray-900 dark:border-gray-700 bg-green-700 border text-white"
          >
            <div class="flex justify-center">
              <span class="mr-2 ml-2 text-slate-100 hover:text-blue-200"
                >See More</span
              >
            </div>
          </button>
        </div>

        <section class="px-4 mx-auto">
          <div class="mt-3 flex justify-between">
            <h5 class="text-sm font-semibold text-gray-600">Claimant Name :</h5>
            <h5 class="text-sm font-semibold text-gray-600">Designation :</h5>
          </div>
          <div class="mt-1 flex justify-between">
            <h5 class="text-sm font-semibold text-gray-600">Company Name :</h5>
            <h5 class="text-sm font-semibold text-gray-600">Cost Center :</h5>
          </div>
          <div class="mt-1 flex justify-between">
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
                            <span>Status</span>
                          </div>
                        </th>

                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Name</span>
                          </div>
                        </th>

                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Designation</span>
                          </div>
                        </th>

                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Date</span>
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

        <div class="mt-9 mr-4 flex flex-row-reverse">
          <button
            @click="showContent"
            class="w-20 p-1 rounded-lg items-center border-4 text-sm dark:bg-gray-900 dark:border-gray-700 bg-red-600 border text-white"
          >
            <div class="flex justify-center">
              <span class="mr-2 ml-2 text-slate-100 hover:text-blue-200"
                >Reject</span
              >
            </div>
          </button>
          <button
            @click="showContent"
            class="w-20 p-1 rounded-lg items-center border-4 text-sm dark:bg-gray-900 dark:border-gray-700 bg-[#210e81] border text-white"
          >
            <div class="flex justify-center">
              <span class="mr-2 ml-2 text-slate-100 hover:text-blue-200"
                >Approve</span
              >
            </div>
          </button>
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