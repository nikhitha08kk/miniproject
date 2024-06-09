import { adminInstance } from "../Axios/AxiosInstance";
// import axios from 'axios';

// const API_URL = 'https://your-api-url.com';
export const login = (value)=>{
    console.log("welcome")
    return adminInstance.post("/login",{...value})
};

// export const Products = (formData) => {
//     return adminInstance.post("/add", formData, {
//       // headers: {
//       //   "Content-Type": "multipart/form-data",
//       // },
//     });
//   };

export const Products = (value) => {
  return adminInstance.post("/add", {...value});
}
//GET METHODS
export const userList = () => {
    return adminInstance.get("/users");
};

export const productList = () => {
  return adminInstance.get('/product');
};


//Delete

export const removeUser = (userId) => {
  return adminInstance.delete(`/user/${userId}`);
};
export const deleteProduct=(productId)=>{
  return adminInstance.delete(`/product/${productId}`)
}

//PUT Method

export const editProduct = (id, productData) => {
  return adminInstance.put(`/product/${id}`, productData);
};

// Fetch product details by ID

export const getProductById = (id) => {
  return adminInstance.get(`/product/${id}`);
};