import { FaFacebook, FaInstagram, FaTwitter, FaAngleUp } from 'react-icons/fa';

function DashboardFooter() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="m-5 text-colorBrand2 md:m-16 md:mt-20">
      {/* <div className="flex items-center justify-between ">
        <ul className="flex gap-5 text-xl md:text-3xl">
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
        </ul> */}

      <div
        className="fixed bottom-7 right-10 cursor-pointer rounded-full border-2"
        onClick={handleScrollToTop}
      >
        <FaAngleUp className="text-2xl md:text-4xl" />
      </div>
      {/* </div>
      <div className="my-7 w-full border-t-2"></div>
      <p className="text-center md:text-xl">
        &copy; {new Date().getFullYear()} Blue Kollars. All rights reserved
      </p> */}
    </footer>
  );
}

export default DashboardFooter;
