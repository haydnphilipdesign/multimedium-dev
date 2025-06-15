import React, { useState, useEffect } from 'react'
import { Phone, MessageCircle, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const StickyContactButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCall = () => {
    window.location.href = 'tel:+17175550123'
  }

  const handleContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded options */}
      {isExpanded && (
        <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 min-w-64 animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900">Get Your Free Audit</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(false)}
              className="h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-2">
            <Button
              onClick={handleCall}
              className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              Call (717) 555-0123
            </Button>
            
            <Button
              onClick={handleContact}
              variant="outline"
              className="w-full flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              Get Free Website Audit
            </Button>
          </div>
          
          <p className="text-xs text-gray-600 mt-3 text-center">
            ⚡ Next available: July 15th, 2025
          </p>
        </div>
      )}

      {/* Main sticky button */}
      <div className="relative">
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className="h-14 w-14 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-bounce-slow relative overflow-hidden"
        >
          <Phone className="h-6 w-6 text-white" />
          
          {/* Pulsing ring */}
          <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>
        </Button>
        
        {/* Notification badge */}
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold animate-pulse">
          3
        </div>
      </div>
    </div>
  )
}

export default StickyContactButton