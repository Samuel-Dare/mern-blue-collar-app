import Logo from './Logo';
import ProgressBarToFindBCollars from './ProgressBarToFindBCollars';

function FilterServiceProvidersNav() {
  return (
    <div className="flex items-center gap-5 border-b border-b-colorGrey200 px-5 text-center md:gap-10">
      <Logo />
      <ProgressBarToFindBCollars />
    </div>
  );
}

export default FilterServiceProvidersNav;
