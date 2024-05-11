import { useEffect, useState } from 'react';
import { BiLogOut } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import CenteredMessage from '../ui/CenteredMessage';

function Logout() {
  const navigate = useNavigate(); // Use useNavigate hook to get navigation function
  const [countdown, setCountdown] = useState(5); // Initial countdown value

  // useEffect hook to handle countdown and redirection
  useEffect(() => {
    // Define a timer to decrement countdown every second
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Redirect to home page when countdown reaches 0
    if (countdown === 0) {
      navigate('/'); // Redirect to home page
    }

    // Cleanup the timer when component unmounts or countdown reaches 0
    return () => clearInterval(timer);
  }, [countdown, navigate]); // Dependencies for useEffect

  return (
    <CenteredMessage
      icon={BiLogOut}
      title="You are successfully logged out!"
      message1="Thank you for choosing BlueCollars. We will be glad to have you around again!"
      message2={`Redirecting back to home in ${countdown} seconds`}
    />
  );
}

export default Logout;
