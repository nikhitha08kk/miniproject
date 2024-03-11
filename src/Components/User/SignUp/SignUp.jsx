import React from 'react';
import { useFormik } from 'formik';
import './SignUp.css';

const validate = values => {
  const errors = {};
  if (!values.username.trim()){
    errors.username = 'Username is required';
  }
  if (!values.email.trim()){
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
    errors.email = 'Please enter a valid email address';
  }
  if (!values.password){
    errors.password = 'Password is required';
  } else if (values.password.length < 8){
    errors.password = 'Password must be at least 8 characters long';
  }
  if (!values.confirmPassword){
    errors.confirmPassword = 'Confirm Password is required';
  } else if (values.confirmPassword !== values.password){
    errors.confirmPassword = 'Passwords do not match';
  }
  return errors;
}

function SignUp() {
  const formik = useFormik({
    initialValues:{
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate,
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <div className='formS'>
      <form onSubmit={formik.handleSubmit} className='for'>
         <h1 className='create'>CREATE AN ACCOUNT</h1>
         <p>
          <label htmlFor='email' className='email'>Email:</label>
          <input
            type='text'
            id='email'
            name='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && <div className="error">{formik.errors.email}</div>}
         </p>
         <p>
          <label htmlFor='username' className='use'>Username:</label>
          <input
            type='text'
            id='username'
            name='username'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username && <div className="error">{formik.errors.username}</div>}
         </p>
         <p>
          <label htmlFor='password' className='pass'>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && <div className="error">{formik.errors.password}</div>}
         </p>
         <p>
          <label htmlFor='confirmPassword' className='conf'>Confirm Password:</label>
          <input
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && <div className="error">{formik.errors.confirmPassword}</div>}
         </p>
        
         <p>
          <button className='acc' type='submit'>SIGNUP</button>
         </p>
         <p className='do'>Do you have an account? <a href='/Login'>Login</a></p>
      </form>
    </div>
  );
}

export default SignUp;
