import { useScreenSize } from '../../context/ScreenSize';
import Button from '../../ui/Button';
import { H1 } from '../../ui/Headings';

function ReadyToGetStarted() {
  const { isSmallScreen } = useScreenSize();

  return (
    <div className="p-10 md:p-16 lg:p-20">
      <H1 title="Ready to Get Started?" center={true} />
      <div className="flex flex-col items-center justify-center gap-5 space-y-16 md:flex-row md:space-y-0">
        <div className="w-full flex-grow items-center space-y-12 text-center md:w-1/2">
          <img
            src="/assets/signup-300x200.png"
            alt="Sign up"
            width={isSmallScreen ? '150' : '200'}
            className="mx-auto"
          />
          <p className="ml-auto mr-auto md:w-2/3">
            We will be glad to have you on board. Let's make life easier for
            you.
          </p>
          <Button type="primary" to="/signup">
            Sign up for Free
          </Button>
        </div>

        <div className="w-full flex-grow items-center space-y-12 text-center md:w-1/2">
          <img
            src="/assets/become-bkollar-300x200.png"
            alt="Become a Blue Kollar"
            width={isSmallScreen ? '150' : '200'}
            className="mx-auto rounded-full"
          />
          <p className="ml-auto mr-auto md:w-2/3">
            {' '}
            Let's help you reach a wider client-base with our highly rated and
            trusted platform. Let's win together!
          </p>
          <Button type="primary" to="/become-a-professional">
            Become a Blue Kollar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ReadyToGetStarted;
