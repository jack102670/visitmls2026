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
        <!-- Head Title -->
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
                class="w-10 h-10"
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
          <!-- <div class="mt-5 h-12">
            <h2 class="font-semibold">Report Type :</h2>
            <p class="text-gray-600 dark:text-gray-400">Finance</p>
          </div> -->
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
          <!-- <div class="mt-5 h-12">
            <h2 class="font-semibold">Claim for the Month Ended :</h2>
            <p class="text-gray-600 dark:text-gray-400">31 MAY 2024</p>
          </div> -->
        </div>

        <!-- status button after approved -->
        <div v-if="approve" class="my-3" id="hidden">
          <h1 class="text-lg font-semibold">Status</h1>
          <div class="relative inline-block text-left">
            <div>
              <button
                @click="toggleDropdown"
                type="button"
                :class="
                  selectedStatus.class +
                  ' inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-3 py-1 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                "
              >
                {{ selectedStatus.label }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="-mr-1 ml-2 mt-1 h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>
            <div
              v-if="dropdownOpen"
              class="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            >
              <div
                class="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <button
                  v-for="(status, i) in statuses"
                  :key="i"
                  @click="selectStatus(status)"
                  :class="
                    status.dropDownClass +
                    'block px-4 py-2 text-sm  w-full text-left hover:bg-gray-200'
                  "
                  role="menuitem"
                >
                  {{ status.label }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Summary -->
        <div class="summary" v-show="!seeMore">
          <!-- Claim Table -->
          <div
            class="border-2 mt-4 border-gray-400 dark:border-gray-600 rounded-2xl"
          >
            <table class="w-full text-xs">
              <!-- title -->
              <tr
                class="h-8 bg-gray-300 dark:bg-gray-700 text-left rounded-2xl"
              >
                <th class="rounded-tl-2xl w-[20%] text-center">NO</th>
                <th class="w-[60%]">TYPE OF CLAIM</th>
                <th class="w-[20%]">AMOUNT (RM)</th>
              </tr>

              <!-- table information -->
              <tr
                class="h-8 text-left align-top text-xs lg:text-base"
                v-for="claim in claimDatas"
                :key="claim.no"
              >
                <td class="text-center font-normal">{{ claim.No }}</td>
                <td class="font-normal">
                  {{
                    claim.Type +
                    ' (x' +
                    claimDatasDetails[claim.No - 1].length +
                    ')'
                  }}
                </td>
                <td class="font-normal">{{ claim.Amount }}</td>
              </tr>

              <!-- total -->
              <tr
                class="border-t-2 border-gray-400 dark:border-gray-600 h-8 text-base lg:text-lg font-semibold"
              >
                <td colspan="2" class="px-6 text-right">TOTAL:</td>
                <td>{{ totalAmount }}</td>
              </tr>
            </table>
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
              class="border-2 border-gray-400 dark:border-gray-600 rounded-2xl overflow-y-auto"
              id="table-overflow"
            >
              <table class="w-full">
                <!-- title -->
                <tr
                  class="h-8 bg-gray-300 dark:bg-gray-700 rounded-2xl text-xs"
                >
                  <th class="w-40">Remark</th>

                  <th
                    class="px-6 w-36 break-words text-xs"
                    v-for="(val, key, i) in detail[0]"
                    :key="i"
                  >
                    {{
                      key
                        .split('_')

                        .join(' ')
                    }}
                  </th>
                </tr>

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
                      v-if="!reimbursed"
                      type="text"
                      class="p-1 text-xs w-full rounded-lg outline-none border-gray-400 dark:border-gray-600 dark:bg-gray-700 border-2"
                    />
                    <h1 v-if="reimbursed">{{ item.comment }}</h1>
                  </td>
                  <td
                    class="text-center font-normal px-3 align-middle"
                    v-for="(val, key, i) in item"
                    :key="i"
                  >
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
                      <h1
                        @click="showStaffInvolved(val)"
                        class="bg-gray-500 hover:bg-gray-600 cursor-pointer text-white p-1 rounded-lg"
                      >
                        See More
                      </h1>
                    </div>

                    <!-- See More button for show list of staff involved -->
                    <div v-show="key == 'Participants'" id="staffDetails">
                      <h1
                        @click="showParticipants(val)"
                        class="bg-gray-500 hover:bg-gray-600 cursor-pointer text-white p-1 rounded-lg"
                      >
                        See More
                      </h1>
                    </div>

                    <!-- Click to pop up files -->
                    <div
                      v-show="key == 'Attachments'"
                      class="text-blue-700 flex items-center justify-center cursor-pointer"
                      @click.prevent="ShowFile(val)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                      </svg>
                      x{{ val.length }}
                    </div>
                  </td>
                </tr>

                <!-- total -->
                <tr
                  class="border-t-2 border-gray-400 dark:border-gray-600 h-8 text-base font-semibold"
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
          class="text-xs border-2 mt-4 border-gray-400 dark:border-gray-600 rounded-2xl"
          id="table-overflow"
        >
          <table class="w-full">
            <!-- title -->
            <tr class="h-8 bg-gray-300 dark:bg-gray-700 text-left rounded-2xl">
              <th
                class="rounded-tl-2xl w-[20%] text-center border-r-2 border-gray-400 dark:border-gray-600"
              >
                STATUS
              </th>
              <th class="w-[24%] pl-6">NAME</th>
              <th class="w-[23%]">DESIGNATION</th>
              <th class="w-[23%]">DEPARTMENT</th>
              <th class="w-[10%]">DATE</th>
            </tr>

            <!-- table information -->
            <tr
              class="h-8 text-left text-xs border-t-2 border-gray-400 dark:border-gray-600"
            >
              <th
                class="text-xs text-center font-semibold border-r-2 border-gray-400 dark:border-gray-600"
              >
                <!-- Status Bar -->
                <div
                  class="mx-auto rounded-full py-2 text-center lg:w-[90%] w-full"
                  :class="{
                    'bg-orange-200 dark:bg-orange-500':
                      statusVerifier == 'PENDING',
                    'bg-amber-200 dark:bg-amber-500':
                      statusVerifier == 'VERIFIED',
                    'bg-red-200 dark:bg-red-500': statusVerifier == 'REJECTED',
                    'text-orange-500 dark:text-orange-100':
                      statusVerifier == 'PENDING',
                    'text-amber-500 dark:text-amber-100':
                      statusVerifier == 'VERIFIED',
                    'text-red-500 dark:text-red-100':
                      statusVerifier == 'REJECTED',
                  }"
                >
                  <p>{{ statusVerifier }}</p>
                </div>
              </th>
              <td class="pl-6">{{ claimDetails.verifier_name }}</td>
              <td class="">{{ claimDetails.verifier_designation }}</td>
              <td>{{ claimDetails.department }}</td>
              <td class="">{{ dateVerifier }}</td>
            </tr>
            <tr
              class="h-8 text-left text-xs border-t-2 border-gray-400 dark:border-gray-600"
            >
              <th
                class="text-xs text-center font-semibold border-r-2 border-gray-400 dark:border-gray-600"
              >
                <!-- Status Bar -->
                <div
                  class="mx-auto rounded-full py-2 text-center lg:w-[90%] w-full"
                  :class="{
                    'bg-orange-200 dark:bg-orange-500':
                      statusApprover == 'PENDING',
                    'bg-green-200 dark:bg-green-500':
                      statusApprover == 'APPROVED',
                    'bg-red-200 dark:bg-red-500': statusApprover == 'REJECTED',
                    'text-orange-500 dark:text-orange-100':
                      statusApprover == 'PENDING',
                    'text-green-500 dark:text-green-100':
                      statusApprover == 'APPROVED',
                    'text-red-500 dark:text-red-100':
                      statusApprover == 'REJECTED',
                  }"
                >
                  <p>{{ statusApprover }}</p>
                </div>
              </th>
              <td class="pl-6">{{ claimDetails.approver_name }}</td>
              <td class="">{{ claimDetails.approver_designation }}</td>
              <td>{{ claimDetails.approver_department }}</td>
              <td class="">{{ dateApprover }}</td>
            </tr>
          </table>
        </div>

        <!-- Resubmission table -->

        <div
          v-show="rejectApprover || resubmit"
          class="text-xs border-2 mt-4 border-gray-400 dark:border-gray-600 rounded-2xl"
          id="table-overflow"
        >
          <table class="w-full">
            <!-- title -->
            <tr class="h-8 bg-gray-300 dark:bg-gray-700 text-left rounded-2xl">
              <th
                class="rounded-tl-2xl w-[20%] text-center border-r-2 border-gray-400 dark:border-gray-600"
              >
                STATUS
              </th>
              <th class="pl-6">Overall Remark</th>
            </tr>

            <!-- table information -->
            <tr
              v-if="resubmit == true"
              class="h-8 text-left text-xs border-t-2 border-gray-400 dark:border-gray-600"
            >
              <th
                class="text-x font-medium border-r-2 border-gray-400 dark:border-gray-600"
              >
                <div
                  class="mx-auto bg-red-200 dark:bg-red-500 rounded-full py-2 text-center text-red-500 dark:text-red-100 lg:w-[90%] w-full"
                >
                  <p>RESUBMISSION</p>
                </div>
              </th>
              <td class="pl-6">{{ remark }}</td>
            </tr>

            <tr
              v-if="rejectApprover == true"
              class="h-8 text-left text-xs border-t-2 border-gray-400 dark:border-gray-600"
            >
              <th
                class="text-xs font-medium border-r-2 border-gray-400 dark:border-gray-600"
              >
                <div
                  class="mx-auto bg-red-200 dark:bg-red-500 rounded-full py-2 text-center text-red-500 dark:text-red-100 lg:w-[90%] w-full"
                >
                  <p>REJECTED</p>
                </div>
              </th>
              <td class="pl-6">{{ remark }}</td>
            </tr>
          </table>
        </div>

        <!-- Remark table -->

        <div
          v-show="approve || verified"
          class="text-xs border-2 mt-4 border-gray-400 dark:border-gray-600 rounded-2xl"
          id="table-overflow"
        >
          <table class="w-full">
            <!-- title -->
            <tr class="h-8 bg-gray-300 dark:bg-gray-700 rounded-2xl">
              <th class="pl-6">Remark</th>
            </tr>

            <!-- table information -->
            <tr
              class="h-8 text-left text-xs border-t-2 border-gray-400 dark:border-gray-600"
            >
              <td class="pl-6">{{ remark }}</td>
            </tr>
          </table>
        </div>

        <!-- Button -->
        <div
          v-show="
            approve != true &&
            verified != true &&
            rejectApprover != true &&
            rejectVerifier != true &&
            resubmit != true &&
            reimbursed != true
          "
          class=".detail-table w-full lg:flex-row flex flex-col justify-between h-14 items-center pt-6"
        >
          <div class="flex w-full items-center">
            <label class="font-semibold mr-2 mb-4 lg:mb-0"
              >Overall Remark:
            </label>
            <input
              class="py-3 px-2 mb-4 lg:mb-0 w-full lg:max-w-96 lg:mr-2 rounded-lg outline-none border-gray-400 dark:border-gray-600 dark:bg-gray-700 border-2"
              type="text"
              placeholder="Eg. Blurry Receipt Image"
              v-model="remark"
            />
          </div>
          <div class="flex">
            <button
              @click="confirmApprove = true"
              class="mr-2 text-sm font-semibold py-3 w-16 sm:w-24 md:w-36 bg-blue-800 hover:bg-blue-900 rounded-lg text-white"
            >
              Approve
            </button>
            <button
              @click="confirmResubmit = true"
              class="mr-2 text-sm font-semibold py-3 w-16 sm:w-24 md:w-36 bg-yellow-500 hover:bg-yellow-600 rounded-lg text-white"
            >
              Resubmit
            </button>
            <button
              @click="confirmReject = true"
              class="text-sm font-semibold py-3 w-16 sm:w-24 md:w-36 bg-red-600 hover:bg-red-700 rounded-lg text-white"
            >
              Reject
            </button>
          </div>
        </div>

        <!-- Approve Confirmation -->
        <div
          v-show="confirmApprove"
          class="bg-gray-500 dark:bg-gray-700 dark:bg-opacity-30 bg-opacity-40 w-screen h-screen fixed left-0 top-0 z-50 flex justify-center items-center"
        >
          <div
            class="bg-white dark:bg-gray-900 w-96 h-52 rounded-xl fixed flex flex-col justify-center items-center"
          >
            <h1 class="text-2xl font-bold">Do you confirm to approve?</h1>
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
          class="bg-gray-500 dark:bg-gray-700 dark:bg-opacity-30 bg-opacity-40 w-screen h-screen fixed left-0 top-0 z-50 flex justify-center items-center"
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

        <!-- Reimburse Confirmation -->
        <div
          v-show="confirmReimburse"
          class="bg-gray-500 dark:bg-gray-700 dark:bg-opacity-30 bg-opacity-40 w-screen h-screen fixed left-0 top-0 z-50 flex justify-center items-center"
        >
          <div
            class="bg-white dark:bg-gray-900 w-96 h-52 rounded-xl fixed flex flex-col justify-center items-center"
          >
            <h1 class="text-2xl font-bold">Do you confirm to reimburse?</h1>
            <div class="flex mt-4">
              <button
                class="rounded-lg px-4 py-2 w-28 text-lg bg-gray-600 hover:bg-gray-700 text-white"
                @click="
                  (confirmReimburse = false), (selectedStatus = statuses[0])
                "
              >
                Back
              </button>
              <button
                class="rounded-lg px-4 py-2 w-28 text-lg bg-green-600 hover:bg-green-700 text-white ml-2"
                @click="ConfirmReimburse()"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>

        <!-- Reject Confirmation -->
        <div
          v-show="confirmReject"
          class="bg-gray-500 dark:bg-gray-700 dark:bg-opacity-30 bg-opacity-40 w-screen h-screen fixed left-0 top-0 z-50 flex justify-center items-center"
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
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
              />
            </svg>

            <h1>VERIFIED SUCCESSFULLY</h1>
          </div>
        </div>

        <!-- Staff Involved List -->
        <div
          v-show="showSimList"
          class="fixed top-0 left-0 w-screen h-screen bg-gray-600/50 z-50 flex justify-center items-center"
        >
          <div
            class="bg-white w-full sm:w-4/5 lg:w-2/5 rounded-xl flex flex-col items-center relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="absolute right-3 top-3 size-6"
              @click="showSimList = !showSimList"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
            <div class="relative flex w-4/5 mx-auto">
              <h1 class="text-xl font-semibold mt-4">Staff Involved</h1>
            </div>
            <table class="w-4/5 text-center mt-1 mb-8">
              <tr class="bg-gray-300 text-center h-12">
                <th>No.</th>
                <th>Company</th>
                <th>Name</th>
                <th>Employee ID</th>
              </tr>
              <tr
                v-for="(staff, i) in sim"
                :key="i"
                class="bg-white text-black text-center h-12"
              >
                <th class="font-normal">{{ i + 1 }}</th>
                <th class="font-normal">{{ staff.company_name }}</th>
                <th class="font-normal">{{ staff.name }}</th>
                <th class="font-normal">{{ staff.emp_id }}</th>
              </tr>
            </table>
          </div>
        </div>

        <!-- Participants List -->
        <div
          v-show="showParticipantsList"
          class="fixed top-0 left-0 w-screen h-screen bg-gray-600/50 z-50 flex justify-center items-center"
        >
          <div
            class="bg-white w-full sm:w-4/5 lg:w-2/5 rounded-xl flex flex-col items-center relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="absolute right-3 top-3 size-6"
              @click="showParticipantsList = false"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
            <div class="relative flex w-4/5 mx-auto">
              <h1 class="text-xl font-semibold mt-4">Participants</h1>
            </div>
            <table class="w-4/5 text-center mt-1 mb-8">
              <tr class="bg-gray-300 text-center h-12">
                <th>No.</th>
                <th>Name</th>
                <th>Status</th>
                <th>Company</th>
                <th>Employee ID</th>
              </tr>
              <tr
                v-for="(staff, i) in participants"
                :key="i"
                class="bg-white text-black text-center h-12"
              >
                <th class="font-normal">{{ i + 1 }}</th>
                <th class="font-normal">{{ staff.name }}</th>
                <th class="font-normal">{{ staff.status }}</th>
                <th class="font-normal">{{ staff.company_name }}</th>
                <th class="font-normal">{{ staff.emp_id }}</th>
              </tr>
            </table>
          </div>
        </div>

        <!-- File List -->
        <div
          v-show="showFileList"
          class="fixed top-0 left-0 w-screen h-screen bg-gray-600/50 z-50 flex justify-center items-center"
        >
          <div
            class="bg-white w-full sm:w-4/5 rounded-xl flex flex-col items-center relative pb-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="absolute right-3 top-3 size-6"
              @click="showFileList = false"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
            <div class="relative flex w-4/5 mx-auto justify-center">
              <h1 class="text-xl font-semibold my-4">Attachments</h1>
            </div>
            <table v-if="files.length > 0" class="w-4/5 text-center mt-1 mb-8">
              <tr class="bg-gray-300 text-center h-12">
                <th>No.</th>
                <th>File</th>
                <th>Action</th>
              </tr>
              <tr
                v-for="(file, i) in files"
                :key="i"
                class="bg-white text-black text-center h-12 mt-2"
              >
                <th class="font-normal">{{ i + 1 }}</th>
                <th class="font-normal flex">
                  <img
                    v-if="
                      file.split('.').slice(-1)[0].toLowerCase() == 'png' ||
                      file.split('.').slice(-1)[0].toLowerCase() == 'jpg' ||
                      file.split('.').slice(-1)[0].toLowerCase() == 'jpeg'
                    "
                    :src="file"
                    alt="attachment"
                    class="w-20 h-32 object-contain"
                  />
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="0.5"
                    stroke="currentColor"
                    class="w-20 h-32"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    />
                  </svg>

                  <h1 class="ml-2">{{ file }}</h1>
                </th>
                <th class="font-normal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 mx-auto"
                    @click="DownloadFile(file)"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </th>
              </tr>
            </table>

            <div v-if="files.length <= 0" class="w-full">
              <h1 class="mx-auto text-center font-thin text-gray-500">Empty</h1>
            </div>
          </div>
        </div>

        <!-- Loading Animation -->
        <div
          class="w-screen h-screen fixed z-40 flex justify-center items-center top-0 left-0"
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
import moment from 'moment';
import fileSaver from 'file-saver';
import axios from 'axios';
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
      // need to get from API
      role: 'approver',

      // remark for every single detail
      singleRemarks: [],

      //remark for every single details in one tab
      singleColumnRemarks: [],

      // staff involved list
      sim: [],
      showSimList: false,

      // participants list
      participants: [],
      showParticipantsList: false,

      // File List
      files: [],
      showFileList: false,

      dropdownOpen: false,
      selectedStatus: {
        label: 'Approved',
        class: 'bg-green-500 text-white hover:bg-green-600',
      },
      statuses: [
        {
          label: 'Approved',
          class: 'bg-green-500 text-white hover:bg-green-600',
          dropDownClass: 'text-green-500 hover:text-green-600',
        },
        {
          label: 'Reimbursed',
          class: 'bg-white text-gray-700 hover:bg-gray-100',
          dropDownClass: 'text-gray-700 hover:text-gray-800',
        },
      ],

      seeMore: false,
      confirmReject: false,
      confirmApprove: false,
      confirmReimburse: false,
      confirmResubmit: false,
      approveSuccess: false,
      loading: false,

      // need to fetch from or post to API
      rejectApprover: false,
      rejectVerifier: false,
      approve: false,
      verified: false,
      reimbursed: false,
      resubmit: false,
      dateApprover: '12 Jun 2024',
      dateVerifier: '8 Jun 2024',
      remark: '',
      statusApprover: '',

      // fetch from backend
      claimDetails: [],
      claimDatas: [],
      claimDatasDetails: [],
      claimDataTotalAmount: [],

      keysToExclude: ['Tab_Title', 'unique_code'],

      // referenceNumber: 'TMTM-Finance-2024-07-0451',
      referenceNumber: '',

      // need to fetch from API
      claimData: [
        {
          no: 1,
          type: 'Local/Outstation Travelling Expenses',
          particulars: 'as attached travelling voucher',
          amount: 150.0,
        },
        {
          no: 2,
          type: 'Outstation/Overseas Travelling Expenses',
          particulars: 'as attached travelling voucher',
          amount: 279.3,
        },
        {
          no: 3,
          type: 'Entertainment',
          particulars: 'as attached travelling voucher',
          amount: 300,
        },
      ],
      details: [
        {
          No: 1,
          Date: '2024-05-16',
          DestinationPurpose: 'LABEL 1',
          MileageKM: 40,
          MileageRM: 80,
          Parking: 10,
          Toll: 20,
          Receipts: '',
          Total: 150,
          tabTitle: 'Local Travelling',
        },
        {
          No: 1,
          Date: '2024-05-16',
          DestinationPurpose: 'Thailand',
          ForeignCurrency: 100,
          MealAllowance: 30.3,
          Airport: 100,
          Teksi: 49,
          Receipts: '',
          Total: 279.3,
          tabTitle: 'Oversea Travelling',
        },
        {
          No: 1,
          Date: '2024-05-16',
          Type: 'BREAKFAST',
          Company: 'PKT',
          Venue: 'Lighthouse level 7',
          reference: 'client',
          amount: 300,
          Receipts: '',
          Total: 300,
          tabTitle: 'Entertainment',
        },
      ],
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
    // status of verifier to change the status color and title in table
    // need to post to database
    statusVerifier() {
      let status = 'PENDING';
      if (this.rejectVerifier) {
        status = 'REJECTED';
      } else if (this.verified) {
        status = 'VERIFIED';
      } else {
        status = 'VERIFIED';
      }

      status = 'VERIFIED';

      return status;
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
      await axios
        .get(
          'http://172.28.28.91:86/api/User/GetClaimDetails/' +
            this.referenceNumber
        )
        .then((response) => {
          this.claimDetails = response.data.result;
          this.statusApprover = this.claimDetails.admin_status
            .split('.')[0]
            .toUpperCase();
          this.remark = this.claimDetails.approver_feedback;

          console.log(this.statusApprover);

          if (this.statusApprover == 'APPROVED') {
            this.approve = true;
          } else if (this.statusApprover == 'REJECTED') {
            this.rejectApprover = true;
          } else if (this.statusApprover == 'RESUBMIT') {
            this.resubmit = true;
          } else if (this.statusApprover == 'REIMBURSED') {
            this.reimbursed = true;
          } else {
            this.statusApprover = 'PENDING';
          }
        });
    },
    async FetchClaimDatasDetails() {
      await axios
        .get(
          'http://172.28.28.91:97/api/User/GetLocalOutstation/' +
            this.referenceNumber
        )
        .then((response) => {
          const result = response.data.result;
          let details = [];
          let amount = 0;
          for (let i in result) {
            amount += result[i].total_fee;
            const editedDetail = {
              Date_Event: result[i].date_event,
              Starting_Point: result[i].starting_point,
              End_Point: result[i].end_point,
              'Mileage(KM)': result[i].mileage_km,
              'Park_Fee(RM)': result[i].park_fee,
              'Toll_Fee(RM)': result[i].toll_fee,
              Transport_Specification: result[i].transport_specification,
              Transport_Mode: result[i].transport_mode,
              Trip_Mode: result[i].trip_mode,
              'Total_Mileage(RM)': result[i].total_mileage,
              'Total_Fee(RM)': result[i].total_fee,
              Attachments: result[i].files,
              Tab_Title: 'Local Outstation',
              unique_code: result[i].unique_code,
              comment: result[i].comment,
            };
            details.push(editedDetail);
          }
          if (details.length > 0) {
            this.claimDatasDetails.push(details);
            this.claimDataTotalAmount.push(amount);
          }
        })
        .catch((e) => {
          console.error(e);
        });

      await axios
        .get(
          'http://172.28.28.91:97/api/User/GetOverseasOutstation/' +
            this.referenceNumber
        )
        .then((response) => {
          const result = response.data.result;
          let details = [];
          let amount = 0;
          for (let i in result) {
            amount += result[i].total_fee;
            const editedDetail = {
              Description: result[i].description,
              Date: result[i].date_event,
              'Meal_Allowance_(RM)': result[i].meal_allowance,
              'Transport_Fee(RM)': result[i].transport_fee,
              Accom_Foreign_Currency: result[i].accom_foreign_currency,
              Accom_Exchange_Rate: result[i].accom_exchange_rate,
              Accom_Foreign_Total: result[i].accom_foreign_total,
              Other_Foreign_Currency: result[i].other_foreign_currency,
              Other_Exchange_Rate: result[i].other_exchange_rate,
              Other_Foreign_Total: result[i].other_foreign_total,
              Transportation_Mode: result[i].transportation_mode,
              'Total_Fee(RM)': result[i].total_fee,
              Attachments: result[i].files,
              Tab_Title: 'Overseas Outstation',
              unique_code: result[i].unique_code,
              comment: result[i].comment,
            };
            details.push(editedDetail);
          }
          if (details.length > 0) {
            this.claimDatasDetails.push(details);
            this.claimDataTotalAmount.push(amount);
          }
        })
        .catch((e) => {
          console.error(e);
        });

      await axios
        .get(
          'http://172.28.28.91:97/api/User/GetRefreshment/' +
            this.referenceNumber
        )
        .then((response) => {
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
              Staff_Involved: result[i].sim,
              'Total_Fee(RM)': result[i].total_fee,
              Attachments: result[i].files,
              Tab_Title: 'Staff Refreshment',
              unique_code: result[i].unique_code,
              comment: result[i].comment,
            };
            details.push(editedDetail);
          }
          if (details.length > 0) {
            this.claimDatasDetails.push(details);
            this.claimDataTotalAmount.push(amount);
          }
        })
        .catch((e) => {
          console.error(e);
        });

      await axios
        .get(
          'http://172.28.28.91:86/api/User/GetEntertainment/' +
            this.referenceNumber
        )
        .then((response) => {
          const result = response.data.result;
          let details = [];
          let amount = 0;
          for (let i in result) {
            amount += result[i].total_fee;
            const editedDetail = {
              Type: result[i].entertainment_type,
              Date: result[i].date_event,
              Venue: result[i].venue_name,
              Company: result[i].company_name,
              Participants: result[i].participants,
              'Total_Fee(RM)': result[i].total_fee,
              Attachments: result[i].files,
              Tab_Title: 'Entertainment',
              unique_code: result[i].unique_code,
              comment: result[i].comment,
            };
            details.push(editedDetail);
          }
          if (details.length > 0) {
            this.claimDatasDetails.push(details);
            this.claimDataTotalAmount.push(amount);
          }
        })
        .catch((e) => {
          console.error(e);
        });

      this.claimDatasDetails.forEach((details, index) => {
        if (details && details.length > 0) {
          const claimData = {
            No: index + 1,
            Type: details[0].Tab_Title, // Ensure details[0] exists before accessing properties
            Amount: this.claimDataTotalAmount[index],
          };
          this.claimDatas.push(claimData);
        }
      });

      console.log(this.claimDatas);
      console.log(this.claimDatasDetails);
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
    ApproveOrReject(AoR) {
      this.singleRemarks.forEach((remark) => {
        let data = {
          comment: remark.remark,
          unique_code: remark.unique_code,
        };
        if (remark.Tab_Title == 'Local Outstation') {
          axios.put(
            'http://172.28.28.91:86/api/Admin/Approver_Comment_Local',
            data
          );
        } else if (remark.Tab_Title == 'Overseas Outstation') {
          axios.put(
            'http://172.28.28.91:86/api/Admin/Approve_Comment_Overseas',
            data
          );
        }
      });
      if (AoR == 'Approve') {
        this.approve = true;
        this.dateApprover = moment(new Date()).format('D MMM YYYY');
        // post the status and remark to API
        this.loading = true;

        const approveData = {
          approver_status: 'APPROVED',
          approver_comment: this.remark,
          user_email: 'user_email',
          verifier_email: this.claimDetails.verifier_email,
          reference_number: this.claimDetails.reference_number,
        };
        console.log(approveData);
        axios
          .put('http://172.28.28.91:86/api/Admin/Approve_Claim', approveData)
          .then((response) => {
            // Handle success response
            console.log('API response', response.data);
            localStorage.setItem('ApproveOrNot', 'approve');

            this.approveSuccess = true;
            setTimeout(() => {
              this.$router.push({ name: 'AdminDashboardpage' });
            }, 1500);
          })
          .catch((error) => {
            // Handle error response
            console.error('API error', error);
          });
      } else if (AoR == 'Reject') {
        this.rejectApprover = true;
        this.dateApprover = moment(new Date()).format('D MMM YYYY');
        this.loading = true;

        const approveData = {
          approver_status: 'REJECTED',
          approver_comment: this.remark,
          user_email: 'user_email',
          verifier_email: this.claimDetails.verifier_email,
          reference_number: this.claimDetails.reference_number,
        };
        axios
          .put('http://172.28.28.91:86/api/Admin/Approve_Claim', approveData)
          .then((response) => {
            // Handle success response
            this.loading = false;

            console.log('API response', response.data);
            localStorage.setItem('ApproveOrNot', 'reject');
          })
          .catch((error) => {
            // Handle error response
            console.error('API error', error);
          });
      } else if (AoR == 'Resubmit') {
        this.resubmit = true;
        this.dateApprover = moment(new Date()).format('D MMM YYYY');
        this.loading = true;

        const approveData = {
          approver_status: 'RESUBMIT',
          approver_comment: this.remark,
          user_email: 'user_email',
          verifier_email: this.claimDetails.verifier_email,
          reference_number: this.claimDetails.reference_number,
        };
        axios
          .put('http://172.28.28.91:86/api/Admin/Approve_Claim', approveData)
          .then((response) => {
            // Handle success response
            this.loading = false;

            console.log('API response', response.data);
            localStorage.setItem('ApproveOrNot', 'resubmit');
          })
          .catch((error) => {
            // Handle error response
            console.error('API error', error);
          });
      } else if (AoR == 'Reimbursed') {
        this.reimbursed = true;
        this.dateApprover = moment(new Date()).format('D MMM YYYY');
        this.loading = true;

        const approveData = {
          approver_status: 'REIMBURSED',
          approver_comment: this.remark,
          user_email: 'user_email',
          verifier_email: this.claimDetails.verifier_email,
          reference_number: this.claimDetails.reference_number,
        };
        axios
          .put('http://172.28.28.91:86/api/Admin/Approve_Claim', approveData)
          .then((response) => {
            // Handle success response
            this.loading = false;

            console.log('API response', response.data);
            localStorage.setItem('ApproveOrNot', 'reimbursed');
          })
          .catch((error) => {
            // Handle error response
            console.error('API error', error);
          });
      }
    },

    // Download the file
    DownloadFile(url) {
      fileSaver.saveAs(url, url);
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

table {
  min-width: max-content;
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
    font-size: 10px;
  }
  body {
    margin: 0;
  }
  p {
    font-size: 8px !important;
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
    margin-bottom: 2px !important;
  }
  .details h1 {
    font-size: 12px !important;
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
    margin-top: 4px !important;
  }
  .detail-table h1 {
    margin-top: 4px !important;
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
    height: 110%;
    width: 100%;
  }
  #table-overflow table th {
    padding: 0 auto;
    margin: 0 auto;
    font-size: 6px;
    height: 20px;
    width: 10px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    line-height: 8px;
  }
  #summaryPrint #table-overflow table td {
    padding: 0 auto;
    margin: 0 auto;
    font-size: 6px;
    height: 20px;
    width: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    line-height: 8px;
  }

  #hidden {
    display: none;
  }

  #staffDetails h1 {
    font-size: 6px;
    padding: 0;
    margin: 0;
  }
}
</style>
