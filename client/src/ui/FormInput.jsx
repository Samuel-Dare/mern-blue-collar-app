// import { useState } from 'react';
// import './formInput.css';

// const FormInput = (props) => {
//   const [focus, setFocus] = useState(false);

//   const handleFocus = () => setFocus(true);

//   const { label, errorMessage, ...others } = props;

//   // Conditionally create a props object for the input element
//   const inputProps = {
//     ...others,
//     onBlur: handleFocus,
//     onFocus: () => others.name === 'confirmPassword' && handleFocus(),
//   };

//   // Conditionally add the 'focus' attribute if 'focus' is true
//   if (focus) {
//     inputProps.focus = 'true';
//   }

//   return (
//     <div className="formInput">
//       <label className="inputLabel">{label}</label>
//       <input className="inputField" {...inputProps} />
//       <p className="errMsg">{errorMessage}</p>
//     </div>
//   );
// };

// export default FormInput;
