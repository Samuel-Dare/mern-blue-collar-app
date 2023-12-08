import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import GlobalStyles from './styles/GlobalStyles.js';
import { DarkModeProvider } from './context/DarkModeContext.jsx';
import { ScreenSizeProvider } from './context/ScreenSize.jsx';
import { OverlayProvider } from './context/OverlayContext.jsx';
import { SearchProvider } from './context/SearchContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScreenSizeProvider>
      <DarkModeProvider>
        {/* <SearchProvider> */}
        <OverlayProvider>
          <App />
          <GlobalStyles />
        </OverlayProvider>
        {/* </SearchProvider> */}
      </DarkModeProvider>
    </ScreenSizeProvider>
  </React.StrictMode>,
);
