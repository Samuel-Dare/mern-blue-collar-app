import { useState } from 'react';
import DashboardNavListItems from './DashboardNavListItems';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { useMeData } from '../hooks/useData';
import { urlGetMe } from '../services/apiUsers';
import { useScreenSize } from '../context/ScreenSize';

export default function DashboardNav() {
  const [openDashboardNavItems, setOpenDashboardNavItems] = useState(false);
  const { data, isLoading, error } = useMeData(urlGetMe);
  const { isSmallScreen } = useScreenSize();

  if (isLoading) return <p>isLoading...</p>;

  if (!data || error) return <p>error...</p>;

  const { firstName, lastName, photo } = data;

  const handleClick = () => {
    setOpenDashboardNavItems((open) => !open);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 flex items-center justify-between bg-colorGrey400 px-24 text-colorGrey800 shadow-md">
      <Logo />

      {!isSmallScreen && (
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
      )}
      {openDashboardNavItems && <DashboardNavListItems />}
    </nav>
  );
}
