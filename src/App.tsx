import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

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
      {/* Fixed header with navigation */}
      <Header />
      
      {/* Main content sections */}
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <About />
        <Contact />
      </main>
      
      {/* Footer with social links and contact info */}
      <Footer />
    </div>
  )
}

export default App