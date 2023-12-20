<template>
  <main
    class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto"
  >
    <div class="container mx-auto">
      <div
        class="bg-[#f7fbff] dark:bg-gray-800 dark:ring-offset-gray-900 border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <section
          class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800"
        >
          <h2
            class="text-lg font-semibold text-gray-700 capitalize dark:text-white"
          >
            Teskit Form
          </h2>

          <form @submit.prevent="openPreviewModal">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700 dark:text-gray-200" for="username">Requester Name</label>
                <input v-model="formData.requesterName" id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>

              <div>
                <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Department</label>
                <input v-model="formData.department" id="emailAddress" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>

              <!-- Add v-model to other inputs as needed -->

            </div>

            <div class="flex justify-end mt-6">
              <button type="submit" class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>

    <!-- Modal Component -->
    <Modal :modalOpen="isPreviewModalOpen" :closeModal="closePreviewModal">
      <!-- Content for your custom modal -->
      <h3 class="text-lg font-semibold text-gray-700 dark:text-white">Preview</h3>
      <!-- Display form data here -->
      <p>Requester Name: {{ formData.requesterName }}</p>
      <p>Department: {{ formData.department }}</p>
      <!-- Add more fields as needed -->

      
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
