import React from 'react';
import './Login.css';
import { ErrorMessage, Form, Field, Formik } from 'formik';
import * as Yup from 'yup'; // Import Yup

const initialValues = {
  email: "",
  password: "",
};

// Define Yup schema for validation
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is Required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required'),
});

function Login() {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className='login'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema} // Pass the validationSchema to Formik
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className='log'>
            <h1 className='logi'>LOGIN</h1>
            <p>
              <label htmlFor='email'></label>
              <Field type="email" name="email" className='use' placeholder='Email'/>
              <ErrorMessage name='email' component="div" />
            </p>
            <p>
              <label htmlFor='password' ></label>
              <Field type="password"className='pass' placeholder='Password' name="password" />
              <ErrorMessage name='password' component="div" />
            </p>
            <p>
              <button className='but-l' type='submit' disabled={isSubmitting}>LOGIN</button>
            </p>
            <p className='dont'>Don't have an account? <a href='/SignUp'>Signup</a></p>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
