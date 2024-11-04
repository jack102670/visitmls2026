import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios'; // Import Axios
// import './assets/css/output.css';
// import './output.css';
import './input.css';
import router from './router';
import 'flowbite/dist/flowbite.min.css';
import 'flowbite';
import VTooltip from 'v-tooltip';
import 'intl-tel-input/build/css/intlTelInput.css';



// Create the Vue app instance
const app = createApp(App);

// Make Axios available globally in the Vue app
app.config.globalProperties.$axios = axios;

// Use the router
app.use(router);
app.use(VTooltip);

// Mount the app to the DOM
app.mount('#app');
