<template>
  <div class="pdf-container">
    <div class="pdf-box">
      <button class="generate-button" @click="generatePdf">Generate PDF</button>
   
    </div>
  </div>
</template>

<script>
import jsPDF from 'jspdf';

export default {
  name: "DynamicForms",
  data() {
    return {
      pdfUrl: null,
    };
  },
  methods: {
    generatePdf() {
      const doc = new jsPDF('p', 'mm', 'a4');

      const logo = new Image();
      logo.src = require('@/assets/logo.png');

      doc.addImage(logo, 'PNG', 15, 10, 20, 20);

      doc.text('PKT LOGISTICS (M) SDN BHD', 45, 15);
      doc.text('PERMIT TO WORK', 45, 20);

      doc.setFontSize(12);
      doc.text('Report#: ', 15, 35);
      doc.text('Date of Incident: ', 15, 40);
      doc.text('Incident Time: ', 15, 45);
      doc.text('Name of Parties Involved: ', 15, 50);
  
      doc.text('Witness/ Victim/ Suspect: ', 15, 55);
         doc.text('Security Team Member: ', 130, 35);
      doc.text('Location of Incident: ', 130, 40);

      doc.setFontSize(12);
      doc.text('DETAILED DESCRIPTION OF INCIDENT (If necessary, attach additional supporting sheets) ', 15, 90);
      doc.rect(11, 85, 180, 7);
      doc.rect(11, 85, 180, 30);

      doc.setFontSize(12);
      doc.text('Disposition of the Case: ', 15, 125);
      doc.rect(11, 120, 180, 7);
      doc.rect(11, 120, 180, 30);


     

      // Add more form fields here

      const pdfData = doc.output('dataurlnewwindow');
  
      this.pdfUrl = pdfData;
    }
  }
}
</script>

<style>
.pdf-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.pdf-box {
  border: 2px solid #007bff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #f8f9fa;
}

.generate-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
}

.pdf-preview {
  margin-bottom: 10px;
}

.download-link {
  display: block;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
}
</style>
