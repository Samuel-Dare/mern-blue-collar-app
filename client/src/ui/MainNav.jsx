import { useScreenSize } from '../context/ScreenSize';
import Logo from './Logo';
import NavListItems from './MainNavListItems';

export default function MainNav() {
  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-10 flex items-center justify-between bg-colorGrey50 p-7 md:p-10 `}
    >
      <Logo />
      <NavListItems />
    </nav>
  );
}
