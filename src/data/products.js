export const products = [
  {
    id: 1,
    title: "iPhone 14 Pro Max",
    description: "Brand new iPhone 14 Pro Max, 256GB, Space Black. Comes with original box and accessories.",
    price: 89999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=400&h=300&fit=crop",
    seller: {
      id: 1,
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      rating: 4.8,
      location: "Mumbai, Maharashtra"
    },
    status: "active",
    postedDate: "2024-01-15",
    condition: "New"
  },
  {
    id: 2,
    title: "Royal Enfield Classic 350",
    description: "2022 model, single owner, only 5000 km driven. All service records available.",
    price: 145000,
    category: "Vehicles",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=400&h=300&fit=crop",
    seller: {
      id: 2,
      name: "Amit Kumar",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      rating: 4.5,
      location: "Delhi, NCR"
    },
    status: "active",
    postedDate: "2024-01-10",
    condition: "Used - Like New"
  },
  {
    id: 3,
    title: "2BHK Apartment for Rent",
    description: "Spacious 2BHK apartment in prime location. Semi-furnished with modular kitchen.",
    price: 25000,
    category: "Property",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
    seller: {
      id: 3,
      name: "Priya Singh",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      rating: 4.9,
      location: "Bangalore, Karnataka"
    },
    status: "active",
    postedDate: "2024-01-12",
    condition: "N/A"
  },
  {
    id: 4,
    title: "MacBook Pro M2",
    description: "Apple MacBook Pro 14-inch M2 Pro, 16GB RAM, 512GB SSD. Perfect condition.",
    price: 175000,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
    seller: {
      id: 4,
      name: "Rahul Verma",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      rating: 4.7,
      location: "Hyderabad, Telangana"
    },
    status: "active",
    postedDate: "2024-01-08",
    condition: "Used - Good"
  },
  {
    id: 5,
    title: "Wooden Dining Table Set",
    description: "Solid wood 6-seater dining table with chairs. Excellent craftsmanship.",
    price: 35000,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=300&fit=crop",
    seller: {
      id: 5,
      name: "Sneha Patel",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      rating: 4.6,
      location: "Pune, Maharashtra"
    },
    status: "active",
    postedDate: "2024-01-14",
    condition: "Used - Good"
  },
  {
    id: 6,
    title: "Samsung 55-inch Smart TV",
    description: "Samsung Crystal 4K UHD Smart TV. 1 year old, with warranty remaining.",
    price: 42000,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop",
    seller: {
      id: 6,
      name: "Vikram Reddy",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
      rating: 4.4,
      location: "Chennai, Tamil Nadu"
    },
    status: "active",
    postedDate: "2024-01-11",
    condition: "Used - Like New"
  },
  {
    id: 7,
    title: "Honda City 2021",
    description: "Petrol variant, automatic transmission, 20,000 km driven. First owner.",
    price: 1050000,
    category: "Vehicles",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=400&h=300&fit=crop",
    seller: {
      id: 7,
      name: "Karan Malhotra",
      avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop",
      rating: 4.8,
      location: "Kolkata, West Bengal"
    },
    status: "active",
    postedDate: "2024-01-09",
    condition: "Used - Excellent"
  },
  {
    id: 8,
    title: "Professional Camera Kit",
    description: "Canon EOS R6 with 24-70mm lens, extra batteries, and carrying case.",
    price: 185000,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
    seller: {
      id: 8,
      name: "Ananya Sharma",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
      rating: 4.9,
      location: "Jaipur, Rajasthan"
    },
    status: "active",
    postedDate: "2024-01-13",
    condition: "Used - Good"
  }
];

export const categories = [
  { id: 1, name: "Electronics", icon: "Smartphone", count: 1250 },
  { id: 2, name: "Vehicles", icon: "Car", count: 890 },
  { id: 3, name: "Property", icon: "Home", count: 456 },
  { id: 4, name: "Furniture", icon: "Sofa", count: 678 },
  { id: 5, name: "Fashion", icon: "Shirt", count: 1120 },
  { id: 6, name: "Jobs", icon: "Briefcase", count: 340 },
  { id: 7, name: "Services", icon: "Wrench", count: 520 },
  { id: 8, name: "Sports", icon: "Dumbbell", count: 280 }
];

export const featuredProducts = products.slice(0, 4);
