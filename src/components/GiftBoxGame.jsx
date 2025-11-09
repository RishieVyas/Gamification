import { useState } from 'react'
import './GiftBoxGame.css'

function GiftBoxGame({ onGameComplete, orderTotal }) {
  const [selectedBox, setSelectedBox] = useState(null)
  const [isRevealing, setIsRevealing] = useState(false)
  const [discount, setDiscount] = useState(null)

  // Randomly assign discounts to boxes
  const discounts = [10, 20, 0].sort(() => Math.random() - 0.5)

  const handleBoxClick = (boxIndex) => {
    if (selectedBox !== null) return // Prevent clicking after selection

    setSelectedBox(boxIndex)
    setIsRevealing(true)
    
    const boxDiscount = discounts[boxIndex]
    setDiscount(boxDiscount)

    // Wait for animation, then show results and proceed
    setTimeout(() => {
      setTimeout(() => {
        onGameComplete(boxDiscount)
      }, 2000) // Show the discount for 2 seconds before proceeding
    }, 1000)
  }

  return (
    <div className="gift-game-overlay">
      <div className="gift-game-container">
        <div className="gift-game-header">
          <h1 className="gift-game-title">CHOOSE A GIFT & WIN</h1>
          <p className="gift-game-subtitle">See immediately if you have won a prize 🎁</p>
        </div>

        <div className="gift-boxes-container">
          {[0, 1, 2].map((boxIndex) => (
            <div
              key={boxIndex}
              className={`gift-box ${selectedBox === boxIndex ? 'selected' : ''} ${
                selectedBox !== null && selectedBox !== boxIndex ? 'unselected' : ''
              }`}
              onClick={() => handleBoxClick(boxIndex)}
            >
              {selectedBox === boxIndex && isRevealing ? (
                <div className="gift-reveal">
                  <div className="discount-circle">
                    {discount === 0 ? (
                      <>
                        <div className="no-discount-icon">✕</div>
                        <div className="discount-text">No Discount</div>
                        <div className="discount-subtext">Better luck next time!</div>
                      </>
                    ) : (
                      <>
                        <div className="discount-percentage">{discount}%</div>
                        <div className="discount-text">OFF</div>
                        <div className="discount-subtext">Congratulations! 🎉</div>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <div className="gift-box-visual">
                  <svg viewBox="0 0 200 220" className="gift-svg">
                    {/* Gift box body */}
                    <rect x="30" y="80" width="140" height="140" fill="#E8E8E8" />
                    
                    {/* Ribbon vertical */}
                    <rect x="85" y="80" width="30" height="140" fill="#6366f1" />
                    
                    {/* Gift box lid */}
                    <ellipse cx="100" cy="80" rx="75" ry="15" fill="#D0D0D0" />
                    <ellipse cx="100" cy="80" rx="75" ry="10" fill="#E8E8E8" />
                    
                    {/* Ribbon horizontal on lid */}
                    <rect x="30" y="73" width="140" height="14" fill="#6366f1" />
                    
                    {/* Bow circles */}
                    <circle cx="75" cy="50" r="22" fill="#4f46e5" />
                    <circle cx="125" cy="50" r="22" fill="#4f46e5" />
                    
                    {/* Bow center knot */}
                    <rect x="90" y="45" width="20" height="30" fill="#6366f1" rx="3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {selectedBox === null && (
          <p className="gift-game-instruction">Click on any gift box to reveal your discount!</p>
        )}
      </div>
    </div>
  )
}

export default GiftBoxGame

