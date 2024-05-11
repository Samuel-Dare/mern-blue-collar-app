import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import { useUser } from './useUser';
import Button from '../../ui/Button';
import ReusableInput from '../../ui/ReusableInput';
import { useUpdateUser } from './useUpdateUser';

function ChangeProfileDetails() {
  const { data, isLoading } = useUser();
  const { updateUser, isUpdating } = useUpdateUser();

  console.log(data);

  const [values, setValues] = useState({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone,
  });

  const inputs = [
    {
      id: 1,
      name: 'firstName',
      placeholder: 'First Name',
      type: 'text',
      label: 'First Name',
      errorMessage: 'First name must be between 3 and 40 characters long',
      required: true,
      pattern: "^[A-Za-z0-9 ,.'\\-]{3,40}$",
    },
    {
      id: 2,
      name: 'lastName',
      placeholder: 'Last Name',
      type: 'text',
      label: 'Last Name',
      errorMessage: 'Last name must be between 3 and 40 characters long',
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
      disabled: true,
    },
    {
      id: 4,
      name: 'phone',
      placeholder: 'Phone Number',
      type: 'tel',
      label: 'Phone Number',
      errorMessage: 'A valid phone number is required',
      required: true,
      pattern: '^+234[0-9]{10}$',
    },
  ];

  useEffect(() => {
    if (!isLoading && data) {
      setValues(data);
    }
  }, [isLoading, data]);

  const handleChange = (name, value) => {
    if (name !== 'email') {
      setValues({ ...values, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any changes were made in the form
    const isFormUnchanged = JSON.stringify(values) === JSON.stringify(data);

    if (isFormUnchanged) {
      return toast.success('No changes were made.');
    }

    // Create an object to store only the changed fields
    const changedFields = {};
    Object.keys(values).forEach((key) => {
      if (values[key] !== data[key]) {
        changedFields[key] = values[key];
      }
    });

    // Update only the changed fields
    updateUser(changedFields);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Check if any changes were made in the form
  //   const isFormUnchanged = JSON.stringify(values) === JSON.stringify(data);

  //   if (isFormUnchanged) {
  //     alert('No changes were made.');
  //     return; // Do not send the request to the backend
  //   }

  //   try {
  //     await Axios.patch(
  //       `${BASE_URL}/api/v1/users/updateMe`,
  //       {
  //         firstName: values.firstName,
  //         lastName: values.lastName,
  //       },
  //       {
  //         withCredentials: true,
  //       },
  //     ).then((data) => console.log(data));
  //     alert("You've successfully updated your profile");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div className="w-full">
      <h1 className="mb-4 text-3xl font-bold">Settings</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <ReusableInput
              key={input.id}
              name={input.name}
              label={input.label}
              type={input.type}
              value={values[input.name]}
              required={input.required}
              pattern={input.pattern}
              errorMessage={input.errorMessage}
              onChange={handleChange}
              disabled={input.disabled}
            />
          ))}
          {/* {inputs.map((input) => (
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
          /> */}
          <Button type="primary"> Save Changes</Button>
        </form>
      </div>
    </div>
  );
}

export default ChangeProfileDetails;
