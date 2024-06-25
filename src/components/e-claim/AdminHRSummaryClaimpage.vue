<template>
  <main
    class="flex-1 text overflow-y-auto bg-[#CED1DA] dark:bg-gray-900 dark:text-white p-4 sm:ml-64"
    id="summaryPrint"
  >
    <div class="container mx-auto text-xs lg:text-base" id="summaryPrint">
      <div
        class="print-div relative overflow-hidden bg-[#f7fbff] dark:bg-gray-900 border-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <h1 class="text-gray-500 italic absolute top-4 right-4">
          SN: PW/Finance/2024/06/5520
        </h1>
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
          <h1 class="font-bold text-xl text">
            SUMMARY CLAIM FOR REIMBURSEMENT OF ALL EXPENSES
          </h1>
        </div>

        <!-- Information -->
        <div class="flex justify-between items-center my-4 w-full">
          <h1 class="text-blue-900 dark:text-blue-600 font-bold text-4xl">
            Webinars
            <span class="text-blue-900 dark:text-blue-600"
              >| RM{{ totalAmount }}</span
            >
          </h1>

          <div class="mt-5 h-12 flex items-center">
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
          class="grid grid-cols-2 lg:grid-cols-3 gap-2 [&>*:nth-child(even)]:text-right lg:[&>*:nth-child(even)]:text-left"
        >
          <div class="mt-5 h-12">
            <h2 class="font-semibold">Name of Claimaint :</h2>
            <p class="text-gray-600 dark:text-gray-400">ALI MOHAMMAD</p>
          </div>
          <div id="toLeft" class="mt-5 h-12">
            <h2 class="font-semibold">Name of Company :</h2>
            <p class="text-gray-600 dark:text-gray-400">
              PKT LOGISTIC (M) SDN BHD
            </p>
          </div>
          <div class="mt-5 h-12">
            <h2 class="font-semibold">Designation :</h2>
            <p class="text-gray-600 dark:text-gray-400">DEVELOPER</p>
          </div>
          <div id="toLeft" class="mt-5 h-12">
            <h2 class="font-semibold">Department :</h2>
            <p class="text-gray-600 dark:text-gray-400">ICT</p>
          </div>
          <div class="mt-5 h-12">
            <h2 class="font-semibold">Report Type :</h2>
            <p class="text-gray-600 dark:text-gray-400">Finance</p>
          </div>
          <div id="toLeft" class="mt-5 h-12">
            <h2 class="font-semibold">Report Type :</h2>
            <p class="text-gray-600 dark:text-gray-400">HR</p>
          </div>
          <div class="mt-5 h-12">
            <h2 class="font-semibold">Date of Claim :</h2>
            <p class="text-gray-600 dark:text-gray-400">25 MAY 2024</p>
          </div>
          <!-- <div id="toLeft" class="mt-5 h-12">
            <h2 class="font-semibold">Claim for the Month Ended :</h2>
            <p class="text-gray-600 dark:text-gray-400">31 MAY 2024</p>
          </div>
          -->
        </div>

        <!-- Summary -->
        <div class="summary" v-show="!seeMore">
          <!-- Claim Table -->
          <div
            class="border-2 mt-10 border-gray-400 dark:border-gray-600 rounded-2xl"
          >
            <table class="w-full">
              <!-- title -->
              <tr
                class="h-14 bg-gray-300 dark:bg-gray-700 text-left rounded-2xl"
              >
                <th class="rounded-tl-2xl w-[20%] text-center">NO</th>
                <th class="w-[60%]">TYPE OF CLAIM</th>
                <th class="w-[20%]">AMOUNT (RM)</th>
              </tr>
              <tr class="h-4"></tr>

              <!-- table information -->
              <tr
                class="h-14 text-left align-top text-xs lg:text-base"
                v-for="claim in claimData"
                :key="claim.no"
              >
                <td class="text-center font-normal">{{ claim.no }}</td>
                <td class="font-normal">{{ claim.type }}</td>
                <td class="font-normal">{{ claim.amount }}</td>
              </tr>

              <!-- total -->
              <tr
                class="border-t-2 border-gray-400 dark:border-gray-600 h-14 text-base lg:text-lg font-semibold"
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
            v-for="(detail, i) in details"
            :key="i"
            class="detail-table mt-10"
          >
            <h1 class="my-4 text-3xl font-semibold tab-title">
              {{ detail.tabTitle }}
            </h1>
            <div
              class="border-2 border-gray-400 dark:border-gray-600 rounded-2xl overflow-y-auto"
              id="table-overflow"
            >
              <table class="w-full">
                <!-- title -->
                <tr class="h-14 bg-gray-300 dark:bg-gray-700 rounded-2xl">
                  <th class="px-3" v-for="(val, key, i) in detail" :key="i">
                    {{ key }}
                  </th>
                </tr>
                <tr class="h-4"></tr>

                <!-- table information -->
                <tr class="h-14 text-left align-top text-xs lg:text-base">
                  <td
                    class="text-center font-normal"
                    v-for="(val, key, i) in detail"
                    :key="i"
                  >
                    {{ val }}
                    <div
                      v-show="key == 'Receipts'"
                      class="text-blue-700 flex items-center justify-center cursor-pointer"
                      @click.prevent="DownloadFile()"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="gray"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                      </svg>
                      File
                    </div>
                  </td>
                </tr>

                <!-- total -->
                <tr
                  class="border-t-2 border-gray-400 dark:border-gray-600 h-14 text-base lg:text-lg font-semibold"
                >
                  <td class="px-3">TOTAL:</td>
                  <td>RM{{ detail.Total }}</td>
                  <td></td>
                </tr>
              </table>
            </div>
            <div>
              <div class="flex w-full items-center mt-2">
                <label class="font-semibold mr-2 mb-4">Remark: </label>
                <p v-if="approved || rejectApprover" class="mb-4">
                  {{ singleRemarks[i] }}
                </p>
                <input
                  v-if="!approved && !rejectApprover"
                  v-model="singleRemarks[i]"
                  class="py-3 px-2 mb-4 w-full rounded-lg outline-none border-gray-400 dark:border-gray-600 dark:bg-gray-700 border-2"
                  type="text"
                  placeholder="Enter if having any remarks"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Status Table -->
        <div
          class="text-xs lg:text-base border-2 mt-10 border-gray-400 dark:border-gray-600 rounded-2xl"
          id="table-overflow"
        >
          <table class="w-full">
            <!-- title -->
            <tr class="h-14 bg-gray-300 dark:bg-gray-700 text-left rounded-2xl">
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
              class="h-14 text-left text-xs lg:text-base border-t-2 border-gray-400 dark:border-gray-600"
            >
              <th
                class="text-xs lg:text-base text-center font-semibold border-r-2 border-gray-400 dark:border-gray-600"
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
              <td class="pl-6">MANIRAJA</td>
              <td class="">HEAD OF DEPARTMENT</td>
              <td>ICT</td>
              <td class="">{{ dateVerifier }}</td>
            </tr>
            <tr
              class="h-14 text-left text-xs lg:text-base border-t-2 border-gray-400 dark:border-gray-600"
            >
              <th
                class="text-xs lg:text-base text-center font-semibold border-r-2 border-gray-400 dark:border-gray-600"
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
              <td class="pl-6">SHU LAN</td>
              <td class="">HR</td>
              <td>HR</td>
              <td class="">{{ dateApprover }}</td>
            </tr>
          </table>
        </div>

        <!-- Resubmission table -->

        <div
          v-show="rejectApprover || rejectVerifier"
          class="text-xs lg:text-base border-2 mt-10 border-gray-400 dark:border-gray-600 rounded-2xl"
          id="table-overflow"
        >
          <table class="w-full">
            <!-- title -->
            <tr class="h-14 bg-gray-300 dark:bg-gray-700 text-left rounded-2xl">
              <th
                class="rounded-tl-2xl w-[20%] text-center border-r-2 border-gray-400 dark:border-gray-600"
              >
                STATUS
              </th>
              <th class="pl-6">Overall Remark</th>
            </tr>

            <!-- table information -->
            <tr
              class="h-14 text-left text-xs lg:text-base border-t-2 border-gray-400 dark:border-gray-600"
            >
              <th
                class="text-xs lg:text-sm font-medium border-r-2 border-gray-400 dark:border-gray-600"
              >
                <div
                  class="mx-auto bg-red-200 dark:bg-red-500 rounded-full py-2 text-center text-red-500 dark:text-red-100 lg:w-[90%] w-full"
                >
                  <p>RESUBMISSION</p>
                </div>
              </th>
              <td class="pl-6">{{ remark }}</td>
            </tr>
          </table>
        </div>

        <!-- Remark table -->

        <div
          v-show="approved || verified"
          class="text-xs lg:text-base border-2 mt-10 border-gray-400 dark:border-gray-600 rounded-2xl"
          id="table-overflow"
        >
          <table class="w-full">
            <!-- title -->
            <tr class="h-14 bg-gray-300 dark:bg-gray-700 rounded-2xl">
              <th class="pl-6">Remark</th>
            </tr>

            <!-- table information -->
            <tr
              class="px-6 h-14 text-left text-xs lg:text-base border-t-2 border-gray-400 dark:border-gray-600"
            >
              <td class="pl-6">{{ remark }}</td>
            </tr>
          </table>
        </div>

        <!-- Button -->
        <div
          v-show="
            approved != true &&
            verified != true &&
            rejectApprover != true &&
            rejectVerifier != true
          "
          class=".detail-table w-full lg:flex-row flex flex-col justify-between h-24 items-center pt-6"
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
              class="mr-2 lg:text-lg font-semibold py-3 w-36 bg-blue-800 hover:bg-blue-900 rounded-lg text-white"
            >
              Approve
            </button>
            <button
              @click="confirmReject = true"
              class="lg:text-lg font-semibold py-3 w-36 bg-red-600 hover:bg-red-700 rounded-lg text-white"
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
            <h1 class="text-2xl font-bold">Do you confirm to verify?</h1>
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
export default {
  data() {
    return {
      // need to get from API
      role: 'approver',

      // remark for every single detail
      singleRemarks: [],

      seeMore: false,
      confirmReject: false,
      confirmApprove: false,
      approveSuccess: false,
      loading: false,

      // need to fetch from or post to API
      rejectApprover: false,
      rejectVerifier: false,
      approved: false,
      verified: false,
      dateApprover: '',
      dateVerifier: '',
      remark: '',

      // need to fetch from API
      claimData: [
        {
          no: 1,
          type: 'Medical Leave',
          amount: 20,
        },
        {
          no: 2,
          type: 'Phone Reimbursement',
          amount: 10,
        },
      ],
      details: [
        {
          No: 1,
          Date: '2024-05-16',
          Reason: 'Sick',
          BankName: 'Public Bank',
          BankAccount: '501234567',
          AccountName: 'Ali Mohammad',
          Receipts: '',
          Total: 20,

          tabTitle: 'Medical Leave',
        },
        {
          No: 1,
          Date: '2024-05-16',
          BankName: 'Public Bank',
          BankAccount: '501234567',
          AccountName: 'Ali Mohammad',
          Receipts: '',
          Total: 10,
          tabTitle: 'Phone Reimbursement',
        },
      ],
    };
  },
  computed: {
    totalAmount() {
      let num = 0;
      for (var i = 0; i < this.claimData.length; i++) {
        num += this.claimData[i].amount;
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

      return status;
    },

    // status of approver to change the status color and title in table
    // need to post to database
    statusApprover() {
      let status = 'PENDING';
      if (this.rejectApprover) {
        status = 'REJECTED';
      } else if (this.approve) {
        status = 'APPROVED';
      } else {
        status = 'PENDING';
      }

      return status;
    },
  },
  methods: {
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
      this.reject = true;
      this.ApproveOrReject('Reject');
    },

    //approve or reject action
    // need to post to database
    ApproveOrReject(AoR) {
      if (AoR == 'Approve') {
        if (this.role == 'approver') {
          this.approved = true;
          this.dateApprover = moment(new Date()).format('D MMM YYYY');
        } else if (this.role == 'verifier') {
          this.verified = true;
          this.dateVerifier = moment(new Date()).format('D MMM YYYY');
        }

        this.loading = true;
        localStorage.setItem('ApproveOrNot', 'approve');

        setTimeout(() => {
          this.approveSuccess = true;
        }, 1500);

        setTimeout(() => {
          this.$router.push({ name: 'AdminHRDashboardpage' });
        }, 3000);
      } else if (AoR == 'Reject') {
        if (this.role == 'approver') {
          this.rejectApprover = true;
          this.dateApprover = moment(new Date()).format('D MMM YYYY');
        } else if (this.role == 'verifier') {
          this.rejectVerifier = true;
          this.dateVerifier = moment(new Date()).format('D MMM YYYY');
        }
        localStorage.setItem('ApproveOrNot', 'reject');
      }
    },

    // Download the file
    DownloadFile() {
      let url =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/ReceiptSwiss.jpg/170px-ReceiptSwiss.jpg';

      fileSaver.saveAs(url, 'receipt.jpg');
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
  border-bottom-left-radius: 16px;
}

.details tr td:last-child {
  display: none;
}
.details tr th:last-child {
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
  }

  input {
    display: none;
  }

  .details h1 {
    font-size: 20px;
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

  #claimant-informations {
    grid-template-columns: repeat(4, minmax(0, 1fr));
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
    display: hidden;
  }

  #total {
    position: absolute;
    right: 10px;
  }

  .tab-title {
    font-size: 24px;
    line-height: 30px;
  }

  #table-overflow {
    width: 100%;
    overflow: hidden;
  }
  #table-overflow table {
    width: 100%;
  }

  #table-overflow table tr {
    height: 120%;
    width: 100%;
  }

  #table-overflow table th {
    padding: auto 0;
    margin: auto 0;
    font-size: 8px;
    height: 20px;
  }
  #summaryPrint #table-overflow table td {
    padding: auto 0;
    margin: auto 0;
    font-size: 8px;
    height: 20px;
  }
}
</style>
