import { MapPin, Star } from 'lucide-react';

export default function ProductCard({ product, onSendRequest }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-black text-white text-xs font-medium rounded-md">
            {product.category}
          </span>
        </div>
        {product.condition && product.condition !== 'N/A' && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 bg-white/90 text-gray-700 text-xs font-medium rounded-md">
              {product.condition}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-lg mb-1 line-clamp-1">
          {product.title}
        </h3>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="mb-4">
          <span className="text-2xl font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>
        </div>

        {/* Seller Info */}
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
          <img
            src={product.seller.avatar}
            alt={product.seller.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <p className="font-medium text-gray-900 text-sm truncate">
              {product.seller.name}
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span>{product.seller.rating}</span>
              </div>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {product.seller.location}
              </span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onSendRequest && onSendRequest(product)}
          className="w-full py-2.5 px-4 bg-black text-white font-medium rounded-lg hover:bg-gray-800 active:scale-[0.98] transition-all duration-200"
        >
          Send Request
        </button>
      </div>
    </div>
  );
}
