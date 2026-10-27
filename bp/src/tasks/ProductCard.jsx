import styles from '../styles/ProductCard.module.css'

function ProductCard({ name, price, salePrice, stock }) {
  const finalPrice = salePrice ?? price
  let colorClass
  let stockLevel

  if (stock === 0) {
    colorClass = 'low'
    stockLevel = 'Sold out'
  } else if (stock >= 1 && stock <= 5) {
    colorClass = 'medium'
    stockLevel = `Only ${stock} left in stock!`
  } else {
    colorClass = 'high'
    stockLevel = 'In Stock'
  }

  return (
    <div className={styles.product}>
      <h3>{name}</h3>
      <p className={styles[colorClass]}>{stockLevel}</p>
        {salePrice > 0? <h6> <p className = "strike"> {price.toFixed(2)}</p> ${salePrice.toFixed(2)}</h6> : null}
        {finalPrice >=35? <p>Free Shipping</p> : <p>Shipping: $5.99</p>}
        {stock>0?<button>add to cart</button> : <button disabled>Out of Stock</button>}
    </div>
  )
}

export default ProductCard
