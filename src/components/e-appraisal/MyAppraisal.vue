<template>
  <main
    class="flex-1 text overflow-y-auto bg-[#CED1DA] dark:bg-gray-900 dark:text-white p-4 sm:ml-64"
  >
    <div
      class="relative overflow-hidden bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 
             border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
    >
      <!-- Title -->
      <div flex flex-col>
        <h1 class="text-3xl font-bold text-blue-900 dark:text-white">
          PKT GROUP OF COMPANIES
        </h1>
        <h2 class="text-xl font-bold text-blue-800 dark:text-white mt-3">
          {{ roleDisplay }}
        </h2>
      </div>

      <!-- New Appraisal Form (appraisee) -->
      <div v-if="role === 'appraisee'" class="pt-4 mt-3">
        <button @click="gotoNewAppraisalForm"
                class="flex items-center justify-center text-center rounded-full bg-[#160959] dark:bg-[#111827] text-slate-200 py-2 px-4 text-sm hover:bg-[#190a70] hover:text-white  border-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
            </svg> New Appraisal Form
        </button>
      </div>

      <!-- Pending / Completed -->
      <div v-if="role !== 'appraisee'" class="mt-4 mb-2 flex flex-wrap gap-2 justify-end">
        <button
          @click="toggleStatusFilter('pending')"
          class="px-3 py-1 rounded-full text-sm font-medium border"
          :class="statusFilter === 'pending'
            ? 'bg-yellow-100 text-yellow-800 border-yellow-300'
            : 'bg-white text-gray-700 border-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600'"
        >
          Pending Submitted ({{ counts.pending }})
        </button>

        <button
          @click="toggleStatusFilter('completed')"
          class="px-3 py-1 rounded-full text-sm font-medium border"
          :class="statusFilter === 'completed'
            ? 'bg-green-100 text-green-800 border-green-300'
            : 'bg-white text-gray-700 border-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600'"
        >
          Completed Submitted ({{ counts.completed }})
        </button>
      </div>

      <div class="py-2 flex flex-col md:flex-row justify-between items-center md:items-end mt-2">
        <div class="flex items-center">
          <div class="space-x-2">
            <label for="number-dd" class="text-md font-medium">Sort</label>
            <select id="number-dd" name="number" @change="updateItemsPerPage"
                    class="w-15 rounded-md border-black shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 py-1 px-3 text-sm leading-tight bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
        </div>
        <div class="relative md:mt-0 w-full md:w-auto">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            v-model="searchQuery"
            class="block py-2 pl-10 text-sm text-gray-900 border border-black rounded-lg 
                   w-full md:w-80 bg-gray-50 dark:bg-gray-700 dark:border-gray-100 
                   dark:placeholder-gray-400 dark:text-white"
            placeholder="Search for applications"
          />
        </div>
      </div>

      <div class="overflow-x-auto">
        <div class="inline-block min-w-full py-2 align-middle">
          <table ref="Table"
                 class="min-w-full hover stripe border border-black dark:border-white border-collapse text-sm">
            <thead class="bg-[#CED1DA] dark:bg-gray-900">
              <tr>
                <th class="px-6 py-3.5 text-sm w-20 text-left text-black dark:text-white">NO.</th>
                <th v-for="header in headers" :key="header"
                    class="px-4 py-3.5 text-sm text-left text-black dark:text-white">
                  {{ header }}
                </th>
              </tr>
            </thead>

            <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-500 dark:bg-gray-700">
              <tr v-for="(data, index) in paginatedApplications" :key="index">
                <td class="px-6 py-4 font-medium text-left text-gray-900 whitespace-nowrap dark:text-white">
                  {{ (currentPage - 1) * itemsPerPage + index + 1 }}
                </td>

                <td v-for="field in fields" :key="field"
                  class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap text-left">
                <template v-if="field === 'status'">

                  <!-- Appraiser pending > Edit -->
                  <button
                    v-if="role === 'appraiser' && isPending(data.status)"
                    class="flex items-center px-2 py-1 rounded text-xs font-semibold border
                          bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-yellow-900/30 dark:text-yellow-200 dark:border-yellow-700"
                    @click="handleView(data)"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Edit
                  </button>

                  <!-- DepartmentHead pending > Edit -->
                  <button
                    v-else-if="role === 'departmentHead' && isPending(data.status)"
                    class="flex items-center px-2 py-1 rounded text-xs font-semibold border
                          bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-yellow-900/30 dark:text-yellow-200 dark:border-yellow-700"
                    @click="handleView(data)"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Edit
                  </button>

                  <!-- View -->
                  <button
                    v-else
                    class="flex items-center px-2 py-1 rounded text-xs font-semibold border
                          bg-white text-blue-600 border-blue-300 hover:bg-blue-50
                          dark:bg-gray-700 dark:text-blue-300 dark:border-blue-700"
                    @click="handleView(data)"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View
                  </button>

                </template>

                <span v-else>{{ data[field] }}</span>
              </td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="flex justify-end mt-4">
        {{ currentPage }}-{{ endPage }} of {{ totalPage }} page
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "MyAppraisal",
  // props: {
  //   role: {
  //     type: String,
  //     default: "appraiser", // "appraisee" | "appraiser" | "departmentHead" | "hr"
  //   },
  // },
  data() {
    return {
      searchQuery: "",
      itemsPerPage: 10,
      currentPage: 1,
      statusFilter: null, // 'pending' | 'completed' | null
      applications: [
        {
          appraisee_name: "IRENE",
          appraiser_name: "MR TAN",
          department_head: "MR ONG",
          date_submission: "1 JUL 2024",
          year: "Mid-Year",
          status: "pending", // 'pending' | 'completed'
        },
        {
          appraisee_name: "ALI BIN ABU",
          appraiser_name: "MS KOH",
          department_head: "MR ONG",
          date_submission: "31 JAN 2025",
          year: "Year-End",
          status: "completed",
        },
      ],
    };
  },
  computed: {
    role() {
    return this.$route.query.view || "appraisee"; // Default appraisee
  },
    roleDisplay() {
      if (this.role === "appraisee") return "My APPRAISAL";
      if (this.role === "appraiser") return "APPRAISER EMPLOYEE LIST";
      if (this.role === "departmentHead") return "HOD DASHBOARD";
      if (this.role === "hr") return "Performance Overview";
      return "";
    },
    headers() {
      if (this.role === "appraisee") {
        return ["APPRAISER NAME", "DEPARTMENT HEAD NAME", "SUBMISSION DATE", "YEAR", "Status / View"];
      }
      if (this.role === "appraiser") {
        return ["APPRAISEE NAME", "DEPARTMENT HEAD NAME", "SUBMISSION DATE", "YEAR", "Status / View"];
      }
      if (this.role === "departmentHead") {
        return ["APPRAISEE NAME", "APPRAISER NAME", "SUBMISSION DATE", "YEAR", "Status / View"];
      }
      if (this.role === "hr") {
        return ["APPRAISEE NAME", "APPRAISER NAME", "DEPARTMENT HEAD NAME", "SUBMISSION DATE", "YEAR", "Status / View"];
      }
      return [];
    },
    fields() {
      if (this.role === "appraisee") {
        return ["appraiser_name", "department_head", "date_submission", "year", "status"];
      }
      if (this.role === "appraiser") {
        return ["appraisee_name", "department_head", "date_submission", "year", "status"];
      }
      if (this.role === "departmentHead") {
        return ["appraisee_name", "appraiser_name", "date_submission", "year", "status"];
      }
      if (this.role === "hr") {
        return ["appraisee_name", "appraiser_name", "department_head", "date_submission", "year", "status"];
      }
      return [];
    },
   
    counts() {
      const pending = this.applications.filter(a => this.isPending(a.status)).length;
      const completed = this.applications.length - pending;
      return { pending, completed };
    },
   
    paginatedApplications() {
      const q = this.searchQuery.trim().toLowerCase();
      let list = this.applications;

      // appraisee only displays your own information
      if (this.role === 'appraisee') {
        const myName = "ALI BIN ABU"; // Change to dynamic user name
        list = list.filter(a => a.appraisee_name === myName);
      }

      if (this.statusFilter) {
        list = list.filter(a =>
          this.statusFilter === 'pending' ? this.isPending(a.status) : !this.isPending(a.status)
        );
      }

      if (q) {
        list = list.filter(item =>
          [
            item.appraisee_name,
            item.appraiser_name,
            item.department_head,
            item.date_submission,
            item.year
          ]
          .filter(Boolean)
          .some(v => String(v).toLowerCase().includes(q))
        );
      }

      return list;
    },

    endPage() { return this.currentPage; },
    totalPage() { return this.currentPage; },
  },
  methods: {
    gotoNewAppraisalForm() {
      this.$router.push({ 
        name: "NewAppraisalForm", 
        params: { role: "appraisee" } 
      });
    },
    updateItemsPerPage(e) { this.itemsPerPage = Number(e.target.value); },

    toggleStatusFilter(val) {
      this.statusFilter = (this.statusFilter === val) ? null : val;
    },

    isPending(status) {
      if (!status) return false;
      const s = String(status).toLowerCase();
      return s.includes('pending') || s.includes('waiting');
    },

    handleView(row) {
      if (this.role === "appraiser" && this.isPending(row.status)) {
        this.$router.push({ 
          name: "NewAppraisalForm", 
          params: { role: "appraiser", id: row.appraisee_name } 
        });
      } else if (this.role === 'departmentHead' && this.isPending(row.status)) {
        // DepartmentHead pending > Edit
        this.$router.push({ name: 'DepartmentHead', params: { id: row.appraisee_name } });
      } else if (this.role === 'appraisee') {
        // Appraisee view
        this.$router.push({ name: 'PerformanceOverview', params: { id: row.appraisee_name } });
      } else if (this.role === 'appraiser') {
        // Appraiser completed > View
        this.$router.push({ name: 'PerformanceOverview', params: { id: row.appraisee_name } });
      } else if (this.role === 'departmentHead') {
        // DepartmentHead completed > View
        this.$router.push({ name: 'PerformanceOverview', params: { id: row.appraisee_name } });
      } else if (this.role === 'hr') {
        // HR > View
        this.$router.push({ name: 'PerformanceOverview', params: { id: row.appraisee_name } });
      }
    }
  },
  mounted() {
    const element = document.querySelector('main');
    const openOrNot = localStorage.getItem('openOrNot');
    if (element && openOrNot === 'false') element.classList.add('become-big');
    else if (element && openOrNot === 'true') element.classList.remove('become-big');
  }
};
</script>
