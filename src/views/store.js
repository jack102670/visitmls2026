export const store = {
  data: {
    selectedLocation: null,
    userdetails: [],
    token: null,
    role: null
  },

setSelectedLocation(locationId, locations) {
  const location = locations.find(loc => loc.id === locationId);
  this.data.selectedLocation = location ? location.name : null;

  // Save to local storage
  localStorage.setItem('selectedLocation', this.data.selectedLocation);
},


getSelectedLocation() {
 
  if (!this.data.selectedLocation) {
    this.data.selectedLocation = localStorage.getItem('selectedLocation');
  }
  return this.data.selectedLocation;
},


  // Session handling methods
  setSession(userdetails, token, role) {
    this.data.userdetails = userdetails;
    this.data.token = token;
    this.data.role = role; // Set the role
  
    // Store user details, token, and role in localStorage
    localStorage.setItem('userdetails', JSON.stringify(userdetails));
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
  },
  
  setRole(role) {
    this.data.role = role;
    // Optionally, store role in localStorage
    localStorage.setItem('role', role);
  },

  // New method to get the user role
  getRole() {
    if (!this.role) {
      this.role = localStorage.getItem('role');
    }
    return this.role;
  },

  clearSession() {
    this.data.userdetails = null;
    this.data.token = null;
    this.data.role = null;

    // Clear session from localStorage
    localStorage.removeItem('userdetails');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  },

  getSession() {
    const userDetails = JSON.parse(localStorage.getItem('userdetails'));
    const token = localStorage.getItem('token');
  
    if (userDetails && token) {
      return { userDetails, token };
    }
  
    return null;
  }
  
};
