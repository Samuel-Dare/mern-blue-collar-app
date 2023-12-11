import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './ui/AppLayout';
import Dashboard from './pages/Dashboard';
import SignupLogin from './pages/SignupLogin';
import TaskDescriptionForm from './pages/TaskDescriptionForm';
import ServiceProviderProfileCard from './ui/ServiceProviderProfileCard';
import AppLayout2 from './ui/AppLayout2';
import SignupAsServiceProvider from './pages/SignupAsServiceProvider';
import FindServiceProvider from './pages/FindServiceProvider';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Logout from './pages/Logout';
import { SearchProvider } from './context/SearchContext';
import { TaskInfoProvider } from './context/TaskInfoContext';

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
        <SearchProvider>
          <TaskInfoProvider>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Home />} />
              </Route>
              <Route element={<AppLayout2 />}>
                <Route
                  path="/task-description-form"
                  element={<TaskDescriptionForm />}
                />
                <Route
                  path="/find-a-professional"
                  element={<FindServiceProvider />}
                />
              </Route>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/signup-login" element={<SignupLogin />} />
              <Route path="/signup" element={<Signup />} />
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
          </TaskInfoProvider>
        </SearchProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
