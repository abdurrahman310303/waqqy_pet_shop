// Search utility functions for the pet shop
export const searchProducts = (products, query) => {
  if (!query) return products;
  
  return products.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase()) ||
    product.category?.toLowerCase().includes(query.toLowerCase())
  );
};

export const filterByCategory = (products, category) => {
  if (!category || category === 'all') return products;
  
  return products.filter(product => 
    product.category?.toLowerCase() === category.toLowerCase()
  );
};

export const sortProducts = (products, sortBy) => {
  const sorted = [...products];
  
  switch (sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
    case 'price-high':
      return sorted.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'newest':
      return sorted.sort((a, b) => b.id - a.id);
    case 'rating':
      return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    case 'popularity':
      return sorted.sort((a, b) => (b.sales || 0) - (a.sales || 0));
    default:
      return sorted;
  }
};

export const filterByPriceRange = (products, minPrice, maxPrice) => {
  return products.filter(product => {
    const price = parseFloat(product.price.replace('$', ''));
    return price >= minPrice && price <= maxPrice;
  });
};

export const filterByRating = (products, minRating) => {
  return products.filter(product => (product.rating || 0) >= minRating);
};

export const filterByAvailability = (products, inStockOnly) => {
  if (!inStockOnly) return products;
  return products.filter(product => product.inStock !== false);
};
