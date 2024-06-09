import { userInstance } from "../Axios/AxiosInstance"

export const signup = (value) =>{
    return userInstance.post('/signup',{...value})
}
export const login = (value) =>{
    //console.log(value,"hjshffbsjj")
    return userInstance.post('/login',{...value})
    
}
// export const NewArrivals = () => {
//     return userInstance.get("/newarrival");
//   };


export const shopProduct = async () => {
    try {
      const response = await userInstance.get('http://localhost:8000/shop'); 
      return response.data.shopProduct; 
    } catch (error) {
      console.error('Error fetching shop products:', error.response || error.message || error);
      throw error;
    }
  };


  export const newArrival= async () => {
    try {
      const response = await userInstance.get('http://localhost:8000/Newarrival'); 
      console.log('Full API response data:', response.data);
      return response.data.shopProduct; 
    } catch (error) {
      console.error('Error fetching shop products:', error.response || error.message || error);
      throw error;
    }
  };