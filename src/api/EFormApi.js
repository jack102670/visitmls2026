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
      // console.log("Get Training Evaluation data:", response.data.result);
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

export const GetHODOrientationChecklist = async (refNo) => {
  try {
    const base_URL = process.env.VUE_APP_API_BASE_URL_E_FORM;
    const response = await axios.get(`${base_URL}/OrientationList/${refNo}`);
    if (response.data.result) {
      // console.log("Training Evaluation data:", response.data.result);
    } else {
      console.log("HOD Orientation list data not found");
    }
    return response.data;

  } catch (error){
    console.error("Error getting the HOD orientation list data", error);
    throw error;
  }
}

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
      console.log("Company name not found");
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
      console.log("Department name not found");
    }
    return response.data.result;
  } catch (error) {
    console.error("Error fetching department name:", error);
    throw error;
  }
};

export const getAllApplication = async (id) => {
  try {
    const base_URL = process.env.VUE_APP_API_BASE_URL_E_FORM;
    const response = await axios.get(`${base_URL}/General/${id}`, {
      params: {
        userId: id,
      },
    });
    if (response.data.result) {
      // console.log("List of applications:", response.data.result);
      return response.data.result;
    } else {
      console.log("Applications not found");
      return [];
    }
  } catch (error) {
    console.error("Error fetching application data:", error);
    throw error;
  }
};
export const PostPersonnelRequsitionForm = async (finalPersonnelData) => {
  try {
    const base_URL = process.env.VUE_APP_API_BASE_URL_E_FORM;
    const response = await axios.post(
      `${base_URL}/PersonnelRequisition`,
      JSON.stringify(finalPersonnelData),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error submitting the personnel data:", error);
    console.error("Request payload:", finalPersonnelData);
    console.error("Response data:", error.response.data);
    throw error;
  }
};

export const PostJobDescription = async (JobDescriptionData) => {
  try {
    const base_URL = process.env.VUE_APP_API_BASE_URL_E_FORM;
    const response = await axios.post(
      `${base_URL}/JobDescription`,
      JobDescriptionData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error submitting the job description data:", error);
    throw error;
  }
};

export const getPersonnelRequisitonForm = async (refNo) => {
  try {
    const base_URL = process.env.VUE_APP_API_BASE_URL_E_FORM;
    const response = await axios.get(
      `${base_URL}/PersonnelRequisition/${refNo}`
    );
    if (response.data.result) {
      // console.log("Personnel requisition data:", response.data.result);
    } else {
      console.log("Personnel requisition data not found");
    }
    return response.data.result;
  } catch (error) {
    throw error("Error fetching personnel requisition data:", error);
  }
};

export const GetViewTrainingEvaluation = async (refNo) => {
  try {
    const base_URL = process.env.VUE_APP_API_BASE_URL_E_FORM;
    const response = await axios.get(`${base_URL}/TrainingEvaluation/${refNo}`);
    if (response.data.result) {
      // console.log("Training Evaluation data:", response.data.result);
    } else {
      console.log("Training Evaluation data not found");
    }
    return response.data.result;
  } catch (error) {
    throw error("Error fetching training evaluation data:", error);
  }
};

export const GetEmployeeRequestTransfer = async (refNo) => {
  try {
    const base_URL = process.env.VUE_APP_API_BASE_URL_E_FORM;
    const response = await axios.get(`${base_URL}/EmployeeTransfer/${refNo}`);
    if (response.data.result) {
      // console.log("Employee Transfer data:", response.data.result);
    } else {
      console.log("Employee Transfer data not found");
    }
    return response.data.result;
  } catch (error) {
    throw error("Error fetching employee transfer data:", error);
  }
};

export const getJobDescription = async (uniqueKey) => {
  try {
    const base_URL = process.env.VUE_APP_API_BASE_URL_E_FORM;
    const response = await axios.get(`${base_URL}/JobDescription/${uniqueKey}`);
    if (response.data.result) {
      // console.log("Job Description data:", response.data.result);
    } else {
      console.log("Job Description data not found");
    }
    return response.data.result;
  } catch (error) {
    throw error("Error fetching job description data:", error);
  }
};

export const postOnJobTraining = async (onJobTrainingData) => {
  try {
    const base_URL = process.env.VUE_APP_API_BASE_URL_E_FORM;
    const response = await axios.post(`${base_URL}/OJT`, onJobTrainingData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error submitting the on-job training data:", error);
    throw error;
  }
};

export const getOnJobTraining = async (refNo) => {
  try {
    const base_URL = process.env.VUE_APP_API_BASE_URL_E_FORM;
    const response = await axios.get(`${base_URL}/OJT/${refNo}`);
    if (response.data.result) {
      // console.log("On Job Training data:", response.data.result);
    } else {
      console.log("On Job Training data not found");
    }
    return response.data.result;
  } catch (error) {
    console.error("Error fetching on-job training data:", error);
    throw error;
  }
};

export const PostUploadFile = async (files, userId, uniqueKey) => {
  try {
    const base_URL = process.env.VUE_APP_API_BASE_URL_UPLOAD_FILE;
    const formData = new FormData();

    files.forEach((file) => {
      formData.append("filecollection", file);
    });
    formData.append("userId", userId);
    formData.append("uniqueKey", uniqueKey);

    const response = await axios.post(
      `${base_URL}/Files/MultiUploadImage/${userId}/${uniqueKey}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error uploading files:", error);
    throw error;
  }
};

export const getUploadFile = async (userId, uniqueKey) => {
  try {
    const base_URL = process.env.VUE_APP_API_BASE_URL_UPLOAD_FILE;
    const response = await axios.get(
      `$https://esvcportal.pktgroup.com/api/file/api/Files/GetMultiImage/${userId}/${uniqueKey}`
    );
    if (response.data.result) {
      // console.log("Upload File data:", response.data.result);
    } else {
      console.log("Upload File data not found");
    }
    return response.data.result;
  } catch (error) {
    console.error("Error fetching upload file data:", error);
    throw error;
  }
};

export const UpdateTrainingEvaluationHOD = async (SectionBEvaluation) => {
  try {
    const base_URL = process.env.VUE_APP_API_BASE_URL_E_FORM;
    const response = await axios.put(
      `${base_URL}/TrainingEvaluation/HOD`,
      SectionBEvaluation,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data && response.data.result) {
      console.log("Update Training Evaluation data:", response.data.result);
      return response.data.result;
    } else {
      console.log("Update Training Evaluation data not found");
      return null;
    }
  } catch (error) {
    console.error("Error updating training evaluation data:", error);
    throw error;
  }
};

export const UpdateOJT = async (UpdateOJT) => {
  try {
    const base_URL = process.env.VUE_APP_API_BASE_URL_E_FORM;
    const response = await axios.put(`${base_URL}/OJT/HOD`, UpdateOJT, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.data.result) {
      console.log("Update OJT data not found");
      return null;
    }
    return response.data.result;
  } catch (error) {
    console.error("Error updating on-job training data:", error);
    throw error;
  }
};

export const UpdateJD = async (UpdateJd) => {
  try {
    const base_URL = process.env.VUE_APP_API_BASE_URL_E_FORM;
    const response = await axios.put(
      `${base_URL}/JobDescription/HOD`,
      UpdateJd,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.data.result) {
      console.log("Update JD Data not found");
      return null;
    }
    return response.data.result;
  } catch (error) {
    console.error("Error updating Job Description HOD Data:", error);
    throw error;
  }
};

export const UpdatePersonnelRequisitionHOD = async (updatePRHOD) => {
  try {
    const base_URL = process.env.VUE_APP_API_BASE_URL_E_FORM;
    const response = await axios.put(
      `${base_URL}/PersonnelRequisition/HOD`,
      updatePRHOD,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.data.result) {
      console.log("Update PR HOD data not found");
      return null;
    }
    return response.data.result;
  } catch (error) {
    console.error("Error updating PR Approval HOD");
    throw error;
  }
};
