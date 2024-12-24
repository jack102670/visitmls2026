import axios from 'axios';


export const ernaAPI = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL_EC_ERNA_LX,
  headers: {
    "Content-Type": "application/json",
  },
});


export const hudaAPI = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL_EC_HUDA_LX,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getDepartment = async () => {
  try {
    const base_URL = process.env.VUE_APP_API_BASE_URL_HUD;
    const response = await axios.get(`${base_URL}/User/GetDepartment`);
    if (response.data.result) {
      // console.log("Department name:", response.data.result);
    } else {
      console.log("Department name not found");
    }
    return response.data.result;
  } catch (error) {
    console.error("Error fetching department name:", error);
    throw error;
  }
};

export const c = async () => {
  try {
    const base_URL = process.env.VUE_APP_API_BASE_URL_EC_HUDA_LX;
    const response = await axios.get(`${base_URL}/User/GetDesignation`);
    if (response.data.result) {
      // console.log("Department name:", response.data.result);
    } else {
      console.log("Department name not found");
    }
    return response.data.result;
  } catch (error) {
    console.error("Error fetching department name:", error);
    throw error;
  }
};
