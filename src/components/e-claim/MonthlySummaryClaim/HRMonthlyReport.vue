<template>
  <main class="flex-1 text overflow-y-auto bg-[#CED1DA] dark:bg-gray-900 dark:text-white p-4 sm:ml-64">
    <div class="container mx-auto text-xs lg:text-base">
      <div id="summaryPrint"
        class="relative overflow-hidden bg-[#f7fbff] dark:bg-gray-900 border-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
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
                  class="w-full table-fixed divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <thead class="bg-gray-300 dark:bg-gray-700 text-xs">
                    <tr>
                      <template v-for="(val, key) in detailGroup[0]" :key="`header-${key}`">
                        <th v-if="!['Tab_Title', 'files', 'Remark'].includes(key)"
                          class="px-4 py-2 whitespace-nowrap">
                          {{ key.split('_').join(' ') }}
                        </th>
                      </template>
                      <!-- <th class="px-4 py-2">Claim Amount</th> -->
                    </tr>
                  </thead>

                  <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700 text-xs">
                    <tr v-for="(item, index) in detailGroup" :key="index"
                      class="hover:bg-gray-100 dark:hover:bg-gray-700">
                      <template v-for="(val, key) in item" :key="`row-${index}-${key}`">
                        <td v-if="!['Tab_Title', 'files', 'Remarks'].includes(key)"
                          class="px-4 py-2 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                          {{ val }}
                        </td>
                      </template>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr class="bg-gray-100 dark:bg-gray-800 font-semibold">
                      <td :colspan="detailGroup.length > 0 ? getVisibleColumnCount(detailGroup[0]) : 1"
                        class="text-right px-4 py-2">
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
// import html2pdf from 'html2pdf.js';

