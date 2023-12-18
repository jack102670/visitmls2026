<template>
    <div>
        <div class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#CED1DA] dark:bg-[#111827] p-4 sm:ml-64 h-screen">
            
            <label for="country">Country:</label>
            <select v-model="selectedCountry" @change="onCountryChange" id="country">
                <option v-for="country in countries" :key="country.id" :value="country.id">{{ country.name }}</option>
            </select>

            <label for="stateCity">State/City:</label>
            <select v-model="selectedStateCity" id="stateCity">
                <option v-for="stateCity in stateCities" :key="stateCity.id" :value="stateCity.id">{{ stateCity.name }}
                </option>
            </select>
        </div>
    </div>
</template>
  
<script>
export default {
    name:'peopleViews',
    data() {
        return {
            countries: [
                { id: 'malaysia', name: 'Malaysia' },
                { id: 'usa', name: 'USA' },
                // Add more countries as needed
            ],
            selectedCountry: null,
            selectedStateCity: null,
            stateCities: [],
        };
    },
    methods: {
        onCountryChange() {
            this.stateCities = []; // Reset stateCities when the country changes

            // Hard-coded data for states/cities based on the selected country
            switch (this.selectedCountry) {
                case 'malaysia':
                    this.stateCities = [
                        { id: 'johor', name: 'Johor' },
                        { id: 'selangor', name: 'Selangor' },
                        // Add more states as needed
                    ];
                    break;

                case 'usa':
                    this.stateCities = [
                        { id: 'ny', name: 'New York' },
                        { id: 'ca', name: 'California' },
                        // Add more states as needed
                    ];
                    break;

                // Add more cases for additional countries

                default:
                    break;
            }
        },
    },
};
</script>
  
<style>
/* Add your styles if needed */
</style>
  