import ProfileCard from "../components/ProfileCard";


const Settings = () => {
  return (
    <div className='px-10 text-white pt-5 pb-10 overflow-y-auto'>
      <div className='flex flex-col gap-1'>
        <div>Settings</div>
        <div className='text-gray-400 text-sm font-medium'>
          View and manage all your settings here
        </div>
      </div>
      <div className='my-5'>
        <ProfileCard/>
      </div>
    </div>
  );
};

export default Settings;
