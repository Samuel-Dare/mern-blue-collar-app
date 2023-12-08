import SeeMore from './SeeMore';
import { useScreenSize } from '../context/ScreenSize';

const services = [
  {
    service: 'Furniture Assembly',
    avgPrice1: '6000',
    avgPrice2: '7000',
    img: '/assets/bluecollars3.jpg',
  },
  {
    service: 'Furniture Assembly',
    avgPrice1: '6000',
    avgPrice2: '7000',
    img: '/assets/bluecollars3.jpg',
  },
  {
    service: 'Furniture Assembly',
    avgPrice1: '6000',
    avgPrice2: '7000',
    img: '/assets/bluecollars3.jpg',
  },
  {
    service: 'Furniture Assembly',
    avgPrice1: '6000',
    avgPrice2: '7000',
    img: '/assets/bluecollars3.jpg',
  },
  {
    service: 'Furniture Assembly',
    avgPrice1: '6000',
    avgPrice2: '7000',
    img: '/assets/bluecollars3.jpg',
  },
  {
    service: 'Furniture Assembly',
    avgPrice1: '6000',
    avgPrice2: '7000',
    img: '/assets/bluecollars3.jpg',
  },
  {
    service: 'Furniture Assembly',
    avgPrice1: '6000',
    avgPrice2: '7000',
    img: '/assets/bluecollars3.jpg',
  },
  {
    service: 'Furniture Assembly',
    avgPrice1: '6000',
    avgPrice2: '7000',
    img: '/assets/bluecollars3.jpg',
  },
];

function OnDemandServices() {
  const { isSmallScreen } = useScreenSize();

  const servicesToShow = !isSmallScreen ? services : services.slice(0, 4);
  const seeMoreServices = services.slice(4);

  return (
    <div className="p-10 md:p-16 lg:p-20">
      <h1 className="mb-5 text-h1 md:mb-10">Some of our on-demand services </h1>
      <div className="grid gap-5 md:grid-cols-4 md:gap-10">
        {servicesToShow.map((service, index) => (
          <OnDemandServiceList key={index} service={service} />
        ))}

        {isSmallScreen && (
          <SeeMore>
            {seeMoreServices.map((service, index) => (
              <OnDemandServiceList key={index} service={service} />
            ))}
          </SeeMore>
        )}
      </div>
    </div>
  );
}

function OnDemandServiceList({ service }) {
  return (
    <div className="flex w-full border border-colorGrey50 shadow-sm shadow-colorGrey800 md:flex-col">
      <img src={service.img} alt={service} className="w-[200px] lg:w-[300px]" />

      <div className="flex flex-col items-center justify-center p-5">
        <h3 className="text-h3">{service.service}</h3>
        <p className="text-base">
          Avg Price Range: #{service.avgPrice1} - #{service.avgPrice2}
        </p>
      </div>
    </div>
  );
}

export default OnDemandServices;
