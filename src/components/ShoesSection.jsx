import { useState } from 'react'
import { useCart } from '../context/CartContext'
import './ShoesSection.css'

function ShoesSection() {
  const [selectedFilter, setSelectedFilter] = useState(null)
  const { addToCart } = useCart()

  const categories = [
    {
      id: 1,
      name: 'Running Shoes',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80'
    },
    {
      id: 2,
      name: 'Casual Sneakers',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80'
    },
    {
      id: 3,
      name: 'Basketball Shoes',
      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80'
    },
    {
      id: 4,
      name: 'Classic Styles',
      image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80'
    },
    {
      id: 5,
      name: 'Limited Editions',
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80'
    }
  ]

  const filters = ['Category', 'Size', 'Color', 'Price', 'Brand']

  const products = [
    {
      id: 'shoe-1',
      name: 'Air Max Premium',
      price: 189.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80'
    },
    {
      id: 'shoe-2',
      name: 'Classic White Sneakers',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80'
    },
    {
      id: 'shoe-3',
      name: 'Basketball Pro Elite',
      price: 249.99,
      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80'
    },
    {
      id: 'shoe-4',
      name: 'Running Boost X',
      price: 179.99,
      image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&q=80'
    },
    {
      id: 'shoe-5',
      name: 'Limited Edition Retro',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80'
    },
    {
      id: 'shoe-6',
      name: 'Urban Street Style',
      price: 159.99,
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80'
    },
    {
      id: 'shoe-7',
      name: 'Red Sport Runner',
      price: 169.99,
      image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=600&q=80'
    },
    {
      id: 'shoe-8',
      name: 'Black Leather High-Top',
      price: 219.99,
      image: 'https://images.unsplash.com/photo-1520256862855-398228c41684?w=600&q=80'
    },
    {
      id: 'shoe-9',
      name: 'Casual Canvas Shoes',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80'
    },
    {
      id: 'shoe-10',
      name: 'Performance Training',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1603787081207-362bcef7f620?w=600&q=80'
    },
    {
      id: 'shoe-11',
      name: 'Vintage Collection',
      price: 139.99,
      image: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?w=600&q=80'
    },
    {
      id: 'shoe-12',
      name: 'Premium Leather',
      price: 279.99,
      image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&q=80'
    }
  ]

  return (
    <section className="shoes-section">
      <div className="breadcrumb">
        <span>Collections</span> / <span>Shoes</span>
      </div>

      <h1 className="shoes-heading">Premium Footwear Collection</h1>

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
          <span className="items-count">892 Items</span>
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

export default ShoesSection

