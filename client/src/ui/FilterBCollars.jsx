import { useState } from 'react';

const categories = [1, 2, 3, 4, 5];
const ratings = [1, 2, 3, 4, 5];
const availability = [1, 2, 3, 4, 5];

const FilterBCollars = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedAvailability, setSelectedAvailability] = useState([]);

  // Handle category selection
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Handle rating selection
  const handleRatingChange = (e) => {
    const rating = parseInt(e.target.value);
    if (selectedRatings.includes(rating)) {
      setSelectedRatings(selectedRatings.filter((r) => r !== rating));
    } else {
      setSelectedRatings([...selectedRatings, rating]);
    }
  };

  // Handle availability selection
  const handleAvailabilityChange = (e) => {
    const value = e.target.value;
    if (selectedAvailability.includes(value)) {
      setSelectedAvailability(selectedAvailability.filter((v) => v !== value));
    } else {
      setSelectedAvailability([...selectedAvailability, value]);
    }
  };

  return (
    <>
      <h2 className="text-lg font-semibold">Service Filters</h2>
      <div className="mt-4">
        <label className="text-gray-700 block font-medium">
          Service Category:
        </label>
        <select
          className="border-gray-300 mt-2 w-full rounded border p-2"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="All">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-4">
        <label className="text-gray-700 block font-medium">Ratings:</label>
        {ratings.map((rating) => (
          <label key={rating} className="mt-2 flex items-center">
            <input
              type="checkbox"
              value={rating}
              checked={selectedRatings.includes(rating)}
              onChange={handleRatingChange}
            />
            <span className="ml-2">{rating} stars and up</span>
          </label>
        ))}
      </div>
      <div className="mt-4">
        <label className="text-gray-700 block font-medium">Availability:</label>
        {availability.map((option) => (
          <label key={option} className="mt-2 flex items-center">
            <input
              type="checkbox"
              value={option}
              checked={selectedAvailability.includes(option)}
              onChange={handleAvailabilityChange}
            />
            <span className="ml-2">{option}</span>
          </label>
        ))}
      </div>
    </>
  );
};

export default FilterBCollars;
