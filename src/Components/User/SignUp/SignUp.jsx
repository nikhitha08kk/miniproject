import React from 'react';
import { useFormik } from 'formik';
import * as Yup from  'yup'
import './SignUp.css';
import { signup } from '../../../Services/Userapi';

// const validate = values => {
//   const errors = {};
//   if (!values.username.trim()){
//     errors.username = 'Username is required';
//   }
//   if (!values.email.trim()){
//     errors.email = 'Email is required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
//     errors.email = 'Please enter a valid email address';
//   }
//   if (!values.password){
//     errors.password = 'Password is required';
//   } else if (values.password.length < 8){
//     errors.password = 'Password must be at least 8 characters long';
//   }
//   if (!values.confirmPassword){
//     errors.confirmPassword = 'Confirm Password is required';
//   } else if (values.confirmPassword !== values.password){
//     errors.confirmPassword = 'Passwords do not match';
//   }
//   return errors;
// }
const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
});
function SignUp() {
  const formik = useFormik({
   initialValues :{
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
  },
    validationSchema:validationSchema,
    onSubmit: async values => {
      const {data} = await signup(values)
     console.log(data);
    },
  });

  return (
    <div className='formS'>
      <form onSubmit={formik.handleSubmit} className='for'>
         <h1 className='create'>CREATE AN ACCOUNT</h1>
         <p>
          <label htmlFor='email' ></label>
          <input
            type='text'
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
          <label htmlFor='username'></label>
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
          <label htmlFor='password' ></label>
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
          <label htmlFor='confirmPassword' ></label>
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
