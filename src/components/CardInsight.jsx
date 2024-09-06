import { Icon } from '@iconify/react/dist/iconify.js';

const CardInsight = ({ icon, name, value }) => {
  return (
    <div className='flex border border-gray-700 rounded w-full items-center'>
      <div className='border border-r-gray-700 border-t-transparent border-l-transparent border-b-transparent h-full flex items-center justify-center'>
        <Icon
          icon={icon}
          style={{ color: 'white' }}
          className='size-6 mx-4 my-2'
        />
      </div>
      <div className='flex flex-col py-2 px-4'>
        <div className='font-semibold'>{name}</div>
        <div>{value}</div>
      </div>
    </div>
  );
};

export default CardInsight;
