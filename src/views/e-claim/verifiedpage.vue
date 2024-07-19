<!-- Box Info for User View-->
<template>
  <main class="flex-1 text overflow-y-auto bg-[#CED1DA] p-4 sm:ml-64">
    <div class="container mx-auto">
      <div
        class="relative overflow-hidden bg-[#f7fbff] border-gray-200 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <div class="flex justify-between">
          <div class="flex justify-start flex-col ml-5">
            <h2 class="text-3xl font-bold text-blue-900">
              PKT GROUP OF COMPANIES
            </h2>
            <h3 class="text-xl font-bold text-blue-800">
              Claim for Reimbursement of All Expenses
            </h3>
          </div>
          <!-- <div class="flex ml-14 mt-5">
              <button @click="ChangePopUp()" class="p-2 flex items-center">
                Add claim
                <span class="ml-2 border border-2 px-4 border-blue-800">
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
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </button>
            </div> -->

          <hr class="h-mx-auto bg-gray-100 border-0 rounded" />
        </div>
        <section class="container px-4 mx-auto pt-12">
          <div class="flex justify-between items-center">
            <div>
              <h2
                class="text-lg font-medium text-gray-800 dark:text-white ml-1 capitalize"
              >
                verifier claim
                <span
                  class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400"
                  >1
                </span>
              </h2>
            </div>
          </div>

          <div class="flex flex-col mt-6">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div
                class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"
              >
                <div
                  class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg"
                >
                  <table
                    ref="myTable"
                    class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 hover stripe"
                  >
                    <thead class="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Branch</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div
                            class="flex items-center gap-x-3 whitespace-nowrap"
                          >
                            <span>Reference Number</span>
                          </div>
                        </th>

                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div
                            class="flex items-center gap-x-3 whitespace-nowrap"
                          >
                            <span>Report Name</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div
                            class="flex items-center gap-x-3 whitespace-nowrap"
                          >
                            <span>Date Requested</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div
                            class="flex items-center gap-x-3 whitespace-nowrap"
                          >
                            <span>Requester Name</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div
                            class="flex items-center gap-x-3 whitespace-nowrap"
                          >
                            <span>Amount</span>
                          </div>
                        </th>

                        <th
                          scope="col"
                          class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Status</span>
                          </div>
                        </th>

                        <th scope="col" class="relative py-3.5 px-4">
                          <span class="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody
                      class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
                    >
                      <tr v-for="(item, index) in items" :key="index">
                        <td
                          class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
                        >
                          <div class="inline-flex items-center gap-x-3">
                            <div class="flex items-center gap-x-2">
                              <div>
                                <h2
                                  class="font-medium text-gray-500 dark:text-gray-300"
                                >
                                  HQ
                                </h2>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 text-balance"
                        >
                          {{ item.reference_number }}
                        </td>
                        <td
                          class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 text-balance"
                        >
                          {{ item.report_name }}
                        </td>

                        <td
                          class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 text-balance"
                        >
                          {{ item.date_requested }}
                        </td>
                        <td
                          class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 text-wrap"
                        >
                          {{ item.requester_name }}
                        </td>
                        <td
                          class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                        >
                          RM {{ item.grand_total }}
                        </td>

                        <td
                          class="px-12 py-4 text-sm font-medium text-gray-700 text-wrap whitespace-nowrap"
                        >
                          <span
                            :class="{
                              'inline-flex items-center px-3 py-1 rounded-full gap-x-2': true,
                              'bg-red-100/60 dark:bg-gray-800':
                                item.admin_status.split('.')[0] === 'REJECT',
                              'bg-yellow-100/60 dark:bg-gray-800':
                                item.admin_status.split('.')[0] === 'RESUBMIT',
                              'bg-green-100/60 dark:bg-gray-800':
                                item.admin_status.split('.')[0] === 'APPROVED',
                              'bg-blue-100/60 dark:bg-gray-800':
                                item.admin_status.split('.')[0] === 'VERIFIED', // Added for VERIFIED status
                            }"
                          >
                            <span
                              :class="{
                                'h-1.5 w-1.5 rounded-full': true,
                                'bg-red-500': item.admin_status === 'REJECT',
                                'bg-yellow-500':
                                  item.admin_status === 'RESUBMIT',
                                'bg-green-500':
                                  item.admin_status === 'APPROVED',
                                'bg-blue-500': item.admin_status === 'VERIFIED', // Added for VERIFIED status
                              }"
                            ></span>
                            <span
                              :class="{
                                'text-sm font-normal': true,
                                'text-red-500': item.admin_status === 'REJECT',
                                'text-yellow-500':
                                  item.admin_status === 'RESUBMIT',
                                'text-green-500':
                                  item.admin_status === 'APPROVED',
                                'text-blue-500':
                                  item.admin_status === 'VERIFIED', // Added for VERIFIED status
                              }"
                              >{{ item.admin_status }}</span
                            >
                          </span>
                        </td>
                        <td class="px-4 py-4 ml text-sm whitespace-nowrap">
                          <div class="flex items-center gap-x-6">
                            <!-- buttons here -->
                            <button
                              @click="ViewClaim(item.reference_number)"
                              class="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                />
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          class="mt-5 grid grid-cols-2 gap-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4"
        ></div>
      </div>
    </div>
  </main>
</template>

<script>
import $ from 'jquery';
import 'datatables.net-dt';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import { store } from '../store.js';

export default {
  components: {
    // CreateNewClaimPopUp,
  },
  name: 'homepageeclaiMq',
  data() {
    return {
      items: [
        // add more items as needed
      ],
      popup: false,
      animate: false,
      userDetails: [],
    };
  },
  methods: {
    ViewClaim(rn) {
      this.$router.push({ name: 'VerifierSummaryClaimpage', params: { rn } });
    },
    initializeDataTable() {
      $(this.$refs.myTable).DataTable({});
    },
    fetchData() {
      fetch(
        `http://172.28.28.91:86/api/ApproverVerifier/GetAllRequestVerifier/9d0da821-5de0-42e5-b268-b5e0bc40e8d1`
      )
        .then((response) => response.json())
        .then((data) => {
          this.items = data.result;
          console.log('api data', this.items);

          this.$nextTick(() => {
            this.initializeDataTable();
          });
        })
        .catch((error) => console.error(error));
    },
    ChangePopUp() {
      if (this.popup == true) {
        this.animate = !this.animate;

        setTimeout(() => {
          this.popup = !this.popup;
        }, 500);
      } else {
        this.popup = !this.popup;
        this.animate = !this.animate;
      }
    },
  },
  mounted() {
    // Sidebar close or open
    this.userDetails = store.getSession().userDetails;
    this.fetchData();
    store.setControlView('eclaim');
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

<style>
.PopUpAnimation .popup {
  animation: PopUpKeyframes 0.45s ease;
}

.BackAnimation .popup {
  animation: PopDownKeyframes 0.45s ease forwards;
}
@keyframes PopUpKeyframes {
  0% {
    transform: scale(0);
  }
  65%,
  80% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes PopDownKeyframes {
  0% {
    transform: scale(1);
  }
  30%,
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(0);
  }
}
</style>
