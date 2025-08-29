<template>
  <div class="relative overflow-hidden bg-[#f7fbff] dark:bg-gray-800 rounded-lg px-6 py-8 shadow-xl">

    <!--Full Name & Company Name-->
    <div class="flex justify-between items-start w-full">
      <div class="flex flex-col w-[48%]">
          <label class="block mb-2 text-xl font-bold text-primary dark:text-gray-400">Full Name</label>
          <input type="text" v-model="form.fullName" class="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white" readonly />
    </div>

    <div class="flex flex-col w-[48%]">
        <label class="block mb-2 text-xl font-bold text-primary dark:text-gray-400">Company's Name</label>
        <input type="text" v-model="form.companyName" class="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white" readonly />
      </div>
    </div>

    <!--Designation & Date Joined-->
    <div class="flex justify-between items-start mt-6 w-full">
      <div class="flex flex-col w-[48%]">
        <label class="block mb-2 text-xl font-bold text-primary dark:text-gray-400">Designation</label>
        <input type="text" v-model="form.designation" class="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white" readonly />
      </div>

      <div class="flex flex-col w-[48%]">
        <label class="block mb-2 text-xl font-bold text-primary dark:text-gray-400">Date Joined</label>
        <input type="text" v-model="form.dateJoined" class="input-box rounded-md w-full dark:bg-gray-600 border border-gray-300" readonly />
      </div>
    </div>

    <!-- Purpose & Period -->
    <div class="flex justify-between items-start mt-6 w-full">
      <div class="flex flex-col w-[48%]">
        <label class="block mb-2 text-xl font-bold text-primary dark:text-gray-400">Purpose of Appraisal <span class="text-red-500">*</span></label>
        <div class="rounded-xl border border-gray-300 px-6 py-5 bg-white dark:bg-gray-600 space-y-4">
          <div v-for="option in purposeOptions" :key="option" @click="form.purpose = option" class="flex justify-between items-center cursor-pointer">
            <span class="text-lg font-bold text-gray-900 dark:text-white">{{ option }}</span>
            <div class="w-10 h-7 rounded-full bg-gray-300 shadow-md flex items-center justify-center transition">
              <svg v-if="form.purpose === option" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="black" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col w-[48%]">
        <label class="block mb-2 text-xl font-bold text-primary dark:text-gray-400">
          Period of Assessment <span class="text-red-500">*</span>
        </label>
        <select
          v-model="form.period"
          class="input-box rounded-md w-full text-gray-600 dark:bg-gray-600 dark:text-white border border-gray-300"
        >
          <option value="" disabled>Select Month</option>
          <option v-for="month in 12" :key="month" :value="month">{{ month }} Month</option>
        </select>
      </div>
    </div>

    <!-- Job Description Upload -->
    <h1 class="text-3xl font-bold text-black dark:text-white mt-9">Section A</h1>
    <div class="dark:bg-gray-600 rounded-lg px-6 py-8 bg-white mt-4 border border-gray-300">
      <p class="text-gray-700 font-semibold dark:text-gray-100">Kindly attach your updated Job Description (JD) with this performance appraisal form and shall be reviewed by the Appraiser.</p>

      <div class="mt-4 p-4 border-2 border-dashed rounded-md text-center cursor-pointer transition hover:bg-blue-50 dark:hover:bg-gray-500" @dragover.prevent @drop.prevent="handleDrop">
        <p class="text-sm text-gray-600 dark:text-gray-300">Drag & Drop files here or click to upload</p>
        <input type="file" multiple accept=".png,.jpeg,.jpg,.pdf,.xlsx" class="hidden" ref="fileInput" @change="handleFileChange" />
        <button type="button" class="mt-2 px-4 py-1 text-sm bg-blue-100 hover:bg-blue-300 text-blue-800 rounded" @click="$refs.fileInput.click()">Select Files</button>
        <p v-if="fileError" class="text-red-500 text-xs mt-2">{{ fileError }}</p>
      </div>

      <div v-if="form.fileUpload.length" class="mt-4 space-y-2">
        <div v-for="(file, index) in form.fileUpload" :key="index" class="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-2 rounded shadow">
          <div class="flex items-center space-x-2">
            <div v-if="isImage(file)" class="w-10 h-10 rounded overflow-hidden border border-gray-200">
              <img :src="getFileUrl(file)" alt="preview" class="w-full h-full object-cover" />
            </div>
            <div v-else class="w-10 h-10 flex items-center justify-center bg-gray-200 rounded"></div>
            <a :href="getFileUrl(file)" target="_blank" class="text-sm text-blue-600 hover:underline">{{ getFileName(file) }}</a>
          </div>
          <button @click="deleteFile(index)" class="text-red-500 hover:text-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Save Button -->
    <div class="mt-6 text-right">
      <button type="button" class="px-9 py-2 bg-blue-400 text-black hover:bg-blue-700 transition rounded-xl" 
      @click="saveSectionA" 
      :disabled="!isFormValid" 
      :class="{ 'opacity-50 cursor-not-allowed': !isFormValid }"
      >SAVE
    </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionA',
  props: {
    formData: Object,
    role: String,         
    appraisalType: String 
  },
  data() {
    return {
      form: {
        fullName: '',
        companyName: '',
        designation: '',
        dateJoined: '',
        purpose: '',
        period: '',
        fileUpload: [],
      },
      currentAppraisalType: '',
      fileError: '',
      fileLimit: 10,
      fileTypes: ['image/png', 'image/jpeg', 'application/pdf', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
    };
  },
  computed: {
  isFormValid() {
    return this.form.purpose && this.form.period && this.form.fileUpload.length > 0;
  },
  purposeOptions() {
    return ['Probation', 'Mid-Year', 'Year-End'];
  },

},

  mounted() {
    this.fetchUserProfile();
    if (this.formData?.sectionA) {
      this.form = { ...this.form, ...this.formData.sectionA };
    }
  },
  methods: {
    async fetchUserProfile() {
      const user = {
        name: 'ALI BIN ABU',
        company_name: 'PKT LOGISTIC (M) SDN BHD',
        designation: 'ICT',
        dateJoined: '2024-07-02'
      };
      this.form.fullName = user.name;
      this.form.companyName = user.company_name;
      this.form.designation = user.designation;
      this.form.dateJoined = user.dateJoined;
    },
    handleFileChange(e) {
      const files = Array.from(e.target.files);
      this.processFiles(files);
    },
    handleDrop(e) {
      const files = Array.from(e.dataTransfer.files);
      this.processFiles(files);
    },
    processFiles(files) {
      this.fileError = '';
      const validFiles = files.filter(file => this.fileTypes.includes(file.type));
      if (validFiles.length !== files.length) {
        this.fileError = 'Only png, jpeg, pdf, or xlsx files are allowed.';
      }
      const total = this.form.fileUpload.length + validFiles.length;
      if (total > this.fileLimit) {
        this.fileError = `You can only upload up to ${this.fileLimit} files.`;
        return;
      }
      this.form.fileUpload = [...this.form.fileUpload, ...validFiles];
    },
    deleteFile(index) {
      this.form.fileUpload.splice(index, 1);
    },
    getFileUrl(file) {
      return typeof file === 'string' ? file : URL.createObjectURL(file);
    },
    getFileName(file) {
      return typeof file === 'string' ? file.split('/').pop() : file.name;
    },
    isImage(file) {
      const type = typeof file === 'string' ? '' : file.type;
      return type.startsWith('image/');
    },
    saveSectionA() {
      this.$emit('update-form', 'sectionA', { ...this.form });
      this.$emit('next-section', 'A');
    }
  }
};
</script> 
