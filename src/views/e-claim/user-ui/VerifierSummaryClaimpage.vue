<template>
  <main class="flex-1 text overflow-y-auto bg-[#CED1DA] dark:bg-gray-900 dark:text-white p-4 sm:ml-64">
    <div class="mx-auto text-xs lg:text-base">
      <div id="summaryPrint"
        class="relative bg-[#f7fbff] dark:bg-gray-900 border-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <h1 class="text-gray-500 italic absolute top-4 right-4">
          SN: {{ referenceNumber }}
        </h1>
        <div id="rn" class="relative w-screen hidden">
          <h1 class="text-gray-500 italic absolute top-11 right-4">
            SN: {{ referenceNumber }}
          </h1>
        </div>
        <!-- Head Title -->
        <button class="absolute top-1 lg:top-6 p-1 bg-blue-800 hover:bg-blue-900 rounded-[100%]" v-show="seeMore"
          @click="seeMore = !seeMore">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
          </svg>
        </button>
        <div class="flex justify-center">
          <h1 class="font-bold text-lg text">
            SUMMARY CLAIM FOR REIMBURSEMENT OF ALL EXPENSES
          </h1>
        </div>

        <!-- Information -->
        <div class="flex justify-between items-center">
          <h1 class="text-blue-900 dark:text-blue-600 font-bold text-3xl" id="title">
            {{ claimDetails.report_name }}

            <span class="text-blue-900 dark:text-blue-600 text-3xl" id="title">| RM{{ claimDetails.grand_total }}</span>
          </h1>

          <div class="h-12 flex items-center">
            <button v-show="!seeMore" @click="seeMore = !seeMore"
              class="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white rounded-xl px-8 text-sm font-bold py-2">
              See More
            </button>
            <button v-show="seeMore" @click="PrintSummary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
              </svg>
            </button>
          </div>
        </div>
        <div id="claimant-informations"
          class="text-sm grid grid-cols-2 lg:grid-cols-3 gap-2 [&>*:nth-child(even)]:text-right lg:[&>*:nth-child(even)]:text-left">
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
                      <td class="px-4 py-3 text-xs text-left">
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
          <div v-for="(detail, i) in claimDatasDetails" :key="i" class="detail-table mt-5">
            <h1 class="mt-4 text-xl font-semibold tab-title" v-if="detail && detail.length > 0">
              {{ detail[0].Tab_Title }}
            </h1>
            <div class="border rounded-lg overflow-x-auto border-gray-400 dark:border-gray-600">
              <table class="w-full">
                <thead class="h-8 bg-gray-300 dark:bg-gray-700 rounded-md text-xs">
                  <th class="w-40">Remark</th>
                  <th class="px-6 w-36 break-words text-xs"
                    v-for="key in Object.keys(detail[0]).filter(k => !['Tab_Title', 'unique_code', 'comment'].includes(k))"
                    :key="key">
                    {{ key.split('_').join(' ') }}
                  </th>
                </thead>

                <!-- table information -->
                <tr class="h-8 text-left align-top text-xs hover:bg-gray-200 dark:hover:bg-gray-800"
                  v-for="(item, index) in detail" :key="index">
                  <td class="px-2 py-1 text-xs text-left align-middle">
                    <div v-if="!verified">
                      <input 
                        :value="item.comment || ''"
                        @input="UpdateSingleRemark($event, item.unique_code, item.Tab_Title)"
                        type="text"
                        class="p-1 text-xs w-full rounded-md outline-none border-gray-400 dark:border-gray-600 dark:bg-gray-700 border"
                      />
                    </div>
                    <div v-else>
                      <span class="m-2 px-2 py-1 rounded-md dark:bg-sky-950">
                        {{ item.comment }}
                      </span>
                    </div>
                  </td>
                  <!-- <td class="text-center justify-between items-center flex">
                    <div class="justify-center items-center flex py-2 align-middle">
                      Render input only if status is OPEN and no existing comment
                      <input
                        v-if="adminStatus === 'OPEN' && (!item.comment || item.comment.trim() === '')"
                        @input="UpdateSingleRemark($event, item.unique_code, item.Tab_Title)"
                        type="text"
                        class="p-1 text-xs w-full rounded-md outline-none border-gray-400 dark:border-gray-600 dark:bg-gray-700 border" />

                      Render static remark if status is not OPEN or a comment exists
                      <h1
                        id="remarkText"
                        v-else-if="item.comment && item.comment.trim() !== ''"
                        class="m-1 px-2 py-1 rounded-md text-xs mx-auto w-fit block dark:bg-sky-950 text-center">
                        {{ item.comment }}
                      </h1>           
                    </div>
                  </td> -->
                  <td class="text-center font-normal px-3 py-1 justify-center items-center " v-for="(val, key, i) in item" :key="i">
                    {{
                      key == 'Attachments'
                        ? ''
                        : key == 'Staff_Involved'
                          ? ''
                          : key == 'Participants'
                            ? ''
                            : key == 'Others_Expenses'
                            ? ''
                            : val
                    }}
                    <div v-if="key === 'Others_Expenses'">
                      <span v-html="val"></span>
                    </div>
                    <div v-if="key === 'Staff_Involved'">
                      <span v-html="val"></span>
                    </div>
                    <div v-if="key === 'Participants'">
                      <span v-html="val"></span>
                    </div>

                    <div v-show="key == 'Attachments'"
                      class="text-blue-700 flex items-center justify-center cursor-pointer"
                      @click.prevent="ShowFile(val)">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                      </svg>
                      x{{ val.length }}
                    </div>
                  </td>
                </tr>
                <tr class="border-t border-gray-400 dark:border-gray-600 h-8 text-base font-semibold">
                  <td class="text-center">TOTAL:</td>
                  <td class="text-center">RM{{ claimDataTotalAmount[i] }}</td>
                  <td></td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <!-- Status Table -->
        <div class="border rounded-lg overflow-x-auto border-gray-400 dark:border-gray-600 my-4">
          <table class="w-full status-table">
            <thead class="h-8 bg-gray-300 dark:bg-gray-700 text-left rounded-md space-x-2">
              <th class="rounded-tl-md text-center border-r border-gray-400 dark:border-gray-600">
                STATUS
              </th>
              <th class="">NAME</th>
              <th class="">DESIGNATION</th>
              <th class="">DEPARTMENT</th>
              <th class="">DATE</th>
            </thead>
            <!-- CHECKED -->
            <tr v-if="claimDetails.checker_name !== null"
              class="text-wrap h-8 text-left text-xs border-t border-gray-400 dark:border-gray-600">
              <th class="text-xs text-center font-semibold border-r border-gray-400 dark:border-gray-600">
                <div
                  class="mx-auto text-xs rounded-full py-2 my-1 text-center w-fit inline-flex items-center px-3 gap-x-2"
                  :class="{
                    'bg-orange-100/60 dark:bg-gray-800': simplifiedCheckerStatus === 'CHECKED' || simplifiedCheckerStatus === 'PENDING' || simplifiedCheckerStatus === 'RESUBMIT' || simplifiedCheckerStatus === 'VERIFIED',
                    'bg-red-100/60 dark:bg-gray-800': simplifiedCheckerStatus === 'REJECTED'
                  }">
                  <span :class="{
                    'h-1.5 w-1.5 rounded-full': true,
                    'bg-orange-500': simplifiedCheckerStatus === 'CHECKED' || simplifiedCheckerStatus === 'PENDING' || simplifiedCheckerStatus === 'RESUBMIT'|| simplifiedCheckerStatus === 'VERIFIED',
                    'bg-red-500': simplifiedCheckerStatus === 'REJECTED'
                  }"></span>
                  <span :class="{
                    'text-xs font-normal': true,
                    'text-orange-500': simplifiedCheckerStatus === 'CHECKED' || simplifiedCheckerStatus === 'PENDING' || simplifiedCheckerStatus === 'RESUBMIT'|| simplifiedCheckerStatus === 'VERIFIED',
                    'text-red-500': simplifiedCheckerStatus === 'REJECTED'
                  }">
                    {{ simplifiedCheckerStatus }}
                  </span>
                </div>
              </th>
              <td class="pl-6">{{ claimDetails.checker_name || '-' }}</td>
              <td>{{ claimDetails.checker_designation || '-' }}</td>
              <td>{{ claimDetails.checker_department || '-' }}</td>
              <td>{{ claimDetails.checked_date || '-' }}</td>
            </tr>

            <!-- VERIFIED Status Row -->
            <tr v-if="claimDetails.verifier_name"
              class="text-wrap h-8 text-left text-xs border-t border-gray-400 dark:border-gray-600">
              <th class="text-xs text-center font-semibold border-r border-gray-400 dark:border-gray-600">
                <div
                  class="mx-auto text-xs rounded-full py-2 my-1 text-center w-fit inline-flex items-center px-3 gap-x-2"
                  :class="{
                    'bg-amber-100/60 dark:bg-gray-800': simplifiedVerifierStatus === 'VERIFIED' || simplifiedVerifierStatus === 'PENDING' || simplifiedVerifierStatus === 'RESUBMIT',
                    'bg-red-100/60 dark:bg-gray-800': simplifiedVerifierStatus === 'REJECTED'
                  }">
                  <span :class="{
                    'h-1.5 w-1.5 rounded-full': true,
                    'bg-amber-500': simplifiedVerifierStatus === 'VERIFIED' || simplifiedVerifierStatus === 'PENDING' || simplifiedVerifierStatus === 'RESUBMIT',
                    'bg-red-500': simplifiedVerifierStatus === 'REJECTED'
                  }"></span>
                  <span :class="{
                    'text-xs font-normal': true,
                    'text-amber-500': simplifiedVerifierStatus === 'VERIFIED' || simplifiedVerifierStatus === 'PENDING' || simplifiedVerifierStatus === 'RESUBMIT',
                    'text-red-500': simplifiedVerifierStatus === 'REJECTED'
                  }">
                    {{ simplifiedVerifierStatus }}
                  </span>
                </div>
              </th>
              <td class="pl-6">{{ claimDetails.verifier_name || '-' }}</td>
              <td>{{ claimDetails.verifier_designation || '-' }}</td>
              <td>{{ claimDetails.verifier_department || '-' }}</td>
              <td>{{ claimDetails.verified_date || '-' }}</td>
            </tr>

            <!-- APPROVED -->
            <tr v-if="['APPROVED', 'REJECTED', 'REIMBURSED'].includes(simplifiedApproverFinStatus)" class="text-wrap h-8 text-left text-xs border-t border-gray-400 dark:border-gray-600">
              <th class="text-xs text-center font-semibold border-r border-gray-400 dark:border-gray-600">
                <div class="mx-auto text-xs rounded-full py-2 my-1 w-fit inline-flex items-center px-3 gap-x-2"
                  :class="{
                    'bg-green-100/60 dark:bg-gray-800': simplifiedApproverFinStatus === 'APPROVED',
                    'bg-amber-100/60 dark:bg-gray-800': simplifiedApproverFinStatus === 'RESUBMIT',
                    'bg-red-100/60 dark:bg-gray-800': simplifiedApproverFinStatus === 'REJECTED',
                    'bg-slate-100/60 dark:bg-gray-800': simplifiedApproverFinStatus === 'PENDING'
                  }">
                  <span class="h-1.5 w-1.5 rounded-full"
                    :class="{
                      'bg-green-500': simplifiedApproverFinStatus === 'APPROVED',
                      'bg-amber-500': simplifiedApproverFinStatus === 'RESUBMIT',
                      'bg-red-500': simplifiedApproverFinStatus === 'REJECTED',
                      'bg-slate-500': simplifiedApproverFinStatus === 'PENDING'
                    }"></span>
                  <span
                    :class="{
                      'text-green-500': simplifiedApproverFinStatus === 'APPROVED',
                      'text-amber-500': simplifiedApproverFinStatus === 'RESUBMIT',
                      'text-red-500': simplifiedApproverFinStatus === 'REJECTED',
                      'text-slate-500': simplifiedApproverFinStatus === 'PENDING'
                    }">
                    {{ simplifiedApproverFinStatus }}
                  </span>
                </div>
              </th>
              <td class="pl-6">{{ claimDetails.approver_name || '-' }}</td>
              <td>{{ claimDetails.approver_designation || '-' }}</td>
              <td>{{ claimDetails.approver_department || '-' }}</td>
              <td>{{ claimDetails.approved_date || '-' }}</td>
            </tr>

            <!-- REIMBURSED -->
            <tr v-if="simplifiedFinanceStatus === 'REIMBURSED'" class="text-wrap h-8 text-left text-xs border-t border-gray-400 dark:border-gray-600">
              <th class="text-xs text-center font-semibold border-r border-gray-400 dark:border-gray-600">
                <div class="mx-auto text-xs rounded-full py-2 my-1 w-fit inline-flex items-center px-3 gap-x-2"
                  :class="{
                    'bg-slate-100/60 dark:bg-gray-800': simplifiedFinanceStatus === 'REIMBURSED'
                  }">
                  <span class="h-1.5 w-1.5 rounded-full bg-slate-500"></span>
                  <span class="text-black">
                    {{ simplifiedFinanceStatus }}
                  </span>
                </div>
              </th>
              <td class="pl-6">{{ claimDetails.approver_name || '-' }}</td>
              <td>{{ claimDetails.approver_designation || '-' }}</td>
              <td>{{ claimDetails.approver_department || '-' }}</td>
              <td>{{ claimDetails.approved_date || '-' }}</td>
            </tr>
          </table>
        </div>

        <!-- Remark table -->
        <div>
          <div v-show="!pending"  class="border rounded-lg overflow-x-auto border-gray-400 dark:border-gray-600 my-4"
            >
            <table class="w-full remark-table">
              <thead class="h-8 bg-gray-300 dark:bg-gray-700 rounded-md">
                <th class="pl-6">Remark</th>
              </thead>
              <tr class="h-8 text-left text-xs border-t border-gray-400 dark:border-gray-600">
                <td class="pl-6">{{ remark }}</td>
              </tr>
            </table>
          </div>

          <div class="flex space-x-2 py-2">
            <div v-if="simplifiedVerifierStatus === 'PENDING'" 
                class="detail-table w-full lg:flex-row flex flex-col justify-between items-center">
              <div class="flex space-x-2 justify-between items-center">
                <label class="font-semibold mr-2 mb-4 lg:mb-0">Overall Remark:</label>
                <input class="mx-auto py-1 min-w-[80px] rounded-md border text-xs" type="text"
                      placeholder="Eg. Blurry Receipt Image" v-model="remark" />
              </div>
              <div class="flex">
                <button @click="confirmApprove = true"
                        class="mr-2 text-sm font-semibold py-2 sm:w-24 md:w-36 bg-green-500 hover:bg-green-600 rounded-lg text-white">
                  Verify
                </button>
                <button @click="confirmReject = true"
                        class="text-sm font-semibold py-2 sm:w-24 md:w-36 bg-red-600 hover:bg-red-700 rounded-lg text-white">
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>


        <!-- Approve Confirmation -->
        <div v-show="confirmApprove"
          class="backdrop-blur-md bg-black/50 dark:bg-black/60 w-screen h-screen fixed left-0 top-0 z-50 flex justify-center items-center">
          <div class="bg-white dark:bg-gray-900 w-96 h-52 rounded-xl fixed flex flex-col justify-center items-center">
            <h1 class="text-2xl font-bold">Do you confirm to verify?</h1>
            <div class="flex mt-4">
              <button class="rounded-lg px-4 py-2 w-28 text-lg bg-gray-600 hover:bg-gray-700 text-white"
                @click="confirmApprove = false">
                Back
              </button>
              <button class="rounded-lg px-4 py-2 w-28 text-lg bg-green-600 hover:bg-green-700 text-white ml-2"
                @click="ConfirmApprove">
                Confirm
              </button>
            </div>
          </div>
        </div>

        <!-- Resubmit Confirmation -->
        <div v-show="confirmResubmit"
          class="bg-gray-500 dark:bg-gray-700 dark:bg-opacity-30 bg-opacity-40 w-screen h-screen fixed left-0 top-0 z-50 flex justify-center items-center">
          <div
            class="bg-white dark:bg-gray-900 w-96 h-52 rounded-xl fixed flex flex-col justify-center items-center px-1">
            <h1 class="text-2xl font-bold text-center">
              Please write the remark to return to claimant for resubmission?
            </h1>
            <input
              class="py-4 px-2 w-4/5 rounded-lg mt-4 outline-none border-gray-300 dark:border-gray-600 dark:bg-gray-500 border-2"
              placeholder="Eg. Blurry Receipt Image" v-model="remark" />
            <div class="flex mt-4">
              <button class="rounded-lg px-4 py-2 w-28 text-lg bg-gray-600 hover:bg-gray-700 text-white"
                @click="confirmResubmit = false">
                Back
              </button>
              <button class="rounded-lg px-4 py-2 w-28 text-lg bg-green-600 hover:bg-green-700 text-white ml-2"
                @click="ConfirmResubmit()">
                Confirm
              </button>
            </div>
          </div>
        </div>

        <!-- Reject Confirmation -->
        <div v-show="confirmReject"
          class="bg-black backdrop-filter backdrop-blur-sm bg-opacity-50  dark:bg-gray-700 dark:bg-opacity-30 bg-opacity-40 w-screen h-screen fixed left-0 top-0 z-50 flex justify-center items-center">
          <div
            class="bg-white dark:bg-gray-900 w-96 px-8 h-52 rounded-xl fixed flex flex-col justify-center items-center">
            <h1 class="text-xl font-bold">Please write the remark to reject</h1>
            <input
              class="py-4 px-2 w-4/5 rounded-lg mt-4 outline-none border-gray-300 dark:border-gray-600 dark:bg-gray-500 border-2"
              placeholder="Eg. Blurry Receipt Image" v-model="remark" />
            <div class="flex mt-4">
              <button class="rounded-lg px-4 py-2 w-28 text-lg bg-gray-600 hover:bg-gray-700 text-white"
                @click="confirmReject = false">
                Back
              </button>
              <button class="rounded-lg px-4 py-2 w-28 text-lg bg-red-600 hover:bg-red-700 text-white ml-2"
                @click="ConfirmReject">
                Reject
              </button>
            </div>
          </div>
        </div>

        <!-- Approve Success Notification -->
        <div class="fixed left-0 top-0 flex justify-center items-center z-50 w-screen h-screen" v-if="approveSuccess">
          <div class="bg-gray-100 dark:bg-gray-500 px-10 py-3 rounded-full z-50 flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green"
              class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.745 3.745 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
            </svg>

            <h1>VERIFIED SUCCESSFULLY</h1>
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
        <div class="w-screen h-screen fixed z-50 flex justify-center items-center top-0 left-0 backdrop-blur-md"
          v-if="loading">
          <div class="absolute w-screen h-screen bg-gray-900 opacity-30"></div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" class="w-16 h-16 z-50">
            <circle transform="rotate(0)" transform-origin="center" fill="none" stroke="blue" stroke-width="10"
              stroke-linecap="round" stroke-dasharray="230 1000" stroke-dashoffset="0" cx="100" cy="100" r="70">
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="2"
                repeatCount="indefinite"></animateTransform>
            </circle>
          </svg>
          <h1 class="text-gray-50 font-semibold z-50 ml-2 text-lg">
            {{ loadingText }} Data...
          </h1>
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
      oem: [],
      showOemList: false,

      singleRemarks: [],
      singleColumnRemarks: [],
      userData: {},
      sim: [],
      showSimList: false,
      participants: [],
      showParticipantsList: false,
      oe: [],
      showOEsList: false,
      files: [],
      showFileList: false,

      dropdownOpen: false,

      seeMore: false,
      confirmReject: false,
      confirmApprove: false,
      confirmResubmit: false,
      approveSuccess: false,
      loading: false,
      loadingText: '',

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
      const status = this.adminStatus?.trim()?.toUpperCase();
      switch (status) {
        case 'APPROVED BY FINANCE':
        case 'APPROVED BY FINANCE. WAITING FOR REIMBURSED':
          return 'APPROVED';
        case 'REJECTED BY FINANCE':
          return 'REJECTED';
        case 'RESUBMIT REQUESTED BY FINANCE':
          return 'RESUBMIT';
        case 'REIMBURSED':
          return 'REIMBURSED';
        case 'OPEN':
        case 'VERIFIED. WAITING FOR APPROVER.':
          return 'PENDING';
        default:
          return 'PENDING';
      }
    },

    simplifiedApproverFinStatus() {
      const status = this.adminStatus?.trim()?.toUpperCase();
      switch (status) {
        case 'APPROVED BY FINANCE':
        case 'APPROVED BY FINANCE. WAITING FOR REIMBURSED':
        case 'REIMBURSED':
          return 'APPROVED';
        case 'REJECTED BY FINANCE':
          return 'REJECTED';
        case 'RESUBMIT REQUESTED BY FINANCE':
          return 'RESUBMIT';
        case 'OPEN':
        case 'VERIFIED. WAITING FOR APPROVER.':
          return 'PENDING';
        default:
          return 'PENDING';
      }
    },

    simplifiedApproverStatus() {
      switch (this.adminStatus) {
        case 'APPROVED BY FINANCE':
          return 'APPROVED';
        case 'REJECTED BY FINANCE':
          return 'REJECTED';
        case 'RESUBMIT REQUESTED BY FINANCE':
          return 'RESUBMIT';
        case 'REIMBURSED':
          return 'REIMBURSED';
        case 'OPEN':
        case 'VERIFIED. WAITING FOR APPROVER.':
          return 'PENDING';
        default:
          return this.adminStatus;
      }
    },
    simplifiedVerifierStatus() {
      const status = this.adminStatus?.trim()?.toUpperCase();
      switch (status) {
        case 'CHECKED BY CHECKER. WAITING FOR VERIFIER':
          return 'CHECKED';
        case 'VERIFIED. WAITING FOR APPROVER.':
        case 'APPROVED BY FINANCE':
        case 'APPROVED BY FINANCE. WAITING FOR REIMBURSED':
        case 'REIMBURSED':
          return 'VERIFIED';
        case 'REJECTED BY CHECKER':
        case 'REJECTED BY VERIFIER.':
        case 'REJECTED BY FINANCE':
          return 'REJECTED';
        case 'RESUBMIT REQUESTED BY FINANCE':
        case 'RESUBMIT':
          return 'RESUBMIT';
        case 'OPEN':
          return 'PENDING';
        default:
          return 'PENDING';
      }
    },

    simplifiedCheckerStatus() {
      const status = this.adminStatus?.trim()?.toUpperCase();
      switch (status) {
        case 'CHECKED BY CHECKER. WAITING FOR VERIFIER':
        case 'VERIFIED. WAITING FOR APPROVER.':
        case 'APPROVED BY FINANCE':
        case 'APPROVED BY FINANCE. WAITING FOR REIMBURSED':
        case 'REIMBURSED':
        case 'REJECTED BY VERIFIER.':
        case 'REJECTED BY FINANCE':
          return 'CHECKED';
        case 'REJECTED BY CHECKER':
          return 'REJECTED';
        case 'RESUBMIT REQUESTED BY FINANCE':
        case 'RESUBMIT':
          return 'RESUBMIT';
        case 'OPEN':
          return 'PENDING';
        default:
          return 'PENDING';
      }
    },
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    selectStatus(status) {
      this.selectedStatus = status;
      this.dropdownOpen = false;

      if (status.label == 'Reimbursed') {
        this.confirmReimburse = true;
      }
    },
    async FetchClaimDetails() {
      try {
        this.loadingText = 'Uploading';
        this.loading = true;
        const response = await axios.get('http://172.28.28.116:6165/api/User/GetClaimDetails/' + this.referenceNumber);
        this.loading = false;
        this.claimDetails = response.data.result;
        this.adminStatus = this.claimDetails.admin_status
        console.log("get claimdetails : ", this.claimDetails);
        // console.log("get admin status", this.adminStatus);

        switch (this.adminStatus) {
          case 'VERIFIED. WAITING FOR APPROVER.':
            this.verified = true;
            this.pending = false;
            this.remark = this.claimDetails.comment;
            break;

          case 'CHECKED BY CHECKER. WAITING FOR VERIFIER':
            this.checked = true;
            this.pending = false;
            this.remark = this.claimDetails.comment;
            break;

          case 'APPROVED BY FINANCE':
            if (this.claimDetails.admin_status.includes('APPROVER')) {
              this.verified = true;
              this.checked = true;
              this.approved = true;
              this.pending = true;
            } else {
              this.verified = true;
              this.checked = true;
              this.approved = true;
              this.approvedFinance = true;
              this.pending = false;
            }
            this.remark = this.claimDetails.comment;
            break;

          case 'REJECTED BY VERIFIER.':
            if (this.claimDetails.admin_status.includes('VERIFIER')) {
              this.rejectVerifier = true;
            } else if (this.claimDetails.admin_status.includes('CHECKER')) {
              this.verified = true;
              this.rejectChecker = true;
            } else if (this.claimDetails.admin_status.includes('APPROVER')) {
              this.verified = true;
              this.checked = true;
              this.rejectApprover = true;
            } else if (this.claimDetails.admin_status.includes('FINANCE')) {
              this.verified = true;
              this.checked = true;
              this.approved = true;
              this.rejectFinance = true;
            }
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

          default:
            break;
        }

        // console.log(this.adminStatus);
      } catch (error) {
        console.error("Error while fetching claims details:", error);
        throw error;
      }
    },
    async FetchClaimDatasDetails() {
      this.claimDatasDetails = [];
      this.claimDataTotalAmount = [];
      this.claimDatas = [];
      try {
        try {
          const response = await axios.get(
            ' http://172.28.28.116:6239/api/User/GetLocalOutstation/' +
            this.referenceNumber
          );
          const result = response.data.result;
          // console.log(result, 'local outstation');
          let details = [];
          let amount = 0;
          
          for (let i in result) {
            amount += result[i].total_fee;
            const editedDetail = {
              Date_Event: result[i].date_event,
              'Return_Date': result[i].return_date,
              'Vehicle Number':result[i].vehicle_no,
              'Vehicle Model':result[i].vehicle_model,
              Starting_Point: result[i].starting_point,
              End_Point: result[i].end_point,
              'Mileage (KM)': Number(result[i].mileage_km).toFixed(2),
              'Type of Petrol':result[i].type_petrol,
              'Petrol (Litre)':Number(result[i].petrol_perlitre).toFixed(2),
              'Fare': Number(result[i].fare).toFixed(2),
              'Meal_Allowance (RM)': result[i].meal_allowance,
              'Accomodation': result[i].accommodation,
              'Park_Fee (RM)': Number(result[i].park_fee).toFixed(2),
              'Toll_Fee (RM)': Number(result[i].toll_fee).toFixed(2),
              Transport_Specification: result[i].transport_specification,
              Transport_Mode: result[i].transport_mode,
              Trip_Mode: result[i].trip_mode,
              'Petrol/EV (RM)': Number(result[i].total_mileage).toFixed(2),
              'Total_Fee (RM)': Number(result[i].total_fee).toFixed(2),
              Attachments: result[i].files,
              comment: result[i].comment,
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
            ' http://172.28.28.116:6239/api/User/GetOverseasOutstation/' +
            this.referenceNumber
          );
          const result = response.data.result;
          // console.log("Overseas data:", result);
          let details = [];
          let amount = 0;
          for (let i in result) {
            const oem = result[i].oem || [];
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
            const mealAllowance = result[i].meal_allowance || 0;
            // const oemAmount = result[i].oem?.[0]?.amount || 0;
            let oemTotal = 0;
            if (Array.isArray(result[i].oem)) {
              oemTotal = result[i].oem.reduce((sum, item) => {
                return sum + (parseFloat(item.amount) || 0);
              }, 0);
            }

            amount = Number(mealAllowance) + oemTotal;
            // amount = result[i].meal_allowance + result[i].oem.amount;
            const editedDetail = {
              Date: result[i].date_event,
              'Return_date': result[i].return_date,
              Description: result[i].description,
              'Meal_Allowance_(RM)': Number(result[i].meal_allowance).toFixed(2),
              'Total_Fee(RM)': Number(result[i].total_fee).toFixed(2),
              Others_Expenses: buildFullExpenseTable(),
              Attachments: result[i].files,
              Tab_Title: 'Overseas Outstation',
              comment: result[i].comment,
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
            ' http://172.28.28.116:6239/api/User/GetRefreshment/' +
            this.referenceNumber
          );
          const result = response.data.result;
          let details = [];
          let amount = 0;
          for (let i in result) {
            const sim = result[i].sim || [];
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

            amount += result[i].total_fee;
            const editedDetail = {
              'Type_of_Refreshment': result[i].refreshment_type,
              Date: result[i].date_event,
              'Reference': result[i].reference_type,
              Venue: result[i].venue_name,
              Company: result[i].company_name,
              'Total_Fee(RM)': Number(result[i].total_fee).toFixed(2),
              Staff_Involved: buildFullExpenseTable(),
              Attachments: result[i].files,
              comment: result[i].comment,
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
            'http://172.28.28.116:6165/api/User/GetEntertainment/' +
            this.referenceNumber
          );
          const result = response.data.result;
        // console.log("Get entertainment", result);
          let details = [];
          let amount = 0;
          for (let i in result) {
            const participants = result[i].participants || [];
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
            amount += result[i].total_fee;
            const editedDetail = {
              'Type_of_Entertainment': result[i].entertainment_type,
              Date: result[i].date_event,
              'Reference': result[i].description,
              Venue: result[i].venue_name,
              Company: result[i].company_name,
              'Total_Fee(RM)': Number(result[i].total_fee).toFixed(2),
              Participants: buildFullExpenseTable(),
              Attachments: result[i].files,
              comment: result[i].comment,
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
            'http://172.28.28.116:6165/api/User/GetMedicalLeave/' +
            this.referenceNumber
          );
          const result = response.data.result;
          let details = [];
          let amount = 0;
          for (let i in result) {
            amount += result[i].claim_amount;
            const editedDetail = {
              IC_Number: result[i].ic_number,
              'Medical_Category': result[i].medical_category,
              'Reason': result[i].reason,
              Date: result[i].date_leave_taken,
              'Clinic_Name': result[i].clinic_name
                ? result[i].clinic_name
                : result[i].clinic_selection,
              'Reason_Different_Clinic': result[i].reason_different,
              'Bank_Name': result[i].bank_name,
              'Bank_Holder': result[i].bank_holder,
              'Bank_Account': result[i].bank_account,
              'Total_Fee(RM)': Number(result[i].claim_amount).toFixed(2),
              Attachments: result[i].files,
              Tab_Title: 'Medical Leave',
              comment: result[i].comment,
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
            'http://172.28.28.116:6165/api/User/GetHandphone/' + this.referenceNumber
          );
          const result = response.data.result;
          let details = [];
          let amount = 0;
          for (let i in result) {
            amount += result[i].claim_amount;
            const editedDetail = {
              IC_Number: result[i].ic_number,
              Claim_Month: result[i].claim_month,
              Claim_Year: result[i].claim_year,
              'Bank_Name': result[i].bank_name,
              Bank_Holder: result[i].bank_holder,
              Bank_Account: result[i].bank_account,
              'Total_Fee(RM)': Number(result[i].claim_amount).toFixed(2),
              Attachments: result[i].files,
              Tab_Title: 'Handphone Bill',
              comment: result[i].comment,
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
            ' http://172.28.28.116:6239/api/User/GetOthers/' + this.referenceNumber
          );
          const result = response.data.result;
          let details = [];
          let amount = 0;
          for (let i in result) {
            amount += result[i].total_fee;
            const editedDetail = {
             'Expense_Name': result[i].expense_name,
              Description: result[i].description,
              Date: result[i].expense_date,
              'Total_Fee(RM)': Number(result[i].total_fee).toFixed(2),
              Attachments: result[i].files,
              Tab_Title: 'Other',
              comment: result[i].comment,
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

          console.log("claimDatas verifier:",this.claimDatas, 'claimDatas');
          console.log("claimDatasDetails verifier:",this.claimDatasDetails);
        } catch (e) {
          console.error('Error processing final claim data:', e);
        }
      } catch (e) {
        console.error('Fatal error in FetchClaimDatasDetails:', e);
      }
    },

    PrintSummary() {
      const printStyles = `
        @page {
          size: A4 landscape;
        }
      `;
      const styleSheet = document.createElement('style');
      styleSheet.type = 'text/css';
      styleSheet.innerHTML = printStyles;
      document.head.appendChild(styleSheet);

      print();
    },
    // click function after confirm the approve
    ConfirmApprove() {
      this.confirmApprove = false;
      this.ApproveOrReject('Verify');
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
        .get(` http://172.28.28.116:6239/api/User/GetEmployeeById/${username_id}`)
        .then((response) => {
          userData = {
            userName: response.data.result[0].name,
            department: response.data.result[0].department,
            designation: response.data.result[0].position_title,
          };

          // console.log(userData);
        });
      return userData;
    },
    // If any single remark is change, save in the array
    UpdateSingleRemark(event, uc, tab) {
    //  console.log(this.singleRemarks);

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
      // this.pending = false;
      // const userData = await this.GetUserData();
      
      this.singleRemarks.forEach((remark) => {
        let data = {
          verifier_comment: remark.remark,
          unique_code: remark.unique_code,
        };
        if (remark.Tab_Title == 'Local Outstation') {
          axios.put(
            ' http://172.28.28.116:6239/api/Verifier/VerifierLocal',
            data
          );
        } else if (remark.Tab_Title == 'Overseas Outstation') {
          axios.put(
            ' http://172.28.28.116:6239/api/Verifier/VerifierOverseas',
            data
          );
        } else if (remark.Tab_Title == 'Staff Refreshment') {
          axios.put(
            ' http://172.28.28.116:6239/api/Verifier/VerifierStaffRefreshment',
            data
          );
        } else if (remark.Tab_Title == 'Entertainment') {
          axios.put(
            ' http://172.28.28.116:6239/api/Verifier/VerifierEntertainment',
            data
          );
        } else if (remark.Tab_Title == 'Other') {
          axios.put(' http://172.28.28.116:6239/api/Verifier/VerifierOthers', data);
        }
      });

      // Post the overall verifier feedback based on AoR
      const feedbackData = {
        verifier_feedback: this.remark ? this.remark : '',
        reference_number: this.claimDetails.reference_number,
        report_name: this.claimDetails.report_name === '-' ? '-' : this.claimDetails.report_name,
        verifier_name: this.claimDetails.verifier_name === '-' ? '-' : this.claimDetails.verifier_name,
        requester_email: this.claimDetails.email === '-' ? '-' : this.claimDetails.email,
      };

      if (AoR === 'Verify') {
        try {
          this.approve = true;
          this.loadingText = 'Uploading';
          this.loading = true;

          const response = await axios.put(' http://172.28.28.116:6239/api/Verifier/VerifierFeedback', {
            ...feedbackData,
            admin_status: 'VERIFIED. WAITING FOR APPROVER',
          });

          this.approveSuccess = true;
          this.loading = false;

          if (response.status === 200) {
            // Show success badge
            this.approveSuccess = true;

            // Hide after 2s
            setTimeout(() => {
              this.approveSuccess = false;
            }, 2000);

            // Fetch & refresh
            await this.FetchClaimDetails();
            await this.FetchClaimDatasDetails();

            // Force state update for button logic
            this.adminStatus = this.claimDetails.admin_status;
            this.approvedFinance = this.adminStatus === 'VERIFIED. WAITING FOR APPROVER.  ';
            this.approved = true;
            this.pending = false;

            // Optional scroll
            // window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        } catch (error) {
          console.error('Error during Approve:', {
            message: error.message,
            response: error.response?.data,
            status: error.response?.status
          });
          this.loading = false;
        }
      } else if (AoR === 'Reject') {
        this.rejectVerifier = true;
        this.loadingText = 'Uploading';
        this.loading = true;

        try {
          await axios.put(' http://172.28.28.116:6239/api/Verifier/VerifierFeedback', {
            ...feedbackData,
            admin_status: 'REJECTED BY VERIFIER',
          });

          this.loading = false;
        } catch (error) {
          this.loading = false;
          console.error('Error submitting reject feedback:', error);
        }
      } else if (AoR === 'Resubmit') {
        this.resubmitVerifier = true;
        this.loadingText = 'Uploading';
        this.loading = true;

        try {
          await axios.put(' http://172.28.28.116:6239/api/Verifier/VerifierFeedback', {
            ...feedbackData,
            admin_status: 'RESUBMIT REQUESTED BY VERIFIER',
          });

          this.loading = false;
        } catch (error) {
          this.loading = false;
          console.error('Error submitting resubmit feedback:', error);
        }
      }

      // Refresh the latest claim data
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
    showOtherExpenses(val) {
      this.oe = val;
      this.showOEsList = true;
    },

    ShowFile(val) {
      if (Array.isArray(val)) {
        this.files = val;
        this.showFileList = true;
      } else if (val.userId && val.uniqueCode) {
        axios
          .get(`https://esvcportal.pktgroup.com/api/file/api/Files/GetMultiImage/${val.userId}/${val.uniqueCode}`)
          .then((response) => {
            this.files = response.data.result || [];
            this.showFileList = true;
          })
          .catch((error) => {
            console.error("Error fetching files:", error);
          });
      } else {
        console.error("Invalid file data provided.");
      }
    },
    // ShowFile(val) {
    //   this.files = val;
    //   this.showFileList = true;
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
      vertical-align: middle;
      
  }
  tfoot td.text-right {
      text-align: right !important;
  }
  table {
    table-layout: auto;
    width: 100%;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  td table th,
  td table td {
    white-space: nowrap;
    padding: 4px 6px;
    vertical-align: top;
    border: 1px solid #ccc;
  }
</style>

<style scoped>
@media print {
  @page {
    size: A4 landscape;
  }

  * {
    color: black;
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

  .details h1 {
    font-size: 12px;
    margin-bottom: 6px;
    margin-top: 6px;
  }

  .print-div {
    box-shadow: none;
    border: none;
  }

  body *:not(#summaryPrint):not(#summaryPrint *) {
    visibility: hidden !important;
  }

  .detail-table,
  .status-table,
  .remark-table {
    width: 100% !important;
    border-collapse: collapse !important;
    page-break-inside: avoid !important;
    overflow: visible !important;
    table-layout: fixed !important;
  }

  .status-table th,
  .status-table td,
  .remark-table th,
  .remark-table td {
    font-size: 10px !important;
    white-space: normal !important;
    overflow-wrap: break-word !important;
    vertical-align: top !important;
  }

  .status-table th:first-child,
  .remark-table thead th {
    font-size: 10px !important;
    font-weight: bold !important;
    text-align: center !important;
  }

  
  .overflow-x-auto,
  .overflow-y-auto,
  .overflow-auto {
    overflow: visible !important;
  }

  table {
    table-layout: auto !important;
    width: 100% !important;
    page-break-inside: avoid !important;
    border-collapse: collapse !important;
    font-size: 12px !important;
    padding: 2px 4px !important;
    line-height: 1.2 !important;

  }
  
  th, td {
    page-break-inside: avoid !important;
    word-wrap: break-word !important;
    white-space: normal !important;
    overflow: visible !important;
    font-size: 10px !important;
    padding: 2px 4px !important;
    line-height: 1.2 !important;
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
    margin: 0 auto;
    width: 100% !important;
    max-width: 100% !important;
    padding: 0 !important;
    box-sizing: border-box;
  }

  #summaryPrint div {
    visibility: visible !important;
    width: 100% !important;
    box-shadow: 0;
  }

  #summaryPrint button {
    display: none;
  }

  #total {
    position: absolute;
    right: 10px;
  }

  .tab-title {
    font-size: 12px;
    line-height: 30px;
  }

  #table-overflow {
    width: 100%;
    overflow: hidden;
    margin-bottom: 15px !important;
  }

  #table-overflow table {
    width: 100%;
  }

  #table-overflow table tr {
    height: 120%;
    width: 100%;
    font-size: 10px !important;
  }

  #table-overflow table th {
    padding: 0 auto;
    margin: 0 auto;
    font-size: 8px !important;
    height: 10px;
    width: 10px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    line-height: 10px !important;
    vertical-align: middle !important;
  }

  #summaryPrint #table-overflow table td {
    padding: 0 auto;
    margin: 0 auto;
    font-size: 10px !important;
    height: 10px;
    width: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    line-height: 10px !important;
    vertical-align: middle !important;
  }

  #hidden {
    display: none;
  }

  #staffDetails h1 {
    font-size: 10px !important;
    line-height: 8px;
    padding: 0;
    margin: 0;
    vertical-align: middle !important;
  }

  #remarkText {
    font-size: 10px !important;
    line-height: 8px;
    padding: 0;
    margin: 0;
    vertical-align: middle !important;
  }
}
</style>

