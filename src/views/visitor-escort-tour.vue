<template>
  <main
    class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto"
  >
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <section
          class="max-w-4xl p-6 mx-auto bg-white border-2 border-gray-200 rounded-md dark:bg-gray-800"
        >
          <h2
            class="text-2xl font-bold text-gray-700 capitalize dark:text-white"
          >
            VISITOR / ESCORT / TOUR
          </h2>
          <div class="pt-2">
            <hr />
          </div>

          <form @submit.prevent="showModal">
            <div
              class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-3"
            >
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Requestername"
                  >Requester Name<span class="text-red-500">*</span></label
                >
                <input
                  v-model="formData.Requestername"
                  id="Requestername"
                  type="text"
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Department"
                  >Department<span class="text-red-500">*</span></label
                >
                <input
                  v-model="formData.Department"
                  id="Department"
                  type="text"
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for=""
                  >Phone Number<span class="text-red-500">*</span></label
                >
                <input
                  v-model="formData.Phonenumber"
                  id="Phonenumber"
                  type="number"
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <!-- Add v-model to other inputs as needed -->
            </div>

            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Date"
                  >Date<span class="text-red-500">*</span></label
                >
                <input
                  v-model="formData.Date"
                  id="Date"
                  type="date"
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Witness"
                  >Location<span class="text-red-500">*</span></label
                >
                <input
                  v-model="formData.location"
                  id="location"
                  type="text"
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="time"
                  >Time<span class="text-red-500">*</span></label
                >
                <input
                  v-model="formData.time"
                  id="time"
                  type="time"
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <!-- Add v-model to other inputs as needed -->
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Customername"
                  >Customer Name</label
                >
                <input
                  v-model="formData.Customername"
                  id="Customername"
                  type="text"
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Noofpax"
                  >No Of Pax<span class="text-red-500">*</span></label
                >
                <input
                  v-model="formData.Noofpax"
                  id="Noofpax"
                  type="number"
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div
              class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1 mx-auto w-full"
            >
              <div class="w-full">
                <label
                  for="Purpose"
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  >Purpose<span class="text-red-500">*</span></label
                >
                <textarea
                  v-model="formData.Purpose"
                  id="Purpose"
                  class="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  rows="2"
                  required
                ></textarea>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Noofparkingspace"
                  >No Of Parking Space<span class="text-red-500">*</span></label
                >
                <input
                  v-model="formData.Noofparkingspace"
                  id="Noofparkingspace"
                  type="number"
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="font-semibold text-gray-700 dark:text-gray-200"
                  for="Transport"
                  >Transport<span class="text-red-500">*</span></label
                >
                <input
                  v-model="formData.Transport"
                  id="Transport"
                  type="text"
                  required
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div class="flex justify-end mt-6">
              <button
                type="submit"
                required
                class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Submit
              </button>
            </div>
          </form>
          <Modal v-show="isModalVisible" @close="closeModal">
            <!-- header -->
            <template v-slot:header>
              <h1 class="font-bold text-xl">Confirmation</h1>
            </template>

            <!-- body -->
            <template v-slot:body>
              <!-- <p class="py-3 text-xs font-bold text-purple-900">
        Forgot your password?
      </p> -->
              <table
                class="w-full mt-4 bg-white border border-gray-300 divide-y divide-gray-300"
              >
                <tr>
                  <td class="py-2 px-4 font-medium">Requester Name:</td>
                  <td class="py-2 px-4">{{ formData.Requestername }}</td>
                </tr>
                <tr>
                  <td class="py-2 px-4 font-medium">Department:</td>
                  <td class="py-2 px-4">{{ formData.Department }}</td>
                </tr>
                <tr>
                  <td class="py-2 px-4 font-medium">Phone number:</td>
                  <td class="py-2 px-4">{{ formData.Phonenumber }}</td>
                </tr>
                <tr>
                  <td class="py-2 px-4 font-medium">Date:</td>
                  <td class="py-2 px-4">{{ formData.Date }}</td>
                </tr>
                <tr>
                  <td class="py-2 px-4 font-medium">location:</td>
                  <td class="py-2 px-4">{{ formData.location }}</td>
                </tr>
                <tr>
                  <td class="py-2 px-4 font-medium">time:</td>
                  <td class="py-2 px-4">{{ formData.time }}</td>
                </tr>
                <tr>
                  <td class="py-2 px-4 font-medium">Customer name:</td>
                  <td class="py-2 px-4">{{ formData.Customername }}</td>
                </tr>
                <tr>
                  <td class="py-2 px-4 font-medium">Perpose:</td>
                  <td class="py-2 px-4">
                    <div class="text-sm max-h-32 overflow-auto">
                      {{ formData.Purpose }}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="py-2 px-4 font-medium">No of parking space:</td>
                  <td class="py-2 px-4">{{ formData.Noofparkingspace }}</td>
                </tr>
                <tr>
                  <td class="py-2 px-4 font-medium">Transport:</td>
                  <td class="py-2 px-4">{{ formData.Transport }}</td>
                </tr>

                <!-- ... (Other modal content) ... -->

                <!-- ... (Other modal content) ... -->
              </table>
            </template>

            <!-- footer -->
            <template v-slot:footer>
              <div class="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  class="rounded-2xl bg-gray-600 shadow-md p-3 my-1 w-full text-white"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  class="rounded-2xl bg-cyan-800 shadow-md p-3 my-1 w-full text-white"
                >
                  Confirm
                </button>
              </div>
              <div class="flex justify-end mt-6"></div>
            </template>
          </Modal>
        </section>
      </div>
    </div>

    <!-- <div class="flex justify-end mt-6">
      <button
        type="submit"
        class="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Submit
      </button>
    </div> -->
  </main>
</template>

<script>
import Modal from "@/components/vmodal.vue";

export default {
  name: "cctvformViews",
  components: {
    Modal,
  },
  data() {
    return {
      uploadedFiles: [],
      isDragging: false,
      formData: {
        Requestername: '', // Add default value if needed
        Department: '', // Add default value if needed
        Phonenumber: '', // Add default value if needed
        Date: '', // Add default value if needed
        location: '', // Add default value if needed
        time: '', // Add default value if needed
        Customername: '', // Add default value if needed
        Purpose: '', // Add default value if needed
        Noofparkingspace: '', // Add default value if needed
        Transport: '', // Add default value if needed
        // Add more form fields here as needed
      },
      isModalVisible: false,
    };
  },

  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>
