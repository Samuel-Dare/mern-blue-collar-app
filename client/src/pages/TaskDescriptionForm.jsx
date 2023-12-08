import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
import { fetchAddress } from '../utils/helpers';
import { useProgressBar } from '../context/ProgressBarContext';
import { useNavigate } from 'react-router-dom';
import { useSearchContext } from '../context/SearchContext';
import { useTaskInfoContext } from '../context/TaskInfoContext';

const TaskDescriptionForm = () => {
  const [taskDescription, setTaskDescription] = useState('');
  const [location, setLocation] = useState('');
  const [estimatedTime, setEstimatedTime] = useState(1);

  const { handleNext, handleBack } = useProgressBar();
  const navigate = useNavigate();
  const { searchValue } = useSearchContext();
  const { onTaskInfo } = useTaskInfoContext();

  useEffect(() => {
    // Call fetchAddress to get the user's address
    fetchAddress()
      .then((result) => {
        if (result) {
          setLocation(result.address); // Set the location input value with the fetched address
        }
      })
      .catch((error) => {
        console.error('Error fetching address:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskInfo(location, estimatedTime, taskDescription);

    handleNext();
    navigate('/find-a-professional');
  };

  return (
    <div className="flex justify-center">
      <div className="m-10 w-full md:m-0 md:w-[500px]">
        <h2 className="text-2xl">
          I'm in need of some {searchValue} Service(s)
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="location"
              className="text-gray-700 block text-sm font-medium"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              className="border-gray-300 focus:border-blue-300 w-full rounded border p-2 focus:outline-none focus:ring"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="estimatedTime"
              className="text-gray-700 block text-sm font-medium"
            >
              Estimated Time (in hours)
            </label>
            <input
              type="number"
              id="estimatedTime"
              className="border-gray-300 focus:border-blue-300 w-full rounded border p-2 focus:outline-none focus:ring"
              value={estimatedTime}
              onChange={(e) => setEstimatedTime(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="taskDescription"
              className="text-gray-700 block text-sm font-medium"
            >
              Task Description
            </label>
            <textarea
              id="taskDescription"
              rows="4"
              className="border-gray-300 focus:border-blue-300 w-full rounded border p-2 focus:outline-none focus:ring"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <Button type="primaryFull">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default TaskDescriptionForm;
