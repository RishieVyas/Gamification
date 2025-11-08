import './Navbar.css'

function Navbar({ onHomeClick, onProductsClick }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo" onClick={onHomeClick}>Gamified Shopping</h1>
      </div>
      
      <div className="navbar-center">
        <button className="nav-link" onClick={onHomeClick}>Home</button>
        <button className="nav-link" onClick={onProductsClick}>Products</button>
      </div>
      
      <div className="navbar-right">
        <button className="icon-button" aria-label="Cart">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
        </button>
        
        <button className="icon-button" aria-label="Profile">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar

