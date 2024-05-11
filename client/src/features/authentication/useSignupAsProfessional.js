import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signupAsProfessional as signupAsProfessionalApi } from '../../services/apiAuth';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useUser } from './useUser';

export function useSignupAsProfessional() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isAuthenticated } = useUser();

  const { mutate: signupAsProfessional, isLoading: isSigningupProfessional } =
    useMutation({
      mutationFn: signupAsProfessionalApi,
      onSuccess: (data) => {
        toast.success(
          data.message,
          // "Account successfully created!!! Please verify the new account from the user's email address.",
        );
        if (!isAuthenticated) {
          navigate('/confirmEmail', { replace: true });
        } else {
          navigate('/dashboard', { replace: true });
          queryClient.setQueryData(
            ['professional'],
            data.user,
            data.professional,
          );
        }
      },
      onError: (err) => toast.error(err.message),
    });

  return { signupAsProfessional, isSigningupProfessional };
}
