import React from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardSidebarProvider } from '../context/DashboardSidebarContext';
import DashboardNav from './DashboardNav';
import DashboardSidebar from './DashboardSidebar';
import DashboardFooter from './DashboardFooter';

export default function AppLayout3() {
  return (
    <DashboardSidebarProvider>
      <DashboardNav />
      <div className="mt-[100px]">
        <DashboardSidebar />
        <div className="p-3 md:p-10">
          <Outlet />
        </div>
      </div>
      <DashboardFooter />
    </DashboardSidebarProvider>
  );
}
