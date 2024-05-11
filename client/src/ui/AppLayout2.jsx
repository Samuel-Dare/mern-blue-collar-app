import { Outlet } from 'react-router-dom';

import FilterServiceProvidersNav from '../features/findServiceProvider/FilterServiceProvidersNav';
import { ProgressBarProvider } from '../context/ProgressBarContext';
import Footer from './Footer';

function AppLayout2() {
  return (
    <ProgressBarProvider>
      <FilterServiceProvidersNav />
      {/* <div className="mt-[200px] min-h-screen md:mt-[160px]"> */}
      <div className="mt-[100px] min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </ProgressBarProvider>
  );
}

export default AppLayout2;
