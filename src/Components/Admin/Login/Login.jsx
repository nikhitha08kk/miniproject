import React from 'react'
import './Login.css'
import { ErrorMessage, Form, Field, Formik } from 'formik';
const initialValues = {
  email: "",
  password: "",
};
const validateForm = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email is Required';
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters long';
  }

  return errors;
};

function Login() {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };
  return (
    <div className='log-admi'>
       <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        {({isSubmitting}) => (
         <Form className='log-adm'>
            <h1 className='logi-adm'>LOGIN</h1>
            <p>
          <label htmlFor='email' >
          <Field type="email" className='use-adm' placeholder='Email' name="email" />
              <ErrorMessage name='email' component="div" />
          </label>
         </p>
         <p>
          <label  htmlFor='password'>
          <Field type="password" className='pass-adm' placeholder='Password' name="password" />
          <ErrorMessage name='password' component="div" />
          </label>
         </p>
         <p>
         <button className='but-l-adm'  type='submit' disabled={isSubmitting}>LOGIN</button>
         </p>
        </Form>
        )}
        </Formik>
    </div>
  );
}
export default Login