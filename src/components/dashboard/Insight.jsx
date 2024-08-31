import BarChart from '../charts/barChart/barChart';
import CardInsight from './CardInsight';

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
    <div className=''>
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
      <div className='flex gap-3 mt-5'>
        {/* bar chart box */}
        <div className='py-5 px-8 flex flex-col gap-2 w-3/5 bg-[rgba(0,0,0,0.25)] rounded-lg'>
          <div className='flex flex-col gap-1'>
            <div className='text-sm'>Weekly Transactions</div>
            <div className='text-gray-400 text-xs font-medium'>
              View all weekly spends at a glance here
            </div>
          </div>
          <BarChart className='w-full z-50' />
        </div>

        {/* pie chart box */}
        <div className='bg-gray-900'>
          hiiiii jijijijijjijijijijijijijijijijii
        </div>
      </div>
    </div>
  );
};

export default Insight;
