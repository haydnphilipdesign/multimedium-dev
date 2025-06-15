import React, { useState, useEffect } from 'react'
import { X, Star, Clock, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ExitIntentPopupProps {
  onClose: () => void
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ onClose }) => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    // Here you would integrate with your email service
    console.log('Free audit requested for:', email)
    setIsSubmitted(true)
    
    // Close popup after 2 seconds
    setTimeout(() => {
      onClose()
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl p-8 max-w-md w-full text-center animate-fade-in">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Audit Request Received! ✅</h3>
          <p className="text-gray-600">
            I'll personally review your website and send your custom audit within 24 hours.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full relative animate-scale-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Wait! Don't Leave Empty-Handed 🚀
            </h2>
            <p className="text-gray-600">
              Get a <span className="font-semibold text-primary">FREE 15-Point Website Audit</span> that reveals exactly how to increase your revenue
            </p>
          </div>

          {/* Value props */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Identify conversion bottlenecks costing you money</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Get specific recommendations to boost leads by 300%</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Delivered personally by me within 24 hours</span>
            </div>
          </div>

          {/* Urgency */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-6">
            <div className="flex items-center gap-2 text-red-700">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-semibold">Limited Time: Only 10 audits available this month</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email for instant access"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
            
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold py-3 hover:shadow-lg transition-all"
            >
              Get My FREE Website Audit ($497 Value)
            </Button>
          </form>

          {/* Trust signals */}
          <div className="text-center mt-4">
            <p className="text-xs text-gray-500">
              🔒 Your email is safe. No spam, just your personalized audit.
            </p>
            <div className="flex items-center justify-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-xs text-gray-600 ml-2">Trusted by 50+ PA businesses</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Exit intent hook
export const useExitIntent = () => {
  const [showPopup, setShowPopup] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from the top of the window and hasn't been shown
      if (e.clientY <= 0 && !hasShown) {
        setShowPopup(true)
        setHasShown(true)
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    
    // Also show after 30 seconds if not shown
    const timer = setTimeout(() => {
      if (!hasShown) {
        setShowPopup(true)
        setHasShown(true)
      }
    }, 30000)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      clearTimeout(timer)
    }
  }, [hasShown])

  const closePopup = () => {
    setShowPopup(false)
  }

  return { showPopup, closePopup }
}

export default ExitIntentPopup