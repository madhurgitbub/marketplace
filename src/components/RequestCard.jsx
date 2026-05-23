import { Check, X, Clock, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

export default function RequestCard({ request, onConfirm, onReject }) {
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

  const getStatusConfig = (status) => {
    switch (status) {
      case 'confirmed':
        return { 
          color: 'bg-green-100 text-green-700 border-green-200', 
          icon: Check,
          label: 'Confirmed'
        };
      case 'rejected':
        return { 
          color: 'bg-red-100 text-red-700 border-red-200', 
          icon: X,
          label: 'Rejected'
        };
      default:
        return { 
          color: 'bg-yellow-100 text-yellow-700 border-yellow-200', 
          icon: Clock,
          label: 'Pending'
        };
    }
  };

  const statusConfig = getStatusConfig(request.status);
  const StatusIcon = statusConfig.icon;
  const isIncoming = request.type === 'incoming';
  const otherParty = isIncoming ? request.buyer : request.seller;

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="p-4 sm:p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {isIncoming ? (
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <ArrowDownLeft className="w-4 h-4 text-blue-600" />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 text-purple-600" />
              </div>
            )}
            <span className="text-sm font-medium text-gray-600">
              {isIncoming ? 'Incoming Request' : 'Outgoing Request'}
            </span>
          </div>
          <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${statusConfig.color}`}>
            <StatusIcon className="w-3 h-3" />
            {statusConfig.label}
          </span>
        </div>

        {/* Product & User Info */}
        <div className="flex gap-4 mb-4">
          <img
            src={request.product.image}
            alt={request.product.title}
            className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 mb-1 truncate">
              {request.product.title}
            </h3>
            <p className="text-lg font-bold text-gray-900 mb-2">
              {formatPrice(request.product.price)}
            </p>
            <div className="flex items-center gap-2">
              <img
                src={otherParty.avatar}
                alt={otherParty.name}
                className="w-6 h-6 rounded-full object-cover"
              />
              <span className="text-sm text-gray-600">
                {isIncoming ? 'From' : 'To'}: <span className="font-medium text-gray-900">{otherParty.name}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="bg-gray-50 rounded-lg p-3 mb-4">
          <p className="text-sm text-gray-700 italic">{`"${request.message}"`}</p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">
            {formatDate(request.requestDate)}
          </span>

          {/* Actions for incoming pending requests */}
          {isIncoming && request.status === 'pending' && (
            <div className="flex gap-2">
              <button
                onClick={() => onReject && onReject(request.id)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Reject
              </button>
              <button
                onClick={() => onConfirm && onConfirm(request.id)}
                className="px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors"
              >
                Confirm
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
