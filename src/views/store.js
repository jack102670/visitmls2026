export const store = {
    data: {
      selectedLocation: null,
    },
  
    setSelectedLocation(locationId, locations) {
      // 'locations' is received as a parameter from the component
      const location = locations.find(loc => loc.id === locationId);
      this.data.selectedLocation = location ? location.name : null;
    },
  
    getSelectedLocation() {
      return this.data.selectedLocation;
    }
  };
  