import Logo from '../../ui/Logo';
import ProgressBarToFindBCollars from './ProgressBarToFindBCollars';
import SortServiceProviders from './SortServiceProviders';

function FilterServiceProvidersNav() {
  return (
    // <nav className="fixed left-0 right-0 top-0 z-50 bg-colorGrey50 p-7 md:p-10">
    <nav className="fixed left-0 right-0 top-0 z-50 flex h-[80px] items-center gap-5 border-b border-b-colorGrey200 bg-colorGrey50 px-7 py-3.5 text-center md:gap-36">
      {/* <div className="flex items-center gap-5 border-b border-b-colorGrey200 text-center md:gap-10"> */}
      <Logo />
      <ProgressBarToFindBCollars />
      {/* </div> */}

      {/* <div className="my-5 flex flex-col justify-between px-5 md:flex-row ">
        <p className="inline-block text-lg md:w-1/3">
          Filter and sort to find your Tasker. Then view their availability to
          request your date and time.
        </p>

        <SortServiceProviders />
      </div> */}
    </nav>
  );
}

export default FilterServiceProvidersNav;
