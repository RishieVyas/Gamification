import { useCart } from '../context/CartContext'
import './CartPage.css'

function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart()

  const subtotal = getCartTotal()
  const shipping = subtotal > 0 ? 9.95 : 0
  const estimatedTotal = subtotal + shipping

  if (cartItems.length === 0) {
    return (
      <section className="cart-page">
        <div className="cart-empty">
          <h1>Shopping Bag</h1>
          <p className="empty-message">Your cart is empty</p>
          <p className="empty-subtext">Items in bag are not reserved and may sell out. Order now.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="cart-page">
      <div className="cart-container">
        <div className="cart-left">
          <div className="cart-header">
            <h1>Shopping Bag <span className="item-count">({cartItems.length} item{cartItems.length !== 1 ? 's' : ''})</span></h1>
            <p className="cart-notice">ⓘ Items in bag are not reserved and may sell out. Order now.</p>
          </div>

          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price">${item.price}</p>
                  
                  <div className="cart-item-controls">
                    <div className="quantity-selector">
                      <label>Qty</label>
                      <select 
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="cart-item-actions">
                      <button className="action-btn">Edit</button>
                      <button 
                        className="action-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  
                  <p className="stock-status">In Stock: Ships in 1-2 business days</p>
                </div>
                
                <div className="cart-item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cart-right">
          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Standard Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Tax</span>
              <span>Calculated in checkout</span>
            </div>
            <div className="summary-total">
              <span>Estimated Total</span>
              <span>${estimatedTotal.toFixed(2)}</span>
            </div>
            
            <p className="payment-info">
              <strong>Klarna</strong> and <strong>Afterpay</strong> available for orders $35 - $1000.
            </p>
            
            <button className="checkout-btn">Start Checkout</button>
            
            <p className="checkout-alt">or check out with</p>
            
            <button className="paypal-btn">
              <span className="paypal-logo">PayPal</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartPage

