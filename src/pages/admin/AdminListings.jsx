import { Search, Filter, MoreVertical } from 'lucide-react';
import AdminTable from '../../components/AdminTable';
import { products } from '../../data/products';

export default function AdminListings() {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const columns = [
    {
      header: 'Product',
      accessor: 'title',
      render: (product) => (
        <div className="flex items-center gap-3">
          <img src={product.image} alt={product.title} className="w-12 h-12 rounded-lg object-cover" />
          <div>
            <p className="font-medium text-gray-900">{product.title}</p>
            <p className="text-xs text-gray-500 line-clamp-1 max-w-[200px]">{product.description}</p>
          </div>
        </div>
      )
    },
    {
      header: 'Seller',
      accessor: 'seller',
      render: (product) => (
        <div className="flex items-center gap-2">
          <img src={product.seller.avatar} alt={product.seller.name} className="w-8 h-8 rounded-full object-cover" />
          <span className="text-sm text-gray-900">{product.seller.name}</span>
        </div>
      )
    },
    {
      header: 'Category',
      accessor: 'category',
      render: (product) => (
        <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-md">
          {product.category}
        </span>
      )
    },
    {
      header: 'Price',
      accessor: 'price',
      render: (product) => (
        <span className="font-semibold text-gray-900">{formatPrice(product.price)}</span>
      )
    },
    {
      header: 'Status',
      accessor: 'status',
      render: (product) => (
        <span className={`px-2 py-1 text-xs font-medium rounded-md capitalize ${
          product.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
        }`}>
          {product.status}
        </span>
      )
    },
    {
      header: 'Posted',
      accessor: 'postedDate',
      render: (product) => new Date(product.postedDate).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    },
    {
      header: '',
      accessor: 'actions',
      render: () => (
        <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <MoreVertical className="w-4 h-4 text-gray-500" />
        </button>
      )
    }
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Product Listings</h1>
        <p className="text-gray-600 mt-1">Manage all marketplace listings</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search listings..."
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>
        <select className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent">
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="vehicles">Vehicles</option>
          <option value="property">Property</option>
          <option value="furniture">Furniture</option>
        </select>
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <Filter className="w-4 h-4" />
          <span className="font-medium">Filters</span>
        </button>
      </div>

      {/* Table */}
      <AdminTable columns={columns} data={products} title="All Listings" />
    </div>
  );
}
