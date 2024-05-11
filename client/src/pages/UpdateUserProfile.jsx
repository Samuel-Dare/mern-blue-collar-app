// import React, { useState } from 'react';
// import Axios from 'axios';

// import { BASE_URL } from '../config/config';
// import FormInput from '../ui/FormInput';
// import Button from '../ui/Button';

// const UpdateUserProfile = () => {
//   const [profileValues, setProfileValues] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     currentPassword: '',
//     password: '',
//     passwordConfirm: '',
//   });

//   const [updateType, setUpdateType] = useState('profile');

//   const inputs = [
//     {
//       id: 1,
//       name: 'firstName',
//       placeholder: 'First Name',
//       type: 'text',
//       label: 'First Name',
//       errorMessage: 'Field should be between 3 and 40 characters',
//       required: true,
//       pattern: "^[A-Za-z0-9 ,.'\\-]{3,40}$",
//     },
//     {
//       id: 2,
//       name: 'lastName',
//       placeholder: 'Last Name',
//       type: 'text',
//       label: 'Last Name',
//       errorMessage: 'Field should be between 3 and 40 characters',
//       required: true,
//       pattern: "^[A-Za-z0-9 ,.'\\-]{3,40}$",
//     },
//     {
//       id: 11,
//       name: 'currentPassword',
//       placeholder: 'Current Password',
//       type: 'password',
//       label: 'Current Password',
//       errorMessage: 'Please provide your current password',
//       required: true,
//     },
//     {
//       id: 12,
//       name: 'password',
//       placeholder: 'New Password',
//       type: 'password',
//       label: 'New Password',
//       errorMessage:
//         'Password should be between 8-20 characters, must include at least 1 letter, 1 number, and 1 special character',
//       required: true,
//       pattern:
//         '^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,20}$',
//     },
//     {
//       id: 13,
//       name: 'passwordConfirm',
//       placeholder: 'Confirm New Password',
//       type: 'password',
//       label: 'Confirm New Password',
//       errorMessage: 'Passwords do not match',
//       required: true,
//       pattern: profileValues.password,
//     },
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfileValues({ ...profileValues, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       if (updateType === 'profile') {
//         await Axios.patch(
//           `${BASE_URL}/api/v1/users/updateMe`,
//           {
//             firstName: profileValues.firstName,
//             lastName: profileValues.lastName,
//           },
//           {
//             withCredentials: true,
//           },
//         );
//         alert("You've successfully updated your profile");
//       } else {
//         await Axios.patch(
//           `${BASE_URL}/api/v1/users/updateMyPassword`,
//           {
//             currentPassword: profileValues.currentPassword,
//             password: profileValues.password,
//             passwordConfirm: profileValues.passwordConfirm,
//           },
//           {
//             withCredentials: true,
//           },
//         );
//         alert("You've successfully updated your password");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="w-full">
//       <h1 className="mb-4 text-3xl font-bold">Settings</h1>
//       <div className="mb-4">
//         <h2 className="text-xl font-semibold">Edit Profile</h2>
//         <form onSubmit={handleSubmit}>
//           {inputs.map(
//             (input) =>
//               ((updateType === 'profile' &&
//                 input.name !== 'currentPassword' &&
//                 input.name !== 'password' &&
//                 input.name !== 'passwordConfirm') ||
//                 (updateType === 'password' &&
//                   input.name === 'currentPassword')) && (
//                 <FormInput
//                   key={input.id}
//                   onChange={handleChange}
//                   defaultValue={profileValues[input.name]}
//                   {...input}
//                 />
//               ),
//           )}
//           <Button type="primary">Save Changes</Button>
//           <Button type="secondary" onClick={() => setUpdateType('password')}>
//             Change Password
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdateUserProfile;
