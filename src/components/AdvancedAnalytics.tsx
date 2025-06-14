import React, { useEffect } from 'react'

/**
 * Advanced Analytics and Conversion Tracking System
 * Implements comprehensive business intelligence and lead attribution
 */

interface AnalyticsEvent {
  event: string
  category: string
  value?: number
  label?: string
  customDimensions?: Record<string, string>
}

class AdvancedAnalytics {
  private static instance: AdvancedAnalytics
  private initialized = false
  
  static getInstance(): AdvancedAnalytics {
    if (!AdvancedAnalytics.instance) {
      AdvancedAnalytics.instance = new AdvancedAnalytics()
    }
    return AdvancedAnalytics.instance
  }

  init() {
    if (this.initialized) return
    
    // Initialize Google Analytics 4
    this.initializeGA4()
    
    // Initialize Facebook Pixel
    this.initializeFacebookPixel()
    
    // Initialize LinkedIn Insight Tag
    this.initializeLinkedInInsight()
    
    // Initialize custom heat mapping
    this.initializeHeatmapping()
    
    // Initialize lead scoring
    this.initializeLeadScoring()
    
    this.initialized = true
    console.log('Advanced Analytics initialized successfully')
  }

  private initializeGA4() {
    // Google Analytics 4 implementation
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID'
    document.head.appendChild(script)

    ;(window as any).dataLayer = (window as any).dataLayer || []
    ;(window as any).gtag = function() {
      ;(window as any).dataLayer.push(arguments)
    }
    ;(window as any).gtag('js', new Date())
    ;(window as any).gtag('config', 'GA_MEASUREMENT_ID', {
      send_page_view: false,
      custom_map: {
        custom_parameter_1: 'lead_score',
        custom_parameter_2: 'company_size',
        custom_parameter_3: 'industry'
      }
    })
  }

  private initializeFacebookPixel() {
    // Facebook Pixel for B2B lead tracking
    ;(function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      }
      if (!f._fbq) f._fbq = n
      n.push = n
      n.loaded = !0
      n.version = '2.0'
      n.queue = []
      t = b.createElement(e)
      t.async = !0
      t.src = v
      s = b.getElementsByTagName(e)[0]
      s.parentNode.insertBefore(t, s)
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
    
    ;(window as any).fbq('init', 'FB_PIXEL_ID')
    ;(window as any).fbq('track', 'PageView')
  }

  private initializeLinkedInInsight() {
    // LinkedIn Insight Tag for B2B tracking
    ;(window as any)._linkedin_partner_id = "LINKEDIN_PARTNER_ID"
    ;(window as any)._linkedin_data_partner_ids = (window as any)._linkedin_data_partner_ids || []
    ;(window as any)._linkedin_data_partner_ids.push((window as any)._linkedin_partner_id)

    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js'
    document.head.appendChild(script)
  }

  private initializeHeatmapping() {
    // Custom heatmapping and session recording
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://static.hotjar.com/c/hotjar-HOTJAR_ID.js?sv=6'
    document.head.appendChild(script)
  }

  private initializeLeadScoring() {
    // Initialize client-side lead scoring
    this.trackUserBehavior()
    this.identifyCompanyData()
  }

  // Enhanced Event Tracking
  trackEvent(event: AnalyticsEvent) {
    // Google Analytics 4
    ;(window as any).gtag('event', event.event, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      ...event.customDimensions
    })

    // Facebook Pixel
    ;(window as any).fbq('trackCustom', event.event, {
      category: event.category,
      label: event.label,
      value: event.value
    })

