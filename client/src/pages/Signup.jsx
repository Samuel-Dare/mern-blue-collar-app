import { useState } from 'react';

import Button from '../ui/Button';
import { useOverlay } from '../context/OverlayContext';
import { useSignup } from '../features/authentication/useSignup';
import { useSignupAsProfessional } from '../features/authentication/useSignupAsProfessional';
import ReusableInput from '../ui/ReusableInput';
import { H1 } from '../ui/Headings';
import Spinner from '../ui/Spinner';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
};
const Signup = ({ professionalDetails, onProfessionalInitialState }) => {
  const [values, setValues] = useState(initialState);
  const [isFormValid, setIsFormValid] = useState(false);
  const { signup, isSigningupUser } = useSignup();
  const { signupAsProfessional, isSigningupProfessional } =
    useSignupAsProfessional();
  const { isOverlayVisible } = useOverlay();

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
        'Password should be between 8 and 20 characters, must include at least 1 letter, 1 number, and 1 special character',
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

  const handleChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleIsFormValid = () => {
    // Check if all required fields are filled
    const allRequiredFieldsFilled = inputs.every(
      (input) => !input.required || values[input.name],
    );
    setIsFormValid(allRequiredFieldsFilled);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !values.firstName ||
      !values.lastName ||
      !values.phone ||
      !values.email ||
      !values.password ||
      !values.confirmPassword
    )
      return;

    if (professionalDetails && isOverlayVisible) {
      signupAsProfessional(
        {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: values.phone,
          password: values.password,
          passwordConfirm: values.confirmPassword,
          // Professional Details
          services: professionalDetails.services,
          location: professionalDetails.location,
        },
        {
          onSuccess: () => {
            setValues(initialState);
            onProfessionalInitialState();
          },
        },
      );
    } else {
      signup(
        {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: values.phone,
          password: values.password,
          passwordConfirm: values.confirmPassword,
        },
        {
          onSuccess: () => {
            setValues(initialState);
          },
        },
      );
    }

    // let valuesSignup = {
    //   firstName: values.firstName,
    //   lastName: values.lastName,
    //   email: values.email,
    //   phone: values.phone,
    //   password: values.password,
    //   passwordConfirm: values.confirmPassword,
    // };

    // if (professionalDetails && isOverlayVisible) {
    //   valuesSignup = { ...valuesSignup, role: 'professional' };
    // }

    // const signupRequest = async () => {
    //   try {
    //     const response = await Axios.post(urlSignup, valuesSignup);
    //     const data = response.data;
    //     console.log(data);
    //     return data;
    //   } catch (err) {
    //     console.error('Error in the signup request:', err);
    //   }
    // };

    // const signupAsProfessionalRequest = async (userId) => {
    //   try {
    //     const response = await Axios.post(urlSignupAsProfessional, {
    //       ...professionalDetails,
    //       user: userId,
    //     });
    //     const data = response.data;
    //     console.log(data);
    //     return data;
    //   } catch (err) {
    //     console.error('Error in the signupAsProfessional request:', err);
    //   }
    // };

    //   try {
    //     if (professionalDetails && isOverlayVisible) {
    //       const data = await signupRequest();
    //       if (data.status === 'success') {
    //         await signupAsProfessionalRequest(data.data.user._id);
    //       }
    //     } else {
    //       const data = await signupRequest();
    //       if (data.status === 'success') {
    //         alert("You've successfully signed up");
    //         setGoToLogin(true);
    //       }
    //     }
    //   } catch (err) {
    //     console.log('💣ERROR', err);
    //   }
    // };

    // const [goToLogin, setGoToLogin] = useState(false);
    // if (goToLogin) {
    //   return <Navigate to="/login" />;
  };

  if (isSigningupUser || isSigningupProfessional) return <Spinner />;

  return (
    <div className="flex items-center bg-colorBrand1">
      <div>
        <img src="assets/welcome-600x400.png" style={{}} alt="" />
      </div>
      <div className="mt-10 bg-colorGrey100 p-10 md:mx-auto md:w-[500px] md:rounded-2xl md:p-16">
        {/* <h1 className="pb-2 text-h1">Register</h1> */}
        <H1 title="Register" />
        <form>
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
              onFormValid={handleIsFormValid}
            />
          ))}
          {/* {inputs.map((input) => (
            <FormInput key={input.id} onChange={handleChange} {...input} />
          ))} */}
        </form>

        <Button
          type="primaryFull"
          onClick={handleSubmit}
          disabled={!isFormValid || isSigningupUser || isSigningupProfessional}
        >
          {professionalDetails && isOverlayVisible
            ? 'Become A Blue Kollar'
            : 'Sign Up'}
        </Button>

        {!professionalDetails && !isOverlayVisible && (
          <div className="mt-10 text-center">
            <span>Already have an account? </span>
            <Button to="/login" type="pointer">
              Log in
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
