import { useState } from 'react';
import DashboardNavListItems from './DashboardNavListItems';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { useMeData } from '../hooks/useData';
import { getMe } from '../services/apiUsers';

export default function DashboardNav() {
  const [openDashboardNavItems, setOpenDashboardNavItems] = useState(false);
  const { data, isLoading, error } = useMeData(getMe);

  if (isLoading) return <p>isLoading...</p>;

  if (!data || error) return <p>error...</p>;

  const { firstName, lastName, photo } = data;

  const handleClick = () => {
    setOpenDashboardNavItems((open) => !open);
  };

  return (
    <nav className="hidden items-center justify-between bg-colorGrey400 px-24 py-10 text-colorGrey800 shadow-md md:flex">
      <Logo />
      {/* <DashboardNavListItems /> */}
      <div className="flex gap-16">
        <ThemeToggle />

        <div
          className="flex items-center justify-center gap-3"
          onClick={handleClick}
        >
          <span className="text-xl font-semibold">
            {firstName} {lastName}
          </span>
          <img
            src={`${import.meta.env.VITE_BASE_URL}/img/users/${photo}`}
            alt="Profile-img"
            className="rounded-full"
            width={30}
          />
        </div>
      </div>
      {openDashboardNavItems && <DashboardNavListItems />}
    </nav>
  );
}
