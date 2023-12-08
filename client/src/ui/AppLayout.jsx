import React from 'react';
import MainNav from './MainNav';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

export default function AppLayout() {
  return (
    <div>
      <MainNav />
      <div className="mt-[100px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
