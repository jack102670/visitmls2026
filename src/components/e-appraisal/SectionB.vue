<template>
  <div class="relative overflow-hidden bg-[#f7fbff] dark:bg-gray-800 rounded-lg px-6 py-8 shadow-x">
    <h1 class="text-3xl font-bold text-black dark:text-white">Section B</h1>
    <h2 class="font-bold text-xl mt-2">EVALUATION OF PERFORMANCE FACTORS</h2>
    <p class="mb-6 text-gray-600 dark:text-gray-300">
      (0 = Fail, 1 = Poor, 2 = Needs Improvement, 3 = Competent, 4 = Good, 5 = Outstanding)
    </p>

    <div class="space-y-8">
      <template v-for="(field, fIndex) in fields" :key="fIndex">
        <div class="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-semibold text-black dark:text-white">{{ field.title }}</h3>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
              {{ sectionScore(field) }}
            </div>
          </div>

          <div class="space-y-6">
            <template v-for="sub in field.items" :key="sub.key">

              <!-- Appraisee Mid-Year + Probation -->
              <div
                v-if="role==='appraisee' && appraisalType==='midYear' && (purposeOptions==='mid-year' || purposeOptions==='probation')"
                class="flex items-center justify-between py-2"
              >
                <div class="flex items-center space-x-3 text-gray-900 dark:text-gray-100 font-medium">
                  <p>{{ sub.label }}</p>
                  <button class="text-blue-400 text-sm" :title="sub.info" type="button" aria-label="info">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 9h1v4H9V9zm0-4h1v2H9V5zm1-3a8 8 0 100 16A8 8 0 0010 2z" />
                    </svg>
                  </button>
                </div>
                <div class="flex items-center space-x-4">
                  <label v-for="n in 6" :key="n" class="flex items-center cursor-pointer select-none space-x-1">
                    <input
                      type="radio"
                      :name="`sectionB-mid-appraisee-${sub.key}`"
                      :value="n-1"
                      v-model.number="sectionB[sub.key]"
                      class="accent-blue-600 w-4 h-4"
                    />
                    <span class="text-sm text-gray-700 dark:text-gray-200">{{ n-1 }}</span>
                  </label>
                </div>
              </div>

              <!-- Appraiser Mid-Year + Probation -->
              <div
                v-else-if="role==='appraiser' && appraisalType==='midYear' && (purposeOptions==='mid-year' || purposeOptions==='probation')"
              >
                <div class="flex items-center space-x-2 text-gray-900 dark:text-gray-100 font-medium mb-1">
                  <p>{{ sub.label }}</p>
                  <button class="text-blue-400 text-sm" :title="sub.info" type="button" aria-label="info">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 9h1v4H9V9zm0-4h1v2H9V5zm1-3a8 8 0 100 16A8 8 0 0010 2z" />
                    </svg>
                  </button>
                </div>
                <table class="w-full border-collapse">
                  <thead>
                    <tr class="text-xs text-gray-600 dark:text-gray-300">
                      <th class="w-36 text-left bg-blue-50 dark:bg-gray-600"></th>
                      <th v-for="(label, idx) in scoreLabels" :key="idx" class="text-center py-1 bg-blue-50 dark:bg-gray-600">
                        {{ label }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-blue-50 dark:bg-gray-600 text-center font-semibold">
                      <td>Appraiser</td>
                      <td v-for="score in 6" :key="`mid-appraiser-${sub.key}-${score}`">
                        <input
                          type="radio"
                          :name="`sectionB-mid-appraiser-${sub.key}`"
                          :value="score-1"
                          v-model.number="sectionB[sub.key]"
                          class="accent-blue-600"
                        />
                      </td>
                    </tr>
                    <tr class="bg-gray-100 dark:bg-gray-500 text-center font-semibold">
                      <td>Appraisee</td>
                      <td v-for="score in 6" :key="`mid-appraisee-disabled-${sub.key}-${score}`">
                        <input
                          type="radio"
                          :value="score-1"
                          :checked="formData?.midYear?.sectionB?.[sub.key]===score-1"
                          disabled
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Year-End (Appraisee + Appraiser) -->
              <div
                v-else-if="appraisalType==='yearEnd' && (purposeOptions==='year-end' || purposeOptions==='probation')"
              >
                <div class="flex items-center space-x-2 text-gray-900 dark:text-gray-100 font-medium mb-2">
                  <p>{{ sub.label }}</p>
                  <button class="text-blue-400 text-sm" :title="sub.info" type="button" aria-label="info">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 9h1v4H9V9zm0-4h1v2H9V5zm1-3a8 8 0 100 16A8 8 0 0010 2z" />
                    </svg>
                  </button>
                </div>

                <table class="w-full border-collapse">
                  <thead>
                    <tr class="text-xs text-gray-600 dark:text-gray-300">
                      <th class="w-36 text-left bg-blue-50 dark:bg-gray-600"></th>
                      <th v-for="(label, idx) in scoreLabels" :key="idx" class="text-center py-1 bg-blue-50 dark:bg-gray-600">
                        {{ label }}
                      </th>
                    </tr>
                  </thead>

                  <tbody v-if="role==='appraisee'">
                    <tr class="bg-blue-50 dark:bg-gray-600 text-center font-semibold">
                      <td>END</td>
                      <td v-for="score in 6" :key="`yearEnd-appraisee-${sub.key}-${score}`">
                        <input
                          type="radio"
                          :name="`sectionB-yearEnd-appraisee-${sub.key}`"
                          :value="score-1"
                          v-model.number="sectionB[sub.key]"
                          class="accent-blue-600"
                        />
                      </td>
                    </tr>
                    <tr class="bg-gray-100 dark:bg-gray-500 text-center font-semibold">
                      <td>MID</td>
                      <td v-for="score in 6" :key="`yearEnd-mid-disabled-${sub.key}-${score}`">
                        <input
                          type="radio"
                          :value="score-1"
                          :checked="formData?.midYear?.sectionB?.[sub.key]===score-1"
                          disabled
                        />
                      </td>
                    </tr>
                  </tbody>

                  <tbody v-else-if="role==='appraiser'">
                    <tr class="bg-blue-50 dark:bg-gray-500 text-center font-semibold">
                      <td>Appraiser</td>
                      <td v-for="score in 6" :key="`yearEnd-appraiser-${sub.key}-${score}`">
                        <input
                          type="radio"
                          :name="`sectionB-yearEnd-appraiser-${sub.key}`"
                          :value="score-1"
                          v-model.number="sectionB[sub.key]"
                          class="accent-blue-600"
                        />
                      </td>
                    </tr>
                    <tr class="bg-gray-50 dark:bg-gray-600 text-center font-semibold">
                      <td>Appraisee</td>
                      <td v-for="score in 6" :key="`yearEnd-appraisee-disabled-${sub.key}-${score}`">
                        <input
                          type="radio"
                          :value="score-1"
                          :checked="formData?.midYear?.sectionB?.[sub.key]===score-1"
                          disabled
                        />
                      </td>
                    </tr>
                    <tr class="bg-gray-100 dark:bg-gray-600">
                      <td class="text-center font-semibold">Mid-Year</td>
                      <td colspan="6" class="py-2">
                        <div class="relative text-sm">
                          <div class="flex">
                            <div class="w-1/2 flex justify-center">
                              <span>Appraisee = {{ formData?.midYear?.sectionB?.[sub.key] ?? '-' }}</span>
                            </div>
                            <div class="w-1/2 flex justify-center">
                              <span>Appraiser = {{ formData?.midYear?.sectionBAppraiser?.[sub.key] ?? '-' }}</span>
                            </div>
                          </div>
                          <div class="absolute inset-y-0 left-1/2 flex items-center transform -translate-x-1/2">
                            <span class="px-2">|</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </template>
          </div>
        </div>
      </template>
    </div>

    <div class="mt-8 ml-6 flex justify-between text-base font-semibold">
      <span>Total Score</span>
      <div class="text-lg font-semibold">{{ totalScore.toFixed(2) }}</div>
    </div>

    <div class="flex justify-end mt-6">
      <button
        class="px-9 py-2 bg-blue-400 text-black hover:bg-blue-700 transition rounded-xl"
        :disabled="!isFormValid"
        :class="{ 'opacity-50 cursor-not-allowed': !isFormValid }"
        @click="saveSectionB"
      >
        SAVE
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    role: String,
    appraisalType: String,
    formData: Object,
    position: String
  },
  data() {
    const empty = {
      attendance: null,
      jobKnowledge: null,
      organizing: null,
      workQuality: null,
      creativity: null,
      attitude: null,
      teamwork: null,
      communication: null,
      workEthics: null,
      reliability: null,
      socialRelationship: null,
      managementSkills: null,
      handsOn: null,
      ownership: null
    };
    return {
      sectionB: { ...empty },
      sectionBAppraisee: { ...empty },
      scoreLabels: ["Fail", "Poor", "Needs Improvement", "Competent", "Good", "Outstanding"]
    };
  },
  mounted() {
    if (this.formData?.sectionB) this.sectionB = { ...this.sectionB, ...this.formData.sectionB };
    if (this.formData?.sectionBAppraisee) this.sectionBAppraisee = { ...this.sectionBAppraisee, ...this.formData.sectionBAppraisee };
  },
  watch: {
    'formData.sectionB': {
      handler(newVal) {
        if (newVal) this.sectionB = { ...this.sectionB, ...newVal };
      },
      deep: true
    }
  },
  computed: {
    purposeOptions() {
      return this.formData?.sectionA?.purpose?.toString().toLowerCase() || '';
    },
    fields() {
      const baseFields = [
        {
          title: "(I) ATTENDANCE",
          items: [
            { key: "attendance", label: "PUNCTUALITY & ATTENDANCE", info: "Regular and punctual attendance in accordance with working days & hours" }
          ]
        },
        {
          title: "(II) KNOWLEDGE",
          items: [
            { key: "jobKnowledge", label: "JOB KNOWLEDGE & SKILLS", info: "Demonstrates the knowledge & skills necessary to perform the essential functions of the job" },
            { key: "organizing", label: "ORGANIZING AND PLANNING", info: "Ability to plan, organize & coordinate job to achieve desired work objectives" },
            { key: "workQuality", label: "WORK QUALITY", info: "The accuracy and thoroughness of the task performed" },
            { key: "creativity", label: "CREATIVITY & INNOVATION", info: "Contributing of new ideas, ability to think & act in ways that are new" }
          ]
        },
        {
          title: "(III) PERSONAL AND SOCIAL CAPABILITIES",
          items: [
            { key: "attitude", label: "ATTITUDE & COMMITMENT", info: "Respect superiors and peers. Willingness to take up new task given" },
            { key: "teamwork", label: "TEAM WORK & COOPERATION", info: "Working together collectively & harmoniously to achieve company’s goals" },
            { key: "communication", label: "COMMUNICATIONS & CUSTOMER ORIENTATION", info: "Communication skills, getting along with colleagues, customers & vendors, customer orientation" },
            { key: "workEthics", label: "WORK ETHICS & VALUES", info: "Honesty, loyalty, reliability, initiatives" },
            { key: "reliability", label: "RELIABILITY & INITIATIVE", info: "Takes on additional responsibility as needed and completes assignments on time and with accuracy" }
          ]
        }
      ];
      if (this.position === "ASSISTANT MANAGERS & ABOVE") {
        baseFields.push({
          title: "(IV) MANAGEMENT CAPABILITIES",
          items: [
            { key: "socialRelationship", label: "SOCIAL RELATIONSHIP", info: "Ability to carry oneself in interaction with different levels of people and handle conflict" },
            { key: "managementSkills", label: "MANAGEMENT SKILLS", info: "Judgment & reasoning, problem solving and decision making, leadership" },
            { key: "handsOn", label: "HANDS-ON & INVOLVEMENT", info: "Knowing precisely what is happening. Taking part with the right spirit & a sense of enthusiasm" },
            { key: "ownership", label: "OWNERSHIP & RESPONSIBILITIES", info: "Taking full personal responsibility & be accountable for the impact of our decision & actions" }
          ]
        });
      }
      return baseFields;
    },
    isFormValid() {
      const keys = this.fields.flatMap(f => f.items.map(i => i.key));
      return keys.every(k => typeof this.sectionB[k] === "number");
    },
    totalScore() {
      const sum = this.fields.reduce((acc, field) => acc + this.getWeightedScore(field), 0);
      return Number(sum);
    }
  },
  methods: {
    saveSectionB() {
      const sectionBData = {
        ...(this.formData.sectionB || {}),
        ...this.sectionB,
        totalScore: { ...(this.formData.sectionB?.totalScore || {}) }
      };
      const period = this.appraisalType === 'midYear' ? 'mid' : 'end';
      if (!sectionBData.totalScore[period]) sectionBData.totalScore[period] = {};
      const rounded = parseFloat(this.totalScore.toFixed(2));
      if (this.role === 'appraisee') sectionBData.totalScore[period].appraisee = rounded;
      else if (this.role === 'appraiser') sectionBData.totalScore[period].appraiser = rounded;
      this.$emit('update-form', 'sectionB', sectionBData);
      this.$emit('next-section', 'B');
    },
    sectionScore(field) {
      return `${this.getRawScore(field)} → ${this.getWeightedScore(field).toFixed(2)}`;
    },
    getRawScore(field) {
      return field.items.reduce((sum, item) => {
        const val = this.sectionB[item.key];
        return sum + (typeof val === "number" ? val : 0);
      }, 0);
    },
    getWeightedScore(field) {
      const raw = this.getRawScore(field);
      const title = field.title;
      const isMgr = this.position === "ASSISTANT MANAGERS & ABOVE";
      switch (title) {
        case "(I) ATTENDANCE": return (raw / 5) * 10;
        case "(II) KNOWLEDGE": return (raw / 20) * (isMgr ? 15 : 22);
        case "(III) PERSONAL AND SOCIAL CAPABILITIES": return (raw / 25) * (isMgr ? 20 : 28);
        case "(IV) MANAGEMENT CAPABILITIES": return (raw / 20) * 15;
        default: return raw;
      }
    }
  }
};
</script>
