import { useState } from 'react'
import { useCart } from '../context/CartContext'
import './WatchesSection.css'

function WatchesSection() {
  const [selectedFilter, setSelectedFilter] = useState(null)
  const { addToCart } = useCart()

  const categories = [
    {
      id: 1,
      name: 'Smart Watches',
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80'
    },
    {
      id: 2,
      name: 'Luxury Collection',
      image: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&q=80'
    },
    {
      id: 3,
      name: 'Sport Watches',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80'
    },
    {
      id: 4,
      name: 'Classic Timepieces',
      image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80'
    },
    {
      id: 5,
      name: 'Digital Watches',
      image: 'https://images.unsplash.com/photo-1434493907317-a46b5bbe7834?w=800&q=80'
    }
  ]

  const filters = ['Category', 'Brand', 'Price', 'Style', 'Material']

  const products = [
    {
      id: 'watch-1',
      name: 'Classic Steel Watch',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80'
    },
    {
      id: 'watch-2',
      name: 'Smart Fitness Watch',
      price: 399.99,
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80'
    },
    {
      id: 'watch-3',
      name: 'Luxury Gold Edition',
      price: 1299.99,
      image: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=600&q=80'
    },
    {
      id: 'watch-4',
      name: 'Sport Chronograph',
      price: 549.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80'
    },
    {
      id: 'watch-5',
      name: 'Minimalist Black',
      price: 249.99,
      image: 'https://images.unsplash.com/photo-1434493907317-a46b5bbe7834?w=600&q=80'
    },
    {
      id: 'watch-6',
      name: 'Rose Gold Classic',
      price: 899.99,
      image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=600&q=80'
    },
    {
      id: 'watch-7',
      name: 'Digital Smart Watch',
      price: 449.99,
      image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&q=80'
    },
    {
      id: 'watch-8',
      name: 'Skeleton Mechanical',
      price: 799.99,
      image: 'https://images.unsplash.com/photo-1606404993639-03e36b5c7c8b?w=600&q=80'
    },
    {
      id: 'watch-9',
      name: 'Leather Strap Watch',
      price: 349.99,
      image: 'https://images.unsplash.com/photo-1611057916377-eb35f146d569?w=600&q=80'
    },
    {
      id: 'watch-10',
      name: 'Titanium Sport',
      price: 649.99,
      image: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600&q=80'
    },
    {
      id: 'watch-11',
      name: 'Vintage Leather',
      price: 429.99,
      image: 'https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=600&q=80'
    },
    {
      id: 'watch-12',
      name: 'Modern Automatic',
      price: 999.99,
      image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600&q=80'
    }
  ]

  return (
    <section className="watches-section">
      <div className="breadcrumb">
        <span>New Arrivals</span> / <span>Watches</span>
      </div>

      <h1 className="watches-heading">Premium Watches Collection</h1>

      {/* Category Cards */}
      <div className="category-grid">
        {categories.map(category => (
          <div key={category.id} className="category-card">
            <div 
              className="category-image" 
              style={{ backgroundImage: `url(${category.image})` }}
            >
              <div className="category-overlay">
                <h3 className="category-name">{category.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="filters-container">
        <div className="filters-left">
          {filters.map((filter, index) => (
            <button 
              key={index} 
              className={`filter-button ${selectedFilter === filter ? 'active' : ''}`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 9L1 4h10z"/>
              </svg>
            </button>
          ))}
          <button className="filter-button all-filters">
            All Filters
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </button>
        </div>

        <div className="filters-right">
          <span className="items-count">246 Items</span>
          <span className="sort-label">Sort By</span>
          <select className="sort-select">
            <option>Recommended</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
            <option>Best Rated</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div 
              className="product-image" 
              style={{ backgroundImage: `url(${product.image})` }}
            />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price}</p>
              <button 
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WatchesSection

