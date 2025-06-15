import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react'
import { trackPhoneClick } from './AdvancedAnalytics'
import Logo from './Logo'

/**
 * Footer component with contact information and social links
 * Features:
 * - Company contact details
 * - Social media links
 * - Copyright information
 * - Responsive design
 */
const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/haydnwatkins', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/haydnwatkins', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/multimedium.dev', label: 'Instagram' },
  ]

  const contactInfo = [
    { icon: Mail, text: 'haydn@multimedium.dev', href: 'mailto:haydn@multimedium.dev' },
    { icon: Phone, text: '(570) 994-6186', href: 'tel:+15709946186' },
    { icon: MapPin, text: 'Pennsylvania, USA', href: '#' },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-section py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo size="lg" variant="full" />
            <p className="text-muted-foreground leading-relaxed">
              Boutique web design and UI/UX studio specializing in clean, modern websites 
              and custom digital experiences for small businesses and organizations.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact</h4>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => {
                    if (item.href.startsWith('tel:')) {
                      trackPhoneClick()
                    }
                  }}
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <item.icon className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">{item.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation links */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
              <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</a>
              <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
              <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Haydn Watkins. Designed & built by Haydn Watkins.
            </p>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Visit us at</span>
              <a 
                href="https://multimedium.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                multimedium.dev
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer