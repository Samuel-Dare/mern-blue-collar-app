import { useState } from 'react';
import Axios from 'axios';
import { Navigate } from 'react-router-dom';

import FormInput from '../ui/FormInput';
import Button from '../ui/Button';
import { useOverlay } from '../context/OverlayContext';
import { urlSignup } from '../services/apiUsers';
import { urlSignupAsProfessional } from '../services/apiServiceProviders';

const Signupp = ({ valuesSignupAsProfessional }) => {
  const { isOverlayVisible } = useOverlay();
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'firstName',
      placeholder: 'First Name',
      type: 'text',
      label: 'First Name',
      errorMessage: 'Field should be between 3 and 40 characters',
      required: true,
      pattern: "^[A-Za-z0-9 ,.'\\-]{3,40}$",
    },
    {
      id: 2,
      name: 'lastName',
      placeholder: 'Last Name',
      type: 'text',
      label: 'Last Name',
      errorMessage: 'Field should be between 3 and 40 characters',
      required: true,
      pattern: "^[A-Za-z0-9 ,.'\\-]{3,40}$",
    },
    {
      id: 3,
      name: 'email',
      placeholder: 'Email',
      type: 'email',
      label: 'Email',
      errorMessage: 'A valid email is required',
      required: true,
    },
    {
      id: 4,
      name: 'phone',
      placeholder: 'Phone Number',
      type: 'tel',
      label: 'Phone Number',
      errorMessage: 'A valid phone number is required',
      required: true,
    },
    {
      id: 5,
      name: 'password',
      placeholder: 'Password',
      type: 'password',
      label: 'Password',
      errorMessage:
        'Password should be between 8-20 characters, must include at least 1 letter, 1 number, and 1 special character',
      required: true,
      pattern:
        '^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,20}$',
    },
    {
      id: 6,
      name: 'confirmPassword',
      placeholder: 'Confirm Password',
      type: 'password',
      label: 'Confirm Password',
      errorMessage: 'Passwords do not match',
      required: true,
      pattern: values.password,
    },
  ];

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let valuesSignup = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
      password: values.password,
      passwordConfirm: values.confirmPassword,
    };

    if (valuesSignupAsProfessional && isOverlayVisible) {
      valuesSignup = { ...valuesSignup, role: 'professional' };
    }

    const signupRequest = async () => {
      try {
        const response = await Axios.post(urlSignup, valuesSignup);
        const data = response.data;
        console.log(data);
        return data;
      } catch (err) {
        console.error('Error in the signup request:', err);
      }
    };

    const signupAsProfessionalRequest = async (userId) => {
      try {
        const response = await Axios.post(urlSignupAsProfessional, {
          ...valuesSignupAsProfessional,
          user: userId,
        });
        const data = response.data;
        console.log(data);
        return data;
      } catch (err) {
        console.error('Error in the signupAsProfessional request:', err);
      }
    };

    try {
      if (valuesSignupAsProfessional && isOverlayVisible) {
        const data = await signupRequest();
        if (data.status === 'success') {
          await signupAsProfessionalRequest(data.data.user._id);
        }
      } else {
        const data = await signupRequest();
        if (data.status === 'success') {
          alert("You've successfully signed up");
          setGoToLogin(true);
        }
      }
    } catch (err) {
      console.log('💣ERROR', err);
    }
  };

  const [goToLogin, setGoToLogin] = useState(false);
  if (goToLogin) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="mt-10 bg-colorGrey100 p-10 md:mx-auto md:w-[500px] md:p-16">
      <form onSubmit={handleSubmit}>
        <h1 className="pb-2 text-h1">Register</h1>
        {inputs.map((input) => (
          <FormInput key={input.id} onChange={handleChange} {...input} />
        ))}

        <Button type="primaryFull">
          {valuesSignupAsProfessional && isOverlayVisible
            ? 'Become A BCollar'
            : 'Sign Up'}
        </Button>

        {!valuesSignupAsProfessional && !isOverlayVisible && (
          <div className="mt-10 text-center">
            <span>Already have an account? </span>
            <Button to="/login" type="pointer">
              Log in
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Signupp;
