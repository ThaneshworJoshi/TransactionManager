import { TableProps } from './Table.type';

const Table = ({ headers, data, renderAction }: TableProps) => {
  return (
    <table className="min-w-full bg-white border border-gray-100 shadow-black">
      <thead className='bg-white shadow-sm'>
        <tr>
          {headers.map((header) => (
            <th key={header.key} className="py-2 px-1  top-0 left-0 border-b border-gray-200 bg-gray-100 w-16 text-center z-10 min-w-24">
              {header.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <>
            <tr key={rowIndex}>
              {headers.map((header) => (
                <td key={header.key} className="py-2 px-4 border-b text-center">
                  {row[header.key]}
                </td>
              ))}
              {renderAction && (
                <td className="py-2 px-4 border-b text-center">
                  {renderAction(row)}
                </td>
              )}
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
