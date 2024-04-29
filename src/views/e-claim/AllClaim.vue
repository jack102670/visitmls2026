<template>
  <main
    class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto"
  >
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <section class="container px-4 mx-auto">
          <div class="flex items-center justify-between gap-x-3">
            <div>
              <h2 class="text-lg font-medium text-gray-800 dark:text-white">
                All Claim
              </h2>
            </div>
          </div>

          <div class="flex flex-col mt-6">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div
                class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"
              >
                <div
                  class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg"
                >
                  <table
                    ref="myTable"
                    class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                  >
                    <thead class="bg-gray-50 dark:bg-gray-800">
                      <tr>
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
                            <span>Reference Number</span>
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

        <div class="container mx-auto">
          <div
            class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
          >
            <div class="flex items-center justify-between mb-6">
              <h2>class="text-xl font-bold text-slate-900 dark:text-white"</h2>
            </div>
            <section class="container px-4 mx-auto">
              <div class="flex items-center justify-between gap-x-3">
                <h2 class="text-lg font-medium text-gray-800 dark:text-white">"All Claim"</h2>
              </div>
          </div>
              <div class="flex flex-col mt-6">
              <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper no-footer">
                      <div class="dataTables_length" id="DataTables_Table_0_length">
                        <label>"Show"
                          <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" class>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                          </select>
                          "entries"
                        </label>
                      </div>
                        <div id="DataTables_Table_0_filter" class="dataTables_filter">
                          <label>"Search:"
                            <input type="search" class placeholder aria-controls="DataTables_Table_0">
                          </label>
                        </div>
                          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 dataTable no-footer" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info">
                            <thead class="bg-gray-50 dark:bg-gray-800"></thead>
                            <tr>
                              <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 sorting sorting_asc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Type Of Request: activate to sort column descending" style="width: 91.7344px;">
                                <div class="flex items-center gap-x-3">
                                  <span>Type of Request</span>
                                </div>
                              </th>

                              <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Reference Number: activate to sort column ascending" style="width: 65.1719px;">
                                <div class="flex items-center gap-x-3">
                                  <span>Reference Number</span>
                                </div>
                              </th>

                              <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Date: activate to sort column ascending" style="width: 109.016px;">
                                <div class="flex items-center gap-x-3">
                                  <span>Date</span>
                                </div>
                              </th>

                              <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style="width: 57.9531px;">
                                <div class="flex items-center gap-x-3">
                                  <span>Status</span>
                                </div>
                              </th>
                              
                            </tr>
                          </table>
                    </div>
                  </div>
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