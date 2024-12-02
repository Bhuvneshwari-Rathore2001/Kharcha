import { useState } from 'react';
import Calendar from 'react-calendar';

const ReactCalendar = () => {
  const [value, setValue] = useState(new Date());

  // Helper function to get a date adjusted by a number of months
  const getPreviousMonth = (date, months) => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() - months);
    return newDate;
  };

  return (
    <div className='grid grid-cols-2 gap-4 border p-5'>
      {/* Show the previous 3 months and the current month */}
      <Calendar
        onChange={setValue}
        value={getPreviousMonth(value, 3)}
        className=' rounded p-4 text-orange-900 custom-calendar'
      />
      <Calendar
        onChange={setValue}
        value={getPreviousMonth(value, 2)}
        className=' rounded p-4 custom-calendar'
      />
      <Calendar
        onChange={setValue}
        value={getPreviousMonth(value, 1)}
        className=' rounded p-4 custom-calendar'
      />
      <Calendar onChange={setValue} value={value} className=' rounded p-4' />
    </div>
  );
};

export default ReactCalendar;
