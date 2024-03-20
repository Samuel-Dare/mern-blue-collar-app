import { useState } from 'react';
import Axios from 'axios';

import FormInput from './FormInput';
import Button from './Button';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function ChangePassword() {
  const [values, setValues] = useState({
    currentPassword: '',
    password: '',
    passwordConfirm: '',
  });

  const inputs = [
    {
      id: 11,
      name: 'currentPassword',
      placeholder: 'Current Password',
      type: 'password',
      label: 'Current Password',
      errorMessage: 'Please provide your current password',
      required: true,
    },
    {
      id: 12,
      name: 'password',
      placeholder: 'New Password',
      type: 'password',
      label: 'New Password',
      errorMessage:
        'Password should be between 8-20 characters, must include at least 1 letter, 1 number, and 1 special character',
      required: true,
      pattern:
        '^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,20}$',
    },
    {
      id: 13,
      name: 'passwordConfirm',
      placeholder: 'Confirm New Password',
      type: 'password',
      label: 'Confirm New Password',
      errorMessage: 'Passwords do not match',
      required: true,
      pattern: values.password,
    },
  ];

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await Axios.patch(
        `${BASE_URL}/api/v1/users/updateMyPassword`,
        {
          currentPassword: values.currentPassword,
          password: values.password,
          passwordConfirm: values.passwordConfirm,
        },
        {
          withCredentials: true,
        },
      ).then((data) => console.log(data));
      alert("You've successfully updated your password");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold">Change Password</h2>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="currentPassword" className="text-gray-600 mt-2 block">
          Current Password
        </label>
        <input
          type="password"
          id="currentPassword"
          name="currentPassword"
          className="w-full rounded-md border p-2"
          placeholder="Current Password"
        />
        <label htmlFor="newPassword" className="text-gray-600 mt-2 block">
          New Password
        </label>
        <input
          type="password"
          id="newPassword"
          name="newPassword"
          className="w-full rounded-md border p-2"
          placeholder="New Password"
        /> */}

        {inputs.map((input) => (
          <FormInput key={input.id} onChange={handleChange} {...input} />
        ))}

        <Button type="primary">Change Password</Button>
      </form>
    </div>
  );
}

export default ChangePassword;
