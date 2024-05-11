import Axios from 'axios';
import { BASE_URL } from '../config/config';

const URL = `${BASE_URL}/api/v1`;

export const urlCreateBooking = `${URL}/bookings/create`;
export const urlGetAllBookings = `${URL}/bookings`;
export const urlGetBooking = (id) => `${URL}/bookings/checkout-session/${id}`;
export const urlUpdateBooking = (id) => `${URL}/bookings/${id}`;
export const urlDeleteBooking = (id) => `${URL}/bookings/${id}`;

export async function createBooking(bookingData) {
  try {
    const response = await Axios.post(urlCreateBooking, bookingData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Failed to create booking');
  }
}

export async function getAllBookings() {
  try {
    const response = await Axios.get(urlGetAllBookings, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response.data.message || 'Failed to fetch bookings data',
    );
  }
}

export async function getBooking(id) {
  try {
    const response = await Axios.get(urlGetBooking(id), {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response.data.message || 'Failed to fetch booking data',
    );
  }
}

export async function updateBooking(id, updatedBookingData) {
  try {
    const response = await Axios.patch(
      urlUpdateBooking(id),
      updatedBookingData,
      {
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response.data.message || 'Failed to update booking data',
    );
  }
}

export async function deleteBooking(id) {
  try {
    const response = await Axios.delete(urlDeleteBooking(id), {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Failed to delete booking');
  }
}
