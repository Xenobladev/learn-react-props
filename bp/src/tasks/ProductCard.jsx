function ProductCard({ name, price, salePrice, stock }) {
  const finalPrice = salePrice ?? price   // use salePrice if it exists, otherwise price
 
  return (
    <div className="product-card">
      <h3>{name}</h3>
      {/* your conditional parts go here */}
      
    </div>
  )
}
 
export default ProductCard
