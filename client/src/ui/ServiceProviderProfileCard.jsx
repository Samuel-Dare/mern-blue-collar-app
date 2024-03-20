import { useEffect, useState } from 'react';

import Button from './Button';
import { useServiceProvidersData } from '../hooks/useData';
import { urlGetServiceProviders } from '../services/apiServiceProviders';
import { useTaskInfoContext } from '../context/TaskInfoContext';
import { BASE_URL } from '../config/config';

// const props = {
//   name: 'Sam',
//   photo: '/assets/sam.jpeg',
//   occupation: 'Plumber',
//   about:
//     'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis animi dicta, facilis modi assumenda at velit sequi architecto suscipit optio! Veritatis recusandae ullam repellat nemo placeat eum! Atque, perferendis voluptatem.',
//   location: 'Osapa, Lagos-Island',
//   price: 700,
//   rating: 5,
//   reviews: [
//     {
//       author: 'Sammie',
//       photo: '/assets/sam.jpeg',
//       comment:
//         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis animi dicta, facilis modi assumenda at velit sequi architecto suscipit optio! Veritatis recusandae ullam repellat nemo placeat eum! Atque, perferendis voluptatem.',
//       date: 'Nov. 6',
//     },
//   ],
// };

const ServiceProviderProfileCard = () => {
  const {
    taskInfo: { selectedService, sortBy },
  } = useTaskInfoContext();
  const [apiUrl, setApiUrl] = useState(
    urlGetServiceProviders(selectedService, sortBy),
  );
  const { data, isLoading, error, refetch } = useServiceProvidersData(apiUrl);

  console.log(apiUrl);

  useEffect(() => {
    setApiUrl(urlGetServiceProviders(selectedService, sortBy));
  }, [selectedService, sortBy]);

  useEffect(() => {
    refetch();
  }, [apiUrl, refetch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data || data.length === 0) {
    return <p>Data is empty.</p>;
  }

  if (data && data.length > 0) {
    return (
      <main className="space-y-5 md:w-2/3 ">
        {data.map((d, i) => (
          <div
            key={i}
            className="relative h-fit justify-between gap-10 rounded-lg bg-colorGrey100 p-5 shadow-lg md:flex md:p-10"
          >
            <div className="space-y-2 text-center md:space-y-3">
              <img
                src={`${BASE_URL}/img/users/${d.user.photo}       
                `}
                alt={d.user.name}
                className="w-[80px] rounded-full md:w-[250px]"
              />

              <div className="hidden md:block">
                <Button type="pointer">View Profile & Reviews</Button> <br />
                <Button to="/signup-login" type="primary">
                  Select and Continue
                </Button>
                <p className="w-[300px] text-lg">
                  You can chat with your Tasker, adjust task details, or change
                  task time after booking.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-100 absolute left-[100px] right-0 top-[20px] flex justify-between pe-5 md:static md:pe-0">
                <div>
                  {/* <h2 className="text-xl font-semibold">{user.name}</h2> */}
                  <p className="text-gray-600">{d.service}</p>
                  <p className="text-gray-600">{d.location}</p>
                </div>
                {d.price && <h2>#{d.price}/hr</h2>}
              </div>

              {/* {d.about && */}
              <div className="space-y-2 rounded-md bg-colorGrey200 p-2 md:p-5">
                <p className="hidden font-bold md:block">Let me help you!</p>
                <p>
                  {/* {d.about} */}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  modi iusto praesentium iure, explicabo labore ab vel quo
                  possimus, nisi quis temporibus exercitationem, sit magnam
                  consectetur quidem animi suscipit accusantium.
                </p>
                <Button type="pointer">Read More</Button>
              </div>
              {/* } */}

              <div className="hidden md:block">
                {!d.rating && <p className="text-base">No ratings yet</p>}
                {d.rating && (
                  <div className="mt-2 flex items-center">
                    <span className="text-yellow-500">Rating: {d.rating}</span>
                    <span className="text-gray-500 ml-2">
                      ({d.reviews.length} Reviews)
                    </span>
                  </div>
                )}
                {!d.rating && <p className="text-base">No reviews yet</p>}
                {d.reviews && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">Recent Reviews</h3>
                    {d.reviews?.map((review, index) => (
                      <div key={index} className="mt-2 flex gap-5">
                        <div>
                          <img
                            src={review.photo}
                            alt={review.author}
                            width="200px"
                            className="block rounded-full"
                          />
                        </div>
                        <div>
                          <span className="flex gap-5">
                            <p className="text-gray-700">{review.author}</p>
                            <p>{review.date}</p>
                          </span>
                          <p className="text-gray-600">{review.comment}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="md:hidden">
              <Button to="/signup-login" type="primary">
                Select and Continue
              </Button>
            </div>
          </div>
        ))}
      </main>
    );
  }
};

export default ServiceProviderProfileCard;
