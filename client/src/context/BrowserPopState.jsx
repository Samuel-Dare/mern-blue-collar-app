// import { useState } from 'react';
// import { useEffect, createContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useProgressBar } from './ProgressBarContext';
// import { useContext } from 'react';

// const BrowserPopStateContext = createContext();

// const BrowserPopStateProvider = ({ children }) => {
//   const navigate = useNavigate();
//   const { handleNext, handleBack } = useProgressBar();

//   {
//     const navigate = useNavigate();
//     const [isPoped, setIsPoped] = useState(false);

//     const handlePopstate = () => {
//       setIsPoped((poped) => !poped);
//     };

//     useEffect(() => {
//       window.addEventListener('popstate', handlePopstate);

//       return () => {
//         window.removeEventListener('popstate', handlePopstate);
//       };
//     }, []);

//     const handleSubmit = (routeTo) => {
//       if (
//         window.history.state &&
//         window.history.state.navigationType === 'back'
//       ) {
//         return handleBack();
//       }

//       handleNext(routeTo);
//       navigate(routeTo);
//     };

//     return (
//       <BrowserPopStateContext.Provider value="">
//         {children}
//       </BrowserPopStateContext.Provider>
//     );
//   }
// };

// const useBrowserPopState = () => {
//   const context = useContext(BrowserPopStateContext);
//   if (context === undefined)
//     throw new Error(
//       'The BrowserPopStateContext was used outside of the BrowserPopStateProvider',
//     );
//   return context;
// };

// export { BrowserPopStateProvider, useBrowserPopState };
