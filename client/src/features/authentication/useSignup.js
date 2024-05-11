import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signup as signupApi } from '../../services/apiAuth';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useSignup() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: signup, isLoading: isSigningupUser } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      toast.success(
        data.message,
        // "Account successfully created! Please verify the new account from the user's email address.",
      );

      navigate('/confirmEmail', { replace: true });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { signup, isSigningupUser };
}
