const Header = () => {
  return (
    <div className=' text-white'>
      <div className='px-10 pt-10 pb-5 flex items-center justify-between'>
        <div className='flex flex-col gap-1 justify-center'>
          <div>Insights</div>
          <div className='text-gray-400 text-sm font-medium'>
            Check all the transactional Insights here
          </div>
        </div>
        <div className='flex gap-4 items-center justify-center'>
          <div className='bg-blue-600 rounded px-3 py-1'>Add Transaction</div>
          <div className='flex items-center justify-center gap-3'>
            <img
              src='https://media.istockphoto.com/id/1477871401/photo/portrait-of-happy-young-businesswoman-arms-crossed-with-looking-at-camera-on-white-background.jpg?s=1024x1024&w=is&k=20&c=DHbWtsuz_HqLj0YIqKsf6jp53j7ScbnrvgVoMiPknS8='
              alt='user'
              className='size-10 rounded-full object-cover border-2 border-white'
            />
            <div className='flex flex-col justify-center'>
              <div className='text-sm font-bold'>John Doe</div>
              <div className='text-gray-400 text-xs font-medium'>
                Sr. Software Engineer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
