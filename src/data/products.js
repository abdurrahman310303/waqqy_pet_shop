// Pet shop product catalog
export const products = [
  // Dog Food Section
  {
    id: 1,
    name: "Premium Dog Kibble",
    price: "$45.99",
    category: "dog-food",
    description: "High-protein dry dog food made with real chicken and vegetables",
    image: "images/item1.jpg",
    rating: 4.8,
    sales: 230,
    inStock: true,
    tags: ["premium", "chicken", "dry-food"]
  },
  {
    id: 2,
    name: "Grain-Free Puppy Food",
    price: "$52.99",
    category: "dog-food", 
    description: "Specially formulated grain-free nutrition for growing puppies",
    image: "images/item2.jpg",
    rating: 4.9,
    sales: 180,
    inStock: true,
    tags: ["grain-free", "puppy", "premium"]
  },
  {
    id: 3,
    name: "Senior Dog Formula",
    price: "$48.99",
    category: "dog-food",
    description: "Easy-to-digest food specially made for senior dogs",
    image: "images/item3.jpg", 
    rating: 4.6,
    sales: 145,
    inStock: true,
    tags: ["senior", "digestible", "health"]
  },

  // Cat Food Section
  {
    id: 4,
    name: "Gourmet Cat Treats",
    price: "$18.99",
    category: "cat-food",
    description: "Delicious salmon-flavored treats that cats absolutely love",
    image: "images/item4.jpg",
    rating: 4.7,
    sales: 320,
    inStock: true,
    tags: ["treats", "salmon", "gourmet"]
  },
  {
    id: 5,
    name: "Indoor Cat Food",
    price: "$38.99",
    category: "cat-food",
    description: "Complete nutrition for indoor cats with hairball control",
    image: "images/item5.jpg",
    rating: 4.5,
    sales: 210,
    inStock: true,
    tags: ["indoor", "hairball", "nutrition"]
  },

  // Pet Toys Section
  {
    id: 6,
    name: "Interactive Dog Puzzle",
    price: "$24.99",
    category: "toys",
    description: "Mental stimulation puzzle toy to keep your dog entertained",
    image: "images/item6.jpg",
    rating: 4.4,
    sales: 155,
    inStock: true,
    tags: ["puzzle", "interactive", "mental-stimulation"]
  },
  {
    id: 7,
    name: "Feather Cat Wand",
    price: "$12.99",
    category: "toys",
    description: "Interactive feather wand toy for active play with cats",
    image: "images/item7.jpg",
    rating: 4.8,
    sales: 280,
    inStock: true,
    tags: ["feather", "interactive", "exercise"]
  },
  {
    id: 8,
    name: "Rope Chew Toy",
    price: "$16.99",
    category: "toys",
    description: "Durable rope toy perfect for aggressive chewers",
    image: "images/item8.jpg",
    rating: 4.3,
    sales: 190,
    inStock: false,
    tags: ["rope", "chew", "durable"]
  },

  // Pet Clothing Section  
  {
    id: 9,
    name: "Cozy Winter Sweater",
    price: "$29.99",
    category: "clothing",
    description: "Warm and stylish sweater to keep your pet cozy in winter",
    image: "images/item9.jpg",
    rating: 4.6,
    sales: 125,
    inStock: true,
    tags: ["winter", "warm", "stylish"]
  },
  {
    id: 10,
    name: "Raincoat for Dogs",
    price: "$34.99",
    category: "clothing",
    description: "Waterproof raincoat with reflective strips for safety",
    image: "images/item10.jpg",
    rating: 4.7,
    sales: 95,
    inStock: true,
    tags: ["waterproof", "safety", "reflective"]
  },

  // Pet Accessories
  {
    id: 11,
    name: "Leather Dog Collar",
    price: "$19.99",
    category: "accessories",
    description: "Premium leather collar with personalized name tag",
    image: "images/item11.jpg",
    rating: 4.9,
    sales: 200,
    inStock: true,
    tags: ["leather", "personalized", "premium"]
  },
  {
    id: 12,
    name: "Automatic Water Fountain",
    price: "$89.99",
    category: "accessories",
    description: "Smart water fountain with filtration system for fresh water",
    image: "images/item12.jpg",
    rating: 4.5,
    sales: 85,
    inStock: true,
    tags: ["automatic", "filtration", "smart"]
  }
];

export const categories = [
  { id: 'all', name: 'All Products', icon: 'mdi:paw' },
  { id: 'dog-food', name: 'Dog Food', icon: 'mdi:dog' },
  { id: 'cat-food', name: 'Cat Food', icon: 'mdi:cat' },
  { id: 'toys', name: 'Pet Toys', icon: 'mdi:toy-brick' },
  { id: 'clothing', name: 'Pet Clothing', icon: 'mdi:tshirt-crew' },
  { id: 'accessories', name: 'Accessories', icon: 'mdi:collar' }
];
