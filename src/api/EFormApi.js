
import axios from "axios";


export const fetchHrData = async (username_id) => {
    try {

        const base_URL = process.env.VUE_APP_API_BASE_URL;
        console.log("API Base URL:", base_URL); 
        const response = await axios.get(`${base_URL}/User/GetEmployeeById/${username_id}`, {
            params: {
                userId: username_id,
            },
        });
        return response.data.result[0];
    }catch (error) {
        console.error("Error fetching HR data:", error);
        throw error;
    }
};

