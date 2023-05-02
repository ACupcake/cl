import axios from "axios";
import { IApiPatch, IApiPost } from "../types/types";

const codeleapAPI = "http://dev.codeleap.co.uk/careers";
const ownAPI = "http://127.0.0.1:8000/api/v1/post";

const apiInstance = axios.create({
    baseURL: ownAPI,
    timeout: 1000,
  });

const api = {
    getAll: async (next?: string) => {
        let response = "";
        if (next) {
            response = await axios.get(next);
        } else {
            response = await apiInstance.get('/')
        }
        return response
    },
    get: async (id:number) => {
        const response = await apiInstance.get('/' + id)
        return response
    },
    post: async (data: IApiPost) => {
        const response = await apiInstance.post('/', data)
        return response;
    },
    put: async (data: IApiPatch, id:number) => {
        const response = await apiInstance.put('/' + id + '/', data)
        return response;
    },
    patch: async (data: IApiPatch, id:number) => {
        const response = await apiInstance.patch('/' + id + '/', data)
        return response;
    },
    delete: async (id:number) => {
        const response = await apiInstance.delete('/' + id + '/')
        return response;
    }
}

export default api;