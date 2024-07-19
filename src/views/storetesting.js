// store.js
export const formStore = {
    formData: {
      claimantName: '',
      companyName: '',
      department: '',
      costCenter: '',
      designation: '',
      reportName: '',
      internalOrder: '',
      reportType: 'Finance',
      reportDate: '',
      reportStartDate: '',
      reportEndDate: '',
      memo: '',
      uniqueCode: '',
      uniqueCodeForFileUpload: '',
      fileUpload: [],
      selectedOption: 'Finance',
    },
  
    setFormData(data) {
      this.formData = { ...this.formData, ...data };
      localStorage.setItem('formData', JSON.stringify(this.formData));
    },
  
    getFormData() {
      const storedData = localStorage.getItem('formData');
      return storedData ? JSON.parse(storedData) : this.formData;
    },
  
    clearFormData() {
      this.formData = {
        claimantName: '',
        companyName: '',
        department: '',
        costCenter: '',
        designation: '',
        reportName: '',
        internalOrder: '',
        reportType: 'Finance',
        reportDate: '',
        reportStartDate: '',
        reportEndDate: '',
        memo: '',
        uniqueCode: '',
        selectedOption: '',
        fileUpload: [],
      };
      localStorage.removeItem('formData');
    },
  };
  