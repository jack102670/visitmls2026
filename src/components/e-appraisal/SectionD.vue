<template>
  <div class="relative overflow-hidden bg-[#f7fbff] dark:bg-gray-800 rounded-lg px-6 py-8 shadow">
    <h1 class="text-3xl font-bold text-black dark:text-white">Section D</h1>
    <h2 class="font-bold text-xl mt-2">ASSESSMENT OF SUMMARY</h2>

    <!-- Appraiser -->
    <template v-if="role === 'appraiser'">

      <!-- Year-End Appraiser -->
      <template v-if="appraisalType === 'yearEnd'">
        <div class="bg-white rounded-md border border-gray-100 p-3 mt-2">
          <table class="w-full text-center text-xl border-collapse">
            <thead>
              <tr class="bg-gray-100">
                <th class="border px-2 py-2">Period</th>
                <th class="border px-2 py-2">SECTION B</th>
                <th class="border px-2 py-2">SECTION C</th>
                <th class="border px-2 py-2">Assessment Score<br />(SECTION B + SECTION C)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border px-2 py-2">Mid-Year</td>
                <td class="border px-2 py-2">{{ scores.Bmid }}</td>
                <td class="border px-2 py-2">{{ scores.Cmid }}</td>
                <td class="border px-2 py-2">{{ scores.midTotal }}</td>
              </tr>
              <tr>
                <td class="border px-2 py-2">Year-End</td>
                <td class="border px-2 py-2">{{ scores.Bend }}</td>
                <td class="border px-2 py-2">{{ scores.Cend }}</td>
                <td class="border px-2 py-2">{{ scores.endTotal }}</td>
              </tr>
              <tr class="font-semibold">
                <td class="border px-2 py-2">Total Score of The Year</td>
                <td class="border px-2 py-2">{{ ((parseFloat(scores.Bmid)+parseFloat(scores.Bend)).toFixed(2)) }}</td>
                <td class="border px-2 py-2">{{ ((parseFloat(scores.Cmid)+parseFloat(scores.Cend)).toFixed(2)) }}</td>
                <td class="border px-2 py-2">{{ scores.yearTotal }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Extension -->
        <div v-if="purposeOptions === 'probation'" class="mt-12 ml-12 flex items-center gap-2">
          <input type="checkbox" id="extendProb" class="w-4 h-4 accent-blue-600" :checked="formData.sectionD?.extension?.enabled" @change="toggleExtension($event.target.checked)" />
          <label for="extendProb" class="text-xl font-semibold text-black">Extension of probation</label>
          <input v-if="formData.sectionD?.extension?.enabled" type="text" maxlength="2" class="ml-2 w-20 bg-white text-center text-ml outline-none" :value="formData.sectionD?.extension?.months || ''" @input="setExtensionMonths($event.target.value)" />
          <span v-if="formData.sectionD?.extension?.enabled" class="ml-1 text-ml">months</span>
        </div>

        <!-- Training Needs -->
        <div
        v-if="appraisalType === 'yearEnd' && purposeOptions !== 'probation'"
          class="mt-12 flex items-center gap-2"
        >
          <input
            id="trainNeed"
            type="checkbox"
            :checked="trainingNeedChecked"
            @change="toggleTrainingNeeds($event.target.checked)"
          />
          <label for="trainNeed" class="text-xl font-semibold text-black">TRAINING NEEDS</label>
      </div>
        
        <!-- Comments -->
        <p class="mt-12 text-xl font-semibold text-black">COMMENTS OF</p>
        <div class="grid grid-cols-3 gap-4 mt-2">
          <!-- Appraisee -->
          <div class="bg-white border border-blue-100 p-3">
            <p class="text-center text-xl font-semibold">APPRAISEE</p>
            <p class="mt-2 text-ml font-semibold">Mid-Year :</p>
            <p class="min-h-[56px] whitespace-pre-wrap">{{ formData.sectionD?.appraiseeComment?.mid || '-' }}</p>
            <p class="mt-2 text-ml font-semibold">Year-End :</p>
            <p class="min-h-[56px] whitespace-pre-wrap">{{ formData.sectionD?.appraiseeComment?.end || '-' }}</p>
          </div>

          <!-- Appraiser -->
          <div class="bg-white border border-blue-100 p-3">
            <p class="text-center text-xl font-semibold">APPRAISER</p>
            <p class="mt-2 text-ml font-semibold">Mid-Year :</p>
            <p class="min-h-[56px] whitespace-pre-wrap">{{ formData.sectionD?.appraiserComment?.mid || '-' }}</p>
            <p class="mt-2 text-ml font-semibold">Year-End :</p>
            <textarea
              class="w-full h-[72px] border border-blue-100 p-2 text-ml"
              :value="formData.sectionD?.appraiserComment?.end || ''"
              @input="setComment('appraiser','end',$event.target.value)"
            />
          </div>

          <!-- Department Head -->
          <div class="bg-white border border-blue-100 p-3">
            <p class="text-center text-xl font-semibold">DEPARTMENT HEAD</p>
            <p class="mt-2 text-ml font-semibold">Mid-Year :</p>
            <p class="min-h-[56px] whitespace-pre-wrap">{{ formData.departmentHead?.comment?.mid || '-' }}</p>
            <p class="mt-2 text-ml font-semibold">Year-End :</p>
            <p class="min-h-[56px] whitespace-pre-wrap">{{ formData.departmentHead?.comment?.end || '-' }}</p>
          </div>
        </div>

      </template>

      <!-- Mid-Year Appraiser -->
      <template v-else-if="appraisalType === 'midYear'">
        <div class="grid grid-cols-2 gap-6 mt-2">
          <div>
            <div class="bg-white border border-gray-200 rounded-xl p-3">
              <p class="text-center font-semibold text-xl">Score</p>
              <p class="text-center mt-1">Section B: {{ scores.Bmid }}</p>
              <p class="text-center">Section C: {{ scores.Cmid }}</p>
              <p class="text-center font-semibold">Total: {{ scores.midTotal }}</p>
            </div>
          </div>
          <div>
            <p class="text-xl font-semibold mb-1 pl-1">COMMENTS OF APPRAISEE:</p>
            <div class="w-full h-[210px] bg-gray-200 border border-black p-4 text-ml font-bold">
              {{ formData.sectionD?.appraiseeComment?.mid || 'COMMENTS' }}
            </div>
          </div>
        </div>

        <!-- Extension (Mid-Year Appraiser) -->
        <div v-if="purposeOptions === 'probation'" class="mt-12 mb-12 ml-12 flex items-center gap-2">
          <input type="checkbox" id="extendProb" class="w-4 h-4 accent-blue-600" :checked="formData.sectionD?.extension?.enabled" @change="toggleExtension($event.target.checked)" />
          <label for="extendProb" class="text-xl font-semibold text-black">Extension of probation</label>
          <input v-if="formData.sectionD?.extension?.enabled" type="text" maxlength="2" class="ml-2 w-20 bg-white text-center text-ml outline-none" :value="formData.sectionD?.extension?.months || ''" @input="setExtensionMonths($event.target.value)" />
          <span v-if="formData.sectionD?.extension?.enabled" class="ml-1 text-ml">months</span>
        </div>

        <div class="mt-6">
          <p class="text-xl font-semibold mb-1">APPRAISER:</p>
          <textarea class="w-full h-20 bg-white border border-gray-200 p-2 text-ml outline-none" :value="formData.sectionD?.appraiserComment?.mid" @input="setComment('appraiser','mid',$event.target.value)" />
        </div>
      </template>
    </template>

    <!-- Appraisee -->
    <template v-else-if="role === 'appraisee'">
      <!-- Year-End Appraisee -->
      <template v-if="appraisalType === 'yearEnd'">
        <p class="mb-6 text-black font-semibold dark:text-gray-300">COMMENTS OF APPRAISEE</p>
        <div class="grid grid-cols-2 gap-6 mt-2 items-start">
          <div>
            <p class="text-xl font-semibold mb-1 pl-1">Year-End :</p>
            <textarea
              class="w-full h-[210px] bg-white border border-black p-2 text-ml outline-none"
              :value="formData.sectionD?.appraiseeComment?.end"
              @input="setComment('appraisee','end',$event.target.value)"
            />
          </div>
          <div>
            <p class="text-xl font-semibold mb-1 pl-1">Mid-Year :</p>
            <div class="w-full h-[210px] bg-gray-200 border border-black p-4 text-ml font-bold">
              {{ formData.sectionD?.appraiseeComment?.mid || 'COMMENTS' }}
            </div>
          </div>
        </div>
      </template>

      <!-- Mid-Year Appraisee -->
      <template v-else-if="appraisalType === 'midYear'">
        <p class="mt-6 text-black font-semibold dark:text-gray-300">COMMENTS OF APPRAISEE</p>
        <textarea
          class="mt-2 w-full h-[220px] bg-white border border-gray-600 p-2 text-ml outline-none"
          :value="formData.sectionD?.appraiseeComment?.mid"
          @input="setComment('appraisee','mid',$event.target.value)"
        />
      </template>
    </template>

    <!-- Submit Button -->
    <div class="flex justify-end mt-6">
      <button
        class="px-9 py-2 bg-blue-400 text-black hover:bg-blue-700 transition rounded-xl"
        @click="handleSubmit"
      >
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionD",
  props: {
    role: { type: String, required: true },
    appraisalType: { type: String, required: true },
    formData: { type: Object, required: true },
  },
  data() {
    return {
      trainingNeedChecked: this.formData.sectionD?.trainingNeed?.end || false,
    };
  },
  watch: {
    'formData.sectionD.trainingNeed.end'(val) {
      this.trainingNeedChecked = val;
    },
  },
  computed: {
    purposeOptions() {
      return this.formData?.sectionA?.purpose?.toString().toLowerCase() || '';
    },
    buttonText() {
      if (this.role === 'appraiser' && this.appraisalType === 'yearEnd') {
        return this.trainingNeedChecked ? 'SAVE' : 'SUBMIT';
      }
      return 'SUBMIT';
    },
    scores() {
      const Bmid = this.formData.sectionB?.totalScore?.mid?.appraiser || 0;
      const Bend = this.formData.sectionB?.totalScore?.end?.appraiser || 0;
      const Cmid = this.formData.sectionC?.totalScore?.mid?.appraiser || 0;
      const Cend = this.formData.sectionC?.totalScore?.end?.appraiser || 0;
      const midTotal = Bmid + Cmid;
      const endTotal = Bend + Cend;
      const yearTotal = (midTotal + endTotal)/2;
      return {
        Bmid: Bmid.toFixed(2),
        Bend: Bend.toFixed(2),
        Cmid: Cmid.toFixed(2),
        Cend: Cend.toFixed(2),
        midTotal: midTotal.toFixed(2),
        endTotal: endTotal.toFixed(2),
        yearTotal: yearTotal.toFixed(2)
      };
    }
  },
  methods: {
    handleSubmit() {
      if (this.role === 'appraiser' && this.appraisalType === 'yearEnd') {
        if (this.trainingNeedChecked) {
          this.saveSectionD();
        } else {
          this.submitSectionD();
        }
      } else {
        this.submitSectionD();
      }
    },
    setComment(who, period, value) {
      const sectionD = { ...this.formData.sectionD };
      if (who === 'appraisee') {
        sectionD.appraiseeComment = { ...sectionD.appraiseeComment, [period]: value };
      } else if (who === 'appraiser') {
        sectionD.appraiserComment = { ...sectionD.appraiserComment, [period]: value };
      }
      this.$emit('update-form', 'sectionD', sectionD);
    },
    toggleTrainingNeeds(checked) {
      const sectionD = { ...this.formData.sectionD };
      sectionD.trainingNeed = { ...sectionD.trainingNeed, end: checked };
      this.$emit('update-form', 'sectionD', sectionD);
    },
    toggleExtension(checked) {
      const sectionD = { ...this.formData.sectionD };
      sectionD.extension = { ...sectionD.extension, enabled: checked };
      this.$emit('update-form', 'sectionD', sectionD);
    },
    setExtensionMonths(value) {
      const sectionD = { ...this.formData.sectionD };
      sectionD.extension = {
        ...sectionD.extension,
        months: value.replace(/[^0-9]/g, '').slice(0, 2),
      };
      this.$emit('update-form', 'sectionD', sectionD);
    },
    saveSectionD() {
      if (this.formData.sectionD?.trainingNeed?.end) {
        this.$emit('update-form', 'sectionD', this.formData.sectionD);
        this.$emit('next-section', 'D');
      } else {
        this.$emit('update-form', 'sectionD', this.formData.sectionD);
      }
    },
    submitSectionD() {
      this.$emit('update-form', 'sectionD', this.formData.sectionD);
      this.$emit('submit-form');
    },
  },
};
</script>
