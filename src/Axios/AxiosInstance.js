import  Axios from "axios"

const userInstance=Axios.create(
  {baseURL:"http://localhost:8000",
headers: {
    'Content-Type': 'application/json'
  }
});
const adminInstance=Axios.create(
  {baseURL:"http://localhost:8000/admin",
headers: {
    'Content-Type': 'application/json'
  }
});
userInstance.interceptors.request.use((request) => {
    const token = localStorage.getItem('jwt');
    request.headers.authorization = `Bearer ${token}`;
    return request;
  });
  adminInstance.interceptors.request.use((request) => {
    const token = localStorage.getItem('adminjwt');
    request.headers.authorization = `Bearer ${token}`;
    return request;
  });
export { userInstance,adminInstance}