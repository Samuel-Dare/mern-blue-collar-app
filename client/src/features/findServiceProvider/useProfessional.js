import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getProfessionals } from '../../services/apiProfessionals';

// useEffect(() => {
//   setApiUrl(urlGetServiceProviders(selectedService, sortBy));
// }, [selectedService, sortBy]);

// useEffect(() => {}, [apiUrl, refetch]);

export function useProfessionals() {
  const { filterBy, sortBy } = useParams();

  const {
    isLoading,
    data: { data: { data } = {} } = {},
    error,
  } = useQuery({
    queryKey: ['professionals', filterBy, sortBy],
    queryFn: () => getProfessionals(filterBy, sortBy),
  });

  return { isLoading, data, error };
}
