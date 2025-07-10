<template>
    <main class="flex-1 text overflow-y-auto bg-[#CED1DA] dark:bg-gray-900 dark:text-white p-4 sm:ml-64">
      <div class="mx-auto text-xs lg:text-base">
        <div
          id="summaryPrint"
          class="relative bg-[#f7fbff] dark:bg-gray-900 border-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
        >
          <div class="flex justify-center">
            <h1 class="font-bold text-lg">MONTHLY SUMMARY CLAIM FOR REIMBURSEMENT OF ALL EXPENSES</h1>
          </div>

          <div class="h-12 flex items-right justify-end">
            <button @click="PrintSummary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
              </svg>
            </button>
          </div>
  
          <div v-if="loading" class="text-center mt-8 text-blue-700 dark:text-blue-400">Loading...</div>
  
          <div v-else class="w-full">
            <div class="details">
              <div v-for="(detailGroup, tabTitle) in claimDatasDetails" :key="tabTitle" class="detail-table mb-6">
                <h1 class="mt-4 text-xl font-semibold tab-title">{{ tabTitle }}</h1>
                <div class="border rounded-md border-gray-400 dark:border-gray-600 mt-2">
                  <table
                    class="w-full table-auto divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700 md:rounded-lg"
                  >
                    <thead class="bg-gray-300 dark:bg-gray-700 text-xs">
                      <tr>
                        <template v-for="(val, key) in detailGroup[0]" :key="`header-${key}`">
                          <th
                            v-if="!['Tab_Title', 'files', 'Remark', 'requester_id', 
                            'unique_code', 'comment', 'total_fee', 'ent_refNumber'].includes(key)"
                            class="px-4 py-2 whitespace-nowrap"
                          >
                            {{ key.split('_').join(' ')}}
                          </th>
                        </template>
                        <!-- <th class="px-4 py-2">Claim Amount</th> -->
                      </tr>
                    </thead>
  
                    <tbody
                      class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700 text-xs"
                    >
                      <tr
                        v-for="(item, index) in detailGroup"
                        :key="index"
                        class="hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <template v-for="(val, key) in item" :key="`row-${index}-${key}`">
                          <td
                            v-if="!['Tab_Title', 'files', 'Remarks', 'requester_id', 
                            'unique_code', 'comment', 'total_fee', 'ent_refNumber'].includes(key)"
                            class="px-4 py-2 whitespace-nowrap text-sm text-gray-900 dark:text-white"
                          >
                            <span v-html="val"></span>
                          </td>
                        </template>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr class="bg-gray-100 dark:bg-gray-800 font-semibold">
                        <td :colspan="detailGroup.length > 0 ? getVisibleColumnCount(detailGroup[0]) : 1" class="text-right px-4 py-2">
                          Total: 
                        </td>
                        <td class="px-4 py-2 text-center">RM {{ getGroupTotal(detailGroup) }}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </template>
  
