import Logo from './Logo';
import NavListItems from './MainNavListItems';

export default function MainNav() {
  return (
    <nav className="hidden items-center justify-between bg-colorGrey400 p-10 text-colorGrey800 md:flex ">
      <Logo />
      <NavListItems />
    </nav>
  );
}
