import { useState } from 'react';
import Axios from 'axios';
import { Navigate } from 'react-router-dom';
import FormInput from '../ui/FormInput';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const BecomeABCollar = () => {
  const [values, setValues] = useState({
    name: '',
    username: '',
    email: '',
    birthday: '',
    photo: '',
    password: '',
    confirmPassword: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'name',
      placeholder: 'Enter full name',
      type: 'text',
      label: 'Name',
      errorMessage: 'Name should be between 3 and 40 characters',
      required: true,
      // pattern: "^[A-Za-z0-9 ,.'-]{3,40}$",
      pattern: "^[A-Za-z0-9 ,.'\\-]{3,40}$",
    },
    {
      id: 2,
      name: 'username',
      placeholder: 'Username cannot be changed',
      type: 'text',
      label: 'Username',
      errorMessage: 'Username should be between 3 and 20 characters',
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
      name: 'birthday',
      placeholder: 'Birthday',
      type: 'date',
      label: 'Birthday',
      required: true,
    },
    {
      id: 5,
      name: 'photo',
      placeholder: 'Please select a photo',
      type: 'file',
      accept: 'image/*',
      label: 'Photo',
      required: true,
    },
    {
      id: 6,
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
      id: 7,
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
    if (e.target.type === 'file') {
      // Handle file input
      setValues({ ...values, photo: e.target.files[0] });
    } else {
      // Handle other inputs
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('username', values.username);
      formData.append('email', values.email);
      formData.append('birthday', values.birthday);
      formData.append('photo', values.photo);
      formData.append('password', values.password);
      formData.append('passwordConfirm', values.confirmPassword);

      await Axios.post(`${BASE_URL}/api/v1/users/signup`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then(() => setGoToLogin(true));
      alert("You've successfully signed up");
    } catch (err) {
      console.log(err);
    }
  };

  // const error = inputs.map((input) => {
  //   return input;
  // });

  // console.log(error);

  const [goToLogin, setGoToLogin] = useState(false);
  if (goToLogin) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="formWrapper">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput key={input.id} onChange={handleChange} {...input} />
        ))}
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default BecomeABCollar;
