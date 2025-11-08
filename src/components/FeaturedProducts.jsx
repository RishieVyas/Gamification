import './FeaturedProducts.css'

function FeaturedProducts({ onNavigate }) {
  const products = [
    {
      id: 1,
      title: 'New Arrivals',
      subtitle: 'Premium watches collection',
      image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80',
      page: 'watches'
    },
    {
      id: 2,
      title: 'Best Sellers',
      subtitle: 'Top rated footwear',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
      page: 'shoes'
    },
    {
      id: 3,
      title: 'Limited Edition',
      subtitle: 'Exclusive drops',
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80',
      page: 'shoes'
    }
  ]

  const handleNavigate = (page) => {
    onNavigate(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="featured-products">
      <div className="featured-grid">
        {products.map(product => (
          <div key={product.id} className="featured-card">
            <div className="featured-image" style={{ backgroundImage: `url(${product.image})` }}>
              <div className="featured-overlay">
                <h3 className="featured-title">{product.title}</h3>
                <p className="featured-subtitle">{product.subtitle}</p>
                <button 
                  className="featured-button"
                  onClick={() => handleNavigate(product.page)}
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProducts

