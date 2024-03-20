import Header2 from '../ui/Header2';
import { useScreenSize } from '../context/ScreenSize';
import ArrowIcon from '../utils/ArrowIcon';
import Animation from '../utils/Animation';

function HowItWorks() {
  const steps = [
    {
      title: 'Initial Consultation',
      description:
        'We conduct a thorough consultation to understand your business, goals, values, and target audience. Then, we gather insights into the kind of industry of your business, competitors, and unique selling points.',
      icon: '👩‍🏫',
    },
    {
      title: 'Brand Audit and Strategy Design',
      description:
        'We embark on an evaluation of the existing brand elements (logo, color palette, messaging, etc.), if applicable, and develop a clear and compelling brand strategy.',
      icon: '🎨',
    },
    {
      title: 'Creation of Brand Guidelines and Identity',
      description:
        'We design or refine the visual elements of the brand, including the logo, color scheme, typography, and imagery, and create comprehensive brand guidelines outlining the proper usage of the logo, color codes, typography, and brand messaging.',
      icon: '🆔',
    },
    {
      title: 'Craft Brand Storytelling',
      description:
        'Your brand needs a story, so we develop a narrative that emotionally connects the brand with its target audience and resonates with the values and aspirations of the intended market.',
      icon: '👻',
    },
    {
      title: 'Implement Marketing Strategies',
      description:
        'To better create awareness and put your business in the faces of your audience, we devise marketing strategies that align with the brand strategy and target the right audience.',
      icon: '💹',
    },
    {
      title: 'Support, Monitor, and Evaluate your Brand Progress',
      description:
        'Implement tracking mechanisms to monitor the performance of branding and marketing efforts, and measure the processes and support to ensure the brand remains relevant and adapts to market changes.',
      icon: '📏',
    },
  ];

  const { isSmallScreen } = useScreenSize();

  const bannerImage = isSmallScreen
    ? 'assets/how-it-works-mobile.png'
    : 'assets/how-it-works.png';

  return (
    <div>
      <Header2 bannerImage={bannerImage} />

      <div className="container mx-auto mt-8 p-4">
        <Animation type="1">
          <h1 className="text-colorBrand2 mb-8 text-center text-3xl font-bold">
            How It Works
          </h1>
        </Animation>

        {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"> */}
        <div>
          {steps.map((step, index) => (
            <Animation key={index} type="1">
              <div className="border-colorBrand2 space-y-3 border p-10">
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
