import { BASE_URL } from '../config/config';

const urlGetAllServiceProviders = `${BASE_URL}/api/v1/serviceProviders`;

export const urlSignupAsProfessional = `${BASE_URL}/api/v1/serviceProviders/signupAsProfessional`;

export const urlGetServiceProviders = (filterBy, sortBy) => {
  console.log('f', filterBy);
  console.log('s', sortBy);

  if (filterBy === 'Available Services') return urlGetAllServiceProviders;
  if (filterBy) {
    if (sortBy === 'lowToHighPrice')
      return `${urlGetAllServiceProviders}/?service=${filterBy}&sort=price`;
    if (sortBy === 'highToLowPrice')
      return `${urlGetAllServiceProviders}/?service=${filterBy}&sort=-price`;
    else return `${urlGetAllServiceProviders}/?service=${filterBy}`;
  }
  return urlGetAllServiceProviders;
};

export const urlGetServiceProvider = `${urlGetAllServiceProviders}/:serviceProviderId`;

export const urlBookings = `${BASE_URL}/api/v1/bookings`;
