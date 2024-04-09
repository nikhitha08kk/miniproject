import React from 'react';
import './Login.css';
import * as Yup from 'yup';
import { ErrorMessage, Form, Field, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../../../Services/Adminapi';

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

  const handleSubmit = async (values, { setErrors, setSubmitting }) => {
    try {
      const { data } = await login(values);
      if (data.created) {
        console.log("data")
        localStorage.setItem('jwt', data.token);
        toast.success(data.message, { position: 'top-right' });
        navigate('/');
      } else {
        toast.error(data.message, { position: 'top-right' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrors({ submit: error.response.data.message || 'Something went wrong' });
    } finally {
      setSubmitting(false);
    }
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
        {({ isSubmitting }) => (
          <Form className='log-adm'>
            <h1 className='logi-adm'>LOGIN</h1>
            <p>
              <label htmlFor='email'>
                <Field type='email' name='email' className='use-adm' placeholder='Email'size={30} />
                <ErrorMessage name='email' component='div' />
              </label>
            </p>
            <p>
              <label htmlFor='password'>
                <Field type='password' name='password' className='pass-adm' placeholder='Password'size={30} />
                <ErrorMessage name='password' component='div' />
              </label>
            </p>
            <p>
              <button className='but-l-adm' type='submit' disabled={isSubmitting}>
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
