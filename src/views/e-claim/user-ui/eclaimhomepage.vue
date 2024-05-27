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
          <div class="flex ml-14 mt-5">
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
          </div>

          <hr class="h-mx-auto bg-gray-100 border-0 rounded" />
        </div>
        <section class="container px-4 mx-auto pt-12">
          <div class="flex justify-between items-center">
            <div>
              <h2
                class="text-lg font-medium text-gray-800 dark:text-white ml-1"
              >
                Claim
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
                          <div class="flex items-center gap-x-3">
                            <span>Type Of Request</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Requester</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Reference Number</span>
                          </div>
                        </th>

                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Date</span>
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
                      <tr>
                        <td
                          class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
                        >
                          <div class="inline-flex items-center gap-x-3">
                            <div class="flex items-center gap-x-2">
                              <div>
                                <h2
                                  class="font-medium text-gray-500 dark:text-gray-300"
                                >HQ</h2>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                        >
                          <div class="inline-flex items-center gap-x-3">
                            <div class="flex items-center gap-x-2">
                              <div>
                                <!-- Conditionally display 'Badge Request' if typeofrequest includes 'br' -->
                              </div>
                            </div>
                          </div>Entertainment
                        </td>
                        <td
                          class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                        > MR MAN </td>
                        <td
                          class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                        > ET2584232</td>

                        <td
                          class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                        > 20 July 2024</td>

                        <td
                          class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
                        > pending</td>

                        <td class="px-4 py-4 ml text-sm whitespace-nowrap">
                          <div class="flex items-center gap-x-6">
                            <button
                              class="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
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
                            <!-- this button for edit and deleted  -->
                            <!-- <button
          v-if="requester.status === 'Pending'"
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
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </button>

        <button
          v-if="requester.status === 'Pending'"
          class="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
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
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button> -->
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
    <NewClaimPopUp
      v-if="popup"
      @close="ChangePopUp()"
      :class="[animate ? 'PopUpAnimation' : 'BackAnimation']"
    />
  </main>
</template>

<script>
// import CreateNewClaimPopUp from '@/components/e-claim/CreateNewClaimPopUp.vue';
import NewClaimPopUp from "@/components/e-claim/NewClaimPopUp.vue";

export default {
  components: {
    // CreateNewClaimPopUp,
    NewClaimPopUp,
  },
  name: "homepageeclaiM",
  data() {
    return {
      popup: false,
      animate: false,
    };
  },
  methods: {
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
