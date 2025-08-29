<template>
  <main class="flex-1 text overflow-y-auto bg-[#CED1DA] dark:bg-gray-900 dark:text-white p-4 sm:ml-64">
    <!-- Header -->
    <div class="relative overflow-hidden bg-[#f7fbff] dark:bg-gray-800 rounded-lg px-6 py-8 shadow-xl">
      <h1 class="text-3xl font-bold text-blue-900 dark:text-white">PKT GROUP OF COMPANIES</h1>
      <h2 class="text-xl font-bold text-blue-800 dark:text-white mt-3">PERFORMANCE OVERVIEW</h2>
    </div>
    
  <!-- Employee Info -->
   <div class="relative overflow-hidden bg-[#f7fbff] dark:bg-gray-800 rounded-lg px-6 py-8 shadow-xl mt-6">
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 text-md">
        <div><span class="font-bold">Name of Employee:</span> {{ formData.employeeInfo.fullName }} ({{ formData.employeeInfo.employeeId }})</div>
        <div><span class="font-bold">Date Joined:</span> {{ formData.employeeInfo.dataJoined }}</div>
        <div><span class="font-bold">Name of Company:</span> {{ formData.employeeInfo.companyName }}</div>
        <div><span class="font-bold">Designation:</span> {{ formData.employeeInfo.designation }}</div>
        <div><span class="font-bold">Purpose of Appraisal:</span> {{ formData.sectionA.yearEnd.purpose }}</div>
        <div><span class="font-bold">Period of Assessment:</span> {{ formData.sectionA.yearEnd.periodOfAssessment }}</div>
        <div><span class="font-bold">Assistant Managers & Above:</span> {{ formData.employeeInfo.assistantManagerAbove ? 'Yes' : 'No' }}</div>
        <div><span class="font-bold">Year:</span> {{ formData.employeeInfo.appraisalType }}</div>
    </div>

    <!-- Section A -->
    <div class="bg-white shadow rounded-lg p-4 mb-6 mt-6 border border-gray-200">
      <h2 class="font-semibold text-xl mb-2 dark:text-gray-500">SECTION A: JOD DESCRIPTION</h2>
      <table class="w-full border text-sm dark:text-gray-500">
        <thead class="bg-gray-100 ">
          <tr>
            <th class="border px-2 py-1 ">File</th>
            <th class="border px-2 py-1 ">Uploaded By</th>
            <th class="border px-2 py-1 ">Uploaded At</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="file in [...(formData.sectionA.yearEnd.jobDescriptionFiles || []), ...(formData.sectionA.midYear.jobDescriptionFiles || [])]" 
              :key="file.name">
            <td class="border px-2 py-1 text-blue-600 underline">
              <a :href="file.url" target="_blank ">{{ file.name }}</a>
            </td>
            <td class="border px-2 py-1 ">{{ file.uploadedBy }}</td>
            <td class="border px-2 py-1 ">{{ formatDate(file.uploadedAt) }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Section B -->
    <div class="bg-white shadow rounded-lg p-4 mb-6 mt-6 border border-gray-200">
      <h2 class="font-semibold text-xl mb-2 dark:text-gray-500">Section B: EVALUATION OF PERFORMANCE FACTORS</h2>
      <table class="w-full border text-sm dark:text-gray-500">
        <thead class="bg-gray-100">
          <tr>
            <th class="border px-2 py-1 
            ">Criteria</th>
            <th class="border px-2 py-1
            ">Description</th>
            <th class="border px-2 py-1 w-28 
            ">Mid-Year (Appraisee)</th>
            <th class="border px-2 py-1 w-28 
            ">Mid-Year (Appraiser)</th>
            <th class="border px-2 py-1 w-28 
            ">Year-End (Appraisee)</th>
            <th class="border px-2 py-1 w-28 
            ">Year-End (Appraiser)</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="section in formData.sectionB.fields" :key="section.title">
            <tr class="bg-gray-50">
              <td colspan="6" class="border font-semibold text-left px-2 py-1 
              ">{{ section.title }}</td>
            </tr>
            <tr v-for="item in section.items" :key="item.key">
              <td class="border px-2 py-1 text-left 
              ">{{ item.label }}</td>
              <td class="border px-2 py-1 text-left 
              ">{{ item.info }}</td>
              <td class="border px-2 py-1 text-center
              ">{{ item.score.mid.appraisee }}</td>
              <td class="border px-2 py-1 text-center
              ">{{ item.score.mid.appraiser }}</td>
              <td class="border px-2 py-1 text-center 
              ">{{ item.score.end.appraisee }}</td>
              <td class="border px-2 py-1 text-center
              ">{{ item.score.end.appraiser }}</td>
            </tr>
          </template>  
        <tr class="bg-gray-200 font-bold">
        <td colspan="2" class="border px-2 py-1 text-center 
        ">Total Score</td>
        <td class="border px-2 py-1 text-center 
        ">{{ formData.sectionB.totalScore.mid.appraisee }}</td>
        <td class="border px-2 py-1 text-center 
        ">{{ formData.sectionB.totalScore.mid.appraiser }}</td>
        <td class="border px-2 py-1 text-center 
        ">{{ formData.sectionB.totalScore.end.appraisee }}</td>
        <td class="border px-2 py-1 text-center 
        ">{{ formData.sectionB.totalScore.end.appraiser }}</td>
      </tr>
    </tbody>
      </table>
    </div>

    <!-- Section C -->
    <div class="bg-white shadow rounded-lg p-4 mb-6 border border-gray-100">
      <h2 class="font-semibold text-xl mb-2 dark:text-gray-500">Section C: EVALUATION OF KPI ACHIEVEMENTS</h2>
      <!-- Mid-Year KPIs -->
      <h4 class="font-semibold text-gray-700 mt-3 mb-2 ">Mid-Year KPIs</h4>
      <table class="w-full border border-gray-300 text-sm mb-4 dark:text-gray-500">
        <thead class="bg-gray-100">
          <tr>
            <th class="border px-3 py-2 w-24">NO</th>
            <th class="border px-3 py-2">KPI Title</th>
            <th class="border px-3 py-2">Result</th>
            <th class="border px-3 py-2">Attachments</th>
            <th class="border px-3 py-2 text-center">Appraisee</th>
            <th class="border px-3 py-2 text-center">Appraiser</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="kpi in formData.sectionC.midKpis" :key="'mid-' + kpi.id" class="hover:bg-gray-50">
            <td class="border px-3 py-2">{{ kpi.id }}</td>
            <td class="border px-3 py-2">{{ kpi.title }}</td>
            <td class="border px-3 py-2">{{ kpi.result }}</td>
            <td class="border px-3 py-2">
              <ul>
                <li v-for="file in kpi.attachments" :key="file.url">
                  <a :href="file.url" target="_blank" class="text-blue-600 underline">{{ file.name }}</a>
                </li>
              </ul>
            </td>
            <td class="border px-3 py-2 text-center">{{ kpi.score.appraisee }}</td>
            <td class="border px-3 py-2 text-center">{{ kpi.score.appraiser }}</td>
          </tr>
          <!-- Mid-Year Total -->
          <tr class="bg-gray-200 font-semibold">
            <td colspan="4" class="border px-3 py-2 text-center">Total Score</td>
            <td class="border px-3 py-2 text-center">{{ formData.sectionC.totalScore.mid.appraisee }}</td>
            <td class="border px-3 py-2 text-center">{{ formData.sectionC.totalScore.mid.appraiser }}</td>
          </tr>
        </tbody>
      </table>
      <!-- End-Year KPIs -->
      <h4 class="font-semibold text-gray-700 mt-3 mb-2">End-Year KPIs</h4>
      <table class="w-full border border-gray-100 text-sm mb-4 dark:text-gray-500">
        <thead class="bg-gray-100">
          <tr>
            <th class="border px-3 py-2 w-24">NO</th>
            <th class="border px-3 py-2">KPI Title</th>
            <th class="border px-3 py-2">Result</th>
            <th class="border px-3 py-2">Attachments</th>
            <th class="border px-3 py-2 text-center">Appraisee</th>
            <th class="border px-3 py-2 text-center">Appraiser</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="kpi in formData.sectionC.endKpis" :key="'end-' + kpi.id" class="hover:bg-gray-50">
            <td class="border px-3 py-2">{{ kpi.id }}</td>
            <td class="border px-3 py-2">{{ kpi.title }}</td>
            <td class="border px-3 py-2">{{ kpi.result }}</td>
            <td class="border px-3 py-2">
              <ul>
                <li v-for="file in kpi.attachments" :key="file.url">
                  <a :href="file.url" target="_blank" class="text-blue-600 underline">{{ file.name }}</a>
                </li>
              </ul>
            </td>
            <td class="border px-3 py-2 text-center">{{ kpi.score.appraisee }}</td>
            <td class="border px-3 py-2 text-center">{{ kpi.score.appraiser }}</td>
          </tr>
          <!-- End-Year Total -->
          <tr class="bg-gray-200 font-semibold">
            <td colspan="4" class="border px-3 py-2 text-center">Total Score</td>
            <td class="border px-3 py-2 text-center">{{ formData.sectionC.totalScore.end.appraisee }}</td>
            <td class="border px-3 py-2 text-center">{{ formData.sectionC.totalScore.end.appraiser }}</td>
          </tr>
        </tbody>
      </table>
      <!-- Next-Year KPIs -->
      <h4 class="font-semibold text-gray-700 mt-3 mb-2 ">Next Year KPIs</h4>
      <table class="w-full border border-gray-100 text-sm dark:text-gray-500">
        <thead class="bg-gray-100">
          <tr>
            <th class="border px-3 py-2 w-24">NO</th>
            <th class="border px-3 py-2">KPI Title</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="kpi in formData.sectionC.nextYearKpis" :key="'next-' + kpi.id" class="hover:bg-gray-50">
            <td class="border px-3 py-2">{{ kpi.id }}</td>
            <td class="border px-3 py-2">{{ kpi.title }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Section D -->
    <div class="bg-white shadow rounded-lg p-4 mb-6 border border-gray-100">
      <h2 class="font-semibold text-xl mb-2 dark:text-gray-500">SECTION D: ASSESSMENT OF SUMMART</h2>
      <!-- Assessment of Summary Table -->
      <table class="w-full border text-sm text-center dark:text-gray-500">
        <thead class="bg-gray-100">
          <tr>
            <th class="border px-2 py-1">Period</th>
            <th class="border px-2 py-1">SECTION B</th>
            <th class="border px-2 py-1">SECTION C</th>
            <th class="border px-2 py-1">Assessment Score<br/>(SECTION B + SECTION C)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border px-2 py-1">Mid-Year</td>
            <td class="border px-2 py-1">{{ formData.sectionB.totalScore.mid.appraiser }}</td>
            <td class="border px-2 py-1">{{ formData.sectionC.totalScore.mid.appraiser }}</td>
            <td class="border px-2 py-1">{{ formData.sectionD.totalScore.mid.overall }}</td>
          </tr>
          <tr>
            <td class="border px-2 py-1">Year-End</td>
            <td class="border px-2 py-1">{{ formData.sectionB.totalScore.end.appraiser }}</td>
            <td class="border px-2 py-1">{{ formData.sectionC.totalScore.end.appraiser }}</td>
            <td class="border px-2 py-1">{{ formData.sectionD.totalScore.end.overall }}</td>
          </tr>
          <tr>
            <td class="border px-2 py-1 font-semibold">Total Score of The Year</td>
            <td class="border px-2 py-1">{{ formData.sectionD.totalScore.end.yearSectionB }}</td>
            <td class="border px-2 py-1">{{ formData.sectionD.totalScore.end.yearSectionC }}</td>
            <td class="border px-2 py-1 font-semibold">{{ formData.sectionD.totalScore.end.yearOverall }}</td>
          </tr>
        </tbody>
      </table>
      <!-- Probation -->
      <div class="bg-blue-50 p-3 text-sm mt-4 dark:text-gray-500">
        <p class="font-medium">! For employee on Probation</p>
        <div class="flex items-center mt-1 space-x-6">
          <!-- Mid-Year -->
          <div class="flex items-center">
            <input 
              type="checkbox" 
              class="mr-2" 
              disabled 
              :checked="formData.sectionD.extend.mid"
            />
            <span>Mid-Year Extend</span>
          </div>
          <!-- Year-End -->
          <div class="flex items-center">
            <input 
              type="checkbox" 
              class="mr-2" 
              disabled 
              :checked="formData.sectionD.extend.end"
            />
            <span>Year-End Extend</span>
          </div>
        </div>
        <!-- Extension only if Year-End is true -->
        <div v-if="formData.sectionD.extend.end" class="flex items-center mt-2">
          <span>Extension of probation. Months extended:</span>
          <span class="ml-2 underline">
            {{ formData.sectionD.extend.extension ? formData.sectionD.extend.extension : '____' }}
          </span>
          <span class="ml-1">months</span>
        </div>
      </div>
      <!-- Comments -->
      <div class="mt-4">
        <h4 class="font-semibold text-gray-700 mt-3 mb-2">COMMENTS OF</h4>
        <div class="grid grid-cols-3 gap-4 text-sm dark:text-gray-500">
          <!-- Appraisee -->
          <div class="border p-3 bg-white">
            <p class="font-semibold text-center">APPRAISEE</p>
            <p class="mt-2"><strong>Mid-Year:</strong></p>
            <p>{{ formData.sectionD.appraiseeComment.mid }}</p>
            <p class="mt-2"><strong>Year-End:</strong></p>
            <p>{{ formData.sectionD.appraiseeComment.end }}</p>
          </div>
          <!-- Appraiser -->
          <div class="border p-3 bg-white">
            <p class="font-semibold text-center">APPRAISER</p>
            <p class="mt-2"><strong>Mid-Year:</strong></p>
            <p>{{ formData.sectionD.appraiserComment.mid }}</p>
            <p class="mt-2"><strong>Year-End:</strong></p>
            <p>{{ formData.sectionD.appraiserComment.end }}</p>
          </div>
          <!-- Department Head -->
          <div class="border p-3 bg-white">
            <p class="font-semibold text-center">DEPARTMENT HEAD</p>
            <p class="mt-2"><strong>Mid-Year:</strong></p>
            <p>{{ formData.departmentHead.comment.mid }}</p>
            <p class="mt-2"><strong>Year-End:</strong></p>
            <p>{{ formData.departmentHead.comment.end }}</p>
          </div>
        </div>
      </div>
    </div>




    <!-- Section E -->
    <div class="bg-white shadow rounded-lg p-4 mb-6 border border-gray-100">
      <h2 class="font-semibold text-xl mb-2 dark:text-gray-500">SECTION E: TRAINING NEEDS</h2>
      <!-- Form fields -->
      <div class="space-y-3 mb-4 dark:text-gray-500">
        <div class="flex items-center gap-2">
        <label class="text-sm font-medium">Course Proposed:</label>
        <input type="text" 
              class="border rounded px-2 py-1 text-sm flex-1" 
              :value="formData.sectionE.courseProposed" 
              placeholder="Course Proposed" 
              readonly>
      </div>
        <div>
          <label class="block text-sm font-medium mb-1">Remark:</label>
          <textarea class="w-full border rounded px-2 py-1 text-sm" 
                    :value="formData.sectionE.remark" 
                    placeholder="Remark" 
                    rows="2" 
                    readonly></textarea>
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Organizational Needs:</label>
          <textarea class="w-full border rounded px-2 py-1 text-sm" 
                    :value="formData.sectionE.organizationalNeeds" 
                    placeholder="Organizational Needs" 
                    rows="3" 
                    readonly></textarea>
        </div>
      </div>
      <div class="mb-4 border rounded-2xl">
        <div class="bg-gray-200 px-2 py-1 rounded-t">
          <label class="block text-sm font-medium text-gray-800 text-center">Department Head Remark</label>
        </div>
        <div class="bg-white px-2 py-2 rounded-b text-sm text-gray-900 border-t">
          {{ formData.departmentHead.remark }}
        </div>
      </div>
      </div>

      <!-- Status Table -->
      <div class="overflow-x-auto border rounded">
        <table class="min-w-full text-sm text-left border-collapse dark:text-gray-500">
          <thead class="bg-gray-200">
            <tr>
              <th class="px-2 py-1 border w-24">STATUS</th>
              <th class="px-2 py-1 border">NAME</th>
              <th class="px-2 py-1 border">DESIGNATION</th>
              <th class="px-2 py-1 border">DATE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-2 py-1 border text-green-600 w-24">{{ formData.status.appraiser.submitted ? 'VERIFIED' : 'PENDING' }}</td>
              <td class="px-2 py-1 border">{{ formData.status.appraiser.appraiserName }}</td>
              <td class="px-2 py-1 border">APPRAISER</td>
              <td class="px-2 py-1 border">{{ formData.status.appraiser.submittedAt }}</td>
            </tr>
            <tr>
              <td class="px-2 py-1 border text-green-600 w-24">{{ formData.departmentHead.status ? 'APPRAISER' : 'REJECT' }}</td>
              <td class="px-2 py-1 border">{{ formData.departmentHead.departmentHeadName }}</td>
              <td class="px-2 py-1 border">DEPARTMENT HEAD</td>
              <td class="px-2 py-1 border">{{ formData.departmentHead.submittedAt }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<script>
import formData from "./formData.json";
export default {
  name: "PerformanceOverview",
  data() {
    return { formData };
  },
  methods: {
  formatDate(dateStr) {
    if (!dateStr) return "-";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-MY", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  },
},
  mounted() {
    const element = document.querySelector('main');
    const openOrNot = localStorage.getItem('openOrNot');
    if (element && openOrNot === 'false') element.classList.add('become-big');
    else if (element && openOrNot === 'true') element.classList.remove('become-big');
  }
};
</script>

