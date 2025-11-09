import './ThankYouPage.css'

function ThankYouPage({ orderDetails }) {
  const { subtotal, shipping, discount, discountAmount, finalTotal } = orderDetails

  return (
    <section className="thankyou-page">
      <div className="thankyou-container">
        <div className="thankyou-header">
          <div className="success-icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" stroke="#4ade80" />
              <path d="M9 12l2 2 4-4" stroke="#4ade80" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 className="thankyou-title">Order Confirmed!</h1>
          <p className="thankyou-subtitle">Thank you for shopping with us</p>
        </div>

        <div className="order-summary-card">
          <h2 className="summary-title">Order Summary</h2>
          
          <div className="summary-details">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            
            <div className="summary-row">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            
            {discount > 0 && (
              <div className="summary-row discount-row">
                <span className="discount-label">
                  🎉 Discount ({discount}% OFF)
                </span>
                <span className="discount-amount">-${discountAmount.toFixed(2)}</span>
              </div>
            )}
            
            <div className="summary-divider"></div>
            
            <div className="summary-row total-row">
              <span>Final Total</span>
              <span className="final-amount">${finalTotal.toFixed(2)}</span>
            </div>
          </div>

          {discount > 0 && (
            <div className="savings-badge">
              <span className="badge-icon">🎁</span>
              <span>You saved ${discountAmount.toFixed(2)} with your discount!</span>
            </div>
          )}
        </div>

        <div className="thankyou-message">
          <p className="message-text">
            We've sent a confirmation email with your order details. Your order will be processed shortly.
          </p>
        </div>

        <div className="thankyou-actions">
          <button className="btn-primary" onClick={() => window.location.reload()}>
            Continue Shopping
          </button>
        </div>

        <div className="thankyou-footer">
          <p>Need help? Contact us at support@gamifiedshopping.com</p>
        </div>
      </div>
    </section>
  )
}

export default ThankYouPage

