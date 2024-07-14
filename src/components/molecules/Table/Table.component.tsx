import { TableProps } from './Table.type';

const Table = ({ headers, data, renderAction }: TableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-100 shadow-black">
        <thead className='bg-white shadow-sm'>
          <tr>
            {headers.map((header) => (
              <th key={header.key} className="py-2 px-4 border-b text-gray-500">
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
