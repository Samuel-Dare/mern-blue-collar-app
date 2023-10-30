import { useState } from 'react';
import Axios from 'axios';

import { useDashboardSidebar } from '../context/DashboardSidebarContext';
import FormInput from './FormInput';
import { getMe } from '../services/apiUsers';
import { useMeData } from '../hooks/useData';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function EditProfile() {
  const { selectedSidebarItem } = useDashboardSidebar();
  const { data, isLoading, error } = useMeData(getMe);

  const [values, setValues] = useState({
    firstName: data === undefined ? '' : data.firstName,
    lastName: '',
    email: '',
    phone: '',
  });

  if (isLoading) return <p>isLoading...</p>;

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
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('firstName', values.firstName);
      formData.append('lastName', values.lastName);
      //   formData.append('email', values.email);
      //   formData.append('phone', values.phone);

      await Axios.post(`${BASE_URL}/api/v1/users/updateMe`, formData).then(
        (data) => console.log(data),
      );
      alert("You've successfully updated your profile");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {selectedSidebarItem === 'Settings' && (
        <div>
          <h1 className="mb-4 text-3xl font-bold">Settings</h1>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Edit Profile</h2>
            <form onSubmit={handleSubmit}>
              {/* <label htmlFor="firstName" className="text-gray-600 mt-2 block">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full rounded-md border p-2"
                placeholder="First Name"
              />
              <label htmlFor="lastName" className="text-gray-600 mt-2 block">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full rounded-md border p-2"
                placeholder="Last Name"
              /> */}

              {inputs.map((input) => (
                <FormInput {...input} />
              ))}
              <button className="bg-blue-500 text-white mt-4 rounded-md p-2">
                Save Changes
              </button>
            </form>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Change Password</h2>
            <form>
              <label
                htmlFor="currentPassword"
                className="text-gray-600 mt-2 block"
              >
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
              />
              <button className="bg-blue-500 text-white mt-4 rounded-md p-2">
                Change Password
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditProfile;
