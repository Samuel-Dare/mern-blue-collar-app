import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getBooking } from '../../services/apiBookings';

export function useBooking() {
  const { professionalId } = useParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ['booking', professionalId],
    queryFn: () => getBooking(professionalId),
    retry: false,
  });

  return { isLoading, error, booking };
}
