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
    ? 'assets/about-us-mobile.png'
    : 'assets/about-us.png';

  return (
    <div>
      <Header2 bannerImage={bannerImage} title="About Us" />

      <div className="container mx-auto mt-8 p-4">
        {/* <h1 className="mb-8 text-center text-3xl font-bold">About Us</h1> */}

        {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-2"> */}
        <div className="">
          {/* Company Overview */}
          <div>
            <Animation type="1">
              <h2 className="text-colorBrand2 mb-5 text-xl font-bold md:text-3xl">
                Who Are We?
              </h2>
              <p className="text-gray-700 mb-4">
                At Probrand Handlers, we believe that every small and
                medium-sized business (SME) possesses the potential for success.
                Since our establishment in 2018, initially as a digital
                marketing company, we've gained valuable insights into what is
                practical and effective. Our clients have consistently expressed
                satisfaction with our services. As a company that has expanded
                to offer branding solutions, our passion remains dedicated to
                assisting SMEs in establishing robust brands and fostering
                meaningful and profitable connections with their target
                audience.
              </p>
            </Animation>

            <Animation type="1">
              <img
                src="assets/777.png"
                alt=""
                // className="h-40 w-full rounded object-cover"
              />
            </Animation>
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
