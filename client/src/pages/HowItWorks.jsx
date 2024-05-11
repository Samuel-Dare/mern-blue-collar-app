import Header2 from '../ui/Header2';
import { useScreenSize } from '../context/ScreenSize';
import ArrowIcon from '../utils/ArrowIcon';
import Animation from '../utils/Animation';
import { H1, H2 } from '../ui/Headings';

function HowItWorks() {
  const steps = [
    {
      title: '1. Describe Your Task',
      description:
        'Provide details about your task by filling out our task form. Describe the specific job requirements, including the type of service needed, any special instructions, and your preferred timeline. The more information you provide, the better we can match you with the right Blue Kollar for the job.',
      icon: '📋',
    },
    {
      title: '2. Filter Available Blue Kollars',
      description:
        'Browse through our pool of available Blue Kollars and filter them based on your preferences. You can narrow down your search by selecting criteria such as time availability, date, average ratings, and the quantity of work completed. This helps you find the perfect fit for your needs and schedule.',
      icon: '🔍',
    },
    {
      title: '3. Sign Up/Log In',
      description:
        "If you haven't already done so, sign up for an account or log in to your existing account. This step allows you to access additional features and benefits, such as managing your bookings, viewing past transactions, and receiving updates on special offers and promotions.",
      icon: '🔐',
    },
    {
      title: '4. Make Payment',
      description:
        "Once you've selected your preferred Blue Kollar and confirmed your booking, proceed to make payment. You can choose to pay securely through our online payment platform or opt for bank transfer. Rest assured that your payment information is protected, and our payment process is safe and reliable.",
      icon: '💳',
    },
  ];

  const { isSmallScreen } = useScreenSize();

  const bannerImage = isSmallScreen
    ? 'assets/how-it-works-400x250.png'
    : 'assets/how-it-works-1200x600.png';

  return (
    <div>
      <Header2 bannerImage={bannerImage} />

      <div className="container mx-auto mt-8 space-y-12 p-4">
        <H1 title="How It Works" center={true} />
        <H2 title="Connect with a Blue Kollar in 4 Simple Steps:" />

        {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"> */}
        <div>
          {steps.map((step, index) => (
            <Animation key={index} type="1">
              <div className="space-y-3 border border-colorBrand2 p-10">
                <div className="space-x-5">
                  <span className="text-2xl">{step.icon}</span>
                  <h2 className="mb-2 inline-block text-xl font-bold">
                    {step.title}
                  </h2>
                </div>
                <p className="text-gray-700">{step.description}</p>
              </div>
              <div
                className={`m-auto mb-20 w-0 ${
                  index === steps.length - 1 ? 'hidden' : 'block'
                }`}
              >
                <ArrowIcon />
              </div>
            </Animation>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
