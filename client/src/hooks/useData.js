import { useQuery } from '@tanstack/react-query';

export function useServiceProvidersData(url) {
  const {
    data: { data: { data } = {} } = {},
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['service providers'],
    queryFn: () => fetch(url).then((res) => res.json()),
  });

  return { data, isLoading, error, refetch };
}

export function useMeData(url) {
  const {
    data: { data: { data } = {} } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ['me'],
    queryFn: () =>
      fetch(url, {
        method: 'GET',
        credentials: 'include',
      }).then((res) => res.json()),
  });

  return { data, isLoading, error };
}
