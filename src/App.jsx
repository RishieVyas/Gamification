import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import Spotlight from './components/Spotlight'
import PromoSection from './components/PromoSection'
import Footer from './components/Footer'
import ApparelSection from './components/ApparelSection'
import './index.css'

function App() {
  const [showApparel, setShowApparel] = useState(false)

  const handleStartShopping = () => {
    setShowApparel(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToHome = () => {
    setShowApparel(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app">
      <Navbar onHomeClick={handleBackToHome} />
      {showApparel ? (
        <>
          <ApparelSection />
          <Footer />
        </>
      ) : (
        <>
          <Hero onStartShopping={handleStartShopping} />
          <FeaturedProducts />
          <Spotlight />
          <PromoSection />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
