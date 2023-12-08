import { createContext } from 'react';
import Button from '../ui/Button';
import { useState } from 'react';
import { useContext } from 'react';

const OverlayContext = createContext();

const OverlayProvider = ({ children }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleCloseOverlay = () => {
    setIsOverlayVisible((overlay) => !overlay);
  };

  return (
    <OverlayContext.Provider value={{ handleCloseOverlay, isOverlayVisible }}>
      {children}
    </OverlayContext.Provider>
  );
};

const useOverlay = () => {
  const context = useContext(OverlayContext);
  if (context === undefined)
    throw new Error(
      'The OverlayContext was used outside of the OverlayProvider',
    );
  return context;
};

export { OverlayProvider, useOverlay };
