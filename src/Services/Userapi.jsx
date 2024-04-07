import { userInstance } from "../Axios/AxiosInstance"

export const signup = (value) =>{
    return userInstance.post('/signup',{...value})
}
export const login = (value) =>{
    //console.log(value,"hjshffbsjj")
    return userInstance.post('/login',{...value})
    
}