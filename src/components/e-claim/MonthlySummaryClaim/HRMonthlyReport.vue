<template>
  <main class="flex-1 text overflow-y-auto bg-[#CED1DA] dark:bg-gray-900 dark:text-white p-4 sm:ml-64">
    <div class="container mx-auto text-xs lg:text-base">
      <div id="summaryPrint"
        class="relative overflow-hidden bg-[#f7fbff] dark:bg-gray-900 border-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div class="flex justify-center">
          <h1 class="font-bold text-lg">MONTHLY SUMMARY CLAIM FOR REIMBURSEMENT OF ALL EXPENSES</h1>
        </div>

        <div class="h-12 flex items-right justify-end">
          <button class="mr-2" @click="ExportToExcel">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256"
                style="fill:#1A1A1A;">
                <g fill="#1a1a1a" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8,8)"><path d="M15.875,4l-0.09375,0.03125l-11,2.4375l-0.78125,0.1875v18.6875l0.78125,0.1875l11,2.4375l0.09375,0.03125h2.125v-3h10v-18h-10v-3zM16,6.03125v19.9375l-10,-2.1875v-15.5625zM18,9h8v14h-8v-2h2v-2h-2v-1h2v-2h-2v-1h2v-2h-2v-1h2v-2h-2zM21,10v2h4v-2zM14.15625,11l-2.28125,0.28125l-1.25,2.6875c-0.13281,0.38672 -0.23047,0.67969 -0.28125,0.875h-0.03125c-0.07812,-0.32422 -0.15234,-0.60547 -0.25,-0.84375l-0.625,-2.3125l-2.125,0.25l-0.09375,0.0625l1.78125,4l-2,4l2.15625,0.25l0.875,-2.46875c0.10547,-0.3125 0.19141,-0.56641 0.21875,-0.71875h0.03125c0.05859,0.32422 0.09766,0.56641 0.15625,0.6875l1.34375,2.9375l2.4375,0.3125l-2.65625,-5.03125zM21,13v2h4v-2zM21,16v2h4v-2zM21,19v2h4v-2z"></path></g></g>
                </svg>
              </button>
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
            <div v-for="(detailGroup, tabTitle) in claimDatasDetails" :key="tabTitle" :class="tabTitle.split(' ')[0]" class="detail-table mb-6">
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
import * as XLSX from 'xlsx';

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
    ExportToExcel() {
      this.$nextTick(() => {

    const wb = XLSX.utils.book_new();
    const allData = [];
    
    // 1. Report Title and Summary
    allData.push(['MONTHLY SUMMARY CLAIM FOR REIMBURSEMENT OF ALL EXPENSES']);
    allData.push([]); // Empty row
    
    // 2. Medical Claim Section
    allData.push(['MEDICAL CLAIM']);
    allData.push([]);
    
    // Get medical claim table data
    const medicalTable = document.querySelector('.Medical');
    if (medicalTable) {
      // Add headers
      const medicalHeaders = Array.from(medicalTable.querySelectorAll('thead th'))
        .map(th => th.textContent.trim());
      allData.push(medicalHeaders);
      
      // Add rows
      const medicalRows = medicalTable.querySelectorAll('tbody tr');
      medicalRows.forEach(row => {
        const rowData = Array.from(row.querySelectorAll('td'))
          .map(td => td.textContent.trim());
        allData.push(rowData);
      });
      
      // Add total row
      allData.push([...Array(medicalHeaders.length - 2).fill(''), 'Total:', 'RM 40.00']);
    }
    
    allData.push([]); // Empty row between sections
    
    // 3. Handphone Claim Section
    allData.push(['HANDPHONE CLAIM']);
    allData.push([]);
    
    // Get handphone claim table data
    const handphoneTable = document.querySelector('.Handphone');
    console.log(handphoneTable)
    if (handphoneTable) {
      // Add headers
      const handphoneHeaders = Array.from(handphoneTable.querySelectorAll('thead th'))
        .map(th => th.textContent.trim());
      allData.push(handphoneHeaders);
      
      // Add rows
      const handphoneRows = handphoneTable.querySelectorAll('tbody tr');
      handphoneRows.forEach(row => {
        const rowData = Array.from(row.querySelectorAll('td'))
          .map(td => td.textContent.trim());
        allData.push(rowData);
      });
    }
    
    // 4. Generate Excel Sheet with formatting
    const ws = XLSX.utils.aoa_to_sheet(allData);
    
    // Apply styling through column widths
    ws['!cols'] = [
      { wch: 8 },  // Status
      { wch: 10 }, // Company
      { wch: 15 }, // Employee ID
      { wch: 20 }, // Name
      { wch: 15 }, // Branch
      { wch: 15 }, // Department
      { wch: 15 }, // IC Number
      { wch: 20 }, // Medical Category/Claim Month
      { wch: 15 }, // Reason/Claim Year
      { wch: 15 }, // Date/Bank Name
      { wch: 25 }, // Clinic Name/Bank Holder
      { wch: 20 }, // Reason Different Clinic/Bank Account
      { wch: 20 }, // Bank Name/Limit
      { wch: 15 }, // Bank Holder/Total
      { wch: 15 }, // Bank Account
      { wch: 15 }, // Limit Medical
      { wch: 15 }  // Total Fee
    ];
    
    // Merge title cells
    ws['!merges'] = [
      { s: { r: 0, c: 0 }, e: { r: 0, c: 16 } }, // Main title
      { s: { r: 2, c: 0 }, e: { r: 2, c: 16 } }, // Medical Claim title
      { s: { r: 9, c: 0 }, e: { r: 9, c: 13 } }  // Handphone Claim title
    ];
    
    XLSX.utils.book_append_sheet(wb, ws, 'Monthly Claims');
    XLSX.writeFile(wb, 'Monthly_Claims_Summary.xlsx');
      })

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
    // async FetchClaimDetails(companyName, startDate, endDate, branchName, departmentName, includeMedicalLeave = true, includeHandphone = true) {
    //   try {
    //     const payload = {
    //       company_name: companyName,
    //       start_date: startDate,
    //       end_date: endDate,
    //       branch_name: branchName,
    //       department: departmentName,
    //       includeMedicalLeave,
    //       includeHandphone,
    //     };

    //     console.log('Sending payload:', payload);
    //     this.loading = true;

    //     const response = await axios.post(
    //       'http://172.28.28.116:6239/api/Admin/MonthlyReportHR/',
    //       payload,
    //       { headers: { 'Content-Type': 'application/json' } }
    //     );
    //     console.log('Response:', response.data);

    //     const results = response.data.result;
    //     this.claimDatasDetails = {
    //       'Medical Claim': [],
    //       'Handphone Claim': []
    //     };

    //     results.forEach(result => {
    //       const userName = result.name;
    //       const userDept = result.department;
    //       const companyName = result.company_name;
    //       const status = result.admin_status === 'APPROVED BY HR & ADMIN' ? 'A' : result.admin_status;
    //       const userBranch = result.branch_name;
    //       const limit_amount = result.limit_amount;
    //       const limit_medicaldental = result.limit_medicaldental;
    //       const limit_outpatient = result.limit_outpatient;
    //       const emp_id = result.employee_id;

    //       if (includeMedicalLeave && result.medical_leave_data?.length) {
    //         const medicalData = result.medical_leave_data.map(item => {
    //           let limitValue = 0;
    //           if (item.medical_category === 'Outpatient') {
    //             limitValue = Number(limit_outpatient).toFixed(2);
    //           } else if (item.medical_category === 'Medical Checkup') 
    //           {
    //             limitValue = Number(limit_medicaldental).toFixed(2);
    //           } else if (item.medical_category === 'Dental') {
    //             limitValue = Number(limit_medicaldental).toFixed(2);
    //           } else {
    //             limitValue = '-';
    //           }
    //           return {
    //             Tab_Title: 'Medical Claim',
    //             'Status': status,
    //             'Company': companyName,
    //             'Employee ID': emp_id,
    //             'Name': userName,
    //             'Branch': userBranch,
    //             'Department': userDept,
    //             IC_Number: item.ic_number,
    //             'Medical_Category': item.medical_category,
    //             'Reason': item.reason,
    //             Date: item.date_leave_taken,
    //             'Clinic_Name': item.clinic_name
    //               ? item.clinic_name
    //               : item.clinic_selection,
    //             'Reason_Different_Clinic': item.reason_different,
    //             'Bank_Name': item.bank_name,
    //             'Bank_Holder': item.bank_holder,
    //             'Bank_Account': item.bank_account,
    //             'Limit Medical (RM)': limitValue,
    //             'Total_Fee(RM)': Number(item.claim_amount).toFixed(2),
    //           };
    //         });
    //         this.claimDatasDetails['Medical Claim'].push(...medicalData);
    //       }
          
    //       if (includeHandphone && result.handphone_data?.length) {
    //         const phoneData = result.handphone_data.map(item => ({
    //           Tab_Title: 'Handphone Claim',
    //           'Status': status,
    //           'Company': companyName,
    //           'Employee ID': emp_id,
    //           'Name': userName,
    //           'Branch': userBranch,
    //           'Department': userDept,
    //           IC_Number: item.ic_number,
    //           Claim_Month: item.claim_month,
    //           Claim_Year: item.claim_year,
    //           'Bank_Name': item.bank_name,
    //           Bank_Holder: item.bank_holder,
    //           Bank_Account: item.bank_account,
    //           'Limit Handphone (RM)': Number(limit_amount).toFixed(2),
    //           'Total_Fee(RM)': Number(item.claim_amount).toFixed(2),
    //         }));
    //         this.claimDatasDetails['Handphone Claim'].push(...phoneData);
    //       }
    //     });
        
    //   } catch(error) {
    //     console.error("Error fetching claim details:", error.response?.data || error);
    //   } finally {
    //     this.loading = false;
    //   }
    // },

    async FetchClaimDetails(companyName, startDate, endDate, branchName, departmentName, includeMedicalLeave, includeHandphone) {
      try {
        const payload = {
          company_name: companyName,
          start_date: startDate,
          end_date: endDate,
          branch_name: branchName,
          department: departmentName,
          includeMedicalLeave,
          includeHandphone
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

        // Reset claims container
        // this.claimDatasDetails = {
        //   'Medical Claim': [],
        //   'Handphone Claim': []
        // };

        this.claimDatasDetails = {};

        if (includeMedicalLeave === true) {
          this.claimDatasDetails['Medical Claim'] = [];
        }
        if (includeHandphone === true) {
          this.claimDatasDetails['Handphone Claim'] = [];
        }


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

          // Medical Claim Section
          if (includeMedicalLeave && result.medical_leave_data?.length) {
            const medicalData = result.medical_leave_data.map(item => {
              let limitValue = 0;
              if (item.medical_category === 'Outpatient') {
                limitValue = Number(limit_outpatient).toFixed(2);
              } else if (['Medical Checkup', 'Dental'].includes(item.medical_category)) {
                limitValue = Number(limit_medicaldental).toFixed(2);
              } else {
                limitValue = '-';
              }

              return {
                Tab_Title: 'Medical Claim',
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
                'Clinic_Name': item.clinic_name || item.clinic_selection,
                'Reason_Different_Clinic': item.reason_different,
                'Bank_Name': item.bank_name,
                'Bank_Holder': item.bank_holder,
                'Bank_Account': item.bank_account,
                'Limit Medical (RM)': limitValue,
                'Total_Fee(RM)': Number(item.claim_amount).toFixed(2),
              };
            });
            this.claimDatasDetails['Medical Claim'].push(...medicalData);
          }

          // Handphone Claim Section
          if (includeHandphone && result.handphone_data?.length) {
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

      } catch (error) {
        console.error("Error fetching claim details:", error.response?.data || error);
      } finally {
        this.loading = false;
      }
    },

  },

  mounted() {
    console.log("Mounted HRMonthlyReport");
    const { company, start_date, end_date, branch, department, includeMedicalLeave, includeHandphone } = this.$route.query;
    console.log("Query parameters:", this.$route.query);
    if (company && start_date && end_date && branch && department) {
      this.FetchClaimDetails(company, start_date, end_date, branch, department, 
        includeMedicalLeave === 'true', includeHandphone === 'true');
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