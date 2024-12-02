const Profile = () => {
  return (
    <div className='px-10 text-white pt-5 pb-10 overflow-y-auto'>
      <div className='flex flex-col gap-1'>
        <div>User Profile</div>
        <div className='text-gray-400 text-sm font-medium'>
          View and change profile settings from here
        </div>
      </div>
      <div className='my-5'>
        <form className='flex gap-4'>
          <div className='flex flex-col gap-1 w-full'>
            <label>Full Name</label>
            <input placeholder='Enter full name' className='py-1 px-2' />
          </div>
          <div className='flex flex-col gap-1 w-full'>
            <label>Phone</label>
            <input placeholder='Enter phone' className='py-1 px-2' />
          </div>
          <div className='flex flex-col gap-1 w-full'>
            <label>Email</label>
            <input placeholder='Enter email' className='py-1 px-2' />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;