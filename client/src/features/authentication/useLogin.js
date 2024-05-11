import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading: isLogining } = useMutation(
    ({ email, password }) => loginApi({ email, password }),
    {
      onSuccess: (data) => {
        navigate('/dashboard', { replace: true });
        toast.success('Login successful! Welcome to your dashboard.');
        queryClient.setQueryData(['user'], data.user);
      },
      onError: (err) => {
        toast.error(err.message);
      },
    },
  );

  return { login, isLogining };
}
