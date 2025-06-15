import React, { useState, useEffect } from 'react'

interface RobustImageProps {
  src: string
  alt: string
  className?: string
  fallbackSrc?: string
  placeholder?: string
  loading?: 'lazy' | 'eager'
  onError?: () => void
  onLoad?: () => void
}

const RobustImage: React.FC<RobustImageProps> = ({
  src,
  alt,
  className = '',
  fallbackSrc,
  placeholder,
  loading = 'lazy',
  onError,
  onLoad
}) => {
  const [currentSrc, setCurrentSrc] = useState(src)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [retryCount, setRetryCount] = useState(0)

  // Reset state when src changes
  useEffect(() => {
    setCurrentSrc(src)
    setIsLoaded(false)
    setHasError(false)
    setRetryCount(0)
  }, [src])

  const handleLoad = () => {
    setIsLoaded(true)
    setHasError(false)
    onLoad?.()
  }

  const handleError = () => {
    console.log(`Image failed to load: ${currentSrc}`)
    
    // Try different strategies based on retry count
    if (retryCount === 0) {
      // First retry: try with timestamp to bypass cache
      const newSrc = `${src}?t=${Date.now()}`
      console.log(`Retrying with cache-busting: ${newSrc}`)
      setCurrentSrc(newSrc)
      setRetryCount(1)
    } else if (retryCount === 1 && fallbackSrc) {
      // Second retry: try fallback image
      console.log(`Using fallback image: ${fallbackSrc}`)
      setCurrentSrc(fallbackSrc)
      setRetryCount(2)
    } else if (retryCount === 2) {
      // Third retry: try original source with different origin
      const newSrc = src.startsWith('/') ? `${window.location.origin}${src}` : src
      console.log(`Retrying with full URL: ${newSrc}`)
      setCurrentSrc(newSrc)
      setRetryCount(3)
    } else {
      // Final fallback: show error state
      console.log('All retry attempts failed')
      setHasError(true)
      onError?.()
    }
  }

  // Show placeholder while loading
  if (!isLoaded && !hasError) {
    return (
      <div className={`bg-gray-100 animate-pulse flex items-center justify-center ${className}`}>
        {currentSrc && (
          <img
            src={currentSrc}
            alt={alt}
            className="w-full h-full object-cover opacity-0"
            loading={loading}
            onLoad={handleLoad}
            onError={handleError}
          />
        )}
        {placeholder ? (
          <span className="text-gray-400 text-sm">{placeholder}</span>
        ) : (
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        )}
      </div>
    )
  }

  // Show error state
  if (hasError) {
    return (
      <div className={`bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center ${className}`}>
        <div className="text-center text-gray-500 p-4">
          <div className="w-12 h-12 mx-auto mb-2 bg-gray-300 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-xs">Image unavailable</p>
        </div>
      </div>
    )
  }

  // Show loaded image
  return (
    <img
      src={currentSrc}
      alt={alt}
      className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      loading={loading}
      onLoad={handleLoad}
      onError={handleError}
    />
  )
}

export default RobustImage