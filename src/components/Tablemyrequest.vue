<template>
    <tr>
      <td class="p-2 whitespace-nowrap">
        <!-- <div class="flex items-center">
          <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
            <img class="rounded-full" :src="rowData.image" width="40" height="40" alt="User Image">
          </div>
          <div class="font-medium text-gray-800">{{ }}</div>
        </div> -->
      </td>
      <td class="p-2 whitespace-nowrap">
        <div class="text-left  dark:text-gray-300">{{ rowData.task }}</div>
      </td>
      <td class="p-2 whitespace-nowrap">
        <div class="text-left  dark:text-gray-300">{{ rowData.datecreated }}</div>
      </td>
      <td class="p-2 whitespace-nowrap">
        <div class="text-lg text-center  dark:text-gray-300">{{ rowData.status }}</div>
      </td>
    </tr>
  </template>
  
  <script>
  export default {
    name:'TablemyrequestView',
    props: {
      rowData: Object,
    },
  };
  </script>