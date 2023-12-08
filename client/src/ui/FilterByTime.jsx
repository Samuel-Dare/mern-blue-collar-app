import React, { useState } from 'react';
import Button from './Button';

const FilterByTime = () => {
  const [selectedTime, setSelectedTime] = useState({
    time1: '',
    time2: '',
  });

  const timeSlots = ['Choose Time'];
  const startTime = 6;
  const endTime = 22;

  for (let hour = startTime; hour <= endTime; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      // Convert to 12-hour format
      const isPM = hour > 11;
      const period = isPM ? 'PM' : 'AM';
      const eachHour = hour === 12 ? 12 : hour % 12;

      const formattedHour = eachHour < 10 ? `0${eachHour}` : eachHour;
      const formattedMinute = minute === 0 ? '00' : minute;

      if (hour === endTime && minute === 30) {
        continue;
      }

      const timeSlot = `${formattedHour}:${formattedMinute} ${period}`;
      timeSlots.push(timeSlot);
    }
  }

  const handleTimeChange = (e) => {
    setSelectedTime({ ...selectedTime, time1: e.target.value, time2: '' });
  };

  const handleMorning = () => {
    setSelectedTime({ ...selectedTime, time1: '06:00 AM', time2: '12:00 PM' });
  };

  const handleAfternoon = () => {
    setSelectedTime({ ...selectedTime, time1: '12:00 PM', time2: '05:00 PM' });
  };

  const handleEvening = () => {
    setSelectedTime({ ...selectedTime, time1: '05:00 PM', time2: '10:00 PM' });
  };

  return (
    <main className="space-y-5 py-5">
      <label>
        Time:
        <span className="text-lg font-bold">
          {selectedTime.time1 && selectedTime.time2
            ? ` Btw ${selectedTime.time1} and ${selectedTime.time2}`
            : selectedTime.time1 !== 'Choose Time' && ' ' + selectedTime.time1}
        </span>
      </label>
      <div className="grid grid-cols-2 gap-3 ">
        <Button type="secondary" onClick={handleMorning}>
          Morning
          <span className="text-sm">(6am-12pm)</span>
        </Button>
        <Button type="secondary" onClick={handleAfternoon}>
          Afternoon
          <span className="text-sm">(12pm-5pm)</span>
        </Button>
        <Button type="secondary" onClick={handleEvening}>
          Evening
          <span className="text-sm">(5pm-10pm)</span>
        </Button>

        <select
          value={selectedTime.time1}
          onChange={handleTimeChange}
          className="h-16 rounded-full border-2 border-colorGrey400 p-5 text-lg font-semibold uppercase hover:bg-colorGrey200  focus:outline-none "
        >
          {timeSlots.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
    </main>
  );
};

export default FilterByTime;
