import React from 'react';
import OnDemandServices from '../features/home/OnDemandServices';
import Header from '../ui/Header';
import HighRatedServiceProvidersProfileReview from '../features/findServiceProvider/HighRatedServiceProvidersProfileReview';
import Reviews from '../features/home/Reviews';
import ReadyToGetStarted from '../features/home/ReadyToGetStarted';
import WhatWeDo from '../features/home/WhyChooseUs';
import Advert1 from '../features/home/Advert1';
import Advert2 from '../features/home/Advert2';

export default function Home() {
  return (
    <div>
      <Header />
      <OnDemandServices />
      <Advert1 />
      <HighRatedServiceProvidersProfileReview />
      <Advert2 />
      <WhatWeDo />
      <Reviews />
      <ReadyToGetStarted />
    </div>
  );
}
