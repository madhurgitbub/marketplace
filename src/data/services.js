export const myServices = [
  {
    id: 1,
    title: "iPhone 14 Pro Max",
    description: "Brand new iPhone 14 Pro Max, 256GB, Space Black. Comes with original box and accessories.",
    price: 89999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=400&h=300&fit=crop",
    status: "active",
    postedDate: "2024-01-15",
    views: 245,
    inquiries: 12
  },
  {
    id: 2,
    title: "Royal Enfield Classic 350",
    description: "2022 model, single owner, only 5000 km driven. All service records available.",
    price: 145000,
    category: "Vehicles",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=400&h=300&fit=crop",
    status: "active",
    postedDate: "2024-01-10",
    views: 189,
    inquiries: 8
  },
  {
    id: 3,
    title: "Wooden Dining Table Set",
    description: "Solid wood 6-seater dining table with chairs. Excellent craftsmanship.",
    price: 35000,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=300&fit=crop",
    status: "sold",
    postedDate: "2024-01-08",
    views: 156,
    inquiries: 15
  },
  {
    id: 4,
    title: "PlayStation 5 Console",
    description: "PS5 Disc Edition with 2 controllers and 3 games included.",
    price: 45000,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop",
    status: "inactive",
    postedDate: "2024-01-05",
    views: 320,
    inquiries: 25
  }
];

export const adminStats = {
  totalUsers: 15420,
  activeListings: 8934,
  totalDeals: 3256,
  pendingRequests: 847,
  monthlyGrowth: 12.5,
  revenue: 2450000
};

export const recentActivities = [
  {
    id: 1,
    type: "new_user",
    message: "New user Ravi Shankar registered",
    time: "2 minutes ago"
  },
  {
    id: 2,
    type: "new_listing",
    message: "New listing: Samsung Galaxy S24 Ultra",
    time: "15 minutes ago"
  },
  {
    id: 3,
    type: "deal_completed",
    message: "Deal completed: MacBook Air M2",
    time: "1 hour ago"
  },
  {
    id: 4,
    type: "report",
    message: "User reported suspicious listing",
    time: "2 hours ago"
  },
  {
    id: 5,
    type: "new_listing",
    message: "New listing: Honda Civic 2023",
    time: "3 hours ago"
  }
];

export const faqs = [
  {
    id: 1,
    question: "How do I create a listing?",
    answer: "To create a listing, go to My Services page and click on the 'Add Service' button. Fill in the details about your product including title, description, price, and upload images."
  },
  {
    id: 2,
    question: "How do I contact a seller?",
    answer: "Click on the 'Send Request' button on any product listing. You can write a message to the seller expressing your interest. The seller will receive your request and can choose to accept or decline."
  },
  {
    id: 3,
    question: "Is there a fee for listing products?",
    answer: "Basic listings are free. However, we offer premium listing options that provide more visibility for your products at a nominal fee."
  },
  {
    id: 4,
    question: "How do I report a suspicious listing?",
    answer: "If you find a listing that seems suspicious or violates our guidelines, you can report it by going to the Help page and filling out the 'Report Issue' form with details about the listing."
  },
  {
    id: 5,
    question: "How can I edit or delete my listing?",
    answer: "Go to My Services page where you can see all your listings. Each listing has Edit and Delete buttons that allow you to modify or remove your products."
  },
  {
    id: 6,
    question: "What payment methods are supported?",
    answer: "We facilitate the connection between buyers and sellers. The actual payment method is agreed upon between both parties. We recommend using secure payment methods and meeting in safe, public places for transactions."
  }
];
