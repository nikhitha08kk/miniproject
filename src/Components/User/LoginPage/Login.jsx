import React from 'react';
import './Login.css';
import {ErrorMessage,  Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import { login } from "../../../Services/Userapi";
import { toast } from 'react-toastify';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
   
  password: Yup.string()
    .required('Password is required'),
     
    
});

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      console.log("on submit !!!!")
      const { data } = await login(values);
      console.log(data,"user return data !!!")
      if (data.created) {
        localStorage.setItem("jwt", data.token);
        toast.success("login sucess", { position: "top-right",} );
        navigate('/');
      } else {
        toast.error(data.message, { position: "top-right" });
      }
    } catch (error) {
      console.error('Error during login:', error);
   
    }
  };

  return (
    <div className='login'>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange }) => (
          <Form className='log'>
            <h1 className='logi'>LOGIN</h1>
            <p>
              <label htmlFor='email'>Email:</label>
              <input type="email"
               name="email" 
               className='mail' 
               placeholder='Email' 
               size={30} 
               onChange={handleChange} 
               
               />
              { <ErrorMessage name='email' component="div" /> }
             
            </p>
            <p>
              <label htmlFor='password'>Password:</label>
              <input type="password"
               className='pass'
                placeholder='Password'
                 size={30}
                  name="password"
                   onChange={handleChange} 
               />
              { <ErrorMessage name='password' component="div" /> }
            </p>
            <p>
              <button className='but-l' type='submit'>LOGIN</button>
            </p>
            <p className='dont'>Don't have an account? <Link to='/SignUp'>Signup</Link></p>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
