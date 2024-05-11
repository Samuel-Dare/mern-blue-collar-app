import React from 'react';
import Header2 from '../ui/Header2';
import { useScreenSize } from '../context/ScreenSize';
import Button from '../ui/Button';
import Animation from '../utils/Animation';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

const primaryFull =
  'inline-block text-sm bg-colorBrand1 font-semibold uppercase tracking-wide text-colorGrey50 transition-colors duration-300 hover:bg-colorBrand2 focus:bg-colorBrand2 focus:outline-none focus:ring focus:ring-colorBrand2 focus:ring-offset-2 disabled:cursor-not-allowed w-full rounded-none px-4 py-3 md:px-6 md:py-4 md:text-lg';

function ContactUs() {
  const { isSmallScreen } = useScreenSize();

  const bannerImage = isSmallScreen
    ? 'assets/contact-us-400x250.png'
    : 'assets/contact-us-1200x600.png';

  return (
    <div>
      <Header2 bannerImage={bannerImage} />

      <div className="container mx-auto mt-8 p-4">
        {/* <h1 className="mb-8 text-center text-3xl font-bold">Contact Us</h1> */}

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Contact Form */}
          <Animation type="2">
            {/* <form className="space-y-4">
              <div>
                <label
                  className="mb-2 block text-sm font-semibold"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded border p-2"
                  placeholder="Full Name"
                />
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-semibold"
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded border p-2"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-semibold"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full rounded border p-2"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <Button
                type="primary"
                className="bg-blue-500 text-white hover:bg-blue-600 rounded px-4 py-2"
              >
                Submit
              </Button>
            </form> */}

            <form
              action="https://formsubmit.io/send/probrandhandler@qualityservice.com"
              method="POST"
            >
              <div>
                <input
                  type="hidden"
                  name="_subject"
                  value="New Email Message from Probrandhandlers!"
                />
                <input
                  type="hidden"
                  name="_redirect"
                  value="https://sam-dare.netlify.app/thankyou.html"
                />

                <label
                  className="mb-2 block text-sm font-semibold"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="mb-2 w-full rounded border p-2"
                  placeholder="Full Name"
                  required
                />
                <label
                  className="mb-2 block text-sm font-semibold"
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full rounded border p-2"
                  required
                />
              </div>
              <label
                className="mb-2 mt-2 block text-sm font-semibold"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                rows="4"
                name="message"
                className="w-full rounded border p-2"
                placeholder="Type your message here..."
                required
              ></textarea>

              <input
                name="_formsubmit_id"
                type="text"
                style={{ display: 'none' }}
              />

              <input type="submit" value="Submit" className={primaryFull} />
            </form>
          </Animation>

          {/* Contact Information */}
          <Animation type="3">
            <h2 className="mb-4 text-xl font-bold">Our Contact Information</h2>
            <p className="text-gray-700 mb-2 flex gap-1">
              <i className="mt-1">
                <FaEnvelope />
              </i>
              <span className="font-semibold">Email:</span>{' '}
              <a href="mailto:probrandhandlers@qualityservice.com">
                probrandhandler@qualityservice.com
              </a>
            </p>
            <p className="text-gray-700 mb-2 flex gap-1">
              <i className="mt-1">
                <FaPhone />
              </i>
              <span className="font-semibold">Phone:</span>{' '}
              <a href="tel:+2348154005211">+2348154005211</a>
            </p>
            <p className="text-gray-700 mb-2 flex gap-1">
              <i className="mt-1">
                <FaWhatsapp />
              </i>
              <span className="font-semibold">WhatsApp:</span>{' '}
              {/* <a href="https://api.whatsapp.com/send?phone=15551234567"> */}
              <a href="https://wa.me/message/JISFLWSZK74GD1">+2348154005211</a>
            </p>
            {/* <p className="text-gray-700">
              <span className="font-semibold">Address:</span> 123 Jide Str,
              Lekki-Ajah, Lagos
            </p> */}
          </Animation>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
