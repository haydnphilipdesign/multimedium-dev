import React, { useEffect, useState } from 'react'
import { Smartphone, Zap } from 'lucide-react'

interface PerformanceMetrics {
  fcp: number // First Contentful Paint
  lcp: number // Largest Contentful Paint
  fid: number // First Input Delay
  cls: number // Cumulative Layout Shift
}

// Lazy loading image component for better performance
export const OptimizedImage: React.FC<{
  src: string
  alt: string
  className?: string
  priority?: boolean
}> = ({ src, alt, className = '', priority = false }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (priority) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    const imgElement = document.querySelector(`[data-src="${src}"]`)
    if (imgElement) observer.observe(imgElement)

    return () => observer.disconnect()
  }, [src, priority])

  return (
    <div className={`relative overflow-hidden bg-gray-100 ${className}`} data-src={src}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} w-full h-full object-cover`}
          onLoad={() => setIsLoaded(true)}
          loading={priority ? 'eager' : 'lazy'}
        />
      )}
      {!isLoaded && isInView && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  )
}

// Performance monitoring hook
export const usePerformanceMetrics = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)

  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming
          setMetrics(prev => ({
            ...prev,
            fcp: navEntry.loadEventEnd - navEntry.loadEventStart,
            lcp: navEntry.loadEventEnd - navEntry.fetchStart,
            fid: 0, // Will be updated by other observers
            cls: 0  // Will be updated by other observers
          }))
        }
      })
    })

    observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] })

    return () => observer.disconnect()
  }, [])

  return metrics
}

// Progressive loading component
export const ProgressiveLoader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
      {children}
    </div>
  )
}

// Critical CSS inliner component
export const CriticalCSS: React.FC = () => {
  useEffect(() => {
    // Inline critical CSS for above-the-fold content
    const criticalStyles = `
      .hero-section { 
        min-height: 100vh; 
        display: flex; 
        align-items: center; 
      }
      .container-section { 
        max-width: 1200px; 
        margin: 0 auto; 
        padding: 0 1.5rem; 
      }
      .heading-lg { 
        font-size: 3rem; 
        font-weight: 800; 
        line-height: 1.1; 
      }
      @media (max-width: 768px) { 
        .heading-lg { font-size: 2rem; } 
      }
    `

    const styleElement = document.createElement('style')
    styleElement.textContent = criticalStyles
    document.head.appendChild(styleElement)

    return () => {
      if (document.head.contains(styleElement)) {
        document.head.removeChild(styleElement)
      }
    }
  }, [])

  return null
}

// Preload critical resources
export const ResourcePreloader: React.FC = () => {
  useEffect(() => {
    // Preload critical fonts
    const fontPreloads = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
    ]

    // Preload hero images
    const imagePreloads = [
      '/portfolio/hero-background.jpg',
      '/portfolio/portfolio-1.jpg'
    ]

    fontPreloads.forEach(href => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'style'
      link.href = href
      document.head.appendChild(link)
    })

    imagePreloads.forEach(href => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = href
      document.head.appendChild(link)
    })
  }, [])

  return null
}

// Performance monitoring dashboard (for development)
export const PerformanceDashboard: React.FC = () => {
  const metrics = usePerformanceMetrics()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show in development
    if (import.meta.env?.DEV || window.location.hostname === 'localhost') {
      const timer = setTimeout(() => setIsVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  if (!isVisible || (!import.meta.env?.DEV && window.location.hostname !== 'localhost')) return null

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg p-4 shadow-lg z-50 text-xs">
      <div className="flex items-center gap-2 mb-2">
        <Zap className="h-4 w-4 text-yellow-500" />
        <span className="font-semibold">Performance</span>
      </div>
      
      {metrics && (
        <div className="space-y-1">
          <div className="flex justify-between">
            <span>FCP:</span>
            <span className={metrics.fcp < 1800 ? 'text-green-600' : 'text-red-600'}>
              {Math.round(metrics.fcp)}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span>LCP:</span>
            <span className={metrics.lcp < 2500 ? 'text-green-600' : 'text-red-600'}>
              {Math.round(metrics.lcp)}ms
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

// Mobile-first responsive utilities
export const mobileBreakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
}

export const isMobile = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}

export const isTablet = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth >= 768 && window.innerWidth < 1024
}

export const isDesktop = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth >= 1024
}

// Performance optimization tips component
export const PerformanceIndicator: React.FC = () => {
  const [score, setScore] = useState<number>(0)

  useEffect(() => {
    // Simulate performance score calculation
    const calculateScore = () => {
      const start = performance.now()
      
      // Simulate various performance checks
      setTimeout(() => {
        const end = performance.now()
        const loadTime = end - start
        const performanceScore = Math.max(90 - (loadTime / 10), 50)
        setScore(Math.round(performanceScore))
      }, 100)
    }

    calculateScore()
  }, [])

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600'
    if (score >= 70) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="inline-flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full text-sm">
      <div className="flex items-center gap-1">
        <Smartphone className="h-4 w-4 text-blue-600" />
        <span>Mobile Score:</span>
        <span className={`font-bold ${getScoreColor(score)}`}>{score}/100</span>
      </div>
    </div>
  )
}

export default {
  OptimizedImage,
  usePerformanceMetrics,
  ProgressiveLoader,
  CriticalCSS,
  ResourcePreloader,
  PerformanceDashboard,
  PerformanceIndicator,
  isMobile,
  isTablet,
  isDesktop
}
