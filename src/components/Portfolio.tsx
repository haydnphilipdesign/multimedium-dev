import React from 'react'
import { ExternalLink, ArrowUpRight, Star, TrendingUp, X } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { trackPortfolioView } from './AdvancedAnalytics'
import RobustImage from './RobustImage'

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
  // State for lightbox modal
  const [selectedProject, setSelectedProject] = React.useState<any>(null)

  // Real portfolio projects for Haydn Watkins / Multimedium
  // Using actual website screenshots from /public/portfolio/
  const projects = [
    {
      id: 1,
      title: "PA Real Estate Support",
      description: "Custom real estate platform that transformed lead generation and client management. Built with React and integrated CRM system, resulting in 250% increase in qualified leads and $850K additional revenue in first year.",
      image: "/portfolio/pa-real-estate.webp",
      technologies: ["React Development", "CRM Integration", "Lead Generation Forms", "Workflow Automation", "Responsive Design"],
      liveUrl: "https://parealestatesupport.com",
      githubUrl: "#",
      featured: true,
      impact: "+250% leads generated",
      revenue: "$850K additional revenue",
      timeline: "8 weeks",
      services: ["Custom Web Development", "CRM Integration", "Lead Generation", "Responsive Design"]
    },
    {
      id: 2,
      title: "Blissful Existence Healing Acres",
      description: "Wellness center website that drove 400% increase in online bookings and 180% revenue growth. SEO-optimized WordPress site with custom booking system increased organic traffic by 320% and reduced booking cancellations by 60%.",
      image: "/portfolio/blissful-existence.webp",
      technologies: ["WordPress Development", "Booking System Integration", "SEO Optimization", "Mobile Responsive", "Content Management"],
      liveUrl: "https://behealingacres.com",
      githubUrl: "#",
      featured: true,
      impact: "+400% online bookings",
      revenue: "+180% revenue growth",
      timeline: "6 weeks",
      services: ["WordPress Development", "SEO Optimization", "Booking Systems", "Mobile Design"]
    },
    {
      id: 3,
      title: "The Falls Community Association",
      description: "Modern community portal that increased member engagement by 180% and reduced administrative costs by 45%. Custom React application with resident portal, document management, and event planning tools streamlined operations and improved satisfaction scores.",
      image: "/portfolio/falls_community.webp",
      technologies: ["React Development", "Content Management System", "User Portal", "Responsive Web Design", "Database Integration"],
      liveUrl: "https://falls.multimedium.dev",
      githubUrl: "#",
      featured: true,
      impact: "+180% member engagement",
      revenue: "-45% admin costs saved",
      timeline: "10 weeks",
      services: ["React Development", "Content Management", "User Portals", "Responsive Design"]
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
              onClick={() => setSelectedProject(project)}
            >
              {/* Project image with enhanced effects */}
              <div className="relative overflow-hidden">
                <RobustImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transition-all duration-500 group-hover:scale-110"
                  fallbackSrc={project.image.replace('.webp', '.jpg')}
                  placeholder="Loading project image..."
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
                  {project.impact}
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
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => trackPortfolioView(project.title)}
                    >
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
                {/* Enhanced impact metrics */}
                <div className="space-y-2 mb-4">
                  <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg p-3">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-green-700 font-medium">Results:</span>
                      <span className="font-bold text-green-800">{project.impact}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-green-700 font-medium">Revenue Impact:</span>
                      <span className="font-bold text-green-800">{project.revenue}</span>
                    </div>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Completed in:</span>
                      <span className="font-semibold text-primary">{project.timeline}</span>
                    </div>
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
                  const element = document.querySelector('#pricing')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="min-w-48 text-base h-12 hover-lift border-2 border-primary/30 hover:border-primary bg-white/80 backdrop-blur-sm font-semibold"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <p className="text-muted-foreground">{selectedProject.description}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedProject(null)}
                className="ml-4"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Iframe */}
            <div className="relative" style={{ height: '70vh' }}>
              <iframe
                src={selectedProject.liveUrl}
                className="w-full h-full border-0"
                title={selectedProject.title}
                loading="lazy"
              />
            </div>
            
            {/* Modal Footer */}
            <div className="p-6 border-t bg-gray-50 flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Button asChild>
                <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Site
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Portfolio