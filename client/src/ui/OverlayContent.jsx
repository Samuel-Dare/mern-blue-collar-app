// import { useState } from 'react';
// import Axios from 'axios';

// import Button from './Button';
// import { useOverlay } from '../context/OverlayContext';

// const BASE_URL = import.meta.env.VITE_BASE_URL;
// const urlSignup = 'api/v1/users/signup';
// const urlSignupAsProfessional = 'api/v1/users/signupAsProfessional';

// function OverlayContent({ children, values, source }) {
//   const { isOverlayVisible, handleCloseOverlay } = useOverlay();

//   // console.log(valuesSignup);
//   // console.log(valuesLogin);
//   // console.log(valuesSignupAsProfessional);

//   let formData;

//   if (source === 'signup') {
//     formData = {
//       firstName: values.firstName,
//       lastName: values.lastName,
//       email: values.email,
//       phone: values.phone,
//       password: values.password,
//       passwordConfirm: values.confirmPassword,
//     };
//   } else if (source === 'signupAsProfessional') {
//     formData = {
//       service: values.service,
//       location: values.location,
//     };
//   } else {
//     // Handle the case where source is neither 'signup' nor 'signupAsProfessional'
//     console.error(`Unsupported source: ${source}`);
//     // You might throw an error, log a message, or handle it in another way based on your needs
//   }

//   const handleSubmit = Axios.all([
//     Axios.post(`${BASE_URL}/${urlSignup}`, formData),
//     Axios.post(`${BASE_URL}/${urlSignupAsProfessional}`, formData),
//   ]).then(
//     Axios.spread((data1, data2) => {
//       // output of req.
//       console.log('data1', data1, 'data2', data2);
//     }),
//   );

//   return (
//     <>
//       {isOverlayVisible && (
//         <div className="fixed left-0 top-0 z-10 flex h-full w-full justify-center overflow-y-auto p-5">
//           <div className="relative z-20 h-fit w-full bg-colorGrey200 p-10 md:w-auto">
//             <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border-2 border-colorBrand200 bg-colorBrand200">
//               <Button type="pointer" onClick={handleCloseOverlay}>
//                 ✖
//               </Button>
//             </div>
//             <p className="text-lg">{children}</p>
//             <Button type="primaryFull">Become A BCollar</Button>
//           </div>
//           <div className="fixed left-0 top-0 h-full w-full bg-colorGrey100 opacity-80"></div>
//         </div>
//       )}
//     </>
//   );
// }

// export default OverlayContent;

import Button from './Button';
import { useOverlay } from '../context/OverlayContext';

function OverlayContent({ children, values, source }) {
  const { isOverlayVisible, handleCloseOverlay } = useOverlay();

  return (
    <>
      {isOverlayVisible && (
        <div className="fixed left-0 top-0 z-10 flex h-full w-full justify-center overflow-y-auto p-5">
          <div className="relative z-20 h-fit w-full bg-colorGrey200 p-10 md:w-auto">
            <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border-2 border-colorBrand200 bg-colorBrand200">
              <Button type="pointer" onClick={handleCloseOverlay}>
                ✖
              </Button>
            </div>
            <div className="text-lg">{children}</div>
          </div>
          <div className="fixed left-0 top-0 h-full w-full bg-colorGrey100 opacity-80"></div>
        </div>
      )}
    </>
  );
}

export default OverlayContent;
