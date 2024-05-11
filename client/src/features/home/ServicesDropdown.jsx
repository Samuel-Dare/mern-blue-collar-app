import { Link } from 'react-router-dom';
import { H2 } from '../../ui/Headings';

const ServicesDropdown = () => {
  const servicesWithSubServices = [
    {
      service: 'Home and Office',
      subServices: ['Cleaning', 'Help Moving', 'Painting', 'Plumbing'],
    },
    {
      service: 'Repairs',
      subServices: ['AC Repair', 'Automotive Repair'],
    },
    {
      service: 'Outdoor',
      subServices: ['Running Errands', 'Delivery', 'Driving'],
    },
  ];
  return (
    <div className="absolute right-24 z-10 mt-2 grid w-2/3 justify-items-center space-y-2 rounded-md border border-colorGrey300 bg-colorGrey50 text-colorGrey800 shadow-lg md:grid-cols-3 md:py-10 lg:grid-cols-4 lg:py-14">
      {servicesWithSubServices.map((mainService, index) => (
        <div
          key={index}
          className={`${
            mainService.subServices.length > 3 ? 'row-span-2' : ''
          } mb-4`}
        >
          <H2 title={mainService.service} />
          <div className="pl-2">
            {mainService.subServices.map((subService, subIndex) => (
              <p
                key={subIndex}
                className="block px-4 py-2 hover:text-colorBlue700"
              >
                {subService}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesDropdown;
