import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import CenteredMessage from '../ui/CenteredMessage';

const PageNotFound = () => {
  return (
    <CenteredMessage
      icon={FaExclamationCircle}
      title="Page Not Found"
      message1="The page you're looking for does not exist."
    />
  );
};

export default PageNotFound;
