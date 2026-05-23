export default function UserCard({ user }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700';
      case 'inactive':
        return 'bg-gray-100 text-gray-700';
      case 'suspended':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-4">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-900 truncate">{user.name}</h4>
          <p className="text-sm text-gray-500 truncate">{user.email}</p>
        </div>
        <span className={`px-2 py-1 text-xs font-medium rounded-md capitalize ${getStatusColor(user.status)}`}>
          {user.status}
        </span>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-600">
        <span>{user.totalListings} listings</span>
        <span>{user.totalDeals} deals</span>
      </div>
    </div>
  );
}
