<template>
  <div class="container mx-auto">
    <div class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-bold text-slate-900 dark:text-white"></h2>
        </div>

        <section class="container px-4 mx-auto">
            <div class="flex items-center justify-between gap-x-3">
                <div>
                    <h2 class="text-lg font-medium text-gray-800 dark:text-white">
                        My Request</h2>
                </div>
            </div>

            <div class="text-lg font-medium text-gray-800 dark:text-white">
                <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                            <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper no-footer">
                                <div class="dataTables_length" id="DataTables_Table_0_length">
                                    <label>Show
                                        <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" class>
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                        </select>entries
                                    </label>
                                </div>

                                <div id="DataTables_Table_0_filter" class="dataTables_filter">
                                    <label>Search:
                                        <input type="search" class placeholder aria-controls="DataTables_Table_0">
                                    </label>
                                </div>

                                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 dataTable no-footer" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info">
                                    <thead class="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                            <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 sorting sorting_asc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Type Of Request: activate to sort column descending" style="width: 196.953px;">
                                                <div class="flex items-center gap-x-3">
                                                    <span>Type of Request</span>
                                                </div>
                                            </th>

                                            <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 sorting sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Reference Number: activate to sort column ascending" style="width: 221.984px;">
                                                <div class="flex items-center gap-x-3">
                                                    <span>Reference Number</span>
                                                </div>
                                            </th>

                                            <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 sorting sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Date: activate to sort column ascending" style="width: 198.969px;">
                                                <div class="flex items-center gap-x-3">
                                                    <span>Date</span>
                                                </div>
                                            </th>

                                            <th scope="col" class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 sorting sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style="width: 116.234px;">
                                                <div class="flex items-center gap-x-3">
                                                    <span>Status</span>
                                                </div>
                                            </th>

                                            <th scope="col" class="relative py-3.5 sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Edit: activate to sort column ascending" style="width: 28.8594px;">
                                                <div class="flex items-center gap-x-3">
                                                    <span class="sr-only">Edit</span>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                </table>

                                 <div class="dataTables_info" id="DataTables_Table_0_info" role="status" aia-live="polite">
                                    Showing 1 to 2 of 2 entries
                                </div>
                                <div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
                                    <a class="paginate_button previous disabled" aria-controls="DataTables_Table_0" aria-disabled="true" role="link" data-dt-idx="previous" tabindex="-1" id="DataTables_Table_0_previous">Previous</a>
                                        <span>
                                             <a class="paginate_button current" aria-controls="DataTables_Table_0" aria-disabled="page" role="link" data-dt-idx="0" tabindex="0">1</a>
                                        </span>
                                     <a class="paginate_button next disabled" aria-controls="DataTables_Table_0" aria-disabled="true" role="link" data-dt-idx="next" tabindex="-1" id="DataTables_Table_0_next">Next</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>

</style>
