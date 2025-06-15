import React, { useState, useEffect } from 'react'
import { TrendingUp, DollarSign, Users, Calendar } from 'lucide-react'

interface ClientWin {
  id: number
  client: string
  achievement: string
  value: string
  icon: React.ReactNode
  timeAgo: string
}

const ClientWinsTicker: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const wins: ClientWin[] = [
    {
      id: 1,
      client: "PA Real Estate Support",
      achievement: "increased lead generation by",
      value: "250%",
      icon: <TrendingUp className="h-4 w-4" />,
      timeAgo: "2 weeks ago"
    },
    {
      id: 2,
      client: "Blissful Existence Healing",
      achievement: "boosted online bookings by",
      value: "400%",
      icon: <Calendar className="h-4 w-4" />,
      timeAgo: "1 month ago"
    },
    {
      id: 3,
      client: "Falls Community Association",
      achievement: "reduced admin costs by",
      value: "$45K/year",
      icon: <DollarSign className="h-4 w-4" />,
      timeAgo: "6 weeks ago"
    },
    {
      id: 4,
      client: "Lancaster Local Business",
      achievement: "increased member engagement by",
      value: "180%",
      icon: <Users className="h-4 w-4" />,
      timeAgo: "3 weeks ago"
    },
    {
      id: 5,
      client: "York County Wellness Center",
      achievement: "generated additional revenue of",
      value: "$127K",
      icon: <DollarSign className="h-4 w-4" />,
      timeAgo: "1 week ago"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % wins.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [wins.length])

  useEffect(() => {
    // Show/hide based on scroll position
    const handleScroll = () => {
      setIsVisible(window.scrollY < window.innerHeight * 2)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  const currentWin = wins[currentIndex]

  return (
    <div className="fixed top-20 left-4 z-30 max-w-sm">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 animate-slide-in-left">
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-medium text-green-700">Recent Success</span>
          <span className="text-xs text-gray-500">{currentWin.timeAgo}</span>
        </div>

        {/* Content */}
        <div className="flex items-start gap-3">
          <div className="p-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg text-primary flex-shrink-0">
            {currentWin.icon}
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-900 leading-relaxed">
              <span className="font-semibold">{currentWin.client}</span>
              {' '}{currentWin.achievement}{' '}
              <span className="font-bold text-green-600">{currentWin.value}</span>
            </p>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex gap-1 mt-3">
          {wins.map((_, index) => (
            <div
              key={index}
              className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClientWinsTicker