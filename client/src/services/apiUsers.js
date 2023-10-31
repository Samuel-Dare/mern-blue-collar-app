const BASE_URL = `${import.meta.env.VITE_BASE_URL}/api/v1/users`;

export const getUsers = `${BASE_URL}/bCollars/`;
export const getMe = `${BASE_URL}/me`;
export const updateMe = `${BASE_URL}/updateMe`;
export const logout = `${BASE_URL}/logout`;
