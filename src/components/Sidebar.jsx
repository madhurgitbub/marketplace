import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Package, 
  CreditCard, 
  BarChart3, 
  Settings,
  ChevronLeft,
  Menu
} from 'lucide-react';
import { useState } from 'react';

const sidebarItems = [
  { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
  { name: 'Users', path: '/admin/users', icon: Users },
  { name: 'Listings', path: '/admin/listings', icon: Package },
  { name: 'Transactions', path: '/admin/transactions', icon: CreditCard },
  { name: 'Analytics', path: '/admin/analytics', icon: BarChart3 },
  { name: 'Settings', path: '/admin/settings', icon: Settings },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const SidebarContent = () => (
    <>
      {/* Logo */}
      <div className="p-4 border-b border-gray-200">
        <Link to="/admin" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          {!collapsed && (
            <span className="font-bold text-lg text-gray-900">Admin</span>
          )}
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {sidebarItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => setMobileOpen(false)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-all duration-200 ${
              isActive(item.path)
                ? 'bg-black text-white'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span>{item.name}</span>}
          </Link>
        ))}
      </nav>

      {/* Collapse Button - Desktop only */}
      <div className="p-4 border-t border-gray-200 hidden lg:block">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors w-full"
        >
          <ChevronLeft className={`w-5 h-5 transition-transform ${collapsed ? 'rotate-180' : ''}`} />
          {!collapsed && <span className="text-sm">Collapse</span>}
        </button>
      </div>

      {/* Back to Marketplace */}
      <div className="p-4 border-t border-gray-200">
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 flex-shrink-0" />
          {!collapsed && <span className="text-sm">Back to Marketplace</span>}
        </Link>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg border border-gray-200 shadow-sm"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 flex flex-col transform transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <SidebarContent />
      </aside>

      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:flex fixed inset-y-0 left-0 z-40 bg-white border-r border-gray-200 flex-col transition-all duration-300 ${
          collapsed ? 'w-20' : 'w-64'
        }`}
      >
        <SidebarContent />
      </aside>

      {/* Spacer for content */}
      <div className={`hidden lg:block flex-shrink-0 transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'}`} />
    </>
  );
}
