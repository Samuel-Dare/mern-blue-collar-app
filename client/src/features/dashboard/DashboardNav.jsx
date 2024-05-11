import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { BASE_URL } from '../../config/config';
import Logo from '../../ui/Logo';
import ThemeToggle from '../../ui/ThemeToggle';
import { useScreenSize } from '../../context/ScreenSize';
import { useUser } from '../authentication/useUser';
import { logout } from '../../services/apiAuth';

export default function DashboardNav() {
  const [isProfileImgClicked, setIsProfileImgClicked] = useState(false);
  const navigate = useNavigate();
  const { data, isLoading, error } = useUser();
  const { isSmallScreen } = useScreenSize();

  if (isLoading) return <p>isLoading...</p>;

  if (!data || error) return <p>error...</p>;

  const { firstName, lastName, photo } = data;

  const closeMobileMenu = () => {
    if (isProfileImgClicked) setIsProfileImgClicked(false);
  };

  const handleLogout = async () => {
    closeMobileMenu();
    await logout();
    navigate('/logout');
  };

  const handleClick = () => {
    setIsProfileImgClicked(!isProfileImgClicked);
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-10 flex items-center justify-between bg-colorGrey50 p-7 shadow-md md:p-10 md:pr-28`}
    >
      <Logo />

      {!isSmallScreen && (
        <div className="flex gap-16">
          <ThemeToggle />

          <div className="relative">
            <div
              className="flex cursor-pointer items-center gap-2 text-[15px]"
              onClick={handleClick}
            >
              <span className="text-xl font-semibold">
                {firstName} {lastName}
              </span>
              <img
                src={`${BASE_URL}/img/users/${photo}`}
                alt="Profile-img"
                className="rounded-full"
                width={30}
              />
            </div>
            {isProfileImgClicked && (
              <ul className="absolute right-0 top-14 space-y-2 rounded-md bg-gradient-to-br from-colorBrand1 via-colorBrand2 to-colorBrand3 px-8 py-4 text-colorGrey100 transition-all delay-100 ease-in-out hover:-translate-y-1 hover:space-y-3 hover:text-colorGrey0">
                <li>
                  <NavLink to="/profile" onClick={closeMobileMenu}>
                    Profile
                  </NavLink>
                </li>

                <li>
                  <NavLink onClick={handleLogout}>Logout</NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
