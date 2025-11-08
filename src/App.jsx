import { useState, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import Spotlight from './components/Spotlight'
import PromoSection from './components/PromoSection'
import Footer from './components/Footer'
import ApparelSection from './components/ApparelSection'
import WatchesSection from './components/WatchesSection'
import ShoesSection from './components/ShoesSection'
import './index.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home') // home, apparel, watches, shoes
  const featuredProductsRef = useRef(null)

  const handleStartShopping = () => {
    setCurrentPage('apparel')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToHome = () => {
    setCurrentPage('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleProductsClick = () => {
    if (currentPage !== 'home') {
      // If not on home page, navigate to home first
      setCurrentPage('home')
      // Wait for the page to render, then scroll
      setTimeout(() => {
        featuredProductsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    } else {
      // If already on home page, just scroll
      featuredProductsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleNavigate = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderContent = () => {
    switch(currentPage) {
      case 'apparel':
        return <ApparelSection />
      case 'watches':
        return <WatchesSection />
      case 'shoes':
        return <ShoesSection />
      case 'home':
      default:
        return (
          <>
            <Hero onStartShopping={handleStartShopping} />
            <div ref={featuredProductsRef}>
              <FeaturedProducts onNavigate={handleNavigate} />
            </div>
            <Spotlight />
            <PromoSection />
          </>
        )
    }
  }

  return (
    <div className="app">
      <Navbar onHomeClick={handleBackToHome} onProductsClick={handleProductsClick} />
      {renderContent()}
      <Footer />
    </div>
  )
}

export default App
