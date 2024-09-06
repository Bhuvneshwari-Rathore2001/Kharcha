import SidebarItem from './SidebarItem';

const Sidebar = () => {
  const items = [
    {
      id: 1,
      name: 'Insights',
      icon: 'solar:graph-broken',
      path: '/',
    },
    {
      id: 2,
      name: 'Transactions',
      icon: 'solar:graph-broken',
      path: '/transaction',
    },
    {
      id: 3,
      name: 'Subscriptions',
      icon: 'carbon:loop',
      path: '/subscription',
    },
    {
      id: 4,
      name: 'Calendar',
      icon: 'solar:calendar-add-broken',
      path: '/calendar',
    },
    {
      id: 5,
      name: 'Filters',
      icon: 'solar:filter-broken',
      path: '/filter',
    },
    {
      id: 6,
      name: 'Settings',
      icon: 'solar:settings-minimalistic-broken',
      path: '/settings',
    },
  ];

  return (
    <div className='bg-[rgba(0,0,0,1)] text-white py-10 h-screen'>
      <div className='flex flex-col gap-1 px-10'>
        <div>Kharcha</div>
        <div className='text-gray-400 text-sm font-medium'>
          Expense management made easy
        </div>
      </div>
      <div className='border-b-2 text-white my-6' />
      <div className='pl-10 flex flex-col gap-2'>
        {items.map((item) => (
          <SidebarItem
            name={item.name}
            icon={item.icon}
            key={item.id}
            path={item.path}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
