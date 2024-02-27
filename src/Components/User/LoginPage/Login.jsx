import React from 'react'
import './Login.css'
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

        </form>
    </div>
  )
}

export default Login