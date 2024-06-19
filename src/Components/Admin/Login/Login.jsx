import React from 'react';
import './Login.css';
import * as Yup from 'yup';
import { ErrorMessage, Form, Field, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../../../Services/Adminapi';



const Login = () => {
  const navigate = useNavigate();
  
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values) => {
    try {
      const { data } = await login(values);
      console.log(data,"admin return data !!!")
      if (data.created) {
        localStorage.setItem('adminjwt', data.token);
        // Use toast.success for successful login
        toast.success(data.message, { position: 'top-right' });
        navigate("/admin");
      } else {
        toast.error(data.message, { position: 'top-right' });
      }
    } catch (error) {
      console.error('Error during login:', error);
   
    } 
    
  // const handleClick = () => navigate("/signup");
  };
  

  return (
    <div className='log-admi'>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({handleChange}) => (
          <Form className='log-adm'>
            <h1 className='logi-adm'>LOGIN</h1>
            <p>
              <label htmlFor='email'>
                <Field type='email'
                 name='email' 
                 className='use-adm' 
                 placeholder='Email'size={30}
                 onChange={handleChange} />
                <ErrorMessage name='email' component='div' />
              </label>
            </p>
            <p>
              <label htmlFor='password'>
                <Field type='password' 
                name='password' 
                className='pass-adm' 
                placeholder='Password'
                size={30} 
                onChange={handleChange}/>
                <ErrorMessage name='password' component='div' />
              </label>
            </p>
            <p>
              <button className='but-l-adm' type='submit' >
                LOGIN
              </button>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
