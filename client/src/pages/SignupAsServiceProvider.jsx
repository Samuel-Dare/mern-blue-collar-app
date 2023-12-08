import { useState } from 'react';
import Axios from 'axios';

import Button from '../ui/Button';
import FormInputForSelectElement from '../ui/FormInputForSelectElement';
import { useOverlay } from '../context/OverlayContext';
import OverlayContent from '../ui/OverlayContent';
import SignUp from './Signup';
import LogIn from './Login';
import { AvailableServices, ServiceProvidersLocations } from '../config/config';

function SignupAsServiceProvider() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const url = 'api/v1/users/signupAsProfessional';

  const { handleCloseOverlay } = useOverlay();
  const [buttonClicked, setButtonClicked] = useState(null);
  const [values, setValues] = useState({
    service: 'Plumbing',
    location: 'Lagos Island',
  });

  const inputOptions = [
    {
      id: 11,
      name: 'service',
      type: 'text',
      label: 'Choose your service',
      options: AvailableServices,
      required: true,
    },
    {
      id: 12,
      name: 'location',
      type: 'text',
      label: 'Select your area',
      options: ServiceProvidersLocations,
      required: true,
    },
  ];

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  const handleButtonSignup = (e) => {
    e.preventDefault();

    setButtonClicked('signup');
    handleCloseOverlay();
  };

  const handleButtonLogin = (e) => {
    e.preventDefault();

    setButtonClicked('login');
    handleCloseOverlay();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleCloseOverlay();
    try {
      await Axios.post(`${BASE_URL}/${url}`, {
        service: values.service,
        location: values.location,
      }).then((data) => console.log(data));
      alert("You've successfully signed up");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="mt-10 bg-colorGrey100 p-10 md:mx-auto md:w-[500px] md:p-16">
        <form>
          <h1 className="pb-2 text-h1">Earn money with ease</h1>

          {inputOptions.map((inputOption) => (
            <FormInputForSelectElement
              key={inputOption.id}
              onChange={handleChange}
              {...inputOption}
            />
          ))}

          <Button onClick={handleButtonSignup} type="primaryFull">
            Get Started
          </Button>

          <div className="mt-10 text-center">
            <span>Already have an account? </span>
            <Button onClick={handleButtonLogin} type="pointer">
              Log in
            </Button>
          </div>
        </form>
      </div>

      <OverlayContent>
        {buttonClicked === 'signup' && (
          <SignUp valuesSignupAsProfessional={values} />
        )}
        {buttonClicked === 'login' && (
          <LogIn valuesSignupAsProfessional={values} />
        )}
      </OverlayContent>
    </>
  );
}

export default SignupAsServiceProvider;
