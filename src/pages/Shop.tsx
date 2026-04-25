import { useEffect, useState } from 'react';
import './Shop.css';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  stock: number;
  rating: number;
}

const API_URL = 'http://localhost:3000/api/products';

function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, sortBy]);

  async function fetchProducts() {
    setLoading(true);
    setError('');

    const params = new URLSearchParams();
    if (selectedCategory) params.set('category', selectedCategory);
    if (sortBy) params.set('sort', sortBy);

    try {
      const res = await fetch(`${API_URL}?${params}`);
      if (!res.ok) throw new Error('Failed to fetch products');
      const data = await res.json();
      setProducts(data.products);
      setCategories(data.categories);
    } catch {
      setError('Unable to load products. Make sure the API server is running on port 3000.');
    } finally {
      setLoading(false);
    }
  }

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

          <div className="shop-controls">
            <div className="filter-group">
              <label htmlFor="category">Category:</label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="sort">Sort by:</label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="">Default</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>
          </div>

          {loading && (
            <div className="shop-status">
              <div className="spinner"></div>
              <p>Loading products...</p>
            </div>
          )}

          {error && (
            <div className="shop-error">
              <p>{error}</p>
              <button className="btn btn-primary" onClick={fetchProducts}>Retry</button>
            </div>
          )}

          {!loading && !error && (
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
                    <div className="product-meta">
                      <span className="product-rating">{'★'.repeat(Math.round(product.rating))} {product.rating}</span>
                      <span className="product-stock">{product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}</span>
                    </div>
                    <div className="product-footer">
                      <span className="product-price">${product.price.toFixed(2)}</span>
                      <button className="btn btn-primary btn-sm" disabled={product.stock === 0}>
                        {product.stock > 0 ? 'Add to Cart' : 'Sold Out'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && !error && products.length === 0 && (
            <div className="shop-status">
              <p>No products found matching your filters.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Shop;
