import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import { SearchProvider } from './context/SearchContext';
import { TaskInfoProvider } from './context/TaskInfoContext';
// import { ProfessionalDetailsProvider } from './context/professionalDetails';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/PageNotFound';
import SignupLogin from './pages/SignupLogin';
import TaskDescription from './pages/TaskDescription';
import SignupAsServiceProvider from './pages/SignupAsServiceProvider';
import FindServiceProvider from './pages/FindServiceProvider';
import ContactUs from './pages/ContactUs';
import HowItWorks from './pages/HowItWorks';
import AboutUs from './pages/AboutUs';
import Bookings from './pages/Bookings';
import Reviews from './pages/Reviews';
import Checkout from './pages/Checkout';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Logout from './pages/Logout';
import AppLayout from './ui/AppLayout';
import AppLayout2 from './ui/AppLayout2';
import AppLayout3 from './ui/AppLayout3';
import ServiceProviderProfileCard from './features/findServiceProvider/ServiceProviderProfileCard';
import EditProfile from './pages/EditProfile';
import ProtectedRoute from './ui/ProtectedRoute';
import DeleteAccount from './pages/DeleteAccount';
import Confirm from './pages/Confirm';
import ConfirmEmail from './pages/ConfirmEmail';
import ScrollToTop from './utils/ScrollToTop';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <ScrollToTop />
        <SearchProvider>
          <TaskInfoProvider>
            {/* <ProfessionalDetailsProvider> */}
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Home />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
              </Route>
              <Route element={<AppLayout2 />}>
                <Route path="/task-description" element={<TaskDescription />} />
                <Route
                  path="/find-a-professional"
                  element={<FindServiceProvider />}
                />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/confirm" element={<Confirm />} />
              </Route>

              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout3 />
                  </ProtectedRoute>
                }
              >
                {/* <Route element={<AppLayout3 />}> */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/profile" element={<EditProfile />} />
                <Route path="/deleteAccount" element={<DeleteAccount />} />
              </Route>

              <Route path="/signup-login" element={<SignupLogin />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/confirmEmail/:confirmationToken"
                element={<ConfirmEmail />}
              />
              <Route
                path="/resendEmailConfirmation/:email"
                element={<ConfirmEmail />}
              />
              <Route
                path="/become-a-professional"
                element={<SignupAsServiceProvider />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route
                path="/available-professionals"
                element={<ServiceProviderProfileCard />}
              />

              <Route path="*" element={<PageNotFound />} />
            </Routes>
            {/* </ProfessionalDetailsProvider> */}
          </TaskInfoProvider>
        </SearchProvider>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--color-grey-0)',
            color: 'var(--color-grey-700)',
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
