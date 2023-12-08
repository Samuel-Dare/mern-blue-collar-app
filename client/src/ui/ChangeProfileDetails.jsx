import { useEffect, useState } from 'react';
import Axios from 'axios';

import FormInput from './FormInput';
import { urlGetMe } from '../services/apiUsers';
import { useMeData } from '../hooks/useData';
import Button from './Button';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function ChangeProfileDetails() {
  const { data, isLoading, error } = useMeData(urlGetMe);

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
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
  ];

  useEffect(() => {
    if (!isLoading && data) {
      setValues(data);
    }
  }, [isLoading, data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name !== 'email' && name !== 'phone') {
      setValues({ ...values, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any changes were made in the form
    const isFormUnchanged = JSON.stringify(values) === JSON.stringify(data);

    if (isFormUnchanged) {
      alert('No changes were made.');
      return; // Do not send the request to the backend
    }

    try {
      await Axios.patch(
        `${BASE_URL}/api/v1/users/updateMe`,
        {
          firstName: values.firstName,
          lastName: values.lastName,
        },
        {
          withCredentials: true,
        },
      ).then((data) => console.log(data));
      alert("You've successfully updated your profile");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="mb-4 text-3xl font-bold">Settings</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              onChange={handleChange}
              defaultValue={values[input.name]}
              {...input}
            />
          ))}
          <FormInput
            name="email"
            label="Email"
            type="email"
            defaultValue={values.email}
            disabled
          />
          <FormInput
            name="phone"
            label="Phone Number"
            type="tel"
            defaultValue={values.phone}
            disabled
          />
          <Button type="primary"> Save Changes</Button>
        </form>
      </div>
    </div>
  );
}

export default ChangeProfileDetails;
