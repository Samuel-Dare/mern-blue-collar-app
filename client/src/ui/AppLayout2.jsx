import { Outlet } from 'react-router-dom';

import FilterServiceProvidersNav from './FilterServiceProvidersNav';
import { ProgressBarProvider } from '../context/ProgressBarContext';
import Footer from './Footer';

function AppLayout2() {
  return (
    <ProgressBarProvider>
      <FilterServiceProvidersNav />
      <Outlet />
      <Footer />
    </ProgressBarProvider>
  );
}

export default AppLayout2;
