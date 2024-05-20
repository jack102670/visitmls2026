<template>
  <main
    class="flex-1 text overflow-y-auto bg-[#CED1DA] p-4 sm:ml-64"
    id="summaryPrint"
  >
    <div class="container mx-auto text-xs lg:text-base" id="summaryPrint">
      <div
        class="relative overflow-hidden bg-[#f7fbff] border-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
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
          <h1 class="text-blue-900 font-bold text-xl text">
            SUMMARY CLAIM FOR REIMBURSEMENT OF ALL EXPENSES
          </h1>
        </div>

        <!-- Information -->
        <div class="flex justify-between my-4">
          <div>
            <div class="mt-5 h-12">
              <h2 class="font-semibold">Name of Company :</h2>
              <p class="text-gray-600">PKT LOGISTIC (M) SDN BHD</p>
            </div>
            <div class="mt-5 h-12">
              <h2 class="font-semibold">Name of Claimaint :</h2>
              <p class="text-gray-600">PKT LOGISTIC (M) SDN BHD</p>
            </div>
            <div class="mt-5 h-12">
              <h2 class="font-semibold">Designation :</h2>
              <p class="text-gray-600">PKT LOGISTIC (M) SDN BHD</p>
            </div>
          </div>
          <div class="text-right">
            <div class="mt-5 h-12">
              <button
                v-show="!seeMore"
                @click="seeMore = !seeMore"
                class="bg-green-600 hover:bg-green-700 text-white rounded-xl px-8 text-sm font-bold py-2"
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
            <div class="mt-5 h-12">
              <h2 class="font-semibold">Date of Claim :</h2>
              <p class="text-gray-600">PKT LOGISTIC (M) SDN BHD</p>
            </div>
            <div class="mt-5 h-12">
              <h2 class="font-semibold">Claim for the Month Ended :</h2>
              <p class="text-gray-600">PKT LOGISTIC (M) SDN BHD</p>
            </div>
          </div>
        </div>

        <!-- Summary -->
        <div class="summary" v-show="!seeMore">
          <!-- Claim Table -->
          <div class="border-2 mt-10 border-gray-400 rounded-2xl">
            <table class="w-full">
              <!-- title -->
              <tr class="h-14 bg-gray-300 text-left rounded-2xl">
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
                class="border-t-2 border-gray-400 h-14 text-base lg:text-lg font-semibold"
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
              class="border-2 border-gray-400 rounded-2xl overflow-y-auto"
              id="table-overflow"
            >
              <table class="w-full">
                <!-- title -->
                <tr class="h-14 bg-gray-300 rounded-2xl">
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
                      @click="openImg = !openImg"
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
                  class="border-t-2 border-gray-400 h-14 text-base lg:text-lg font-semibold"
                >
                  <td class="px-3">TOTAL:</td>
                  <td>RM{{ detail.Total }}</td>
                  <td></td>
                </tr>
              </table>
            </div>
          </div>

          <!-- Image showing -->
          <div
            class="fixed w-screen h-screen top-0 left-0 flex justify-center items-center"
            v-show="openImg"
          >
            <div
              class="absolute bg-black w-screen h-screen top-0 left-0 z-40 opacity-35"
              @click="openImg = false"
            ></div>
            <img
              src="../../assets/images/pkt-blue-logo.jpg"
              alt=""
              class="w-96 h-96 opacity-100 z-50"
            />
            <div class="absolute right-10 top-10 z-50" @click="openImg = false">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="w-12 h-12"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>

        <!-- Status Table -->
        <div
          class="text-xs lg:text-base border-2 mt-10 border-gray-400 rounded-2xl"
          id="table-overflow"
        >
          <table class="w-full">
            <!-- title -->
            <tr class="h-14 bg-gray-300 text-left rounded-2xl">
              <th
                class="rounded-tl-2xl w-[20%] text-center border-r-2 border-gray-400"
              >
                STATUS
              </th>
              <th class="w-[30%] pl-6">NAME</th>
              <th class="w-[30%]">DESIGNATION</th>
              <th class="w-[20%]">DATE</th>
            </tr>

            <!-- table information -->
            <tr
              class="h-14 text-left text-xs lg:text-base border-t-2 border-gray-400"
            >
              <th
                class="text-xs lg:text-base text-center font-semibold border-r-2 border-gray-400"
              >
                VERIFIED
              </th>
              <td class="pl-6">MANIRAJA</td>
              <td class="">HEAD OF DEPARTMENT</td>
              <td class="">20 JULY 2024</td>
            </tr>
            <tr
              class="h-14 text-left text-xs lg:text-base border-t-2 border-gray-400"
            >
              <th
                class="text-xs lg:text-base text-center font-semibold border-r-2 border-gray-400"
              >
                APPROVED
              </th>
              <td class="pl-6">SHU LAN</td>
              <td class="">HR</td>
              <td class="">20 JULY 2024</td>
            </tr>
          </table>
        </div>

        <!-- Resubmission table -->

        <div
          v-show="reject"
          class="text-xs lg:text-base border-2 mt-10 border-gray-400 rounded-2xl"
          id="table-overflow"
        >
          <table class="w-full">
            <!-- title -->
            <tr class="h-14 bg-gray-300 text-left rounded-2xl">
              <th
                class="rounded-tl-2xl w-[20%] text-center border-r-2 border-gray-400"
              >
                STATUS
              </th>
              <th class="pl-6">Remark</th>
            </tr>

            <!-- table information -->
            <tr
              class="h-14 text-left text-xs lg:text-base border-t-2 border-gray-400"
            >
              <th
                class="text-xs lg:text-sm font-medium border-r-2 border-gray-400"
              >
                <div
                  class="mx-auto bg-red-200 rounded-full py-2 flex justify-around items-center text-red-500 lg:w-[90%] w-full"
                >
                  <span
                    class="w-2 h-2 lg:w-3 lg:h-3 ml-2 rounded-[100%] bg-red-600"
                  ></span>
                  <p class="mr-2">RESUBMISSION</p>
                </div>
              </th>
              <td class="pl-6">{{ remark }}</td>
            </tr>
          </table>
        </div>

        <!-- Remark table -->

        <div
          v-show="approve"
          class="text-xs lg:text-base border-2 mt-10 border-gray-400 rounded-2xl"
          id="table-overflow"
        >
          <table class="w-full">
            <!-- title -->
            <tr class="h-14 bg-gray-300 rounded-2xl">
              <th class="pl-6">Remark</th>
            </tr>

            <!-- table information -->
            <tr
              class="h-14 text-left text-xs lg:text-base border-t-2 border-gray-400"
            >
              <td class="pl-6">{{ remark }}</td>
            </tr>
          </table>
        </div>

        <!-- Button -->
        <div
          v-show="approve != true && reject != true"
          class=".detail-table w-full lg:flex-row flex flex-col justify-between h-24 items-center pt-6"
        >
          <div class="flex w-full items-center">
            <label class="font-semibold mr-2 mb-4">Remark: </label>
            <input
              class="py-3 px-2 mb-4 w-full lg:w-96 rounded-lg outline-none border-gray-400 border-2"
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
          class="bg-gray-500 bg-opacity-40 w-screen h-screen fixed left-0 top-0 z-50 flex justify-center items-center"
        >
          <div
            class="bg-white w-96 h-52 rounded-xl fixed flex flex-col justify-center items-center"
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

        <!-- Approve Success Notification -->
        <div
          v-show="approveSuccess"
          class="bg-gray-100 px-10 py-3 rounded-full fixed left-[50%] top-10 z-50 flex justify-center items-center"
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

          <h1>APPROVE SUCCESSFULLY</h1>
        </div>

        <!-- Reject Confirmation -->
        <div
          v-show="confirmReject"
          class="bg-gray-500 bg-opacity-40 w-screen h-screen fixed left-0 top-0 z-50 flex justify-center items-center"
        >
          <div
            class="bg-white w-96 px-8 h-52 rounded-xl fixed flex flex-col justify-center items-center"
          >
            <h1 class="text-xl font-bold">Please write the remark to reject</h1>
            <input
              class="py-4 px-2 w-4/5 rounded-lg mt-4 outline-none border-gray-300 border-2"
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
                @click="(confirmReject = false), (reject = true)"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      seeMore: false,
      openImg: false,
      confirmReject: false,
      confirmApprove: false,
      approveSuccess: false,
      reject: false,
      approve: false,
      remark: '',
      claimData: [
        {
          no: 1,
          type: 'Local/Outstation Travelling Expenses ',
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
          type: 'Outstation/Overseas Travelling Expenses',
          particulars: 'as attached travelling voucher',
          amount: 300,
        },
      ],
      details: [
        {
          No: 1,
          date: '2024-05-16',
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
          No: 2,
          date: '2024-05-16',
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
          No: 3,
          date: '2024-05-16',
          DestinationPurpose: 'LABEL 1',
          MileageKM: 40,
          MileageRM: 80,
          Parking: 10,
          Toll: 20,
          Receipts: '',
          Total: 150,
          tabTitle: 'Local Travelling',
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
  },
  methods: {
    PrintSummary() {
      print();
    },
    ConfirmApprove() {
      this.confirmApprove = false;
      this.approve = true;
      this.approveSuccess = true;
      setTimeout(() => {
        this.approveSuccess = false;
      }, 2000);
    },
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
</style>

<style>
@media print {
  @page {
    size: A4 portrait;
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
