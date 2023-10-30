import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-colorGrey500 text-colorGrey300 mt-10 flex flex-col gap-3 p-10 md:flex-row md:justify-between md:p-16 lg:p-20">
      <div>
        <h3 className="text-h3">Follow us on social media</h3>
        <ul className="flex gap-5">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </ul>
      </div>

      <div>
        <h3 className="text-h3">Discover</h3>
        <ul>
          <li>Become a BCollar</li>
          <li>Sign up/ Log in</li>
          <li>Our Services</li>
          <li>Find a BCollar</li>
        </ul>
      </div>

      <div>
        <h3 className="text-h3">Company</h3>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Press</li>
          <li>Blog</li>
          <li>Terms and Privacy</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
