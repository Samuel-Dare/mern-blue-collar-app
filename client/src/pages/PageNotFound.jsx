import { FaExclamationCircle } from 'react-icons/fa';

const PageNotFound = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 md:px-8 lg:px-16">
      <FaExclamationCircle className="mb-4 text-6xl text-colorBrand2 md:text-8xl" />
      <h1 className="mb-2 text-center text-xl font-bold text-colorGrey800 md:text-2xl lg:text-4xl">
        Page Not Found
      </h1>
      <p className="text-center text-base text-colorGrey600 md:text-lg lg:text-xl">
        The page you're looking for does not exist.{' '}
      </p>
    </div>
  );
};

export default PageNotFound;
