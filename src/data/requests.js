export const requests = [
  {
    id: 1,
    product: {
      id: 1,
      title: "iPhone 14 Pro Max",
      image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=400&h=300&fit=crop",
      price: 89999
    },
    buyer: {
      id: 2,
      name: "Amit Kumar",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    seller: {
      id: 1,
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    message: "Hi, I am interested in buying this iPhone. Is the price negotiable? Can we meet tomorrow for inspection?",
    status: "pending",
    requestDate: "2024-01-15",
    type: "incoming"
  },
  {
    id: 2,
    product: {
      id: 4,
      title: "MacBook Pro M2",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
      price: 175000
    },
    buyer: {
      id: 1,
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    seller: {
      id: 4,
      name: "Rahul Verma",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    },
    message: "Is this MacBook still available? I can pick it up today if you are free.",
    status: "confirmed",
    requestDate: "2024-01-14",
    type: "outgoing"
  },
  {
    id: 3,
    product: {
      id: 2,
      title: "Royal Enfield Classic 350",
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=400&h=300&fit=crop",
      price: 145000
    },
    buyer: {
      id: 3,
      name: "Priya Singh",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    seller: {
      id: 1,
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    message: "I would like to see the bike. Can you share the service history documents?",
    status: "pending",
    requestDate: "2024-01-13",
    type: "incoming"
  },
  {
    id: 4,
    product: {
      id: 6,
      title: "Samsung 55-inch Smart TV",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop",
      price: 42000
    },
    buyer: {
      id: 1,
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    seller: {
      id: 6,
      name: "Vikram Reddy",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop"
    },
    message: "Can you do 38,000 for the TV? I can pay in cash.",
    status: "rejected",
    requestDate: "2024-01-12",
    type: "outgoing"
  },
  {
    id: 5,
    product: {
      id: 5,
      title: "Wooden Dining Table Set",
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=300&fit=crop",
      price: 35000
    },
    buyer: {
      id: 5,
      name: "Sneha Patel",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    },
    seller: {
      id: 1,
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    message: "Beautiful table! Is delivery included in the price?",
    status: "confirmed",
    requestDate: "2024-01-11",
    type: "incoming"
  }
];
