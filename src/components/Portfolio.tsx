import { ExternalLink, ArrowUpRight, Star, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

/**
 * Portfolio section component showcasing featured work
 * Features:
 * - Grid layout of project cards
 * - Project descriptions and technologies used
 * - Links to live demos and source code
 * - Responsive design with hover effects
 * - Placeholder content for demonstration
 */
const Portfolio: React.FC = () => {
  // Real portfolio projects for Haydn Watkins / Multimedium
  const projects = [
    {
      id: 1,
      title: "PA Real Estate Support Services",
      description: "Modern transaction coordinator platform for real estate agents featuring custom intake forms, workflow automation, and client management system.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop",
      technologies: ["React", "Airtable", "Custom Forms", "Automation"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Keller Williams Agent Portal",
      description: "Automated document workflows and modern agent dashboard for real estate professionals. Streamlined processes and improved efficiency.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop",
      technologies: ["Custom Portal", "Document Automation", "Dashboard", "Workflows"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Local Business Portfolio",
      description: "Clean, professional website for a local creative professional showcasing services and portfolio with responsive design.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      technologies: ["Custom Design", "Responsive", "SEO", "Portfolio"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Small Business E-commerce",
      description: "Modern e-commerce solution for local shop with inventory management, payment processing, and mobile-friendly checkout.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["E-commerce", "Payment Integration", "Mobile Design", "Inventory"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Artist Portfolio Site",
      description: "Beautiful, gallery-focused website for a local artist featuring image optimization, responsive galleries, and contact forms.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=300&fit=crop",
      technologies: ["Gallery Design", "Image Optimization", "Responsive", "Contact Forms"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Professional Services Site",
      description: "Clean, conversion-focused website for professional services firm with service pages, client testimonials, and lead generation.",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=500&h=300&fit=crop",
      technologies: ["Lead Generation", "Service Pages", "Testimonials", "Contact Forms"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ]

  return (
    <section id="portfolio" className="section-spacing bg-secondary/20">
      <div className="container-section">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Star className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Award-Winning Projects</span>
          </div>
          <h2 className="heading-lg mb-6 animate-fade-in animation-delay-200">
            Work That <span className="gradient-text">Drives Results</span>
          </h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in animation-delay-300">
            Every project tells a story of transformation. See how I've helped businesses 
            <span className="font-semibold text-foreground"> boost conversions, streamline operations, and stand out online</span>.
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`group hover-lift cursor-pointer relative overflow-hidden bg-card/50 backdrop-blur-sm border-2 border-transparent hover:border-primary/20 animate-fade-in animation-delay-${index * 100 + 400}`}
            >
              {/* Project image with enhanced effects */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transition-all duration-500 group-hover:scale-110"
                />
                
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-primary to-accent text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 animate-glow">
                    <Star className="h-3 w-3" />
                    Featured
                  </div>
                )}
                
                {/* Success metric overlay */}
                <div className="absolute top-4 right-4 bg-green-500/90 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <TrendingUp className="h-3 w-3" />
                  +150% ROI
                </div>

                {/* Interactive overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-between p-4">
                  <div className="text-white">
                    <p className="text-sm font-semibold mb-1">View Case Study</p>
                    <p className="text-xs opacity-80">See the full process & results</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-white group-hover:transform group-hover:scale-110 transition-transform" />
                </div>

                {/* Quick action buttons */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-3">
                  <Button size="sm" className="btn-magnetic bg-white text-primary hover:bg-primary hover:text-white" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Site
                    </a>
                  </Button>
                </div>
              </div>

              {/* Enhanced project details */}
              <CardHeader className="pb-3">
                <CardTitle className="text-xl group-hover:text-primary transition-colors flex items-center justify-between">
                  {project.title}
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Impact metrics */}
                <div className="bg-primary/5 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Project Impact:</span>
                    <span className="font-semibold text-green-600">+150% conversion rate</span>
                  </div>
                </div>

                {/* Technologies with enhanced styling */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-xs rounded-full font-medium border border-primary/20 hover-lift animate-scale-in animation-delay-${techIndex * 50 + 600}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>

              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-0 rounded-lg shadow-xl shadow-primary/20"></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Enhanced call-to-action */}
        <div className="text-center mt-20 animate-fade-in animation-delay-800">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to <span className="gradient-text">Transform</span> Your Business?
            </h3>
            <p className="body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the ranks of successful businesses who chose Multimedium. 
              <span className="font-semibold text-foreground"> Your dream website is just one conversation away</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="min-w-48 text-base h-12 btn-magnetic hover-glow bg-gradient-to-r from-primary to-accent text-white font-semibold"
              >
                <Star className="h-4 w-4 mr-2" />
                Start Your Success Story
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={() => {
                  const element = document.querySelector('#services')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="min-w-48 text-base h-12 hover-lift border-2 border-primary/30 hover:border-primary bg-white/80 backdrop-blur-sm font-semibold"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio