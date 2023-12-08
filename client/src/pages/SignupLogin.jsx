import React from 'react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';

const SignupLogin = () => {
  return (
    <div className="flex min-h-screen bg-colorGrey100 md:items-center md:justify-center">
      <div className="flex w-full flex-col items-center justify-center gap-10 rounded-md bg-colorGrey50 p-20 text-center shadow-md md:h-[350px] md:w-[500px]">
        <div className="mb-5">
          <Logo />
        </div>

        <Button type="secondaryFull" to="/signup">
          Signup
        </Button>
        <Button type="primaryFull" to="/login">
          Login
        </Button>

        <p className="mt-10">
          By signing up you agree to our
          <Link to="#" className="text-colorBrand500">
            {' '}
            Terms of Use{' '}
          </Link>
          and
          <Link to="#" className="text-colorBrand500">
            {' '}
            Privacy Policy.{' '}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupLogin;
