import ServiceProviderProfileCard from '../features/findServiceProvider/ServiceProviderProfileCard';
import FilterByDate from '../features/findServiceProvider/FilterByDate';
import FilterByTime from '../features/findServiceProvider/FilterByTime';
import FilterForSmallScreen from '../features/findServiceProvider/FilterForSmallScreen';
import { useScreenSize } from '../context/ScreenSize';
import SortServiceProviders from '../features/findServiceProvider/SortServiceProviders';
import FilterByService from '../features/findServiceProvider/FilterByService';
import FilterByPrice from '../features/findServiceProvider/FilterByPrice';
import { useEffect } from 'react';
import { useProgressBar } from '../context/ProgressBarContext';

function FindServiceProvider() {
  const { isSmallScreen } = useScreenSize();
  const { handleProgressBarStage } = useProgressBar();

  useEffect(() => {
    // Set current progress stage
    handleProgressBarStage(2);
  });

  window.addEventListener('scroll', function () {
    if (document.getElementById('stickyDiv')) {
      const stickyDiv = document.getElementById('stickyDiv');
      const offset = stickyDiv.getBoundingClientRect().top;

      if (isSmallScreen && offset <= 160) {
        stickyDiv.style.backgroundColor = '#4474B8';
        stickyDiv.style.color = '#fff';
      } else {
        stickyDiv.style.backgroundColor = '';
        stickyDiv.style.color = '#000';
      }
    }
  });

  return (
    <div>
      <div className="fixed left-0 right-0 top-[65px] z-40 my-5 flex h-[80px] flex-col justify-between bg-colorGrey50 px-7 py-3.5 md:flex-row md:px-10 md:py-5">
        {/* <div className="my-5 flex flex-col justify-between px-5 md:flex-row "> */}
        <p className="inline-block text-lg md:w-1/3">
          Filter and sort to find your Tasker. Then view their availability to
          request your date and time.
        </p>

        <SortServiceProviders />
      </div>
      {/* // </div> */}

      <div
        id="stickyDiv"
        className="sticky top-[160px] z-30 mx-auto divide-y-2 divide-colorGrey100 shadow-lg md:fixed md:top-auto md:w-[400px] md:overflow-y-auto md:bg-colorGrey50 md:px-10 md:pb-24 md:pt-10"
        style={{ maxHeight: 'calc(100vh - 150px)' }}
      >
        {isSmallScreen && <FilterForSmallScreen />}
        {!isSmallScreen && (
          <>
            <FilterByDate />
            <FilterByTime />
            <FilterByService />
            <FilterByPrice />{' '}
          </>
        )}
      </div>
      <div className="md:ml-[400px] ">
        <ServiceProviderProfileCard />
      </div>
    </div>
  );
}

export default FindServiceProvider;
