export const store = {
  data: {
    selectedLocation: null,
    userdetails: [],
    token: null
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
