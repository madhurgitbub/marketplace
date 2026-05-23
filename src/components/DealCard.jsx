import { Calendar, DollarSign } from 'lucide-react';

export default function DealCard({ deal }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="flex flex-col sm:flex-row">
        {/* Product Image */}
        <div className="sm:w-48 h-48 sm:h-auto bg-gray-100 flex-shrink-0">
          <img
            src={deal.product.image}
            alt={deal.product.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-4 sm:p-5">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="font-semibold text-gray-900 text-lg">
              {deal.product.title}
            </h3>
            <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(deal.status)}`}>
              {deal.status}
            </span>
          </div>

          {/* Buyer & Seller */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center gap-2">
              <img
                src={deal.buyer.avatar}
                alt={deal.buyer.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="text-xs text-gray-500">Buyer</p>
                <p className="text-sm font-medium text-gray-900">{deal.buyer.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img
                src={deal.seller.avatar}
                alt={deal.seller.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="text-xs text-gray-500">Seller</p>
                <p className="text-sm font-medium text-gray-900">{deal.seller.name}</p>
              </div>
            </div>
          </div>

          {/* Deal Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-1.5 text-gray-600">
              <DollarSign className="w-4 h-4" />
              <span className="font-semibold text-gray-900">{formatPrice(deal.amount)}</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(deal.dealDate)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
