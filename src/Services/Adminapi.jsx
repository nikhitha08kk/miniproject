import { adminInstance } from "../Axios/AxiosInstance";
export const login = (value)=>{
    console.log("welcome")
    return adminInstance.post("/login",{...value})
}