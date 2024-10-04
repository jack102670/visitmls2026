import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios'; // Import Axios
// import './assets/css/output.css';
// import './output.css';
import './input.css';
import router from './router';
import 'flowbite/dist/flowbite.min.css';
import 'flowbite';


import { FontAwesomeIcon } from '../src/icons/fontawesome';

// Create the Vue app instance
const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon);

// Make Axios available globally in the Vue app
app.config.globalProperties.$axios = axios;

// Use the router
app.use(router);

// Mount the app to the DOM
app.mount('#app');
