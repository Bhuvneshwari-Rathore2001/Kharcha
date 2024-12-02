import { Icon } from '@iconify/react/dist/iconify.js';
import { useMemo } from 'react';
import { usePagination, useTable } from 'react-table';

// Sample data and columns
const data = [
  {
    col1: 1,
    col2: 'World',
    col3: 'Hello',
    col4: 'World',
    col5: 'Hello',
    col6: 'World',
    col7: 'Hello',
    col8: 'World',
    col9: 'Hello',
  },
  {
    col1: 2,
    col2: 'rocks',
    col3: 'Hello',
    col4: 'World',
    col5: 'Hello',
    col6: 'World',
    col7: 'Hello',
    col8: 'World',
    col9: 'Hello',
  },
  {
    col1: 3,
    col2: 'you want',
    col3: 'Hello',
    col4: 'World',
    col5: 'Hello',
    col6: 'World',
    col7: 'Hello',
    col8: 'World',
  },
  // Add more rows...
];

const columns = [
  {
    Header: '#',
    accessor: 'col1', // accessor is the "key" in the data
  },
  {
    Header: 'Amount',
    accessor: 'col2',
  },
  {
    Header: 'Merchant',
    accessor: 'col3', // accessor is the "key" in the data
  },
  {
    Header: 'Form',
    accessor: 'col4',
  },
  {
    Header: 'Done On',
    accessor: 'col5', // accessor is the "key" in the data
  },
  {
    Header: 'Type',
    accessor: 'col6',
  },
  {
    Header: 'Method',
    accessor: 'col7', // accessor is the "key" in the data
  },
  {
    Header: 'Actions',
    accessor: 'col8',
    Cell: () => (
      <div className='flex space-x-3'>
        {/* Edit Button */}
        <button
          // onClick={() => handleEdit(row.original)}
          className='px-2 py-1 bg-blue-600 hover:bg-blue-800 text-white rounded'
        >
          <Icon icon='solar:eye-broken' className='size-5' />
        </button>

        {/* Delete Button */}
        <button
          // onClick={() => handleDelete(row.original)}
          className='px-2 py-1 bg-green-600 hover:bg-green-800 text-white rounded'
        >
          <Icon icon='solar:pen-broken' className='size-5' />
        </button>

        {/* View Button */}
        <button
          // onClick={() => handleView(row.original)}
          className='px-2 py-1 bg-red-600 hover:bg-red-800 text-white rounded'
        >
          <Icon icon='solar:trash-bin-2-broken' className='size-5' />
        </button>
      </div>
    ),
  },
];

const ReactTableWithPagination = () => {
  const columnsMemo = useMemo(() => columns, []);
  const dataMemo = useMemo(() => data, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', use 'page' for pagination
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns: columnsMemo,
      data: dataMemo,
      initialState: { pageIndex: 0 }, // Set initial page index to 0
    },
    usePagination
  );

  return (
    <>
      <table {...getTableProps()} className=' w-full'>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  key={column.id}
                  className='border border-gray-700 px-4 py-4 text-left'
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.original.id}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    key={cell.column.id}
                    className='border px-4 py-4 border-gray-700 text-sm text-gray-200'
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination */}
      <div className='pagination mt-5 flex gap-3 justify-end items-center'>
        <span>rows per page:</span>
        <select
          className='bg-transparent border-b'
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
        <span>
          <strong>
            {pageIndex + 1} - {pageOptions.length} of {pageOptions.length}
          </strong>{' '}
        </span>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>
        <span className='bg-blue-600 px-2'>{pageIndex + 1} </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>
      </div>
    </>
  );
};

export default ReactTableWithPagination;

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrash, faEye } from '@fortawesome/free-solid-svg-icons'; // Import desired icons

// const columns = [
//   {
//     Header: '#',
//     accessor: 'col1', // accessor is the "key" in the data
//   },
//   {
//     Header: 'Amount',
//     accessor: 'col2',
//   },
//   {
//     Header: 'Merchant',
//     accessor: 'col3', // accessor is the "key" in the data
//   },
//   {
//     Header: 'Form',
//     accessor: 'col4',
//   },
//   {
//     Header: 'Done On',
//     accessor: 'col5', // accessor is the "key" in the data
//   },
//   {
//     Header: 'Type',
//     accessor: 'col6',
//   },
//   {
//     Header: 'Method',
//     accessor: 'col7', // accessor is the "key" in the data
//   },
//   {
//     Header: 'Actions',
//     accessor: 'col8', // Adding custom buttons for actions
//     Cell: ({ row }) => (
//       <div className='flex space-x-2'>
//         {/* Edit Button */}
//         <button
//           onClick={() => handleEdit(row.original)}
//           className='px-2 py-1 bg-blue-600 hover:bg-blue-800 text-white rounded'
//         >
//           <FontAwesomeIcon icon={faEdit} />
//         </button>

//         {/* Delete Button */}
//         <button
//           onClick={() => handleDelete(row.original)}
//           className='px-2 py-1 bg-red-600 hover:bg-red-800 text-white rounded'
//         >
//           <FontAwesomeIcon icon={faTrash} />
//         </button>

//         {/* View Button */}
//         <button
//           onClick={() => handleView(row.original)}
//           className='px-2 py-1 bg-green-600 hover:bg-green-800 text-white rounded'
//         >
//           <FontAwesomeIcon icon={faEye} />
//         </button>
//       </div>
//     ),
//   },
// ];

// // Sample handlers for actions
// const handleEdit = (rowData) => {
//   console.log('Edit action for row:', rowData);
// };

// const handleDelete = (rowData) => {
//   console.log('Delete action for row:', rowData);
// };

// const handleView = (rowData) => {
//   console.log('View action for row:', rowData);
// };
