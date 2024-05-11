import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../services/apiAuth';

export function useUser() {
  const {
    isLoading,
    data: { data: { data } = {} } = {},
    error,
  } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
  });

  // const isAuthenticated = !!document.cookies.includes('jwt');
  const isAuthenticated = !!data;

  return { isLoading, data, isAuthenticated, error };
}
