<template>
  <div
    class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-auto"
  >
    <!-- Existing form pages -->
    <PTWpage1
      ref="page1"
      @updateFormData="updateFormData"
      @next-page="scrollToPage2"
    ></PTWpage1>
    <PTWpage2
      ref="page2"
      @updateFormData="updateFormData"
      :addExtraPage="addExtraPage"
      :addExtraPage2="addExtraPage2"
      @update:addExtraPage="updateAddExtraPage"
      @update:addExtraPage2="updateAddExtraPage2"
      @next-page="scrollToPage3"
      @go-back="scrollToPage1"
    ></PTWpage2>

    <PTWpage3
      ref="page3"
      @updateFormData="updateFormData"
      @next-page="scrollToPage4"
      @go-back="scrollToPage2"
    ></PTWpage3>
    <PTWpage4
      ref="page4"
      @updateFormData="updateFormData"
      @next-page="scrollToPage5"
      @go-back="scrollToPage3"
    ></PTWpage4>
    <PTWpage5
      v-if="addExtraPage"
      ref="page5"
      @updateFormData="updateFormData"
      @next-page="scrollToPage6"
      @go-back="scrollToPage4"
    ></PTWpage5>
    <PTWpage6
      v-if="addExtraPage2"
      ref="page6"
      @updateFormData="updateFormData"
      @go-back="scrollToPage5"
    ></PTWpage6>

    <!-- Checkbox for adding extra form pages -->

    <!-- Additional form pages based on checkbox -->

    <!-- Add more extra form pages as needed -->

    <!-- Submit button -->
    <div class="flex justify-end mt-6">
      <button
      @click="showModal"
        class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-900 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
      >
        Submit
      </button>

    </div>
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
      <p class="text-lg">Are you confirm to submit this?</p>
    </template>

    <!-- footer -->
    <template v-slot:footer>
      <div class="grid grid-cols-2 gap-3">
        <button @click="closeModal"
          type="button"
          class="rounded-2xl bg-gray-600 shadow-md p-3 my-1 w-full text-white"
        >
          Cancel
        </button>
        <button
          type="button"
          class="rounded-2xl bg-blue-800 shadow-md p-3 my-1 w-full text-white"
        >
          Confirm
        </button>
      </div>
    </template>
  </Modal>
  </div>
</template>

<script>
import PTWpage1 from "../views/PTWpage1.vue";
import PTWpage2 from "../views/PTWpage2.vue";
import PTWpage3 from "../views/PTWpage3.vue";
import PTWpage4 from "../views/PTWpage4.vue";
import PTWpage5 from "../views/PTWpage5.vue"; // Import additional form pages
import PTWpage6 from "../views/PTWpage6.vue"; // Import additional form pages

import Modal from "../components/vmodal.vue";

export default {
  name: "PTWViews",
  components: {
    PTWpage1,
    PTWpage2,
    PTWpage3,
    PTWpage4,
    PTWpage5,
    PTWpage6,
    Modal,
  },
  data() {
    return {
      formData: {},
      addExtraPage: false, // State to track whether to add extra form pages
      addExtraPage2: false,
      isModalVisible: false,
    };
  },
  methods: {

    updateFormData(data) {
      this.formData = {
        ...this.formData,
        ...data,
        ...this.$refs.PTWpage1.formData,
      };
    },
    updateAddExtraPage(value) {
      this.addExtraPage = value;
    },
    updateAddExtraPage2(value) {
      this.addExtraPage2 = value;
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    submitForm() {
    // Log each property individually
    console.log("Form submitted - Requester Name:", this.requestername);
    console.log("Form submitted - Department:", this.department);
    console.log("Form submitted - Phone number:", this.Phonenumber);
    // ... log other properties ...

    // Or log the entire reactive object
    console.log("Form submitted - Full Data:", this.formData);
  },

    scrollToPage1() {
      this.$refs.page1.$el.scrollIntoView({ behavior: "smooth" });
    },
    scrollToPage2() {
      this.$refs.page2.$el.scrollIntoView({ behavior: "smooth" });
    },
    scrollToPage3() {
      this.$refs.page3.$el.scrollIntoView({ behavior: "smooth" });
    },
    scrollToPage4() {
      this.$refs.page4.$el.scrollIntoView({ behavior: "smooth" });
    },
    scrollToPage5() {
      this.$refs.page5.$el.scrollIntoView({ behavior: "smooth" });
    },
  },
};

</script>
