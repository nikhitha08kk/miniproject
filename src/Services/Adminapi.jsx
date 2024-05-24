import { adminInstance } from "../Axios/AxiosInstance";
export const login = (value)=>{
    console.log("welcome")
    return adminInstance.post("/login",{...value})
};
//GET METHODS
export const userList = () => {
    return adminInstance.get("/");
};
export const viewProducts = () => {
    return adminInstance.get("/view");
};