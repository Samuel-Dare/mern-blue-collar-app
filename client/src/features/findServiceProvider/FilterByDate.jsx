import { useEffect, useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

import Button from '../../ui/Button';
import './filterByDate.css';
import { formatDate } from '../../utils/helpers';
import { useTaskInfoContext } from '../../context/TaskInfoContext';

const FilterByDate = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState('');
  const [activeButton, setActiveButton] = useState(null);
  const { setTaskInfo } = useTaskInfoContext();
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  console.log('act', activeButton);

  const handleDateChange = (date) => {
    setSelectedDate(formatDate(date));
  };

  const handleToday = () => {
    setSelectedDate(formatDate(today));
    setActiveButton('today');
  };

  const handleTomorrow = () => {
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    setSelectedDate(formatDate(tomorrow));
    setActiveButton('tomorrow');
  };

  const handleThisSaturday = () => {
    const dayOfWeek = today.getDay();
    const daysUntilSaturday = 6 - dayOfWeek;

    const thisSaturday = new Date();
    thisSaturday.setDate(today.getDate() + daysUntilSaturday);
    setSelectedDate(formatDate(thisSaturday));
    setActiveButton('thisSaturday');
  };

  const handleChooseDate = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
    setActiveButton('chooseDate');
  };

  useEffect(() => {
    setTaskInfo((prevTaskInfo) => ({ ...prevTaskInfo, date: selectedDate }));
  }, [selectedDate, setTaskInfo]);

  return (
    <main className="space-y-5 py-5">
      <label>
        Date:
        <span className="text-lg font-bold">{' ' + selectedDate}</span>
      </label>

      <div className="space-y-2">
        {/* <label className="block text-lg">One Day</label> */}
        <div className="grid grid-cols-2 gap-3 px-3">
          {/* <li
            className={`mb-2 ${
              activeButton === 'today' ? 'bg-colorBrand100' : ''
            }`}
          > */}
          <Button
            type="secondary"
            onClick={handleToday}
            isActive={activeButton === 'today'}
          >
            Today
          </Button>
          {/* </li> */}
          <Button
            type="secondary"
            isActive={activeButton === 'tomorrow'}
            onClick={handleTomorrow}
          >
            {' '}
            Tomorrow
          </Button>
          <Button
            type="secondary"
            onClick={handleThisSaturday}
            isActive={activeButton === 'thisSaturday'}
          >
            {' '}
            This Saturday
          </Button>
          <Button
            type="secondary"
            onClick={handleChooseDate}
            isActive={activeButton === 'chooseDate'}
          >
            {' '}
            Choose Date
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        {isDatePickerOpen && (
          <DatePicker
            className="customDatePicker w-3/4"
            onChange={handleDateChange}
            value={selectedDate}
            dayPlaceholder="dd"
            monthPlaceholder="mm"
            yearPlaceholder="yyyy"
            minDate={new Date()}
            format="d/M/y"
            isOpen={isDatePickerOpen}
            onClickOutside={() => setIsDatePickerOpen(false)}
          />
        )}

        {/* <label className="block text-lg">Extended days</label>
        <div className="space-y-2 px-3">
          <div>
            <label htmlFor="" className="text-md block">
              from:{' '}
            </label>
            <DatePicker
              className="customDatePicker w-3/4 "
              onChange={handleDateChange}
              value={selectedDate}
              dayPlaceholder="dd"
              monthPlaceholder="mm"
              yearPlaceholder="yyyy"
              minDate={new Date()}
              format="d/M/y"
            />
          </div>
          <div>
            <label htmlFor="" className="text-md block">
              to:{' '}
            </label>
            <DatePicker
              className="customDatePicker w-3/4"
              onChange={handleDateChange}
              value={selectedDate}
              dayPlaceholder="dd"
              monthPlaceholder="mm"
              yearPlaceholder="yyyy"
              minDate={new Date()}
              format="d/M/y"
            />
          </div>
        </div> */}
      </div>
    </main>
  );
};

export default FilterByDate;
