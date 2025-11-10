import { useState } from 'react'
import { useCart } from '../context/CartContext'
import OrderConfirmationModal from './OrderConfirmationModal'
import GiftBoxGame from './GiftBoxGame'
import ThankYouPage from './ThankYouPage'
import './CartPage.css'

function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('')
  const [showGame, setShowGame] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const [orderDetails, setOrderDetails] = useState(null)

  const subtotal = getCartTotal()
  const shipping = subtotal > 0 ? 9.95 : 0
  const estimatedTotal = subtotal + shipping

  const handleCheckoutClick = (method) => {
    setPaymentMethod(method)
    setIsModalOpen(true)
  }

  const handleConfirmOrder = () => {
    setIsModalOpen(false)
    
    // Check if game feature is enabled
    const isGameEnabled = import.meta.env.VITE_ENABLE_GAME === 'true'
    
    if (isGameEnabled) {
      // Show gift box game
      setShowGame(true)
    } else {
      // Skip game, go directly to thank you page with no discount
      const details = {
        subtotal,
        shipping,
        discount: 0,
        discountAmount: 0,
        finalTotal: subtotal + shipping,
        paymentMethod
      }
      setOrderDetails(details)
      setShowThankYou(true)
      clearCart()
    }
  }

  const handleGameComplete = (discount) => {
    setShowGame(false)
    
    // Calculate final amounts with discount
    const discountAmount = (subtotal * discount) / 100
    const finalTotal = subtotal + shipping - discountAmount

    const details = {
      subtotal,
      shipping,
      discount,
      discountAmount,
      finalTotal,
      paymentMethod
    }

    setOrderDetails(details)
    setShowThankYou(true)
    clearCart()
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setPaymentMethod('')
  }

  // Show Thank You page
  if (showThankYou && orderDetails) {
    return <ThankYouPage orderDetails={orderDetails} />
  }

  // Show Gift Box Game
  if (showGame) {
    return <GiftBoxGame onGameComplete={handleGameComplete} orderTotal={estimatedTotal} />
  }

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
            
            <button 
              className="checkout-btn"
              onClick={() => handleCheckoutClick('checkout')}
            >
              Start Checkout
            </button>
            
            <p className="checkout-alt">or check out with</p>
            
            <button 
              className="paypal-btn"
              onClick={() => handleCheckoutClick('paypal')}
            >
              <span className="paypal-logo">PayPal</span>
            </button>
          </div>
        </div>
      </div>

      <OrderConfirmationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmOrder}
        paymentMethod={paymentMethod}
      />
    </section>
  )
}

export default CartPage

