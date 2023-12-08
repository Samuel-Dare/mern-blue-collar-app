import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Axios from 'axios';

import FormInput from '../ui/FormInput';
import Button from '../ui/Button';
import '../ui/formInput.css';
import { useOverlay } from '../context/OverlayContext';
import { urlSignupAsProfessional } from '../services/apiServiceProviders';
import { urlLogin, urlUpdateMe } from '../services/apiUsers';

const LogIn = ({ valuesSignupAsProfessional }) => {
  const { isOverlayVisible } = useOverlay();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [goToDashboard, setGoToDashboard] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');

    const valuesLogin = { email: values.email, password: values.password };

    const loginRequest = async () => {
      try {
        const response = await Axios.post(urlLogin, valuesLogin, {
          withCredentials: true,
        });
        const data = response.data;
        console.log(data);
        return data;
      } catch (err) {
        setLoginError('Incorrect email or password');
        console.error('Error in the login request:', err);
      }
    };

    const updateUserRole = async () => {
      try {
        const response = await Axios.patch(
          urlUpdateMe,
          {
            role: 'professional',
          },
          {
            withCredentials: true,
          },
        );

        return response.data;
      } catch (err) {
        console.error('Error updating user role:', err);
      }
    };

    const signupAsProfessionalRequest = async (userId) => {
      try {
        const response = await Axios.post(urlSignupAsProfessional, {
          ...valuesSignupAsProfessional,
          user: userId,
        });
        const data = response.data;
        return data;
      } catch (err) {
        console.error('Error in the signupAsProfessional request:', err);
      }
    };

    try {
      if (valuesSignupAsProfessional && isOverlayVisible) {
        const data = await loginRequest();
        if (data.status === 'success') {
          await updateUserRole();
          await signupAsProfessionalRequest(data.data.user._id);
        }
      } else {
        const data = await loginRequest();
        if (data.status === 'success') {
          alert('You are successfully logged in');
          // setGoToDashboard(true);
        }
      }
    } catch (err) {
      console.log('💣ERROR:', err);
    }
  };

  if (goToDashboard) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="mt-10 bg-colorGrey50 p-10 md:mx-auto md:w-[500px] md:p-16">
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

        <Button type="primaryFull">
          {valuesSignupAsProfessional && isOverlayVisible
            ? 'Become A BCollar'
            : 'Log in'}
        </Button>

        {!valuesSignupAsProfessional && !isOverlayVisible && (
          <div className="mt-10 text-center">
            <span>Don't an account? </span>
            <Button to="/signup" type="pointer">
              Sign up
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default LogIn;
