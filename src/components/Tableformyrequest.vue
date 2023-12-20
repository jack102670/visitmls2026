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

    <td class="px-4 py-4 text-sm whitespace-nowrap">
      <div class="flex items-center gap-x-6">
        <button
          @click=" viewRequestDetails"
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
      console.log("View button clicked for request:", this.requester);
    },
  },
};
</script>
