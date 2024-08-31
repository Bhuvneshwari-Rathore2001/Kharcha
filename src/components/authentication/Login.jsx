const Login = () => {
  // const navigate = useNavigate()

  // const handlePasswordNavigate =()=> {
  //   navigate("/reset")
  // }

  return (
    <div className='bg-white rounded p-8 w-[30%]'>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-1'>
          <div className='font-bold text-blue-600 text-xl'>Kharcha</div>
          <div className='text-xs text-gray-700 font-semibold'>
            Welcome back, Login here to get started
          </div>
        </div>
        <form className='flex flex-col gap-5'>
          <div className='flex flex-col gap-2'>
            <div className='font-bold text-gray-700 text-sm'>Email Address</div>
            <input
              className='border border-blue-600 p-3 text-gray-800  text-sm rounded'
              placeholder='Enter your email'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center justify-between'>
              <div className='font-bold text-gray-700 text-sm'>Password</div>
              <button
                // onClick={handlePasswordNavigate}
                className='font-bold text-blue-900 text-sm'
              >
                Forget Password?
              </button>
            </div>
            <input
              className='border border-blue-600 p-3 text-gray-800  text-sm rounded'
              placeholder='Enter password'
            />
          </div>

          <button className=' bg-blue-600 p-3 text-white text-sm rounded'>
            Login
          </button>
        </form>
      </div>
      <div className='font-bold text-blue-600 text-sm text-center mt-2'>
        `&Dont` have an account? Register here
      </div>
    </div>
  );
};

export default Login;
