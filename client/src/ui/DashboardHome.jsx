import { useDashboardSidebar } from '../context/DashboardSidebarContext';
import { useMeData } from '../hooks/useData';
import { urlGetMe } from '../services/apiUsers';
import {
  FiSettings,
  FiSearch,
  FiStar,
  FiMapPin,
  FiUserPlus,
} from 'react-icons/fi'; // Example: Import icons for settings, search, rating, location, and user plus

function DashboardHome() {
  const { selectedSidebarItem } = useDashboardSidebar();
  const { data, isLoading, error } = useMeData(urlGetMe);

  // Dummy data for demonstration
  const recentActivity = [
    { id: 1, description: 'Completed job: Plumbing repair at 123 Main St.' },
    {
      id: 2,
      description:
        'Scheduled appointment: Electrical inspection on 456 Elm St.',
    },
    {
      id: 3,
      description:
        'Received payment for completed job: HVAC installation at 789 Oak Ave.',
    },
  ];

  // Dummy data for Personalized Recommendations
  const personalizedRecommendations = [
    { id: 1, name: "Joe's Plumbing", category: 'Plumbing' },
    { id: 2, name: "Ethan's Electrical", category: 'Electrical' },
    { id: 3, name: "Andy's HVAC", category: 'HVAC' },
  ];

  // Dummy data for Featured Service Providers
  const featuredServiceProviders = [
    { id: 1, name: "Sara's Painting", rating: 4.5 },
    { id: 2, name: "David's Landscaping", rating: 4.8 },
    { id: 3, name: "Rachel's Cleaning", rating: 4.7 },
  ];

  // Dummy data for Service Provider Categories
  const serviceProviderCategories = [
    { id: 1, name: 'Plumbing', icon: '🚿' },
    { id: 2, name: 'Electrical', icon: '⚡' },
    { id: 3, name: 'Landscaping', icon: '🌳' },
  ];

  const notifications = [
    { id: 1, message: 'New job request: Carpentry work at 456 Pine St.' },
    { id: 2, message: 'Reminder: Appointment tomorrow at 10:00 AM.' },
    { id: 3, message: 'You have received a new message from a client.' },
    { id: 4, message: 'Your profile has been viewed by 5 users this week.' },
  ];

  if (isLoading) return <p>Loading...</p>;

  if (!data || error) return <p>Error...</p>;

  const { firstName, lastName } = data;

  return (
    <div>
      {selectedSidebarItem === 'Dashboard' && (
        <div>
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Welcome, {firstName}!</h1>
            <p className="text-gray-600 text-lg">
              Here's what's happening in your Blue Kollars dashboard.
            </p>
          </div>

          <div className="grid md:grid-cols-3 md:gap-6">
            {/* Section 1: Quick Actions */}
            <div className="bg-white col-span-3 rounded-lg p-6 shadow-md md:col-span-1">
              <h2 className="mb-4 text-lg font-semibold">Quick Actions</h2>
              <ul className="list-disc pl-5">
                <li>
                  <a
                    href="#"
                    className="text-blue-600 flex items-center hover:underline"
                  >
                    <FiSearch className="mr-2" />
                    Find Service Providers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-600 flex items-center hover:underline"
                  >
                    <FiStar className="mr-2" />
                    Rate Service Providers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-600 flex items-center hover:underline"
                  >
                    <FiMapPin className="mr-2" />
                    Track Service Providers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-600 flex items-center hover:underline"
                  >
                    <FiUserPlus className="mr-2" />
                    Become a Service Provider
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 2: Recent Activity */}
            <div className="bg-white col-span-3 rounded-lg p-6 shadow-md md:col-span-2">
              <h2 className="mb-4 text-lg font-semibold">Recent Activity</h2>
              <ul className="divide-y divide-colorGrey700">
                {recentActivity.map((activity) => (
                  <li key={activity.id} className="py-2">
                    <span className="text-gray-600">
                      {activity.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 3: Notifications */}
            <div className="bg-white col-span-3 rounded-lg p-6 shadow-md">
              <h2 className="mb-4 text-lg font-semibold">Notifications</h2>
              {notifications.length > 0 ? (
                <ul className="divide-gray-200 divide-y">
                  {notifications.map((notification) => (
                    <li key={notification.id} className="py-2">
                      <span className="text-gray-600">
                        {notification.message}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">You have no new notifications.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardHome;
