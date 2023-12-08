import { Link } from 'react-router-dom';

const ServicesDropdown = () => {
  const servicesWithSubServices = [
    {
      service: 'Service 1',
      subServices: ['Subservice A', 'Subservice B', 'Subservice C'],
    },
    {
      service: 'Service 2',
      subServices: [
        'Subservice X',
        'Subservice Y',
        'Subservice Z',
        'Subservice Z',
        'Subservice Z',
        'Subservice Z',
      ],
    },
    {
      service: 'Service 3',
      subServices: ['Subservice 1', 'Subservice 2'],
    },
    {
      service: 'Service 4',
      subServices: ['Subservice M', 'Subservice N', 'Subservice O'],
    },
    {
      service: 'Service 5',
      subServices: ['Subservice M', 'Subservice N', 'Subservice O'],
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
          <Link to="#" className="block px-4 py-2 hover:bg-colorBlue700">
            {mainService.service}
          </Link>
          <div className="pl-2">
            {mainService.subServices.map((subService, subIndex) => (
              <Link
                key={subIndex}
                to="#"
                className="block px-4 py-2 hover:text-colorBlue700"
              >
                {subService}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesDropdown;
