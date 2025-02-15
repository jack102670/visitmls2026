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

export const getUserClaimDetails = async (refNo) => {

  try {
      const base_URL = process.env.VUE_APP_API_BASE_URL_EC_ERNA_LX;
      const response = await axios.get(
        `${base_URL}/User/GetClaimDetails/${refNo}`,
        {
          params: {
            refNo: refNo,
          },
        }
      );

      if (response.data.result) {
          console.log("Claim details:", response.data.result);

      } else {
        console.log("Claim details not found");
      }
      return response.data.result;
  } catch (error) {
      console.error("Error fetching claim details:", error);
      throw error;
  }
};

export const getEntertainment = async (refNo) => {
  console.log("refNo", refNo);
  try {

    const base_URL = process.env.VUE_APP_API_BASE_URL_EC_ERNA_LX;
    const response = await axios.get(`${base_URL}/User/GetEntertainment/${refNo}`, {
      params: {
        refNo: refNo,
      },
    });
    if (response.data.result) {
      console.log("Entertainment details:", response.data.result);
    } else {
      console.log("Entertainment details not found");
    }
    return response.data.result;
  } catch(error){
    console.error("Error fetching claim details:", error);
    throw error;
  }
};
export const getHandphone = async (refNo) => {
  console.log("refNo", refNo);
  try {

    const base_URL = process.env.VUE_APP_API_BASE_URL_EC_ERNA_LX;
    const response = await axios.get(`${base_URL}/User/GetHandphone/${refNo}`, {
      params: {
        refNo: refNo,
      },
    });
    if (response.data.result) {
      console.log("Handphone details:", response.data.result);
    } else {
      console.log("Handphone details not found");
    }
    return response.data.result;
  } catch(error){
    console.error("Error fetching claim details:", error);
    throw error;
  }
};

export const updateHandphone = async (submitData) => {
  try {
    const base_URL = process.env.VUE_APP_API_BASE_URL_EC_ERNA_LX;
    const response = await axios.put(`${base_URL}/User/UpdateHandphoneReimburse`, submitData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.data && response.data.result) {
      console.log("Update Training Evaluation data:", response.data.result);
      return response.data.result;
    } else {
      console.log("Update Training Evaluation data not found");
      return null;
    }
  } catch (error) {
    if (error.response) {
      console.error("Server responded with an error:", error.response.data);
      console.error("Status Code:", error.response.status);
      console.error("Headers:", error.response.headers);
    } else if (error.request) {
      console.error("No response received from server:", error.request);
    } else {
      console.error("Error setting up the request:", error.message);
    }
    throw error;
  }
};


export const getMedicalLeave = async (refNo) => {
  console.log("refNo", refNo);
  try {

    const base_URL = process.env.VUE_APP_API_BASE_URL_EC_ERNA_LX;
    const response = await axios.get(`${base_URL}/User/GetMedicalLeave/${refNo}`, {
      params: {
        refNo: refNo,
      },
    });
    if (response.data.result) {
      console.log("Medical details:", response.data.result);
    } else {
      console.log("Medical details not found");
    }
    return response.data.result;
  } catch(error){
    console.error("Error fetching Medical details:", error);
    throw error;
  }
};

export const updateMedical = async (submitData) => {
  try {
    const base_URL = process.env.VUE_APP_API_BASE_URL_EC_ERNA_LX;
    const response = await axios.put(`${base_URL}/User/UpdateMedical`, submitData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.data && response.data.result) {
      console.log("Update Medical data:", response.data.result);
      return response.data.result;
    } else {
      console.log("Update Medical data not found");
      return null;
    }
  } catch (error) {
    if (error.response) {
      console.error("Server responded with an error:", error.response.data);
      console.error("Status Code:", error.response.status);
      console.error("Headers:", error.response.headers);
    } else if (error.request) {
      console.error("No response received from server:", error.request);
    } else {
      console.error("Error setting up the request:", error.message);
    }
    throw error;
  }
};

export const updateEntertainment = async (submitData) => {
  try {
    const base_URL = process.env.VUE_APP_API_BASE_URL_EC_ERNA_LX;
    const response = await axios.put(`${base_URL}/User/UpdateMedical`, submitData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.data && response.data.result) {
      console.log("Update Medical data:", response.data.result);
      return response.data.result;
    } else {
      console.log("Update Medical data not found");
      return null;
    }
  } catch (error) {
    if (error.response) {
      console.error("Server responded with an error:", error.response.data);
      console.error("Status Code:", error.response.status);
      console.error("Headers:", error.response.headers);
    } else if (error.request) {
      console.error("No response received from server:", error.request);
    } else {
      console.error("Error setting up the request:", error.message);
    }
    throw error;
  }
};


