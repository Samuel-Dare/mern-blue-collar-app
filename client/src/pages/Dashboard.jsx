import DashboardNav from '../ui/DashboardNav';
import DashboardSidebar from '../ui/DashboardSidebar';
import { DashboardSidebarProvider } from '../context/DashboardSidebarContext';
import DashboardHome from '../ui/DashboardHome';
import Logout from './Logout';
import ContactUs from '../ui/ContactUs';
import DeleteAccount from '../ui/DeleteAccount';
import EditProfile from '../ui/EditProfile';
import { useScreenSize } from '../context/ScreenSize';

const Dashboard = () => {
  const { isSmallScreen } = useScreenSize();

  return (
    <DashboardSidebarProvider>
      <DashboardNav />

      <div className="my-[100px] flex">
        <DashboardSidebar />

        <div className="md:15 w-full p-10 md:w-1/2">
          {/* Content */}
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
