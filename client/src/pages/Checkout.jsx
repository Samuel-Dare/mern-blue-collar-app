import { useEffect, useState } from 'react';
import { FaCalendar, FaLocationArrow } from 'react-icons/fa';

import { BASE_URL } from '../config/config';
import { useScreenSize } from '../context/ScreenSize';
import { useTaskInfoContext } from '../context/TaskInfoContext';
import Button from '../ui/Button';
import { useUser } from '../features/authentication/useUser';
import Spinner from '../ui/Spinner';
import { useBooking } from '../features/bookings/useBooking';
import { useProgressBar } from '../context/ProgressBarContext';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  const { handleProgressBarStage } = useProgressBar();
  const { data, isLoading, error } = useUser();
  const { booking } = useBooking();
  console.log(data);

  const { selectedService, date, description, time, location } =
    useTaskInfoContext();
  const { isSmallScreen } = useScreenSize();

  const initiateCardPayment = () => {
    booking('660fb6b05e5e15ea117d3e0e');
    // Code to initiate payment with Paystack for card
  };

  const initiateBankTransfer = () => {
    // Code to initiate payment with Paystack for Google Pay
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleConfirmAndPay = () => {
    // Logic to confirm and initiate payment with Paystack
    if (paymentMethod === 'card') {
      // Handle payment with card
      initiateCardPayment();
    } else if (paymentMethod === 'transfer') {
      // Handle donation to Taskrabbit for Good
      initiateBankTransfer();
    }
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryChange = (e) => {
    setExpiry(e.target.value);
  };

  const handleCvcChange = (e) => {
    setCvc(e.target.value);
  };

  useEffect(() => {
    // Set current progress stage
    handleProgressBarStage(3);
  });

  if (isLoading) return <Spinner />;

  if (!data || error) return <p>error...</p>;
  const { firstName, lastName, photo } = data;

  return (
    <div
      className={`mt-8 border-2 border-colorGrey200 bg-colorGrey100 px-5 py-10 shadow-2xl shadow-colorGrey300 md:flex md:flex-row-reverse md:justify-center md:gap-14 md:px-10 md:py-20`}
    >
      <div
        className={`mb-6 rounded-3xl border border-colorGrey300 p-5 md:w-[400px] md:p-0`}
      >
        <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border-colorGrey200 bg-colorGrey200 py-5 md:py-10">
          <p>Help Moving</p>
          <img
            src={`${BASE_URL}/img/users/${photo}`}
            alt="Profile-img"
            className="w-[80px] rounded-full"
            width={100}
          />
          <p>firstName lastName</p>
        </div>
        <div className="divide-y divide-colorGrey300">
          <div className="p-5 md:p-10">
            <h2 className="text-xl font-bold">Task Details</h2>
            <div className="m-5 space-y-5">
              <span className="flex gap-4">
                <FaCalendar /> {date} at {time}
              </span>

              <span className="flex gap-4">
                <FaLocationArrow />
                {location}
              </span>
            </div>
            <Button type="secondary">Edit Task</Button>
          </div>
          <div className="p-5 md:p-10">
            <label htmlFor="">Your task details...</label> <br />
            <textarea
              name=""
              className="w-full rounded border p-2 focus:outline-none"
              id=""
              rows="8"
            >
              {description}
            </textarea>
          </div>
          <div className="p-5 md:p-10">
            <h2 className="text-xl font-bold">Price Details</h2>
            <div className="m-5 space-y-5">
              <div className="flex justify-between">
                <span>Hourly Rate</span>
                <span>120000</span>
              </div>
              <div className="flex justify-between">
                <span>Total Rate</span>
                <span>120000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`h-fit rounded-3xl border border-colorGrey300 px-5 py-10 md:w-[600px] md:px-5 md:py-10`}
      >
        <h1 className="mb-4 text-2xl font-bold">Confirm Details</h1>
        <div className="divide-y divide-colorGrey300">
          <div className="p-5 md:p-10">
            <h2 className="mb-2 text-lg font-semibold">Payment Method</h2>
            <div className="my-5 space-y-5">
              <p className="text-gray-600 mb-4">
                You may see a temporary hold on your payment method in the
                amount of your Tasker's hourly rate. Don't worry - you're only
                billed when your task is complete!
              </p>
            </div>
          </div>

          <form className="p-5 md:p-10">
            <div className="flex justify-around">
              <div>
                {' '}
                <input
                  type="radio"
                  className="focus:outline-none"
                  checked={paymentMethod === 'card'}
                  onChange={() => handlePaymentMethodChange('card')}
                />
                <span> Pay with Card</span>{' '}
              </div>

              <div>
                <input
                  type="radio"
                  className="focus:outline-none"
                  checked={paymentMethod === 'transfer'}
                  onChange={() => handlePaymentMethodChange('transfer')}
                />
                <span> Bank Transfer</span>
              </div>
            </div>

            <div className="my-10 space-y-5">
              {paymentMethod === 'card' && (
                <>
                  <h2 className="mb-2 text-lg font-semibold">
                    Payment Details
                  </h2>
                  <div className="m-5 flex rounded-md border md:m-10">
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      className="h-14 flex-grow rounded-md px-4 py-2 outline-none focus:outline-none"
                      placeholder="Card Number"
                    />
                    <input
                      type="text"
                      max={4}
                      value={expiry}
                      onChange={handleExpiryChange}
                      className="h-14 w-32 rounded-md px-4 py-2 outline-none focus:outline-none"
                      placeholder="MM/YY"
                    />
                    <input
                      type="text"
                      max={3}
                      value={cvc}
                      onChange={handleCvcChange}
                      className="h-14 w-32 rounded-md px-4 py-2 focus:outline-none"
                      placeholder="CVC"
                    />
                  </div>
                </>
              )}

              {paymentMethod === 'transfer' && (
                <>
                  <p>Bank Name: Zenith Bank</p>
                  <p>Account Name: Blue Collars Global Tech Limited</p>
                  <p>Account Name: 0000000000</p>
                </>
              )}
            </div>
            <Button type="secondary">Confirm Payment</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
