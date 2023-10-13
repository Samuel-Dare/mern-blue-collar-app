// import "./App.css";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './ui/AppLayout';

function App() {
  const className = 'text-sm text-blue-500 hover:text-blue-600 hover:underline';

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
