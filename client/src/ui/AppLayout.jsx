import React from 'react';
import MainNav from './MainNav';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <div>
      <MainNav />
      <main className="p-10">
        <Outlet />
      </main>
    </div>
  );
}
