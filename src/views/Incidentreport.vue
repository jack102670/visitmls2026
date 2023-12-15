<template>
  <div>
    <main class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#F8F9FA] dark:bg-[#141517] p-10 sm:ml-64  h-screen">
      <!-- Your page content goes here -->
      <div class="container mx-auto  ">

        <div class="bg-[#f7fbff] dark:bg-[#25262b] rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
          <div class="flex items-center justify-center h-full">
            <p class="text-2xl font-bold text-slate-900 dark:text-white">Incident Report</p>
          </div>
          <!-- <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
          <p class="text-slate-500 dark:text-slate-300 mt-2 text-sm">
            The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer
            space.
          </p> -->


          <!-- Table -->
          <div class="">
            <header class="px-5 py-4 border-b border-gray-100">
              <h2 class="font-semibold text-gray-800"></h2>
            </header>
            <div class="p-3">
              <div class="overflow-x-auto">
                <table class="table-auto w-full">
                  <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Requester</div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Date created</div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-center">Status</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="text-sm divide-y divide-gray-100">
                    <TableTemp v-for="row in tableData" :key="row.id" :rowData="row" />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </div>
</template>

<script>
import TableTemp from '../components/TableTemp.vue';

export default {
  name: 'IncidentReportView',
  components: {
    TableTemp,
  },
  data() {
    return {
      tableData: [
        {
          id: 1,
          requester: 'Alex Shatov',
          datecreated: '2023-12-12',
          status: 'In Progress',
          image: 'https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg',
        
        },
        {
          id: 2,
          requester: 'Philip Harbach',
          datecreated: '2023-12-13',
          status: 'Completed',
          image: 'https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg',
        },
        // Add more data as needed
      ],
    };
  },
};
</script>