import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";

const ProfileCard = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/profile');
  };

  return (
    <button
      onClick={handleClick}
      className='flex border border-gray-700 rounded items-center w-1/3 cursor-pointer'
    >
      <div className='border border-r-gray-700 border-t-transparent border-l-transparent border-b-transparent h-full flex items-center justify-center'>
        <Icon
          icon='ant-design:profile-filled'
          style={{ color: 'white' }}
          className='size-6 mx-4 my-2'
        />
      </div>
      <div className='flex flex-col py-2 px-4 items-start'>
        <div className='font-semibold'>User Profile</div>
        <div className='text-xs text-gray-300'>
          Manage and edit personal information here
        </div>
      </div>
    </button>
  );
};

export default ProfileCard;
