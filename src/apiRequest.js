import axios from 'axios';
import MAIN_URL from './MAIN_URL';
import { header } from './MAIN_URL';

export const GetAll = async (req, params) => {                  // CALLING GET AXIOS FUNCTION
    try {
        const response = await axios.get(`${MAIN_URL}` + `/` + `${req}`, { params: params, headers: header });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const PostData = async (req, Data) => {                  // CALLING AXIOS POST FUNCTION
    try {
        const response = await axios.post(`${MAIN_URL}` + `/` + `${req}`, { Data, headers: header });
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const UpdatedData = async (req, Data) => {                  // CALLING AXIOS PUT FUNCTION
    try {
        const response = await axios.put(`${MAIN_URL}` + `/` + `${req}`, { Data, headers: header });
        return response.data;
    } catch (error) {
        throw error;
    }
};



export const DeleteData = async (req, Data) => {                  // CALLING AXIOS DELETE FUNCTION
    try {
        const response = await axios.delete(`${MAIN_URL}` + `/` + `${req}`, {Data , headers:header});
        return response.data;
    } catch (error) {
        throw error;
    }
};
