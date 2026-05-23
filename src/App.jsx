import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Layouts
import MainLayout from './layouts/MainLayout'
import AdminLayout from './layouts/AdminLayout'

// Pages
import HomePage from './pages/HomePage'
import AccountPage from './pages/AccountPage'
import DealsPage from './pages/DealsPage'
import ServicesPage from './pages/ServicesPage'
import RequestsPage from './pages/RequestsPage'
import HelpPage from './pages/HelpPage'

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminUsers from './pages/admin/AdminUsers'
import AdminListings from './pages/admin/AdminListings'
import AdminTransactions from './pages/admin/AdminTransactions'
import AdminAnalytics from './pages/admin/AdminAnalytics'
import AdminSettings from './pages/admin/AdminSettings'

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="deals" element={<DealsPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="requests" element={<RequestsPage />} />
          <Route path="help" element={<HelpPage />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="listings" element={<AdminListings />} />
          <Route path="transactions" element={<AdminTransactions />} />
          <Route path="analytics" element={<AdminAnalytics />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
