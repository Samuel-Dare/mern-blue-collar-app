import { useDashboardSidebar } from '../context/DashboardSidebarContext';
import ChangePassword from './ChangePassword';
import ChangeProfileDetails from './ChangeProfileDetails';

function EditProfile() {
  const { selectedSidebarItem } = useDashboardSidebar();

  return (
    <div>
      {selectedSidebarItem === 'Settings' && (
        <div className="space-y-10">
          <ChangeProfileDetails />
          <ChangePassword />
        </div>
      )}
    </div>
  );
}

export default EditProfile;
