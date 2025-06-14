import { 
  Code, 
  Palette, 
  Smartphone, 
  Database,
  Globe,
  Shield,
  Sparkles,
  ArrowRight
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

/**
 * Services section component showcasing offered services
 * Features:
 * - Grid layout of service cards
 * - Icons and descriptions for each service
 * - Responsive design with hover effects
 * - Professional service descriptions
 * - Clean, modern card design
 */
const Services: React.FC = () => {
  // Services offered by Multimedium
  const services = [
    {
      id: 1,
      icon: <Code className="h-8 w-8" />,
      title: "Custom Website Design",
      description: "Unique, modern websites designed specifically for your business. From concept to launch, every site is crafted to reflect your brand and convert visitors.",
      features: ["Responsive Design", "Mobile-First Approach", "Brand Integration", "SEO Optimized"]
    },
    {
      id: 2,
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "User-centered design that prioritizes usability and conversion. Creating intuitive experiences that guide visitors toward your business goals.",
      features: ["User Experience Design", "Wireframing", "Prototyping", "Visual Design"]
    },
    {
      id: 3,
      icon: <Smartphone className="h-8 w-8" />,
      title: "Responsive Development",
      description: "Websites that work perfectly on every device. Clean, fast-loading sites built with modern web technologies and best practices.",
      features: ["Mobile Responsive", "Fast Loading", "Modern Code", "Cross-Browser Compatible"]
    },
    {
      id: 4,
      icon: <Globe className="h-8 w-8" />,
      title: "Branding & Logo Design",
      description: "Professional branding that makes your business memorable. Logo design, color palettes, and brand guidelines that work across all platforms.",
      features: ["Logo Design", "Brand Identity", "Color Schemes", "Brand Guidelines"]
    },
    {
      id: 5,
      icon: <Shield className="h-8 w-8" />,
      title: "Website Maintenance",
      description: "Keep your website secure, updated, and running smoothly. Regular maintenance ensures optimal performance and protects against security threats.",
      features: ["Security Updates", "Content Updates", "Performance Monitoring", "Backup Services"]
    },
    {
      id: 6,
      icon: <Database className="h-8 w-8" />,
      title: "Airtable & No-Code Integrations",
      description: "Streamline your business processes with custom Airtable databases and no-code automation solutions. Perfect for workflows and data management.",
      features: ["Airtable Setup", "Workflow Automation", "Data Integration", "Custom Forms"]
    }
  ]

  return (
    <section id="services" className="section-spacing">
      <div className="container-section">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Full-Service Digital Solutions</span>
          </div>
          <h2 className="heading-lg mb-6 animate-fade-in animation-delay-200">
            Services That <span className="gradient-text">Drive Growth</span>
          </h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in animation-delay-300">
            From concept to launch and beyond, I provide everything you need to 
            <span className="font-semibold text-foreground"> dominate your digital landscape</span>. 
            Each service is designed to work together, creating a cohesive experience that converts.
          </p>
        </div>

        {/* Enhanced Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className={`group hover-lift cursor-pointer relative overflow-hidden bg-gradient-to-br from-white to-primary/5 border border-primary/10 h-full animate-fade-in animation-delay-${index * 100 + 400}`}
            >
              <CardHeader className="text-center relative">
                {/* Service icon with enhanced styling */}
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl text-primary group-hover:from-primary group-hover:to-accent group-hover:text-white group-hover:scale-110 transition-all duration-300 w-fit animate-glow">
                  {service.icon}
                </div>
                
                <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
                
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-2xl"></div>
              </CardHeader>

              <CardContent className="relative">
                {/* Service features with enhanced styling */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`flex items-center text-sm text-muted-foreground animate-slide-up animation-delay-${featureIndex * 50 + 600}`}>
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Call to action */}
                <div className="flex items-center justify-between text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="absolute inset-0 rounded-lg shadow-xl shadow-primary/10"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Process section */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <ArrowRight className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">The Multimedium Method</span>
          </div>
          <h3 className="heading-md mb-8 animate-fade-in animation-delay-200">
            A Process <span className="gradient-text">Designed for Success</span>
          </h3>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto mb-16 animate-fade-in animation-delay-300">
            Every project follows a proven methodology that ensures your vision becomes reality, 
            on time and <span className="font-semibold text-foreground">beyond expectations</span>.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Deep dive into your vision, goals, and target audience", color: "from-blue-500 to-blue-600" },
              { step: "02", title: "Design", description: "Crafting wireframes and stunning visuals that convert", color: "from-purple-500 to-purple-600" },
              { step: "03", title: "Development", description: "Building with modern tech and pixel-perfect precision", color: "from-green-500 to-green-600" },
              { step: "04", title: "Launch", description: "Rigorous testing, seamless deployment, ongoing success", color: "from-orange-500 to-orange-600" }
            ].map((phase, index) => (
              <div key={index} className={`relative animate-scale-in animation-delay-${index * 200 + 400}`}>
                {/* Step number with gradient */}
                <div className={`text-6xl font-bold bg-gradient-to-r ${phase.color} bg-clip-text text-transparent mb-4 opacity-20`}>
                  {phase.step}
                </div>
                
                {/* Step content */}
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-primary/10 hover-lift group">
                  <h4 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {phase.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>
                </div>
                
                {/* Connector line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-accent/30 transform -translate-y-1/2 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services