<script>
import axios from 'axios';
  
  export default {
    name: 'FinMonthlyReport',
    data() {
        return {
        loading: false,
        claimDetails: {},
        claimDataTotalAmount: [],
        };
    },
    methods: {
      PrintSummary() {
        print();
      },
        getVisibleColumnCount(item) {
          const excludedKeys = ['Tab_Title', 'files', 'Remark', 'requester_id', 
                            'unique_code', 'comment', 'claim_amount', 'total_fee', 'ent_refNumber'];
          const totalVisibleColumns = Object.keys(item).filter(key => !excludedKeys.includes(key)).length;
          return totalVisibleColumns - 1;
        },

        getGroupTotal(group) {
          return group.reduce((sum, item) => {
            const key = Object.keys(item).find(k =>
              ['Total Fee(RM)', 'Total_Fee(RM)', 'claim_amount'].includes(k)
            );
            const value = parseFloat(item[key]) || 0;
            return sum + value;
          }, 0).toFixed(2);
        },

        async FetchClaimDetails(companyName, startDate, endDate) {
            try {
            const payload = {
                company_name: companyName,
                start_date: startDate,
                end_date: endDate,
            };

            console.log('Sending payload:', payload);
            this.loading = true;

            const response = await axios.post(
                'http://172.28.28.116:6239/api/Admin/MonthlyReportFin/',
                payload,
                { headers: { 'Content-Type': 'application/json' } }
            );
            // this.claimDetails = {
            //     name: response.data.name,
            //     department: response.data.department,
            // };

            const results = response.data.result;
            this.claimDatasDetails = {
              'Local Travelling': [],
              'Overseas Travelling': [],
              'Entertainment': [],
              'Staff Entertainment': [],
              'Others': []
            };

            results.forEach(result => {
              const userName = result.name;
              const userDept = result.department;

              console.log('username', userName);
              console.log('username', userDept);

              if (result.entertainment_data?.length) {
                result.entertainment_data.forEach(item => {
                  const participants = item.participants || [];

                  const buildFullExpenseTable = () => {
                    if (!participants.length) return '-';
                    return `
                      <table class="w-full border border-collapse text-[10px]">
                        <thead class="bg-gray-100">
                          <tr>
                            <th class="border px-1 py-0.5">Name</th>
                            <th class="border px-1 py-0.5">Company Name</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${participants
                            .map(
                              e => `
                            <tr>
                              <td class="border px-1 py-0.5">${e.name}</td>
                              <td class="border px-1 py-0.5">${e.company_name}</td>
                            </tr>`
                            )
                            .join('')}
                        </tbody>
                      </table>`;
                  };

                  this.claimDatasDetails['Entertainment'].push({
                  Tab_Title: 'Entertainment',
                  'Name': userName,
                  'Department': userDept,
                  'Reference Number': item.reference_number,
                  'Type of Entertainment': item.entertainment_type,
                  Date: item.date_event,
                  Venue: item.venue_name,
                  Company: item.company_name,
                  Participants: buildFullExpenseTable(),
                  'Total Fee(RM)': Number(item.total_fee).toFixed(2),
                  });
                });
              }

              if (result.local_data?.length) {
                const localData = result.local_data.map(item => ({
                  Tab_Title: 'Local Travelling',
                  'Name': userName,
                  'Department': userDept,
                  'Reference Number': item.reference_number,
                  'Date Event': item.date_event,
                  'Return Date': item.return_date,
                  'Vehicle Number':item.vehicle_no,
                  'Vehicle Model':item.vehicle_model,
                  'Start Point': item.starting_point,
                  'End Point': item.end_point,
                  'Mileage (KM)': Number(item.mileage_km).toFixed(2),
                  'Type of Fuel':item.type_petrol,
                  'Fuel (Litre)':Number(item.petrol_perlitre).toFixed(2),
                  'Fare': Number(item.fare).toFixed(2),
                  'Meal Allowance (RM)': item.meal_allowance,
                  'Accomodation': item.accommodation,
                  'Park Fee (RM)': Number(item.park_fee).toFixed(2),
                  'Toll Fee (RM)': Number(item.toll_fee).toFixed(2),
                  'Transport Specification': item.transport_specification,
                  'Transport Mode': item.transport_mode,
                  'Trip Mode': item.trip_mode,
                  'Fuel/ EV (RM)': Number(item.total_mileage).toFixed(2),
                  'Total Fee(RM)': Number(item.total_fee).toFixed(2),
                }));
                this.claimDatasDetails['Local Travelling'].push(...localData);
              }

              if (result.overseas_data?.length) {
                result.overseas_data.forEach(item => {
                  const oem = item.oem || [];

                  const buildFullExpenseTable = () => {
                    if (!oem.length) return '-';
                    return `
                      <table class="w-full border border-collapse text-[10px]">
                        <thead class="bg-gray-100">
                          <tr>
                            <th class="border px-1 py-0.5">Name</th>
                            <th class="border px-1 py-0.5">Description</th>
                            <th class="border px-1 py-0.5">Foreign Currency</th>
                            <th class="border px-1 py-0.5">Exchange Rate</th>
                            <th class="border px-1 py-0.5">Currency Total</th>
                            <th class="border px-1 py-0.5">Amount (RM)</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${oem
                            .map(
                              e => `
                            <tr>
                              <td class="border px-1 py-0.5">${e.name}</td>
                              <td class="border px-1 py-0.5">${e.description}</td>
                              <td class="border px-1 py-0.5">${e.foreign_currency}</td>
                              <td class="border px-1 py-0.5">${e.exchange_rate}</td>
                              <td class="border px-1 py-0.5">${e.currency_total}</td>
                              <td class="border px-1 py-0.5">${e.amount}</td>
                            </tr>`
                            )
                            .join('')}
                        </tbody>
                      </table>`;
                  };

                  this.claimDatasDetails['Overseas Travelling'].push({
                    Tab_Title: 'Overseas Travelling',
                    'Name': userName,
                    'Department': userDept,
                    'Reference Number': item.reference_number,
                    Date: item.date_event,
                    'Return date': item.return_date,
                    Description: item.description,
                    'Meal Allowance (RM)': Number(item.meal_allowance).toFixed(2),
                    'Other Expenses': buildFullExpenseTable(),
                    'Total Fee(RM)': Number(item.total_fee).toFixed(2),
                  });
                });
              }

              if (result.refreshment_data?.length) {
                result.refreshment_data.forEach(item => {
                  const sim = item.sim || [];

                  const buildFullExpenseTable = () => {
                    if (!sim.length) return '-';
                    return `
                      <table class="w-full border border-collapse text-[10px]">
                        <thead class="bg-gray-100">
                          <tr>
                            <th class="border px-1 py-0.5">Name</th>
                            <th class="border px-1 py-0.5">Company Name</th>
                            <th class="border px-1 py-0.5">Department</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${sim
                            .map(
                              e => `
                            <tr>
                              <td class="border px-1 py-0.5">${e.name}</td>
                              <td class="border px-1 py-0.5">${e.company_name}</td>
                              <td class="border px-1 py-0.5">${e.department}</td>
                            </tr>`
                            )
                            .join('')}
                        </tbody>
                      </table>`;
                  };

                  this.claimDatasDetails['Staff Entertainment'].push({
                    Tab_Title: 'Staff Entertainment',
                    'Name': userName,
                    'Department': userDept,
                    'Reference Number': item.reference_number,
                    'Type_of_Refreshment': item.refreshment_type,
                    Date: item.date_event,
                    'Reference': item.reference_type,
                    Venue: item.venue_name,
                    Company: item.company_name,
                    'Staff Involved': buildFullExpenseTable(),
                    'Total Fee(RM)': Number(item.total_fee).toFixed(2),
                  });
                });
              }

              if (result.others_data?.length) {
                const othersData = result.others_data.map(item => ({
                  Tab_Title: 'Others',
                  'Name': userName,
                  'Department': userDept,
                  'Reference Number': item.reference_number,
                  'Expense_Name': item.expense_name,
                  Description: item.description,
                  Date: item.expense_date,
                  'Total_Fee(RM)': Number(item.total_fee).toFixed(2),
                }));
                this.claimDatasDetails['Others'].push(...othersData);
              }
            });
            
            } catch (error) {
            console.error("Error fetching claim details:", error.response?.data || error);
            } finally {
            this.loading = false;
            }
        },
    },
    mounted() {
        const { company, start_date, end_date } = this.$route.query;

        if (company && start_date && end_date) {
        this.FetchClaimDetails(company, start_date, end_date);
        } else {
        console.warn("Missing query parameters for report");
        }
    },
  };
