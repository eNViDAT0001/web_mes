
import axiosClient from "./Client";
export const UserApi = {
    DetailUser:(id) =>{
        const url = `users/${id}`
        return axiosClient.get(url)
    },
    RegisterUser:(body) =>{
        const url = "app/register"        
        return axiosClient.post(url,{...body})
    }
}