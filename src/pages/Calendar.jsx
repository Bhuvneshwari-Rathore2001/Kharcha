import ReactCalendar from "../components/calendar/ReactCalendar";

const Calendar = () => {
  return (
    <div className='px-10 text-white pt-5 pb-10 overflow-y-auto'>
      <div className='flex flex-col gap-1'>
        <div>Calendar</div>
        <div className='text-gray-400 text-sm font-medium'>
          View all your earnings and spending at a glance here
        </div>
      </div>
      <div className='my-5'>
        <ReactCalendar />
      </div>
    </div>
  );
};

export default Calendar;
