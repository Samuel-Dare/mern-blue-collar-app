import React from 'react';

const CenteredMessage = ({ icon: Icon, title, message1, message2 }) => {
  return (
    <div className="ml-auto mr-auto flex min-h-[70vh] flex-col items-center justify-center space-y-3 px-4 md:px-8 lg:w-2/3 lg:px-16">
      <Icon className="mb-4 text-6xl text-colorBrand2 md:text-8xl" />
      <h1 className="mb-2 text-center text-xl font-bold text-colorGrey800 md:text-2xl lg:text-4xl">
        {title}
      </h1>
      <p className="text-center text-colorGrey600 ">{message1}</p>
      <p>{message2}</p>
    </div>
  );
};

export default CenteredMessage;
