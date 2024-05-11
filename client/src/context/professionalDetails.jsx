// import { createContext, useContext, useState } from 'react';
// import { useUser } from '../features/authentication/useUser';

// const ProfessionalDetailsContext = createContext();

// const ProfessionalDetailsProvider = ({ children }) => {
//   const { data } = useUser();

//   const initialStateForProfessionalDetails = {
//     userId: '',
//     services: [],
//     location: '',
//   };
//   const [professionalDetails, setProfessionalDetails] = useState(
//     initialStateForProfessionalDetails,
//   );

//   //   const navigate = useNavigate();

//   const handleProfessionalDetails = (userId, services, location) => {
//     setProfessionalDetails({
//       ...professionalDetails,
//       // userId: data ? data.id : userId,
//       services,
//       location,
//     });
//   };

//   console.log(professionalDetails);

//   return (
//     <ProfessionalDetailsContext.Provider
//       value={{
//         initialStateForProfessionalDetails,
//         professionalDetails,
//         setProfessionalDetails,
//         onProfessionalDetails: handleProfessionalDetails,
//       }}
//     >
//       {children}
//     </ProfessionalDetailsContext.Provider>
//   );
// };

// const useProfessionalDetailsContext = () => {
//   const context = useContext(ProfessionalDetailsContext);
//   if (context === undefined)
//     throw new Error(
//       'The ProfessionalDetailsContext was used outside of the ProfessionalDetailsProvider',
//     );
//   return context;
// };

// export { ProfessionalDetailsProvider, useProfessionalDetailsContext };
