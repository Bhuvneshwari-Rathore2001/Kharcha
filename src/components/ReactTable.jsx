import  { useMemo } from 'react';
import { useTable, usePagination } from 'react-table';


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
    col9: 'Hello',
  },
  // Add more rows...
];

const columns = [
  {
    Header: 'id',
    accessor: 'col1', // accessor is the "key" in the data
  },
  {
    Header: 'Column 2',
    accessor: 'col2',
  },
  {
    Header: 'Column 3',
    accessor: 'col3', // accessor is the "key" in the data
  },
  {
    Header: 'Column 4',
    accessor: 'col4',
  },
  {
    Header: 'Column 5',
    accessor: 'col5', // accessor is the "key" in the data
  },
  {
    Header: 'Column 6',
    accessor: 'col6',
  },
  {
    Header: 'Column 7',
    accessor: 'col7', // accessor is the "key" in the data
  },
  {
    Header: 'Column 8',
    accessor: 'col8',
  },
  {
    Header: 'Column 9',
    accessor: 'col9', // accessor is the "key" in the data
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
    pageCount,
    gotoPage,
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
                  className='border border-gray-700 px-3 py-2 text-center'
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
                    className='border px-2 py-1 text-center border-gray-700 text-sm text-gray-200'
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
      <div className='pagination mt-5'>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type='number'
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: '100px' }}
            className='bg-[rgba(0,0,0,0.25)] px-2 py-1'
          />
        </span>{' '}
        <select
          className='bg-[rgba(0,0,0,0.25)] px-2 py-1'
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option
              key={pageSize}
              value={pageSize}
             
            >
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default ReactTableWithPagination;
