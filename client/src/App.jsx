import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './ui/AppLayout';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import BecomeABCollar from './pages/BecomeABCollar';
import Map from './ui/Map';
import FindABCollar from './pages/FindABCollar';
import Dashboard from './pages/Dashboard';
import { DashboardSidebarProvider } from './context/DashboardSidebarContext';
import Logout from './ui/Logout';

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
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/become-a-bcollar" element={<BecomeABCollar />} />
          </Route>
          <Route path="/find-a-professional" element={<FindABCollar />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
