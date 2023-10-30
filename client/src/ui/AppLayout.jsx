import React from 'react';
import MainNav from './MainNav';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default function AppLayout() {
  return (
    <div>
      <MainNav />
      <Sidebar />
      <Outlet />
      <Footer />
    </div>
  );
}
