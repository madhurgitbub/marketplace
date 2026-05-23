import { Users, Package, ShoppingBag, MessageSquare, TrendingUp, TrendingDown, Activity, UserPlus, ListPlus, CheckCircle, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { adminStats, recentActivities } from '../data/services';
import { users } from '../data/users';
import { products } from '../data/products';

export default function AdminDashboard() {
  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-IN').format(num);
  };

  const formatCurrency = (num) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(num);
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'new_user': return UserPlus;
      case 'new_listing': return ListPlus;
      case 'deal_completed': return CheckCircle;
      case 'report': return AlertTriangle;
      default: return Activity;
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'new_user': return 'bg-blue-100 text-blue-600';
      case 'new_listing': return 'bg-green-100 text-green-600';
      case 'deal_completed': return 'bg-purple-100 text-purple-600';
      case 'report': return 'bg-red-100 text-red-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const stats = [
    { 
      label: 'Total Users', 
      value: formatNumber(adminStats.totalUsers), 
      change: '+12%',
      trending: 'up',
      icon: Users,
      color: 'bg-blue-100 text-blue-600'
    },
    { 
      label: 'Active Listings', 
      value: formatNumber(adminStats.activeListings), 
      change: '+8%',
      trending: 'up',
      icon: Package,
      color: 'bg-green-100 text-green-600'
    },
    { 
      label: 'Total Deals', 
      value: formatNumber(adminStats.totalDeals), 
      change: '+15%',
      trending: 'up',
      icon: ShoppingBag,
      color: 'bg-purple-100 text-purple-600'
    },
    { 
      label: 'Pending Requests', 
      value: formatNumber(adminStats.pendingRequests), 
      change: '-3%',
      trending: 'down',
      icon: MessageSquare,
      color: 'bg-yellow-100 text-yellow-600'
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here&apos;s what&apos;s happening.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${
                stat.trending === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.trending === 'up' ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                {stat.change}
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-200">
            <div className="p-5 border-b border-gray-200">
              <h2 className="font-semibold text-gray-900">Recent Activity</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {recentActivities.map((activity) => {
                const Icon = getActivityIcon(activity.type);
                return (
                  <div key={activity.id} className="p-4 flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getActivityColor(activity.type)}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{activity.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div>
          <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
            <h2 className="font-semibold text-gray-900 mb-4">Revenue</h2>
            <p className="text-3xl font-bold text-gray-900">{formatCurrency(adminStats.revenue)}</p>
            <p className="text-sm text-gray-500 mt-1">This month</p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span className="font-medium">+{adminStats.monthlyGrowth}% from last month</span>
              </div>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h2 className="font-semibold text-gray-900 mb-4">Analytics Overview</h2>
            <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Activity className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Chart Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Recent Users */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="p-5 border-b border-gray-200 flex items-center justify-between">
            <h2 className="font-semibold text-gray-900">Recent Users</h2>
            <Link to="/admin/users" className="text-sm text-gray-600 hover:text-gray-900">View all</Link>
          </div>
          <div className="divide-y divide-gray-100">
            {users.slice(0, 4).map((user) => (
              <div key={user.id} className="p-4 flex items-center gap-3">
                <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                  <p className="text-xs text-gray-500 truncate">{user.email}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-md ${
                  user.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                }`}>
                  {user.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Listings */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="p-5 border-b border-gray-200 flex items-center justify-between">
            <h2 className="font-semibold text-gray-900">Recent Listings</h2>
            <Link to="/admin/listings" className="text-sm text-gray-600 hover:text-gray-900">View all</Link>
          </div>
          <div className="divide-y divide-gray-100">
            {products.slice(0, 4).map((product) => (
              <div key={product.id} className="p-4 flex items-center gap-3">
                <img src={product.image} alt={product.title} className="w-10 h-10 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{product.title}</p>
                  <p className="text-xs text-gray-500">{product.category}</p>
                </div>
                <span className="text-sm font-semibold text-gray-900">
                  {formatCurrency(product.price)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
