import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios'; // Import Axios
// import './assets/css/output.css';
import './output.css';
import router from './router';
import eventBus from './javascript/event-bus';

// Create the Vue app instance
const app = createApp(App);

// Make Axios available globally in the Vue app
app.config.globalProperties.$axios = axios;

// Use the router
app.use(router);

// Use the eventbus
app.use(eventBus);

// Mount the app to the DOM
app.mount('#app');
