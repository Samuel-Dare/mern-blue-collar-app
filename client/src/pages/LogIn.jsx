import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Axios from 'axios';
import FormInput from '../ui/FormInput';
import Button from '../ui/Button';
import '../ui/formInput.css';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const LogIn = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [gotoHome, setGoToHome] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const inputs = [
    {
      id: 1,
      name: 'email',
      label: 'Email',
      placeholder: 'Email',
      type: 'text',
      required: true,
      errorMessage: "Can't be blank",
    },
    {
      id: 2,
      name: 'password',
      label: 'Password',
      placeholder: 'Password',
      type: 'password',
      required: true,
      errorMessage: "Can't be blank",
    },
  ];

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  // console.log(values);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios(`${BASE_URL}/api/v1/users/login`, {
        method: 'post',
        data: {
          email: values.email,
          password: values.password,
        },
        withCredentials: true,
      }).then(() => setGoToHome(true));
      alert('You are successfully logged in');
    } catch (err) {
      setLoginError('Incorrect email or password');
      console.log('🚀 ~ file: logIn.jsx:24 ~ fetchUser ~ err:', err);
    }
  };

  if (gotoHome) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="mx-auto mt-10 w-[400px] bg-colorGrey50 p-10 md:p-16">
      <form onSubmit={handleSubmit}>
        <h1 className="pb-2 text-h1">Log In</h1>
        <div>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              onChange={handleChange}
              value={values[input]}
              {...input}
            />
          ))}
        </div>
        <p className="errMsg" style={{ display: 'block' }}>
          {loginError}
        </p>
        <Button type="primary">Send</Button>
      </form>
    </div>
  );
};

export default LogIn;
