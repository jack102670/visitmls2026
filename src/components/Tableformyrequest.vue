<template>
  <tr>
    <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
      <div class="inline-flex items-center gap-x-3">
        <div class="flex items-center gap-x-2">
          <div>
            <h2 class="font-medium text-gray-500 dark:text-white">
              {{ requester.typeofrequest }}
            </h2>
          </div>
        </div>
      </div>
    </td>

    <td
      class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
    >
      {{ requester.date }}
    </td>

    <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
      <div :class="getStatusContainerClass(requester.status)">
        <span :class="getStatusDotClass(requester.status)"></span>
        <h2 :class="getStatusTextClass(requester.status)">
          {{ requester.status }}
        </h2>
      </div>
    </td>
    <td class="px-4 py-4 ml text-sm whitespace-nowrap">
      <div class="flex items-center gap-x-6">
        <button
          @click="viewRequestDetails"
          class="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button> 

        <button v-if="requester.status === 'Pending'"
          class="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </button>
        
        <button v-if="requester.status === 'Pending'"
          class="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
    </td>

   
  </tr>
</template>

<script>
export default {
  name: "TableformyrequestView",
  props: {
    requester: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getStatusContainerClass(status) {
      const colorMap = {
        Approved:
          "inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800",
        Pending:
          "inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-yellow-100/60 dark:bg-gray-800",
        Rejected:
          "inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800",
      };
      return colorMap[status] || "bg-gray-800"; // Default to a dark color if the status is not recognized
    },
    getStatusDotClass(status) {
      const colorMap = {
        Approved: "h-1.5 w-1.5 rounded-full bg-emerald-500",
        Pending: "h-1.5 w-1.5 rounded-full bg-yellow-500",
        Rejected: "h-1.5 w-1.5 rounded-full bg-red-500",
      };
      return colorMap[status] || "h-1.5 w-1.5 rounded-full bg-gray-700"; // Default to a dark color if the status is not recognized
    },
    getStatusTextClass(status) {
      const colorMap = {
        Approved: "text-sm font-normal text-emerald-500",
        Pending: "text-sm font-normal text-yellow-500",
        Rejected: "text-sm font-normal text-red-500",
      };
      return colorMap[status] || "text-gray-500"; // Default to a dark color if the status is not recognized
    },
    viewRequestDetails() {
      // You can implement the logic to show the details view here
      console.log("see", this.requester);
    },
  },
};
</script>
