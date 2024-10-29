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
    if (response.data.result) {
      console.log("Get Training Evaluation data:", response.data.result);
    } else {
      console.log("Training Evaluation data not found");
    }
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

export const getCompanyName = async () => {
  try {
    const base_URL = process.env.VUE_APP_API_BASE_URL_HUD;
    const response = await axios.get(`${base_URL}/User/GetCompany`);

    if (response.data.result) {
      // console.log("Company name:", response.data.result);
    } else {
      // console.log("Company name not found");
    }
    return response.data.result;
  } catch (error) {
    console.error("Error fetching company name:", error);
    throw error;
  }
};

export const getDepartment = async () => {
  try {
    const base_URL = process.env.VUE_APP_API_BASE_URL_HUD;
    const response = await axios.get(`${base_URL}/User/GetDepartment`);
    if (response.data.result) {
      // console.log("Department name:", response.data.result);
    } else {
      // console.log("Department name not found");
    }
    return response.data.result;
  }catch (error) {
    console.error("Error fetching department name:", error);
    throw error;
  }
};

export const getAllApplication = async (id) => {
  try {
    const base_URL = process.env.VUE_APP_API_BASE_URL_E_FORM;
    const response = await axios.get(`${base_URL}/General/${id}`,
      {
        params: {
          userId: id,

        },
      }
    );
    if (response.data.result){
      // console.log("List of applications:", response.data.result);
      return response.data.result; 
    }else{
      // console.log("Applications not found");
      return [];
    }
  }catch(error){
    console.error("Error fetching application data:", error);
    throw error;
  }
};
export const PostPersonnelRequsitionForm = async (finalPersonnelData) => {
  try {
    const base_URL = process.env.VUE_APP_API_BASE_URL_E_FORM;
    const response = await axios.post(
      `${base_URL}/PersonnelRequisition`,
      finalPersonnelData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  }catch (error) {
    console.error("Error submitting the personnel data:", error);
    throw error;
  }
};

export const GetViewTrainingEvaluation = async (refNo)=> {
  try {
    const base_URL = process.env.VUE_APP_API_BASE_URL_E_FORM;
    const response = await axios.get(`${base_URL}/TrainingEvaluation/${refNo}`);
    if (response.data.result) {
      console.log("Training Evaluation data:", response.data.result);
    } else {
      console.log("Training Evaluation data not found");
    }
    return response.data.result;

  } catch (error){
    throw error ("Error fetching training evaluation data:", error);
  }
};

export const GetEmployeeRequestTransfer = async (refNo) => {
  try {
    const base_URL = process.env.VUE_APP_API_BASE_URL_E_FORM;
    const response = await axios.get(`${base_URL}/EmployeeTransfer/${refNo}`);
    if (response.data.result) {
      console.log("Employee Transfer data:", response.data.result);
    } else {
      console.log("Employee Transfer data not found");
    }
    return response.data.result;
  } catch(error){
    throw error ("Error fetching employee transfer data:", error);
  }
};