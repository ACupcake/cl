import axios from "axios";
import { IApiPatch, IApiPost } from "../types/types";

const apiBase = "http://dev.codeleap.co.uk/"; 

const apiInstance = axios.create({
    baseURL: apiBase,
    timeout: 1000,
  });

const api = {
    getAll: async (next?: string) => {
        let response = "";
        if (next) {
            response = await axios.get(next);
        } else {
            response = await apiInstance.get('/careers/')
        }
        return response
    },
    get: async (id:number) => {
        const response = await apiInstance.get('/careers/' + id)
        return response
    },
    post: async (data: IApiPost) => {
        const response = await apiInstance.post('/careers/', data)
        return response;
    },
    put: async (data: IApiPatch, id:number) => {
        const response = await apiInstance.put('/careers/' + id + '/', data)
        return response;
    },
    patch: async (data: IApiPatch, id:number) => {
        const response = await apiInstance.patch('/careers/' + id + '/', data)
        return response;
    },
    delete: async (id:number) => {
        const response = await apiInstance.delete('/careers/' + id + '/')
        return response;
    }
}

export default api;