import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from './Button';
import SeeMore from './SeeMore';
import { AvailableServices } from '../config/config';
import { useTaskInfoContext } from '../context/TaskInfoContext';

export function HeaderOverlayContent() {
  const [inputText, setInputText] = useState('');
  const navigate = useNavigate();
  const { taskInfo, setTaskInfo } = useTaskInfoContext();

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = (service) => {
    setTaskInfo({ ...taskInfo, selectedService: service });
    navigate('/task-description-form');
  };

  const filteredBtnServices = AvailableServices.map((btnService, index) =>
    index <= 3 ? btnService : null,
  );

  const others = AvailableServices.map(
    (btnService, index) => index > 3 && btnService,
  );

  return (
    <div className=" flex flex-col items-center justify-center space-y-8 rounded-md bg-colorGrey100 px-5 py-10 text-sm shadow-colorShadowLg md:h-[300px] md:w-[600px] md:px-0 md:py-20 md:text-2xl">
      <h1 className="text-2xl font-bold text-colorGrey800 md:text-4xl">
        You need help? We've got you covered!
      </h1>
      <p className="w-4/5 border-b border-colorGrey400"></p>
      <p>Want to book the services of top-rated Blue Collars today?</p>
      <div className="flex w-3/4 flex-col gap-5 md:flex-row md:gap-2">
        <input
          className="w-full rounded-md p-3 md:p-5"
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

      <div className="flex flex-wrap justify-center space-x-[-4px]">
        {filteredBtnServices.map((btnService, index) => (
          <span key={index} className="p-1">
            <Button type="small" onClick={() => handleClick(btnService)}>
              {btnService}
            </Button>
          </span>
        ))}

        <SeeMore type="pointerBlack">
          {others.map((btnService, index) => (
            <span key={index} className="p-1">
              <Button type="small" onClick={() => handleClick(btnService)}>
                {btnService}
              </Button>
            </span>
          ))}
        </SeeMore>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="h-screen">
      <div
        className="h-1/3 w-full justify-center bg-gradient-to-r from-colorBrand800 via-colorGrey500 to-colorBrand700 md:flex md:h-full md:items-center 
      "
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
