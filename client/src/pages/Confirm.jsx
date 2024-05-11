import { useEffect, useState } from 'react';
import { BiCheckCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useProgressBar } from '../context/ProgressBarContext';

function Confirm() {
  const navigate = useNavigate();

  const [countdown, setCountdown] = useState(10);
  const { handleProgressBarStage } = useProgressBar();

  useEffect(() => {
    // Set current progress stage
    handleProgressBarStage(4);
  });

  useEffect(() => {
    // useEffect hook to handle countdown and redirection
    // Define a timer to decrement countdown every second
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Redirect to home page when countdown reaches 0
    if (countdown === 0) {
      navigate('/dashboard'); // Redirect to dashboard
    }

    // Cleanup the timer when component unmounts or countdown reaches 0
    return () => clearInterval(timer);
  }, [countdown, navigate]); // Dependencies for useEffect

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 md:px-8 lg:px-16">
      <BiCheckCircle className="mb-4 text-6xl text-colorBrand2 md:text-8xl" />
      <h1 className="mb-2 text-center text-xl font-bold text-colorGrey800 md:text-2xl lg:text-4xl">
        Request Submitted Successfully!
      </h1>
      <p className="text-center text-base text-colorGrey600 md:text-lg lg:w-1/2 lg:text-xl">
        Thank you for choosing BlueCollars. Your request has been received, and
        your chosen professional will be notified shortly. You will receive a
        confirmation email with further details about their availability and
        logistics.
        <br /> <br />
        Redirecting you back to your dashboard in {countdown} seconds
      </p>
    </div>
  );
}

export default Confirm;
