import { useState } from 'react';
import Axios from 'axios';
import { Navigate } from 'react-router-dom';

import FormInput from '../ui/FormInput';
import Button from '../ui/Button';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const SignUp = () => {
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
      type: 'phone',
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
  // console.log(values);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('firstName', values.firstName);
      formData.append('lastName', values.lastName);
      formData.append('email', values.email);
      formData.append('phone', values.phone);
      formData.append('password', values.password);
      formData.append('passwordConfirm', values.confirmPassword);

      await Axios.post(`${BASE_URL}/api/v1/users/signup`, formData).then(() =>
        setGoToLogin(true),
      );
      alert("You've successfully signed up");
    } catch (err) {
      console.log(err);
    }
  };

  const [goToLogin, setGoToLogin] = useState(false);
  if (goToLogin) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="mx-auto mt-10 w-[400px] bg-colorGrey50 p-10 md:p-16">
      <form onSubmit={handleSubmit}>
        <h1 className="pb-2 text-h1">Register</h1>
        {inputs.map((input) => (
          <FormInput key={input.id} onChange={handleChange} {...input} />
        ))}
        <Button type="primary">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
