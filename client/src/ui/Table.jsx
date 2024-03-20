import React from 'react';

const Table = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
          <tr className="">
            {columns.map((column, index) => (
              <th key={index} className="px-4 py-2">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={
                rowIndex % 2 === 0 ? 'bg-colorBrand4 text-colorGrey100' : ''
              }
            >
              <td className="w-16 border px-4 py-2 md:w-32">{rowIndex + 1}</td>
              {Object.values(row).map((cell, cellIndex) => (
                <td key={cellIndex} className="w-32 border px-4 py-2 md:w-auto">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
