import { Search, Filter, MoreVertical } from 'lucide-react';
import AdminTable from '../../components/AdminTable';
import { users } from '../../data/users';

export default function AdminUsers() {
  const columns = [
    {
      header: 'User',
      accessor: 'name',
      render: (user) => (
        <div className="flex items-center gap-3">
          <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <p className="font-medium text-gray-900">{user.name}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
          </div>
        </div>
      )
    },
    {
      header: 'Phone',
      accessor: 'phone',
    },
    {
      header: 'Listings',
      accessor: 'totalListings',
    },
    {
      header: 'Deals',
      accessor: 'totalDeals',
    },
    {
      header: 'Status',
      accessor: 'status',
      render: (user) => (
        <span className={`px-2 py-1 text-xs font-medium rounded-md capitalize ${
          user.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
        }`}>
          {user.status}
        </span>
      )
    },
    {
      header: 'Join Date',
      accessor: 'joinDate',
      render: (user) => new Date(user.joinDate).toLocaleDateString('en-IN', {
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
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">User Management</h1>
        <p className="text-gray-600 mt-1">Manage all registered users</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search users..."
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <Filter className="w-4 h-4" />
          <span className="font-medium">Filters</span>
        </button>
      </div>

      {/* Table */}
      <AdminTable columns={columns} data={users} title="All Users" />
    </div>
  );
}
