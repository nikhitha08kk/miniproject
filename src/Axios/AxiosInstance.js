import  Axios from "axios"
const userInstance=Axios.create({baseURL:"http://localhost:8000"})
const adminInstance=Axios.create({baseURL:"http://localhost:8000/admin"})
export { userInstance,adminInstance}