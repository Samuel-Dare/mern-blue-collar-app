import { useContext } from 'react';
import { useState, createContext } from 'react';

const ProgressBarContext = createContext();

const ProgressBarProvider = ({ children }) => {
  const [currentStage, setCurrentStage] = useState(0);

  const handleProgressBarStage = (stageNo) => {
    if (currentStage < 5) setCurrentStage(stageNo);
  };

  return (
    <ProgressBarContext.Provider
      value={{ currentStage, handleProgressBarStage }}
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
