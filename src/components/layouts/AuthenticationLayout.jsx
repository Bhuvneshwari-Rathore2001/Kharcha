import Login from '../authentication/Login';
import Register from '../authentication/Register';
import Reset from '../authentication/Reset';

const AuthenticatonLayout = () => {
  return (
    <div className='bg-blue-700 h-screen w-scree flex items-center justify-center'>
      {/* <Login /> */}
      {/* <Reset/> */}
      <Register/>
    </div>
  );
};

export default AuthenticatonLayout;
