import React from 'react';
import OnDemandServices from '../ui/onDemandServices';
import Header from '../ui/Header';
import HighRatedBCollarsProfileReview from '../ui/HighRatedBCollarsProfileReview';
import Reviews from '../ui/Reviews';
import ReadyToGetStarted from '../ui/ReadyToGetStarted';
import WhatWeDo from '../ui/WhatWeDo';
import Advert1 from '../ui/Advert1';
import Advert2 from '../ui/Advert2';

export default function Home() {
  return (
    <div>
      <Header />
      <OnDemandServices />
      <Advert1 />
      <HighRatedBCollarsProfileReview />
      <Advert2 />
      <WhatWeDo />
      <Reviews />
      <ReadyToGetStarted />
    </div>
  );
}
