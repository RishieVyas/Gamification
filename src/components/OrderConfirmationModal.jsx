import './OrderConfirmationModal.css'

function OrderConfirmationModal({ isOpen, onClose, onConfirm, paymentMethod }) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Confirm Order</h2>
          <button className="modal-close" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="modal-body">
          <div className="confirmation-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16v-4"/>
              <path d="M12 8h.01"/>
            </svg>
          </div>
          
          <h3 className="confirmation-title">Do you want to confirm this order?</h3>
          
          {paymentMethod === 'paypal' && (
            <p className="payment-notice">
              You will be redirected to PayPal to complete your payment.
            </p>
          )}
          
          {paymentMethod === 'checkout' && (
            <p className="payment-notice">
              You will proceed to checkout to enter your shipping and payment details.
            </p>
          )}
        </div>
        
        <div className="modal-footer">
          <button className="modal-btn modal-btn-no" onClick={onClose}>
            No, Cancel
          </button>
          <button className="modal-btn modal-btn-yes" onClick={onConfirm}>
            Yes, Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderConfirmationModal

