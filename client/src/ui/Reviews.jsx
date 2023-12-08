function ReviewsComponent({ clientName, review, date, city, service }) {
  return (
    <div className="flex items-start justify-center gap-5">
      <img
        className="rounded-full"
        src="/assets/sam.jpeg"
        width="50"
        height="50"
        alt="BCollar"
      />

      <ul>
        <h3>{clientName}</h3>
        <p>{review}</p>
        <li>
          {date}, {city}
        </li>
        <li>{service}</li>
      </ul>
    </div>
  );
}

function Reviews() {
  return (
    <div className="bg-colorGrey300 p-5 lg:p-10">
      <h1 className="mb-2 text-h1 md:mb-3">Reviews</h1>
      <h2 className="mb-5 text-h2 md:mb-10">
        See what some of our users are saying about BCollars
      </h2>

      <div className="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-16">
        <ReviewsComponent
          clientName="Sam D."
          review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae at
          ullam assumenda eligendi enim quos, laborum necessitatibus debitis repellat, tempora tenetur natus minima veniam architecto minus quia explicabo aliquam possimus"
          date="October 14, 2023"
          city="Lagos"
          service="Plumbing"
        />

        <ReviewsComponent
          clientName="Sam D."
          review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae at
          ullam assumenda eligendi enim quos, laborum necessitatibus debitis repellat, tempora tenetur natus minima veniam architecto minus quia explicabo aliquam possimus"
          date="October 14, 2023"
          city="Lagos"
          service="Plumbing"
        />

        <ReviewsComponent
          clientName="Sam D."
          review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae at
          ullam assumenda eligendi enim quos, laborum necessitatibus debitis repellat, tempora tenetur natus minima veniam architecto minus quia explicabo aliquam possimus"
          date="October 14, 2023"
          city="Lagos"
          service="Plumbing"
        />

        <ReviewsComponent
          clientName="Sam D."
          review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae at
          ullam assumenda eligendi enim quos, laborum necessitatibus debitis repellat, tempora tenetur natus minima veniam architecto minus quia explicabo aliquam possimus"
          date="October 14, 2023"
          city="Lagos"
          service="Plumbing"
        />

        <ReviewsComponent
          clientName="Sam D."
          review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae at
          ullam assumenda eligendi enim quos, laborum necessitatibus debitis repellat, tempora tenetur natus minima veniam architecto minus quia explicabo aliquam possimus"
          date="October 14, 2023"
          city="Lagos"
          service="Plumbing"
        />

        <ReviewsComponent
          clientName="Sam D."
          review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae at
          ullam assumenda eligendi enim quos, laborum necessitatibus debitis repellat, tempora tenetur natus minima veniam architecto minus quia explicabo aliquam possimus"
          date="October 14, 2023"
          city="Lagos"
          service="Plumbing"
        />
      </div>
    </div>
  );
}

export default Reviews;
