import axios from 'axios';


const ernaAPI = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL_EC_ERNA_LX,
});


const hudaAPI = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL_EC_HUDA_LX,
});

export { ernaAPI, hudaAPI };