    // Custom analytics endpoint
    this.sendToCustomAnalytics(event)
  }

  // Lead Scoring System
  private trackUserBehavior() {
    const sessionData: any = {
      timeOnSite: 0,
      pagesViewed: [],
      interactions: []
    }

    // Time on site tracking
    const startTime = Date.now()
    setInterval(() => {
      sessionData.timeOnSite = Math.floor((Date.now() - startTime) / 1000)
    }, 1000)

    // Page view tracking
    const observer = new MutationObserver(() => {
      const currentPath = window.location.pathname + window.location.hash
      if (!sessionData.pagesViewed.includes(currentPath)) {
        sessionData.pagesViewed.push(currentPath)
        this.calculateLeadScore(sessionData)
      }
    })
    observer.observe(document.body, { childList: true, subtree: true })

    // Interaction tracking
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement
      if (target.matches('button, a, [data-track]')) {
        const interaction = {
          type: 'click',
          element: target.tagName,
          text: target.textContent?.slice(0, 50),
          timestamp: Date.now()
        }
        sessionData.interactions.push(interaction)
        this.calculateLeadScore(sessionData)
      }
    })
  }

  private calculateLeadScore(sessionData: any) {
    let score = 0

    // Time on site scoring
    if (sessionData.timeOnSite > 300) score += 20 // 5+ minutes
    if (sessionData.timeOnSite > 600) score += 30 // 10+ minutes

    // Page depth scoring
    score += Math.min(sessionData.pagesViewed.length * 10, 50)

    // High-value page visits
    const highValuePages = ['#pricing', '#enterprise-resources', '#contact']
    highValuePages.forEach(page => {
      if (sessionData.pagesViewed.some((p: string) => p.includes(page))) {
        score += 25
      }
    })

    // Interaction scoring
    score += Math.min(sessionData.interactions.length * 5, 40)

    // Store and track score
    localStorage.setItem('leadScore', score.toString())
    this.trackEvent({
      event: 'lead_score_update',
      category: 'engagement',
      value: score,
      customDimensions: { score_range: this.getScoreRange(score) }
    })
  }

  private getScoreRange(score: number): string {
    if (score >= 100) return 'hot'
    if (score >= 60) return 'warm'
    if (score >= 30) return 'lukewarm'
    return 'cold'
  }

  private async identifyCompanyData() {
    // Company identification based on email domain or IP
    try {
      const response = await fetch('https://api.clearbit.com/v2/people/find', {
        headers: {
          'Authorization': 'Bearer CLEARBIT_API_KEY'
        }
      })
      
      if (response.ok) {
        const data = await response.json()
        this.trackEvent({
          event: 'company_identified',
          category: 'enrichment',
          customDimensions: {
            company: data.company?.name,
            industry: data.company?.category?.industry,
            employees: data.company?.metrics?.employees?.toString()
          }
        })
      }
    } catch (error) {
      console.log('Company enrichment unavailable')
    }
  }

  // Revenue Attribution Tracking
  trackRevenue(amount: number, currency = 'USD', transactionId?: string) {
    this.trackEvent({
      event: 'purchase',
      category: 'revenue',
      value: amount,
      customDimensions: {
        currency,
        transaction_id: transactionId || Date.now().toString()
      }
    })

    // Enhanced revenue tracking for enterprise deals
    ;(window as any).gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: amount,
      currency: currency,
      items: [{
        item_id: 'enterprise_service',
        item_name: 'Enterprise Digital Transformation',
        category: 'services',
        quantity: 1,
        price: amount
      }]
    })
  }

  // Campaign Attribution
  trackCampaignSource() {
    const urlParams = new URLSearchParams(window.location.search)
    const utmData = {
      source: urlParams.get('utm_source'),
      medium: urlParams.get('utm_medium'),
      campaign: urlParams.get('utm_campaign'),
      content: urlParams.get('utm_content'),
      term: urlParams.get('utm_term')
    }

    if (Object.values(utmData).some(value => value !== null)) {
      localStorage.setItem('campaignAttribution', JSON.stringify(utmData))
      this.trackEvent({
        event: 'campaign_attribution',
        category: 'acquisition',
        customDimensions: utmData as Record<string, string>
      })
    }
  }

  // A/B Testing Framework
  initializeABTesting() {
    const experiments = [
      {
        id: 'hero_headline_test',
        variants: ['control', 'variant_a', 'variant_b'],
        traffic: 0.33
      },
      {
        id: 'pricing_display_test',
        variants: ['table', 'cards'],
        traffic: 0.5
      }
    ]

    experiments.forEach(experiment => {
      const variant = this.assignVariant(experiment)
      document.documentElement.setAttribute(`data-${experiment.id}`, variant)
      
      this.trackEvent({
        event: 'ab_test_assignment',
        category: 'experimentation',
        customDimensions: {
          experiment_id: experiment.id,
          variant: variant
        }
      })
    })
  }

  private assignVariant(experiment: any): string {
    const userId = this.getUserId()
    const hash = this.simpleHash(userId + experiment.id)
    const bucket = hash % 100
    
    let cumulative = 0
    for (const variant of experiment.variants) {
      cumulative += experiment.traffic * 100
      if (bucket < cumulative) {
        return variant
      }
    }
    return experiment.variants[0]
  }

  private getUserId(): string {
    let userId = localStorage.getItem('analytics_user_id')
    if (!userId) {
      userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
      localStorage.setItem('analytics_user_id', userId)
    }
    return userId
  }

  private simpleHash(str: string): number {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i)
      hash = ((hash << 5) - hash) + char
      hash = hash & hash // Convert to 32-bit integer
    }
    return Math.abs(hash)
  }

  private async sendToCustomAnalytics(event: AnalyticsEvent) {
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...event,
          timestamp: Date.now(),
          user_id: this.getUserId(),
          session_id: sessionStorage.getItem('session_id') || 'session_' + Date.now(),
          page_url: window.location.href,
          referrer: document.referrer,
          user_agent: navigator.userAgent
        })
      })
    } catch (error) {
      console.log('Custom analytics endpoint unavailable')
    }
  }

  // Public API methods for component usage
  trackFormSubmission(formType: string, leadData: any) {
    const leadScore = parseInt(localStorage.getItem('leadScore') || '0')
    
    this.trackEvent({
      event: 'form_submission',
      category: 'conversion',
      value: leadScore,
      customDimensions: {
        form_type: formType,
        lead_score: leadScore.toString(),
        company: leadData.company || 'unknown',
        title: leadData.title || 'unknown'
      }
    })

    // Mark as conversion
    ;(window as any).gtag('event', 'conversion', {
      send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
      value: leadScore,
      currency: 'USD'
    })
  }

  trackLeadMagnetDownload(magnetType: string, value: string) {
    this.trackEvent({
      event: 'lead_magnet_download',
      category: 'engagement',
      label: magnetType,
      customDimensions: {
        magnet_type: magnetType,
        magnet_value: value
      }
    })
  }

  trackPricingEngagement(packageName: string, price: string) {
    this.trackEvent({
      event: 'pricing_engagement',
      category: 'consideration',
      label: packageName,
      customDimensions: {
        package: packageName,
        price_range: price
      }
    })
  }
}

const AdvancedAnalyticsProvider: React.FC = () => {
  useEffect(() => {
    const analytics = AdvancedAnalytics.getInstance()
    analytics.init()
    analytics.trackCampaignSource()
    analytics.initializeABTesting()

    // Track page view
    analytics.trackEvent({
      event: 'page_view',
      category: 'navigation',
      customDimensions: {
        page_path: window.location.pathname + window.location.hash
      }
    })

    // Setup global analytics for easy access
    ;(window as any).analytics = analytics
  }, [])

  return null
}

export default AdvancedAnalyticsProvider
export { AdvancedAnalytics }