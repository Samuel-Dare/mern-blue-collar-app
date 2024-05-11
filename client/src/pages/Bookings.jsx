import Table from '../ui/Table';

const Bookings = () => {
  const userBookings = [
    {
      //   id: 1,
      serviceProvider: 'Service Provider 1',
      price: 50,
      bookingDetails: 'Details 1',
      createdAt: '2024-03-01',
      status: 'pending',
    },
    {
      //   id: 2,
      serviceProvider: 'Service Provider 2',
      price: 70,
      bookingDetails: 'Details 2',
      createdAt: '2024-03-02',
      status: 'completed',
    },
    // Add more dummy data as needed
  ];

  const providerAppointments = [
    {
      //   id: 1,
      user: 'User 1',
      price: 50,
      bookingDetails: 'Details 1',
      createdAt: '2024-03-01',
      status: 'in-progress',
    },
    {
      //   id: 2,
      user: 'User 2',
      price: 70,
      bookingDetails: 'Details 2',
      createdAt: '2024-03-02',
      status: 'pending',
    },
    // Add more dummy data as needed
  ];

  const userColumns = [
    '',
    // 'ID',
    'Service Provider',
    'Price',
    'Booking Details',
    'Created At',
    'Status',
  ];
  const providerColumns = [
    '',
    // 'ID',
    'User',
    'Price',
    'Booking Details',
    'Created At',
    'Status',
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-8 w-full">
        <h2 className="mb-4 text-2xl font-bold">User Bookings</h2>
        <Table columns={userColumns} data={userBookings} />
      </div>

      <div className="w-full">
        <h2 className="mb-4 text-2xl font-bold">Provider Appointments</h2>
        <Table columns={providerColumns} data={providerAppointments} />
      </div>
    </div>
  );
};

export default Bookings;
