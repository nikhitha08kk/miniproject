import React from 'react'
import './Login.css'

// const initialValues = {
//   email: " ",
//   password : " ",
// };
// const validatrForm = (values) =>{
//   const errors = {};

//   if (!values.email){
//     errors.email = 'Email is Required';
//   }else if()

// }
function Login() {
  return (
    <div className='login'>
        <form className='log'>
            <h1 className='logi'>LOGIN</h1>
            <p>
          <label className='use'>Username:
            <input type='"text'></input>
          </label>
         </p>
         <p>
          <label className='pass'>Password:
            <input type='"text'></input>
          </label>
         </p>
         <p>
         <button className='but-l'>LOGIN</button>
         </p>
        <p className='dont'>Don't have an account?<a href='/SignUp'>Signup</a></p>
        </form>
    </div>
  )
}

export default Login