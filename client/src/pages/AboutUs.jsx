import React from 'react';
import Header2 from '../ui/Header2';
import { useScreenSize } from '../context/ScreenSize';
import Animation from '../utils/Animation';

function AboutUs() {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Founder',
      description: 'Lorem ipsum dolor sit amet.',
      imageUrl: 'assets/img.jpg',
    },
    {
      name: 'Jane Smith',
      role: 'Designer',
      description: 'Consectetur adipiscing elit.',
      imageUrl: 'assets/img.jpg',
    },
    {
      name: 'Bob Johnson',
      role: 'Developer',
      description: 'Praesent euismod tellus nec.',
      imageUrl: 'assets/img.jpg',
    },
  ];

  const { isSmallScreen } = useScreenSize();

  const bannerImage = isSmallScreen
    ? 'assets/about-us-400x250.png'
    : 'assets/about-us-1200x600.png';

  return (
    <div>
      <Header2 bannerImage={bannerImage} />

      <div className="container mx-auto mt-8 p-4">
        {/* <h1 className="mb-8 text-center text-3xl font-bold">About Us</h1> */}

        {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-2"> */}
        <div className="">
          {/* Company Overview */}
          <div>
            <Animation type="1">
              <h2 className="mb-5 text-xl font-bold text-colorBrand2 md:text-3xl">
                Who Are We?
              </h2>
              <p className="text-gray-700 mb-4">
                At Blue Kollars, we are more than just a service provider –
                we're your reliable partner in simplifying your everyday life.
                Founded on the principles of excellence, integrity, and
                innovation, we have been serving our community for [number of
                years] years, delivering outstanding solutions and building
                lasting relationships with our clients.
              </p>
              <p className="text-gray-700 mb-4">
                Our team consists of passionate individuals who are experts in
                their respective fields, ranging from home services and repairs
                to errand running and everything in between. With a keen focus
                on quality and customer satisfaction, we strive to exceed
                expectations with every project we undertake.
              </p>
              <p className="text-gray-700 mb-4">
                What sets us apart is our commitment to providing personalized
                experiences tailored to your unique needs. Whether you're a
                homeowner looking for reliable handymen, a business owner in
                need of efficient services, or someone seeking assistance with
                everyday tasks, we have you covered.
              </p>
              <p className="text-gray-700 mb-4">
                Beyond our services, we prioritize transparency, communication,
                and trust. We believe in fostering strong connections with our
                clients, listening to their needs, and offering solutions that
                address their concerns effectively. With us, you can rest
                assured that your satisfaction is our top priority.
              </p>
              <p className="text-gray-700 mb-4">
                As we continue to grow and evolve, our dedication to excellence
                remains unwavering. We constantly strive to improve our
                processes, expand our offerings, and adapt to the changing needs
                of our clients and the industry.
              </p>
              <p className="text-gray-700 mb-4">
                Thank you for considering Blue Kollars for your service needs.
                We look forward to the opportunity to serve you and demonstrate
                why we are the preferred choice for countless individuals and
                businesses in our community.
              </p>
            </Animation>

            {/* <Animation type="1">
              <img
                src="assets/777.png"
                alt=""
                // className="h-40 w-full rounded object-cover"
              />
            </Animation> */}
          </div>

          {/* Team Members */}
          {/* <div>
            <h2 className="mb-4 text-xl font-bold">Our Team</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {teamMembers.map((member, index) => (
                <div key={index} className="rounded border p-4">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="mb-4 h-40 w-full rounded object-cover"
                  />
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-700 mb-2">{member.role}</p>
                  <p className="text-gray-700">{member.description}</p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
