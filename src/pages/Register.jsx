const Register = () => {
  return (
    <div className='bg-white rounded p-8 w-[30%]'>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-1'>
          <div className='font-bold text-blue-600 text-xl'>Kharcha</div>
          <div className='text-xs text-gray-700 font-semibold'>
            Get started by creating an account today!
          </div>
        </div>
        <form className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <div className='font-bold text-gray-700 text-sm'>Full Name</div>
            <input
              className='border border-blue-600 p-3 text-gray-800  text-sm rounded'
              placeholder='Enter your full name'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <div className='font-bold text-gray-700 text-sm'>Email Address</div>
            <input
              className='border border-blue-600 p-3 text-gray-800  text-sm rounded'
              placeholder='Enter your email'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <div className='font-bold text-gray-700 text-sm'>Password</div>
            <input
              className='border border-blue-600 p-3 text-gray-800  text-sm rounded'
              placeholder='Enter password'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <div className='font-bold text-gray-700 text-sm'>
              Confirm Password
            </div>
            <input
              className='border border-blue-600 p-3 text-gray-800  text-sm rounded'
              placeholder='Confirm your password'
            />
          </div>
          <button className=' bg-blue-600 p-3 text-white text-sm rounded'>
            Register
          </button>
        </form>
      </div>
      <div className='font-bold text-blue-600 text-sm text-center mt-2'>
        Already have an account? Login here
      </div>
    </div>
  );
};

export default Register;
