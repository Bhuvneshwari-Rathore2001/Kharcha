import ReactTableWithPagination from '../components/ReactTable';

const Transaction = () => {
  return (
    <div className='px-10 text-white pt-5 pb-10 z-10 overflow-y-auto'>
      <div className='flex flex-col gap-1'>
        <div>Summary Insights</div>
        <div className='text-gray-400 text-sm font-medium'>
          View all insights of all the transactions here
        </div>
      </div>
      <div className='my-5'>
        <ReactTableWithPagination />
      </div>
    </div>
  );
};

export default Transaction;
