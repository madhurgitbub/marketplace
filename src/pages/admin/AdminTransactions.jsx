import { Search, Filter, Download } from 'lucide-react';
import AdminTable from '../../components/AdminTable';
import { deals } from '../../data/deals';

export default function AdminTransactions() {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const columns = [
    {
      header: 'Transaction ID',
      accessor: 'id',
      render: (deal) => (
        <span className="font-mono text-sm text-gray-900">TXN-{deal.id.toString().padStart(6, '0')}</span>
      )
    },
    {
      header: 'Product',
      accessor: 'product',
      render: (deal) => (
        <div className="flex items-center gap-3">
          <img src={deal.product.image} alt={deal.product.title} className="w-10 h-10 rounded-lg object-cover" />
          <span className="font-medium text-gray-900">{deal.product.title}</span>
        </div>
      )
    },
    {
      header: 'Buyer',
      accessor: 'buyer',
      render: (deal) => (
        <div className="flex items-center gap-2">
          <img src={deal.buyer.avatar} alt={deal.buyer.name} className="w-8 h-8 rounded-full object-cover" />
          <span className="text-sm text-gray-900">{deal.buyer.name}</span>
        </div>
      )
    },
    {
      header: 'Seller',
      accessor: 'seller',
      render: (deal) => (
        <div className="flex items-center gap-2">
          <img src={deal.seller.avatar} alt={deal.seller.name} className="w-8 h-8 rounded-full object-cover" />
          <span className="text-sm text-gray-900">{deal.seller.name}</span>
        </div>
      )
    },
    {
      header: 'Amount',
      accessor: 'amount',
      render: (deal) => (
        <span className="font-semibold text-gray-900">{formatPrice(deal.amount)}</span>
      )
    },
    {
      header: 'Status',
      accessor: 'status',
      render: (deal) => (
        <span className={`px-2 py-1 text-xs font-medium rounded-md capitalize ${
          deal.status === 'completed' ? 'bg-green-100 text-green-700' : 
          deal.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 
          'bg-red-100 text-red-700'
        }`}>
          {deal.status}
        </span>
      )
    },
    {
      header: 'Date',
      accessor: 'dealDate',
      render: (deal) => new Date(deal.dealDate).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    }
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Transactions</h1>
          <p className="text-gray-600 mt-1">View all marketplace transactions</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
          <Download className="w-4 h-4" />
          Export
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search transactions..."
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>
        <select className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent">
          <option value="">All Status</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
          <option value="cancelled">Cancelled</option>
        </select>
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <Filter className="w-4 h-4" />
          <span className="font-medium">Filters</span>
        </button>
      </div>

      {/* Table */}
      <AdminTable columns={columns} data={deals} title="All Transactions" />
    </div>
  );
}
