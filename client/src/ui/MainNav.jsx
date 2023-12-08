import { useScreenSize } from '../context/ScreenSize';
import Logo from './Logo';
import NavListItems from './MainNavListItems';

export default function MainNav() {
  const { isSmallScreen } = useScreenSize();

  return (
    <nav
      className={`${
        isSmallScreen ? 'flex md:hidden' : 'hidden md:flex'
      } fixed left-0 right-0 top-0 z-10 items-center justify-between bg-colorGrey50 px-10 `}
    >
      <Logo />
      <NavListItems />
    </nav>
  );
}
