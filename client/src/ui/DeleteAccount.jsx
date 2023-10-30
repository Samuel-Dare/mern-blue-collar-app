import { useDashboardSidebar } from '../context/DashboardSidebarContext';

function DeleteAccount() {
  const { selectedSidebarItem } = useDashboardSidebar();

  return (
    <div>
      {selectedSidebarItem === 'Delete Account' && (
        <div>
          <h1 className="mb-4 text-3xl font-bold">Delete Account</h1>
          <p>Are you sure you want to delete your account?</p>
        </div>
      )}
    </div>
  );
}

export default DeleteAccount;
