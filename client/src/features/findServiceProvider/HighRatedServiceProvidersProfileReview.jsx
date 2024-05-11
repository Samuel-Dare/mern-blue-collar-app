import { useScreenSize } from '../../context/ScreenSize';
import { H1, H2 } from '../../ui/Headings';
import SeeMore from '../../ui/SeeMore';

const serviceProviders = [
  {
    bKollarImage: '/assets/man7.jpg',
    bKollarName: 'James L.',
    positiveReviewsPercentage: '99%',
    numberOfCompletedTasks: '5',
    service1: 'Help Moving',
    service2: 'Painting',
    service3: 'Plumbing',
    service1Price: '5000',
    service2Price: '5000',
    service3Price: '5000',
    profileAbout:
      "With years of experience in providing top-notch service, I'm dedicated to making your moving experience stress-free and ensuring your home is in perfect condition. Let me help you with painting and any plumbing needs you may have.",
  },
  {
    bKollarImage: '/assets/woman4.jpg',
    bKollarName: 'Loveth W.',
    positiveReviewsPercentage: '98%',
    numberOfCompletedTasks: '8',
    service1: 'Cleaning',
    service2: 'Plumbing',
    service3: 'Painting',
    service1Price: '6000',
    service2Price: '4000',
    service3Price: '5500',
    profileAbout:
      'Passionate about creating a clean and comfortable environment, I offer professional cleaning services to keep ,your home spotless. Additionally, I can assist you with plumbing and painting tasks to maintain the integrity of your space.',
  },
  {
    bKollarImage: '/assets/man8.jpg',
    bKollarName: 'David S.',
    positiveReviewsPercentage: '97%',
    numberOfCompletedTasks: '12',
    service1: 'Painting',
    service2: 'AC Repair',
    service3: 'Automotive Repair',
    service1Price: '5500',
    service2Price: '6000',
    service3Price: '6500',
    profileAbout:
      'As a skilled tradesman, I specialize in painting and also provide expert services in AC repair and ,automotive repair. With a focus on quality craftsmanship and customer satisfaction, I ensure your projects are completed efficiently and effectively.',
  },
  {
    bKollarImage: '/assets/man9.jpg',
    bKollarName: 'Timothy M.',
    positiveReviewsPercentage: '100%',
    numberOfCompletedTasks: '3',
    service1: 'Running Errands',
    service2: 'Delivery',
    service3: 'Driving',
    service1Price: '3000',
    service2Price: '3500',
    service3Price: '4000',
    profileAbout:
      'With a focus on efficiency and reliability, I offer running errands, delivery, and driving services to help you manage your day-to-day tasks. Whether you need groceries picked up or a ride to the airport, count on me to get the job done.',
  },
  {
    bKollarImage: '/assets/man10.jpg',
    bKollarName: 'Daniel R.',
    positiveReviewsPercentage: '98%',
    numberOfCompletedTasks: '10',
    service1: 'Help Moving',
    service2: 'Automotive Repair',
    service3: 'Painting',
    service1Price: '5000',
    service2Price: '6500',
    service3Price: '5500',
    profileAbout:
      'With a wealth of experience in moving, automotive repair, and painting, I am committed to delivering exceptional service and ensuring your projects are completed to your satisfaction.',
  },
  {
    bKollarImage: '/assets/man11.jpg',
    bKollarName: 'Kehinde H.',
    positiveReviewsPercentage: '95%',
    numberOfCompletedTasks: '6',
    service1: 'Cleaning',
    service2: 'AC Repair',
    service3: 'Delivery',
    service1Price: '6000',
    service2Price: '6000',
    service3Price: '3500',
    profileAbout:
      'Dedicated to providing a clean and comfortable living space, I offer professional cleaning services and specialize in AC repair. Additionally, I provide reliable delivery services to meet your needs.',
  },
];

function HighRatedServiceProvidersProfileComponent({
  bKollarImage,
  bKollarName,
  positiveReviewsPercentage,
  numberOfCompletedTasks,
  service1,
  service2,
  service3,
  service1Price,
  service2Price,
  service3Price,
  profileAbout,
}) {
  return (
    <div className="flex w-full flex-col divide-y divide-colorGrey400 border border-colorGrey50 text-xl shadow-sm shadow-colorGrey800">
      <div className="space-y-5 p-5">
        <ul className="flex items-center">
          <img
            src={bKollarImage}
            alt={bKollarName}
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              height: '50px',
              width: '50px',
              borderRadius: '50%',
              aspectRatio: '1 / 1',
              marginRight: '10px',
            }}
          />
          <H2 title={bKollarName} />
        </ul>
        <ul>
          <li>{positiveReviewsPercentage}% positive reviews</li>
          <li>{numberOfCompletedTasks} completed tasks</li>
        </ul>
      </div>

      <div className="space-y-1 p-5">
        <h2 className="">Skills</h2>
        <ul className="flex justify-between font-semibold">
          <li>{service1}</li>
          <li>#{service1Price}</li>
        </ul>
        <ul className="flex justify-between font-semibold">
          <li>{service2}</li>
          <li>#{service2Price}</li>
        </ul>
        <ul className="flex justify-between font-semibold">
          <li>{service3}</li>
          <li>#{service3Price}</li>
        </ul>
      </div>

      <div className="space-y-2 p-5">
        <p className="font-semibold">Here's what they have to say:</p>
        <p>{profileAbout}</p>
      </div>
    </div>
  );
}

function HighRatedServiceProvidersProfileReview() {
  const { isSmallScreen } = useScreenSize();

  const serviceProvidersToShow = !isSmallScreen
    ? serviceProviders
    : serviceProviders.slice(0, 3);
  const seeMoreServiceProviders = serviceProviders.slice(3);

  return (
    <div className="p-10 md:p-16 lg:p-20">
      <H1 title="Some Highly Rated Blue Kollars" />
      <div className="grid gap-5 md:grid-cols-3 md:gap-10">
        {serviceProvidersToShow.map((serviceProvider, index) => (
          <HighRatedServiceProvidersProfileComponent
            key={index}
            bKollarImage={serviceProvider.bKollarImage}
            bKollarName={serviceProvider.bKollarName}
            positiveReviewsPercentage={
              serviceProvider.positiveReviewsPercentage
            }
            numberOfCompletedTasks={serviceProvider.numberOfCompletedTasks}
            service1={serviceProvider.service1}
            service2={serviceProvider.service2}
            service3={serviceProvider.service3}
            service1Price={serviceProvider.service1Price}
            service2Price={serviceProvider.service2Price}
            service3Price={serviceProvider.service3Price}
            profileAbout={serviceProvider.profileAbout}
          />
        ))}

        {isSmallScreen && (
          <SeeMore>
            {seeMoreServiceProviders.map((serviceProvider, index) => (
              <HighRatedServiceProvidersProfileComponent
                key={index}
                bKollarImage={serviceProvider.bKollarImage}
                bKollarName={serviceProvider.bKollarName}
                positiveReviewsPercentage={
                  serviceProvider.positiveReviewsPercentage
                }
                numberOfCompletedTasks={serviceProvider.numberOfCompletedTasks}
                service1={serviceProvider.service1}
                service2={serviceProvider.service2}
                service3={serviceProvider.service3}
                service1Price={serviceProvider.service1Price}
                service2Price={serviceProvider.service2Price}
                service3Price={serviceProvider.service3Price}
                profileAbout={serviceProvider.profileAbout}
              />
            ))}
          </SeeMore>
        )}
      </div>
    </div>
  );
}

export default HighRatedServiceProvidersProfileReview;
