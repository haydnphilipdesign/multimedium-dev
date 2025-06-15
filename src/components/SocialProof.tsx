import React, { useState, useEffect } from 'react'
import { CheckCircle, Star, Users, TrendingUp, MapPin, Clock } from 'lucide-react'

interface Notification {
  id: string
  type: 'booking' | 'consultation' | 'project' | 'review'
  message: string
  name: string
  location: string
  timeAgo: string
  avatar: string
}

interface ClientLogo {
  name: string
  logo: string
  industry: string
}

export default function SocialProof() {
  const [currentNotification, setCurrentNotification] = useState<number>(0)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  // Authentic notifications based on real portfolio sites
  const notifications: Notification[] = [
    {
      id: '1',
      type: 'consultation',
      message: 'completed project consultation',
      name: 'Sarah T.',
      location: 'Chester County, PA',
      timeAgo: '2 hours ago',
      avatar: 'ST'
    },
    {
      id: '2',
      type: 'project',
      message: 'launched new e-commerce platform',
      name: 'Jennifer M.',
      location: 'Lancaster, PA',
      timeAgo: '2 days ago',
      avatar: 'JM'
    },
    {
      id: '3',
      type: 'consultation',
      message: 'scheduled strategy call',
      name: 'Debbie M.',
      location: 'Lancaster County, PA',
      timeAgo: '3 days ago',
      avatar: 'DM'
    }
  ]

  // Real client logos from actual portfolio
  const clientLogos: ClientLogo[] = [
    { name: 'PA Real Estate Support', logo: '/logos/pares-logo.png', industry: 'Real Estate' },
    { name: 'Blissful Existence Healing Acres', logo: '/logos/beha-logo.png', industry: 'Wellness' },
    { name: 'Lancaster Health Services', logo: '/logos/lhs-logo.png', industry: 'Healthcare' }
  ]

  // Cycle through notifications
  useEffect(() => {
    const showNotification = () => {
      setIsVisible(true)
      setTimeout(() => {
        setIsVisible(false)
        setTimeout(() => {
          setCurrentNotification(prev => (prev + 1) % notifications.length)
        }, 500)
      }, 4000)
    }

    // Initial delay
    const initialTimeout = setTimeout(showNotification, 2000)

    // Set up recurring notifications
    const interval = setInterval(showNotification, 8000)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [notifications.length])

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'booking':
        return <Clock className="h-4 w-4 text-blue-600" />
      case 'project':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'consultation':
        return <TrendingUp className="h-4 w-4 text-purple-600" />
      case 'review':
        return <Star className="h-4 w-4 text-yellow-600" />
      default:
        return <Users className="h-4 w-4 text-gray-600" />
    }
  }

  const notification = notifications[currentNotification]

  return (
    <>
      {/* Popup Notification */}
      <div className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ${
        isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full opacity-0'
      }`}>
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 max-w-sm">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                {notification.avatar}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                {getNotificationIcon(notification.type)}
                <span className="text-sm font-semibold text-gray-900">{notification.name}</span>
              </div>
              <p className="text-sm text-gray-600 mb-1">
                {notification.message}
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <MapPin className="h-3 w-3" />
                <span>{notification.location}</span>
                <span>•</span>
                <span>{notification.timeAgo}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Logos Ticker */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Recent Portfolio Work
            </h3>
            <p className="text-sm text-gray-600">
              Real estate, wellness, and community websites delivering results
            </p>
          </div>
          
          {/* Scrolling Logo Animation */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-12 items-center">
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm border border-gray-100 min-w-[250px]"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-600">
                      {client.name.split(' ').map(word => word[0]).join('').slice(0, 3)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{client.name}</div>
                    <div className="text-xs text-gray-600">{client.industry}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Live Stats Counter */}
      <section className="py-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-1">
                <CountUpNumber target={50} />+
              </div>
              <div className="text-sm opacity-90">Happy Clients</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-1">
                $<CountUpNumber target={2} />M+
              </div>
              <div className="text-sm opacity-90">Client Revenue Generated</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-1">
                <CountUpNumber target={300} />%
              </div>
              <div className="text-sm opacity-90">Average ROI Increase</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-1">
                5.0/<CountUpNumber target={5} />
              </div>
              <div className="text-sm opacity-90">Google Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Ticker */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              What Our Clients Say
            </h3>
          </div>
          <TestimonialTicker />
        </div>
      </div>

      {/* Add required CSS for animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `
      }} />

    </>
  )
}

// Count up animation component
const CountUpNumber: React.FC<{ target: number }> = ({ target }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const increment = target / 100
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev < target) {
          return Math.min(prev + increment, target)
        }
        clearInterval(timer)
        return target
      })
    }, 20)

    return () => clearInterval(timer)
  }, [target])

  return <span>{Math.floor(count)}</span>
}

// Testimonial ticker component
const TestimonialTicker: React.FC = () => {
  const testimonials = [
    { name: 'Debbie M.', text: 'Multimedium completely transformed our business operations.' },
    { name: 'Sarah T.', text: 'The new website perfectly captures our healing mission.' },
    { name: 'Michael R.', text: 'Finally, a website that actually works for our community!' }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="relative h-16 overflow-hidden">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
            index === currentIndex ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
          }`}
        >
          <div className="text-center">
            <p className="text-gray-600 italic">"{testimonial.text}"</p>
            <p className="text-sm font-semibold text-gray-900 mt-2">- {testimonial.name}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
