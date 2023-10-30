import Logo from './Logo';
import NavListItems from './MainNavListItems';

function Sidebar() {
  return (
    <nav className="align-center flex justify-center p-5 md:hidden">
      <NavListItems />
      <Logo />
    </nav>
  );
}

export default Sidebar;
