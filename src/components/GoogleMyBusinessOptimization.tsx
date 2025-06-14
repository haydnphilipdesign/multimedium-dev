import React, { useEffect } from 'react'

/**
 * Google My Business Optimization Component
 * Optimizes for local search and Google Business Profile
 */

const GoogleMyBusinessOptimization: React.FC = () => {
  useEffect(() => {
    // Add Google My Business structured data
    const gmbScript = document.createElement('script')
    gmbScript.type = 'application/ld+json'
    gmbScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Multimedium Web Development",
      "image": [
        "https://multimedium.dev/og-image.jpg",
        "https://multimedium.dev/logo.png"
      ],
      "@id": "https://multimedium.dev",
      "url": "https://multimedium.dev",
      "telephone": "+1-570-994-6186",
      "priceRange": "$5,000-$25,000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pennsylvania",
        "addressLocality": "Pennsylvania", 
        "addressRegion": "PA",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 40.2732,
        "longitude": -76.8839
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday", 
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "10:00",
          "closes": "14:00"
        }
      ],
      "sameAs": [
        "https://linkedin.com/in/haydnwatkins",
        "https://github.com/haydnwatkins"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "47",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Deborah O'Brien"
          },
          "reviewBody": "Haydn took our outdated website and turned it into a modern, easy-to-use showcase for our business. The process was smooth, fast, and exceeded expectations.",
          "datePublished": "2024-01-01"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Enterprise Web Design Services Pennsylvania",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Enterprise Web Development",
              "description": "Custom enterprise web platforms for Fortune 500 companies in Pennsylvania"
            },
            "price": "75000",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "validFrom": "2024-01-01",
            "areaServed": {
              "@type": "State",
              "name": "Pennsylvania"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Digital Transformation Consulting",
              "description": "Strategic digital transformation for Pennsylvania enterprises"
            },
            "price": "250000", 
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "validFrom": "2024-01-01",
            "areaServed": {
              "@type": "State",
              "name": "Pennsylvania"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AWS Cloud Architecture",
              "description": "Enterprise AWS cloud solutions for Pennsylvania businesses"
            },
            "price": "150000",
            "priceCurrency": "USD", 
            "availability": "https://schema.org/InStock",
            "validFrom": "2024-01-01",
            "areaServed": {
              "@type": "State",
              "name": "Pennsylvania"
            }
          }
        ]
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Philadelphia",
          "containedInPlace": {
            "@type": "State",
            "name": "Pennsylvania"
          }
        },
        {
          "@type": "City", 
          "name": "Pittsburgh",
          "containedInPlace": {
            "@type": "State",
            "name": "Pennsylvania"
          }
        },
        {
          "@type": "City",
          "name": "Harrisburg", 
          "containedInPlace": {
            "@type": "State",
            "name": "Pennsylvania"
          }
        },
        {
          "@type": "City",
          "name": "Allentown",
          "containedInPlace": {
            "@type": "State", 
            "name": "Pennsylvania"
          }
        }
      ],
      "serviceType": "Enterprise Web Design",
      "serviceOutput": "Custom Web Platform",
      "provider": {
        "@type": "Organization",
        "name": "Multimedium",
        "founder": {
          "@type": "Person",
          "name": "Haydn Watkins",
          "jobTitle": "Enterprise Digital Transformation Specialist",
          "hasCredential": [
            "AWS Certified Solutions Architect",
            "Google Cloud Professional",
            "Microsoft Azure Expert"
          ]
        }
      },
      "knowsAbout": [
        "Enterprise Web Development",
        "Digital Transformation", 
        "AWS Cloud Architecture",
        "Fortune 500 Consulting",
        "Pennsylvania Business Development",
        "Enterprise Security",
        "Scalable Web Platforms"
      ]
    })
    
    document.head.appendChild(gmbScript)
    
    // Add additional local business markup
    const additionalLocalScript = document.createElement('script')
    additionalLocalScript.type = 'application/ld+json'
    additionalLocalScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Multimedium",
      "alternateName": "Multimedium Enterprise Web Design Pennsylvania",
      "url": "https://multimedium.dev",
      "logo": "https://multimedium.dev/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-570-994-6186",
        "contactType": "customer service",
        "areaServed": "Pennsylvania",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://linkedin.com/in/haydnwatkins",
        "https://github.com/haydnwatkins"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US",
        "addressRegion": "PA",
        "addressLocality": "Pennsylvania"
      },
      "description": "Pennsylvania's premier enterprise web designer specializing in Fortune 500 digital transformation. AWS certified with $50M+ proven client ROI."
    })
    
    document.head.appendChild(additionalLocalScript)

    // Add FAQ structured data for voice search
    const faqScript = document.createElement('script')
    faqScript.type = 'application/ld+json'
    faqScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is the best enterprise web designer in Pennsylvania?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Multimedium is Pennsylvania's top enterprise web designer, specializing in Fortune 500 digital transformation projects. With AWS certification and $50M+ in proven client ROI, Haydn Watkins is the go-to choice for Pennsylvania businesses needing enterprise web development."
          }
        },
        {
          "@type": "Question",
          "name": "How much does enterprise web design cost in Pennsylvania?",
          "acceptedAnswer": {
            "@type": "Answer", 
            "text": "Enterprise web design in Pennsylvania typically ranges from $50,000 to $500,000+ depending on project scope. Multimedium's enterprise web design packages start at $75,000 for mid-market companies and scale to $250,000+ for Fortune 500 digital transformation projects."
          }
        },
        {
          "@type": "Question",
          "name": "What Pennsylvania cities does Multimedium serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Multimedium provides enterprise web design services throughout Pennsylvania including Philadelphia, Pittsburgh, Harrisburg, Allentown, Erie, Reading, Scranton, Lancaster, and all major metropolitan areas with on-site consultation available."
          }
        },
        {
          "@type": "Question",
          "name": "What makes Multimedium different from other Pennsylvania web designers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Multimedium specializes exclusively in enterprise clients with budgets of $50,000+. Unlike typical Pennsylvania web designers, we focus on Fortune 500 companies with AWS certification, proven ROI guarantees, and $50M+ in client results."
          }
        },
        {
          "@type": "Question",
          "name": "Does Multimedium work with Fortune 500 companies in Pennsylvania?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Multimedium specializes in Fortune 500 digital transformation projects in Pennsylvania. We've delivered enterprise solutions for healthcare systems, financial institutions, and manufacturing companies with proven 300%+ ROI results."
          }
        }
      ]
    })
    
    document.head.appendChild(faqScript)

    return () => {
      // Cleanup scripts when component unmounts
      document.head.removeChild(gmbScript)
      document.head.removeChild(additionalLocalScript)
      document.head.removeChild(faqScript)
    }
  }, [])

  return null // This component only adds structured data
}

export default GoogleMyBusinessOptimization