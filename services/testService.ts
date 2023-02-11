import axios  from "axios";

const BASE_URL = "http://localhost:3333";

export const getAllTest = () => {
    const url =`${BASE_URL}/admin/test/all`;
    
    return axios.get(url)
};
