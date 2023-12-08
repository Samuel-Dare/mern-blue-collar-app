import Button from './Button';

function ReadyToGetStarted() {
  return (
    <div className="p-10 md:p-16 lg:p-20">
      <h1 className="mb-10 text-center text-h1">Ready to get started?</h1>
      <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
        <div className="w-full flex-grow items-center space-y-16  text-center md:w-1/2">
          <img
            src="/assets/signup.png"
            alt="Sign up"
            width="150"
            className="mx-auto"
          />
          <p>
            {' '}
            We will be glad to have you on board. Let's make life easier for
            you.
          </p>
          <Button type="primary" to="/signup">
            Sign up
          </Button>
        </div>

        <div className="w-full flex-grow items-center space-y-16 text-center md:w-1/2">
          <img
            src="/assets/login.jpg"
            alt="Become a BCollar"
            width="150"
            className="mx-auto rounded-full"
          />
          <p>
            {' '}
            Let's help you reach a wider client-base with our highly rated and
            trusted platform. Together, we can win!
          </p>
          <Button type="primary" to="/become-a-professional">
            Become a BCollar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ReadyToGetStarted;
