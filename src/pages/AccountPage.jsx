import { useState } from 'react';
import { User, Mail, Phone, MapPin, Camera, Save } from 'lucide-react';
import { currentUser } from '../data/users';

export default function AccountPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: currentUser.name,
    email: currentUser.email,
    phone: currentUser.phone,
    address: currentUser.address,
    city: currentUser.city,
    state: currentUser.state,
    pincode: currentUser.pincode,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would save to a backend
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">My Account</h1>
        <p className="text-gray-600 mt-1">Manage your profile information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <div className="relative inline-block mb-4">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-24 h-24 rounded-full object-cover mx-auto"
              />
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <h2 className="text-xl font-semibold text-gray-900">{currentUser.name}</h2>
            <p className="text-gray-500 text-sm">Member since {currentUser.memberSince}</p>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-gray-900">{currentUser.totalListings}</p>
                  <p className="text-xs text-gray-500">Listings</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{currentUser.totalDeals}</p>
                  <p className="text-xs text-gray-500">Deals</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{currentUser.rating}</p>
                  <p className="text-xs text-gray-500">Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Profile Information</h3>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-sm font-medium text-black hover:text-gray-700 transition-colors"
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1.5">
                    <User className="w-4 h-4" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1.5">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500 transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1.5">
                    <Phone className="w-4 h-4" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500 transition-colors"
                  />
                </div>

                {/* Pincode */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1.5">
                    <MapPin className="w-4 h-4" />
                    Pincode
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500 transition-colors"
                  />
                </div>

                {/* Address */}
                <div className="sm:col-span-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1.5">
                    <MapPin className="w-4 h-4" />
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500 transition-colors"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500 transition-colors"
                  />
                </div>

                {/* State */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500 transition-colors"
                  />
                </div>
              </div>

              {isEditing && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 bg-black text-white font-medium rounded-lg hover:bg-gray-800 active:scale-[0.98] transition-all"
                  >
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
