<template>
  <div class="relative overflow-x-auto sm:rounded-lg">
    <div class="pb-4 bg-white dark:bg-gray-900 flex justify-between items-end">
      <div class="px-2">
        <h4 class="font-bold text-primary text-md">
          All Requested
        </h4>
      </div>
      <label for="table-search" class="sr-only">Search</label>
      <div class="relative mt-1">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input type="text" id="table-search"
          class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search for items" />
      </div>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-md">
      <thead class="text-xs text-gray-700 uppercase bg-[#e7e6ee] dark:bg-gray-700 dark:text-gray-400 rounded-t-md">
        <tr class="text-white font-bold">
          <th scope="col" class="p-4"></th>
          <th scope="col" class="px-6 py-3">No</th>
          <th scope="col" class="px-6 py-3">Reference Number</th>
          <th scope="col" class="px-6 py-3">Requested Date</th>
          <th scope="col" class="px-6 py-3">Approved Date</th>
          <th scope="col" class="px-6 py-3">Status</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="w-4 p-4"></td>
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            1
          </th>
          <td class="px-6 py-4">123356778</td>
          <td class="px-6 py-4">Wednesday, August 14, 2024 11:54 AM</td>
          <td class="px-6 py-4">Wednesday, August 14, 2024 11:54 AM</td>
          <td class="px-6 py-4">
            Pending
          </td>
          <td class="px-6 py-4 space-x-2">
            <button
              class="bg-transparent  text-verified border-verified font-bold p-2 border-[2px] rounded-md hover:bg-verified hover:border-verified hover:text-white hover:border-[2px]">
              View
            </button>
            <button
              class="bg-verified text-white font-bold p-2 border-[2px] border-verified rounded-md hover:bg-transparent hover:border-verified hover:text-verified hover:border-[2px] " :disabled="isDisabled">
              <span> Download</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-gray-900 dark:text-white">1-1</span> of <span class="font-semibold text-gray-900 dark:text-white">1</span></span>
        <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
            </li>
            <li>
        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
            </li>
        </ul>
    </nav>
  </div>
</template>

<script>
export default {
  isDisabled: true,
}

</script>

<style scoped>
</style>