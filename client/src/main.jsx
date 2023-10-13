import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { DarkModeProvider } from './context/DarkModeContext.jsx';
import GlobalStyles from './styles/GlobalStyles.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
      <GlobalStyles />
    </DarkModeProvider>
  </React.StrictMode>,
);
