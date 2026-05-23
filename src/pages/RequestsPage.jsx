import { useState } from 'react';
import { ArrowDownLeft, ArrowUpRight, MessageSquare } from 'lucide-react';
import RequestCard from '../components/RequestCard';
import { requests as initialRequests } from '../data/requests';

export default function RequestsPage() {
  const [requests, setRequests] = useState(initialRequests);
  const [activeTab, setActiveTab] = useState('all');

  const handleConfirm = (id) => {
    setRequests(requests.map(r => 
      r.id === id ? { ...r, status: 'confirmed' } : r
    ));
  };

  const handleReject = (id) => {
    setRequests(requests.map(r => 
      r.id === id ? { ...r, status: 'rejected' } : r
    ));
  };

  const filteredRequests = requests.filter(request => {
    if (activeTab === 'all') return true;
    if (activeTab === 'incoming') return request.type === 'incoming';
    if (activeTab === 'outgoing') return request.type === 'outgoing';
    return true;
  });

  const incomingCount = requests.filter(r => r.type === 'incoming').length;
  const outgoingCount = requests.filter(r => r.type === 'outgoing').length;
  const pendingCount = requests.filter(r => r.status === 'pending').length;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Requests</h1>
        <p className="text-gray-600 mt-1">Manage your buy and sell requests</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <ArrowDownLeft className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Incoming</p>
              <p className="text-2xl font-bold text-gray-900">{incomingCount}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <ArrowUpRight className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Outgoing</p>
              <p className="text-2xl font-bold text-gray-900">{outgoingCount}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Pending</p>
              <p className="text-2xl font-bold text-gray-900">{pendingCount}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-lg w-fit">
        {[
          { id: 'all', label: 'All' },
          { id: 'incoming', label: 'Incoming' },
          { id: 'outgoing', label: 'Outgoing' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Requests List */}
      <div className="space-y-4">
        {filteredRequests.length > 0 ? (
          filteredRequests.map((request) => (
            <RequestCard
              key={request.id}
              request={request}
              onConfirm={handleConfirm}
              onReject={handleReject}
            />
          ))
        ) : (
          <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
            <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No requests found</p>
            <p className="text-gray-400 mt-1">
              {activeTab === 'incoming' 
                ? 'You have no incoming requests'
                : activeTab === 'outgoing'
                ? 'You have no outgoing requests'
                : 'Your requests will appear here'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
