<template>
  <div class="relative overflow-hidden bg-[#f7fbff] dark:bg-gray-800 rounded-lg px-6 py-8 shadow">
    <h1 class="text-3xl font-bold text-black dark:text-white">Section C</h1>
    <h2 class="font-bold text-xl mt-2">EVALUATION OF KPI ACHIEVEMENTS</h2>
    <p class="mb-6 text-gray-600 dark:text-gray-300">
      (0 = Fail, 1 = Poor, 2 = Needs Improvement, 3 = Competent, 4 = Good, 5 = Outstanding)
    </p>

    <!-- KPI Cards -->
    <div v-if="showKpiCards" class="space-y-5 mt-5">
      <h3 class="text-lg font-semibold flex items-center justify-between">
        {{ kpiCardTitle }}
        <!-- yearEnd show -->
        <button
          v-if="appraisalType === 'yearEnd'"
          @click="showMidYearModal = true"
          class="ml-3 px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-300"
        >
          View Mid-Year KPIs
        </button>
      </h3>
      <div v-for="(kpi, index) in kpiCards" :key="kpi.id" class="rounded-xl border border-cyan-200 bg-[#eaf6fb] p-4 md:p-5 shadow-sm">
        <!-- KPI Title -->
        <div class="rounded-md border border-cyan-200 bg-white px-4 py-2">
          <input
            type="text"
            v-model="kpi.title"
            readonly
            class="w-full border border-white outline-none cursor-not-allowed"
          />
        </div>

        <!-- Result -->
        <div class="mt-3 rounded-md border border-cyan-200 bg-white p-3">
          <textarea
            v-model="kpi.result"
            rows="3"
            :readonly="role !== 'appraisee'"
            placeholder="Results Achieved"
            class="w-full resize-y border border-white outline-none"
          ></textarea>
        </div>

        <!-- File Upload -->
        <div class="mt-3" v-if="role==='appraisee' || role==='appraiser'">
          <div
            class="p-4 bg-white border-2 border-dashed rounded-md text-center transition"
            :class="role==='appraisee' ? 'cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-500' : 'cursor-not-allowed opacity-60'"
            @dragover.prevent="role==='appraisee' && $event.preventDefault()"
            @drop.prevent="role==='appraisee' && handleDrop($event, index)"
          >
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Drag & Drop files here or click to upload
            </p>
            <input
              v-if="role==='appraisee'"
              type="file"
              multiple
              accept=".png,.jpeg,.jpg,.pdf,.xlsx"
              class="hidden"
              :ref="'fileInput'+index"
              @change="handleFileChange($event, index)"
            />
            <button
              type="button"
              class="mt-2 px-4 py-1 text-sm rounded"
              :class="role==='appraisee'
                ? 'bg-blue-100 hover:bg-blue-300 text-blue-800'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'"
              @click="role==='appraisee' && $refs['fileInput'+index][0].click()"
            >
              Select Files
            </button>
          </div>

          <!-- File list -->
          <div v-if="kpi.files && kpi.files.length" class="mt-4 space-y-2">
            <div
              v-for="(file, fIndex) in kpi.files"
              :key="fIndex"
              class="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-2 rounded shadow"
            >
              <div class="flex items-center space-x-2">
                <div v-if="isImage(file)" class="w-10 h-10 rounded overflow-hidden border border-gray-200">
                  <img :src="file.url" alt="preview" class="w-full h-full object-cover" />
                </div>
                <a :href="file.url" target="_blank" class="text-sm text-blue-600 hover:underline">
                  {{ file.name }}
                </a>
              </div>
              <button
                v-if="role==='appraisee'"
                @click="deleteFile(index, fIndex)"
                class="border-dashed rounded-md text-red-500 hover:text-yellow-500"
              >
                ✕
              </button>
            </div>
          </div>
        </div>

        <!-- Score -->
        <div class="mt-3 rounded-md border border-cyan-200 bg-white p-3">
          <p class="text-sm font-semibold">Score (0-5)</p>
          <div class="mt-2 flex flex-wrap items-center gap-3">
            <div v-if="role==='appraisee'" class="flex items-center gap-2">
              <span class="text-sm">Appraisee:</span>
              <input
                type="number"
                min="0"
                max="5"
                v-model.number="kpi.score.appraisee"
                @input="validateScore(kpi,'appraisee')"
                class="w-14 rounded-md border px-2 py-1 text-center"
              />
            </div>
            <div v-if="role==='appraiser'" class="flex items-center gap-2">
              <span class="text-sm">Appraisee:</span>
              <input
                type="number"
                readonly
                :value="kpi.score.appraisee"
                class="w-14 rounded-md border px-2 py-1 text-center bg-gray-100"
              />
            </div>
            <div v-if="role==='appraiser'" class="flex items-center gap-2">
              <span class="text-sm">Appraiser:</span>
              <input
                type="number"
                min="0"
                max="5"
                v-model.number="kpi.score.appraiser"
                @input="validateScore(kpi,'appraiser')"
                class="w-14 rounded-md border px-2 py-1 text-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Total Score -->
    <div v-if="showKpiCards" class="mt-5 rounded-md border border-cyan-200 bg-white p-3 flex gap-6">
      <div class="flex items-center gap-2">
        <span class="text-sm">Total Score by Appraisee:</span>
        <input
          type="text"
          readonly
          :value="formattedTotalAppraisee"
          class="w-32 rounded-md border px-2 py-1 text-center bg-gray-100"
        />
      </div>
      <div v-if="role==='appraiser'" class="flex items-center gap-2">
        <span class="text-sm">Total Score by Appraiser:</span>
        <input
          type="text"
          readonly
          :value="formattedTotalAppraiser"
          class="w-32 rounded-md border px-2 py-1 text-center bg-gray-100"
        />
      </div>
    </div>

    <!-- Set KPI -->
    <div v-if="showSetKpi" class="bg-white p-4 rounded shadow border border-gray-200 mt-5">
      <h2 class="text-lg font-semibold text-gray-700 mb-2">{{ setKpiLabel }}</h2>
      <div v-for="(kpi, idx) in nextYearKPIs" :key="idx" class="py-2">
        <input
          v-model="nextYearKPIs[idx]"
          class="w-full p-2 border rounded mb-2"
          placeholder="New KPI"
        />
      </div>
      <button @click="addNewKpi" class="mt-2 text-blue-600 hover:underline">+ Add KPI</button>
    </div>

    <!-- Mid-Year PopUp -->
    <div v-if="showMidYearModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div class="bg-white rounded-lg p-6 w-11/12 md:w-3/4 max-h-[80vh] overflow-y-auto">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-semibold">Mid-Year KPIs</h3>
          <button @click="showMidYearModal=false" class="text-red-500 font-bold">✕</button>
        </div>
        <div v-for="(kpi, idx) in midYearKpiCards" :key="idx" class="border p-3 rounded mb-2 bg-gray-50">
          <p class="font-semibold">{{ kpi.title }}</p>
          <p>Result: {{ kpi.result }}</p>
          <p>Score: Appraisee {{ kpi.score.appraisee }}, Appraiser {{ kpi.score.appraiser }}</p>
        </div>
      </div>
    </div>

    <!-- Save Button -->
    <div class="flex justify-end mt-6">
      <button
        class="px-9 py-2 bg-blue-400 text-black hover:bg-blue-700 transition rounded-xl"
        :disabled="!isFormValid"
        :class="{ 'opacity-50 cursor-not-allowed': !isFormValid }"
        @click="saveSectionC"
      >
        SAVE
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['role','appraisalType','formData','position'],
  data() {
    return {
      kpiCards: [],
      nextYearKPIs: [''],
      showMidYearModal:false,
      midYearKpiCards:this.formData?.sectionC?.midYearKpiCards || []
    };
  },
  computed: {
    purposeOptions() {
      return this.formData?.sectionA?.purpose?.toString().toLowerCase() || '';
    },
    showKpiCards() {
      return !(this.purposeOptions==='probation');
    },
    showSetKpi() {
      return this.role!=='appraisee';
    },
    kpiCardTitle() {
      if(this.purposeOptions==='probation') return '';
      return this.appraisalType==='midYear'?'First Half of the Year KPIs':'Second Half of the Year KPIs';
    },
    setKpiLabel() {
      return this.appraisalType==='midYear'?'Set KPIs for Second Half':'Set KPIs for Next Year';
    },
    isFormValid() {
  // Probation 
  if (this.purposeOptions === 'probation') {
    return this.role === 'appraiser' 
      ? (Array.isArray(this.nextYearKPIs) && this.nextYearKPIs.length >= 3 && this.nextYearKPIs.every(k => k.trim() !== '')) 
      : true;
  }
  // Appraisee 
  if (this.role === 'appraisee') {
    return this.kpiCards.every(k => 
      k.score.appraisee !== null &&
      !isNaN(k.score.appraisee) &&
      k.score.appraisee >= 0 &&
      k.score.appraisee <= 5
    );
  }
  // Appraiser 
  if (this.role === 'appraiser') {
    const scoreValid = this.kpiCards.every(k => 
      k.score.appraiser !== null &&
      !isNaN(k.score.appraiser) &&
      k.score.appraiser >= 0 &&
      k.score.appraiser <= 5
    );
    const kpiValid = Array.isArray(this.nextYearKPIs) &&
                     this.nextYearKPIs.length >= 3 &&
                     this.nextYearKPIs.every(k => k.trim() !== '');

    return scoreValid && kpiValid;
  }
  return false;
},

    formattedTotalAppraisee(){
      const totalScore=this.kpiCards.reduce((sum,k)=>sum+(k.score.appraisee||0),0);
      const totalKpis=this.kpiCards.length||1;
      return ((totalScore/(totalKpis*5))*40).toFixed(2);
    },
    formattedTotalAppraiser(){
      const totalScore=this.kpiCards.reduce((sum,k)=>sum+(k.score.appraiser||0),0);
      const totalKpis=this.kpiCards.length||1;
      return ((totalScore/(totalKpis*5))*40).toFixed(2);
    }
  },
  mounted() {
  this.kpiCards = this.formData?.sectionC?.kpiCards?.length
    ? this.formData.sectionC.kpiCards
    : [
        {id:1,title:'',result:'',files:[],score:{appraisee:null,appraiser:null}},
        {id:2,title:'',result:'',files:[],score:{appraisee:null,appraiser:null}},
        {id:3,title:'',result:'',files:[],score:{appraisee:null,appraiser:null}}
      ];

  this.nextYearKPIs = this.formData?.sectionC?.nextYearKPIs || [''];
  this.midYearKpiCards = this.formData?.sectionC?.midYearKpiCards || [];
}
,
  methods:{
    saveSectionC() {
  const sectionCData = { 
    ...(this.formData.sectionC || {}), 

    kpiCards: this.kpiCards,
    nextYearKPIs: this.nextYearKPIs,
    midYearKpiCards: this.midYearKpiCards,

    totalScore: { ...(this.formData.sectionC?.totalScore || {}) }
  };

  const totalKpis = this.kpiCards.length || 1;
  const totalAppraiserRaw = this.kpiCards.reduce((sum, k) => sum + (k.score.appraiser || 0), 0);
  const totalAppraiserScore = ((totalAppraiserRaw / (totalKpis * 5)) * 40).toFixed(2);

  const period = this.appraisalType === 'midYear' ? 'mid' : 'end';
  if (!sectionCData.totalScore[period]) sectionCData.totalScore[period] = {};
  sectionCData.totalScore[period].appraiser = parseFloat(totalAppraiserScore);

  this.$emit('update-form', 'sectionC', sectionCData);
  this.$emit('next-section', 'C');
}
,
    addNewKpi(){ this.nextYearKPIs.push(''); },
    handleDrop(event,index){
      const files=Array.from(event.dataTransfer.files);
      this.kpiCards[index].files.push(...files.map(f=>({name:f.name,url:URL.createObjectURL(f)})));
    },
    handleFileChange(event,index){
      const files=Array.from(event.target.files);
      this.kpiCards[index].files.push(...files.map(f=>({name:f.name,url:URL.createObjectURL(f)})));
    },
    deleteFile(kpiIndex,fileIndex){
      this.kpiCards[kpiIndex].files.splice(fileIndex,1);
    },
    isImage(file){
      return /\.(jpg|jpeg|png|gif)$/i.test(file.name);
    },
    validateScore(kpi,roleType){
      let val=kpi.score[roleType];
      if(val===null||isNaN(val)) kpi.score[roleType]=null;
      else if(val<0) kpi.score[roleType]=0;
      else if(val>5) kpi.score[roleType]=5;
      else kpi.score[roleType]=Math.floor(val);
    }
  }
};
</script>
