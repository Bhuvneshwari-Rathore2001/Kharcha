import { Icon } from "@iconify/react/dist/iconify.js";

const SidebarItem = ({name,icon}) => {
  return (
    
      <div className='bg-blue-600 px-4 py-3 flex items-center gap-3 rounded-l-md'>
        <Icon icon={icon} style={{ color: 'white' }} className="size-5"/>
        <div>{name}</div>
      </div>
    
  );
}

export default SidebarItem