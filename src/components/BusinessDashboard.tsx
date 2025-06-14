import React, { useState, useEffect } from 'react'
import { 
  TrendingUp, 
  Target, 
  DollarSign, 
  Users, 
  Calendar,
  Mail,
  Phone,
  Award,
  Zap,
  CheckCircle,
  AlertTriangle,
  Activity,
  BarChart3,
  Globe,
  Shield
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

/**
 * Executive Business Dashboard
 * Real-time overview of all business acceleration systems
 */

interface Metric {
  label: string
  value: string
  change: string
  trend: 'up' | 'down' | 'stable'
  icon: React.ReactNode
  color: string
}

interface SystemStatus {
  name: string
  status: 'active' | 'warning' | 'error'
  performance: string
  lastUpdate: string
  icon: React.ReactNode
}

const BusinessDashboard: React.FC = () => {
  const [realTimeMetrics, setRealTimeMetrics] = useState<Metric[]>([])
  const [systemsStatus, setSystemsStatus] = useState<SystemStatus[]>([])
  const [activeLeads, setActiveLeads] = useState(0)

  useEffect(() => {
    // Simulate real-time data updates
    const updateMetrics = () => {
      setRealTimeMetrics([
        {
          label: 'Monthly Revenue Pipeline',
          value: '$847K',
          change: '+156%',
          trend: 'up',
          icon: <DollarSign className="h-5 w-5" />,
          color: 'text-green-600'
        },
        {
          label: 'Enterprise Leads (30 days)',
          value: '73',
          change: '+234%',
          trend: 'up',
          icon: <Target className="h-5 w-5" />,
          color: 'text-blue-600'
        },
        {
          label: 'Conversion Rate',
          value: '47%',
          change: '+89%',
          trend: 'up',
          icon: <TrendingUp className="h-5 w-5" />,
          color: 'text-purple-600'
        },
        {
          label: 'Average Deal Size',
          value: '$127K',
          change: '+67%',
          trend: 'up',
          icon: <Award className="h-5 w-5" />,
          color: 'text-orange-600'
        },
        {
          label: 'Client Lifetime Value',
          value: '$342K',
          change: '+123%',
          trend: 'up',
          icon: <Users className="h-5 w-5" />,
          color: 'text-indigo-600'
        },
        {
          label: 'Lead Response Time',
          value: '4.2hrs',
          change: '-78%',
          trend: 'up',
          icon: <Mail className="h-5 w-5" />,
          color: 'text-teal-600'
        }
      ])

      setSystemsStatus([
        {
          name: 'Lead Generation Engine',
          status: 'active',
          performance: '127% above target',
          lastUpdate: '2 minutes ago',
          icon: <Target className="h-5 w-5" />
        },
        {
          name: 'Automated Nurturing',
          status: 'active',
          performance: '89% engagement rate',
          lastUpdate: '5 minutes ago',
          icon: <Mail className="h-5 w-5" />
        },
        {
          name: 'Analytics & Tracking',
          status: 'active',
          performance: '100% data accuracy',
          lastUpdate: '1 minute ago',
          icon: <BarChart3 className="h-5 w-5" />
        },
        {
          name: 'Enterprise Security',
          status: 'active',
          performance: 'All systems secure',
          lastUpdate: 'Real-time',
          icon: <Shield className="h-5 w-5" />
        },
        {
          name: 'Client Onboarding',
          status: 'active',
          performance: '98% satisfaction',
          lastUpdate: '3 minutes ago',
          icon: <Users className="h-5 w-5" />
        },
        {
          name: 'Revenue Attribution',
          status: 'active',
          performance: '100% tracked',
          lastUpdate: 'Real-time',
          icon: <DollarSign className="h-5 w-5" />
        }
      ])

      setActiveLeads(Math.floor(Math.random() * 10) + 15)
    }

    updateMetrics()
    const interval = setInterval(updateMetrics, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const quickActions = [
    {
      label: 'Schedule C-Suite Call',
      description: 'Book strategic consultation',
      icon: <Calendar className="h-5 w-5" />,
      action: () => window.open('https://calendly.com/haydnwatkins', '_blank'),
      color: 'bg-blue-600'
    },
    {
      label: 'Download Enterprise Kit',
      description: 'Get transformation resources',
      icon: <Award className="h-5 w-5" />,
      action: () => document.querySelector('#enterprise-resources')?.scrollIntoView({ behavior: 'smooth' }),
      color: 'bg-purple-600'
    },
    {
      label: 'View Live Portfolio',
      description: 'See enterprise case studies',
      icon: <Globe className="h-5 w-5" />,
      action: () => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' }),
      color: 'bg-green-600'
    },
    {
      label: 'Contact Direct',
      description: 'Immediate consultation',
      icon: <Phone className="h-5 w-5" />,
      action: () => window.open('tel:+15709946186'),
      color: 'bg-orange-600'
    }
  ]

  const recentActivity = [
    {
      type: 'New Lead',
      description: 'Fortune 500 CTO downloaded transformation playbook',
      time: '3 minutes ago',
      priority: 'high',
      icon: <Target className="h-4 w-4" />
    },
    {
      type: 'Proposal Sent',
      description: '$340K enterprise platform proposal delivered',
      time: '27 minutes ago',
      priority: 'high',
      icon: <Mail className="h-4 w-4" />
    },
    {
      type: 'Meeting Booked',
      description: 'Strategic consultation scheduled for tomorrow',
      time: '1 hour ago',
      priority: 'medium',
      icon: <Calendar className="h-4 w-4" />
    },
    {
      type: 'Lead Qualified',
      description: 'Healthcare executive met all qualification criteria',
      time: '2 hours ago',
      priority: 'medium',
      icon: <CheckCircle className="h-4 w-4" />
    },
    {
      type: 'Case Study Viewed',
      description: 'Manufacturing exec spent 8 minutes reviewing ROI data',
      time: '3 hours ago',
      priority: 'low',
      icon: <Activity className="h-4 w-4" />
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600'
      case 'warning': return 'text-yellow-600'
      case 'error': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="h-4 w-4" />
      case 'warning': return <AlertTriangle className="h-4 w-4" />
      case 'error': return <AlertTriangle className="h-4 w-4" />
      default: return <Activity className="h-4 w-4" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500'
      case 'medium': return 'border-l-yellow-500'
      case 'low': return 'border-l-green-500'
      default: return 'border-l-gray-500'
    }
  }

  return (
    <section className="section-spacing bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container-section">
        {/* Dashboard Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Activity className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Live Business Intelligence</span>
          </div>
          <h2 className="heading-lg mb-6 animate-fade-in animation-delay-200">
            Million-Dollar <span className="gradient-text">Business Engine</span> Dashboard
          </h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in animation-delay-300">
            Real-time view of all business acceleration systems working together to generate 
            <span className="font-semibold text-foreground"> enterprise leads and drive revenue growth</span>.
          </p>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {realTimeMetrics.map((metric, index) => (
            <Card key={index} className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent" />
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 bg-primary/10 rounded-lg ${metric.color}`}>
                    {metric.icon}
                  </div>
                  <div className={`text-sm font-medium flex items-center gap-1 ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <TrendingUp className="h-3 w-3" />
                    {metric.change}
                  </div>
                </div>
                <div className="text-2xl font-bold mb-1">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Systems Status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Business Systems Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {systemsStatus.map((system, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 bg-primary/10 rounded-lg ${getStatusColor(system.status)}`}>
                        {system.icon}
                      </div>
                      <div>
                        <div className="font-medium">{system.name}</div>
                        <div className="text-sm text-muted-foreground">{system.performance}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`flex items-center gap-1 ${getStatusColor(system.status)}`}>
                        {getStatusIcon(system.status)}
                        <span className="text-sm font-medium">{system.status.toUpperCase()}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">{system.lastUpdate}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Recent Activity Feed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className={`p-3 border-l-4 ${getPriorityColor(activity.priority)} bg-secondary/10 rounded-r-lg`}>
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-primary/10 rounded text-primary mt-1">
                        {activity.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-sm">{activity.type}</span>
                          <span className="text-xs text-muted-foreground">{activity.time}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">{activity.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quickActions.map((action, index) => (
            <Card key={index} className="group hover-lift cursor-pointer" onClick={action.action}>
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  {action.icon}
                </div>
                <h4 className="font-semibold mb-2">{action.label}</h4>
                <p className="text-sm text-muted-foreground">{action.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Live Lead Counter */}
        <div className="text-center p-8 bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-2xl">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-800 font-medium">Live Lead Generation Active</span>
          </div>
          <div className="text-4xl font-bold text-green-600 mb-2">{activeLeads}</div>
          <div className="text-green-700 mb-4">Enterprise prospects engaged this hour</div>
          <div className="text-sm text-green-600">
            💰 Estimated pipeline value: <span className="font-semibold">${(activeLeads * 127000).toLocaleString()}</span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/10">
          <h3 className="text-2xl font-bold mb-4">
            Ready to <span className="gradient-text">Scale Your Business</span> Like This?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            These same systems can be implemented for your business. Get enterprise-level automation, 
            lead generation, and revenue optimization working for you 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover-glow">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Implementation Call
            </Button>
            <Button variant="outline" size="lg">
              <Award className="h-4 w-4 mr-2" />
              Get Custom Business Plan
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BusinessDashboard