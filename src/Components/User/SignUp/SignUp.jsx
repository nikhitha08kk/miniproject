import React from 'react'
import './SignUp.css';

function SignUp() {
  return (
    <div className='formS'>
      <form className='for'>
         <h1 className='create'>CREATE AN ACCOUNT</h1>
         <p>
          <label className='email'>Email:
            <input type='email'></input>
          </label>
         </p>
         <p>
          <label className='use'>Username:
            <input type='"text'></input>
          </label>
         </p>
         <p>
          <label className='pass'> Password:
            <input type='password'></input>
          </label>
         </p>
         <p>
          <label className='conf'>Confirm Password:
            <input type='password'></input>
          </label>
         </p>
        
         <p>
          <button className='acc' type='submit'>SIGNUP</button>
         </p>
         <p className='do'>Do you have an account?<a href='/Login'> Login</a></p>
      

         

     </form>
    </div>
  )
}

export default SignUp