import axios  from "axios";

const BASE_URL = "http://node.readyfortest.ir";

export const getAllTest = () => {
    const url =`${BASE_URL}/admin/test/all`;
    
    return axios.get(url)
};
