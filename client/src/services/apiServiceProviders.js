import { BASE_URL } from '../config/config';

const URL = `${BASE_URL}/api/v1/serviceProviders`;

export const urlSignupAsProfessional = `${BASE_URL}/api/v1/serviceProviders/signupAsProfessional`;

export const urlGetServiceProviders = (filterBy, sortBy) => {
  console.log('f', filterBy);
  console.log('s', sortBy);

  if (filterBy === 'Available Services') return URL;
  if (filterBy) {
    if (sortBy === 'lowToHighPrice')
      return `${URL}/?service=${filterBy}&sort=price`;
    else return `${URL}/?service=${filterBy}`;
  }
  return URL;
};
export const urlGetServiceProvider = `${URL}/:serviceProviderId`;
