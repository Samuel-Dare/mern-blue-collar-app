import { useContext } from 'react';
import { useState, createContext } from 'react';

const ProgressBarContext = createContext();

const ProgressBarProvider = ({ children }) => {
  const [currentStage, setCurrentStage] = useState(0);

  const handleNext = () => {
    if (currentStage < 4) {
      setCurrentStage(currentStage + 1);
    }
  };
  const handleBack = () => {
    if (currentStage > 0) {
      setCurrentStage(currentStage - 1);
    }
  };

  return (
    <ProgressBarContext.Provider
      value={{ currentStage, handleNext, handleBack }}
    >
      {children}
    </ProgressBarContext.Provider>
  );
};

const useProgressBar = () => {
  const context = useContext(ProgressBarContext);
  if (context === undefined)
    throw new Error(
      'The ProgressBarContext was used outside of the ProgressBarProvider',
    );
  return context;
};

export { ProgressBarProvider, useProgressBar };
