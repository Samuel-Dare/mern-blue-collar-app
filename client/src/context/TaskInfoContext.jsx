import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchContext } from './SearchContext';

const TaskInfoContext = createContext();

const TaskInfoProvider = ({ children }) => {
  const [taskInfo, setTaskInfo] = useState({
    selectedService: 'Available Services',
    sortBy: 'recommended',
    filterBy: 'service',
    location: '',
    estimatedTime: '',
    description: '',
    date: '',
    time: '',
    priceRange: '',
  });

  const navigate = useNavigate();

  const handleTaskInfo = (location, estimatedTime, description, navigateTo) => {
    setTaskInfo({ ...taskInfo, location, estimatedTime, description });

    if (navigateTo) {
      navigate(navigateTo);
    }
  };

  console.log(taskInfo);

  return (
    <TaskInfoContext.Provider
      value={{ taskInfo, setTaskInfo, onTaskInfo: handleTaskInfo }}
    >
      {children}
    </TaskInfoContext.Provider>
  );
};

const useTaskInfoContext = () => {
  const context = useContext(TaskInfoContext);
  if (context === undefined)
    throw new Error(
      'The TaskInfoContext was used outside of the TaskInfoProvider',
    );
  return context;
};

export { TaskInfoProvider, useTaskInfoContext };
