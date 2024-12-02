import CardInsight from '../components/CardInsight';
import BarChart from '../components/charts/BarChart';
import PieChart from '../components/charts/PieChart';

const Insight = () => {
  const cardItems = [
    {
      id: 1,
      icon: 'mdi:cash-plus',
      name: 'Total Earnings',
      value: 40,
    },
    {
      id: 2,
      icon: 'mdi:cash-minus',
      name: 'Total Spending',
      value: 23,
    },
    {
      id: 3,
      icon: 'solar:card-2-broken',
      name: 'Total Amount',
      value: 2342,
    },
    {
      id: 4,
      icon: 'solar:devices-broken',
      name: 'Total Devices',
      value: 4,
    },
  ];

  return (
    <div className='px-10 text-white pt-5 pb-10 overflow-y-auto'>
      <div className='flex flex-col gap-1'>
        <div>Summary Insights</div>
        <div className='text-gray-400 text-sm font-medium'>
          View all insights of all the transactions here
        </div>
      </div>
      <div className='my-5 gap-6 flex w-full'>
        {cardItems.map((card) => (
          <CardInsight
            key={card.id}
            name={card.name}
            icon={card.icon}
            value={card.value}
          />
        ))}
      </div>
      <div className='flex flex-col gap-1'>
        <div>Summary Charts</div>
        <div className='text-gray-400 text-sm font-medium'>
          View all insights charts here for all transactions
        </div>
      </div>
      <div className='flex gap-3 mt-5 h-96 '>
        {/* bar chart box */}
        <div className='py-5 px-8 flex flex-col gap-4 w-3/5 bg-[rgba(0,0,0,0.25)] rounded-lg justify-center h-full'>
          <div className='flex flex-col gap-1'>
            <div className='text-sm'>Weekly Transactions</div>
            <div className='text-gray-400 text-xs font-medium'>
              View all weekly spends at a glance here
            </div>
          </div>
          <BarChart className='w-full' />
        </div>

        {/* pie chart box */}
        <div className='py-5 px-8 flex flex-col gap-4 w-2/5 bg-[rgba(0,0,0,0.25)] rounded-lg justify-center h-full'>
          <div className='flex flex-col gap-1'>
            <div className='text-sm'>Weekly Transactions</div>
            <div className='text-gray-400 text-xs font-medium'>
              View all weekly spends at a glance here
            </div>
          </div>
          <div className='flex-1'>
            <PieChart className='w-full h-full' />
          </div>
        </div>
      </div>

      <div className='flex gap-3 mt-5'></div>
    </div>
  );
};

export default Insight;
