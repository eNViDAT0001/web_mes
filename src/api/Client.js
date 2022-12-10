import axios from 'axios'
import { stringify } from "qs";
const API_BASE_URL = "http://192.168.1.110:8082/api/v1"
const headerLogic = (token) =>{
  if(token===undefined) 
  {
    var obj = {'Content-Type': 'application/json'}
  }
  else
  {
    obj = {'Content-type': 'application/json',"Authorization": "Bearer " + localStorage.getItem("AccessToken")}
  }
  return obj
}
const axiosClient = axios.create({  
    baseURL: API_BASE_URL,
    headers: headerLogic(localStorage.getItem("AccessToken")),
    paramsSerializer: {
      serialize: stringify // or (params) => Qs.stringify(params, {arrayFormat: 'brackets'})
    }})

export default axiosClient

