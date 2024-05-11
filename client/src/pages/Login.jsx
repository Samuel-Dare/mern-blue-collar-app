import { useState } from 'react';

import Button from '../ui/Button';
import { useOverlay } from '../context/OverlayContext';
import { useLogin } from '../features/authentication/useLogin';
import { useSignupAsProfessional } from '../features/authentication/useSignupAsProfessional';
import ReusableInput from '../ui/ReusableInput';
import { H1 } from '../ui/Headings';
import { useUpdateUser } from '../features/authentication/useUpdateUser';
import Spinner from '../ui/Spinner';

const initialState = {
  email: '',
  password: '',
};

const Login = ({ professionalDetails, onProfessionalInitialState }) => {
  const { login, isLogining } = useLogin();
  const { signupAsProfessional, isProfessionalSignupLoading } =
    useSignupAsProfessional();
  const { updateUser, isUpdating } = useUpdateUser();
  const { isOverlayVisible } = useOverlay();
  const [values, setValues] = useState(initialState);

  const inputs = [
    {
      id: 1,
      name: 'email',
      label: 'Email',
      placeholder: 'Email',
      type: 'text',
      required: true,
    },
    {
      id: 2,
      name: 'password',
      label: 'Password',
      placeholder: 'Password',
      type: 'password',
      required: true,
    },
  ];

  const handleChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.email || !values.password) return;

    // if (professionalDetails) {
    //   login(
    //     { email: values.email, password: values.password },
    //     {
    //       onSuccess: () => {
    //         updateUser(
    //           { role: 'professional' },
    //           {
    //             onSuccess: () => {
    //               signupAsProfessional({
    //                 services: professionalDetails.selectedServices,
    //                 location: professionalDetails.selectedLocation,
    //               });
    //             },
    //           },
    //         );
    //       },
    //     },
    //   );
    // }

    if (professionalDetails && isOverlayVisible) {
      signupAsProfessional(
        {
          email: values.email,
          password: values.password,

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
    } else
      login(
        { email: values.email, password: values.password },
        {
          onSuccess: () => {
            setValues(initialState);
          },
        },
      );
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoginError('');

  //   const valuesLogin = { email: values.email, password: values.password };

  //   const loginRequest = async () => {
  //     try {
  //       const response = await Axios.post(urlLogin, valuesLogin, {
  //         withCredentials: true,
  //       });
  //       const data = response.data;
  //       console.log(data);
  //       return data;
  //     } catch (err) {
  //       setLoginError('Incorrect email or password');
  //       console.error('Error in the login request:', err);
  //     }
  //   };

  //   const updateUserRole = async () => {
  //     try {
  //       const response = await Axios.patch(
  //         urlUpdateMe,
  //         {
  //           role: 'professional',
  //         },
  //         {
  //           withCredentials: true,
  //         },
  //       );

  //       return response.data;
  //     } catch (err) {
  //       console.error('Error updating user role:', err);
  //     }
  //   };

  //   const signupAsProfessionalRequest = async (userId) => {
  //     try {
  //       const response = await Axios.post(urlSignupAsProfessional, {
  //         ...valuesSignupAsProfessional,
  //         user: userId,
  //       });
  //       const data = response.data;
  //       return data;
  //     } catch (err) {
  //       console.error('Error in the signupAsProfessional request:', err);
  //     }
  //   };

  //   try {
  //     if (valuesSignupAsProfessional && isOverlayVisible) {
  //       const data = await loginRequest();
  //       if (data.status === 'success') {
  //         await updateUserRole();
  //         await signupAsProfessionalRequest(data.data.user._id);
  //       }
  //     } else {
  //       const data = await loginRequest();
  //       if (data.status === 'success') {
  //         alert('You are successfully logged in');
  //         setGoToDashboard(true);
  //       }
  //     }
  //   } catch (err) {
  //     console.log('💣ERROR:', err);
  //   }
  // };

  // if (goToDashboard) {
  //   return <Navigate to="/dashboard" />;
  // }

  if (isProfessionalSignupLoading || isLogining || isUpdating)
    return <Spinner />;

  return (
    <div className="flex min-h-screen items-center bg-colorBrand1">
      <div>
        <img src="assets/login-600x400.png" style={{}} alt="" />
      </div>
      <div className="mt-10 rounded-lg bg-colorGrey100 p-10 md:mx-auto md:w-[500px] md:p-16">
        <H1 title="Login" />
        <form onSubmit={handleSubmit}>
          <div>
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
              />
            ))}

            {/* {inputs.map((input) => (
            <FormInput
              key={input.id}
              onChange={handleChange}
              value={values[input]}
              {...input}
            />
          ))} */}
          </div>
          {/* <p className="errMsg" style={{ display: 'block' }}>
          {loginError}
        </p> */}

          <Button type="primaryFull">
            {professionalDetails && isOverlayVisible
              ? 'Become A Blue Kollar'
              : 'Log in'}
          </Button>

          {!professionalDetails && !isOverlayVisible && (
            <div className="mt-10 text-center">
              <span>Don't have an account? </span>
              <Button to="/signup" type="pointer" onClick={handleSubmit}>
                Sign up
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
