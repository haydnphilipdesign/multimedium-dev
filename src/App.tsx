import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CalendarBooking from './components/CalendarBooking'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GoogleAnalytics from './components/AdvancedAnalytics'
import GoogleMyBusinessOptimization from './components/GoogleMyBusinessOptimization'
import SocialProof from './components/SocialProof'
import { CriticalCSS, ResourcePreloader, PerformanceDashboard } from './components/SpeedOptimization'
import StickyContactButton from './components/StickyContactButton'
import ExitIntentPopup, { useExitIntent } from './components/ExitIntentPopup'
import LiveChatWidget from './components/LiveChatWidget'
import './utils/imageDebug' // Load image debugging utilities

/**
 * Main App component for Multimedium.dev portfolio website
 * Streamlined for maximum lead conversion with focused flow
 * 
 * Optimized Conversion Flow:
 * - Hero: Immediate value proposition & hook
 * - Social Proof: Build trust with testimonials & notifications
 * - Portfolio: Showcase capability with ROI-focused case studies
 * - Pricing: Qualify leads with clear package options
 * - FAQ: Address common concerns and build trust
 * - Calendar Booking: Primary CTA to schedule consultation
 * - Contact: Backup CTA for direct inquiries
 */
function App() {
  const { showPopup, closePopup } = useExitIntent()

  return (
    <div className="min-h-screen bg-background">
      {/* Performance optimizations */}
      <CriticalCSS />
      <ResourcePreloader />
      <PerformanceDashboard />
      
      {/* Google Analytics & SEO */}
      <GoogleAnalytics />
      <GoogleMyBusinessOptimization />
      
      {/* Lead generation widgets */}
      <StickyContactButton />
      <LiveChatWidget />
      
      {/* Exit intent popup */}
      {showPopup && <ExitIntentPopup onClose={closePopup} />}
      
      {/* Fixed header with navigation */}
      <Header />
      
      {/* Main content sections - Streamlined for conversion */}
      <main>
        <Hero />
        <SocialProof />
        <Portfolio />
        <Pricing />
        <FAQ />
        <CalendarBooking />
        <Contact />
      </main>
      
      {/* Footer with social links and contact info */}
      <Footer />
    </div>
  )
}

export default App