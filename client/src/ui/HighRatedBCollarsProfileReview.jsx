function HighRatedBCollarsProfileReviewReusableComponent({
  bCollarName,
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
    <div className="border-colorGrey50 shadow-colorGrey800 divide-colorGrey400 flex w-full flex-col divide-y border shadow-sm">
      <div className="p-5">
        <ul className="flex items-center">
          <img src="/assets/sam.jpeg" alt="" width="60" />
          <h2 className="text-h2 ps-5">{bCollarName}</h2>
        </ul>
        <ul>
          <li>{positiveReviewsPercentage}% positive reviews</li>
          <li>{numberOfCompletedTasks} completed tasks</li>
        </ul>
      </div>

      <div className="p-5">
        <h2 className="text-h2">Skills</h2>
        <ul className="flex justify-between font-bold">
          <li>{service1}</li>
          <li>#{service1Price}</li>
        </ul>
        <ul className="flex justify-between font-bold">
          <li>{service2}</li>
          <li>#{service2Price}</li>
        </ul>
        <ul className="flex justify-between font-bold">
          <li>{service3}</li>
          <li>#{service3Price}</li>
        </ul>
      </div>

      <div className="p-5">
        <p className="font-bold">Here's what they have to say:</p>
        <p>{profileAbout}</p>
      </div>
    </div>
  );
}

function HighRatedBCollarsProfileReview() {
  return (
    <div className="p-10 md:p-16 lg:p-20">
      <h1 className="text-h1 mb-5 md:mb-10">Some Highly Rated BCollars</h1>

      <div className="grid gap-5 md:grid-cols-3 md:gap-10">
        <HighRatedBCollarsProfileReviewReusableComponent
          bCollarName="Sam D."
          positiveReviewsPercentage="100"
          numberOfCompletedTasks="170"
          service1="Help Moving"
          service2="Home Repair"
          service3="Furniture Assembly"
          service1Price="5000"
          service2Price="5000"
          service3Price="5000"
          profileAbout="I'm the right person for the job. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, tempora vitae expedita, iure nam ullam omnis pariatur, ipsa tenetur quae numquam deserunt fugit atque possimus dolores ab recusandae nulla aut."
        />

        <HighRatedBCollarsProfileReviewReusableComponent
          bCollarName="Sam D."
          positiveReviewsPercentage="100"
          numberOfCompletedTasks="170"
          service1="Help Moving"
          service2="Home Repair"
          service3="Furniture Assembly"
          service1Price="5000"
          service2Price="5000"
          service3Price="5000"
          profileAbout="I'm the right person for the job. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, tempora vitae expedita, iure nam ullam omnis pariatur, ipsa tenetur quae numquam deserunt fugit atque possimus dolores ab recusandae nulla aut."
        />

        <HighRatedBCollarsProfileReviewReusableComponent
          bCollarName="Sam D."
          positiveReviewsPercentage="100"
          numberOfCompletedTasks="170"
          service1="Help Moving"
          service2="Home Repair"
          service3="Furniture Assembly"
          service1Price="5000"
          service2Price="5000"
          service3Price="5000"
          profileAbout="I'm the right person for the job. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, tempora vitae expedita, iure nam ullam omnis pariatur, ipsa tenetur quae numquam deserunt fugit atque possimus dolores ab recusandae nulla aut."
        />

        <HighRatedBCollarsProfileReviewReusableComponent
          bCollarName="Sam D."
          positiveReviewsPercentage="100"
          numberOfCompletedTasks="170"
          service1="Help Moving"
          service2="Home Repair"
          service3="Furniture Assembly"
          service1Price="5000"
          service2Price="5000"
          service3Price="5000"
          profileAbout="I'm the right person for the job. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, tempora vitae expedita, iure nam ullam omnis pariatur, ipsa tenetur quae numquam deserunt fugit atque possimus dolores ab recusandae nulla aut."
        />

        <HighRatedBCollarsProfileReviewReusableComponent
          bCollarName="Sam D."
          positiveReviewsPercentage="100"
          numberOfCompletedTasks="170"
          service1="Help Moving"
          service2="Home Repair"
          service3="Furniture Assembly"
          service1Price="5000"
          service2Price="5000"
          service3Price="5000"
          profileAbout="I'm the right person for the job. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, tempora vitae expedita, iure nam ullam omnis pariatur, ipsa tenetur quae numquam deserunt fugit atque possimus dolores ab recusandae nulla aut."
        />

        <HighRatedBCollarsProfileReviewReusableComponent
          bCollarName="Sam D."
          positiveReviewsPercentage="100"
          numberOfCompletedTasks="170"
          service1="Help Moving"
          service2="Home Repair"
          service3="Furniture Assembly"
          service1Price="5000"
          service2Price="5000"
          service3Price="5000"
          profileAbout="I'm the right person for the job. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, tempora vitae expedita, iure nam ullam omnis pariatur, ipsa tenetur quae numquam deserunt fugit atque possimus dolores ab recusandae nulla aut."
        />
      </div>
    </div>
  );
}

export default HighRatedBCollarsProfileReview;
