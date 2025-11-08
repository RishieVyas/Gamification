import { useState } from 'react'
import './ApparelSection.css'

function ApparelSection() {
  const [selectedFilter, setSelectedFilter] = useState(null)

  const categories = [
    {
      id: 1,
      name: 'Tops & Sweaters',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80'
    },
    {
      id: 2,
      name: 'Jackets & Coats',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80'
    },
    {
      id: 3,
      name: 'Pants',
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80'
    },
    {
      id: 4,
      name: 'Jeans',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80'
    },
    {
      id: 5,
      name: 'Shoes & Bags',
      image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&q=80'
    }
  ]

  const filters = ['Category', 'Size', 'Color', 'Price', 'Fit']

  const products = [
    {
      id: 1,
      name: 'Premium Cotton T-Shirt',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80'
    },
    {
      id: 2,
      name: 'Slim Fit Jeans',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1542272454315-7ad9e2592b7e?w=400&q=80'
    },
    {
      id: 3,
      name: 'Leather Jacket',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80'
    },
    {
      id: 4,
      name: 'Casual Sneakers',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&q=80'
    },
    {
      id: 5,
      name: 'Wool Sweater',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80'
    },
    {
      id: 6,
      name: 'Chino Pants',
      price: 69.99,
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80'
    },
    {
      id: 7,
      name: 'Denim Jacket',
      price: 119.99,
      image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&q=80'
    },
    {
      id: 8,
      name: 'Running Shoes',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80'
    }
  ]

  return (
    <section className="apparel-section">
      <div className="breadcrumb">
        <span>Men</span>
      </div>

      <h1 className="apparel-heading">Men's Clothing & Accessories</h1>

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
          <span className="items-count">1,839 Items</span>
          <span className="sort-label">Sort By</span>
          <select className="sort-select">
            <option>Recommended</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
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
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ApparelSection

