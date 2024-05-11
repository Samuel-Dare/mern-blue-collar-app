import { useScreenSize } from '../../context/ScreenSize';
import { H1 } from '../../ui/Headings';
import SeeMore from '../../ui/SeeMore';

const reviews = [
  {
    clientImage: '/assets/man1.jpg',
    clientName: 'Sam D.',
    review:
      'Excellent service! The plumber arrived on time, quickly identified the issue, and fixed it efficiently. Highly ,recommended.',
    date: 'October 14, 2023',
    city: 'Lagos',
    service: 'Plumbing',
  },
  {
    clientImage: '/assets/woman1.jpg',
    clientName: 'Emilia L.',
    review:
      'The electrician was very professional and knowledgeable. He explained everything clearly and completed the job with ,precision. Will definitely hire again.',
    date: 'December 5, 2023',
    city: 'Lagos',
    service: 'Electrician',
  },
  {
    clientImage: '/assets/man2.jpg',
    clientName: 'John M.',
    review:
      "Great gardening service! The team transformed my backyard into a beautiful oasis. I'm extremely satisfied with the ,results.",
    date: 'January 20, 2024',
    city: 'Lagos',
    service: 'Cleaning',
  },
  {
    clientImage: '/assets/woman2.jpg',
    clientName: 'Sarah R.',
    review:
      "The cleaners did an amazing job. They were thorough, efficient, and left my place sparkling clean. Couldn't be happier!",
    date: 'March 8, 2023',
    city: 'Lagos',
    service: 'Cleaning',
  },
  {
    clientImage: '/assets/man6.jpg',
    clientName: 'Michael W.',
    review:
      'The painters were fantastic! They were meticulous in their work and paid attention to every detail. My walls look ,brand new. Highly impressed!',
    date: 'April 30, 2024',
    city: 'Lagos',
    service: 'Painting',
  },
  {
    clientImage: '/assets/man4.jpg',
    clientName: 'Kayode K.',
    review:
      'Outstanding carpentry work! The carpenter was skilled and professional, and the final result exceeded my expectations. Definitely recommend.',
    date: 'June 17, 2023',
    city: 'Lagos',
    service: 'Carpentry',
  },
];

function ReviewsComponent({
  clientImage,
  clientName,
  review,
  date,
  city,
  service,
}) {
  return (
    <div className="flex items-center justify-center gap-5">
      <img
        src={clientImage}
        alt={clientName}
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          height: '50px',
          width: '50px',
          borderRadius: '50%',
          aspectRatio: '1 / 1',
        }}
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
  const { isSmallScreen } = useScreenSize();

  const reviewsToShow = !isSmallScreen ? reviews : reviews.slice(0, 3);
  const seeMoreReviews = reviews.slice(3);

  return (
    <div className="bg-colorGrey200 p-5 text-xl lg:p-10">
      <H1 title="What Our Users are Saying About Blue Kollars" />
      <div className="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-16">
        {reviewsToShow.map((review, index) => (
          <ReviewsComponent
            key={index}
            clientImage={review.clientImage}
            clientName={review.clientName}
            review={review.review}
            date={review.date}
            city={review.city}
            service={review.service}
          />
        ))}
        {isSmallScreen && (
          <SeeMore>
            {seeMoreReviews.map((review, index) => (
              <ReviewsComponent
                key={index}
                clientImage={review.clientImage}
                clientName={review.clientName}
                review={review.review}
                date={review.date}
                city={review.city}
                service={review.service}
              />
            ))}
          </SeeMore>
        )}
      </div>
    </div>
  );
}

export default Reviews;
