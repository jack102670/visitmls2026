<template>
  <main
    class="flex-1 text overflow-y-auto bg-[#CED1DA] dark:bg-gray-900 dark:text-white p-4 sm:ml-64"
  >
    <!-- Header -->
    <div
      class="relative overflow-hidden bg-[#f7fbff] dark:bg-gray-800 rounded-lg px-6 py-8 shadow-xl"
    >
      <h1 class="text-3xl font-bold text-blue-900 dark:text-white">
        PKT GROUP OF COMPANIES
      </h1>
      <h2 class="text-xl font-bold text-blue-800 dark:text-white mt-3">
        PERFORMANCE APPRAISAL FORM
      </h2>
    </div>

    <!-- Section Tabs -->
    <div class="py-2 mt-6 ml-6">
      <ul class="flex flex-wrap text-sm font-medium text-gray-500">
        <li
          v-for="section in availableSections"
          :key="section"
          class="-mb-1"
        >
          <a
            href="#"
            @click.prevent="changeSection(section)"
            :class="[
              'px-6 py-2 rounded-t-xl font-semibold text-xl transition',
              currentSection === section
                ? 'bg-[#f7fbff] text-black hover:bg-blue-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-500'
                : enabledSections.includes(section)
                ? 'bg-[#160959]  text-white cursor-pointer hover:bg-blue-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-500'
                : 'bg-[#CED1DA] text-black cursor-not-allowed opacity-50 dark:bg-gray-900 dark:text-white',
            ]"
            :title="
              !enabledSections.includes(section)
                ? 'Complete previous sections first'
                : ''
            "
          >
            SECTION {{ section }}
          </a>
        </li>
      </ul>
    </div>

    <!-- Current Section Content -->
    <component
      v-if="sectionComponentMap[currentSection]"
      :is="sectionComponentMap[currentSection]"
      :formData="formData"
      :purposeOptions="purposeOptions"
      :role="role"
      :appraisalType="appraisalType"
      :position="userPosition"
      @update-form="updateFormData"
      @next-section="nextSection"
      @submit-form="goToMyAppraisal"
    />
  </main>
</template>

<script>
import SectionA from "./SectionA.vue";
import SectionB from "./SectionB.vue";
import SectionC from "./SectionC.vue";
import SectionD from "./SectionD.vue";
import SectionE from "./SectionE.vue";

export default {
  props: {
    role: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: false
    }
  },
  components: { SectionA, SectionB, SectionC, SectionD, SectionE },

  data() {
    return {
    currentSection: "A",
    enabledSections: ["A"],
    formData: {
      sectionA: {},
      sectionB: {
        totalScore: { mid: { appraiser: 0 }, end: { appraiser: 0 } }
      },
      sectionC: {
        totalScore: { mid: { appraiser: 0 }, end: { appraiser: 0 } }
      },
      sectionD: {
        appraiseeComment: { mid: "", end: "" },
        appraiserComment: { mid: "", end: "" },
        trainingNeed: { mid: false, end: false },
        extension: { enabled: false, months: "" }
      },
      sectionE: {
        trainingPrograms: []
      },
      departmentHead: {
        comment: { mid: "", end: "" }
      }
    },
  
    userPosition: "", //'ASSISTANT MANAGERS & ABOVE'
    appraisalType: "midYear", //'yearEnd','midYear'

  };

  },
  watch: {
  role(newVal) {
    console.log("role changed to:", newVal);
    this.resetSections();
  }
},
  computed: {
    sectionComponentMap() {
      return { A: SectionA, B: SectionB, C: SectionC, D: SectionD, E: SectionE };
    },
    availableSections() {
      const purposeRaw = this.formData.sectionA?.purpose || "";
      const purpose = purposeRaw.toString().trim().toLowerCase();
      const typeNormalized = (this.appraisalType || "").toString().trim().toLowerCase();
      let sections = ["A"];

      if (this.role === "appraisee") {
        if (purpose === "mid-year" || purpose === "year-end") {
          sections = ["A", "B", "C", "D"];
        } else if (purpose === "probation") {
          sections = ["A", "B", "D"];
        }
      } else if (this.role === "appraiser") {
        if (purpose === "mid-year" || purpose === "year-end") {
          sections = ["A", "B", "C", "D"];

          // If trainingNeed is checked, Section E will be displayed
          const needTraining =
            this.appraisalType === "midYear"
              ? this.formData.sectionD.trainingNeed.mid
              : this.formData.sectionD.trainingNeed.end;

          if (needTraining) {
            sections.push("E");
          }
        } else if (purpose === "probation") {
          sections = ["A", "B", "C", "D"];
        }
      }
      return sections;
    },
  },
  methods: {
    changeSection(section) {
      if (this.enabledSections.includes(section)) {
        this.currentSection = section;
      }
    },
    updateFormData(sectionKey, data) {
      this.formData[sectionKey] = data;

      if (sectionKey === "sectionA" && data.purpose) {
        const purpose = data.purpose.toString().toLowerCase();
        if (purpose === "mid-year") this.appraisalType = "midYear";
        else if (purpose === "year-end") this.appraisalType = "yearEnd";
        else if (purpose === "probation") ;
        this.resetSections();
      }
    },
    nextSection(sectionKey) {
      const sectionOrder = this.availableSections || [];
      const currentIndex = sectionOrder.indexOf(sectionKey);
      if (currentIndex === -1) return;

      const next = sectionOrder[currentIndex + 1];

      // Only allow access to E if saving from D
      if (next === "E") {
        if (!this.enabledSections.includes("E")) {
          this.enabledSections.push("E");
        }
      }

      if (next && !this.enabledSections.includes(next)) {
        this.enabledSections.push(next);
      }
      if (next) this.currentSection = next;
    },
    resetSections() {
      this.enabledSections = ["A"];
      this.currentSection = "A";
    },
    goToMyAppraisal() {
      this.$router.push({ name: "MyAppraisal" });
    },
  },

  mounted() {
    const element = document.querySelector("main");
    const openOrNot = localStorage.getItem("openOrNot");
    if (element && openOrNot === "false") element.classList.add("become-big");
    else if (element && openOrNot === "true") element.classList.remove("become-big");
  },
};
</script>
