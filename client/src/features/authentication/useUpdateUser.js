import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { updateCurrentUser } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: (data) => {
      console.log(data);
      if (data === '') toast.success('No changes were made');
      else toast.success('User account successfully updated');
      // queryClient.setQueryData(['updatedUser'], data);
      queryClient.invalidateQueries('user'); // Invalidate user query
    },
    onError: (err) => toast.error(err.message),
  });

  // Use this onSuccess callback to display success message after all requests are completed
  const finalOnSuccess = () => {
    toast.success('User account successfully updated');
    navigate('/dashboard', { replace: true });
  };

  return { updateUser, isUpdating };
}
