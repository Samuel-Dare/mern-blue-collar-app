import Table from '../ui/Table';

const Reviews = () => {
  const userReviews = [
    {
      review: 'Great service, highly recommended!',
      rating: 5,
      serviceProvider: 'Service Provider 1',
      createdAt: '2023-10-15T08:00:00.000Z',
    },
    {
      review: 'Average service, could be better.',
      rating: 3,
      serviceProvider: 'Service Provider 2',
      createdAt: '2023-11-20T08:00:00.000Z',
    },
  ];

  const providerReviews = [
    {
      review: 'Good customer, easy to work with.',
      rating: 4,
      user: 'User 1',
      createdAt: '2023-09-05T08:00:00.000Z',
    },
    {
      review: 'Prompt payment, no issues.',
      rating: 5,
      user: 'User 2',
      createdAt: '2023-09-15T08:00:00.000Z',
    },
  ];

  const userColumns = ['', 'Review', 'Rating', 'Service Provider', 'Date'];
  const providerColumns = ['', 'Review', 'Rating', 'User', 'Date'];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-8 w-full">
        <h2 className="mb-4 text-2xl font-bold">Reviews by Users</h2>
        <Table columns={userColumns} data={userReviews} />
      </div>

      <div className="w-full">
        <h2 className="mb-4 text-2xl font-bold">
          Reviews by Service Providers
        </h2>
        <Table columns={providerColumns} data={providerReviews} />
      </div>
    </div>
  );
};

export default Reviews;
