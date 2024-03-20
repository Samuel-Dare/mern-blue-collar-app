import DashboardNav from '../ui/DashboardNav';
import DashboardSidebar from '../ui/DashboardSidebar';
import { DashboardSidebarProvider } from '../context/DashboardSidebarContext';
import DashboardHome from '../ui/DashboardHome';
import Logout from './Logout';
import ContactUs from '../ui/ContactUs';
import DeleteAccount from '../ui/DeleteAccount';
import EditProfile from '../ui/EditProfile';
import { useScreenSize } from '../context/ScreenSize';
import Bookings from './Dashboard/Bookings';
import Reviews from './Dashboard/Reviews';

const Dashboard = () => {
  const { isSmallScreen } = useScreenSize();

  return (
    <DashboardHome />

    // <DashboardSidebarProvider>
    // <DashboardNav />

    //   <div className="my-[100px] flex">
    //     <DashboardSidebar />

    //     <div className="md:15 w-full p-3 md:p-10">
    //       <DashboardHome />
    //       <EditProfile />
    //       <Bookings />
    //       <Reviews />
    //       <Logout />
    //       <ContactUs />
    //       <DeleteAccount />
    //     </div>
    //   </div>
    // </DashboardSidebarProvider>
  );
};

export default Dashboard;
