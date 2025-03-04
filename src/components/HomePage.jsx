// ... existing code ...

// Update the price formatting logic
const formatPrice = (price) => {
  if (!price) return "N/A";
  // Remove non-numeric characters except decimal point
  const numericPrice = price.toString().replace(/[^0-9.]/g, '');
  return parseFloat(numericPrice) || 0;
};

// In your render/map function
{products.map((product) => (
  <div key={product.id} className="product-card">
    <img src={product.image} alt={product.title} />
    <h3>{product.title}</h3>
    <p>Price: ₹{formatPrice(product.price).toLocaleString('en-IN')}</p>
    {/* ... rest of your product card code ... */}
  </div>
))}

// ... existing code ...