import { useQuery } from '@tanstack/react-query';

export function useBCollarsData(url) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['bcollar'],
    queryFn: () => fetch(url).then((res) => res.json()),
  });

  return { data, isLoading, error };
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
