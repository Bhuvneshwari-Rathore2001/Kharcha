import Header from '../dashboard/Header';
import Main from '../dashboard/Main';
import Sidebar from '../dashboard/Sidebar';

const DashboardLayout = () => {
  return (
    <div className='flex h-screen'>
      <Sidebar />
      <div className='flex flex-col flex-1 bg-[rgba(0,0,0,0.9)] h-full'>
        <Header />
        <Main className='overflow-y-hidden'/>
      </div>
    </div>
  );
};

export default DashboardLayout;
