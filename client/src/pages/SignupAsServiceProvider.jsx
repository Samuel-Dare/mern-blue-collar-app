import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import Button from '../ui/Button';
import { useOverlay } from '../context/OverlayContext';
import OverlayContent from '../ui/OverlayContent';
import Signup from './Signup';
import Login from './Login';
import { useUser } from '../features/authentication/useUser';
import ReusableDropdownInput from '../ui/ReusableDropDownInput';
import ReusableDropdownAndMultipleSelect from '../ui/ReusableDropdownAndMultipleSelect';
import { H1, H3 } from '../ui/Headings';
import useAvailableServicesAndLocation from '../hooks/useAvailableServicesAndLocations';

function SignupAsServiceProvider() {
  const { isAuthenticated } = useUser();
  const { handleCloseOverlay } = useOverlay();
  const [buttonClicked, setButtonClicked] = useState(null);
  const { availableServices, availableLocations } =
    useAvailableServicesAndLocation();
  const [services, setServices] = useState([]);
  const [location, setLocation] = useState('');

  const handleProfessionalDetailsInitialState = () => {
    setServices([]);
    setLocation('');
  };

  const handleChangeSelectedServices = (selectedServices) => {
    setServices(selectedServices);
  };

  const handleChangeSelectedLocation = (selectedLocation) => {
    setLocation(selectedLocation);
  };

  const handleButtonAction = (e, action) => {
    e.preventDefault();
    if (services.length === 0) {
      toast.error('Please select at least one service');
      return;
    }
    if (!location) {
      toast.error('Please choose your location');
      return;
    }
    setButtonClicked(action);
    handleCloseOverlay();
  };

  const handleButtonSignup = (e) => {
    handleButtonAction(e, 'signup');
  };

  const handleButtonLogin = (e) => {
    handleButtonAction(e, 'login');
  };

  return (
    <>
      <div className="mt-10 rounded-2xl bg-colorGrey100 p-10 md:mx-auto md:w-[500px] md:p-16">
        <form>
          <H1 title="Earn money with Ease" center={true} />
          <div>
            <H3 title="Services" />
            <ReusableDropdownAndMultipleSelect
              label="Select the services you offer..."
              options={availableServices}
              selectedServices={services}
              onChange={handleChangeSelectedServices}
            />
          </div>
          <div className="my-5">
            <H3 title="Location" />
            <ReusableDropdownInput
              label="Choose your location..."
              options={availableLocations}
              value={location}
              onChange={handleChangeSelectedLocation}
              required={true}
            />
          </div>

          <div className="mt-7">
            {isAuthenticated ? (
              <Button onClick={handleButtonLogin} type="primaryFull">
                Log in again to comfirm your registration
              </Button>
            ) : (
              <>
                <Button onClick={handleButtonSignup} type="primaryFull">
                  Get Started
                </Button>

                <div className="mt-10 text-center">
                  <span>If you already have a user account, </span>
                  <Button onClick={handleButtonLogin} type="pointer">
                    please LOGIN here to comfirm your registration
                  </Button>
                </div>
              </>
            )}
          </div>
        </form>
      </div>

      <OverlayContent>
        {buttonClicked === 'signup' && (
          <Signup
            professionalDetails={{ services, location }}
            onProfessionalInitialState={handleProfessionalDetailsInitialState}
            // services={services}
            // setServices={setServices}
            // location={location}
            // setLocation={setLocation}
          />
        )}
        {buttonClicked === 'login' && (
          <Login
            professionalDetails={{ services, location }}
            onProfessionalInitialState={handleProfessionalDetailsInitialState}
            // services={services}
            // setServices={setServices}
            // location={location}
            // setLocation={setLocation}
          />
        )}
      </OverlayContent>

      {/* {isAuthenticated && buttonClicked === 'login' ? (
        <OverlayContent>
          {' '}
          <Login
            professionalDetails={{ selectedServices, selectedLocation }}
          />{' '}
        </OverlayContent>
      ) : (
        <>
          <OverlayContent>
            {buttonClicked === 'signup' && (
              <Signup
                professionalDetails={{ selectedServices, selectedLocation }}
              />
            )}
          </OverlayContent>
          <OverlayContent>
            {buttonClicked === 'login' && (
              <Login
                professionalDetails={{ selectedServices, selectedLocation }}
              />
            )}
          </OverlayContent>
        </>
      )} */}

      {/* <OverlayContent>
        {buttonClicked === 'signup' && (
          <Signup valuesSignupAsProfessional={values} />
        )}
        {buttonClicked === 'login' && (
          <Login valuesSignupAsProfessional={values} />
        )}
      </OverlayContent> */}
    </>
  );
}

export default SignupAsServiceProvider;
