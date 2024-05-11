// import { useQuery } from '@tanstack/react-query';

// export function useServiceProvidersData(url) {
//   const {
//     data: { data: { data } = {} } = {},
//     isLoading,
//     error,
//     refetch,
//   } = useQuery({
//     queryKey: ['service providers'],
//     queryFn: () => fetch(url).then((res) => res.json()),
//   });

//   return { data, isLoading, error, refetch };
// }

// export function useMeData(url) {
//   const {
//     data: { data: { data } = {} } = {},
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ['me'],
//     queryFn: () =>
//       fetch(url, {
//         method: 'GET',
//         credentials: 'include',
//       }).then((res) => res.json()),

//     // initialData: null,
//   });

//   return { data, isLoading, error };
// }

// export function useBookings(url) {
//   const {
//     data: { data: { data } = {} } = {},
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ['bookings'],
//     queryFn: () => fetch(url).then((res) => res.json()),
//   });

//   return { data, isLoading, error };
// }

// export function usePostBookingRequest(url) {
//   const postBookingRequest = async (bookingData) => {
//     try {
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(bookingData),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to post booking request');
//       }

//       return await response.json();
//     } catch (error) {
//       console.error('Error posting booking request:', error);
//       throw error;
//     }
//   };

//   return postBookingRequest;
// }
