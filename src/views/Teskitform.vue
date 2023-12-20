<template>
  <main
    class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto"
  >
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <section
          class="max-w-4xl p-6 mx-auto bg-[#f7fbff] rounded-md  dark:bg-gray-800"
        >
          <h2
            class="text-lg font-semibold text-gray-700 capitalize dark:text-white"
          >
            Teskit Form
          </h2>

          <form @submit.prevent="openPreviewModal">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  class="text-gray-700 dark:text-gray-200"
                  for="requesterName"
                  >Requester Name</label
                >
                <input
                  v-model="formData.requesterName"
                  id="requesterName"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label class="text-gray-700 dark:text-gray-200" for="department"
                  >Department</label
                >
                <input
                  v-model="formData.department"
                  id="department"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <!-- Add v-model to other inputs as needed -->
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
              <div>
                <label class="text-gray-700 dark:text-gray-200" for="username"
                  >Phone number</label
                >
                <input
                  v-model="formData.phonenumber"
                  id="number"
                  type="number"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="text-gray-700 dark:text-gray-200"
                  for="emailAddress"
                  >Date Requested</label
                >
                <input
                  v-model="formData.daterequest"
                  id="daterequest"
                  type="date"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="text-gray-700 dark:text-gray-200"
                  for="emailAddress"
                  >Location</label
                >
                <select
                  v-model="formData.location"
                  id="locatioan"
                  type="email"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <option value="hq">a</option>
                  <option value="hq">b</option>
                </select>
              </div>

              <!-- Add v-model to other inputs as needed -->
            </div>
            <div class="grid grid-cols-2 gap-6 mt-4 sm:grid-cols-4">
              <div>
                <label class="text-gray-700 dark:text-gray-200" for="username"
                  >NO. stock in box</label
                >
                <input
                  v-model="formData.stockinbox"
                  id="stockinbox"
                  type="number"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="text-gray-700 dark:text-gray-200"
                  for="emailAddress"
                  >No. stock in (kit)</label
                >
                <input
                  v-model="formData.stockinkit"
                  id="stockinkit"
                  type="number"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="text-gray-700 dark:text-gray-200"
                  for="emailAddress"
                  >No. of kit out</label
                >
                <input
                  v-model="formData.kitout"
                  id="kitout"
                  type="number"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="text-gray-700 dark:text-gray-200"
                  for="emailAddress"
                  >No. of balance kit</label
                >
                <input
                  v-model="formData.balancekit"
                  id="balacekit"
                  type="number"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <!-- Add v-model to other inputs as needed -->
            </div>

            <div class="flex justify-end mt-6">
              <button
                type="submit"
                class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>

    <Modal :modalOpen="isPreviewModalOpen" :closeModal="closePreviewModal">
      <!-- Content for your custom modal -->
      <div class="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
        <h3 class="text-2xl font-bold text-gray-700 dark:text-white mb-4">
          Preview
        </h3>

        <table
          class="w-full mt-4 bg-white border border-gray-300 divide-y divide-gray-300"
        >
          <tr>
            <td class="py-2 px-4 font-medium">Requester Name:</td>
            <td class="py-2 px-4">{{ formData.requesterName }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 font-medium">Department:</td>
            <td class="py-2 px-4">{{ formData.department }}</td>
          </tr>
          <!-- Add more rows as needed -->
          <tr>
            <td class="py-2 px-4 font-medium">Phone Number:</td>
            <td class="py-2 px-4">{{ formData.phonenumber }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 font-medium">Date Requested:</td>
            <td class="py-2 px-4">{{ formData.daterequest }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 font-medium">Location:</td>
            <td class="py-2 px-4">{{ formData.location }}</td>
          </tr>
          <!-- Add more rows as needed -->
          <tr>
            <td class="py-2 px-4 font-medium">NO. Stock in Box:</td>
            <td class="py-2 px-4">{{ formData.stockinbox }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 font-medium">No. Stock in (Kit):</td>
            <td class="py-2 px-4">{{ formData.stockinkit }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 font-medium">No. of Kit Out:</td>
            <td class="py-2 px-4">{{ formData.kitout }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 font-medium">No. of Balance Kit:</td>
            <td class="py-2 px-4">{{ formData.balancekit }}</td>
          </tr>
          <!-- Add more rows as needed -->
        </table>

        <!-- <div class="flex justify-end mt-6">
          <button
            type="submit"
            class="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
        </div> -->
      </div>
    </Modal>
  </main>
</template>

<script>
import Modal from "@/components/Modal.vue";

export default {
  name: "cctvfromViews",
  components: {
    Modal,
  },
  data() {
    return {
      formData: {
        requesterName: "",
        department: "",
        phonenumber: "",
        daterequest: "",
        location: "",
        stockinbox: "",
        stockinkit: "",
        kitout: "",
        balancekit: "",
        // Add more form fields here
      },
      isPreviewModalOpen: false,
    };
  },
  methods: {
    openPreviewModal() {
      this.isPreviewModalOpen = true;
    },
    closePreviewModal() {
      this.isPreviewModalOpen = false;
    },
    submitForm() {
      // Handle form submission logic here
      this.isPreviewModalOpen = false;
      // You may want to make an API call or perform other actions
    },
  },
};
</script>
