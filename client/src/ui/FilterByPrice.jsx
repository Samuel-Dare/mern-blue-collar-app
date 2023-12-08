import React, { useState } from 'react';
import Slider from 'react-slider';

import './filterByPriceRange.css';

const FilterByPrice = () => {
  const [priceRange, setPriceRange] = useState([1000, 10000]);

  const renderCustomTrack = (props, state) => {
    const startValue = state.value[0];
    const endValue = state.value[1];

    return (
      <div
        {...props}
        style={{
          background: `linear-gradient(to right, var(--color-grey-100) ${startValue}%, var(--color-grey-100) ${startValue}%, var(--color-brand-300) ${startValue}%, var(--color-brand-300) ${endValue}%, var(--color-grey-100) ${endValue}%, var(--color-grey-100) 100%)`,
        }}
      />
    );
  };

  const handlePriceRangeChange = (price1, price2) => {
    setPriceRange([price1, price2]);
  };

  return (
    <main className="space-y-5 py-5">
      <label htmlFor="priceRange" className="block font-medium">
        Price:{' '}
        <span htmlFor="priceRange" className="text-lg font-bold">
          Btw {priceRange[0]} and {priceRange[1]} (NGN)
        </span>
      </label>
      <div className="relative mt-5 rounded-md shadow-sm ">
        <Slider
          min={1000}
          max={10000}
          trackClassName="slider-track"
          thumbClassName="slider-thumb"
          thumbActiveClassName="slider-thumbActive"
          value={priceRange}
          onChange={(value) => handlePriceRangeChange(value[0], value[1])}
          ariaLabel={['Lower thumb', 'Upper thumb']}
          ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          renderTrack={renderCustomTrack}
          pearling
          minDistance={20}
        />
      </div>
    </main>
  );
};

export default FilterByPrice;
