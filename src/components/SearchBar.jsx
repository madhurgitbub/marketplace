import { Search } from 'lucide-react';

export default function SearchBar({ value, onChange, placeholder = "Search products, services..." }) {
  return (
    <div className="relative w-full">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all shadow-sm"
      />
    </div>
  );
}
