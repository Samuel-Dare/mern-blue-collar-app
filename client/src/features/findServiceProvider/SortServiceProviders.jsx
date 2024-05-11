import React from 'react';
import { useTaskInfoContext } from '../../context/TaskInfoContext';

function SortServiceProviders() {
  // const [sortBy, setSortBy] = useState('');

  const { taskInfo, setTaskInfo } = useTaskInfoContext();
  const sortBy = taskInfo.sortBy;

  const handleSortBy = (e) => {
    setTaskInfo({ ...taskInfo, sortBy: e.target.value });
  };

  return (
    <div className="flex items-center justify-end gap-5">
      <p>Sorted By:</p>
      <select
        value={sortBy}
        onChange={handleSortBy}
        className="h-16 flex-1 rounded-full border-2 px-5 md:w-96 md:flex-none"
      >
        <option value="recommended">Recommended</option>
        <option value="lowToHighPrice">Price(lowest to highest)</option>
        <option value="highToLowPrice">Price(highest to lowest)</option>
        <option value="ratingsAvg">Ratings Average</option>
        <option value="ratingsQty">Ratings Quantity</option>
        <option value="completedTask">Total Completed Task</option>
      </select>
    </div>
  );
}

export default SortServiceProviders;
