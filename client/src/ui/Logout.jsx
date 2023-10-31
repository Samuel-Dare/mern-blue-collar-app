import { useDashboardSidebar } from '../context/DashboardSidebarContext';

function Logout() {
  // const { selectedSidebarItem } = useDashboardSidebar();

  return (
    <div>
      {/* {selectedSidebarItem === 'Logout' && ( */}
        <div>
          <h1 className="mb-4 text-3xl font-bold">Logout</h1>
          <p>
            You've successfully logged out of BlueCollars. We will be glad to
            have you onboard again!
          </p>
        </div>
      {/* )} */}
    </div>
  );
}

export default Logout;
