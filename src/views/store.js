export const formStore = {
  formData: {
    claimantName: '',
    companyName: '',
    department: '',
    costCenter: '',
    designation: '',
    reportName: '',
    internalOrder: '',
    reportDate: '',
    reportStartDate: '',
    reportEndDate: '',
    memo: ''
  },

  setFormData(data) {
    this.formData = { ...this.formData, ...data };
  },

  getFormData() {
    return this.formData;
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
      reportDate: '',
      reportStartDate: '',
      reportEndDate: '',
      memo: ''
    };
  }
};
let refNumber = ''; // Variable to store refNumber

export function setRefNumber(newRefNumber) {
  refNumber = newRefNumber;
}

export function getRefNumber() {
  return refNumber;
}


export const store = {
  data: {
    selectedLocation: null,
    userdetails: [],
    token: null,
    role: null,
    OGR: null,
  },

  setSelectedLocation(locationId, locations) {
    const location = locations.find((loc) => loc.id === locationId);
    this.data.selectedLocation = location ? location.name : null;

    // Save to local storage
    localStorage.setItem("selectedLocation", this.data.selectedLocation);
  },

  getSelectedLocation() {
    if (!this.data.selectedLocation) {
      this.data.selectedLocation = localStorage.getItem("selectedLocation");
    }
    return this.data.selectedLocation;
  },

  // Session handling methods
  setSession(userdetails, token, role) {
    this.data.userdetails = userdetails;
    this.data.token = token;
    this.data.role = role; // Set the role

    // Store user details, token, and role in localStorage
    localStorage.setItem("userdetails", JSON.stringify(userdetails));
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
  },
  setOGR(OGR) {
    this.data.OGR = OGR;
    localStorage.setItem("OGR", OGR.toString()); // Assuming OGR is a number
  },

  getOGR() {
    if (this.data.OGR === null) {
      this.data.OGR = localStorage.getItem("OGR");
    }
    return this.data.OGR;
  },

  // New method to get the user role
  getRole() {
    if (!this.role) {
      this.role = localStorage.getItem("role");
    }
    return this.role;
  },

  clearSession() {
    this.data.userdetails = null;
    this.data.token = null;
    this.data.role = null;
    this.data.OGR = null;

    // Clear session from localStorage
    localStorage.removeItem("userdetails");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("OGR");
  },

  getSession() {
    const userDetails = JSON.parse(localStorage.getItem("userdetails"));
    const token = localStorage.getItem("token");

    if (userDetails && token) {
      return { userDetails, token };
    }

    return null;
  },
};
