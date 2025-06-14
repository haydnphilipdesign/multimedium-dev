import React, { useEffect } from 'react'

/**
 * Google Analytics 4 Setup
 * Configure with your Google Analytics measurement ID
 */

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

const GoogleAnalytics: React.FC = () => {
  useEffect(() => {
    // Replace 'G-XXXXXXXXXX' with your actual Google Analytics 4 Measurement ID
    const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'
    
    // Only load in production or when GA_MEASUREMENT_ID is set to actual ID
    if (GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
      console.log('Google Analytics ready for setup - replace G-XXXXXXXXXX with your measurement ID')
      return
    }

    // Load Google Analytics script
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script)

    // Initialize dataLayer and gtag
    window.dataLayer = window.dataLayer || []
    window.gtag = function() {
      window.dataLayer.push(arguments)
    }

    // Configure Google Analytics
    window.gtag('js', new Date())
    window.gtag('config', GA_MEASUREMENT_ID, {
      // Enhanced measurement events
      enhanced_measurement: true,
      // Custom parameters for web development business
      custom_map: {
        'custom_dimension_1': 'service_interest',
        'custom_dimension_2': 'budget_range', 
        'custom_dimension_3': 'project_type'
      }
    })

    // Track page view
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href
    })

    console.log('Google Analytics 4 initialized')
  }, [])

  return null
}

// Analytics helper functions for tracking conversions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

export const trackContactFormSubmission = (formType: string = 'contact') => {
  trackEvent('generate_lead', {
    event_category: 'form_submission',
    event_label: formType,
    value: 1
  })
}

export const trackPhoneClick = () => {
  trackEvent('phone_call', {
    event_category: 'contact',
    event_label: 'phone_number_click',
    value: 1
  })
}

export const trackPortfolioView = (projectName: string) => {
  trackEvent('view_item', {
    event_category: 'portfolio',
    event_label: projectName,
    item_name: projectName
  })
}

export const trackPricingView = (packageName: string) => {
  trackEvent('view_item', {
    event_category: 'pricing',
    event_label: packageName,
    item_name: packageName
  })
}

export const trackBlogRead = (articleTitle: string) => {
  trackEvent('view_item', {
    event_category: 'blog',
    event_label: articleTitle,
    item_name: articleTitle
  })
}

export default GoogleAnalytics