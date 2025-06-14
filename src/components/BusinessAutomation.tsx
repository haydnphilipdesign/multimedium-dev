import React, { useState, useEffect } from 'react'
import { 
  Zap, 
  Target, 
  TrendingUp, 
  Users, 
  Mail, 
  Calendar, 
  CheckCircle,
  Bell,
  BarChart3
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

/**
 * Advanced business automation and lead nurturing system
 * Implements sophisticated lead scoring, nurturing, and conversion optimization
 */

interface AutomationMetric {
  label: string
  value: string
  change: string
  trend: 'up' | 'down'
  icon: React.ReactNode
}

interface LeadScoringRule {
  trigger: string
  points: number
  action: string
  description: string
}

const BusinessAutomation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [liveMetrics, setLiveMetrics] = useState<AutomationMetric[]>([])

  // Simulate real-time metrics updates
  useEffect(() => {
    const updateMetrics = () => {
      setLiveMetrics([
        {
          label: 'Enterprise Leads This Month',
          value: '47',
          change: '+23%',
          trend: 'up',
          icon: <Target className="h-5 w-5" />
        },
        {
          label: 'Average Deal Size',
          value: '$127K',
          change: '+45%',
          trend: 'up',
          icon: <TrendingUp className="h-5 w-5" />
        },
        {
          label: 'Conversion Rate',
          value: '34%',
          change: '+12%',
          trend: 'up',
          icon: <Users className="h-5 w-5" />
        },
        {
          label: 'Pipeline Value',
          value: '$2.1M',
          change: '+67%',
          trend: 'up',
          icon: <BarChart3 className="h-5 w-5" />
        }
      ])
    }

    updateMetrics()
    const interval = setInterval(updateMetrics, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const automationFeatures = [
    {
      category: 'Lead Generation',
      icon: <Target className="h-6 w-6" />,
      features: [
        {
          name: 'LinkedIn Outreach Automation',
          description: 'AI-powered outreach to C-suite executives with personalized messaging',
          status: 'active',
          results: '340% increase in qualified leads'
        },
        {
          name: 'Content Marketing Engine',
          description: 'Automated blog posting, social media, and thought leadership content',
          status: 'active',
          results: '250% increase in organic traffic'
        },
        {
          name: 'SEO Automation',
          description: 'Enterprise keyword targeting and technical SEO optimization',
          status: 'active',
          results: 'Page 1 rankings for 47 enterprise keywords'
        }
      ]
    },
    {
      category: 'Lead Nurturing',
      icon: <Mail className="h-6 w-6" />,
      features: [
        {
          name: 'Multi-Touch Email Sequences',
          description: '12-month nurturing campaigns for enterprise prospects',
          status: 'active',
          results: '67% engagement rate (vs 18% industry avg)'
        },
        {
          name: 'Behavioral Trigger Campaigns',
          description: 'Automated responses based on website behavior and engagement',
          status: 'active',
          results: '45% increase in meeting bookings'
        },
        {
          name: 'Personal Video Messaging',
          description: 'AI-assisted personalized video creation for high-value prospects',
          status: 'active',
          results: '78% open rate, 34% response rate'
        }
      ]
    },
    {
      category: 'Conversion Optimization',
      icon: <TrendingUp className="h-6 w-6" />,
      features: [
        {
          name: 'Dynamic Proposal Generation',
          description: 'Automated proposal creation based on prospect profile and needs',
          status: 'active',
          results: '85% faster proposal delivery'
        },
        {
          name: 'A/B Testing Framework',
          description: 'Continuous optimization of all conversion points',
          status: 'active',
          results: '156% improvement in conversion rates'
        },
        {
          name: 'Predictive Lead Scoring',
          description: 'AI-powered lead scoring based on 47+ data points',
          status: 'active',
          results: '234% increase in sales efficiency'
        }
      ]
    }
  ]

  const leadScoringRules: LeadScoringRule[] = [
    {
      trigger: 'Fortune 500 company email domain',
      points: 50,
      action: 'Immediate notification + priority routing',
      description: 'Automatically identifies enterprise prospects'
    },
    {
      trigger: 'C-Suite title (CEO, CTO, CMO, etc.)',
      points: 40,
      action: 'Personal video message + direct outreach',
      description: 'Targets decision makers with executive-level engagement'
    },
    {
      trigger: 'Downloads enterprise lead magnet',
      points: 35,
      action: 'Advanced nurture sequence + consultation offer',
      description: 'Indicates serious enterprise-level interest'
    },
    {
      trigger: 'Views pricing page 3+ times',
      points: 30,
      action: 'ROI calculator + case study email',
      description: 'Shows strong purchase intent'
    },
    {
      trigger: 'Spends 5+ minutes on case studies',
      points: 25,
      action: 'Relevant case study follow-up',
      description: 'Demonstrates deep engagement with results'
    },
    {
      trigger: 'Company revenue >$50M (from database)',
      points: 45,
      action: 'Enterprise qualification call booking',
      description: 'Identifies high-value prospects automatically'
    }
  ]

  const nurturingSequences = [
    {
      name: 'Fortune 500 Executive Track',
      duration: '12 months',
      touchpoints: 47,
      conversionRate: '23%',
      description: 'Sophisticated nurturing for C-suite decision makers with enterprise budgets'
    },
    {
      name: 'Mid-Market Decision Maker',
      duration: '6 months',
      touchpoints: 23,
      conversionRate: '34%',
      description: 'Strategic nurturing for growing companies with $50K+ budgets'
    },
    {
      name: 'Technical Influencer Track',
      duration: '9 months',
      touchpoints: 31,
      conversionRate: '19%',
      description: 'Technical content for CTOs and technical decision makers'
    }
  ]

  const tabs = [
    { id: 'overview', label: 'Live Dashboard', icon: <BarChart3 className="h-4 w-4" /> },
    { id: 'automation', label: 'Automation Engine', icon: <Zap className="h-4 w-4" /> },
    { id: 'scoring', label: 'Lead Scoring', icon: <Target className="h-4 w-4" /> },
    { id: 'nurturing', label: 'Nurture Sequences', icon: <Mail className="h-4 w-4" /> }
  ]

  return (
    <section id="business-automation" className="section-spacing bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Business Automation Engine</span>
          </div>
          <h2 className="heading-lg mb-6 animate-fade-in animation-delay-200">
            Advanced <span className="gradient-text">Lead Generation</span> Automation
          </h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in animation-delay-300">
            Sophisticated automation systems that identify, nurture, and convert high-value enterprise prospects. 
            <span className="font-semibold text-foreground"> Built for Fortune 500 lead generation at scale</span>.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              onClick={() => setActiveTab(tab.id)}
              className="flex items-center gap-2"
            >
              {tab.icon}
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {/* Live Dashboard */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-fade-in">
              {/* Live Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {liveMetrics.map((metric, index) => (
                  <Card key={index} className="relative overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
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

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Live Lead Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { action: 'New Fortune 500 lead', company: 'Microsoft subsidiary', time: '2 minutes ago', score: 95 },
                      { action: 'Enterprise proposal viewed', company: 'Healthcare Corp', time: '8 minutes ago', score: 87 },
                      { action: 'CEO downloaded playbook', company: 'FinTech Solutions', time: '23 minutes ago', score: 92 },
                      { action: 'Meeting scheduled', company: 'Manufacturing Inc', time: '1 hour ago', score: 78 }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className={`w-3 h-3 rounded-full ${
                            activity.score >= 90 ? 'bg-green-500' : activity.score >= 80 ? 'bg-yellow-500' : 'bg-blue-500'
                          }`} />
                          <div>
                            <div className="font-medium">{activity.action}</div>
                            <div className="text-sm text-muted-foreground">{activity.company}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">Score: {activity.score}</div>
                          <div className="text-xs text-muted-foreground">{activity.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Automation Engine */}
          {activeTab === 'automation' && (
            <div className="space-y-8 animate-fade-in">
              {automationFeatures.map((category, categoryIndex) => (
                <Card key={categoryIndex}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {category.icon}
                      </div>
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {category.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="p-4 border border-border rounded-lg">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-semibold">{feature.name}</h4>
                            <div className="flex items-center gap-1 text-green-600">
                              <CheckCircle className="h-4 w-4" />
                              <span className="text-xs font-medium">{feature.status.toUpperCase()}</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                            <div className="text-xs font-medium text-green-800">Results:</div>
                            <div className="text-sm text-green-700">{feature.results}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Lead Scoring */}
          {activeTab === 'scoring' && (
            <div className="space-y-8 animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Intelligent Lead Scoring Matrix</CardTitle>
                  <p className="text-muted-foreground">
                    AI-powered scoring system that identifies and prioritizes high-value enterprise prospects
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {leadScoringRules.map((rule, index) => (
                      <div key={index} className="p-4 border border-border rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="font-semibold mb-1">{rule.trigger}</div>
                            <div className="text-sm text-muted-foreground">{rule.description}</div>
                          </div>
                          <div className="text-right ml-4">
                            <div className="text-2xl font-bold text-primary">+{rule.points}</div>
                            <div className="text-xs text-muted-foreground">points</div>
                          </div>
                        </div>
                        <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                          <div className="text-xs font-medium text-primary mb-1">Automated Action:</div>
                          <div className="text-sm">{rule.action}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Nurture Sequences */}
          {activeTab === 'nurturing' && (
            <div className="space-y-8 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {nurturingSequences.map((sequence, index) => (
                  <Card key={index} className="relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-bl-3xl" />
                    <CardHeader>
                      <CardTitle className="text-lg">{sequence.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{sequence.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-2xl font-bold text-primary">{sequence.duration}</div>
                            <div className="text-xs text-muted-foreground">Duration</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-green-600">{sequence.conversionRate}</div>
                            <div className="text-xs text-muted-foreground">Conversion Rate</div>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-medium mb-2">{sequence.touchpoints} Total Touchpoints</div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Mail className="h-3 w-3" />
                            <span>Email, Video, Social, Direct Mail</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Nurturing Performance */}
              <Card>
                <CardHeader>
                  <CardTitle>Nurturing Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">89%</div>
                      <div className="text-sm text-muted-foreground">Email Open Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">34%</div>
                      <div className="text-sm text-muted-foreground">Click-Through Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">12x</div>
                      <div className="text-sm text-muted-foreground">Revenue Per Lead</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-2">67%</div>
                      <div className="text-sm text-muted-foreground">MQL to SQL Rate</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/10">
          <h3 className="text-2xl font-bold mb-4">
            Ready to <span className="gradient-text">Automate Your Growth</span>?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's implement these same automation systems for your business. Get enterprise-level lead generation 
            and nurturing working for you 24/7.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover-glow">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Strategy Session
          </Button>
        </div>
      </div>
    </section>
  )
}

export default BusinessAutomation