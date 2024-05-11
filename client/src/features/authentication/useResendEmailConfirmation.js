import { useMutation } from '@tanstack/react-query';
import { resendEmailConfirmation as resendEmailConfirmationApi } from '../../services/apiAuth';
import { toast } from 'react-hot-toast';

export function useResendEmailConfirmation() {
  const { mutate: resendEmailConfirmation, isLoading: isResendingEmail } =
    useMutation({
      mutationFn: resendEmailConfirmationApi,
      onSuccess: () => {
        toast.success('Confirmation email resent successfully!');
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });

  return { resendEmailConfirmation, isResendingEmail };
}
