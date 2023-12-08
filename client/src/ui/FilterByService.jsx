import { useSearchContext } from '../context/SearchContext';
import { useTaskInfoContext } from '../context/TaskInfoContext';
import { AvailableServices } from '../config/config';

const FilterByService = () => {
  const { searchValue } = useSearchContext();
  const { taskInfo, setTaskInfo } = useTaskInfoContext();
  const selectedService = taskInfo.selectedService;

  const handleChange = (e) => {
    setTaskInfo({ ...taskInfo, selectedService: e.target.value });
  };

  return (
    <main className="py-5">
      <div className="mt-4">
        <label className="text-gray-700 block font-medium">
          Service:
          <span className="text-lg font-bold">{' ' + selectedService}</span>
        </label>
        <select
          className="border-gray-300 mt-2 w-full rounded-lg border p-2"
          value={searchValue ? searchValue : selectedService}
          onChange={handleChange}
        >
          <option value="Available Services">{selectedService}</option>
          {AvailableServices.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      {/* FILTER BY RATING AND AVAILABILITY */}

      {/* // Handle rating selection
  // const handleRatingChange = (e) => {
  //   const rating = parseInt(e.target.value);
  //   if (selectedRatings.includes(rating)) {
  //     setSelectedRatings(selectedRatings.filter((r) => r !== rating));
  //   } else {
  //     setSelectedRatings([...selectedRatings, rating]);
  //   }
  // };

  // Handle availability selection
  // const handleAvailabilityChange = (e) => {
  //   const value = e.target.value;
  //   if (selectedAvailability.includes(value)) {
  //     setSelectedAvailability(selectedAvailability.filter((v) => v !== value));
  //   } else {
  //     setSelectedAvailability([...selectedAvailability, value]);
  //   }
        // }; */}

      {/* <div className="mt-4">
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
      </div> */}
      {/* <div className="mt-4">
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
      </div> */}
    </main>
  );
};

export default FilterByService;
