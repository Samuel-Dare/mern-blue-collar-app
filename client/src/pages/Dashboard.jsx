import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Import the menu icon from react-icons
import { getMe } from '../services/apiUsers';
import { useMeData } from '../hooks/useData';
import DashboardNav from '../ui/DashboardNav';
import DashboardSidebar from '../ui/DashboardSidebar';
import { DashboardSidebarProvider } from '../context/DashboardSidebarContext';
import DashboardHome from '../ui/DashboardHome';
import EditProfile from '../ui/EditProfile';
import Logout from '../ui/Logout';
import ContactUs from '../ui/ContactUs';
import DeleteAccount from '../ui/DeleteAccount';

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
          <Logout />
          <ContactUs />
          <DeleteAccount />
        </div>
      </div>
    </DashboardSidebarProvider>
  );
};

export default Dashboard;
