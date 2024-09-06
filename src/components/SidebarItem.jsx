import { Icon } from '@iconify/react/dist/iconify.js';
import { Link, useLocation } from 'react-router-dom';

const SidebarItem = ({ name, icon, path }) => {
  const location = useLocation();

  return (
    <Link
      to={path}
      className={`px-4 py-3 flex items-center gap-3 rounded-l-md cursor-pointer ${
        location.pathname === path ? 'bg-blue-600' : 'bg-transparent'
      }`}
    >
      <Icon icon={icon} style={{ color: 'white' }} className='size-5' />
      <div>{name}</div>
    </Link>
  );
};

export default SidebarItem;
