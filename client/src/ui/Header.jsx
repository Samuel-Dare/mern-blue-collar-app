import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from './Button';
import { useTaskInfoContext } from '../context/TaskInfoContext';
import Animation from '../utils/Animation';
import { useScreenSize } from '../context/ScreenSize';
import useAvailableServicesAndLocation from '../hooks/useAvailableServicesAndLocations';

export function HeaderOverlayContent({ isDashboard = false }) {
  const [inputText, setInputText] = useState('');
  const navigate = useNavigate();
  const { availableServices } = useAvailableServicesAndLocation();
  const { taskInfo, setTaskInfo } = useTaskInfoContext();
  const [isSeeMore, setIsSeeMore] = useState(false);

  const handleSeeMore = () => {
    setIsSeeMore(!isSeeMore);
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = (service) => {
    setTaskInfo({ ...taskInfo, selectedService: service });
    navigate('/task-description');
  };
  console.log(taskInfo);

  const filteredBtnServices = availableServices.map((btnService, index) =>
    index <= 3 ? btnService : null,
  );

  const others = availableServices.map(
    (btnService, index) => index > 3 && btnService,
  );

  return (
    <Animation type="1">
      <div className={`${isDashboard ? ' ' : ''}`}>
        <div
          className={`flex flex-col items-center justify-center px-5 py-10 shadow-colorShadowLg ${isDashboard ? ' mx-auto h-1/2 space-y-8 bg-colorGrey200 text-lg md:space-y-10 md:px-20 md:py-24 md:text-4xl' : ' h-full space-y-8 rounded-md bg-colorGrey100 text-sm md:w-[600px] md:px-0 md:py-20 md:text-2xl md:opacity-90'} `}
        >
          <h1 className="text-2xl font-bold text-colorBrand1 md:text-4xl">
            You need help? We've got you covered!
          </h1>
          <p className="w-3/4 border-b border-colorGrey400 font-bold"></p>
          <p className="md:font-bold">
            Want to book the services of top-rated Blue Collars today?
          </p>
          <div className="flex w-3/4 flex-col gap-5 md:flex-row md:gap-2">
            <input
              className="w-full rounded-md bg-colorGrey900 p-3 text-colorGrey0 md:p-5"
              type="text"
              value={inputText}
              onChange={handleChange}
              placeholder="Enter the service you need help with..."
            />
            <Button
              type="primary"
              onClick={() => handleClick(inputText)}
              disabled={inputText === ''}
            >
              Find A BCollar
            </Button>
          </div>

          <div
            className={`flex flex-wrap items-end justify-center space-x-2 space-y-4 bg-colorGrey200 md:p-3 ${isDashboard ? 'w-3/4' : ''}`}
          >
            {filteredBtnServices.map((btnService, index) => (
              <Button
                key={index}
                type={`${isDashboard ? 'secondary' : 'small'}`}
                onClick={() => handleClick(btnService)}
              >
                {btnService}
              </Button>
            ))}

            {isSeeMore &&
              others.map((btnService, index) => (
                <Button
                  key={index}
                  type={`${isDashboard ? 'secondary' : 'small'}`}
                  onClick={() => handleClick(btnService)}
                >
                  {btnService}
                </Button>
              ))}

            <Button type="pointer" onClick={handleSeeMore}>
              {isSeeMore ? 'See Less' : 'See More'}
            </Button>

            {/* <SeeMore type="pointerBlack">
              {others.map((btnService, index) => (
                <span key={index} className="p-1">
                  <Button
                    type={`${isDashboard ? 'secondary' : 'small'}`}
                    onClick={() => handleClick(btnService)}
                  >
                    {btnService}
                  </Button>
                </span>
              ))}
            </SeeMore> */}
          </div>
        </div>
      </div>
    </Animation>
  );
}

function Header() {
  const { isSmallScreen } = useScreenSize();

  const bannerImage = isSmallScreen
    ? 'assets/home-banner-400x250.png'
    : 'assets/home-banner-1200x600.svg';

  return (
    <div>
      {/* <div
        className="h-1/3 w-full justify-center bg-gradient-to-r from-colorBrand800 via-colorGrey500 to-colorBrand700 md:flex md:h-full md:items-center 
      "
      > */}
      <div
        className=" h-full w-full justify-center md:flex md:items-center 
      "
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          // backgroundPositionY: 'top',
          // backgroundPositionX: 'left',
          height: isSmallScreen ? '250px' : '600px',
        }}
      >
        <main className="hidden md:block">
          <HeaderOverlayContent />
        </main>
      </div>

      <main className="md:hidden">
        <HeaderOverlayContent />
      </main>
    </div>
  );
}

export default Header;
