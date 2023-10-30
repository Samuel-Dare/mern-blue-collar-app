import React from 'react';

function AdvertStyle1ReusableComponent({ reverseOrder = false }) {
  return (
    <div
      className={`bg-colorGrey300 grid md:grid-cols-2 ${
        reverseOrder ? 'md:grid-flow-col' : ''
      }`}
    >
      <div className={reverseOrder ? 'order-2' : 'order-1'}>
        <img
          src="/assets/reliable-professionals.jpg"
          alt=""
          className={`rounded-md px-10 md:rounded-none md:px-0 ${
            reverseOrder ? 'md:ml-auto' : ''
          }`}
        />
      </div>

      <div
        className={`lg:p-30 p-16 md:p-24 ${
          reverseOrder ? 'order-1' : 'order-2'
        }`}
      >
        <h1 className="text-h1">
          Find Professionals in your Local Environment
        </h1>
        <h2 className="text-h2">
          Let us make life easier for you by connecting you with a team of local
          and verified professionals in your vicinity
        </h2>

        <ul>
          <li>
            &#10003; Choose your BCollar professionals by reviews, ratings,
            skills, and prices{' '}
          </li>

          <li>&#10003; Schedule tasks based on your timing </li>

          <li>
            &#10003; Save your favorites to rebook them over and over again
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AdvertStyle1ReusableComponent;
