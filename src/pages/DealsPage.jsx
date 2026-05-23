import { ShoppingBag, TrendingUp, DollarSign } from 'lucide-react';
import DealCard from '../components/DealCard';
import { deals } from '../data/deals';

export default function DealsPage() {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const totalValue = deals.reduce((sum, deal) => sum + deal.amount, 0);
  const completedDeals = deals.filter(d => d.status === 'completed').length;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">My Deals</h1>
        <p className="text-gray-600 mt-1">View all your confirmed deals</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Deals</p>
              <p className="text-2xl font-bold text-gray-900">{deals.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Completed</p>
              <p className="text-2xl font-bold text-gray-900">{completedDeals}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Value</p>
              <p className="text-2xl font-bold text-gray-900">{formatPrice(totalValue)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Deals List */}
      <div className="space-y-4">
        {deals.length > 0 ? (
          deals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))
        ) : (
          <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
            <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No deals yet</p>
            <p className="text-gray-400 mt-1">Your completed deals will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
}
