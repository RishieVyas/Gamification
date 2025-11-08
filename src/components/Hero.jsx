import './Hero.css'

function Hero({ onStartShopping }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">LEVEL UP YOUR STYLE</h1>
          <p className="hero-subtitle">Shop, earn points, unlock rewards—gaming meets fashion.</p>
          <button className="hero-button" onClick={onStartShopping}>Start Shopping</button>
        </div>
      </div>
    </section>
  )
}

export default Hero

