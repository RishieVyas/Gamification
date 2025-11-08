import './FeaturedProducts.css'

function FeaturedProducts() {
  const products = [
    {
      id: 1,
      title: 'New Arrivals',
      subtitle: 'Fresh styles for the season',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80'
    },
    {
      id: 2,
      title: 'Best Sellers',
      subtitle: 'Customer favorites',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80'
    },
    {
      id: 3,
      title: 'Limited Edition',
      subtitle: 'Exclusive drops',
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80'
    }
  ]

  return (
    <section className="featured-products">
      <div className="featured-grid">
        {products.map(product => (
          <div key={product.id} className="featured-card">
            <div className="featured-image" style={{ backgroundImage: `url(${product.image})` }}>
              <div className="featured-overlay">
                <h3 className="featured-title">{product.title}</h3>
                <p className="featured-subtitle">{product.subtitle}</p>
                <button className="featured-button">Shop Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProducts

