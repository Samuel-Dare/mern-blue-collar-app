import { FaAngleUp, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { Link } from 'react-router-dom';

function Footer() {
  const scrollToTop = useScrollToTop();

  return (
    <footer className="relative z-50 mt-10 flex flex-col gap-3 space-y-3 bg-colorBrand800 p-10 text-colorGrey300 md:flex-row md:justify-between md:p-16 lg:p-20">
      <div className="space-y-4">
        <h3 className="">Follow us on social media</h3>
        <ul className="flex gap-7">
          <Link to="#">
            <FaFacebook />
          </Link>
          <Link to="#">
            <FaTwitter />
          </Link>
          <Link to="#">
            <FaInstagram />
          </Link>
        </ul>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-bold">Our Services</h3>
          <ul>
            <li>Branding Solutions</li>
            <li>Marketing Solutions</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Other Services</h3>
          <ul>
            <li>Website Design</li>
            <li>Content Creation</li>
            <li>Social Media Management</li>
            <li>Business Expansion</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="font-bold">Do More</h3>{' '}
        <ul>
          <li>Become a Blue Kollar</li>
          <li>Find A Blue Kollar</li> <li>Sign up</li>
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

      <div className="absolute right-5 top-5 h-fit cursor-pointer rounded-full border-2 border-colorBrand400 p-2 hover:text-colorGrey0 md:static md:p-4">
        <Link onClick={scrollToTop}>
          <FaAngleUp className="text-5xl" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