export default {
  name: 'HRMonthlyReport',
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
      const excludedKeys = ['Tab_Title', 'files', 'Remark', 'name', 'department', 'claim_amount',
        'requester_id', 'unique_code', 'bank_name', 'bank_holder', 'bank_account'];
      const totalVisibleColumns = Object.keys(item).filter(key => !excludedKeys.includes(key)).length;
      // 2 fixed columns: name & department
      return totalVisibleColumns - 1 ;
    },

    // async generatePDF() {
    //   const element = document.getElementById('summaryPrint');
    //   if (element) {
    //     console.log(element.innerHTML); 
    //     const opt = {
    //       margin: 0.3,
    //       filename: `Monthly_Report_${this.claimDetails.name || 'Report'}.pdf`,
    //       image: { type: 'jpeg', quality: 0.98 },
    //       html2canvas: {
    //         scale: 2,
    //         scrollY: 0,
    //         windowWidth: document.documentElement.scrollWidth,
    //         windowHeight: document.documentElement.scrollHeight
    //       },
    //       jsPDF: {
    //         unit: 'in',
    //         format: 'a4',
    //         orientation: 'landscape'
    //       }
    //     };

    //     html2pdf().set(opt).from(element).save();
    //   }
    // },

    getGroupTotal(group) {
      return group.reduce((sum, item) => {
        const key = Object.keys(item).find(k =>
          ['Total Fee(RM)', 'Total_Fee(RM)', 'claim_amount'].includes(k)
        );
        const value = parseFloat(item[key]) || 0;
        return sum + value;
      }, 0).toFixed(2);
    },
    async FetchClaimDetails(companyName, startDate, endDate, branchName, departmentName) {
      try {
        const payload = {
          company_name: companyName,
          start_date: startDate,
          end_date: endDate,
          branch_name: branchName,
          department: departmentName,
        };

        console.log('Sending payload:', payload);
        this.loading = true;

        const response = await axios.post(
          'http://172.28.28.116:6239/api/Admin/MonthlyReportHR/',
          payload,
          { headers: { 'Content-Type': 'application/json' } }
        );
        console.log('Response:', response.data);

        const results = response.data.result;
        this.claimDatasDetails = {
          'Medical Leave Claim': [],
          'Handphone Claim': []
        };

        results.forEach(result => {
          const userName = result.name;
          const userDept = result.department;
          const companyName = result.company_name;
          const status = result.admin_status === 'APPROVED BY HR & ADMIN' ? 'A' : result.admin_status;
          const userBranch = result.branch_name;
          const limit_amount = result.limit_amount;
          const limit_medicaldental = result.limit_medicaldental;
          const limit_outpatient = result.limit_outpatient;
          const emp_id = result.employee_id;

          if (result.medical_leave_data?.length) {
            const medicalData = result.medical_leave_data.map(item => {
              let limitValue = 0;
              if (item.medical_category === 'Outpatient') {
                limitValue = Number(limit_outpatient).toFixed(2);
              } else if (item.medical_category === 'Medical Checkup') 
              {
                limitValue = Number(limit_medicaldental).toFixed(2);
              } else if (item.medical_category === 'Dental') {
                limitValue = Number(limit_medicaldental).toFixed(2);
              } else {
                limitValue = '-';
              }
              return {
                Tab_Title: 'Medical Leave Claim',
                'Status': status,
                'Company': companyName,
                'Employee ID': emp_id,
                'Name': userName,
                'Branch': userBranch,
                'Department': userDept,
                IC_Number: item.ic_number,
                'Medical_Category': item.medical_category,
                'Reason': item.reason,
                Date: item.date_leave_taken,
                'Clinic_Name': item.clinic_name
                  ? item.clinic_name
                  : item.clinic_selection,
                'Reason_Different_Clinic': item.reason_different,
                'Bank_Name': item.bank_name,
                'Bank_Holder': item.bank_holder,
                'Bank_Account': item.bank_account,
                'Limit Medical (RM)': limitValue,
                'Total_Fee(RM)': Number(item.claim_amount).toFixed(2),
              };
            });
            this.claimDatasDetails['Medical Leave Claim'].push(...medicalData);
          }

          if (result.handphone_data?.length) {
            const phoneData = result.handphone_data.map(item => ({
              Tab_Title: 'Handphone Claim',
              'Status': status,
              'Company': companyName,
              'Employee ID': emp_id,
              'Name': userName,
              'Branch': userBranch,
              'Department': userDept,
              IC_Number: item.ic_number,
              Claim_Month: item.claim_month,
              Claim_Year: item.claim_year,
              'Bank_Name': item.bank_name,
              Bank_Holder: item.bank_holder,
              Bank_Account: item.bank_account,
              'Limit Handphone (RM)': Number(limit_amount).toFixed(2),
              'Total_Fee(RM)': Number(item.claim_amount).toFixed(2),
            }));
            this.claimDatasDetails['Handphone Claim'].push(...phoneData);
          }
        });
        
      } catch(error) {
        console.error("Error fetching claim details:", error.response?.data || error);
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    console.log("Mounted HRMonthlyReport");
    const { company, start_date, end_date, branch, department } = this.$route.query;
    console.log("Query parameters:", this.$route.query);
    if (company && start_date && end_date && branch && department) {
      this.FetchClaimDetails(company, start_date, end_date, branch, department);
    } else {
      console.warn("Missing query parameters for report");
    }
  },
};
</script>

<style scoped>
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

@media print {
  @page {
    size: A4 portrait;
  }

  * {
    color: black;
    box-shadow: none !important;
    margin: 0 !important;
    padding: 0 !important;
    --tw-ring-shadow: 0;
    --tw-ring-color: 0;
  }

  input,
  button,
  svg {
    display: none !important;
  }

  body *:not(#summaryPrint):not(#summaryPrint *) {
    visibility: hidden !important;
  }

  #summaryPrint,
  #summaryPrint * {
    visibility: visible !important;
  }

  #summaryPrint {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw !important;
    padding: 0;
  }

  .overflow-x-auto,
  .details,
  .detail-table {
    overflow: visible !important;
  }

  table {
    width: 100% !important;
    table-layout: auto !important;
    page-break-inside: avoid;
  }

  th,
  td {
    font-size: 10px !important;
    white-space: normal !important;
    word-break: break-word !important;
    overflow-wrap: break-word !important;
    padding: 4px !important;
  }

  .tab-title {
    font-size: 12px;
    margin-top: 6px;
    margin-bottom: 6px;
  }

  #summaryPrint button {
    display: none !important;
  }
}
</style>