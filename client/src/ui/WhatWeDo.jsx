const WhatWeDo = () => {
  return (
    <div className="bg-gray-100 p-10 md:p-16 lg:p-20">
      <div className="container mx-auto">
        <h2 className="text-gray-800 mb-6 text-center text-3xl font-bold md:text-4xl">
          Why You Should Choose Us?
        </h2>
        <p className="text-gray-600 mb-10 text-center text-lg">
          We connect you with local professionals across a wide range of
          blue-collar services, making your life easier.
        </p>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col">
            <img
              src="/assets/reliable-professionals.jpg"
              width="300"
              alt="Service 1"
              className="mx-auto mb-4 h-auto rounded-md"
            />
            <h3 className="mb-5 text-2xl font-semibold">
              &#10003; Reliable Professionals
            </h3>
            <p className="text-gray-600">
              We partner with trusted professionals in your local area to
              provide a wide range of services.
            </p>
          </div>

          <div className="flex flex-col">
            <img
              src="/assets/hassle-free-booking.webp"
              alt="Service 2"
              width="300"
              className="mx-auto mb-4 h-auto rounded-md"
            />
            <h3 className="mb-5 text-2xl font-semibold">
              &#10003; Hassle-Free Booking
            </h3>
            <p className="text-gray-600">
              Our platform offers easy booking and scheduling, so you can get
              the services you need without stress.
            </p>
          </div>

          <div className="flex flex-col">
            <img
              src="/assets/reliable-professionals.jpg"
              alt="Service 2"
              width="300"
              className="mx-auto mb-4 h-auto rounded-md"
            />
            <h3 className="mb-5 text-2xl font-semibold">
              &#10003; Hassle-Free Booking
            </h3>
            <p className="text-gray-600">
              Our platform offers easy booking and scheduling, so you can get
              the services you need without stress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
