import React from 'react';
import './Login.css';
import { ErrorMessage, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom'; // Import Link
import { login } from "../../../Services/Userapi";
import { toast } from 'react-toastify';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
    .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, 'Invalid email format'),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain at least 8 characters, including one uppercase, one lowercase, one number, and one special character.'
    ),
});

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setErrors }) => {
    try {
      const { data } = await login(values);
      if (data.created) {
        localStorage.setItem("jwt", data.token);
        toast.success(data.message, { position: "top-right" });
        navigate('/');
      } else {
        toast.error(data.message, { position: "top-right" });
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrors({ submit: error.response.data.message || 'Something went wrong' });
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
        {({ isSubmitting, handleChange }) => ( // Add handleChange
          <Form className='log'>
            <h1 className='logi'>LOGIN</h1>
            <p>
              <label htmlFor='email'></label>
              <input type="email" name="email" className='mail' placeholder='Email' size={30} onChange={handleChange} />
              <ErrorMessage name='email' component="div" />
            </p>
            <p>
              <label htmlFor='password'></label>
              <input type="password" className='pass' placeholder='Password' size={30} name="password" onChange={handleChange} />
              <ErrorMessage name='password' component="div" />
            </p>
            <p>
              <button className='but-l' type='submit'>LOGIN</button> {/* Removed onClick */}
            </p>
            <p className='dont'>Don't have an account? <Link to='/SignUp'>Signup</Link></p> {/* Replaced anchor tag with Link */}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
