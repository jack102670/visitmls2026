<template>
  <div
    class="bg-[#f7fbff] dark:bg-gray-800 rounded-lg px-6 py-8 shadow-xl text-sm text-gray-900 dark:text-white"
    v-if="sectionE"
  >
    <h1 class="text-3xl font-bold">Section E</h1>
    <h2 class="font-bold text-xl mt-2">PKT-FR09</h2>

    <h3 class="mt-6 mb-2 text-xl font-semibold">TRAINING NEEDS ANALYSIS FORM</h3>

    <div class="flex mb-4">
      <label class="text-xl font-medium mt-2">Course Proposed:</label>
      <input
        type="text"
        v-model="sectionE.courseProposed"
        required
        class="input-box ml-1 rounded-md dark:bg-gray-600 border border-gray-300 flex-1"
      />
    </div>

    <div class="mb-4">
      <label class="text-xl font-medium">Remark:</label>
      <textarea
        v-model="sectionE.remarks"
        rows="3"
        class="w-full rounded-md dark:bg-gray-600 border border-gray-300"
      ></textarea>
    </div>

    <div>
      <label class="text-xl font-medium">Organizational Needs:</label>
      <textarea
        v-model="sectionE.organizationalNeeds"
        rows="3"
        class="w-full rounded-md dark:bg-gray-600 border border-gray-300"
      ></textarea>
    </div>

    <div class="flex justify-end mt-6">
      <button
        type="button"
        class="px-9 py-2 bg-blue-400 text-black hover:bg-blue-700 transition rounded-xl"
        @click="submitSectionE"
        :disabled="!isFormValid"
        :class="{ 'opacity-50 cursor-not-allowed': !isFormValid }"
      >
        SUBMIT
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    formData: {
      type: Object,
      default: () => ({ sectionE: {} }) 
    }
  },
  data() {
    return {
      sectionE: {
        courseProposed: '',
        remarks: '',
        organizationalNeeds: ''
      }
    };
  },
  computed: {
    isFormValid() {
      return (
        (this.sectionE.courseProposed || '').trim() &&
        (this.sectionE.remarks || '').trim() &&
        (this.sectionE.organizationalNeeds || '').trim()
      );
    }
  },
  mounted() {
    // Safe initialization to ensure the field is not null/undefined
    const s = this.formData?.sectionE || {};
    this.sectionE = {
      courseProposed: s.courseProposed || '',
      remarks: s.remarks || '',
      organizationalNeeds: s.organizationalNeeds || ''
    };
  },
  methods: {
    submitSectionE() {
      this.$emit('update-form', 'sectionE', { ...this.sectionE });
      this.$emit('submit-form');
    }
  }
};
</script>
