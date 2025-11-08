import './Spotlight.css'

function Spotlight() {
  const categories = [
    'Sneakers', 'Streetwear', 'Accessories', 'Limited Drops',
    'Athletic Gear', 'Casual Wear', 'Premium Collection', 'Sale Items'
  ]

  return (
    <section className="spotlight">
      <h2 className="spotlight-heading">SPOTLIGHT</h2>
      <p className="spotlight-subheading">Discover trending styles and exclusive collections</p>
      
      <div className="spotlight-grid">
        {categories.map((category, index) => (
          <div key={index} className="spotlight-card">
            <div className="spotlight-content">
              <h3>{category}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Spotlight

