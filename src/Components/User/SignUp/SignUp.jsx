import React from 'react';
import { useFormik } from 'formik';
import * as Yup from  'yup'
import './SignUp.css';
import { useNavigate } from "react-router-dom";
import { signup } from '../../../Services/Userapi';

const validationSchema = Yup.object().shape({
 
  email: Yup.string()
  .email('Invalid email')
  .required('Email is required')
  .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, 'Invalid email format'),
  username: Yup.string().required('Username is required'),
  password: Yup.string()
  .required('Password is required')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    'Password must contain at least 8 characters, including one uppercase, one lowercase, one number, and one special character.'
  ),
  confirmPassword: Yup.string()
  .oneOf([Yup.ref('password'), null], 'Passwords must match')
  .required('Confirm Password is required'),
});
function SignUp() {
  const navigate = useNavigate();
  const formik = useFormik({
   initialValues :{
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
  },
    validationSchema:validationSchema,
    onSubmit: async values => {
      const {data} = await signup(values)
     console.log(data);
     navigate("/login");

    },
  });

  return (
    <div className='formS'>
      <form onSubmit={formik.handleSubmit} className='for'>
         <h1 className='create'>CREATE AN ACCOUNT</h1>
         <p>
   
          <input
            type='email'
            id='email'
            name='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className='email'
            size={30}
            placeholder='Email'
          />
          {formik.touched.email && formik.errors.email && <div className="error">{formik.errors.email}</div>}
         </p>
         <p>
        
          <input
            type='text'
            id='username'
            name='username'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            className='use'
            size={30}
            placeholder='Username'
          />
          {formik.touched.username && formik.errors.username && <div className="error">{formik.errors.username}</div>}
         </p>
         <p>
          
          <input
            type='password'
            id='password'
            name='password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className='pass'
            size={30}
            placeholder='Password'
          />
          {formik.touched.password && formik.errors.password && <div className="error">{formik.errors.password}</div>}
         </p>
         <p>
         
          <input
          className='inpu-conf'
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            size={30}
            placeholder='Confirm Password'
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && <div className="error">{formik.errors.confirmPassword}</div>}
         </p>
        
         <p>
          <button className='acc' type='submit' >SIGNUP</button>
         </p>
         <p className='do'>Do you have an account? <a href='/Login'>Login</a></p>
      </form>
    </div>
  );
}

export default SignUp;
