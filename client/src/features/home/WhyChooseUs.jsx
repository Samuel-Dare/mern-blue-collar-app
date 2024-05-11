import { H1, H2 } from '../../ui/Headings';

const WhyChooseUs = () => {
  return (
    <div className="p-10 md:p-16 lg:p-20">
      <div className="mx-auto">
        <H1 title="Why You Should Choose Us?" center={true} />
        <p className="mb-12 ml-auto mr-auto text-center text-lg text-colorGrey600 md:w-2/3 md:text-2xl">
          We connect you with local professionals across a wide range of
          blue-collar services...
        </p>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col">
            <img
              src="/assets/chooseUs-easy-to-use-300x200.png"
              width="300"
              alt="Easy-to-Use Platform"
              className="mx-auto mb-12 h-auto rounded-md"
            />
            <H2 title="&#10003; Easy-to-Use Platform" center={true} />
            <p className="mt-6 text-colorGrey600">
              Our platform offers easy booking and scheduling, so you can get
              the services you need without stress.
            </p>
          </div>

          <div className="flex flex-col">
            <img
              src="/assets/chooseUs-hassle-free-300x200.png"
              alt="Hassle-Free Booking"
              width="300"
              className="mx-auto mb-12 h-auto rounded-md"
            />
            <H2 title="&#10003; Hassle-Free Booking" center={true} />
            <p className="mt-6 text-colorGrey600">
              Our platform streamlines the entire process, ensuring hassle-free
              straightforward booking in 4 simple steps.
            </p>
          </div>

          <div className="flex flex-col">
            <img
              src="/assets/chooseUs-reliable-300x200.png"
              alt="Reliable Professionals"
              width="300"
              className="mx-auto mb-12 h-auto rounded-md"
            />
            <H2 title="&#10003; Reliable Professionals" center={true} />
            <p className="mt-6 text-colorGrey600">
              We partner with certified and relaible professionals in your local
              area to provide a wide range of services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
