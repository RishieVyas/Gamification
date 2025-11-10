import { useState } from 'react'
import './ThankYouPage.css'

function ThankYouPage({ orderDetails }) {
  const { subtotal, shipping, discount, discountAmount, finalTotal } = orderDetails
  const [feedbackData, setFeedbackData] = useState({
    name: '',
    email: '',
    experience: ''
  })
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFeedbackData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmitFeedback = async (e) => {
    e.preventDefault()
    
    // Replace this URL with your Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz_aIyjRei-WrjVgo4YFAKytZtUQ2ze7Q6jz0mWsa9iBRAIWXBtBhVtiMjQeqagNh9KrQ/exec'
    
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: feedbackData.name,
          email: feedbackData.email,
          experience: feedbackData.experience
        })
      })
      
      console.log('Feedback sent to Google Sheets')
      setFeedbackSubmitted(true)
      
    } catch (error) {
      console.error('Error submitting feedback:', error)
      // Still show success to user (no-cors mode doesn't allow reading response)
      setFeedbackSubmitted(true)
    }
  }

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

        <div className="feedback-form-card">
          {!feedbackSubmitted ? (
            <>
              <h2 className="feedback-title">We'd Love Your Feedback!</h2>
              <p className="feedback-subtitle">
                Help us improve your shopping experience
              </p>
              
              <form onSubmit={handleSubmitFeedback} className="feedback-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={feedbackData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={feedbackData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="experience">Your Experience</label>
                  <p className="form-help-text">
                    How was your shopping experience? Did you enjoy the gift box game?
                  </p>
                  <textarea
                    id="experience"
                    name="experience"
                    value={feedbackData.experience}
                    onChange={handleInputChange}
                    placeholder="Share your thoughts about the shopping experience and the gift box game..."
                    rows="5"
                    required
                  />
                </div>

                <button type="submit" className="feedback-submit-btn">
                  Submit Feedback
                </button>
              </form>
            </>
          ) : (
            <div className="feedback-success">
              <div className="feedback-success-icon">✓</div>
              <h3>Thank You for Your Feedback!</h3>
              <p>We appreciate you taking the time to share your thoughts with us.</p>
            </div>
          )}
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

