import DashboardNav from '../ui/DashboardNav';
import DashboardSidebar from '../ui/DashboardSidebar';
import { DashboardSidebarProvider } from '../context/DashboardSidebarContext';
import DashboardHome from '../ui/DashboardHome';
import Logout from '../ui/Logout';
import ContactUs from '../ui/ContactUs';
import DeleteAccount from '../ui/DeleteAccount';
import EditProfile from '../ui/EditProfile';

const Dashboard = () => {
  return (
    <DashboardSidebarProvider>
      <DashboardNav />

      <div className="flex h-screen">
        <DashboardSidebar />

        {/* Content */}
        <div className="w-1/2 p-5">
          <DashboardHome />
          <EditProfile />
          {/* <Logout /> */}
          <ContactUs />
          <DeleteAccount />
        </div>
      </div>
    </DashboardSidebarProvider>
  );
};

export default Dashboard;