</script>

<style scooped>
  tr:first-child th:first-child {
      border-top-left-radius: 0px;
  }
  tr:first-child th:last-child {
      border-top-right-radius: 0px;
  }
  tr:last-child th:first-child {
      border-bottom-left-radius: 0px;
  }
  tr:last-child th:last-child {
      border-bottom-right-radius: 0px;
  }

  div:has(> table) {
    overflow-x: auto;
  }
  td, th {
    word-break: break-word;
    white-space: normal;
    white-space: normal !important;
    word-break: break-word !important;
  }

  table th,
  td {
      padding-right: 4px;
      padding-left: 4px;
      text-align: center;
      vertical-align: middle;
      
  }
  tfoot td.text-right {
      text-align: right !important;
  }
  table {
    table-layout: fixed;
    width: 100%;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
  td table {
    table-layout: auto;
    min-width: 450px;
    font-size: 11px;
  }

  td table th,
  td table td {
    white-space: nowrap;
    padding: 4px 6px;
    text-align: left;
    vertical-align: top;
    border: 1px solid #ccc;
  }

  @media print {
  @page {
    size: A4 landscape;
    margin: 1cm;
  }

  * {
    color: black !important;
    background: white !important;
    box-shadow: none !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  html, body {
    width: 100%;
    overflow: visible !important;
  }

  input, button, svg {
    display: none !important;
  }

  body *:not(#summaryPrint):not(#summaryPrint *) {
    visibility: hidden !important;
  }

  #summaryPrint, #summaryPrint * {
    visibility: visible !important;
  }

  #summaryPrint {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw !important;
    padding: 0 !important;
  }

  .tab-title {
    font-size: 14px !important;
    font-weight: bold;
    padding-top: 10px;
    padding-bottom: 6px;
  }

  table {
    width: 100% !important;
    table-layout: auto !important;
  }

  th, td {
    font-size: 10px !important;
    padding: 4px !important;
    white-space: normal !important;
    word-break: break-word !important;
  }
}

</style>

  