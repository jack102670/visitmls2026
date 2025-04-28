<template>
  <main class="flex-1 text overflow-y-auto bg-[#CED1DA] dark:bg-gray-900 dark:text-white p-4 sm:ml-64">
    <div class="container mx-auto text-xs lg:text-base">
      <div id="summaryPrint"
        class="relative overflow-hidden bg-[#f7fbff] dark:bg-gray-900 border-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
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
              class="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white rounded-md px-8 text-sm font-bold py-2">
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
                <tr class="h-8 text-left align-center text-xs hover:bg-gray-200 dark:hover:bg-gray-800"
                  v-for="(item, index) in detail" :key="index">
                  <td class="text-center justify-between items-center flex">
                    <div class="justify-center items-center flex py-2 align-middle">
                      <!-- Render input only if status is OPEN and no existing comment -->
                      <input
                        v-if="statusApprover === 'OPEN' && (!item.comment || item.comment.trim() === '')"
                        @input="UpdateSingleRemark($event, item.unique_code, item.Tab_Title)"
                        type="text"
                        class="p-1 text-xs w-full rounded-md outline-none border-gray-400 dark:border-gray-600 dark:bg-gray-700 border" />

                      <!-- Render static remark if status is not OPEN or a comment exists -->
                      <h1
                        id="remarkText"
                        v-else-if="item.comment && item.comment.trim() !== ''"
                        class="m-1 px-2 py-1 rounded-md text-xs mx-auto w-fit block dark:bg-sky-950 text-center">
                        {{ item.comment }}
                      </h1>           
                    </div>

                  </td>
                  <td class="text-center font-normal px-3 py-1 align-middle" v-for="(val, key, i) in item" :key="i">
                    {{
                      key == 'Attachments'
                        ? ''
                        : key == 'Staff_Involved'
                          ? ''
                          : key == 'Participants'
                            ? ''
                            : val
                    }}

                    <!-- See More button for show list of staff involved -->
                    <div v-show="key == 'Staff_Involved'" id="staffDetails">
                      <h1 @click="showStaffInvolved(val)"
                        class="bg-gray-500 hover:bg-gray-600 cursor-pointer text-white p-1 rounded-lg">
                        See More
                      </h1>
                    </div>

                    <!-- See More button for show list of staff involved -->
                    <div v-show="key == 'Participants'" id="staffDetails">
                      <h1 @click="showParticipants(val)"
                        class="bg-gray-500 hover:bg-gray-600 cursor-pointer text-white p-1 rounded-lg">
                        See More
                      </h1>
                    </div>

                    <!-- Click to pop up files -->
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
                  class="border-t border-gray-400 dark:border-gray-600 h-8 text-dark dark:text-white text-base font-semibold">
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
          <table class="w-full">
            <thead class="h-8 font-semibold bg-gray-300 dark:bg-gray-700 text-left rounded-md space-x-2">
              <th class="rounded-tl-md text-center border-r border-gray-400 dark:border-gray-600">
                STATUS
              </th>
              <th class="">NAME</th>
              <th class="">DESIGNATION</th>
              <th class="">DEPARTMENT</th>
              <th class="">DATE</th>
            </thead>
            <tbody>
              <!-- Show only OPEN if not yet reimbursed -->
              <tr v-if="getSimplifiedStatus(statusApprover) === 'PENDING'" class="text-wrap text-left text-xs border-t border-gray-400 dark:border-gray-600">
                <th class="text-xs text-center font-semibold border-r border-gray-400 dark:border-gray-600">
                  <div class="mx-auto text-xs rounded-full py-2 my-1 text-center w-fit inline-flex items-center px-3 gap-x-2 bg-amber-100/60 dark:bg-gray-800">
                    <span class="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                    <span class="text-xs font-normal text-amber-500">PENDING</span>
                  </div>
                </th>
                <td class="pl-6">{{ claimDetails.approver_name }}</td>
                <td>{{ claimDetails.approver_designation }}</td>
                <td>{{ claimDetails.approver_department }}</td>
                <td>{{ claimDetails.approved_date }}</td>
              </tr>

              <!-- Show only APPROVED if not yet reimbursed -->
              <tr v-else-if="getSimplifiedStatus(statusApprover) === 'APPROVED' || getSimplifiedStatus(statusApprover) === 'PENDING'" class="text-wrap text-left text-xs border-t border-gray-400 dark:border-gray-600">
                <th class="text-xs text-center font-semibold border-r border-gray-400 dark:border-gray-600">
                  <div class="mx-auto text-xs rounded-full py-2 my-1 text-center w-fit inline-flex items-center px-3 gap-x-2 bg-green-100/60 dark:bg-gray-800">
                    <span class="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                    <span class="text-xs font-normal text-green-500">APPROVED</span>
                  </div>
                </th>
                <td class="pl-6">{{ claimDetails.approver_name || '-'}}</td>
                <td>{{ claimDetails.approver_designation || '-'}}</td>
                <td>{{ claimDetails.approver_department || '-'}}</td>
                <td>{{ claimDetails.approved_date || '-'}}</td>
              </tr>

              <!-- Show both APPROVED and REIMBURSED -->
              <template v-else-if="getSimplifiedStatus(statusApprover) === 'REIMBURSED'">
                <tr class="text-wrap text-left text-xs border-t border-gray-400 dark:border-gray-600">
                  <th class="text-xs text-center font-semibold border-r border-gray-400 dark:border-gray-600">
                    <div class="mx-auto text-xs rounded-full py-2 my-1 text-center w-fit inline-flex items-center px-3 gap-x-2 bg-green-100/60 dark:bg-gray-800">
                      <span class="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                      <span class="text-xs font-normal text-green-500">APPROVED</span>
                    </div>
                  </th>
                  <td class="pl-6">{{ claimDetails.approver_name || '-'}}</td>
                  <td>{{ claimDetails.approver_designation || '-'}}</td>
                  <td>{{ claimDetails.approver_department || '-'}}</td>
                  <td>{{ claimDetails.approved_date || '-'}}</td>
                </tr>
                <tr class="text-wrap text-left text-xs border-t border-gray-400 dark:border-gray-600">
                  <th class="text-xs text-center font-semibold border-r border-gray-400 dark:border-gray-600">
                    <div class="mx-auto text-xs rounded-full py-2 my-1 text-center w-fit inline-flex items-center px-3 gap-x-2 bg-slate-100/60 dark:bg-gray-800">
                      <span class="h-1.5 w-1.5 rounded-full bg-black"></span>
                      <span class="text-xs font-normal text-black dark:text-white">REIMBURSED</span>
                    </div>
                  </th>
                  <td class="pl-6">{{ claimDetails.approver_name || '-'}}</td>
                  <td>{{ claimDetails.approver_designation || '-'}}</td>
                  <td>{{ claimDetails.approver_department || '-'}}</td>
                  <td>{{ claimDetails.approved_date || '-'}}</td>
                </tr>
              </template>

              <!-- Show only REJECTED if not yet reimbursed -->
              <tr v-else-if="getSimplifiedStatus(statusApprover) === 'REJECTED'" class="text-wrap text-left text-xs border-t border-gray-400 dark:border-gray-600">
                <th class="text-xs text-center font-semibold border-r border-gray-400 dark:border-gray-600">
                  <div class="mx-auto text-xs rounded-full py-2 my-1 text-center w-fit inline-flex items-center px-3 gap-x-2 bg-red-100/60 dark:bg-gray-800">
                    <span class="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                    <span class="text-xs font-normal text-red-500">REJECTED</span>
                  </div>
                </th>
                <td class="pl-6">{{ claimDetails.approver_name || '-'}}</td>
                <td>{{ claimDetails.approver_designation || '-'}}</td>
                <td>{{ claimDetails.approver_department || '-'}}</td>
                <td>{{ claimDetails.approved_date || '-'}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        

        <!-- Remark table -->
        <!-- v-show="approve || verified || reimbursed || resubmit || claimDetails.admin_status === 'REJECTED BY HR & ADMIN' -->
        <div v-show="!pending"
          class="border rounded-lg overflow-x-auto border-gray-400 dark:border-gray-600 my-4">
          <table class="w-full">
            <thead class="h-8 bg-gray-300 dark:bg-gray-700 rounded-md">
              <th class="uppercase">Remark</th>
            </thead>
            <tr class="h-8 text-left text-xs border-t border-gray-400 dark:border-gray-600">
              <td class="text-xs"><p class="px-2 font-semibold">{{ remark }}</p></td>
            </tr>
          </table>
        </div>

        <div class="flex space-x-2 py-2">
          <!-- Remark/approve/reject/reimburshed button -->
          <div class="w-full">
            <div
              v-if="claimDetails.admin_status !== 'APPROVED BY HR & ADMIN' && claimDetails.admin_status !== 'REJECTED BY HR & ADMIN' && claimDetails.admin_status !== 'REIMBURSED' &&  claimDetails.admin_status === 'OPEN'"
              class="w-full flex items-center justify-between">
              <div class="flex items-center">
                <label class="font-semibold whitespace-nowrap mr-2">Overall Remark:</label>
                <input class="mx-auto py-2 min-w-[80px] rounded-md border text-xs" type="text"
                  placeholder="Eg. Blurry Receipt Image" v-model="remark" />
              </div>
              <div class="flex space-x-2">
                <button @click="confirmApprove = true"
                  class="mr-2 text-sm font-semibold py-2 sm:w-24 md:w-36 bg-green-500 hover:bg-green-600 rounded-lg text-white">
                  Approve
                </button>
                <button @click="confirmReject = true"
                  class="text-sm font-semibold py-2 sm:w-24 md:w-36 bg-red-600 hover:bg-red-700 rounded-lg text-white">
                  Reject
                </button>
              </div>
            </div>
            <div v-else-if="claimDetails.admin_status === 'APPROVED BY HR & ADMIN'" class="w-full flex justify-end">
              <div class="my-3">
                <div class="relative inline-block text-left">
                  <div>
                    <button @click="confirmReimburse = true"
                      class="text-sm font-semibold py-2 px-6 bg-green-600 hover:bg-green-700 rounded-lg text-white">
                      Reimburse
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Approve Confirmation -->
        <div v-show="confirmApprove"
          class="bg-black backdrop-filter backdrop-blur-sm bg-opacity-50  dark:bg-gray-700 dark:bg-opacity-30 bg-opacity-40 w-screen h-screen fixed left-0 top-0 z-50 flex justify-center items-center">
          <div class="bg-white dark:bg-gray-900 w-96 h-52 rounded-xl fixed flex flex-col justify-center items-center">
            <h1 class="text-2xl font-bold">Do you confirm to approve?</h1>
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
          class="bg-black backdrop-filter backdrop-blur-sm bg-opacity-50  dark:bg-gray-700 dark:bg-opacity-30 bg-opacity-40 w-screen h-screen fixed left-0 top-0 z-50 flex justify-center items-center backdrop-filter backdrop-blur-sm">
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

        <!-- Reimburse Confirmation -->
        <div v-show="confirmReimburse"
          class="bg-black backdrop-filter backdrop-blur-sm bg-opacity-50  dark:bg-gray-700 dark:bg-opacity-30 bg-opacity-40 w-screen h-screen fixed left-0 top-0 z-50 flex justify-center items-center backdrop-filter backdrop-blur-sm">
          <div class="bg-white dark:bg-gray-900 w-96 h-52 rounded-xl fixed flex flex-col justify-center items-center">
            <h1 class="text-2xl font-bold">Do you confirm to reimburse?</h1>
            <div class="flex mt-4">
              <button class="rounded-lg px-4 py-2 w-28 text-lg bg-gray-600 hover:bg-gray-700 text-white"
                @click="confirmReimburse = false">
                Back
              </button>
              <button class="rounded-lg px-4 py-2 w-28 text-lg bg-green-600 hover:bg-green-700 text-white ml-2"
                @click="ConfirmReimburse()">
                Confirm
              </button>
            </div>
          </div>
        </div>

        <!-- Reject Confirmation -->
        <div v-show="confirmReject"
          class="bg-black backdrop-filter backdrop-blur-sm bg-opacity-50  dark:bg-gray-700 dark:bg-opacity-30 bg-opacity-40 w-screen h-screen fixed left-0 top-0 z-50 flex justify-center items-center backdrop-filter backdrop-blur-sm">
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
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
            </svg>

            <h1>VERIFIED SUCCESSFULLY</h1>
          </div>
        </div>

        <!-- File List -->
        <div v-show="showFileList"
          class="fixed top-0 left-0 w-screen h-screen bg-gray-600/50 z-50 flex justify-center items-center">
          <div class="bg-white max-w-4xl sm:w-4/5 rounded-xl flex flex-col relative p-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="absolute right-3 top-3 size-6" @click="showFileList = false">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            <div class="relative flex w-4/5 mx-auto justify-center">
              <h1 class="text-xl font-semibold my-4">Attachments</h1>
            </div>
            <div v-if="files.length > 0" class="overflow-x-auto p-2">
              <div class=" min-w-full">
                <div class="border rounded-md overflow-hidden border-gray-300 dark:border-gray-600 shadow-sm">
                  <table class="min-w-full divide-y divide-gray-300 dark:divide-gray-600">
                    <thead class="bg-gray-300 dark:bg-gray-700">
                      <th scope="col" class="px-4 py-3 text-center text-xs font-semibold uppercase w-[10%]">
                        No.
                      </th>
                      <th scope="col" class="px-4 py-3 text-left text-xs font-semibold uppercase w-[70%]">
                        File
                      </th>
                      <th scope="col" class="px-4 py-3 text-center text-xs font-semibold uppercase w-[20%]">
                        Action
                      </th>
                    </thead>
                    <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-300 dark:divide-gray-600">
                      <tr v-for="(file, i) in files" :key="i"
                        class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                        <td class="px-4 py-3 text-center text-sm">
                          {{ i + 1 }}
                        </td>
                        <td class="px-4 py-3">
                          <div class="flex items-center space-x-3">
                            <div class="flex-shrink-0 w-20 h-32">
                              <img v-if="['png', 'jpg', 'jpeg'].includes(file.split('.').pop().toLowerCase())"
                                :src="file" alt="attachment" class="w-full h-full object-contain rounded-sm" />
                              <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" class="w-full h-full text-gray-500 dark:text-gray-400">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"
                                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                              </svg>
                            </div>
                            <span class="text-sm text-gray-900 dark:text-gray-200">
                              {{ file.split('/').pop() }}
                            </span>
                          </div>
                        </td>
                        <td class="px-4 py-3 text-center">
                          <button @click="DownloadFile(file, file.split('/').pop())"
                            class="inline-flex items-center justify-center p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                            title="Download file">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                              stroke="currentColor" class="w-5 h-5">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div v-if="files.length <= 0" class="w-full">
              <h1 class="mx-auto text-center font-thin text-gray-500">Empty</h1>
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
import moment from 'moment';
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
      role: 'approver',
      singleRemarks: [],
      singleColumnRemarks: [],
      userData: {},
      files: [],
      showFileList: false,

      seeMore: false,
      confirmReject: false,
      confirmApprove: false,
      confirmReimburse: false,
      confirmResubmit: false,
      approveSuccess: false,
      loading: false,
      loadingText: '',
      rejectApprover: false,
      rejectVerifier: false,
      approve: false,
      verified: false,
      reimbursed: false,
      resubmit: false,
      remark: '',
      statusApprover: 'PENDING',
      claimDetails: [],
      claimDatas: [],
      claimDatasDetails: [],
      claimDataTotalAmount: [],

      keysToExclude: ['Tab_Title', 'unique_code'],
      referenceNumber: 'HS-HR-2024-07-5800',

      outpatientTotal: 0,
      medicalAndDentalTotal: 0
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
  },
  methods: {
    getStatusClass() {
      const status = this.getSimplifiedStatus(this.statusApprover);
      return {
        'bg-orange-200 my-2 dark:bg-orange-500': status === 'PENDING',
        'bg-green-200 my-2 dark:bg-green-500': status === 'APPROVED',
        'bg-red-200 my-2 dark:bg-red-500': status === 'REJECTED',
        'bg-slate-200 my-2 dark:bg-slate-500': status === 'REIMBURSED',
        'text-orange-500 my-2 dark:text-orange-100': status === 'PENDING',
        'text-green-500 my-2 dark:text-green-100': status === 'APPROVED',
        'text-red-500 my-2 dark:text-red-100': status === 'REJECTED',
        'text-black my-2 dark:text-white': status === 'REIMBURSED'
      };
    },

    getSimplifiedStatus(status) {
      if (!status) return 'PENDING';
      const statusMap = {
        'APPROVED BY HR & ADMIN': 'APPROVED',
        'REJECTED BY HR & ADMIN': 'REJECTED',
        'RESUBMIT BY HR & ADMIN': 'RESUBMIT',
        'REIMBURSED BY HR & ADMIN': 'REIMBURSED',
        'OPEN': 'PENDING'
      };
      return statusMap[status] || status;
    },

    async FetchClaimDetails() {
      this.loadingText = 'Fetching';
      this.loading = true;
      try {
        const response = await axios.get(
          `http://172.28.28.116:6165/api/User/GetClaimDetails/${this.referenceNumber}`
        );

        this.loading = false;
        this.claimDetails = response.data.result;
        this.statusApprover = this.claimDetails.admin_status || 'PENDING';


        // Reset all status flags
        this.approve = false;
        this.rejectApprover = false;
        this.resubmit = false;
        this.reimbursed = false;
        this.remark = this.claimDetails.comment;

        // Set the appropriate flag and remark based on status
        switch (this.statusApprover) {
          case 'APPROVED BY HR & ADMIN':
            this.approve = true;
            break;
          case 'REJECTED BY HR & ADMIN':
            this.rejectApprover = true;
            break;
          case 'RESUBMIT BY HR & ADMIN':
            this.resubmit = true;
            break;
          case 'REIMBURSED BY HR & ADMIN':
            this.reimbursed = true;
            break;
            case 'OPEN':
            this.reimbursed = true;
            break;
        }

        // if (this.statusApprover !== 'PENDING') {
        //   this.remark = this.claimDetails.comment;
        // }

     //   console.log("Get application claim details", this.claimDetails);
      } catch (error) {
        this.loading = false;
        console.error('API error:', error.message);
        console.error('Error Details:', {
          message: error.message,
          response: error.response?.data,
          status: error.response?.status,
          statusText: error.response?.statusText,
          validationErrors: error.response?.data?.errors
        });
      }
    },
    async FetchClaimDatasDetails() {
  try {
    this.claimDatasDetails = [];
    this.claimDataTotalAmount = [];
    this.claimDatas = [];

    let outpatientTotal = 0;
    let medicalAndDentalTotal = 0;

    const response = await axios.get(
      'http://172.28.28.116:6165/api/User/GetMedicalLeave/' +
      this.referenceNumber
    );
    const result = response.data.result;
    console.table(response.data.result, ['claim_amount', 'medical_category']);
    console.log("Medical Leave", response.data.result);
    let details = [];
    let amount = 0;
    for (let i in result) {
      amount += result[i].claim_amount;

      if (result[i].medical_category === "Outpatient") {
          outpatientTotal += result[i].claim_amount;
          this.outpatientTotal = outpatientTotal;
        } else if (result[i].medical_category === "Medical Check-Up" || 
                  result[i].medical_category === "Dental") {
          medicalAndDentalTotal += result[i].claim_amount;
          this.medicalAndDentalTotal = medicalAndDentalTotal;
        }
      const editedDetail = {
        IC_Number: result[i].ic_number,
        Date_Leave: result[i].date_leave_taken,
        Reason: result[i].reason,
        Medical_Category: result[i].medical_category,
        Clinic_Name: result[i].clinic_name,
        Reason_Different_Clinic: result[i].reason_different,
        'Bank_Name': result[i].bank_name,
        Bank_Holder: result[i].bank_holder,
        Bank_Account: result[i].bank_account,
        'Total_Fee(RM)': Number(result[i].claim_amount).toFixed(2),
        Attachments: result[i].files,
        Tab_Title: 'Medical Bill',
        unique_code: result[i].unique_code,
        comment: result[i].comment,
      };
      details.push(editedDetail);
    }
    if (details.length > 0) {
      this.claimDatasDetails.push(details);
      this.claimDataTotalAmount.push(amount);
    }
    console.log("Claim datas details", this.claimDataTotalAmount);
    console.log("Outpatient Total:", outpatientTotal);
    console.log("Medical Check-Up & Dental Total:", medicalAndDentalTotal);
  } catch (error) {
    console.error("Error fetching medical leave data:", error);
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
        Bank_Name: result[i].bank_name,
        Bank_Holder: result[i].bank_holder,
        Bank_Account: result[i].bank_account,
        'Total_Fee(RM)': Number(result[i].claim_amount).toFixed(2),
        Attachments: result[i].files,
        Tab_Title: 'Handphone Bill',
        unique_code: result[i].unique_code,
        comment: result[i].comment,
      };
      details.push(editedDetail);
    }
    if (details.length > 0) {
      this.claimDatasDetails.push(details);
      this.claimDataTotalAmount.push(amount);
    }
  } catch (error) {
    console.error("Error fetching handphone data:", error);
  }

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

    // click function after confirm the reimburse
    ConfirmReimburse() {
      this.confirmReimburse = false;
      this.ApproveOrReject('Reimbursed');
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

       //   console.log(userData);
        });
      return userData;
    },

    // If any single remark is change, save in the array
    UpdateSingleRemark(event, uc, tab) {
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
          this.singleRemarks.splice(index, 1);
        } else {
          this.singleRemarks[index] = { ...this.singleRemarks[index], ...data };
        }
      } else {
        if (data.remark.trim() !== '') {
          this.singleRemarks.push(data);
        }
      }
    },

    //approve or reject action
    async ApproveOrReject(AoR) {
      const userData = await this.GetUserData();
      this.singleRemarks.forEach((remark) => {
        let data = {
          comment: remark.remark,
          unique_code: remark.unique_code,
        };
        if (remark.Tab_Title == 'Medical Bill') {
          axios.put(
            'http://172.28.28.116:6165/api/Admin/Approve_Comment_Medical',
            data
          );
        } else if (remark.Tab_Title == 'Handphone Bill') {
          axios.put(
            'http://172.28.28.116:6165/api/Admin/Approve_Comment_Handphone',
            data
          );
        }
      });
      if (AoR == 'Approve') {
        this.approve = true;
        this.dateApprover = moment(new Date()).format('D MMM YYYY');
        this.loadingText = 'Uploading';
        this.loading = true;

        const approveData = {
          approver_name: userData.userName,
          approver_designation: userData.designation,
          approver_department: userData.department,
          approver_status: 'APPROVED',
          approver_comment: this.remark ? this.remark : '-',
          requester_email: this.claimDetails.email ? this.claimDetails.email : '-',
          requester_name: this.claimDetails.name ? this.claimDetails.name : '-',
          report_name: this.claimDetails.report_name ? this.claimDetails.report_name : '-',
          verifier_email: this.claimDetails.verifier_email ? this.claimDetails.verifier_email : 'test@gmail.com',
          reference_number: this.claimDetails.reference_number,
          

          outpatient_total: Number(this.outpatientTotal).toFixed(2),
          medical_dental_total: Number(this.medicalAndDentalTotal).toFixed(2),
          total_claim_amount: Number(this.outpatientTotal + this.medicalAndDentalTotal).toFixed(2)
          
        };
        console.log("Approved data to be sent to admin Approved-claim-HR:", approveData);
        try {
          const response = await axios.put('http://172.28.28.116:6165/api/Admin/Approve_Claim_HR', approveData)
      //    console.log('API response after approval', response.data);
          localStorage.setItem('ApproveOrNot', 'approve');

          this.approveSuccess = true;
          this.loading = false;
          setTimeout(() => {
            this.$router.push({ name: 'AdminHRDashboardpage' });
          }, 2500);
        } catch (error) {
          this.loading = false;
          console.error('API error', error);
          console.error('Error Details:', {
            message: error.message,
            response: error.response?.data,
            status: error.response?.status,
            statusText: error.response?.statusText,
            validationErrors: error.response?.data?.errors
          }
          );
        }
      } else if (AoR == 'Reject') {

        try {
          this.rejectApprover = true;
          this.dateApprover = moment(new Date()).format('D MMM YYYY');
          this.loadingText = 'Uploading';
          this.loading = true;

          const approveData = {
            approver_name: userData.userName,
            approver_designation: userData.designation,
            approver_department: userData.department,
            approver_status: 'REJECTED',
            approver_comment: this.remark ? this.remark : '-',
            requester_email: this.claimDetails.email ? this.claimDetails.email : '-',
            requester_name: this.claimDetails.name ? this.claimDetails.name : '-',
            report_name: this.claimDetails.report_name ? this.claimDetails.report_name : '-',
            verifier_email: this.claimDetails.verifier_email ? this.claimDetails.verifier_email : 'test@gmail.com',
            reference_number: this.claimDetails.reference_number
          };

          const response = await axios.put('http://172.28.28.116:6165/api/Admin/Approve_Claim_HR', approveData);
          this.loading = false;
     //     console.log('API response', response.data);
          localStorage.setItem('ApproveOrNot', 'reject');
        } catch (error) {
          console.error('Error during Reject:', {
            message: error.message,
            response: error.response?.data,
            status: error.response?.status
          });
        }
      } else if (AoR == 'Resubmit') {

        try {
          this.resubmit = true;
          this.dateApprover = moment(new Date()).format('D MMM YYYY');
          this.loadingText = 'Uploading';
          this.loading = true;

          const approveData = {
            approver_name: userData.userName,
            approver_designation: userData.designation,
            approver_department: userData.department,
            approver_status: 'RESUBMIT',
            approver_comment: this.remark ? this.remark : '-',
            requester_email: this.claimDetails.email ? this.claimDetails.email : '-',
            requester_name: this.claimDetails.name ? this.claimDetails.name : '-',
            report_name: this.claimDetails.report_name ? this.claimDetails.report_name : '-',
            verifier_email: this.claimDetails.verifier_email ? this.claimDetails.verifier_email : 'test@gmail.com',
            reference_number: this.claimDetails.reference_number
          };


          const response = await axios.put('http://172.28.28.116:6165/api/Admin/Approve_Claim_HR', approveData);
          this.loading = false;

      //    console.log('API response', response.data);
          localStorage.setItem('ApproveOrNot', 'resubmit');

        } catch (error) {
          console.error('Error during Reject:', {
            message: error.message,
            response: error.response?.data,
            status: error.response?.status
          });
        }
      } else if (AoR == 'Reimbursed') {

        try {
          this.reimbursed = true;
          this.dateApprover = moment(new Date()).format('D MMM YYYY');
          this.loadingText = 'Uploading';
          this.loading = true;

          const approveData = {
            approver_name: userData.userName,
            approver_designation: userData.designation,
            approver_department: userData.department,
            approver_status: 'REIMBURSED',
            approver_comment: this.remark ? this.remark : '-',
            requester_email: this.claimDetails.email ? this.claimDetails.email : '-',
            requester_name: this.claimDetails.name ? this.claimDetails.name : '-',
            report_name: this.claimDetails.report_name ? this.claimDetails.report_name : '-',
            verifier_email: this.claimDetails.verifier_email ? this.claimDetails.verifier_email : 'test@gmail.com',
            reference_number: this.claimDetails.reference_number
          };

          const response = await axios.put('http://172.28.28.116:6165/api/Admin/Approve_Claim_HR', approveData);
          this.loading = false;

      //    console.log('API response', response.data);
          localStorage.setItem('ApproveOrNot', 'reimbursed');

        } catch (error) {
          console.error('Error during Reject:', {
            message: error.message,
            response: error.response?.data,
            status: error.response?.status
          });
        }
      }
      this.FetchClaimDetails();
      this.FetchClaimDatasDetails();
    },
    DownloadFile(url, fileName) {
      fileSaver.saveAs(url, fileName);
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



<style scoped>
@media print {
  @page {
    size: A4 portrait;
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

  .detail-table {
    page-break-inside: avoid;
  }

  table {
    page-break-inside: avoid;
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
    font-size: 8px !important;
  }

  #table-overflow table th {
    padding: 0 auto;
    margin: 0 auto;
    font-size: 6px !important;
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
    font-size: 8px !important;
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
    font-size: 8px !important;
    line-height: 8px;
    padding: 0;
    margin: 0;
    vertical-align: middle !important;
  }

  #remarkText {
    font-size: 8px !important;
    line-height: 8px;
    padding: 0;
    margin: 0;
    vertical-align: middle !important;
  }
}
</style>
