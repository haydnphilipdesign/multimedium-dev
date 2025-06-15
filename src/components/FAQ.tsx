import React, { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface FAQItem {
  id: number
  question: string
  answer: string
  category: 'pricing' | 'process' | 'technical' | 'general'
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqData: FAQItem[] = [
    {
      id: 1,
      category: 'pricing',
      question: 'How much does a custom website cost?',
      answer: 'Our custom websites range from $2,500 to $50K+ depending on complexity. Most small businesses invest $3,500-$7,500 for a professional website that generates leads and drives revenue. We provide transparent pricing with no hidden fees, and every project includes a detailed quote after our free strategy call.'
    },
    {
      id: 2,
      category: 'process',
      question: 'How long does it take to build a website?',
      answer: 'Typical timeline is 2-6 weeks from project start to launch. This includes strategy, design, development, content creation, and testing. We provide weekly updates and involve you in key decisions to ensure the final product exceeds your expectations.'
    },
    {
      id: 3,
      category: 'technical',
      question: 'Will my website work on mobile devices?',
      answer: 'Absolutely! All our websites are built mobile-first since 70%+ of web traffic comes from mobile devices. We test extensively across all devices and browsers to ensure your site looks perfect and functions flawlessly everywhere your customers are.'
    },
    {
      id: 4,
      category: 'general',
      question: 'Do you work with businesses outside Pennsylvania?',
      answer: 'Yes! While we\'re based in Pennsylvania, we work with clients nationwide. We conduct strategy calls via video conference and manage projects digitally. Many of our best relationships are with remote clients who found us online.'
    },
    {
      id: 5,
      category: 'technical',
      question: 'Will I be able to update my website myself?',
      answer: 'Yes, we build websites with user-friendly content management systems. We provide training and documentation so you can easily update text, images, and basic content. For complex changes, we offer ongoing support packages.'
    },
    {
      id: 6,
      category: 'process',
      question: 'What if I don\'t like the initial design?',
      answer: 'We include up to 3 rounds of revisions in every project to ensure you\'re completely satisfied. Our collaborative process involves you at each stage, so major changes are rare. We don\'t consider the project complete until you\'re thrilled with the result.'
    },
    {
      id: 7,
      category: 'technical',
      question: 'Do you provide website hosting and maintenance?',
      answer: 'Yes, we offer hosting and maintenance packages starting at $99/month. This includes security updates, backups, performance monitoring, and priority support. We also provide guidance if you prefer to manage hosting yourself.'
    },
    {
      id: 8,
      category: 'general',
      question: 'What makes Multimedium different from other web designers?',
      answer: 'We focus on ROI-driven design that actually grows your business. Unlike template-based competitors, we create custom solutions tailored to your specific goals. Our Pennsylvania-based team provides personal service, and we\'re invested in your long-term success.'
    },
    {
      id: 9,
      category: 'pricing',
      question: 'Do you offer payment plans?',
      answer: 'Yes! We offer flexible payment options including 50% upfront + 50% at launch, or extended payment plans for larger projects. We want to make professional web design accessible to growing businesses.'
    },
    {
      id: 10,
      category: 'process',
      question: 'What do you need from me to get started?',
      answer: 'Just your vision and goals! We\'ll guide you through everything else. During our strategy call, we\'ll discuss your business, target audience, and objectives. We can work with existing content or help create everything from scratch.'
    }
  ]

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const categoryColors = {
    pricing: 'border-green-200 bg-green-50/50',
    process: 'border-blue-200 bg-blue-50/50', 
    technical: 'border-purple-200 bg-purple-50/50',
    general: 'border-orange-200 bg-orange-50/50'
  }

  return (
    <section id="faq" className="section-spacing bg-secondary/10">
      <div className="container-section">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <HelpCircle className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Common Questions Answered</span>
          </div>
          <h2 className="heading-lg mb-6 animate-fade-in animation-delay-200">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in animation-delay-300">
            Get instant answers to the questions we hear most often from business owners considering a new website. 
            <span className="font-semibold text-foreground"> Still have questions? We're here to help!</span>
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <Card 
              key={item.id}
              className={`hover-lift cursor-pointer border-2 transition-all duration-300 ${
                openItems.includes(item.id) 
                  ? `${categoryColors[item.category]} shadow-lg` 
                  : 'bg-white border-gray-200 hover:border-primary/20'
              } animate-fade-in animation-delay-${index * 50 + 400}`}
              onClick={() => toggleItem(item.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2 pr-4">
                      {item.question}
                    </h3>
                    {openItems.includes(item.id) && (
                      <div className="text-muted-foreground leading-relaxed animate-fade-in">
                        {item.answer}
                      </div>
                    )}
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {openItems.includes(item.id) ? (
                      <ChevronUp className="h-5 w-5 text-primary" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in animation-delay-800">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10 backdrop-blur-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Still Have <span className="gradient-text">Questions?</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Every business is unique, and we'd love to discuss your specific needs. 
              <span className="font-semibold text-foreground"> Book a free 30-minute strategy call</span> 
              to get personalized answers and see how we can help grow your business.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-gradient-to-r from-primary to-accent text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Your Questions Answered
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