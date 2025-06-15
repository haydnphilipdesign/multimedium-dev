import { Mail, Phone, MapPin, MessageSquare, Calendar } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { trackPhoneClick } from './AdvancedAnalytics'

/**
 * Contact section component with premium lead qualification
 * Features:
 * - Multi-step lead qualification form
 * - Contact information display
 * - Premium positioning
 * - Responsive design
 * - High-value prospect filtering
 */

const Contact: React.FC = () => {

  // Contact information
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "haydn@multimedium.dev",
      href: "mailto:haydn@multimedium.dev"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "(570) 994-6186",
      href: "tel:+15709946186"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Pennsylvania, USA",
      href: "#"
    }
  ]

  return (
    <section id="contact" className="section-spacing">
      <div className="container-section">
        {/* Enhanced Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <MessageSquare className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Ready to Start?</span>
          </div>
          <h2 className="heading-lg mb-6 animate-fade-in animation-delay-200">
            Let's Create Something <span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in animation-delay-300">
            Your next breakthrough is just one conversation away. I'm here to turn your vision into a 
            <span className="font-semibold text-foreground"> digital experience that drives real results</span>. 
            Let's make it happen together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Simple Contact Form */}
          <div className="animate-fade-in animation-delay-400">
            <Card className="bg-white/80 backdrop-blur-sm border border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Get Your Free Website Audit</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" 
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" 
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" 
                      placeholder="(570) 555-0123"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Website URL</label>
                    <input 
                      type="url" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" 
                      placeholder="https://yourwebsite.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Tell me about your business goals</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" 
                      placeholder="What are you hoping to achieve with your website?"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Get My Free Audit ($497 Value)
                  </button>
                  <p className="text-xs text-center text-gray-600">
                    🔒 Your information is secure. I'll personally review your website within 24 hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Contact Information */}
          <div className="space-y-8 animate-fade-in animation-delay-500">
            <div>
              <h3 className="heading-md mb-6">Other Ways to Connect</h3>
              <p className="body-md text-muted-foreground mb-8">
                Prefer a different approach? <span className="font-semibold text-foreground">I'm flexible</span>. 
                Choose whatever feels most comfortable for you—I'll respond quickly either way.
              </p>
            </div>

            {/* Enhanced Contact info cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className={`group hover-lift bg-gradient-to-r from-white to-primary/5 border border-primary/10 animate-scale-in animation-delay-${index * 100 + 600}`}>
                  <CardContent className="p-5">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl text-primary group-hover:from-primary group-hover:to-accent group-hover:text-white group-hover:scale-110 transition-all duration-300">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                        {info.href && info.href !== '#' ? (
                          <a 
                            href={info.href}
                            onClick={() => {
                              if (info.href.startsWith('tel:')) {
                                trackPhoneClick()
                              }
                            }}
                            className="font-semibold hover:text-primary transition-colors text-base"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-semibold text-base">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social links */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 animate-fade-in animation-delay-800">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold mb-4">Connect With Me</h4>
                <div className="flex justify-center gap-4">
                  <a 
                    href="https://linkedin.com/in/haydnwatkins" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-500/10 hover:bg-blue-500 text-blue-600 hover:text-white rounded-lg transition-all duration-300 hover:scale-110"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://github.com/haydnwatkins" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-500/10 hover:bg-gray-800 text-gray-600 hover:text-white rounded-lg transition-all duration-300 hover:scale-110"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://calendly.com/haydnwatkins" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-lg transition-all duration-300 hover:scale-110"
                  >
                    <Calendar className="h-5 w-5" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Let's connect and discuss your project!
                </p>
              </CardContent>
            </Card>

            {/* Enhanced Availability */}
            <Card className="bg-gradient-to-br from-white to-green-50 border border-green-200 animate-fade-in animation-delay-900">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h4 className="font-semibold text-green-800">I'm Available Now!</h4>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">10:00 AM - 2:00 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">By appointment</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-100 rounded-lg">
                  <p className="text-xs text-green-700 font-medium">
                    ⚡ Lightning-fast response: Usually within 4-8 hours!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact