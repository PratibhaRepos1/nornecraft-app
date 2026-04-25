import './Shop.css';

const products = [
  {
    id: 1,
    name: 'Viking Drinking Horn',
    price: 49.99,
    category: 'Drinking Horns',
    image: '🍺',
    description: 'Authentic hand-polished drinking horn with brass rim.',
  },
  {
    id: 2,
    name: 'Norse Rune Pendant',
    price: 29.99,
    category: 'Jewelry',
    image: '🔮',
    description: 'Hand-carved rune pendant on genuine leather cord.',
  },
  {
    id: 3,
    name: 'Odin\'s Horn Mug Set',
    price: 89.99,
    category: 'Drinking Horns',
    image: '🏆',
    description: 'Set of two matching horn mugs with wooden stands.',
  },
  {
    id: 4,
    name: 'Viking Shield Coaster',
    price: 19.99,
    category: 'Home Decor',
    image: '🛡️',
    description: 'Hand-carved wooden coaster with Norse shield design.',
  },
  {
    id: 5,
    name: 'Thor\'s Hammer Keychain',
    price: 14.99,
    category: 'Accessories',
    image: '🔨',
    description: 'Cast metal Mjolnir keychain with antique finish.',
  },
  {
    id: 6,
    name: 'Runic Candle Holder',
    price: 34.99,
    category: 'Home Decor',
    image: '🕯️',
    description: 'Stone candle holder engraved with Elder Futhark runes.',
  },
];

function Shop() {
  return (
    <div className="shop">
      <div className="page-hero">
        <h1>Shop</h1>
      </div>

      <section className="shop-content">
        <div className="container">
          <div className="shop-banner">
            <h2>Coming Soon</h2>
            <p>Our full collection is being prepared. Browse our preview below.</p>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <span className="product-emoji">{product.image}</span>
                  <span className="product-category">{product.category}</span>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-footer">
                    <span className="product-price">${product.price.toFixed(2)}</span>
                    <button className="btn btn-primary btn-sm">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shop;
