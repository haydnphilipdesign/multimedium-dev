import React, { useState, useEffect } from 'react'
import { CheckCircle, TrendingUp, Star, X } from 'lucide-react'

/**
 * Social proof notification system to show recent client wins
 * Creates urgency and demonstrates real results
 */

interface Notification {
  id: number
  name: string
  action: string
  value: string
  timeAgo: string
  type: 'success' | 'revenue' | 'review'
}

const SocialProofNotifications: React.FC = () => {
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  const notifications: Notification[] = [
    {
      id: 1,
      name: "Sarah M.",
      action: "launched her real estate platform",
      value: "$45K project",
      timeAgo: "2 hours ago",
      type: "success"
    },
    {
      id: 2,
      name: "Michael T.",
      action: "increased online bookings by 300%",
      value: "Be Healing Acres",
      timeAgo: "5 hours ago", 
      type: "revenue"
    },
    {
      id: 3,
      name: "Jennifer R.",
      action: "left a 5-star review",
      value: "\"Exceptional results!\"",
      timeAgo: "1 day ago",
      type: "review"
    },
    {
      id: 4,
      name: "David L.",
      action: "streamlined HOA operations",
      value: "$28K savings/year",
      timeAgo: "3 days ago",
      type: "revenue"
    },
    {
      id: 5,
      name: "Lisa K.",
      action: "doubled her conversion rate",
      value: "150% increase",
      timeAgo: "1 week ago",
      type: "success"
    }
  ]

  useEffect(() => {
    const showNotification = () => {
      const randomNotification = notifications[Math.floor(Math.random() * notifications.length)]
      setCurrentNotification(randomNotification)
      setIsVisible(true)

      // Auto hide after 8 seconds
      setTimeout(() => {
        setIsVisible(false)
      }, 8000)
    }

    // Show first notification after 5 seconds
    const initialDelay = setTimeout(showNotification, 5000)
    
    // Then show random notifications every 15-25 seconds
    const interval = setInterval(() => {
      const randomDelay = 15000 + Math.random() * 10000 // 15-25 seconds
      setTimeout(showNotification, randomDelay)
    }, 25000)

    return () => {
      clearTimeout(initialDelay)
      clearInterval(interval)
    }
  }, [])

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case 'revenue':
        return <TrendingUp className="h-4 w-4 text-blue-500" />
      case 'review':
        return <Star className="h-4 w-4 text-yellow-500 fill-current" />
      default:
        return <CheckCircle className="h-4 w-4 text-green-500" />
    }
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!currentNotification || !isVisible) return null

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-slide-up">
      <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 max-w-sm relative hover:shadow-2xl transition-all duration-300">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-start gap-3">
          {/* Icon */}
          <div className="flex-shrink-0 mt-0.5">
            {getIcon(currentNotification.type)}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1 mb-1">
              <span className="font-semibold text-gray-900 text-sm">
                {currentNotification.name}
              </span>
              <span className="text-xs text-gray-500">
                {currentNotification.timeAgo}
              </span>
            </div>
            
            <p className="text-sm text-gray-700 leading-relaxed">
              {currentNotification.action}
            </p>
            
            <div className="mt-2">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                {currentNotification.value}
              </span>
            </div>
          </div>
        </div>

        {/* Pulse indicator */}
        <div className="absolute -top-1 -left-1 w-3 h-3">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
          <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default SocialProofNotifications