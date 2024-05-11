import SeeMore from '../../ui/SeeMore';
import { useScreenSize } from '../../context/ScreenSize';
import { H1 } from '../../ui/Headings';

const services = [
  {
    service: 'Cleaning',
    avgPrice1: '5,000',
    avgPrice2: '10,000',
    img: '/assets/onDemand-cleaning-300x200.png',
  },
  {
    service: 'Plumbing',
    avgPrice1: '5,000',
    avgPrice2: '10,000',
    img: '/assets/onDemand-plumbing-300x200.png',
  },
  {
    service: 'Delivery',
    avgPrice1: '5,000',
    avgPrice2: '10,000',
    img: '/assets/onDemand-delivery-300x200.png',
  },
  {
    service: 'Driving',
    avgPrice1: '5,000',
    avgPrice2: '10,000',
    img: '/assets/onDemand-driving-300x200.png',
  },
  {
    service: 'Painting',
    avgPrice1: '5,000',
    avgPrice2: '10,000',
    img: '/assets/onDemand-painting-300x200.png',
  },
  {
    service: 'Moving',
    avgPrice1: '5,000',
    avgPrice2: '10,000',
    img: '/assets/onDemand-moving-300x200.png',
  },
  {
    service: 'AC Repair',
    avgPrice1: '5,000',
    avgPrice2: '10,000',
    img: '/assets/onDemand-AC-repair-300x200.png',
  },
  {
    service: 'Automotive Repair',
    avgPrice1: '5,000',
    avgPrice2: '10,000',
    img: '/assets/onDemand-automotive-repair-300x200.png',
  },
];

function OnDemandServices() {
  const { isSmallScreen } = useScreenSize();

  const servicesToShow = !isSmallScreen ? services : services.slice(0, 4);
  const seeMoreServices = services.slice(4);

  return (
    <div className="p-10 md:p-16 lg:p-20">
      <H1 title="Some of Our On-demand Services" />
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
      <img src={service.img} alt={service} className="w-[200px] lg:w-full" />

      <div className="flex flex-col items-center justify-center p-5">
        <h3 className="text-h3">{service.service}</h3>
        <p className="text-base">
          Avg Price: #{service.avgPrice1} - #{service.avgPrice2}
        </p>
      </div>
    </div>
  );
}

export default OnDemandServices;
