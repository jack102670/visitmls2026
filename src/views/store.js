export const store = {
  data: {
    selectedLocation: null,
    userdetails: [],
    token: null
  },

  setSelectedLocation(locationId, locations) {
    const location = locations.find(loc => loc.id === locationId);
    this.data.selectedLocation = location ? location.name : null;
  },

  getSelectedLocation() {
    return this.data.selectedLocation;
  },

  // Session handling methods
  setSession(userdetails, token) {
    this.data.userdetails = userdetails;
    this.data.token = token;

    // Optionally, store in localStorage for persistence
    localStorage.setItem('userdetails', JSON.stringify(userdetails));
    localStorage.setItem('token', token);
  },

  clearSession() {
    this.data.userdetails = null;
    this.data.token = null;

    // Clear session from localStorage
    localStorage.removeItem('userdetails');
    localStorage.removeItem('token');
  },

  getSession() {
    // Check if session data exists in the store's data
  
        //token: this.data.token

        const userDetails = JSON.parse(localStorage.getItem('userdetails'));
        const token = localStorage.getItem('token');
        if (userDetails && token) {
          this.setSession(userDetails, token); // Update store's data
          return { 
            userDetails, 
            token };
        }
    
        return null;
  
  }
};
