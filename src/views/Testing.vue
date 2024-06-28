<template>
  <div>
    <h1>Local Outstation Data</h1>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="!error && results.length === 0">Loading...</div>
    <div v-else>
      <div v-for="(result, index) in results" :key="index" class="result">
        <p><strong>Mileage KM:</strong> {{ result.mileage_km }}</p>
        <p><strong>Starting Point:</strong> {{ result.starting_point }}</p>
        <p><strong>End Point:</strong> {{ result.end_point }}</p>
        <p><strong>Date Event:</strong> {{ result.date_event }}</p>
        <p><strong>Park Fee:</strong> {{ result.park_fee }}</p>
        <p><strong>Toll Fee:</strong> {{ result.toll_fee }}</p>
        <p><strong>Total Fee:</strong> {{ result.total_fee }}</p>
        <p><strong>Transport Specification:</strong> {{ result.transport_specification }}</p>
        <p><strong>Unique Code:</strong></p>
        <img v-if="isImage(result.unique_code)" :src="getImageUrl(result.unique_code)" alt="Unique Code Image" />
        <p v-else>{{ result.unique_code }}</p>
        <p><strong>Reference Number:</strong> {{ result.reference_number }}</p>
        <p><strong>Transport Mode:</strong> {{ result.transport_mode }}</p>
        <p><strong>Trip Mode:</strong> {{ result.trip_mode }}</p>
        <p><strong>Total Mileage:</strong> {{ result.total_mileage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TestingE',
  data() {
    return {
      results: [],
      error: null
    };
  },
  async mounted() {
    await this.getLocalOutstationData();
  },
  methods: {
    async getLocalOutstationData() {
      const baseURL = "http://172.28.28.91:97";
      const endpoint = "/api/User/GetLocalOutstation/M3M3-Finance-2024-06-4020";
      
      try {
        const response = await axios.get(`${baseURL}${endpoint}`);
        if (response.data.status_code === "200") {
          this.results = response.data.result;
          console.log("Fetched results:", this.results);
        } else {
          this.error = response.data.message;
        }
      } catch (error) {
        this.error = 'Error retrieving data: ' + error.message;
        console.error('Error retrieving data:', error);
      }
    },
    getImageUrl(fileObject) {
      console.log("Unique Code:", fileObject);
      if (fileObject instanceof File) {
        return URL.createObjectURL(fileObject);
      } else {
        return ''; // Return an empty string if it's not a valid type
      }
    },
    isImage(fileObject) {
      // Check if fileObject is a URL or a File object
      return fileObject instanceof File || (typeof fileObject === 'string' && (fileObject.startsWith('http') || fileObject.startsWith('data:image')));
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
.result {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
}
</style>
