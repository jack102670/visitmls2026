<template>
  <main
    class="flex-1 text overflow-y-auto bg-[#CED1DA] dark:bg-gray-900 dark:text-white p-4 sm:ml-64"
  >
    <div class="container mx-auto text-xs lg:text-base">
      <div
        id="summaryPrint"
        class="relative overflow-hidden bg-[#f7fbff] dark:bg-gray-900 border-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <h1 class="text-gray-500 italic absolute top-4 right-4">
          SN: {{ referenceNumber }}
        </h1>
        <div id="rn" class="relative w-screen hidden">
          <h1 class="text-gray-500 italic absolute top-11 right-4">
            SN: {{ referenceNumber }}
          </h1>
        </div>
        <button
          class="absolute top-1 lg:top-6 p-1 bg-blue-800 hover:bg-blue-900 rounded-[100%]"
          v-show="seeMore"
          @click="seeMore = !seeMore"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
        </button>
        <div class="flex justify-center">
          <h1 class="font-bold text-lg text">
            SUMMARY CLAIM FOR REIMBURSEMENT OF ALL EXPENSES
          </h1>
        </div>

        <!-- Information -->
        <div class="flex justify-between items-center">
          <h1
            class="text-blue-900 dark:text-blue-600 font-bold text-3xl"
            id="title"
          >
            {{ claimDetails.report_name }}

            <span class="text-blue-900 dark:text-blue-600 text-3xl" id="title"
              >| RM{{ claimDetails.grand_total }}</span
            >
          </h1>

          <div class="h-12 flex items-center">
            <button
              v-show="!seeMore"
              @click="seeMore = !seeMore"
              class="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white rounded-xl px-8 text-sm font-bold py-2"
            >
              See More
            </button>
            <button v-show="seeMore" @click="PrintSummary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-7 h-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="claimant-informations"
          class="text-sm grid grid-cols-2 lg:grid-cols-3 gap-2 [&>*:nth-child(even)]:text-right lg:[&>*:nth-child(even)]:text-left"
        >
          <div class="mt-2 h-10">
            <h2 class="font-semibold">Name of Claimaint :</h2>
            <p class="text-gray-600 dark:text-gray-400">
              {{ claimDetails.name }}
            </p>
          </div>
          <div id="toLeft" class="mt-2 h-10">
            <h2 class="font-semibold">Name of Company :</h2>
            <p class="text-gray-600 dark:text-gray-400">
              {{ claimDetails.company_name }}
            </p>
          </div>
          <div class="mt-2 h-10">
            <h2 class="font-semibold">Designation :</h2>
            <p class="text-gray-600 dark:text-gray-400">
              {{ claimDetails.designation_title }}
            </p>
          </div>
          <div id="toLeft" class="mt-2 h-10">
            <h2 class="font-semibold">Department :</h2>
            <p class="text-gray-600 dark:text-gray-400">
              {{ claimDetails.department }}
            </p>
          </div>
          <div class="mt-2 h-10">
            <h2 class="font-semibold">Cost Center :</h2>
            <p class="text-gray-600 dark:text-gray-400">
              {{ claimDetails.cost_center }}
            </p>
          </div>
          <div id="toLeft" class="mt-2 h-10">
            <h2 class="font-semibold">Date of Claim :</h2>
            <p class="text-gray-600 dark:text-gray-400">
              {{ claimDetails.date_requested }}
            </p>
          </div>
        </div>

        <!-- Summary -->
        <div class="summary" v-show="!seeMore">
          <div class="overflow-x-auto mt-4">
            <div class="min-w-full inline-block align-middle">
              <div class="border rounded-lg overflow-x-auto border-gray-400 dark:border-gray-600">
                <table class="min-w-full divide-y divide-gray-400 dark:divide-gray-600">
                  <thead class="bg-gray-300 dark:bg-gray-700">

                    <th scope="col" class="px-4 py-3 text-center text-xs font-bold uppercase">
                      No
                    </th>
                    <th scope="col" class="px-4 py-3 text-left text-xs font-bold uppercase">
                      Type of Claim
                    </th>
                    <th>
                    </th>
                    <th scope="col" class="px-4 py-3 text-right text-xs font-bold uppercase">
                      Amount (RM)
                    </th>
                  </thead>
                  <tbody class="dark:bg-gray-800 divide-y divide-gray-400 dark:divide-gray-600">
                    <tr v-for="claim in claimDatas" :key="claim.no"
                      class="hover:bg-gray-200 dark:hover:bg-gray-800transition-colors duration-200">
                      <td class="px-4 py-3 text-center text-xs">
                       <p>{{ claim.No }}</p> 
                      </td>
                      <td class="px-4 py-3 text-xs">
                        <span class="font-medium">{{ claim.Type }}</span>
                        <span class="ml-1 text-gray-500 dark:text-gray-400">
                          (x{{ claimDatasDetails[claim.No - 1].length }})
                        </span>
                      </td>
                      <td>

                      </td>
                      <td class="px-4 py-3 text-xs text-right">
                      <p class="px-2"> {{ claim.Amount.toFixed(2) }}</p> 
                      </td>
                    </tr>
                  </tbody>
                  <tfoot class="dark:bg-gray-900">
                    <tr class="font-semibold text-gray-900 dark:text-white">
                      <td colspan="3" class="text-right"></td>
                      <td colspan="1" class="px-4 py-3 text-sm sm:text-base text-right whitespace-nowrap">
                     <p class="px-2 text-sm">
                      Total : MYR {{ totalAmount.toFixed(2) }}</p>  
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>

        <!-- Details -->
        <div class="details" v-show="seeMore">
          <div
            v-for="(detail, i) in claimDatasDetails"
            :key="i"
            class="detail-table mt-5"
          >
            <h1
              class="mt-4 text-xl font-semibold tab-title"
              v-if="detail && detail.length > 0"
            >
              {{ detail[0].Tab_Title }}
            </h1>
            <div
              class="border border-gray-400 dark:border-gray-600 rounded-md overflow-y-auto"
              id="table-overflow"
            >
              <table class="w-full">
                <thead
                  class="h-8 bg-gray-300 dark:bg-gray-700 rounded-md text-xs"
                >
                  <th class="w-40">Remark</th>

                  <th class="px-6 w-36 break-words text-xs"
                    v-for="key in Object.keys(detail[0]).filter(k => !['Tab_Title', 'unique_code', 'comment', 'Remark'].includes(k))"
                    :key="key">
                    {{ key.split('_').join(' ') }}
                  </th>
                </thead>

                <!-- table information -->
                <tr
                  class="h-8 text-left align-top text-xs hover:bg-gray-200"
                  v-for="(item, index) in detail"
                  :key="index"
                >
                  <td>
                    <input
                      @input="
                        UpdateSingleRemark(
                          $event,
                          item.unique_code,
                          item.Tab_Title
                        )
                      "
                      v-if="pending"
                      type="text"
                      class="p-1 text-xs w-full rounded-lg outline-none border-gray-400 dark:border-gray-600 dark:bg-gray-700 border"
                    />
                    <h1
                      id="remarkText"
                      v-if="!pending && item.comment && item.comment.trim() !== ''"
                      class="m-1 px-2 py-1 bg-blue-900 text-white rounded-md"
                    >
                      {{ item.comment }}
                    </h1>
                  </td>
                  <td class="text-center font-normal px-3 py-1 justify-center items-center " v-for="(val, key, i) in item" :key="i">
                    {{
                      key == 'Attachments'
                        ? ''
                        : key == 'Staff_Involved'
                          ? ''
                          : key == 'Participants'
                            ? ''
                            : key == 'oem'
                            ? ''
                            : val
                    }}
                    <div v-show="key === 'oem'" id="staffDetails" class="my-1">
                      <a 
                        @click="showOemModal(val)" 
                        class="bg-gray-500 hover:bg-gray-600 cursor-pointer text-white px-4 py-1 rounded-md w-20 text-center justify-center items-center">
                        See More
                      </a>
                    </div>
                    <div v-show="key == 'Staff_Involved'" id="staffDetails" class="my-1">
                      <a 
                        @click="showStaffInvolved(val)" 
                        class="bg-gray-500 hover:bg-gray-600 cursor-pointer text-white px-4 py-1 rounded-md w-20 text-center">
                        See More
                      </a>
                    </div>
                    <div v-show="key == 'Participants'" id="staffDetails" class="my-1">
                      <a 
                        @click="showParticipants(val)" 
                        class="bg-gray-500 hover:bg-gray-600 cursor-pointer text-white px-4 py-1 rounded-md w-20 text-center">
                        See More
                      </a>
                    </div>

                    <div v-show="key == 'Attachments'"
                      class="text-blue-700 flex items-center justify-center cursor-pointer"
                      @click.prevent="ShowFile(val)">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                      </svg>
                      x{{ val ? val.length : '0' }}
                    </div>
                  </td>
                </tr>
                <tr
                  class="border-t border-gray-400 dark:border-gray-600 h-8 text-base font-semibold"
                >
                  <td class="text-center">TOTAL:</td>
                  <td class="text-center">RM{{ claimDataTotalAmount[i] }}</td>
                  <td></td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <!-- Status Table -->
        <div
          class="text-xs border mt-4 border-gray-400 dark:border-gray-600 rounded-md"
          id="table-overflow"
        >
          <table class="w-full">
            <thead class="h-8 bg-gray-300 dark:bg-gray-700 text-left rounded-md space-x-2">
              <th
                class="rounded-tl-md text-center border-r border-gray-400 dark:border-gray-600"
              >
                STATUS
              </th>
              <th class="">NAME</th>
              <th class="">DESIGNATION</th>
              <th class="">DEPARTMENT</th>
              <th class="">DATE</th>
            </thead>
            <tr class="text-wrap h-8 text-left text-xs border-t border-gray-400 dark:border-gray-600">
              <th class="text-xs text-center font-semibold border-r border-gray-400 dark:border-gray-600">
                <div class="mx-auto text-xs rounded-full py-2 my-1 text-center w-fit inline-flex items-center px-3 gap-x-2"
                  :class="{
                    'bg-blue-100/60 dark:bg-gray-800': checked,
                    'bg-amber-100/60 dark:bg-gray-800': resubmitChecker,
                    'bg-red-100/60 dark:bg-gray-800': rejectChecker || adminStatus === 'REJECTED BY CHECKER',
                    'bg-gray-100/60 dark:bg-gray-800': !checked && !rejectChecker && !resubmitChecker && adminStatus !== 'REJECTED BY CHECKER'
                  }">
                  <span :class="{
                    'h-1.5 w-1.5 rounded-full': true,
                    'bg-blue-500': checked,
                    'bg-amber-500': resubmitChecker,
                    'bg-red-500': rejectChecker || adminStatus === 'REJECTED BY CHECKER',
                    'bg-gray-500': !checked && !rejectChecker && !resubmitChecker && adminStatus !== 'REJECTED BY CHECKER'
                  }"></span>
                  <span :class="{
                    'text-xs font-normal': true,
                    'text-blue-500': checked,
                    'text-amber-500': resubmitChecker,
                    'text-red-500': rejectChecker || adminStatus === 'REJECTED BY CHECKER',
                    'text-gray-500': !checked && !rejectChecker && !resubmitChecker && adminStatus !== 'REJECTED BY CHECKER'
                  }">
                    {{ approved || approvedFinance || reimbursed
                        ? 'CHECKED'
                        : adminStatus === 'REJECTED BY CHECKER'
                          ? 'REJECTED'
                          : checked || rejectChecker || resubmitChecker
                            ? adminStatus
                            : 'PENDING'
                    }}
                  </span>
                </div>
              </th>
                <td class="pl-6">{{ claimDetails.checker_name || '-' }}</td>
                <td class="pl-6">{{ claimDetails.checker_designation || '-' }}</td>
                <td>{{ claimDetails.checker_department || '-' }}</td>
                <td>{{ claimDetails.checked_date || '-' }}</td>
            </tr>
            <tr
              class="text-wrap h-8 text-left text-xs border-t border-gray-400 dark:border-gray-600"
            >
            <th class="text-xs text-center font-semibold border-r border-gray-400 dark:border-gray-600">
                <div class="mx-auto text-xs rounded-full py-2 my-1 text-center w-fit inline-flex items-center px-3 gap-x-2"
                :class="{
                  'bg-amber-100/60 dark:bg-gray-800': simplifiedVerifierStatus === 'VERIFIED' || simplifiedVerifierStatus === 'RESUBMIT' || simplifiedVerifierStatus === 'PENDING' || simplifiedVerifierStatus === 'REJECTED BY CHECKER' || simplifiedVerifierStatus === 'REJECTED BY VERIFIER',
                  'bg-red-100/60 dark:bg-gray-800': simplifiedVerifierStatus === 'REJECTED' && simplifiedVerifierStatus !== 'REJECTED BY CHECKER' && simplifiedVerifierStatus !== 'REJECTED BY VERIFIER'
                }">
                <span :class="{
                  'h-1.5 w-1.5 rounded-full': true,
                  'bg-amber-500': simplifiedVerifierStatus === 'VERIFIED' || simplifiedVerifierStatus === 'RESUBMIT' || simplifiedVerifierStatus === 'PENDING' || simplifiedVerifierStatus === 'REJECTED BY CHECKER' || simplifiedVerifierStatus === 'REJECTED BY VERIFIER',
                  'bg-red-500': simplifiedVerifierStatus === 'REJECTED' && simplifiedVerifierStatus !== 'REJECTED BY CHECKER' && simplifiedVerifierStatus !== 'REJECTED BY VERIFIER'
                }"></span>
                <span :class="{
                  'text-xs font-normal': true,
                  'text-amber-500': simplifiedVerifierStatus === 'VERIFIED' || simplifiedVerifierStatus === 'RESUBMIT' || simplifiedVerifierStatus === 'PENDING' || simplifiedVerifierStatus === 'REJECTED BY CHECKER' || simplifiedVerifierStatus === 'REJECTED BY VERIFIER',
                  'text-red-500': simplifiedVerifierStatus === 'REJECTED' && simplifiedVerifierStatus !== 'REJECTED BY CHECKER' && simplifiedVerifierStatus !== 'REJECTED BY VERIFIER'
                }">
                  {{ simplifiedVerifierStatus === 'REJECTED BY CHECKER' || simplifiedVerifierStatus === 'REJECTED BY VERIFIER' ? 'PENDING' : simplifiedVerifierStatus }}
                </span>
              </div>
            </th>
              <td class="pl-6">{{ claimDetails.verifier_name || '-' }}</td>
              <td class="">{{ claimDetails.verifier_designation || '-' }}</td>
              <td>{{ claimDetails.verifier_department || '-' }}</td>
              <td class="">{{ claimDetails.verified_date || '-' }}</td>
            </tr>
            <tr
              class="text-wrap h-8 text-left text-xs border-t border-gray-400 dark:border-gray-600"
            >
              <th
                class="text-xs text-center font-semibold border-r border-gray-400 dark:border-gray-600"
              >
                <div
                  class="mx-auto rounded-full py-2 text-center lg:w-[90%] w-full"
                  :class="{
                    'bg-green-200 dark:bg-green-500': approved,
                    'bg-yellow-200 dark:bg-yellow-500': resubmitApprover,
                    'bg-red-200 dark:bg-red-500': rejectApprover,

                    'text-green-500 dark:text-green-100': approved,
                    'text-yellow-500 dark:text-yellow-100': resubmitApprover,

                    'text-red-500 dark:text-red-100': rejectApprover,
                  }"
                >
                  <p>
                    {{
                      reimbursed
                        ? 'APPROVED'
                        : approved || rejectApprover || resubmitApprover
                          ? adminStatus
                          : ''
                    }}
                  </p>
                </div>
              </th>
              <td class="pl-6">
                {{
                  approved || rejectApprover || resubmitApprover || reimbursed
                    ? claimDetails.approver_name
                    : ''
                }}
              </td>
              <td class="">
                {{
                  approved || rejectApprover || resubmitApprover || reimbursed
                    ? claimDetails.approver_designation
                    : ''
                }}
              </td>
              <td>
                {{
                  approved || rejectApprover || resubmitApprover || reimbursed
                    ? claimDetails.approver_department
                    : ''
                }}
              </td>
              <td class="">
                {{
                  approved || rejectApprover || resubmitApprover || reimbursed
                    ? claimDetails.approved_date
                    : ''
                }}
              </td>
            </tr>
            <tr
              class="text-wrap h-8 text-left text-xs border-t border-gray-400 dark:border-gray-600"
            >
              <th
                class="text-xs text-center font-semibold border-r border-gray-400 dark:border-gray-600"
              >
                <div
                  class="mx-auto rounded-full py-2 text-center lg:w-[90%] w-full"
                  :class="{
                    'bg-green-200 dark:bg-green-500': approvedFinance,
                    'bg-yellow-200 dark:bg-yellow-500': resubmitFinance,
                    'bg-red-200 dark:bg-red-500': rejectFinance,

                    'text-green-500 dark:text-green-100': approvedFinance,
                    'text-yellow-500 dark:text-yellow-100': resubmitFinance,

                    'text-red-500 dark:text-red-100': rejectFinance,
                  }"
                >
                  <p>
                    {{
                      approvedFinance ||
                      rejectFinance ||
                      resubmitFinance ||
                      reimbursed
                        ? adminStatus
                        : ''
                    }}
                  </p>
                </div>
              </th>
              <td class="pl-6">
                {{
                  approved || rejectApprover || resubmitApprover || reimbursed
                    ? claimDetails.approver_name
                    : ''
                }}
              </td>
              <td class="">
                {{
                  approved || rejectApprover || resubmitApprover || reimbursed
                    ? claimDetails.approver_designation
                    : ''
                }}
              </td>
              <td>
                {{
                  approved || rejectApprover || resubmitApprover || reimbursed
                    ? claimDetails.approver_department
                    : ''
                }}
              </td>
              <td class="">
                {{
                  approved || rejectApprover || resubmitApprover || reimbursed
                    ? claimDetails.approved_date
                    : ''
                }}
              </td>
            </tr>
          </table>
        </div>

        <!-- Remark table -->
        <div
          v-show="!pending"
          class="text-xs border mt-4 border-gray-400 dark:border-gray-600 rounded-md"
          id="table-overflow"
        >
          <table class="w-full">
            <thead class="h-8 bg-gray-300 dark:bg-gray-700 rounded-md">
              <th class="pl-6">Remark</th>
            </thead>
            <tr
              class="h-8 text-left text-xs border-t border-gray-400 dark:border-gray-600"
            >
              <td class="pl-6">{{ remark }}</td>
            </tr>
          </table>
        </div>
        <div
        v-show="pending"
          class=".detail-table w-full lg:flex-row flex flex-col justify-between h-14 items-center pt-6"
        >
        <div class="flex items-center">
                <label class="font-semibold whitespace-nowrap mr-2">Overall Remark:</label>
                <input class="mx-auto py-2 min-w-[80px] rounded-md border text-xs" type="text"
                  placeholder="Eg. Blurry Receipt Image" v-model="remark" />
              </div>
          <div class="flex space-x-2">
            <button
              @click="confirmApprove = true"
              class="rounded-lg px-4 py-1.5 w-28 text-lg bg-green-600 hover:bg-green-700 text-white text-sm"
            >
              Check
            </button>
            <!-- <button
              @click="confirmResubmit = true"
              class="rounded-lg px-4 py-1 w-28 text-lg bg-yellow-500 hover:bg-yellow-600 text-white text-sm"
            >
              Resubmit
            </button> -->
            <button
              @click="confirmReject = true"
              class="text-sm font-semibold py-2 sm:w-24 md:w-36 bg-red-600 hover:bg-red-700 rounded-lg text-white"
            >
              Reject
            </button>
          </div>
        </div>

        <!-- Approve Confirmation -->
        <div
          v-show="confirmApprove"
          class="bg-black backdrop-blur-sm bg-opacity-50 dark:bg-gray-700 dark:bg-opacity-30 bg-opacity-40 w-screen h-screen fixed left-0 top-0 z-50 flex justify-center items-center"
        >
          <div
            class="bg-white dark:bg-gray-900 w-96 h-52 rounded-xl fixed flex flex-col justify-center items-center"
          >
            <h1 class="text-2xl font-bold">Do you confirm to check?</h1>
            <div class="flex mt-4">
              <button
                class="rounded-lg px-4 py-2 w-28 text-lg bg-gray-600 hover:bg-gray-700 text-white"
                @click="confirmApprove = false"
              >
                Back
              </button>
              <button
                class="rounded-lg px-4 py-2 w-28 text-lg bg-green-600 hover:bg-green-700 text-white ml-2"
                @click="ConfirmApprove"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>

        <!-- Resubmit Confirmation -->
        <div
          v-show="confirmResubmit"
          class="bg-black backdrop-blur-sm bg-opacity-50  dark:bg-gray-700 dark:bg-opacity-30 bg-opacity-40 w-screen h-screen fixed left-0 top-0 z-50 flex justify-center items-center"
        >
          <div
            class="bg-white dark:bg-gray-900 w-96 h-52 rounded-xl fixed flex flex-col justify-center items-center px-1"
          >
            <h1 class="text-2xl font-bold text-center">
              Please write the remark to return to claimant for resubmission?
            </h1>
            <input
              class="py-4 px-2 w-4/5 rounded-lg mt-4 outline-none border-gray-300 dark:border-gray-600 dark:bg-gray-500 border-2"
              placeholder="Eg. Blurry Receipt Image"
              v-model="remark"
            />
            <div class="flex mt-4">
              <button
                class="rounded-lg px-4 py-2 w-28 text-lg bg-gray-600 hover:bg-gray-700 text-white"
                @click="confirmResubmit = false"
              >
                Back
              </button>
              <button
                class="rounded-lg px-4 py-2 w-28 text-lg bg-green-600 hover:bg-green-700 text-white ml-2"
                @click="ConfirmResubmit()"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>

        <!-- Reject Confirmation -->
        <div
          v-show="confirmReject"
          class="bg-black backdrop-blur-sm bg-opacity-50 dark:bg-gray-700 dark:bg-opacity-30 bg-opacity-40 w-screen h-screen fixed left-0 top-0 z-50 flex justify-center items-center"
        >
          <div
            class="bg-white dark:bg-gray-900 w-96 px-8 h-52 rounded-xl fixed flex flex-col justify-center items-center"
          >
            <h1 class="text-xl font-bold">Please write the remark to reject</h1>
            <input
              class="py-4 px-2 w-4/5 rounded-lg mt-4 outline-none border-gray-300 dark:border-gray-600 dark:bg-gray-500 border-2"
              placeholder="Eg. Blurry Receipt Image"
              v-model="remark"
            />
            <div class="flex mt-4">
              <button
                class="rounded-lg px-4 py-2 w-28 text-lg bg-gray-600 hover:bg-gray-700 text-white"
                @click="confirmReject = false"
              >
                Back
              </button>
              <button
                class="rounded-lg px-4 py-2 w-28 text-lg bg-red-600 hover:bg-red-700 text-white ml-2"
                @click="ConfirmReject"
              >
                Reject
              </button>
            </div>
          </div>
        </div>

        <!-- Approve Success Notification -->
        <div
          class="fixed left-0 top-0 flex justify-center items-center z-50 w-screen h-screen"
          v-if="approveSuccess"
        >
          <div
            class="bg-gray-100 dark:bg-gray-500 px-10 py-3 rounded-full z-50 flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="green"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
              />
            </svg>

            <h1>VERIFIED SUCCESSFULLY</h1>
          </div>
        </div>

        <!-- Staff Involved List -->
        <div v-show="showSimList"
          class="fixed inset-0 bg-black/40 z-50 flex justify-center items-center overflow-hidden">
          <div
            class="bg-white w-full pt-4 pb-6 px-4 max-w-3xl mx-4 shadow-xl transform transition-all duration-300 ease-in-out scale-100">
            <div class="flex justify-between items-center p-2 border-b border-gray-200 relative">
              <div class="absolute inset-0 flex justify-center items-center pointer-events-none">
                <h1 class="text-xl font-bold text-gray-800">Staff Involved</h1>
              </div>

              <div class="ml-auto">
                <button @click="showSimList = !showSimList" class="text-gray-500 hover:text-gray-800 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="overflow-x-auto p-2">
              <table class="w-full p-2">
                <thead class="bg-gray-100">
                  <th class="py-3 px-4 text-left">No.</th>
                  <th class="py-3 px-4 text-left">Company</th>
                  <th class="py-3 px-4 text-left">Name</th>
                  <th class="py-3 px-4 text-left">Department</th>
                </thead>
                <tbody class="text-gray-600">
                  <tr v-for="(staff, i) in sim" :key="i"
                    class="border-b border-gray-200 hover:bg-gray-100 transition-colors">
                    <td class="py-3 px-4">{{ i + 1 }}</td>
                    <td class="py-3 px-4">{{ staff.company_name }}</td>
                    <td class="py-3 px-4">{{ staff.name }}</td>
                    <td class="py-3 px-4">{{ staff.department }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Participants List -->
        <div v-show="showParticipantsList"
          class="fixed inset-0 bg-black/40 z-50 flex justify-center items-center overflow-hidden">
          <div class="bg-white w-full p-2 max-w-3xl mx-4 shadow-xl relative">
            <button @click="showParticipantsList = false"
              class="absolute right-3 top-3 text-gray-500 hover:text-gray-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>

            <div class="text-center px-2 py-4">
              <h1 class="text-xl font-semibold">Participants</h1>
            </div>

            <div class="overflow-x-auto p-2">
              <table class="w-full text-center">
                <thead class="bg-gray-100">
                  <th class="py-3 px-4">No.</th>
                  <th class="py-3 px-4">Name</th>
                  <th class="py-3 px-4">Company</th>
                </thead>
                <tbody>
                  <tr v-for="(staff, i) in participants" :key="i" class="border-b border-gray-200 hover:bg-gray-100">
                    <td class="py-3 px-4">{{ i + 1 }}</td>
                    <td class="py-3 px-4">{{ staff.name }}</td>
                    <td class="py-3 px-4">{{ staff.company_name }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

                <!-- oem -->
                <div v-show="showOemList"
     class="fixed inset-0 bg-black/40 z-50 flex justify-center items-center overflow-hidden">
  <div class="bg-white w-full p-2 max-w-3xl mx-4 shadow-xl relative">
    <button @click="showOemList = false"
            class="absolute right-3 top-3 text-gray-500 hover:text-gray-800 transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
           stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </button>
    <div class="text-center px-2 py-4">
      <h1 class="text-xl font-semibold">Other Expenses & Mileage</h1>
    </div>
    <div class="overflow-x-auto p-2">
      <table class="w-full text-center">
        <thead class="bg-gray-100">
          <th class="py-3 px-4">No.</th>
          <th class="py-3 px-4">Name</th>
          <th class="py-3 px-4">Description</th>
          <th class="py-3 px-4">Amount (RM)</th>
          <th class="py-3 px-4">Foreign Currency</th>
          <th class="py-3 px-4">Exchange Rate</th>
          <th class="py-3 px-4">Currency Total</th>
        </thead>
        <tbody>
          <tr v-for="(item, i) in oem" :key="i" class="border-b border-gray-200 hover:bg-gray-100">
            <td class="py-3 px-4">{{ i + 1 }}</td>
            <td class="py-3 px-4">{{ item.name }}</td>
            <td class="py-3 px-4">{{ item.description }}</td>
            <td class="py-3 px-4">{{ item.amount.toFixed(2) }}</td>
            <td class="py-3 px-4">{{ item.foreign_currency }}</td>
            <td class="py-3 px-4">{{ item.exchange_rate }}</td>
            <td class="py-3 px-4">{{ item.currency_total }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

        <!-- File List -->
        <div v-show="showFileList"
          class="fixed inset-0 bg-black/40 z-50 flex justify-center items-center overflow-hidden">
          <div class="bg-white w-full max-w-3xl mx-4 shadow-xl relative">
            <button @click="showFileList = false"
              class="absolute right-3 top-3 text-gray-500 hover:text-gray-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>

            <div class="text-center py-4">
              <h1 class="text-xl font-semibold">Attachments</h1>
            </div>

            <div v-if="files.length > 0" class="overflow-x-auto p-2">
              <table class="w-full text-center">
                <thead class="bg-gray-100">
                
                    <th class="py-3 px-4">No.</th>
                    <th class="py-3 px-4">File</th>
                    <th class="py-3 px-4">Action</th>
                  
                </thead>
                <tbody>
                  <tr v-for="(file, i) in files" :key="i"
                    class="border-b border-gray-200 hover:bg-gray-100 transition-colors">
                    <td class="py-3 px-4">{{ i + 1 }}</td>
                    <td class="py-3 px-4 flex items-center space-x-2">
                      <div class="w-20 h-32 flex items-center justify-center">
                        <img v-if="['png', 'jpg', 'jpeg'].includes(file.split('.').pop().toLowerCase())" :src="file"
                          alt="attachment" class="max-w-full max-h-full object-contain" />
                        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          stroke-width="0.5" stroke="currentColor" class="w-16 h-16 text-gray-500">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>
                      </div>
                      <span class="truncate">
                        {{ file.split('/').pop() }}
                      </span>
                    </td>
                    <td class="py-3 px-4">
                      <button @click="DownloadFile(file, file.split('/').pop())"
                        class="text-gray-600 hover:text-blue-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor" class="w-5 h-5 mx-auto">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-else class="text-center py-4">
              <p class="text-gray-500">No attachments</p>
            </div>
          </div>
        </div>

        <!-- Loading Animation -->
        <div
          class="w-screen h-screen fixed z-50 flex justify-center items-center top-0 left-0 backdrop-blur-md"
          v-if="loading && !approveSuccess"
        >
          <div class="absolute w-screen h-screen bg-gray-900 opacity-10"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            class="w-24 h-24 z-50"
          >
            <circle
              transform="rotate(0)"
              transform-origin="center"
              fill="none"
              stroke="blue"
              stroke-width="10"
              stroke-linecap="round"
              stroke-dasharray="230 1000"
              stroke-dashoffset="0"
              cx="100"
              cy="100"
              r="70"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0"
                to="360"
                dur="2"
                repeatCount="indefinite"
              ></animateTransform>
            </circle>
          </svg>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import fileSaver from 'file-saver';
import axios from 'axios';
import { store } from '@/views/store.js';

export default {
  name: 'AdminSummaryClaimpage',
  props: {
    rn: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      singleRemarks: [],
      singleColumnRemarks: [],
      userData: {},
      sim: [],
      showSimList: false,
      participants: [],
      showParticipantsList: false,
      oem: [],
      showOemList: false,
      files: [],
      showFileList: false,

      dropdownOpen: false,

      seeMore: false,
      confirmReject: false,
      confirmApprove: false,
      confirmResubmit: false,
      approveSuccess: false,
      loading: false,

      pending: false,
      verified: false,
      checked: false,
      approved: false,
      approvedFinance: false,
      open: false,

      rejectVerifier: false,
      rejectChecker: false,
      rejectApprover: false,
      rejectFinance: false,

      resubmitVerifier: false,
      resubmitChecker: false,
      resubmitApprover: false,
      resubmitFinance: false,
      reimbursed: false,
      remark: '',
      adminStatus: '',

      claimDetails: [],
      claimDatas: [],
      claimDatasDetails: [],
      claimDataTotalAmount: [],

      keysToExclude: ['Tab_Title', 'unique_code'],

      // referenceNumber: 'TMTM-Finance-2024-07-0451',
      referenceNumber: '',
    };
  },
  computed: {
    totalAmount() {
      let num = 0;
      for (var i = 0; i < this.claimDatas.length; i++) {
        num += this.claimDatas[i].Amount;
      }
      return num;
    },
    simplifiedFinanceStatus() {
    switch (this.adminStatus) {
      case 'APPROVED BY FINANCE. WAITING FOR REIMBURSED':
        return 'APPROVED';
      case 'REJECTED BY VERIFIER.':
        return 'REJECTED';
      case 'RESUBMIT':
        return 'RESUBMIT';
      case 'REIMBURSED':
        return 'REIMBURSED';
      case 'OPEN':
        return 'PENDING';
        case 'VERIFIED. WAITING FOR APPROVER.':
        return 'PENDING';
      default:
        return this.adminStatus; 
    }
  },

  simplifiedApproverFinStatus() {
    switch (this.adminStatus) {
      case 'APPROVED BY FINANCE. WAITING FOR REIMBURSED':
        return 'APPROVED';
      case 'REJECTED BY VERIFIER.':
        return 'REJECTED';
      case 'RESUBMIT':
        return 'RESUBMIT';
      case 'REIMBURSED':
        return 'APPROVED';
      case 'OPEN':
        return 'PENDING';
        case 'VERIFIED. WAITING FOR APPROVER.':
        return 'PENDING';
      default:
        return this.adminStatus; 
    }
  },
    simplifiedApproverStatus() {
    switch (this.adminStatus) {
      case 'APPROVED BY FINANCE. WAITING FOR REIMBURSED':
        return 'APPROVED';
      case 'REJECTED BY VERIFIER.':
        return 'REJECTED';
      case 'RESUBMIT':
        return 'RESUBMIT';
      case 'REIMBURSED':
        return 'APPROVED';
      case 'OPEN':
        return 'PENDING';
      case 'VERIFIED. WAITING FOR APPROVER.':
        return 'PENDING';
      default:
        return this.adminStatus; 
    }
  },
  simplifiedVerifierStatus() {
    if (this.rejectChecker || this.rejectVerifier) {
      return 'PENDING'; 
    } else if (this.verified) {
      return 'VERIFIED';
    } else if (this.resubmitVerifier) {
      return 'RESUBMIT';
    } else if (this.reimbursed) { 
      return 'REIMBURSED';
    } else if (this.open) {
      return 'PENDING';
    }
    return '-';
  }
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },

    async FetchClaimDetails() {
      try {
        const response = await axios.get('http://172.28.28.116:7165/api/User/GetClaimDetails/' + this.referenceNumber);
        this.claimDetails = response.data.result;
        this.adminStatus = this.claimDetails.admin_status;
        // console.log("get claimdetails : ", this.claimDetails);
        // console.log("get admin status", this.adminStatus);

        switch (this.adminStatus) {
          case 'VERIFIED. WAITING FOR APPROVER.':
            this.verified = true;
            this.pending = false;
            this.remark = this.claimDetails.comment;
            break;

          case 'CHECKED':
            this.verified = true;
            this.checked = true;
            this.pending = false;
            this.remark = this.claimDetails.comment;
            break;

          case 'APPROVED BY FINANCE. WAITING FOR REIMBURSED':
            if (this.claimDetails.admin_status.includes('APPROVER')) {
              this.verified = true;
              this.checked = true;
              this.approved = true;
            } else {
              this.verified = true;
              this.checked = true;
              this.approved = true;
              this.approvedFinance = true;
            }
            this.pending = false;
            this.remark = this.claimDetails.comment;
            break;

          case 'REJECTED BY VERIFIER.':
            this.rejectVerifier = true;
            this.pending = false;
            this.remark = this.claimDetails.comment;
            break;

          case 'REJECTED BY CHECKER':
            this.rejectChecker = true;
            this.pending = false;
            this.remark = this.claimDetails.comment;
            break;

          case 'RESUBMIT':
            if (this.claimDetails.admin_status.includes('VERIFIER')) {
              this.resubmitVerifier = true;
            } else if (this.claimDetails.admin_status.includes('CHECKER')) {
              this.verified = true;
              this.resubmitChecker = true;
            } else if (this.claimDetails.admin_status.includes('APPROVER')) {
              this.verified = true;
              this.checked = true;
              this.resubmitApprover = true;
            } else if (this.claimDetails.admin_status.includes('FINANCE')) {
              this.verified = true;
              this.checked = true;
              this.approved = true;
              this.resubmitFinance = true;
            }
            this.pending = false;
            this.remark = this.claimDetails.comment;
            break;

          case 'REIMBURSED':
            this.verified = true;
            this.checked = true;
            this.approved = true;
            this.reimbursed = true;
            this.pending = false;
            this.remark = this.claimDetails.comment;
            break;

          case 'OPEN':
            this.open = true;
            this.pending = true;
            this.remark = this.claimDetails.comment;
            break;

          default:
            this.pending = true;
            break;
        }
        // console.log("admin status", this.claimDetails);
      } catch (error) {
        console.error("Error while fetching claims details:", error);
        throw error;
      }
    },
    async FetchClaimDatasDetails() {
  try {
    try {
      const response = await axios.get(
        'http://172.28.28.116:7239/api/User/GetLocalOutstation/' +
        this.referenceNumber
      );
      const result = response.data.result;
      // console.log(result, 'local outstation');
      let details = [];
      let amount = 0;
      
      for (let i in result) {
        amount += result[i].total_fee;
        const editedDetail = {
          Mileage_Km: result[i].mileage_km,
          Starting_Point: result[i].starting_point,
          End_Point: result[i].end_point,
          Date_Event: result[i].date_event,
          'Park_Fee(RM)': result[i].park_fee,
          'Toll_Fee(RM)': result[i].toll_fee,
          'Total_Fee(RM)': result[i].total_fee,
          Transport_Specification: result[i].transport_specification,
          Transport_Mode: result[i].transport_mode,
          Trip_Mode: result[i].trip_mode,
          Total_Mileage: result[i].total_mileage,
          Attachments: result[i].files,
          Remark: result[i].comment,
          Tab_Title: 'Local Outstation',
          unique_code: result[i].unique_code,
        };
        details.push(editedDetail);
      }
      if (details.length > 0) {
        this.claimDatasDetails.push(details);
        this.claimDataTotalAmount.push(amount);
      }
    } catch (e) {
      console.error('Error fetching Local Outstation data:', e);
    }

    try {
      const response = await axios.get(
        'http://172.28.28.116:7239/api/User/GetOverseasOutstation/' +
        this.referenceNumber
      );
      const result = response.data.result;
      console.log("Overseas data:", result);
      let details = [];
      let amount = 0;
      for (let i in result) {

        const mealAllowance = result[i].meal_allowance;
        const oemAmount = result[i].oem[0]?.amount;
        amount = Number(mealAllowance) + Number(oemAmount);
        // amount = result[i].meal_allowance + result[i].oem.amount;
        const editedDetail = {
          Description: result[i].description,
          Meal_Allowance: result[i].meal_allowance,
          Date: result[i].date_event,
          'Total_Fee(RM)': result[i].total_fee,
          Attachments: result[i].files,
          oem: result[i].oem,
          Tab_Title: 'Overseas Outstation',
          Remark: result[i].comment,
          unique_code: result[i].unique_code,

        };
        details.push(editedDetail);
        // console.log("editedDetails in overseas,", editedDetail);
      }
      // console.log("Amount oversears:",amount)
      if (details.length > 0) {
        this.claimDatasDetails.push(details);
        this.claimDataTotalAmount.push(amount);
      }
    } catch (e) {
      console.error('Error fetching Overseas Outstation data:', e);
    }

    try {
      const response = await axios.get(
        'http://172.28.28.116:7239/api/User/GetRefreshment/' +
        this.referenceNumber
      );
      const result = response.data.result;
      let details = [];
      let amount = 0;
      for (let i in result) {
        amount += result[i].total_fee;
        const editedDetail = {
          Type: result[i].refreshment_type,
          Date: result[i].date_event,
          Reference_Type: result[i].reference_type,
          Venue: result[i].venue_name,
          Company: result[i].company_name,
          'Total_Fee(RM)': result[i].total_fee,
          Staff_Involved: result[i].sim,
          Attachments: result[i].files,
          Remark: result[i].comment,
          Tab_Title: 'Staff Refreshment',
          unique_code: result[i].unique_code,
        };
        details.push(editedDetail);
      }
      if (details.length > 0) {
        this.claimDatasDetails.push(details);
        this.claimDataTotalAmount.push(amount);
      }
    } catch (e) {
      console.error('Error fetching Refreshment data:', e);
    }

    try {
      const response = await axios.get(
        'http://172.28.28.116:7165/api/User/GetEntertainment/' +
        this.referenceNumber
      );
      const result = response.data.result;
    // console.log("Get entertainment", result);
      let details = [];
      let amount = 0;
      for (let i in result) {
        amount += result[i].total_fee;
        const editedDetail = {
          Type: result[i].entertainment_type,
          Date: result[i].date_event,
          Venue: result[i].venue_name,
          Company: result[i].company_name,
          'Total_Fee(RM)': result[i].total_fee,
          Participants: result[i].participants,
          Attachments: result[i].files,
          Remark: result[i].comment,
          Tab_Title: 'Entertainment',
          unique_code: result[i].unique_code,
        };
        details.push(editedDetail);
      }
      if (details.length > 0) {
        this.claimDatasDetails.push(details);
        this.claimDataTotalAmount.push(amount);
        
      }
    } catch (e) {
      console.error('Error fetching Entertainment data:', e);
    }

    try {
      const response = await axios.get(
        'http://172.28.28.116:7165/api/User/GetMedicalLeave/' +
        this.referenceNumber
      );
      const result = response.data.result;
      let details = [];
      let amount = 0;
      for (let i in result) {
        amount += result[i].claim_amount;
        const editedDetail = {
          reason: result[i].reason,
          Date: result[i].date_leave_taken,
          clinicselection: result[i].clinic_name
            ? result[i].clinic_name
            : result[i].clinic_selection,
          reason_other_clinic: result[i].reason_different,
          bank_name: result[i].bank_name,
          bank_holder: result[i].bank_holder,
          bank_account: result[i].bank_account,
          'Total_Fee(RM)': result[i].claim_amount,
          Attachments: result[i].files,
          Tab_Title: 'Medical Leave',
          Remark: result[i].comment,
          unique_code: result[i].unique_code,
        };
        details.push(editedDetail);
      }
      if (details.length > 0) {
        this.claimDatasDetails.push(details);
        this.claimDataTotalAmount.push(amount);
      }
    } catch (e) {
      console.error('Error fetching Medical Leave data:', e);
    }

    try {
      const response = await axios.get(
        'http://172.28.28.116:7165/api/User/GetHandphone/' + this.referenceNumber
      );
      const result = response.data.result;
      let details = [];
      let amount = 0;
      for (let i in result) {
        amount += result[i].claim_amount;
        const editedDetail = {
          Claim_Month: result[i].claim_month,
          Claim_Year: result[i].claim_year,
          Bank: result[i].bank_name,
          Bank_Holder: result[i].bank_holder,
          Bank_Account: result[i].bank_account,
          'Claim_Amount(RM)': result[i].claim_amount,
          Attachments: result[i].files,
          Tab_Title: 'Handphone Bill',
          Remark: result[i].comment,
          unique_code: result[i].unique_code,
        };
        details.push(editedDetail);
      }
      if (details.length > 0) {
        this.claimDatasDetails.push(details);
        this.claimDataTotalAmount.push(amount);
      }
    } catch (e) {
      console.error('Error fetching Handphone data:', e);
    }

    try {
      const response = await axios.get(
        'http://172.28.28.116:7239/api/User/GetOthers/' + this.referenceNumber
      );
      const result = response.data.result;
      let details = [];
      let amount = 0;
      for (let i in result) {
        amount += result[i].total_fee;
        const editedDetail = {
          Description: result[i].description,
          Date: result[i].expense_date,
          'Total_Fee(RM)': result[i].total_fee,
          Attachments: result[i].files,
          Tab_Title: 'Other',
          Remark: result[i].comment,
          unique_code: result[i].unique_code,
        };
        details.push(editedDetail);
      }
      if (details.length > 0) {
        this.claimDatasDetails.push(details);
        this.claimDataTotalAmount.push(amount);
      }
    } catch (e) {
      console.error('Error fetching Others data:', e);
    }

    // Process the final claim data
    try {
      this.claimDatasDetails.forEach((details, index) => {
        if (details && details.length > 0) {
          const claimData = {
            No: index + 1,
            Type: details[0].Tab_Title,
            Amount: this.claimDataTotalAmount[index],
          };
          this.claimDatas.push(claimData);
        }
      });

      // console.log(this.claimDatas, 'claimDatas');
      // console.log(this.claimDatasDetails);
    } catch (e) {
      console.error('Error processing final claim data:', e);
    }
  } catch (e) {
    console.error('Fatal error in FetchClaimDatasDetails:', e);
  }
},

    PrintSummary() {
      print();
    },
    // click function after confirm the approve
    ConfirmApprove() {
      this.confirmApprove = false;
      this.ApproveOrReject('Approve');
    },

    // click function after confirm the reject
    ConfirmReject() {
      this.confirmReject = false;
      this.ApproveOrReject('Reject');
    },

    // click function after confirm the resubmit
    ConfirmResubmit() {
      this.confirmResubmit = false;
      this.ApproveOrReject('Resubmit');
    },

    // get the user data from store
    async GetUserData() {
      const username_id = store.getSession().userDetails.userId;
      let userData;
      await axios
        .get(`http://172.28.28.116:7239/api/User/GetEmployeeById/${username_id}`)
        .then((response) => {
          userData = {
            userName: response.data.result[0].name,
            department: response.data.result[0].department,
            designation: response.data.result[0].position_title,
          };

          // console.log("userData",userData);
        });
      return userData;
    },
    // If any single remark is change, save in the array
    UpdateSingleRemark(event, uc, tab) {
      // console.log(this.singleRemarks);

      let index = this.singleRemarks.findIndex(
        (item) => item.unique_code == uc
      );
      let data = {
        remark: event.target.value,
        unique_code: uc,
        Tab_Title: tab,
      };

      if (index !== -1) {
        if (data.remark.trim() === '') {
          // Remove the item if the remark is empty
          this.singleRemarks.splice(index, 1);
        } else {
          // Update the existing remark
          this.singleRemarks[index] = { ...this.singleRemarks[index], ...data };
        }
      } else {
        // Only push new data if the remark is not empty
        if (data.remark.trim() !== '') {
          this.singleRemarks.push(data);
        }
      }
    },

    //approve or reject action
    // need to post to database
    async ApproveOrReject(AoR) {
      this.pending = false;
      const userData = await this.GetUserData();
      // console.log(userData);
      this.singleRemarks.forEach(async (remark) => {
        let data = {
          verifier_comment: remark.remark,
          reference_number: remark.unique_code,
        };

        try {
          if (remark.Tab_Title == 'Local Outstation') {
            await axios.post('http://172.28.28.116:7239/api/Verifier/VerifierLocal', data);
          } else if (remark.Tab_Title == 'Overseas Outstation') {
            await axios.post('http://172.28.28.116:7239/api/Verifier/VerifierOverseas', data);
          } else if (remark.Tab_Title == 'Staff Refreshment') {
            await axios.post('http://172.28.28.116:7239/api/Verifier/VerifierRefreshment', data);
          } else if (remark.Tab_Title == 'Entertainment') {
            await axios.post('http://172.28.28.116:7239/api/Verifier/VerifierEntertainment', data);
          } else if (remark.Tab_Title == 'Other') {
            await axios.post('http://172.28.28.116:7239/api/Verifier/VerifierOthers', data);
          }
        } catch (error) {
          console.error(`Error posting ${remark.Tab_Title}:`, error);
        }
      });

      if (AoR == 'Approve') {
        this.approve = true;
        this.loading = true;

        const approveData = {
          report_name: this.claimDetails.report_name === '-' ? '-' : this.claimDetails.report_name,
          status: 'CHECKED BY CHECKER. WAITING FOR VERIFIER',
          comment: this.remark ? this.remark : '',
          name: this.claimDetails.name === '-' ? '-' : this.claimDetails.name,
          admin_name: this.claimDetails.checker_name === '-' ? '-' : this.claimDetails.checker_name,
          requester_email: this.claimDetails.email === '-' ? '-' : this.claimDetails.email,
          verifier_email: this.claimDetails.verifier_email === '-' ? '-' : this.claimDetails.verifier_email,
          reference_number: this.claimDetails.reference_number === '-' ? '-' : this.claimDetails.reference_number,
        };

        // console.log(approveData);

        try {
          const response = await axios.put('http://172.28.28.116:7165/api/Admin/Check_Claim', approveData);
          // console.log('API response', response.data);

          this.approveSuccess = true;
          setTimeout(() => {
            this.$router.push({ name: 'checkerDashboardPage' });
          }, 2500);
        } catch (error) {
          console.error('API error', error);
        }
      } else if (AoR == 'Reject') {
        this.rejectVerifier = true;
        this.loading = true;

        const approveData = {
          report_name: this.claimDetails.report_name === '-' ? '-' : this.claimDetails.report_name,
          status: 'REJECTED BY CHECKER',
          comment: this.remark ? this.remark : '',
          name: this.claimDetails.name === '-' ? '-' : this.claimDetails.name,
          admin_name: this.claimDetails.checker_name === '-' ? '-' : this.claimDetails.checker_name,
          requester_email: this.claimDetails.email === '-' ? '-' : this.claimDetails.email,
          verifier_email: this.claimDetails.verifier_email === '-' ? '-' : this.claimDetails.verifier_email,
          reference_number: this.claimDetails.reference_number === '-' ? '-' : this.claimDetails.reference_number,
        };

        try {
          const response = await axios.put('http://172.28.28.116:7165/api/Admin/Check_Claim', approveData);
          this.loading = false;
          // console.log('API response', response.data);
        } catch (error) {
          console.error('API error', error);
        }
      } else if (AoR == 'Resubmit') {
        this.resubmitVerifier = true;
        this.loading = true;

        const approveData = {
          report_name: this.claimDetails.report_name === '-' ? '-' : this.claimDetails.report_name,
          status: 'RESUBMIT REQUESTED BY CHECKER',
          comment: this.remark ? this.remark : '',
          name: this.claimDetails.name === '-' ? '-' : this.claimDetails.name,
          admin_name: this.claimDetails.checker_name === '-' ? '-' : this.claimDetails.checker_name,
          requester_email: this.claimDetails.email === '-' ? '-' : this.claimDetails.email,
          verifier_email: this.claimDetails.verifier_email === '-' ? '-' : this.claimDetails.verifier_email,
          reference_number: this.claimDetails.reference_number === '-' ? '-' : this.claimDetails.reference_number,
        };
        await axios
          .put('http://172.28.28.116:7165/api/Admin/Check_Claim', approveData)
          .then((response) => {
            // Handle success response
            this.loading = false;

            // console.log('API response', response.data);
          })
          .catch((error) => {
            // Handle error response
            console.error('API error', error);
          });
      }

      this.FetchClaimDetails();
      this.FetchClaimDatasDetails();
    },

    // Download the file
    DownloadFile(url, fileName) {
      fileSaver.saveAs(url, fileName);
    },
    // click see more and show the list of staff involved
    showStaffInvolved(val) {
      this.sim = val;
      this.showSimList = true;
    },
    // click detail and show the list of participants
    showParticipants(val) {
      this.participants = val;
      this.showParticipantsList = true;
    },
    showOemModal(val) {
   this.oem = val;
   this.showOemList = true;
  },
    ShowFile(val) {
      this.files = val;
      this.showFileList = true;
    },
  },
  mounted() {
    // Sidebar close or open
    let openOrNot = localStorage.getItem('openOrNot');
    const element = document.querySelector('main');
    if (element && openOrNot == 'false') {
      element.classList.add('become-big');
    } else if (element && openOrNot == 'true') {
      element.classList.remove('become-big');
    }

    this.referenceNumber = this.rn;

    this.FetchClaimDetails();
    this.FetchClaimDatasDetails();
  },
};
</script>

<style scoped>
tr:first-child th:first-child {
  border-top-left-radius: 16px;
}
tr:first-child th:last-child {
  border-top-right-radius: 16px;
}
tr:last-child th:first-child {
  border-bottom-left-radius: 16px;
}
tr:last-child th:last-child {
  border-bottom-right-radius: 16px;
}

.details tr td:last-child {
  display: none;
}
.details tr th:last-child {
  display: none;
}
.details tr td:nth-last-child(2) {
  display: none;
}
.details tr th:nth-last-child(2) {
  display: none;
}
.details tr td:nth-last-child(3) {
  display: none;
}
.details tr th:nth-last-child(3) {
  display: none;
}

div:has(> table) {
  overflow-x: auto;
}

table th,
td {
  padding-right: 4px;
  padding-left: 4px;
}
</style>

<style>
@media print {
  @page {
    size: A4 portrait;
  }
  * {
    color: black;
    font-size: 14px;
  }
  body {
    margin: 0;
  }
  p {
    font-size: 12px !important;
  }
  input {
    display: none;
  }
  #title {
    white-space: nowrap;
  }
  #claimant-informations {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  #claimant-informations div {
    margin-bottom: 6px !important;
    font-size: 14px !important;
  }
  .details h1 {
    font-size: 16px !important;
    margin-bottom: 0 !important;
  }
  .print-div {
    box-shadow: none;
    border: none;
  }
  body *:not(#summaryPrint):not(#summaryPrint *) {
    visibility: hidden !important;
  }
  .detail-table {
    page-break-inside: avoid;
    margin-top: 6px !important;
  }
  .detail-table h1 {
    margin-top: 6px !important;
  }
  table {
    page-break-inside: avoid;
    margin-top: 4px !important;
  }
  * {
    box-shadow: 0;
    margin: 0;
    padding: 0;
    --tw-ring-shadow: 0;
    --tw-ring-color: 0;
  }
  #toLeft {
    text-align: left !important;
  }
  #summaryPrint {
    margin-left: 0;
    width: 100vw !important;
    padding: 0;
    box-shadow: 0;
    position: absolute;
    left: 0;
  }
  #summaryPrint button {
    display: none;
  }

  #rn {
    display: block !important;
  }
  #total {
    position: absolute;
    right: 10px;
  }
  #table-overflow {
    width: 100%;
    overflow: hidden;
  }
  #table-overflow table {
    width: 100%;
  }
  #table-overflow table tr {
    height: max-content;
    width: 100%;
  }
  #table-overflow table th {
    padding: 1px auto;
    margin: 0 auto;
    font-size: 8px !important;
    height: 20px;
    width: 10px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    line-height: 10px;
  }
  #summaryPrint #table-overflow table td {
    padding: 1px auto;
    margin: 0 auto;
    font-size: 12px !important;
    height: 20px;
    width: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    line-height: 18px !important;
  }

  #hidden {
    display: none;
  }

  #staffDetails h1 {
    font-size: 8px;
    padding: 0;
    margin: 0;
  }

  #remarkText {
    padding: 1 auto;
    margin: 0 auto;
    font-size: 12px !important;
    height: 20px;
    width: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    line-height: 18px !important;
    color: black !important;
  }
}
</style>
