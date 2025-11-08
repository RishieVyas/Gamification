import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Shop</h3>
          <ul>
            <li><a href="#all">All Products</a></li>
            <li><a href="#new">New Arrivals</a></li>
            <li><a href="#sale">Sale</a></li>
            <li><a href="#featured">Featured</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li><a href="#status">Order Status</a></li>
            <li><a href="#shipping">Shipping & Delivery</a></li>
            <li><a href="#returns">Returns</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>About</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#rewards">Rewards Program</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#sustainability">Sustainability</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Connect</h3>
          <ul>
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#twitter">Twitter</a></li>
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#youtube">YouTube</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Gamified Shopping. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

