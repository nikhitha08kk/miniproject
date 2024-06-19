import { userInstance } from "../Axios/AxiosInstance"

export const signup = (value) =>{
    return userInstance.post('/signup',{...value})
}
export const login = (value) =>{
    //console.log(value,"hjshffbsjj")
    return userInstance.post('/login',{...value})
    
}

export const shopProduct = async () => {
  try {
    const response = await userInstance.get('http://localhost:8000/shop');
    if (response.data && response.data.shopProduct) {
      return response.data.shopProduct;
    } else {
      throw new Error('Unexpected response structure');
    }
  } catch (error) {
    console.error('Error fetching shop products:', error.response ? error.response.data : error.message || error);
    throw error;
  }
};

  export const newArrival= () => {
    return userInstance.get("/shop/Newarrival");
  };
  export const bestseller= () => {
    return userInstance.get("/bestseller");
  };
  export const men= () => {
    return userInstance.get("/men");
  };
  export const women= () => {
    return userInstance.get("/women");
  };
  export const bodybath= () => {
    return userInstance.get("/bodybath");
  };

  export const getProductDetails = (productId) => {
    return userInstance.get(`/shop/${productId}`);
  };
  export const AddToWishlist = (productId) => {
    return userInstance.post("/wishlist", { productId });
  };
  export const checkProductInWishlist = (productId) => {
    return userInstance.get(`/wishlist/check/${productId}`);
  }
  // export const getUser = () => {
  //   return userInstance.get("/user");
  // };
  // export const createOrder = (orderData) => {
  //   return userInstance.post("/createorder", { ...orderData });
  // };