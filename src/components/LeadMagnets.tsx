import React from 'react'
import { ArrowRight, Calendar, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function LeadMagnets() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleCallClick = () => {
    window.location.href = 'tel:+1234567890'
  }

  const handleEmailClick = () => {
    window.location.href = 'mailto:contact@multimediumdesign.com'
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Transform Your Business?</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Stop losing customers to competitors with outdated websites. Let's discuss how a professional web presence can 10x your revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Free Consultation */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Free Strategy Call</h3>
            <p className="text-slate-300 mb-6">
              30-minute consultation to identify your biggest revenue opportunities
            </p>
            <Button 
              onClick={scrollToContact}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-xl transition-all duration-300"
            >
              Book Your Call <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Direct Phone */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Call Right Now</h3>
            <p className="text-slate-300 mb-6">
              Speak directly with our team about your project today
            </p>
            <Button 
              onClick={handleCallClick}
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300"
            >
              Call Now <Phone className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Email Contact */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Send Details</h3>
            <p className="text-slate-300 mb-6">
              Email us your project details for a custom proposal
            </p>
            <Button 
              onClick={handleEmailClick}
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-3 rounded-xl transition-all duration-300"
            >
              Email Us <Mail className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* CTA Bottom */}
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-6">
            Join 100+ businesses who increased their revenue by 300%+ with professional web design
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Started Today <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}