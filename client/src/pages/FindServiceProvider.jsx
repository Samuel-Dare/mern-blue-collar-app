import ServiceProviderProfileCard from '../ui/ServiceProviderProfileCard';
import FilterByDate from '../ui/FilterByDate';
import FilterByTime from '../ui/FilterByTime';
import FilterForSmallScreen from '../ui/FilterForSmallScreen';
import { useScreenSize } from '../context/ScreenSize';
import SortServiceProviders from '../ui/SortServiceProviders';
import FilterByService from '../ui/FilterByService';
import FilterByPrice from '../ui/FilterByPrice';

function FindServiceProvider() {
  const { isSmallScreen } = useScreenSize();

  return (
    <>
      <div className="my-5 flex flex-col justify-around gap-5 px-5 md:flex-row md:gap-10">
        <p className="b inline-block text-lg md:w-1/3">
          Filter and sort to find your Tasker. Then view their availability to
          request your date and time.
        </p>

        <SortServiceProviders />
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col gap-5 divide-y-2 divide-colorGrey100 shadow-lg md:w-1/3 md:p-10">
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

        <ServiceProviderProfileCard />
      </div>
    </>
  );
}

export default FindServiceProvider;
