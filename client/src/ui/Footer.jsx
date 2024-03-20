import { FaAngleUp, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="mt-10 flex flex-col gap-3 bg-colorBrand800 p-10 text-colorGrey300 md:flex-row md:justify-between md:p-16 lg:p-20">
      <div>
        <h3 className="">Follow us on social media</h3>
        <br />
        <ul className="flex gap-5">
          <a href="https://www.facebook.com/probrandhandlers">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/probrandhandler">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/probrandhandler?igsh=MWgxM3VmeTJsOXE4cQ==">
            <FaInstagram />
          </a>
        </ul>
      </div>

      <div>
        <h3 className="font-bold">Our Services</h3>
        <ul>
          <li>Branding Solutions</li>
          <li>Marketing Solutions</li>
        </ul>
        <br />
        <h3 className="font-bold">Other Services</h3>
        <ul>
          <li>Website Design</li>
          <li>Content Creation</li>
          <li>Social Media Management</li>
          <li>Business Expansion</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold">Do More</h3>{' '}
        <ul>
          <li>Become a BCollar</li>
          <li>Find A BCollar</li> <li>Sign up</li>
          <li>Log in</li>
        </ul>{' '}
      </div>

      <div>
        <h3 className="font-bold">Company</h3>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Press</li>
          <li>Blog</li>
          <li>Terms and Privacy</li>
        </ul>
      </div>

      <div
        className="h-full cursor-pointer rounded-full border-2 border-colorBrand400"
        onClick={handleScrollToTop}
      >
        <FaAngleUp className="text-2xl md:text-5xl" />
      </div>
    </footer>
  );
}

export default Footer;
