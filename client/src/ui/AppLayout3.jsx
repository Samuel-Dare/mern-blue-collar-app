import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNav from '../features/dashboard/DashboardNav';
import DashboardSidebar from '../features/dashboard/DashboardSidebar';
import DashboardFooter from '../features/dashboard/DashboardFooter';

export default function AppLayout3() {
  return (
    <>
      <DashboardNav />
      <div className="mt-[100px]">
        <DashboardSidebar />
        <div className="p-3 md:p-10">
          <Outlet />
        </div>
      </div>
      <DashboardFooter />
    </>
  );
}
