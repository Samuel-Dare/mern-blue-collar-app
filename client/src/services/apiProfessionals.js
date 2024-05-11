import Axios from 'axios';
import { BASE_URL } from '../config/config';

const urlGetProfessional = (id) => `${BASE_URL}/api/v1/serviceProviders/${id}`;

const urlGetAllProfessionals = `${BASE_URL}/api/v1/serviceProviders`;

const urlGetProfessionals = (filterBy, sortBy) => {
  console.log('f', filterBy);
  console.log('s', sortBy);

  if (filterBy === 'Available Services') return urlGetAllProfessionals;
  if (filterBy) {
    if (sortBy === 'lowToHighPrice')
      return `${urlGetAllProfessionals}/?service=${filterBy}&sort=price`;
    if (sortBy === 'highToLowPrice')
      return `${urlGetAllProfessionals}/?service=${filterBy}&sort=-price`;
    else return `${urlGetAllProfessionals}/?service=${filterBy}`;
  }
  return urlGetAllProfessionals;
};

export async function getProfessional(id) {
  try {
    const response = await Axios.get(urlGetProfessional(id), {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response.data.message || 'Failed to fetch professional',
    );
  }
}

export async function getProfessionals(filterBy, sortBy) {
  try {
    const response = await Axios.get(urlGetProfessionals(filterBy, sortBy), {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response.data.message || 'Failed to fetch professionals',
    );
  }
}
