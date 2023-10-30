import { useDashboardSidebar } from '../context/DashboardSidebarContext';
import { useMeData } from '../hooks/useData';
import { getMe } from '../services/apiUsers';

function DashboardHome() {
  const { selectedSidebarItem } = useDashboardSidebar();
  const { data, isLoading, error } = useMeData(getMe);

  if (isLoading) return <p>isLoading...</p>;

  const { firstName, lastName } = data;

  return (
    <div>
      {selectedSidebarItem === 'Dashboard' && (
        <div>
          <h1 className="mb-4 text-3xl font-bold">Dashboard</h1>
          <p>This is the Dashboard content.</p>
          <header className="bg-white p-4 ">
            <h1 className="text-xl font-semibold">
              Welcome, {firstName} {lastName}
            </h1>
          </header>
        </div>
      )}
    </div>
  );
}

export default DashboardHome;
