function OnDemandServicesReusableComponent({ service, avgPrice1, avgPrice2 }) {
  return (
    <div className="flex w-full border border-colorGrey50 shadow-sm shadow-colorGrey800 md:flex-col">
      <img
        src="/assets/bluecollars3.jpg"
        alt="Furniture"
        className="w-[200px] lg:w-[300px]"
      />

      <div className="flex flex-col items-center justify-center p-5">
        <h3 className="text-h3">{service}</h3>
        <p className="text-base">
          Avg. avgPrice: #{avgPrice1} - #{avgPrice2}
        </p>
      </div>
    </div>
  );
}

function OnDemandServices() {
  return (
    <div className="p-10 md:p-16 lg:p-20">
      <h1 className="mb-5 text-h1 md:mb-10">Some of our on-demand services </h1>
      <div className="grid gap-5 md:grid-cols-4 md:gap-10">
        <OnDemandServicesReusableComponent
          service="Furniture Assembly"
          avgPrice1="6000"
          avgPrice2="7000"
        />

        <OnDemandServicesReusableComponent
          service="Furniture Assembly"
          avgPrice1="6000"
          avgPrice2="7000"
        />

        <OnDemandServicesReusableComponent
          service="Furniture Assembly"
          avgPrice1="6000"
          avgPrice2="7000"
        />

        <OnDemandServicesReusableComponent
          service="Furniture Assembly"
          avgPrice1="6000"
          avgPrice2="7000"
        />

        <OnDemandServicesReusableComponent
          service="Furniture Assembly"
          avgPrice1="6000"
          avgPrice2="7000"
        />

        <OnDemandServicesReusableComponent
          service="Furniture Assembly"
          avgPrice1="6000"
          avgPrice2="7000"
        />

        <OnDemandServicesReusableComponent
          service="Furniture Assembly"
          avgPrice1="6000"
          avgPrice2="7000"
        />

        <OnDemandServicesReusableComponent
          service="Furniture Assembly"
          avgPrice1="6000"
          avgPrice2="7000"
        />
      </div>
    </div>
  );
}

export default OnDemandServices;
