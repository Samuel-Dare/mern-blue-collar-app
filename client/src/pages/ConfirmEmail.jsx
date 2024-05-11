import React, { useState } from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import { useResendEmailConfirmation } from '../features/authentication/useResendEmailConfirmation';
import CenteredMessage from '../ui/CenteredMessage';

const ConfirmEmail = () => {
  const { resendEmailConfirmation, isResendingEmail } =
    useResendEmailConfirmation();
  const [resendSuccess, setResendSuccess] = useState(false);
  const [resendError, setResendError] = useState(null);

  const handleResendConfirmationEmail = () => {
    resendEmailConfirmation(
      {},
      {
        onSuccess: () => {
          setResendSuccess(true);
        },
      },
    );
  };

  return (
    <CenteredMessage
      icon={FaExclamationCircle}
      title="Check Your Email"
      message1="An email with a confirmation link has been sent to your email address. Please check your inbox and follow the instructions to confirm your email."
      message2={
        <>
          {resendSuccess && (
            <p className="success-message">
              Confirmation email resent successfully.
            </p>
          )}
          {resendError && <p className="error-message">{resendError}</p>}
          <button
            onClick={handleResendConfirmationEmail}
            disabled={isResendingEmail}
          >
            {isResendingEmail
              ? 'Resending...'
              : 'Click here to resend Confirmation Email'}
          </button>
        </>
      }
    />
  );
};

export default ConfirmEmail;
