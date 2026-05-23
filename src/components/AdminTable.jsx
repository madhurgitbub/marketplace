import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function AdminTable({ columns, data, title }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      {title && (
        <div className="px-5 py-4 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">{title}</h3>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50 transition-colors">
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="px-5 py-4 text-sm text-gray-700">
                    {column.render ? column.render(row) : row[column.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="px-5 py-4 border-t border-gray-200 flex items-center justify-between">
        <span className="text-sm text-gray-600">
          Showing 1 to {data.length} of {data.length} entries
        </span>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors disabled:opacity-50">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="px-3 py-1 rounded-lg bg-black text-white text-sm font-medium">
            1
          </button>
          <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors disabled:opacity-50">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
