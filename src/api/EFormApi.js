import axios from "axios";

export const fetchHrData = async (username_id) => {
  try {
    const base_URL = process.env.VUE_APP_API_BASE_URL;

    const response = await axios.get(
      `${base_URL}/User/GetEmployeeById/${username_id}`,
      {
        params: {
          userId: username_id,
        },
      }
    );
    return response.data.result[0];
  } catch (error) {
    console.error("Error fetching HR data:", error);
    throw error;
  }
};

export const PostSectionATrainingEvaluation = async (evaluationData) => {
  try {
    const base_URL = process.env.VUE_APP_API_BASE_URL_E_FORM;
    // console.log("API Base URL:", base_URL);
    const response = await axios.post(
      `${base_URL}/TrainingEvaluation`,
      evaluationData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error submitting the training data:", error);
    throw error;
  }
};

export const PostHODSectionAOrientationCheckList = async (checkListData) => {
  try {
    const base_URL = process.env.VUE_APP_API_BASE_URL_E_FORM;
    // console.log("API Base URL:", base_URL);
    const response = await axios.post(
      `${base_URL}/OrientationList`,
      checkListData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error submitting the check list data:", error);
    throw error;
  }
};

export const PostSectionAEmployeeRequest = async (EmployeeTransferData) => {
  try {
    const base_URL = process.env.VUE_APP_API_BASE_URL_E_FORM;
    const response = await axios.post(
      `${base_URL}/EmployeeTransfer`,
      EmployeeTransferData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error submitting the employee transfer data:", error);
    throw error;
  }
};

// export const GetVerifierId = async () => {
//     try {
//         const base_URL = process.env.VUE_APP_API_BASE_URL;
//         console.log("API Base URL:", base_URL);
//         const response = await axios.get(`${base_URL}/User/GetEmployeeById/${username_id}`, {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching verifier ID:", error);
//         throw error;
//     }
//  };

// .get(`http://172.28.28.91:99/api/User/GetEmployeeById/${username_id}`)
