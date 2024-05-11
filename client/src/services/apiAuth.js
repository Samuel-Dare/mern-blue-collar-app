import Axios from 'axios';
import { BASE_URL } from '../config/config';

const URL = `${BASE_URL}/api/v1`;

export const urlSignup = `${URL}/users/signup`;
export const urlSignupAsProfessional = `${URL}/serviceProviders/signupAsProfessional`;
export const urlLogin = `${URL}/users/login`;
export const urlLogout = `${URL}/users/logout`;
export const urlGetCurrentUser = `${URL}/users/me`;
export const urlUpdateMe = `${URL}/users/updateMe`;
export const urlResendEmailConfirmation = `${URL}/users/resendEmailConfirmation/:email`;

export async function signup({
  firstName,
  lastName,
  email,
  phone,
  password,
  passwordConfirm,
}) {
  try {
    const response = await Axios.post(urlSignup, {
      firstName,
      lastName,
      email,
      phone,
      password,
      passwordConfirm,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function signupAsProfessional({
  firstName,
  lastName,
  email,
  phone,
  password,
  passwordConfirm,
  services,
  location,
}) {
  try {
    const response = await Axios.post(
      urlSignupAsProfessional,
      {
        firstName,
        lastName,
        email,
        phone,
        password,
        passwordConfirm,

        // Professional Details
        services,
        location,
      },
      {
        withCredentials: true,
      },
    );

    return response.data;
  } catch (error) {
    console.error('Error in the signupAsProfessional request:', error);
    throw new Error(error.response.data.message);
  }
}

export async function login({ email, password }) {
  try {
    const response = await Axios.post(
      urlLogin,
      { email, password },
      {
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function logout() {
  try {
    await Axios.get(urlLogout, {
      withCredentials: true,
    });
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function getCurrentUser() {
  try {
    const response = await Axios.get(urlGetCurrentUser, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Failed to fetch user data');
  }
}

export async function updateCurrentUser({
  firstName,
  lastName,
  phone,
  role,
  photo,
}) {
  try {
    const response = await Axios.patch(
      urlUpdateMe,
      { firstName, lastName, phone, role, photo },
      {
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response.data.message || 'Failed to update user data',
    );
  }
}

export async function resendEmailConfirmation(email) {
  try {
    const response = await Axios.post(
      urlResendEmailConfirmation,
      { email },
      {
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response.data.message || 'Failed to resend confirmation email',
    );
  }
}
