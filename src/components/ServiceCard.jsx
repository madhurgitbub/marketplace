import { Eye, MessageSquare, Edit, Trash2 } from 'lucide-react';

export default function ServiceCard({ service, onEdit, onDelete }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const getStatusConfig = (status) => {
    switch (status) {
      case 'active':
        return { color: 'bg-green-100 text-green-700', label: 'Active' };
      case 'sold':
        return { color: 'bg-blue-100 text-blue-700', label: 'Sold' };
      case 'inactive':
        return { color: 'bg-gray-100 text-gray-700', label: 'Inactive' };
      default:
        return { color: 'bg-gray-100 text-gray-700', label: status };
    }
  };

  const statusConfig = getStatusConfig(service.status);

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-[4/3] bg-gray-100">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 text-xs font-medium rounded-md ${statusConfig.color}`}>
            {statusConfig.label}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 bg-black text-white text-xs font-medium rounded-md">
            {service.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-lg mb-1 line-clamp-1">
          {service.title}
        </h3>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">
          {service.description}
        </p>

        {/* Price */}
        <div className="mb-4">
          <span className="text-2xl font-bold text-gray-900">
            {formatPrice(service.price)}
          </span>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-1.5 text-sm text-gray-600">
            <Eye className="w-4 h-4" />
            <span>{service.views} views</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-gray-600">
            <MessageSquare className="w-4 h-4" />
            <span>{service.inquiries} inquiries</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={() => onEdit && onEdit(service)}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Edit className="w-4 h-4" />
            Edit
          </button>
          <button
            onClick={() => onDelete && onDelete(service.id)}
            className="flex items-center justify-center gap-2 py-2.5 px-4 bg-red-50 text-red-600 font-medium rounded-lg hover:bg-red-100 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
