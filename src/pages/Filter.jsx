import ReactTableWithPagination from "../components/ReactTable";

const Filter = () => {
  return (
    <div className='px-10 text-white pt-5 pb-10 overflow-y-auto'>
      <div className='flex flex-col gap-1'>
        <div>Filters</div>
        <div className='text-gray-400 text-sm font-medium'>
          View and manage all your filters here
        </div>
      </div>
      <div className='my-5'>
        <ReactTableWithPagination />
      </div>
    </div>
  );
};

export default Filter;
