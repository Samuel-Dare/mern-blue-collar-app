import { useDashboardSidebar } from '../context/DashboardSidebarContext';

function Logout() {
  const { selectedSidebarItem } = useDashboardSidebar();

  return (
    <div>
      {selectedSidebarItem === 'Logout' && (
        <div>
          <h1 className="mb-4 text-3xl font-bold">Logout</h1>
          <p>You are now logged out.</p>
        </div>
      )}
    </div>
  );
}

export default Logout;
