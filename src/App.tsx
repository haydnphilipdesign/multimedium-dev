import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import About from './components/About'
import Pricing from './components/Pricing'
import LeadMagnets from './components/LeadMagnets'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BasicAnalytics from './components/AdvancedAnalytics'
import GoogleMyBusinessOptimization from './components/GoogleMyBusinessOptimization'
import Blog from './components/Blog'

/**
 * Main App component for Multimedium.dev portfolio website
 * Single-page application with smooth scrolling sections
 * Responsive design optimized for desktop and mobile
 * 
 * Structure:
 * - Header with navigation
 * - Hero section with introduction
 * - Portfolio showcase
 * - Services offered
 * - About section
 * - Contact form
 * - Footer with social links
 */
function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Basic Analytics & SEO */}
      <BasicAnalytics />
      <GoogleMyBusinessOptimization />
      
      {/* Fixed header with navigation */}
      <Header />
      
      {/* Main content sections */}
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <Pricing />
        <About />
        <LeadMagnets />
        <Blog />
        <Contact />
      </main>
      
      {/* Footer with social links and contact info */}
      <Footer />
    </div>
  )
}

export default App