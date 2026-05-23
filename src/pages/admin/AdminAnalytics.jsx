import { TrendingUp, TrendingDown, Users, Package, ShoppingBag, DollarSign, BarChart3 } from 'lucide-react';
import { adminStats } from '../../data/services';

export default function AdminAnalytics() {
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

  const monthlyData = [
    { month: 'Jan', users: 1200, listings: 450, deals: 180 },
    { month: 'Feb', users: 1450, listings: 520, deals: 210 },
    { month: 'Mar', users: 1680, listings: 610, deals: 260 },
    { month: 'Apr', users: 1890, listings: 680, deals: 290 },
    { month: 'May', users: 2100, listings: 750, deals: 340 },
    { month: 'Jun', users: 2400, listings: 820, deals: 380 },
  ];

  const topCategories = [
    { name: 'Electronics', percentage: 35, color: 'bg-blue-500' },
    { name: 'Vehicles', percentage: 25, color: 'bg-green-500' },
    { name: 'Property', percentage: 20, color: 'bg-purple-500' },
    { name: 'Furniture', percentage: 12, color: 'bg-yellow-500' },
    { name: 'Others', percentage: 8, color: 'bg-gray-500' },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600 mt-1">Track your marketplace performance</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex items-center gap-1 text-sm text-green-600">
              <TrendingUp className="w-4 h-4" />
              <span>+12%</span>
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">{formatNumber(adminStats.totalUsers)}</p>
          <p className="text-sm text-gray-500">Total Users</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <Package className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex items-center gap-1 text-sm text-green-600">
              <TrendingUp className="w-4 h-4" />
              <span>+8%</span>
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">{formatNumber(adminStats.activeListings)}</p>
          <p className="text-sm text-gray-500">Active Listings</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-purple-600" />
            </div>
            <div className="flex items-center gap-1 text-sm text-green-600">
              <TrendingUp className="w-4 h-4" />
              <span>+15%</span>
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">{formatNumber(adminStats.totalDeals)}</p>
          <p className="text-sm text-gray-500">Total Deals</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-yellow-600" />
            </div>
            <div className="flex items-center gap-1 text-sm text-green-600">
              <TrendingUp className="w-4 h-4" />
              <span>+{adminStats.monthlyGrowth}%</span>
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">{formatCurrency(adminStats.revenue)}</p>
          <p className="text-sm text-gray-500">Revenue</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Placeholder */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="font-semibold text-gray-900 mb-6">Growth Overview</h2>
          <div className="space-y-4">
            {monthlyData.map((data, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="w-10 text-sm text-gray-500">{data.month}</span>
                <div className="flex-1 flex gap-2">
                  <div 
                    className="h-6 bg-blue-500 rounded-md" 
                    style={{ width: `${(data.users / 2400) * 100}%` }}
                    title={`${data.users} users`}
                  />
                  <div 
                    className="h-6 bg-green-500 rounded-md" 
                    style={{ width: `${(data.listings / 820) * 100 * 0.4}%` }}
                    title={`${data.listings} listings`}
                  />
                  <div 
                    className="h-6 bg-purple-500 rounded-md" 
                    style={{ width: `${(data.deals / 380) * 100 * 0.2}%` }}
                    title={`${data.deals} deals`}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-6 mt-6 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              <span className="text-sm text-gray-600">Users</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-sm text-gray-600">Listings</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full" />
              <span className="text-sm text-gray-600">Deals</span>
            </div>
          </div>
        </div>

        {/* Top Categories */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="font-semibold text-gray-900 mb-6">Top Categories</h2>
          <div className="space-y-4">
            {topCategories.map((category, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-700">{category.name}</span>
                  <span className="text-sm font-medium text-gray-900">{category.percentage}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${category.color} rounded-full`}
                    style={{ width: `${category.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Pie Chart Placeholder */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Pie Chart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
